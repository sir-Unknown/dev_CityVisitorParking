# JavaScript diff overview

This document summarizes the differences between the files in:

- `citypermit/`
- `dvs/`

The source files are minified, so many differences are hard to read directly. Because of that, this file provides a practical summary of the meaningful changes per directory.

## `citypermit/`

Compared files:

- `citypermit-4c176acf75e323f38a5f.js`
- `citypermit-5c301e25872162b7df1d.js`

### Files

| File | Size | Notes |
| --- | ---: | --- |
| `citypermit-4c176acf75e323f38a5f.js` | 493099 bytes | Slightly larger variant |
| `citypermit-5c301e25872162b7df1d.js` | 493096 bytes | 3 bytes smaller |

### Diff summary

| Comparison | Change type | Details | Impact |
| --- | --- | --- | --- |
| `4c176...` -> `5c301...` | Equality operator | `0 === d++` -> `0 == d++` | Very small |
| `4c176...` -> `5c301...` | Equality operator | `0 === --d` -> `0 == --d` | Very small |
| `4c176...` -> `5c301...` | Currency check | `i.base * t === 1` -> `i.base * t == 1` | Very small |
| `4c176...` -> `5c301...` | Overall assessment | Only 3 changes found | No obvious major functional change |

## `dvs/`

Compared files:

- `dvs.js?v=-98JiekC9_gZNsINHETZuBZXSM8pHDFxzFfkDUdkHXU.js`
- `dvs.js?v=ZihKxfKhyv2DGkcVTPycPNPZpBxd2FcylsJr5pyhpAU.js`
- `dvs.js?v=iDcJBdGcnPT0F5czRfTvgHKaKqh5WpL22heEN-f4S6Y.js`

### Files

| File | Size | Notes |
| --- | ---: | --- |
| `dvs.js?v=-98JiekC9_gZNsINHETZuBZXSM8pHDFxzFfkDUdkHXU.js` | 457799 bytes | Smallest / older-looking variant |
| `dvs.js?v=ZihKxfKhyv2DGkcVTPycPNPZpBxd2FcylsJr5pyhpAU.js` | 461087 bytes | Newer variant |
| `dvs.js?v=iDcJBdGcnPT0F5czRfTvgHKaKqh5WpL22heEN-f4S6Y.js` | 461434 bytes | Very close to `Zih...` |

### Pairwise diff summary

| Comparison | Area | Change | Likely impact |
| --- | --- | --- | --- |
| `-98...` -> `Zih...` | `AuthInterceptor` | Expanded to use `$document`, inject `X-XSRF-TOKEN`, read `window.__env.xsrfCookieName`, and enforce same-origin checks | Meaningful functional/security-related change |
| `-98...` -> `Zih...` | `401` handling | Redirect changed from `/` to `/?logout=302` | Meaningful behavior change |
| `-98...` -> `Zih...` | Angular config | `a.defaults.xsrfCookieName` is no longer set globally; XSRF handling moved into interceptor logic | Meaningful structural change |
| `-98...` -> `Zih...` | `alertService` | Rewritten from factory to service/class | Meaningful internal refactor |
| `-98...` -> `Zih...` | `alertService` behavior | Error handling now prefers `message`; auto-close timeout capped at `15000` ms | Small but meaningful behavior change |
| `-98...` -> `Zih...` | `requestInterceptor` | Now also uses `$location`; timer cancel/reset behavior depends on current path too | Meaningful behavior change |
| `-98...` -> `Zih...` | Equality checks | `0 == c++` -> `0 === c++`, `0 == --c` -> `0 === --c`, `i.base * t == 1` -> `i.base * t === 1` | Small cleanup / stricter comparisons |
| `-98...` -> `Zih...` | `uibTypeahead` / Angular UI Bootstrap | Many local variable renames/swaps | Likely minifier/rebuild noise |
| `Zih...` -> `iDc...` | XSRF guard | `if (this.xsrfCookieName && this.$document[0])` -> `if (this.$document[0])` | Small meaningful difference |
| `Zih...` -> `iDc...` | XSRF behavior | `iDc...` still enters the cookie loop when `xsrfCookieName` is empty or undefined | Small meaningful difference |
| `Zih...` -> `iDc...` | `uibTypeahead` / Angular UI Bootstrap | Many local variable renames/swaps | Likely minifier/rebuild noise |
| `-98...` -> `iDc...` | Overall | Includes all major changes from `-98...` -> `Zih...` | Meaningful functional/security-related change |
| `-98...` -> `iDc...` | Extra nuance | Missing `this.xsrfCookieName` guard compared to `Zih...` | Small meaningful difference |

