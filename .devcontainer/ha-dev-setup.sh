#!/bin/bash
set -euo pipefail

ensure_ha_config() {
  local config_dir="/workspaces/config"

  local integration_source="/workspaces/ha_City-Visitor-Parking/custom_components/city_visitor_parking"
  local integration_target="$config_dir/custom_components/city_visitor_parking"

  mkdir -p "$config_dir/custom_components"

  if [ ! -e "$config_dir/configuration.yaml" ]; then
    cat > "$config_dir/configuration.yaml" <<'CFGEOF'
homeassistant:
  time_zone: Europe/Amsterdam
  country: NL
  name: City Visitor Parking Development Environment
  unit_system: metric
  currency: EUR
  auth_providers:
    - type: trusted_networks
      trusted_networks:
        - 127.0.0.1
        - ::1
        - 172.16.0.0/12
      allow_bypass_login: true
    - type: homeassistant

config:

logger:
  default: info
  logs:
    custom_components: debug
    haffmpeg.core: notset
    haffmpeg.tools: notset
    homeassistant.components.camera.img_util: notset
CFGEOF
  fi

  if [ -e "$integration_target" ] && [ ! -L "$integration_target" ]; then
    echo "Not replacing existing $integration_target"
  else
    ln -sfn "$integration_source" "$integration_target"
  fi
}

ensure_ha_dashboard() {
  local config_dir="/workspaces/config"
  local storage_dir="$config_dir/.storage"

  if pgrep -f "homeassistant.*${config_dir}" >/dev/null 2>&1; then
    echo "Home Assistant is running for $config_dir; skipping dashboard storage update"
    return
  fi

  mkdir -p "$storage_dir"

  if [ ! -f "$storage_dir/lovelace_dashboards" ]; then
    cat > "$storage_dir/lovelace_dashboards" <<'DASHBOARDS_EOF'
{"version":1,"minor_version":1,"key":"lovelace_dashboards","data":{"items":[{"id":"dashboard_parking","show_in_sidebar":true,"title":"Parking cards","require_admin":false,"mode":"storage","url_path":"dashboard-parking"},{"id":"dashboard_entities","show_in_sidebar":true,"title":"Entities","require_admin":false,"mode":"storage","url_path":"dashboard-entities"}]}}
DASHBOARDS_EOF
    echo "Created lovelace_dashboards"
  fi

  if [ ! -f "$storage_dir/lovelace.dashboard_parking" ]; then
    cat > "$storage_dir/lovelace.dashboard_parking" <<'PARKING_EOF'
{"version":1,"minor_version":1,"key":"lovelace.dashboard_parking","data":{"config":{"views":[{"type":"sections","sections":[{"type":"grid","cards":[{"type":"custom:city-visitor-parking-card","show_favorites":true,"show_start_time":true,"show_end_time":true}]},{"type":"grid","cards":[{"type":"custom:city-visitor-parking-active-card","show_favorites":true,"show_start_time":true,"show_end_time":true}]}]}]}}}
PARKING_EOF
    echo "Created lovelace.dashboard_parking"
  fi

  if [ ! -f "$storage_dir/lovelace.dashboard_entities" ]; then
    cat > "$storage_dir/lovelace.dashboard_entities" <<'ENTITIES_EOF'
{"version":1,"minor_version":1,"key":"lovelace.dashboard_entities","data":{"config":{"strategy":{"type":"original-states"}}}}
ENTITIES_EOF
    echo "Created lovelace.dashboard_entities"
  fi

  if [ ! -f "$storage_dir/frontend.system_data" ]; then
    cat > "$storage_dir/frontend.system_data" <<'FRONTEND_EOF'
{"version":1,"minor_version":1,"key":"frontend.system_data","data":{"core":{"default_panel":"dashboard-parking"}}}
FRONTEND_EOF
    echo "Created frontend.system_data with default dashboard"
  fi
}

ensure_ha_default_user() {
  local config_dir="/workspaces/config"
  local storage_dir="$config_dir/.storage"

  if [ -f "$storage_dir/auth" ]; then
    echo "Auth storage already exists; skipping default user creation"
    return
  fi

  if pgrep -f "homeassistant.*${config_dir}" >/dev/null 2>&1; then
    echo "Home Assistant is running for $config_dir; skipping auth/onboarding storage update"
    return
  fi

  mkdir -p "$storage_dir"

  cat > "$storage_dir/auth" <<'AUTH_EOF'
{"version": 1, "minor_version": 1, "key": "auth", "data": {"users": [{"id": "00000000-0000-4000-8000-000000000001", "group_ids": ["system-admin"], "is_owner": true, "is_active": true, "name": "CVP Dev User", "perm_lookup": null, "system_generated": false, "local_only": false}], "groups": [], "credentials": [], "refresh_tokens": []}}
AUTH_EOF

  cat > "$storage_dir/onboarding" <<'ONBOARD_EOF'
{"version": 4, "minor_version": 1, "key": "onboarding", "data": {"done": ["user", "core_config", "analytics", "integration"]}}
ONBOARD_EOF

  echo "Created default user and marked onboarding as done"
}

ensure_ha_config
ensure_ha_default_user
ensure_ha_dashboard
