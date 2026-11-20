# Amsterdam Visitor Parking — API Research

URL: https://parkeervergunningen.amsterdam.nl/login-ssp  
GitHub issue: https://github.com/sir-Unknown/pyCityVisitorParking/issues/1  
Implementation branch: https://github.com/sir-Unknown/pyCityVisitorParking/tree/Amsterdam

## Platform

**React (Vite)** single-page application built by **Egis Parking Services**.  
API version: `1.9.6.rel` (production)

## Base URLs

| Variable | URL |
|-----------|-----|
| Authentication API | `https://api.parkeervergunningen.egisparkingservices.nl/api` |
| Front-office API (v1) | `https://api.parkeervergunningen.egisparkingservices.nl/api/v1` |

The app uses two axios instances:

- `pr` for the authentication base URL, including login and token refresh
- `nt` for the front-office base URL, including permits and parking actions

## Authentication

### Login (SSP — report code + PIN)

```http
POST https://api.parkeervergunningen.egisparkingservices.nl/api/ssp/login_check
Content-Type: application/json
```

**Request body:**

```json
{
  "username": "<report_code>",
  "password": "<pin>"
}
```

**Response (200):**

```json
{
  "token": "<jwt_token>"
}
```

The JWT token is stored in `localStorage` as:

```json
{ "token": "<JWT>" }
```

under the `"context"` key.

### Alternative login methods

| Method | Endpoint | Usage |
|---------|----------|---------|
| SSP (report code / PIN) | `POST /ssp/login_check` | Citizen visitor parking |
| Standard (email / password) | `POST /login_check` | Back office |
| Temporary business | `POST /temporary_business/login_check` | Chamber of Commerce extension number |
| DigiD / eHerkenning | `GET /sso/get_authentication_url?service=digid` | SSO redirect |

### Refresh token

```http
POST /refresh_token
Authorization: Bearer <token>
```

**Response:**

```json
{ "token": "<new_jwt>" }
```

## Request headers (after login)

```http
Authorization: Bearer <JWT-token>
Content-Type: application/json
Accept: application/json
```

No CSRF token is required, unlike Rotterdam / Mendix.

## Parking session API (`/v1/ssp/`)

### Fetch permits

```http
GET /api/v1/permit/list
Authorization: Bearer <token>
```

### Start parking action

```http
POST /api/v1/ssp/parking_session/start
Authorization: Bearer <token>
Content-Type: application/json
```

**Request body:**

```json
{
  "vrn": "<license_plate>",
  "started_at": "<utc_datetime>",
  "ended_at": "<utc_datetime>",
  "client_product_id": "<permit_id>",
  "zone_id": "<zone_id>",
  "machine_number": "<machine_number>",
  "is_new_favorite_machine_number": false,
  "brand": "IDEAL"
}
```

Notes:

- The portal sends `zone_id`, `machine_number`, and `is_new_favorite_machine_number` only when `client_product.config.can_select_zone` is `true`; otherwise the body is just `vrn`, `started_at`, `ended_at`, `client_product_id`
- `zone_id` is the `zone.zone_id` returned by `get_by_machine_number` for the chosen machine
- `started_at` / `ended_at` are sent as RFC 1123 (`new Date(...).toUTCString()`)
- The portal moves a start before `client_product.validity.started_at` to that moment
- `brand: "IDEAL"` is required for visitors with role `ROLE_VISITOR_SSP`

**Response:** parking action object. For `ROLE_VISITOR_SSP`, the response carries a `url` the portal redirects to for iDEAL payment.

**Known error messages (HTTP 400 `message`):**

| Message | Meaning |
|---------|---------|
| `Client money balance is insufficient.` | Not enough money balance |
| `Client time balance is insufficient.` | Not enough time balance |
| `Time slot is overbooked.` | Too many sessions active for this time slot |

### Calculate cost

```http
POST /api/v1/ssp/parking_session/cost_calculator
Authorization: Bearer <token>
```

The request body matches `start`; the portal only adds `machine_number` (not `zone_id`) when `can_select_zone` is set.

**Response fields used by the portal:** `cost` (cents), `duration` (seconds counted against the time balance; time outside the time window is not counted), and `time_frame_data`.

`time_frame_data` is a weekly schedule of 7 lists, index 0 = Monday … 6 = Sunday. Each entry is `{startTime, endTime}` in `HHmm` (local time); an empty list is a free day ("Vrije dag"). According to the portal tooltip it equals the paid parking hours of the chosen paid parking area. Whether public holidays deviate is unknown. The same field appears on parking session detail rows.

### Activate parking action

```http
POST /api/v1/ssp/parking_session/activate
Authorization: Bearer <token>
```

### Update parking action end time

```http
PATCH /api/v1/ssp/parking_session/{session_id}/edit
Authorization: Bearer <token>
Content-Type: application/json
```

**Request body:**

```json
{
  "new_ended_at": "<utc_datetime>"
}
```

`new_ended_at` is ISO 8601 with a `+00:00` offset (`toISOString().replace("Z", "+00:00")`). Stopping ("delete") a session is the same call with `new_ended_at` set to now. The portal offers edit and stop only for rows with `can_edit` and `status` `ACTIVE` or `FUTURE`.

### Fetch parking history