### Final assessment

| Directory | Summary |
| --- | --- |
| `citypermit/` | Nearly identical files with only 3 very small operator changes |
| `dvs/` | `-98...` is materially different from `Zih...` and `iDc...`; the biggest changes are explicit XSRF handling and the rewritten `alertService` |
| `dvs/` | `Zih...` and `iDc...` are very close; the clearest meaningful difference is the extra `this.xsrfCookieName` guard in `Zih...` |

## `citypermit/` vs `dvs/`

### Cross-directory comparison

| Comparison area | `citypermit/` | `dvs/` | Conclusion |
| --- | --- | --- | --- |
| Number of files compared | 2 files | 3 files | `dvs/` has more version variants |
| File size spread | 493099 vs 493096 bytes | 457799 vs 461087 vs 461434 bytes | `citypermit/` variants are almost identical in size; `dvs/` shows a much larger spread |
| Number of detected meaningful changes | 3 very small operator changes | Multiple functional and structural changes | `dvs/` changed much more substantially |
| Equality operator changes | Yes, strict -> loose equality | Yes, mostly loose -> strict equality in newer variants | The operator direction differs between the two directories |
| Security-related changes | None clearly visible | Yes, explicit XSRF header handling and same-origin checks | Security-related changes are concentrated in `dvs/` |
| Auth / session behavior changes | None clearly visible | Yes, `AuthInterceptor` and `requestInterceptor` changed | Runtime request behavior changed in `dvs/`, not in `citypermit/` |
| Service architecture changes | None clearly visible | Yes, `alertService` rewritten from factory to service/class | Internal Angular service structure changed in `dvs/` |
| Minifier / rebuild noise | Very little | A lot, especially in `uibTypeahead` / Angular UI Bootstrap sections | `dvs/` has much more non-functional diff noise |
| Overall stability between versions | Very high | Moderate between `Zih...` and `iDc...`, lower between `-98...` and the newer variants | `citypermit/` is more stable across captured versions |
| Likely interpretation | Small rebuild or tiny patch | Larger application update or refactor with security and request-flow changes | `dvs/` appears to have undergone a meaningful implementation update |

### High-level takeaway

| Directory | Main takeaway |
| --- | --- |
| `citypermit/` | The captured versions are almost identical and differ only in tiny operator changes |
| `dvs/` | The captured versions include a meaningful functional update, especially around XSRF handling, auth/session flow, and alert service implementation |
| Combined view | If only one directory reflects a significant application change, it is clearly `dvs/`, not `citypermit/` |

### Same product family and relative modernity

| Question | Answer | Evidence |
| --- | --- | --- |
| Are `citypermit` and `dvs` likely the same product? | Probably not exactly the same product, but very likely the same product family or frontend codebase | Both use `module("app")`, both read from `window.__env`, both include very similar Angular UI Bootstrap code, and both appear to build into `webpackChunkcitypermit` |
| Are they likely separate bundles / entrypoints? | Yes | The internal app structure overlaps heavily, but the file names and the functional changes suggest different bundle variants or sub-apps |
| Which one looks more modern? | `dvs` | `dvs` shows newer-looking XSRF handling, same-origin checks, auth/session flow changes, and a rewritten `alertService` |
| Is either one modern in absolute terms? | Not really | Both still look like AngularJS/UI Bootstrap-era frontend bundles |

## Inferred version order

The filenames themselves do not contain a reliable timestamp, so the ordering below is inferred from the diffs and the direction of the changes.

### `citypermit/` inferred order

| Rank | File | Why it is placed here | Confidence |
| --- | --- | --- | --- |
| 1 oldest | `citypermit-4c176acf75e323f38a5f.js` | Appears to be the stricter variant before the small equality changes | Low |
| 2 newest | `citypermit-5c301e25872162b7df1d.js` | Looks like a tiny follow-up variant with only 3 operator relaxations | Low |

### `dvs/` inferred order

| Rank | File | Why it is placed here | Confidence |
| --- | --- | --- | --- |
| 1 oldest | `dvs.js?v=-98JiekC9_gZNsINHETZuBZXSM8pHDFxzFfkDUdkHXU.js` | Missing the larger XSRF/auth/session updates that exist in the other two variants | High |
| 2 middle | `dvs.js?v=ZihKxfKhyv2DGkcVTPycPNPZpBxd2FcylsJr5pyhpAU.js` | Introduces the larger auth/XSRF/alert changes while still keeping the `this.xsrfCookieName` guard | Medium |
| 3 newest | `dvs.js?v=iDcJBdGcnPT0F5czRfTvgHKaKqh5WpL22heEN-f4S6Y.js` | Very close to `Zih...`, but appears to be a later rebuild/variant with one small XSRF guard change | Medium |

