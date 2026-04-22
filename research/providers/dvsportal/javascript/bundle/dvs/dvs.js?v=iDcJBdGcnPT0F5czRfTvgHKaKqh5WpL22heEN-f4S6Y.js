(() => {
  var e,
    t = {
      8: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("activelist", [
              "$scope",
              "locationService",
              "model",
              "alertService",
              function (e, t, i, n) {
                var r = this;
                ((r.permitMedia = null),
                  (r.toActivePage = function (e) {
                    t.toActive(r.permitMedia.Code, e);
                  }),
                  e.validate(function () {
                    var e = t.getParam("id");
                    ((r.permitMedia = i.selectPermitMedia(e)),
                      null != r.permitMedia
                        ? (null != r.permitMedia.ActiveReservations &&
                            0 !== r.permitMedia.ActiveReservations.length) ||
                          n.set("Geen actieve reserveringen gevonden")
                        : n.set("Geen pas gevonden"));
                  }));
              },
            ]));
      },
      182: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          r = i(5093);
        n.module("app")
          .filter("localformat", [
            "unitsService",
            function (e) {
              return function (t, i) {
                return e.toDisplay(t, i);
              };
            },
          ])
          .filter("localmoment", function () {
            return function (e, t) {
              if (null != e) {
                var i = r.tz(e, "Europe/Amsterdam");
                return (i.locale("nl"), i.format(t));
              }
              return null;
            };
          });
      },
      531: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("loginMedia", {
              template: i(6603),
              controller: [
                "$scope",
                function (e) {
                  var t = this;
                  ((t.submitted = !1),
                    (t.identifier = null),
                    (t.password = null),
                    (t.permitMediaType = null),
                    (t.permitMediaTypes = []),
                    (t.resources = {
                      Pas: {
                        identifier: "Meldnummer",
                        identifierIcon: "credit-card",
                        password: "Pincode",
                      },
                      Gebruiker: {
                        identifier: "Gebruikersnaam",
                        identifierIcon: "user",
                        password: "Wachtwoord",
                      },
                    }),
                    (t.canLogin = function () {
                      return !(!t.identifier || !t.password);
                    }),
                    (t.onLogin = function () {
                      (!(function () {
                        var i,
                          n = ["identifier", "pincode"];
                        for (i in n)
                          Object.prototype.hasOwnProperty.call(n, i) &&
                            ((e.mediaForm[n[i]].$invalid = !1),
                            (e.mediaForm[n[i]].$error = {}));
                        t.submitted = !1;
                      })(),
                        t.login &&
                          t
                            .login({
                              login: {
                                loginMethod: t.loginMethod,
                                identifier: t.identifier,
                                password: t.password,
                                permitMediaTypeID:
                                  t.permitMediaType && t.permitMediaType.ID,
                              },
                            })
                            .catch(function (i) {
                              if (2 === i.loginStatus)
                                return (
                                  (e.mediaForm.identifier.$invalid = !0),
                                  (e.mediaForm.identifier.$pristine = !1),
                                  (e.mediaForm.pincode.$error.userorcode =
                                    i.message),
                                  (e.mediaForm.pincode.$invalid = !0),
                                  void (e.mediaForm.pincode.$pristine = !1)
                                );
                              ((t.error = i), (t.submitted = !0));
                            }));
                    }),
                    (t.$onInit = function () {
                      t.resource = t.resources[t.loginMethod];
                    }),
                    (t.$onChanges = function (e) {
                      var i = e.permitMediaTypes;
                      i &&
                        i.currentValue &&
                        1 === i.currentValue.length &&
                        (t.permitMediaType = i.currentValue[0]);
                    }));
                },
              ],
              bindings: {
                loginMethod: "<",
                identifier: "<",
                password: "<",
                permitMediaType: "<",
                permitMediaTypes: "<?",
                login: "&",
              },
            }));
      },
      676: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ModelService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t, i, n, r, a) {
              ((this.$q = e),
                (this.alertService = t),
                (this.datacontext = i),
                (this.locationService = n),
                (this.model = r),
                (this.menuService = a));
            }
            return (
              (e.prototype.getPermitMedia = function (e) {
                var t = this,
                  i = this.model.selectPermitMedia(e);
                return null != i
                  ? (this.menuService.create(), this.$q.when(i))
                  : this.validate().then(function () {
                      return t.model.selectPermitMedia(e);
                    });
              }),
              (e.prototype.validate = function (e) {
                var t = this;
                return this.locationService.isLogin()
                  ? (this.menuService.clear(), this.$q.resolve())
                  : this.datacontext
                      .validate()
                      .then(function () {
                        ("function" == typeof e && e(), t.menuService.create());
                      })
                      .catch(function (e) {
                        ((null == e.data && 0 === e.status) ||
                          t.locationService.toLogin(),
                          t.alertService.add(e));
                      });
              }),
              (e.$inject = [
                "$q",
                "alertService",
                "datacontext",
                "locationService",
                "model",
                "menuService",
              ]),
              e
            );
          })();
        ((t.ModelService = r), n.module("app").service("modelService", r));
      },
      822: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AuthInterceptor = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t) {
              var i = this;
              ((this.$q = e),
                (this.$document = t),
                (this.tokenHeaderName = "X-XSRF-TOKEN"),
                (this.xsrfCookieName = window.__env.xsrfCookieName),
                (this.urlParsingNode = window.document.createElement("a")),
                (this.ipv6InBrackets = !1),
                (this.request = function (e) {
                  return (i.addXsrfHeader(e), e);
                }),
                (this.responseError = function (e) {
                  return (
                    401 === e.status && (window.location.href = "/?logout=302"),
                    i.$q.reject(e)
                  );
                }),
                (this.urlParsingNode.href = "http://[::1]"),
                (this.ipv6InBrackets =
                  "[::1]" === this.urlParsingNode.hostname));
            }
            return (
              (e.prototype.addXsrfHeader = function (e) {
                var t;
                if (this.$document[0])
                  for (
                    var i = 0,
                      n = this.getCookie(this.$document[0]).split("; ");
                    i < n.length;
                    i++
                  ) {
                    var r = n[i],
                      a = r.indexOf("=");
                    a > 0 &&
                      decodeURIComponent(r.substring(0, a)) ===
                        this.xsrfCookieName &&
                      (t = r.substring(a + 1));
                  }
                t &&
                  e.headers &&
                  !e.headers[this.tokenHeaderName] &&
                  this.isTrustedOrigin(e.url) &&
                  (e.headers[this.tokenHeaderName] = t);
              }),
              (e.prototype.getCookie = function (e) {
                try {
                  return e.cookie || "";
                } catch (e) {
                  return "";
                }
              }),
              (e.prototype.isTrustedOrigin = function (e) {
                var t = window.location.href;
                return this.urlsAreSameOrigin(e, t);
              }),
              (e.prototype.urlsAreSameOrigin = function (e, t) {
                var i = this.urlResolve(e),
                  n = this.urlResolve(t);
                return i.protocol === n.protocol && i.host === n.host;
              }),
              (e.prototype.urlResolve = function (e) {
                var t = e;
                this.urlParsingNode.setAttribute("href", t);
                var i = this.urlParsingNode.hostname;
                return (
                  !this.ipv6InBrackets &&
                    i.indexOf(":") > -1 &&
                    (i = "[" + i + "]"),
                  {
                    href: this.urlParsingNode.href,
                    protocol: this.urlParsingNode.protocol
                      ? this.urlParsingNode.protocol.replace(/:$/, "")
                      : "",
                    host: this.urlParsingNode.host,
                    search: this.urlParsingNode.search
                      ? this.urlParsingNode.search.replace(/^\?/, "")
                      : "",
                    hash: this.urlParsingNode.hash
                      ? this.urlParsingNode.hash.replace(/^#/, "")
                      : "",
                    hostname: i,
                    port: this.urlParsingNode.port,
                    pathname:
                      "/" === this.urlParsingNode.pathname.charAt(0)
                        ? this.urlParsingNode.pathname
                        : "/" + this.urlParsingNode.pathname,
                  }
                );
              }),
              (e.$inject = ["$q", "$document"]),
              e
            );
          })();
        ((t.AuthInterceptor = r),
          n.module("app").service("authInterceptor", r));
      },
      851: function (e, t, i) {
        "use strict";
        var n =
          (this && this.__spreadArray) ||
          function (e, t, i) {
            if (i || 2 === arguments.length)
              for (var n, r = 0, a = t.length; r < a; r++)
                (!n && r in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, r)),
                  (n[r] = t[r]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LanguageService = void 0));
        var r = i(7025),
          a = (function () {
            function e() {
              this.strings = o;
            }
            return (
              (e.prototype.get = function (e) {
                var t;
                return null !== (t = this.strings[e]) && void 0 !== t ? t : e;
              }),
              (e.prototype.format = function (e) {
                for (var t = this, i = [], n = 1; n < arguments.length; n++)
                  i[n - 1] = arguments[n];
                var r = this.strings[e];
                return r
                  ? (i.forEach(function (e, i) {
                      r = r.replace("{".concat(i, "}"), t.get(e));
                    }),
                    r)
                  : e;
              }),
              e
            );
          })();
        ((t.LanguageService = a),
          r
            .module("app")
            .service("languageService", a)
            .filter("translate", [
              "languageService",
              function (e) {
                return function (t) {
                  return e.get(t);
                };
              },
            ])
            .filter("translateFormat", [
              "languageService",
              function (e) {
                return function (t) {
                  for (var i = [], r = 1; r < arguments.length; r++)
                    i[r - 1] = arguments[r];
                  return e.format.apply(e, n([t], i, !1));
                };
              },
            ]));
        var o = {
          PasswordLengthRequirement: "moet minimaal {0} karakters lang zijn.",
          PasswordDigitRequirement: "moet minimaal 1 nummer (0-9) bevatten.",
          PasswordLetterRequirement:
            "moet minimaal 1 hoofdletter en 1 kleine letter (A-Z en a-z) bevatten.",
          PasswordExplanation:
            'is hoofdletter gevoelig, dus "Test10" en "test10" zijn 2 verschillende wachtwoorden.',
          PasswordSpecialCharacterRequirement:
            "moet  minimaal 1 speciaal karakter ( !\"#$%&amp;'()*+,-./:;&lt;=&gt;?@[]^_`{|}~) bevatten.",
          YouWillBeLoggedOutIn: "U wordt over {0} uitgelogd.",
        };
      },
      900: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MenuService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t, i) {
              ((this.model = e),
                (this.datacontext = t),
                (this.locationService = i),
                (this.menuItems = []));
            }
            return (
              Object.defineProperty(e.prototype, "menu", {
                get: function () {
                  return this.menuItems;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.clear = function () {
                this.menuItems.length = 0;
              }),
              (e.prototype.create = function () {
                var e = this;
                if (
                  ((this.menuItems.length = 0),
                  null != this.model.getPermits() &&
                    this.addMenuLocation(
                      "Permits",
                      "Producten",
                      "glyphicon-briefcase",
                    ),
                  null != this.model.selected.permit &&
                    this.addMenuLocation(
                      "Permit",
                      "Passen",
                      "glyphicon-credit-card",
                      [this.model.selected.permit.Code],
                    ),
                  null != this.model.selected.permitMedia)
                ) {
                  var t = this.model.selected.permitMedia;
                  (null != t.Permit.UnitPrice &&
                    null != t.Permit.UpgradeUnits &&
                    null != t.Balance &&
                    this.addMenuLocation(
                      "Upgrade",
                      "Opwaarderen",
                      "glyphicon-shopping-cart",
                      [t.Code],
                    ),
                    null != t.ActiveReservations &&
                      t.ActiveReservations.length > 0 &&
                      this.addMenuLocation(
                        "ActivePages",
                        "Actief",
                        "glyphicon-transfer",
                        [t],
                      ),
                    this.addMenuLocation(
                      "Add",
                      "Kenteken aanmelden",
                      "glyphicon-plus",
                      [t.Code],
                    ),
                    t.HasHistory &&
                      this.addMenuLocation(
                        "History",
                        "Geschiedenis",
                        "glyphicon-stats",
                        [t.Code],
                      ));
                }
                (this.addMenuLocation(
                  "Help",
                  "Help",
                  "glyphicon-question-sign",
                ),
                  this.model.showPrivacyInfo() &&
                    this.addMenuLocation(
                      "Privacy",
                      "Privacy",
                      "glyphicon-eye-close",
                    ),
                  this.addMenuItem(
                    function () {
                      e.datacontext.logout().then(function () {
                        (e.clear(), e.locationService.toLogin());
                      });
                    },
                    "Uitloggen",
                    "glyphicon-log-out",
                  ));
              }),
              (e.prototype.addMenuItem = function (e, t, i, n) {
                var r = {
                  onClick: e,
                  text: t,
                  icon: i,
                  active: n,
                  position: this.menuItems.length + 1,
                };
                this.menuItems.push(r);
              }),
              (e.prototype.addMenuLocation = function (e, t, i, n) {
                var r = this;
                this.addMenuItem(
                  function () {
                    r.locationService.toLocation(e, n);
                  },
                  t,
                  i,
                  this.locationService.isLocation(e),
                );
              }),
              (e.$inject = ["model", "datacontext", "locationService"]),
              e
            );
          })();
        ((t.MenuService = r), n.module("app").service("menuService", r));
      },
      1022: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SessionModalComponent = void 0));
        var n = i(2627),
          r = i(7025),
          a = (function () {
            function e(e, t) {
              ((this.$interval = e),
                (this.languageService = t),
                (this.secondsToTime = function (e) {
                  return "".concat(Math.floor(e / 60), ":").concat(
                    Math.floor(e % 60)
                      .toString()
                      .padStart(2, "0"),
                  );
                }));
            }
            return (
              (e.prototype.$onInit = function () {
                var e,
                  t = this;
                (null === (e = this.resolve) || void 0 === e
                  ? void 0
                  : e.counter) &&
                  ((this.counter = this.resolve.counter),
                  this.$interval(function () {
                    (t.counter--,
                      t.counter > 0 &&
                        (t.countDown = t.languageService.format(
                          "YouWillBeLoggedOutIn",
                          t.secondsToTime(t.counter),
                        )));
                  }, 1e3));
              }),
              (e.$inject = ["$interval", "languageService"]),
              e
            );
          })();
        ((t.SessionModalComponent = {
          controller: a,
          template: n,
          bindings: { close: "&", resolve: "<" },
        }),
          r.module("app").component("sessionModal", t.SessionModalComponent));
      },
      1237: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          r = i(5093);
        n.module("app").controller("add", [
          "$scope",
          "$interval",
          "$window",
          "$timeout",
          "datacontext",
          "locationService",
          "model",
          "alertService",
          function (e, t, i, a, o, s, l, u) {
            var c,
              d,
              p,
              m = this;
            m.isBusy = !1;
            var h = !1,
              f = !1,
              g = !1;
            function v() {
              "function" == typeof m.resChartConfig.updateScrollToStart &&
                m.resChartConfig.updateScrollToStart();
            }
            function b() {
              "function" == typeof m.resChartConfig.updateScrollToEnd &&
                m.resChartConfig.updateScrollToEnd();
            }
            function y() {
              function e(e, t) {
                ((e.isEditable = t),
                  r(e.ValidFrom) <= m.reservation.start &&
                  r(e.ValidUntil) > m.reservation.start
                    ? m.validLicensePlates.push(e)
                    : m.reservation.licensePlate &&
                      m.reservation.licensePlate.Value.trim().toUpperCase() ===
                        e.Value &&
                      (delete m.reservation.licensePlate,
                      delete m.licensePlateFavorite));
              }
              ((m.validLicensePlates = []),
                m.permitMedia.LicensePlates &&
                  m.permitMedia.LicensePlates.forEach(function (t) {
                    e(t, !0);
                  }),
                m.permitMedia.Permit.LicensePlates &&
                  m.permitMedia.Permit.LicensePlates.forEach(function (t) {
                    e(t, !1);
                  }),
                (m.reservation.licensePlate &&
                  m.reservation.licensePlate.Value) ||
                  1 !== m.validLicensePlates.length ||
                  m.setLicensePlate(m.validLicensePlates[0]),
                (m.validLicensePlates.hasName = m.validLicensePlates.some(
                  function (e) {
                    return e.Name;
                  },
                )),
                (m.validLicensePlates.hasIsEditable = m.validLicensePlates.some(
                  function (e) {
                    return e.isEditable;
                  },
                )),
                0 === m.validLicensePlates.length &&
                  m.permitMedia.Permit.IsLicensePlatesFixed &&
                  u.add(m.licensePlatesError));
            }
            function w() {
              var e, t, i, n, a;
              for (
                m.reservation.start < m.reservation.dateNow &&
                  (m.reservation.start = m.reservation.dateNow),
                  a = r(m.reservation.dateNow).startOf("day").add(1, "day"),
                  e = 0;
                e < m.permitMedia.Permit.BlockTimes.length;
                e++
              )
                if (
                  ((t = m.permitMedia.Permit.BlockTimes[e]),
                  (i = r(t.ValidFrom)),
                  (n = r(t.ValidUntil)),
                  t.IsDefined && n > m.reservation.start)
                ) {
                  i >= a || m.reservation.start < i
                    ? (m.reservation.start = i)
                    : m.reservation.dateNow &&
                      (m.reservation.start = m.reservation.dateNow);
                  break;
                }
            }
            function $() {
              var e, t, i, n, a;
              if (m.permitMedia.Permit.ReservationDateUntilWholeDay)
                m.reservation.end = r(m.reservation.start)
                  .startOf("day")
                  .add(1, "day");
              else if (m.permitMedia.Permit.ReservationDateUntilEndOfDay)
                m.reservation.end = r(m.reservation.start)
                  .add(1, "day")
                  .startOf("day");
              else if (m.permitMedia.Permit.ReservationDateUntilAlmostEndOfDay)
                m.reservation.end = r(m.reservation.start)
                  .add(1, "day")
                  .startOf("day")
                  .add(-1, "minutes");
              else if (null != m.permitMedia.Permit.ReservationDuration)
                m.reservation.end = r(m.reservation.start).add(
                  m.permitMedia.Permit.ReservationDuration,
                  "minute",
                );
              else if (
                m.permitMedia.Permit.ReservationDateUntilActualBlock ||
                m.permitMedia.Permit.ReservationDateUntilLastBlockOfDay
              ) {
                for (
                  m.reservation.end = null,
                    e = r(m.reservation.start).startOf("day").add(1, "day"),
                    t = 0;
                  t < m.permitMedia.Permit.BlockTimes.length &&
                  ((i = m.permitMedia.Permit.BlockTimes[t]),
                  (n = r(i.ValidFrom)),
                  (a = r(i.ValidUntil)),
                  !n.isAfter(e) &&
                    (!n.isSame(e) ||
                      (m.reservation.end && m.reservation.end.isSame(e)))) &&
                  (!i.IsDefined ||
                    !a.isAfter(m.reservation.start) ||
                    ((m.reservation.end = a),
                    !m.permitMedia.Permit.ReservationDateUntilActualBlock ||
                      m.reservation.end.isSame(e)));
                  t++
                );
                m.reservation.end || (m.reservation.end = e);
              }
            }
            ((m.permitMedia = null),
              (m.licensePlates = {}),
              (m.licensePlates.column = "Name"),
              (m.resChartConfig = {}),
              (m.reservation = {}),
              (m.dateTimeOptions = {
                minDate: new Date(),
                hourStep: 1,
                minuteStep: 5,
                isMeridian: !1,
                ariaLevel: 2,
              }),
              (m.showStart = !1),
              (m.showEnd = !1),
              (m.showTime = !1),
              (m.licensePlatesError =
                "Geen kenteken(s) beschikbaar voor de geselecteerde periode!"),
              (m.onReservationStartChanged = function (e) {
                var t, i, n;
                (e && m.permitMedia.Permit.ReservationDateFromOnBlock && w(),
                  m.permitMedia.Permit.ReservationDateUntilWholeDay &&
                    (m.reservation.start = r.max(
                      r(m.reservation.start).startOf("day"),
                      m.reservation.dateNow,
                    )),
                  m.reservation.end &&
                    ((t = r(m.reservation.start)),
                    (i = r(m.reservation.end)),
                    (n = r(m.reservation.dateNow).startOf("day").add(1, "day")),
                    (i.isSameOrBefore(t) ||
                      n.isSameOrBefore(i) ||
                      !m.permitMedia.Permit.PresentationDateUntilVariable) &&
                      $()),
                  y(),
                  "function" == typeof m.resChartConfig.updateReservationInfo &&
                    m.resChartConfig.updateReservationInfo(),
                  a(v, 100, !1));
              }),
              (m.onReservationEndChanged = function () {
                var e, t;
                (m.reservation.end &&
                  m.permitMedia.Permit.PresentationDateUntilVariable &&
                  ((e = r(m.reservation.start)),
                  (t = r(m.reservation.end)).isSameOrBefore(
                    e.clone().startOf("day"),
                  ) &&
                    (e.year(t.year()).month(t.month()).date(t.date()),
                    t.isSameOrBefore(e) &&
                      (m.permitMedia.Permit.ReservationDateUntilWholeDay
                        ? t.isSame(e.startOf("day")) && e.subtract(1, "day")
                        : (e =
                            null != m.permitMedia.Permit.ReservationDuration
                              ? t.subtract(
                                  m.permitMedia.Permit.ReservationDuration,
                                  "minute",
                                )
                              : t.subtract(1, "hours"))),
                    (m.reservation.start = r.max(e, m.reservation.dateNow)))),
                  "function" == typeof m.resChartConfig.updateReservationInfo &&
                    m.resChartConfig.updateReservationInfo(),
                  a(b, 100, !1));
              }),
              (m.onLicensePlateChange = function () {
                var e;
                if (m.reservation.licensePlate.Value)
                  for (e = 0; e < m.validLicensePlates.length; e++)
                    if (
                      m.validLicensePlates[e].Value ===
                      m.reservation.licensePlate.Value.trim().toUpperCase()
                    )
                      return void m.setLicensePlate(m.validLicensePlates[e]);
                m.licensePlateFavorite &&
                  (m.licensePlateFavorite.Name ===
                    m.reservation.licensePlate.Name &&
                    delete m.reservation.licensePlate.Name,
                  delete m.licensePlateFavorite);
              }),
              (m.setLicensePlate = function (e) {
                ((m.reservation.licensePlate = {
                  Value: e.Value,
                  Name: e.Name,
                }),
                  (m.licensePlateFavorite = e),
                  e.isEditable || (m.reservation.saveLicensePlate = !1));
              }),
              (m.deleteLicensePlate = function (e) {
                o.deletePermitMediaLicensePlate(
                  m.permitMedia.TypeID,
                  m.permitMedia.Code,
                  e.Value,
                  e.Name,
                )
                  .then(function () {
                    for (var t = 0; t < m.permitMedia.LicensePlates.length; t++)
                      if (
                        m.permitMedia.LicensePlates[t].Value === e.Value &&
                        m.permitMedia.LicensePlates[t].Name === e.Name
                      )
                        return (
                          m.permitMedia.LicensePlates.splice(t, 1),
                          y(),
                          void (
                            0 === m.permitMedia.LicensePlates.length &&
                            0 === m.permitMedia.Permit.LicensePlates.length &&
                            (h = !1)
                          )
                        );
                  })
                  .catch(function (e) {
                    u.add(e);
                  });
              }),
              (m.startReservation = function () {
                return (
                  (function () {
                    var t,
                      i = ["licenseplate", "datefrom", "dateto"];
                    for (t in i)
                      Object.prototype.hasOwnProperty.call(i, t) &&
                        ((e.addForm[i[t]].$invalid = !1),
                        (e.addForm[i[t]].$error = {}));
                    m.submitted = !1;
                  })(),
                  m.reservation.licensePlate && m.reservation.licensePlate.Value
                    ? m.reservation.start
                      ? m.permitMedia.Permit.ReservationDateUntilInfinite &&
                        m.reservation.end
                        ? ((e.addForm.dateTo.$invalid = !0),
                          void (e.addForm.dateTo.$error.startReservation =
                            "Eindtijd is ongeldig."))
                        : m.permitMedia.Permit.ReservationDateUntilInfinite ||
                            m.reservation.end
                          ? void (
                              m.isBusy ||
                              ((m.isBusy = !0),
                              o
                                .startReservation(
                                  m.reservation.start
                                    ? r(m.reservation.start)
                                    : null,
                                  m.reservation.end
                                    ? r(m.reservation.end)
                                    : null,
                                  m.reservation.licensePlate,
                                  m.permitMedia.TypeID,
                                  m.permitMedia.Code,
                                )
                                .then(
                                  function () {
                                    m.reservation.saveLicensePlate &&
                                      o
                                        .upsertPermitMediaLicensePlate(
                                          m.permitMedia.TypeID,
                                          m.permitMedia.Code,
                                          m.reservation.licensePlate,
                                          m.licensePlateFavorite
                                            ? m.licensePlateFavorite.Value
                                            : null,
                                          m.reservation.licensePlate.Name,
                                        )
                                        .then(function (e) {
                                          var t;
                                          if (m.licensePlateFavorite) {
                                            for (
                                              t = 0;
                                              t <
                                              m.permitMedia.LicensePlates
                                                .length;
                                              t++
                                            )
                                              if (
                                                m.permitMedia.LicensePlates[t]
                                                  .Value ===
                                                e.LicensePlate.Value
                                              ) {
                                                for (var i in e.LicensePlate)
                                                  Object.prototype.hasOwnProperty.call(
                                                    e.LicensePlate,
                                                    i,
                                                  ) &&
                                                    (m.permitMedia.LicensePlates[
                                                      t
                                                    ][i] = e.LicensePlate[i]);
                                                break;
                                              }
                                          } else
                                            m.permitMedia.LicensePlates.unshift(
                                              e.LicensePlate,
                                            );
                                          y();
                                        })
                                        .catch(function (e) {
                                          u.add(e);
                                        });
                                    var e = -1;
                                    ((m.permitMedia = l.selectPermitMedia(
                                      m.permitMedia.Code,
                                    )),
                                      m.permitMedia &&
                                        m.permitMedia.ActiveReservations.forEach(
                                          function (t) {
                                            t.ReservationID > e &&
                                              (e = t.ReservationID);
                                          },
                                        ),
                                      -1 !== e
                                        ? (s.toActive(m.permitMedia.Code, e),
                                          null !== m.permitMedia.Balance &&
                                            void 0 !== m.permitMedia.Balance &&
                                            (m.reservation.includesFreeBlocks
                                              ? u.add(
                                                  "Uw reservering is succesvol verzonden. Vrij parkeren en gratis bloktijden worden niet afgeschreven van uw tegoed.",
                                                  "success",
                                                )
                                              : u.add(
                                                  "Uw reservering is succesvol verzonden.",
                                                  "success",
                                                )))
                                        : (u.add(
                                            "Geen actieve reservering gevonden.",
                                          ),
                                          (m.isBusy = !1)));
                                  },
                                  function (t) {
                                    var i;
                                    switch (t.code) {
                                      case 4:
                                      case 24:
                                        i = "licenseplate";
                                        break;
                                      case 13:
                                        i = "datefrom";
                                        break;
                                      case 10:
                                        if (!m.showEnd) break;
                                      case 16:
                                        i = "dateto";
                                    }
                                    (i
                                      ? ((e.addForm[i].$invalid = !0),
                                        (e.addForm[i].$error.startReservation =
                                          t.message))
                                      : u.add(t),
                                      (m.isBusy = !1));
                                  },
                                ))
                            )
                          : ((e.addForm.dateTo.$invalid = !0),
                            void (e.addForm.dateTo.$error.startReservation =
                              "Eindtijd is niet opgegeven."))
                      : ((e.addForm.dateFrom.$invalid = !0),
                        void (e.addForm.dateFrom.$error.startReservation =
                          "Starttijd is niet opgegeven."))
                    : ((e.addForm.licenseplate.$invalid = !0),
                      void (e.addForm.licenseplate.$error.startReservation =
                        "Vul een kenteken in."))
                );
              }),
              (m.toggle = function (e) {
                switch (e) {
                  case "licensePlates":
                    h = !h;
                    break;
                  case "dateStart":
                    f = !f;
                    break;
                  case "dateEnd":
                    g = !g;
                }
              }),
              (m.show = function (e) {
                switch (e) {
                  case "licensePlates":
                    return h;
                  case "dateStart":
                    return f;
                  case "dateEnd":
                    return g;
                }
              }),
              n.element(i).bind("resize", function () {
                var e;
                "function" == typeof m.resChartConfig.updateInnerWidth &&
                  (e = document.getElementById("reservation-chart")) &&
                  m.resChartConfig.updateInnerWidth(e.offsetWidth);
              }),
              e.$watch("vm.reservation.start", function (e) {
                m.reservationStart = e && r(e).format(p);
              }),
              e.$watch("vm.reservation.end", function (e) {
                m.reservationEnd = e && r(e).format(p);
              }),
              e.validate(function () {
                var i,
                  o,
                  h = s.getParam("id");
                if (
                  ((m.permitMedia = l.selectPermitMedia(h)),
                  null !== m.permitMedia && void 0 !== m.permitMedia)
                ) {
                  for (
                    m.showTime =
                      m.permitMedia.Permit.PresentationDateTimeWithTime,
                      p = m.showTime
                        ? "dd DD MMMM, YYYY HH:mm"
                        : "dd DD MMMM, YYYY",
                      m.showStart =
                        !m.permitMedia.Permit.PresentationDateFromHide,
                      m.showEnd =
                        !m.permitMedia.Permit.PresentationDateUntilHide,
                      m.dateTimeOptions.maxDate =
                        m.permitMedia.Permit.BlockTimes.length > 0
                          ? r(
                              m.permitMedia.Permit.BlockTimes[
                                m.permitMedia.Permit.BlockTimes.length - 1
                              ].ValidUntil,
                            )
                              .subtract(1, "milliseconds")
                              .toDate()
                          : m.dateTimeOptions.minDate,
                      m.btnTextFrom = m.showTime
                        ? "Wijzig datum en tijd vanaf"
                        : "Wijzig datum vanaf",
                      m.btnTextUntil = m.showTime
                        ? "Wijzig datum en tijd tot"
                        : "Wijzig datum tot",
                      i = 0;
                    i < m.permitMedia.Permit.BlockTimes.length;
                    i++
                  )
                    ((o = m.permitMedia.Permit.BlockTimes[i]),
                      (m.permitMedia.Permit.BlockTimes[i].ShowStartOfDay =
                        0 === i ||
                        0 ===
                          r(o.ValidFrom).diff(
                            r(o.ValidFrom).startOf("day"),
                            "minutes",
                          )),
                      o.IsFree ||
                        (m.permitMedia.Permit.BlockTimes[i].Unit =
                          o.Units * o.Seconds));
                  ((m.reservation.start = r().seconds(0).milliseconds(0)),
                    m.permitMedia.Permit.ReservationDateFromOnBlock && w(),
                    $(),
                    (m.showEnd = m.showEnd && m.reservation.end),
                    (m.resChartConfig.blockTimes =
                      m.permitMedia.Permit.BlockTimes),
                    (m.resChartConfig.reservation = m.reservation),
                    (m.resChartConfig.reservation.blocks = []),
                    (m.resChartConfig.reservation.scale = 100),
                    (m.resChartConfig.reservation.wholeDay =
                      m.permitMedia.Permit.ReservationDateUntilWholeDay),
                    (m.resChartConfig.reservation.balance =
                      m.permitMedia.Balance),
                    (m.resChartConfig.reservation.startTariff =
                      m.permitMedia.Permit.StartTariff),
                    (m.resChartConfig.reservation.started = !1),
                    (m.resChartConfig.reservation.waiting = !1),
                    (m.resChartConfig.reservation.showTime = m.showTime),
                    e.$watch(
                      "vm.resChartConfig.updateReservationTimeInfo",
                      function () {
                        "function" ==
                          typeof m.resChartConfig.updateReservationInfo &&
                          (n.isDefined(c) ||
                            ((c = t(function () {
                              m.resChartConfig.updateTimeInfo();
                            }, 1e3)),
                            (d = t(function () {
                              m.resChartConfig.updateReservationTimeInfo();
                            }, 6e4)),
                            e.$on("$destroy", function () {
                              (n.isDefined(c) && (t.cancel(c), (c = void 0)),
                                n.isDefined(d) && (t.cancel(d), (d = void 0)));
                            })),
                          m.resChartConfig.updateReservationInfo(),
                          a(v, 1e3, !1));
                      },
                    ),
                    "function" ==
                      typeof m.resChartConfig.updateReservationInfo &&
                      m.resChartConfig.updateReservationInfo(),
                    y());
                } else u.set("Geen pas gevonden");
              }));
          },
        ]);
      },
      1892: () => {
        (angular.module("ui.bootstrap", [
          "ui.bootstrap.tpls",
          "ui.bootstrap.collapse",
          "ui.bootstrap.tabindex",
          "ui.bootstrap.accordion",
          "ui.bootstrap.alert",
          "ui.bootstrap.buttons",
          "ui.bootstrap.carousel",
          "ui.bootstrap.dateparser",
          "ui.bootstrap.isClass",
          "ui.bootstrap.datepicker",
          "ui.bootstrap.position",
          "ui.bootstrap.datepickerPopup",
          "ui.bootstrap.debounce",
          "ui.bootstrap.multiMap",
          "ui.bootstrap.dropdown",
          "ui.bootstrap.stackedMap",
          "ui.bootstrap.modal",
          "ui.bootstrap.paging",
          "ui.bootstrap.pager",
          "ui.bootstrap.pagination",
          "ui.bootstrap.tooltip",
          "ui.bootstrap.popover",
          "ui.bootstrap.progressbar",
          "ui.bootstrap.rating",
          "ui.bootstrap.tabs",
          "ui.bootstrap.timepicker",
          "ui.bootstrap.typeahead",
        ]),
          angular.module("ui.bootstrap.tpls", [
            "uib/template/accordion/accordion-group.html",
            "uib/template/accordion/accordion.html",
            "uib/template/alert/alert.html",
            "uib/template/carousel/carousel.html",
            "uib/template/carousel/slide.html",
            "uib/template/datepicker/datepicker.html",
            "uib/template/datepicker/day.html",
            "uib/template/datepicker/month.html",
            "uib/template/datepicker/year.html",
            "uib/template/datepickerPopup/popup.html",
            "uib/template/modal/window.html",
            "uib/template/pager/pager.html",
            "uib/template/pagination/pagination.html",
            "uib/template/tooltip/tooltip-html-popup.html",
            "uib/template/tooltip/tooltip-popup.html",
            "uib/template/tooltip/tooltip-template-popup.html",
            "uib/template/popover/popover-html.html",
            "uib/template/popover/popover-template.html",
            "uib/template/popover/popover.html",
            "uib/template/progressbar/bar.html",
            "uib/template/progressbar/progress.html",
            "uib/template/progressbar/progressbar.html",
            "uib/template/rating/rating.html",
            "uib/template/tabs/tab.html",
            "uib/template/tabs/tabset.html",
            "uib/template/timepicker/timepicker.html",
            "uib/template/typeahead/typeahead-match.html",
            "uib/template/typeahead/typeahead-popup.html",
          ]),
          angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", [
            "$animate",
            "$q",
            "$parse",
            "$injector",
            function (e, t, i, n) {
              var r = n.has("$animateCss") ? n.get("$animateCss") : null;
              return {
                link: function (n, a, o) {
                  function s(e) {
                    return g
                      ? { width: e.scrollWidth + "px" }
                      : { height: e.scrollHeight + "px" };
                  }
                  function l() {
                    (a.hasClass("collapse") && a.hasClass("in")) ||
                      t.resolve(p(n)).then(function () {
                        (a
                          .removeClass("collapse")
                          .addClass("collapsing")
                          .attr("aria-expanded", !0)
                          .attr("aria-hidden", !1),
                          r
                            ? r(a, {
                                addClass: "in",
                                easing: "ease",
                                css: { overflow: "hidden" },
                                to: s(a[0]),
                              })
                                .start()
                                .finally(u)
                            : e
                                .addClass(a, "in", {
                                  css: { overflow: "hidden" },
                                  to: s(a[0]),
                                })
                                .then(u));
                      }, angular.noop);
                  }
                  function u() {
                    (a.removeClass("collapsing").addClass("collapse").css(v),
                      m(n));
                  }
                  function c() {
                    return a.hasClass("collapse") || a.hasClass("in")
                      ? void t.resolve(h(n)).then(function () {
                          (a
                            .css(s(a[0]))
                            .removeClass("collapse")
                            .addClass("collapsing")
                            .attr("aria-expanded", !1)
                            .attr("aria-hidden", !0),
                            r
                              ? r(a, { removeClass: "in", to: b })
                                  .start()
                                  .finally(d)
                              : e.removeClass(a, "in", { to: b }).then(d));
                        }, angular.noop)
                      : d();
                  }
                  function d() {
                    (a.css(b),
                      a.removeClass("collapsing").addClass("collapse"),
                      f(n));
                  }
                  var p = i(o.expanding),
                    m = i(o.expanded),
                    h = i(o.collapsing),
                    f = i(o.collapsed),
                    g = !1,
                    v = {},
                    b = {};
                  ((g = !!("horizontal" in o))
                    ? ((v = { width: "" }), (b = { width: "0" }))
                    : ((v = { height: "" }), (b = { height: "0" })),
                    n.$eval(o.uibCollapse) ||
                      a
                        .addClass("in")
                        .addClass("collapse")
                        .attr("aria-expanded", !0)
                        .attr("aria-hidden", !1)
                        .css(v),
                    n.$watch(o.uibCollapse, function (e) {
                      e ? c() : l();
                    }));
                },
              };
            },
          ]),
          angular
            .module("ui.bootstrap.tabindex", [])
            .directive("uibTabindexToggle", function () {
              return {
                restrict: "A",
                link: function (e, t, i) {
                  i.$observe("disabled", function (e) {
                    i.$set("tabindex", e ? -1 : null);
                  });
                },
              };
            }),
          angular
            .module("ui.bootstrap.accordion", [
              "ui.bootstrap.collapse",
              "ui.bootstrap.tabindex",
            ])
            .constant("uibAccordionConfig", { closeOthers: !0 })
            .controller("UibAccordionController", [
              "$scope",
              "$attrs",
              "uibAccordionConfig",
              function (e, t, i) {
                ((this.groups = []),
                  (this.closeOthers = function (n) {
                    (angular.isDefined(t.closeOthers)
                      ? e.$eval(t.closeOthers)
                      : i.closeOthers) &&
                      angular.forEach(this.groups, function (e) {
                        e !== n && (e.isOpen = !1);
                      });
                  }),
                  (this.addGroup = function (e) {
                    var t = this;
                    (this.groups.push(e),
                      e.$on("$destroy", function (i) {
                        t.removeGroup(e);
                      }));
                  }),
                  (this.removeGroup = function (e) {
                    var t = this.groups.indexOf(e);
                    -1 !== t && this.groups.splice(t, 1);
                  }));
              },
            ])
            .directive("uibAccordion", function () {
              return {
                controller: "UibAccordionController",
                controllerAs: "accordion",
                transclude: !0,
                templateUrl: function (e, t) {
                  return (
                    t.templateUrl || "uib/template/accordion/accordion.html"
                  );
                },
              };
            })
            .directive("uibAccordionGroup", function () {
              return {
                require: "^uibAccordion",
                transclude: !0,
                restrict: "A",
                templateUrl: function (e, t) {
                  return (
                    t.templateUrl ||
                    "uib/template/accordion/accordion-group.html"
                  );
                },
                scope: {
                  heading: "@",
                  panelClass: "@?",
                  isOpen: "=?",
                  isDisabled: "=?",
                },
                controller: function () {
                  this.setHeading = function (e) {
                    this.heading = e;
                  };
                },
                link: function (e, t, i, n) {
                  (t.addClass("panel"),
                    n.addGroup(e),
                    (e.openClass = i.openClass || "panel-open"),
                    (e.panelClass = i.panelClass || "panel-default"),
                    e.$watch("isOpen", function (i) {
                      (t.toggleClass(e.openClass, !!i), i && n.closeOthers(e));
                    }),
                    (e.toggleOpen = function (t) {
                      e.isDisabled ||
                        (t && 32 !== t.which) ||
                        (e.isOpen = !e.isOpen);
                    }));
                  var r =
                    "accordiongroup-" +
                    e.$id +
                    "-" +
                    Math.floor(1e4 * Math.random());
                  ((e.headingId = r + "-tab"), (e.panelId = r + "-panel"));
                },
              };
            })
            .directive("uibAccordionHeading", function () {
              return {
                transclude: !0,
                template: "",
                replace: !0,
                require: "^uibAccordionGroup",
                link: function (e, t, i, n, r) {
                  n.setHeading(r(e, angular.noop));
                },
              };
            })
            .directive("uibAccordionTransclude", function () {
              return {
                require: "^uibAccordionGroup",
                link: function (e, t, i, n) {
                  e.$watch(
                    function () {
                      return n[i.uibAccordionTransclude];
                    },
                    function (e) {
                      if (e) {
                        var i = angular.element(
                          t[0].querySelector(
                            "uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]",
                          ),
                        );
                        (i.html(""), i.append(e));
                      }
                    },
                  );
                },
              };
            }),
          angular
            .module("ui.bootstrap.alert", [])
            .controller("UibAlertController", [
              "$scope",
              "$element",
              "$attrs",
              "$interpolate",
              "$timeout",
              function (e, t, i, n, r) {
                ((e.closeable = !!i.close),
                  t.addClass("alert"),
                  i.$set("role", "alert"),
                  e.closeable && t.addClass("alert-dismissible"));
                var a = angular.isDefined(i.dismissOnTimeout)
                  ? n(i.dismissOnTimeout)(e.$parent)
                  : null;
                a &&
                  r(
                    function () {
                      e.close();
                    },
                    parseInt(a, 10),
                  );
              },
            ])
            .directive("uibAlert", function () {
              return {
                controller: "UibAlertController",
                controllerAs: "alert",
                restrict: "A",
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/alert/alert.html";
                },
                transclude: !0,
                scope: { close: "&" },
              };
            }),
          angular
            .module("ui.bootstrap.buttons", [])
            .constant("uibButtonConfig", {
              activeClass: "active",
              toggleEvent: "click",
            })
            .controller("UibButtonsController", [
              "uibButtonConfig",
              function (e) {
                ((this.activeClass = e.activeClass || "active"),
                  (this.toggleEvent = e.toggleEvent || "click"));
              },
            ])
            .directive("uibBtnRadio", [
              "$parse",
              function (e) {
                return {
                  require: ["uibBtnRadio", "ngModel"],
                  controller: "UibButtonsController",
                  controllerAs: "buttons",
                  link: function (t, i, n, r) {
                    var a = r[0],
                      o = r[1],
                      s = e(n.uibUncheckable);
                    (i.find("input").css({ display: "none" }),
                      (o.$render = function () {
                        i.toggleClass(
                          a.activeClass,
                          angular.equals(o.$modelValue, t.$eval(n.uibBtnRadio)),
                        );
                      }),
                      i.on(a.toggleEvent, function () {
                        if (!n.disabled) {
                          var e = i.hasClass(a.activeClass);
                          (e && !angular.isDefined(n.uncheckable)) ||
                            t.$apply(function () {
                              (o.$setViewValue(
                                e ? null : t.$eval(n.uibBtnRadio),
                              ),
                                o.$render());
                            });
                        }
                      }),
                      n.uibUncheckable &&
                        t.$watch(s, function (e) {
                          n.$set("uncheckable", e ? "" : void 0);
                        }));
                  },
                };
              },
            ])
            .directive("uibBtnCheckbox", function () {
              return {
                require: ["uibBtnCheckbox", "ngModel"],
                controller: "UibButtonsController",
                controllerAs: "button",
                link: function (e, t, i, n) {
                  function r() {
                    return a(i.btnCheckboxTrue, !0);
                  }
                  function a(t, i) {
                    return angular.isDefined(t) ? e.$eval(t) : i;
                  }
                  var o = n[0],
                    s = n[1];
                  (t.find("input").css({ display: "none" }),
                    (s.$render = function () {
                      t.toggleClass(
                        o.activeClass,
                        angular.equals(s.$modelValue, r()),
                      );
                    }),
                    t.on(o.toggleEvent, function () {
                      i.disabled ||
                        e.$apply(function () {
                          (s.$setViewValue(
                            t.hasClass(o.activeClass)
                              ? a(i.btnCheckboxFalse, !1)
                              : r(),
                          ),
                            s.$render());
                        });
                    }));
                },
              };
            }),
          angular
            .module("ui.bootstrap.carousel", [])
            .controller("UibCarouselController", [
              "$scope",
              "$element",
              "$interval",
              "$timeout",
              "$animate",
              function (e, t, i, n, r) {
                function a(e) {
                  for (var t = 0; t < h.length; t++)
                    h[t].slide.active = t === e;
                }
                function o(i, n, o) {
                  if (!v) {
                    if (
                      (angular.extend(i, { direction: o }),
                      angular.extend(h[g].slide || {}, { direction: o }),
                      r.enabled(t) &&
                        !e.$currentTransition &&
                        h[n].element &&
                        m.slides.length > 1)
                    ) {
                      h[n].element.data(f, i.direction);
                      var s = m.getCurrentIndex();
                      (angular.isNumber(s) &&
                        h[s].element &&
                        h[s].element.data(f, i.direction),
                        (e.$currentTransition = !0),
                        r.on("addClass", h[n].element, function (t, i) {
                          "close" === i &&
                            ((e.$currentTransition = null),
                            r.off("addClass", t));
                        }));
                    }
                    ((e.active = i.index), (g = i.index), a(n), u());
                  }
                }
                function s(e) {
                  for (var t = 0; t < h.length; t++)
                    if (h[t].slide === e) return t;
                }
                function l() {
                  d && (i.cancel(d), (d = null));
                }
                function u() {
                  l();
                  var t = +e.interval;
                  !isNaN(t) && t > 0 && (d = i(c, t));
                }
                function c() {
                  var t = +e.interval;
                  p && !isNaN(t) && t > 0 && h.length ? e.next() : e.pause();
                }
                var d,
                  p,
                  m = this,
                  h = (m.slides = e.slides = []),
                  f = "uib-slideDirection",
                  g = e.active,
                  v = !1;
                (t.addClass("carousel"),
                  (m.addSlide = function (t, i) {
                    (h.push({ slide: t, element: i }),
                      h.sort(function (e, t) {
                        return +e.slide.index - +t.slide.index;
                      }),
                      (t.index === e.active ||
                        (1 === h.length && !angular.isNumber(e.active))) &&
                        (e.$currentTransition && (e.$currentTransition = null),
                        (g = t.index),
                        (e.active = t.index),
                        a(g),
                        m.select(h[s(t)]),
                        1 === h.length && e.play()));
                  }),
                  (m.getCurrentIndex = function () {
                    for (var e = 0; e < h.length; e++)
                      if (h[e].slide.index === g) return e;
                  }),
                  (m.next = e.next =
                    function () {
                      var t = (m.getCurrentIndex() + 1) % h.length;
                      return 0 === t && e.noWrap()
                        ? void e.pause()
                        : m.select(h[t], "next");
                    }),
                  (m.prev = e.prev =
                    function () {
                      var t =
                        m.getCurrentIndex() - 1 < 0
                          ? h.length - 1
                          : m.getCurrentIndex() - 1;
                      return e.noWrap() && t === h.length - 1
                        ? void e.pause()
                        : m.select(h[t], "prev");
                    }),
                  (m.removeSlide = function (t) {
                    var i = s(t);
                    (h.splice(i, 1),
                      h.length > 0 && g === i
                        ? i >= h.length
                          ? ((g = h.length - 1),
                            (e.active = g),
                            a(g),
                            m.select(h[h.length - 1]))
                          : ((g = i), (e.active = g), a(g), m.select(h[i]))
                        : g > i && (g--, (e.active = g)),
                      0 === h.length && ((g = null), (e.active = null)));
                  }),
                  (m.select = e.select =
                    function (t, i) {
                      var n = s(t.slide);
                      (void 0 === i &&
                        (i = n > m.getCurrentIndex() ? "next" : "prev"),
                        t.slide.index === g ||
                          e.$currentTransition ||
                          o(t.slide, n, i));
                    }),
                  (e.indexOfSlide = function (e) {
                    return +e.slide.index;
                  }),
                  (e.isActive = function (t) {
                    return e.active === t.slide.index;
                  }),
                  (e.isPrevDisabled = function () {
                    return 0 === e.active && e.noWrap();
                  }),
                  (e.isNextDisabled = function () {
                    return e.active === h.length - 1 && e.noWrap();
                  }),
                  (e.pause = function () {
                    e.noPause || ((p = !1), l());
                  }),
                  (e.play = function () {
                    p || ((p = !0), u());
                  }),
                  t.on("mouseenter", e.pause),
                  t.on("mouseleave", e.play),
                  e.$on("$destroy", function () {
                    ((v = !0), l());
                  }),
                  e.$watch("noTransition", function (e) {
                    r.enabled(t, !e);
                  }),
                  e.$watch("interval", u),
                  e.$watchCollection("slides", function (t) {
                    t.length || (e.$currentTransition = null);
                  }),
                  e.$watch("active", function (e) {
                    if (angular.isNumber(e) && g !== e) {
                      for (var t = 0; t < h.length; t++)
                        if (h[t].slide.index === e) {
                          e = t;
                          break;
                        }
                      h[e] && (a(e), m.select(h[e]), (g = e));
                    }
                  }));
              },
            ])
            .directive("uibCarousel", function () {
              return {
                transclude: !0,
                controller: "UibCarouselController",
                controllerAs: "carousel",
                restrict: "A",
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/carousel/carousel.html";
                },
                scope: {
                  active: "=",
                  interval: "=",
                  noTransition: "=",
                  noPause: "=",
                  noWrap: "&",
                },
              };
            })
            .directive("uibSlide", [
              "$animate",
              function (e) {
                return {
                  require: "^uibCarousel",
                  restrict: "A",
                  transclude: !0,
                  templateUrl: function (e, t) {
                    return t.templateUrl || "uib/template/carousel/slide.html";
                  },
                  scope: { actual: "=?", index: "=?" },
                  link: function (t, i, n, r) {
                    (i.addClass("item"),
                      r.addSlide(t, i),
                      t.$on("$destroy", function () {
                        r.removeSlide(t);
                      }),
                      t.$watch("active", function (t) {
                        e[t ? "addClass" : "removeClass"](i, "active");
                      }));
                  },
                };
              },
            ])
            .animation(".item", [
              "$animateCss",
              function (e) {
                function t(e, t, i) {
                  (e.removeClass(t), i && i());
                }
                var i = "uib-slideDirection";
                return {
                  beforeAddClass: function (n, r, a) {
                    if ("active" === r) {
                      var o = n.data(i),
                        s = "next" === o ? "left" : "right",
                        l = t.bind(this, n, s + " " + o, a);
                      return (
                        n.addClass(o),
                        e(n, { addClass: s }).start().done(l),
                        function () {}
                      );
                    }
                    a();
                  },
                  beforeRemoveClass: function (n, r, a) {
                    if ("active" === r) {
                      var o = "next" === n.data(i) ? "left" : "right",
                        s = t.bind(this, n, o, a);
                      return (
                        e(n, { addClass: o }).start().done(s),
                        function () {}
                      );
                    }
                    a();
                  },
                };
              },
            ]),
          angular
            .module("ui.bootstrap.dateparser", [])
            .service("uibDateParser", [
              "$log",
              "$locale",
              "dateFilter",
              "orderByFilter",
              "filterFilter",
              function (e, t, i, n, r) {
                function a(e) {
                  return r(h, { key: e }, !0)[0];
                }
                function o(e) {
                  var t = [],
                    i = e.split(""),
                    r = e.indexOf("'");
                  if (r > -1) {
                    var a = !1;
                    e = e.split("");
                    for (var o = r; o < e.length; o++)
                      a
                        ? ("'" === e[o] &&
                            (o + 1 < e.length && "'" === e[o + 1]
                              ? ((e[o + 1] = "$"), (i[o + 1] = ""))
                              : ((i[o] = ""), (a = !1))),
                          (e[o] = "$"))
                        : "'" === e[o] && ((e[o] = "$"), (i[o] = ""), (a = !0));
                    e = e.join("");
                  }
                  return (
                    angular.forEach(h, function (n) {
                      var r = e.indexOf(n.key);
                      if (r > -1) {
                        ((e = e.split("")),
                          (i[r] = "(" + n.regex + ")"),
                          (e[r] = "$"));
                        for (var a = r + 1, o = r + n.key.length; a < o; a++)
                          ((i[a] = ""), (e[a] = "$"));
                        ((e = e.join("")),
                          t.push({
                            index: r,
                            key: n.key,
                            apply: n.apply,
                            matcher: n.regex,
                          }));
                      }
                    }),
                    {
                      regex: new RegExp("^" + i.join("") + "$"),
                      map: n(t, "index"),
                    }
                  );
                }
                function s(e, t, i) {
                  return function () {
                    return e.substr(t + 1, i - t - 1);
                  };
                }
                function l(e, t) {
                  for (var i = e.substr(t), n = 0; n < h.length; n++)
                    if (new RegExp("^" + h[n].key).test(i)) {
                      var r = h[n];
                      return { endIdx: t + r.key.length, parser: r.formatter };
                    }
                  return {
                    endIdx: t + 1,
                    parser: function () {
                      return i.charAt(0);
                    },
                  };
                }
                function u(e) {
                  return parseInt(e, 10);
                }
                function c(e, t) {
                  e = e.replace(/:/g, "");
                  var i = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
                  return isNaN(i) ? t : i;
                }
                function d(e, t) {
                  return (
                    (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t),
                    e
                  );
                }
                function p(e, t, i) {
                  i = i ? -1 : 1;
                  var n = e.getTimezoneOffset();
                  return d(e, i * (c(t, n) - n));
                }
                var m,
                  h,
                  f = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
                ((this.init = function () {
                  ((m = t.id),
                    (this.parsers = {}),
                    (this.formatters = {}),
                    (h = [
                      {
                        key: "yyyy",
                        regex: "\\d{4}",
                        apply: function (e) {
                          this.year = +e;
                        },
                        formatter: function (e) {
                          var t = new Date();
                          return (
                            t.setFullYear(Math.abs(e.getFullYear())),
                            i(t, "yyyy")
                          );
                        },
                      },
                      {
                        key: "yy",
                        regex: "\\d{2}",
                        apply: function (e) {
                          ((e = +e), (this.year = e < 69 ? e + 2e3 : e + 1900));
                        },
                        formatter: function (e) {
                          var t = new Date();
                          return (
                            t.setFullYear(Math.abs(e.getFullYear())),
                            i(t, "yy")
                          );
                        },
                      },
                      {
                        key: "y",
                        regex: "\\d{1,4}",
                        apply: function (e) {
                          this.year = +e;
                        },
                        formatter: function (e) {
                          var t = new Date();
                          return (
                            t.setFullYear(Math.abs(e.getFullYear())),
                            i(t, "y")
                          );
                        },
                      },
                      {
                        key: "M!",
                        regex: "0?[1-9]|1[0-2]",
                        apply: function (e) {
                          this.month = e - 1;
                        },
                        formatter: function (e) {
                          var t = e.getMonth();
                          return /^[0-9]$/.test(t) ? i(e, "MM") : i(e, "M");
                        },
                      },
                      {
                        key: "MMMM",
                        regex: t.DATETIME_FORMATS.MONTH.join("|"),
                        apply: function (e) {
                          this.month = t.DATETIME_FORMATS.MONTH.indexOf(e);
                        },
                        formatter: function (e) {
                          return i(e, "MMMM");
                        },
                      },
                      {
                        key: "MMM",
                        regex: t.DATETIME_FORMATS.SHORTMONTH.join("|"),
                        apply: function (e) {
                          this.month = t.DATETIME_FORMATS.SHORTMONTH.indexOf(e);
                        },
                        formatter: function (e) {
                          return i(e, "MMM");
                        },
                      },
                      {
                        key: "MM",
                        regex: "0[1-9]|1[0-2]",
                        apply: function (e) {
                          this.month = e - 1;
                        },
                        formatter: function (e) {
                          return i(e, "MM");
                        },
                      },
                      {
                        key: "M",
                        regex: "[1-9]|1[0-2]",
                        apply: function (e) {
                          this.month = e - 1;
                        },
                        formatter: function (e) {
                          return i(e, "M");
                        },
                      },
                      {
                        key: "d!",
                        regex: "[0-2]?[0-9]{1}|3[0-1]{1}",
                        apply: function (e) {
                          this.date = +e;
                        },
                        formatter: function (e) {
                          var t = e.getDate();
                          return /^[1-9]$/.test(t) ? i(e, "dd") : i(e, "d");
                        },
                      },
                      {
                        key: "dd",
                        regex: "[0-2][0-9]{1}|3[0-1]{1}",
                        apply: function (e) {
                          this.date = +e;
                        },
                        formatter: function (e) {
                          return i(e, "dd");
                        },
                      },
                      {
                        key: "d",
                        regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                        apply: function (e) {
                          this.date = +e;
                        },
                        formatter: function (e) {
                          return i(e, "d");
                        },
                      },
                      {
                        key: "EEEE",
                        regex: t.DATETIME_FORMATS.DAY.join("|"),
                        formatter: function (e) {
                          return i(e, "EEEE");
                        },
                      },
                      {
                        key: "EEE",
                        regex: t.DATETIME_FORMATS.SHORTDAY.join("|"),
                        formatter: function (e) {
                          return i(e, "EEE");
                        },
                      },
                      {
                        key: "HH",
                        regex: "(?:0|1)[0-9]|2[0-3]",
                        apply: function (e) {
                          this.hours = +e;
                        },
                        formatter: function (e) {
                          return i(e, "HH");
                        },
                      },
                      {
                        key: "hh",
                        regex: "0[0-9]|1[0-2]",
                        apply: function (e) {
                          this.hours = +e;
                        },
                        formatter: function (e) {
                          return i(e, "hh");
                        },
                      },
                      {
                        key: "H",
                        regex: "1?[0-9]|2[0-3]",
                        apply: function (e) {
                          this.hours = +e;
                        },
                        formatter: function (e) {
                          return i(e, "H");
                        },
                      },
                      {
                        key: "h",
                        regex: "[0-9]|1[0-2]",
                        apply: function (e) {
                          this.hours = +e;
                        },
                        formatter: function (e) {
                          return i(e, "h");
                        },
                      },
                      {
                        key: "mm",
                        regex: "[0-5][0-9]",
                        apply: function (e) {
                          this.minutes = +e;
                        },
                        formatter: function (e) {
                          return i(e, "mm");
                        },
                      },
                      {
                        key: "m",
                        regex: "[0-9]|[1-5][0-9]",
                        apply: function (e) {
                          this.minutes = +e;
                        },
                        formatter: function (e) {
                          return i(e, "m");
                        },
                      },
                      {
                        key: "sss",
                        regex: "[0-9][0-9][0-9]",
                        apply: function (e) {
                          this.milliseconds = +e;
                        },
                        formatter: function (e) {
                          return i(e, "sss");
                        },
                      },
                      {
                        key: "ss",
                        regex: "[0-5][0-9]",
                        apply: function (e) {
                          this.seconds = +e;
                        },
                        formatter: function (e) {
                          return i(e, "ss");
                        },
                      },
                      {
                        key: "s",
                        regex: "[0-9]|[1-5][0-9]",
                        apply: function (e) {
                          this.seconds = +e;
                        },
                        formatter: function (e) {
                          return i(e, "s");
                        },
                      },
                      {
                        key: "a",
                        regex: t.DATETIME_FORMATS.AMPMS.join("|"),
                        apply: function (e) {
                          (12 === this.hours && (this.hours = 0),
                            "PM" === e && (this.hours += 12));
                        },
                        formatter: function (e) {
                          return i(e, "a");
                        },
                      },
                      {
                        key: "Z",
                        regex: "[+-]\\d{4}",
                        apply: function (e) {
                          var t = e.match(/([+-])(\d{2})(\d{2})/),
                            i = t[1],
                            n = t[2],
                            r = t[3];
                          ((this.hours += u(i + n)),
                            (this.minutes += u(i + r)));
                        },
                        formatter: function (e) {
                          return i(e, "Z");
                        },
                      },
                      {
                        key: "ww",
                        regex: "[0-4][0-9]|5[0-3]",
                        formatter: function (e) {
                          return i(e, "ww");
                        },
                      },
                      {
                        key: "w",
                        regex: "[0-9]|[1-4][0-9]|5[0-3]",
                        formatter: function (e) {
                          return i(e, "w");
                        },
                      },
                      {
                        key: "GGGG",
                        regex: t.DATETIME_FORMATS.ERANAMES.join("|").replace(
                          /\s/g,
                          "\\s",
                        ),
                        formatter: function (e) {
                          return i(e, "GGGG");
                        },
                      },
                      {
                        key: "GGG",
                        regex: t.DATETIME_FORMATS.ERAS.join("|"),
                        formatter: function (e) {
                          return i(e, "GGG");
                        },
                      },
                      {
                        key: "GG",
                        regex: t.DATETIME_FORMATS.ERAS.join("|"),
                        formatter: function (e) {
                          return i(e, "GG");
                        },
                      },
                      {
                        key: "G",
                        regex: t.DATETIME_FORMATS.ERAS.join("|"),
                        formatter: function (e) {
                          return i(e, "G");
                        },
                      },
                    ]),
                    angular.version.major >= 1 &&
                      angular.version.minor > 4 &&
                      h.push({
                        key: "LLLL",
                        regex: t.DATETIME_FORMATS.STANDALONEMONTH.join("|"),
                        apply: function (e) {
                          this.month =
                            t.DATETIME_FORMATS.STANDALONEMONTH.indexOf(e);
                        },
                        formatter: function (e) {
                          return i(e, "LLLL");
                        },
                      }));
                }),
                  this.init(),
                  (this.getParser = function (e) {
                    var t = a(e);
                    return (t && t.apply) || null;
                  }),
                  (this.overrideParser = function (e, t) {
                    var i = a(e);
                    i &&
                      angular.isFunction(t) &&
                      ((this.parsers = {}), (i.apply = t));
                  }.bind(this)),
                  (this.filter = function (e, i) {
                    return angular.isDate(e) && !isNaN(e) && i
                      ? ((i = t.DATETIME_FORMATS[i] || i),
                        t.id !== m && this.init(),
                        this.formatters[i] ||
                          (this.formatters[i] = (function (e) {
                            for (var t, i, n = [], r = 0; r < e.length; )
                              if (angular.isNumber(i)) {
                                if ("'" === e.charAt(r))
                                  (r + 1 >= e.length ||
                                    "'" !== e.charAt(r + 1)) &&
                                    (n.push(s(e, i, r)), (i = null));
                                else if (r === e.length)
                                  for (; i < e.length; )
                                    ((t = l(e, i)), n.push(t), (i = t.endIdx));
                                r++;
                              } else
                                "'" !== e.charAt(r)
                                  ? ((t = l(e, r)),
                                    n.push(t.parser),
                                    (r = t.endIdx))
                                  : ((i = r), r++);
                            return n;
                          })(i)),
                        this.formatters[i].reduce(function (t, i) {
                          return t + i(e);
                        }, ""))
                      : "";
                  }),
                  (this.parse = function (i, n, r) {
                    if (!angular.isString(i) || !n) return i;
                    ((n = (n = t.DATETIME_FORMATS[n] || n).replace(f, "\\$&")),
                      t.id !== m && this.init(),
                      this.parsers[n] || (this.parsers[n] = o(n)));
                    var a = this.parsers[n],
                      s = a.regex,
                      l = a.map,
                      u = i.match(s),
                      c = !1;
                    if (u && u.length) {
                      var d, p;
                      angular.isDate(r) && !isNaN(r.getTime())
                        ? (d = {
                            year: r.getFullYear(),
                            month: r.getMonth(),
                            date: r.getDate(),
                            hours: r.getHours(),
                            minutes: r.getMinutes(),
                            seconds: r.getSeconds(),
                            milliseconds: r.getMilliseconds(),
                          })
                        : (r &&
                            e.warn(
                              "dateparser:",
                              "baseDate is not a valid date",
                            ),
                          (d = {
                            year: 1900,
                            month: 0,
                            date: 1,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                            milliseconds: 0,
                          }));
                      for (var h = 1, g = u.length; h < g; h++) {
                        var v = l[h - 1];
                        ("Z" === v.matcher && (c = !0),
                          v.apply && v.apply.call(d, u[h]));
                      }
                      var b = c
                          ? Date.prototype.setUTCFullYear
                          : Date.prototype.setFullYear,
                        y = c
                          ? Date.prototype.setUTCHours
                          : Date.prototype.setHours;
                      return (
                        (function (e, t, i) {
                          return (
                            !(i < 1) &&
                            (1 === t && i > 28
                              ? 29 === i &&
                                ((e % 4 == 0 && e % 100 != 0) || e % 400 == 0)
                              : (3 !== t && 5 !== t && 8 !== t && 10 !== t) ||
                                i < 31)
                          );
                        })(d.year, d.month, d.date) &&
                          (!angular.isDate(r) || isNaN(r.getTime()) || c
                            ? ((p = new Date(0)),
                              b.call(p, d.year, d.month, d.date),
                              y.call(
                                p,
                                d.hours || 0,
                                d.minutes || 0,
                                d.seconds || 0,
                                d.milliseconds || 0,
                              ))
                            : ((p = new Date(r)),
                              b.call(p, d.year, d.month, d.date),
                              y.call(
                                p,
                                d.hours,
                                d.minutes,
                                d.seconds,
                                d.milliseconds,
                              ))),
                        p
                      );
                    }
                  }),
                  (this.toTimezone = function (e, t) {
                    return e && t ? p(e, t) : e;
                  }),
                  (this.fromTimezone = function (e, t) {
                    return e && t ? p(e, t, !0) : e;
                  }),
                  (this.timezoneToOffset = c),
                  (this.addDateMinutes = d),
                  (this.convertTimezoneToLocal = p));
              },
            ]),
          angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", [
            "$animate",
            function (e) {
              var t = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,
                i = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
              return {
                restrict: "A",
                compile: function (n, r) {
                  function a(t, n) {
                    var r = t.match(i),
                      a = n.$eval(r[1]),
                      o = r[2],
                      s = u[t];
                    if (!s) {
                      var c = function (t) {
                        var i = null;
                        (l.some(function (e) {
                          if (e.scope.$eval(d) === t) return ((i = e), !0);
                        }),
                          s.lastActivated !== i &&
                            (s.lastActivated &&
                              e.removeClass(s.lastActivated.element, a),
                            i && e.addClass(i.element, a),
                            (s.lastActivated = i)));
                      };
                      u[t] = s = {
                        lastActivated: null,
                        scope: n,
                        watchFn: c,
                        compareWithExp: o,
                        watcher: n.$watch(o, c),
                      };
                    }
                    s.watchFn(n.$eval(o));
                  }
                  function o(e) {
                    var t = e.targetScope,
                      i = s.indexOf(t);
                    if ((s.splice(i, 1), l.splice(i, 1), s.length)) {
                      var n = s[0];
                      angular.forEach(u, function (e) {
                        e.scope === t &&
                          ((e.watcher = n.$watch(e.compareWithExp, e.watchFn)),
                          (e.scope = n));
                      });
                    } else u = {};
                  }
                  var s = [],
                    l = [],
                    u = {},
                    c = r.uibIsClass.match(t),
                    d = c[2],
                    p = c[1].split(",");
                  return function (e, t, i) {
                    (s.push(e),
                      l.push({ scope: e, element: t }),
                      p.forEach(function (t, i) {
                        a(t, e);
                      }),
                      e.$on("$destroy", o));
                  };
                },
              };
            },
          ]),
          angular
            .module("ui.bootstrap.datepicker", [
              "ui.bootstrap.dateparser",
              "ui.bootstrap.isClass",
            ])
            .value("$datepickerSuppressError", !1)
            .value("$datepickerLiteralWarning", !0)
            .constant("uibDatepickerConfig", {
              datepickerMode: "day",
              formatDay: "dd",
              formatMonth: "MMMM",
              formatYear: "yyyy",
              formatDayHeader: "EEE",
              formatDayTitle: "MMMM yyyy",
              formatMonthTitle: "yyyy",
              maxDate: null,
              maxMode: "year",
              minDate: null,
              minMode: "day",
              monthColumns: 3,
              ngModelOptions: {},
              shortcutPropagation: !1,
              showWeeks: !0,
              yearColumns: 5,
              yearRows: 4,
            })
            .controller("UibDatepickerController", [
              "$scope",
              "$element",
              "$attrs",
              "$parse",
              "$interpolate",
              "$locale",
              "$log",
              "dateFilter",
              "uibDatepickerConfig",
              "$datepickerLiteralWarning",
              "$datepickerSuppressError",
              "uibDateParser",
              function (e, t, i, n, r, a, o, s, l, u, c, d) {
                function p(t) {
                  ((e.datepickerMode = t),
                    (e.datepickerOptions.datepickerMode = t));
                }
                var m = this,
                  h = { $setViewValue: angular.noop },
                  f = {},
                  g = [];
                (t.addClass("uib-datepicker"),
                  i.$set("role", "application"),
                  e.datepickerOptions || (e.datepickerOptions = {}),
                  (this.modes = ["day", "month", "year"]),
                  [
                    "customClass",
                    "dateDisabled",
                    "datepickerMode",
                    "formatDay",
                    "formatDayHeader",
                    "formatDayTitle",
                    "formatMonth",
                    "formatMonthTitle",
                    "formatYear",
                    "maxDate",
                    "maxMode",
                    "minDate",
                    "minMode",
                    "monthColumns",
                    "showWeeks",
                    "shortcutPropagation",
                    "startingDay",
                    "yearColumns",
                    "yearRows",
                    "ariaLevel",
                  ].forEach(function (t) {
                    switch (t) {
                      case "customClass":
                      case "dateDisabled":
                        e[t] = e.datepickerOptions[t] || angular.noop;
                        break;
                      case "datepickerMode":
                        e.datepickerMode = angular.isDefined(
                          e.datepickerOptions.datepickerMode,
                        )
                          ? e.datepickerOptions.datepickerMode
                          : l.datepickerMode;
                        break;
                      case "formatDay":
                      case "formatDayHeader":
                      case "formatDayTitle":
                      case "formatMonth":
                      case "formatMonthTitle":
                      case "formatYear":
                        m[t] = angular.isDefined(e.datepickerOptions[t])
                          ? r(e.datepickerOptions[t])(e.$parent)
                          : l[t];
                        break;
                      case "monthColumns":
                      case "showWeeks":
                      case "shortcutPropagation":
                      case "yearColumns":
                      case "yearRows":
                        m[t] = angular.isDefined(e.datepickerOptions[t])
                          ? e.datepickerOptions[t]
                          : l[t];
                        break;
                      case "startingDay":
                        angular.isDefined(e.datepickerOptions.startingDay)
                          ? (m.startingDay = e.datepickerOptions.startingDay)
                          : angular.isNumber(l.startingDay)
                            ? (m.startingDay = l.startingDay)
                            : (m.startingDay =
                                (a.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7);
                        break;
                      case "maxDate":
                      case "minDate":
                        e.$watch("datepickerOptions." + t, function (e) {
                          (e
                            ? angular.isDate(e)
                              ? (m[t] = d.fromTimezone(
                                  new Date(e),
                                  f.getOption("timezone"),
                                ))
                              : (u &&
                                  o.warn(
                                    "Literal date support has been deprecated, please switch to date object usage",
                                  ),
                                (m[t] = new Date(s(e, "medium"))))
                            : (m[t] = l[t]
                                ? d.fromTimezone(
                                    new Date(l[t]),
                                    f.getOption("timezone"),
                                  )
                                : null),
                            m.refreshView());
                        });
                        break;
                      case "maxMode":
                      case "minMode":
                        e.datepickerOptions[t]
                          ? e.$watch(
                              function () {
                                return e.datepickerOptions[t];
                              },
                              function (i) {
                                ((m[t] = e[t] =
                                  angular.isDefined(i)
                                    ? i
                                    : e.datepickerOptions[t]),
                                  (("minMode" === t &&
                                    m.modes.indexOf(
                                      e.datepickerOptions.datepickerMode,
                                    ) < m.modes.indexOf(m[t])) ||
                                    ("maxMode" === t &&
                                      m.modes.indexOf(
                                        e.datepickerOptions.datepickerMode,
                                      ) > m.modes.indexOf(m[t]))) &&
                                    ((e.datepickerMode = m[t]),
                                    (e.datepickerOptions.datepickerMode =
                                      m[t])));
                              },
                            )
                          : (m[t] = e[t] = l[t] || null);
                        break;
                      case "ariaLevel":
                        e[t] = e.datepickerOptions[t] || 1;
                    }
                  }),
                  (e.uniqueId =
                    "datepicker-" +
                    e.$id +
                    "-" +
                    Math.floor(1e4 * Math.random())),
                  (e.disabled = angular.isDefined(i.disabled) || !1),
                  angular.isDefined(i.ngDisabled) &&
                    g.push(
                      e.$parent.$watch(i.ngDisabled, function (t) {
                        ((e.disabled = t), m.refreshView());
                      }),
                    ),
                  (e.isActive = function (t) {
                    return (
                      0 === m.compare(t.date, m.activeDate) &&
                      ((e.activeDateId = t.uid), !0)
                    );
                  }),
                  (this.init = function (t) {
                    ((f = (function (t) {
                      var i;
                      if (angular.version.minor < 6)
                        (i =
                          t.$options ||
                          e.datepickerOptions.ngModelOptions ||
                          l.ngModelOptions ||
                          {}).getOption = function (e) {
                          return i[e];
                        };
                      else {
                        var n =
                          t.$options.getOption("timezone") ||
                          (e.datepickerOptions.ngModelOptions
                            ? e.datepickerOptions.ngModelOptions.timezone
                            : null) ||
                          (l.ngModelOptions ? l.ngModelOptions.timezone : null);
                        i = t.$options
                          .createChild(l.ngModelOptions)
                          .createChild(e.datepickerOptions.ngModelOptions)
                          .createChild(t.$options)
                          .createChild({ timezone: n });
                      }
                      return i;
                    })((h = t))),
                      e.datepickerOptions.initDate
                        ? ((m.activeDate =
                            d.fromTimezone(
                              e.datepickerOptions.initDate,
                              f.getOption("timezone"),
                            ) || new Date()),
                          e.$watch("datepickerOptions.initDate", function (e) {
                            e &&
                              (h.$isEmpty(h.$modelValue) || h.$invalid) &&
                              ((m.activeDate = d.fromTimezone(
                                e,
                                f.getOption("timezone"),
                              )),
                              m.refreshView());
                          }))
                        : (m.activeDate = new Date()));
                    var i = h.$modelValue
                      ? new Date(h.$modelValue)
                      : new Date();
                    ((this.activeDate = isNaN(i)
                      ? d.fromTimezone(new Date(), f.getOption("timezone"))
                      : d.fromTimezone(i, f.getOption("timezone"))),
                      (h.$render = function () {
                        m.render();
                      }));
                  }),
                  (this.render = function () {
                    if (h.$viewValue) {
                      var e = new Date(h.$viewValue);
                      isNaN(e)
                        ? c ||
                          o.error(
                            'Datepicker directive: "ng-model" value must be a Date object',
                          )
                        : (this.activeDate = d.fromTimezone(
                            e,
                            f.getOption("timezone"),
                          ));
                    }
                    this.refreshView();
                  }),
                  (this.refreshView = function () {
                    if (this.element) {
                      ((e.selectedDt = null),
                        this._refreshView(),
                        e.activeDt && (e.activeDateId = e.activeDt.uid));
                      var t = h.$viewValue ? new Date(h.$viewValue) : null;
                      ((t = d.fromTimezone(t, f.getOption("timezone"))),
                        h.$setValidity(
                          "dateDisabled",
                          !t || (this.element && !this.isDisabled(t)),
                        ));
                    }
                  }),
                  (this.createDateObject = function (t, i) {
                    var n = h.$viewValue ? new Date(h.$viewValue) : null;
                    n = d.fromTimezone(n, f.getOption("timezone"));
                    var r = new Date();
                    r = d.fromTimezone(r, f.getOption("timezone"));
                    var a = this.compare(t, r),
                      o = {
                        date: t,
                        label: d.filter(t, i),
                        selected: n && 0 === this.compare(t, n),
                        disabled: this.isDisabled(t),
                        past: a < 0,
                        current: 0 === a,
                        future: a > 0,
                        customClass: this.customClass(t) || null,
                      };
                    return (
                      n && 0 === this.compare(t, n) && (e.selectedDt = o),
                      m.activeDate &&
                        0 === this.compare(o.date, m.activeDate) &&
                        (e.activeDt = o),
                      o
                    );
                  }),
                  (this.isDisabled = function (t) {
                    return (
                      e.disabled ||
                      (this.minDate && this.compare(t, this.minDate) < 0) ||
                      (this.maxDate && this.compare(t, this.maxDate) > 0) ||
                      (e.dateDisabled &&
                        e.dateDisabled({ date: t, mode: e.datepickerMode }))
                    );
                  }),
                  (this.customClass = function (t) {
                    return e.customClass({ date: t, mode: e.datepickerMode });
                  }),
                  (this.split = function (e, t) {
                    for (var i = []; e.length > 0; ) i.push(e.splice(0, t));
                    return i;
                  }),
                  (e.select = function (t) {
                    if (e.datepickerMode === m.minMode) {
                      var i = h.$viewValue
                        ? d.fromTimezone(
                            new Date(h.$viewValue),
                            f.getOption("timezone"),
                          )
                        : new Date(0, 0, 0, 0, 0, 0, 0);
                      (i.setFullYear(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate(),
                      ),
                        (i = d.toTimezone(i, f.getOption("timezone"))),
                        h.$setViewValue(i),
                        h.$render());
                    } else
                      ((m.activeDate = t),
                        p(m.modes[m.modes.indexOf(e.datepickerMode) - 1]),
                        e.$emit("uib:datepicker.mode"));
                    e.$broadcast("uib:datepicker.focus");
                  }),
                  (e.move = function (e) {
                    var t =
                        m.activeDate.getFullYear() + e * (m.step.years || 0),
                      i = m.activeDate.getMonth() + e * (m.step.months || 0);
                    (m.activeDate.setFullYear(t, i, 1), m.refreshView());
                  }),
                  (e.toggleMode = function (t) {
                    ((t = t || 1),
                      (e.datepickerMode === m.maxMode && 1 === t) ||
                        (e.datepickerMode === m.minMode && -1 === t) ||
                        (p(m.modes[m.modes.indexOf(e.datepickerMode) + t]),
                        e.$emit("uib:datepicker.mode")));
                  }),
                  (e.keys = {
                    13: "enter",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                  }),
                  e.$on("uib:datepicker.focus", function () {
                    m.element[0].focus();
                  }),
                  (e.keydown = function (t) {
                    var i = e.keys[t.which];
                    if (i && !t.shiftKey && !t.altKey && !e.disabled)
                      if (
                        (t.preventDefault(),
                        m.shortcutPropagation || t.stopPropagation(),
                        "enter" === i || "space" === i)
                      ) {
                        if (m.isDisabled(m.activeDate)) return;
                        e.select(m.activeDate);
                      } else
                        !t.ctrlKey || ("up" !== i && "down" !== i)
                          ? (m.handleKeyDown(i, t), m.refreshView())
                          : e.toggleMode("up" === i ? 1 : -1);
                  }),
                  t.on("keydown", function (t) {
                    e.$apply(function () {
                      e.keydown(t);
                    });
                  }),
                  e.$on("$destroy", function () {
                    for (; g.length; ) g.shift()();
                  }));
              },
            ])
            .controller("UibDaypickerController", [
              "$scope",
              "$element",
              "dateFilter",
              function (e, t, i) {
                function n(e, t) {
                  return 1 !== t || e % 4 != 0 || (e % 100 == 0 && e % 400 != 0)
                    ? a[t]
                    : 29;
                }
                function r(e) {
                  var t = new Date(e);
                  t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                  var i = t.getTime();
                  return (
                    t.setMonth(0),
                    t.setDate(1),
                    Math.floor(Math.round((i - t) / 864e5) / 7) + 1
                  );
                }
                var a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                ((this.step = { months: 1 }),
                  (this.element = t),
                  (this.init = function (t) {
                    (angular.extend(t, this),
                      (e.showWeeks = t.showWeeks),
                      t.refreshView());
                  }),
                  (this.getDates = function (e, t) {
                    for (
                      var i, n = new Array(t), r = new Date(e), a = 0;
                      a < t;
                    )
                      ((i = new Date(r)),
                        (n[a++] = i),
                        r.setDate(r.getDate() + 1));
                    return n;
                  }),
                  (this._refreshView = function () {
                    var t = this.activeDate.getFullYear(),
                      n = this.activeDate.getMonth(),
                      a = new Date(this.activeDate);
                    a.setFullYear(t, n, 1);
                    var o = this.startingDay - a.getDay(),
                      s = o > 0 ? 7 - o : -o,
                      l = new Date(a);
                    s > 0 && l.setDate(1 - s);
                    for (var u = this.getDates(l, 42), c = 0; c < 42; c++)
                      u[c] = angular.extend(
                        this.createDateObject(u[c], this.formatDay),
                        {
                          secondary: u[c].getMonth() !== n,
                          uid: e.uniqueId + "-" + c,
                        },
                      );
                    e.labels = new Array(7);
                    for (var d = 0; d < 7; d++)
                      e.labels[d] = {
                        abbr: i(u[d].date, this.formatDayHeader),
                        full: i(u[d].date, "EEEE"),
                      };
                    if (
                      ((e.title = i(this.activeDate, this.formatDayTitle)),
                      (e.rows = this.split(u, 7)),
                      e.showWeeks)
                    ) {
                      e.weekNumbers = [];
                      for (
                        var p = (11 - this.startingDay) % 7,
                          m = e.rows.length,
                          h = 0;
                        h < m;
                        h++
                      )
                        e.weekNumbers.push(r(e.rows[h][p].date));
                    }
                  }),
                  (this.compare = function (e, t) {
                    var i = new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                      ),
                      n = new Date(t.getFullYear(), t.getMonth(), t.getDate());
                    return (
                      i.setFullYear(e.getFullYear()),
                      n.setFullYear(t.getFullYear()),
                      i - n
                    );
                  }),
                  (this.handleKeyDown = function (e, t) {
                    var i = this.activeDate.getDate();
                    if ("left" === e) i -= 1;
                    else if ("up" === e) i -= 7;
                    else if ("right" === e) i += 1;
                    else if ("down" === e) i += 7;
                    else if ("pageup" === e || "pagedown" === e) {
                      var r =
                        this.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                      (this.activeDate.setMonth(r, 1),
                        (i = Math.min(
                          n(
                            this.activeDate.getFullYear(),
                            this.activeDate.getMonth(),
                          ),
                          i,
                        )));
                    } else
                      "home" === e
                        ? (i = 1)
                        : "end" === e &&
                          (i = n(
                            this.activeDate.getFullYear(),
                            this.activeDate.getMonth(),
                          ));
                    this.activeDate.setDate(i);
                  }));
              },
            ])
            .controller("UibMonthpickerController", [
              "$scope",
              "$element",
              "dateFilter",
              function (e, t, i) {
                ((this.step = { years: 1 }),
                  (this.element = t),
                  (this.init = function (e) {
                    (angular.extend(e, this), e.refreshView());
                  }),
                  (this._refreshView = function () {
                    for (
                      var t,
                        n = new Array(12),
                        r = this.activeDate.getFullYear(),
                        a = 0;
                      a < 12;
                      a++
                    )
                      ((t = new Date(this.activeDate)).setFullYear(r, a, 1),
                        (n[a] = angular.extend(
                          this.createDateObject(t, this.formatMonth),
                          { uid: e.uniqueId + "-" + a },
                        )));
                    ((e.title = i(this.activeDate, this.formatMonthTitle)),
                      (e.rows = this.split(n, this.monthColumns)),
                      (e.yearHeaderColspan =
                        this.monthColumns > 3 ? this.monthColumns - 2 : 1));
                  }),
                  (this.compare = function (e, t) {
                    var i = new Date(e.getFullYear(), e.getMonth()),
                      n = new Date(t.getFullYear(), t.getMonth());
                    return (
                      i.setFullYear(e.getFullYear()),
                      n.setFullYear(t.getFullYear()),
                      i - n
                    );
                  }),
                  (this.handleKeyDown = function (e, t) {
                    var i = this.activeDate.getMonth();
                    if ("left" === e) i -= 1;
                    else if ("up" === e) i -= this.monthColumns;
                    else if ("right" === e) i += 1;
                    else if ("down" === e) i += this.monthColumns;
                    else if ("pageup" === e || "pagedown" === e) {
                      var n =
                        this.activeDate.getFullYear() +
                        ("pageup" === e ? -1 : 1);
                      this.activeDate.setFullYear(n);
                    } else "home" === e ? (i = 0) : "end" === e && (i = 11);
                    this.activeDate.setMonth(i);
                  }));
              },
            ])
            .controller("UibYearpickerController", [
              "$scope",
              "$element",
              "dateFilter",
              function (e, t, i) {
                function n(e) {
                  return parseInt((e - 1) / a, 10) * a + 1;
                }
                var r, a;
                ((this.element = t),
                  (this.yearpickerInit = function () {
                    ((r = this.yearColumns),
                      (a = this.yearRows * r),
                      (this.step = { years: a }));
                  }),
                  (this._refreshView = function () {
                    for (
                      var t,
                        i = new Array(a),
                        o = 0,
                        s = n(this.activeDate.getFullYear());
                      o < a;
                      o++
                    )
                      ((t = new Date(this.activeDate)).setFullYear(s + o, 0, 1),
                        (i[o] = angular.extend(
                          this.createDateObject(t, this.formatYear),
                          { uid: e.uniqueId + "-" + o },
                        )));
                    ((e.title = [i[0].label, i[a - 1].label].join(" - ")),
                      (e.rows = this.split(i, r)),
                      (e.columns = r));
                  }),
                  (this.compare = function (e, t) {
                    return e.getFullYear() - t.getFullYear();
                  }),
                  (this.handleKeyDown = function (e, t) {
                    var i = this.activeDate.getFullYear();
                    ("left" === e
                      ? (i -= 1)
                      : "up" === e
                        ? (i -= r)
                        : "right" === e
                          ? (i += 1)
                          : "down" === e
                            ? (i += r)
                            : "pageup" === e || "pagedown" === e
                              ? (i += ("pageup" === e ? -1 : 1) * a)
                              : "home" === e
                                ? (i = n(this.activeDate.getFullYear()))
                                : "end" === e &&
                                  (i =
                                    n(this.activeDate.getFullYear()) + a - 1),
                      this.activeDate.setFullYear(i));
                  }));
              },
            ])
            .directive("uibDatepicker", function () {
              return {
                templateUrl: function (e, t) {
                  return (
                    t.templateUrl || "uib/template/datepicker/datepicker.html"
                  );
                },
                scope: { datepickerOptions: "=?" },
                require: ["uibDatepicker", "^ngModel"],
                restrict: "A",
                controller: "UibDatepickerController",
                controllerAs: "datepicker",
                link: function (e, t, i, n) {
                  var r = n[0],
                    a = n[1];
                  r.init(a);
                },
              };
            })
            .directive("uibDaypicker", function () {
              return {
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/datepicker/day.html";
                },
                require: ["^uibDatepicker", "uibDaypicker"],
                restrict: "A",
                controller: "UibDaypickerController",
                link: function (e, t, i, n) {
                  var r = n[0];
                  n[1].init(r);
                },
              };
            })
            .directive("uibMonthpicker", function () {
              return {
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/datepicker/month.html";
                },
                require: ["^uibDatepicker", "uibMonthpicker"],
                restrict: "A",
                controller: "UibMonthpickerController",
                link: function (e, t, i, n) {
                  var r = n[0];
                  n[1].init(r);
                },
              };
            })
            .directive("uibYearpicker", function () {
              return {
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/datepicker/year.html";
                },
                require: ["^uibDatepicker", "uibYearpicker"],
                restrict: "A",
                controller: "UibYearpickerController",
                link: function (e, t, i, n) {
                  var r = n[0];
                  (angular.extend(r, n[1]),
                    r.yearpickerInit(),
                    r.refreshView());
                },
              };
            }),
          angular.module("ui.bootstrap.position", []).factory("$uibPosition", [
            "$document",
            "$window",
            function (e, t) {
              var i,
                n,
                r = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
                a = {
                  auto: /\s?auto?\s?/i,
                  primary: /^(top|bottom|left|right)$/,
                  secondary: /^(top|bottom|left|right|center)$/,
                  vertical: /^(top|bottom)$/,
                },
                o = /(HTML|BODY)/;
              return {
                getRawNode: function (e) {
                  return e.nodeName ? e : e[0] || e;
                },
                parseStyle: function (e) {
                  return ((e = parseFloat(e)), isFinite(e) ? e : 0);
                },
                offsetParent: function (i) {
                  function n(e) {
                    return (
                      "static" === (t.getComputedStyle(e).position || "static")
                    );
                  }
                  for (
                    var r =
                      (i = this.getRawNode(i)).offsetParent ||
                      e[0].documentElement;
                    r && r !== e[0].documentElement && n(r);
                  )
                    r = r.offsetParent;
                  return r || e[0].documentElement;
                },
                scrollbarWidth: function (r) {
                  if (r) {
                    if (angular.isUndefined(n)) {
                      var a = e.find("body");
                      (a.addClass("uib-position-body-scrollbar-measure"),
                        (n = t.innerWidth - a[0].clientWidth),
                        (n = isFinite(n) ? n : 0),
                        a.removeClass("uib-position-body-scrollbar-measure"));
                    }
                    return n;
                  }
                  if (angular.isUndefined(i)) {
                    var o = angular.element(
                      '<div class="uib-position-scrollbar-measure"></div>',
                    );
                    (e.find("body").append(o),
                      (i = o[0].offsetWidth - o[0].clientWidth),
                      (i = isFinite(i) ? i : 0),
                      o.remove());
                  }
                  return i;
                },
                scrollbarPadding: function (e) {
                  e = this.getRawNode(e);
                  var i = t.getComputedStyle(e),
                    n = this.parseStyle(i.paddingRight),
                    r = this.parseStyle(i.paddingBottom),
                    a = this.scrollParent(e, !1, !0),
                    s = this.scrollbarWidth(o.test(a.tagName));
                  return {
                    scrollbarWidth: s,
                    widthOverflow: a.scrollWidth > a.clientWidth,
                    right: n + s,
                    originalRight: n,
                    heightOverflow: a.scrollHeight > a.clientHeight,
                    bottom: r + s,
                    originalBottom: r,
                  };
                },
                isScrollable: function (e, i) {
                  e = this.getRawNode(e);
                  var n = i ? r.hidden : r.normal,
                    a = t.getComputedStyle(e);
                  return n.test(a.overflow + a.overflowY + a.overflowX);
                },
                scrollParent: function (i, n, a) {
                  i = this.getRawNode(i);
                  var o = n ? r.hidden : r.normal,
                    s = e[0].documentElement,
                    l = t.getComputedStyle(i);
                  if (a && o.test(l.overflow + l.overflowY + l.overflowX))
                    return i;
                  var u = "absolute" === l.position,
                    c = i.parentElement || s;
                  if (c === s || "fixed" === l.position) return s;
                  for (; c.parentElement && c !== s; ) {
                    var d = t.getComputedStyle(c);
                    if (
                      (u && "static" !== d.position && (u = !1),
                      !u && o.test(d.overflow + d.overflowY + d.overflowX))
                    )
                      break;
                    c = c.parentElement;
                  }
                  return c;
                },
                position: function (i, n) {
                  i = this.getRawNode(i);
                  var r = this.offset(i);
                  if (n) {
                    var a = t.getComputedStyle(i);
                    ((r.top -= this.parseStyle(a.marginTop)),
                      (r.left -= this.parseStyle(a.marginLeft)));
                  }
                  var o = this.offsetParent(i),
                    s = { top: 0, left: 0 };
                  return (
                    o !== e[0].documentElement &&
                      (((s = this.offset(o)).top += o.clientTop - o.scrollTop),
                      (s.left += o.clientLeft - o.scrollLeft)),
                    {
                      width: Math.round(
                        angular.isNumber(r.width) ? r.width : i.offsetWidth,
                      ),
                      height: Math.round(
                        angular.isNumber(r.height) ? r.height : i.offsetHeight,
                      ),
                      top: Math.round(r.top - s.top),
                      left: Math.round(r.left - s.left),
                    }
                  );
                },
                offset: function (i) {
                  var n = (i = this.getRawNode(i)).getBoundingClientRect();
                  return {
                    width: Math.round(
                      angular.isNumber(n.width) ? n.width : i.offsetWidth,
                    ),
                    height: Math.round(
                      angular.isNumber(n.height) ? n.height : i.offsetHeight,
                    ),
                    top: Math.round(
                      n.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                    ),
                    left: Math.round(
                      n.left +
                        (t.pageXOffset || e[0].documentElement.scrollLeft),
                    ),
                  };
                },
                viewportOffset: function (i, n, r) {
                  r = !1 !== r;
                  var a = (i = this.getRawNode(i)).getBoundingClientRect(),
                    o = { top: 0, left: 0, bottom: 0, right: 0 },
                    s = n ? e[0].documentElement : this.scrollParent(i),
                    l = s.getBoundingClientRect();
                  if (
                    ((o.top = l.top + s.clientTop),
                    (o.left = l.left + s.clientLeft),
                    s === e[0].documentElement &&
                      ((o.top += t.pageYOffset), (o.left += t.pageXOffset)),
                    (o.bottom = o.top + s.clientHeight),
                    (o.right = o.left + s.clientWidth),
                    r)
                  ) {
                    var u = t.getComputedStyle(s);
                    ((o.top += this.parseStyle(u.paddingTop)),
                      (o.bottom -= this.parseStyle(u.paddingBottom)),
                      (o.left += this.parseStyle(u.paddingLeft)),
                      (o.right -= this.parseStyle(u.paddingRight)));
                  }
                  return {
                    top: Math.round(a.top - o.top),
                    bottom: Math.round(o.bottom - a.bottom),
                    left: Math.round(a.left - o.left),
                    right: Math.round(o.right - a.right),
                  };
                },
                parsePlacement: function (e) {
                  var t = a.auto.test(e);
                  return (
                    t && (e = e.replace(a.auto, "")),
                    ((e = e.split("-"))[0] = e[0] || "top"),
                    a.primary.test(e[0]) || (e[0] = "top"),
                    (e[1] = e[1] || "center"),
                    a.secondary.test(e[1]) || (e[1] = "center"),
                    (e[2] = !!t),
                    e
                  );
                },
                positionElements: function (e, i, n, r) {
                  ((e = this.getRawNode(e)), (i = this.getRawNode(i)));
                  var o = angular.isDefined(i.offsetWidth)
                      ? i.offsetWidth
                      : i.prop("offsetWidth"),
                    s = angular.isDefined(i.offsetHeight)
                      ? i.offsetHeight
                      : i.prop("offsetHeight");
                  n = this.parsePlacement(n);
                  var l = r ? this.offset(e) : this.position(e),
                    u = { top: 0, left: 0, placement: "" };
                  if (n[2]) {
                    var c = this.viewportOffset(e, r),
                      d = t.getComputedStyle(i),
                      p = {
                        width:
                          o +
                          Math.round(
                            Math.abs(
                              this.parseStyle(d.marginLeft) +
                                this.parseStyle(d.marginRight),
                            ),
                          ),
                        height:
                          s +
                          Math.round(
                            Math.abs(
                              this.parseStyle(d.marginTop) +
                                this.parseStyle(d.marginBottom),
                            ),
                          ),
                      };
                    if (
                      ((n[0] =
                        "top" === n[0] &&
                        p.height > c.top &&
                        p.height <= c.bottom
                          ? "bottom"
                          : "bottom" === n[0] &&
                              p.height > c.bottom &&
                              p.height <= c.top
                            ? "top"
                            : "left" === n[0] &&
                                p.width > c.left &&
                                p.width <= c.right
                              ? "right"
                              : "right" === n[0] &&
                                  p.width > c.right &&
                                  p.width <= c.left
                                ? "left"
                                : n[0]),
                      (n[1] =
                        "top" === n[1] &&
                        p.height - l.height > c.bottom &&
                        p.height - l.height <= c.top
                          ? "bottom"
                          : "bottom" === n[1] &&
                              p.height - l.height > c.top &&
                              p.height - l.height <= c.bottom
                            ? "top"
                            : "left" === n[1] &&
                                p.width - l.width > c.right &&
                                p.width - l.width <= c.left
                              ? "right"
                              : "right" === n[1] &&
                                  p.width - l.width > c.left &&
                                  p.width - l.width <= c.right
                                ? "left"
                                : n[1]),
                      "center" === n[1])
                    )
                      if (a.vertical.test(n[0])) {
                        var m = l.width / 2 - o / 2;
                        c.left + m < 0 && p.width - l.width <= c.right
                          ? (n[1] = "left")
                          : c.right + m < 0 &&
                            p.width - l.width <= c.left &&
                            (n[1] = "right");
                      } else {
                        var h = l.height / 2 - p.height / 2;
                        c.top + h < 0 && p.height - l.height <= c.bottom
                          ? (n[1] = "top")
                          : c.bottom + h < 0 &&
                            p.height - l.height <= c.top &&
                            (n[1] = "bottom");
                      }
                  }
                  switch (n[0]) {
                    case "top":
                      u.top = l.top - s;
                      break;
                    case "bottom":
                      u.top = l.top + l.height;
                      break;
                    case "left":
                      u.left = l.left - o;
                      break;
                    case "right":
                      u.left = l.left + l.width;
                  }
                  switch (n[1]) {
                    case "top":
                      u.top = l.top;
                      break;
                    case "bottom":
                      u.top = l.top + l.height - s;
                      break;
                    case "left":
                      u.left = l.left;
                      break;
                    case "right":
                      u.left = l.left + l.width - o;
                      break;
                    case "center":
                      a.vertical.test(n[0])
                        ? (u.left = l.left + l.width / 2 - o / 2)
                        : (u.top = l.top + l.height / 2 - s / 2);
                  }
                  return (
                    (u.top = Math.round(u.top)),
                    (u.left = Math.round(u.left)),
                    (u.placement =
                      "center" === n[1] ? n[0] : n[0] + "-" + n[1]),
                    u
                  );
                },
                adjustTop: function (e, t, i, n) {
                  if (-1 !== e.indexOf("top") && i !== n)
                    return { top: t.top - n + "px" };
                },
                positionArrow: function (e, i) {
                  var n = (e = this.getRawNode(e)).querySelector(
                    ".tooltip-inner, .popover-inner",
                  );
                  if (n) {
                    var r = angular.element(n).hasClass("tooltip-inner"),
                      o = r
                        ? e.querySelector(".tooltip-arrow")
                        : e.querySelector(".arrow");
                    if (o) {
                      var s = { top: "", bottom: "", left: "", right: "" };
                      if ("center" === (i = this.parsePlacement(i))[1])
                        return void angular.element(o).css(s);
                      var l = "border-" + i[0] + "-width",
                        u = t.getComputedStyle(o)[l],
                        c = "border-";
                      ((c += a.vertical.test(i[0])
                        ? i[0] + "-" + i[1]
                        : i[1] + "-" + i[0]),
                        (c += "-radius"));
                      var d = t.getComputedStyle(r ? n : e)[c];
                      switch (i[0]) {
                        case "top":
                          s.bottom = r ? "0" : "-" + u;
                          break;
                        case "bottom":
                          s.top = r ? "0" : "-" + u;
                          break;
                        case "left":
                          s.right = r ? "0" : "-" + u;
                          break;
                        case "right":
                          s.left = r ? "0" : "-" + u;
                      }
                      ((s[i[1]] = d), angular.element(o).css(s));
                    }
                  }
                },
              };
            },
          ]),
          angular
            .module("ui.bootstrap.datepickerPopup", [
              "ui.bootstrap.datepicker",
              "ui.bootstrap.position",
            ])
            .value("$datepickerPopupLiteralWarning", !0)
            .constant("uibDatepickerPopupConfig", {
              altInputFormats: [],
              appendToBody: !1,
              clearText: "Clear",
              closeOnDateSelection: !0,
              closeText: "Done",
              currentText: "Today",
              datepickerPopup: "yyyy-MM-dd",
              datepickerPopupTemplateUrl:
                "uib/template/datepickerPopup/popup.html",
              datepickerTemplateUrl: "uib/template/datepicker/datepicker.html",
              html5Types: {
                date: "yyyy-MM-dd",
                "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
                month: "yyyy-MM",
              },
              onOpenFocus: !0,
              showButtonBar: !0,
              placement: "auto bottom-left",
            })
            .controller("UibDatepickerPopupController", [
              "$scope",
              "$element",
              "$attrs",
              "$compile",
              "$log",
              "$parse",
              "$window",
              "$document",
              "$rootScope",
              "$uibPosition",
              "dateFilter",
              "uibDateParser",
              "uibDatepickerPopupConfig",
              "$timeout",
              "uibDatepickerConfig",
              "$datepickerPopupLiteralWarning",
              function (e, t, i, n, r, a, o, s, l, u, c, d, p, m, h, f) {
                function g(t) {
                  var i = d.parse(t, M, e.date);
                  if (isNaN(i))
                    for (var n = 0; n < F.length; n++)
                      if (((i = d.parse(t, F[n], e.date)), !isNaN(i))) return i;
                  return i;
                }
                function v(e) {
                  if ((angular.isNumber(e) && (e = new Date(e)), !e))
                    return null;
                  if (angular.isDate(e) && !isNaN(e)) return e;
                  if (angular.isString(e)) {
                    var t = g(e);
                    if (!isNaN(t))
                      return d.toTimezone(t, E.getOption("timezone"));
                  }
                  return E.getOption("allowInvalid") ? e : void 0;
                }
                function b(e, t) {
                  var n = e || t;
                  return (
                    (!i.ngRequired && !n) ||
                    (angular.isNumber(n) && (n = new Date(n)),
                    !n ||
                      !(!angular.isDate(n) || isNaN(n)) ||
                      (!!angular.isString(n) && !isNaN(g(n))))
                  );
                }
                function y(i) {
                  if (e.isOpen || !e.disabled) {
                    var n = U[0],
                      r = t[0].contains(i.target),
                      a = void 0 !== n.contains && n.contains(i.target);
                    !e.isOpen ||
                      r ||
                      a ||
                      e.$apply(function () {
                        e.isOpen = !1;
                      });
                  }
                }
                function w(i) {
                  27 === i.which && e.isOpen
                    ? (i.preventDefault(),
                      i.stopPropagation(),
                      e.$apply(function () {
                        e.isOpen = !1;
                      }),
                      t[0].focus())
                    : 40 !== i.which ||
                      e.isOpen ||
                      (i.preventDefault(),
                      i.stopPropagation(),
                      e.$apply(function () {
                        e.isOpen = !0;
                      }));
                }
                function $() {
                  if (e.isOpen) {
                    var n = angular.element(
                        U[0].querySelector(".uib-datepicker-popup"),
                      ),
                      r = i.popupPlacement ? i.popupPlacement : p.placement,
                      a = u.positionElements(t, n, r, P);
                    (n.css({ top: a.top + "px", left: a.left + "px" }),
                      n.hasClass("uib-position-measure") &&
                        n.removeClass("uib-position-measure"));
                  }
                }
                var M,
                  k,
                  P,
                  D,
                  C,
                  x,
                  T,
                  S,
                  O,
                  I,
                  E,
                  U,
                  F,
                  j = !1,
                  A = [];
                ((this.init = function (r) {
                  if (
                    ((E = (function (e) {
                      var t;
                      return (
                        angular.version.minor < 6
                          ? ((t = angular.isObject(e.$options)
                              ? e.$options
                              : { timezone: null }).getOption = function (e) {
                              return t[e];
                            })
                          : (t = e.$options),
                        t
                      );
                    })((I = r))),
                    (k = angular.isDefined(i.closeOnDateSelection)
                      ? e.$parent.$eval(i.closeOnDateSelection)
                      : p.closeOnDateSelection),
                    (P = angular.isDefined(i.datepickerAppendToBody)
                      ? e.$parent.$eval(i.datepickerAppendToBody)
                      : p.appendToBody),
                    (D = angular.isDefined(i.onOpenFocus)
                      ? e.$parent.$eval(i.onOpenFocus)
                      : p.onOpenFocus),
                    (C = angular.isDefined(i.datepickerPopupTemplateUrl)
                      ? i.datepickerPopupTemplateUrl
                      : p.datepickerPopupTemplateUrl),
                    (x = angular.isDefined(i.datepickerTemplateUrl)
                      ? i.datepickerTemplateUrl
                      : p.datepickerTemplateUrl),
                    (F = angular.isDefined(i.altInputFormats)
                      ? e.$parent.$eval(i.altInputFormats)
                      : p.altInputFormats),
                    (e.showButtonBar = angular.isDefined(i.showButtonBar)
                      ? e.$parent.$eval(i.showButtonBar)
                      : p.showButtonBar),
                    p.html5Types[i.type]
                      ? ((M = p.html5Types[i.type]), (j = !0))
                      : ((M = i.uibDatepickerPopup || p.datepickerPopup),
                        i.$observe("uibDatepickerPopup", function (e, t) {
                          var i = e || p.datepickerPopup;
                          if (i !== M && ((M = i), (I.$modelValue = null), !M))
                            throw new Error(
                              "uibDatepickerPopup must have a date format specified.",
                            );
                        })),
                    !M)
                  )
                    throw new Error(
                      "uibDatepickerPopup must have a date format specified.",
                    );
                  if (j && i.uibDatepickerPopup)
                    throw new Error(
                      "HTML5 date input types do not support custom formats.",
                    );
                  ((T = angular.element(
                    "<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>",
                  )).attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection(date)",
                    "template-url": C,
                  }),
                    (S = angular.element(T.children()[0])).attr(
                      "template-url",
                      x,
                    ),
                    e.datepickerOptions || (e.datepickerOptions = {}),
                    j &&
                      "month" === i.type &&
                      ((e.datepickerOptions.datepickerMode = "month"),
                      (e.datepickerOptions.minMode = "month")),
                    S.attr("datepicker-options", "datepickerOptions"),
                    j
                      ? I.$formatters.push(function (t) {
                          return (
                            (e.date = d.fromTimezone(
                              t,
                              E.getOption("timezone"),
                            )),
                            t
                          );
                        })
                      : ((I.$$parserName = "date"),
                        (I.$validators.date = b),
                        I.$parsers.unshift(v),
                        I.$formatters.push(function (t) {
                          return I.$isEmpty(t)
                            ? ((e.date = t), t)
                            : (angular.isNumber(t) && (t = new Date(t)),
                              (e.date = d.fromTimezone(
                                t,
                                E.getOption("timezone"),
                              )),
                              d.filter(e.date, M));
                        })),
                    I.$viewChangeListeners.push(function () {
                      e.date = g(I.$viewValue);
                    }),
                    t.on("keydown", w),
                    (U = n(T)(e)),
                    T.remove(),
                    P ? s.find("body").append(U) : t.after(U),
                    e.$on("$destroy", function () {
                      for (
                        !0 === e.isOpen &&
                          (l.$$phase ||
                            e.$apply(function () {
                              e.isOpen = !1;
                            })),
                          U.remove(),
                          t.off("keydown", w),
                          s.off("click", y),
                          O && O.off("scroll", $),
                          angular.element(o).off("resize", $);
                        A.length;
                      )
                        A.shift()();
                    }));
                }),
                  (e.getText = function (t) {
                    return e[t + "Text"] || p[t + "Text"];
                  }),
                  (e.isDisabled = function (t) {
                    "today" === t &&
                      (t = d.fromTimezone(new Date(), E.getOption("timezone")));
                    var i = {};
                    return (
                      angular.forEach(["minDate", "maxDate"], function (t) {
                        e.datepickerOptions[t]
                          ? angular.isDate(e.datepickerOptions[t])
                            ? (i[t] = new Date(e.datepickerOptions[t]))
                            : (f &&
                                r.warn(
                                  "Literal date support has been deprecated, please switch to date object usage",
                                ),
                              (i[t] = new Date(
                                c(e.datepickerOptions[t], "medium"),
                              )))
                          : (i[t] = null);
                      }),
                      (e.datepickerOptions &&
                        i.minDate &&
                        e.compare(t, i.minDate) < 0) ||
                        (i.maxDate && e.compare(t, i.maxDate) > 0)
                    );
                  }),
                  (e.compare = function (e, t) {
                    return (
                      new Date(e.getFullYear(), e.getMonth(), e.getDate()) -
                      new Date(t.getFullYear(), t.getMonth(), t.getDate())
                    );
                  }),
                  (e.dateSelection = function (i) {
                    e.date = i;
                    var n = e.date ? d.filter(e.date, M) : null;
                    (t.val(n),
                      I.$setViewValue(n),
                      k && ((e.isOpen = !1), t[0].focus()));
                  }),
                  (e.keydown = function (i) {
                    27 === i.which &&
                      (i.stopPropagation(), (e.isOpen = !1), t[0].focus());
                  }),
                  (e.select = function (t, i) {
                    if ((i.stopPropagation(), "today" === t)) {
                      var n = new Date();
                      angular.isDate(e.date)
                        ? (t = new Date(e.date)).setFullYear(
                            n.getFullYear(),
                            n.getMonth(),
                            n.getDate(),
                          )
                        : (t = d.fromTimezone(
                            n,
                            E.getOption("timezone"),
                          )).setHours(0, 0, 0, 0);
                    }
                    e.dateSelection(t);
                  }),
                  (e.close = function (i) {
                    (i.stopPropagation(), (e.isOpen = !1), t[0].focus());
                  }),
                  (e.disabled = angular.isDefined(i.disabled) || !1),
                  i.ngDisabled &&
                    A.push(
                      e.$parent.$watch(a(i.ngDisabled), function (t) {
                        e.disabled = t;
                      }),
                    ),
                  e.$watch("isOpen", function (n) {
                    n
                      ? e.disabled
                        ? (e.isOpen = !1)
                        : m(
                            function () {
                              ($(),
                                D && e.$broadcast("uib:datepicker.focus"),
                                s.on("click", y));
                              var n = i.popupPlacement
                                ? i.popupPlacement
                                : p.placement;
                              (P || u.parsePlacement(n)[2]
                                ? (O =
                                    O || angular.element(u.scrollParent(t))) &&
                                  O.on("scroll", $)
                                : (O = null),
                                angular.element(o).on("resize", $));
                            },
                            0,
                            !1,
                          )
                      : (s.off("click", y),
                        O && O.off("scroll", $),
                        angular.element(o).off("resize", $));
                  }),
                  e.$on("uib:datepicker.mode", function () {
                    m($, 0, !1);
                  }));
              },
            ])
            .directive("uibDatepickerPopup", function () {
              return {
                require: ["ngModel", "uibDatepickerPopup"],
                controller: "UibDatepickerPopupController",
                scope: {
                  datepickerOptions: "=?",
                  isOpen: "=?",
                  currentText: "@",
                  clearText: "@",
                  closeText: "@",
                },
                link: function (e, t, i, n) {
                  var r = n[0];
                  n[1].init(r);
                },
              };
            })
            .directive("uibDatepickerPopupWrap", function () {
              return {
                restrict: "A",
                transclude: !0,
                templateUrl: function (e, t) {
                  return (
                    t.templateUrl || "uib/template/datepickerPopup/popup.html"
                  );
                },
              };
            }),
          angular.module("ui.bootstrap.debounce", []).factory("$$debounce", [
            "$timeout",
            function (e) {
              return function (t, i) {
                var n;
                return function () {
                  var r = this,
                    a = Array.prototype.slice.call(arguments);
                  (n && e.cancel(n),
                    (n = e(function () {
                      t.apply(r, a);
                    }, i)));
                };
              };
            },
          ]),
          angular
            .module("ui.bootstrap.multiMap", [])
            .factory("$$multiMap", function () {
              return {
                createNew: function () {
                  var e = {};
                  return {
                    entries: function () {
                      return Object.keys(e).map(function (t) {
                        return { key: t, value: e[t] };
                      });
                    },
                    get: function (t) {
                      return e[t];
                    },
                    hasKey: function (t) {
                      return !!e[t];
                    },
                    keys: function () {
                      return Object.keys(e);
                    },
                    put: function (t, i) {
                      (e[t] || (e[t] = []), e[t].push(i));
                    },
                    remove: function (t, i) {
                      var n = e[t];
                      if (n) {
                        var r = n.indexOf(i);
                        (-1 !== r && n.splice(r, 1), n.length || delete e[t]);
                      }
                    },
                  };
                },
              };
            }),
          angular
            .module("ui.bootstrap.dropdown", [
              "ui.bootstrap.multiMap",
              "ui.bootstrap.position",
            ])
            .constant("uibDropdownConfig", {
              appendToOpenClass: "uib-dropdown-open",
              openClass: "open",
            })
            .service("uibDropdownService", [
              "$document",
              "$rootScope",
              "$$multiMap",
              function (e, t, i) {
                var n = null,
                  r = i.createNew();
                ((this.isOnlyOpen = function (e, t) {
                  var i = r.get(t);
                  if (i) {
                    var n = i.reduce(function (t, i) {
                      return i.scope === e ? i : t;
                    }, {});
                    if (n) return 1 === i.length;
                  }
                  return !1;
                }),
                  (this.open = function (t, i, o) {
                    if (
                      (n || e.on("click", a),
                      n && n !== t && (n.isOpen = !1),
                      (n = t),
                      o)
                    ) {
                      var s = r.get(o);
                      if (s) {
                        var l = s.map(function (e) {
                          return e.scope;
                        });
                        -1 === l.indexOf(t) && r.put(o, { scope: t });
                      } else r.put(o, { scope: t });
                    }
                  }),
                  (this.close = function (t, i, o) {
                    if (
                      (n === t &&
                        (e.off("click", a),
                        e.off("keydown", this.keybindFilter),
                        (n = null)),
                      o)
                    ) {
                      var s = r.get(o);
                      if (s) {
                        var l = s.reduce(function (e, i) {
                          return i.scope === t ? i : e;
                        }, {});
                        l && r.remove(o, l);
                      }
                    }
                  }));
                var a = function (e) {
                  if (
                    n &&
                    n.isOpen &&
                    !(
                      (e && "disabled" === n.getAutoClose()) ||
                      (e && 3 === e.which)
                    )
                  ) {
                    var i = n.getToggleElement();
                    if (!(e && i && i[0].contains(e.target))) {
                      var r = n.getDropdownElement();
                      (e &&
                        "outsideClick" === n.getAutoClose() &&
                        r &&
                        r[0].contains(e.target)) ||
                        (n.focusToggleElement(),
                        (n.isOpen = !1),
                        t.$$phase || n.$apply());
                    }
                  }
                };
                this.keybindFilter = function (e) {
                  if (n) {
                    var t = n.getDropdownElement(),
                      i = n.getToggleElement(),
                      r = t && t[0].contains(e.target),
                      o = i && i[0].contains(e.target);
                    27 === e.which
                      ? (e.stopPropagation(), n.focusToggleElement(), a())
                      : n.isKeynavEnabled() &&
                        -1 !== [38, 40].indexOf(e.which) &&
                        n.isOpen &&
                        (r || o) &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        n.focusDropdownEntry(e.which));
                  }
                };
              },
            ])
            .controller("UibDropdownController", [
              "$scope",
              "$element",
              "$attrs",
              "$parse",
              "uibDropdownConfig",
              "uibDropdownService",
              "$animate",
              "$uibPosition",
              "$document",
              "$compile",
              "$templateRequest",
              function (e, t, i, n, r, a, o, s, l, u, c) {
                function d() {
                  t.append(h.dropdownMenu);
                }
                var p,
                  m,
                  h = this,
                  f = e.$new(),
                  g = r.appendToOpenClass,
                  v = r.openClass,
                  b = angular.noop,
                  y = i.onToggle ? n(i.onToggle) : angular.noop,
                  w = !1,
                  $ = l.find("body");
                (t.addClass("dropdown"),
                  (this.init = function () {
                    (i.isOpen &&
                      ((m = n(i.isOpen)),
                      (b = m.assign),
                      e.$watch(m, function (e) {
                        f.isOpen = !!e;
                      })),
                      (w = angular.isDefined(i.keyboardNav)));
                  }),
                  (this.toggle = function (e) {
                    return (
                      (f.isOpen = arguments.length ? !!e : !f.isOpen),
                      angular.isFunction(b) && b(f, f.isOpen),
                      f.isOpen
                    );
                  }),
                  (this.isOpen = function () {
                    return f.isOpen;
                  }),
                  (f.getToggleElement = function () {
                    return h.toggleElement;
                  }),
                  (f.getAutoClose = function () {
                    return i.autoClose || "always";
                  }),
                  (f.getElement = function () {
                    return t;
                  }),
                  (f.isKeynavEnabled = function () {
                    return w;
                  }),
                  (f.focusDropdownEntry = function (e) {
                    var i = h.dropdownMenu
                      ? angular.element(h.dropdownMenu).find("a")
                      : t.find("ul").eq(0).find("a");
                    switch (e) {
                      case 40:
                        angular.isNumber(h.selectedOption)
                          ? (h.selectedOption =
                              h.selectedOption === i.length - 1
                                ? h.selectedOption
                                : h.selectedOption + 1)
                          : (h.selectedOption = 0);
                        break;
                      case 38:
                        angular.isNumber(h.selectedOption)
                          ? (h.selectedOption =
                              0 === h.selectedOption ? 0 : h.selectedOption - 1)
                          : (h.selectedOption = i.length - 1);
                    }
                    i[h.selectedOption].focus();
                  }),
                  (f.getDropdownElement = function () {
                    return h.dropdownMenu;
                  }),
                  (f.focusToggleElement = function () {
                    h.toggleElement && h.toggleElement[0].focus();
                  }),
                  f.$watch("isOpen", function (r, m) {
                    var w = null,
                      M = !1;
                    if (angular.isDefined(i.dropdownAppendTo)) {
                      var k = n(i.dropdownAppendTo)(f);
                      k && (w = angular.element(k));
                    }
                    if (
                      (angular.isDefined(i.dropdownAppendToBody) &&
                        !1 !== n(i.dropdownAppendToBody)(f) &&
                        (M = !0),
                      M && !w && (w = $),
                      w &&
                        h.dropdownMenu &&
                        (r
                          ? (w.append(h.dropdownMenu), t.on("$destroy", d))
                          : (t.off("$destroy", d), d())),
                      w && h.dropdownMenu)
                    ) {
                      var P,
                        D,
                        C,
                        x = s.positionElements(
                          t,
                          h.dropdownMenu,
                          "bottom-left",
                          !0,
                        ),
                        T = 0;
                      if (
                        ((P = {
                          top: x.top + "px",
                          display: r ? "block" : "none",
                        }),
                        (D = h.dropdownMenu.hasClass("dropdown-menu-right"))
                          ? ((P.left = "auto"),
                            (C = s.scrollbarPadding(w)).heightOverflow &&
                              C.scrollbarWidth &&
                              (T = C.scrollbarWidth),
                            (P.right =
                              window.innerWidth -
                              T -
                              (x.left + t.prop("offsetWidth")) +
                              "px"))
                          : ((P.left = x.left + "px"), (P.right = "auto")),
                        !M)
                      ) {
                        var S = s.offset(w);
                        ((P.top = x.top - S.top + "px"),
                          D
                            ? (P.right =
                                window.innerWidth -
                                (x.left - S.left + t.prop("offsetWidth")) +
                                "px")
                            : (P.left = x.left - S.left + "px"));
                      }
                      h.dropdownMenu.css(P);
                    }
                    var O = w || t,
                      I = w ? g : v,
                      E = O.hasClass(I),
                      U = a.isOnlyOpen(e, w);
                    if (
                      (E === !r &&
                        o[
                          w
                            ? U
                              ? "removeClass"
                              : "addClass"
                            : r
                              ? "addClass"
                              : "removeClass"
                        ](O, I).then(function () {
                          angular.isDefined(r) &&
                            r !== m &&
                            y(e, { open: !!r });
                        }),
                      r)
                    )
                      (h.dropdownMenuTemplateUrl
                        ? c(h.dropdownMenuTemplateUrl).then(function (e) {
                            ((p = f.$new()),
                              u(e.trim())(p, function (e) {
                                var t = e;
                                (h.dropdownMenu.replaceWith(t),
                                  (h.dropdownMenu = t),
                                  l.on("keydown", a.keybindFilter));
                              }));
                          })
                        : l.on("keydown", a.keybindFilter),
                        f.focusToggleElement(),
                        a.open(f, t, w));
                    else {
                      if ((a.close(f, t, w), h.dropdownMenuTemplateUrl)) {
                        p && p.$destroy();
                        var F = angular.element(
                          '<ul class="dropdown-menu"></ul>',
                        );
                        (h.dropdownMenu.replaceWith(F), (h.dropdownMenu = F));
                      }
                      h.selectedOption = null;
                    }
                    angular.isFunction(b) && b(e, r);
                  }));
              },
            ])
            .directive("uibDropdown", function () {
              return {
                controller: "UibDropdownController",
                link: function (e, t, i, n) {
                  n.init();
                },
              };
            })
            .directive("uibDropdownMenu", function () {
              return {
                restrict: "A",
                require: "?^uibDropdown",
                link: function (e, t, i, n) {
                  if (n && !angular.isDefined(i.dropdownNested)) {
                    t.addClass("dropdown-menu");
                    var r = i.templateUrl;
                    (r && (n.dropdownMenuTemplateUrl = r),
                      n.dropdownMenu || (n.dropdownMenu = t));
                  }
                },
              };
            })
            .directive("uibDropdownToggle", function () {
              return {
                require: "?^uibDropdown",
                link: function (e, t, i, n) {
                  if (n) {
                    (t.addClass("dropdown-toggle"), (n.toggleElement = t));
                    var r = function (r) {
                      (r.preventDefault(),
                        t.hasClass("disabled") ||
                          i.disabled ||
                          e.$apply(function () {
                            n.toggle();
                          }));
                    };
                    (t.on("click", r),
                      t.attr({ "aria-haspopup": !0, "aria-expanded": !1 }),
                      e.$watch(n.isOpen, function (e) {
                        t.attr("aria-expanded", !!e);
                      }),
                      e.$on("$destroy", function () {
                        t.off("click", r);
                      }));
                  }
                },
              };
            }),
          angular
            .module("ui.bootstrap.stackedMap", [])
            .factory("$$stackedMap", function () {
              return {
                createNew: function () {
                  var e = [];
                  return {
                    add: function (t, i) {
                      e.push({ key: t, value: i });
                    },
                    get: function (t) {
                      for (var i = 0; i < e.length; i++)
                        if (t === e[i].key) return e[i];
                    },
                    keys: function () {
                      for (var t = [], i = 0; i < e.length; i++)
                        t.push(e[i].key);
                      return t;
                    },
                    top: function () {
                      return e[e.length - 1];
                    },
                    remove: function (t) {
                      for (var i = -1, n = 0; n < e.length; n++)
                        if (t === e[n].key) {
                          i = n;
                          break;
                        }
                      return e.splice(i, 1)[0];
                    },
                    removeTop: function () {
                      return e.pop();
                    },
                    length: function () {
                      return e.length;
                    },
                  };
                },
              };
            }),
          angular
            .module("ui.bootstrap.modal", [
              "ui.bootstrap.multiMap",
              "ui.bootstrap.stackedMap",
              "ui.bootstrap.position",
            ])
            .provider("$uibResolve", function () {
              var e = this;
              ((this.resolver = null),
                (this.setResolver = function (e) {
                  this.resolver = e;
                }),
                (this.$get = [
                  "$injector",
                  "$q",
                  function (t, i) {
                    var n = e.resolver ? t.get(e.resolver) : null;
                    return {
                      resolve: function (e, r, a, o) {
                        if (n) return n.resolve(e, r, a, o);
                        var s = [];
                        return (
                          angular.forEach(e, function (e) {
                            angular.isFunction(e) || angular.isArray(e)
                              ? s.push(i.resolve(t.invoke(e)))
                              : angular.isString(e)
                                ? s.push(i.resolve(t.get(e)))
                                : s.push(i.resolve(e));
                          }),
                          i.all(s).then(function (t) {
                            var i = {},
                              n = 0;
                            return (
                              angular.forEach(e, function (e, r) {
                                i[r] = t[n++];
                              }),
                              i
                            );
                          })
                        );
                      },
                    };
                  },
                ]));
            })
            .directive("uibModalBackdrop", [
              "$animate",
              "$injector",
              "$uibModalStack",
              function (e, t, i) {
                function n(t, n, r) {
                  r.modalInClass &&
                    (e.addClass(n, r.modalInClass),
                    t.$on(i.NOW_CLOSING_EVENT, function (i, a) {
                      var o = a();
                      t.modalOptions.animation
                        ? e.removeClass(n, r.modalInClass).then(o)
                        : o();
                    }));
                }
                return {
                  restrict: "A",
                  compile: function (e, t) {
                    return (e.addClass(t.backdropClass), n);
                  },
                };
              },
            ])
            .directive("uibModalWindow", [
              "$uibModalStack",
              "$q",
              "$animateCss",
              "$document",
              function (e, t, i, n) {
                return {
                  scope: { index: "@" },
                  restrict: "A",
                  transclude: !0,
                  templateUrl: function (e, t) {
                    return t.templateUrl || "uib/template/modal/window.html";
                  },
                  link: function (r, a, o) {
                    (a.addClass(o.windowTopClass || ""),
                      (r.size = o.size),
                      (r.close = function (t) {
                        var i = e.getTop();
                        i &&
                          i.value.backdrop &&
                          "static" !== i.value.backdrop &&
                          t.target === t.currentTarget &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          e.dismiss(i.key, "backdrop click"));
                      }),
                      a.on("click", r.close),
                      (r.$isRendered = !0));
                    var s = t.defer();
                    (r.$$postDigest(function () {
                      s.resolve();
                    }),
                      s.promise.then(function () {
                        var s = null;
                        (o.modalInClass &&
                          ((s = i(a, { addClass: o.modalInClass }).start()),
                          r.$on(e.NOW_CLOSING_EVENT, function (e, t) {
                            var n = t();
                            i(a, { removeClass: o.modalInClass })
                              .start()
                              .then(n);
                          })),
                          t.when(s).then(function () {
                            var t = e.getTop();
                            if (
                              (t && e.modalRendered(t.key),
                              !n[0].activeElement ||
                                !a[0].contains(n[0].activeElement))
                            ) {
                              var i = a[0].querySelector("[autofocus]");
                              i ? i.focus() : a[0].focus();
                            }
                          }));
                      }));
                  },
                };
              },
            ])
            .directive("uibModalAnimationClass", function () {
              return {
                compile: function (e, t) {
                  t.modalAnimation && e.addClass(t.uibModalAnimationClass);
                },
              };
            })
            .directive("uibModalTransclude", [
              "$animate",
              function (e) {
                return {
                  link: function (t, i, n, r, a) {
                    a(t.$parent, function (t) {
                      (i.empty(), e.enter(t, i));
                    });
                  },
                };
              },
            ])
            .factory("$uibModalStack", [
              "$animate",
              "$animateCss",
              "$document",
              "$compile",
              "$rootScope",
              "$q",
              "$$multiMap",
              "$$stackedMap",
              "$uibPosition",
              function (e, t, i, n, r, a, o, s, l) {
                function u() {
                  for (var e = -1, t = w.keys(), i = 0; i < t.length; i++)
                    w.get(t[i]).value.backdrop && (e = i);
                  return (e > -1 && e < k && (e = k), e);
                }
                function c(e, t) {
                  var i = w.get(e).value,
                    n = i.appendTo;
                  (w.remove(e),
                    (P = w.top()) &&
                      (k = parseInt(P.value.modalDomEl.attr("index"), 10)),
                    p(
                      i.modalDomEl,
                      i.modalScope,
                      function () {
                        var t = i.openedClass || y;
                        $.remove(t, e);
                        var r = $.hasKey(t);
                        (n.toggleClass(t, r),
                          !r &&
                            b &&
                            b.heightOverflow &&
                            b.scrollbarWidth &&
                            (b.originalRight
                              ? n.css({ paddingRight: b.originalRight + "px" })
                              : n.css({ paddingRight: "" }),
                            (b = null)),
                          d(!0));
                      },
                      i.closedDeferred,
                    ),
                    g &&
                      -1 === u() &&
                      (p(g, v, function () {}), (g = void 0), (v = void 0)),
                    t && t.focus ? t.focus() : n.focus && n.focus());
                }
                function d(e) {
                  var t;
                  w.length() > 0 &&
                    (t = w.top().value).modalDomEl.toggleClass(
                      t.windowTopClass || "",
                      e,
                    );
                }
                function p(t, i, n, r) {
                  var o,
                    s = null;
                  return (
                    i.$broadcast(M.NOW_CLOSING_EVENT, function () {
                      return (
                        o || ((o = a.defer()), (s = o.promise)),
                        function () {
                          o.resolve();
                        }
                      );
                    }),
                    a.when(s).then(function a() {
                      a.done ||
                        ((a.done = !0),
                        e.leave(t).then(function () {
                          (n && n(), t.remove(), r && r.resolve());
                        }),
                        i.$destroy());
                    })
                  );
                }
                function m(e) {
                  if (e.isDefaultPrevented()) return e;
                  var t = w.top();
                  if (t)
                    switch (e.which) {
                      case 27:
                        t.value.keyboard &&
                          (e.preventDefault(),
                          r.$apply(function () {
                            M.dismiss(t.key, "escape key press");
                          }));
                        break;
                      case 9:
                        var i = M.loadFocusElementList(t),
                          n = !1;
                        (e.shiftKey
                          ? (M.isFocusInFirstItem(e, i) ||
                              M.isModalFocused(e, t)) &&
                            (n = M.focusLastFocusableElement(i))
                          : M.isFocusInLastItem(e, i) &&
                            (n = M.focusFirstFocusableElement(i)),
                          n && (e.preventDefault(), e.stopPropagation()));
                    }
                }
                function h(e, t, i) {
                  return !e.value.modalScope.$broadcast("modal.closing", t, i)
                    .defaultPrevented;
                }
                function f() {
                  Array.prototype.forEach.call(
                    document.querySelectorAll("[" + D + "]"),
                    function (e) {
                      var t = parseInt(e.getAttribute(D), 10) - 1;
                      (e.setAttribute(D, t),
                        t ||
                          (e.removeAttribute(D),
                          e.removeAttribute("aria-hidden")));
                    },
                  );
                }
                var g,
                  v,
                  b,
                  y = "modal-open",
                  w = s.createNew(),
                  $ = o.createNew(),
                  M = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
                  k = 0,
                  P = null,
                  D = "data-bootstrap-modal-aria-hidden-count",
                  C = /[A-Z]/g;
                return (
                  r.$watch(u, function (e) {
                    v && (v.index = e);
                  }),
                  i.on("keydown", m),
                  r.$on("$destroy", function () {
                    i.off("keydown", m);
                  }),
                  (M.open = function (t, a) {
                    var o = i[0].activeElement,
                      s = a.openedClass || y;
                    (d(!1),
                      (P = w.top()),
                      w.add(t, {
                        deferred: a.deferred,
                        renderDeferred: a.renderDeferred,
                        closedDeferred: a.closedDeferred,
                        modalScope: a.scope,
                        backdrop: a.backdrop,
                        keyboard: a.keyboard,
                        openedClass: a.openedClass,
                        windowTopClass: a.windowTopClass,
                        animation: a.animation,
                        appendTo: a.appendTo,
                      }),
                      $.put(s, t));
                    var c,
                      p = a.appendTo,
                      m = u();
                    (m >= 0 &&
                      !g &&
                      (((v = r.$new(!0)).modalOptions = a),
                      (v.index = m),
                      (g = angular.element(
                        '<div uib-modal-backdrop="modal-backdrop"></div>',
                      )).attr({
                        class: "modal-backdrop",
                        "ng-style":
                          "{'z-index': 1040 + (index && 1 || 0) + index*10}",
                        "uib-modal-animation-class": "fade",
                        "modal-in-class": "in",
                      }),
                      a.backdropClass && g.addClass(a.backdropClass),
                      a.animation && g.attr("modal-animation", "true"),
                      n(g)(v),
                      e.enter(g, p),
                      l.isScrollable(p) &&
                        (b = l.scrollbarPadding(p)).heightOverflow &&
                        b.scrollbarWidth &&
                        p.css({ paddingRight: b.right + "px" })),
                      a.component
                        ? ((c = document.createElement(
                            (function (e) {
                              return e.replace(C, function (e, t) {
                                return (t ? "-" : "") + e.toLowerCase();
                              });
                            })(a.component.name),
                          )),
                          (c = angular.element(c)).attr({
                            resolve: "$resolve",
                            "modal-instance": "$uibModalInstance",
                            close: "$close($value)",
                            dismiss: "$dismiss($value)",
                          }))
                        : (c = a.content),
                      (k = P
                        ? parseInt(P.value.modalDomEl.attr("index"), 10) + 1
                        : 0));
                    var h = angular.element(
                      '<div uib-modal-window="modal-window"></div>',
                    );
                    (h
                      .attr({
                        class: "modal",
                        "template-url": a.windowTemplateUrl,
                        "window-top-class": a.windowTopClass,
                        role: "dialog",
                        "aria-labelledby": a.ariaLabelledBy,
                        "aria-describedby": a.ariaDescribedBy,
                        size: a.size,
                        index: k,
                        animate: "animate",
                        "ng-style":
                          "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",
                        tabindex: -1,
                        "uib-modal-animation-class": "fade",
                        "modal-in-class": "in",
                      })
                      .append(c),
                      a.windowClass && h.addClass(a.windowClass),
                      a.animation && h.attr("modal-animation", "true"),
                      p.addClass(s),
                      a.scope && (a.scope.$$topModalIndex = k),
                      e.enter(n(h)(a.scope), p),
                      (w.top().value.modalDomEl = h),
                      (w.top().value.modalOpener = o),
                      (function e(t) {
                        if (t && "BODY" !== t[0].tagName)
                          return (
                            (function (e) {
                              var t = e.parent() ? e.parent().children() : [];
                              return Array.prototype.filter.call(
                                t,
                                function (t) {
                                  return t !== e[0];
                                },
                              );
                            })(t).forEach(function (e) {
                              var t = "true" === e.getAttribute("aria-hidden"),
                                i = parseInt(e.getAttribute(D), 10);
                              (i || (i = t ? 1 : 0),
                                e.setAttribute(D, i + 1),
                                e.setAttribute("aria-hidden", "true"));
                            }),
                            e(t.parent())
                          );
                      })(h));
                  }),
                  (M.close = function (e, t) {
                    var i = w.get(e);
                    return (
                      f(),
                      i && h(i, t, !0)
                        ? ((i.value.modalScope.$$uibDestructionScheduled = !0),
                          i.value.deferred.resolve(t),
                          c(e, i.value.modalOpener),
                          !0)
                        : !i
                    );
                  }),
                  (M.dismiss = function (e, t) {
                    var i = w.get(e);
                    return (
                      f(),
                      i && h(i, t, !1)
                        ? ((i.value.modalScope.$$uibDestructionScheduled = !0),
                          i.value.deferred.reject(t),
                          c(e, i.value.modalOpener),
                          !0)
                        : !i
                    );
                  }),
                  (M.dismissAll = function (e) {
                    for (var t = this.getTop(); t && this.dismiss(t.key, e); )
                      t = this.getTop();
                  }),
                  (M.getTop = function () {
                    return w.top();
                  }),
                  (M.modalRendered = function (e) {
                    var t = w.get(e);
                    t && t.value.renderDeferred.resolve();
                  }),
                  (M.focusFirstFocusableElement = function (e) {
                    return e.length > 0 && (e[0].focus(), !0);
                  }),
                  (M.focusLastFocusableElement = function (e) {
                    return e.length > 0 && (e[e.length - 1].focus(), !0);
                  }),
                  (M.isModalFocused = function (e, t) {
                    if (e && t) {
                      var i = t.value.modalDomEl;
                      if (i && i.length)
                        return (e.target || e.srcElement) === i[0];
                    }
                    return !1;
                  }),
                  (M.isFocusInFirstItem = function (e, t) {
                    return t.length > 0 && (e.target || e.srcElement) === t[0];
                  }),
                  (M.isFocusInLastItem = function (e, t) {
                    return (
                      t.length > 0 &&
                      (e.target || e.srcElement) === t[t.length - 1]
                    );
                  }),
                  (M.loadFocusElementList = function (e) {
                    if (e) {
                      var t = e.value.modalDomEl;
                      if (t && t.length) {
                        var i = t[0].querySelectorAll(
                          "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",
                        );
                        return i
                          ? Array.prototype.filter.call(i, function (e) {
                              return (function (e) {
                                return !!(
                                  e.offsetWidth ||
                                  e.offsetHeight ||
                                  e.getClientRects().length
                                );
                              })(e);
                            })
                          : i;
                      }
                    }
                  }),
                  M
                );
              },
            ])
            .provider("$uibModal", function () {
              var e = {
                options: { animation: !0, backdrop: !0, keyboard: !0 },
                $get: [
                  "$rootScope",
                  "$q",
                  "$document",
                  "$templateRequest",
                  "$controller",
                  "$uibResolve",
                  "$uibModalStack",
                  function (t, i, n, r, a, o, s) {
                    function l(e) {
                      return e.template
                        ? i.when(e.template)
                        : r(
                            angular.isFunction(e.templateUrl)
                              ? e.templateUrl()
                              : e.templateUrl,
                          );
                    }
                    var u = {},
                      c = null;
                    return (
                      (u.getPromiseChain = function () {
                        return c;
                      }),
                      (u.open = function (r) {
                        function u() {
                          return d;
                        }
                        var d,
                          p,
                          m = i.defer(),
                          h = i.defer(),
                          f = i.defer(),
                          g = i.defer(),
                          v = {
                            result: m.promise,
                            opened: h.promise,
                            closed: f.promise,
                            rendered: g.promise,
                            close: function (e) {
                              return s.close(v, e);
                            },
                            dismiss: function (e) {
                              return s.dismiss(v, e);
                            },
                          };
                        if (
                          (((r = angular.extend({}, e.options, r)).resolve =
                            r.resolve || {}),
                          (r.appendTo = r.appendTo || n.find("body").eq(0)),
                          !r.appendTo.length)
                        )
                          throw new Error(
                            "appendTo element not found. Make sure that the element passed is in DOM.",
                          );
                        if (!r.component && !r.template && !r.templateUrl)
                          throw new Error(
                            "One of component or template or templateUrl options is required.",
                          );
                        return (
                          (d = r.component
                            ? i.when(o.resolve(r.resolve, {}, null, null))
                            : i.all([
                                l(r),
                                o.resolve(r.resolve, {}, null, null),
                              ])),
                          (p = c =
                            i
                              .all([c])
                              .then(u, u)
                              .then(
                                function (e) {
                                  function i(t, i, n, r) {
                                    ((t.$scope = o),
                                      (t.$scope.$resolve = {}),
                                      n
                                        ? (t.$scope.$uibModalInstance = v)
                                        : (t.$uibModalInstance = v));
                                    var a = i ? e[1] : e;
                                    angular.forEach(a, function (e, i) {
                                      (r && (t[i] = e),
                                        (t.$scope.$resolve[i] = e));
                                    });
                                  }
                                  var n = r.scope || t,
                                    o = n.$new();
                                  ((o.$close = v.close),
                                    (o.$dismiss = v.dismiss),
                                    o.$on("$destroy", function () {
                                      o.$$uibDestructionScheduled ||
                                        o.$dismiss(
                                          "$uibUnscheduledDestruction",
                                        );
                                    }));
                                  var l,
                                    u,
                                    c = {
                                      scope: o,
                                      deferred: m,
                                      renderDeferred: g,
                                      closedDeferred: f,
                                      animation: r.animation,
                                      backdrop: r.backdrop,
                                      keyboard: r.keyboard,
                                      backdropClass: r.backdropClass,
                                      windowTopClass: r.windowTopClass,
                                      windowClass: r.windowClass,
                                      windowTemplateUrl: r.windowTemplateUrl,
                                      ariaLabelledBy: r.ariaLabelledBy,
                                      ariaDescribedBy: r.ariaDescribedBy,
                                      size: r.size,
                                      openedClass: r.openedClass,
                                      appendTo: r.appendTo,
                                    },
                                    d = {},
                                    p = {};
                                  (r.component
                                    ? (i(d, !1, !0, !1),
                                      (d.name = r.component),
                                      (c.component = d))
                                    : r.controller &&
                                      (i(p, !0, !1, !0),
                                      (u = a(
                                        r.controller,
                                        p,
                                        !0,
                                        r.controllerAs,
                                      )),
                                      r.controllerAs &&
                                        r.bindToController &&
                                        (((l = u.instance).$close = o.$close),
                                        (l.$dismiss = o.$dismiss),
                                        angular.extend(
                                          l,
                                          { $resolve: p.$scope.$resolve },
                                          n,
                                        )),
                                      (l = u()),
                                      angular.isFunction(l.$onInit) &&
                                        l.$onInit()),
                                    r.component || (c.content = e[0]),
                                    s.open(v, c),
                                    h.resolve(!0));
                                },
                                function (e) {
                                  (h.reject(e), m.reject(e));
                                },
                              )
                              .finally(function () {
                                c === p && (c = null);
                              })),
                          v
                        );
                      }),
                      u
                    );
                  },
                ],
              };
              return e;
            }),
          angular.module("ui.bootstrap.paging", []).factory("uibPaging", [
            "$parse",
            function (e) {
              return {
                create: function (t, i, n) {
                  ((t.setNumPages = n.numPages
                    ? e(n.numPages).assign
                    : angular.noop),
                    (t.ngModelCtrl = { $setViewValue: angular.noop }),
                    (t._watchers = []),
                    (t.init = function (e, r) {
                      ((t.ngModelCtrl = e),
                        (t.config = r),
                        (e.$render = function () {
                          t.render();
                        }),
                        n.itemsPerPage
                          ? t._watchers.push(
                              i.$parent.$watch(n.itemsPerPage, function (e) {
                                ((t.itemsPerPage = parseInt(e, 10)),
                                  (i.totalPages = t.calculateTotalPages()),
                                  t.updatePage());
                              }),
                            )
                          : (t.itemsPerPage = r.itemsPerPage),
                        i.$watch("totalItems", function (e, n) {
                          (angular.isDefined(e) || e !== n) &&
                            ((i.totalPages = t.calculateTotalPages()),
                            t.updatePage());
                        }));
                    }),
                    (t.calculateTotalPages = function () {
                      var e =
                        t.itemsPerPage < 1
                          ? 1
                          : Math.ceil(i.totalItems / t.itemsPerPage);
                      return Math.max(e || 0, 1);
                    }),
                    (t.render = function () {
                      i.page = parseInt(t.ngModelCtrl.$viewValue, 10) || 1;
                    }),
                    (i.selectPage = function (e, n) {
                      (n && n.preventDefault(),
                        (!i.ngDisabled || !n) &&
                          i.page !== e &&
                          e > 0 &&
                          e <= i.totalPages &&
                          (n && n.target && n.target.blur(),
                          t.ngModelCtrl.$setViewValue(e),
                          t.ngModelCtrl.$render()));
                    }),
                    (i.getText = function (e) {
                      return i[e + "Text"] || t.config[e + "Text"];
                    }),
                    (i.noPrevious = function () {
                      return 1 === i.page;
                    }),
                    (i.noNext = function () {
                      return i.page === i.totalPages;
                    }),
                    (t.updatePage = function () {
                      (t.setNumPages(i.$parent, i.totalPages),
                        i.page > i.totalPages
                          ? i.selectPage(i.totalPages)
                          : t.ngModelCtrl.$render());
                    }),
                    i.$on("$destroy", function () {
                      for (; t._watchers.length; ) t._watchers.shift()();
                    }));
                },
              };
            },
          ]),
          angular
            .module("ui.bootstrap.pager", [
              "ui.bootstrap.paging",
              "ui.bootstrap.tabindex",
            ])
            .controller("UibPagerController", [
              "$scope",
              "$attrs",
              "uibPaging",
              "uibPagerConfig",
              function (e, t, i, n) {
                ((e.align = angular.isDefined(t.align)
                  ? e.$parent.$eval(t.align)
                  : n.align),
                  i.create(this, e, t));
              },
            ])
            .constant("uibPagerConfig", {
              itemsPerPage: 10,
              previousText: "« Previous",
              nextText: "Next »",
              align: !0,
            })
            .directive("uibPager", [
              "uibPagerConfig",
              function (e) {
                return {
                  scope: {
                    totalItems: "=",
                    previousText: "@",
                    nextText: "@",
                    ngDisabled: "=",
                  },
                  require: ["uibPager", "?ngModel"],
                  restrict: "A",
                  controller: "UibPagerController",
                  controllerAs: "pager",
                  templateUrl: function (e, t) {
                    return t.templateUrl || "uib/template/pager/pager.html";
                  },
                  link: function (t, i, n, r) {
                    i.addClass("pager");
                    var a = r[0],
                      o = r[1];
                    o && a.init(o, e);
                  },
                };
              },
            ]),
          angular
            .module("ui.bootstrap.pagination", [
              "ui.bootstrap.paging",
              "ui.bootstrap.tabindex",
            ])
            .controller("UibPaginationController", [
              "$scope",
              "$attrs",
              "$parse",
              "uibPaging",
              "uibPaginationConfig",
              function (e, t, i, n, r) {
                function a(e, t, i) {
                  return { number: e, text: t, active: i };
                }
                var o = this,
                  s = angular.isDefined(t.maxSize)
                    ? e.$parent.$eval(t.maxSize)
                    : r.maxSize,
                  l = angular.isDefined(t.rotate)
                    ? e.$parent.$eval(t.rotate)
                    : r.rotate,
                  u = angular.isDefined(t.forceEllipses)
                    ? e.$parent.$eval(t.forceEllipses)
                    : r.forceEllipses,
                  c = angular.isDefined(t.boundaryLinkNumbers)
                    ? e.$parent.$eval(t.boundaryLinkNumbers)
                    : r.boundaryLinkNumbers,
                  d = angular.isDefined(t.pageLabel)
                    ? function (i) {
                        return e.$parent.$eval(t.pageLabel, { $page: i });
                      }
                    : angular.identity;
                ((e.boundaryLinks = angular.isDefined(t.boundaryLinks)
                  ? e.$parent.$eval(t.boundaryLinks)
                  : r.boundaryLinks),
                  (e.directionLinks = angular.isDefined(t.directionLinks)
                    ? e.$parent.$eval(t.directionLinks)
                    : r.directionLinks),
                  t.$set("role", "menu"),
                  n.create(this, e, t),
                  t.maxSize &&
                    o._watchers.push(
                      e.$parent.$watch(i(t.maxSize), function (e) {
                        ((s = parseInt(e, 10)), o.render());
                      }),
                    ));
                var p = this.render;
                this.render = function () {
                  (p(),
                    e.page > 0 &&
                      e.page <= e.totalPages &&
                      (e.pages = (function (e, t) {
                        var i = [],
                          n = 1,
                          r = t,
                          o = angular.isDefined(s) && s < t;
                        o &&
                          (l
                            ? (r =
                                (n = Math.max(e - Math.floor(s / 2), 1)) +
                                s -
                                1) > t && (n = (r = t) - s + 1)
                            : ((n = (Math.ceil(e / s) - 1) * s + 1),
                              (r = Math.min(n + s - 1, t))));
                        for (var p = n; p <= r; p++) {
                          var m = a(p, d(p), p === e);
                          i.push(m);
                        }
                        if (o && s > 0 && (!l || u || c)) {
                          if (n > 1) {
                            if (!c || n > 3) {
                              var h = a(n - 1, "...", !1);
                              i.unshift(h);
                            }
                            if (c) {
                              if (3 === n) {
                                var f = a(2, "2", !1);
                                i.unshift(f);
                              }
                              var g = a(1, "1", !1);
                              i.unshift(g);
                            }
                          }
                          if (r < t) {
                            if (!c || r < t - 2) {
                              var v = a(r + 1, "...", !1);
                              i.push(v);
                            }
                            if (c) {
                              if (r === t - 2) {
                                var b = a(t - 1, t - 1, !1);
                                i.push(b);
                              }
                              var y = a(t, t, !1);
                              i.push(y);
                            }
                          }
                        }
                        return i;
                      })(e.page, e.totalPages)));
                };
              },
            ])
            .constant("uibPaginationConfig", {
              itemsPerPage: 10,
              boundaryLinks: !1,
              boundaryLinkNumbers: !1,
              directionLinks: !0,
              firstText: "First",
              previousText: "Previous",
              nextText: "Next",
              lastText: "Last",
              rotate: !0,
              forceEllipses: !1,
            })
            .directive("uibPagination", [
              "$parse",
              "uibPaginationConfig",
              function (e, t) {
                return {
                  scope: {
                    totalItems: "=",
                    firstText: "@",
                    previousText: "@",
                    nextText: "@",
                    lastText: "@",
                    ngDisabled: "=",
                  },
                  require: ["uibPagination", "?ngModel"],
                  restrict: "A",
                  controller: "UibPaginationController",
                  controllerAs: "pagination",
                  templateUrl: function (e, t) {
                    return (
                      t.templateUrl || "uib/template/pagination/pagination.html"
                    );
                  },
                  link: function (e, i, n, r) {
                    i.addClass("pagination");
                    var a = r[0],
                      o = r[1];
                    o && a.init(o, t);
                  },
                };
              },
            ]),
          angular
            .module("ui.bootstrap.tooltip", [
              "ui.bootstrap.position",
              "ui.bootstrap.stackedMap",
            ])
            .provider("$uibTooltip", function () {
              var e = {
                  placement: "top",
                  placementClassPrefix: "",
                  animation: !0,
                  popupDelay: 0,
                  popupCloseDelay: 0,
                  useContentExp: !1,
                },
                t = {
                  mouseenter: "mouseleave",
                  click: "click",
                  outsideClick: "outsideClick",
                  focus: "blur",
                  none: "",
                },
                i = {};
              ((this.options = function (e) {
                angular.extend(i, e);
              }),
                (this.setTriggers = function (e) {
                  angular.extend(t, e);
                }),
                (this.$get = [
                  "$window",
                  "$compile",
                  "$timeout",
                  "$document",
                  "$uibPosition",
                  "$interpolate",
                  "$rootScope",
                  "$parse",
                  "$$stackedMap",
                  function (n, r, a, o, s, l, u, c, d) {
                    function p(e) {
                      if (27 === e.which) {
                        var t = m.top();
                        t && (t.value.close(), (t = null));
                      }
                    }
                    var m = d.createNew();
                    return (
                      o.on("keyup", p),
                      u.$on("$destroy", function () {
                        o.off("keyup", p);
                      }),
                      function (n, u, d, p) {
                        function h(e) {
                          var i = (e || p.trigger || d).split(" "),
                            n = i.map(function (e) {
                              return t[e] || e;
                            });
                          return { show: i, hide: n };
                        }
                        p = angular.extend({}, e, i, p);
                        var f = n.replace(/[A-Z]/g, function (e, t) {
                            return (t ? "-" : "") + e.toLowerCase();
                          }),
                          g = l.startSymbol(),
                          v = l.endSymbol(),
                          b =
                            "<div " +
                            f +
                            '-popup uib-title="' +
                            g +
                            "title" +
                            v +
                            '" ' +
                            (p.useContentExp
                              ? 'content-exp="contentExp()" '
                              : 'content="' + g + "content" + v + '" ') +
                            'origin-scope="origScope" class="uib-position-measure ' +
                            u +
                            '" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';
                        return {
                          compile: function (e, t) {
                            var i = r(b);
                            return function (e, t, r, l) {
                              function d() {
                                A.isOpen ? g() : f();
                              }
                              function f() {
                                (j && !e.$eval(r[u + "Enable"])) ||
                                  (w(),
                                  (function () {
                                    ((A.title = r[u + "Title"]),
                                      (A.content = N ? N(e) : r[n]),
                                      (A.popupClass = r[u + "Class"]),
                                      (A.placement = angular.isDefined(
                                        r[u + "Placement"],
                                      )
                                        ? r[u + "Placement"]
                                        : p.placement));
                                    var t = s.parsePlacement(A.placement);
                                    E = t[1] ? t[0] + "-" + t[1] : t[0];
                                    var i = parseInt(r[u + "PopupDelay"], 10),
                                      a = parseInt(
                                        r[u + "PopupCloseDelay"],
                                        10,
                                      );
                                    ((A.popupDelay = isNaN(i)
                                      ? p.popupDelay
                                      : i),
                                      (A.popupCloseDelay = isNaN(a)
                                        ? p.popupCloseDelay
                                        : a));
                                  })(),
                                  A.popupDelay
                                    ? T || (T = a(v, A.popupDelay, !1))
                                    : v());
                              }
                              function g() {
                                (b(),
                                  A.popupCloseDelay
                                    ? S || (S = a(y, A.popupCloseDelay, !1))
                                    : y());
                              }
                              function v() {
                                return (
                                  b(),
                                  w(),
                                  A.content
                                    ? (D ||
                                        ((C = A.$new()),
                                        (D = i(C, function (e) {
                                          U
                                            ? o.find("body").append(e)
                                            : t.after(e);
                                        })),
                                        m.add(A, { close: y }),
                                        (B.length = 0),
                                        N
                                          ? (B.push(
                                              e.$watch(N, function (e) {
                                                ((A.content = e),
                                                  !e && A.isOpen && y());
                                              }),
                                            ),
                                            B.push(
                                              C.$watch(function () {
                                                L ||
                                                  ((L = !0),
                                                  C.$$postDigest(function () {
                                                    ((L = !1),
                                                      A && A.isOpen && V());
                                                  }));
                                              }),
                                            ))
                                          : B.push(
                                              r.$observe(n, function (e) {
                                                ((A.content = e),
                                                  !e && A.isOpen ? y() : V());
                                              }),
                                            ),
                                        B.push(
                                          r.$observe(u + "Title", function (e) {
                                            ((A.title = e), A.isOpen && V());
                                          }),
                                        ),
                                        B.push(
                                          r.$observe(
                                            u + "Placement",
                                            function (e) {
                                              ((A.placement = e || p.placement),
                                                A.isOpen && V());
                                            },
                                          ),
                                        )),
                                      void A.$evalAsync(function () {
                                        ((A.isOpen = !0), M(!0), V());
                                      }))
                                    : angular.noop
                                );
                              }
                              function b() {
                                (T && (a.cancel(T), (T = null)),
                                  O && (a.cancel(O), (O = null)));
                              }
                              function y() {
                                A &&
                                  A.$evalAsync(function () {
                                    A &&
                                      ((A.isOpen = !1),
                                      M(!1),
                                      A.animation
                                        ? x || (x = a($, 150, !1))
                                        : $());
                                  });
                              }
                              function w() {
                                (S && (a.cancel(S), (S = null)),
                                  x && (a.cancel(x), (x = null)));
                              }
                              function $() {
                                (b(),
                                  w(),
                                  B.length &&
                                    (angular.forEach(B, function (e) {
                                      e();
                                    }),
                                    (B.length = 0)),
                                  D &&
                                    (D.remove(), (D = null), I && a.cancel(I)),
                                  m.remove(A),
                                  C && (C.$destroy(), (C = null)));
                              }
                              function M(t) {
                                R &&
                                  angular.isFunction(R.assign) &&
                                  R.assign(e, t);
                              }
                              function k(e) {
                                A &&
                                  A.isOpen &&
                                  D &&
                                  (t[0].contains(e.target) ||
                                    D[0].contains(e.target) ||
                                    g());
                              }
                              function P(e) {
                                27 === e.which && g();
                              }
                              var D,
                                C,
                                x,
                                T,
                                S,
                                O,
                                I,
                                E,
                                U =
                                  !!angular.isDefined(p.appendToBody) &&
                                  p.appendToBody,
                                F = h(void 0),
                                j = angular.isDefined(r[u + "Enable"]),
                                A = e.$new(!0),
                                L = !1,
                                R =
                                  !!angular.isDefined(r[u + "IsOpen"]) &&
                                  c(r[u + "IsOpen"]),
                                N = !!p.useContentExp && c(r[n]),
                                B = [],
                                V = function () {
                                  D &&
                                    D.html() &&
                                    (O ||
                                      (O = a(
                                        function () {
                                          var e = s.positionElements(
                                              t,
                                              D,
                                              A.placement,
                                              U,
                                            ),
                                            i = angular.isDefined(
                                              D.offsetHeight,
                                            )
                                              ? D.offsetHeight
                                              : D.prop("offsetHeight"),
                                            n = U ? s.offset(t) : s.position(t);
                                          D.css({
                                            top: e.top + "px",
                                            left: e.left + "px",
                                          });
                                          var r = e.placement.split("-");
                                          (D.hasClass(r[0]) ||
                                            (D.removeClass(E.split("-")[0]),
                                            D.addClass(r[0])),
                                            D.hasClass(
                                              p.placementClassPrefix +
                                                e.placement,
                                            ) ||
                                              (D.removeClass(
                                                p.placementClassPrefix + E,
                                              ),
                                              D.addClass(
                                                p.placementClassPrefix +
                                                  e.placement,
                                              )),
                                            (I = a(
                                              function () {
                                                var e = angular.isDefined(
                                                    D.offsetHeight,
                                                  )
                                                    ? D.offsetHeight
                                                    : D.prop("offsetHeight"),
                                                  t = s.adjustTop(r, n, i, e);
                                                (t && D.css(t), (I = null));
                                              },
                                              0,
                                              !1,
                                            )),
                                            D.hasClass("uib-position-measure")
                                              ? (s.positionArrow(
                                                  D,
                                                  e.placement,
                                                ),
                                                D.removeClass(
                                                  "uib-position-measure",
                                                ))
                                              : E !== e.placement &&
                                                s.positionArrow(D, e.placement),
                                            (E = e.placement),
                                            (O = null));
                                        },
                                        0,
                                        !1,
                                      )));
                                };
                              ((A.origScope = e),
                                (A.isOpen = !1),
                                (A.contentExp = function () {
                                  return A.content;
                                }),
                                r.$observe("disabled", function (e) {
                                  (e && b(), e && A.isOpen && y());
                                }),
                                R &&
                                  e.$watch(R, function (e) {
                                    A && !e === A.isOpen && d();
                                  }));
                              var H = function () {
                                (F.show.forEach(function (e) {
                                  ("outsideClick" === e
                                    ? t.off("click", d)
                                    : (t.off(e, f), t.off(e, d)),
                                    t.off("keypress", P));
                                }),
                                  F.hide.forEach(function (e) {
                                    "outsideClick" === e
                                      ? o.off("click", k)
                                      : t.off(e, g);
                                  }));
                              };
                              !(function () {
                                var i = [],
                                  n = [],
                                  a = e.$eval(r[u + "Trigger"]);
                                (H(),
                                  angular.isObject(a)
                                    ? (Object.keys(a).forEach(function (e) {
                                        (i.push(e), n.push(a[e]));
                                      }),
                                      (F = { show: i, hide: n }))
                                    : (F = h(a)),
                                  "none" !== F.show &&
                                    F.show.forEach(function (e, i) {
                                      ("outsideClick" === e
                                        ? (t.on("click", d), o.on("click", k))
                                        : e === F.hide[i]
                                          ? t.on(e, d)
                                          : e &&
                                            (t.on(e, f), t.on(F.hide[i], g)),
                                        t.on("keypress", P));
                                    }));
                              })();
                              var q = e.$eval(r[u + "Animation"]);
                              A.animation = angular.isDefined(q)
                                ? !!q
                                : p.animation;
                              var z,
                                W = u + "AppendToBody";
                              ((z =
                                (W in r && void 0 === r[W]) || e.$eval(r[W])),
                                (U = angular.isDefined(z) ? z : U),
                                e.$on("$destroy", function () {
                                  (H(), $(), (A = null));
                                }));
                            };
                          },
                        };
                      }
                    );
                  },
                ]));
            })
            .directive("uibTooltipTemplateTransclude", [
              "$animate",
              "$sce",
              "$compile",
              "$templateRequest",
              function (e, t, i, n) {
                return {
                  link: function (r, a, o) {
                    var s,
                      l,
                      u,
                      c = r.$eval(o.tooltipTemplateTranscludeScope),
                      d = 0,
                      p = function () {
                        (l && (l.remove(), (l = null)),
                          s && (s.$destroy(), (s = null)),
                          u &&
                            (e.leave(u).then(function () {
                              l = null;
                            }),
                            (l = u),
                            (u = null)));
                      };
                    (r.$watch(
                      t.parseAsResourceUrl(o.uibTooltipTemplateTransclude),
                      function (t) {
                        var o = ++d;
                        t
                          ? (n(t, !0).then(
                              function (n) {
                                if (o === d) {
                                  var r = c.$new(),
                                    l = i(n)(r, function (t) {
                                      (p(), e.enter(t, a));
                                    });
                                  ((u = l),
                                    (s = r).$emit("$includeContentLoaded", t));
                                }
                              },
                              function () {
                                o === d &&
                                  (p(), r.$emit("$includeContentError", t));
                              },
                            ),
                            r.$emit("$includeContentRequested", t))
                          : p();
                      },
                    ),
                      r.$on("$destroy", p));
                  },
                };
              },
            ])
            .directive("uibTooltipClasses", [
              "$uibPosition",
              function (e) {
                return {
                  restrict: "A",
                  link: function (t, i, n) {
                    if (t.placement) {
                      var r = e.parsePlacement(t.placement);
                      i.addClass(r[0]);
                    }
                    (t.popupClass && i.addClass(t.popupClass),
                      t.animation && i.addClass(n.tooltipAnimationClass));
                  },
                };
              },
            ])
            .directive("uibTooltipPopup", function () {
              return {
                restrict: "A",
                scope: { content: "@" },
                templateUrl: "uib/template/tooltip/tooltip-popup.html",
              };
            })
            .directive("uibTooltip", [
              "$uibTooltip",
              function (e) {
                return e("uibTooltip", "tooltip", "mouseenter");
              },
            ])
            .directive("uibTooltipTemplatePopup", function () {
              return {
                restrict: "A",
                scope: { contentExp: "&", originScope: "&" },
                templateUrl: "uib/template/tooltip/tooltip-template-popup.html",
              };
            })
            .directive("uibTooltipTemplate", [
              "$uibTooltip",
              function (e) {
                return e("uibTooltipTemplate", "tooltip", "mouseenter", {
                  useContentExp: !0,
                });
              },
            ])
            .directive("uibTooltipHtmlPopup", function () {
              return {
                restrict: "A",
                scope: { contentExp: "&" },
                templateUrl: "uib/template/tooltip/tooltip-html-popup.html",
              };
            })
            .directive("uibTooltipHtml", [
              "$uibTooltip",
              function (e) {
                return e("uibTooltipHtml", "tooltip", "mouseenter", {
                  useContentExp: !0,
                });
              },
            ]),
          angular
            .module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"])
            .directive("uibPopoverTemplatePopup", function () {
              return {
                restrict: "A",
                scope: { uibTitle: "@", contentExp: "&", originScope: "&" },
                templateUrl: "uib/template/popover/popover-template.html",
              };
            })
            .directive("uibPopoverTemplate", [
              "$uibTooltip",
              function (e) {
                return e("uibPopoverTemplate", "popover", "click", {
                  useContentExp: !0,
                });
              },
            ])
            .directive("uibPopoverHtmlPopup", function () {
              return {
                restrict: "A",
                scope: { contentExp: "&", uibTitle: "@" },
                templateUrl: "uib/template/popover/popover-html.html",
              };
            })
            .directive("uibPopoverHtml", [
              "$uibTooltip",
              function (e) {
                return e("uibPopoverHtml", "popover", "click", {
                  useContentExp: !0,
                });
              },
            ])
            .directive("uibPopoverPopup", function () {
              return {
                restrict: "A",
                scope: { uibTitle: "@", content: "@" },
                templateUrl: "uib/template/popover/popover.html",
              };
            })
            .directive("uibPopover", [
              "$uibTooltip",
              function (e) {
                return e("uibPopover", "popover", "click");
              },
            ]),
          angular
            .module("ui.bootstrap.progressbar", [])
            .constant("uibProgressConfig", { animate: !0, max: 100 })
            .controller("UibProgressController", [
              "$scope",
              "$attrs",
              "uibProgressConfig",
              function (e, t, i) {
                function n() {
                  return angular.isDefined(e.maxParam) ? e.maxParam : i.max;
                }
                var r = this,
                  a = angular.isDefined(t.animate)
                    ? e.$parent.$eval(t.animate)
                    : i.animate;
                ((this.bars = []),
                  (e.max = n()),
                  (this.addBar = function (e, t, i) {
                    (a || t.css({ transition: "none" }),
                      this.bars.push(e),
                      (e.max = n()),
                      (e.title =
                        i && angular.isDefined(i.title)
                          ? i.title
                          : "progressbar"),
                      e.$watch("value", function (t) {
                        e.recalculatePercentage();
                      }),
                      (e.recalculatePercentage = function () {
                        var t = r.bars.reduce(function (e, t) {
                          return (
                            (t.percent = +((100 * t.value) / t.max).toFixed(2)),
                            e + t.percent
                          );
                        }, 0);
                        t > 100 && (e.percent -= t - 100);
                      }),
                      e.$on("$destroy", function () {
                        ((t = null), r.removeBar(e));
                      }));
                  }),
                  (this.removeBar = function (e) {
                    (this.bars.splice(this.bars.indexOf(e), 1),
                      this.bars.forEach(function (e) {
                        e.recalculatePercentage();
                      }));
                  }),
                  e.$watch("maxParam", function (e) {
                    r.bars.forEach(function (e) {
                      ((e.max = n()), e.recalculatePercentage());
                    });
                  }));
              },
            ])
            .directive("uibProgress", function () {
              return {
                replace: !0,
                transclude: !0,
                controller: "UibProgressController",
                require: "uibProgress",
                scope: { maxParam: "=?max" },
                templateUrl: "uib/template/progressbar/progress.html",
              };
            })
            .directive("uibBar", function () {
              return {
                replace: !0,
                transclude: !0,
                require: "^uibProgress",
                scope: { value: "=", type: "@" },
                templateUrl: "uib/template/progressbar/bar.html",
                link: function (e, t, i, n) {
                  n.addBar(e, t, i);
                },
              };
            })
            .directive("uibProgressbar", function () {
              return {
                replace: !0,
                transclude: !0,
                controller: "UibProgressController",
                scope: { value: "=", maxParam: "=?max", type: "@" },
                templateUrl: "uib/template/progressbar/progressbar.html",
                link: function (e, t, i, n) {
                  n.addBar(e, angular.element(t.children()[0]), {
                    title: i.title,
                  });
                },
              };
            }),
          angular
            .module("ui.bootstrap.rating", [])
            .constant("uibRatingConfig", {
              max: 5,
              stateOn: null,
              stateOff: null,
              enableReset: !0,
              titles: ["one", "two", "three", "four", "five"],
            })
            .controller("UibRatingController", [
              "$scope",
              "$attrs",
              "uibRatingConfig",
              function (e, t, i) {
                var n = { $setViewValue: angular.noop },
                  r = this;
                ((this.init = function (r) {
                  (((n = r).$render = this.render),
                    n.$formatters.push(function (e) {
                      return (
                        angular.isNumber(e) &&
                          (0 | e) !== e &&
                          (e = Math.round(e)),
                        e
                      );
                    }),
                    (this.stateOn = angular.isDefined(t.stateOn)
                      ? e.$parent.$eval(t.stateOn)
                      : i.stateOn),
                    (this.stateOff = angular.isDefined(t.stateOff)
                      ? e.$parent.$eval(t.stateOff)
                      : i.stateOff),
                    (this.enableReset = angular.isDefined(t.enableReset)
                      ? e.$parent.$eval(t.enableReset)
                      : i.enableReset));
                  var a = angular.isDefined(t.titles)
                    ? e.$parent.$eval(t.titles)
                    : i.titles;
                  this.titles =
                    angular.isArray(a) && a.length > 0 ? a : i.titles;
                  var o = angular.isDefined(t.ratingStates)
                    ? e.$parent.$eval(t.ratingStates)
                    : new Array(
                        angular.isDefined(t.max)
                          ? e.$parent.$eval(t.max)
                          : i.max,
                      );
                  e.range = this.buildTemplateObjects(o);
                }),
                  (this.buildTemplateObjects = function (e) {
                    for (var t = 0, i = e.length; t < i; t++)
                      e[t] = angular.extend(
                        { index: t },
                        {
                          stateOn: this.stateOn,
                          stateOff: this.stateOff,
                          title: this.getTitle(t),
                        },
                        e[t],
                      );
                    return e;
                  }),
                  (this.getTitle = function (e) {
                    return e >= this.titles.length ? e + 1 : this.titles[e];
                  }),
                  (e.rate = function (t) {
                    if (!e.readonly && t >= 0 && t <= e.range.length) {
                      var i = r.enableReset && n.$viewValue === t ? 0 : t;
                      (n.$setViewValue(i), n.$render());
                    }
                  }),
                  (e.enter = function (t) {
                    (e.readonly || (e.value = t), e.onHover({ value: t }));
                  }),
                  (e.reset = function () {
                    ((e.value = n.$viewValue), e.onLeave());
                  }),
                  (e.onKeydown = function (t) {
                    /(37|38|39|40)/.test(t.which) &&
                      (t.preventDefault(),
                      t.stopPropagation(),
                      e.rate(
                        e.value + (38 === t.which || 39 === t.which ? 1 : -1),
                      ));
                  }),
                  (this.render = function () {
                    ((e.value = n.$viewValue),
                      (e.title = r.getTitle(e.value - 1)));
                  }));
              },
            ])
            .directive("uibRating", function () {
              return {
                require: ["uibRating", "ngModel"],
                restrict: "A",
                scope: { readonly: "=?readOnly", onHover: "&", onLeave: "&" },
                controller: "UibRatingController",
                templateUrl: "uib/template/rating/rating.html",
                link: function (e, t, i, n) {
                  var r = n[0],
                    a = n[1];
                  r.init(a);
                },
              };
            }),
          angular
            .module("ui.bootstrap.tabs", [])
            .controller("UibTabsetController", [
              "$scope",
              function (e) {
                function t(e) {
                  for (var t = 0; t < r.tabs.length; t++)
                    if (r.tabs[t].index === e) return t;
                }
                var i,
                  n,
                  r = this;
                ((r.tabs = []),
                  (r.select = function (e, a) {
                    if (!n) {
                      var o = t(i),
                        s = r.tabs[o];
                      if (s) {
                        if (
                          (s.tab.onDeselect({ $event: a, $selectedIndex: e }),
                          a && a.isDefaultPrevented())
                        )
                          return;
                        s.tab.active = !1;
                      }
                      var l = r.tabs[e];
                      l
                        ? (l.tab.onSelect({ $event: a }),
                          (l.tab.active = !0),
                          (r.active = l.index),
                          (i = l.index))
                        : !l &&
                          angular.isDefined(i) &&
                          ((r.active = null), (i = null));
                    }
                  }),
                  (r.addTab = function (e) {
                    if (
                      (r.tabs.push({ tab: e, index: e.index }),
                      r.tabs.sort(function (e, t) {
                        return e.index > t.index
                          ? 1
                          : e.index < t.index
                            ? -1
                            : 0;
                      }),
                      e.index === r.active ||
                        (!angular.isDefined(r.active) && 1 === r.tabs.length))
                    ) {
                      var i = t(e.index);
                      r.select(i);
                    }
                  }),
                  (r.removeTab = function (e) {
                    for (var t, i = 0; i < r.tabs.length; i++)
                      if (r.tabs[i].tab === e) {
                        t = i;
                        break;
                      }
                    if (r.tabs[t].index === r.active) {
                      var n =
                        t === r.tabs.length - 1
                          ? t - 1
                          : t + (1 % r.tabs.length);
                      r.select(n);
                    }
                    r.tabs.splice(t, 1);
                  }),
                  e.$watch("tabset.active", function (e) {
                    angular.isDefined(e) && e !== i && r.select(t(e));
                  }),
                  e.$on("$destroy", function () {
                    n = !0;
                  }));
              },
            ])
            .directive("uibTabset", function () {
              return {
                transclude: !0,
                replace: !0,
                scope: {},
                bindToController: { active: "=?", type: "@" },
                controller: "UibTabsetController",
                controllerAs: "tabset",
                templateUrl: function (e, t) {
                  return t.templateUrl || "uib/template/tabs/tabset.html";
                },
                link: function (e, t, i) {
                  ((e.vertical =
                    !!angular.isDefined(i.vertical) &&
                    e.$parent.$eval(i.vertical)),
                    (e.justified =
                      !!angular.isDefined(i.justified) &&
                      e.$parent.$eval(i.justified)));
                },
              };
            })
            .directive("uibTab", [
              "$parse",
              function (e) {
                return {
                  require: "^uibTabset",
                  replace: !0,
                  templateUrl: function (e, t) {
                    return t.templateUrl || "uib/template/tabs/tab.html";
                  },
                  transclude: !0,
                  scope: {
                    heading: "@",
                    index: "=?",
                    classes: "@?",
                    onSelect: "&select",
                    onDeselect: "&deselect",
                  },
                  controller: function () {},
                  controllerAs: "tab",
                  link: function (t, i, n, r, a) {
                    ((t.disabled = !1),
                      n.disable &&
                        t.$parent.$watch(e(n.disable), function (e) {
                          t.disabled = !!e;
                        }),
                      angular.isUndefined(n.index) &&
                        (r.tabs && r.tabs.length
                          ? (t.index =
                              Math.max.apply(
                                null,
                                r.tabs.map(function (e) {
                                  return e.index;
                                }),
                              ) + 1)
                          : (t.index = 0)),
                      angular.isUndefined(n.classes) && (t.classes = ""),
                      (t.select = function (e) {
                        if (!t.disabled) {
                          for (var i, n = 0; n < r.tabs.length; n++)
                            if (r.tabs[n].tab === t) {
                              i = n;
                              break;
                            }
                          r.select(i, e);
                        }
                      }),
                      r.addTab(t),
                      t.$on("$destroy", function () {
                        r.removeTab(t);
                      }),
                      (t.$transcludeFn = a));
                  },
                };
              },
            ])
            .directive("uibTabHeadingTransclude", function () {
              return {
                restrict: "A",
                require: "^uibTab",
                link: function (e, t) {
                  e.$watch("headingElement", function (e) {
                    e && (t.html(""), t.append(e));
                  });
                },
              };
            })
            .directive("uibTabContentTransclude", function () {
              return {
                restrict: "A",
                require: "^uibTabset",
                link: function (e, t, i) {
                  var n = e.$eval(i.uibTabContentTransclude).tab;
                  n.$transcludeFn(n.$parent, function (e) {
                    angular.forEach(e, function (e) {
                      var i;
                      (i = e).tagName &&
                      (i.hasAttribute("uib-tab-heading") ||
                        i.hasAttribute("data-uib-tab-heading") ||
                        i.hasAttribute("x-uib-tab-heading") ||
                        "uib-tab-heading" === i.tagName.toLowerCase() ||
                        "data-uib-tab-heading" === i.tagName.toLowerCase() ||
                        "x-uib-tab-heading" === i.tagName.toLowerCase() ||
                        "uib:tab-heading" === i.tagName.toLowerCase())
                        ? (n.headingElement = e)
                        : t.append(e);
                    });
                  });
                },
              };
            }),
          angular
            .module("ui.bootstrap.timepicker", [])
            .constant("uibTimepickerConfig", {
              hourStep: 1,
              minuteStep: 1,
              secondStep: 1,
              showMeridian: !0,
              showSeconds: !1,
              meridians: null,
              readonlyInput: !1,
              mousewheel: !0,
              arrowkeys: !0,
              showSpinners: !0,
              templateUrl: "uib/template/timepicker/timepicker.html",
            })
            .controller("UibTimepickerController", [
              "$scope",
              "$element",
              "$attrs",
              "$parse",
              "$log",
              "$locale",
              "uibTimepickerConfig",
              function (e, t, i, n, r, a, o) {
                function s() {
                  var t = +e.hours;
                  if (
                    (e.showMeridian ? t > 0 && t < 13 : t >= 0 && t < 24) &&
                    "" !== e.hours
                  )
                    return (
                      e.showMeridian &&
                        (12 === t && (t = 0), e.meridian === P[1] && (t += 12)),
                      t
                    );
                }
                function l() {
                  var t = +e.minutes;
                  if (t >= 0 && t < 60 && "" !== e.minutes) return t;
                }
                function u() {
                  var t = +e.seconds;
                  return t >= 0 && t < 60 ? t : void 0;
                }
                function c(e, t) {
                  return null === e
                    ? ""
                    : angular.isDefined(e) && e.toString().length < 2 && !t
                      ? "0" + e
                      : e.toString();
                }
                function d(e) {
                  (p(), k.$setViewValue(new Date($)), m(e));
                }
                function p() {
                  (b && b.$setValidity("hours", !0),
                    y && y.$setValidity("minutes", !0),
                    w && w.$setValidity("seconds", !0),
                    k.$setValidity("time", !0),
                    (e.invalidHours = !1),
                    (e.invalidMinutes = !1),
                    (e.invalidSeconds = !1));
                }
                function m(t) {
                  if (k.$modelValue) {
                    var i = $.getHours(),
                      n = $.getMinutes(),
                      r = $.getSeconds();
                    (e.showMeridian && (i = 0 === i || 12 === i ? 12 : i % 12),
                      (e.hours = "h" === t ? i : c(i, !D)),
                      "m" !== t && (e.minutes = c(n)),
                      (e.meridian = $.getHours() < 12 ? P[0] : P[1]),
                      "s" !== t && (e.seconds = c(r)),
                      (e.meridian = $.getHours() < 12 ? P[0] : P[1]));
                  } else
                    ((e.hours = null),
                      (e.minutes = null),
                      (e.seconds = null),
                      (e.meridian = P[0]));
                }
                function h(e) {
                  (($ = g($, e)), d());
                }
                function f(e, t) {
                  return g(e, 60 * t);
                }
                function g(e, t) {
                  var i = new Date(e.getTime() + 1e3 * t),
                    n = new Date(e);
                  return (
                    n.setHours(i.getHours(), i.getMinutes(), i.getSeconds()),
                    n
                  );
                }
                function v() {
                  return (
                    (null === e.hours || "" === e.hours) &&
                    (null === e.minutes || "" === e.minutes) &&
                    (!e.showSeconds ||
                      (e.showSeconds &&
                        (null === e.seconds || "" === e.seconds)))
                  );
                }
                var b,
                  y,
                  w,
                  $ = new Date(),
                  M = [],
                  k = { $setViewValue: angular.noop },
                  P = angular.isDefined(i.meridians)
                    ? e.$parent.$eval(i.meridians)
                    : o.meridians || a.DATETIME_FORMATS.AMPMS,
                  D =
                    !angular.isDefined(i.padHours) ||
                    e.$parent.$eval(i.padHours);
                ((e.tabindex = angular.isDefined(i.tabindex) ? i.tabindex : 0),
                  t.removeAttr("tabindex"),
                  (this.init = function (t, n) {
                    (((k = t).$render = this.render),
                      k.$formatters.unshift(function (e) {
                        return e ? new Date(e) : null;
                      }));
                    var r = n.eq(0),
                      a = n.eq(1),
                      s = n.eq(2);
                    ((b = r.controller("ngModel")),
                      (y = a.controller("ngModel")),
                      (w = s.controller("ngModel")),
                      (angular.isDefined(i.mousewheel)
                        ? e.$parent.$eval(i.mousewheel)
                        : o.mousewheel) && this.setupMousewheelEvents(r, a, s),
                      (angular.isDefined(i.arrowkeys)
                        ? e.$parent.$eval(i.arrowkeys)
                        : o.arrowkeys) && this.setupArrowkeyEvents(r, a, s),
                      (e.readonlyInput = angular.isDefined(i.readonlyInput)
                        ? e.$parent.$eval(i.readonlyInput)
                        : o.readonlyInput),
                      this.setupInputEvents(r, a, s));
                  }));
                var C = o.hourStep;
                i.hourStep &&
                  M.push(
                    e.$parent.$watch(n(i.hourStep), function (e) {
                      C = +e;
                    }),
                  );
                var x,
                  T,
                  S = o.minuteStep;
                (i.minuteStep &&
                  M.push(
                    e.$parent.$watch(n(i.minuteStep), function (e) {
                      S = +e;
                    }),
                  ),
                  M.push(
                    e.$parent.$watch(n(i.min), function (e) {
                      var t = new Date(e);
                      x = isNaN(t) ? void 0 : t;
                    }),
                  ),
                  M.push(
                    e.$parent.$watch(n(i.max), function (e) {
                      var t = new Date(e);
                      T = isNaN(t) ? void 0 : t;
                    }),
                  ));
                var O = !1;
                (i.ngDisabled &&
                  M.push(
                    e.$parent.$watch(n(i.ngDisabled), function (e) {
                      O = e;
                    }),
                  ),
                  (e.noIncrementHours = function () {
                    var e = f($, 60 * C);
                    return O || e > T || (e < $ && e < x);
                  }),
                  (e.noDecrementHours = function () {
                    var e = f($, 60 * -C);
                    return O || e < x || (e > $ && e > T);
                  }),
                  (e.noIncrementMinutes = function () {
                    var e = f($, S);
                    return O || e > T || (e < $ && e < x);
                  }),
                  (e.noDecrementMinutes = function () {
                    var e = f($, -S);
                    return O || e < x || (e > $ && e > T);
                  }),
                  (e.noIncrementSeconds = function () {
                    var e = g($, I);
                    return O || e > T || (e < $ && e < x);
                  }),
                  (e.noDecrementSeconds = function () {
                    var e = g($, -I);
                    return O || e < x || (e > $ && e > T);
                  }),
                  (e.noToggleMeridian = function () {
                    return $.getHours() < 12
                      ? O || f($, 720) > T
                      : O || f($, -720) < x;
                  }));
                var I = o.secondStep;
                (i.secondStep &&
                  M.push(
                    e.$parent.$watch(n(i.secondStep), function (e) {
                      I = +e;
                    }),
                  ),
                  (e.showSeconds = o.showSeconds),
                  i.showSeconds &&
                    M.push(
                      e.$parent.$watch(n(i.showSeconds), function (t) {
                        e.showSeconds = !!t;
                      }),
                    ),
                  (e.showMeridian = o.showMeridian),
                  i.showMeridian &&
                    M.push(
                      e.$parent.$watch(n(i.showMeridian), function (t) {
                        if (((e.showMeridian = !!t), k.$error.time)) {
                          var i = s(),
                            n = l();
                          angular.isDefined(i) &&
                            angular.isDefined(n) &&
                            ($.setHours(i), d());
                        } else m();
                      }),
                    ),
                  (this.setupMousewheelEvents = function (t, i, n) {
                    var r = function (e) {
                      e.originalEvent && (e = e.originalEvent);
                      var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                      return e.detail || t > 0;
                    };
                    (t.on("mousewheel wheel", function (t) {
                      (O ||
                        e.$apply(
                          r(t) ? e.incrementHours() : e.decrementHours(),
                        ),
                        t.preventDefault());
                    }),
                      i.on("mousewheel wheel", function (t) {
                        (O ||
                          e.$apply(
                            r(t) ? e.incrementMinutes() : e.decrementMinutes(),
                          ),
                          t.preventDefault());
                      }),
                      n.on("mousewheel wheel", function (t) {
                        (O ||
                          e.$apply(
                            r(t) ? e.incrementSeconds() : e.decrementSeconds(),
                          ),
                          t.preventDefault());
                      }));
                  }),
                  (this.setupArrowkeyEvents = function (t, i, n) {
                    (t.on("keydown", function (t) {
                      O ||
                        (38 === t.which
                          ? (t.preventDefault(), e.incrementHours(), e.$apply())
                          : 40 === t.which &&
                            (t.preventDefault(),
                            e.decrementHours(),
                            e.$apply()));
                    }),
                      i.on("keydown", function (t) {
                        O ||
                          (38 === t.which
                            ? (t.preventDefault(),
                              e.incrementMinutes(),
                              e.$apply())
                            : 40 === t.which &&
                              (t.preventDefault(),
                              e.decrementMinutes(),
                              e.$apply()));
                      }),
                      n.on("keydown", function (t) {
                        O ||
                          (38 === t.which
                            ? (t.preventDefault(),
                              e.incrementSeconds(),
                              e.$apply())
                            : 40 === t.which &&
                              (t.preventDefault(),
                              e.decrementSeconds(),
                              e.$apply()));
                      }));
                  }),
                  (this.setupInputEvents = function (t, i, n) {
                    if (e.readonlyInput)
                      return (
                        (e.updateHours = angular.noop),
                        (e.updateMinutes = angular.noop),
                        void (e.updateSeconds = angular.noop)
                      );
                    var r = function (t, i, n) {
                      (k.$setViewValue(null),
                        k.$setValidity("time", !1),
                        angular.isDefined(t) &&
                          ((e.invalidHours = t),
                          b && b.$setValidity("hours", !1)),
                        angular.isDefined(i) &&
                          ((e.invalidMinutes = i),
                          y && y.$setValidity("minutes", !1)),
                        angular.isDefined(n) &&
                          ((e.invalidSeconds = n),
                          w && w.$setValidity("seconds", !1)));
                    };
                    ((e.updateHours = function () {
                      var e = s(),
                        t = l();
                      (k.$setDirty(),
                        angular.isDefined(e) && angular.isDefined(t)
                          ? ($.setHours(e),
                            $.setMinutes(t),
                            $ < x || $ > T ? r(!0) : d("h"))
                          : r(!0));
                    }),
                      t.on("blur", function (t) {
                        (k.$setTouched(),
                          v()
                            ? p()
                            : null === e.hours || "" === e.hours
                              ? r(!0)
                              : !e.invalidHours &&
                                e.hours < 10 &&
                                e.$apply(function () {
                                  e.hours = c(e.hours, !D);
                                }));
                      }),
                      (e.updateMinutes = function () {
                        var e = l(),
                          t = s();
                        (k.$setDirty(),
                          angular.isDefined(e) && angular.isDefined(t)
                            ? ($.setHours(t),
                              $.setMinutes(e),
                              $ < x || $ > T ? r(void 0, !0) : d("m"))
                            : r(void 0, !0));
                      }),
                      i.on("blur", function (t) {
                        (k.$setTouched(),
                          v()
                            ? p()
                            : null === e.minutes
                              ? r(void 0, !0)
                              : !e.invalidMinutes &&
                                e.minutes < 10 &&
                                e.$apply(function () {
                                  e.minutes = c(e.minutes);
                                }));
                      }),
                      (e.updateSeconds = function () {
                        var e = u();
                        (k.$setDirty(),
                          angular.isDefined(e)
                            ? ($.setSeconds(e), d("s"))
                            : r(void 0, void 0, !0));
                      }),
                      n.on("blur", function (t) {
                        v()
                          ? p()
                          : !e.invalidSeconds &&
                            e.seconds < 10 &&
                            e.$apply(function () {
                              e.seconds = c(e.seconds);
                            });
                      }));
                  }),
                  (this.render = function () {
                    var t = k.$viewValue;
                    isNaN(t)
                      ? (k.$setValidity("time", !1),
                        r.error(
                          'Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.',
                        ))
                      : (t && ($ = t),
                        $ < x || $ > T
                          ? (k.$setValidity("time", !1),
                            (e.invalidHours = !0),
                            (e.invalidMinutes = !0))
                          : p(),
                        m());
                  }),
                  (e.showSpinners = angular.isDefined(i.showSpinners)
                    ? e.$parent.$eval(i.showSpinners)
                    : o.showSpinners),
                  (e.incrementHours = function () {
                    e.noIncrementHours() || h(60 * C * 60);
                  }),
                  (e.decrementHours = function () {
                    e.noDecrementHours() || h(60 * -C * 60);
                  }),
                  (e.incrementMinutes = function () {
                    e.noIncrementMinutes() || h(60 * S);
                  }),
                  (e.decrementMinutes = function () {
                    e.noDecrementMinutes() || h(60 * -S);
                  }),
                  (e.incrementSeconds = function () {
                    e.noIncrementSeconds() || h(I);
                  }),
                  (e.decrementSeconds = function () {
                    e.noDecrementSeconds() || h(-I);
                  }),
                  (e.toggleMeridian = function () {
                    var t = l(),
                      i = s();
                    e.noToggleMeridian() ||
                      (angular.isDefined(t) && angular.isDefined(i)
                        ? h(720 * ($.getHours() < 12 ? 60 : -60))
                        : (e.meridian = e.meridian === P[0] ? P[1] : P[0]));
                  }),
                  (e.blur = function () {
                    k.$setTouched();
                  }),
                  e.$on("$destroy", function () {
                    for (; M.length; ) M.shift()();
                  }));
              },
            ])
            .directive("uibTimepicker", [
              "uibTimepickerConfig",
              function (e) {
                return {
                  require: ["uibTimepicker", "?^ngModel"],
                  restrict: "A",
                  controller: "UibTimepickerController",
                  controllerAs: "timepicker",
                  scope: {},
                  templateUrl: function (t, i) {
                    return i.templateUrl || e.templateUrl;
                  },
                  link: function (e, t, i, n) {
                    var r = n[0],
                      a = n[1];
                    a && r.init(a, t.find("input"));
                  },
                };
              },
            ]),
          angular
            .module("ui.bootstrap.typeahead", [
              "ui.bootstrap.debounce",
              "ui.bootstrap.position",
            ])
            .factory("uibTypeaheadParser", [
              "$parse",
              function (e) {
                var t =
                  /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
                return {
                  parse: function (i) {
                    var n = i.match(t);
                    if (!n)
                      throw new Error(
                        'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' +
                          i +
                          '".',
                      );
                    return {
                      itemName: n[3],
                      source: e(n[4]),
                      viewMapper: e(n[2] || n[1]),
                      modelMapper: e(n[1]),
                    };
                  },
                };
              },
            ])
            .controller("UibTypeaheadController", [
              "$scope",
              "$element",
              "$attrs",
              "$compile",
              "$parse",
              "$q",
              "$timeout",
              "$document",
              "$window",
              "$rootScope",
              "$$debounce",
              "$uibPosition",
              "uibTypeaheadParser",
              function (e, t, i, n, r, a, o, s, l, u, c, d, p) {
                function m() {
                  (R.moveInProgress || ((R.moveInProgress = !0), R.$digest()),
                    Y());
                }
                function h() {
                  ((R.position = S ? d.offset(t) : d.position(t)),
                    (R.position.top += t.prop("offsetHeight")));
                }
                var f,
                  g,
                  v = [9, 13, 27, 38, 40],
                  b = e.$eval(i.typeaheadMinLength);
                (b || 0 === b || (b = 1),
                  e.$watch(i.typeaheadMinLength, function (e) {
                    b = e || 0 === e ? e : 1;
                  }));
                var y = e.$eval(i.typeaheadWaitMs) || 0,
                  w = !1 !== e.$eval(i.typeaheadEditable);
                e.$watch(i.typeaheadEditable, function (e) {
                  w = !1 !== e;
                });
                var $,
                  M,
                  k = r(i.typeaheadLoading).assign || angular.noop,
                  P = i.typeaheadShouldSelect
                    ? r(i.typeaheadShouldSelect)
                    : function (e, t) {
                        var i = t.$event;
                        return 13 === i.which || 9 === i.which;
                      },
                  D = r(i.typeaheadOnSelect),
                  C =
                    !!angular.isDefined(i.typeaheadSelectOnBlur) &&
                    e.$eval(i.typeaheadSelectOnBlur),
                  x = r(i.typeaheadNoResults).assign || angular.noop,
                  T = i.typeaheadInputFormatter
                    ? r(i.typeaheadInputFormatter)
                    : void 0,
                  S =
                    !!i.typeaheadAppendToBody &&
                    e.$eval(i.typeaheadAppendToBody),
                  O = i.typeaheadAppendTo ? e.$eval(i.typeaheadAppendTo) : null,
                  I = !1 !== e.$eval(i.typeaheadFocusFirst),
                  E =
                    !!i.typeaheadSelectOnExact &&
                    e.$eval(i.typeaheadSelectOnExact),
                  U = r(i.typeaheadIsOpen).assign || angular.noop,
                  F = e.$eval(i.typeaheadShowHint) || !1,
                  j = r(i.ngModel),
                  A = r(i.ngModel + "($$$p)"),
                  L = p.parse(i.uibTypeahead),
                  R = e.$new(),
                  N = e.$on("$destroy", function () {
                    R.$destroy();
                  });
                R.$on("$destroy", N);
                var B,
                  V,
                  H =
                    "typeahead-" +
                    R.$id +
                    "-" +
                    Math.floor(1e4 * Math.random());
                (t.attr({
                  "aria-autocomplete": "list",
                  "aria-expanded": !1,
                  "aria-owns": H,
                }),
                  F &&
                    ((B = angular.element("<div></div>")).css(
                      "position",
                      "relative",
                    ),
                    t.after(B),
                    (V = t.clone()).attr("placeholder", ""),
                    V.attr("tabindex", "-1"),
                    V.val(""),
                    V.css({
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      "border-color": "transparent",
                      "box-shadow": "none",
                      opacity: 1,
                      background:
                        "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
                      color: "#999",
                    }),
                    t.css({
                      position: "relative",
                      "vertical-align": "top",
                      "background-color": "transparent",
                    }),
                    V.attr("id") && V.removeAttr("id"),
                    B.append(V),
                    V.after(t)));
                var q = angular.element("<div uib-typeahead-popup></div>");
                (q.attr({
                  id: H,
                  matches: "matches",
                  active: "activeIdx",
                  select: "select(activeIdx, evt)",
                  "move-in-progress": "moveInProgress",
                  query: "query",
                  position: "position",
                  "assign-is-open": "assignIsOpen(isOpen)",
                  debounce: "debounceUpdate",
                }),
                  angular.isDefined(i.typeaheadTemplateUrl) &&
                    q.attr("template-url", i.typeaheadTemplateUrl),
                  angular.isDefined(i.typeaheadPopupTemplateUrl) &&
                    q.attr("popup-template-url", i.typeaheadPopupTemplateUrl));
                var z = function () {
                    ((R.matches = []),
                      (R.activeIdx = -1),
                      t.attr("aria-expanded", !1),
                      F && V.val(""));
                  },
                  W = function (e) {
                    return H + "-option-" + e;
                  };
                R.$watch("activeIdx", function (e) {
                  e < 0
                    ? t.removeAttr("aria-activedescendant")
                    : t.attr("aria-activedescendant", W(e));
                });
                var _ = function (i, n) {
                  var r = { $viewValue: i };
                  (k(e, !0),
                    x(e, !1),
                    a.when(L.source(e, r)).then(
                      function (a) {
                        var o = i === f.$viewValue;
                        if (o && $)
                          if (a && a.length > 0) {
                            ((R.activeIdx = I ? 0 : -1),
                              x(e, !1),
                              (R.matches.length = 0));
                            for (var s = 0; s < a.length; s++)
                              ((r[L.itemName] = a[s]),
                                R.matches.push({
                                  id: W(s),
                                  label: L.viewMapper(R, r),
                                  model: a[s],
                                }));
                            if (
                              ((R.query = i),
                              h(),
                              t.attr("aria-expanded", !0),
                              E &&
                                1 === R.matches.length &&
                                (function (e) {
                                  return (
                                    !!(R.matches.length > 0 && e) &&
                                    e.toUpperCase() ===
                                      R.matches[0].label.toUpperCase()
                                  );
                                })(i) &&
                                (angular.isNumber(R.debounceUpdate) ||
                                angular.isObject(R.debounceUpdate)
                                  ? c(
                                      function () {
                                        R.select(0, n);
                                      },
                                      angular.isNumber(R.debounceUpdate)
                                        ? R.debounceUpdate
                                        : R.debounceUpdate.default,
                                    )
                                  : R.select(0, n)),
                              F)
                            ) {
                              var l = R.matches[0].label;
                              angular.isString(i) &&
                              i.length > 0 &&
                              l.slice(0, i.length).toUpperCase() ===
                                i.toUpperCase()
                                ? V.val(i + l.slice(i.length))
                                : V.val("");
                            }
                          } else (z(), x(e, !0));
                        o && k(e, !1);
                      },
                      function () {
                        (z(), k(e, !1), x(e, !0));
                      },
                    ));
                };
                S &&
                  (angular.element(l).on("resize", m),
                  s.find("body").on("scroll", m));
                var Y = c(function () {
                  (R.matches.length && h(), (R.moveInProgress = !1));
                }, 200);
                ((R.moveInProgress = !1), (R.query = void 0));
                var G,
                  K = function () {
                    G && o.cancel(G);
                  };
                (z(),
                  (R.assignIsOpen = function (t) {
                    U(e, t);
                  }),
                  (R.select = function (n, r) {
                    var a,
                      s,
                      l = {};
                    ((M = !0),
                      (l[L.itemName] = s = R.matches[n].model),
                      (a = L.modelMapper(e, l)),
                      (function (t, i) {
                        angular.isFunction(j(e)) && g.getOption("getterSetter")
                          ? A(t, { $$$p: i })
                          : j.assign(t, i);
                      })(e, a),
                      f.$setValidity("editable", !0),
                      f.$setValidity("parse", !0),
                      D(e, {
                        $item: s,
                        $model: a,
                        $label: L.viewMapper(e, l),
                        $event: r,
                      }),
                      z(),
                      !1 !== R.$eval(i.typeaheadFocusOnSelect) &&
                        o(
                          function () {
                            t[0].focus();
                          },
                          0,
                          !1,
                        ));
                  }),
                  t.on("keydown", function (t) {
                    if (0 !== R.matches.length && -1 !== v.indexOf(t.which)) {
                      var i,
                        n = P(e, { $event: t });
                      if (
                        (-1 === R.activeIdx && n) ||
                        (9 === t.which && t.shiftKey)
                      )
                        return (z(), void R.$digest());
                      switch ((t.preventDefault(), t.which)) {
                        case 27:
                          (t.stopPropagation(), z(), e.$digest());
                          break;
                        case 38:
                          ((R.activeIdx =
                            (R.activeIdx > 0 ? R.activeIdx : R.matches.length) -
                            1),
                            R.$digest(),
                            ((i = q[0].querySelectorAll(".uib-typeahead-match")[
                              R.activeIdx
                            ]).parentNode.scrollTop = i.offsetTop));
                          break;
                        case 40:
                          ((R.activeIdx = (R.activeIdx + 1) % R.matches.length),
                            R.$digest(),
                            ((i = q[0].querySelectorAll(".uib-typeahead-match")[
                              R.activeIdx
                            ]).parentNode.scrollTop = i.offsetTop));
                          break;
                        default:
                          n &&
                            R.$apply(function () {
                              angular.isNumber(R.debounceUpdate) ||
                              angular.isObject(R.debounceUpdate)
                                ? c(
                                    function () {
                                      R.select(R.activeIdx, t);
                                    },
                                    angular.isNumber(R.debounceUpdate)
                                      ? R.debounceUpdate
                                      : R.debounceUpdate.default,
                                  )
                                : R.select(R.activeIdx, t);
                            });
                      }
                    }
                  }),
                  t.on("focus", function (e) {
                    (($ = !0),
                      0 !== b ||
                        f.$viewValue ||
                        o(function () {
                          _(f.$viewValue, e);
                        }, 0));
                  }),
                  t.on("blur", function (e) {
                    (C &&
                      R.matches.length &&
                      -1 !== R.activeIdx &&
                      !M &&
                      ((M = !0),
                      R.$apply(function () {
                        angular.isObject(R.debounceUpdate) &&
                        angular.isNumber(R.debounceUpdate.blur)
                          ? c(function () {
                              R.select(R.activeIdx, e);
                            }, R.debounceUpdate.blur)
                          : R.select(R.activeIdx, e);
                      })),
                      !w &&
                        f.$error.editable &&
                        (f.$setViewValue(),
                        R.$apply(function () {
                          (f.$setValidity("editable", !0),
                            f.$setValidity("parse", !0));
                        }),
                        t.val("")),
                      ($ = !1),
                      (M = !1));
                  }));
                var X = function (i) {
                  t[0] !== i.target &&
                    3 !== i.which &&
                    0 !== R.matches.length &&
                    (z(), u.$$phase || e.$digest());
                };
                (s.on("click", X),
                  e.$on("$destroy", function () {
                    (s.off("click", X),
                      (S || O) && Z.remove(),
                      S &&
                        (angular.element(l).off("resize", m),
                        s.find("body").off("scroll", m)),
                      q.remove(),
                      F && B.remove());
                  }));
                var Z = n(q)(R);
                (S
                  ? s.find("body").append(Z)
                  : O
                    ? angular.element(O).eq(0).append(Z)
                    : t.after(Z),
                  (this.init = function (t) {
                    ((g = (function (e) {
                      var t;
                      return (
                        angular.version.minor < 6
                          ? ((t = e.$options || {}).getOption = function (e) {
                              return t[e];
                            })
                          : (t = e.$options),
                        t
                      );
                    })((f = t))),
                      (R.debounceUpdate = r(g.getOption("debounce"))(e)),
                      f.$parsers.unshift(function (t) {
                        return (
                          ($ = !0),
                          0 === b || (t && t.length >= b)
                            ? y > 0
                              ? (K(),
                                (function (e) {
                                  G = o(function () {
                                    _(e);
                                  }, y);
                                })(t))
                              : _(t)
                            : (k(e, !1), K(), z()),
                          w
                            ? t
                            : t
                              ? void f.$setValidity("editable", !1)
                              : (f.$setValidity("editable", !0), null)
                        );
                      }),
                      f.$formatters.push(function (t) {
                        var i,
                          n = {};
                        return (
                          w || f.$setValidity("editable", !0),
                          T
                            ? ((n.$model = t), T(e, n))
                            : ((n[L.itemName] = t),
                              (i = L.viewMapper(e, n)),
                              (n[L.itemName] = void 0),
                              i !== L.viewMapper(e, n) ? i : t)
                        );
                      }));
                  }));
              },
            ])
            .directive("uibTypeahead", function () {
              return {
                controller: "UibTypeaheadController",
                require: ["ngModel", "uibTypeahead"],
                link: function (e, t, i, n) {
                  n[1].init(n[0]);
                },
              };
            })
            .directive("uibTypeaheadPopup", [
              "$$debounce",
              function (e) {
                return {
                  scope: {
                    matches: "=",
                    query: "=",
                    active: "=",
                    position: "&",
                    moveInProgress: "=",
                    select: "&",
                    assignIsOpen: "&",
                    debounce: "&",
                  },
                  replace: !0,
                  templateUrl: function (e, t) {
                    return (
                      t.popupTemplateUrl ||
                      "uib/template/typeahead/typeahead-popup.html"
                    );
                  },
                  link: function (t, i, n) {
                    ((t.templateUrl = n.templateUrl),
                      (t.isOpen = function () {
                        var e = t.matches.length > 0;
                        return (t.assignIsOpen({ isOpen: e }), e);
                      }),
                      (t.isActive = function (e) {
                        return t.active === e;
                      }),
                      (t.selectActive = function (e) {
                        t.active = e;
                      }),
                      (t.selectMatch = function (i, n) {
                        var r = t.debounce();
                        angular.isNumber(r) || angular.isObject(r)
                          ? e(
                              function () {
                                t.select({ activeIdx: i, evt: n });
                              },
                              angular.isNumber(r) ? r : r.default,
                            )
                          : t.select({ activeIdx: i, evt: n });
                      }));
                  },
                };
              },
            ])
            .directive("uibTypeaheadMatch", [
              "$templateRequest",
              "$compile",
              "$parse",
              function (e, t, i) {
                return {
                  scope: { index: "=", match: "=", query: "=" },
                  link: function (n, r, a) {
                    var o =
                      i(a.templateUrl)(n.$parent) ||
                      "uib/template/typeahead/typeahead-match.html";
                    e(o).then(function (e) {
                      var i = angular.element(e.trim());
                      (r.replaceWith(i), t(i)(n));
                    });
                  },
                };
              },
            ])
            .filter("uibTypeaheadHighlight", [
              "$sce",
              "$injector",
              "$log",
              function (e, t, i) {
                var n;
                return (
                  (n = t.has("$sanitize")),
                  function (t, r) {
                    return (
                      !n &&
                        (function (e) {
                          return /<.*>/g.test(e);
                        })(t) &&
                        i.warn("Unsafe use of typeahead please use ngSanitize"),
                      (t = r
                        ? ("" + t).replace(
                            new RegExp(
                              (function (e) {
                                return e.replace(
                                  /([.?*+^$[\]\\(){}|-])/g,
                                  "\\$1",
                                );
                              })(r),
                              "gi",
                            ),
                            "<strong>$&</strong>",
                          )
                        : t),
                      n || (t = e.trustAsHtml(t)),
                      t
                    );
                  }
                );
              },
            ]),
          angular
            .module("uib/template/accordion/accordion-group.html", [])
            .run([
              "$templateCache",
              function (e) {
                e.put(
                  "uib/template/accordion/accordion-group.html",
                  '<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n',
                );
              },
            ]),
          angular.module("uib/template/accordion/accordion.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/accordion/accordion.html",
                '<div role="tablist" class="panel-group" ng-transclude></div>',
              );
            },
          ]),
          angular.module("uib/template/alert/alert.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/alert/alert.html",
                '<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n',
              );
            },
          ]),
          angular.module("uib/template/carousel/carousel.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/carousel/carousel.html",
                '<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n',
              );
            },
          ]),
          angular.module("uib/template/carousel/slide.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/carousel/slide.html",
                '<div class="text-center" ng-transclude></div>\n',
              );
            },
          ]),
          angular.module("uib/template/datepicker/datepicker.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/datepicker/datepicker.html",
                '<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/datepicker/day.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/datepicker/day.html",
                '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n',
              );
            },
          ]),
          angular.module("uib/template/datepicker/month.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/datepicker/month.html",
                '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n',
              );
            },
          ]),
          angular.module("uib/template/datepicker/year.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/datepicker/year.html",
                '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n',
              );
            },
          ]),
          angular.module("uib/template/datepickerPopup/popup.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/datepickerPopup/popup.html",
                '<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n',
              );
            },
          ]),
          angular.module("uib/template/modal/window.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/modal/window.html",
                "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n",
              );
            },
          ]),
          angular.module("uib/template/pager/pager.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/pager/pager.html",
                '<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n',
              );
            },
          ]),
          angular.module("uib/template/pagination/pagination.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/pagination/pagination.html",
                '<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li role="menuitem" ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li role="menuitem" ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li role="menuitem" ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n',
              );
            },
          ]),
          angular
            .module("uib/template/tooltip/tooltip-html-popup.html", [])
            .run([
              "$templateCache",
              function (e) {
                e.put(
                  "uib/template/tooltip/tooltip-html-popup.html",
                  '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n',
                );
              },
            ]),
          angular.module("uib/template/tooltip/tooltip-popup.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/tooltip/tooltip-popup.html",
                '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n',
              );
            },
          ]),
          angular
            .module("uib/template/tooltip/tooltip-template-popup.html", [])
            .run([
              "$templateCache",
              function (e) {
                e.put(
                  "uib/template/tooltip/tooltip-template-popup.html",
                  '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n',
                );
              },
            ]),
          angular.module("uib/template/popover/popover-html.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/popover/popover-html.html",
                '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/popover/popover-template.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/popover/popover-template.html",
                '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/popover/popover.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/popover/popover.html",
                '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/progressbar/bar.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/progressbar/bar.html",
                '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n',
              );
            },
          ]),
          angular.module("uib/template/progressbar/progress.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/progressbar/progress.html",
                '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>',
              );
            },
          ]),
          angular.module("uib/template/progressbar/progressbar.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/progressbar/progressbar.html",
                '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/rating/rating.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/rating/rating.html",
                '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n',
              );
            },
          ]),
          angular.module("uib/template/tabs/tab.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/tabs/tab.html",
                '<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n',
              );
            },
          ]),
          angular.module("uib/template/tabs/tabset.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/tabs/tabset.html",
                '<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n',
              );
            },
          ]),
          angular.module("uib/template/timepicker/timepicker.html", []).run([
            "$templateCache",
            function (e) {
              e.put(
                "uib/template/timepicker/timepicker.html",
                '<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" aria-label="Hours" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" aria-label="Minutes" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" aria-label="Seconds" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n',
              );
            },
          ]),
          angular
            .module("uib/template/typeahead/typeahead-match.html", [])
            .run([
              "$templateCache",
              function (e) {
                e.put(
                  "uib/template/typeahead/typeahead-match.html",
                  '<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n',
                );
              },
            ]),
          angular
            .module("uib/template/typeahead/typeahead-popup.html", [])
            .run([
              "$templateCache",
              function (e) {
                e.put(
                  "uib/template/typeahead/typeahead-popup.html",
                  '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n',
                );
              },
            ]),
          angular.module("ui.bootstrap.carousel").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibCarouselCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>',
                ),
              (angular.$$uibCarouselCss = !0));
          }),
          angular.module("ui.bootstrap.datepicker").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibDatepickerCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>',
                ),
              (angular.$$uibDatepickerCss = !0));
          }),
          angular.module("ui.bootstrap.position").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibPositionCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>',
                ),
              (angular.$$uibPositionCss = !0));
          }),
          angular.module("ui.bootstrap.datepickerPopup").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibDatepickerpopupCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>',
                ),
              (angular.$$uibDatepickerpopupCss = !0));
          }),
          angular.module("ui.bootstrap.tooltip").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibTooltipCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>',
                ),
              (angular.$$uibTooltipCss = !0));
          }),
          angular.module("ui.bootstrap.timepicker").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibTimepickerCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">.uib-time input{width:50px;}</style>',
                ),
              (angular.$$uibTimepickerCss = !0));
          }),
          angular.module("ui.bootstrap.typeahead").run(function () {
            (!angular.$$csp().noInlineStyle &&
              !angular.$$uibTypeaheadCss &&
              angular
                .element(document)
                .find("head")
                .prepend(
                  '<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>',
                ),
              (angular.$$uibTypeaheadCss = !0));
          }));
      },
      2015: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HistoryService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e) {
              this.apiService = e;
            }
            return (
              (e.prototype.getReservationsHistory = function (e, t, i) {
                var n = { permitMediaTypeID: e, permitMediaCode: t, page: i };
                return this.apiService
                  .post("history/reservations", n)
                  .then(function (e) {
                    return e;
                  });
              }),
              (e.prototype.getUpgradesHistory = function (e, t, i) {
                var n = { permitMediaTypeID: e, permitMediaCode: t, page: i };
                return this.apiService
                  .post("history/upgrades", n)
                  .then(function (e) {
                    return e;
                  });
              }),
              (e.prototype.getMoveBalancesHistory = function (e, t, i) {
                var n = { permitMediaTypeID: e, permitMediaCode: t, page: i };
                return this.apiService
                  .post("history/movebalances", n)
                  .then(function (e) {
                    return e;
                  });
              }),
              (e.$inject = ["apiService"]),
              e
            );
          })();
        ((t.HistoryService = r), n.module("app").service("historyService", r));
      },
      2741: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.AlertService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e) {
              ((this.$timeout = e), (this.alertList = []));
            }
            return (
              Object.defineProperty(e.prototype, "alerts", {
                get: function () {
                  return this.alertList;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.add = function (e, t, i) {
                var n,
                  r = this,
                  a = {
                    type: t || "danger",
                    message: (n =
                      "object" == typeof e
                        ? "message" in e && e.message
                          ? e.message
                          : "Sorry, er is iets fout gegaan."
                        : e),
                    persistent: i,
                    close: function () {
                      var e = r.alertList.indexOf(a);
                      e >= 0 &&
                        e < r.alertList.length &&
                        r.alertList.splice(e, 1);
                    },
                  };
                (this.alertList.push(a),
                  i ||
                    this.$timeout(
                      function () {
                        a.close();
                      },
                      Math.min(Math.max(3500, 100 * n.length), 15e3),
                    ));
              }),
              (e.prototype.set = function (e, t) {
                this.add(e, t, !0);
              }),
              (e.prototype.reset = function () {
                for (var e = 0; e < this.alertList.length; )
                  this.alertList[e].persistent
                    ? this.alertList.splice(e, 1)
                    : e++;
              }),
              (e.prototype.clear = function () {
                this.alertList.length = 0;
              }),
              (e.$inject = ["$timeout"]),
              e
            );
          })();
        ((t.AlertService = r), n.module("app").service("alertService", r));
      },
      3114: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("sso", {
              template: i(1810),
              controller: [
                "datacontext",
                "model",
                "storageService",
                "locationService",
                "alertService",
                function (e, t, i, n, r) {
                  var a = n.getParam("id");
                  if (!a)
                    return (
                      i.session.set("asToken"),
                      i.session.set("Name"),
                      void n.toLogin()
                    );
                  e.login("UserAs", a)
                    .then(function () {
                      (i.session.set("asToken", t.token), n.toLogin());
                    })
                    .catch(function (e) {
                      (r.add(e), n.toLogin());
                    });
                },
              ],
            }));
      },
      3552: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("loginUser", {
              template: i(4948),
              controller: [
                "$scope",
                "storageService",
                function (e, t) {
                  var i = this;
                  ((i.identifier = null),
                    (i.password = null),
                    (i.asToken = null),
                    (i.username = null),
                    (i.permitMediaTypes = []),
                    (i.submitted = !1),
                    (i.canLoginMedia = function () {
                      return i.loginData && i.loginData.ZipCodeMandatory
                        ? !(!i.asIdentifier || !i.zipCode)
                        : !!i.asIdentifier;
                    }),
                    (i.onLoginMedia = function () {
                      (!(function () {
                        var t,
                          n = ["asIdentifier"];
                        for (t in n)
                          Object.prototype.hasOwnProperty.call(n, t) &&
                            ((e.loginUserForm[n[t]].$invalid = !1),
                            (e.loginUserForm[n[t]].$error = {}));
                        i.submitted = !1;
                      })(),
                        i.loginMedia &&
                          i
                            .loginMedia({
                              login: {
                                loginMethod: i.loginMethod,
                                identifier:
                                  "boolean" == typeof i.asToken
                                    ? "sso"
                                    : i.asToken,
                                permitMediaTypeID: i.permitMediaType,
                                asIdentifier: i.asIdentifier,
                                zipCode: i.zipCode,
                              },
                            })
                            .catch(function (t) {
                              if (0 === t.loginStatus)
                                return (
                                  (e.loginUserForm.asIdentifier.$error.userorcode =
                                    t.message),
                                  (e.loginUserForm.asIdentifier.$invalid = !0),
                                  void (e.loginUserForm.asIdentifier.$pristine =
                                    !1)
                                );
                              ((i.error = t), (i.submitted = !0));
                            }));
                    }),
                    (i.canLoginUser = function () {
                      return (
                        "CallCenter" !== i.loginMethod ||
                        !(!i.identifier || !i.password)
                      );
                    }),
                    (i.onLoginUser = function () {
                      var e = !("SingleSignOn" === i.loginMethod);
                      i.loginUser &&
                        i
                          .loginUser({
                            login: {
                              loginMethod: i.loginMethod,
                              identifier: e ? i.identifier : void 0,
                              password: e ? i.password : void 0,
                              otp: i.otp,
                            },
                          })
                          .then(function (e) {
                            e.requiresOtp
                              ? (i.requiresOtp = !0)
                              : ((i.asToken = e.token), (i.username = e.name));
                          });
                    }),
                    (i.onLogout = function () {
                      i.logoutUser &&
                        i.logoutUser({ loginMethod: i.loginMethod });
                    }),
                    (i.$onInit = function () {
                      ((i.asToken = i.asToken ?? t.session.get("asToken")),
                        (i.username = t.session.get("Name")));
                    }),
                    (i.$onChanges = function (e) {
                      var t = e.loginData;
                      t &&
                        t.currentValue &&
                        1 === t.currentValue.PermitMediaTypes.length &&
                        (i.permitMediaType =
                          t.currentValue.PermitMediaTypes[0].ID);
                    }));
                },
              ],
              bindings: {
                loginMethod: "<",
                loginData: "<?",
                loginMedia: "&",
                loginUser: "&",
                logoutUser: "&",
                asToken: "<",
              },
            }));
      },
      3839: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Model = void 0));
        var n = i(7025),
          r = (function () {
            function e(e) {
              ((this.storageService = e),
                (this.baseModel = {}),
                (this.current = {}),
                (this.session = {}));
            }
            return (
              Object.defineProperty(e.prototype, "isValid", {
                get: function () {
                  return !!this.baseModel.Permits;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "token", {
                get: function () {
                  return (
                    void 0 === this.session.token &&
                      (this.session.token =
                        this.storageService.session.get("Token")),
                    this.session.token
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return (
                    void 0 === this.session.name &&
                      (this.session.name =
                        this.storageService.session.get("Name")),
                    this.session.name
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "selected", {
                get: function () {
                  return this.current;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.setBaseModel = function (e) {
                if ((this.storageService.session.set("reference", ""), e)) {
                  if (
                    (e.Token &&
                      this.session.token !== e.Token &&
                      ((this.session.token = e.Token),
                      this.storageService.session.set(
                        "Token",
                        this.session.token,
                      )),
                    e.Name &&
                      ((this.session.name = e.Name),
                      this.storageService.session.set("Name", e.Name)),
                    e.Configuration &&
                      (this.baseModel.Configuration = e.Configuration),
                    e.Permits && (this.baseModel.Permits = e.Permits),
                    e.Permit && this.baseModel.Permits)
                  )
                    for (var t = 0; t < this.baseModel.Permits.length; t++)
                      if (null == e.Permit.Code)
                        for (
                          var i = 0;
                          i < this.baseModel.Permits[t].PermitMedias.length;
                          i++
                        )
                          for (var n = 0; n < e.Permit.PermitMedias.length; n++)
                            this.baseModel.Permits[t].PermitMedias[i].Code ===
                              e.Permit.PermitMedias[n].Code &&
                              (this.baseModel.Permits[t].PermitMedias[i] =
                                e.Permit.PermitMedias[n]);
                      else
                        this.baseModel.Permits[t].Code === e.Permit.Code &&
                          (this.baseModel.Permits[t] = e.Permit);
                  (this.baseModel.Permits &&
                    this.baseModel.Permits.forEach(function (e) {
                      e.PermitMedias.forEach(function (t) {
                        t.Permit = e;
                      });
                    }),
                    void 0 === this.session.permit &&
                      (this.session.permit =
                        this.storageService.session.get("Permit")),
                    void 0 === this.session.permitMedia &&
                      (this.session.permitMedia =
                        this.storageService.session.get("PermitMedia")),
                    this.selectPermit(this.session.permit),
                    this.selectPermitMedia(this.session.permitMedia));
                } else {
                  ((this.baseModel = {}),
                    (this.current.permit = null),
                    (this.current.permitMedia = null),
                    (this.session.token = null),
                    (this.session.permit = null),
                    (this.session.permitMedia = null));
                  var r = this.storageService.session.get("asToken"),
                    a = this.storageService.session.get("Name");
                  (this.storageService.session.clear(),
                    r && this.storageService.session.set("asToken", r),
                    a && this.storageService.session.set("Name", a));
                }
              }),
              (e.prototype.getPermits = function () {
                return this.baseModel.Permits &&
                  (1 !== this.baseModel.Permits.length ||
                    this.baseModel.Permits[0].Code)
                  ? this.baseModel.Permits
                  : null;
              }),
              (e.prototype.selectPermit = function (e) {
                if (null != e) {
                  if (this.baseModel.Permits)
                    for (var t = 0; t < this.baseModel.Permits.length; t++)
                      if (this.baseModel.Permits[t].Code === e)
                        return (
                          this.synchronizePermit(this.baseModel.Permits[t]),
                          this.current.permit
                        );
                } else this.synchronizePermit(null);
                return null;
              }),
              (e.prototype.getSinglePermitMedia = function () {
                return this.baseModel.Permits &&
                  this.baseModel.Permits.length > 0 &&
                  this.baseModel.Permits[0].PermitMedias.length > 0
                  ? this.baseModel.Permits[0].PermitMedias[0]
                  : null;
              }),
              (e.prototype.selectPermitMedia = function (e) {
                if (null != e) {
                  if (this.baseModel.Permits)
                    for (var t = 0; t < this.baseModel.Permits.length; t++)
                      for (
                        var i = 0;
                        i < this.baseModel.Permits[t].PermitMedias.length;
                        i++
                      )
                        if (
                          this.baseModel.Permits[t].PermitMedias[i].Code === e
                        )
                          return (
                            this.synchronizePermitMedia(
                              this.baseModel.Permits[t].PermitMedias[i],
                            ),
                            this.current.permitMedia
                          );
                } else this.synchronizePermitMedia(null);
                return null;
              }),
              (e.prototype.showPrivacyInfo = function () {
                return !(
                  !this.baseModel.Configuration ||
                  !this.baseModel.Configuration.ShowPrivacyInfo
                );
              }),
              (e.prototype.synchronizePermit = function (e) {
                (null != this.current.permitMedia &&
                  ((this.current.permitMedia = null),
                  this.synchronizePermitMedia(null)),
                  (this.current.permit = e));
                var t = e ? e.Code : null;
                this.session.permit !== t &&
                  ((this.session.permit = t),
                  this.storageService.session.set(
                    "Permit",
                    this.session.permit,
                  ));
              }),
              (e.prototype.synchronizePermitMedia = function (e) {
                (e &&
                  e.Permit.Code &&
                  this.current.permit !== e.Permit &&
                  ((this.current.permit = e.Permit),
                  this.synchronizePermit(this.current.permit)),
                  (this.current.permitMedia = e));
                var t = e ? e.Code : null;
                this.session.permitMedia !== t &&
                  ((this.session.permitMedia = t),
                  this.storageService.session.set(
                    "PermitMedia",
                    this.session.permitMedia,
                  ));
              }),
              (e.$inject = ["storageService"]),
              e
            );
          })();
        ((t.Model = r), n.module("app").service("model", r));
      },
      3864: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("cpPagination", {
              template: i(1856),
              controller: function () {
                var e = this;
                e.setPage = function (t) {
                  e.onPageChange && e.onPageChange({ page: t });
                };
              },
              bindings: { title: "<", collection: "<", onPageChange: "&" },
            }));
      },
      4087: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ApiService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t, i, n, r) {
              ((this.$http = e),
                (this.$q = t),
                (this.$window = i),
                (this.model = n),
                (this.BASE_CONFIG = r),
                (this.baseURL = this.BASE_CONFIG.baseURL));
            }
            return (
              (e.prototype.get = function (e, t, i) {
                var n = this,
                  r = this.updateConfig(i);
                return (
                  (r.params = t),
                  this.$http
                    .get("".concat(this.baseURL).concat(e), r)
                    .then(function (e) {
                      return e.data;
                    })
                    .catch(function (e) {
                      return n.$q.reject(n.errorResponse(e));
                    })
                );
              }),
              (e.prototype.post = function (e, t) {
                var i = this,
                  n = this.updateConfig();
                return this.$http
                  .post("".concat(this.baseURL).concat(e), t, n)
                  .then(function (e) {
                    return e.data;
                  })
                  .catch(function (e) {
                    return i.$q.reject(i.errorResponse(e));
                  });
              }),
              (e.prototype.updateConfig = function (e) {
                var t = {},
                  i = this.model.token;
                return (
                  i &&
                    ((t.headers = t.headers || {}),
                    (t.headers.Authorization = "Token ".concat(
                      this.$window.btoa(i),
                    ))),
                  (null == e ? void 0 : e.cache) && (t.cache = e.cache),
                  t
                );
              }),
              (e.prototype.errorResponse = function (e) {
                return {
                  message:
                    "De server is momenteel niet bereikbaar, controleer uw internetverbinding en probeer het opnieuw",
                  data: e.data,
                  status: e.status,
                };
              }),
              (e.$inject = ["$http", "$q", "$window", "model", "BASE_CONFIG"]),
              e
            );
          })();
        ((t.ApiService = r), n.module("app").service("apiService", r));
      },
      4603: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(3962),
          r = i(7025),
          a = (function () {
            function e(e, t, i, n, r) {
              var a = this;
              ((this.locationService = e),
                (this.modelService = t),
                (this.alertService = i),
                (this.historyService = n),
                (this.unitsService = r),
                (this.reservationsHistory = !1),
                (this.upgradesHistory = !1),
                (this.moveBalancesHistory = !1),
                (this.reservations = null),
                (this.moveBalances = null),
                (this.upgrades = null),
                (this.loading = !1),
                (this.toggle = function (e) {
                  switch (e) {
                    case "reservationsHistory":
                      a.reservationsHistory = !a.reservationsHistory;
                      break;
                    case "upgradesHistory":
                      a.upgradesHistory = !a.upgradesHistory;
                      break;
                    case "moveBalancesHistory":
                      a.moveBalancesHistory = !a.moveBalancesHistory;
                  }
                }),
                (this.show = function (e) {
                  switch (e) {
                    case "reservationsHistory":
                      return a.reservationsHistory;
                    case "upgradesHistory":
                      return a.upgradesHistory;
                    case "moveBalancesHistory":
                      return a.moveBalancesHistory;
                  }
                }));
            }
            return (
              (e.prototype.$onInit = function () {
                var e = this,
                  t = this.locationService.getParam("id");
                this.modelService.getPermitMedia(t).then(function (t) {
                  ((e.permitMedia = t),
                    null != e.permitMedia
                      ? ((e.showPrice = !e.unitsService.isCurrency(
                          e.permitMedia.Permit.UnitFormat,
                          e.permitMedia.Permit.UnitPrice,
                        )),
                        (e.unitFormat = e.permitMedia.Permit.UnitFormat),
                        e.setReservationsPage(1),
                        null != e.permitMedia.Permit.UnitPrice &&
                          e.setUpgradesPage(1),
                        e.permitMedia.Balance &&
                          e.permitMedia.Balance > 0 &&
                          e.setMoveBalancesPage(1))
                      : e.alertService.set("Geen pas gevonden"));
                });
              }),
              (e.prototype.setReservationsPage = function (e) {
                var t = this;
                this.historyService
                  .getReservationsHistory(
                    this.permitMedia.TypeID,
                    this.permitMedia.Code,
                    e,
                  )
                  .then(function (e) {
                    null != e
                      ? (t.reservations = e)
                      : t.alertService.add(
                          "De pagina uit de reservering geschiedenis is niet gevonden",
                        );
                  })
                  .catch(function (e) {
                    t.alertService.add(
                      "Fout bij het ophalen van de reserveringen.",
                    );
                  });
              }),
              (e.prototype.setUpgradesPage = function (e) {
                var t = this;
                ((this.loading = !0),
                  this.historyService
                    .getUpgradesHistory(
                      this.permitMedia.TypeID,
                      this.permitMedia.Code,
                      e,
                    )
                    .then(function (e) {
                      (null != e
                        ? (t.upgrades = e)
                        : t.alertService.add(
                            "De pagina uit de opwaardeer geschiedenis is niet gevonden",
                          ),
                        (t.loading = !1));
                    })
                    .catch(function (e) {
                      (t.alertService.add(
                        "Fout bij het ophalen van de opwaarderingen.",
                      ),
                        (t.loading = !1));
                    }));
              }),
              (e.prototype.setMoveBalancesPage = function (e) {
                var t = this;
                this.historyService
                  .getMoveBalancesHistory(
                    this.permitMedia.TypeID,
                    this.permitMedia.Code,
                    e,
                  )
                  .then(function (e) {
                    null != e
                      ? (t.moveBalances = e)
                      : t.alertService.add(
                          "De pagina uit de overschrijving geschiedenis is niet gevonden",
                        );
                  })
                  .catch(function (e) {
                    t.alertService.add(
                      "Fout bij het ophalen van de overschrijvingen.",
                    );
                  });
              }),
              (e.$inject = [
                "locationService",
                "modelService",
                "alertService",
                "historyService",
                "unitsService",
              ]),
              e
            );
          })();
        r.module("app").component("history", { controller: a, template: n });
      },
      4761: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DataContext = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t, i, n, r, a, o) {
              ((this.$q = e),
                (this.$window = t),
                (this.apiService = i),
                (this.payment = n),
                (this.model = r),
                (this.storageService = a),
                (this.BASE_CONFIG = o),
                (this.loginNumeric = {
                  CallCenter: 0,
                  Gebruiker: 1,
                  Pas: 2,
                  ResetCode: 3,
                  SingleSignOn: 4,
                  UserAs: 5,
                }),
                (this.isDvsApi = !1),
                (this.baseURL = this.BASE_CONFIG.baseURL),
                (this.isDvsApi = this.baseURL && "api/" == this.baseURL));
            }
            return (
              (e.prototype.startUp = function () {
                var e = this;
                return this.apiService.get("login").then(function (t) {
                  return 0 === t.LoginMethods.length
                    ? e.$q.reject({
                        message:
                          "Momenteel kunt u niet inloggen, onze excuses voor het ongemak",
                      })
                    : t;
                });
              }),
              (e.prototype.info = function () {
                var e = this;
                return this.apiService.get("login/info").then(function (t) {
                  return "ok" == t || "sso" == t ? t : e.$q.reject();
                });
              }),
              (e.prototype.login = function (e, t, i, n, r, a, o, s) {
                var l = this;
                if ("UserAs" === e && !t)
                  return (
                    (this.$window.location.href = this.baseURL.replace(
                      "api/",
                      "SsoSaml2/AzureAD",
                    )),
                    this.$q.resolve()
                  );
                var u = {
                  identifier: t,
                  loginMethod: this.loginNumeric[e],
                  password: i,
                  otp: n,
                  resetCode: r || null,
                  asIdentifier: o || null,
                  zipCode: s || null,
                  permitMediaTypeID: a,
                };
                return this.apiService.post("login", u).then(function (e) {
                  if (e.ErrorMessage)
                    return l.$q.reject({
                      loginStatus: e.LoginStatus,
                      message: e.ErrorMessage,
                      requiresOtp: e.RequiresOtp,
                    });
                  (l.model.setBaseModel(e),
                    u.loginMethod == l.loginNumeric.UserAs &&
                      window.location.reload());
                });
              }),
              (e.prototype.logout = function () {
                var e = this;
                return this.apiService
                  .post("login/logout", null)
                  .then(function (t) {
                    (e.storageService.session.set("Token", t.Token),
                      e.model.setBaseModel(null));
                  });
              }),
              (e.prototype.logoutAs = function () {
                var e = this;
                if (this.storageService.session.get("asToken") || this.isDvsApi)
                  return this.apiService
                    .post("login/logout", null)
                    .then(function (t) {
                      if ((e.storageService.session.set("Token"), !t.Redirect))
                        return t;
                      e.$window.location.href = e.baseURL.replace(
                        "api/",
                        "Home/Logout/",
                      );
                    });
              }),
              (e.prototype.validate = function () {
                var e = this;
                return this.model.isValid
                  ? this.$q.resolve()
                  : this.model.token || this.isDvsApi
                    ? this.apiService
                        .post("login/getbase", null)
                        .then(function (t) {
                          if (t.ErrorMessage)
                            return e.$q.reject({
                              code: t.Result,
                              message: t.ErrorMessage,
                            });
                          e.model.setBaseModel(t);
                        })
                    : this.$q.reject({
                        message:
                          "Uw inloggegevens konden niet worden opgeslagen, u zal opnieuw moeten inloggen",
                      });
              }),
              (e.prototype.upsertPermitLicensePlate = function (e, t, i) {
                var n = this,
                  r = { permitCode: e, licensePlate: t, updateLicensePlate: i };
                return this.apiService
                  .post("permitlicenseplate/upsert", r)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? n.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.deletePermitLicensePlate = function (e, t, i) {
                var n = this,
                  r = { permitCode: e, licensePlate: t, name: i };
                return this.apiService
                  .post("permitlicenseplate/remove", r)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? n.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.upsertPermitMediaLicensePlate = function (
                e,
                t,
                i,
                n,
                r,
              ) {
                var a = this,
                  o = {
                    permitMediaTypeID: e,
                    permitMediaCode: t,
                    licensePlate: i,
                    updateLicensePlate: n,
                    name: r,
                  };
                return this.apiService
                  .post("permitmedialicenseplate/upsert", o)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? a.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.deletePermitMediaLicensePlate = function (
                e,
                t,
                i,
                n,
              ) {
                var r = this,
                  a = {
                    permitMediaTypeID: e,
                    permitMediaCode: t,
                    licensePlate: i,
                    name: n,
                  };
                return this.apiService
                  .post("permitmedialicenseplate/remove", a)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? r.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.startReservation = function (e, t, i, n, r) {
                var a = this,
                  o = {
                    LicensePlate: i,
                    permitMediaTypeID: n,
                    permitMediaCode: r,
                    DateFrom: void 0,
                    DateUntil: void 0,
                  };
                return (
                  e && (o.DateFrom = e.format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                  t && (o.DateUntil = t.format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                  this.apiService
                    .post("reservation/create", o)
                    .then(function (e) {
                      if (e.ErrorMessage)
                        return a.$q.reject({
                          code: e.Result,
                          message: e.ErrorMessage,
                        });
                      a.model.setBaseModel(e);
                    })
                );
              }),
              (e.prototype.prolongReservation = function (e, t, i, n) {
                var r = this,
                  a = {
                    Minutes: e,
                    ReservationID: t,
                    permitMediaTypeID: i,
                    permitMediaCode: n,
                  };
                return this.apiService
                  .post("reservation/update", a)
                  .then(function (e) {
                    if (e.ErrorMessage)
                      return r.$q.reject({
                        code: e.Result,
                        message: e.ErrorMessage,
                      });
                    r.model.setBaseModel(e);
                  });
              }),
              (e.prototype.endReservation = function (e, t, i) {
                var n = this,
                  r = {
                    ReservationID: e,
                    permitMediaTypeID: t,
                    permitMediaCode: i,
                  };
                return this.apiService
                  .post("reservation/end", r)
                  .then(function (e) {
                    if (e.ErrorMessage)
                      return n.$q.reject({
                        code: e.Result,
                        message: e.ErrorMessage,
                      });
                    n.model.setBaseModel(e);
                  });
              }),
              (e.prototype.upgradePermitMedia = function (e, t, i, n) {
                var r = this,
                  a = {
                    permitMediaTypeID: e,
                    permitMediaCode: t,
                    unitsToAdd: i,
                    customerInvoiceReference: n,
                  };
                return this.apiService.post("upgrade", a).then(function (i) {
                  return r.makePayment(e, t, i);
                });
              }),
              (e.prototype.makePayment = function (e, t, i) {
                return i.ErrorMessage
                  ? this.$q.reject({ code: i.Result, message: i.ErrorMessage })
                  : (null != i.Reference
                      ? (this.storageService.session.set(
                          "reference",
                          ""
                            .concat(i.Reference, ";")
                            .concat(e, ";")
                            .concat(t, ";")
                            .concat(i.PaymentReference),
                        ),
                        i.RedirectUrl
                          ? (window.location.href = i.RedirectUrl)
                          : this.payment.open(i))
                      : this.model.setBaseModel(i),
                    this.$q.resolve());
              }),
              (e.prototype.checkPayment = function (e, t, i) {
                var n = this,
                  r = {
                    permitMediaTypeID: t,
                    permitMediaCode: i,
                    transactionID: e,
                  };
                return this.apiService
                  .post("payment/checktransaction", r)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? n.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.isUpgradeAllowed = function (e, t, i) {
                var n = this,
                  r = {
                    permitMediaTypeID: e,
                    permitMediaCode: t,
                    invoiceID: i,
                  };
                return this.apiService
                  .post("payment/isupgradeallowed", r)
                  .then(function (e) {
                    return e.ErrorMessage
                      ? n.$q.reject({ code: e.Result, message: e.ErrorMessage })
                      : e;
                  });
              }),
              (e.prototype.getFlowInfo = function (e, t) {
                return this.apiService.get(
                  "resource/getflowinfo",
                  { context: e, content: t },
                  { cache: !0 },
                );
              }),
              (e.$inject = [
                "$q",
                "$window",
                "apiService",
                "payment",
                "model",
                "storageService",
                "BASE_CONFIG",
              ]),
              e
            );
          })();
        ((t.DataContext = r), n.module("app").service("datacontext", r));
      },
      4980: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("loginReset", {
              template: i(4836),
              controller: [
                "$scope",
                function (e) {
                  var t = this;
                  ((t.submitted = !1),
                    (t.error = null),
                    (t.identifier = null),
                    (t.password = null),
                    (t.passwordRepeat = null),
                    (t.resetCode = null),
                    (t.loginData = null),
                    (t.minimumPasswordLength = 0),
                    (t.canLogin = function () {
                      return !!(t.resetCode && t.password && t.passwordRepeat);
                    }),
                    (t.onLogin = function () {
                      if (
                        ((function () {
                          var t,
                            i = [
                              "userName",
                              "resetCode",
                              "passwordNew",
                              "passwordRepeat",
                            ];
                          for (t in i)
                            Object.prototype.hasOwnProperty.call(i, t) &&
                              ((e.resetForm[i[t]].$invalid = !1),
                              (e.resetForm[i[t]].$error = {}));
                        })(),
                        t.password !== t.passwordRepeat)
                      )
                        return (
                          (t.submitted = !0),
                          (e.resetForm.passwordNew.$invalid = !0),
                          (e.resetForm.passwordRepeat.$invalid = !0),
                          void (e.resetForm.passwordRepeat.$error.notequal =
                            "De wachtwoorden komen niet overeen")
                        );
                      ((t.submitted = !1),
                        t.login &&
                          t
                            .login({
                              login: {
                                loginMethod: "ResetCode",
                                identifier: t.identifier,
                                password: t.password,
                                resetCode: t.resetCode,
                              },
                            })
                            .catch(function (i) {
                              return 2 === i.loginStatus
                                ? ((e.resetForm.userName.$invalid = !0),
                                  (e.resetForm.userName.$error.userorcode =
                                    i.message),
                                  void (e.resetForm.resetCode.$invalid = !0))
                                : 17 === i.loginStatus
                                  ? ((e.resetForm.passwordNew.$invalid = !0),
                                    (e.resetForm.passwordNew.$error.complexity =
                                      i.message),
                                    void (e.resetForm.passwordRepeat.$invalid =
                                      !0))
                                  : ((t.submitted = !0), void (t.error = i));
                            }));
                    }),
                    (t.$onChanges = function (e) {
                      const i = e.loginData;
                      null != i &&
                        null != i.currentValue &&
                        null != i.currentValue.Policy &&
                        (t.minimumPasswordLength =
                          i.currentValue.Policy.MinimumPasswordLength);
                    }));
                },
              ],
              bindings: {
                identifier: "<",
                password: "<",
                loginData: "<",
                login: "&",
              },
            }));
      },
      4999: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(1254),
          r = i(7025),
          a = (function () {
            function e(e, t, i, n, r) {
              var a = this;
              ((this.$scope = e),
                (this.alertService = t),
                (this.menuService = i),
                (this.modelService = n),
                (this.model = r),
                (this.alerts = this.alertService.alerts),
                (this.menu = this.menuService.menu),
                (this.selected = this.model.selected),
                (this.isMenuOpen = !1),
                (this.toggleMenu = function () {
                  a.isMenuOpen = !a.isMenuOpen;
                }));
            }
            return (
              (e.prototype.$onInit = function () {
                var e = this;
                ((this.$scope.validate = function (t) {
                  e.modelService.validate(t);
                }),
                  this.$scope.$on("$routeChangeSuccess", function () {
                    ((e.isMenuOpen = !1), e.alertService.reset());
                  }));
              }),
              (e.$inject = [
                "$scope",
                "alertService",
                "menuService",
                "modelService",
                "model",
              ]),
              e
            );
          })();
        r.module("app").component("shell", { template: n, controller: a });
      },
      5186: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("privacy", [
              "$scope",
              "model",
              "alertService",
              function (e) {
                e.validate(function () {});
              },
            ]));
      },
      5358: (e, t, i) => {
        var n = {
          "./af": 5177,
          "./af.js": 5177,
          "./ar": 1509,
          "./ar-dz": 1488,
          "./ar-dz.js": 1488,
          "./ar-kw": 8676,
          "./ar-kw.js": 8676,
          "./ar-ly": 2353,
          "./ar-ly.js": 2353,
          "./ar-ma": 4496,
          "./ar-ma.js": 4496,
          "./ar-ps": 6947,
          "./ar-ps.js": 6947,
          "./ar-sa": 2682,
          "./ar-sa.js": 2682,
          "./ar-tn": 9756,
          "./ar-tn.js": 9756,
          "./ar.js": 1509,
          "./az": 5533,
          "./az.js": 5533,
          "./be": 8959,
          "./be.js": 8959,
          "./bg": 7777,
          "./bg.js": 7777,
          "./bm": 4903,
          "./bm.js": 4903,
          "./bn": 1290,
          "./bn-bd": 7357,
          "./bn-bd.js": 7357,
          "./bn.js": 1290,
          "./bo": 1545,
          "./bo.js": 1545,
          "./br": 1470,
          "./br.js": 1470,
          "./bs": 4429,
          "./bs.js": 4429,
          "./ca": 7306,
          "./ca.js": 7306,
          "./cs": 6464,
          "./cs.js": 6464,
          "./cv": 3635,
          "./cv.js": 3635,
          "./cy": 4226,
          "./cy.js": 4226,
          "./da": 3601,
          "./da.js": 3601,
          "./de": 7853,
          "./de-at": 6111,
          "./de-at.js": 6111,
          "./de-ch": 4697,
          "./de-ch.js": 4697,
          "./de.js": 7853,
          "./dv": 708,
          "./dv.js": 708,
          "./el": 4691,
          "./el.js": 4691,
          "./en-au": 3872,
          "./en-au.js": 3872,
          "./en-ca": 8298,
          "./en-ca.js": 8298,
          "./en-gb": 6195,
          "./en-gb.js": 6195,
          "./en-ie": 6584,
          "./en-ie.js": 6584,
          "./en-il": 5543,
          "./en-il.js": 5543,
          "./en-in": 9033,
          "./en-in.js": 9033,
          "./en-nz": 9402,
          "./en-nz.js": 9402,
          "./en-sg": 3004,
          "./en-sg.js": 3004,
          "./eo": 2934,
          "./eo.js": 2934,
          "./es": 7650,
          "./es-do": 838,
          "./es-do.js": 838,
          "./es-mx": 7730,
          "./es-mx.js": 7730,
          "./es-us": 6575,
          "./es-us.js": 6575,
          "./es.js": 7650,
          "./et": 3035,
          "./et.js": 3035,
          "./eu": 3508,
          "./eu.js": 3508,
          "./fa": 119,
          "./fa.js": 119,
          "./fi": 527,
          "./fi.js": 527,
          "./fil": 5995,
          "./fil.js": 5995,
          "./fo": 2477,
          "./fo.js": 2477,
          "./fr": 5498,
          "./fr-ca": 6435,
          "./fr-ca.js": 6435,
          "./fr-ch": 7892,
          "./fr-ch.js": 7892,
          "./fr.js": 5498,
          "./fy": 7071,
          "./fy.js": 7071,
          "./ga": 1734,
          "./ga.js": 1734,
          "./gd": 217,
          "./gd.js": 217,
          "./gl": 7329,
          "./gl.js": 7329,
          "./gom-deva": 2124,
          "./gom-deva.js": 2124,
          "./gom-latn": 3383,
          "./gom-latn.js": 3383,
          "./gu": 5050,
          "./gu.js": 5050,
          "./he": 1713,
          "./he.js": 1713,
          "./hi": 3861,
          "./hi.js": 3861,
          "./hr": 6308,
          "./hr.js": 6308,
          "./hu": 609,
          "./hu.js": 609,
          "./hy-am": 7160,
          "./hy-am.js": 7160,
          "./id": 4063,
          "./id.js": 4063,
          "./is": 9374,
          "./is.js": 9374,
          "./it": 8383,
          "./it-ch": 1827,
          "./it-ch.js": 1827,
          "./it.js": 8383,
          "./ja": 3827,
          "./ja.js": 3827,
          "./jv": 9722,
          "./jv.js": 9722,
          "./ka": 1794,
          "./ka.js": 1794,
          "./kk": 7088,
          "./kk.js": 7088,
          "./km": 6870,
          "./km.js": 6870,
          "./kn": 4451,
          "./kn.js": 4451,
          "./ko": 3164,
          "./ko.js": 3164,
          "./ku": 8174,
          "./ku-kmr": 6181,
          "./ku-kmr.js": 6181,
          "./ku.js": 8174,
          "./ky": 8474,
          "./ky.js": 8474,
          "./lb": 9680,
          "./lb.js": 9680,
          "./lo": 5867,
          "./lo.js": 5867,
          "./lt": 5766,
          "./lt.js": 5766,
          "./lv": 9532,
          "./lv.js": 9532,
          "./me": 8076,
          "./me.js": 8076,
          "./mi": 1848,
          "./mi.js": 1848,
          "./mk": 306,
          "./mk.js": 306,
          "./ml": 3739,
          "./ml.js": 3739,
          "./mn": 9053,
          "./mn.js": 9053,
          "./mr": 6169,
          "./mr.js": 6169,
          "./ms": 3386,
          "./ms-my": 2297,
          "./ms-my.js": 2297,
          "./ms.js": 3386,
          "./mt": 7075,
          "./mt.js": 7075,
          "./my": 2264,
          "./my.js": 2264,
          "./nb": 2274,
          "./nb.js": 2274,
          "./ne": 8235,
          "./ne.js": 8235,
          "./nl": 2572,
          "./nl-be": 3784,
          "./nl-be.js": 3784,
          "./nl.js": 2572,
          "./nn": 4566,
          "./nn.js": 4566,
          "./oc-lnc": 9330,
          "./oc-lnc.js": 9330,
          "./pa-in": 9849,
          "./pa-in.js": 9849,
          "./pl": 4418,
          "./pl.js": 4418,
          "./pt": 9834,
          "./pt-br": 8303,
          "./pt-br.js": 8303,
          "./pt.js": 9834,
          "./ro": 4457,
          "./ro.js": 4457,
          "./ru": 2271,
          "./ru.js": 2271,
          "./sd": 3602,
          "./sd.js": 3602,
          "./se": 3478,
          "./se.js": 3478,
          "./si": 7538,
          "./si.js": 7538,
          "./sk": 5784,
          "./sk.js": 5784,
          "./sl": 6637,
          "./sl.js": 6637,
          "./sq": 6794,
          "./sq.js": 6794,
          "./sr": 5719,
          "./sr-cyrl": 3322,
          "./sr-cyrl.js": 3322,
          "./sr.js": 5719,
          "./ss": 6e3,
          "./ss.js": 6e3,
          "./sv": 1011,
          "./sv.js": 1011,
          "./sw": 748,
          "./sw.js": 748,
          "./ta": 1025,
          "./ta.js": 1025,
          "./te": 1885,
          "./te.js": 1885,
          "./tet": 8861,
          "./tet.js": 8861,
          "./tg": 6571,
          "./tg.js": 6571,
          "./th": 5802,
          "./th.js": 5802,
          "./tk": 9527,
          "./tk.js": 9527,
          "./tl-ph": 9231,
          "./tl-ph.js": 9231,
          "./tlh": 1052,
          "./tlh.js": 1052,
          "./tr": 5096,
          "./tr.js": 5096,
          "./tzl": 9846,
          "./tzl.js": 9846,
          "./tzm": 1765,
          "./tzm-latn": 7711,
          "./tzm-latn.js": 7711,
          "./tzm.js": 1765,
          "./ug-cn": 8414,
          "./ug-cn.js": 8414,
          "./uk": 6618,
          "./uk.js": 6618,
          "./ur": 158,
          "./ur.js": 158,
          "./uz": 7609,
          "./uz-latn": 2475,
          "./uz-latn.js": 2475,
          "./uz.js": 7609,
          "./vi": 1135,
          "./vi.js": 1135,
          "./x-pseudo": 4051,
          "./x-pseudo.js": 4051,
          "./yo": 2218,
          "./yo.js": 2218,
          "./zh-cn": 2648,
          "./zh-cn.js": 2648,
          "./zh-hk": 1632,
          "./zh-hk.js": 1632,
          "./zh-mo": 1541,
          "./zh-mo.js": 1541,
          "./zh-tw": 304,
          "./zh-tw.js": 304,
        };
        function r(e) {
          var t = a(e);
          return i(t);
        }
        function a(e) {
          if (!i.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((r.keys = function () {
          return Object.keys(n);
        }),
          (r.resolve = a),
          (e.exports = r),
          (r.id = 5358));
      },
      6004: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CpLoadingComponent = void 0));
        var n = i(7025),
          r = (function () {
            function e(e) {
              ((this.$timeout = e), (this.timer = null), (this.loading = !1));
            }
            return (
              (e.prototype.setIsLoading = function () {
                var e = this;
                this.$timeout(function () {
                  e.loading = e.short && e.trigger;
                }, 10);
              }),
              (e.prototype.$onInit = function () {
                this.setIsLoading();
              }),
              (e.prototype.$onChanges = function (e) {
                var t,
                  i = this;
                (t = e.trigger) &&
                void 0 !== t.currentValue &&
                null !== t.currentValue &&
                "" !== t.currentValue &&
                t.previousValue !== t.currentValue
                  ? (null !== this.timer && this.$timeout.cancel(this.timer),
                    (this.timer = this.$timeout(function () {
                      return i.setIsLoading();
                    }, 800)))
                  : this.setIsLoading();
              }),
              (e.$inject = ["$timeout"]),
              e
            );
          })();
        ((t.CpLoadingComponent = {
          controller: r,
          template:
            '<div ng-show="($ctrl.short && $ctrl.trigger)" class="col-loading"\n        ng-class="{\'loading\':$ctrl.loading}" layout="row"\n        layout-align="center center"><div class="cp-loading-center"><span class="glyphicon glyphicon-refresh cp-spin cp-loading-center-spinner" aria-hidden="true"></span></div></div>',
          bindings: { trigger: "<", short: "<?", hideIcon: "<?" },
        }),
          n.module("app").component("cpLoading", t.CpLoadingComponent));
      },
      6024: (e, t, i) => {
        "use strict";
        (i(7025),
          i(6098),
          i(6257),
          i(6064),
          i(3345),
          i(6415),
          i(1892),
          (window.moment = i(5093)),
          i(2572),
          i(4743),
          i(8187),
          i(7499),
          i(6004),
          i(182),
          i(6420),
          i(4999),
          i(8822),
          i(531),
          i(4980),
          i(3552),
          i(1022),
          i(6394),
          i(9698),
          i(8654),
          i(8),
          i(7736),
          i(1237),
          i(3864),
          i(4603),
          i(7530),
          i(5186),
          i(9802),
          i(6451),
          i(3114),
          i(822),
          i(7307),
          i(3839),
          i(676),
          i(4761),
          i(4087),
          i(2015),
          i(851),
          i(7873),
          i(8259),
          i(900),
          i(2741),
          i(7764));
      },
      6394: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("permits", [
              "$scope",
              "model",
              "locationService",
              "alertService",
              function (e, t, i, n) {
                var r = this;
                ((r.toPermitPages = function (e) {
                  i.toPermitPages(e);
                }),
                  e.validate(function () {
                    ((r.permits = t.getPermits()),
                      null != r.permits && r.permits.length > 0
                        ? t.selectPermit(null)
                        : n.set("Geen producten beschikbaar"));
                  }));
              },
            ]));
      },
      6420: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025);
        n.module("loadingBar", [])
          .config([
            "$httpProvider",
            function (e) {
              e.interceptors.push([
                "$q",
                "$cacheFactory",
                "loadingBarService",
                function (t, i, r) {
                  function a(t) {
                    var r,
                      a = e.defaults;
                    (!t.cache && !a.cache) ||
                      !1 === t.cache ||
                      ("GET" !== t.method && "JSONP" !== t.method) ||
                      (r = n.isObject(t.cache)
                        ? t.cache
                        : n.isObject(a.cache)
                          ? a.cache
                          : i.get("$http"));
                    var o = void 0 !== r && void 0 !== r.get(t.url);
                    return void 0 !== t.cached && o !== t.cached
                      ? t.cached
                      : ((t.cached = o), o);
                  }
                  return {
                    request: (e) => (
                      e.ignoreLoadingBar || a(e) || r.start(),
                      e || t.when(e)
                    ),
                    response: (e) => (
                      e &&
                        e.config &&
                        (e.config.ignoreLoadingBar ||
                          a(e.config) ||
                          r.complete()),
                      e || t.when(e)
                    ),
                    responseError: (e) => (
                      e &&
                        e.config &&
                        (e.config.ignoreLoadingBar ||
                          a(e.config) ||
                          r.complete()),
                      t.reject(e)
                    ),
                  };
                },
              ]);
            },
          ])
          .factory("loadingBarService", [
            "$document",
            "$timeout",
            "$interval",
            function (e, t, i) {
              var r,
                a,
                o,
                s = n.element(
                  '<div id="loading-bar"><div class="loading-bar"></div></div>',
                ),
                l = s.find("div").eq(0),
                u = 0,
                c = 0,
                d = !1,
                p = {
                  start: function () {
                    0 === c++
                      ? (r = t(function () {
                          (t.cancel(a),
                            s.remove(),
                            m(0),
                            e.find("body").eq(0).append(s),
                            (d = !0),
                            s.ready(function () {
                              d &&
                                (m(4 * Math.random() + 4),
                                (o = i(h, p.progressInterval)));
                            }));
                        }, p.startLatency))
                      : d && m((u * (c - 1)) / c);
                  },
                  complete: function () {
                    c > 0 &&
                      (0 === --c
                        ? d
                          ? (i.cancel(o),
                            (d = !1),
                            s.ready(function () {
                              (m(100),
                                (a = t(function () {
                                  s.remove();
                                }, p.completeLatency)));
                            }))
                          : t.cancel(r)
                        : d && m((u * (c + 1)) / c));
                  },
                  startLatency: 100,
                  completeLatency: 500,
                  progressInterval: 250,
                };
              return p;
              function m(e) {
                (l.css("width", `${e}%`), (u = e));
              }
              function h() {
                var e = 198 / Math.PI,
                  t = Math.tan(u / e);
                ((t += Math.random() / 4), m(Math.atan(t) * e));
              }
            },
          ]);
      },
      6451: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CpPayComponent = void 0));
        var n = i(3550),
          r = i(7025),
          a = (function () {
            function e(e, t, i, n, r) {
              ((this.datacontext = e),
                (this.locationService = t),
                (this.menuService = i),
                (this.model = n),
                (this.storageService = r),
                (this.loading = !0),
                (this.isLoggedIn = !0));
            }
            return (
              (e.prototype.toAddLicensePlate = function () {
                var e = this.model.getPermits();
                e
                  ? this.locationService.toPermitsPages(e)
                  : this.locationService.toPermitMediaPages(
                      this.model.getSinglePermitMedia(),
                    );
              }),
              (e.prototype.getData = function () {
                var e = this;
                ((this.loading = !0),
                  this.datacontext
                    .validate()
                    .then(
                      function () {
                        var t, i;
                        if (e.model.getPermits())
                          ((e.currentBalance =
                            null === (t = e.model.selected.permitMedia) ||
                            void 0 === t
                              ? void 0
                              : t.Balance),
                            (e.unitFormat =
                              null === (i = e.model.selected.permit) ||
                              void 0 === i
                                ? void 0
                                : i.UnitFormat));
                        else {
                          var n = e.model.getSinglePermitMedia();
                          ((e.currentBalance = n.Balance),
                            (e.unitFormat = n.Permit.UnitFormat));
                        }
                        e.menuService.create();
                      },
                      function () {
                        e.isLoggedIn = !1;
                      },
                    )
                    .finally(function () {
                      e.loading = !1;
                    }));
              }),
              (e.prototype.$onChanges = function (e) {
                var t = this;
                if (e.result.currentValue) {
                  ((this.isSuccess = "success" === e.result.currentValue),
                    this.getData());
                  var i = this.storageService.session.get("reference");
                  if (i) {
                    this.storageService.session.set("reference", "");
                    var n = i.split(";");
                    this.datacontext.checkPayment(n[0], n[1], n[2]).then(
                      function (e) {
                        t.checkResult = e;
                      },
                      function (e) {
                        t.error = e;
                      },
                    );
                  }
                }
              }),
              (e.$inject = [
                "datacontext",
                "locationService",
                "menuService",
                "model",
                "storageService",
              ]),
              e
            );
          })();
        ((t.CpPayComponent = {
          controller: a,
          template: n,
          bindings: { result: "<" },
        }),
          r.module("app").component("pay", t.CpPayComponent));
      },
      7307: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RequestInterceptor = t.SessionExpirationService = void 0));
        var n = i(7025),
          r = (function () {
            function e(e, t, i, n, r, a) {
              var o = this;
              ((this.$timeout = e),
                (this.$interval = t),
                (this.$uibModal = i),
                (this.datacontext = n),
                (this.locationService = r),
                (this.menuService = a),
                (this.expireInMinutes = 15),
                (this.notifyInMinutes = 2),
                (this.counter = 60 * this.notifyInMinutes),
                (this.now = function () {
                  return new Date().getTime();
                }),
                (this.expirationTime = function () {
                  return new Date(
                    new Date().getTime() + 6e4 * o.expireInMinutes,
                  ).getTime();
                }),
                (this.sessionExpirationTime = this.expirationTime()));
            }
            return (
              (e.prototype.countDown = function () {
                var e = this;
                (this.modal(),
                  (this.interval = this.$interval(function () {
                    (e.counter--,
                      (e.counter < 0 || e.sessionExpirationTime < e.now()) &&
                        (e.cancel(),
                        e.modalInstance
                          ? e.modalInstance.close()
                          : e.logout()));
                  }, 1e3)));
              }),
              (e.prototype.reset = function () {
                var e = this;
                (this.cancel(),
                  (this.sessionExpirationTime = this.expirationTime()),
                  (this.counter = 60 * this.notifyInMinutes),
                  (this.timeout = this.$timeout(
                    function () {
                      e.countDown();
                    },
                    6e4 * (this.expireInMinutes - this.notifyInMinutes),
                  )));
              }),
              (e.prototype.prolong = function () {
                this.datacontext.info();
              }),
              (e.prototype.cancel = function () {
                (null != this.timeout && this.$timeout.cancel(this.timeout),
                  null != this.interval &&
                    this.$interval.cancel(this.interval));
              }),
              (e.prototype.logout = function () {
                var e = this;
                this.datacontext.logout().finally(function () {
                  (e.cancel(),
                    e.menuService.clear(),
                    e.locationService.toLogin());
                });
              }),
              (e.prototype.modal = function () {
                var e = this;
                ((this.modalInstance = this.$uibModal.open({
                  component: "sessionModal",
                  resolve: {
                    counter: function () {
                      return 60 * e.notifyInMinutes;
                    },
                  },
                })),
                  this.modalInstance.result
                    .then(function (t) {
                      t ? (e.reset(), e.prolong()) : e.logout();
                    })
                    .catch(function () {
                      e.logout();
                    }));
              }),
              (e.$inject = [
                "$timeout",
                "$interval",
                "$uibModal",
                "datacontext",
                "locationService",
                "menuService",
              ]),
              e
            );
          })();
        t.SessionExpirationService = r;
        var a = (function () {
          function e(e) {
            var t = this;
            ((this.$injector = e),
              (this.request = function (e) {
                var i = t.$injector.get("$location"),
                  n = t.$injector.get("sessionExpirationTimer");
                return -1 !== e.url.indexOf("/api/login") || "/" === i.path()
                  ? (n.cancel(), e)
                  : (-1 !== e.url.indexOf("uib/template/modal/window.html") ||
                      n.reset(),
                    e);
              }));
          }
          return ((e.$inject = ["$injector"]), e);
        })();
        ((t.RequestInterceptor = a),
          n
            .module("app")
            .service("sessionExpirationTimer", r)
            .service("requestInterceptor", a));
      },
      7499: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          r = i(5093);
        n.module("app")
          .directive("ngEnter", function () {
            return function (e, t, i) {
              t.bind("keydown keypress", function (t) {
                13 === t.which &&
                  (e.$apply(function () {
                    e.$eval(i.ngEnter, { event: t });
                  }),
                  t.preventDefault());
              });
            };
          })
          .directive("toggleShow", [
            "$timeout",
            function (e) {
              return {
                restrict: "AC",
                scope: { vm: "=toggleShow" },
                link(t, i) {
                  (t.vm || (t.vm = { show: !1 }),
                    (t.vm.toggle = function () {
                      (e(function () {
                        i[0].scrollIntoView();
                      }, 400),
                        (t.vm.show = !t.vm.show));
                    }));
                },
              };
            },
          ])
          .directive("sort", [
            "$compile",
            function (e) {
              return {
                restrict: "AC",
                scope: { vm: "=sort" },
                link(t, i, r) {
                  (t.vm || (t.vm = { column: null, reverse: !1 }),
                    n.isDefined(r.sortDefault) &&
                      ((t.vm.column = r.sortColumn),
                      (t.vm.reverse = "desc" === r.sortDefault)));
                  var a = n.element(
                    `<span class="sorticon glyphicon" ng-show="vm.column=='${r.sortColumn}'" ng-class="{'glyphicon-triangle-bottom': vm.reverse, 'glyphicon-triangle-top': !vm.reverse}"></span>`,
                  );
                  (i.append(e(a)(t)),
                    i.on("click", function () {
                      t.$apply(function () {
                        t.vm.column !== r.sortColumn
                          ? ((t.vm.column = r.sortColumn), (t.vm.reverse = !1))
                          : (t.vm.reverse = !t.vm.reverse);
                      });
                    }));
                },
              };
            },
          ])
          .directive("flowInfo", [
            "datacontext",
            function (e) {
              return {
                restrict: "E",
                scope: {
                  context: "=",
                  content: "=",
                  noShowWhenEmpty: "=",
                  notEntireContext: "=",
                },
                template:
                  '<span ng-hide="loading" ng-bind-html="flowInfoHtml"></span>',
                replace: !0,
                link(t) {
                  ((t.flowInfoHtml = ""),
                    (t.loading = !0),
                    e
                      .getFlowInfo(
                        t.context,
                        t.notEntireContext ? t.content : null,
                      )
                      .then(function (e) {
                        var i = "string" == typeof e;
                        null == e || (!i && null == e[t.content])
                          ? t.noShowWhenEmpty ||
                            ((t.flowInfoHtml = `${t.context}_${t.content}`),
                            (t.loading = !1))
                          : ((t.flowInfoHtml = i ? e : e[t.content]),
                            (t.loading = !1));
                      }));
                },
              };
            },
          ])
          .directive("localFormat", [
            "unitsService",
            function (e) {
              return {
                priority: 1,
                restrict: "A",
                require: "ngModel",
                scope: { localFormat: "=localFormat" },
                link(t, i, n, r) {
                  var a,
                    o = {};
                  (i.on("keyup mouseup", function () {
                    ((o.start = i[0].selectionStart),
                      (o.end = i[0].selectionEnd),
                      (o.direction = i[0].selectionDirection));
                  }),
                    r.$formatters.push(function (i) {
                      return (a = e.formatInput(i, t.localFormat));
                    }),
                    r.$parsers.push(function (n) {
                      return e.validateInput(n, t.localFormat)
                        ? ((a = n), e.parseInput(n, t.localFormat))
                        : (r.$setViewValue(a),
                          r.$render(),
                          i[0].setSelectionRange(o.start, o.end, o.direction),
                          r.$modelValue);
                    }));
                },
              };
            },
          ])
          .directive("reservationChart", function () {
            return {
              restrict: "E",
              scope: { config: "=" },
              template: i(2152),
              replace: !1,
              link(e) {
                function t(e, t) {
                  return t < 50 ? (e ? 75 : 50) : 100 * (1 - (e ? 5 : 25) / t);
                }
                ((e.config.updateReservationSize = function () {
                  if (
                    null != this.reservation.end &&
                    this.reservation.blocks.length > 0
                  ) {
                    ((this.reservation.offsetLeft =
                      (100 *
                        r(this.reservation.start).diff(
                          r(this.reservation.blocks[0].validFrom),
                          "minutes",
                        )) /
                      this.reservation.totalBlockMinutes),
                      (this.reservation.width =
                        (100 *
                          r(this.reservation.end).diff(
                            r(this.reservation.start),
                            "minutes",
                          )) /
                        this.reservation.totalBlockMinutes),
                      (this.reservation.units = this.reservation.startTariff),
                      (this.reservation.includesFreeBlocks = !1));
                    var e = r(this.reservation.start),
                      i = r(this.reservation.end);
                    this.reservation.wholeDay && (e = e.startOf("day"));
                    for (var n = 0; n < this.reservation.blocks.length; n++) {
                      var a = this.reservation.blocks[n],
                        o = r(a.validFrom).startOf("minute"),
                        s = r(a.validUntil).startOf("minute");
                      (!a.isFree &&
                        (void 0 === this.reservation.notFreeSmallest ||
                          this.reservation.notFreeSmallest >
                            this.reservation.blocks[n].width) &&
                        (this.reservation.notFreeSmallest =
                          this.reservation.blocks[n].width),
                        e >= o && i <= s
                          ? a.isFree
                            ? (this.reservation.includesFreeBlocks = !0)
                            : (this.reservation.units += Math.ceil(
                                (a.units * r(i).diff(r(e), "seconds")) /
                                  a.seconds,
                              ))
                          : e >= o && e < s
                            ? a.isFree
                              ? (this.reservation.includesFreeBlocks = !0)
                              : (this.reservation.units += Math.ceil(
                                  (a.units *
                                    r(a.validUntil).diff(r(e), "seconds")) /
                                    a.seconds,
                                ))
                            : i > o && i <= s
                              ? a.isFree
                                ? (this.reservation.includesFreeBlocks = !0)
                                : (this.reservation.units += Math.ceil(
                                    (a.units *
                                      r(i).diff(r(a.validFrom), "seconds")) /
                                      a.seconds,
                                  ))
                              : o > e &&
                                s < i &&
                                (a.isFree
                                  ? (this.reservation.includesFreeBlocks = !0)
                                  : (this.reservation.units += Math.ceil(
                                      (a.units *
                                        r(a.validUntil).diff(
                                          r(a.validFrom),
                                          "seconds",
                                        )) /
                                        a.seconds,
                                    ))));
                    }
                    (void 0 === this.reservation.notFreeSmallest &&
                      (this.reservation.notFreeSmallest =
                        this.reservation.width),
                      this.updateScale());
                    var l = i.diff(e),
                      u = i.diff(r());
                    ((this.reservation.minutesTotal = l / 6e4),
                      (this.reservation.minutesLeft = u / 6e4),
                      (this.reservation.warningPercentage = t(
                        !1,
                        this.reservation.minutesTotal,
                      )),
                      (this.reservation.endPercentage = t(
                        !0,
                        this.reservation.minutesTotal,
                      )));
                  }
                }),
                  (e.config.updateInnerWidth = function (e) {
                    ((this.reservation.innerWidth = e), this.updateScale());
                  }),
                  (e.config.updateScale = function () {
                    if (this.reservation.blocks.length > 0) {
                      var e = 80 * this.reservation.blocks.length;
                      if (void 0 === this.reservation.innerWidth) return;
                      this.reservation.scale = Math.max(
                        (100 * this.reservation.notFreeSmallest) /
                          this.reservation.innerWidth,
                        100,
                      );
                      var t =
                        (this.reservation.width *
                          ((this.reservation.innerWidth *
                            this.reservation.scale) /
                            100)) /
                        100;
                      t <= 0 && (t = 100);
                      var i =
                        (this.reservation.notFreeSmallest *
                          ((this.reservation.innerWidth *
                            this.reservation.scale) /
                            100)) /
                        100;
                      if (this.reservation.started)
                        t < this.reservation.innerWidth / 1.5
                          ? (this.reservation.scale =
                              (100 * this.reservation.innerWidth) / 1.5 / t)
                          : (this.reservation.scale = Math.max(
                              (100 * e) / this.reservation.innerWidth,
                              100,
                            ));
                      else {
                        var n = Math.min(t, i, this.reservation.innerWidth);
                        n < 100 &&
                          (this.reservation.scale = Math.max(1e4 / n, 100));
                      }
                      this.reservation.tooSmall = !(
                        (this.reservation.width *
                          ((this.reservation.innerWidth *
                            this.reservation.scale) /
                            100)) /
                          100 >=
                        75
                      );
                    }
                  }),
                  (e.config.updateTimeInfo = function () {
                    if (
                      null != this.reservation &&
                      this.reservation.blocks.length > 0 &&
                      null != this.reservation.end
                    ) {
                      ((this.reservation.dateNow = r()),
                        (this.reservation.nowOffset =
                          (100 *
                            this.reservation.dateNow.diff(
                              r(this.reservation.blocks[0].validFrom),
                              "seconds",
                            )) /
                          (60 * this.reservation.totalBlockMinutes)));
                      var e = r(this.reservation.end).diff(
                        this.reservation.dateNow,
                      );
                      if (
                        ((this.reservation.minutesLeft = e / 6e4),
                        void 0 === this.reservation.innerWidth)
                      ) {
                        var t = document.getElementById("reservation-chart");
                        null != t &&
                          0 !== t.offsetWidth &&
                          this.updateInnerWidth(t.offsetWidth);
                      }
                      (this.updateReservationStage(),
                        this.updateScrollToTime());
                    }
                  }),
                  (e.config.updateReservationStage = function () {
                    if (this.reservation.started) {
                      var e =
                        (100 *
                          (this.reservation.minutesTotal -
                            this.reservation.minutesLeft)) /
                        this.reservation.minutesTotal;
                      ((this.reservation.waiting = !0),
                        e < 0
                          ? (this.reservation.stage = 0)
                          : e <= this.reservation.warningPercentage
                            ? 1 !== this.reservation.stage &&
                              ((this.reservation.stage = 1), this.updateScale())
                            : e <= this.reservation.endPercentage
                              ? (this.reservation.stage = 2)
                              : e <= 100
                                ? (this.reservation.stage = 3)
                                : e > 100 &&
                                  ((this.reservation.stage = 4),
                                  (this.reservation.waiting = !1)));
                    } else
                      ((this.reservation.stage = 0),
                        (this.reservation.waiting = !0));
                  }),
                  (e.config.updateReservationTimeInfo = function () {
                    (this.updateReservationInfo(),
                      this.updateScrollToTime(),
                      this.updateReservationStage());
                  }),
                  (e.config.updateReservationInfo = function () {
                    this.reservation.dateNow = r();
                    var e,
                      t,
                      i = r(this.reservation.start),
                      n = r(this.reservation.end);
                    this.reservation.wholeDay && (i = i.startOf("day"));
                    var a = -1,
                      o = -1;
                    if (0 !== this.reservation.blocks.length) {
                      var s =
                        this.reservation.blocks.length > 1
                          ? this.reservation.blocks.length - 2
                          : 0;
                      if (
                        r(this.reservation.blocks[0].validFrom).startOf(
                          "minute",
                        ) <= i &&
                        r(this.reservation.blocks[0].validUntil).startOf(
                          "minute",
                        ) > i &&
                        r(this.reservation.blocks[s].validFrom).startOf(
                          "minute",
                        ) <= n &&
                        r(this.reservation.blocks[s].validUntil).startOf(
                          "minute",
                        ) >= n
                      )
                        return void this.updateReservationSize();
                    }
                    ((this.reservation.blocks.length = 0),
                      (this.reservation.totalBlockMinutes = 0),
                      r(this.reservation.dateNow).isBefore(
                        r(this.reservation.start),
                      ) && (i = r(this.reservation.dateNow).startOf("minute")));
                    for (let s = 0; s < this.blockTimes.length; s++) {
                      var l = this.blockTimes[s];
                      ((e = r(l.ValidFrom).startOf("minute")),
                        (t = r(l.ValidUntil).startOf("minute")),
                        (this.blockTimes[s].Active = !1),
                        i >= e && i < t && (this.blockTimes[s].Active = !0),
                        n > e &&
                          n <= t &&
                          ((this.blockTimes[s].Active = !0),
                          (o = ((a = this.blockTimes[s].DayOfWeek) + 1) % 7)),
                        e > i && t < n && (this.blockTimes[s].Active = !0),
                        a >= 0 &&
                          this.blockTimes[s].DayOfWeek === a &&
                          (this.blockTimes[s].Active = !0),
                        o >= 0 &&
                          this.blockTimes[s].DayOfWeek === o &&
                          ((this.blockTimes[s].Active = !0),
                          (o = -1),
                          (a = -1)),
                        this.blockTimes[s].Active &&
                          ((this.reservation.totalBlockMinutes += r(
                            l.ValidUntil,
                          ).diff(r(l.ValidFrom), "minutes")),
                          this.reservation.blocks.push({
                            validFrom: l.ValidFrom,
                            validUntil: l.ValidUntil,
                            showStartOfDay:
                              0 === this.reservation.blocks.length ||
                              0 ===
                                r(l.ValidFrom).diff(
                                  r(l.ValidFrom).startOf("day"),
                                  "minutes",
                                ),
                            isDefined: l.IsDefined,
                            isAllowed: l.IsAllowed,
                            isFree: l.IsFree,
                            isException: l.IsException,
                            units: l.Units,
                            seconds: l.Seconds,
                            unit: l.IsFree
                              ? null
                              : l.Units *
                                l.Seconds *
                                r(l.ValidUntil).diff(r(l.ValidFrom), "minutes"),
                          })));
                    }
                    for (let e = 0; e < this.reservation.blocks.length; e++)
                      this.reservation.blocks[e].width =
                        (r(this.reservation.blocks[e].validUntil).diff(
                          r(this.reservation.blocks[e].validFrom),
                          "minutes",
                        ) /
                          this.reservation.totalBlockMinutes) *
                        100;
                    (this.updateReservationSize(), this.updateTimeInfo());
                  }),
                  (e.config.updateScrollToStart = function () {
                    if (0 === this.reservation.stage) {
                      var e = document.getElementById("reservation-chart");
                      if (null !== e) {
                        var t =
                          (e.scrollWidth * this.reservation.offsetLeft) / 100;
                        e.scrollLeft = t - e.clientWidth / 3;
                      }
                    }
                  }),
                  (e.config.updateScrollToEnd = function () {
                    if (0 === this.reservation.stage) {
                      var e = document.getElementById("reservation-chart");
                      if (null !== e) {
                        var t =
                          (e.scrollWidth *
                            (this.reservation.offsetLeft +
                              this.reservation.width)) /
                          100;
                        e.scrollLeft = t - e.clientWidth + 80;
                      }
                    }
                  }),
                  (e.config.updateScrollToTime = function () {
                    if (0 !== this.reservation.stage) {
                      var e = document.getElementById("reservation-chart");
                      if (null !== e) {
                        var t = e.clientWidth / 2,
                          i =
                            (e.scrollWidth * this.reservation.nowOffset) / 100;
                        (e.scrollLeft < i - t || e.scrollLeft >= i) &&
                          (e.scrollLeft = i - t);
                      }
                    }
                  }));
              },
            };
          });
      },
      7530: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("help", [
              "$scope",
              "model",
              function (e, t) {
                var i = this;
                ((i.showPermits = !1),
                  (i.showPermitMedias = !1),
                  (i.showAddReservation = !1),
                  (i.showPermitMediaUpgrade = !1),
                  (i.showActiveReservations = !1),
                  (i.showHistory = !1),
                  e.validate(function () {
                    ((i.showPermits = null != t.getPermits()),
                      (i.showPermitMedias = null != t.selected.permit),
                      (i.showAddReservation = null != t.selected.permitMedia),
                      null != t.selected.permitMedia &&
                        ((i.showPermitMediaUpgrade =
                          null != t.selected.permitMedia.Permit.UnitPrice &&
                          null != t.selected.permitMedia.Permit.UpgradeUnits &&
                          null != t.selected.permitMedia.Balance),
                        (i.showActiveReservations =
                          null != t.selected.permitMedia.ActiveReservations),
                        (i.showHistory =
                          null != t.selected.permitMedia.History)),
                      (i.showPrivacy = t.showPrivacyInfo()));
                  }));
              },
            ]));
      },
      7736: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          r = i(5093);
        n.module("app").controller("active", [
          "$scope",
          "$interval",
          "$window",
          "$timeout",
          "datacontext",
          "locationService",
          "model",
          "alertService",
          "unitsService",
          function (e, t, i, a, o, s, l, u, c) {
            var d,
              p,
              m = this;
            function h() {
              var i = s.getParam("id"),
                o = s.getParam("resID");
              if (
                ((m.permitMedia = l.selectPermitMedia(i)),
                null != m.permitMedia)
              ) {
                if (
                  ((m.activeReservation = null),
                  null != m.permitMedia.ActiveReservations &&
                    m.permitMedia.ActiveReservations.length > 0)
                )
                  for (
                    var c = 0;
                    c < m.permitMedia.ActiveReservations.length;
                    c++
                  )
                    if (
                      m.permitMedia.ActiveReservations[c].ReservationID ===
                      parseInt(o, 10)
                    ) {
                      ((m.activeReservation =
                        m.permitMedia.ActiveReservations[c]),
                        (m.showTime =
                          m.permitMedia.Permit.PresentationDateTimeWithTime),
                        (m.showStart =
                          !m.permitMedia.Permit.PresentationDateFromHide),
                        (m.showEnd =
                          !m.permitMedia.Permit.PresentationDateUntilHide),
                        (m.showStop =
                          m.permitMedia.Permit.PresentationDateUntilVariable),
                        (m.showProlongPlus =
                          !m.permitMedia.RestrictedProlongReservationIDs.includes(
                            m.activeReservation.ReservationID,
                          )),
                        (m.activeReservation.ValidFrom = r(
                          m.activeReservation.ValidFrom,
                        )),
                        (m.reservation.start = m.activeReservation.ValidFrom),
                        m.activeReservation.ValidUntil &&
                          ((m.activeReservation.ValidUntil = r(
                            m.activeReservation.ValidUntil,
                          )),
                          (m.reservation.end =
                            m.activeReservation.ValidUntil)));
                      for (
                        var h = 0;
                        h < m.permitMedia.Permit.BlockTimes.length;
                        h++
                      ) {
                        var f = m.permitMedia.Permit.BlockTimes[h];
                        ((m.permitMedia.Permit.BlockTimes[h].ShowStartOfDay =
                          0 === h ||
                          0 ===
                            r(f.ValidFrom).diff(
                              r(f.ValidFrom).startOf("day"),
                              "minutes",
                            )),
                          f.IsFree ||
                            (m.permitMedia.Permit.BlockTimes[h].Unit =
                              f.Units * f.Seconds));
                      }
                      ((m.resChartConfig.blockTimes =
                        m.permitMedia.Permit.BlockTimes),
                        (m.resChartConfig.reservation = m.reservation),
                        (m.resChartConfig.reservation.blocks = []),
                        (m.resChartConfig.reservation.scale = 100),
                        (m.resChartConfig.reservation.wholeDay =
                          m.permitMedia.Permit.ReservationDateUntilWholeDay),
                        (m.resChartConfig.reservation.balance =
                          m.permitMedia.Balance),
                        (m.resChartConfig.reservation.startTariff =
                          m.permitMedia.Permit.StartTariff),
                        (m.resChartConfig.reservation.started = !0),
                        (m.resChartConfig.reservation.waiting =
                          null == m.reservation.end ||
                          !0 ===
                            m.permitMedia.Permit.ReservationDateUntilInfinite),
                        (m.resChartConfig.reservation.showTime = m.showTime),
                        (m.resChartConfig.reservation.innerWidth =
                          window.screen.width),
                        e.$watch(
                          "vm.resChartConfig.updateReservationTimeInfo",
                          function () {
                            "function" ==
                              typeof m.resChartConfig.updateReservationInfo &&
                              (n.isDefined(d) ||
                                ((d = t(function () {
                                  m.resChartConfig.updateTimeInfo();
                                }, 1e3)),
                                (p = t(function () {
                                  m.resChartConfig.updateReservationTimeInfo();
                                }, 6e4)),
                                e.$on("$destroy", function () {
                                  (n.isDefined(d) &&
                                    (t.cancel(d), (d = void 0)),
                                    n.isDefined(p) &&
                                      (t.cancel(p), (p = void 0)));
                                }),
                                m.resChartConfig.updateReservationInfo(),
                                m.resChartConfig.updateTimeInfo(),
                                (m.showMin =
                                  m.reservation.minutesTotal >
                                    m.permitMedia.Permit.ProlongMinutes &&
                                  m.reservation.minutesLeft >
                                    m.permitMedia.Permit.ProlongMinutes),
                                a(g, 100, !1)));
                          },
                        ),
                        "function" ==
                          typeof m.resChartConfig.updateReservationInfo &&
                          m.resChartConfig.updateReservationInfo(),
                        (m.showMin =
                          m.reservation.minutesTotal >
                            m.permitMedia.Permit.ProlongMinutes &&
                          m.reservation.minutesLeft >
                            m.permitMedia.Permit.ProlongMinutes),
                        a(g, 100, !1));
                      break;
                    }
                m.activeReservation ||
                  u.set("Geen actieve reservering gevonden");
              } else u.set("Geen pas gevonden");
            }
            function f(e) {
              m.isBusy ||
                ((m.isBusy = !0),
                o
                  .prolongReservation(
                    e,
                    m.activeReservation.ReservationID,
                    m.permitMedia.TypeID,
                    m.permitMedia.Code,
                  )
                  .then(function () {
                    (h(),
                      u.add("De eindtijd is bijgewerkt", "success"),
                      (m.isBusy = !1));
                  })
                  .catch(function (e) {
                    (u.add(e), (m.isBusy = !1));
                  }),
                (m.showMin =
                  m.reservation.minutesTotal >
                    m.permitMedia.Permit.ProlongMinutes &&
                  m.reservation.minutesLeft >
                    m.permitMedia.Permit.ProlongMinutes));
            }
            function g() {
              "function" == typeof m.resChartConfig.updateScrollToStart &&
                m.resChartConfig.updateScrollToStart();
            }
            ((m.isBusy = !1),
              (m.resChartConfig = {}),
              (m.reservation = {}),
              (m.permitMedia = null),
              (m.endReservation = function (e) {
                m.isBusy ||
                  ((m.isBusy = !0),
                  o
                    .endReservation(e, m.permitMedia.TypeID, m.permitMedia.Code)
                    .then(function () {
                      (s.toAdd(m.permitMedia.Code), (m.isBusy = !1));
                    })
                    .catch(function (e) {
                      (u.add(e), (m.isBusy = !1));
                    }));
              }),
              (m.format = c.format),
              (m.showMin = !1),
              (m.min = function () {
                m.showMin
                  ? f(-1 * m.permitMedia.Permit.ProlongMinutes)
                  : u.add("Eindtijd voor de huidige of begintijd!");
              }),
              (m.showEnd = !0),
              (m.showFrom = !0),
              (m.showTime = !0),
              (m.showStop = !1),
              (m.showProlongPlus = !0),
              (m.plus = function () {
                f(m.permitMedia.Permit.ProlongMinutes);
              }),
              (m.percent = 0),
              e.validate(h),
              n.element(i).bind("resize", function () {
                if ("function" == typeof m.resChartConfig.updateInnerWidth) {
                  var e = document.getElementById("reservation-chart");
                  null != e && m.resChartConfig.updateInnerWidth(e.offsetWidth);
                }
              }));
          },
        ]);
      },
      7764: (e, t, i) => {
        "use strict";
        var n = i(7025);
        function r(e, t, i, n) {
          ((this.currencyFilter = e),
            (this.numberFilter = t),
            (this.groupSeparator = "\\" + i),
            (this.decimalSeparator = "\\" + n),
            (this.format = Object.freeze({
              Euros: 0,
              Weeks: 1,
              Days: 2,
              Hours: 3,
              Minutes: 4,
              Credits: 5,
              Units: 6,
            })));
        }
        ((r.prototype = {
          toDisplay: function (e, t) {
            function i(t, i, n, r, a) {
              var o = n(r, i);
              if (o.isCurrency)
                return ((t.units = a(e / o.base, o.sign, o.decimals)), !1);
              var s = Math.floor(t.value / o.base);
              if (0 !== s || (1 === o.base && !t.units)) {
                t.value %= o.base;
                var l =
                  (t.units || t.value) && o.abbreviation
                    ? o.abbreviation
                    : 1 !== s && o.plural
                      ? o.plural
                      : o.singular;
                t.units = (t.units ? t.units + " " : "") + s + " " + l;
              }
              return 1 !== o.base;
            }
            if (null == e) return null;
            for (
              var n = { value: e, units: null };
              i(n, t, this.formatInfo, this.format, this.currencyFilter);
            )
              t++;
            return n.units;
          },
          validateInput: function (e, t) {
            return (
              !e ||
              !e.match(
                RegExp(
                  "[^\\d" +
                    this.groupSeparator +
                    (1 !== this.formatInfo(this.format, t).base
                      ? this.decimalSeparator
                      : "") +
                    "]",
                ),
              )
            );
          },
          formatInput: function (e, t) {
            if (!e) return null;
            var i = this.formatInfo(this.format, t).base;
            return this.numberFilter(e / i);
          },
          parseInput: function (e, t) {
            if (!e) return null;
            var i = this.formatInfo(this.format, t).base;
            if (
              (e = e.replace(
                RegExp(
                  "(\\d{1,3})" + this.groupSeparator + "(?=\\d{3}(\\D|$))",
                  "g",
                ),
                "$1",
              )).match(RegExp(this.groupSeparator))
            )
              return null;
            var n = Number(e.replace(RegExp(this.decimalSeparator), "."));
            return !n || n < 0 ? null : Math.round(n * i);
          },
          isCurrency: function (e, t) {
            var i = this.formatInfo(this.format, e);
            return i.isCurrency && i.base * t === 1;
          },
          formatInfo: function (e, t) {
            switch (t) {
              case e.Euros:
                return {
                  base: 100,
                  singular: "euro",
                  plural: "euro's",
                  isCurrency: !0,
                  sign: "€",
                  decimals: 2,
                  upgradeUnitFormat: "eurocenten",
                };
              case e.Weeks:
                return {
                  base: 10080,
                  singular: "week",
                  plural: "weken",
                  abbreviation: "wk",
                  upgradeUnitFormat: "minuten",
                };
              case e.Days:
                return {
                  base: 1440,
                  singular: "dag",
                  plural: "dagen",
                  upgradeUnitFormat: "minuten",
                };
              case e.Hours:
                return {
                  base: 60,
                  singular: "uur",
                  plural: "uren",
                  upgradeUnitFormat: "minuten",
                };
              case e.Minutes:
                return {
                  base: 1,
                  singular: "minuut",
                  plural: "minuten",
                  abbreviation: "min",
                  upgradeUnitFormat: "minuten",
                };
              case e.Credits:
                return {
                  base: 1,
                  singular: "credit",
                  plural: "credits",
                  abbreviation: "cred",
                  upgradeUnitFormat: "credits",
                };
              case e.Units:
              default:
                return {
                  base: 1,
                  singular: "eenheid",
                  plural: "eenheden",
                  abbreviation: "eenh",
                  upgradeUnitFormat: "eenheden",
                };
            }
          },
        }),
          n.module("app").factory("unitsService", [
            "currencyFilter",
            "numberFilter",
            "$locale",
            function (e, t, i) {
              var n = new r(
                e,
                t,
                i.NUMBER_FORMATS.GROUP_SEP,
                i.NUMBER_FORMATS.DECIMAL_SEP,
              );
              return (
                Object.defineProperty(n, "format", {
                  value: n.format,
                  writable: !1,
                  configurable: !1,
                }),
                n
              );
            },
          ]));
      },
      7873: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025);
        n.module("app").factory("storageService", [
          "$window",
          function (e) {
            var t = {};
            return (
              Object.defineProperty(t, "local", {
                value: new i("local"),
                writable: !1,
                configurable: !1,
              }),
              Object.defineProperty(t, "session", {
                value: new i("session"),
                writable: !1,
                configurable: !1,
              }),
              t
            );
            function i(t) {
              var i = e[`${t}Storage`],
                r = {
                  isSupported: function () {
                    try {
                      if (i) {
                        var e = Math.floor(
                          Math.random() * Math.pow(2, 53),
                        ).toString();
                        i.setItem(e, e);
                        var t = i.getItem(e) === e;
                        return (i.removeItem(e), t);
                      }
                    } catch (e) {}
                    return !1;
                  },
                  set: function (e, t) {
                    try {
                      return (
                        t ? i.setItem(e, n.toJson(t)) : i.removeItem(e),
                        !0
                      );
                    } catch (e) {}
                    return !1;
                  },
                  get: function (e) {
                    try {
                      var t = i.getItem(e);
                      return (t && (t = n.fromJson(t)), t);
                    } catch (e) {}
                    return null;
                  },
                  key: function (e) {
                    try {
                      return i.key(e);
                    } catch (e) {}
                    return null;
                  },
                  clear: function () {
                    try {
                      i.clear();
                    } catch (e) {}
                  },
                };
              return (
                Object.defineProperty(r, "length", {
                  get: function () {
                    try {
                      return i.length;
                    } catch (e) {}
                    return 0;
                  },
                  configurable: !1,
                }),
                r
              );
            }
          },
        ]);
      },
      8187: (e, t, i) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = i(7025),
          r = i(5093);
        !(function () {
          var e = {};
          window && Object.assign(e, window.__env);
          var t = n.module("app", [
            "ngAria",
            "ngMessages",
            "ngRoute",
            "ngSanitize",
            "ui.bootstrap",
            "loadingBar",
          ]);
          (t.config([
            "$routeProvider",
            "$locationProvider",
            "$httpProvider",
            function (t, n, a) {
              (a.interceptors.push("authInterceptor"),
                e.apiURL &&
                  "api/" === e.apiURL &&
                  a.interceptors.push("requestInterceptor"),
                n.html5Mode(!0),
                t
                  .when("/", { template: "<login></login>", title: "Login" })
                  .when("/sso", { template: "<sso></sso>", title: "Login" })
                  .when("/sso/:id", { template: "<sso></sso>", title: "Login" })
                  .when("/permit", {
                    template: i(3618),
                    title: "Productenoverzicht",
                  })
                  .when("/permit/:id", {
                    template: i(5706),
                    title: "Passenoverzicht",
                  })
                  .when("/permitmedia/:id/upgrade", {
                    template: i(574),
                    title: "Saldo opwaarderen",
                  })
                  .when("/permitmedia/:id/active", {
                    template: i(4424),
                    title: "Actieve reserveringen",
                  })
                  .when("/permitmedia/:id/active/:resID", {
                    template: i(136),
                    title: "Actieve reservering",
                  })
                  .when("/permitmedia/:id/add", {
                    template: i(3834),
                    title: "Kenteken aanmelden",
                  })
                  .when("/permitmedia/:id/history", {
                    template: "<history></history>",
                    title: "Geschiedenis",
                  })
                  .when("/help", { template: i(8290), title: "Help" })
                  .when("/privacy", { template: i(4378), title: "Privacy" })
                  .when("/pay/:id", {
                    template: '<pay result="id"></pay>',
                    title: "Betalen",
                    controller: [
                      "$scope",
                      "$routeParams",
                      function (e, t) {
                        e.id = t.id;
                      },
                    ],
                  })
                  .otherwise({ redirectTo: "/" }),
                r.locale("nl"));
            },
          ]),
            t.run([
              "$rootScope",
              "$route",
              function (e, t) {
                e.$on("$routeChangeSuccess", function (i, n, r) {
                  n !== r && (e.title = t.current.title);
                });
              },
            ]),
            t.constant("BASE_CONFIG", { baseURL: e.apiURL }));
        })();
      },
      8259: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("locationService", [
              "$route",
              "$location",
              function (e, t) {
                var i = {
                  toLocation: function (e, t) {
                    i[`to${e}`].apply(null, t);
                  },
                  isLocation: function (e) {
                    return i[`is${e}`].apply(null);
                  },
                  getParam: function (t) {
                    var i = e.current.params[t];
                    return i ? i.replace("&#x2F", "/") : null;
                  },
                  toActivePages: r,
                  isActivePages: function () {
                    return i.isActiveList() || i.isActive();
                  },
                  toPermitsPages: function (e) {
                    1 === e.length ? a(e[0]) : i.toPermits();
                  },
                  toPermitPages: a,
                  toPermitMediaPages: o,
                };
                return (
                  n("Login", "/"),
                  n("Permits", "/permit"),
                  n("Permit", "/permit/:id"),
                  n("Upgrade", "/permitmedia/:id/upgrade"),
                  n("Add", "/permitmedia/:id/add"),
                  n("ActiveList", "/permitmedia/:id/active"),
                  n("Active", "/permitmedia/:id/active/:resID"),
                  n("History", "/permitmedia/:id/history"),
                  n("Help", "/help"),
                  n("Privacy", "/privacy"),
                  n("SSO", "/sso/:id"),
                  i
                );
                function n(n, r) {
                  ((i[`to${n}`] = function () {
                    !(function (i, n) {
                      for (
                        var r = e.routes[i],
                          a = r.originalPath,
                          o = r.regexp.exec(a),
                          s = 1;
                        s < o.length;
                        s++
                      )
                        a = a.replace(
                          o[s],
                          s <= n.length && n[s - 1]
                            ? n[s - 1].toString().replace("/", "&#x2F")
                            : "",
                        );
                      t.path(a.replace("//", "/"));
                    })(r, arguments);
                  }),
                    (i[`is${n}`] = function () {
                      return (function (t) {
                        return e.current.regexp.test(t);
                      })(r);
                    }));
                }
                function r(e) {
                  null != e.ActiveReservations &&
                  1 === e.ActiveReservations.length
                    ? i.toActive(e.Code, e.ActiveReservations[0].ReservationID)
                    : i.toActiveList(e.Code);
                }
                function a(e) {
                  1 === e.PermitMedias.length
                    ? o(e.PermitMedias[0])
                    : i.toPermit(e.Code);
                }
                function o(e) {
                  null != e.ActiveReservations &&
                  e.ActiveReservations.length > 0
                    ? r(e)
                    : i.toAdd(e.Code);
                }
              },
            ]));
      },
      8654: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("upgrade", [
              "$scope",
              "$timeout",
              "datacontext",
              "locationService",
              "model",
              "alertService",
              "unitsService",
              function (e, t, i, n, r, a, o) {
                var s = this,
                  l = !1,
                  u = !1;
                function c() {
                  s.permitMedia &&
                    i
                      .isUpgradeAllowed(
                        s.permitMedia.TypeID,
                        s.permitMedia.Code,
                      )
                      .then(function (e) {
                        t(
                          null != e
                            ? () => {
                                ((s.isUpgradeAllowed = e.IsAllowed),
                                  (s.validFrom = e.ValidFrom),
                                  (s.amount = e.Amount),
                                  s.isUpgradeAllowed
                                    ? (s.permitMedia.UpgradePending = null)
                                    : t(c, 6e4, !1));
                              }
                            : () => {
                                s.isUpgradeAllowed = !1;
                              },
                        );
                      })
                      .catch(function (e) {
                        a.add(e);
                      });
                }
                ((s.permitMedia = null),
                  (s.upgradeUnits = {}),
                  (s.possibleUnits = {}),
                  (s.canUpgrade = !1),
                  (s.isUpgradeAllowed = !1),
                  (s.amount = 0),
                  (s.upgrade = function () {
                    if (!l) {
                      if (
                        ((l = !0),
                        (function () {
                          var t,
                            i = ["units"];
                          for (t in i)
                            Object.prototype.hasOwnProperty.call(i, t) &&
                              ((e.upgradeForm[i[t]].$invalid = !1),
                              (e.upgradeForm[i[t]].$error = {}));
                        })(),
                        !s.upgradeUnits.value)
                      )
                        return (
                          (e.upgradeForm.units.$invalid = !0),
                          void (e.upgradeForm.units.$error.upgrade = `Selecteer eerst het aantal ${s.upgradeUnits.upgradeUnitFormat} waarmee u wilt opwaarderen.`)
                        );
                      i.upgradePermitMedia(
                        s.permitMedia.TypeID,
                        s.permitMedia.Code,
                        s.upgradeUnits.value,
                        s.upgradeUnits.customerInvoiceReference,
                      ).catch(function (e) {
                        (a.add(e), (l = !1));
                      });
                    }
                  }),
                  (s.setUpgradeUnit = function (e) {
                    ((s.upgradeUnits.value = e),
                      (null !== e || s.possibleUnits.show) && (u = !1));
                  }),
                  (s.toggle = function (e) {
                    "upgradeUnits" === e && (u = !u);
                  }),
                  (s.show = function (e) {
                    if ("upgradeUnits" === e) return u;
                  }),
                  e.validate(function () {
                    var e = n.getParam("id");
                    ((s.upgradeUnits.value = null),
                      (s.possibleUnits.show = !1),
                      (s.canUpgrade = !1),
                      (s.permitMedia = r.selectPermitMedia(e)),
                      s.permitMedia
                        ? ((s.balance = s.permitMedia.Balance),
                          (s.upgradeUnits.text = o.formatInfo(
                            o.format,
                            s.permitMedia.Permit.UnitFormat,
                          ).plural),
                          (s.upgradeUnits.upgradeUnitFormat = o.formatInfo(
                            o.format,
                            s.permitMedia.Permit.UnitFormat,
                          ).upgradeUnitFormat),
                          (s.reservations = 0),
                          s.permitMedia.ActiveReservations &&
                            s.permitMedia.ActiveReservations.forEach(
                              function (e) {
                                s.reservations += e.Units;
                              },
                            ),
                          null != s.permitMedia.Permit.UnitPrice &&
                          null != s.permitMedia.Permit.UpgradeUnits &&
                          s.permitMedia.Permit.UpgradeUnits.length > 0
                            ? ((s.showPrice = !o.isCurrency(
                                s.permitMedia.Permit.UnitFormat,
                                s.permitMedia.Permit.UnitPrice,
                              )),
                              1 === s.permitMedia.Permit.UpgradeUnits.length &&
                                ((s.upgradeUnits.value =
                                  s.permitMedia.Permit.UpgradeUnits[0]),
                                (s.possibleUnits.show =
                                  null === s.upgradeUnits.value)),
                              null != s.permitMedia.Balance
                                ? (s.canUpgrade = !0)
                                : a.set("Geen saldo informatie gevonden"),
                              t(c, 500, !1))
                            : a.set("Geen opwaardeer informatie gevonden"))
                        : a.set("Geen pas gevonden"));
                  }));
              },
            ]));
      },
      8822: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("login", {
              template: i(5102),
              controller: [
                "$q",
                "datacontext",
                "model",
                "storageService",
                "locationService",
                "alertService",
                function (e, t, i, n, r, a) {
                  var o = this;
                  ((o.loginData = null),
                    (o.loginMethod = null),
                    (o.requiresOtp = !1),
                    (o.isSso = !1),
                    (o.$onInit = function () {
                      (i.selectPermit(null),
                        t.info().then(
                          (e) => {
                            "ok" === e
                              ? t
                                  .validate()
                                  .then(() => {
                                    const e = i.getPermits();
                                    e
                                      ? r.toPermitsPages(e)
                                      : r.toPermitMediaPages(
                                          i.getSinglePermitMedia(),
                                        );
                                  })
                                  .catch(function (e) {
                                    a.set(e);
                                  })
                              : "sso" === e &&
                                ((o.asToken = !0),
                                t
                                  .startUp()
                                  .then(function (e) {
                                    ((o.loginData = e),
                                      (o.loginMethod =
                                        o.loginData.LoginMethods[
                                          o.loginData.DefaultLoginMethod
                                        ]),
                                      o.clearFields());
                                  })
                                  .catch(function (e) {
                                    a.set(e);
                                  }));
                          },
                          () => {
                            t.startUp()
                              .then(function (e) {
                                ((o.loginData = e),
                                  (o.loginMethod =
                                    o.loginData.LoginMethods[
                                      o.loginData.DefaultLoginMethod
                                    ]),
                                  o.clearFields());
                              })
                              .catch(function (e) {
                                a.set(e);
                              });
                          },
                        ));
                    }),
                    (o.activeTab = function (e) {
                      return e === o.loginMethod;
                    }),
                    (o.onTab = function (e) {
                      ((o.loginMethod = e), o.clearFields());
                    }),
                    (o.clearFields = function () {
                      ((o.permitMediaType = null),
                        (o.requiresOtp = !1),
                        (o.identifier = null),
                        (o.password = null),
                        (o.rememberCredentials = !1));
                    }),
                    (o.login = function (a) {
                      var o = e.defer();
                      return (
                        t
                          .login(
                            a.loginMethod,
                            a.identifier,
                            a.password,
                            null,
                            a.resetCode,
                            a.permitMediaTypeID,
                            a.asIdentifier,
                            a.zipCode,
                          )
                          .then(
                            function () {
                              const e = i.getPermits();
                              (e
                                ? r.toPermitsPages(e)
                                : r.toPermitMediaPages(
                                    i.getSinglePermitMedia(),
                                  ),
                                o.resolve());
                            },
                            function (e) {
                              (n.session.set("Name"), o.reject(e));
                            },
                          ),
                        o.promise
                      );
                    }),
                    (o.loginUser = function (s) {
                      var l = e.defer();
                      return (
                        "CallCenter" === s.loginMethod &&
                          t
                            .login("UserAs", s.identifier, s.password, s.otp)
                            .then(
                              function () {
                                (n.session.set("asToken", i.token),
                                  (o.asToken = o.asToken ?? i.token),
                                  (o.name = i.name),
                                  r.toLogin(),
                                  l.resolve({ token: i.token, name: i.name }));
                              },
                              function (e) {
                                o.requiresOtp || e.requiresOtp
                                  ? (a.add(e),
                                    r.toLogin(),
                                    l.resolve({ requiresOtp: e.requiresOtp }))
                                  : (a.add(e), r.toLogin(), l.reject());
                              },
                            ),
                        "SingleSignOn" === s.loginMethod &&
                          t.login("UserAs").then(function () {
                            l.resolve({});
                          }),
                        l.promise
                      );
                    }),
                    (o.logout = function (e) {
                      t.logoutAs(e).then(
                        function () {
                          r.toSSO();
                        },
                        function () {
                          r.toSSO();
                        },
                      );
                    }),
                    (o.buttonText = function (e) {
                      return null != o.loginData.FlowInfos[e]
                        ? o.loginData.FlowInfos[e]
                        : e;
                    }));
                },
              ],
            }));
      },
      9698: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("permit", [
              "$scope",
              "model",
              "datacontext",
              "locationService",
              "alertService",
              function (e, t, i, n, r) {
                var a = this;
                ((a.permitMediaTable = { show: !1 }),
                  (a.licensePlateTable = { show: !1 }),
                  (a.licensePlates = null),
                  (a.updateLicensePlate = { reference: null }),
                  (a.toPermitMediaPages = function (e) {
                    n.toPermitMediaPages(e);
                  }),
                  e.validate(function () {
                    var e = n.getParam("id");
                    ((a.permit = t.selectPermit(e)),
                      null != a.permit
                        ? (null != a.permit.PermitMedias &&
                          a.permit.PermitMedias.length > 0
                            ? ((a.permitMediaTable.show = !0),
                              (a.balance = 0),
                              a.permit.PermitMedias.forEach(function (e) {
                                ((a.balance += e.Balance),
                                  (a.unitFormat = e.Permit.UnitFormat));
                              }))
                            : r.set(
                                "Er is geen geldige media gekoppeld aan dit product",
                              ),
                          a.permit.LicensePlates &&
                            !a.permit.IsLicensePlatesFixed &&
                            ((a.licensePlates = a.permit.LicensePlates.slice()),
                            (a.licensePlateTable.show =
                              null != a.licensePlates &&
                              a.licensePlates.length > 0)))
                        : r.set("Product niet gevonden"));
                  }),
                  (a.addLicensePlate = function () {
                    a.updateLicensePlate.reference && a.undoLicensePlate();
                    var e = {};
                    (a.licensePlates.unshift(e), a.editLicensePlate(e));
                  }),
                  (a.editLicensePlate = function (e) {
                    (a.updateLicensePlate.reference && a.undoLicensePlate(),
                      (a.updateLicensePlate.reference = e),
                      (a.updateLicensePlate.Value = e.Value),
                      (a.updateLicensePlate.Name = e.Name),
                      (a.updateLicensePlate.isNew = !e.Value));
                  }),
                  (a.deleteLicensePlate = function (e) {
                    i.deletePermitLicensePlate(a.permit.Code, e.Value, e.Name)
                      .then(function () {
                        for (var t = 0; t < a.licensePlates.length; t++)
                          if (a.licensePlates[t].Value === e.Value)
                            return (
                              a.licensePlates.splice(t, 1),
                              void a.permit.LicensePlates.splice(t, 1)
                            );
                      })
                      .catch(function (e) {
                        r.add(e);
                      });
                  }),
                  (a.undoLicensePlate = function () {
                    ((a.updateLicensePlate.reference = null),
                      a.updateLicensePlate.isNew &&
                        a.licensePlates.splice(0, 1));
                  }),
                  (a.saveLicensePlate = function () {
                    if (
                      ((function () {
                        var t,
                          i = ["licensePlate"];
                        for (t in i)
                          Object.prototype.hasOwnProperty.call(i, t) &&
                            ((e.permitForm[i[t]].$invalid = !1),
                            (e.permitForm[i[t]].$error = {}));
                      })(),
                      !a.updateLicensePlate.Value)
                    )
                      return (
                        (e.permitForm.licensePlate.$invalid = !0),
                        void (e.permitForm.licensePlate.$error.save =
                          "Kenteken is niet opgegeven")
                      );
                    var t = a.updateLicensePlate.reference;
                    i.upsertPermitLicensePlate(
                      a.permit.Code,
                      a.updateLicensePlate,
                      t.Value,
                    )
                      .then(function (e) {
                        for (var i in e.LicensePlate)
                          Object.prototype.hasOwnProperty.call(
                            e.LicensePlate,
                            i,
                          ) && (t[i] = e.LicensePlate[i]);
                        ((a.updateLicensePlate.reference = null),
                          a.updateLicensePlate.isNew &&
                            a.permit.LicensePlates.unshift(t),
                          a.permit.PermitMedias.forEach(function (e) {
                            for (var i = 0; i < e.LicensePlates.length; )
                              e.LicensePlates[i].Value === t.Value
                                ? e.LicensePlates.splice(i, 1)
                                : ++i;
                          }));
                      })
                      .catch(function (t) {
                        t.code
                          ? ((e.permitForm.licensePlate.$invalid = !0),
                            (e.permitForm.licensePlate.$error.save = t.message))
                          : r.add(t);
                      });
                  }));
              },
            ]));
      },
      9802: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("payment", function () {
              return {
                open: function (e) {
                  var t = document.createElement("form");
                  for (var i in (t.setAttribute("method", "post"),
                  t.setAttribute("action", e.Url),
                  e.Pairs))
                    if (Object.prototype.hasOwnProperty.call(e.Pairs, i)) {
                      var n = document.createElement("input");
                      (n.setAttribute("type", "hidden"),
                        n.setAttribute("name", i),
                        n.setAttribute("value", e.Pairs[i]),
                        t.appendChild(n));
                    }
                  (document.body.appendChild(t), t.submit());
                },
              };
            }));
      },
    },
    i = {};
  function n(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var a = (i[e] = { id: e, loaded: !1, exports: {} });
    return (t[e].call(a.exports, a, a.exports, n), (a.loaded = !0), a.exports);
  }
  ((n.m = t),
    (e = []),
    (n.O = (t, i, r, a) => {
      if (!i) {
        var o = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [i, r, a] = e[c], s = !0, l = 0; l < i.length; l++)
            (!1 & a || o >= a) && Object.keys(n.O).every((e) => n.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((s = !1), a < o && (o = a));
          if (s) {
            e.splice(c--, 1);
            var u = r();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      a = a || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
      e[c] = [i, r, a];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (n.d(t, { a: t }), t);
    }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = { 884: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var r,
            a,
            [o, s, l] = i,
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in s) n.o(s, r) && (n.m[r] = s[r]);
            if (l) var c = l(n);
          }
          for (t && t(i); u < o.length; u++)
            ((a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
          return n.O(c);
        },
        i = (globalThis.webpackChunkcitypermit =
          globalThis.webpackChunkcitypermit || []);
      (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
    })());
  var r = n.O(void 0, [96, 624], () => n(6024));
  r = n.O(r);
})();
