# Logging and error handling in `2park`

Source files:
- `main.ab49b237.chunk.js`
- `2.b914967a.chunk.js`

## Summary

2Park does not use a rich application-wide logging framework for runtime failures, just like DVS. The core behavior is:

- a small fetch wrapper for HTTP calls
- backend responses with their own status model:
  - `status.code.major`
  - `status.code.minor`
  - `status.message`
- UI messages shown through toasts and modals

The vendor bundle also includes `redux-logger`, but no clear sign was found in `main.ab49b237.chunk.js` that it is actually wired into the Redux store.

## Technical basis

The app communicates with:

- base URL: `/gsmpark-app-www/json`

The fetch wrapper:

- uses `POST` with `credentials: "include"`
- encodes form-like parameters in the request body
- returns the JSON body when `response.ok` is true

Important detail:

- on a non-OK HTTP response, the wrapper does not call `callbackError`; it calls the normal callback with only the HTTP status code
- `callbackError` is only used for real fetch or network exceptions

In practice, this creates two error layers:

1. HTTP / transport failures
2. successful JSON responses with `status.code.major/minor/message`

## Logging

### No clear application-specific logger

No separate logger configuration, log-level toggle, or application-specific console logging was found in `main.ab49b237.chunk.js`.

### Bundled `redux-logger`

`2.b914967a.chunk.js` includes the `redux-logger` library with defaults such as:

- `level: "log"`
- `logger: console`
- `logErrors: true`

But:

- no clear `createLogger`, `applyMiddleware`, or store wiring was found in `main.ab49b237.chunk.js`
- there is no hard proof that this logger is active in production or in this specific build

Practical conclusion:

- `redux-logger` is probably present as a dependency in the bundle
- the functionally relevant error handling lives in the app code, not in a visible logging pipeline

## Handling of HTTP status codes

2Park handles HTTP status codes differently from DVS:

- there is no visible explicit branch for `401`, `403`, `404`, `500`, `502`, or `503`
- non-OK HTTP responses only pass a status code into a callback

Many call sites use that status code like this:

- `ga(statusCode, dispatch)`
- that results in a modal or service-not-available message containing the status code

For example:

- `service_not_available`
  - EN: `At the moment it is not possible to use 2Park... Status code: {{statusCode}}`

So:

- HTTP `401` does not have a dedicated auth branch at the HTTP layer in this frontend
- if a request returns non-OK, it is usually handled as "service not available"
- the status code is shown, but not deeply interpreted

## Handling of network / fetch failures

For real fetch exceptions, `callbackError` is used.

Many call sites route that into:

- `va(dispatch)`

That shows the message:

- EN: `Unable to connect to the server. Please check your Internet connection.`

In practice:

- HTTP failure response: service unavailable + status code
- network exception: cannot connect to server

## Backend status model

The most meaningful error handling does not happen at the HTTP layer, but in the JSON response:

- `status.code.major`
- `status.code.minor`
- `status.message`

Pattern in the app:

- `major === "OK"`: success path
- `major === "FAIL"` and `minor === "SESSION_TIMEOUT"`: session expired
- other `FAIL`: show `status.message` to the user

This appears in several places, including:

- authorize/autologin
- categories and product data
- top-up flows
- parking action start / extend / stop
- payment status

## Session timeout

`SESSION_TIMEOUT` is the most important backend code handled explicitly.

Behavior:

- de-authorize the user
- sometimes attempt automatic re-authorization with stored email and cookie `cdts`
- if that fails, route to `/login`
- show toast:
  - `Your session has expired. You have to log in again`
  - `Your session has expired. You have to log in again`

So:

- session expiry is derived primarily from `status.code.minor`, not from HTTP `401`

## Server messages

For backend responses with `major === "FAIL"`, the backend text is usually shown directly:

- `f.toast.error(e.status.message)`

This makes `status.message` the primary source of human-readable error explanation.

Examples of status-based message keys in the translations:

