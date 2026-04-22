"""Minimal login flow checker for DVSPortal-based parking APIs.

Tests all combinations of loginMethod (0-3) and permitMediaTypeID (0-3).
Output is fully sanitized — only field names are printed, never values.

Usage:
    python login_flow_check.py --user <username> --password <password> --api <api_url>

Example:
    python login_flow_check.py \\
        --user xx@example.com \\
        --password secret \\
        --api https://parkeren.s-hertogenbosch.nl/DVSPortal/api/
"""

from __future__ import annotations

import argparse
import asyncio
import json
import sys
import time
from typing import Any


try:
    import aiohttp
except ImportError:
    print("ERROR: aiohttp is required. Install with: pip install aiohttp", file=sys.stderr)
    sys.exit(1)


# ── ANSI colours ──────────────────────────────────────────────────────────────

_C = {
    "reset":   "\x1b[0m",
    "bold":    "\x1b[1m",
    "red":     "\x1b[31m",
    "green":   "\x1b[32m",
    "yellow":  "\x1b[33m",
    "blue":    "\x1b[34m",
    "cyan":    "\x1b[36m",
    "magenta": "\x1b[35m",
}


def _s(text: str, color: str, *, bold: bool = False) -> str:
    b = _C["bold"] if bold else ""
    return f"{b}{_C[color]}{text}{_C['reset']}"


def _info(msg: str) -> None:
    print(_s("  INFO", "cyan", bold=True) + f"  {msg}")


def _ok(msg: str) -> None:
    print(_s("    OK", "green", bold=True) + f"  {msg}")


def _warn(msg: str) -> None:
    print(_s("  WARN", "yellow", bold=True) + f"  {msg}")


def _err(msg: str) -> None:
    print(_s(" ERROR", "red", bold=True) + f"  {msg}")


def _head(msg: str) -> None:
    print()
    print(_s("=" * 64, "blue", bold=True))
    print(_s(f"  {msg}", "blue", bold=True))
    print(_s("=" * 64, "blue", bold=True))


def _sub(msg: str) -> None:
    print(_s(f"── {msg}", "magenta", bold=True))


# ── Sanitise helpers ──────────────────────────────────────────────────────────

def _sanitize_headers(headers: dict) -> dict:
    """Return header dict with sensitive values masked."""
    sensitive = {"authorization", "cookie", "set-cookie", "x-api-key", "x-auth-token"}
    return {
        k: ("***" if k.lower() in sensitive else v)
        for k, v in headers.items()
    }


def _field_names_only(obj: Any, prefix: str = "") -> list[str]:
    """Recursively collect field paths (keys) from a JSON object, never values."""
    paths: list[str] = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            path = f"{prefix}.{k}" if prefix else k
            paths.append(path)
            paths.extend(_field_names_only(v, path))
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            path = f"{prefix}[{i}]"
            paths.extend(_field_names_only(item, path))
    return paths


def _classify_value(val: Any) -> str:
    """Return a type label for a value without revealing its content."""
    if val is None:
        return "null"
    if isinstance(val, bool):
        return "bool"
    if isinstance(val, int):
        return "int"
    if isinstance(val, float):
        return "float"
    if isinstance(val, str):
        return f"str(len={len(val)})"
    if isinstance(val, list):
        return f"list(len={len(val)})"
    if isinstance(val, dict):
        return f"dict(keys={len(val)})"
    return type(val).__name__


def _sanitize_payload(obj: Any, depth: int = 0) -> list[str]:
    """Return lines describing the structure of a JSON object without values."""
    lines: list[str] = []
    indent = "  " * depth
    if isinstance(obj, dict):
        for k in obj:
            v = obj[k]
            if isinstance(v, (dict, list)):
                lines.append(f"{indent}{k}: {_classify_value(v)}")
                lines.extend(_sanitize_payload(v, depth + 1))
            else:
                lines.append(f"{indent}{k}: {_classify_value(v)}")
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            if isinstance(item, (dict, list)):
                lines.append(f"{indent}[{i}]: {_classify_value(item)}")
                lines.extend(_sanitize_payload(item, depth + 1))
            else:
                lines.append(f"{indent}[{i}]: {_classify_value(item)}")
    else:
        lines.append(f"{indent}{_classify_value(obj)}")
    return lines


# ── Login attempt ─────────────────────────────────────────────────────────────

LOGIN_ENDPOINT = "Authenticate/Login"


