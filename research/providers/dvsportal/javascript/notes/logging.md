# Logging configuration in `dvs.js`

Source file:
- `dvs.js?v=iDcJBdGcnPT0F5czRfTvgHKaKqh5WpL22heEN-f4S6Y.js`

## Summary

This bundle does not expose a dedicated application logger, a configurable log level, or an external telemetry integration such as Sentry. The practically relevant behavior is request handling, error normalization, and a small amount of framework-level warning output.

## Relevant runtime configuration

### `window.__env`

During bootstrap, a local configuration object is filled from `window.__env`:

- `apiURL`
- `xsrfCookieName`

Usage in the bundle:

- `apiURL` is propagated through `BASE_CONFIG` as the API `baseURL`.
- `xsrfCookieName` is used by `authInterceptor` to read the XSRF cookie.

Relevant lines:

- bootstrap / app-config around module initialization
- `t.constant("BASE_CONFIG", { baseURL: e.apiURL })`
- `this.xsrfCookieName = window.__env.xsrfCookieName`

## Logging-related behavior

### 1. `authInterceptor`

`authInterceptor` does not perform true logging, but it does implement request and response behavior that matters during debugging:

- it sets the `X-XSRF-TOKEN` header when the cookie from `window.__env.xsrfCookieName` is present
- it only adds the header for same-origin requests
- it redirects on `401` to `/?logout=302`

This is mainly security and session behavior, not logging.

### 2. `ApiService.errorResponse`

For HTTP failures, no technical error is logged to the console or an external sink. The app translates failures into a generic user-facing message:

- `"The server is currently unavailable, please check your internet connection and try again"`

Only `data` and `status` are included in the returned error object.

Conclusion:

- there is error normalization
- there is no visible persistent logging
- there is no explicit debug output

### 3. `requestInterceptor`

`requestInterceptor` does not log either, but it does influence session behavior:

- requests to `/api/login` or route `/` cancel or reset the session-expiration timer differently
- modal-template requests are excluded from the timer-reset logic

This is also runtime behavior that is useful for troubleshooting, but not logging configuration.

### 4. `loadingBar`

The separate `loadingBar` module installs an HTTP interceptor to show UI progress:

- start on requests
- complete on responses and response errors

This is visual request state, not logging.

## Non-app-specific framework logging

Most `warn(...)` and `error(...)` calls found in the bundle come from Angular UI Bootstrap components, for example:

- date parsing warnings through `$log.warn`
- popup/date/timepicker warnings/errors
- typeahead warnings about unsafe configuration without `ngSanitize`

These are framework-level parts of the bundle and do not appear to be DVS- or provider-specific.

## What is missing

For reverse engineering, these absences matter:

- no application-specific `console.log`, `console.warn`, or `console.error`
- no `debugEnabled`, `logLevel`, `logger`, or similar toggle
- no visible telemetry or error-reporting integration
- no separate provider or logger configuration for DVS Portal

## Practical conclusion

If we want to mirror this frontend behavior in a Python implementation, the relevant parts are limited to:

1. Use `window.__env.xsrfCookieName` for XSRF header injection
2. Use `window.__env.apiURL` as the basis for API routing
3. treat `401` as logout or session expiry
4. normalize network failures to a generic availability message

There is no indication in this bundle of a richer logging framework that needs to be reproduced functionally.

## Handling of server messages

In practice, the frontend distinguishes between:

1. transport / HTTP failures
2. backend responses that include `ErrorMessage`
3. a small set of known `loginStatus` values

## Handling of HTTP status codes

The bundle contains very little explicit HTTP status handling.

### `401 Unauthorized`

`authInterceptor.responseError` handles `401` specially:

- when `401 === e.status`, the app immediately navigates to `/?logout=302`
- afterwards, the error is still rejected

In practice, this means:

- `401` is treated as an auth or session problem
- the app tries to terminate the session and send the user back to login
- `401` is not treated as a normal API failure with only a generic message

