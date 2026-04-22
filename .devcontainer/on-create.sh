#!/bin/bash
set -euo pipefail

WORKSPACES="/workspaces"

ensure_workspace_venv() {
  local target="$1"

  if [ ! -x "$target/.venv/bin/python" ]; then
    rm -rf "$target/.venv"
    uv venv "$target/.venv"
  fi
}

clone_if_missing() {
  local repo="$1"
  local target="$2"
  if [ ! -d "$target/.git" ]; then
    if gh auth status &>/dev/null; then
      gh repo clone "$repo" "$target"
    else
      git clone "https://github.com/${repo}.git" "$target"
    fi
  else
    echo "Already cloned: $target"
  fi
}

clone_if_missing "sir-Unknown/pyCityVisitorParking"    "$WORKSPACES/pyCityVisitorParking"
clone_if_missing "sir-Unknown/ha_City-Visitor-Parking" "$WORKSPACES/ha_City-Visitor-Parking"
ensure_workspace_venv "$WORKSPACES/dev_CityVisitorParking"