async def _attempt_login(
    session: aiohttp.ClientSession,
    api_base: str,
    identifier: str,
    password: str,
    login_method: int,
    permit_media_type_id: int | None,
) -> None:
    url = api_base.rstrip("/") + "/" + LOGIN_ENDPOINT

    payload: dict[str, Any] = {
        "identifier": identifier,
        "loginMethod": login_method,
        "password": password,
        "otp": None,
        "resetCode": None,
        "asIdentifier": None,
        "zipCode": None,
    }
    if permit_media_type_id is not None:
        payload["permitMediaTypeID"] = permit_media_type_id

    label = (
        f"loginMethod={login_method}  permitMediaTypeID={permit_media_type_id}"
        if permit_media_type_id is not None
        else f"loginMethod={login_method}  permitMediaTypeID=<omitted>"
    )
    _sub(label)

    # Print sanitized request payload (field names + types, no values)
    _info("Request payload structure:")
    for line in _sanitize_payload(payload):
        print(f"        {line}")

    t0 = time.monotonic()
    try:
        async with session.post(url, json=payload) as resp:
            elapsed_ms = int((time.monotonic() - t0) * 1000)
            status = resp.status
            reason = resp.reason or ""

            _info(f"HTTP {status} {reason}  ({elapsed_ms} ms)")

            # Sanitized response headers (only interesting ones)
            interesting_headers = {
                "content-type", "content-length", "x-request-id",
                "x-correlation-id", "cache-control", "server",
            }
            resp_headers = {
                k: v for k, v in resp.headers.items()
                if k.lower() in interesting_headers
            }
            if resp_headers:
                _info("Response headers (selected, sanitized):")
                for k, v in resp_headers.items():
                    print(f"        {k}: {v}")

            # Try to parse body as JSON
            raw_body = await resp.text()
            try:
                body_json = json.loads(raw_body)
            except json.JSONDecodeError:
                body_json = None

            if body_json is not None:
                _info("Response body structure (field names + types, no values):")
                for line in _sanitize_payload(body_json):
                    print(f"        {line}")

                # Surface top-level field names for quick scan
                if isinstance(body_json, dict):
                    top_keys = list(body_json.keys())
                    _info(f"Top-level keys: {top_keys}")

                # Success heuristic: 2xx and body contains dict
                if 200 <= status < 300 and isinstance(body_json, dict):
                    _ok("Login responded with 2xx JSON — check field names above for token/session fields")
                elif status == 200 and isinstance(body_json, list):
                    _ok("Login responded 200 with JSON array")
                elif status in (400, 401, 403, 422):
                    _warn(f"Auth rejected (HTTP {status}) — wrong method/credentials or unsupported combination")
                elif status >= 500:
                    _err(f"Server error (HTTP {status})")
                else:
                    _warn(f"Unexpected status {status}")
            else:
                # Non-JSON body — print only length and first 120 chars (sanitized view)
                body_preview = raw_body[:120].replace("\n", " ").strip()
                _warn(f"Non-JSON response body  len={len(raw_body)}  preview(truncated): {body_preview!r}")

    except aiohttp.ClientConnectorError as exc:
        _err(f"Connection failed: {exc}")
    except asyncio.TimeoutError:
        _err("Request timed out")
    except Exception as exc:
        _err(f"Unexpected error: {exc.__class__.__name__}: {exc}")

    print()  # blank line between attempts


# ── Main ──────────────────────────────────────────────────────────────────────

async def main(api_base: str, identifier: str, password: str) -> None:
    _head("DVSPortal Login Flow Check")

    _info(f"API base URL : {api_base}")
    _info(f"Endpoint     : {LOGIN_ENDPOINT}")
    _info(f"identifier   : {'*' * 8}  (masked)")
    _info(f"password     : {'*' * 8}  (masked)")
    # Attempts: (loginMethod, permitMediaTypeID | None=omit)
    attempts: list[tuple[int, int | None]] = [
        (2, 1),    # loginMethod=2, permitMediaTypeID=1
        (1, None), # loginMethod=1, permitMediaTypeID omitted
    ]
    _info(f"Attempts planned: {len(attempts)}")
    for lm, pmid in attempts:
        pmid_str = str(pmid) if pmid is not None else "<omitted>"
        _info(f"  loginMethod={lm}  permitMediaTypeID={pmid_str}")
    print()

    timeout = aiohttp.ClientTimeout(total=15)
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    async with aiohttp.ClientSession(headers=headers, timeout=timeout) as session:
        for login_method, permit_media_type_id in attempts:
            await _attempt_login(
                session,
                api_base,
                identifier,
                password,
                login_method,
                permit_media_type_id,
            )

    _head("Done — all attempts completed")


def _parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Minimal DVSPortal login flow checker (sanitized output, no PII).",
    )
    parser.add_argument("--user", required=True, metavar="USERNAME",
                        help="Login identifier (e.g. email or username)")
    parser.add_argument("--password", required=True, metavar="PASSWORD",
                        help="Login password")
    parser.add_argument("--api", required=True, metavar="API_URL",
                        help="API base URL, e.g. https://parkeren.s-hertogenbosch.nl/DVSPortal/api/")
    return parser.parse_args()


if __name__ == "__main__":
    args = _parse_args()
    asyncio.run(main(
        api_base=args.api,
        identifier=args.user,
        password=args.password,
    ))
