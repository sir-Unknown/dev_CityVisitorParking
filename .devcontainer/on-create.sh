#!/bin/bash
set -euo pipefail

WORKSPACES="/workspaces"

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
