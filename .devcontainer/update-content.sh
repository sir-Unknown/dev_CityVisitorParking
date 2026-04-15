#!/bin/bash
set -euo pipefail
export UV_LINK_MODE="${UV_LINK_MODE:-copy}"
unset VIRTUAL_ENV

[ -f /workspaces/pyCityVisitorParking/pyproject.toml ] && (
  cd /workspaces/pyCityVisitorParking
  uv sync --group dev
  uv run pre-commit install
) || true

[ -f /workspaces/ha_City-Visitor-Parking/pyproject.toml ] && (
  cd /workspaces/ha_City-Visitor-Parking
  uv sync --group dev --group test --group perf

  if [ -f /workspaces/ha_City-Visitor-Parking/custom_components/city_visitor_parking/frontend/package.json ]; then
    corepack enable
    cd /workspaces/ha_City-Visitor-Parking/custom_components/city_visitor_parking/frontend
    corepack yarn install
    cd /workspaces/ha_City-Visitor-Parking
  fi

  uv run pre-commit install

  if [ -x /workspaces/dev_CityVisitorParking/.devcontainer/ha-dev-setup.sh ]; then
    /workspaces/dev_CityVisitorParking/.devcontainer/ha-dev-setup.sh
  else
    bash /workspaces/dev_CityVisitorParking/.devcontainer/ha-dev-setup.sh
  fi
) || true