### Ordered summary

| Directory | Old -> New |
| --- | --- |
| `citypermit/` | `4c176...` -> `5c301...` |
| `dvs/` | `-98...` -> `Zih...` -> `iDc...` |

## API differences

### Shared API surface: `citypermit/` vs `dvs/`

| API area | `citypermit/` | `dvs/` | Conclusion |
| --- | --- | --- | --- |
| Base config | Uses `BASE_CONFIG` with `baseURL: e.apiURL` | Uses `BASE_CONFIG` with `baseURL: e.apiURL` | Same base URL pattern |
| API abstraction | Mainly `datacontext` | `apiService` plus `datacontext` | `dvs` has a slightly more explicit API layer |
| Login endpoints | `login`, `login/logout`, `login/getbase` | `login`, `login/logout`, `login/getbase`, `login/info` | `dvs` exposes at least one extra login/info call |
| Permit endpoints | `permitlicenseplate/upsert`, `permitlicenseplate/remove` | `permitlicenseplate/upsert`, `permitlicenseplate/remove` | Same endpoint family |
| Permit media plate endpoints | `permitmedialicenseplate/upsert`, `permitmedialicenseplate/remove` | `permitmedialicenseplate/upsert`, `permitmedialicenseplate/remove` | Same endpoint family |
| Reservation endpoints | `reservation/create`, `reservation/update`, `reservation/end` | `reservation/create`, `reservation/update`, `reservation/end` | Same endpoint family |
| History endpoints | `history/reservations` and related history reads | `history/reservations` and related history reads | Same endpoint family |
| Upgrade/payment endpoints | `upgrade`, payment checking logic present | `upgrade`, payment checking logic present | Same feature area |
| Route structure | `/permit`, `/permit/:id`, `/permitmedia/:id/...` | `/permit`, `/permit/:id`, `/permitmedia/:id/...` | Same route model |
| Product/API relation | Permit-media oriented visitor parking flow | Permit-media oriented visitor parking flow | Very likely same backend family |

### API architecture differences: `citypermit/` vs `dvs/`

| Area | `citypermit/` | `dvs/` | Impact |
| --- | --- | --- | --- |
| Main API wrapper style | More logic appears bundled directly into `datacontext` | Clearer split between `apiService` and `datacontext` | `dvs` looks slightly more structured |
| DVS API detection | Not clearly visible in the same way | Explicit `isDvsApi = this.baseURL && "api/" == this.baseURL` | `dvs` has more explicit runtime API-mode handling |
| Login metadata fetch | `GET login` is visible | `GET login` and `GET login/info` are visible | `dvs` appears a bit richer around login bootstrap |
| XSRF request handling | No clear explicit XSRF request injection found in the inspected `citypermit` variant | Explicit XSRF header logic present in newer `dvs` variants | `dvs` is more advanced here |

### API changes inside `dvs/`

| Comparison | API area | Older behavior | Newer behavior | Impact |
| --- | --- | --- | --- | --- |
| `-98...` -> `Zih...` | XSRF handling | Relies on Angular `$httpProvider.defaults.xsrfCookieName` | Moves XSRF handling into `AuthInterceptor` and injects `X-XSRF-TOKEN` explicitly | Meaningful API/security change |
| `-98...` -> `Zih...` | Request trust model | No explicit same-origin header check visible in interceptor | Adds same-origin validation before sending XSRF header | Meaningful API/security change |
| `-98...` -> `Zih...` | Auth failure redirect | `401` and `500` could redirect to `/` | `401` redirects to `/?logout=302` | Meaningful API/session-flow change |
| `-98...` -> `Zih...` | Request interceptor behavior | Session timer logic tied mainly to `/api/login` and modal template traffic | Session timer logic also considers current path `"/"` | Small but meaningful runtime/API-flow change |
| `Zih...` -> `iDc...` | XSRF guard | Requires `this.xsrfCookieName && this.$document[0]` before cookie scan | Requires only `this.$document[0]` before cookie scan | Small API behavior difference |
| `Zih...` -> `iDc...` | Endpoint surface | No clear endpoint additions/removals visible | No clear endpoint additions/removals visible | API surface looks stable |

### API endpoint inventory seen in the bundles

