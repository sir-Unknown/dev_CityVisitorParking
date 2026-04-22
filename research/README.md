# Research

Research material for reverse engineering, provider comparisons, and local validation.

## Structure

- `providers/`: provider- and municipality-specific artifacts, grouped by source.
- `scripts/`: helper scripts for manual checks and sanitization.
- `scripts/reports/`: generated or hand-written research reports.
- `certificates/`: standalone certificate files collected during research.

## Guidelines

- Keep provider-specific HTML, JS, and notes in the correct subdirectory under `providers/`.
- Put new tooling in `scripts/` and prefer loose output in `scripts/reports/`.
- Use clear file extensions and lowercase directory names so files stay easy to find.
