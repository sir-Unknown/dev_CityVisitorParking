#!/usr/bin/env python3
"""Check DVSPortal API URLs and perform fake login attempts per municipality."""

import argparse
import re
import sys
from ast import literal_eval
from json import dumps
from json import loads
from pathlib import Path
from ssl import SSLError
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

try:
    import yaml
except ModuleNotFoundError:
    yaml = None  # pylint: disable=invalid-name

PROVIDERS_YAML = Path(
    "/workspaces/ha_City-Visitor-Parking/custom_components/"
    "city_visitor_parking/providers.yaml"
)
LOGIN_PATH = "/login"
TIMEOUT = 10
FAKE_USERNAME = "123456"
FAKE_PASSWORD = "1234"
FAKE_LOGIN_METHOD = 2
MAX_RESPONSE_CHARS = 240
DEFAULT_OUTPUT_FILE = Path(__file__).with_name("dvsportal_api_url_check_report.md")


def _resolve_gui_url(base_url: str) -> str:
    """Resolve a provider base URL to the canonical DVSPortal GUI URL."""
    normalized_base = base_url.rstrip("/")
    if normalized_base.endswith("/DVSPortal"):
        return normalized_base + "/"
    return normalized_base + "/DVSPortal/"


def _resolve_app_env_url(base_url: str) -> str:
    """Resolve the absolute app.env.js URL from a provider base URL."""
    return _resolve_gui_url(base_url).rstrip("/") + "/app.env.js"


def _resolve_api_path(found_url: str, base_url: str) -> str:
    """Resolve a raw apiURL value to an absolute path."""
    if found_url.startswith(("http://", "https://")):
        if found_url.startswith(base_url):
            return found_url[len(base_url) :]
        return found_url
    if found_url.startswith("/"):
        return found_url
    return "/DVSPortal/" + found_url


def _parse_yaml_scalar(raw_value: str) -> str:
    """Parse a plain or quoted scalar from providers.yaml."""
    value = raw_value.strip()
    if not value:
        return ""
    if value[0] in {"'", '"'} and value[-1] == value[0]:
        return str(literal_eval(value))
    return value


def load_providers() -> dict[str, dict[str, str]]:
    """Load providers.yaml including disabled commented-out provider blocks."""
    with open(PROVIDERS_YAML, encoding="utf-8") as handle:
        raw_text = handle.read()

    providers: dict[str, dict[str, str]] = {}
    if yaml is not None:
        loaded = yaml.safe_load(raw_text)
        if isinstance(loaded, dict):
            providers.update(loaded)

    current_key: str | None = None
    current_is_commented = False
    for line in raw_text.splitlines():
        stripped = line.strip()
        if not stripped:
            current_key = None
            current_is_commented = False
            continue

        normalized = stripped
        is_commented = False
        if stripped.startswith("#"):
            normalized = stripped[1:].lstrip()
            is_commented = True

        if not normalized:
            continue

        indent = len(line) - len(line.lstrip(" "))
        if is_commented:
            indent = len(normalized) - len(normalized.lstrip(" "))

        if indent == 0 and normalized.endswith(":"):
            current_key = normalized[:-1]
            current_is_commented = is_commented
            if current_is_commented:
                providers.setdefault(current_key, {})
            continue

        if current_key is None or ":" not in normalized:
            continue

        field_indent = indent if not is_commented else max(indent, 2)
        if field_indent < 2:
            continue

        field, raw_value = normalized.split(":", 1)
        providers.setdefault(current_key, {})[field.strip()] = _parse_yaml_scalar(raw_value)

    return {
        key: value
        for key, value in providers.items()
        if isinstance(value, dict) and value
    }


def fetch_app_env(base_url: str) -> tuple[dict[str, str] | None, str | None]:
    """Fetch app.env.js and return all window.__env.* assignments. Returns (vars_dict, error)."""
    url = _resolve_app_env_url(base_url)
    try:
        with urlopen(url, timeout=TIMEOUT) as resp:  # noqa: S310
            body = resp.read().decode("utf-8", errors="replace")
    except SSLError:
        return None, "SSL certificate error"
    except TimeoutError:
        return None, "timeout"
    except HTTPError as err:
        return None, f"HTTP {err.code}"
    except URLError as err:
        reason = getattr(err, "reason", err)
        if isinstance(reason, TimeoutError):
            return None, "timeout"
        if isinstance(reason, SSLError):
            return None, "SSL certificate error"
        return None, str(reason)
    except Exception as err:  # pylint: disable=broad-exception-caught
        return None, str(err)
    matches = re.findall(r"window\.__env\.(\w+)\s*=\s*['\"]([^'\"]*)['\"]", body)
    if not matches:
        return None, "No window.__env.* variables found in app.env.js"
    return dict(matches), None