| Endpoint / pattern | Seen in `citypermit/` | Seen in `dvs/` | Notes |
| --- | --- | --- | --- |
| `login` | Yes | Yes | Core authentication |
| `login/info` | Not clearly seen in inspected `citypermit` output | Yes | Extra login bootstrap/info call in `dvs` |
| `login/logout` | Yes | Yes | Logout flow |
| `login/getbase` | Yes | Yes | Base/API bootstrap flow |
| `permitlicenseplate/upsert` | Yes | Yes | Permit-level plate add/update |
| `permitlicenseplate/remove` | Yes | Yes | Permit-level plate removal |
| `permitmedialicenseplate/upsert` | Yes | Yes | Permit-media-level plate add/update |
| `permitmedialicenseplate/remove` | Yes | Yes | Permit-media-level plate removal |
| `reservation/create` | Yes | Yes | Reservation create |
| `reservation/update` | Yes | Yes | Reservation update/prolong |
| `reservation/end` | Yes | Yes | Reservation end |
| `history/reservations` | Yes | Yes | Reservation history |
| `upgrade` | Yes | Yes | Balance/credit upgrade |

### API takeaway

| Topic | Conclusion |
| --- | --- |
| Backend family | `citypermit` and `dvs` appear to talk to the same or a very closely related backend API family |
| Endpoint differences | The visible endpoint surface is largely the same across both |
| Biggest API difference | The largest difference is not the endpoint list, but the request/security handling in newer `dvs` variants |
| More modern API client behavior | `dvs` looks more modern because it has a clearer API abstraction and stronger explicit XSRF handling |

### Observed API endpoints from bundle inspection

This table lists the endpoints that were directly observed in the inspected frontend bundles. It should be treated as an observed inventory, not a guaranteed complete backend API specification.

| Endpoint | Seen in `citypermit/` | Seen in `dvs/` | Notes |
| --- | --- | --- | --- |
| `login` | Yes | Yes | Core login bootstrap and submit |
| `login/info` | No clear direct hit in the inspected bundle | Yes | Additional login/status/info call in `dvs` |
| `login/logout` | Yes | Yes | Logout |
| `login/getbase` | Yes | Yes | Session/base model bootstrap |
| `resource/getflowinfo` | Yes | Yes | Flow metadata / content lookup |
| `permitlicenseplate/upsert` | Yes | Yes | Add or update permit-level plate |
| `permitlicenseplate/remove` | Yes | Yes | Remove permit-level plate |
| `permitmedialicenseplate/upsert` | Yes | Yes | Add or update permit-media plate |
| `permitmedialicenseplate/remove` | Yes | Yes | Remove permit-media plate |
| `reservation/create` | Yes | Yes | Start reservation |
| `reservation/update` | Yes | Yes | Update or prolong reservation |
| `reservation/end` | Yes | Yes | End reservation |
| `upgrade` | Yes | Yes | Upgrade balance / units |
| `payment/checktransaction` | Yes | Yes | Validate payment result |
| `payment/isupgradeallowed` | Yes | Yes | Upgrade permission check |
| `history/reservations` | Yes | Yes | Reservation history |
| `history/upgrades` | Yes | Yes | Upgrade history |
| `history/movebalances` | Yes | Yes | Balance transfer/move history |

### Observed endpoint completeness note

| Topic | Conclusion |
| --- | --- |
| Are these all backend endpoints? | Probably not |
| What are these exactly? | Endpoints directly visible in the inspected minified frontend bundles |
| What may still be missing? | Admin-only, feature-flagged, runtime-generated, or unused backend endpoints |
| Confidence in the table above | High for observed frontend-used endpoints, not high enough to claim full backend coverage |

### Observed endpoints grouped by domain

| Domain | Endpoints |
| --- | --- |
| Auth | `login`, `login/info`, `login/logout`, `login/getbase` |
| Flow metadata | `resource/getflowinfo` |
| Permit license plates | `permitlicenseplate/upsert`, `permitlicenseplate/remove` |
| Permit media license plates | `permitmedialicenseplate/upsert`, `permitmedialicenseplate/remove` |
| Reservations | `reservation/create`, `reservation/update`, `reservation/end` |
| Upgrades and payments | `upgrade`, `payment/checktransaction`, `payment/isupgradeallowed` |
| History | `history/reservations`, `history/upgrades`, `history/movebalances` |

### Observed request and inferred response shapes

This table is based on direct request construction in the frontend bundles plus indirect inference from how responses are consumed in the UI. It is useful as a reverse-engineered guide, but it is not a formal API schema.