- `status_PAYMENT_INIT_message`
- `status_PAYMENT_CANCELLED_message`
- `status_PAYMENT_PAID_NOT_PROCESSED_message`
- `status_PAYMENT_SUCCESS_message`
- `status_PAYMENT_UNCERTAIN_message`
- `status_INVALID_EXT_CREDS_message`
- `status_PWD_NOT_EQUAL_message`

Examples of concrete UI messages in the bundle:

- `Your session has expired. You have to log in again`
- `Unable to connect to the server. Please check your Internet connection.`
- `The login credentials are not valid`
- `The passwords are not the same`
- `Parking action has been stopped`
- `Parking action has been extended`

## Frontend business and warning messages

Not every relevant message comes from HTTP failures or backend `status.message`.
2Park also uses fixed frontend translation keys for business rules, warnings, and user guidance.

Functionally they belong to the status and message behavior, but technically they are:

- not an HTTP failure
- not `status.code.major/minor`
- not dynamic backend text

Examples:

- `you_cannot_start_parking_action_because_your_balance`
  - EN: `You cannot start a parking action because your balance is € 0,00.`
  - this is a fixed frontend business-rule message
- `your_balance_has_come_below`
  - message used for a configured balance warning
- `balance_warning`
  - label / warning context in the UI
- `select_valid_end_time`
- `select_valid_start_time`
- `date_time_can_not_be_past`
- `password_mismatch`
- `password_requirements`

Important interpretation:

- these messages describe application state or validation
- they do not come from backend `FAIL` responses
- for reverse engineering, they should therefore be kept separate from real server failures

### Frontend business and warning messages found

The keys and texts below were found in the bundle as fixed frontend messages relevant to status, validation, business rules, or warnings.

### Validation

- `value_empty_message`
  - EN: `Value can not be empty`
- `units_too_large_message`
  - EN: `Please, set smaller value`
- `value_more_then_0`
  - EN: `Value should be bigger then 0`
- `same_user_email`
  - EN: `You can not use your email here`
- `enter_correct_email`
  - EN: `Enter a correct e-mail address`
- `date_time_can_not_be_past`
  - EN: `Date and time cannot be past`
- `select_valid_end_time`
  - EN: `Select valid end time`
- `select_valid_start_time`
  - EN: `Select valid start time`
- `only_letters_and_numbers`
  - EN: `Only letters and numbers`
- `password_empty`
  - EN: `The password cannot be empty`
- `password_mismatch`
  - EN: `Password mismatch`
- `password_requirements`
  - EN: `Password does not meet requirements`

### Balance and business rules

- `attention_your_balance`
  - EN: `Attention: your balance is: {{balance}}`
- `your_parking_action_may_have_been`
  - EN: `Your parking action may have been shortened due to a shortage in balance.`
- `balance_warning`
  - EN: `Balance warning`
- `your_balance_has_come_below`
  - EN: `Your balance ({{amount}}) has come below the set value of ({{threshold}}).`
- `you_cannot_start_parking_action_because_your_balance`
  - EN: `You cannot start a parking action because your balance is € 0,00.`
- `click_top_up_button_or_OK`
  - EN: `Click the [Top up] button to top up now (if possible), or [OK] if you want to do this later.`
- `topUp_massage`
  - EN: `For this period it is no longer possible to top up your balance because the maximum has been reached.`
- `you_have_current_and_or_planned_parking_actions`
  - EN: `Attention: Your balance has been increased. You may want to extend or reschedule your current and/or planned parking actions for this product.`
- `is_blocked_and_cannot_be_used`
  - EN: `is blocked and cannot be used`
- `right_now_you_dont_have_any_products`
  - EN: `Right now you don’t have any products`
- `no_products_to_choose_from`
  - EN: `No products to choose from`

### Parking actions

- `running_action_not_found`
  - EN: `Current actions not found`
- `planned_action_not_found`
  - EN: `Scheduled actions not found`
- `parking_action_info`
  - EN: `Parking action is stopped due to activation at the end of the day.`
