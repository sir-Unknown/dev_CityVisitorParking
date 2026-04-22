# Rotterdam Visitor Parking — API Research

URL: https://bezoek.rotterdam.nl

## Platform

**Mendix** web application. All communication goes through one central endpoint:

```
POST https://bezoek.rotterdam.nl/xas/
Content-Type: application/json
```

## Session bootstrap

### Step 1: GET `/`

Load the start page. This returns the initial cookies:

| Cookie | Description |
|--------|-------------|
| `__Host-__rbp-XASSESSIONID` | Mendix session ID |
| `xasid` | XAS node ID (for example `0.eca2673a-...`) |
| `__Host-SessionTimeZoneOffset` | Time zone offset in minutes |
| `__Host-DeviceType` | `Desktop` |
| `__Host-Profile` | `Responsive` |

### Step 2: POST `/xas/` — `get_session_data`

Initialize the session and retrieve the CSRF token.

**Request:**
```json
{
  "action": "get_session_data",
  "params": {
    "offline": true,
    "referrer": null,
    "deviceType": "Desktop",
    "profile": "",
    "timezoneoffset": -120,
    "timezoneId": "Europe/Amsterdam",
    "preferredLanguages": ["nl-NL", "nl"],
    "version": 2
  }
}
```

**Response (relevant):**
```json
{
  "csrftoken": "9a61b50d-f489-48c5-96b9-40d8f4061708",
  "cachebust": "639120283760966107",
  "keepalive": 50334,
  "constants": [
    { "name": "Parkeren.MinutenPerEenheid", "value": "10" },
    { "name": "Parkeren.ParkeeractieAantalDagenToekomst", "value": "28" }
  ]
}
```

After this call, `x-csrf-token` must be included as a header on all subsequent requests.

### Explicit `get_session_data` breakdown

This is the first meaningful XAS call after the initial page load.

- Purpose: establish the Mendix client session and return runtime metadata.
- Required before login: yes.
- Main outputs: CSRF token, cache-bust value, keepalive interval, and app constants.
- Transport: `POST https://bezoek.rotterdam.nl/xas/` with `Content-Type: application/json`.

The captured request shape is:

```json
{
  "action": "get_session_data",
  "params": {
    "offline": true,
    "referrer": null,
    "deviceType": "Desktop",
    "profile": "",
    "timezoneoffset": -120,
    "timezoneId": "Europe/Amsterdam",
    "preferredLanguages": ["nl-NL", "nl"],
    "version": 2
  }
}
```

The most important response fields are:

- `csrftoken`: required for later `x-csrf-token` headers.
- `cachebust`: used in page XML and asset URLs.
- `keepalive`: session keepalive interval.
- `constants`: app-level business constants used by the frontend.

## Request headers (after session init)

```http
POST /xas/ HTTP/1.1
Host: bezoek.rotterdam.nl
Content-Type: application/json
Accept: application/json
x-csrf-token: <csrftoken from get_session_data>
x-mx-reqtoken: <timestamp>-<counter>   (for example 1776678064085-1)
Cookie: __Host-__rbp-XASSESSIONID=...; xasid=...; __Host-SessionTimeZoneOffset=-120; __Host-DeviceType=Desktop; __Host-Profile=Responsive
```

The `x-mx-reqtoken` is a monotonic counter in the format `{unix_ms}-{sequence}`.

## Login

Login uses the **standard Mendix login API** (`mx.login` / `mx.login2`), as found in `jsactions.js`. There is no custom login nanoflow.

### Step 1: Fetch the login view object

Before the actual login submit, the page uses `runtimeOperation` to call the datasource nanoflow `Inloggen.DatasourceAanmelden` and create an `Inloggen.AanmeldenView` object.

### Explicit pre-login `runtimeOperation` breakdown

The pre-login sequence observed in Chromium is:

1. `POST /xas/` with `action: "instantiate"` for `MaintenanceMode.MaintenanceHelper`
2. `GET /rest/status` returning `false`
3. One or more `POST /xas/` `runtimeOperation` calls using the returned helper GUID
4. Another `GET /rest/status` returning `false`
5. `POST /xas/` with `action: "login"`

Two concrete pre-login calls captured before the failed login:

**Instantiate maintenance helper**

```json
{
  "action": "instantiate",
  "params": {
    "objecttype": "MaintenanceMode.MaintenanceHelper"
  },
  "changes": {},
  "objects": [],
  "profiledata": {
    "1776693606566-8": 17
  }
}
```

Response summary:

- Status: `200`
- Returns object GUID `282037926664090443`
- Sets `toonOnderhoudsWindow=false`
- Sets `toonMelding=false`

**Runtime operation using the helper GUID**

```json
{
  "action": "runtimeOperation",
  "operationId": "xr7ytoZi91yuKeXP32SNHw",
  "params": {
    "Objects": {
      "guids": ["282037926664090443"]
    }
  },
  "changes": {},
  "objects": [
    {
      "objectType": "MaintenanceMode.MaintenanceHelper",
      "guid": "282037926664090443"
    }
  ],
  "profiledata": {
    "1776693606574-9": 19,
    "1776693606578-10": 20,
    "1776693606583-11": 19
  }
}
```

Response summary:

- Status: `200`
- Commits the same helper object
- No redirect or auth-state change
- Likely checks or finalizes maintenance-mode state before login