| Endpoint | Observed request fields | Error fields seen | Success shape inferred from JS |
| --- | --- | --- | --- |
| `login` | `identifier`, `loginMethod`, `password`, `otp`, `resetCode`, `asIdentifier`, `zipCode`, `permitMediaTypeID` | `ErrorMessage`, `LoginStatus`, `RequiresOtp` | Base model used by `setBaseModel(...)`; likely includes `Token`, `Permits`, optional `Permit`, config/login state |
| `login/info` | none observed | none clearly shown | Simple status-like value; `dvs` expects `"ok"` or `"sso"` |
| `login/logout` | none / `null` body | none clearly shown | At least `Token`; may also include `Redirect` |
| `login/getbase` | none / `null` body | `ErrorMessage`, `Result` | Base model used by `setBaseModel(...)`; likely includes `Permits`, selected permit data, token/config state |
| `resource/getflowinfo` | query params: `context`, `content` | none clearly shown | Content/resource payload for help/info text |
| `permitlicenseplate/upsert` | `permitCode`, `licensePlate`, `updateLicensePlate` | `ErrorMessage`, `Result` | Returns a result object; exact fields unclear, but treated as an immediate operation result rather than full base model |
| `permitlicenseplate/remove` | `permitCode`, `licensePlate`, `name` | `ErrorMessage`, `Result` | Returns a result object; exact fields unclear |
| `permitmedialicenseplate/upsert` | `permitMediaTypeID`, `permitMediaCode`, `licensePlate`, `updateLicensePlate`, `name` | `ErrorMessage`, `Result` | Returns a result object; exact fields unclear |
| `permitmedialicenseplate/remove` | `permitMediaTypeID`, `permitMediaCode`, `licensePlate`, `name` | `ErrorMessage`, `Result` | Returns a result object; exact fields unclear |
| `reservation/create` | `DateFrom`, `DateUntil`, `LicensePlate`, `permitMediaTypeID`, `permitMediaCode` | `ErrorMessage`, `Result` | Full base model refreshed via `setBaseModel(...)`; likely updates `Permits`, `PermitMedias`, `ActiveReservations`, `Balance`, maybe `History` |
| `reservation/update` | `Minutes`, `ReservationID`, `permitMediaTypeID`, `permitMediaCode` | `ErrorMessage`, `Result` | Full base model refreshed via `setBaseModel(...)`; likely updates active reservation timing and balances |
| `reservation/end` | `ReservationID`, `permitMediaTypeID`, `permitMediaCode` | `ErrorMessage`, `Result` | Full base model refreshed via `setBaseModel(...)`; likely removes the reservation from `ActiveReservations` |
| `upgrade` | `permitMediaTypeID`, `permitMediaCode`, `unitsToAdd`, `customerInvoiceReference` | `ErrorMessage`, `Result` | Either updated base model via `setBaseModel(...)` or payment flow fields such as `Reference`, `PaymentReference`, `RedirectUrl` |
| `payment/checktransaction` | `transactionID`, `permitMediaTypeID`, `permitMediaCode` | `ErrorMessage`, `Result` | Payment result object; UI suggests fields like `Code`, `Units`, and balance-related data |
| `payment/isupgradeallowed` | `permitMediaTypeID`, `permitMediaCode`, `invoiceID` | `ErrorMessage`, `Result` | Permission/check result object; exact fields unclear |
| `history/reservations` | `permitMediaTypeID`, `permitMediaCode`, `page` | none clearly shown | Paginated reservation history; UI expects `.Items` entries with reservation-like fields |
| `history/upgrades` | `permitMediaTypeID`, `permitMediaCode`, `page` | none clearly shown | Paginated upgrade history; UI expects `.Items` entries with fields like `ValidFrom`, `Units`, `Amount` |
| `history/movebalances` | `permitMediaTypeID`, `permitMediaCode`, `page` | none clearly shown | Paginated move-balance history; UI expects `.Items` entries with `ValidFrom`, `Units`, `FromPermitMediaCode`, `ToPermitMediaCode` |

### Inferred response field examples from UI usage

| Object | Fields visibly used in the frontend |
| --- | --- |
| Base model | `Token`, `Permits`, `Permit`, `Configuration` |
| Permit | `Code`, `PermitMedias`, `LicensePlates` |
| Permit media | `Code`, `TypeID`, `Balance`, `Permit`, `ActiveReservations`, `History`, `LicensePlates`, `RemainingUpgrades`, `RemainingDowngrades` |
| Active reservation | `ReservationID`, `LicensePlate`, `ValidFrom`, `ValidUntil`, `Units` |
| License plate | `Value`, `Name`, `DisplayValue`, `isEditable` |
| Upgrade/payment result | `Reference`, `PaymentReference`, `RedirectUrl`, `Code`, `Units` |
| History page | `Items` |