### `status === 0` without response data

There is a separate branch in the validate flow:

- when `e.status === 0` and `e.data == null`, the app goes to login
- afterwards, the error is also passed to `alertService`

This looks like a fallback for failed requests without a useful response, for example:

- network issues
- broken session context
- browser or transport failures without a clean backend response

### Other HTTP status codes

Voor codes zoals:

- `403`
- `404`
- `500`
- `502`
- `503`

there is no dedicated handling visible in the bundle.

These go through `ApiService.errorResponse()` and are normalized to the same message:

- `The server is currently unavailable, please check your internet connection and try again`

The frontend still retains:

- `status`
- `data`

but does not use them to show a more specific user-facing message.

### 1. Transport / HTTP failures

On failed HTTP calls, `ApiService.errorResponse()` converts the failure to a generic object:

- `message`: `"The server is currently unavailable, please check your internet connection and try again"`
- `data`: raw response data
- `status`: HTTP status

This explicitly normalizes a real network or transport failure to one fixed user-facing message.

### 2. Backend `ErrorMessage` is usually passed through directly

For many API endpoints:

- if the response contains `ErrorMessage`, the frontend rejects with:
  - `code: e.Result`
  - `message: e.ErrorMessage`

This pattern appears in, among others:

- `login`
- `login/getbase`
- `permitlicenseplate/upsert`
- `permitlicenseplate/remove`
- `permitmedialicenseplate/upsert`
- `permitmedialicenseplate/remove`
- `reservation/create`
- `reservation/update`
- `reservation/end`
- `upgrade`
- `payment/checktransaction`
- `payment/isupgradeallowed`

Conclusion:

- the backend text in `ErrorMessage` is the primary source of meaningful error explanation
- `Result` is included, but is rarely interpreted in a meaningful way by the frontend

### 3. Known status codes

The frontend only handles a few `loginStatus` values explicitly:

- `2`: invalid login / reset code combination; shown as field error `userorcode`
- `17`: password complexity failure in the reset flow
- `0`: failure in the `UserAs` flow; shown as field error on `asIdentifier`

No separate mapping is visible for other `Result` or `loginStatus` values.

## Concrete messages in the frontend

These texts are hardcoded in the bundle and therefore do not come from backend `ErrorMessage` values:

- `Sorry, something went wrong.`
- `The server is currently unavailable, please check your internet connection and try again`
- `Login is currently unavailable, our apologies for the inconvenience`
- `Your login details could not be stored; you will need to log in again`
- `No active reservations found`
- `No active reservation found.`
- `No pass found`
- `No license plate(s) available for the selected period!`
- `Enter a license plate.`
- `The reservation history page was not found`
- `Error while fetching reservations.`
- `The top-up history page was not found`
- `Error while fetching top-ups.`
- `The transfer history page was not found`
- `Error while fetching transfers.`
- `The passwords do not match`
- `No balance information found`
- `No top-up information found`
- `Product not found`
- `Your reservation was submitted successfully.`
- `Your reservation was submitted successfully. Free parking and free block times are not deducted from your balance.`

## What this means for reverse engineering

For a Python implementation, this is likely the practical interpretation:

- log transport failures as generic availability problems
- log backend failures with both `Result` and `ErrorMessage`
- treat `ErrorMessage` as the primary source of human-readable error explanation
- treat `Result` mainly as diagnostic context, not as a complete error classification system

## Status-style messages in DVS

Unlike 2Park, DVS does not appear to have a clear fixed set of `status_*` message keys.

What is visible:

- backend failures mainly flow through:
  - `ErrorMessage`
  - `Result`
  - soms `LoginStatus`
- fixed frontend success messages do exist, but they are limited and ad hoc
- the UI also has internal progress state for active reservations without explicit text messages

### Fixed success and status-like messages found

- `Your reservation was submitted successfully.`
- `Your reservation was submitted successfully. Free parking and free block times are not deducted from your balance.`
- `The end time was updated`