```http
GET /api/v1/ssp/parking_session/list
Authorization: Bearer <token>
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|--------------|
| `page` | int | Page number |
| `row_per_page` | int | Items per page |
| `sort` | string | `{field}:{asc\|desc}` |
| `filters[client_product_id]` | int | Permit filter |
| `filters[{name}]` | string | Dynamic filters |

Session `status` values: `ACTIVE`, `FUTURE` ("Gepland"), `COMPLETED`, `CANCELLED`.

### Confirm visitor parking action

```http
POST /api/v1/ssp/visitor/parking_session/confirmation
Authorization: Bearer <token>
```

### Favorite license plates

| Method | Endpoint | Description |
|---------|----------|--------------|
| GET | `/v1/ssp/favorite_vrn/list` | Fetch list |
| POST | `/v1/ssp/favorite_vrn/add` | Add `{vrn, description}` |
| DELETE | `/v1/ssp/favorite_vrn/{id}/delete` | Delete |

### Look up paid parking zone by machine number

```http
POST /api/v1/ssp/paid_parking_zone/get_by_machine_number
Content-Type: application/json
```

```json
{ "client_product_id": 42, "machine_number": 19850 }
```

**Response:** `{ "zone": { "zone_id": …, … } }`.

**Error messages (HTTP 400 `message`):**

| Message | Meaning |
|---------|---------|
| `This parking machine does not exist.` | Unknown machine |
| `The chosen parking machine is not within the allowed zones.` | Machine outside the permit area |
| `NPR is unavailable.` | National parking register down (temporary) |

### List paid parking zones for a permit

```http
GET /api/v1/ssp/paid_parking_zone/list/client_product/{client_product_id}
```

**Response:** `{ "count": n, "paid_parking_zones": [...] }`. The portal registers state for it but never calls it; the zone fields are unknown.

## Other endpoints

| Method | Endpoint | Description |
|---------|----------|--------------|
| GET | `/health_check` | Status check without auth |
| GET | `/account` | Account info |
| GET | `/permit/list` | All permits |
| GET | `/permit/list_for_client` | Permits for client |
| GET | `/config/list` | App configuration |
| GET | `/country/list` | Country list |
| GET | `/zone/list/permit/{id}` | Zones for permit |

## Client product (permit) fields

`GET /api/v1/client_product/{client_product_id}` fields the portal uses:

| Field | Meaning |
|-------|---------|
| `config.can_select_zone` | Permit lets the user choose a parking machine |
| `config.can_start_parking_session` | Permit can start sessions |
| `ssp.favorite_machine_number` | Default parking machine |
| `ssp.main_account.time_balance` | Time balance in **seconds** |
| `ssp.main_account.money_balance` | Money balance in **cents** |
| `ssp.main_account.username` / `pin` | Meldcode and pincode |
| `ssp.visitor_account.time_balance` | Time balance allocated to the visitor account (seconds) |
| `validity.started_at` / `cancelled_at` | Permit validity |

The portal shows a balance when it is present, `0` included.

## Session status and roles

After login, the user receives a JWT with one or more roles:

- `ROLE_USER_SSP` for a permit holder logged in with meldcode/pincode
- `ROLE_VISITOR_SSP` for a visitor account created by the permit holder; the portal sends it straight to `/permit/{client_product_id}` from the JWT

The app uses `ROLE_VISITOR_SSP` to decide:

- whether `brand: "IDEAL"` must be sent
- whether a started session should redirect into the payment flow

The portal refreshes the token through `POST /refresh_token` 60 seconds before the JWT `exp`.

## App configuration

| Variable | Value |
|-----------|--------|
| City | `amsterdam` |
| DigiD | `true` |
| eHerkenning | `true` |
| Simple login | `false` |

## Architecture notes

- This is not Mendix; it is a custom React / Vite SPA
- The API is REST + JSON with no CSRF token model
- JWT bearer auth is stored in `localStorage["context"]`
- Two API base URLs are used: authentication (`/api`) and front office (`/api/v1`)
- Payment uses iDEAL (`brand: "IDEAL"`) for visitor parking

## Known issues (from GitHub issue `#1`)

### `client_product_id` missing from JWT

The first implementation raised `ValidationError: client_product_id is required` because the Amsterdam JWT does not always contain this field. The fix was:

- accept more JWT claim shapes
- fall back to `/v1/permit/list` and `/v1/permit/list_for_client` when the field is missing from the token

### Machine number selection

For permits with `config.can_select_zone`, parking requires a **machine number**. There are two cases:

- `ssp.favorite_machine_number`: the default machine number for the resident's own street
- alternative machine number: used when parking elsewhere nearby; the user reads the number from the parking machine and enters it, and the portal resolves the zone through `POST /v1/ssp/paid_parking_zone/get_by_machine_number`

## Implementation status

The provider lives in `src/pycityvisitorparking/provider/amsterdam/` on branch `feat/amsterdam-provider` (PR [#130](https://github.com/sir-Unknown/pyCityVisitorParking/pull/130)). It covers:

- meldcode/pincode login, `client_product_id` from the JWT or permit endpoints
- parking machine as a `free_input` reservation target: default machine listed, other machine numbers resolved through `get_by_machine_number`
- machine fields sent only for `can_select_zone` permits; a target for other permits is rejected
- `time_balance` as `MINUTE`, otherwise `money_balance` as `EURO`
- `paid_hours` from one `cost_calculator` call, repeating the weekly `time_frame_data` over 15 days
- starts before `validity.started_at` moved to that moment
- update/end refused for sessions with `can_edit: false` or not ACTIVE/FUTURE
- favorites list/add/delete (no update), reservation updates of `end_time` only
- `NPR is unavailable.` mapped to `ServiceUnavailableError`

## TODO

- [ ] Test with a real meldcode and pincode
- [ ] Check `config.can_select_zone` and the start payload on a real visitor permit
- [ ] Check whether `time_frame_data` deviates on public holidays
- [ ] Capture a `paid_parking_zone/list/client_product/{id}` response (possible reservation target list)
- [ ] `ROLE_VISITOR_SSP`: iDEAL flow and which balance applies
