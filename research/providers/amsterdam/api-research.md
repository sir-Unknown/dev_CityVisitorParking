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

- `zone_id`, `machine_number`, and `is_new_favorite_machine_number` are optional and only apply to permits that support zone selection
- `brand: "IDEAL"` is required for visitors with role `ROLE_VISITOR_SSP`

**Response:** parking action object. For visitor users, success can redirect into the payment flow.

### Calculate cost

```http
POST /api/v1/ssp/parking_session/cost_calculator
Authorization: Bearer <token>
```

The request body matches `start`.

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

### Look up paid parking zone

```http
GET /api/v1/ssp/paid_parking_zone/get_by_machine_number
```

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

## Session status and roles

After login, the user receives a JWT with one or more roles:

- `ROLE_VISITOR_SSP` for visitor parking

The app uses this role to decide:

- whether `brand: "IDEAL"` must be sent
- whether a started session should redirect into the payment flow

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

Amsterdam has a provider-specific quirk: parking requires a **machine number**. There are two cases:

- `favorite_machine_number`: the default machine number for the resident's own street, present in permit data
- alternative machine number: used when parking elsewhere nearby; the user reads the number from the parking machine, enters it manually, and the app looks up the tariff

The current implementation always uses the default `favorite_machine_number`. Alternative machine number selection is not yet supported and is hard to test without a real account.

Tariff lookup per machine works through:

```http
GET /api/v1/ssp/paid_parking_zone/get_by_machine_number?machine_number=<nr>
```

## Implementation status (Amsterdam branch)

The Amsterdam branch already contains a working provider implementation in `src/pycityvisitorparking/provider/amsterdam/`.

### JWT payload

After login, the JWT is decoded to extract:

- user roles such as `ROLE_VISITOR_SSP`
- `client_product_id`, which can also be fetched via `/v1/client_product/{id}`

### Timestamp format

- Requests use **RFC 1123** format, for example `Mon, 20 Apr 2026 10:00:00 GMT`
- Internal handling normalizes values to UTC

### Parking action requirements

- `machine_number` or `zone_id` is required, based on permit details
- This is cached from the permit response after login
- The app fetches it through `CLIENT_PRODUCT_ENDPOINT` when it is not present in the JWT

### Paid zone validity

- Paid parking windows are fetched through the `cost_calculator` endpoint
- Up to 14 days ahead, based on day-of-week plus time blocks in `HHmm` format
- Only blocks with `chargeable: true` are retained

### Manifest (provider capabilities)

```json
{
  "id": "amsterdam",
  "name": "EGIS Parking Services",
  "favorites": [],
  "reservation_editable_fields": ["end_time"]
}
```

Favorite management is **not** supported. Only the end time is editable.

### User-Agent

```text
pycityvisitorparking-amsterdam
```

## TODO

- [ ] Implement alternative machine number selection so the user can provide a different number
- [ ] Integrate tariff lookup through `paid_parking_zone/get_by_machine_number`
- [ ] Validate whether `machine_number` is always present in the permit response
- [ ] Determine the exact `wallet_transaction/list` structure for parking balance
- [ ] Test with a real report code and PIN on the current branch version