- `alternative_info`
  - EN: `The following alternative is proposed:`
- `only_paid_parking`
  - EN: `Only the paid parking time will be charged`
- `no_license_plate_info`
  - EN: `No license plate is currently active`
- `parking_action_extend_message`
  - EN: `Parking action has been extended`
- `parking_action_stop_message`
  - EN: `Parking action has been stopped`
- `planned_parking_action_changed`
  - EN: `Scheduled parking action changed`
- `could_not_change_planned_parking_action`
  - EN: `Could not change scheduled parking action`

### License plate and vehicle context

- `temporary_license_plate_not_active`
  - EN: `The fixed license plate is not active as long as the temporary license plate is used`
- `temporary_license_plate_active`
  - EN: `The fixed license plate is active`

### Favorites and authorizations

- `withdraw_authorization_success`
  - EN: `Authorization is withdrawn`
- `withdraw_authorization_failed`
  - EN: `Authorization can not be withdrawn`
- `withdraw_authorization_confirmation`
  - EN: `Are you sure you want to withdraw this authorization?`
- `have_not_authorized`
  - EN: `You have no authorizations yet for this sector`
- `favorite_not_found`
  - EN: `You do not have any favorites yet`
- `recent_not_found`
  - EN: `There are no recent parking actions`
- `withdraw_favorite_success`
  - EN: `Favorite deleted`
- `withdraw_favorite_failed`
  - EN: `Favorite can not be deleted`
- `withdraw_favorite_confirmation`
  - EN: `Are you sure you want to delete this favorite?`
- `have_not_favorites`
  - EN: `You do not have any favorites yet for this product`

### Session and authentication

- `your_session_has_expired_you_have_to_log_in_again`
  - EN: `Your session has expired. You have to log in again`
- `status_INVALID_EXT_CREDS_message`
  - EN: `The login credentials are not valid`
- `status_PWD_NOT_EQUAL_message`
  - EN: `The passwords are not the same`

### Payment and top-up

- `status_PAYMENT_INIT_message`
  - EN: `No payment result was received. There might be a problem with the payment service.`
- `status_PAYMENT_CANCELLED_message`
  - EN: `The payment was cancelled.`
- `status_PAYMENT_PAID_NOT_PROCESSED_message`
  - EN: `Your payment has been registered but not yet processed. When your payment has not been processed after 15 minutes, please contact your parking supplier.`
- `status_PAYMENT_SUCCESS_message`
  - EN: `The payment completed succesfully - your balance has been updated.`
- `status_PAYMENT_UNCERTAIN_message`
  - EN: `The status of your payment is uncertain - possibly the payment will be processed a later date`

### How to use this for logging

For a Python provider or integration implementation, these frontend messages are valuable as:

- `warning` for business blocks and validation failures
- `info` for confirmations and user guidance
- `error` only when the key functionally represents a failed operation or error state

The most useful extra context to log:

- translation key
- rendered text
- screen or flow
- relevant product, balance, or date context
- whether a backend `status.message` or HTTP failure was also present

## Provider logging advice

For a Python provider or Home Assistant integration, the logging should ideally cover these categories.

### Always log

- endpoint or action
  - for example `start_action`, `extend_action`, `stop_action`, `login`, `topup`
- HTTP outcome
  - status code on a non-OK response
  - distinction between HTTP failure and network exception
- backend status
  - `status.code.major`
  - `status.code.minor`
  - `status.message`
- flow context
  - for example `start_parking_action`, `extend_parking_action`, `stop_parking_action`
- relevant business context
  - product ID
  - action type
  - whether alternatives were returned
  - whether a balance-related block was active

### Suggested log levels

- `error`
  - network failures
  - non-OK HTTP responses
  - backend `FAIL` without a recovery path
  - unexpected exceptions or parsing problems
- `warning`
  - `SESSION_TIMEOUT`
  - backend `FAIL` with user impact but without a technical crash
  - business blocks such as balance `0,00`
  - alternates or alternative proposals when start or extend fails