def fetch_api_url(base_url: str) -> tuple[str | None, str | None]:
    """Fetch app.env.js and extract apiURL. Returns (api_url, error)."""
    env_vars, error = fetch_app_env(base_url)
    if error:
        return None, error
    api_url = env_vars.get("apiURL")
    if api_url is None:
        return None, "apiURL not found in app.env.js"
    return api_url, None


def fetch_gui_script_usage(gui_url: str) -> tuple[str, str, str]:
    """Fetch the GUI HTML and detect whether it uses dvs.js or citypermit*.js."""
    request = Request(gui_url, method="GET")
    try:
        with urlopen(request, timeout=TIMEOUT) as resp:  # noqa: S310
            body = resp.read().decode("utf-8", errors="replace")
    except SSLError:
        return "ERROR", "-", "SSL certificate error"
    except TimeoutError:
        return "ERROR", "-", "timeout"
    except HTTPError as err:
        return f"HTTP {err.code}", "-", _sanitize_response_text(
            err.read().decode("utf-8", errors="replace")
        ) or "<empty body>"
    except URLError as err:
        reason = getattr(err, "reason", err)
        if isinstance(reason, TimeoutError):
            return "ERROR", "-", "timeout"
        if isinstance(reason, SSLError):
            return "ERROR", "-", "SSL certificate error"
        return "ERROR", "-", str(reason)
    except Exception as err:  # pylint: disable=broad-exception-caught
        return "ERROR", "-", str(err)

    script_matches = re.findall(
        r"""<script[^>]+src=["']([^"']+)["']""",
        body,
        flags=re.IGNORECASE,
    )
    matched_scripts: list[str] = []
    for script_url in script_matches:
        script_name = script_url.rsplit("/", maxsplit=1)[-1]
        normalized_script_name = script_name.lower()
        if normalized_script_name == "dvs.js" or normalized_script_name.startswith("dvs.js?"):
            matched_scripts.append(script_name)
            continue
        if re.match(r"citypermit[^/]*\.js(?:\?.*)?$", normalized_script_name):
            matched_scripts.append(script_name)

    if not matched_scripts:
        return "HTTP 200", "none", "No dvs.js or citypermit*.js reference found in GUI HTML"

    has_dvs = any(match.lower().startswith("dvs.js") for match in matched_scripts)
    has_citypermit = any(match.lower().startswith("citypermit") for match in matched_scripts)
    if has_dvs and has_citypermit:
        usage = "both"
    elif has_dvs:
        usage = "dvs.js"
    else:
        usage = "citypermit*.js"

    return "HTTP 200", usage, ", ".join(matched_scripts)


def _resolve_api_url(found_url: str, base_url: str) -> str:
    """Resolve apiURL to an absolute URL."""
    if found_url.startswith(("http://", "https://")):
        return found_url.rstrip("/")
    return base_url.rstrip("/") + _resolve_api_path(found_url, base_url).rstrip("/")


def _sanitize_response_text(text: str) -> str:
    """Compact response text for readable logs."""
    compact = " ".join(text.split())
    if len(compact) > MAX_RESPONSE_CHARS:
        return compact[: MAX_RESPONSE_CHARS - 3] + "..."
    return compact


def _sanitize_markdown_cell(value: str) -> str:
    """Escape markdown table separators and normalize whitespace."""
    return " ".join(value.replace("|", "\\|").split())


def _build_markdown_table(headers: list[str], rows: list[list[str]]) -> str:
    """Build a markdown table from headers and rows."""
    lines = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]
    for row in rows:
        lines.append("| " + " | ".join(_sanitize_markdown_cell(value) for value in row) + " |")
    return "\n".join(lines) + "\n"


def _print_verbose(enabled: bool, message: str) -> None:
    """Print a verbose runtime message when enabled."""
    if enabled:
        print(message)