The important observation is that these calls happen before the actual `login` action and should not be confused with credential submission.

### Step 2: Login submit

**Request:**
```json
POST /xas/
{
  "action": "login",
  "params": {
    "username": "email@example.com",
    "password": "password",
    "useAuthToken": "default"
  },
  "profiledata": { "<reqtoken>": 28 }
}
```
Headers: `x-csrf-token` is required.

**Success:** HTTP 200, response body `{}`  
**Failure:** HTTP 401, response body `{}`

> `useAuthToken: "default"` is a fixed value. It is likely related to token-based auth in the mobile app, but for the web flow it is always `"default"`.

### Concrete failed login capture

The capture below was taken in Chromium through the devtools bridge, with logging enabled **before** submit.

**Fake credentials used:**

```json
{
  "username": "fake@example.com",
  "password": "TotallyWrongPassword123!"
}
```

**Captured request:**

```http
POST https://bezoek.rotterdam.nl/xas/
Status: 401 Unauthorized
```

**Request headers (relevant):**

```http
content-type: application/json
accept: application/json
origin: https://bezoek.rotterdam.nl
referer: https://bezoek.rotterdam.nl/
x-csrf-token: 2d6b8641-3471-4325-bdb8-5d4bc2d71571
x-mx-reqtoken: 1776693640709-15
cookie: originURI=/login.html; __Host-SessionTimeZoneOffset=-120; __Host-__rbp-XASSESSIONID=e8b0fb5c-240e-4a89-a0af-59615fd53c23; xasid=0.541cde0d-9bb6-488f-a4d0-d6f67351c4d0; __Host-DeviceType=Desktop; __Host-Profile=Responsive
```

**Request body:**

```json
{
  "action": "login",
  "params": {
    "username": "fake@example.com",
    "password": "TotallyWrongPassword123!",
    "useAuthToken": "default"
  },
  "profiledata": {
    "1776693640687-14": 20
  }
}
```

**Response headers (relevant):**

```http
content-type: application/json;charset=utf-8
cache-control: no-store
server: nginx
```

**Response body:**

```json
{}
```

**Visible UI error message:**

```text
Invalid email address or password
```

**Redirect chain:**

- No redirects observed
- The `performance` navigation entry reported `redirectCount: 0`
- The page stayed on `https://bezoek.rotterdam.nl/`
- The document title stayed `Bezoekersparkeren - Login`

### Alternative: `login2` (with extra parameter)

From `jsactions.js`: `void 0===r ? mx.login(e,t,o,i) : mx.login2(e,t,r,o,i)`  
`r` is an optional third parameter and is not used in the standard email/password login flow.

**Status check:**
```
GET /rest/status
```
Returns `false` when not logged in, and presumably `true` when the session is authenticated.

## XAS action overview

| Action | Purpose |
|--------|------|
| `get_session_data` | Initialize the session and fetch the CSRF token |
| `runtimeOperation` | Execute a nanoflow or microflow (login, create parking action, etc.) |
| `retrieve_by_ids` | Fetch Mendix objects by GUID |

### `runtimeOperation` structure
```json
{
  "action": "runtimeOperation",
  "operationId": "<base64-like ID>",
  "params": {},
  "options": {
    "offset": 0,
    "amount": 1,
    "wantCount": false,
    "extraXpath": ""
  },
  "changes": {},
  "objects": []
}
```

The `operationId` is application-version-specific and is embedded in the `.page.xml` files.

## Page XML files

Mendix loads page definitions as XML:

```
GET /pages/{locale}/{PagePath}.page.xml?{cachebust}
GET /pages/{locale}/{LayoutPath}.layout.xml?{cachebust}
```

Example: `/pages/en_US/Inloggen/Aanmelden_Web.page.xml`

These files contain the `operationId` values for all nanoflows used on that page.

## App constants

| Constant | Value | Meaning |
|-----------|--------|-----------|
| `Parkeren.MinutenPerEenheid` | 10 | Parking block size in minutes |
| `Parkeren.ParkeeractieAantalDagenToekomst` | 28 | Maximum number of days that can be scheduled ahead |
| `ParkerenWeb.KentekenValidatieNL` | `^[A-Z0-9]{6}$` | Dutch plate validation (without dashes) |
| `ParkerenWeb.KentekenValidatieEU` | `^[A-Z0-9ÄÁËÉÈÏÍÖÓÜÚ]{1,10}$` | EU plate validation |

## Architecture notes

- The platform also has a **mobile app** (iOS/Android) with the scheme `rbp`
- SSO exists through `sso.ir.rotterdam.nl` (SAML) and `sts.rotterdam.nl` (ADFS), likely for business users and not relevant for the regular citizen login
- Map data is loaded through PDOK and MapTiler

## Downloaded files

| File | Contents |
|---------|--------|
| `jsactions.js` | Nanoflow bundle containing login logic and parking actions |
| `appSetup.js` | App configuration bootstrap |

## TODO

- [ ] Capture a successful login with real credentials to map the authenticated session flow
- [ ] After login: fetch parking actions, likely through a `runtimeOperation` datasource nanoflow
- [ ] Create a new parking action (plate + time window)
- [ ] Stop an active parking action
- [ ] Fetch the vehicle list
- [ ] Continue analyzing `jsactions.js` for parking-related `operationId` values
