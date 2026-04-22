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
                var a = this;
                ((a.permitMedia = null),
                  (a.toActivePage = function (e) {
                    t.toActive(a.permitMedia.Code, e);
                  }),
                  e.validate(function () {
                    var e = t.getParam("id");
                    ((a.permitMedia = i.selectPermitMedia(e)),
                      null != a.permitMedia
                        ? (null != a.permitMedia.ActiveReservations &&
                            0 !== a.permitMedia.ActiveReservations.length) ||
                          n.set("Geen actieve reserveringen gevonden")
                        : n.set("Geen pas gevonden"));
                  }));
              },
            ]));
      },
      136: (e) => {
        e.exports =
          '<div ng-controller="active as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Actieve reservering</h1> </section> <section class="extra-bottom-small" ng-show="(vm.permitMedia != null) && (vm.activeReservation != null)"> <div class="row"> <div class="col-xs-12"> <div class="activeContainer"> <div class="text-center"> <span class="licensePlateBig" aria-label="Kenteken">{{vm.activeReservation.LicensePlate.DisplayValue}}</span> </div> <div> <reservation-chart config="vm.resChartConfig"></reservation-chart> <div class="chart-info"> <span class="sub" ng-hide="vm.permitMedia.Balance == null">Af te boeken saldo {{vm.activeReservation.Units | localformat: vm.permitMedia.Permit.UnitFormat}}</span> </div> </div> <div class="clearfix" ng-show="vm.showEnd || vm.showStart"> <div class="chart-block"> <label class="label" id="fromDateTime">Van</label><br/> <span class="text" ng-show="vm.showTime && vm.showStart" aria-labelledby="fromDateTime">{{vm.activeReservation.ValidFrom | localmoment: \'HH:mm\'}}</span><br/> <span class="sub" ng-show="vm.showStart" aria-labelledby="fromDateTime">{{vm.activeReservation.ValidFrom | localmoment: \'DD-MM-YYYY\'}}</span> </div> <div class="chart-block"> <span class="label" ng-show="vm.activeReservation.ValidUntil" id="toDateTime">Tot</span><br/> <span class="text" ng-show="vm.activeReservation.ValidUntil && vm.showTime && vm.showEnd" aria-labelledby="toDateTime">{{vm.activeReservation.ValidUntil | localmoment: \'HH:mm\'}}</span><br/> <span class="sub" ng-show="vm.activeReservation.ValidUntil && vm.showEnd" aria-labelledby="toDateTime">{{vm.activeReservation.ValidUntil | localmoment: \'DD-MM-YYYY\'}}</span> </div> </div> <div class="triptych" ng-hide="!vm.reservation.waiting || !vm.permitMedia.Permit.ProlongMinutes"> <div class="triptych-1"> <button class="btn btn-primary" ng-click="vm.min()" ng-show="vm.showMin" aria-label="Tijdsduur verminderen met {{vm.permitMedia.Permit.ProlongMinutes | localformat: vm.format.Hours}}"> <span class="glyphicon glyphicon-minus"></span> {{vm.permitMedia.Permit.ProlongMinutes | localformat: vm.format.Hours}} </button> </div> <div class="triptych-2 hidden-xs"> Tijdsduur aanpassen </div> <div class="triptych-3"> <button class="btn btn-primary" ng-click="vm.plus()" ng-show="vm.showProlongPlus" aria-label="Tijdsduur verlengen met {{vm.permitMedia.Permit.ProlongMinutes | localformat: vm.format.Hours}}"> <span class="glyphicon glyphicon-plus"></span> {{vm.permitMedia.Permit.ProlongMinutes | localformat: vm.format.Hours}} </button> </div> </div> </div> <div class="extra-top-small" ng-hide="!vm.reservation.waiting || !vm.showStop"> <button id="btnEndReservation" class="btn btn-primary btn-block" ng-click="vm.endReservation(vm.activeReservation.ReservationID)">Afmelden Kenteken</button> </div> </div> </div> </section> </div>';
      },
      182: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          a = i(5093);
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
                var i = a.tz(e, "Europe/Amsterdam");
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
      574: (e) => {
        e.exports =
          '<div ng-controller="upgrade as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Saldo opwaarderen</h1> </section> <form name="upgradeForm" class="extra-bottom-small" ng-show="(vm.permitMedia != null)"> <div class="extra-bottom" ng-show="(vm.permitMedia.Permit.UpgradeUnits.length > 1) || vm.possibleUnits.show" ng-class="{ \'has-error\' : upgradeForm.units.$invalid }"> <div class="row"> <div class="col-xs-12" ng-show="vm.permitMedia.Permit.UpgradeUnits.length > 1"> <label id="lblChooseUpgradeUnits">Kies een opwaardeereenheid</label> <div ng-repeat="unit in vm.permitMedia.Permit.UpgradeUnits"> <button class="btn btn-upgrade-unit btn-primary" ng-click="unit !== null ? vm.setUpgradeUnit(unit) : vm.toggle(\'upgradeUnits\')"> <div ng-if="unit !== null"> <div>{{unit | localformat: vm.permitMedia.Permit.UnitFormat}}</div> <div ng-if="vm.showPrice">({{unit * vm.permitMedia.Permit.UnitPrice | currency}})</div> </div> <div ng-if="unit === null">Of vul een aantal {{vm.upgradeUnits.upgradeUnitFormat}} in...</div> </button> </div> </div> </div> <div class="form-group" ng-show="vm.show(\'upgradeUnits\')"> <label for="txtUnits">Opwaarderen met {{vm.upgradeUnits.upgradeUnitFormat}}</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-plus-sign"></i> </div> <input type="text" class="form-control" id="txtUnits" name="units" placeholder="Vul een aantal {{vm.upgradeUnits.upgradeUnitFormat}} in" maxlength="13" ng-model="vm.upgradeUnits.value" autocomplete="off"> </div> </div> <div class="form-group"> <label for="txtYourReference">Uw kenmerk</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-comment"></i> </div> <input type="text" class="form-control" id="txtYourReference" name="yourReference" placeholder="Optioneel, vul uw kenmerk in" maxlength="50" ng-model="vm.upgradeUnits.customerInvoiceReference" autocomplete="off"> </div> </div> <div ng-messages="upgradeForm.units.$error"> <span ng-message="upgrade" class="help-block">{{upgradeForm.units.$error.upgrade}}</span> </div> </div> <div class="extra-bottom-small" ng-show="(vm.permitMedia.Permit.BalanceLimit != null) || (vm.permitMedia.RemainingUpgrades != null)"> <div class="row" ng-show="vm.permitMedia.Permit.BalanceLimit != null"> <label id="lblBalanceLimit" class="col-xs-6">Saldolimiet</label> <p class="col-xs-6 text-right no-margin" ng-class="{\'error-limit-exceeded\': (+vm.balance + +vm.reservations + +vm.upgradeUnits.value) > vm.permitMedia.Permit.BalanceLimit}">{{vm.permitMedia.Permit.BalanceLimit | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> <div class="row" ng-show="vm.permitMedia.RemainingUpgrades != null"> <label id="lblRemainingUpgrades" class="col-xs-6">Perioderestant</label> <p class="col-xs-6 text-right no-margin" ng-class="{\'error-limit-exceeded\': vm.upgradeUnits.value > vm.permitMedia.RemainingUpgrades}">{{vm.permitMedia.RemainingUpgrades | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> </div> <div class="row"> <label id="lblCurrentBalance" class="col-xs-6">Huidig saldo</label> <p class="col-xs-6 text-right no-margin">{{vm.balance | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> <div class="row" ng-show="vm.reservations !== 0"> <label id="lblReservedBalance" class="col-xs-6">Gereserveerd saldo</label> <p class="col-xs-6 text-right no-margin">{{vm.reservations | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> <div class="row border-bottom extra-bottom-small"> <label id="lblUpgradeBalanceWith" class="col-xs-6">Opwaarderen met</label> <p class="col-xs-6 text-right no-margin">{{vm.upgradeUnits.value | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> <div class="row extra-bottom"> <label id="lblNewBalance" class="col-xs-6">Nieuw saldo</label> <p class="col-xs-6 text-right no-margin" ng-show="vm.upgradeUnits.value">{{+vm.balance + +vm.reservations + +vm.upgradeUnits.value | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> <div class="warning-upgrade-pending extra-bottom-small" ng-show="(vm.permitMedia.History !== null) && (vm.permitMedia.History.UpgradePending != null)"> <span class="glyphicon glyphicon-alert"></span> Let op: Een opwaardering op {{vm.permitMedia.History.UpgradePending.ValidFrom | localmoment: \'DD-MM-YYYY HH:mm\'}} t.w.v. {{vm.permitMedia.History.UpgradePending.Amount | currency: \'€\': 2}} is nog niet verwerkt. Zodra deze is verwerkt, of uiterlijk na 24 uur, kunt u nogmaals opwaarderen. Nogmaals opwaarderen na 24 uur kan betekenen dat de genoemde opwaardering wordt geannuleerd. </div> <div class="row"> <div class="col-xs-12"> <button id="btnUpgrade" class="btn btn-primary btn-block" ng-click="vm.upgrade()" ng-disabled="!vm.canUpgrade || !vm.isUpgradeAllowed || !vm.upgradeUnits.value"> <div>Opwaarderen</div> <div ng-show="vm.showPrice && (vm.upgradeUnits.value != nul)">({{vm.upgradeUnits.value * vm.permitMedia.Permit.UnitPrice | currency}})</div> </button> </div> </div> </form> </div>';
      },
      851: function (e, t, i) {
        "use strict";
        var n =
          (this && this.__spreadArray) ||
          function (e, t, i) {
            if (i || 2 === arguments.length)
              for (var n, a = 0, r = t.length; a < r; a++)
                (!n && a in t) ||
                  (n || (n = Array.prototype.slice.call(t, 0, a)),
                  (n[a] = t[a]));
            return e.concat(n || Array.prototype.slice.call(t));
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LanguageService = void 0));
        var a = i(7025),
          r = (function () {
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
                var a = this.strings[e];
                return a
                  ? (i.forEach(function (e, i) {
                      a = a.replace("{".concat(i, "}"), t.get(e));
                    }),
                    a)
                  : e;
              }),
              e
            );
          })();
        ((t.LanguageService = r),
          a
            .module("app")
            .service("languageService", r)
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
                  for (var i = [], a = 1; a < arguments.length; a++)
                    i[a - 1] = arguments[a];
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
        };
      },
      960: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("model", [
              "storageService",
              function (e) {
                var t = {},
                  i = {},
                  n = {},
                  a = {
                    setBaseModel: function (a) {
                      if ((e.session.set("reference", ""), a)) {
                        if (
                          (a.Token &&
                            n.token !== a.Token &&
                            ((n.token = a.Token),
                            e.session.set("Token", n.token)),
                          a.Name &&
                            ((n.name = a.Name), e.session.set("Name", a.Name)),
                          a.Configuration &&
                            (t.Configuration = a.Configuration),
                          a.Permits && (t.Permits = a.Permits),
                          a.Permit && t.Permits)
                        )
                          for (var s = 0; s < t.Permits.length; s++)
                            if (null == a.Permit.Code)
                              for (
                                var l = 0;
                                l < t.Permits[s].PermitMedias.length;
                                l++
                              )
                                for (
                                  var c = 0;
                                  c < a.Permit.PermitMedias.length;
                                  c++
                                )
                                  t.Permits[s].PermitMedias[l].Code ===
                                    a.Permit.PermitMedias[c].Code &&
                                    (t.Permits[s].PermitMedias[l] =
                                      a.Permit.PermitMedias[c]);
                            else
                              t.Permits[s].Code === a.Permit.Code &&
                                (t.Permits[s] = a.Permit);
                        (t.Permits &&
                          t.Permits.forEach(function (e) {
                            e.PermitMedias.forEach(function (t) {
                              t.Permit = e;
                            });
                          }),
                          void 0 === n.permit &&
                            (n.permit = e.session.get("Permit")),
                          void 0 === n.permitMedia &&
                            (n.permitMedia = e.session.get("PermitMedia")),
                          r(n.permit),
                          o(n.permitMedia));
                      } else {
                        ((t = {}),
                          (i.permit = null),
                          (i.permitMedia = null),
                          (n.token = null),
                          (n.permit = null),
                          (n.permitMedia = null));
                        var d = e.session.get("asToken"),
                          u = e.session.get("Name");
                        (e.session.clear(),
                          d && e.session.set("asToken", d),
                          u && e.session.set("Name", u));
                      }
                    },
                    getPermits: function () {
                      return t.Permits &&
                        (1 !== t.Permits.length || t.Permits[0].Code)
                        ? t.Permits
                        : null;
                    },
                    selectPermit: r,
                    getSinglePermitMedia: function () {
                      return t.Permits &&
                        t.Permits.length > 0 &&
                        t.Permits[0].PermitMedias.length > 0
                        ? t.Permits[0].PermitMedias[0]
                        : null;
                    },
                    selectPermitMedia: o,
                    showPrivacyInfo: function () {
                      return !(
                        !t.Configuration || !t.Configuration.ShowPrivacyInfo
                      );
                    },
                  };
                return (
                  Object.defineProperty(a, "isValid", {
                    get: () => !!t.Permits,
                    configurable: !1,
                  }),
                  Object.defineProperty(a, "token", {
                    get: () => (
                      void 0 === n.token && (n.token = e.session.get("Token")),
                      n.token
                    ),
                    configurable: !1,
                  }),
                  Object.defineProperty(a, "name", {
                    get: () => (
                      void 0 === n.name && (n.name = e.session.get("Name")),
                      n.name
                    ),
                    configurable: !1,
                  }),
                  Object.defineProperty(a, "selected", {
                    value: i,
                    writable: !1,
                    configurable: !1,
                  }),
                  a
                );
                function r(e) {
                  if (null != e) {
                    if (t.Permits)
                      for (var n = 0; n < t.Permits.length; n++)
                        if (t.Permits[n].Code === e)
                          return (s(t.Permits[n]), i.permit);
                  } else s(null);
                  return null;
                }
                function o(e) {
                  if (null != e) {
                    if (t.Permits)
                      for (var n = 0; n < t.Permits.length; n++)
                        for (
                          var a = 0;
                          a < t.Permits[n].PermitMedias.length;
                          a++
                        )
                          if (t.Permits[n].PermitMedias[a].Code === e)
                            return (
                              l(t.Permits[n].PermitMedias[a]),
                              i.permitMedia
                            );
                  } else l(null);
                  return null;
                }
                function s(t) {
                  (null != i.permitMedia && ((i.permitMedia = null), l(null)),
                    (i.permit = t));
                  var a = t ? t.Code : null;
                  n.permit !== a &&
                    ((n.permit = a), e.session.set("Permit", n.permit));
                }
                function l(t) {
                  (t &&
                    t.Permit.Code &&
                    i.permit !== t.Permit &&
                    ((i.permit = t.Permit), s(i.permit)),
                    (i.permitMedia = t));
                  var a = t ? t.Code : null;
                  n.permitMedia !== a &&
                    ((n.permitMedia = a),
                    e.session.set("PermitMedia", n.permitMedia));
                }
              },
            ]));
      },
      978: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .controller("history", [
              "$scope",
              "model",
              "locationService",
              "alertService",
              "unitsService",
              "datacontext",
              function (e, t, i, n, a, r) {
                var o,
                  s = this,
                  l = !1,
                  c = !1,
                  d = !1;
                ((s.reservations = null),
                  (s.moveBalances = null),
                  (s.upgrades = null),
                  (s.setReservationsPage = function (e) {
                    r.getReservationsHistory(o.TypeID, o.Code, e)
                      .then(function (e) {
                        null != e
                          ? (s.reservations = e)
                          : n.add(
                              "De pagina uit de reservering geschiedenis is niet gevonden",
                            );
                      })
                      .catch(function (e) {
                        n.add(e);
                      });
                  }),
                  (s.setUpgradesPage = function (e) {
                    ((s.loading = !0),
                      r
                        .getUpgradesHistory(o.TypeID, o.Code, e)
                        .then(function (e) {
                          (null != e
                            ? (s.upgrades = e)
                            : n.add(
                                "De pagina uit de opwaardeer geschiedenis is niet gevonden",
                              ),
                            (s.loading = !1));
                        })
                        .catch(function (e) {
                          (n.add(e), (s.loading = !1));
                        }));
                  }),
                  (s.setMoveBalancesPage = function (e) {
                    r.getMoveBalancesHistory(o.TypeID, o.Code, e)
                      .then(function (e) {
                        null != e
                          ? (s.moveBalances = e)
                          : n.add(
                              "De pagina uit de overschrijving geschiedenis is niet gevonden",
                            );
                      })
                      .catch(function (e) {
                        n.add(e);
                      });
                  }),
                  (s.loading = !1),
                  e.validate(function () {
                    var e = i.getParam("id");
                    null != (o = t.selectPermitMedia(e))
                      ? ((s.showPrice = !a.isCurrency(
                          o.Permit.UnitFormat,
                          o.Permit.UnitPrice,
                        )),
                        (s.unitFormat = o.Permit.UnitFormat),
                        null != o.History
                          ? ((s.reservations = o.History.Reservations),
                            (s.upgrades = o.History.Upgrades),
                            (s.moveBalances = o.History.MoveBalances))
                          : n.set("Geen geschiedenis gevonden"))
                      : n.set("Geen pas gevonden");
                  }),
                  (s.toggle = function (e) {
                    switch (e) {
                      case "reservationsHistory":
                        l = !l;
                        break;
                      case "upgradesHistory":
                        c = !c;
                        break;
                      case "moveBalancesHistory":
                        d = !d;
                    }
                  }),
                  (s.show = function (e) {
                    switch (e) {
                      case "reservationsHistory":
                        return l;
                      case "upgradesHistory":
                        return c;
                      case "moveBalancesHistory":
                        return d;
                    }
                  }));
              },
            ]));
      },
      1237: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          a = i(5093);
        n.module("app").controller("add", [
          "$scope",
          "$interval",
          "$window",
          "$timeout",
          "datacontext",
          "locationService",
          "model",
          "alertService",
          function (e, t, i, r, o, s, l, c) {
            var d,
              u,
              p,
              m = this,
              g = !1,
              v = !1,
              h = !1,
              f = !1;
            function b() {
              "function" == typeof m.resChartConfig.updateScrollToStart &&
                m.resChartConfig.updateScrollToStart();
            }
            function y() {
              "function" == typeof m.resChartConfig.updateScrollToEnd &&
                m.resChartConfig.updateScrollToEnd();
            }
            function w() {
              function e(e, t) {
                ((e.isEditable = t),
                  a(e.ValidFrom) <= m.reservation.start &&
                  a(e.ValidUntil) > m.reservation.start
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
                  c.add(m.licensePlatesError));
            }
            function $() {
              var e, t, i, n, r;
              for (
                m.reservation.start < m.reservation.dateNow &&
                  (m.reservation.start = m.reservation.dateNow),
                  r = a(m.reservation.dateNow).startOf("day").add(1, "day"),
                  e = 0;
                e < m.permitMedia.Permit.BlockTimes.length;
                e++
              )
                if (
                  ((t = m.permitMedia.Permit.BlockTimes[e]),
                  (i = a(t.ValidFrom)),
                  (n = a(t.ValidUntil)),
                  t.IsDefined && n > m.reservation.start)
                ) {
                  i >= r || m.reservation.start < i
                    ? (m.reservation.start = i)
                    : m.reservation.dateNow &&
                      (m.reservation.start = m.reservation.dateNow);
                  break;
                }
            }
            function P() {
              var e, t, i, n, r;
              if (m.permitMedia.Permit.ReservationDateUntilWholeDay)
                m.reservation.end = a(m.reservation.start)
                  .startOf("day")
                  .add(1, "day");
              else if (m.permitMedia.Permit.ReservationDateUntilEndOfDay)
                m.reservation.end = a(m.reservation.start)
                  .add(1, "day")
                  .startOf("day");
              else if (m.permitMedia.Permit.ReservationDateUntilAlmostEndOfDay)
                m.reservation.end = a(m.reservation.start)
                  .add(1, "day")
                  .startOf("day")
                  .add(-1, "minutes");
              else if (null != m.permitMedia.Permit.ReservationDuration)
                m.reservation.end = a(m.reservation.start).add(
                  m.permitMedia.Permit.ReservationDuration,
                  "minute",
                );
              else if (
                m.permitMedia.Permit.ReservationDateUntilActualBlock ||
                m.permitMedia.Permit.ReservationDateUntilLastBlockOfDay
              ) {
                for (
                  m.reservation.end = null,
                    e = a(m.reservation.start).startOf("day").add(1, "day"),
                    t = 0;
                  t < m.permitMedia.Permit.BlockTimes.length &&
                  ((i = m.permitMedia.Permit.BlockTimes[t]),
                  (n = a(i.ValidFrom)),
                  (r = a(i.ValidUntil)),
                  !n.isAfter(e) &&
                    (!n.isSame(e) ||
                      (m.reservation.end && m.reservation.end.isSame(e)))) &&
                  (!i.IsDefined ||
                    !r.isAfter(m.reservation.start) ||
                    ((m.reservation.end = r),
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
                (e && m.permitMedia.Permit.ReservationDateFromOnBlock && $(),
                  m.permitMedia.Permit.ReservationDateUntilWholeDay &&
                    (m.reservation.start = a.max(
                      a(m.reservation.start).startOf("day"),
                      m.reservation.dateNow,
                    )),
                  m.reservation.end &&
                    ((t = a(m.reservation.start)),
                    (i = a(m.reservation.end)),
                    (n = a(m.reservation.dateNow).startOf("day").add(1, "day")),
                    (i.isSameOrBefore(t) ||
                      n.isSameOrBefore(i) ||
                      !m.permitMedia.Permit.PresentationDateUntilVariable) &&
                      P()),
                  w(),
                  "function" == typeof m.resChartConfig.updateReservationInfo &&
                    m.resChartConfig.updateReservationInfo(),
                  r(b, 100, !1));
              }),
              (m.onReservationEndChanged = function () {
                var e, t;
                (m.reservation.end &&
                  m.permitMedia.Permit.PresentationDateUntilVariable &&
                  ((e = a(m.reservation.start)),
                  (t = a(m.reservation.end)).isSameOrBefore(
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
                    (m.reservation.start = a.max(e, m.reservation.dateNow)))),
                  "function" == typeof m.resChartConfig.updateReservationInfo &&
                    m.resChartConfig.updateReservationInfo(),
                  r(y, 100, !1));
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
                          w(),
                          void (
                            0 === m.permitMedia.LicensePlates.length &&
                            0 === m.permitMedia.Permit.LicensePlates.length &&
                            (v = !1)
                          )
                        );
                  })
                  .catch(function (e) {
                    c.add(e);
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
                              g ||
                              ((g = !0),
                              o
                                .startReservation(
                                  m.reservation.start
                                    ? a(m.reservation.start)
                                    : null,
                                  m.reservation.end
                                    ? a(m.reservation.end)
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
                                          w();
                                        })
                                        .catch(function (e) {
                                          c.add(e);
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
                                              ? c.add(
                                                  "Uw reservering is succesvol verzonden. Vrij parkeren en gratis bloktijden worden niet afgeschreven van uw tegoed.",
                                                  "success",
                                                )
                                              : c.add(
                                                  "Uw reservering is succesvol verzonden.",
                                                  "success",
                                                )))
                                        : (c.add(
                                            "Geen actieve reservering gevonden.",
                                          ),
                                          (g = !1)));
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
                                      : c.add(t),
                                      (g = !1));
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
                    v = !v;
                    break;
                  case "dateStart":
                    h = !h;
                    break;
                  case "dateEnd":
                    f = !f;
                }
              }),
              (m.show = function (e) {
                switch (e) {
                  case "licensePlates":
                    return v;
                  case "dateStart":
                    return h;
                  case "dateEnd":
                    return f;
                }
              }),
              n.element(i).bind("resize", function () {
                var e;
                "function" == typeof m.resChartConfig.updateInnerWidth &&
                  (e = document.getElementById("reservation-chart")) &&
                  m.resChartConfig.updateInnerWidth(e.offsetWidth);
              }),
              e.$watch("vm.reservation.start", function (e) {
                m.reservationStart = e && a(e).format(p);
              }),
              e.$watch("vm.reservation.end", function (e) {
                m.reservationEnd = e && a(e).format(p);
              }),
              e.validate(function () {
                var i,
                  o,
                  g = s.getParam("id");
                if (
                  ((m.permitMedia = l.selectPermitMedia(g)),
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
                          ? a(
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
                          a(o.ValidFrom).diff(
                            a(o.ValidFrom).startOf("day"),
                            "minutes",
                          )),
                      o.IsFree ||
                        (m.permitMedia.Permit.BlockTimes[i].Unit =
                          o.Units * o.Seconds));
                  ((m.reservation.start = a().seconds(0).milliseconds(0)),
                    m.permitMedia.Permit.ReservationDateFromOnBlock && $(),
                    P(),
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
                          (n.isDefined(d) ||
                            ((d = t(function () {
                              m.resChartConfig.updateTimeInfo();
                            }, 1e3)),
                            (u = t(function () {
                              m.resChartConfig.updateReservationTimeInfo();
                            }, 6e4)),
                            e.$on("$destroy", function () {
                              (n.isDefined(d) && (t.cancel(d), (d = void 0)),
                                n.isDefined(u) && (t.cancel(u), (u = void 0)));
                            })),
                          m.resChartConfig.updateReservationInfo(),
                          r(b, 1e3, !1));
                      },
                    ),
                    "function" ==
                      typeof m.resChartConfig.updateReservationInfo &&
                      m.resChartConfig.updateReservationInfo(),
                    w());
                } else c.set("Geen pas gevonden");
              }));
          },
        ]);
      },
      1254: (e) => {
        e.exports =
          '<div class="page"> <div id="scroller" class="parent-container"> <nav class="main-menu backdrop-height" ng-show="$ctrl.menu.length > 0"> <div class="main-menu-top" ng-show="$ctrl.selected.permit"> <div>Product: {{$ctrl.selected.permit.Code}}</div> <div>Zone: {{$ctrl.selected.permit.ZoneCode}}</div> </div> <div class="main-menu-top" ng-show="$ctrl.selected.permitMedia"> <div>Nummer: {{$ctrl.selected.permitMedia.Code}}</div> <div ng-if="!$ctrl.selected.permit">Zone: {{$ctrl.selected.permitMedia.Permit.ZoneCode}}</div> </div> <div id="mainMenu"> <ul role="menu"> <li role="menuitem" ng-repeat="item in $ctrl.menu | orderBy:\'position\'" class="main-menu-item mouse-hand" ng-class="{active: item.active === true}" ng-click="item.onClick()" tabindex="{{ $ctrl.isMenuOpen ? 0 : -1}}"> <span><i class="glyphicon" ng-class="item.icon"></i>{{item.text}}</span> </li> </ul> </div> </nav> <div class="main-content" ng-class="{\'main-content-open\': $ctrl.isMenuOpen}"> <div class="alerts"> <div ng-repeat="alert in $ctrl.alerts" class="alert alert-dismissible" ng-class="\'alert-\' + alert.type"> <button type="button" class="close" ng-click="alert.close()"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button> <div>{{alert.message}}</div> </div> </div> <div class="main-content-container"> <header id="header" class="row main-content-header"> <div class="col-xs-2"> <div class="btn btn-menu" ng-show="$ctrl.menu.length > 0" ng-click="$ctrl.toggleMenu()" aria-label="Hoofmenu in- of uitklappen" aria-controls="mainMenu" aria-haspopup="true" aria-expanded="{{$ctrl.isMenuOpen}}"> <span class="glyphicon glyphicon-align-justify"></span> </div> </div> <div class="col-xs-8"> <div class="logo"> <div class="logo-img" alt="Bezoekers app logo" role="presentation"></div> </div> </div> <div class="col-xs-2"> </div> </header> <main id="view" data-ng-view></main> </div> </div> </div> </div> ';
      },
      1586: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          a = i(5093);
        !(function () {
          let e = {};
          window && Object.assign(e, window.__env);
          const t = n.module("app", [
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
            function (e, t) {
              (t.html5Mode(!0),
                e
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
                    template: i(3962),
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
                a.locale("nl"));
            },
          ]),
            t.run([
              "$rootScope",
              "$route",
              function (e, t) {
                e.$on("$routeChangeSuccess", function (i, n, a) {
                  n !== a && (e.title = t.current.title);
                });
              },
            ]),
            t.constant("BASE_CONFIG", { baseURL: e.apiURL }));
        })();
      },
      1810: (e) => {
        e.exports = "<div> <h1>Bezig met inloggen...</h1> </div>";
      },
      1856: (e) => {
        e.exports =
          '<nav ng-show="$ctrl.collection.TotalPages > 1"> <ol class="pagination"> <li class="mouse-hand" ng-class="{\'disabled\': $ctrl.collection.Page <= 1}"> <a ng-click="$ctrl.collection.Page > 1 && $ctrl.setPage(1)">&laquo;</a> </li> <li class="mouse-hand" ng-class="{\'disabled\': $ctrl.collection.Page <= 1}"> <a ng-click="$ctrl.collection.Page > 1 && $ctrl.setPage($ctrl.collection.Page - 1)">&lsaquo;</a> </li> <li class="disabled"> <a>Pagina {{$ctrl.collection.Page}} van {{$ctrl.collection.TotalPages}}</a> </li> <li class="mouse-hand" ng-class="{\'disabled\': $ctrl.collection.Page >= $ctrl.collection.TotalPages}"> <a ng-click="$ctrl.collection.Page < $ctrl.collection.TotalPages && $ctrl.setPage($ctrl.collection.Page + 1)">&rsaquo;</a> </li> <li class="mouse-hand" ng-class="{\'disabled\': $ctrl.collection.Page >= $ctrl.collection.TotalPages}"> <a ng-click="$ctrl.collection.Page < $ctrl.collection.TotalPages && $ctrl.setPage($ctrl.collection.TotalPages)">&raquo;</a> </li> </ol> </nav>';
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
              var a = n.has("$animateCss") ? n.get("$animateCss") : null;
              return {
                link: function (n, r, o) {
                  function s(e) {
                    return h
                      ? { width: e.scrollWidth + "px" }
                      : { height: e.scrollHeight + "px" };
                  }
                  function l() {
                    (r.hasClass("collapse") && r.hasClass("in")) ||
                      t.resolve(p(n)).then(function () {
                        (r
                          .removeClass("collapse")
                          .addClass("collapsing")
                          .attr("aria-expanded", !0)
                          .attr("aria-hidden", !1),
                          a
                            ? a(r, {
                                addClass: "in",
                                easing: "ease",
                                css: { overflow: "hidden" },
                                to: s(r[0]),
                              })
                                .start()
                                .finally(c)
                            : e
                                .addClass(r, "in", {
                                  css: { overflow: "hidden" },
                                  to: s(r[0]),
                                })
                                .then(c));
                      }, angular.noop);
                  }
                  function c() {
                    (r.removeClass("collapsing").addClass("collapse").css(f),
                      m(n));
                  }
                  function d() {
                    return r.hasClass("collapse") || r.hasClass("in")
                      ? void t.resolve(g(n)).then(function () {
                          (r
                            .css(s(r[0]))
                            .removeClass("collapse")
                            .addClass("collapsing")
                            .attr("aria-expanded", !1)
                            .attr("aria-hidden", !0),
                            a
                              ? a(r, { removeClass: "in", to: b })
                                  .start()
                                  .finally(u)
                              : e.removeClass(r, "in", { to: b }).then(u));
                        }, angular.noop)
                      : u();
                  }
                  function u() {
                    (r.css(b),
                      r.removeClass("collapsing").addClass("collapse"),
                      v(n));
                  }
                  var p = i(o.expanding),
                    m = i(o.expanded),
                    g = i(o.collapsing),
                    v = i(o.collapsed),
                    h = !1,
                    f = {},
                    b = {};
                  ((h = !!("horizontal" in o))
                    ? ((f = { width: "" }), (b = { width: "0" }))
                    : ((f = { height: "" }), (b = { height: "0" })),
                    n.$eval(o.uibCollapse) ||
                      r
                        .addClass("in")
                        .addClass("collapse")
                        .attr("aria-expanded", !0)
                        .attr("aria-hidden", !1)
                        .css(f),
                    n.$watch(o.uibCollapse, function (e) {
                      e ? d() : l();
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
                  var a =
                    "accordiongroup-" +
                    e.$id +
                    "-" +
                    Math.floor(1e4 * Math.random());
                  ((e.headingId = a + "-tab"), (e.panelId = a + "-panel"));
                },
              };
            })
            .directive("uibAccordionHeading", function () {
              return {
                transclude: !0,
                template: "",
                replace: !0,
                require: "^uibAccordionGroup",
                link: function (e, t, i, n, a) {
                  n.setHeading(a(e, angular.noop));
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
              function (e, t, i, n, a) {
                ((e.closeable = !!i.close),
                  t.addClass("alert"),
                  i.$set("role", "alert"),
                  e.closeable && t.addClass("alert-dismissible"));
                var r = angular.isDefined(i.dismissOnTimeout)
                  ? n(i.dismissOnTimeout)(e.$parent)
                  : null;
                r &&
                  a(
                    function () {
                      e.close();
                    },
                    parseInt(r, 10),
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
                  link: function (t, i, n, a) {
                    var r = a[0],
                      o = a[1],
                      s = e(n.uibUncheckable);
                    (i.find("input").css({ display: "none" }),
                      (o.$render = function () {
                        i.toggleClass(
                          r.activeClass,
                          angular.equals(o.$modelValue, t.$eval(n.uibBtnRadio)),
                        );
                      }),
                      i.on(r.toggleEvent, function () {
                        if (!n.disabled) {
                          var e = i.hasClass(r.activeClass);
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
                  function a() {
                    return r(i.btnCheckboxTrue, !0);
                  }
                  function r(t, i) {
                    return angular.isDefined(t) ? e.$eval(t) : i;
                  }
                  var o = n[0],
                    s = n[1];
                  (t.find("input").css({ display: "none" }),
                    (s.$render = function () {
                      t.toggleClass(
                        o.activeClass,
                        angular.equals(s.$modelValue, a()),
                      );
                    }),
                    t.on(o.toggleEvent, function () {
                      i.disabled ||
                        e.$apply(function () {
                          (s.$setViewValue(
                            t.hasClass(o.activeClass)
                              ? r(i.btnCheckboxFalse, !1)
                              : a(),
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
              function (e, t, i, n, a) {
                function r(e) {
                  for (var t = 0; t < g.length; t++)
                    g[t].slide.active = t === e;
                }
                function o(i, n, o) {
                  if (!f) {
                    if (
                      (angular.extend(i, { direction: o }),
                      angular.extend(g[h].slide || {}, { direction: o }),
                      a.enabled(t) &&
                        !e.$currentTransition &&
                        g[n].element &&
                        m.slides.length > 1)
                    ) {
                      g[n].element.data(v, i.direction);
                      var s = m.getCurrentIndex();
                      (angular.isNumber(s) &&
                        g[s].element &&
                        g[s].element.data(v, i.direction),
                        (e.$currentTransition = !0),
                        a.on("addClass", g[n].element, function (t, i) {
                          "close" === i &&
                            ((e.$currentTransition = null),
                            a.off("addClass", t));
                        }));
                    }
                    ((e.active = i.index), (h = i.index), r(n), c());
                  }
                }
                function s(e) {
                  for (var t = 0; t < g.length; t++)
                    if (g[t].slide === e) return t;
                }
                function l() {
                  u && (i.cancel(u), (u = null));
                }
                function c() {
                  l();
                  var t = +e.interval;
                  !isNaN(t) && t > 0 && (u = i(d, t));
                }
                function d() {
                  var t = +e.interval;
                  p && !isNaN(t) && t > 0 && g.length ? e.next() : e.pause();
                }
                var u,
                  p,
                  m = this,
                  g = (m.slides = e.slides = []),
                  v = "uib-slideDirection",
                  h = e.active,
                  f = !1;
                (t.addClass("carousel"),
                  (m.addSlide = function (t, i) {
                    (g.push({ slide: t, element: i }),
                      g.sort(function (e, t) {
                        return +e.slide.index - +t.slide.index;
                      }),
                      (t.index === e.active ||
                        (1 === g.length && !angular.isNumber(e.active))) &&
                        (e.$currentTransition && (e.$currentTransition = null),
                        (h = t.index),
                        (e.active = t.index),
                        r(h),
                        m.select(g[s(t)]),
                        1 === g.length && e.play()));
                  }),
                  (m.getCurrentIndex = function () {
                    for (var e = 0; e < g.length; e++)
                      if (g[e].slide.index === h) return e;
                  }),
                  (m.next = e.next =
                    function () {
                      var t = (m.getCurrentIndex() + 1) % g.length;
                      return 0 === t && e.noWrap()
                        ? void e.pause()
                        : m.select(g[t], "next");
                    }),
                  (m.prev = e.prev =
                    function () {
                      var t =
                        m.getCurrentIndex() - 1 < 0
                          ? g.length - 1
                          : m.getCurrentIndex() - 1;
                      return e.noWrap() && t === g.length - 1
                        ? void e.pause()
                        : m.select(g[t], "prev");
                    }),
                  (m.removeSlide = function (t) {
                    var i = s(t);
                    (g.splice(i, 1),
                      g.length > 0 && h === i
                        ? i >= g.length
                          ? ((h = g.length - 1),
                            (e.active = h),
                            r(h),
                            m.select(g[g.length - 1]))
                          : ((h = i), (e.active = h), r(h), m.select(g[i]))
                        : h > i && (h--, (e.active = h)),
                      0 === g.length && ((h = null), (e.active = null)));
                  }),
                  (m.select = e.select =
                    function (t, i) {
                      var n = s(t.slide);
                      (void 0 === i &&
                        (i = n > m.getCurrentIndex() ? "next" : "prev"),
                        t.slide.index === h ||
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
                    return e.active === g.length - 1 && e.noWrap();
                  }),
                  (e.pause = function () {
                    e.noPause || ((p = !1), l());
                  }),
                  (e.play = function () {
                    p || ((p = !0), c());
                  }),
                  t.on("mouseenter", e.pause),
                  t.on("mouseleave", e.play),
                  e.$on("$destroy", function () {
                    ((f = !0), l());
                  }),
                  e.$watch("noTransition", function (e) {
                    a.enabled(t, !e);
                  }),
                  e.$watch("interval", c),
                  e.$watchCollection("slides", function (t) {
                    t.length || (e.$currentTransition = null);
                  }),
                  e.$watch("active", function (e) {
                    if (angular.isNumber(e) && h !== e) {
                      for (var t = 0; t < g.length; t++)
                        if (g[t].slide.index === e) {
                          e = t;
                          break;
                        }
                      g[e] && (r(e), m.select(g[e]), (h = e));
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
                  link: function (t, i, n, a) {
                    (i.addClass("item"),
                      a.addSlide(t, i),
                      t.$on("$destroy", function () {
                        a.removeSlide(t);
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
                  beforeAddClass: function (n, a, r) {
                    if ("active" === a) {
                      var o = n.data(i),
                        s = "next" === o ? "left" : "right",
                        l = t.bind(this, n, s + " " + o, r);
                      return (
                        n.addClass(o),
                        e(n, { addClass: s }).start().done(l),
                        function () {}
                      );
                    }
                    r();
                  },
                  beforeRemoveClass: function (n, a, r) {
                    if ("active" === a) {
                      var o = "next" === n.data(i) ? "left" : "right",
                        s = t.bind(this, n, o, r);
                      return (
                        e(n, { addClass: o }).start().done(s),
                        function () {}
                      );
                    }
                    r();
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
              function (e, t, i, n, a) {
                function r(e) {
                  return a(g, { key: e }, !0)[0];
                }
                function o(e) {
                  var t = [],
                    i = e.split(""),
                    a = e.indexOf("'");
                  if (a > -1) {
                    var r = !1;
                    e = e.split("");
                    for (var o = a; o < e.length; o++)
                      r
                        ? ("'" === e[o] &&
                            (o + 1 < e.length && "'" === e[o + 1]
                              ? ((e[o + 1] = "$"), (i[o + 1] = ""))
                              : ((i[o] = ""), (r = !1))),
                          (e[o] = "$"))
                        : "'" === e[o] && ((e[o] = "$"), (i[o] = ""), (r = !0));
                    e = e.join("");
                  }
                  return (
                    angular.forEach(g, function (n) {
                      var a = e.indexOf(n.key);
                      if (a > -1) {
                        ((e = e.split("")),
                          (i[a] = "(" + n.regex + ")"),
                          (e[a] = "$"));
                        for (var r = a + 1, o = a + n.key.length; r < o; r++)
                          ((i[r] = ""), (e[r] = "$"));
                        ((e = e.join("")),
                          t.push({
                            index: a,
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
                  for (var i = e.substr(t), n = 0; n < g.length; n++)
                    if (new RegExp("^" + g[n].key).test(i)) {
                      var a = g[n];
                      return { endIdx: t + a.key.length, parser: a.formatter };
                    }
                  return {
                    endIdx: t + 1,
                    parser: function () {
                      return i.charAt(0);
                    },
                  };
                }
                function c(e) {
                  return parseInt(e, 10);
                }
                function d(e, t) {
                  e = e.replace(/:/g, "");
                  var i = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
                  return isNaN(i) ? t : i;
                }
                function u(e, t) {
                  return (
                    (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t),
                    e
                  );
                }
                function p(e, t, i) {
                  i = i ? -1 : 1;
                  var n = e.getTimezoneOffset();
                  return u(e, i * (d(t, n) - n));
                }
                var m,
                  g,
                  v = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
                ((this.init = function () {
                  ((m = t.id),
                    (this.parsers = {}),
                    (this.formatters = {}),
                    (g = [
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
                            a = t[3];
                          ((this.hours += c(i + n)),
                            (this.minutes += c(i + a)));
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
                      g.push({
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
                    var t = r(e);
                    return (t && t.apply) || null;
                  }),
                  (this.overrideParser = function (e, t) {
                    var i = r(e);
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
                            for (var t, i, n = [], a = 0; a < e.length; )
                              if (angular.isNumber(i)) {
                                if ("'" === e.charAt(a))
                                  (a + 1 >= e.length ||
                                    "'" !== e.charAt(a + 1)) &&
                                    (n.push(s(e, i, a)), (i = null));
                                else if (a === e.length)
                                  for (; i < e.length; )
                                    ((t = l(e, i)), n.push(t), (i = t.endIdx));
                                a++;
                              } else
                                "'" !== e.charAt(a)
                                  ? ((t = l(e, a)),
                                    n.push(t.parser),
                                    (a = t.endIdx))
                                  : ((i = a), a++);
                            return n;
                          })(i)),
                        this.formatters[i].reduce(function (t, i) {
                          return t + i(e);
                        }, ""))
                      : "";
                  }),
                  (this.parse = function (i, n, a) {
                    if (!angular.isString(i) || !n) return i;
                    ((n = (n = t.DATETIME_FORMATS[n] || n).replace(v, "\\$&")),
                      t.id !== m && this.init(),
                      this.parsers[n] || (this.parsers[n] = o(n)));
                    var r = this.parsers[n],
                      s = r.regex,
                      l = r.map,
                      c = i.match(s),
                      d = !1;
                    if (c && c.length) {
                      var u, p;
                      angular.isDate(a) && !isNaN(a.getTime())
                        ? (u = {
                            year: a.getFullYear(),
                            month: a.getMonth(),
                            date: a.getDate(),
                            hours: a.getHours(),
                            minutes: a.getMinutes(),
                            seconds: a.getSeconds(),
                            milliseconds: a.getMilliseconds(),
                          })
                        : (a &&
                            e.warn(
                              "dateparser:",
                              "baseDate is not a valid date",
                            ),
                          (u = {
                            year: 1900,
                            month: 0,
                            date: 1,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                            milliseconds: 0,
                          }));
                      for (var g = 1, h = c.length; g < h; g++) {
                        var f = l[g - 1];
                        ("Z" === f.matcher && (d = !0),
                          f.apply && f.apply.call(u, c[g]));
                      }
                      var b = d
                          ? Date.prototype.setUTCFullYear
                          : Date.prototype.setFullYear,
                        y = d
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
                        })(u.year, u.month, u.date) &&
                          (!angular.isDate(a) || isNaN(a.getTime()) || d
                            ? ((p = new Date(0)),
                              b.call(p, u.year, u.month, u.date),
                              y.call(
                                p,
                                u.hours || 0,
                                u.minutes || 0,
                                u.seconds || 0,
                                u.milliseconds || 0,
                              ))
                            : ((p = new Date(a)),
                              b.call(p, u.year, u.month, u.date),
                              y.call(
                                p,
                                u.hours,
                                u.minutes,
                                u.seconds,
                                u.milliseconds,
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
                  (this.timezoneToOffset = d),
                  (this.addDateMinutes = u),
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
                compile: function (n, a) {
                  function r(t, n) {
                    var a = t.match(i),
                      r = n.$eval(a[1]),
                      o = a[2],
                      s = c[t];
                    if (!s) {
                      var d = function (t) {
                        var i = null;
                        (l.some(function (e) {
                          if (e.scope.$eval(u) === t) return ((i = e), !0);
                        }),
                          s.lastActivated !== i &&
                            (s.lastActivated &&
                              e.removeClass(s.lastActivated.element, r),
                            i && e.addClass(i.element, r),
                            (s.lastActivated = i)));
                      };
                      c[t] = s = {
                        lastActivated: null,
                        scope: n,
                        watchFn: d,
                        compareWithExp: o,
                        watcher: n.$watch(o, d),
                      };
                    }
                    s.watchFn(n.$eval(o));
                  }
                  function o(e) {
                    var t = e.targetScope,
                      i = s.indexOf(t);
                    if ((s.splice(i, 1), l.splice(i, 1), s.length)) {
                      var n = s[0];
                      angular.forEach(c, function (e) {
                        e.scope === t &&
                          ((e.watcher = n.$watch(e.compareWithExp, e.watchFn)),
                          (e.scope = n));
                      });
                    } else c = {};
                  }
                  var s = [],
                    l = [],
                    c = {},
                    d = a.uibIsClass.match(t),
                    u = d[2],
                    p = d[1].split(",");
                  return function (e, t, i) {
                    (s.push(e),
                      l.push({ scope: e, element: t }),
                      p.forEach(function (t, i) {
                        r(t, e);
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
              function (e, t, i, n, a, r, o, s, l, c, d, u) {
                function p(t) {
                  ((e.datepickerMode = t),
                    (e.datepickerOptions.datepickerMode = t));
                }
                var m = this,
                  g = { $setViewValue: angular.noop },
                  v = {},
                  h = [];
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
                          ? a(e.datepickerOptions[t])(e.$parent)
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
                                (r.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7);
                        break;
                      case "maxDate":
                      case "minDate":
                        e.$watch("datepickerOptions." + t, function (e) {
                          (e
                            ? angular.isDate(e)
                              ? (m[t] = u.fromTimezone(
                                  new Date(e),
                                  v.getOption("timezone"),
                                ))
                              : (c &&
                                  o.warn(
                                    "Literal date support has been deprecated, please switch to date object usage",
                                  ),
                                (m[t] = new Date(s(e, "medium"))))
                            : (m[t] = l[t]
                                ? u.fromTimezone(
                                    new Date(l[t]),
                                    v.getOption("timezone"),
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
                    h.push(
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
                    ((v = (function (t) {
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
                    })((g = t))),
                      e.datepickerOptions.initDate
                        ? ((m.activeDate =
                            u.fromTimezone(
                              e.datepickerOptions.initDate,
                              v.getOption("timezone"),
                            ) || new Date()),
                          e.$watch("datepickerOptions.initDate", function (e) {
                            e &&
                              (g.$isEmpty(g.$modelValue) || g.$invalid) &&
                              ((m.activeDate = u.fromTimezone(
                                e,
                                v.getOption("timezone"),
                              )),
                              m.refreshView());
                          }))
                        : (m.activeDate = new Date()));
                    var i = g.$modelValue
                      ? new Date(g.$modelValue)
                      : new Date();
                    ((this.activeDate = isNaN(i)
                      ? u.fromTimezone(new Date(), v.getOption("timezone"))
                      : u.fromTimezone(i, v.getOption("timezone"))),
                      (g.$render = function () {
                        m.render();
                      }));
                  }),
                  (this.render = function () {
                    if (g.$viewValue) {
                      var e = new Date(g.$viewValue);
                      isNaN(e)
                        ? d ||
                          o.error(
                            'Datepicker directive: "ng-model" value must be a Date object',
                          )
                        : (this.activeDate = u.fromTimezone(
                            e,
                            v.getOption("timezone"),
                          ));
                    }
                    this.refreshView();
                  }),
                  (this.refreshView = function () {
                    if (this.element) {
                      ((e.selectedDt = null),
                        this._refreshView(),
                        e.activeDt && (e.activeDateId = e.activeDt.uid));
                      var t = g.$viewValue ? new Date(g.$viewValue) : null;
                      ((t = u.fromTimezone(t, v.getOption("timezone"))),
                        g.$setValidity(
                          "dateDisabled",
                          !t || (this.element && !this.isDisabled(t)),
                        ));
                    }
                  }),
                  (this.createDateObject = function (t, i) {
                    var n = g.$viewValue ? new Date(g.$viewValue) : null;
                    n = u.fromTimezone(n, v.getOption("timezone"));
                    var a = new Date();
                    a = u.fromTimezone(a, v.getOption("timezone"));
                    var r = this.compare(t, a),
                      o = {
                        date: t,
                        label: u.filter(t, i),
                        selected: n && 0 === this.compare(t, n),
                        disabled: this.isDisabled(t),
                        past: r < 0,
                        current: 0 === r,
                        future: r > 0,
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
                      var i = g.$viewValue
                        ? u.fromTimezone(
                            new Date(g.$viewValue),
                            v.getOption("timezone"),
                          )
                        : new Date(0, 0, 0, 0, 0, 0, 0);
                      (i.setFullYear(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate(),
                      ),
                        (i = u.toTimezone(i, v.getOption("timezone"))),
                        g.$setViewValue(i),
                        g.$render());
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
                    for (; h.length; ) h.shift()();
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
                    ? r[t]
                    : 29;
                }
                function a(e) {
                  var t = new Date(e);
                  t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                  var i = t.getTime();
                  return (
                    t.setMonth(0),
                    t.setDate(1),
                    Math.floor(Math.round((i - t) / 864e5) / 7) + 1
                  );
                }
                var r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                ((this.step = { months: 1 }),
                  (this.element = t),
                  (this.init = function (t) {
                    (angular.extend(t, this),
                      (e.showWeeks = t.showWeeks),
                      t.refreshView());
                  }),
                  (this.getDates = function (e, t) {
                    for (
                      var i, n = new Array(t), a = new Date(e), r = 0;
                      r < t;
                    )
                      ((i = new Date(a)),
                        (n[r++] = i),
                        a.setDate(a.getDate() + 1));
                    return n;
                  }),
                  (this._refreshView = function () {
                    var t = this.activeDate.getFullYear(),
                      n = this.activeDate.getMonth(),
                      r = new Date(this.activeDate);
                    r.setFullYear(t, n, 1);
                    var o = this.startingDay - r.getDay(),
                      s = o > 0 ? 7 - o : -o,
                      l = new Date(r);
                    s > 0 && l.setDate(1 - s);
                    for (var c = this.getDates(l, 42), d = 0; d < 42; d++)
                      c[d] = angular.extend(
                        this.createDateObject(c[d], this.formatDay),
                        {
                          secondary: c[d].getMonth() !== n,
                          uid: e.uniqueId + "-" + d,
                        },
                      );
                    e.labels = new Array(7);
                    for (var u = 0; u < 7; u++)
                      e.labels[u] = {
                        abbr: i(c[u].date, this.formatDayHeader),
                        full: i(c[u].date, "EEEE"),
                      };
                    if (
                      ((e.title = i(this.activeDate, this.formatDayTitle)),
                      (e.rows = this.split(c, 7)),
                      e.showWeeks)
                    ) {
                      e.weekNumbers = [];
                      for (
                        var p = (11 - this.startingDay) % 7,
                          m = e.rows.length,
                          g = 0;
                        g < m;
                        g++
                      )
                        e.weekNumbers.push(a(e.rows[g][p].date));
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
                      var a =
                        this.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                      (this.activeDate.setMonth(a, 1),
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
                        a = this.activeDate.getFullYear(),
                        r = 0;
                      r < 12;
                      r++
                    )
                      ((t = new Date(this.activeDate)).setFullYear(a, r, 1),
                        (n[r] = angular.extend(
                          this.createDateObject(t, this.formatMonth),
                          { uid: e.uniqueId + "-" + r },
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
                  return parseInt((e - 1) / r, 10) * r + 1;
                }
                var a, r;
                ((this.element = t),
                  (this.yearpickerInit = function () {
                    ((a = this.yearColumns),
                      (r = this.yearRows * a),
                      (this.step = { years: r }));
                  }),
                  (this._refreshView = function () {
                    for (
                      var t,
                        i = new Array(r),
                        o = 0,
                        s = n(this.activeDate.getFullYear());
                      o < r;
                      o++
                    )
                      ((t = new Date(this.activeDate)).setFullYear(s + o, 0, 1),
                        (i[o] = angular.extend(
                          this.createDateObject(t, this.formatYear),
                          { uid: e.uniqueId + "-" + o },
                        )));
                    ((e.title = [i[0].label, i[r - 1].label].join(" - ")),
                      (e.rows = this.split(i, a)),
                      (e.columns = a));
                  }),
                  (this.compare = function (e, t) {
                    return e.getFullYear() - t.getFullYear();
                  }),
                  (this.handleKeyDown = function (e, t) {
                    var i = this.activeDate.getFullYear();
                    ("left" === e
                      ? (i -= 1)
                      : "up" === e
                        ? (i -= a)
                        : "right" === e
                          ? (i += 1)
                          : "down" === e
                            ? (i += a)
                            : "pageup" === e || "pagedown" === e
                              ? (i += ("pageup" === e ? -1 : 1) * r)
                              : "home" === e
                                ? (i = n(this.activeDate.getFullYear()))
                                : "end" === e &&
                                  (i =
                                    n(this.activeDate.getFullYear()) + r - 1),
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
                  var a = n[0],
                    r = n[1];
                  a.init(r);
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
                  var a = n[0];
                  n[1].init(a);
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
                  var a = n[0];
                  n[1].init(a);
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
                  var a = n[0];
                  (angular.extend(a, n[1]),
                    a.yearpickerInit(),
                    a.refreshView());
                },
              };
            }),
          angular.module("ui.bootstrap.position", []).factory("$uibPosition", [
            "$document",
            "$window",
            function (e, t) {
              var i,
                n,
                a = { normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/ },
                r = {
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
                    var a =
                      (i = this.getRawNode(i)).offsetParent ||
                      e[0].documentElement;
                    a && a !== e[0].documentElement && n(a);
                  )
                    a = a.offsetParent;
                  return a || e[0].documentElement;
                },
                scrollbarWidth: function (a) {
                  if (a) {
                    if (angular.isUndefined(n)) {
                      var r = e.find("body");
                      (r.addClass("uib-position-body-scrollbar-measure"),
                        (n = t.innerWidth - r[0].clientWidth),
                        (n = isFinite(n) ? n : 0),
                        r.removeClass("uib-position-body-scrollbar-measure"));
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
                    a = this.parseStyle(i.paddingBottom),
                    r = this.scrollParent(e, !1, !0),
                    s = this.scrollbarWidth(o.test(r.tagName));
                  return {
                    scrollbarWidth: s,
                    widthOverflow: r.scrollWidth > r.clientWidth,
                    right: n + s,
                    originalRight: n,
                    heightOverflow: r.scrollHeight > r.clientHeight,
                    bottom: a + s,
                    originalBottom: a,
                  };
                },
                isScrollable: function (e, i) {
                  e = this.getRawNode(e);
                  var n = i ? a.hidden : a.normal,
                    r = t.getComputedStyle(e);
                  return n.test(r.overflow + r.overflowY + r.overflowX);
                },
                scrollParent: function (i, n, r) {
                  i = this.getRawNode(i);
                  var o = n ? a.hidden : a.normal,
                    s = e[0].documentElement,
                    l = t.getComputedStyle(i);
                  if (r && o.test(l.overflow + l.overflowY + l.overflowX))
                    return i;
                  var c = "absolute" === l.position,
                    d = i.parentElement || s;
                  if (d === s || "fixed" === l.position) return s;
                  for (; d.parentElement && d !== s; ) {
                    var u = t.getComputedStyle(d);
                    if (
                      (c && "static" !== u.position && (c = !1),
                      !c && o.test(u.overflow + u.overflowY + u.overflowX))
                    )
                      break;
                    d = d.parentElement;
                  }
                  return d;
                },
                position: function (i, n) {
                  i = this.getRawNode(i);
                  var a = this.offset(i);
                  if (n) {
                    var r = t.getComputedStyle(i);
                    ((a.top -= this.parseStyle(r.marginTop)),
                      (a.left -= this.parseStyle(r.marginLeft)));
                  }
                  var o = this.offsetParent(i),
                    s = { top: 0, left: 0 };
                  return (
                    o !== e[0].documentElement &&
                      (((s = this.offset(o)).top += o.clientTop - o.scrollTop),
                      (s.left += o.clientLeft - o.scrollLeft)),
                    {
                      width: Math.round(
                        angular.isNumber(a.width) ? a.width : i.offsetWidth,
                      ),
                      height: Math.round(
                        angular.isNumber(a.height) ? a.height : i.offsetHeight,
                      ),
                      top: Math.round(a.top - s.top),
                      left: Math.round(a.left - s.left),
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
                viewportOffset: function (i, n, a) {
                  a = !1 !== a;
                  var r = (i = this.getRawNode(i)).getBoundingClientRect(),
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
                    a)
                  ) {
                    var c = t.getComputedStyle(s);
                    ((o.top += this.parseStyle(c.paddingTop)),
                      (o.bottom -= this.parseStyle(c.paddingBottom)),
                      (o.left += this.parseStyle(c.paddingLeft)),
                      (o.right -= this.parseStyle(c.paddingRight)));
                  }
                  return {
                    top: Math.round(r.top - o.top),
                    bottom: Math.round(o.bottom - r.bottom),
                    left: Math.round(r.left - o.left),
                    right: Math.round(o.right - r.right),
                  };
                },
                parsePlacement: function (e) {
                  var t = r.auto.test(e);
                  return (
                    t && (e = e.replace(r.auto, "")),
                    ((e = e.split("-"))[0] = e[0] || "top"),
                    r.primary.test(e[0]) || (e[0] = "top"),
                    (e[1] = e[1] || "center"),
                    r.secondary.test(e[1]) || (e[1] = "center"),
                    (e[2] = !!t),
                    e
                  );
                },
                positionElements: function (e, i, n, a) {
                  ((e = this.getRawNode(e)), (i = this.getRawNode(i)));
                  var o = angular.isDefined(i.offsetWidth)
                      ? i.offsetWidth
                      : i.prop("offsetWidth"),
                    s = angular.isDefined(i.offsetHeight)
                      ? i.offsetHeight
                      : i.prop("offsetHeight");
                  n = this.parsePlacement(n);
                  var l = a ? this.offset(e) : this.position(e),
                    c = { top: 0, left: 0, placement: "" };
                  if (n[2]) {
                    var d = this.viewportOffset(e, a),
                      u = t.getComputedStyle(i),
                      p = {
                        width:
                          o +
                          Math.round(
                            Math.abs(
                              this.parseStyle(u.marginLeft) +
                                this.parseStyle(u.marginRight),
                            ),
                          ),
                        height:
                          s +
                          Math.round(
                            Math.abs(
                              this.parseStyle(u.marginTop) +
                                this.parseStyle(u.marginBottom),
                            ),
                          ),
                      };
                    if (
                      ((n[0] =
                        "top" === n[0] &&
                        p.height > d.top &&
                        p.height <= d.bottom
                          ? "bottom"
                          : "bottom" === n[0] &&
                              p.height > d.bottom &&
                              p.height <= d.top
                            ? "top"
                            : "left" === n[0] &&
                                p.width > d.left &&
                                p.width <= d.right
                              ? "right"
                              : "right" === n[0] &&
                                  p.width > d.right &&
                                  p.width <= d.left
                                ? "left"
                                : n[0]),
                      (n[1] =
                        "top" === n[1] &&
                        p.height - l.height > d.bottom &&
                        p.height - l.height <= d.top
                          ? "bottom"
                          : "bottom" === n[1] &&
                              p.height - l.height > d.top &&
                              p.height - l.height <= d.bottom
                            ? "top"
                            : "left" === n[1] &&
                                p.width - l.width > d.right &&
                                p.width - l.width <= d.left
                              ? "right"
                              : "right" === n[1] &&
                                  p.width - l.width > d.left &&
                                  p.width - l.width <= d.right
                                ? "left"
                                : n[1]),
                      "center" === n[1])
                    )
                      if (r.vertical.test(n[0])) {
                        var m = l.width / 2 - o / 2;
                        d.left + m < 0 && p.width - l.width <= d.right
                          ? (n[1] = "left")
                          : d.right + m < 0 &&
                            p.width - l.width <= d.left &&
                            (n[1] = "right");
                      } else {
                        var g = l.height / 2 - p.height / 2;
                        d.top + g < 0 && p.height - l.height <= d.bottom
                          ? (n[1] = "top")
                          : d.bottom + g < 0 &&
                            p.height - l.height <= d.top &&
                            (n[1] = "bottom");
                      }
                  }
                  switch (n[0]) {
                    case "top":
                      c.top = l.top - s;
                      break;
                    case "bottom":
                      c.top = l.top + l.height;
                      break;
                    case "left":
                      c.left = l.left - o;
                      break;
                    case "right":
                      c.left = l.left + l.width;
                  }
                  switch (n[1]) {
                    case "top":
                      c.top = l.top;
                      break;
                    case "bottom":
                      c.top = l.top + l.height - s;
                      break;
                    case "left":
                      c.left = l.left;
                      break;
                    case "right":
                      c.left = l.left + l.width - o;
                      break;
                    case "center":
                      r.vertical.test(n[0])
                        ? (c.left = l.left + l.width / 2 - o / 2)
                        : (c.top = l.top + l.height / 2 - s / 2);
                  }
                  return (
                    (c.top = Math.round(c.top)),
                    (c.left = Math.round(c.left)),
                    (c.placement =
                      "center" === n[1] ? n[0] : n[0] + "-" + n[1]),
                    c
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
                    var a = angular.element(n).hasClass("tooltip-inner"),
                      o = a
                        ? e.querySelector(".tooltip-arrow")
                        : e.querySelector(".arrow");
                    if (o) {
                      var s = { top: "", bottom: "", left: "", right: "" };
                      if ("center" === (i = this.parsePlacement(i))[1])
                        return void angular.element(o).css(s);
                      var l = "border-" + i[0] + "-width",
                        c = t.getComputedStyle(o)[l],
                        d = "border-";
                      ((d += r.vertical.test(i[0])
                        ? i[0] + "-" + i[1]
                        : i[1] + "-" + i[0]),
                        (d += "-radius"));
                      var u = t.getComputedStyle(a ? n : e)[d];
                      switch (i[0]) {
                        case "top":
                          s.bottom = a ? "0" : "-" + c;
                          break;
                        case "bottom":
                          s.top = a ? "0" : "-" + c;
                          break;
                        case "left":
                          s.right = a ? "0" : "-" + c;
                          break;
                        case "right":
                          s.left = a ? "0" : "-" + c;
                      }
                      ((s[i[1]] = u), angular.element(o).css(s));
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
              function (e, t, i, n, a, r, o, s, l, c, d, u, p, m, g, v) {
                function h(t) {
                  var i = u.parse(t, P, e.date);
                  if (isNaN(i))
                    for (var n = 0; n < E.length; n++)
                      if (((i = u.parse(t, E[n], e.date)), !isNaN(i))) return i;
                  return i;
                }
                function f(e) {
                  if ((angular.isNumber(e) && (e = new Date(e)), !e))
                    return null;
                  if (angular.isDate(e) && !isNaN(e)) return e;
                  if (angular.isString(e)) {
                    var t = h(e);
                    if (!isNaN(t))
                      return u.toTimezone(t, F.getOption("timezone"));
                  }
                  return F.getOption("allowInvalid") ? e : void 0;
                }
                function b(e, t) {
                  var n = e || t;
                  return (
                    (!i.ngRequired && !n) ||
                    (angular.isNumber(n) && (n = new Date(n)),
                    !n ||
                      !(!angular.isDate(n) || isNaN(n)) ||
                      (!!angular.isString(n) && !isNaN(h(n))))
                  );
                }
                function y(i) {
                  if (e.isOpen || !e.disabled) {
                    var n = I[0],
                      a = t[0].contains(i.target),
                      r = void 0 !== n.contains && n.contains(i.target);
                    !e.isOpen ||
                      a ||
                      r ||
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
                        I[0].querySelector(".uib-datepicker-popup"),
                      ),
                      a = i.popupPlacement ? i.popupPlacement : p.placement,
                      r = c.positionElements(t, n, a, M);
                    (n.css({ top: r.top + "px", left: r.left + "px" }),
                      n.hasClass("uib-position-measure") &&
                        n.removeClass("uib-position-measure"));
                  }
                }
                var P,
                  k,
                  M,
                  x,
                  D,
                  C,
                  T,
                  O,
                  S,
                  U,
                  F,
                  I,
                  E,
                  L = !1,
                  R = [];
                ((this.init = function (a) {
                  if (
                    ((F = (function (e) {
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
                    })((U = a))),
                    (k = angular.isDefined(i.closeOnDateSelection)
                      ? e.$parent.$eval(i.closeOnDateSelection)
                      : p.closeOnDateSelection),
                    (M = angular.isDefined(i.datepickerAppendToBody)
                      ? e.$parent.$eval(i.datepickerAppendToBody)
                      : p.appendToBody),
                    (x = angular.isDefined(i.onOpenFocus)
                      ? e.$parent.$eval(i.onOpenFocus)
                      : p.onOpenFocus),
                    (D = angular.isDefined(i.datepickerPopupTemplateUrl)
                      ? i.datepickerPopupTemplateUrl
                      : p.datepickerPopupTemplateUrl),
                    (C = angular.isDefined(i.datepickerTemplateUrl)
                      ? i.datepickerTemplateUrl
                      : p.datepickerTemplateUrl),
                    (E = angular.isDefined(i.altInputFormats)
                      ? e.$parent.$eval(i.altInputFormats)
                      : p.altInputFormats),
                    (e.showButtonBar = angular.isDefined(i.showButtonBar)
                      ? e.$parent.$eval(i.showButtonBar)
                      : p.showButtonBar),
                    p.html5Types[i.type]
                      ? ((P = p.html5Types[i.type]), (L = !0))
                      : ((P = i.uibDatepickerPopup || p.datepickerPopup),
                        i.$observe("uibDatepickerPopup", function (e, t) {
                          var i = e || p.datepickerPopup;
                          if (i !== P && ((P = i), (U.$modelValue = null), !P))
                            throw new Error(
                              "uibDatepickerPopup must have a date format specified.",
                            );
                        })),
                    !P)
                  )
                    throw new Error(
                      "uibDatepickerPopup must have a date format specified.",
                    );
                  if (L && i.uibDatepickerPopup)
                    throw new Error(
                      "HTML5 date input types do not support custom formats.",
                    );
                  ((T = angular.element(
                    "<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>",
                  )).attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection(date)",
                    "template-url": D,
                  }),
                    (O = angular.element(T.children()[0])).attr(
                      "template-url",
                      C,
                    ),
                    e.datepickerOptions || (e.datepickerOptions = {}),
                    L &&
                      "month" === i.type &&
                      ((e.datepickerOptions.datepickerMode = "month"),
                      (e.datepickerOptions.minMode = "month")),
                    O.attr("datepicker-options", "datepickerOptions"),
                    L
                      ? U.$formatters.push(function (t) {
                          return (
                            (e.date = u.fromTimezone(
                              t,
                              F.getOption("timezone"),
                            )),
                            t
                          );
                        })
                      : ((U.$$parserName = "date"),
                        (U.$validators.date = b),
                        U.$parsers.unshift(f),
                        U.$formatters.push(function (t) {
                          return U.$isEmpty(t)
                            ? ((e.date = t), t)
                            : (angular.isNumber(t) && (t = new Date(t)),
                              (e.date = u.fromTimezone(
                                t,
                                F.getOption("timezone"),
                              )),
                              u.filter(e.date, P));
                        })),
                    U.$viewChangeListeners.push(function () {
                      e.date = h(U.$viewValue);
                    }),
                    t.on("keydown", w),
                    (I = n(T)(e)),
                    T.remove(),
                    M ? s.find("body").append(I) : t.after(I),
                    e.$on("$destroy", function () {
                      for (
                        !0 === e.isOpen &&
                          (l.$$phase ||
                            e.$apply(function () {
                              e.isOpen = !1;
                            })),
                          I.remove(),
                          t.off("keydown", w),
                          s.off("click", y),
                          S && S.off("scroll", $),
                          angular.element(o).off("resize", $);
                        R.length;
                      )
                        R.shift()();
                    }));
                }),
                  (e.getText = function (t) {
                    return e[t + "Text"] || p[t + "Text"];
                  }),
                  (e.isDisabled = function (t) {
                    "today" === t &&
                      (t = u.fromTimezone(new Date(), F.getOption("timezone")));
                    var i = {};
                    return (
                      angular.forEach(["minDate", "maxDate"], function (t) {
                        e.datepickerOptions[t]
                          ? angular.isDate(e.datepickerOptions[t])
                            ? (i[t] = new Date(e.datepickerOptions[t]))
                            : (v &&
                                a.warn(
                                  "Literal date support has been deprecated, please switch to date object usage",
                                ),
                              (i[t] = new Date(
                                d(e.datepickerOptions[t], "medium"),
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
                    var n = e.date ? u.filter(e.date, P) : null;
                    (t.val(n),
                      U.$setViewValue(n),
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
                        : (t = u.fromTimezone(
                            n,
                            F.getOption("timezone"),
                          )).setHours(0, 0, 0, 0);
                    }
                    e.dateSelection(t);
                  }),
                  (e.close = function (i) {
                    (i.stopPropagation(), (e.isOpen = !1), t[0].focus());
                  }),
                  (e.disabled = angular.isDefined(i.disabled) || !1),
                  i.ngDisabled &&
                    R.push(
                      e.$parent.$watch(r(i.ngDisabled), function (t) {
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
                                x && e.$broadcast("uib:datepicker.focus"),
                                s.on("click", y));
                              var n = i.popupPlacement
                                ? i.popupPlacement
                                : p.placement;
                              (M || c.parsePlacement(n)[2]
                                ? (S =
                                    S || angular.element(c.scrollParent(t))) &&
                                  S.on("scroll", $)
                                : (S = null),
                                angular.element(o).on("resize", $));
                            },
                            0,
                            !1,
                          )
                      : (s.off("click", y),
                        S && S.off("scroll", $),
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
                  var a = n[0];
                  n[1].init(a);
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
                  var a = this,
                    r = Array.prototype.slice.call(arguments);
                  (n && e.cancel(n),
                    (n = e(function () {
                      t.apply(a, r);
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
                        var a = n.indexOf(i);
                        (-1 !== a && n.splice(a, 1), n.length || delete e[t]);
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
                  a = i.createNew();
                ((this.isOnlyOpen = function (e, t) {
                  var i = a.get(t);
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
                      (n || e.on("click", r),
                      n && n !== t && (n.isOpen = !1),
                      (n = t),
                      o)
                    ) {
                      var s = a.get(o);
                      if (s) {
                        var l = s.map(function (e) {
                          return e.scope;
                        });
                        -1 === l.indexOf(t) && a.put(o, { scope: t });
                      } else a.put(o, { scope: t });
                    }
                  }),
                  (this.close = function (t, i, o) {
                    if (
                      (n === t &&
                        (e.off("click", r),
                        e.off("keydown", this.keybindFilter),
                        (n = null)),
                      o)
                    ) {
                      var s = a.get(o);
                      if (s) {
                        var l = s.reduce(function (e, i) {
                          return i.scope === t ? i : e;
                        }, {});
                        l && a.remove(o, l);
                      }
                    }
                  }));
                var r = function (e) {
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
                      var a = n.getDropdownElement();
                      (e &&
                        "outsideClick" === n.getAutoClose() &&
                        a &&
                        a[0].contains(e.target)) ||
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
                      a = t && t[0].contains(e.target),
                      o = i && i[0].contains(e.target);
                    27 === e.which
                      ? (e.stopPropagation(), n.focusToggleElement(), r())
                      : n.isKeynavEnabled() &&
                        -1 !== [38, 40].indexOf(e.which) &&
                        n.isOpen &&
                        (a || o) &&
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
              function (e, t, i, n, a, r, o, s, l, c, d) {
                function u() {
                  t.append(g.dropdownMenu);
                }
                var p,
                  m,
                  g = this,
                  v = e.$new(),
                  h = a.appendToOpenClass,
                  f = a.openClass,
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
                        v.isOpen = !!e;
                      })),
                      (w = angular.isDefined(i.keyboardNav)));
                  }),
                  (this.toggle = function (e) {
                    return (
                      (v.isOpen = arguments.length ? !!e : !v.isOpen),
                      angular.isFunction(b) && b(v, v.isOpen),
                      v.isOpen
                    );
                  }),
                  (this.isOpen = function () {
                    return v.isOpen;
                  }),
                  (v.getToggleElement = function () {
                    return g.toggleElement;
                  }),
                  (v.getAutoClose = function () {
                    return i.autoClose || "always";
                  }),
                  (v.getElement = function () {
                    return t;
                  }),
                  (v.isKeynavEnabled = function () {
                    return w;
                  }),
                  (v.focusDropdownEntry = function (e) {
                    var i = g.dropdownMenu
                      ? angular.element(g.dropdownMenu).find("a")
                      : t.find("ul").eq(0).find("a");
                    switch (e) {
                      case 40:
                        angular.isNumber(g.selectedOption)
                          ? (g.selectedOption =
                              g.selectedOption === i.length - 1
                                ? g.selectedOption
                                : g.selectedOption + 1)
                          : (g.selectedOption = 0);
                        break;
                      case 38:
                        angular.isNumber(g.selectedOption)
                          ? (g.selectedOption =
                              0 === g.selectedOption ? 0 : g.selectedOption - 1)
                          : (g.selectedOption = i.length - 1);
                    }
                    i[g.selectedOption].focus();
                  }),
                  (v.getDropdownElement = function () {
                    return g.dropdownMenu;
                  }),
                  (v.focusToggleElement = function () {
                    g.toggleElement && g.toggleElement[0].focus();
                  }),
                  v.$watch("isOpen", function (a, m) {
                    var w = null,
                      P = !1;
                    if (angular.isDefined(i.dropdownAppendTo)) {
                      var k = n(i.dropdownAppendTo)(v);
                      k && (w = angular.element(k));
                    }
                    if (
                      (angular.isDefined(i.dropdownAppendToBody) &&
                        !1 !== n(i.dropdownAppendToBody)(v) &&
                        (P = !0),
                      P && !w && (w = $),
                      w &&
                        g.dropdownMenu &&
                        (a
                          ? (w.append(g.dropdownMenu), t.on("$destroy", u))
                          : (t.off("$destroy", u), u())),
                      w && g.dropdownMenu)
                    ) {
                      var M,
                        x,
                        D,
                        C = s.positionElements(
                          t,
                          g.dropdownMenu,
                          "bottom-left",
                          !0,
                        ),
                        T = 0;
                      if (
                        ((M = {
                          top: C.top + "px",
                          display: a ? "block" : "none",
                        }),
                        (x = g.dropdownMenu.hasClass("dropdown-menu-right"))
                          ? ((M.left = "auto"),
                            (D = s.scrollbarPadding(w)).heightOverflow &&
                              D.scrollbarWidth &&
                              (T = D.scrollbarWidth),
                            (M.right =
                              window.innerWidth -
                              T -
                              (C.left + t.prop("offsetWidth")) +
                              "px"))
                          : ((M.left = C.left + "px"), (M.right = "auto")),
                        !P)
                      ) {
                        var O = s.offset(w);
                        ((M.top = C.top - O.top + "px"),
                          x
                            ? (M.right =
                                window.innerWidth -
                                (C.left - O.left + t.prop("offsetWidth")) +
                                "px")
                            : (M.left = C.left - O.left + "px"));
                      }
                      g.dropdownMenu.css(M);
                    }
                    var S = w || t,
                      U = w ? h : f,
                      F = S.hasClass(U),
                      I = r.isOnlyOpen(e, w);
                    if (
                      (F === !a &&
                        o[
                          w
                            ? I
                              ? "removeClass"
                              : "addClass"
                            : a
                              ? "addClass"
                              : "removeClass"
                        ](S, U).then(function () {
                          angular.isDefined(a) &&
                            a !== m &&
                            y(e, { open: !!a });
                        }),
                      a)
                    )
                      (g.dropdownMenuTemplateUrl
                        ? d(g.dropdownMenuTemplateUrl).then(function (e) {
                            ((p = v.$new()),
                              c(e.trim())(p, function (e) {
                                var t = e;
                                (g.dropdownMenu.replaceWith(t),
                                  (g.dropdownMenu = t),
                                  l.on("keydown", r.keybindFilter));
                              }));
                          })
                        : l.on("keydown", r.keybindFilter),
                        v.focusToggleElement(),
                        r.open(v, t, w));
                    else {
                      if ((r.close(v, t, w), g.dropdownMenuTemplateUrl)) {
                        p && p.$destroy();
                        var E = angular.element(
                          '<ul class="dropdown-menu"></ul>',
                        );
                        (g.dropdownMenu.replaceWith(E), (g.dropdownMenu = E));
                      }
                      g.selectedOption = null;
                    }
                    angular.isFunction(b) && b(e, a);
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
                    var a = i.templateUrl;
                    (a && (n.dropdownMenuTemplateUrl = a),
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
                    var a = function (a) {
                      (a.preventDefault(),
                        t.hasClass("disabled") ||
                          i.disabled ||
                          e.$apply(function () {
                            n.toggle();
                          }));
                    };
                    (t.on("click", a),
                      t.attr({ "aria-haspopup": !0, "aria-expanded": !1 }),
                      e.$watch(n.isOpen, function (e) {
                        t.attr("aria-expanded", !!e);
                      }),
                      e.$on("$destroy", function () {
                        t.off("click", a);
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
                      resolve: function (e, a, r, o) {
                        if (n) return n.resolve(e, a, r, o);
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
                              angular.forEach(e, function (e, a) {
                                i[a] = t[n++];
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
                function n(t, n, a) {
                  a.modalInClass &&
                    (e.addClass(n, a.modalInClass),
                    t.$on(i.NOW_CLOSING_EVENT, function (i, r) {
                      var o = r();
                      t.modalOptions.animation
                        ? e.removeClass(n, a.modalInClass).then(o)
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
                  link: function (a, r, o) {
                    (r.addClass(o.windowTopClass || ""),
                      (a.size = o.size),
                      (a.close = function (t) {
                        var i = e.getTop();
                        i &&
                          i.value.backdrop &&
                          "static" !== i.value.backdrop &&
                          t.target === t.currentTarget &&
                          (t.preventDefault(),
                          t.stopPropagation(),
                          e.dismiss(i.key, "backdrop click"));
                      }),
                      r.on("click", a.close),
                      (a.$isRendered = !0));
                    var s = t.defer();
                    (a.$$postDigest(function () {
                      s.resolve();
                    }),
                      s.promise.then(function () {
                        var s = null;
                        (o.modalInClass &&
                          ((s = i(r, { addClass: o.modalInClass }).start()),
                          a.$on(e.NOW_CLOSING_EVENT, function (e, t) {
                            var n = t();
                            i(r, { removeClass: o.modalInClass })
                              .start()
                              .then(n);
                          })),
                          t.when(s).then(function () {
                            var t = e.getTop();
                            if (
                              (t && e.modalRendered(t.key),
                              !n[0].activeElement ||
                                !r[0].contains(n[0].activeElement))
                            ) {
                              var i = r[0].querySelector("[autofocus]");
                              i ? i.focus() : r[0].focus();
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
                  link: function (t, i, n, a, r) {
                    r(t.$parent, function (t) {
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
              function (e, t, i, n, a, r, o, s, l) {
                function c() {
                  for (var e = -1, t = w.keys(), i = 0; i < t.length; i++)
                    w.get(t[i]).value.backdrop && (e = i);
                  return (e > -1 && e < k && (e = k), e);
                }
                function d(e, t) {
                  var i = w.get(e).value,
                    n = i.appendTo;
                  (w.remove(e),
                    (M = w.top()) &&
                      (k = parseInt(M.value.modalDomEl.attr("index"), 10)),
                    p(
                      i.modalDomEl,
                      i.modalScope,
                      function () {
                        var t = i.openedClass || y;
                        $.remove(t, e);
                        var a = $.hasKey(t);
                        (n.toggleClass(t, a),
                          !a &&
                            b &&
                            b.heightOverflow &&
                            b.scrollbarWidth &&
                            (b.originalRight
                              ? n.css({ paddingRight: b.originalRight + "px" })
                              : n.css({ paddingRight: "" }),
                            (b = null)),
                          u(!0));
                      },
                      i.closedDeferred,
                    ),
                    h &&
                      -1 === c() &&
                      (p(h, f, function () {}), (h = void 0), (f = void 0)),
                    t && t.focus ? t.focus() : n.focus && n.focus());
                }
                function u(e) {
                  var t;
                  w.length() > 0 &&
                    (t = w.top().value).modalDomEl.toggleClass(
                      t.windowTopClass || "",
                      e,
                    );
                }
                function p(t, i, n, a) {
                  var o,
                    s = null;
                  return (
                    i.$broadcast(P.NOW_CLOSING_EVENT, function () {
                      return (
                        o || ((o = r.defer()), (s = o.promise)),
                        function () {
                          o.resolve();
                        }
                      );
                    }),
                    r.when(s).then(function r() {
                      r.done ||
                        ((r.done = !0),
                        e.leave(t).then(function () {
                          (n && n(), t.remove(), a && a.resolve());
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
                          a.$apply(function () {
                            P.dismiss(t.key, "escape key press");
                          }));
                        break;
                      case 9:
                        var i = P.loadFocusElementList(t),
                          n = !1;
                        (e.shiftKey
                          ? (P.isFocusInFirstItem(e, i) ||
                              P.isModalFocused(e, t)) &&
                            (n = P.focusLastFocusableElement(i))
                          : P.isFocusInLastItem(e, i) &&
                            (n = P.focusFirstFocusableElement(i)),
                          n && (e.preventDefault(), e.stopPropagation()));
                    }
                }
                function g(e, t, i) {
                  return !e.value.modalScope.$broadcast("modal.closing", t, i)
                    .defaultPrevented;
                }
                function v() {
                  Array.prototype.forEach.call(
                    document.querySelectorAll("[" + x + "]"),
                    function (e) {
                      var t = parseInt(e.getAttribute(x), 10) - 1;
                      (e.setAttribute(x, t),
                        t ||
                          (e.removeAttribute(x),
                          e.removeAttribute("aria-hidden")));
                    },
                  );
                }
                var h,
                  f,
                  b,
                  y = "modal-open",
                  w = s.createNew(),
                  $ = o.createNew(),
                  P = { NOW_CLOSING_EVENT: "modal.stack.now-closing" },
                  k = 0,
                  M = null,
                  x = "data-bootstrap-modal-aria-hidden-count",
                  D = /[A-Z]/g;
                return (
                  a.$watch(c, function (e) {
                    f && (f.index = e);
                  }),
                  i.on("keydown", m),
                  a.$on("$destroy", function () {
                    i.off("keydown", m);
                  }),
                  (P.open = function (t, r) {
                    var o = i[0].activeElement,
                      s = r.openedClass || y;
                    (u(!1),
                      (M = w.top()),
                      w.add(t, {
                        deferred: r.deferred,
                        renderDeferred: r.renderDeferred,
                        closedDeferred: r.closedDeferred,
                        modalScope: r.scope,
                        backdrop: r.backdrop,
                        keyboard: r.keyboard,
                        openedClass: r.openedClass,
                        windowTopClass: r.windowTopClass,
                        animation: r.animation,
                        appendTo: r.appendTo,
                      }),
                      $.put(s, t));
                    var d,
                      p = r.appendTo,
                      m = c();
                    (m >= 0 &&
                      !h &&
                      (((f = a.$new(!0)).modalOptions = r),
                      (f.index = m),
                      (h = angular.element(
                        '<div uib-modal-backdrop="modal-backdrop"></div>',
                      )).attr({
                        class: "modal-backdrop",
                        "ng-style":
                          "{'z-index': 1040 + (index && 1 || 0) + index*10}",
                        "uib-modal-animation-class": "fade",
                        "modal-in-class": "in",
                      }),
                      r.backdropClass && h.addClass(r.backdropClass),
                      r.animation && h.attr("modal-animation", "true"),
                      n(h)(f),
                      e.enter(h, p),
                      l.isScrollable(p) &&
                        (b = l.scrollbarPadding(p)).heightOverflow &&
                        b.scrollbarWidth &&
                        p.css({ paddingRight: b.right + "px" })),
                      r.component
                        ? ((d = document.createElement(
                            (function (e) {
                              return e.replace(D, function (e, t) {
                                return (t ? "-" : "") + e.toLowerCase();
                              });
                            })(r.component.name),
                          )),
                          (d = angular.element(d)).attr({
                            resolve: "$resolve",
                            "modal-instance": "$uibModalInstance",
                            close: "$close($value)",
                            dismiss: "$dismiss($value)",
                          }))
                        : (d = r.content),
                      (k = M
                        ? parseInt(M.value.modalDomEl.attr("index"), 10) + 1
                        : 0));
                    var g = angular.element(
                      '<div uib-modal-window="modal-window"></div>',
                    );
                    (g
                      .attr({
                        class: "modal",
                        "template-url": r.windowTemplateUrl,
                        "window-top-class": r.windowTopClass,
                        role: "dialog",
                        "aria-labelledby": r.ariaLabelledBy,
                        "aria-describedby": r.ariaDescribedBy,
                        size: r.size,
                        index: k,
                        animate: "animate",
                        "ng-style":
                          "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",
                        tabindex: -1,
                        "uib-modal-animation-class": "fade",
                        "modal-in-class": "in",
                      })
                      .append(d),
                      r.windowClass && g.addClass(r.windowClass),
                      r.animation && g.attr("modal-animation", "true"),
                      p.addClass(s),
                      r.scope && (r.scope.$$topModalIndex = k),
                      e.enter(n(g)(r.scope), p),
                      (w.top().value.modalDomEl = g),
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
                                i = parseInt(e.getAttribute(x), 10);
                              (i || (i = t ? 1 : 0),
                                e.setAttribute(x, i + 1),
                                e.setAttribute("aria-hidden", "true"));
                            }),
                            e(t.parent())
                          );
                      })(g));
                  }),
                  (P.close = function (e, t) {
                    var i = w.get(e);
                    return (
                      v(),
                      i && g(i, t, !0)
                        ? ((i.value.modalScope.$$uibDestructionScheduled = !0),
                          i.value.deferred.resolve(t),
                          d(e, i.value.modalOpener),
                          !0)
                        : !i
                    );
                  }),
                  (P.dismiss = function (e, t) {
                    var i = w.get(e);
                    return (
                      v(),
                      i && g(i, t, !1)
                        ? ((i.value.modalScope.$$uibDestructionScheduled = !0),
                          i.value.deferred.reject(t),
                          d(e, i.value.modalOpener),
                          !0)
                        : !i
                    );
                  }),
                  (P.dismissAll = function (e) {
                    for (var t = this.getTop(); t && this.dismiss(t.key, e); )
                      t = this.getTop();
                  }),
                  (P.getTop = function () {
                    return w.top();
                  }),
                  (P.modalRendered = function (e) {
                    var t = w.get(e);
                    t && t.value.renderDeferred.resolve();
                  }),
                  (P.focusFirstFocusableElement = function (e) {
                    return e.length > 0 && (e[0].focus(), !0);
                  }),
                  (P.focusLastFocusableElement = function (e) {
                    return e.length > 0 && (e[e.length - 1].focus(), !0);
                  }),
                  (P.isModalFocused = function (e, t) {
                    if (e && t) {
                      var i = t.value.modalDomEl;
                      if (i && i.length)
                        return (e.target || e.srcElement) === i[0];
                    }
                    return !1;
                  }),
                  (P.isFocusInFirstItem = function (e, t) {
                    return t.length > 0 && (e.target || e.srcElement) === t[0];
                  }),
                  (P.isFocusInLastItem = function (e, t) {
                    return (
                      t.length > 0 &&
                      (e.target || e.srcElement) === t[t.length - 1]
                    );
                  }),
                  (P.loadFocusElementList = function (e) {
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
                  P
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
                  function (t, i, n, a, r, o, s) {
                    function l(e) {
                      return e.template
                        ? i.when(e.template)
                        : a(
                            angular.isFunction(e.templateUrl)
                              ? e.templateUrl()
                              : e.templateUrl,
                          );
                    }
                    var c = {},
                      d = null;
                    return (
                      (c.getPromiseChain = function () {
                        return d;
                      }),
                      (c.open = function (a) {
                        function c() {
                          return u;
                        }
                        var u,
                          p,
                          m = i.defer(),
                          g = i.defer(),
                          v = i.defer(),
                          h = i.defer(),
                          f = {
                            result: m.promise,
                            opened: g.promise,
                            closed: v.promise,
                            rendered: h.promise,
                            close: function (e) {
                              return s.close(f, e);
                            },
                            dismiss: function (e) {
                              return s.dismiss(f, e);
                            },
                          };
                        if (
                          (((a = angular.extend({}, e.options, a)).resolve =
                            a.resolve || {}),
                          (a.appendTo = a.appendTo || n.find("body").eq(0)),
                          !a.appendTo.length)
                        )
                          throw new Error(
                            "appendTo element not found. Make sure that the element passed is in DOM.",
                          );
                        if (!a.component && !a.template && !a.templateUrl)
                          throw new Error(
                            "One of component or template or templateUrl options is required.",
                          );
                        return (
                          (u = a.component
                            ? i.when(o.resolve(a.resolve, {}, null, null))
                            : i.all([
                                l(a),
                                o.resolve(a.resolve, {}, null, null),
                              ])),
                          (p = d =
                            i
                              .all([d])
                              .then(c, c)
                              .then(
                                function (e) {
                                  function i(t, i, n, a) {
                                    ((t.$scope = o),
                                      (t.$scope.$resolve = {}),
                                      n
                                        ? (t.$scope.$uibModalInstance = f)
                                        : (t.$uibModalInstance = f));
                                    var r = i ? e[1] : e;
                                    angular.forEach(r, function (e, i) {
                                      (a && (t[i] = e),
                                        (t.$scope.$resolve[i] = e));
                                    });
                                  }
                                  var n = a.scope || t,
                                    o = n.$new();
                                  ((o.$close = f.close),
                                    (o.$dismiss = f.dismiss),
                                    o.$on("$destroy", function () {
                                      o.$$uibDestructionScheduled ||
                                        o.$dismiss(
                                          "$uibUnscheduledDestruction",
                                        );
                                    }));
                                  var l,
                                    c,
                                    d = {
                                      scope: o,
                                      deferred: m,
                                      renderDeferred: h,
                                      closedDeferred: v,
                                      animation: a.animation,
                                      backdrop: a.backdrop,
                                      keyboard: a.keyboard,
                                      backdropClass: a.backdropClass,
                                      windowTopClass: a.windowTopClass,
                                      windowClass: a.windowClass,
                                      windowTemplateUrl: a.windowTemplateUrl,
                                      ariaLabelledBy: a.ariaLabelledBy,
                                      ariaDescribedBy: a.ariaDescribedBy,
                                      size: a.size,
                                      openedClass: a.openedClass,
                                      appendTo: a.appendTo,
                                    },
                                    u = {},
                                    p = {};
                                  (a.component
                                    ? (i(u, !1, !0, !1),
                                      (u.name = a.component),
                                      (d.component = u))
                                    : a.controller &&
                                      (i(p, !0, !1, !0),
                                      (c = r(
                                        a.controller,
                                        p,
                                        !0,
                                        a.controllerAs,
                                      )),
                                      a.controllerAs &&
                                        a.bindToController &&
                                        (((l = c.instance).$close = o.$close),
                                        (l.$dismiss = o.$dismiss),
                                        angular.extend(
                                          l,
                                          { $resolve: p.$scope.$resolve },
                                          n,
                                        )),
                                      (l = c()),
                                      angular.isFunction(l.$onInit) &&
                                        l.$onInit()),
                                    a.component || (d.content = e[0]),
                                    s.open(f, d),
                                    g.resolve(!0));
                                },
                                function (e) {
                                  (g.reject(e), m.reject(e));
                                },
                              )
                              .finally(function () {
                                d === p && (d = null);
                              })),
                          f
                        );
                      }),
                      c
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
                    (t.init = function (e, a) {
                      ((t.ngModelCtrl = e),
                        (t.config = a),
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
                          : (t.itemsPerPage = a.itemsPerPage),
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
                  link: function (t, i, n, a) {
                    i.addClass("pager");
                    var r = a[0],
                      o = a[1];
                    o && r.init(o, e);
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
              function (e, t, i, n, a) {
                function r(e, t, i) {
                  return { number: e, text: t, active: i };
                }
                var o = this,
                  s = angular.isDefined(t.maxSize)
                    ? e.$parent.$eval(t.maxSize)
                    : a.maxSize,
                  l = angular.isDefined(t.rotate)
                    ? e.$parent.$eval(t.rotate)
                    : a.rotate,
                  c = angular.isDefined(t.forceEllipses)
                    ? e.$parent.$eval(t.forceEllipses)
                    : a.forceEllipses,
                  d = angular.isDefined(t.boundaryLinkNumbers)
                    ? e.$parent.$eval(t.boundaryLinkNumbers)
                    : a.boundaryLinkNumbers,
                  u = angular.isDefined(t.pageLabel)
                    ? function (i) {
                        return e.$parent.$eval(t.pageLabel, { $page: i });
                      }
                    : angular.identity;
                ((e.boundaryLinks = angular.isDefined(t.boundaryLinks)
                  ? e.$parent.$eval(t.boundaryLinks)
                  : a.boundaryLinks),
                  (e.directionLinks = angular.isDefined(t.directionLinks)
                    ? e.$parent.$eval(t.directionLinks)
                    : a.directionLinks),
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
                          a = t,
                          o = angular.isDefined(s) && s < t;
                        o &&
                          (l
                            ? (a =
                                (n = Math.max(e - Math.floor(s / 2), 1)) +
                                s -
                                1) > t && (n = (a = t) - s + 1)
                            : ((n = (Math.ceil(e / s) - 1) * s + 1),
                              (a = Math.min(n + s - 1, t))));
                        for (var p = n; p <= a; p++) {
                          var m = r(p, u(p), p === e);
                          i.push(m);
                        }
                        if (o && s > 0 && (!l || c || d)) {
                          if (n > 1) {
                            if (!d || n > 3) {
                              var g = r(n - 1, "...", !1);
                              i.unshift(g);
                            }
                            if (d) {
                              if (3 === n) {
                                var v = r(2, "2", !1);
                                i.unshift(v);
                              }
                              var h = r(1, "1", !1);
                              i.unshift(h);
                            }
                          }
                          if (a < t) {
                            if (!d || a < t - 2) {
                              var f = r(a + 1, "...", !1);
                              i.push(f);
                            }
                            if (d) {
                              if (a === t - 2) {
                                var b = r(t - 1, t - 1, !1);
                                i.push(b);
                              }
                              var y = r(t, t, !1);
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
                  link: function (e, i, n, a) {
                    i.addClass("pagination");
                    var r = a[0],
                      o = a[1];
                    o && r.init(o, t);
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
                  function (n, a, r, o, s, l, c, d, u) {
                    function p(e) {
                      if (27 === e.which) {
                        var t = m.top();
                        t && (t.value.close(), (t = null));
                      }
                    }
                    var m = u.createNew();
                    return (
                      o.on("keyup", p),
                      c.$on("$destroy", function () {
                        o.off("keyup", p);
                      }),
                      function (n, c, u, p) {
                        function g(e) {
                          var i = (e || p.trigger || u).split(" "),
                            n = i.map(function (e) {
                              return t[e] || e;
                            });
                          return { show: i, hide: n };
                        }
                        p = angular.extend({}, e, i, p);
                        var v = n.replace(/[A-Z]/g, function (e, t) {
                            return (t ? "-" : "") + e.toLowerCase();
                          }),
                          h = l.startSymbol(),
                          f = l.endSymbol(),
                          b =
                            "<div " +
                            v +
                            '-popup uib-title="' +
                            h +
                            "title" +
                            f +
                            '" ' +
                            (p.useContentExp
                              ? 'content-exp="contentExp()" '
                              : 'content="' + h + "content" + f + '" ') +
                            'origin-scope="origScope" class="uib-position-measure ' +
                            c +
                            '" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';
                        return {
                          compile: function (e, t) {
                            var i = a(b);
                            return function (e, t, a, l) {
                              function u() {
                                R.isOpen ? h() : v();
                              }
                              function v() {
                                (L && !e.$eval(a[c + "Enable"])) ||
                                  (w(),
                                  (function () {
                                    ((R.title = a[c + "Title"]),
                                      (R.content = N ? N(e) : a[n]),
                                      (R.popupClass = a[c + "Class"]),
                                      (R.placement = angular.isDefined(
                                        a[c + "Placement"],
                                      )
                                        ? a[c + "Placement"]
                                        : p.placement));
                                    var t = s.parsePlacement(R.placement);
                                    F = t[1] ? t[0] + "-" + t[1] : t[0];
                                    var i = parseInt(a[c + "PopupDelay"], 10),
                                      r = parseInt(
                                        a[c + "PopupCloseDelay"],
                                        10,
                                      );
                                    ((R.popupDelay = isNaN(i)
                                      ? p.popupDelay
                                      : i),
                                      (R.popupCloseDelay = isNaN(r)
                                        ? p.popupCloseDelay
                                        : r));
                                  })(),
                                  R.popupDelay
                                    ? T || (T = r(f, R.popupDelay, !1))
                                    : f());
                              }
                              function h() {
                                (b(),
                                  R.popupCloseDelay
                                    ? O || (O = r(y, R.popupCloseDelay, !1))
                                    : y());
                              }
                              function f() {
                                return (
                                  b(),
                                  w(),
                                  R.content
                                    ? (x ||
                                        ((D = R.$new()),
                                        (x = i(D, function (e) {
                                          I
                                            ? o.find("body").append(e)
                                            : t.after(e);
                                        })),
                                        m.add(R, { close: y }),
                                        (H.length = 0),
                                        N
                                          ? (H.push(
                                              e.$watch(N, function (e) {
                                                ((R.content = e),
                                                  !e && R.isOpen && y());
                                              }),
                                            ),
                                            H.push(
                                              D.$watch(function () {
                                                A ||
                                                  ((A = !0),
                                                  D.$$postDigest(function () {
                                                    ((A = !1),
                                                      R && R.isOpen && V());
                                                  }));
                                              }),
                                            ))
                                          : H.push(
                                              a.$observe(n, function (e) {
                                                ((R.content = e),
                                                  !e && R.isOpen ? y() : V());
                                              }),
                                            ),
                                        H.push(
                                          a.$observe(c + "Title", function (e) {
                                            ((R.title = e), R.isOpen && V());
                                          }),
                                        ),
                                        H.push(
                                          a.$observe(
                                            c + "Placement",
                                            function (e) {
                                              ((R.placement = e || p.placement),
                                                R.isOpen && V());
                                            },
                                          ),
                                        )),
                                      void R.$evalAsync(function () {
                                        ((R.isOpen = !0), P(!0), V());
                                      }))
                                    : angular.noop
                                );
                              }
                              function b() {
                                (T && (r.cancel(T), (T = null)),
                                  S && (r.cancel(S), (S = null)));
                              }
                              function y() {
                                R &&
                                  R.$evalAsync(function () {
                                    R &&
                                      ((R.isOpen = !1),
                                      P(!1),
                                      R.animation
                                        ? C || (C = r($, 150, !1))
                                        : $());
                                  });
                              }
                              function w() {
                                (O && (r.cancel(O), (O = null)),
                                  C && (r.cancel(C), (C = null)));
                              }
                              function $() {
                                (b(),
                                  w(),
                                  H.length &&
                                    (angular.forEach(H, function (e) {
                                      e();
                                    }),
                                    (H.length = 0)),
                                  x &&
                                    (x.remove(), (x = null), U && r.cancel(U)),
                                  m.remove(R),
                                  D && (D.$destroy(), (D = null)));
                              }
                              function P(t) {
                                j &&
                                  angular.isFunction(j.assign) &&
                                  j.assign(e, t);
                              }
                              function k(e) {
                                R &&
                                  R.isOpen &&
                                  x &&
                                  (t[0].contains(e.target) ||
                                    x[0].contains(e.target) ||
                                    h());
                              }
                              function M(e) {
                                27 === e.which && h();
                              }
                              var x,
                                D,
                                C,
                                T,
                                O,
                                S,
                                U,
                                F,
                                I =
                                  !!angular.isDefined(p.appendToBody) &&
                                  p.appendToBody,
                                E = g(void 0),
                                L = angular.isDefined(a[c + "Enable"]),
                                R = e.$new(!0),
                                A = !1,
                                j =
                                  !!angular.isDefined(a[c + "IsOpen"]) &&
                                  d(a[c + "IsOpen"]),
                                N = !!p.useContentExp && d(a[n]),
                                H = [],
                                V = function () {
                                  x &&
                                    x.html() &&
                                    (S ||
                                      (S = r(
                                        function () {
                                          var e = s.positionElements(
                                              t,
                                              x,
                                              R.placement,
                                              I,
                                            ),
                                            i = angular.isDefined(
                                              x.offsetHeight,
                                            )
                                              ? x.offsetHeight
                                              : x.prop("offsetHeight"),
                                            n = I ? s.offset(t) : s.position(t);
                                          x.css({
                                            top: e.top + "px",
                                            left: e.left + "px",
                                          });
                                          var a = e.placement.split("-");
                                          (x.hasClass(a[0]) ||
                                            (x.removeClass(F.split("-")[0]),
                                            x.addClass(a[0])),
                                            x.hasClass(
                                              p.placementClassPrefix +
                                                e.placement,
                                            ) ||
                                              (x.removeClass(
                                                p.placementClassPrefix + F,
                                              ),
                                              x.addClass(
                                                p.placementClassPrefix +
                                                  e.placement,
                                              )),
                                            (U = r(
                                              function () {
                                                var e = angular.isDefined(
                                                    x.offsetHeight,
                                                  )
                                                    ? x.offsetHeight
                                                    : x.prop("offsetHeight"),
                                                  t = s.adjustTop(a, n, i, e);
                                                (t && x.css(t), (U = null));
                                              },
                                              0,
                                              !1,
                                            )),
                                            x.hasClass("uib-position-measure")
                                              ? (s.positionArrow(
                                                  x,
                                                  e.placement,
                                                ),
                                                x.removeClass(
                                                  "uib-position-measure",
                                                ))
                                              : F !== e.placement &&
                                                s.positionArrow(x, e.placement),
                                            (F = e.placement),
                                            (S = null));
                                        },
                                        0,
                                        !1,
                                      )));
                                };
                              ((R.origScope = e),
                                (R.isOpen = !1),
                                (R.contentExp = function () {
                                  return R.content;
                                }),
                                a.$observe("disabled", function (e) {
                                  (e && b(), e && R.isOpen && y());
                                }),
                                j &&
                                  e.$watch(j, function (e) {
                                    R && !e === R.isOpen && u();
                                  }));
                              var B = function () {
                                (E.show.forEach(function (e) {
                                  ("outsideClick" === e
                                    ? t.off("click", u)
                                    : (t.off(e, v), t.off(e, u)),
                                    t.off("keypress", M));
                                }),
                                  E.hide.forEach(function (e) {
                                    "outsideClick" === e
                                      ? o.off("click", k)
                                      : t.off(e, h);
                                  }));
                              };
                              !(function () {
                                var i = [],
                                  n = [],
                                  r = e.$eval(a[c + "Trigger"]);
                                (B(),
                                  angular.isObject(r)
                                    ? (Object.keys(r).forEach(function (e) {
                                        (i.push(e), n.push(r[e]));
                                      }),
                                      (E = { show: i, hide: n }))
                                    : (E = g(r)),
                                  "none" !== E.show &&
                                    E.show.forEach(function (e, i) {
                                      ("outsideClick" === e
                                        ? (t.on("click", u), o.on("click", k))
                                        : e === E.hide[i]
                                          ? t.on(e, u)
                                          : e &&
                                            (t.on(e, v), t.on(E.hide[i], h)),
                                        t.on("keypress", M));
                                    }));
                              })();
                              var z = e.$eval(a[c + "Animation"]);
                              R.animation = angular.isDefined(z)
                                ? !!z
                                : p.animation;
                              var Y,
                                W = c + "AppendToBody";
                              ((Y =
                                (W in a && void 0 === a[W]) || e.$eval(a[W])),
                                (I = angular.isDefined(Y) ? Y : I),
                                e.$on("$destroy", function () {
                                  (B(), $(), (R = null));
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
                  link: function (a, r, o) {
                    var s,
                      l,
                      c,
                      d = a.$eval(o.tooltipTemplateTranscludeScope),
                      u = 0,
                      p = function () {
                        (l && (l.remove(), (l = null)),
                          s && (s.$destroy(), (s = null)),
                          c &&
                            (e.leave(c).then(function () {
                              l = null;
                            }),
                            (l = c),
                            (c = null)));
                      };
                    (a.$watch(
                      t.parseAsResourceUrl(o.uibTooltipTemplateTransclude),
                      function (t) {
                        var o = ++u;
                        t
                          ? (n(t, !0).then(
                              function (n) {
                                if (o === u) {
                                  var a = d.$new(),
                                    l = i(n)(a, function (t) {
                                      (p(), e.enter(t, r));
                                    });
                                  ((c = l),
                                    (s = a).$emit("$includeContentLoaded", t));
                                }
                              },
                              function () {
                                o === u &&
                                  (p(), a.$emit("$includeContentError", t));
                              },
                            ),
                            a.$emit("$includeContentRequested", t))
                          : p();
                      },
                    ),
                      a.$on("$destroy", p));
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
                      var a = e.parsePlacement(t.placement);
                      i.addClass(a[0]);
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
                var a = this,
                  r = angular.isDefined(t.animate)
                    ? e.$parent.$eval(t.animate)
                    : i.animate;
                ((this.bars = []),
                  (e.max = n()),
                  (this.addBar = function (e, t, i) {
                    (r || t.css({ transition: "none" }),
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
                        var t = a.bars.reduce(function (e, t) {
                          return (
                            (t.percent = +((100 * t.value) / t.max).toFixed(2)),
                            e + t.percent
                          );
                        }, 0);
                        t > 100 && (e.percent -= t - 100);
                      }),
                      e.$on("$destroy", function () {
                        ((t = null), a.removeBar(e));
                      }));
                  }),
                  (this.removeBar = function (e) {
                    (this.bars.splice(this.bars.indexOf(e), 1),
                      this.bars.forEach(function (e) {
                        e.recalculatePercentage();
                      }));
                  }),
                  e.$watch("maxParam", function (e) {
                    a.bars.forEach(function (e) {
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
                  a = this;
                ((this.init = function (a) {
                  (((n = a).$render = this.render),
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
                  var r = angular.isDefined(t.titles)
                    ? e.$parent.$eval(t.titles)
                    : i.titles;
                  this.titles =
                    angular.isArray(r) && r.length > 0 ? r : i.titles;
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
                      var i = a.enableReset && n.$viewValue === t ? 0 : t;
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
                      (e.title = a.getTitle(e.value - 1)));
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
                  var a = n[0],
                    r = n[1];
                  a.init(r);
                },
              };
            }),
          angular
            .module("ui.bootstrap.tabs", [])
            .controller("UibTabsetController", [
              "$scope",
              function (e) {
                function t(e) {
                  for (var t = 0; t < a.tabs.length; t++)
                    if (a.tabs[t].index === e) return t;
                }
                var i,
                  n,
                  a = this;
                ((a.tabs = []),
                  (a.select = function (e, r) {
                    if (!n) {
                      var o = t(i),
                        s = a.tabs[o];
                      if (s) {
                        if (
                          (s.tab.onDeselect({ $event: r, $selectedIndex: e }),
                          r && r.isDefaultPrevented())
                        )
                          return;
                        s.tab.active = !1;
                      }
                      var l = a.tabs[e];
                      l
                        ? (l.tab.onSelect({ $event: r }),
                          (l.tab.active = !0),
                          (a.active = l.index),
                          (i = l.index))
                        : !l &&
                          angular.isDefined(i) &&
                          ((a.active = null), (i = null));
                    }
                  }),
                  (a.addTab = function (e) {
                    if (
                      (a.tabs.push({ tab: e, index: e.index }),
                      a.tabs.sort(function (e, t) {
                        return e.index > t.index
                          ? 1
                          : e.index < t.index
                            ? -1
                            : 0;
                      }),
                      e.index === a.active ||
                        (!angular.isDefined(a.active) && 1 === a.tabs.length))
                    ) {
                      var i = t(e.index);
                      a.select(i);
                    }
                  }),
                  (a.removeTab = function (e) {
                    for (var t, i = 0; i < a.tabs.length; i++)
                      if (a.tabs[i].tab === e) {
                        t = i;
                        break;
                      }
                    if (a.tabs[t].index === a.active) {
                      var n =
                        t === a.tabs.length - 1
                          ? t - 1
                          : t + (1 % a.tabs.length);
                      a.select(n);
                    }
                    a.tabs.splice(t, 1);
                  }),
                  e.$watch("tabset.active", function (e) {
                    angular.isDefined(e) && e !== i && a.select(t(e));
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
                  link: function (t, i, n, a, r) {
                    ((t.disabled = !1),
                      n.disable &&
                        t.$parent.$watch(e(n.disable), function (e) {
                          t.disabled = !!e;
                        }),
                      angular.isUndefined(n.index) &&
                        (a.tabs && a.tabs.length
                          ? (t.index =
                              Math.max.apply(
                                null,
                                a.tabs.map(function (e) {
                                  return e.index;
                                }),
                              ) + 1)
                          : (t.index = 0)),
                      angular.isUndefined(n.classes) && (t.classes = ""),
                      (t.select = function (e) {
                        if (!t.disabled) {
                          for (var i, n = 0; n < a.tabs.length; n++)
                            if (a.tabs[n].tab === t) {
                              i = n;
                              break;
                            }
                          a.select(i, e);
                        }
                      }),
                      a.addTab(t),
                      t.$on("$destroy", function () {
                        a.removeTab(t);
                      }),
                      (t.$transcludeFn = r));
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
              function (e, t, i, n, a, r, o) {
                function s() {
                  var t = +e.hours;
                  if (
                    (e.showMeridian ? t > 0 && t < 13 : t >= 0 && t < 24) &&
                    "" !== e.hours
                  )
                    return (
                      e.showMeridian &&
                        (12 === t && (t = 0), e.meridian === M[1] && (t += 12)),
                      t
                    );
                }
                function l() {
                  var t = +e.minutes;
                  if (t >= 0 && t < 60 && "" !== e.minutes) return t;
                }
                function c() {
                  var t = +e.seconds;
                  return t >= 0 && t < 60 ? t : void 0;
                }
                function d(e, t) {
                  return null === e
                    ? ""
                    : angular.isDefined(e) && e.toString().length < 2 && !t
                      ? "0" + e
                      : e.toString();
                }
                function u(e) {
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
                      a = $.getSeconds();
                    (e.showMeridian && (i = 0 === i || 12 === i ? 12 : i % 12),
                      (e.hours = "h" === t ? i : d(i, !x)),
                      "m" !== t && (e.minutes = d(n)),
                      (e.meridian = $.getHours() < 12 ? M[0] : M[1]),
                      "s" !== t && (e.seconds = d(a)),
                      (e.meridian = $.getHours() < 12 ? M[0] : M[1]));
                  } else
                    ((e.hours = null),
                      (e.minutes = null),
                      (e.seconds = null),
                      (e.meridian = M[0]));
                }
                function g(e) {
                  (($ = h($, e)), u());
                }
                function v(e, t) {
                  return h(e, 60 * t);
                }
                function h(e, t) {
                  var i = new Date(e.getTime() + 1e3 * t),
                    n = new Date(e);
                  return (
                    n.setHours(i.getHours(), i.getMinutes(), i.getSeconds()),
                    n
                  );
                }
                function f() {
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
                  P = [],
                  k = { $setViewValue: angular.noop },
                  M = angular.isDefined(i.meridians)
                    ? e.$parent.$eval(i.meridians)
                    : o.meridians || r.DATETIME_FORMATS.AMPMS,
                  x =
                    !angular.isDefined(i.padHours) ||
                    e.$parent.$eval(i.padHours);
                ((e.tabindex = angular.isDefined(i.tabindex) ? i.tabindex : 0),
                  t.removeAttr("tabindex"),
                  (this.init = function (t, n) {
                    (((k = t).$render = this.render),
                      k.$formatters.unshift(function (e) {
                        return e ? new Date(e) : null;
                      }));
                    var a = n.eq(0),
                      r = n.eq(1),
                      s = n.eq(2);
                    ((b = a.controller("ngModel")),
                      (y = r.controller("ngModel")),
                      (w = s.controller("ngModel")),
                      (angular.isDefined(i.mousewheel)
                        ? e.$parent.$eval(i.mousewheel)
                        : o.mousewheel) && this.setupMousewheelEvents(a, r, s),
                      (angular.isDefined(i.arrowkeys)
                        ? e.$parent.$eval(i.arrowkeys)
                        : o.arrowkeys) && this.setupArrowkeyEvents(a, r, s),
                      (e.readonlyInput = angular.isDefined(i.readonlyInput)
                        ? e.$parent.$eval(i.readonlyInput)
                        : o.readonlyInput),
                      this.setupInputEvents(a, r, s));
                  }));
                var D = o.hourStep;
                i.hourStep &&
                  P.push(
                    e.$parent.$watch(n(i.hourStep), function (e) {
                      D = +e;
                    }),
                  );
                var C,
                  T,
                  O = o.minuteStep;
                (i.minuteStep &&
                  P.push(
                    e.$parent.$watch(n(i.minuteStep), function (e) {
                      O = +e;
                    }),
                  ),
                  P.push(
                    e.$parent.$watch(n(i.min), function (e) {
                      var t = new Date(e);
                      C = isNaN(t) ? void 0 : t;
                    }),
                  ),
                  P.push(
                    e.$parent.$watch(n(i.max), function (e) {
                      var t = new Date(e);
                      T = isNaN(t) ? void 0 : t;
                    }),
                  ));
                var S = !1;
                (i.ngDisabled &&
                  P.push(
                    e.$parent.$watch(n(i.ngDisabled), function (e) {
                      S = e;
                    }),
                  ),
                  (e.noIncrementHours = function () {
                    var e = v($, 60 * D);
                    return S || e > T || (e < $ && e < C);
                  }),
                  (e.noDecrementHours = function () {
                    var e = v($, 60 * -D);
                    return S || e < C || (e > $ && e > T);
                  }),
                  (e.noIncrementMinutes = function () {
                    var e = v($, O);
                    return S || e > T || (e < $ && e < C);
                  }),
                  (e.noDecrementMinutes = function () {
                    var e = v($, -O);
                    return S || e < C || (e > $ && e > T);
                  }),
                  (e.noIncrementSeconds = function () {
                    var e = h($, U);
                    return S || e > T || (e < $ && e < C);
                  }),
                  (e.noDecrementSeconds = function () {
                    var e = h($, -U);
                    return S || e < C || (e > $ && e > T);
                  }),
                  (e.noToggleMeridian = function () {
                    return $.getHours() < 12
                      ? S || v($, 720) > T
                      : S || v($, -720) < C;
                  }));
                var U = o.secondStep;
                (i.secondStep &&
                  P.push(
                    e.$parent.$watch(n(i.secondStep), function (e) {
                      U = +e;
                    }),
                  ),
                  (e.showSeconds = o.showSeconds),
                  i.showSeconds &&
                    P.push(
                      e.$parent.$watch(n(i.showSeconds), function (t) {
                        e.showSeconds = !!t;
                      }),
                    ),
                  (e.showMeridian = o.showMeridian),
                  i.showMeridian &&
                    P.push(
                      e.$parent.$watch(n(i.showMeridian), function (t) {
                        if (((e.showMeridian = !!t), k.$error.time)) {
                          var i = s(),
                            n = l();
                          angular.isDefined(i) &&
                            angular.isDefined(n) &&
                            ($.setHours(i), u());
                        } else m();
                      }),
                    ),
                  (this.setupMousewheelEvents = function (t, i, n) {
                    var a = function (e) {
                      e.originalEvent && (e = e.originalEvent);
                      var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                      return e.detail || t > 0;
                    };
                    (t.on("mousewheel wheel", function (t) {
                      (S ||
                        e.$apply(
                          a(t) ? e.incrementHours() : e.decrementHours(),
                        ),
                        t.preventDefault());
                    }),
                      i.on("mousewheel wheel", function (t) {
                        (S ||
                          e.$apply(
                            a(t) ? e.incrementMinutes() : e.decrementMinutes(),
                          ),
                          t.preventDefault());
                      }),
                      n.on("mousewheel wheel", function (t) {
                        (S ||
                          e.$apply(
                            a(t) ? e.incrementSeconds() : e.decrementSeconds(),
                          ),
                          t.preventDefault());
                      }));
                  }),
                  (this.setupArrowkeyEvents = function (t, i, n) {
                    (t.on("keydown", function (t) {
                      S ||
                        (38 === t.which
                          ? (t.preventDefault(), e.incrementHours(), e.$apply())
                          : 40 === t.which &&
                            (t.preventDefault(),
                            e.decrementHours(),
                            e.$apply()));
                    }),
                      i.on("keydown", function (t) {
                        S ||
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
                        S ||
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
                    var a = function (t, i, n) {
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
                            $ < C || $ > T ? a(!0) : u("h"))
                          : a(!0));
                    }),
                      t.on("blur", function (t) {
                        (k.$setTouched(),
                          f()
                            ? p()
                            : null === e.hours || "" === e.hours
                              ? a(!0)
                              : !e.invalidHours &&
                                e.hours < 10 &&
                                e.$apply(function () {
                                  e.hours = d(e.hours, !x);
                                }));
                      }),
                      (e.updateMinutes = function () {
                        var e = l(),
                          t = s();
                        (k.$setDirty(),
                          angular.isDefined(e) && angular.isDefined(t)
                            ? ($.setHours(t),
                              $.setMinutes(e),
                              $ < C || $ > T ? a(void 0, !0) : u("m"))
                            : a(void 0, !0));
                      }),
                      i.on("blur", function (t) {
                        (k.$setTouched(),
                          f()
                            ? p()
                            : null === e.minutes
                              ? a(void 0, !0)
                              : !e.invalidMinutes &&
                                e.minutes < 10 &&
                                e.$apply(function () {
                                  e.minutes = d(e.minutes);
                                }));
                      }),
                      (e.updateSeconds = function () {
                        var e = c();
                        (k.$setDirty(),
                          angular.isDefined(e)
                            ? ($.setSeconds(e), u("s"))
                            : a(void 0, void 0, !0));
                      }),
                      n.on("blur", function (t) {
                        f()
                          ? p()
                          : !e.invalidSeconds &&
                            e.seconds < 10 &&
                            e.$apply(function () {
                              e.seconds = d(e.seconds);
                            });
                      }));
                  }),
                  (this.render = function () {
                    var t = k.$viewValue;
                    isNaN(t)
                      ? (k.$setValidity("time", !1),
                        a.error(
                          'Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.',
                        ))
                      : (t && ($ = t),
                        $ < C || $ > T
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
                    e.noIncrementHours() || g(60 * D * 60);
                  }),
                  (e.decrementHours = function () {
                    e.noDecrementHours() || g(60 * -D * 60);
                  }),
                  (e.incrementMinutes = function () {
                    e.noIncrementMinutes() || g(60 * O);
                  }),
                  (e.decrementMinutes = function () {
                    e.noDecrementMinutes() || g(60 * -O);
                  }),
                  (e.incrementSeconds = function () {
                    e.noIncrementSeconds() || g(U);
                  }),
                  (e.decrementSeconds = function () {
                    e.noDecrementSeconds() || g(-U);
                  }),
                  (e.toggleMeridian = function () {
                    var t = l(),
                      i = s();
                    e.noToggleMeridian() ||
                      (angular.isDefined(t) && angular.isDefined(i)
                        ? g(720 * ($.getHours() < 12 ? 60 : -60))
                        : (e.meridian = e.meridian === M[0] ? M[1] : M[0]));
                  }),
                  (e.blur = function () {
                    k.$setTouched();
                  }),
                  e.$on("$destroy", function () {
                    for (; P.length; ) P.shift()();
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
                    var a = n[0],
                      r = n[1];
                    r && a.init(r, t.find("input"));
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
              function (e, t, i, n, a, r, o, s, l, c, d, u, p) {
                function m() {
                  (j.moveInProgress || ((j.moveInProgress = !0), j.$digest()),
                    _());
                }
                function g() {
                  ((j.position = O ? u.offset(t) : u.position(t)),
                    (j.position.top += t.prop("offsetHeight")));
                }
                var v,
                  h,
                  f = [9, 13, 27, 38, 40],
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
                  P,
                  k = a(i.typeaheadLoading).assign || angular.noop,
                  M = i.typeaheadShouldSelect
                    ? a(i.typeaheadShouldSelect)
                    : function (e, t) {
                        var i = t.$event;
                        return 13 === i.which || 9 === i.which;
                      },
                  x = a(i.typeaheadOnSelect),
                  D =
                    !!angular.isDefined(i.typeaheadSelectOnBlur) &&
                    e.$eval(i.typeaheadSelectOnBlur),
                  C = a(i.typeaheadNoResults).assign || angular.noop,
                  T = i.typeaheadInputFormatter
                    ? a(i.typeaheadInputFormatter)
                    : void 0,
                  O =
                    !!i.typeaheadAppendToBody &&
                    e.$eval(i.typeaheadAppendToBody),
                  S = i.typeaheadAppendTo ? e.$eval(i.typeaheadAppendTo) : null,
                  U = !1 !== e.$eval(i.typeaheadFocusFirst),
                  F =
                    !!i.typeaheadSelectOnExact &&
                    e.$eval(i.typeaheadSelectOnExact),
                  I = a(i.typeaheadIsOpen).assign || angular.noop,
                  E = e.$eval(i.typeaheadShowHint) || !1,
                  L = a(i.ngModel),
                  R = a(i.ngModel + "($$$p)"),
                  A = p.parse(i.uibTypeahead),
                  j = e.$new(),
                  N = e.$on("$destroy", function () {
                    j.$destroy();
                  });
                j.$on("$destroy", N);
                var H,
                  V,
                  B =
                    "typeahead-" +
                    j.$id +
                    "-" +
                    Math.floor(1e4 * Math.random());
                (t.attr({
                  "aria-autocomplete": "list",
                  "aria-expanded": !1,
                  "aria-owns": B,
                }),
                  E &&
                    ((H = angular.element("<div></div>")).css(
                      "position",
                      "relative",
                    ),
                    t.after(H),
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
                    H.append(V),
                    V.after(t)));
                var z = angular.element("<div uib-typeahead-popup></div>");
                (z.attr({
                  id: B,
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
                    z.attr("template-url", i.typeaheadTemplateUrl),
                  angular.isDefined(i.typeaheadPopupTemplateUrl) &&
                    z.attr("popup-template-url", i.typeaheadPopupTemplateUrl));
                var Y = function () {
                    ((j.matches = []),
                      (j.activeIdx = -1),
                      t.attr("aria-expanded", !1),
                      E && V.val(""));
                  },
                  W = function (e) {
                    return B + "-option-" + e;
                  };
                j.$watch("activeIdx", function (e) {
                  e < 0
                    ? t.removeAttr("aria-activedescendant")
                    : t.attr("aria-activedescendant", W(e));
                });
                var q = function (i, n) {
                  var a = { $viewValue: i };
                  (k(e, !0),
                    C(e, !1),
                    r.when(A.source(e, a)).then(
                      function (r) {
                        var o = i === v.$viewValue;
                        if (o && $)
                          if (r && r.length > 0) {
                            ((j.activeIdx = U ? 0 : -1),
                              C(e, !1),
                              (j.matches.length = 0));
                            for (var s = 0; s < r.length; s++)
                              ((a[A.itemName] = r[s]),
                                j.matches.push({
                                  id: W(s),
                                  label: A.viewMapper(j, a),
                                  model: r[s],
                                }));
                            if (
                              ((j.query = i),
                              g(),
                              t.attr("aria-expanded", !0),
                              F &&
                                1 === j.matches.length &&
                                (function (e) {
                                  return (
                                    !!(j.matches.length > 0 && e) &&
                                    e.toUpperCase() ===
                                      j.matches[0].label.toUpperCase()
                                  );
                                })(i) &&
                                (angular.isNumber(j.debounceUpdate) ||
                                angular.isObject(j.debounceUpdate)
                                  ? d(
                                      function () {
                                        j.select(0, n);
                                      },
                                      angular.isNumber(j.debounceUpdate)
                                        ? j.debounceUpdate
                                        : j.debounceUpdate.default,
                                    )
                                  : j.select(0, n)),
                              E)
                            ) {
                              var l = j.matches[0].label;
                              angular.isString(i) &&
                              i.length > 0 &&
                              l.slice(0, i.length).toUpperCase() ===
                                i.toUpperCase()
                                ? V.val(i + l.slice(i.length))
                                : V.val("");
                            }
                          } else (Y(), C(e, !0));
                        o && k(e, !1);
                      },
                      function () {
                        (Y(), k(e, !1), C(e, !0));
                      },
                    ));
                };
                O &&
                  (angular.element(l).on("resize", m),
                  s.find("body").on("scroll", m));
                var _ = d(function () {
                  (j.matches.length && g(), (j.moveInProgress = !1));
                }, 200);
                ((j.moveInProgress = !1), (j.query = void 0));
                var G,
                  K = function () {
                    G && o.cancel(G);
                  };
                (Y(),
                  (j.assignIsOpen = function (t) {
                    I(e, t);
                  }),
                  (j.select = function (n, a) {
                    var r,
                      s,
                      l = {};
                    ((P = !0),
                      (l[A.itemName] = s = j.matches[n].model),
                      (r = A.modelMapper(e, l)),
                      (function (t, i) {
                        angular.isFunction(L(e)) && h.getOption("getterSetter")
                          ? R(t, { $$$p: i })
                          : L.assign(t, i);
                      })(e, r),
                      v.$setValidity("editable", !0),
                      v.$setValidity("parse", !0),
                      x(e, {
                        $item: s,
                        $model: r,
                        $label: A.viewMapper(e, l),
                        $event: a,
                      }),
                      Y(),
                      !1 !== j.$eval(i.typeaheadFocusOnSelect) &&
                        o(
                          function () {
                            t[0].focus();
                          },
                          0,
                          !1,
                        ));
                  }),
                  t.on("keydown", function (t) {
                    if (0 !== j.matches.length && -1 !== f.indexOf(t.which)) {
                      var i,
                        n = M(e, { $event: t });
                      if (
                        (-1 === j.activeIdx && n) ||
                        (9 === t.which && t.shiftKey)
                      )
                        return (Y(), void j.$digest());
                      switch ((t.preventDefault(), t.which)) {
                        case 27:
                          (t.stopPropagation(), Y(), e.$digest());
                          break;
                        case 38:
                          ((j.activeIdx =
                            (j.activeIdx > 0 ? j.activeIdx : j.matches.length) -
                            1),
                            j.$digest(),
                            ((i = z[0].querySelectorAll(".uib-typeahead-match")[
                              j.activeIdx
                            ]).parentNode.scrollTop = i.offsetTop));
                          break;
                        case 40:
                          ((j.activeIdx = (j.activeIdx + 1) % j.matches.length),
                            j.$digest(),
                            ((i = z[0].querySelectorAll(".uib-typeahead-match")[
                              j.activeIdx
                            ]).parentNode.scrollTop = i.offsetTop));
                          break;
                        default:
                          n &&
                            j.$apply(function () {
                              angular.isNumber(j.debounceUpdate) ||
                              angular.isObject(j.debounceUpdate)
                                ? d(
                                    function () {
                                      j.select(j.activeIdx, t);
                                    },
                                    angular.isNumber(j.debounceUpdate)
                                      ? j.debounceUpdate
                                      : j.debounceUpdate.default,
                                  )
                                : j.select(j.activeIdx, t);
                            });
                      }
                    }
                  }),
                  t.on("focus", function (e) {
                    (($ = !0),
                      0 !== b ||
                        v.$viewValue ||
                        o(function () {
                          q(v.$viewValue, e);
                        }, 0));
                  }),
                  t.on("blur", function (e) {
                    (D &&
                      j.matches.length &&
                      -1 !== j.activeIdx &&
                      !P &&
                      ((P = !0),
                      j.$apply(function () {
                        angular.isObject(j.debounceUpdate) &&
                        angular.isNumber(j.debounceUpdate.blur)
                          ? d(function () {
                              j.select(j.activeIdx, e);
                            }, j.debounceUpdate.blur)
                          : j.select(j.activeIdx, e);
                      })),
                      !w &&
                        v.$error.editable &&
                        (v.$setViewValue(),
                        j.$apply(function () {
                          (v.$setValidity("editable", !0),
                            v.$setValidity("parse", !0));
                        }),
                        t.val("")),
                      ($ = !1),
                      (P = !1));
                  }));
                var Z = function (i) {
                  t[0] !== i.target &&
                    3 !== i.which &&
                    0 !== j.matches.length &&
                    (Y(), c.$$phase || e.$digest());
                };
                (s.on("click", Z),
                  e.$on("$destroy", function () {
                    (s.off("click", Z),
                      (O || S) && X.remove(),
                      O &&
                        (angular.element(l).off("resize", m),
                        s.find("body").off("scroll", m)),
                      z.remove(),
                      E && H.remove());
                  }));
                var X = n(z)(j);
                (O
                  ? s.find("body").append(X)
                  : S
                    ? angular.element(S).eq(0).append(X)
                    : t.after(X),
                  (this.init = function (t) {
                    ((h = (function (e) {
                      var t;
                      return (
                        angular.version.minor < 6
                          ? ((t = e.$options || {}).getOption = function (e) {
                              return t[e];
                            })
                          : (t = e.$options),
                        t
                      );
                    })((v = t))),
                      (j.debounceUpdate = a(h.getOption("debounce"))(e)),
                      v.$parsers.unshift(function (t) {
                        return (
                          ($ = !0),
                          0 === b || (t && t.length >= b)
                            ? y > 0
                              ? (K(),
                                (function (e) {
                                  G = o(function () {
                                    q(e);
                                  }, y);
                                })(t))
                              : q(t)
                            : (k(e, !1), K(), Y()),
                          w
                            ? t
                            : t
                              ? void v.$setValidity("editable", !1)
                              : (v.$setValidity("editable", !0), null)
                        );
                      }),
                      v.$formatters.push(function (t) {
                        var i,
                          n = {};
                        return (
                          w || v.$setValidity("editable", !0),
                          T
                            ? ((n.$model = t), T(e, n))
                            : ((n[A.itemName] = t),
                              (i = A.viewMapper(e, n)),
                              (n[A.itemName] = void 0),
                              i !== A.viewMapper(e, n) ? i : t)
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
                        var a = t.debounce();
                        angular.isNumber(a) || angular.isObject(a)
                          ? e(
                              function () {
                                t.select({ activeIdx: i, evt: n });
                              },
                              angular.isNumber(a) ? a : a.default,
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
                  link: function (n, a, r) {
                    var o =
                      i(r.templateUrl)(n.$parent) ||
                      "uib/template/typeahead/typeahead-match.html";
                    e(o).then(function (e) {
                      var i = angular.element(e.trim());
                      (a.replaceWith(i), t(i)(n));
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
                  function (t, a) {
                    return (
                      !n &&
                        (function (e) {
                          return /<.*>/g.test(e);
                        })(t) &&
                        i.warn("Unsafe use of typeahead please use ngSanitize"),
                      (t = a
                        ? ("" + t).replace(
                            new RegExp(
                              (function (e) {
                                return e.replace(
                                  /([.?*+^$[\]\\(){}|-])/g,
                                  "\\$1",
                                );
                              })(a),
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
      2152: (e) => {
        e.exports =
          '<div ng-class="{ \'res-chart-scroll\' : config.reservation.scale>100 , \'res-chart-noscroll\'  : config.reservation.scale==100 }" ng-if="config.reservation.end !== defined && config.blockTimes.length != 0" id="reservation-chart"> <div class="res-day"> <div class="res-day-overlay" ng-hide="!config.reservation.innerWidth>0" ng-style="{\'width\' : config.reservation.scale + \'%\'}"> <div class="res-day-label">Reservering</div> <div class="res-time-start" ng-class="{ \'res-time-notstarted\' : config.reservation.stage == 0 , \'res-time-started\' : config.reservation.stage == 1, \'res-time-warning\' : config.reservation.stage == 2, \'res-time-critical\' : config.reservation.stage == 3, \'res-time-finished\' : config.reservation.stage == 4 }" ng-style="{\'left\':config.reservation.offsetLeft + \'%\' , \'width\' : config.reservation.width + \'%\'}" id="reservation-time-start"> <div class="res-time-start-label" ng-if="config.reservation.tooSmall == false">{{config.reservation.start | localmoment: config.reservation.showTime ? \'HH:mm\' : \'dd DD\'}}</div> <div class="res-time-end-label" ng-if="config.reservation.tooSmall == false">{{config.reservation.end | localmoment: config.reservation.showTime ? \'HH:mm\' : \'dd DD\'}}</div> </div> <div class="res-now" ng-style="{\'left\':config.reservation.nowOffset + \'%\'}" id="reservation-now"> <div class="res-now-label"> <span>{{config.reservation.dateNow | localmoment: \'HH:mm\' }}</span> </div> </div> </div> <div class="res-block-container" ng-hide="!config.reservation.innerWidth>0" ng-style="{\'width\' : config.reservation.scale + \'%\'}"> <div class="res-block-label">Betaald parkeer tijden</div> <div class="res-block" ng-class="{\n                 \'res-block-undefined\' : !block.isDefined,\n                 \'res-block-notallowed\' : !block.isAllowed,\n                 \'res-block-free\' : block.isDefined && block.isFree,\n                 \'res-block-paid\' : !block.isFree,\n                 \'res-block-exception\' : block.isException\n                 }" ng-style="{\'width\': block.width+\'%\'}" ng-repeat="block in config.reservation.blocks"> <div class="block-startday" ng-if="block.showStartOfDay == true">{{block.validFrom | localmoment:\'dd DD MMM\'}}</div> <div class="block-info"> <span class="block-from">{{block.validFrom | date:\'HH:mm\'}}</span> <span class="block-until">{{block.validUntil | date:\'HH:mm\'}}</span> <span class="block-units" ng-hide="config.reservation.balance == null" ng-if="!block.isFree">Betaald parkeren</span> <span class="block-units" ng-hide="config.reservation.balance == null" ng-if="block.isDefined && block.isFree && !config.reservation.startTariff">Gratis</span> <span class="block-units" ng-hide="config.reservation.balance == null" ng-if="!block.isDefined && block.isAllowed">Vrij</span> <span class="block-units" ng-hide="config.reservation.balance == null" ng-if="!block.isAllowed">Niet toegestaan</span> </div> </div> </div> </div> </div> ';
      },
      2367: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("menuService", [
              "model",
              "datacontext",
              "locationService",
              function (e, t, i) {
                var n = [],
                  a = {
                    clear: r,
                    create: function () {
                      if (
                        ((n.length = 0),
                        null != e.getPermits() &&
                          s("Permits", "Producten", "glyphicon-briefcase"),
                        null != e.selected.permit &&
                          s("Permit", "Passen", "glyphicon-credit-card", [
                            e.selected.permit.Code,
                          ]),
                        null != e.selected.permitMedia)
                      ) {
                        var a = e.selected.permitMedia;
                        (null != a.Permit.UnitPrice &&
                          null != a.Permit.UpgradeUnits &&
                          null != a.Balance &&
                          s(
                            "Upgrade",
                            "Opwaarderen",
                            "glyphicon-shopping-cart",
                            [a.Code],
                          ),
                          null != a.ActiveReservations &&
                            a.ActiveReservations.length > 0 &&
                            s("ActivePages", "Actief", "glyphicon-transfer", [
                              a,
                            ]),
                          s("Add", "Kenteken aanmelden", "glyphicon-plus", [
                            a.Code,
                          ]),
                          null != a.History &&
                            s("History", "Geschiedenis", "glyphicon-stats", [
                              a.Code,
                            ]));
                      }
                      (s("Help", "Help", "glyphicon-question-sign"),
                        e.showPrivacyInfo() &&
                          s("Privacy", "Privacy", "glyphicon-eye-close"),
                        o(
                          function () {
                            t.logout().then(function () {
                              (r(), i.toLogin());
                            });
                          },
                          "Uitloggen",
                          "glyphicon-log-out",
                        ));
                    },
                  };
                return (
                  Object.defineProperty(a, "menu", {
                    value: n,
                    writable: !1,
                    configurable: !1,
                  }),
                  a
                );
                function r() {
                  n.length = 0;
                }
                function o(e, t, i, a) {
                  var r = {};
                  ((r.onClick = e),
                    (r.text = t),
                    (r.icon = i),
                    (r.active = a),
                    (r.position = n.length + 1),
                    n.push(r));
                }
                function s(e, t, n, a) {
                  o(
                    function () {
                      i.toLocation(e, a);
                    },
                    t,
                    n,
                    i.isLocation(e),
                  );
                }
              },
            ]));
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
                function (e, t, i, n, a) {
                  var r = n.getParam("id");
                  if (!r)
                    return (
                      i.session.set("asToken"),
                      i.session.set("Name"),
                      void n.toLogin()
                    );
                  e.login("UserAs", r)
                    .then(function () {
                      (i.session.set("asToken", t.token), n.toLogin());
                    })
                    .catch(function (e) {
                      (a.add(e), n.toLogin());
                    });
                },
              ],
            }));
      },
      3550: (e) => {
        e.exports =
          '<div> <h1>Betaling {{$ctrl.isSuccess === true ? \'succesvol\' : \'geannuleerd\'}}</h1> <div ng-if="$ctrl.isSuccess === true"> <flow-info class="inline-alert bg-success" context="\'Payment\'" content="\'Success\'" not-entire-context="true" no-show-when-empty="true"></flow-info> <p> <span ng-if="$ctrl.unitFormat != null && $ctrl.checkResult"> Het saldo voor de media met code <strong>{{$ctrl.checkResult.Code}}</strong> is opgewaardeerd met <strong>{{$ctrl.checkResult.Units | localformat: $ctrl.unitFormat}}</strong>. </span> <span ng-if="$ctrl.currentBalance"> Het huidige saldo is: <strong>{{$ctrl.currentBalance | localformat: $ctrl.unitFormat}}</strong>. </span> </p> </div> <div ng-if="$ctrl.isSuccess === false"> <p ng-if="$ctrl.error" class="inline-alert bg-danger">{{$ctrl.error.message}}</p> <flow-info class="inline-alert bg-warning" context="\'Payment\'" content="\'Cancelled\'" not-entire-context="true" no-show-when-empty="true"></flow-info> </div> <button ng-if="$ctrl.isLoggedIn && !$ctrl.loading" id="btnToAddLicensePlate" class="btn btn-primary btn-block" ng-click="$ctrl.toAddLicensePlate()">Naar Kenteken aanmelden</button> <a ng-if="!$ctrl.isLoggedIn" href="/">Klik hier om in te loggen</a> </div> ';
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
                                identifier: i.asToken,
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
                      ((i.asToken = t.session.get("asToken")),
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
              },
            }));
      },
      3618: (e) => {
        e.exports =
          '<div ng-controller="permits as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Productoverzicht</h1> </section> <section class="extra-bottom-small" ng-show="(vm.permits != null) && (vm.permits.length > 0)"> <div class="row"> <div class="col-xs-12"> <div class="list-heading"> <h2 class="col-xs-12">Mijn producten</h2> </div> </div> </div> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-3 mouse-hand" sort="vm.permitTable" sort-column="Code">Nummer</th> <th scope="col" class="col-xs-6 mouse-hand" sort="vm.permitTable" sort-column="Type">Type</th> <th scope="col" class="col-xs-3 text-right mouse-hand" sort="vm.permitTable" sort-column="TypeCode">Code</th> </tr> </thead> <tbody> <tr ng-repeat="permit in vm.permits | orderBy : vm.permitTable.column : vm.permitTable.reverse" class="mouse-hand" ng-click="vm.toPermitPages(permit)"> <td class="col-xs-3"><strong>{{permit.Code}}</strong></td> <td class="col-xs-6">{{permit.Type}}</td> <td class="col-xs-3 text-right">{{permit.TypeCode}}</td> </tr> </tbody> </table> </section> </div>';
      },
      3834: (e) => {
        e.exports =
          '<div ng-controller="add as vm"> <section class="page-header border-bottom extra-bottom"> <div class="row"> <div class="col-xs-12"> <h1>Kenteken aanmelden</h1> </div> </div> </section> <form name="addForm" class="extra-bottom-small" ng-show="vm.permitMedia !== null" novalidate> <div id="balance-wrapper" class="extra-bottom" ng-show="vm.permitMedia.Balance !== null"> <div class="row"> <label id="lblCurrentBalance" class="col-xs-6"><span class="glyphicon glyphicon-dashboard"></span> Uw huidige saldo</label> <p id="lblBalanceAmount" class="col-xs-6 text-right no-margin accent" ng-class="{\'error-limit-exceeded\': vm.reservation.units > vm.permitMedia.Balance}"> {{vm.permitMedia.Balance | localformat: vm.permitMedia.Permit.UnitFormat}} </p> </div> <div class="row" ng-show="vm.permitMedia.RemainingDowngrades !== null"> <label id="lblRemainingDowngrades" class="col-xs-6">Perioderestant</label> <p id="lblRemainingDowngradesAmount" class="col-xs-6 text-right no-margin" ng-class="{\'error-limit-exceeded\': vm.reservation.units > vm.permitMedia.RemainingDowngrades}"> {{vm.permitMedia.RemainingDowngrades | localformat: vm.permitMedia.Permit.UnitFormat}} </p> </div> <div class="row"> <label id="lblUnits" class="col-xs-6">Af te boeken</label> <p id="lblUnitsAmount" class="col-xs-6 text-right no-margin">{{vm.reservation.units | localformat: vm.permitMedia.Permit.UnitFormat}}</p> </div> </div> <div class="form-group licensePlateInput" ng-class="{ \'has-error\' : addForm.licenseplate.$invalid }" ng-click="vm.permitMedia.Permit.IsLicensePlatesFixed && vm.toggle(\'licensePlates\')" role="none" tabindex="-1"> <label for="txtLicenseplate">Kenteken</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-road"></i> </div> <input id="txtLicenseplate" name="licenseplate" type="text" placeholder="Kenteken" maxlength="10" class="form-control text-uppercase" ng-class="{\'mouse-hand\' : vm.permitMedia.Permit.IsLicensePlatesFixed }" ng-model="vm.reservation.licensePlate.Value" ng-change="vm.onLicensePlateChange()" ng-readonly="vm.permitMedia.Permit.IsLicensePlatesFixed"/> <div class="input-group-addon licenseplate-name" ng-show="vm.reservation.licensePlate.Name">{{vm.reservation.licensePlate.Name}}</div> <div class="input-group-addon mouse-hand" ng-show="(vm.permitMedia.LicensePlates && (vm.permitMedia.LicensePlates.length > 0)) || (vm.permitMedia.Permit.LicensePlates && (vm.permitMedia.Permit.LicensePlates.length > 0))" ng-click="!vm.permitMedia.Permit.IsLicensePlatesFixed && vm.toggle(\'licensePlates\')" aria-label="Selecteer een opgeslagen kenteken" tabindex="0"> <i class="glyphicon glyphicon-book"></i> </div> </div> <div ng-messages="addForm.licenseplate.$error"> <span ng-message="startReservation" class="help-block">{{addForm.licenseplate.$error.startReservation}}</span> </div> </div> <div class="row"> <div class="col-xs-12"> <div ng-show="vm.show(\'licensePlates\')"> <table class="table" tabindex="0"> <caption class="sr-only">Opgeslagen kentekens</caption> <colgroup> <col class="sr-only"/> <col class="mouse-hand"/> <col ng-show="vm.validLicensePlates.hasName" class="mouse-hand"/> <col ng-show="vm.validLicensePlates.hasIsEditable" class="mouse-hand"/> </colgroup> <thead> <tr> <th scope="col" class="sr-only"> Selecteer kenteken </th> <th scope="col" class="mouse-hand" sort="vm.licensePlates" sort-column="Value"> Kenteken </th> <th scope="col" class="mouse-hand" sort="vm.licensePlates" sort-column="Name" ng-show="vm.validLicensePlates.hasName"> Naam </th> <th scope="col" class="mouse-hand text-center" sort="vm.licensePlates" sort-column="isEditable" ng-show="vm.validLicensePlates.hasIsEditable"> Verwijderen </th> </tr> </thead> <tbody> <tr ng-repeat="licensePlate in vm.validLicensePlates | orderBy : vm.licensePlates.column : vm.licensePlates.reverse"> <td class="sr-only"> <button type="button" ng-click="vm.setLicensePlate(licensePlate); vm.toggle(\'licensePlates\');"> Selecteer kenteken {{licensePlate.Value}} {{licensePlate.Name ? \'van\' : \'\'}} {{licensePlate.Name}} </button> </td> <td class="mouse-hand" role="cell" ng-click="vm.setLicensePlate(licensePlate); vm.toggle(\'licensePlates\');"> {{licensePlate.Value}} </td> <td class="mouse-hand" role="cell" ng-show="vm.validLicensePlates.hasName" ng-click="vm.setLicensePlate(licensePlate); vm.toggle(\'licensePlates\');"> {{licensePlate.Name}} </td> <td class="text-center" ng-show="vm.validLicensePlates.hasIsEditable"> <span class="mouse-hand glyphicon glyphicon-trash font-size-large" ng-show="licensePlate.isEditable" ng-click="vm.deleteLicensePlate(licensePlate)" aria-label="Verwijder opgeslagen kenteken"> </span> </td> </tr> <tr ng-if="!vm.validLicensePlates.length"> <td>{{vm.licensePlatesError}}</td> </tr> </tbody> </table> </div> </div> </div> <div ng-show="vm.showStart" class="form-group" tabindex="-1" ng-class="{ \'has-error\' : addForm.datefrom.$invalid }"> <label for="txtFrom">Van</label> <div class="input-group" ng-click="vm.toggle(\'dateStart\')" role="none"> <div class="input-group-addon"> <i class="glyphicon glyphicon-calendar"></i> </div> <input id="txtFrom" name="datefrom" type="text" class="form-control mouse-hand" placeholder="Datum vanaf" ng-model="vm.reservationStart" readonly="readonly"/> <div class="input-group-addon mouse-hand" ng-show="vm.permitMedia.Permit.PresentationDateFromVariable" role="button" aria-label="{{vm.btnTextFrom}}" tabindex="0"> <i class="glyphicon glyphicon-pencil"></i> </div> </div> <div ng-messages="addForm.datefrom.$error"> <span ng-message="startReservation" class="help-block">{{addForm.datefrom.$error.startReservation}}</span> </div> </div> <div class="row" ng-show="vm.showStart"> <div class="col-xs-12"> <div class="slide-content" ng-show="vm.permitMedia.Permit.PresentationDateFromVariable && vm.show(\'dateStart\')"> <div class="row extra-bottom"> <div class="datepicker"> <div uib-datepicker ng-model="vm.reservation.start" ng-change="vm.onReservationStartChanged(true)" datepicker-options="vm.dateTimeOptions"></div> </div> <div class="timepicker" ng-show="vm.showTime"> <div uib-timepicker ng-model="vm.reservation.start" ng-change="vm.onReservationStartChanged(false)" hour-step="vm.dateTimeOptions.hourStep" minute-step="vm.dateTimeOptions.minuteStep" show-meridian="vm.dateTimeOptions.isMeridian"></div> </div> </div> <div class="row"> <div class="col-xs-12"> <button class="btn btn-primary btn-block" ng-click="vm.toggle(\'dateStart\')">OK</button> </div> </div> </div> </div> </div> <div ng-show="vm.showEnd" class="form-group" tabindex="-1" ng-class="{ \'has-error\' : addForm.dateto.$invalid }"> <label for="txtTo">Tot</label> <div class="input-group" ng-click="vm.toggle(\'dateEnd\')" role="none"> <div class="input-group-addon"> <i class="glyphicon glyphicon-calendar"></i> </div> <input id="txtTo" name="dateto" type="text" class="form-control mouse-hand" placeholder="Datum tot" ng-model="vm.reservationEnd" readonly="readonly"/> <div class="input-group-addon mouse-hand" ng-show="vm.permitMedia.Permit.PresentationDateUntilVariable" role="button" aria-label="{{vm.btnTextUntil}}"> <i class="glyphicon glyphicon-pencil"></i> </div> </div> <div ng-messages="addForm.dateto.$error"> <span ng-message="startReservation" class="help-block">{{addForm.dateto.$error.startReservation}}</span> </div> </div> <div class="row" ng-show="vm.showEnd"> <div class="col-xs-12"> <div class="slide-content" ng-show="vm.permitMedia.Permit.PresentationDateUntilVariable && vm.show(\'dateEnd\')"> <div class="row extra-bottom"> <div class="datepicker"> <div uib-datepicker ng-model="vm.reservation.end" ng-change="vm.onReservationEndChanged()" datepicker-options="vm.dateTimeOptions"></div> </div> <div class="timepicker" ng-show="vm.showTime"> <div uib-timepicker ng-model="vm.reservation.end" ng-change="vm.onReservationEndChanged()" hour-step="vm.dateTimeOptions.hourStep" minute-step="vm.dateTimeOptions.minuteStep" show-meridian="vm.dateTimeOptions.isMeridian"></div> </div> </div> <div class="row"> <div class="col-xs-12"> <button class="btn btn-primary btn-block" ng-click="vm.toggle(\'dateEnd\')">OK</button> </div> </div> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="reservationContainer"> <reservation-chart config="vm.resChartConfig"></reservation-chart> </div> </div> </div> <div class="row" ng-show="vm.permitMedia.LicensePlates && (!vm.licensePlateFavorite || vm.licensePlateFavorite.isEditable)"> <div class="col-xs-12"> <input id="chkRememberLicenseplate" type="checkbox" ng-model="vm.reservation.saveLicensePlate"/> <label for="chkRememberLicenseplate" class="input-caption">Kenteken bewaren</label> </div> </div> <div class="form-group" ng-show="vm.reservation.saveLicensePlate"> <label for="txtLicensePlateName">Naam</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-user"></i> </div> <input id="txtLicensePlateName" class="form-control" type="text" placeholder="Naam" ng-model="vm.reservation.licensePlate.Name"/> </div> </div> <div class="row"> <div class="col-xs-12"> <button id="btnStartReservation" class="btn btn-primary btn-block" ng-click="vm.startReservation()">Aanmelden Kenteken</button> </div> </div> </form> </div>';
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
      3962: (e) => {
        e.exports =
          '<div ng-controller="history as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Geschiedenis</h1> </section> <section class="extra-bottom-small" ng-show="vm.reservations != null"> <div class="row"> <div class="col-xs-12"> <div class="list-heading mouse-hand" ng-click="vm.toggle(\'reservationsHistory\')"> <h2 class="col-xs-10 col-md-11">Reserveringen</h2> <div class="col-xs-2 col-md-1 text-right"><i class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !vm.reservationsHistory.show, \'glyphicon-chevron-up\': vm.reservationsHistory.show}"></i></div> </div> </div> </div> <div ng-show="vm.show(\'reservationsHistory\')"> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-5 col-sm-5">Datum</th> <th scope="col" class="col-xs-3 col-sm-4">Kenteken</th> <th scope="col" class="col-xs-4 col-sm-3 text-right">Verbruikt saldo</th> </tr> </thead> <tbody> <tr ng-repeat="reservation in vm.reservations.Items"> <td class="col-xs-5 col-sm-5"> <div>{{reservation.ValidFrom | localmoment: \'DD-MM-YYYY HH:mm\'}}</div> <div>{{reservation.ValidUntil | localmoment: \'DD-MM-YYYY HH:mm\'}}</div> </td> <td class="col-xs-3 col-sm-4">{{reservation.LicensePlate.DisplayValue}}</td> <td class="col-xs-4 col-sm-3 text-right">{{reservation.Units | localformat: vm.unitFormat}}</td> </tr> <tr ng-if="vm.reservations.Items.length < 1"> <td class="empty-list" colspan="3">Er zijn geen reserveringen!</td> </tr> </tbody> </table> <cp-pagination collection="vm.reservations" on-page-change="vm.setReservationsPage(page)" aria-label="Reserveringen navigatie"></cp-pagination> </div> </section> <section class="extra-bottom-small" ng-show="vm.upgrades != null"> <div class="row"> <div class="col-xs-12"> <div class="list-heading mouse-hand" ng-click="vm.toggle(\'upgradesHistory\')"> <h2 class="col-xs-10 col-md-11">Opwaarderingen</h2> <div class="col-xs-2 col-md-1 text-right"><i class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !vm.upgradesHistory.show, \'glyphicon-chevron-up\': vm.upgradesHistory.show}"></i></div> </div> </div> </div> <div ng-show="vm.show(\'upgradesHistory\')"> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-5 col-sm-5 no-margin">Datum</th> <th scope="col" class="col-xs-4 col-sm-4 no-margin">Eenheid</th> <th scope="col" class="col-xs-3 col-sm-3 no-margin text-right" ng-show="vm.showPrice">Bedrag</th> </tr> </thead> <tbody> <tr ng-repeat="upgrade in vm.upgrades.Items"> <td class="col-xs-5 col-sm-5">{{upgrade.ValidFrom | localmoment: \'DD-MM-YYYY HH:mm\'}}</td> <td class="col-xs-4 col-sm-4">{{upgrade.Units | localformat: vm.unitFormat}}</td> <td class="col-xs-3 col-sm-3 text-right" ng-show="vm.showPrice">{{upgrade.Amount | currency: \'€\': 2}}</td> </tr> <tr ng-if="vm.upgrades.Items.length < 1"> <td class="empty-list" colspan="3">Er zijn geen opwaarderingen!</td> </tr> </tbody> </table> <cp-pagination collection="vm.upgrades" on-page-change="vm.setUpgradesPage(page)" aria-label="Opwaarderingen navigatie"></cp-pagination> </div> </section> <section class="extra-bottom-small" ng-show="vm.moveBalances != null"> <div class="row"> <div class="col-xs-12"> <div class="list-heading mouse-hand" ng-click="vm.toggle(\'moveBalancesHistory\')"> <h2 class="col-xs-10 col-md-11">Overboekingen</h2> <div class="col-xs-2 col-md-1 text-right"><i class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !vm.moveBalancesHistory.show, \'glyphicon-chevron-up\': vm.moveBalancesHistory.show}"></i></div> </div> </div> </div> <div ng-show="vm.show(\'moveBalancesHistory\')"> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-4 col-sm-4">Datum</th> <th scope="col" class="col-xs-4 col-sm-4">Eenheden</th> <th scope="col" class="col-xs-2 col-sm-2">Van</th> <th scope="col" class="col-xs-2 col-sm-2">Naar</th> </tr> </thead> <tbody> <tr ng-repeat="moveBalance in vm.moveBalances.Items"> <td class="col-xs-4 col-sm-4">{{moveBalance.ValidFrom | localmoment: \'DD-MM-YYYY HH:mm\'}}</td> <td class="col-xs-4 col-sm-4">{{moveBalance.Units | localformat: vm.unitFormat}}</td> <td class="col-xs-2 col-sm-2">{{moveBalance.FromPermitMediaCode}}</td> <td class="col-xs-2 col-sm-2">{{moveBalance.ToPermitMediaCode}}</td> </tr> <tr ng-if="vm.moveBalances.Items.length < 1"> <td class="empty-list" colspan="4">Er zijn geen overboekingen!</td> </tr> </tbody> </table> <cp-pagination collection="vm.moveBalances" on-page-change="vm.setMoveBalancesPage(page)" aria-label="Overboekingen navigatie"></cp-pagination> </div> </section> </div>';
      },
      4378: (e) => {
        e.exports =
          '<div ng-controller="privacy as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Privacy</h1> </section> <section class="extra-bottom-small"> <flow-info context="\'Privacy\'" content="\'Disclaimer\'" not-entire-context="true"></flow-info> </section> </div>';
      },
      4424: (e) => {
        e.exports =
          '<div ng-controller="activelist as vm"> <section class="page-header border-bottom extra-bottom"> <h1>Actieve reserveringen</h1> </section> <section class="extra-bottom-small" ng-show="(vm.permitMedia.ActiveReservations != null) && (vm.permitMedia.ActiveReservations.length > 0)"> <div class="row"> <div class="col-xs-12"> <div class="list-heading"> <h2 class="col-xs-12">Actief</h2> </div> </div> </div> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-4 no-margin">Kenteken</th> <th scope="col" class="col-xs-4 no-margin">Van</th> <th scope="col" class="col-xs-4 no-margin">Tot</th> </tr> </thead> <tbody> <tr class="mouse-hand" ng-click="vm.toActivePage(reservation.ReservationID)" ng-repeat="reservation in vm.permitMedia.ActiveReservations | orderBy:\'ValidFrom\'"> <td class="col-xs-4">{{reservation.LicensePlate.DisplayValue}}</td> <td class="col-xs-4">{{reservation.ValidFrom | localmoment: \'DD-MM-YYYY HH:mm\'}}</td> <td class="col-xs-4">{{reservation.ValidUntil | localmoment: \'DD-MM-YYYY HH:mm\'}}</td> </tr> </tbody> </table> </section> </div>';
      },
      4836: (e) => {
        e.exports =
          '<form name="resetForm" novalidate> <span ng-if="$ctrl.submitted && $ctrl.error" role="alert" class="help-block bg-danger">{{$ctrl.error.message}}</span> <div class="form-group" ng-class="{ \'has-error\' : resetForm.userName.$invalid && !resetForm.userName.$pristine }"> <label for="userName">Gebruikersnaam</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-user"></i> </div> <input id="userName" name="userName" class="form-control" placeholder="Gebruikersnaam" ng-model="$ctrl.identifier" type="text" autocomplete="username"/> </div> <div ng-messages="resetForm.userName.$error"> <span ng-message="userorcode" class="help-block">{{resetForm.userName.$error.userorcode}}</span> </div> </div> <div class="form-group" ng-class="{ \'has-error\' : resetForm.resetCode.$invalid && !resetForm.resetCode.$pristine }"> <label for="resetCode">Resetcode</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-refresh"></i> </div> <input id="resetCode" name="resetCode" class="form-control" placeholder="Resetcode" ng-model="$ctrl.resetCode" type="text" autocomplete="off"/> </div> </div> <div class="form-group" ng-class="{ \'has-error\' : resetForm.passwordNew.$invalid && !resetForm.passwordNew.$pristine }"> <label for="passwordNew">Wachtwoord nieuw</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-lock"></i> </div> <input id="passwordNew" name="passwordNew" class="form-control" placeholder="Wachtwoord nieuw" ng-model="$ctrl.password" type="password" autocomplete="new-password" aria-describedby="password-info"/> </div> <div ng-messages="resetForm.passwordNew.$error"> <span ng-message="complexity" class="help-block">{{resetForm.passwordNew.$error.complexity}}</span> </div> </div> <div class="form-group" ng-class="{ \'has-error\' : resetForm.passwordRepeat.$invalid && !resetForm.passwordRepeat.$pristine }"> <label for="passwordRepeat">Wachtwoord herhalen</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-lock"></i> </div> <input id="passwordRepeat" name="passwordRepeat" class="form-control" placeholder="Wachtwoord herhalen" ng-enter="$ctrl.onLogin()" ng-model="$ctrl.passwordRepeat" type="password" autocomplete="new-password" aria-describedby="password-info"/> </div> <div ng-messages="resetForm.passwordRepeat.$error"> <span ng-message="notequal" class="help-block">{{resetForm.passwordRepeat.$error.notequal}}</span> </div> </div> <div id="password-info" class="help-block bg-info"> <h1>Eisen voor het wachtwoord</h1> <ul> <li>{{\'PasswordLengthRequirement\' | translateFormat:$ctrl.minimumPasswordLength}}</li> <li>{{\'PasswordLetterRequirement\' | translate }}</li> <li>{{\'PasswordDigitRequirement\' | translate }}</li> <li ng-bind-html="\'PasswordSpecialCharacterRequirement\' | translate"></li> <li>{{\'PasswordExplanation\' | translate }}</li> </ul> </div> <button class="btn btn-primary btn-block" ng-click="$ctrl.onLogin()" ng-disabled="!$ctrl.canLogin()">Log in</button> </form> ';
      },
      4948: (e) => {
        e.exports =
          '<form name="loginUserForm"> <span ng-if="$ctrl.submitted && $ctrl.error" role="alert" class="help-block bg-danger">{{$ctrl.error.message}}</span> <div class="form-group" ng-show="$ctrl.loginMethod === \'CallCenter\' && !$ctrl.asToken"> <label for="txtIdentifier">Gebruikersnaam</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-user"></i> </div> <input type="text" class="form-control" id="txtIdentifier" placeholder="Gebruikersnaam" ng-model="$ctrl.identifier" autocomplete="username"> </div> </div> <div class="form-group" ng-show="$ctrl.loginMethod === \'CallCenter\' && !$ctrl.asToken"> <label for="txtPassword">Wachtwoord</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-lock"></i> </div> <input type="password" class="form-control" id="txtPassword" placeholder="Wachtwoord" ng-model="$ctrl.password" autocomplete="current-password"> </div> </div> <div ng-show="$ctrl.requiresOtp && !$ctrl.asToken" class="form-group"> <label for="txtOtp">One Time Password</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-time"></i> </div> <input type="text" class="form-control" id="txtOtp" placeholder="One Time Password" ng-model="$ctrl.otp" autocomplete="off"> </div> </div> <div ng-if="$ctrl.asToken"> <div class="form-group" ng-if="$ctrl.loginData && $ctrl.loginData.PermitMediaTypes.length > 1"> <label for="pmt">Media types</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-tasks"></i> </div> <select class="form-control" id="pmt" ng-model="$ctrl.permitMediaType"> <option ng-repeat="permitMediaType in $ctrl.loginData.PermitMediaTypes" value="{{permitMediaType.ID}}">{{permitMediaType.Name}}</option> </select> </div> </div> <div class="form-group" ng-class="{ \'has-error\' :loginUserForm.asIdentifier.$invalid && !loginUserForm.asIdentifier.$pristine }"> <label for="txtCardNumber">Nummer</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-credit-card"></i> </div> <input type="tel" class="form-control" id="txtCardNumber" name="asIdentifier" placeholder="Nummer" ng-model="$ctrl.asIdentifier" autocomplete="off"> </div> <div ng-messages="loginUserForm.asIdentifier.$error"> <span ng-message="userorcode" class="help-block">{{loginUserForm.asIdentifier.$error.userorcode}}</span> </div> </div> <div ng-if="$ctrl.loginData.ZipCodeMandatory" class="form-group"> <label for="txtZipcode">Postcode</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-home"></i> </div> <input type="text" class="form-control" id="txtZipcode" placeholder="Postcode" ng-model="$ctrl.zipCode" autocomplete="off"> </div> </div> <button id="btnLogin" class="btn btn-primary btn-block" ng-click="$ctrl.onLoginMedia()" ng-disabled="!$ctrl.canLoginMedia()">Log in</button> <button id="btnLogout" class="btn btn-default btn-block btn-logout" ng-click="$ctrl.onLogout()">Uitloggen [{{$ctrl.username}}]</button> </div> <button ng-if="!$ctrl.asToken" class="btn btn-primary btn-block" ng-click="$ctrl.onLoginUser()" ng-disabled="!$ctrl.canLoginUser()">{{$ctrl.loginMethod === \'SingleSignOn\' ? \'Log in via Single sign-on\' : \'Log in als gebruiker\'}}</button> </form>';
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
      5102: (e) => {
        e.exports =
          '<div> <div id="login-subtitle">Bezoekersparkeren</div> <section class="extra-bottom-small" ng-show="$ctrl.loginData != null"> <div id="login-methods" class="row extra-bottom-small"> <div class="col-xs-12"> <button ng-repeat="method in $ctrl.loginData.LoginMethods" ng-attr-style="width: {{(100 / $ctrl.loginData.LoginMethods.length) }}%" ng-class="{\'active\': $ctrl.activeTab(method)}" ng-click="$ctrl.onTab(method)" class="btn btn-primary col-xs-sm" type="button" role="tab" aria-controls="{{method}}" aria-label="Inloggen met {{method}}">{{$ctrl.buttonText(method)}}</button> </div> </div> <div id="Gebruiker" aria-labelledby="Gebruiker"> <login-media ng-if="$ctrl.loginMethod === \'Gebruiker\'" login-method="\'Gebruiker\'" identifier="$ctrl.identifier" password="$ctrl.password" login="$ctrl.login(login)"></login-media> </div> <div id="Pas" aria-labelledby="Pas"> <login-media ng-if="$ctrl.loginMethod === \'Pas\'" login-method="\'Pas\'" identifier="$ctrl.identifier" password="$ctrl.password" permit-media-types="$ctrl.loginData.PermitMediaTypes" permit-media-type="$ctrl.permitMediaType" login="$ctrl.login(login)"></login-media> </div> <div id="ResetCode" aria-labelledby="ResetCode"> <login-reset ng-if="$ctrl.loginMethod === \'ResetCode\'" login="$ctrl.login(login)" login-data="$ctrl.loginData"></login-reset> </div> <div id="CallCenter" aria-labelledby="CallCenter"> <login-user ng-if="$ctrl.loginMethod === \'CallCenter\'" login-method="\'CallCenter\'" login-data="$ctrl.loginData" login-user="$ctrl.loginUser(login)" logout-user="$ctrl.logout(loginMethod)" login-media="$ctrl.login(login)"></login-user> </div> <div id="SingleSignOn" aria-labelledby="SingleSignOn"> <login-user ng-if="$ctrl.loginMethod === \'SingleSignOn\'" login-method="\'SingleSignOn\'" login-data="$ctrl.loginData" login-user="$ctrl.loginUser(login)" login-media="$ctrl.login(login)"></login-user> </div> </section> </div> ';
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
        function a(e) {
          var t = r(e);
          return i(t);
        }
        function r(e) {
          if (!i.o(n, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return n[e];
        }
        ((a.keys = function () {
          return Object.keys(n);
        }),
          (a.resolve = r),
          (e.exports = a),
          (a.id = 5358));
      },
      5706: (e) => {
        e.exports =
          '<div ng-controller="permit as vm"> <section class="page-header border-bottom extra-bottom"> <div class="row"> <div class="col-xs-12"> <h3>Passenoverzicht</h3> </div> </div> </section> <form name="permitForm" class="extra-bottom-small" ng-show="vm.permit != null"> <section class="extra-bottom-small"> <div class="row"> <div class="col-xs-12"> <div class="list-heading"> <h2 class="col-xs-12">Productdetails</h2> </div> </div> </div> <div class="row"> <div class="col-xs-12 table-display no-spacing"> <div class="list-item"> <label id="lblPermitCode" class="col-xs-5 no-margin">Productnummer:</label> <div class="col-xs-7 text-right" aria-describedby="lblPermitCode">{{vm.permit.Code}}</div> </div> </div> </div> <div class="row"> <div class="col-xs-12 table-display no-spacing"> <div class="list-item"> <label id="lblTotalBalance" class="col-xs-5 no-margin">Totaal saldo:</label> <div class="col-xs-7 text-right" aria-describedby="lblTotalBalance">{{vm.balance | localformat: vm.unitFormat}}</div> </div> </div> </div> </section> <section class="extra-bottom-small" ng-show="(vm.permit.PermitMedias != null) && (vm.permit.PermitMedias.length > 0)"> <div class="row"> <div class="col-xs-12" toggle-show="vm.permitMediaTable"> <div class="list-heading mouse-hand" ng-click="vm.permitMediaTable.toggle()"> <h2 class="col-xs-10 col-md-11">Passen</h2> <div class="col-xs-2 col-md-1 text-right"><i class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !vm.permitMediaTable.show, \'glyphicon-chevron-up\': vm.permitMediaTable.show}"></i></div> </div> </div> </div> <div class="slide"> <div class="content" ng-class="{activeContent: vm.permitMediaTable.show}"> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-3 col-sm-3 mouse-hand" sort="vm.permitMediaTable" sort-column="Code">Nummer</th> <th scope="col" class="col-xs-3 col-sm-3 mouse-hand" sort="vm.permitMediaTable" sort-column="Balance">Saldo</th> <th scope="col" class="col-xs-1 col-sm-1 text-center">Status</th> <th scope="col" class="col-xs-5 col-sm-5 text-center"></th> </tr> </thead> <tbody> <tr class="mouse-hand" ng-click="vm.toPermitMediaPages(permitMedia)" ng-repeat="permitMedia in vm.permit.PermitMedias | orderBy : vm.permitMediaTable.column : vm.permitMediaTable.reverse"> <td class="col-xs-3 col-sm-3"><strong>{{permitMedia.Code}}</strong></td> <td class="col-xs-3 col-sm-3">{{permitMedia.Balance | localformat: permitMedia.Permit.UnitFormat}}</td> <td class="col-xs-1 col-sm-1 text-center"> <img ng-src="{{permitMedia.ActiveReservations.length > 0 ? \'Content/images/parked.png\' : \'Content/images/not_parked.png\'}}" alt=""> </td> <td class="col-xs-5 col-sm-5"> <span class="licensePlate" ng-repeat="reservation in permitMedia.ActiveReservations">{{reservation.LicensePlate.DisplayValue}}</span> </td> </tr> <tr ng-if="vm.permit.PermitMedias.length < 1"> <td class="empty-list" colspan="4">Er zijn geen passen!</td> </tr> </tbody> </table> </div> </div> </section> <section class="extra-bottom-small" ng-show="(vm.licensePlates != null)"> <div class="row"> <div class="col-xs-12" toggle-show="vm.licensePlateTable"> <div class="list-heading"> <h2 class="col-xs-10 col-md-11 mouse-hand" ng-click="vm.licensePlateTable.toggle()">Kentekens</h2> <div class="col-xs-2 col-md-1 mouse-hand text-right"> <i class="glyphicon" ng-class="{\'glyphicon-chevron-down\': !vm.licensePlateTable.show, \'glyphicon-chevron-up\': vm.licensePlateTable.show}" ng-click="vm.licensePlateTable.toggle()"></i> </div> </div> </div> </div> <div class="slide"> <div class="content" ng-class="{activeContent: vm.licensePlateTable.show}"> <table class="table"> <thead> <tr> <th scope="col" class="col-xs-5 col-sm-5 mouse-hand" sort="vm.licensePlateTable" sort-column="Value">Kenteken</th> <th scope="col" class="col-xs-5 col-sm-5 mouse-hand" sort="vm.licensePlateTable" sort-column="Name">Naam</th> <th scope="col" class="col-xs-2 col-sm-2 text-right"> <i class="glyphicon glyphicon-plus" ng-if="vm.licensePlateTable.show" ng-click="vm.addLicensePlate()"></i> </th> </tr> </thead> <tbody> <tr ng-repeat="licensePlate in vm.licensePlates | orderBy : vm.licensePlateTable.column : vm.licensePlateTable.reverse"> <td class="col-xs-5 col-sm-5"> <strong ng-if="vm.updateLicensePlate.reference !== licensePlate">{{licensePlate.Value}}</strong> <div ng-if="vm.updateLicensePlate.reference === licensePlate" ng-class="{ \'has-error\' : permitForm.licensePlate.$invalid }"> <input id="txtLicensePlate" name="licensePlate" type="text" class="form-control text-uppercase" ng-model="vm.updateLicensePlate.Value" placeholder="Kenteken" maxlength="10"/> <div ng-messages="permitForm.licensePlate.$error"> <span ng-message="save" class="help-block">{{permitForm.licensePlate.$error.save}}</span> </div> </div> </td> <td class="col-xs-5 col-sm-5"> <span ng-if="vm.updateLicensePlate.reference !== licensePlate">{{licensePlate.Name}}</span> <div ng-if="vm.updateLicensePlate.reference === licensePlate"> <input id="txtLicensePlateName" name="licensePlateName" type="text" class="form-control no-margin" ng-model="vm.updateLicensePlate.Name" placeholder="Naam"/> </div> </td> <td class="col-xs-2 col-sm-2 text-right"> <div ng-if="vm.updateLicensePlate.reference !== licensePlate"> <span class="mouse-hand glyphicon glyphicon-edit font-size-large" ng-click="vm.editLicensePlate(licensePlate)"></span> <span class="mouse-hand glyphicon glyphicon-trash font-size-large" ng-click="vm.deleteLicensePlate(licensePlate)"></span> </div> <div ng-if="vm.updateLicensePlate.reference === licensePlate" class="extra-top-small"> <span class="mouse-hand glyphicon glyphicon-floppy-disk font-size-large" ng-click="vm.saveLicensePlate()"></span> <span class="mouse-hand glyphicon glyphicon-share font-size-large icon-flipped" ng-click="vm.undoLicensePlate()"></span> </div> </td> </tr> <tr ng-if="vm.licensePlates.length < 1"> <td class="empty-list" colspan="3">Er zijn geen kentekens!</td> </tr> </tbody> </table> </div> </div> </section> </form> </div>';
      },
      6004: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CpLoadingComponent = void 0));
        var n = i(7025),
          a = (function () {
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
          controller: a,
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
          i(1586),
          i(7499),
          i(6004),
          i(182),
          i(6420),
          i(9902),
          i(8822),
          i(531),
          i(4980),
          i(3552),
          i(6394),
          i(9698),
          i(8654),
          i(8),
          i(7736),
          i(1237),
          i(3864),
          i(978),
          i(7530),
          i(5186),
          i(9802),
          i(6451),
          i(3114),
          i(960),
          i(7090),
          i(851),
          i(7873),
          i(8259),
          i(2367),
          i(7788),
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
                var a = this;
                ((a.toPermitPages = function (e) {
                  i.toPermitPages(e);
                }),
                  e.validate(function () {
                    ((a.permits = t.getPermits()),
                      null != a.permits && a.permits.length > 0
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
                function (t, i, a) {
                  function r(t) {
                    var a,
                      r = e.defaults;
                    (!t.cache && !r.cache) ||
                      !1 === t.cache ||
                      ("GET" !== t.method && "JSONP" !== t.method) ||
                      (a = n.isObject(t.cache)
                        ? t.cache
                        : n.isObject(r.cache)
                          ? r.cache
                          : i.get("$http"));
                    var o = void 0 !== a && void 0 !== a.get(t.url);
                    return void 0 !== t.cached && o !== t.cached
                      ? t.cached
                      : ((t.cached = o), o);
                  }
                  return {
                    request: (e) => (
                      e.ignoreLoadingBar || r(e) || a.start(),
                      e || t.when(e)
                    ),
                    response: (e) => (
                      e &&
                        e.config &&
                        (e.config.ignoreLoadingBar ||
                          r(e.config) ||
                          a.complete()),
                      e || t.when(e)
                    ),
                    responseError: (e) => (
                      e &&
                        e.config &&
                        (e.config.ignoreLoadingBar ||
                          r(e.config) ||
                          a.complete()),
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
              var a,
                r,
                o,
                s = n.element(
                  '<div id="loading-bar"><div class="loading-bar"></div></div>',
                ),
                l = s.find("div").eq(0),
                c = 0,
                d = 0,
                u = !1,
                p = {
                  start: function () {
                    0 === d++
                      ? (a = t(function () {
                          (t.cancel(r),
                            s.remove(),
                            m(0),
                            e.find("body").eq(0).append(s),
                            (u = !0),
                            s.ready(function () {
                              u &&
                                (m(4 * Math.random() + 4),
                                (o = i(g, p.progressInterval)));
                            }));
                        }, p.startLatency))
                      : u && m((c * (d - 1)) / d);
                  },
                  complete: function () {
                    d > 0 &&
                      (0 === --d
                        ? u
                          ? (i.cancel(o),
                            (u = !1),
                            s.ready(function () {
                              (m(100),
                                (r = t(function () {
                                  s.remove();
                                }, p.completeLatency)));
                            }))
                          : t.cancel(a)
                        : u && m((c * (d + 1)) / d));
                  },
                  startLatency: 100,
                  completeLatency: 500,
                  progressInterval: 250,
                };
              return p;
              function m(e) {
                (l.css("width", `${e}%`), (c = e));
              }
              function g() {
                var e = 198 / Math.PI,
                  t = Math.tan(c / e);
                ((t += Math.random() / 4), m(Math.atan(t) * e));
              }
            },
          ]);
      },
      6451: (e, t, i) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CpPayComponent = void 0));
        var n = i(7025),
          a = (function () {
            function e(e, t, i, n, a) {
              ((this.datacontext = e),
                (this.locationService = t),
                (this.menuService = i),
                (this.model = n),
                (this.storageService = a),
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
          template: i(3550),
          bindings: { result: "<" },
        }),
          n.module("app").component("pay", t.CpPayComponent));
      },
      6603: (e) => {
        e.exports =
          '<form name="mediaForm"> <span ng-if="$ctrl.submitted && $ctrl.error" role="alert" class="help-block bg-danger">{{$ctrl.error.message}}</span> <div class="form-group" ng-if="$ctrl.permitMediaTypes.length > 1"> <label for="pmt">Media types</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-tasks"></i> </div> <select class="form-control" id="pmt" ng-model="$ctrl.permitMediaType" ng-options="permitMediaType as permitMediaType.Name for permitMediaType in $ctrl.permitMediaTypes track by permitMediaType.ID"> </select> </div> </div> <div class="form-group" ng-class="{ \'has-error\' : mediaForm.identifier.$invalid && !mediaForm.identifier.$pristine }"> <label for="txtIdentifier">{{$ctrl.resource.identifier}}</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-{{$ctrl.resource.identifierIcon}}"></i> </div> <input type="text" class="form-control" id="txtIdentifier" name="identifier" placeholder="{{$ctrl.resource.identifier}}" ng-model="$ctrl.identifier" autocomplete="username"> </div> </div> <div class="form-group" ng-class="{ \'has-error\' : mediaForm.pincode.$invalid && !mediaForm.pincode.$pristine }"> <label for="txtPincode">{{$ctrl.resource.password}}</label> <div class="input-group"> <div class="input-group-addon"> <i class="glyphicon glyphicon-lock"></i> </div> <input type="password" class="form-control" id="txtPincode" name="pincode" placeholder="{{$ctrl.resource.password}}" ng-enter="$ctrl.onLogin()" ng-model="$ctrl.password" autocomplete="current-password"> </div> <div ng-messages="mediaForm.pincode.$error"> <span ng-message="userorcode" class="help-block">{{mediaForm.pincode.$error.userorcode}}</span> </div> </div> <button id="btnLogin" class="btn btn-primary btn-block" ng-click="$ctrl.onLogin()" ng-disabled="!$ctrl.canLogin()">Log in</button> </form>';
      },
      7090: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("datacontext", [
              "$http",
              "$q",
              "$window",
              "payment",
              "model",
              "storageService",
              "BASE_CONFIG",
              function (e, t, i, n, a, r, o) {
                const s = o.baseURL;
                return {
                  startUp: function () {
                    return l(
                      { method: "GET", url: `${s}login` },
                      function (e, t) {
                        0 === e.LoginMethods.length
                          ? t.reject({
                              message:
                                "Momenteel kunt u niet inloggen, onze excuses voor het ongemak",
                            })
                          : t.resolve(e);
                      },
                    );
                  },
                  login: function (e, t, n, r, o, c, d, u) {
                    var p = {};
                    return "UserAs" !== e || t
                      ? ((p.identifier = t),
                        (p.loginMethod = e),
                        (p.password = n),
                        (p.otp = r),
                        (p.resetCode = o || null),
                        (p.asIdentifier = d || null),
                        (p.zipCode = u || null),
                        (p.permitMediaTypeID = c),
                        l(
                          { method: "POST", url: `${s}login`, data: p },
                          function (e, t) {
                            e.ErrorMessage
                              ? t.reject({
                                  loginStatus: e.LoginStatus,
                                  message: e.ErrorMessage,
                                  requiresOtp: e.RequiresOtp,
                                })
                              : (a.setBaseModel(e), t.resolve());
                          },
                        ))
                      : ((i.location.href = s.replace(
                          "/api/",
                          "/SsoSaml2/AzureAD",
                        )),
                        {
                          then(e) {
                            e();
                          },
                        });
                  },
                  logout: function () {
                    return l(
                      { method: "POST", url: `${s}login/logout` },
                      function (e, t) {
                        (r.session.set("Token", e.Token),
                          a.setBaseModel(null),
                          t.resolve());
                      },
                    );
                  },
                  logoutAs: function () {
                    if (r.session.get("asToken"))
                      return l(
                        { method: "POST", url: `${s}login/logout` },
                        function (e, t) {
                          (r.session.set("Token"),
                            e.Redirect
                              ? (i.location.href = s.replace(
                                  "/api/",
                                  "/Home/Logout/",
                                ))
                              : t.resolve(e));
                        },
                      );
                  },
                  validate: function () {
                    return a.isValid
                      ? t.when()
                      : a.token
                        ? l(
                            { method: "POST", url: `${s}login/getbase` },
                            function (e, t) {
                              e.ErrorMessage
                                ? t.reject({
                                    code: e.Result,
                                    message: e.ErrorMessage,
                                  })
                                : (a.setBaseModel(e), t.resolve());
                            },
                          )
                        : t.reject({
                            message:
                              "Uw inloggegevens konden niet worden opgeslagen, u zal opnieuw moeten inloggen",
                          });
                  },
                  upsertPermitLicensePlate: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitCode = e),
                      (n.licensePlate = t),
                      (n.updateLicensePlate = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}permitlicenseplate/upsert`,
                          data: n,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                  deletePermitLicensePlate: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitCode = e),
                      (n.licensePlate = t),
                      (n.name = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}permitlicenseplate/remove`,
                          data: n,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                  upsertPermitMediaLicensePlate: function (e, t, i, n, a) {
                    var r = {};
                    return (
                      (r.permitMediaTypeID = e),
                      (r.permitMediaCode = t),
                      (r.licensePlate = i),
                      (r.updateLicensePlate = n),
                      (r.name = a),
                      l(
                        {
                          method: "POST",
                          url: `${s}permitmedialicenseplate/upsert`,
                          data: r,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                  deletePermitMediaLicensePlate: function (e, t, i, n) {
                    var a = {};
                    return (
                      (a.permitMediaTypeID = e),
                      (a.permitMediaCode = t),
                      (a.licensePlate = i),
                      (a.name = n),
                      l(
                        {
                          method: "POST",
                          url: `${s}permitmedialicenseplate/remove`,
                          data: a,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                  startReservation: function (e, t, i, n, r) {
                    var o = {};
                    return (
                      e && (o.DateFrom = e.format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                      t && (o.DateUntil = t.format("YYYY-MM-DDTHH:mm:ss.SSSZ")),
                      (o.LicensePlate = i),
                      (o.permitMediaTypeID = n),
                      (o.permitMediaCode = r),
                      l(
                        {
                          method: "POST",
                          url: `${s}reservation/create`,
                          data: o,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : (a.setBaseModel(e), t.resolve());
                        },
                      )
                    );
                  },
                  prolongReservation: function (e, t, i, n) {
                    var r = {};
                    return (
                      (r.Minutes = e),
                      (r.ReservationID = t),
                      (r.permitMediaTypeID = i),
                      (r.permitMediaCode = n),
                      l(
                        {
                          method: "POST",
                          url: `${s}reservation/update`,
                          data: r,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : (a.setBaseModel(e), t.resolve());
                        },
                      )
                    );
                  },
                  endReservation: function (e, t, i) {
                    var n = {};
                    return (
                      (n.ReservationID = e),
                      (n.permitMediaTypeID = t),
                      (n.permitMediaCode = i),
                      l(
                        { method: "POST", url: `${s}reservation/end`, data: n },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : (a.setBaseModel(e), t.resolve());
                        },
                      )
                    );
                  },
                  upgradePermitMedia: function (e, t, i, o) {
                    var c = {};
                    return (
                      (c.permitMediaTypeID = e),
                      (c.permitMediaCode = t),
                      (c.unitsToAdd = i),
                      (c.customerInvoiceReference = o),
                      l(
                        { method: "POST", url: `${s}upgrade`, data: c },
                        function (i, o) {
                          !(function (e, t, i, o) {
                            i.ErrorMessage
                              ? o.reject({
                                  code: i.Result,
                                  message: i.ErrorMessage,
                                })
                              : null != i.Reference
                                ? (r.session.set(
                                    "reference",
                                    `${i.Reference};${e};${t};${i.PaymentReference}`,
                                  ),
                                  i.RedirectUrl
                                    ? (window.location.href = i.RedirectUrl)
                                    : n.open(i),
                                  o.resolve())
                                : (a.setBaseModel(i), o.resolve());
                          })(e, t, i, o);
                        },
                      )
                    );
                  },
                  checkPayment: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitMediaTypeID = t),
                      (n.permitMediaCode = i),
                      (n.transactionID = e),
                      l(
                        {
                          method: "POST",
                          url: `${s}payment/checktransaction`,
                          data: n,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                  getReservationsHistory: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitMediaTypeID = e),
                      (n.permitMediaCode = t),
                      (n.page = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}history/reservations`,
                          data: n,
                        },
                        function (e, t) {
                          t.resolve(e);
                        },
                      )
                    );
                  },
                  getUpgradesHistory: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitMediaTypeID = e),
                      (n.permitMediaCode = t),
                      (n.page = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}history/upgrades`,
                          data: n,
                        },
                        function (e, t) {
                          t.resolve(e);
                        },
                      )
                    );
                  },
                  getMoveBalancesHistory: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitMediaTypeID = e),
                      (n.permitMediaCode = t),
                      (n.page = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}history/movebalances`,
                          data: n,
                        },
                        function (e, t) {
                          t.resolve(e);
                        },
                      )
                    );
                  },
                  getFlowInfo: function (e, t) {
                    return l(
                      {
                        cache: !0,
                        method: "GET",
                        url: `${s}resource/getflowinfo`,
                        params: { context: e, content: t },
                      },
                      function (e, t) {
                        t.resolve(e);
                      },
                    );
                  },
                  isUpgradeAllowed: function (e, t, i) {
                    var n = {};
                    return (
                      (n.permitMediaTypeID = e),
                      (n.permitMediaCode = t),
                      (n.invoiceID = i),
                      l(
                        {
                          method: "POST",
                          url: `${s}payment/isupgradeallowed`,
                          data: n,
                        },
                        function (e, t) {
                          e.ErrorMessage
                            ? t.reject({
                                code: e.Result,
                                message: e.ErrorMessage,
                              })
                            : t.resolve(e);
                        },
                      )
                    );
                  },
                };
                function l(n, r) {
                  var o = t.defer();
                  return (
                    a.token &&
                      ((n.headers = n.headers || {}),
                      (n.headers.Authorization = `Token ${i.btoa(a.token)}`)),
                    e(n)
                      .then(function (e) {
                        r(e.data, o);
                      })
                      .catch(function (e) {
                        o.reject({
                          message:
                            "De server is momenteel niet bereikbaar, controleer uw internetverbinding en probeer het opnieuw",
                          data: e.data,
                          status: e.status,
                        });
                      }),
                    o.promise
                  );
                }
              },
            ]));
      },
      7499: (e, t, i) => {
        "use strict";
        i.r(t);
        var n = i(7025),
          a = i(5093);
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
                link(t, i, a) {
                  (t.vm || (t.vm = { column: null, reverse: !1 }),
                    n.isDefined(a.sortDefault) &&
                      ((t.vm.column = a.sortColumn),
                      (t.vm.reverse = "desc" === a.sortDefault)));
                  var r = n.element(
                    `<span class="sorticon glyphicon" ng-show="vm.column=='${a.sortColumn}'" ng-class="{'glyphicon-triangle-bottom': vm.reverse, 'glyphicon-triangle-top': !vm.reverse}"></span>`,
                  );
                  (i.append(e(r)(t)),
                    i.on("click", function () {
                      t.$apply(function () {
                        t.vm.column !== a.sortColumn
                          ? ((t.vm.column = a.sortColumn), (t.vm.reverse = !1))
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
                link(t, i, n, a) {
                  var r,
                    o = {};
                  (i.on("keyup mouseup", function () {
                    ((o.start = i[0].selectionStart),
                      (o.end = i[0].selectionEnd),
                      (o.direction = i[0].selectionDirection));
                  }),
                    a.$formatters.push(function (i) {
                      return (r = e.formatInput(i, t.localFormat));
                    }),
                    a.$parsers.push(function (n) {
                      return e.validateInput(n, t.localFormat)
                        ? ((r = n), e.parseInput(n, t.localFormat))
                        : (a.$setViewValue(r),
                          a.$render(),
                          i[0].setSelectionRange(o.start, o.end, o.direction),
                          a.$modelValue);
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
                        a(this.reservation.start).diff(
                          a(this.reservation.blocks[0].validFrom),
                          "minutes",
                        )) /
                      this.reservation.totalBlockMinutes),
                      (this.reservation.width =
                        (100 *
                          a(this.reservation.end).diff(
                            a(this.reservation.start),
                            "minutes",
                          )) /
                        this.reservation.totalBlockMinutes),
                      (this.reservation.units = this.reservation.startTariff),
                      (this.reservation.includesFreeBlocks = !1));
                    var e = a(this.reservation.start),
                      i = a(this.reservation.end);
                    this.reservation.wholeDay && (e = e.startOf("day"));
                    for (var n = 0; n < this.reservation.blocks.length; n++) {
                      var r = this.reservation.blocks[n],
                        o = a(r.validFrom).startOf("minute"),
                        s = a(r.validUntil).startOf("minute");
                      (!r.isFree &&
                        (void 0 === this.reservation.notFreeSmallest ||
                          this.reservation.notFreeSmallest >
                            this.reservation.blocks[n].width) &&
                        (this.reservation.notFreeSmallest =
                          this.reservation.blocks[n].width),
                        e >= o && i <= s
                          ? r.isFree
                            ? (this.reservation.includesFreeBlocks = !0)
                            : (this.reservation.units += Math.ceil(
                                (r.units * a(i).diff(a(e), "seconds")) /
                                  r.seconds,
                              ))
                          : e >= o && e < s
                            ? r.isFree
                              ? (this.reservation.includesFreeBlocks = !0)
                              : (this.reservation.units += Math.ceil(
                                  (r.units *
                                    a(r.validUntil).diff(a(e), "seconds")) /
                                    r.seconds,
                                ))
                            : i > o && i <= s
                              ? r.isFree
                                ? (this.reservation.includesFreeBlocks = !0)
                                : (this.reservation.units += Math.ceil(
                                    (r.units *
                                      a(i).diff(a(r.validFrom), "seconds")) /
                                      r.seconds,
                                  ))
                              : o > e &&
                                s < i &&
                                (r.isFree
                                  ? (this.reservation.includesFreeBlocks = !0)
                                  : (this.reservation.units += Math.ceil(
                                      (r.units *
                                        a(r.validUntil).diff(
                                          a(r.validFrom),
                                          "seconds",
                                        )) /
                                        r.seconds,
                                    ))));
                    }
                    (void 0 === this.reservation.notFreeSmallest &&
                      (this.reservation.notFreeSmallest =
                        this.reservation.width),
                      this.updateScale());
                    var l = i.diff(e),
                      c = i.diff(a());
                    ((this.reservation.minutesTotal = l / 6e4),
                      (this.reservation.minutesLeft = c / 6e4),
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
                      ((this.reservation.dateNow = a()),
                        (this.reservation.nowOffset =
                          (100 *
                            this.reservation.dateNow.diff(
                              a(this.reservation.blocks[0].validFrom),
                              "seconds",
                            )) /
                          (60 * this.reservation.totalBlockMinutes)));
                      var e = a(this.reservation.end).diff(
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
                    this.reservation.dateNow = a();
                    var e,
                      t,
                      i = a(this.reservation.start),
                      n = a(this.reservation.end);
                    this.reservation.wholeDay && (i = i.startOf("day"));
                    var r = -1,
                      o = -1;
                    if (0 !== this.reservation.blocks.length) {
                      var s =
                        this.reservation.blocks.length > 1
                          ? this.reservation.blocks.length - 2
                          : 0;
                      if (
                        a(this.reservation.blocks[0].validFrom).startOf(
                          "minute",
                        ) <= i &&
                        a(this.reservation.blocks[0].validUntil).startOf(
                          "minute",
                        ) > i &&
                        a(this.reservation.blocks[s].validFrom).startOf(
                          "minute",
                        ) <= n &&
                        a(this.reservation.blocks[s].validUntil).startOf(
                          "minute",
                        ) >= n
                      )
                        return void this.updateReservationSize();
                    }
                    ((this.reservation.blocks.length = 0),
                      (this.reservation.totalBlockMinutes = 0),
                      a(this.reservation.dateNow).isBefore(
                        a(this.reservation.start),
                      ) && (i = a(this.reservation.dateNow).startOf("minute")));
                    for (let s = 0; s < this.blockTimes.length; s++) {
                      var l = this.blockTimes[s];
                      ((e = a(l.ValidFrom).startOf("minute")),
                        (t = a(l.ValidUntil).startOf("minute")),
                        (this.blockTimes[s].Active = !1),
                        i >= e && i < t && (this.blockTimes[s].Active = !0),
                        n > e &&
                          n <= t &&
                          ((this.blockTimes[s].Active = !0),
                          (o = ((r = this.blockTimes[s].DayOfWeek) + 1) % 7)),
                        e > i && t < n && (this.blockTimes[s].Active = !0),
                        r >= 0 &&
                          this.blockTimes[s].DayOfWeek === r &&
                          (this.blockTimes[s].Active = !0),
                        o >= 0 &&
                          this.blockTimes[s].DayOfWeek === o &&
                          ((this.blockTimes[s].Active = !0),
                          (o = -1),
                          (r = -1)),
                        this.blockTimes[s].Active &&
                          ((this.reservation.totalBlockMinutes += a(
                            l.ValidUntil,
                          ).diff(a(l.ValidFrom), "minutes")),
                          this.reservation.blocks.push({
                            validFrom: l.ValidFrom,
                            validUntil: l.ValidUntil,
                            showStartOfDay:
                              0 === this.reservation.blocks.length ||
                              0 ===
                                a(l.ValidFrom).diff(
                                  a(l.ValidFrom).startOf("day"),
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
                                a(l.ValidUntil).diff(a(l.ValidFrom), "minutes"),
                          })));
                    }
                    for (let e = 0; e < this.reservation.blocks.length; e++)
                      this.reservation.blocks[e].width =
                        (a(this.reservation.blocks[e].validUntil).diff(
                          a(this.reservation.blocks[e].validFrom),
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
          a = i(5093);
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
          function (e, t, i, r, o, s, l, c, d) {
            var u,
              p,
              m = this,
              g = !1;
            function v() {
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
                    var d = 0;
                    d < m.permitMedia.ActiveReservations.length;
                    d++
                  )
                    if (
                      m.permitMedia.ActiveReservations[d].ReservationID ===
                      parseInt(o, 10)
                    ) {
                      ((m.activeReservation =
                        m.permitMedia.ActiveReservations[d]),
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
                        (m.activeReservation.ValidFrom = a(
                          m.activeReservation.ValidFrom,
                        )),
                        (m.reservation.start = m.activeReservation.ValidFrom),
                        m.activeReservation.ValidUntil &&
                          ((m.activeReservation.ValidUntil = a(
                            m.activeReservation.ValidUntil,
                          )),
                          (m.reservation.end =
                            m.activeReservation.ValidUntil)));
                      for (
                        var g = 0;
                        g < m.permitMedia.Permit.BlockTimes.length;
                        g++
                      ) {
                        var v = m.permitMedia.Permit.BlockTimes[g];
                        ((m.permitMedia.Permit.BlockTimes[g].ShowStartOfDay =
                          0 === g ||
                          0 ===
                            a(v.ValidFrom).diff(
                              a(v.ValidFrom).startOf("day"),
                              "minutes",
                            )),
                          v.IsFree ||
                            (m.permitMedia.Permit.BlockTimes[g].Unit =
                              v.Units * v.Seconds));
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
                              (n.isDefined(u) ||
                                ((u = t(function () {
                                  m.resChartConfig.updateTimeInfo();
                                }, 1e3)),
                                (p = t(function () {
                                  m.resChartConfig.updateReservationTimeInfo();
                                }, 6e4)),
                                e.$on("$destroy", function () {
                                  (n.isDefined(u) &&
                                    (t.cancel(u), (u = void 0)),
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
                                r(f, 100, !1)));
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
                        r(f, 100, !1));
                      break;
                    }
                m.activeReservation ||
                  c.set("Geen actieve reservering gevonden");
              } else c.set("Geen pas gevonden");
            }
            function h(e) {
              g ||
                ((g = !0),
                o
                  .prolongReservation(
                    e,
                    m.activeReservation.ReservationID,
                    m.permitMedia.TypeID,
                    m.permitMedia.Code,
                  )
                  .then(function () {
                    (v(),
                      c.add("De eindtijd is bijgewerkt", "success"),
                      (g = !1));
                  })
                  .catch(function (e) {
                    (c.add(e), (g = !1));
                  }),
                (m.showMin =
                  m.reservation.minutesTotal >
                    m.permitMedia.Permit.ProlongMinutes &&
                  m.reservation.minutesLeft >
                    m.permitMedia.Permit.ProlongMinutes));
            }
            function f() {
              "function" == typeof m.resChartConfig.updateScrollToStart &&
                m.resChartConfig.updateScrollToStart();
            }
            ((m.resChartConfig = {}),
              (m.reservation = {}),
              (m.permitMedia = null),
              (m.endReservation = function (e) {
                g ||
                  ((g = !0),
                  o
                    .endReservation(e, m.permitMedia.TypeID, m.permitMedia.Code)
                    .then(function () {
                      (s.toAdd(m.permitMedia.Code), (g = !1));
                    })
                    .catch(function (e) {
                      (c.add(e), (g = !1));
                    }));
              }),
              (m.format = d.format),
              (m.showMin = !1),
              (m.min = function () {
                m.showMin
                  ? h(-1 * m.permitMedia.Permit.ProlongMinutes)
                  : c.add("Eindtijd voor de huidige of begintijd!");
              }),
              (m.showEnd = !0),
              (m.showFrom = !0),
              (m.showTime = !0),
              (m.showStop = !1),
              (m.showProlongPlus = !0),
              (m.plus = function () {
                h(m.permitMedia.Permit.ProlongMinutes);
              }),
              (m.percent = 0),
              e.validate(v),
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
        function a(e, t, i, n) {
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
        ((a.prototype = {
          toDisplay: function (e, t) {
            function i(t, i, n, a, r) {
              var o = n(a, i);
              if (o.isCurrency)
                return ((t.units = r(e / o.base, o.sign, o.decimals)), !1);
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
              var n = new a(
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
      7788: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .factory("alertService", [
              "$timeout",
              function (e) {
                var t = [],
                  i = {
                    add: function (i, n, a) {
                      var r,
                        o = {
                          type: n || "danger",
                          message: (r =
                            "object" == typeof i
                              ? i.stack
                                ? "Sorry, er is iets fout gegaan."
                                : i.message
                              : i),
                          persistent: a,
                          close() {
                            var e = t.indexOf(this);
                            e >= 0 && e < t.length && t.splice(e, 1);
                          },
                        };
                      (t.push(o),
                        a ||
                          e(
                            function () {
                              o.close();
                            },
                            Math.max(3500, 100 * r.length),
                          ));
                    },
                    set: function (e, t) {
                      this.add(e, t, !0);
                    },
                    reset: function () {
                      for (var e = 0; e < t.length; )
                        t[e].persistent ? t.splice(e, 1) : e++;
                    },
                    clear: function () {
                      t.length = 0;
                    },
                  };
                return (
                  Object.defineProperty(i, "alerts", {
                    value: t,
                    writable: !1,
                    configurable: !1,
                  }),
                  i
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
                a = {
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
                Object.defineProperty(a, "length", {
                  get: function () {
                    try {
                      return i.length;
                    } catch (e) {}
                    return 0;
                  },
                  configurable: !1,
                }),
                a
              );
            }
          },
        ]);
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
                  toActivePages: a,
                  isActivePages: function () {
                    return i.isActiveList() || i.isActive();
                  },
                  toPermitsPages: function (e) {
                    1 === e.length ? r(e[0]) : i.toPermits();
                  },
                  toPermitPages: r,
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
                function n(n, a) {
                  ((i[`to${n}`] = function () {
                    !(function (i, n) {
                      for (
                        var a = e.routes[i],
                          r = a.originalPath,
                          o = a.regexp.exec(r),
                          s = 1;
                        s < o.length;
                        s++
                      )
                        r = r.replace(
                          o[s],
                          s <= n.length && n[s - 1]
                            ? n[s - 1].toString().replace("/", "&#x2F")
                            : "",
                        );
                      t.path(r.replace("//", "/"));
                    })(a, arguments);
                  }),
                    (i[`is${n}`] = function () {
                      return (function (t) {
                        return e.current.regexp.test(t);
                      })(a);
                    }));
                }
                function a(e) {
                  null != e.ActiveReservations &&
                  1 === e.ActiveReservations.length
                    ? i.toActive(e.Code, e.ActiveReservations[0].ReservationID)
                    : i.toActiveList(e.Code);
                }
                function r(e) {
                  1 === e.PermitMedias.length
                    ? o(e.PermitMedias[0])
                    : i.toPermit(e.Code);
                }
                function o(e) {
                  null != e.ActiveReservations &&
                  e.ActiveReservations.length > 0
                    ? a(e)
                    : i.toAdd(e.Code);
                }
              },
            ]));
      },
      8290: (e) => {
        e.exports =
          '<div ng-controller="help as vm"> <section class="page-header border-bottom extra-bottom"> <h1 aria-describedby="txtHelpDescription">Help</h1> </section> <section class="extra-bottom border-bottom"> <p id="txtHelpDescription"> Binnen de bezoekersapp kunt u via het menu navigeren naar verschillende pagina’s. Op deze helppagina worden de pagina’s kort toegelicht. <br/> <i>Let op: Niet elke pagina hoeft opgenomen te zijn in uw menu. Dit hangt af van uw rechten.</i> </p> </section> <section class="extra-bottom-small"> <div class="extra-top-small" ng-show="vm.showPermits"> <flow-info context="\'Help\'" content="\'Permits\'"></flow-info> </div> <div class="extra-top-small" ng-show="vm.showPermitMedias"> <flow-info context="\'Help\'" content="\'PermitMedias\'"></flow-info> </div> <div class="extra-top-small" ng-show="vm.showPermitMediaUpgrade"> <flow-info context="\'Help\'" content="\'Upgrade\'"></flow-info> </div> <div class="extra-top-small" ng-show="vm.showActiveReservations"> <flow-info context="\'Help\'" content="\'ActiveReservations\'"></flow-info> </div> <div class="extra-top-small" ng-show="vm.showAddReservation"> <flow-info context="\'Help\'" content="\'RegisterLicenseplate\'"></flow-info> </div> <div class="extra-top-small" ng-show="vm.showHistory"> <flow-info context="\'Help\'" content="\'ReservationHistory\'"></flow-info> <div ng-show="vm.showPermitMediaUpgrade"> <flow-info context="\'Help\'" content="\'UpgradeHistory\'"></flow-info> </div> </div> <div class="extra-top-small" ng-show="vm.showPrivacy"> <flow-info context="\'Help\'" content="\'Privacy\'"></flow-info> </div> <div class="extra-top-small"> <flow-info context="\'Help\'" content="\'LogOff\'"></flow-info> </div> </section> </div>';
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
              function (e, t, i, n, a, r, o) {
                var s = this,
                  l = !1,
                  c = !1;
                function d() {
                  s.permitMedia &&
                    (s.permitMedia.History &&
                    s.permitMedia.History.UpgradePending &&
                    s.permitMedia.History.UpgradePending.InvoiceID
                      ? (i
                          .isUpgradeAllowed(
                            s.permitMedia.TypeID,
                            s.permitMedia.Code,
                            s.permitMedia.History.UpgradePending.InvoiceID,
                          )
                          .then(function (e) {
                            t(
                              null != e
                                ? () => {
                                    ((s.isUpgradeAllowed = e.IsAllowed),
                                      s.isUpgradeAllowed &&
                                        (s.permitMedia.History.UpgradePending =
                                          null));
                                  }
                                : () => {
                                    s.isUpgradeAllowed = !1;
                                  },
                            );
                          })
                          .catch(function (e) {
                            r.add(e);
                          }),
                        null != s.permitMedia.History.UpgradePending &&
                          t(d, 6e4, !1))
                      : t(() => {
                          s.isUpgradeAllowed = !0;
                        }));
                }
                ((s.permitMedia = null),
                  (s.upgradeUnits = {}),
                  (s.possibleUnits = {}),
                  (s.canUpgrade = !1),
                  (s.isUpgradeAllowed = !1),
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
                        (r.add(e), (l = !1));
                      });
                    }
                  }),
                  (s.setUpgradeUnit = function (e) {
                    ((s.upgradeUnits.value = e),
                      (null !== e || s.possibleUnits.show) && (c = !1));
                  }),
                  (s.toggle = function (e) {
                    "upgradeUnits" === e && (c = !c);
                  }),
                  (s.show = function (e) {
                    if ("upgradeUnits" === e) return c;
                  }),
                  e.validate(function () {
                    var e = n.getParam("id");
                    ((s.upgradeUnits.value = null),
                      (s.possibleUnits.show = !1),
                      (s.canUpgrade = !1),
                      (s.permitMedia = a.selectPermitMedia(e)),
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
                                : r.set("Geen saldo informatie gevonden"),
                              t(d, 500, !1))
                            : r.set("Geen opwaardeer informatie gevonden"))
                        : r.set("Geen pas gevonden"));
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
                function (e, t, i, n, a, r) {
                  var o = this;
                  ((o.loginData = null),
                    (o.loginMethod = null),
                    (o.requiresOtp = !1),
                    (o.$onInit = function () {
                      (i.selectPermit(null),
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
                            r.set(e);
                          }));
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
                    (o.login = function (r) {
                      var o = e.defer();
                      return (
                        t
                          .login(
                            r.loginMethod,
                            r.identifier,
                            r.password,
                            null,
                            r.resetCode,
                            r.permitMediaTypeID,
                            r.asIdentifier,
                            r.zipCode,
                          )
                          .then(
                            function () {
                              const e = i.getPermits();
                              (e
                                ? a.toPermitsPages(e)
                                : a.toPermitMediaPages(
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
                                  (o.asToken = i.token),
                                  (o.name = i.name),
                                  a.toLogin(),
                                  l.resolve({ token: i.token, name: i.name }));
                              },
                              function (e) {
                                o.requiresOtp || e.requiresOtp
                                  ? (r.add(e),
                                    a.toLogin(),
                                    l.resolve({ requiresOtp: e.requiresOtp }))
                                  : (r.add(e), a.toLogin(), l.reject());
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
                          a.toSSO();
                        },
                        function () {
                          a.toSSO();
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
              function (e, t, i, n, a) {
                var r = this;
                ((r.permitMediaTable = { show: !1 }),
                  (r.licensePlateTable = { show: !1 }),
                  (r.licensePlates = null),
                  (r.updateLicensePlate = { reference: null }),
                  (r.toPermitMediaPages = function (e) {
                    n.toPermitMediaPages(e);
                  }),
                  e.validate(function () {
                    var e = n.getParam("id");
                    ((r.permit = t.selectPermit(e)),
                      null != r.permit
                        ? (null != r.permit.PermitMedias &&
                          r.permit.PermitMedias.length > 0
                            ? ((r.permitMediaTable.show = !0),
                              (r.balance = 0),
                              r.permit.PermitMedias.forEach(function (e) {
                                ((r.balance += e.Balance),
                                  (r.unitFormat = e.Permit.UnitFormat));
                              }))
                            : a.set(
                                "Er is geen geldige media gekoppeld aan dit product",
                              ),
                          r.permit.LicensePlates &&
                            !r.permit.IsLicensePlatesFixed &&
                            ((r.licensePlates = r.permit.LicensePlates.slice()),
                            (r.licensePlateTable.show =
                              null != r.licensePlates &&
                              r.licensePlates.length > 0)))
                        : a.set("Product niet gevonden"));
                  }),
                  (r.addLicensePlate = function () {
                    r.updateLicensePlate.reference && r.undoLicensePlate();
                    var e = {};
                    (r.licensePlates.unshift(e), r.editLicensePlate(e));
                  }),
                  (r.editLicensePlate = function (e) {
                    (r.updateLicensePlate.reference && r.undoLicensePlate(),
                      (r.updateLicensePlate.reference = e),
                      (r.updateLicensePlate.Value = e.Value),
                      (r.updateLicensePlate.Name = e.Name),
                      (r.updateLicensePlate.isNew = !e.Value));
                  }),
                  (r.deleteLicensePlate = function (e) {
                    i.deletePermitLicensePlate(r.permit.Code, e.Value, e.Name)
                      .then(function () {
                        for (var t = 0; t < r.licensePlates.length; t++)
                          if (r.licensePlates[t].Value === e.Value)
                            return (
                              r.licensePlates.splice(t, 1),
                              void r.permit.LicensePlates.splice(t, 1)
                            );
                      })
                      .catch(function (e) {
                        a.add(e);
                      });
                  }),
                  (r.undoLicensePlate = function () {
                    ((r.updateLicensePlate.reference = null),
                      r.updateLicensePlate.isNew &&
                        r.licensePlates.splice(0, 1));
                  }),
                  (r.saveLicensePlate = function () {
                    if (
                      ((function () {
                        var t,
                          i = ["licensePlate"];
                        for (t in i)
                          Object.prototype.hasOwnProperty.call(i, t) &&
                            ((e.permitForm[i[t]].$invalid = !1),
                            (e.permitForm[i[t]].$error = {}));
                      })(),
                      !r.updateLicensePlate.Value)
                    )
                      return (
                        (e.permitForm.licensePlate.$invalid = !0),
                        void (e.permitForm.licensePlate.$error.save =
                          "Kenteken is niet opgegeven")
                      );
                    var t = r.updateLicensePlate.reference;
                    i.upsertPermitLicensePlate(
                      r.permit.Code,
                      r.updateLicensePlate,
                      t.Value,
                    )
                      .then(function (e) {
                        for (var i in e.LicensePlate)
                          Object.prototype.hasOwnProperty.call(
                            e.LicensePlate,
                            i,
                          ) && (t[i] = e.LicensePlate[i]);
                        ((r.updateLicensePlate.reference = null),
                          r.updateLicensePlate.isNew &&
                            r.permit.LicensePlates.unshift(t),
                          r.permit.PermitMedias.forEach(function (e) {
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
                          : a.add(t);
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
      9902: (e, t, i) => {
        "use strict";
        (i.r(t),
          i(7025)
            .module("app")
            .component("shell", {
              template: i(1254),
              controller: [
                "$scope",
                "locationService",
                "alertService",
                "menuService",
                "datacontext",
                "model",
                function (e, t, i, n, a, r) {
                  var o = this;
                  ((o.alerts = i.alerts),
                    (o.menu = n.menu),
                    (o.selected = r.selected),
                    (o.isMenuOpen = !1),
                    (o.toggleMenu = function () {
                      o.isMenuOpen = !o.isMenuOpen;
                    }),
                    (e.validate = function (e) {
                      t.isLogin()
                        ? (e(), n.clear())
                        : a
                            .validate()
                            .then(function () {
                              (e(), n.create());
                            })
                            .catch(function (e) {
                              ((null == e.data && 0 === e.status) ||
                                t.toLogin(),
                                i.add(e));
                            });
                    }),
                    e.$on("$routeChangeSuccess", function () {
                      ((o.isMenuOpen = !1), i.reset());
                    }));
                },
              ],
            }));
      },
    },
    i = {};
  function n(e) {
    var a = i[e];
    if (void 0 !== a) return a.exports;
    var r = (i[e] = { id: e, loaded: !1, exports: {} });
    return (t[e].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports);
  }
  ((n.m = t),
    (e = []),
    (n.O = (t, i, a, r) => {
      if (!i) {
        var o = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [i, a, r] = e[d], s = !0, l = 0; l < i.length; l++)
            (!1 & r || o >= r) && Object.keys(n.O).every((e) => n.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((s = !1), r < o && (o = r));
          if (s) {
            e.splice(d--, 1);
            var c = a();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      r = r || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
      e[d] = [i, a, r];
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
      var e = { 891: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var a,
            r,
            [o, s, l] = i,
            c = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in s) n.o(s, a) && (n.m[a] = s[a]);
            if (l) var d = l(n);
          }
          for (t && t(i); c < o.length; c++)
            ((r = o[c]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
          return n.O(d);
        },
        i = (globalThis.webpackChunkcitypermit =
          globalThis.webpackChunkcitypermit || []);
      (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
    })());
  var a = n.O(void 0, [369], () => n(6024));
  a = n.O(a);
})();