def _fetch_json(url: str) -> tuple[str, dict[str, object] | None, str]:
    """Fetch a JSON endpoint and return (status, parsed_json, response_text)."""
    request = Request(url, method="GET")
    try:
        with urlopen(request, timeout=TIMEOUT) as resp:  # noqa: S310
            status_code = resp.status
            response_text = resp.read().decode("utf-8", errors="replace")
    except HTTPError as err:
        response_text = err.read().decode("utf-8", errors="replace")
        return (
            f"HTTP {err.code}",
            None,
            _sanitize_response_text(response_text) or "<empty body>",
        )
    except SSLError:
        return "ERROR", None, "SSL certificate error"
    except TimeoutError:
        return "ERROR", None, "timeout"
    except URLError as err:
        reason = getattr(err, "reason", err)
        if isinstance(reason, TimeoutError):
            return "ERROR", None, "timeout"
        if isinstance(reason, SSLError):
            return "ERROR", None, "SSL certificate error"
        return "ERROR", None, str(reason)
    except Exception as err:  # pylint: disable=broad-exception-caught
        return "ERROR", None, str(err)

    sanitized = _sanitize_response_text(response_text) or "<empty body>"
    try:
        parsed = loads(response_text)
    except Exception:  # pylint: disable=broad-exception-caught
        return f"HTTP {status_code}", None, sanitized

    if isinstance(parsed, dict):
        return f"HTTP {status_code}", parsed, sanitized
    return f"HTTP {status_code}", None, sanitized


def _post_login_payload(login_url: str, payload: dict[str, str]) -> tuple[str, str]:
    """Post a login payload and return (status, response_text)."""
    request = Request(
        login_url,
        data=dumps(payload).encode("utf-8"),
        method="POST",
        headers={"Content-Type": "application/json"},
    )
    try:
        with urlopen(request, timeout=TIMEOUT) as resp:  # noqa: S310
            status_code = resp.status
            response_text = resp.read().decode("utf-8", errors="replace")
    except HTTPError as err:
        response_text = err.read().decode("utf-8", errors="replace")
        return f"HTTP {err.code}", _sanitize_response_text(response_text) or "<empty body>"
    except SSLError:
        return "ERROR", "SSL certificate error"
    except TimeoutError:
        return "ERROR", "timeout"
    except URLError as err:
        reason = getattr(err, "reason", err)
        if isinstance(reason, TimeoutError):
            return "ERROR", "timeout"
        if isinstance(reason, SSLError):
            return "ERROR", "SSL certificate error"
        return "ERROR", str(reason)
    except Exception as err:  # pylint: disable=broad-exception-caught
        return "ERROR", str(err)

    return f"HTTP {status_code}", _sanitize_response_text(response_text) or "<empty body>"


def _http_status_sort_key(status: str) -> tuple[int, str]:
    """Sort with HTTP 200 last; other HTTP codes first."""
    if status.startswith("HTTP "):
        code = status.removeprefix("HTTP ").strip()
        if code.isdigit():
            status_code = int(code)
            if status_code == 200:
                return 2, status
            return 0, f"{status_code:04d}"
    return 1, status


def _api_status_sort_key(status: str) -> tuple[int, str]:
    """Sort API status with issues first and OK last."""
    if status == "ERROR":
        return 0, status
    if status == "MISMATCH":
        return 1, status
    if status == "OK":
        return 2, status
    return 3, status


def _describe_pas_login_method(
    login_methods: object,
    default_method: object,
) -> tuple[str, str, str, str]:
    """Describe the payload login method value for 'Pas'."""
    if not isinstance(login_methods, list):
        return "unknown", "unknown", "unknown", "LoginMethods missing"

    methods = [str(method) for method in login_methods]
    try:
        pas_index = methods.index("Pas")
    except ValueError:
        return (
            "missing",
            str(default_method) if isinstance(default_method, int) else "unknown",
            "no",
            ", ".join(methods) if methods else "<empty>",
        )

    # Some portals use 1-based numeric payload values, while others accept the
    # literal login method string such as "Pas". Report both forms and match
    # whichever representation the portal exposes as default.
    pas_numeric_value = pas_index + 1
    pas_method_value = f"{pas_numeric_value} / Pas"
    default_method_text = str(default_method) if default_method is not None else "unknown"
    default_matches = False
    if isinstance(default_method, int):
        default_matches = default_method == pas_numeric_value
    elif isinstance(default_method, str):
        default_matches = default_method.strip().lower() == "pas"

    details = f"methods={methods}"
    if default_method is not None:
        details += f"; default={default_method_text}"
    if default_matches:
        details += "; Pas is default"
    details += f"; Pas payload value numeric={pas_numeric_value}"
    details += "; Pas payload value string=Pas"

    return (
        pas_method_value,
        default_method_text,
        "yes" if default_matches else "no",
        details,
    )