- `info`
  - successful start / extend / stop paths
  - payment status updates
  - frontend-style companion business messages
- `debug`
  - raw status objects
  - translation keys
  - extra diagnostic context for reverse engineering

### Concrete integration points

- log `SESSION_TIMEOUT` explicitly as session expiry
  - not only as a generic backend failure
- log alternates explicitly
  - including that the backend did not return a hard failure but proposed an alternative path
- log business blocks as a separate category
  - for example `you_cannot_start_parking_action_because_your_balance`
  - do not merge them with network or server errors
- log payment statuses separately from generic failures
  - `PAYMENT_INIT`
  - `PAYMENT_CANCELLED`
  - `PAYMENT_PAID_NOT_PROCESSED`
  - `PAYMENT_SUCCESS`
  - `PAYMENT_UNCERTAIN`

### What should not be treated as a normal error

- validation messages such as:
  - `value_empty_message`
  - `select_valid_end_time`
  - `password_mismatch`
- business warnings such as:
  - low balance
  - no products available
  - no favorites or recent actions

These are still useful diagnostically, but they usually belong at `warning` or `info`, not `error`.

### Privacy and redaction

When logging inside the provider:

- mask license plates
- do not log passwords or raw session cookies
- only log email addresses in masked form when genuinely needed
- log payment references only when needed and preferably in shortened form

### Practical minimum set

As a minimum useful logging set for the provider:

1. action / endpoint
2. HTTP status or network failure
3. `status.code.major`
4. `status.code.minor`
5. `status.message`
6. business message key when frontend-relevant
7. masked context such as product ID and license plate

### Short conclusion

Provider logging should capture not only server failures, but also the business statuses and fixed frontend messages that explain why an action did or did not proceed. In 2Park especially, a lot of meaning sits in the combination of HTTP outcome, backend status, and business-rule messaging.

## Detail: parking action status handling

For starting, extending, and stopping parking actions, this status and error behavior is especially relevant.

### Start

When starting a parking action:

- `status.code.major === "OK"`: success path without a distinct success toast
- `FAIL` with `data.alternates.length > 0`: alternate path
- `FAIL + SESSION_TIMEOUT`: re-authorization flow
- other `FAIL`: toast with `status.message`
- `catch`: failure path plus re-authorization flow

In the alternate path, the app uses:

- `status.message` as context
- alternative backend data from `data.alternates`

### Extend

When extending a parking action:

- `status.code.major === "OK"`: success toast
  - `parking_action_extend_message`
- `FAIL` with `data.alternates.length > 0`: alternate path
- `FAIL + SESSION_TIMEOUT`: re-authorization flow
- other `FAIL`: toast with `status.message`
- `catch`: failure path plus re-authorization flow

### Stop

When stopping a parking action:

- `status.code.major === "OK"`: success toast
  - `parking_action_stop_message`
- `FAIL + SESSION_TIMEOUT`: re-authorization flow
- other `FAIL`: toast with `status.message`
- `catch`: failed state only; there is no explicit toast visible here

### Additional relevant status

For parking actions, there is one more functionally important failure type besides `OK` / `FAIL`:

- `FAIL` with `data.alternates`

This is not a simple error-only response, but a state where the backend returns alternative options and the frontend uses them as the next step.

## What this means for reverse engineering

For a Python implementation, this is likely the relevant model:

1. Treat non-OK HTTP as a transport or service problem and log the status code.
2. Treat fetch exceptions as connectivity failures.
3. Use backend `status.code.major/minor/message` as the primary source for functional error interpretation.
4. Treat `SESSION_TIMEOUT` as session expiry, even without HTTP `401`.
5. Treat `status.message` as the most important error text for user diagnosis.

## Short conclusion

2Park relies primarily on application-level statuses in the JSON response and much less on HTTP status codes. Visible error explanation usually comes from `status.message`, while HTTP failures mainly lead to generic "service unavailable" or "cannot connect to server" messages. `redux-logger` is bundled, but there is no clear proof that it is actively used.
