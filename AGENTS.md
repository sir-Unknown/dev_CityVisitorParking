# AGENTS.md — Development Guide (dev_CityVisitorParking)

## 1) Purpose

This repository is the development workspace for the City Visitor Parking project.

It exists to support local development across the connected repositories and tools:

- `ha_City-Visitor-Parking/` for the Home Assistant custom integration
- `pyCityVisitorParking/` for the async Python library
- workspace-level VS Code tasks, launch configurations, and helper scripts used for development and debugging

Treat this repository as development infrastructure for the wider project rather than as a standalone product.

## 2) Repo shape

This repository currently provides:

- `.devcontainer/` for development container setup and bootstrap behavior
- `.vscode/` for shared tasks, launch configurations, and editor support
- `CityVisitorParking.code-workspace` for the combined multi-repository workspace
- `README.md` for developer onboarding and usage notes
- helper and research material used for debugging, investigation, and local validation

Changes here should stay aligned with the workflows and expectations of both maintained project repositories.

## 3) Core goals

Keep this repository:

- focused on local development and debugging workflows
- safe for day-to-day use by contributors
- aligned with the Home Assistant integration and library repositories
- clear about what is development-only infrastructure versus production or package code

## 4) Branch workflow

- Treat `dev` as the default working branch for day-to-day changes and small fixes.
- Use a dedicated feature branch only for larger, clearly scoped change sets, especially when work spans multiple maintained surfaces such as workspace tooling, devcontainer setup, VS Code tasks, helper scripts, docs, or CI.
- Do not put partial, half-reviewed, or long-running multi-commit work directly on `dev` when isolated review would be safer or clearer.
- Keep feature branches focused on one clustered change set and do not use long-lived catch-all branches for unrelated work.
- Feature branches SHOULD use a conventional prefix such as `feat/`, `fix/`, `refactor/`, `docs/`, `ci/`, `deps/`, `test/`, or `tests/`.
- Do not add agent-related prefixes or suffixes such as `[codex]`, `[agent]`, or similar markers in branch names, commit titles, or pull request titles.
- Keep feature branches current with `dev` as needed, but do not rewrite shared history once review is in progress unless explicitly requested.
- After a feature branch is merged, delete it on GitHub and clean up the local branch as soon as it is no longer needed unless there is an explicit reason to keep it temporarily.

## 5) Workflow expectations

- Prefer changes that improve local development reliability, reproducibility, and onboarding clarity.
- Keep workspace tasks and launch configurations compatible with the current layouts of `ha_City-Visitor-Parking` and `pyCityVisitorParking`.
- Treat helper scripts as development-only tools; they must not become a hidden runtime dependency for the integration or the library.
- When a workspace change affects contributor instructions, update `README.md` and any relevant helper documentation in the same change set.

## 6) Safety and boundaries

- Do not move product logic from the integration or library into this repository.
- Do not make this repository the source of truth for behavior that belongs in `ha_City-Visitor-Parking` or `pyCityVisitorParking`.
- Be careful with scripts, sample data, logs, and reports: do not commit credentials, tokens, raw license plates, or other sensitive data.
- Prefer privacy-safe examples and sanitized outputs in all development artifacts.

## 7) Tooling

- Keep `.devcontainer/`, `.vscode/`, and workspace files simple, explicit, and easy to maintain.
- Prefer reproducible commands and documented setup steps over implicit local assumptions.
- If a task or launch configuration depends on a repository-specific command, ensure the referenced repository documentation still matches.
