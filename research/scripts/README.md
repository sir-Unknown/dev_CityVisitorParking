# Scripts

Helper scripts for manual checks, troubleshooting, and local validation. These tools are development and debugging aids only; they are not part of the public library API.

## Contents

- `provider_live_check.py`: end-to-end checks against a selected provider.
- `provider_live_check_copy.py`: experimental or temporary variant of the live check.
- `check_dvsportal_api_urls.py`: validation for DVS Portal API URL patterns.
- `login_flow_check.py`: additional login flow validation.
- `sanitize.py`: redacts privacy-sensitive values from JSON dumps.
- `reports/`: outputs and summaries from script or bundle analysis.

## Usage

Work from the repository root and set `PYTHONPATH=src` when needed so local imports continue to work.