def _format_login_response_overview(login_data: dict[str, object] | None) -> str:
    """Format a compact overview of values returned by GET /login."""
    if login_data is None:
        return "No login metadata available"

    parts: list[str] = []

    login_methods = login_data.get("LoginMethods")
    if isinstance(login_methods, list):
        parts.append(f"LoginMethods={login_methods}")

    permit_media_types = login_data.get("PermitMediaTypes")
    if isinstance(permit_media_types, list):
        media_values = []
        for item in permit_media_types:
            if isinstance(item, dict):
                media_values.append(
                    {
                        "ID": item.get("ID"),
                        "Name": item.get("Name"),
                    }
                )
            else:
                media_values.append(item)
        parts.append(f"PermitMediaTypes={media_values}")

    for key in ("DefaultLoginMethod", "ZipCodeMandatory"):
        if key in login_data:
            parts.append(f"{key}={login_data[key]}")

    flow_infos = login_data.get("FlowInfos")
    if isinstance(flow_infos, dict):
        if flow_infos:
            parts.append(f"FlowInfosKeys={sorted(flow_infos.keys())}")

    policy = login_data.get("Policy")
    if isinstance(policy, dict):
        filtered_policy_keys = sorted(
            key
            for key in policy.keys()
            if key
            not in {
                "CapitalLettersRegularExpression",
                "DigitsRegularExpression",
                "LowerCaseLettersRegularExpression",
                "MinimumPasswordLength",
                "SpecialCharactersRegularExpression",
            }
        )
        if filtered_policy_keys:
            parts.append(f"PolicyKeys={filtered_policy_keys}")

    extra_keys = sorted(
        key
        for key in login_data.keys()
        if key
        not in {
            "LoginMethods",
            "PermitMediaTypes",
            "DefaultLoginMethod",
            "ZipCodeMandatory",
            "FlowInfos",
            "Policy",
        }
    )
    if extra_keys:
        parts.append(f"OtherKeys={extra_keys}")

    return "; ".join(parts) if parts else "Login metadata present but no known keys found"


def _format_permit_media_types(login_data: dict[str, object] | None) -> str:
    """Format PermitMediaTypes as a compact standalone table cell value."""
    if login_data is None:
        return "-"

    permit_media_types = login_data.get("PermitMediaTypes")
    if not isinstance(permit_media_types, list) or not permit_media_types:
        return "-"

    values: list[str] = []
    for item in permit_media_types:
        if isinstance(item, dict):
            item_id = item.get("ID", "?")
            item_name = item.get("Name", "?")
            values.append(f"{item_id}:{item_name}")
        else:
            values.append(str(item))
    return ", ".join(values)


def _classify_login_result(status: str, response: str) -> str:
    """Classify the login result into a concise interpretation."""
    normalized = response.lower()

    if status == "SKIPPED":
        return "No login probe performed"
    if status == "ERROR":
        return "Request failed before the server returned an HTTP response"
    if status == "HTTP 400":
        if "validation errors occurred" in normalized or "field is required" in normalized:
            return "Payload shape is likely incorrect for this endpoint"
        return "Request rejected as invalid"
    if status == "HTTP 401":
        return "Payload accepted; credentials rejected"
    if status == "HTTP 403":
        return "Payload accepted; access denied"
    if status == "HTTP 500":
        return "Payload likely got further, but the server failed internally"
    if status == "HTTP 200":
        if "unable to login" in normalized or "u kunt niet inloggen" in normalized:
            return "Payload accepted; login failed cleanly"
        return "Payload accepted"
    return "See server response"


def _select_login_method_payload_value(
    login_methods: object,
    default_method: object,
) -> tuple[object, str]:
    """Select the loginMethod payload value using the current Pas hypothesis."""
    del login_methods
    del default_method
    return FAKE_LOGIN_METHOD, "hardcoded hypothesis: Pas uses loginMethod=2"