These are passed to `alertService.add(...)` with type `success`.

### Fixed business and information messages found

- `No active reservations found`
- `No active reservation found.`
- `No pass found`
- `No license plate(s) available for the selected period!`
- `Enter a license plate.`
- `No balance information found`
- `No top-up information found`
- `Product not found`

These are functionally important, but they are not backend status codes.

### Internal state without a fixed text message

For active reservations, the UI also computes an internal stage:

- `stage = 0`
- `stage = 1`
- `stage = 2`
- `stage = 3`
- `stage = 4`

This is derived from:

- `minutesTotal`
- `minutesLeft`
- `warningPercentage`
- `endPercentage`

Interpretation:

- this appears to be a visual progress / warning state for reservation rendering
- no fixed textual status message is attached to it in the bundle
- this internal stage can still be useful diagnostic context if similar logic is recreated in provider logging

### Practical conclusion

So DVS does have status-like messages, but:

- they are mostly standalone success and business messages
- there is no rich structured status-message system like 2Park
- meaningful error explanation still mainly comes from backend `ErrorMessage`

## Provider logging advice

For a Python provider or Home Assistant integration, DVS logging should at least cover these categories.

### Always log

- endpoint or action
  - for example `login`, `validate`, `reservation/create`, `reservation/update`, `reservation/end`, `upgrade`
- HTTP outcome
  - statuscode
  - distinction between response failures and network / transport failures
- backend error context
  - `ErrorMessage`
  - `Result`
  - `LoginStatus` when present
- flow context
  - for example `start_reservation`, `update_reservation`, `end_reservation`, `login`, `payment_check`
- relevant business context
  - permit media type
  - permit media code or another non-PII identifier
  - whether an active reservation existed
  - of free blocks / gratis bloktijden meespeelden

### Suggested log levels

- `error`
  - network failures
  - HTTP failures
  - backend `ErrorMessage` without a recovery path
  - unexpected parse or session issues
- `warning`
  - `401` logout or session expiry
  - `status === 0` without data
  - business blocks such as no active reservation or no license plate available
  - unclear or incomplete payment outcomes
- `info`
  - reservation started successfully
  - end time updated successfully
  - payment checked
  - success messages such as reservation submitted successfully
- `debug`
  - raw `Result` / `LoginStatus` values
  - internal active-reservation stage or progression
  - extra flow context voor reverse engineering

### Concrete integration points

- log `401` explicitly as an auth or session problem
  - not only as a generic transport failure
- log `LoginStatus` separately from `Result`
  - especially for `0`, `2`, and `17`
- log success messages explicitly
  - reservation submitted
  - end time updated
- log business blocks separately from backend failures
  - `No active reservation found`
  - `No pass found`
  - `No license plate(s) available for the selected period!`
- log whether a reservation included free blocks
  - this visibly affects the success message and is therefore functionally relevant

### What should not be treated as a normal error

- user validation such as:
  - `Enter a license plate.`
  - `The passwords do not match`
- business or UI state such as:
  - no active reservation
  - no balance information
  - product not found
- visual warning or progress state for an active reservation

These are useful diagnostically, but they usually belong at `warning` or `info`, not `error`.

### Privacy and redaction

For provider logging:

- mask license plates
- do not log passwords, PINs, or raw tokens
- only log permit or reservation identifiers when they are not directly PII
- log payment references only in shortened or hashed form when needed

### Practical minimum set

As a minimum useful logging set for the DVS provider:

1. action / endpoint
2. HTTP status or network failure
3. `ErrorMessage`
4. `Result`
5. `LoginStatus` when present
6. fixed frontend-style message or success message when functionally relevant
7. masked context such as permit ID, reservation ID, and license plate

### Short conclusion

DVS has less structured status messaging than 2Park, but good provider logging should still include success messages, business blocks, and session state alongside technical failures. The combination of `ErrorMessage`, `Result`, `LoginStatus`, and a small set of fixed UI messages provides the most diagnostic value.
