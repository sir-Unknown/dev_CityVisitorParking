# dev_CityVisitorParking

Development workspace for the City Visitor Parking project. This repository ties together the two main repositories and provides helper scripts for local development and debugging.

## Workspace layout

| Folder | Repository | Purpose |
|--------|-----------|---------|
| `ha_City-Visitor-Parking/` | [ha_City-Visitor-Parking](https://github.com/sir-Unknown/ha_City-Visitor-Parking) | Home Assistant custom integration |
| `pyCityVisitorParking/` | [pyCityVisitorParking](https://github.com/sir-Unknown/pyCityVisitorParking) | Async Python library for Dutch municipal parking providers |
| `dev_CityVisitorParking/` | this repo | Dev workspace — VS Code workspace file and helper scripts |

Open `CityVisitorParking.code-workspace` in VS Code to get all three folders in a single workspace with shared editor settings.

## Getting started

The dev container runs `uv sync --group dev` for `pyCityVisitorParking` automatically on start (`update-content.sh`). If the environment is out of sync, re-run it manually:

```bash
cd /workspaces/pyCityVisitorParking
uv sync --group dev
```

## Scripts

Helper scripts live in [`helper_scripts/`](helper_scripts/). They are intended for development and debugging only — not for production use.

| Script | Purpose |
|--------|---------|
| `provider_live_check.py` | End-to-end checks against a live provider (login, permit, reservations, favorites) |
| `check_dvsportal_api_urls.py` | Validate DVSPortal API URLs per municipality and generate a report |
| `sanitize.py` | Redact privacy-sensitive values in JSON files before sharing |

See [`helper_scripts/README.md`](helper_scripts/README.md) for full usage instructions, CLI flags, and examples.

## Running Home Assistant

Two modes are available, each as a **VS Code task** (Ctrl+Shift+P → "Run Task") and a **launch configuration** (Ctrl+Shift+D, then F5 to attach the debugger).

| Mode | Library source | When to use |
|------|---------------|-------------|
| **PyPI latest** | Published version from PyPI (auto-upgraded on start) | Test against the released library |
| **local dev** | `/workspaces/pyCityVisitorParking/src` via `PYTHONPATH` | Test unpublished library changes alongside HA |

Both tasks kill any running HA instance (SIGTERM, then SIGKILL after 2 s), clear the lock file and log, and stream output to a dedicated terminal panel.

**Tasks** (Ctrl+Shift+P → "Run Task") are the quickest way to (re)start HA without a debugger.

**Launch configurations** (Ctrl+Shift+D) start HA under debugpy so breakpoints work in both the integration and the library. The "local dev" launch config automatically installs `pyCityVisitorParking` as an editable package before starting.

### GitHub login

If `gh` is not authenticated (e.g. after a fresh container), run the **"GitHub: Login"** task (Ctrl+Shift+P → "Run Task") to authenticate via the browser.

## Related links

- Home Assistant integration: [ha_City-Visitor-Parking](https://github.com/sir-Unknown/ha_City-Visitor-Parking)
- Python library: [pyCityVisitorParking](https://github.com/sir-Unknown/pyCityVisitorParking)
- PyPI: [pycityvisitorparking](https://pypi.org/project/pycityvisitorparking/)