def _select_permit_media_type_id(login_data: dict[str, object] | None) -> tuple[int | None, str]:
    """Select the permit media type ID from login metadata."""
    if login_data is None:
        return None, "no login metadata"

    permit_media_types = login_data.get("PermitMediaTypes")
    if not isinstance(permit_media_types, list) or not permit_media_types:
        return None, "PermitMediaTypes missing"

    first_item = permit_media_types[0]
    if not isinstance(first_item, dict):
        return None, "first PermitMediaTypes entry is not an object"

    permit_media_type_id = first_item.get("ID")
    if isinstance(permit_media_type_id, int):
        return permit_media_type_id, f"first PermitMediaTypes ID {permit_media_type_id}"
    return None, "PermitMediaTypes[0].ID missing"


def _write_report(
    output_path: Path,
    rows: list[dict[str, str]],
    mismatch_count: int,
    error_count: int,
) -> None:
    """Write results to a markdown report file."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    api_rows = sorted(
        rows,
        key=lambda row: (_api_status_sort_key(row["api_status"]), row["municipality"].lower()),
    )
    login_rows = sorted(
        rows,
        key=lambda row: (
            _http_status_sort_key(row["login_status"]),
            row["municipality"].lower(),
        ),
    )
    frontend_rows = sorted(
        rows,
        key=lambda row: (
            row["frontend_script_usage"] == "dvs.js",
            row["frontend_script_usage"] == "citypermit*.js",
            row["municipality"].lower(),
        ),
    )

    summary = [
        "# DVSPortal API URL check report",
        "",
        f"- Checked municipalities: {len(rows)}",
        f"- API mismatches: {mismatch_count}",
        f"- API fetch errors: {error_count}",
        (
            "- Fake login probe values: "
            f"identifier='{FAKE_USERNAME}', password='{FAKE_PASSWORD}', "
            "loginMethod=2; permitMediaTypeID derived from GET /login"
        ),
        "",
        "## GUI URLs",
        "",
    ]
    gui_table = _build_markdown_table(
        [
            "Municipality",
            "Configured Base URL",
            "Resolved GUI URL",
            "app.env.js URL",
        ],
        [
            [
                row["municipality"],
                row["base_url"],
                row["gui_url"],
                row["app_env_url"],
            ]
            for row in api_rows
        ],
    )
    api_table = _build_markdown_table(
        ["Municipality", "API Status", "Configured API", "Found API", "Base URL"],
        [
            [
                row["municipality"],
                row["api_status"],
                row["configured_api"],
                row["found_api"],
                row["base_url"],
            ]
            for row in api_rows
        ],
    )
    login_table_header = [
        "",
        "## Login status",
        "",
    ]
    login_table = _build_markdown_table(
        [
            "Municipality",
            "Pas Method",
            "Default Method",
            "Pas Is Default",
            "Detected Fields",
            "Login Payload",
            "Login Status",
            "Interpretation",
            "Login URL",
            "Login Response",
        ],
        [
            [
                row["municipality"],
                row["pas_login_method"],
                row["default_login_method"],
                row["pas_is_default"],
                row["login_fields"],
                row["login_payload"],
                row["login_status"],
                row["login_interpretation"],
                row["login_url"],
                row["login_response"],
            ]
            for row in login_rows
        ],
    )
    all_env_var_names = sorted({
        var_name
        for row in rows
        for var_name in loads(row.get("app_env_vars_json", "{}")).keys()
    })
    app_env_table = _build_markdown_table(
        ["Municipality"] + [f"window.__env.{v}" for v in all_env_var_names],
        [
            [row["municipality"]]
            + [
                loads(row.get("app_env_vars_json", "{}")).get(v, "-")
                for v in all_env_var_names
            ]
            for row in api_rows
        ],
    )

    output_path.write_text(
        "\n".join(summary)
        + gui_table
        + "\n## app.env.js variables\n\n"
        + app_env_table
        + "\n## Frontend script usage\n\n"
        + _build_markdown_table(
            [
                "Municipality",
                "Frontend Status",
                "Frontend Script",
                "Matched Script Tags",
                "GUI URL",
            ],
            [
                [
                    row["municipality"],
                    row["frontend_status"],
                    row["frontend_script_usage"],
                    row["frontend_script_matches"],
                    row["gui_url"],
                ]
                for row in frontend_rows
            ],
        )
        + "\n## API status\n\n"
        + api_table
        + "\n## Login metadata overview\n\n"
        + _build_markdown_table(
            [
                "Municipality",
                "Pas Method",
                "Default Method",
                "Pas Is Default",
                "PermitMediaTypes",
                "Login Metadata",
            ],
            [
                [
                    row["municipality"],
                    row["pas_login_method"],
                    row["default_login_method"],
                    row["pas_is_default"],
                    row["permit_media_types"],
                    row["login_metadata_overview"],
                ]
                for row in api_rows
            ],
        )
        + "\n".join(login_table_header)
        + login_table,
        encoding="utf-8",
    )


def _parse_args() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description=(
            "Check DVSPortal api_url values and perform fake logins for each municipality."
        )
    )
    parser.add_argument(
        "--output",
        default=str(DEFAULT_OUTPUT_FILE),
        help=f"Output markdown file path (default: {DEFAULT_OUTPUT_FILE})",
    )
    parser.add_argument(
        "--quiet",
        action="store_true",
        help="Show only the summary tables and final report path.",
    )
    parser.add_argument(
        "--operator",
        help=(
            "Optional case-insensitive filter on provider/operator id. "
            "Example: --operator dvsportal"
        ),
    )
    return parser.parse_args()


def try_fake_login(
    api_url: str,
    login_method: object,
    permit_media_type_id: int | None,
) -> tuple[str, str, str, str, str]:
    """Probe login with values derived from GET /login metadata."""
    login_url = api_url + LOGIN_PATH
    payload = {
        "identifier": FAKE_USERNAME,
        "password": FAKE_PASSWORD,
        "loginMethod": login_method,
        "otp": None,
        "resetCode": None,
        "asIdentifier": None,
        "zipCode": None,
    }
    if permit_media_type_id is not None:
        payload["permitMediaTypeID"] = permit_media_type_id
    status, response = _post_login_payload(login_url, payload)
    permit_media_type_label = (
        str(permit_media_type_id) if permit_media_type_id is not None else "none"
    )
    login_field_label = (
        "identifier/password + "
        f"loginMethod={login_method!r} + permitMediaTypeID={permit_media_type_label}"
    )
    return status, login_url, response, login_field_label, dumps(payload, sort_keys=True)


def fetch_login_method_info(
    api_url: str,
) -> tuple[str, str, str, str, str, str, object, int | None, str]:
    """Fetch login metadata and return the numeric value for the 'Pas' method."""
    login_url = api_url + LOGIN_PATH
    status, parsed_json, response_text = _fetch_json(login_url)
    if parsed_json is None:
        return (
            status,
            "unknown",
            "unknown",
            response_text,
            response_text,
            "-",
            "Pas",
            None,
            "-",
        )

    pas_method, default_method, pas_is_default, details = _describe_pas_login_method(
        parsed_json.get("LoginMethods"),
        parsed_json.get("DefaultLoginMethod"),
    )
    selected_login_method, selected_login_method_reason = _select_login_method_payload_value(
        parsed_json.get("LoginMethods"),
        parsed_json.get("DefaultLoginMethod"),
    )
    selected_permit_media_type_id, selected_permit_media_type_reason = (
        _select_permit_media_type_id(parsed_json)
    )
    selected_probe = (
        f"loginMethod={selected_login_method!r} ({selected_login_method_reason}); "
        f"permitMediaTypeID={selected_permit_media_type_id if selected_permit_media_type_id is not None else 'none'} "
        f"({selected_permit_media_type_reason})"
    )
    return (
        pas_method,
        default_method,
        pas_is_default,
        details,
        _format_login_response_overview(parsed_json),
        _format_permit_media_types(parsed_json),
        selected_login_method,
        selected_permit_media_type_id,
        selected_probe,
    )


def main() -> int:
    """Check api_url for all DVSPortal providers and report mismatches."""
    args = _parse_args()
    output_path = Path(args.output).expanduser()
    verbose = not args.quiet

    providers = load_providers()

    operator_filter = args.operator.casefold() if args.operator else None

    dvsportal = {
        key: val
        for key, val in providers.items()
        if val.get("provider_id") in {"dvsportal", "dvsportal_new"}
        and (
            operator_filter is None
            or operator_filter in str(val.get("provider_id", "")).casefold()
        )
    }

    print(f"Checking {len(dvsportal)} DVSPortal providers...\n")
    print(
        "Fake login probe values used for all checks: "
        f"identifier={FAKE_USERNAME!r}, password={FAKE_PASSWORD!r}, "
        "loginMethod=2, permitMediaTypeID derived from GET /login"
    )
    print()
    mismatches: list[tuple[str, str, str, str]] = []
    errors: list[tuple[str, str, str]] = []
    rows: list[dict[str, str]] = []

    for val in sorted(dvsportal.values(), key=lambda v: v["municipality_name"]):
        name = val["municipality_name"]
        base_url = val["base_url"]
        configured_api = val["api_url"]
        gui_url = _resolve_gui_url(base_url)
        app_env_url = _resolve_app_env_url(base_url)

        _print_verbose(verbose, f"[{name}] Checking base URL: {base_url}")
        _print_verbose(verbose, f"[{name}] Resolved GUI URL: {gui_url}")
        _print_verbose(verbose, f"[{name}] app.env.js URL: {app_env_url}")
        _print_verbose(verbose, f"[{name}] Expected configured api_url: {configured_api}")
        frontend_status, frontend_script_usage, frontend_script_matches = fetch_gui_script_usage(
            gui_url
        )
        _print_verbose(
            verbose,
            (
                f"[{name}] Frontend script usage: status={frontend_status}, "
                f"usage={frontend_script_usage}, matches={frontend_script_matches}"
            ),
        )

        env_vars, error = fetch_app_env(base_url)
        found_url = env_vars.get("apiURL") if env_vars is not None else None
        if found_url is None and error is None:
            error = "apiURL not found in app.env.js"
        app_env_vars_json = dumps(env_vars, sort_keys=True) if env_vars is not None else "{}"

        if error or found_url is None:
            status = "ERROR"
            found = error or "no apiURL found"
            errors.append((name, base_url, found))
            _print_verbose(verbose, f"[{name}] Failed to resolve api_url: {found}")
            pas_login_method = "-"
            default_login_method = "-"
            pas_is_default = "-"
            pas_login_details = "Skipped because api_url could not be resolved"
            login_metadata_overview = "Skipped because api_url could not be resolved"
            permit_media_types = "-"
            selected_login_probe = "Skipped because api_url could not be resolved"
            login_status = "SKIPPED"
            login_url = "-"
            login_response = "Skipped because api_url could not be resolved"
            login_interpretation = "No login probe performed"
            login_fields = "-"
            login_payload = "-"
        else:
            found_path = _resolve_api_path(found_url, base_url)
            resolved_api_url = _resolve_api_url(found_url, base_url)
            found_norm = found_path.rstrip("/")
            config_norm = configured_api.rstrip("/")
            _print_verbose(verbose, f"[{name}] app.env.js api_url: {found_path}")
            _print_verbose(verbose, f"[{name}] Resolved login API base: {resolved_api_url}")
            if found_norm == config_norm:
                status = "OK"
            else:
                status = "MISMATCH"
                mismatches.append((name, base_url, configured_api, found_path))
            _print_verbose(verbose, f"[{name}] API status: {status}")
            found = found_path
            (
                pas_login_method,
                default_login_method,
                pas_is_default,
                pas_login_details,
                login_metadata_overview,
                permit_media_types,
                selected_login_method,
                selected_permit_media_type_id,
                selected_login_probe,
            ) = fetch_login_method_info(resolved_api_url)
            _print_verbose(
                verbose,
                (
                    f"[{name}] Login methods: Pas={pas_login_method}, "
                    f"default={default_login_method}, pas_is_default={pas_is_default}"
                ),
            )
            _print_verbose(verbose, f"[{name}] Login method details: {pas_login_details}")
            _print_verbose(verbose, f"[{name}] Login metadata: {login_metadata_overview}")
            _print_verbose(verbose, f"[{name}] Selected probe: {selected_login_probe}")
            (
                login_status,
                login_url,
                login_response,
                login_fields,
                login_payload,
            ) = try_fake_login(
                resolved_api_url,
                selected_login_method,
                selected_permit_media_type_id,
            )
            login_interpretation = _classify_login_result(login_status, login_response)
            _print_verbose(verbose, f"[{name}] Detected login fields: {login_fields}")
            _print_verbose(verbose, f"[{name}] Login payload: {login_payload}")
            _print_verbose(verbose, f"[{name}] Login probe status: {login_status}")
            _print_verbose(verbose, f"[{name}] Login interpretation: {login_interpretation}")
            _print_verbose(verbose, f"[{name}] Login endpoint: {login_url}")
            _print_verbose(verbose, f"[{name}] Login response: {login_response}")
        _print_verbose(verbose, "")

        rows.append(
            {
                "municipality": name,
                "base_url": base_url,
                "gui_url": gui_url,
                "app_env_url": app_env_url,
                "app_env_vars_json": app_env_vars_json,
                "frontend_status": frontend_status,
                "frontend_script_usage": frontend_script_usage,
                "frontend_script_matches": frontend_script_matches,
                "configured_api": configured_api,
                "found_api": found,
                "api_status": status,
                "pas_login_method": pas_login_method,
                "default_login_method": default_login_method,
                "pas_is_default": pas_is_default,
                "pas_login_details": pas_login_details,
                "permit_media_types": permit_media_types,
                "login_metadata_overview": login_metadata_overview,
                "selected_login_probe": selected_login_probe,
                "login_status": login_status,
                "login_payload": login_payload,
                "login_interpretation": login_interpretation,
                "login_url": login_url,
                "login_response": login_response,
                "login_fields": login_fields,
            }
        )

    api_rows = sorted(
        rows,
        key=lambda row: (_api_status_sort_key(row["api_status"]), row["municipality"].lower()),
    )
    login_rows = sorted(
        rows,
        key=lambda row: (
            _http_status_sort_key(row["login_status"]),
            row["municipality"].lower(),
        ),
    )

    print("API status table:")
    print(f"{'Municipality':<30} {'API Status':<10} {'Configured':<30} {'Found'}")
    print("-" * 100)
    for row in api_rows:
        print(
            f"{row['municipality']:<30} {row['api_status']:<10} "
            f"{row['configured_api']:<30} {row['found_api']}"
        )

    print("\nFrontend script table:")
    print(
        f"{'Municipality':<30} {'Status':<12} {'Frontend Script':<18} {'Matched Scripts'}"
    )
    print("-" * 150)
    for row in sorted(
        rows,
        key=lambda row: (
            row["frontend_script_usage"] == "dvs.js",
            row["frontend_script_usage"] == "citypermit*.js",
            row["municipality"].lower(),
        ),
    ):
        print(
            f"{row['municipality']:<30} {row['frontend_status']:<12} "
            f"{row['frontend_script_usage']:<18} {row['frontend_script_matches']}"
        )

    print("\nLogin method table:")
    print(
        f"{'Municipality':<30} {'Pas Nr':<8} {'Default':<8} {'Pas Default':<12} {'Details'}"
    )
    print("-" * 150)
    for row in api_rows:
        print(
            f"{row['municipality']:<30} {row['pas_login_method']:<8} "
            f"{row['default_login_method']:<8} {row['pas_is_default']:<12} "
            f"{row['pas_login_details']}"
        )

    print("\nLogin status table:")
    print(
        f"{'Municipality':<30} {'Pas Nr':<8} {'Default':<8} {'Pas Default':<12} "
        f"{'Fields':<22} {'Login Status':<12} {'Interpretation':<28} {'Login URL'}"
    )
    print("-" * 150)
    for row in login_rows:
        print(
            f"{row['municipality']:<30} {row['pas_login_method']:<8} "
            f"{row['default_login_method']:<8} {row['pas_is_default']:<12} "
            f"{row['login_fields']:<22} {row['login_status']:<12} "
            f"{row['login_interpretation']:<28} "
            f"{row['login_url']}"
        )
        print(f"  payload: {row['login_payload']}")
        print(f"  response: {row['login_response']}")

    print("\n" + "=" * 100)

    if mismatches:
        print(f"\n{len(mismatches)} MISMATCH(ES):")
        for name, base_url, configured, found in mismatches:
            print(f"  {name}: configured={configured!r}, found={found!r}  ({base_url})")

    if errors:
        print(f"\n{len(errors)} ERROR(S):")
        for name, base_url, error in errors:
            print(f"  {name}: {error}  ({base_url})")

    if not mismatches and not errors:
        print("\nAll providers OK!")

    _write_report(
        output_path=output_path,
        rows=rows,
        mismatch_count=len(mismatches),
        error_count=len(errors),
    )
    print(f"\nReport written to: {output_path}")

    return 1 if mismatches else 0


if __name__ == "__main__":
    sys.exit(main())
