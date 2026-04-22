/*! For license information please see jsactions.js.LICENSE.txt */
define(["big.js"], (e) =>
  (() => {
    var t,
      r,
      n = {
        50: (e, t, r) => {
          "use strict";
          async function n(e) {
            (document
              .querySelectorAll(".mx-navigationlist-item.active")
              .forEach((e) => {
                e.classList.remove("active");
              }),
              document
                .querySelectorAll(".mx-navigationlist-item")
                .forEach((t) => {
                  const r = t.querySelector("span");
                  r && r.textContent.trim() === e && t.classList.add("active");
                }));
          }
          (r.r(t), r.d(t, { RemoveActiveCssClass: () => n }), r(628), r(327));
        },
        90: (e, t, r) => {
          "use strict";
          async function n(e) {
            return null == e
              ? Promise.reject(
                  new Error("Input parameter 'delay' is required."),
                )
              : new Promise((t) => {
                  setTimeout(() => t(), Number(e));
                });
          }
          (r.r(t), r.d(t, { Wait: () => n }), r(327));
        },
        109: (e, t, r) => {
          "use strict";
          function n(e) {
            try {
              return (new URL(e), !0);
            } catch (e) {
              return !1;
            }
          }
          async function a(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 500;
            try {
              return await (async function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                const { timeout: r = 5e3 } = t,
                  n = new AbortController(),
                  a = setTimeout(() => n.abort(), r);
                try {
                  return await fetch(e, { ...t, signal: n.signal });
                } finally {
                  clearTimeout(a);
                }
              })(e, t);
            } catch (o) {
              if (r > 0)
                return (
                  await new Promise((e) => setTimeout(e, n)),
                  a(e, t, r - 1, n)
                );
              throw o;
            }
          }
          async function o(e, t, r, o) {
            try {
              let i;
              switch (e) {
                case "Xyz":
                  i = await (async function (e) {
                    const t = e
                      .replace("{s}", "a")
                      .replace("{x}", "0")
                      .replace("{y}", "0")
                      .replace("{z}", "0");
                    try {
                      const e = await a(t, { method: "GET", timeout: 5e3 }, 1);
                      return e.ok
                        ? null
                        : (console.info(
                            `[RotterdamMaps]: URL validatie fout: status ${e.status}, URL: ${t}`,
                          ),
                          "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw.");
                    } catch (e) {
                      return "AbortError" === e.name
                        ? (console.info(
                            "[RotterdamMaps]: URL validatie fout (time-out)",
                          ),
                          "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw.")
                        : (console.info(
                            "[RotterdamMaps]: URL validatie fout:",
                            e,
                          ),
                          "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw.");
                    }
                  })(t);
                  break;
                case "Wms":
                  i = await (async function (e, t, r) {
                    if (!n(e))
                      return (
                        console.info(
                          "[RotterdamMaps]: URL validatie fout: onjuiste URL structuur",
                          e,
                        ),
                        "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw."
                      );
                    const o = `${e}?${new URLSearchParams({ service: "WMS", version: "1.3.0", request: "GetMap", layers: t, styles: "", format: `image/${r}`, transparent: "true", width: "256", height: "256", crs: "EPSG:3857", bbox: "0,0,1000,1000" }).toString()}`;
                    try {
                      const e = await a(o, { method: "GET", timeout: 5e3 }, 1),
                        t = e.headers.get("content-type");
                      return e.ok && t && t.startsWith("image/")
                        ? null
                        : (console.info(
                            "[RotterdamMaps]: URL validatie mislukt. Onverwacht Content-Type:",
                            t,
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.");
                    } catch (e) {
                      return "AbortError" === e.name
                        ? (console.info(
                            "[RotterdamMaps]: URL validatie fout (time-out)",
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.")
                        : (console.info(
                            "[RotterdamMaps]: URL validatie fout:",
                            e,
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.");
                    }
                  })(t, r, o);
                  break;
                case "Wmts":
                  i = await (async function (e, t, r) {
                    if (!n(e))
                      return (
                        console.info(
                          "[RotterdamMaps]: URL validatie fout: onjuiste URL structuur",
                          e,
                        ),
                        "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw."
                      );
                    const o = `${e}?service=WMTS&request=GetTile&version=1.0.0&layer=${t}&style=default&tilematrixset=EPSG:3857&format=${r}&height=256&width=256&tilematrix=0&tilecol=0&tilerow=0`;
                    try {
                      return (await a(o, { method: "GET", timeout: 5e3 }, 1)).ok
                        ? null
                        : (console.info(
                            "[RotterdamMaps]: URL validatie mislukt. Onverwacht Content-Type:",
                            contentType,
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.");
                    } catch (e) {
                      return "AbortError" === e.name
                        ? (console.info(
                            "[RotterdamMaps]: URL validatie fout (time-out)",
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.")
                        : (console.info(
                            "[RotterdamMaps]: URL validatie fout:",
                            e,
                          ),
                          "URL validatie mislukt. Controleer of de URL, layer naam en bestandsextensie juist zijn, of probeer het later opnieuw.");
                    }
                  })(t, r, o);
                  break;
                case "Wfs":
                  i = await (async function (e, t) {
                    if (!n(e))
                      return (
                        console.info(
                          "[RotterdamMaps]: URL validatie fout: onjuiste URL structuur",
                          e,
                        ),
                        "URL validatie mislukt. Controleer of de URL juist is, of probeer het later opnieuw."
                      );
                    const r = `${e}?${new URLSearchParams({ service: "WFS", version: "2.0.0", request: "GetFeature", typeNames: t, maxFeatures: "1" }).toString()}`;
                    try {
                      const e = await a(r, { method: "GET", timeout: 5e3 }, 1),
                        t = e.headers.get("content-type");
                      return e.ok &&
                        t &&
                        (t.includes("xml") || t.includes("json"))
                        ? null
                        : (console.info(
                            "[RotterdamMaps]: URL validatie mislukt. Onverwacht Content-Type:",
                            t,
                          ),
                          "URL validatie mislukt. Controleer of de URL en layer naam juist zijn, of probeer het later opnieuw.");
                    } catch (e) {
                      return "AbortError" === e.name
                        ? (console.info(
                            "[RotterdamMaps]: URL validatie fout (time-out)",
                          ),
                          "URL validatie mislukt. Controleer of de URL en layer naam juist zijn, of probeer het later opnieuw.")
                        : (console.info(
                            "[RotterdamMaps]: URL validatie fout:",
                            e,
                          ),
                          "URL validatie mislukt. Controleer of de URL en layer naam juist zijn, of probeer het later opnieuw.");
                    }
                  })(t, r);
                  break;
                default:
                  (console.error(
                    "[RotterdamMaps]: Niet ondersteund LayerType:",
                    e,
                  ),
                    (i = `URL validatie mislukt (niet ondersteund LayerType (${e}))`));
              }
              return i;
            } catch (e) {
              return (
                console.info("[RotterdamMaps]: Fout in ValidateLayer:", e),
                `URL validatie mislukt (${e.message})`
              );
            }
          }
          (r.r(t), r.d(t, { ValidateLayer: () => o }), r(628), r(327));
        },
        156: (e, t, r) => {
          "use strict";
          async function n() {
            window.mx.reloadWithState();
          }
          (r.r(t), r.d(t, { ReloadWithState: () => n }), r(628), r(327));
        },
        189: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { RemoveStorageItem: () => o }), r(628), r(327));
          var n = r(532),
            a = r.n(n);
          async function o(e) {
            return e
              ? (function (e) {
                  return navigator && "ReactNative" === navigator.product
                    ? a().removeItem(e)
                    : window
                      ? (window.localStorage.removeItem(e), Promise.resolve())
                      : Promise.reject(new Error("No storage API available"));
                })(e).then(() => !0)
              : Promise.reject(new Error("Input parameter 'Key' is required"));
          }
        },
        205: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { ShowProgress: () => a }), r(628));
          var n = r(327);
          async function a(e, t) {
            const r = mx.ui.showProgress(e, t);
            return void 0 !== r
              ? Promise.resolve(new n.Big(r))
              : Promise.reject(new Error("Could not open the loading dialog"));
          }
        },
        212: () => {},
        255: (e, t, r) => {
          "use strict";
          async function n(e, t, n, a) {
            if (!t)
              return Promise.reject(
                new Error("Input parameter 'Question' is required"),
              );
            const o = n || "Cancel",
              i = a || "OK",
              s = e || "Confirmation";
            if (navigator && "ReactNative" === navigator.product) {
              const e = r(464).Alert;
              return new Promise((r) => {
                e.alert(s, t, [
                  { text: o, onPress: () => r(!1), style: "cancel" },
                  { text: i, onPress: () => r(!0) },
                ]);
              });
            }
            return new Promise((e) => {
              mx.ui.confirmation({
                content: t,
                proceed: i,
                cancel: o,
                handler: () => e(!0),
                onCancel: () => e(!1),
              });
            });
          }
          (r.r(t), r.d(t, { ShowConfirmation: () => n }), r(628), r(327));
        },
        327: (t) => {
          "use strict";
          t.exports = e;
        },
        448: (e, t, r) => {
          "use strict";
          async function n(e) {
            return null == e
              ? Promise.reject(
                  new Error("Input parameter 'Identifier' is required"),
                )
              : (mx.ui.hideProgress(Number(e)), Promise.resolve());
          }
          (r.r(t), r.d(t, { HideProgress: () => n }), r(327));
        },
        464: () => {},
        478: (e, t, r) => {
          "use strict";
          async function n(e, t, r, n, a) {
            if (!window.__toast)
              return (
                console.warn("[SendtoastClient] Widget niet geladen."),
                !1
              );
            const o = JSON.stringify({
              message: e || "",
              toastType: t || "info",
              position: r || "",
              closeDuration: n ? Number(n) : 4e3,
              theme: a || "light",
            });
            return window.__toast.send(o);
          }
          (r.r(t), r.d(t, { Sendtoast: () => n }), r(628), r(327));
        },
        500: (e, t, r) => {
          "use strict";
          async function n(e, t) {
            if (!e)
              return Promise.reject(
                new Error("Input parameter 'Entity' is required."),
              );
            if (!t) return Promise.resolve([]);
            var r = t.split(",");
            return r && 0 != r.length
              ? new Promise((e, t) => {
                  mx.data.get({
                    guids: r,
                    callback: (r) => {
                      (console.log("result"),
                        r ? e(r) : t(new Error("'Object guid' not found")));
                    },
                  });
                })
              : Promise.resolve([]);
          }
          (r.r(t), r.d(t, { GetObjectsByGUID: () => n }), r(628), r(327));
        },
        529: (e, t, r) => {
          "use strict";
          async function n() {
            try {
              const e = await Promise.resolve().then(r.t.bind(r, 653, 23));
              return "ios" === e.default.OS || "android" === e.default.OS;
            } catch (e) {
              return !1;
            }
          }
          (r.r(t), r.d(t, { JS_isNativeApp: () => n }), r(628), r(327));
        },
        530: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { SetStorageItemObject: () => o }), r(327));
          var n = r(532),
            a = r.n(n);
          async function o(e, t) {
            if (!e)
              return Promise.reject(
                new Error("Input parameter 'Key' is required"),
              );
            if (!t)
              return Promise.reject(
                new Error("Input parameter 'Value' is required"),
              );
            const r = (n = t)
              .getAttributes()
              .reduce((e, t) => ((e[t] = n.get(t)), e), { guid: n.getGuid() });
            var n;
            return (function (e, t) {
              return navigator && "ReactNative" === navigator.product
                ? a().setItem(e, t)
                : window
                  ? (window.localStorage.setItem(e, t), Promise.resolve())
                  : Promise.reject(new Error("No storage API available"));
            })(e, JSON.stringify(r));
          }
        },
        532: () => {},
        543: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { Export_To_Excel: () => Jr }), r(628), r(327));
          var n = function (e) {
              return String.fromCharCode(e);
            },
            a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function o(e) {
            for (
              var t = "",
                r = 0,
                n = 0,
                o = 0,
                i = 0,
                s = 0,
                l = 0,
                c = 0,
                f = 0;
              f < e.length;
            )
              ((i = (r = e.charCodeAt(f++)) >> 2),
                (s = ((3 & r) << 4) | ((n = e.charCodeAt(f++)) >> 4)),
                (l = ((15 & n) << 2) | ((o = e.charCodeAt(f++)) >> 6)),
                (c = 63 & o),
                isNaN(n) ? (l = c = 64) : isNaN(o) && (c = 64),
                (t += a.charAt(i) + a.charAt(s) + a.charAt(l) + a.charAt(c)));
            return t;
          }
          function i(e) {
            var t = "",
              r = 0,
              n = 0,
              o = 0,
              i = 0,
              s = 0,
              l = 0;
            ("data:" == e.slice(0, 5) &&
              (c = e.slice(0, 1024).indexOf(";base64,")) > -1 &&
              (e = e.slice(c + 8)),
              (e = e.replace(/[^\w\+\/\=]/g, "")));
            for (var c = 0; c < e.length; )
              ((r =
                (a.indexOf(e.charAt(c++)) << 2) |
                ((i = a.indexOf(e.charAt(c++))) >> 4)),
                (t += String.fromCharCode(r)),
                (n = ((15 & i) << 4) | ((s = a.indexOf(e.charAt(c++))) >> 2)),
                64 !== s && (t += String.fromCharCode(n)),
                (o = ((3 & s) << 6) | (l = a.indexOf(e.charAt(c++)))),
                64 !== l && (t += String.fromCharCode(o)));
            return t;
          }
          var s =
              "undefined" != typeof Buffer &&
              "undefined" != typeof process &&
              void 0 !== process.versions &&
              !!process.versions.node,
            l = (function () {
              if ("undefined" != typeof Buffer) {
                var e = !Buffer.from;
                if (!e)
                  try {
                    Buffer.from("foo", "utf8");
                  } catch (t) {
                    e = !0;
                  }
                return e
                  ? function (e, t) {
                      return t ? new Buffer(e, t) : new Buffer(e);
                    }
                  : Buffer.from.bind(Buffer);
              }
              return function () {};
            })(),
            c = (function () {
              if ("undefined" == typeof Buffer) return !1;
              var e = l([65, 0]);
              return !!e && 1 == e.toString("utf16le").length;
            })();
          function f(e) {
            return s
              ? Buffer.alloc
                ? Buffer.alloc(e)
                : new Buffer(e)
              : "undefined" != typeof Uint8Array
                ? new Uint8Array(e)
                : new Array(e);
          }
          function h(e) {
            return s
              ? Buffer.allocUnsafe
                ? Buffer.allocUnsafe(e)
                : new Buffer(e)
              : "undefined" != typeof Uint8Array
                ? new Uint8Array(e)
                : new Array(e);
          }
          var u = function (e) {
            return s
              ? l(e, "binary")
              : e.split("").map(function (e) {
                  return 255 & e.charCodeAt(0);
                });
          };
          function d(e) {
            if ("undefined" == typeof ArrayBuffer) return u(e);
            for (
              var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
              n != e.length;
              ++n
            )
              r[n] = 255 & e.charCodeAt(n);
            return t;
          }
          var m = s
              ? function (e) {
                  return Buffer.concat(
                    e.map(function (e) {
                      return Buffer.isBuffer(e) ? e : l(e);
                    }),
                  );
                }
              : function (e) {
                  if ("undefined" != typeof Uint8Array) {
                    var t = 0,
                      r = 0;
                    for (t = 0; t < e.length; ++t) r += e[t].length;
                    var n = new Uint8Array(r),
                      a = 0;
                    for (t = 0, r = 0; t < e.length; r += a, ++t)
                      ((a = e[t].length),
                        e[t] instanceof Uint8Array
                          ? n.set(e[t], r)
                          : "string" == typeof e[t]
                            ? n.set(new Uint8Array(u(e[t])), r)
                            : n.set(new Uint8Array(e[t]), r));
                    return n;
                  }
                  return [].concat.apply(
                    [],
                    e.map(function (e) {
                      return Array.isArray(e) ? e : [].slice.call(e);
                    }),
                  );
                },
            p = /\u0000/g,
            g = /[\u0001-\u0006]/g;
          function v(e) {
            for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
            return t;
          }
          function w(e, t) {
            var r = "" + e;
            return r.length >= t ? r : we("0", t - r.length) + r;
          }
          function b(e, t) {
            var r = "" + e;
            return r.length >= t ? r : we(" ", t - r.length) + r;
          }
          function y(e, t) {
            var r = "" + e;
            return r.length >= t ? r : r + we(" ", t - r.length);
          }
          var x = Math.pow(2, 32);
          function C(e, t) {
            return e > x || e < -x
              ? (function (e, t) {
                  var r = "" + Math.round(e);
                  return r.length >= t ? r : we("0", t - r.length) + r;
                })(e, t)
              : (function (e, t) {
                  var r = "" + e;
                  return r.length >= t ? r : we("0", t - r.length) + r;
                })(Math.round(e), t);
          }
          function S(e, t) {
            return (
              (t = t || 0),
              e.length >= 7 + t &&
                103 == (32 | e.charCodeAt(t)) &&
                101 == (32 | e.charCodeAt(t + 1)) &&
                110 == (32 | e.charCodeAt(t + 2)) &&
                101 == (32 | e.charCodeAt(t + 3)) &&
                114 == (32 | e.charCodeAt(t + 4)) &&
                97 == (32 | e.charCodeAt(t + 5)) &&
                108 == (32 | e.charCodeAt(t + 6))
            );
          }
          var k = [
              ["Sun", "Sunday"],
              ["Mon", "Monday"],
              ["Tue", "Tuesday"],
              ["Wed", "Wednesday"],
              ["Thu", "Thursday"],
              ["Fri", "Friday"],
              ["Sat", "Saturday"],
            ],
            _ = [
              ["J", "Jan", "January"],
              ["F", "Feb", "February"],
              ["M", "Mar", "March"],
              ["A", "Apr", "April"],
              ["M", "May", "May"],
              ["J", "Jun", "June"],
              ["J", "Jul", "July"],
              ["A", "Aug", "August"],
              ["S", "Sep", "September"],
              ["O", "Oct", "October"],
              ["N", "Nov", "November"],
              ["D", "Dec", "December"],
            ],
            A = {
              0: "General",
              1: "0",
              2: "0.00",
              3: "#,##0",
              4: "#,##0.00",
              9: "0%",
              10: "0.00%",
              11: "0.00E+00",
              12: "# ?/?",
              13: "# ??/??",
              14: "m/d/yy",
              15: "d-mmm-yy",
              16: "d-mmm",
              17: "mmm-yy",
              18: "h:mm AM/PM",
              19: "h:mm:ss AM/PM",
              20: "h:mm",
              21: "h:mm:ss",
              22: "m/d/yy h:mm",
              37: "#,##0 ;(#,##0)",
              38: "#,##0 ;[Red](#,##0)",
              39: "#,##0.00;(#,##0.00)",
              40: "#,##0.00;[Red](#,##0.00)",
              45: "mm:ss",
              46: "[h]:mm:ss",
              47: "mmss.0",
              48: "##0.0E+0",
              49: "@",
              56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
            },
            E = {
              5: 37,
              6: 38,
              7: 39,
              8: 40,
              23: 0,
              24: 0,
              25: 0,
              26: 0,
              27: 14,
              28: 14,
              29: 14,
              30: 14,
              31: 14,
              50: 14,
              51: 14,
              52: 14,
              53: 14,
              54: 14,
              55: 14,
              56: 14,
              57: 14,
              58: 14,
              59: 1,
              60: 2,
              61: 3,
              62: 4,
              67: 9,
              68: 10,
              69: 12,
              70: 13,
              71: 14,
              72: 14,
              73: 15,
              74: 16,
              75: 17,
              76: 20,
              77: 21,
              78: 22,
              79: 45,
              80: 46,
              81: 47,
              82: 0,
            },
            O = {
              5: '"$"#,##0_);\\("$"#,##0\\)',
              63: '"$"#,##0_);\\("$"#,##0\\)',
              6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
              64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
              7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
              65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
              8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
              66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
              41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
              42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
              43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
              44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
            };
          function T(e, t, r) {
            for (
              var n = e < 0 ? -1 : 1,
                a = e * n,
                o = 0,
                i = 1,
                s = 0,
                l = 1,
                c = 0,
                f = 0,
                h = Math.floor(a);
              c < t &&
              ((s = (h = Math.floor(a)) * i + o),
              (f = h * c + l),
              !(a - h < 5e-8));
            )
              ((a = 1 / (a - h)), (o = i), (i = s), (l = c), (c = f));
            if (
              (f > t && (c > t ? ((f = l), (s = o)) : ((f = c), (s = i))), !r)
            )
              return [0, n * s, f];
            var u = Math.floor((n * s) / f);
            return [u, n * s - u * f, f];
          }
          function D(e, t, r) {
            if (e > 2958465 || e < 0) return null;
            var n =
                0 |
                (e = (function (e) {
                  var t = e.toPrecision(16);
                  if (t.indexOf("e") > -1) {
                    var r = t.slice(0, t.indexOf("e"));
                    return (
                      (r =
                        r.indexOf(".") > -1
                          ? r.slice(0, "0." == r.slice(0, 2) ? 17 : 16)
                          : r.slice(0, 15) + we("0", r.length - 15)) +
                      t.slice(t.indexOf("e"))
                    );
                  }
                  var n =
                    t.indexOf(".") > -1
                      ? t.slice(0, "0." == t.slice(0, 2) ? 17 : 16)
                      : t.slice(0, 15) + we("0", t.length - 15);
                  return Number(n);
                })(e)),
              a = Math.floor(86400 * (e - n)),
              o = 0,
              i = [],
              s = {
                D: n,
                T: a,
                u: 86400 * (e - n) - a,
                y: 0,
                m: 0,
                d: 0,
                H: 0,
                M: 0,
                S: 0,
                q: 0,
              };
            if (
              (Math.abs(s.u) < 1e-6 && (s.u = 0),
              t && t.date1904 && (n += 1462),
              s.u > 0.9999 &&
                ((s.u = 0), 86400 == ++a && ((s.T = a = 0), ++n, ++s.D)),
              60 === n)
            )
              ((i = r ? [1317, 10, 29] : [1900, 2, 29]), (o = 3));
            else if (0 === n) ((i = r ? [1317, 8, 29] : [1900, 1, 0]), (o = 6));
            else {
              n > 60 && --n;
              var l = new Date(1900, 0, 1);
              (l.setDate(l.getDate() + n - 1),
                (i = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
                (o = l.getDay()),
                n < 60 && (o = (o + 6) % 7),
                r &&
                  (o = (function (e, t) {
                    t[0] -= 581;
                    var r = e.getDay();
                    return (e < 60 && (r = (r + 6) % 7), r);
                  })(l, i)));
            }
            return (
              (s.y = i[0]),
              (s.m = i[1]),
              (s.d = i[2]),
              (s.S = a % 60),
              (a = Math.floor(a / 60)),
              (s.M = a % 60),
              (a = Math.floor(a / 60)),
              (s.H = a),
              (s.q = o),
              s
            );
          }
          function M(e) {
            return -1 == e.indexOf(".")
              ? e
              : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
          }
          function F(e, t) {
            switch (typeof e) {
              case "string":
                return e;
              case "boolean":
                return e ? "TRUE" : "FALSE";
              case "number":
                return (0 | e) === e
                  ? e.toString(10)
                  : (function (e) {
                      if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
                      var t,
                        r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                      return (
                        (t =
                          r >= -4 && r <= -1
                            ? e.toPrecision(10 + r)
                            : Math.abs(r) <= 9
                              ? (function (e) {
                                  var t = e < 0 ? 12 : 11,
                                    r = M(e.toFixed(12));
                                  return r.length <= t ||
                                    (r = e.toPrecision(10)).length <= t
                                    ? r
                                    : e.toExponential(5);
                                })(e)
                              : 10 === r
                                ? e.toFixed(10).substr(0, 12)
                                : (function (e) {
                                    var t = M(e.toFixed(11));
                                    return t.length > (e < 0 ? 12 : 11) ||
                                      "0" === t ||
                                      "-0" === t
                                      ? e.toPrecision(6)
                                      : t;
                                  })(e)),
                        M(
                          (function (e) {
                            return -1 == e.indexOf("E")
                              ? e
                              : e
                                  .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E")
                                  .replace(/(E[+-])(\d)$/, "$10$2");
                          })(t.toUpperCase()),
                        )
                      );
                    })(e);
              case "undefined":
                return "";
              case "object":
                if (null == e) return "";
                if (e instanceof Date) return Q(14, he(e, t && t.date1904), t);
            }
            throw new Error("unsupported value in General format: " + e);
          }
          function P(e, t, r, n) {
            var a,
              o = "",
              i = 0,
              s = 0,
              l = r.y,
              c = 0;
            switch (e) {
              case 98:
                l = r.y + 543;
              case 121:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = l % 100), (c = 2));
                    break;
                  default:
                    ((a = l % 1e4), (c = 4));
                }
                break;
              case 109:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = r.m), (c = t.length));
                    break;
                  case 3:
                    return _[r.m - 1][1];
                  case 5:
                    return _[r.m - 1][0];
                  default:
                    return _[r.m - 1][2];
                }
                break;
              case 100:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = r.d), (c = t.length));
                    break;
                  case 3:
                    return k[r.q][0];
                  default:
                    return k[r.q][1];
                }
                break;
              case 104:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = 1 + ((r.H + 11) % 12)), (c = t.length));
                    break;
                  default:
                    throw "bad hour format: " + t;
                }
                break;
              case 72:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = r.H), (c = t.length));
                    break;
                  default:
                    throw "bad hour format: " + t;
                }
                break;
              case 77:
                switch (t.length) {
                  case 1:
                  case 2:
                    ((a = r.M), (c = t.length));
                    break;
                  default:
                    throw "bad minute format: " + t;
                }
                break;
              case 115:
                if (
                  "s" != t &&
                  "ss" != t &&
                  ".0" != t &&
                  ".00" != t &&
                  ".000" != t
                )
                  throw "bad second format: " + t;
                return 0 !== r.u || ("s" != t && "ss" != t)
                  ? ((s = n >= 2 ? (3 === n ? 1e3 : 100) : 1 === n ? 10 : 1),
                    (i = Math.round(s * (r.S + r.u))) >= 60 * s && (i = 0),
                    "s" === t
                      ? 0 === i
                        ? "0"
                        : "" + i / s
                      : ((o = w(i, 2 + n)),
                        "ss" === t
                          ? o.substr(0, 2)
                          : "." + o.substr(2, t.length - 1)))
                  : w(r.S, t.length);
              case 90:
                switch (t) {
                  case "[h]":
                  case "[hh]":
                    a = 24 * r.D + r.H;
                    break;
                  case "[m]":
                  case "[mm]":
                    a = 60 * (24 * r.D + r.H) + r.M;
                    break;
                  case "[s]":
                  case "[ss]":
                    a =
                      60 * (60 * (24 * r.D + r.H) + r.M) +
                      (0 == n ? Math.round(r.S + r.u) : r.S);
                    break;
                  default:
                    throw "bad abstime format: " + t;
                }
                c = 3 === t.length ? 1 : 2;
                break;
              case 101:
                ((a = l), (c = 1));
            }
            return c > 0 ? w(a, c) : "";
          }
          function R(e) {
            if (e.length <= 3) return e;
            for (
              var t = e.length % 3, r = e.substr(0, t);
              t != e.length;
              t += 3
            )
              r += (r.length > 0 ? "," : "") + e.substr(t, 3);
            return r;
          }
          var I = /%/g;
          function N(e, t) {
            var r,
              n = e.indexOf("E") - e.indexOf(".") - 1;
            if (e.match(/^#+0.0E\+0$/)) {
              if (0 == t) return "0.0E+0";
              if (t < 0) return "-" + N(e, -t);
              var a = e.indexOf(".");
              -1 === a && (a = e.indexOf("E"));
              var o = Math.floor(Math.log(t) * Math.LOG10E) % a;
              if (
                (o < 0 && (o += a),
                -1 ===
                  (r = (t / Math.pow(10, o)).toPrecision(
                    n + 1 + ((a + o) % a),
                  )).indexOf("e"))
              ) {
                var i = Math.floor(Math.log(t) * Math.LOG10E);
                for (
                  -1 === r.indexOf(".")
                    ? (r =
                        r.charAt(0) +
                        "." +
                        r.substr(1) +
                        "E+" +
                        (i - r.length + o))
                    : (r += "E+" + (i - o));
                  "0." === r.substr(0, 2);
                )
                  r = (r = r.charAt(0) + r.substr(2, a) + "." + r.substr(2 + a))
                    .replace(/^0+([1-9])/, "$1")
                    .replace(/^0+\./, "0.");
                r = r.replace(/\+-/, "-");
              }
              r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, t, r, n) {
                return (
                  t + r + n.substr(0, (a + o) % a) + "." + n.substr(o) + "E"
                );
              });
            } else r = t.toExponential(n);
            return (
              e.match(/E\+00$/) &&
                r.match(/e[+-]\d$/) &&
                (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)),
              e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")),
              r.replace("e", "E")
            );
          }
          var L = /# (\?+)( ?)\/( ?)(\d+)/,
            U = /^#*0*\.([0#]+)/,
            j = /\)[^)]*[0#]/,
            z = /\(###\) ###\\?-####/;
          function B(e) {
            for (var t, r = "", n = 0; n != e.length; ++n)
              switch ((t = e.charCodeAt(n))) {
                case 35:
                  break;
                case 63:
                  r += " ";
                  break;
                case 48:
                  r += "0";
                  break;
                default:
                  r += String.fromCharCode(t);
              }
            return r;
          }
          function W(e, t) {
            var r = Math.pow(10, t);
            return "" + Math.round(e * r) / r;
          }
          function H(e, t) {
            var r = e - Math.floor(e),
              n = Math.pow(10, t);
            return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
          }
          function G(e, t, r) {
            if (40 === e.charCodeAt(0) && !t.match(j)) {
              var n = t
                .replace(/\( */, "")
                .replace(/ \)/, "")
                .replace(/\)/, "");
              return r >= 0 ? G("n", n, r) : "(" + G("n", n, -r) + ")";
            }
            if (44 === t.charCodeAt(t.length - 1))
              return (function (e, t, r) {
                for (var n = t.length - 1; 44 === t.charCodeAt(n - 1); ) --n;
                return J(
                  e,
                  t.substr(0, n),
                  r / Math.pow(10, 3 * (t.length - n)),
                );
              })(e, t, r);
            if (-1 !== t.indexOf("%"))
              return (function (e, t, r) {
                var n = t.replace(I, ""),
                  a = t.length - n.length;
                return J(e, n, r * Math.pow(10, 2 * a)) + we("%", a);
              })(e, t, r);
            if (-1 !== t.indexOf("E")) return N(t, r);
            if (36 === t.charCodeAt(0))
              return "$" + G(e, t.substr(" " == t.charAt(1) ? 2 : 1), r);
            var a,
              o,
              i,
              s,
              l = Math.abs(r),
              c = r < 0 ? "-" : "";
            if (t.match(/^00+$/)) return c + C(l, t.length);
            if (t.match(/^[#?]+$/))
              return (
                "0" === (a = C(r, 0)) && (a = ""),
                a.length > t.length
                  ? a
                  : B(t.substr(0, t.length - a.length)) + a
              );
            if ((o = t.match(L)))
              return (function (e, t, r) {
                var n = parseInt(e[4], 10),
                  a = Math.round(t * n),
                  o = Math.floor(a / n),
                  i = a - o * n,
                  s = n;
                return (
                  r +
                  (0 === o ? "" : "" + o) +
                  " " +
                  (0 === i
                    ? we(" ", e[1].length + 1 + e[4].length)
                    : b(i, e[1].length) + e[2] + "/" + e[3] + w(s, e[4].length))
                );
              })(o, l, c);
            if (t.match(/^#+0+$/)) return c + C(l, t.length - t.indexOf("0"));
            if ((o = t.match(U)))
              return (
                (a = W(r, o[1].length)
                  .replace(/^([^\.]+)$/, "$1." + B(o[1]))
                  .replace(/\.$/, "." + B(o[1]))
                  .replace(/\.(\d*)$/, function (e, t) {
                    return "." + t + we("0", B(o[1]).length - t.length);
                  })),
                -1 !== t.indexOf("0.") ? a : a.replace(/^0\./, ".")
              );
            if (
              ((t = t.replace(/^#+([0.])/, "$1")),
              (o = t.match(/^(0*)\.(#*)$/)))
            )
              return (
                c +
                W(l, o[2].length)
                  .replace(/\.(\d*[1-9])0*$/, ".$1")
                  .replace(/^(-?\d*)$/, "$1.")
                  .replace(/^0\./, o[1].length ? "0." : ".")
              );
            if ((o = t.match(/^#{1,3},##0(\.?)$/))) return c + R(C(l, 0));
            if ((o = t.match(/^#,##0\.([#0]*0)$/)))
              return r < 0
                ? "-" + G(e, t, -r)
                : R(
                    "" +
                      (Math.floor(r) +
                        (function (e, t) {
                          return t <
                            (
                              "" +
                              Math.round((e - Math.floor(e)) * Math.pow(10, t))
                            ).length
                            ? 1
                            : 0;
                        })(r, o[1].length)),
                  ) +
                    "." +
                    w(H(r, o[1].length), o[1].length);
            if ((o = t.match(/^#,#*,#0/)))
              return G(e, t.replace(/^#,#*,/, ""), r);
            if ((o = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
              return (
                (a = v(G(e, t.replace(/[\\-]/g, ""), r))),
                (i = 0),
                v(
                  v(t.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                    return i < a.length ? a.charAt(i++) : "0" === e ? "0" : "";
                  }),
                )
              );
            if (t.match(z))
              return (
                "(" +
                (a = G(e, "##########", r)).substr(0, 3) +
                ") " +
                a.substr(3, 3) +
                "-" +
                a.substr(6)
              );
            var f = "";
            if ((o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
              return (
                (i = Math.min(o[4].length, 7)),
                (s = T(l, Math.pow(10, i) - 1, !1)),
                (a = "" + c),
                " " == (f = J("n", o[1], s[1])).charAt(f.length - 1) &&
                  (f = f.substr(0, f.length - 1) + "0"),
                (a += f + o[2] + "/" + o[3]),
                (f = y(s[2], i)).length < o[4].length &&
                  (f = B(o[4].substr(o[4].length - f.length)) + f),
                (a += f)
              );
            if ((o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
              return (
                (i = Math.min(Math.max(o[1].length, o[4].length), 7)),
                c +
                  ((s = T(l, Math.pow(10, i) - 1, !0))[0] ||
                    (s[1] ? "" : "0")) +
                  " " +
                  (s[1]
                    ? b(s[1], i) + o[2] + "/" + o[3] + y(s[2], i)
                    : we(" ", 2 * i + 1 + o[2].length + o[3].length))
              );
            if ((o = t.match(/^[#0?]+$/)))
              return (
                (a = C(r, 0)),
                t.length <= a.length
                  ? a
                  : B(t.substr(0, t.length - a.length)) + a
              );
            if ((o = t.match(/^([#0?]+)\.([#0]+)$/))) {
              ((a =
                "" +
                r
                  .toFixed(Math.min(o[2].length, 10))
                  .replace(/([^0])0+$/, "$1")),
                (i = a.indexOf(".")));
              var h = t.indexOf(".") - i,
                u = t.length - a.length - h;
              return B(t.substr(0, h) + a + t.substr(t.length - u));
            }
            if ((o = t.match(/^00,000\.([#0]*0)$/)))
              return (
                (i = H(r, o[1].length)),
                r < 0
                  ? "-" + G(e, t, -r)
                  : R(
                      (function (e) {
                        return e < 2147483647 && e > -2147483648
                          ? "" + (e >= 0 ? 0 | e : (e - 1) | 0)
                          : "" + Math.floor(e);
                      })(r),
                    )
                      .replace(/^\d,\d{3}$/, "0$&")
                      .replace(/^\d*$/, function (e) {
                        return (
                          "00," + (e.length < 3 ? w(0, 3 - e.length) : "") + e
                        );
                      }) +
                    "." +
                    w(i, o[1].length)
              );
            switch (t) {
              case "###,##0.00":
                return G(e, "#,##0.00", r);
              case "###,###":
              case "##,###":
              case "#,###":
                var d = R(C(l, 0));
                return "0" !== d ? c + d : "";
              case "###,###.00":
                return G(e, "###,##0.00", r).replace(/^0\./, ".");
              case "#,###.00":
                return G(e, "#,##0.00", r).replace(/^0\./, ".");
            }
            throw new Error("unsupported format |" + t + "|");
          }
          function V(e, t) {
            var r,
              n = e.indexOf("E") - e.indexOf(".") - 1;
            if (e.match(/^#+0.0E\+0$/)) {
              if (0 == t) return "0.0E+0";
              if (t < 0) return "-" + V(e, -t);
              var a = e.indexOf(".");
              -1 === a && (a = e.indexOf("E"));
              var o = Math.floor(Math.log(t) * Math.LOG10E) % a;
              if (
                (o < 0 && (o += a),
                !(r = (t / Math.pow(10, o)).toPrecision(
                  n + 1 + ((a + o) % a),
                )).match(/[Ee]/))
              ) {
                var i = Math.floor(Math.log(t) * Math.LOG10E);
                (-1 === r.indexOf(".")
                  ? (r =
                      r.charAt(0) +
                      "." +
                      r.substr(1) +
                      "E+" +
                      (i - r.length + o))
                  : (r += "E+" + (i - o)),
                  (r = r.replace(/\+-/, "-")));
              }
              r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, t, r, n) {
                return (
                  t + r + n.substr(0, (a + o) % a) + "." + n.substr(o) + "E"
                );
              });
            } else r = t.toExponential(n);
            return (
              e.match(/E\+00$/) &&
                r.match(/e[+-]\d$/) &&
                (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)),
              e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")),
              r.replace("e", "E")
            );
          }
          function q(e, t, r) {
            if (40 === e.charCodeAt(0) && !t.match(j)) {
              var n = t
                .replace(/\( */, "")
                .replace(/ \)/, "")
                .replace(/\)/, "");
              return r >= 0 ? q("n", n, r) : "(" + q("n", n, -r) + ")";
            }
            if (44 === t.charCodeAt(t.length - 1))
              return (function (e, t, r) {
                for (var n = t.length - 1; 44 === t.charCodeAt(n - 1); ) --n;
                return J(
                  e,
                  t.substr(0, n),
                  r / Math.pow(10, 3 * (t.length - n)),
                );
              })(e, t, r);
            if (-1 !== t.indexOf("%"))
              return (function (e, t, r) {
                var n = t.replace(I, ""),
                  a = t.length - n.length;
                return J(e, n, r * Math.pow(10, 2 * a)) + we("%", a);
              })(e, t, r);
            if (-1 !== t.indexOf("E")) return V(t, r);
            if (36 === t.charCodeAt(0))
              return "$" + q(e, t.substr(" " == t.charAt(1) ? 2 : 1), r);
            var a,
              o,
              i,
              s,
              l = Math.abs(r),
              c = r < 0 ? "-" : "";
            if (t.match(/^00+$/)) return c + w(l, t.length);
            if (t.match(/^[#?]+$/))
              return (
                (a = "" + r),
                0 === r && (a = ""),
                a.length > t.length
                  ? a
                  : B(t.substr(0, t.length - a.length)) + a
              );
            if ((o = t.match(L)))
              return (function (e, t, r) {
                return (
                  r +
                  (0 === t ? "" : "" + t) +
                  we(" ", e[1].length + 2 + e[4].length)
                );
              })(o, l, c);
            if (t.match(/^#+0+$/)) return c + w(l, t.length - t.indexOf("0"));
            if ((o = t.match(U)))
              return (
                (a = (a = ("" + r)
                  .replace(/^([^\.]+)$/, "$1." + B(o[1]))
                  .replace(/\.$/, "." + B(o[1]))).replace(
                  /\.(\d*)$/,
                  function (e, t) {
                    return "." + t + we("0", B(o[1]).length - t.length);
                  },
                )),
                -1 !== t.indexOf("0.") ? a : a.replace(/^0\./, ".")
              );
            if (
              ((t = t.replace(/^#+([0.])/, "$1")),
              (o = t.match(/^(0*)\.(#*)$/)))
            )
              return (
                c +
                ("" + l)
                  .replace(/\.(\d*[1-9])0*$/, ".$1")
                  .replace(/^(-?\d*)$/, "$1.")
                  .replace(/^0\./, o[1].length ? "0." : ".")
              );
            if ((o = t.match(/^#{1,3},##0(\.?)$/))) return c + R("" + l);
            if ((o = t.match(/^#,##0\.([#0]*0)$/)))
              return r < 0
                ? "-" + q(e, t, -r)
                : R("" + r) + "." + we("0", o[1].length);
            if ((o = t.match(/^#,#*,#0/)))
              return q(e, t.replace(/^#,#*,/, ""), r);
            if ((o = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
              return (
                (a = v(q(e, t.replace(/[\\-]/g, ""), r))),
                (i = 0),
                v(
                  v(t.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                    return i < a.length ? a.charAt(i++) : "0" === e ? "0" : "";
                  }),
                )
              );
            if (t.match(z))
              return (
                "(" +
                (a = q(e, "##########", r)).substr(0, 3) +
                ") " +
                a.substr(3, 3) +
                "-" +
                a.substr(6)
              );
            var f = "";
            if ((o = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
              return (
                (i = Math.min(o[4].length, 7)),
                (s = T(l, Math.pow(10, i) - 1, !1)),
                (a = "" + c),
                " " == (f = J("n", o[1], s[1])).charAt(f.length - 1) &&
                  (f = f.substr(0, f.length - 1) + "0"),
                (a += f + o[2] + "/" + o[3]),
                (f = y(s[2], i)).length < o[4].length &&
                  (f = B(o[4].substr(o[4].length - f.length)) + f),
                (a += f)
              );
            if ((o = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
              return (
                (i = Math.min(Math.max(o[1].length, o[4].length), 7)),
                c +
                  ((s = T(l, Math.pow(10, i) - 1, !0))[0] ||
                    (s[1] ? "" : "0")) +
                  " " +
                  (s[1]
                    ? b(s[1], i) + o[2] + "/" + o[3] + y(s[2], i)
                    : we(" ", 2 * i + 1 + o[2].length + o[3].length))
              );
            if ((o = t.match(/^[#0?]+$/)))
              return (
                (a = "" + r),
                t.length <= a.length
                  ? a
                  : B(t.substr(0, t.length - a.length)) + a
              );
            if ((o = t.match(/^([#0]+)\.([#0]+)$/))) {
              ((a =
                "" +
                r
                  .toFixed(Math.min(o[2].length, 10))
                  .replace(/([^0])0+$/, "$1")),
                (i = a.indexOf(".")));
              var h = t.indexOf(".") - i,
                u = t.length - a.length - h;
              return B(t.substr(0, h) + a + t.substr(t.length - u));
            }
            if ((o = t.match(/^00,000\.([#0]*0)$/)))
              return r < 0
                ? "-" + q(e, t, -r)
                : R("" + r)
                    .replace(/^\d,\d{3}$/, "0$&")
                    .replace(/^\d*$/, function (e) {
                      return (
                        "00," + (e.length < 3 ? w(0, 3 - e.length) : "") + e
                      );
                    }) +
                    "." +
                    w(0, o[1].length);
            switch (t) {
              case "###,###":
              case "##,###":
              case "#,###":
                var d = R("" + l);
                return "0" !== d ? c + d : "";
              default:
                if (t.match(/\.[0#?]*$/))
                  return (
                    q(e, t.slice(0, t.lastIndexOf(".")), r) +
                    B(t.slice(t.lastIndexOf(".")))
                  );
            }
            throw new Error("unsupported format |" + t + "|");
          }
          function J(e, t, r) {
            return (0 | r) === r ? q(e, t, r) : G(e, t, r);
          }
          var X = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
          function K(e) {
            for (var t = 0, r = "", n = ""; t < e.length; )
              switch ((r = e.charAt(t))) {
                case "G":
                  (S(e, t) && (t += 6), t++);
                  break;
                case '"':
                  for (; 34 !== e.charCodeAt(++t) && t < e.length; );
                  ++t;
                  break;
                case "\\":
                case "_":
                  t += 2;
                  break;
                case "@":
                  ++t;
                  break;
                case "B":
                case "b":
                  if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1))
                    return !0;
                case "M":
                case "D":
                case "Y":
                case "H":
                case "S":
                case "E":
                case "m":
                case "d":
                case "y":
                case "h":
                case "s":
                case "e":
                case "g":
                  return !0;
                case "A":
                case "a":
                case "上":
                  if ("A/P" === e.substr(t, 3).toUpperCase()) return !0;
                  if ("AM/PM" === e.substr(t, 5).toUpperCase()) return !0;
                  if ("上午/下午" === e.substr(t, 5).toUpperCase()) return !0;
                  ++t;
                  break;
                case "[":
                  for (n = r; "]" !== e.charAt(t++) && t < e.length; )
                    n += e.charAt(t);
                  if (n.match(X)) return !0;
                  break;
                case ".":
                case "0":
                case "#":
                  for (
                    ;
                    t < e.length &&
                    ("0#?.,E+-%".indexOf((r = e.charAt(++t))) > -1 ||
                      ("\\" == r &&
                        "-" == e.charAt(t + 1) &&
                        "0#".indexOf(e.charAt(t + 2)) > -1));
                  );
                  break;
                case "?":
                  for (; e.charAt(++t) === r; );
                  break;
                case "*":
                  (++t, (" " != e.charAt(t) && "*" != e.charAt(t)) || ++t);
                  break;
                case "(":
                case ")":
                  ++t;
                  break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  for (
                    ;
                    t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;
                  );
                  break;
                default:
                  ++t;
              }
            return !1;
          }
          var Y = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
          function Z(e, t) {
            if (null == t) return !1;
            var r = parseFloat(t[2]);
            switch (t[1]) {
              case "=":
                if (e == r) return !0;
                break;
              case ">":
                if (e > r) return !0;
                break;
              case "<":
                if (e < r) return !0;
                break;
              case "<>":
                if (e != r) return !0;
                break;
              case ">=":
                if (e >= r) return !0;
                break;
              case "<=":
                if (e <= r) return !0;
            }
            return !1;
          }
          function Q(e, t, r) {
            null == r && (r = {});
            var n = "";
            switch (typeof e) {
              case "string":
                n = "m/d/yy" == e && r.dateNF ? r.dateNF : e;
                break;
              case "number":
                (null ==
                  (n =
                    14 == e && r.dateNF
                      ? r.dateNF
                      : (null != r.table ? r.table : A)[e]) &&
                  (n = (r.table && r.table[E[e]]) || A[E[e]]),
                  null == n && (n = O[e] || "General"));
            }
            if (S(n, 0)) return F(t, r);
            t instanceof Date && (t = he(t, r.date1904));
            var a = (function (e, t) {
              var r = (function (e) {
                  for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
                    switch (e.charCodeAt(n)) {
                      case 34:
                        r = !r;
                        break;
                      case 95:
                      case 42:
                      case 92:
                        ++n;
                        break;
                      case 59:
                        ((t[t.length] = e.substr(a, n - a)), (a = n + 1));
                    }
                  if (((t[t.length] = e.substr(a)), !0 === r))
                    throw new Error("Format |" + e + "| unterminated string ");
                  return t;
                })(e),
                n = r.length,
                a = r[n - 1].indexOf("@");
              if ((n < 4 && a > -1 && --n, r.length > 4))
                throw new Error(
                  "cannot find right format for |" + r.join("|") + "|",
                );
              if ("number" != typeof t)
                return [4, 4 === r.length || a > -1 ? r[r.length - 1] : "@"];
              switch (
                ("number" != typeof t || isFinite(t) || (t = 0), r.length)
              ) {
                case 1:
                  r =
                    a > -1
                      ? ["General", "General", "General", r[0]]
                      : [r[0], r[0], r[0], "@"];
                  break;
                case 2:
                  r =
                    a > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
                  break;
                case 3:
                  r =
                    a > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
              }
              var o = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
              if (-1 === r[0].indexOf("[") && -1 === r[1].indexOf("["))
                return [n, o];
              if (
                null != r[0].match(/\[[=<>]/) ||
                null != r[1].match(/\[[=<>]/)
              ) {
                var i = r[0].match(Y),
                  s = r[1].match(Y);
                return Z(t, i)
                  ? [n, r[0]]
                  : Z(t, s)
                    ? [n, r[1]]
                    : [n, r[null != i && null != s ? 2 : 1]];
              }
              return [n, o];
            })(n, t);
            if (S(a[1])) return F(t, r);
            if (!0 === t) t = "TRUE";
            else if (!1 === t) t = "FALSE";
            else {
              if ("" === t || null == t) return "";
              if (isNaN(t) && a[1].indexOf("0") > -1) return "#NUM!";
              if (!isFinite(t) && a[1].indexOf("0") > -1) return "#DIV/0!";
            }
            return (function (e, t, r, n) {
              for (
                var a, o, i, s = [], l = "", c = 0, f = "", h = "t", u = "H";
                c < e.length;
              )
                switch ((f = e.charAt(c))) {
                  case "G":
                    if (!S(e, c))
                      throw new Error(
                        "unrecognized character " + f + " in " + e,
                      );
                    ((s[s.length] = { t: "G", v: "General" }), (c += 7));
                    break;
                  case '"':
                    for (
                      l = "";
                      34 !== (i = e.charCodeAt(++c)) && c < e.length;
                    )
                      l += String.fromCharCode(i);
                    ((s[s.length] = { t: "t", v: l }), ++c);
                    break;
                  case "\\":
                    var d = e.charAt(++c),
                      m = "(" === d || ")" === d ? d : "t";
                    ((s[s.length] = { t: m, v: d }), ++c);
                    break;
                  case "_":
                    ((s[s.length] = { t: "t", v: " " }), (c += 2));
                    break;
                  case "@":
                    ((s[s.length] = { t: "T", v: t }), ++c);
                    break;
                  case "B":
                  case "b":
                    if ("1" === e.charAt(c + 1) || "2" === e.charAt(c + 1)) {
                      if (
                        null == a &&
                        null == (a = D(t, r, "2" === e.charAt(c + 1)))
                      )
                        return "";
                      ((s[s.length] = { t: "X", v: e.substr(c, 2) }),
                        (h = f),
                        (c += 2));
                      break;
                    }
                  case "M":
                  case "D":
                  case "Y":
                  case "H":
                  case "S":
                  case "E":
                    f = f.toLowerCase();
                  case "m":
                  case "d":
                  case "y":
                  case "h":
                  case "s":
                  case "e":
                  case "g":
                    if (t < 0) return "";
                    if (null == a && null == (a = D(t, r))) return "";
                    for (
                      l = f;
                      ++c < e.length && e.charAt(c).toLowerCase() === f;
                    )
                      l += f;
                    ("m" === f && "h" === h.toLowerCase() && (f = "M"),
                      "h" === f && (f = u),
                      (s[s.length] = { t: f, v: l }),
                      (h = f));
                    break;
                  case "A":
                  case "a":
                  case "上":
                    var p = { t: f, v: f };
                    if (
                      (null == a && (a = D(t, r)),
                      "A/P" === e.substr(c, 3).toUpperCase()
                        ? (null != a && (p.v = a.H >= 12 ? e.charAt(c + 2) : f),
                          (p.t = "T"),
                          (u = "h"),
                          (c += 3))
                        : "AM/PM" === e.substr(c, 5).toUpperCase()
                          ? (null != a && (p.v = a.H >= 12 ? "PM" : "AM"),
                            (p.t = "T"),
                            (c += 5),
                            (u = "h"))
                          : "上午/下午" === e.substr(c, 5).toUpperCase()
                            ? (null != a && (p.v = a.H >= 12 ? "下午" : "上午"),
                              (p.t = "T"),
                              (c += 5),
                              (u = "h"))
                            : ((p.t = "t"), ++c),
                      null == a && "T" === p.t)
                    )
                      return "";
                    ((s[s.length] = p), (h = f));
                    break;
                  case "[":
                    for (l = f; "]" !== e.charAt(c++) && c < e.length; )
                      l += e.charAt(c);
                    if ("]" !== l.slice(-1))
                      throw 'unterminated "[" block: |' + l + "|";
                    if (l.match(X)) {
                      if (null == a && null == (a = D(t, r))) return "";
                      ((s[s.length] = { t: "Z", v: l.toLowerCase() }),
                        (h = l.charAt(1)));
                    } else
                      l.indexOf("$") > -1 &&
                        ((l = (l.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
                        K(e) || (s[s.length] = { t: "t", v: l }));
                    break;
                  case ".":
                    if (null != a) {
                      for (l = f; ++c < e.length && "0" === (f = e.charAt(c)); )
                        l += f;
                      s[s.length] = { t: "s", v: l };
                      break;
                    }
                  case "0":
                  case "#":
                    for (
                      l = f;
                      ++c < e.length &&
                      "0#?.,E+-%".indexOf((f = e.charAt(c))) > -1;
                    )
                      l += f;
                    s[s.length] = { t: "n", v: l };
                    break;
                  case "?":
                    for (l = f; e.charAt(++c) === f; ) l += f;
                    ((s[s.length] = { t: f, v: l }), (h = f));
                    break;
                  case "*":
                    (++c, (" " != e.charAt(c) && "*" != e.charAt(c)) || ++c);
                    break;
                  case "(":
                  case ")":
                    ((s[s.length] = { t: 1 === n ? "t" : f, v: f }), ++c);
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    for (
                      l = f;
                      c < e.length && "0123456789".indexOf(e.charAt(++c)) > -1;
                    )
                      l += e.charAt(c);
                    s[s.length] = { t: "D", v: l };
                    break;
                  case " ":
                    ((s[s.length] = { t: f, v: f }), ++c);
                    break;
                  case "$":
                    ((s[s.length] = { t: "t", v: "$" }), ++c);
                    break;
                  default:
                    if (
                      -1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f)
                    )
                      throw new Error(
                        "unrecognized character " + f + " in " + e,
                      );
                    ((s[s.length] = { t: "t", v: f }), ++c);
                }
              var g,
                v,
                w = 0,
                b = 0;
              for (c = s.length - 1, h = "t"; c >= 0; --c)
                switch (s[c].t) {
                  case "h":
                  case "H":
                    ((s[c].t = u), (h = "h"), w < 1 && (w = 1));
                    break;
                  case "s":
                    ((g = s[c].v.match(/\.0+$/)) &&
                      ((b = Math.max(b, g[0].length - 1)), (w = 4)),
                      w < 3 && (w = 3));
                  case "d":
                  case "y":
                  case "e":
                    h = s[c].t;
                    break;
                  case "M":
                    ((h = s[c].t), w < 2 && (w = 2));
                    break;
                  case "m":
                    "s" === h && ((s[c].t = "M"), w < 2 && (w = 2));
                    break;
                  case "X":
                    break;
                  case "Z":
                    (w < 1 && s[c].v.match(/[Hh]/) && (w = 1),
                      w < 2 && s[c].v.match(/[Mm]/) && (w = 2),
                      w < 3 && s[c].v.match(/[Ss]/) && (w = 3));
                }
              switch (w) {
                case 0:
                  break;
                case 1:
                case 2:
                case 3:
                  (a.u >= 0.5 && ((a.u = 0), ++a.S),
                    a.S >= 60 && ((a.S = 0), ++a.M),
                    a.M >= 60 && ((a.M = 0), ++a.H),
                    a.H >= 24 &&
                      ((a.H = 0),
                      ++a.D,
                      ((v = D(a.D)).u = a.u),
                      (v.S = a.S),
                      (v.M = a.M),
                      (v.H = a.H),
                      (a = v)));
                  break;
                case 4:
                  switch (b) {
                    case 1:
                      a.u = Math.round(10 * a.u) / 10;
                      break;
                    case 2:
                      a.u = Math.round(100 * a.u) / 100;
                      break;
                    case 3:
                      a.u = Math.round(1e3 * a.u) / 1e3;
                  }
                  (a.u >= 1 && ((a.u = 0), ++a.S),
                    a.S >= 60 && ((a.S = 0), ++a.M),
                    a.M >= 60 && ((a.M = 0), ++a.H),
                    a.H >= 24 &&
                      ((a.H = 0),
                      ++a.D,
                      ((v = D(a.D)).u = a.u),
                      (v.S = a.S),
                      (v.M = a.M),
                      (v.H = a.H),
                      (a = v)));
              }
              var y,
                x = "";
              for (c = 0; c < s.length; ++c)
                switch (s[c].t) {
                  case "t":
                  case "T":
                  case " ":
                  case "D":
                    break;
                  case "X":
                    ((s[c].v = ""), (s[c].t = ";"));
                    break;
                  case "d":
                  case "m":
                  case "y":
                  case "h":
                  case "H":
                  case "M":
                  case "s":
                  case "e":
                  case "b":
                  case "Z":
                    ((s[c].v = P(s[c].t.charCodeAt(0), s[c].v, a, b)),
                      (s[c].t = "t"));
                    break;
                  case "n":
                  case "?":
                    for (
                      y = c + 1;
                      null != s[y] &&
                      ("?" === (f = s[y].t) ||
                        "D" === f ||
                        ((" " === f || "t" === f) &&
                          null != s[y + 1] &&
                          ("?" === s[y + 1].t ||
                            ("t" === s[y + 1].t && "/" === s[y + 1].v))) ||
                        ("(" === s[c].t &&
                          (" " === f || "n" === f || ")" === f)) ||
                        ("t" === f &&
                          ("/" === s[y].v ||
                            (" " === s[y].v &&
                              null != s[y + 1] &&
                              "?" == s[y + 1].t))));
                    )
                      ((s[c].v += s[y].v), (s[y] = { v: "", t: ";" }), ++y);
                    ((x += s[c].v), (c = y - 1));
                    break;
                  case "G":
                    ((s[c].t = "t"), (s[c].v = F(t, r)));
                }
              var C,
                k,
                _ = "";
              if (x.length > 0) {
                (40 == x.charCodeAt(0)
                  ? ((C = t < 0 && 45 === x.charCodeAt(0) ? -t : t),
                    (k = J("n", x, C)))
                  : ((k = J("n", x, (C = t < 0 && n > 1 ? -t : t))),
                    C < 0 &&
                      s[0] &&
                      "t" == s[0].t &&
                      ((k = k.substr(1)), (s[0].v = "-" + s[0].v))),
                  (y = k.length - 1));
                var A = s.length;
                for (c = 0; c < s.length; ++c)
                  if (
                    null != s[c] &&
                    "t" != s[c].t &&
                    s[c].v.indexOf(".") > -1
                  ) {
                    A = c;
                    break;
                  }
                var E = s.length;
                if (A === s.length && -1 === k.indexOf("E")) {
                  for (c = s.length - 1; c >= 0; --c)
                    null != s[c] &&
                      -1 !== "n?".indexOf(s[c].t) &&
                      (y >= s[c].v.length - 1
                        ? ((y -= s[c].v.length),
                          (s[c].v = k.substr(y + 1, s[c].v.length)))
                        : y < 0
                          ? (s[c].v = "")
                          : ((s[c].v = k.substr(0, y + 1)), (y = -1)),
                      (s[c].t = "t"),
                      (E = c));
                  y >= 0 &&
                    E < s.length &&
                    (s[E].v = k.substr(0, y + 1) + s[E].v);
                } else if (A !== s.length && -1 === k.indexOf("E")) {
                  for (y = k.indexOf(".") - 1, c = A; c >= 0; --c)
                    if (null != s[c] && -1 !== "n?".indexOf(s[c].t)) {
                      for (
                        o =
                          s[c].v.indexOf(".") > -1 && c === A
                            ? s[c].v.indexOf(".") - 1
                            : s[c].v.length - 1,
                          _ = s[c].v.substr(o + 1);
                        o >= 0;
                        --o
                      )
                        y >= 0 &&
                          ("0" === s[c].v.charAt(o) ||
                            "#" === s[c].v.charAt(o)) &&
                          (_ = k.charAt(y--) + _);
                      ((s[c].v = _), (s[c].t = "t"), (E = c));
                    }
                  for (
                    y >= 0 &&
                      E < s.length &&
                      (s[E].v = k.substr(0, y + 1) + s[E].v),
                      y = k.indexOf(".") + 1,
                      c = A;
                    c < s.length;
                    ++c
                  )
                    if (
                      null != s[c] &&
                      (-1 !== "n?(".indexOf(s[c].t) || c === A)
                    ) {
                      for (
                        o =
                          s[c].v.indexOf(".") > -1 && c === A
                            ? s[c].v.indexOf(".") + 1
                            : 0,
                          _ = s[c].v.substr(0, o);
                        o < s[c].v.length;
                        ++o
                      )
                        y < k.length && (_ += k.charAt(y++));
                      ((s[c].v = _), (s[c].t = "t"), (E = c));
                    }
                }
              }
              for (c = 0; c < s.length; ++c)
                null != s[c] &&
                  "n?".indexOf(s[c].t) > -1 &&
                  ((C = n > 1 && t < 0 && c > 0 && "-" === s[c - 1].v ? -t : t),
                  (s[c].v = J(s[c].t, s[c].v, C)),
                  (s[c].t = "t"));
              var O = "";
              for (c = 0; c !== s.length; ++c) null != s[c] && (O += s[c].v);
              return O;
            })(a[1], t, r, a[0]);
          }
          function ee(e, t) {
            if ("number" != typeof t) {
              t = +t || -1;
              for (var r = 0; r < 392; ++r)
                if (null != A[r]) {
                  if (A[r] == e) {
                    t = r;
                    break;
                  }
                } else t < 0 && (t = r);
              t < 0 && (t = 391);
            }
            return ((A[t] = e), t);
          }
          var te = { "d.m": "d\\.m" };
          function re(e, t) {
            return ee(te[e] || e, t);
          }
          var ne = (function () {
              var e = { version: "1.2.0" },
                t = (function () {
                  for (var e = 0, t = new Array(256), r = 0; 256 != r; ++r)
                    ((e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e =
                            1 &
                            (e =
                              1 &
                              (e =
                                1 &
                                (e =
                                  1 &
                                  (e =
                                    1 & (e = r)
                                      ? -306674912 ^ (e >>> 1)
                                      : e >>> 1)
                                    ? -306674912 ^ (e >>> 1)
                                    : e >>> 1)
                                  ? -306674912 ^ (e >>> 1)
                                  : e >>> 1)
                                ? -306674912 ^ (e >>> 1)
                                : e >>> 1)
                              ? -306674912 ^ (e >>> 1)
                              : e >>> 1)
                            ? -306674912 ^ (e >>> 1)
                            : e >>> 1)
                          ? -306674912 ^ (e >>> 1)
                          : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1),
                      (t[r] = e));
                  return "undefined" != typeof Int32Array
                    ? new Int32Array(t)
                    : t;
                })(),
                r = (function (e) {
                  var t = 0,
                    r = 0,
                    n = 0,
                    a =
                      "undefined" != typeof Int32Array
                        ? new Int32Array(4096)
                        : new Array(4096);
                  for (n = 0; 256 != n; ++n) a[n] = e[n];
                  for (n = 0; 256 != n; ++n)
                    for (r = e[n], t = 256 + n; t < 4096; t += 256)
                      r = a[t] = (r >>> 8) ^ e[255 & r];
                  var o = [];
                  for (n = 1; 16 != n; ++n)
                    o[n - 1] =
                      "undefined" != typeof Int32Array &&
                      "function" == typeof a.subarray
                        ? a.subarray(256 * n, 256 * n + 256)
                        : a.slice(256 * n, 256 * n + 256);
                  return o;
                })(t),
                n = r[0],
                a = r[1],
                o = r[2],
                i = r[3],
                s = r[4],
                l = r[5],
                c = r[6],
                f = r[7],
                h = r[8],
                u = r[9],
                d = r[10],
                m = r[11],
                p = r[12],
                g = r[13],
                v = r[14];
              return (
                (e.table = t),
                (e.bstr = function (e, r) {
                  for (var n = ~r, a = 0, o = e.length; a < o; )
                    n = (n >>> 8) ^ t[255 & (n ^ e.charCodeAt(a++))];
                  return ~n;
                }),
                (e.buf = function (e, r) {
                  for (var w = ~r, b = e.length - 15, y = 0; y < b; )
                    w =
                      v[e[y++] ^ (255 & w)] ^
                      g[e[y++] ^ ((w >> 8) & 255)] ^
                      p[e[y++] ^ ((w >> 16) & 255)] ^
                      m[e[y++] ^ (w >>> 24)] ^
                      d[e[y++]] ^
                      u[e[y++]] ^
                      h[e[y++]] ^
                      f[e[y++]] ^
                      c[e[y++]] ^
                      l[e[y++]] ^
                      s[e[y++]] ^
                      i[e[y++]] ^
                      o[e[y++]] ^
                      a[e[y++]] ^
                      n[e[y++]] ^
                      t[e[y++]];
                  for (b += 15; y < b; ) w = (w >>> 8) ^ t[255 & (w ^ e[y++])];
                  return ~w;
                }),
                (e.str = function (e, r) {
                  for (var n = ~r, a = 0, o = e.length, i = 0, s = 0; a < o; )
                    (i = e.charCodeAt(a++)) < 128
                      ? (n = (n >>> 8) ^ t[255 & (n ^ i)])
                      : i < 2048
                        ? (n =
                            ((n =
                              (n >>> 8) ^
                              t[255 & (n ^ (192 | ((i >> 6) & 31)))]) >>>
                              8) ^
                            t[255 & (n ^ (128 | (63 & i)))])
                        : i >= 55296 && i < 57344
                          ? ((i = 64 + (1023 & i)),
                            (s = 1023 & e.charCodeAt(a++)),
                            (n =
                              ((n =
                                ((n =
                                  ((n =
                                    (n >>> 8) ^
                                    t[255 & (n ^ (240 | ((i >> 8) & 7)))]) >>>
                                    8) ^
                                  t[255 & (n ^ (128 | ((i >> 2) & 63)))]) >>>
                                  8) ^
                                t[
                                  255 &
                                    (n ^
                                      (128 | ((s >> 6) & 15) | ((3 & i) << 4)))
                                ]) >>>
                                8) ^
                              t[255 & (n ^ (128 | (63 & s)))]))
                          : (n =
                              ((n =
                                ((n =
                                  (n >>> 8) ^
                                  t[255 & (n ^ (224 | ((i >> 12) & 15)))]) >>>
                                  8) ^
                                t[255 & (n ^ (128 | ((i >> 6) & 63)))]) >>>
                                8) ^
                              t[255 & (n ^ (128 | (63 & i)))]);
                  return ~n;
                }),
                e
              );
            })(),
            ae = (function () {
              var e,
                t = {};
              function r(e) {
                if ("/" == e.charAt(e.length - 1))
                  return -1 === e.slice(0, -1).indexOf("/")
                    ? e
                    : r(e.slice(0, -1));
                var t = e.lastIndexOf("/");
                return -1 === t ? e : e.slice(0, t + 1);
              }
              function n(e) {
                if ("/" == e.charAt(e.length - 1)) return n(e.slice(0, -1));
                var t = e.lastIndexOf("/");
                return -1 === t ? e : e.slice(t + 1);
              }
              function a(e, t) {
                "string" == typeof t && (t = new Date(t));
                var r = t.getHours();
                ((r =
                  ((r = (r << 6) | t.getMinutes()) << 5) |
                  (t.getSeconds() >>> 1)),
                  e.write_shift(2, r));
                var n = t.getFullYear() - 1980;
                ((n = ((n = (n << 4) | (t.getMonth() + 1)) << 5) | t.getDate()),
                  e.write_shift(2, n));
              }
              function c(e) {
                Ht(e, 0);
                for (var t = {}, r = 0; e.l <= e.length - 4; ) {
                  var n = e.read_shift(2),
                    a = e.read_shift(2),
                    o = e.l + a,
                    i = {};
                  switch (n) {
                    case 21589:
                      (1 & (r = e.read_shift(1)) && (i.mtime = e.read_shift(4)),
                        a > 5 &&
                          (2 & r && (i.atime = e.read_shift(4)),
                          4 & r && (i.ctime = e.read_shift(4))),
                        i.mtime && (i.mt = new Date(1e3 * i.mtime)));
                      break;
                    case 1:
                      var s = e.read_shift(4),
                        l = e.read_shift(4);
                      ((i.usz = l * Math.pow(2, 32) + s),
                        (s = e.read_shift(4)),
                        (l = e.read_shift(4)),
                        (i.csz = l * Math.pow(2, 32) + s));
                  }
                  ((e.l = o), (t[n] = i));
                }
                return t;
              }
              function d() {
                return e || (e = void 0);
              }
              function v(e, t) {
                if (80 == e[0] && 75 == e[1]) return pe(e, t);
                if (109 == (32 | e[0]) && 105 == (32 | e[1]))
                  return (function (e, t) {
                    if ("mime-version:" != F(e.slice(0, 13)).toLowerCase())
                      throw new Error("Unsupported MAD header");
                    var r = (t && t.root) || "",
                      n = (
                        s && Buffer.isBuffer(e) ? e.toString("binary") : F(e)
                      ).split("\r\n"),
                      a = 0,
                      o = "";
                    for (a = 0; a < n.length; ++a)
                      if (
                        ((o = n[a]),
                        /^Content-Location:/i.test(o) &&
                          ((o = o.slice(o.indexOf("file"))),
                          r || (r = o.slice(0, o.lastIndexOf("/") + 1)),
                          o.slice(0, r.length) != r))
                      )
                        for (
                          ;
                          r.length > 0 &&
                          ((r = (r = r.slice(0, r.length - 1)).slice(
                            0,
                            r.lastIndexOf("/") + 1,
                          )),
                          o.slice(0, r.length) != r);
                        );
                    var i = (n[1] || "").match(/boundary="(.*?)"/);
                    if (!i) throw new Error("MAD cannot find boundary");
                    var l = "--" + (i[1] || ""),
                      c = { FileIndex: [], FullPaths: [] };
                    C(c);
                    var f,
                      h = 0;
                    for (a = 0; a < n.length; ++a) {
                      var u = n[a];
                      (u !== l && u !== l + "--") ||
                        (h++ && xe(c, n.slice(f, a), r), (f = a));
                    }
                    return c;
                  })(e, t);
                if (e.length < 512)
                  throw new Error("CFB file size " + e.length + " < 512");
                var r,
                  n,
                  a,
                  o,
                  i,
                  l,
                  c = 512,
                  f = [],
                  h = e.slice(0, 512);
                Ht(h, 0);
                var u = (function (e) {
                  if (80 == e[e.l] && 75 == e[e.l + 1]) return [0, 0];
                  (e.chk(O, "Header Signature: "), (e.l += 16));
                  var t = e.read_shift(2, "u");
                  return [e.read_shift(2, "u"), t];
                })(h);
                switch ((r = u[0])) {
                  case 3:
                    c = 512;
                    break;
                  case 4:
                    c = 4096;
                    break;
                  case 0:
                    if (0 == u[1]) return pe(e, t);
                  default:
                    throw new Error("Major Version: Expected 3 or 4 saw " + r);
                }
                512 !== c && Ht((h = e.slice(0, c)), 28);
                var d = e.slice(0, c);
                !(function (e, t) {
                  var r;
                  switch (((e.l += 2), (r = e.read_shift(2)))) {
                    case 9:
                      if (3 != t)
                        throw new Error("Sector Shift: Expected 9 saw " + r);
                      break;
                    case 12:
                      if (4 != t)
                        throw new Error("Sector Shift: Expected 12 saw " + r);
                      break;
                    default:
                      throw new Error(
                        "Sector Shift: Expected 9 or 12 saw " + r,
                      );
                  }
                  (e.chk("0600", "Mini Sector Shift: "),
                    e.chk("000000000000", "Reserved: "));
                })(h, r);
                var m = h.read_shift(4, "i");
                if (3 === r && 0 !== m)
                  throw new Error("# Directory Sectors: Expected 0 saw " + m);
                ((h.l += 4),
                  (o = h.read_shift(4, "i")),
                  (h.l += 4),
                  h.chk("00100000", "Mini Stream Cutoff Size: "),
                  (i = h.read_shift(4, "i")),
                  (n = h.read_shift(4, "i")),
                  (l = h.read_shift(4, "i")),
                  (a = h.read_shift(4, "i")));
                for (
                  var p = -1, g = 0;
                  g < 109 && !((p = h.read_shift(4, "i")) < 0);
                  ++g
                )
                  f[g] = p;
                var v = (function (e, t) {
                  for (
                    var r = Math.ceil(e.length / t) - 1, n = [], a = 1;
                    a < r;
                    ++a
                  )
                    n[a - 1] = e.slice(a * t, (a + 1) * t);
                  return ((n[r - 1] = e.slice(r * t)), n);
                })(e, c);
                b(l, a, v, c, f);
                var S = (function (e, t, r, n) {
                  var a = e.length,
                    o = [],
                    i = [],
                    s = [],
                    l = [],
                    c = n - 1,
                    f = 0,
                    h = 0,
                    u = 0,
                    d = 0;
                  for (f = 0; f < a; ++f)
                    if (((s = []), (u = f + t) >= a && (u -= a), !i[u])) {
                      l = [];
                      var m = [];
                      for (h = u; h >= 0; ) {
                        ((m[h] = !0),
                          (i[h] = !0),
                          (s[s.length] = h),
                          l.push(e[h]));
                        var p = r[Math.floor((4 * h) / n)];
                        if (n < 4 + (d = (4 * h) & c))
                          throw new Error(
                            "FAT boundary crossed: " + h + " 4 " + n,
                          );
                        if (!e[p]) break;
                        if (m[(h = Nt(e[p], d))]) break;
                      }
                      o[u] = { nodes: s, data: dt([l]) };
                    }
                  return o;
                })(v, o, f, c);
                (o < S.length && (S[o].name = "!Directory"),
                  n > 0 && i !== E && (S[i].name = "!MiniFAT"),
                  (S[f[0]].name = "!FAT"),
                  (S.fat_addrs = f),
                  (S.ssz = c));
                var k = [],
                  _ = [],
                  A = [];
                (!(function (e, t, r, n, a, o, i, s) {
                  for (
                    var l,
                      c = 0,
                      f = n.length ? 2 : 0,
                      h = t[e].data,
                      u = 0,
                      d = 0;
                    u < h.length;
                    u += 128
                  ) {
                    var m = h.slice(u, u + 128);
                    (Ht(m, 64),
                      (d = m.read_shift(2)),
                      (l = pt(m, 0, d - f)),
                      n.push(l));
                    var p = {
                      name: l,
                      type: m.read_shift(1),
                      color: m.read_shift(1),
                      L: m.read_shift(4, "i"),
                      R: m.read_shift(4, "i"),
                      C: m.read_shift(4, "i"),
                      clsid: m.read_shift(16),
                      state: m.read_shift(4, "i"),
                      start: 0,
                      size: 0,
                    };
                    (0 !==
                      m.read_shift(2) +
                        m.read_shift(2) +
                        m.read_shift(2) +
                        m.read_shift(2) && (p.ct = x(m, m.l - 8)),
                      0 !==
                        m.read_shift(2) +
                          m.read_shift(2) +
                          m.read_shift(2) +
                          m.read_shift(2) && (p.mt = x(m, m.l - 8)),
                      (p.start = m.read_shift(4, "i")),
                      (p.size = m.read_shift(4, "i")),
                      p.size < 0 &&
                        p.start < 0 &&
                        ((p.size = p.type = 0), (p.start = E), (p.name = "")),
                      5 === p.type
                        ? ((c = p.start),
                          a > 0 && c !== E && (t[c].name = "!StreamData"))
                        : p.size >= 4096
                          ? ((p.storage = "fat"),
                            void 0 === t[p.start] &&
                              (t[p.start] = y(r, p.start, t.fat_addrs, t.ssz)),
                            (t[p.start].name = p.name),
                            (p.content = t[p.start].data.slice(0, p.size)))
                          : ((p.storage = "minifat"),
                            p.size < 0
                              ? (p.size = 0)
                              : c !== E &&
                                p.start !== E &&
                                t[c] &&
                                (p.content = w(
                                  p,
                                  t[c].data,
                                  (t[s] || {}).data,
                                ))),
                      p.content && Ht(p.content, 0),
                      (o[l] = p),
                      i.push(p));
                  }
                })(o, S, v, k, n, {}, _, i),
                  (function (e, t, r) {
                    for (
                      var n = 0,
                        a = 0,
                        o = 0,
                        i = 0,
                        s = 0,
                        l = r.length,
                        c = [],
                        f = [];
                      n < l;
                      ++n
                    )
                      ((c[n] = f[n] = n), (t[n] = r[n]));
                    for (; s < f.length; ++s)
                      ((a = e[(n = f[s])].L),
                        (o = e[n].R),
                        (i = e[n].C),
                        c[n] === n &&
                          (-1 !== a && c[a] !== a && (c[n] = c[a]),
                          -1 !== o && c[o] !== o && (c[n] = c[o])),
                        -1 !== i && (c[i] = n),
                        -1 !== a &&
                          n != c[n] &&
                          ((c[a] = c[n]), f.lastIndexOf(a) < s && f.push(a)),
                        -1 !== o &&
                          n != c[n] &&
                          ((c[o] = c[n]), f.lastIndexOf(o) < s && f.push(o)));
                    for (n = 1; n < l; ++n)
                      c[n] === n &&
                        (-1 !== o && c[o] !== o
                          ? (c[n] = c[o])
                          : -1 !== a && c[a] !== a && (c[n] = c[a]));
                    for (n = 1; n < l; ++n)
                      if (0 !== e[n].type) {
                        if ((s = n) != c[s])
                          do {
                            ((s = c[s]), (t[n] = t[s] + "/" + t[n]));
                          } while (0 !== s && -1 !== c[s] && s != c[s]);
                        c[n] = -1;
                      }
                    for (t[0] += "/", n = 1; n < l; ++n)
                      2 !== e[n].type && (t[n] += "/");
                  })(_, A, k),
                  k.shift());
                var T = { FileIndex: _, FullPaths: A };
                return (t && t.raw && (T.raw = { header: d, sectors: v }), T);
              }
              function w(e, t, r) {
                for (
                  var n = e.start, a = e.size, o = [], i = n;
                  r && a > 0 && i >= 0;
                )
                  (o.push(t.slice(i * A, i * A + A)),
                    (a -= A),
                    (i = Nt(r, 4 * i)));
                return 0 === o.length ? Gt(0) : m(o).slice(0, e.size);
              }
              function b(e, t, r, n, a) {
                var o = E;
                if (e === E) {
                  if (0 !== t)
                    throw new Error("DIFAT chain shorter than expected");
                } else if (-1 !== e) {
                  var i = r[e],
                    s = (n >>> 2) - 1;
                  if (!i) return;
                  for (var l = 0; l < s && (o = Nt(i, 4 * l)) !== E; ++l)
                    a.push(o);
                  t >= 1 && b(Nt(i, n - 4), t - 1, r, n, a);
                }
              }
              function y(e, t, r, n, a) {
                var o = [],
                  i = [];
                a || (a = []);
                var s = n - 1,
                  l = 0,
                  c = 0;
                for (l = t; l >= 0; ) {
                  ((a[l] = !0), (o[o.length] = l), i.push(e[l]));
                  var f = r[Math.floor((4 * l) / n)];
                  if (n < 4 + (c = (4 * l) & s))
                    throw new Error("FAT boundary crossed: " + l + " 4 " + n);
                  if (!e[f]) break;
                  l = Nt(e[f], c);
                }
                return { nodes: o, data: dt([i]) };
              }
              function x(e, t) {
                return new Date(
                  1e3 *
                    ((It(e, t + 4) / 1e7) * Math.pow(2, 32) +
                      It(e, t) / 1e7 -
                      11644473600),
                );
              }
              function C(e, t) {
                var r = t || {},
                  n = r.root || "Root Entry";
                if (
                  (e.FullPaths || (e.FullPaths = []),
                  e.FileIndex || (e.FileIndex = []),
                  e.FullPaths.length !== e.FileIndex.length)
                )
                  throw new Error("inconsistent CFB structure");
                (0 === e.FullPaths.length &&
                  ((e.FullPaths[0] = n + "/"),
                  (e.FileIndex[0] = { name: n, type: 5 })),
                  r.CLSID && (e.FileIndex[0].clsid = r.CLSID),
                  (function (e) {
                    var t = "Sh33tJ5";
                    if (!ae.find(e, "/" + t)) {
                      var r = Gt(4);
                      ((r[0] = 55),
                        (r[1] = r[3] = 50),
                        (r[2] = 54),
                        e.FileIndex.push({
                          name: t,
                          type: 2,
                          content: r,
                          size: 4,
                          L: 69,
                          R: 69,
                          C: 69,
                        }),
                        e.FullPaths.push(e.FullPaths[0] + t),
                        S(e));
                    }
                  })(e));
              }
              function S(e, t) {
                C(e);
                for (
                  var a = !1, o = !1, i = e.FullPaths.length - 1;
                  i >= 0;
                  --i
                ) {
                  var s = e.FileIndex[i];
                  switch (s.type) {
                    case 0:
                      o ? (a = !0) : (e.FileIndex.pop(), e.FullPaths.pop());
                      break;
                    case 1:
                    case 2:
                    case 5:
                      ((o = !0),
                        isNaN(s.R * s.L * s.C) && (a = !0),
                        s.R > -1 && s.L > -1 && s.R == s.L && (a = !0));
                      break;
                    default:
                      a = !0;
                  }
                }
                if (a || t) {
                  var l = new Date(1987, 1, 19),
                    c = 0,
                    f = Object.create ? Object.create(null) : {},
                    h = [];
                  for (i = 0; i < e.FullPaths.length; ++i)
                    ((f[e.FullPaths[i]] = !0),
                      0 !== e.FileIndex[i].type &&
                        h.push([e.FullPaths[i], e.FileIndex[i]]));
                  for (i = 0; i < h.length; ++i) {
                    var u = r(h[i][0]);
                    for (o = f[u]; !o; ) {
                      for (; r(u) && !f[r(u)]; ) u = r(u);
                      (h.push([
                        u,
                        {
                          name: n(u).replace("/", ""),
                          type: 1,
                          clsid: D,
                          ct: l,
                          mt: l,
                          content: null,
                        },
                      ]),
                        (f[u] = !0),
                        (o = f[(u = r(h[i][0]))]));
                    }
                  }
                  for (
                    h.sort(function (e, t) {
                      return (function (e, t) {
                        for (
                          var r = e.split("/"),
                            n = t.split("/"),
                            a = 0,
                            o = 0,
                            i = Math.min(r.length, n.length);
                          a < i;
                          ++a
                        ) {
                          if ((o = r[a].length - n[a].length)) return o;
                          if (r[a] != n[a]) return r[a] < n[a] ? -1 : 1;
                        }
                        return r.length - n.length;
                      })(e[0], t[0]);
                    }),
                      e.FullPaths = [],
                      e.FileIndex = [],
                      i = 0;
                    i < h.length;
                    ++i
                  )
                    ((e.FullPaths[i] = h[i][0]), (e.FileIndex[i] = h[i][1]));
                  for (i = 0; i < h.length; ++i) {
                    var d = e.FileIndex[i],
                      m = e.FullPaths[i];
                    if (
                      ((d.name = n(m).replace("/", "")),
                      (d.L = d.R = d.C = -(d.color = 1)),
                      (d.size = d.content ? d.content.length : 0),
                      (d.start = 0),
                      (d.clsid = d.clsid || D),
                      0 === i)
                    )
                      ((d.C = h.length > 1 ? 1 : -1),
                        (d.size = 0),
                        (d.type = 5));
                    else if ("/" == m.slice(-1)) {
                      for (
                        c = i + 1;
                        c < h.length && r(e.FullPaths[c]) != m;
                        ++c
                      );
                      for (
                        d.C = c >= h.length ? -1 : c, c = i + 1;
                        c < h.length && r(e.FullPaths[c]) != r(m);
                        ++c
                      );
                      ((d.R = c >= h.length ? -1 : c), (d.type = 1));
                    } else
                      (r(e.FullPaths[i + 1] || "") == r(m) && (d.R = i + 1),
                        (d.type = 2));
                  }
                }
              }
              function k(e, t) {
                var r = t || {};
                if ("mad" == r.fileType)
                  return (function (e, t) {
                    for (
                      var r = t || {},
                        n = r.boundary || "SheetJS",
                        a = [
                          "MIME-Version: 1.0",
                          'Content-Type: multipart/related; boundary="' +
                            (n = "------=" + n).slice(2) +
                            '"',
                          "",
                          "",
                          "",
                        ],
                        o = e.FullPaths[0],
                        i = o,
                        l = e.FileIndex[0],
                        c = 1;
                      c < e.FullPaths.length;
                      ++c
                    )
                      if (
                        ((i = e.FullPaths[c].slice(o.length)),
                        (l = e.FileIndex[c]).size &&
                          l.content &&
                          "Sh33tJ5" != i)
                      ) {
                        i = i
                          .replace(
                            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
                            function (e) {
                              return "_x" + e.charCodeAt(0).toString(16) + "_";
                            },
                          )
                          .replace(/[\u0080-\uFFFF]/g, function (e) {
                            return "_u" + e.charCodeAt(0).toString(16) + "_";
                          });
                        for (
                          var f = l.content,
                            h =
                              s && Buffer.isBuffer(f)
                                ? f.toString("binary")
                                : F(f),
                            u = 0,
                            d = Math.min(1024, h.length),
                            m = 0,
                            p = 0;
                          p <= d;
                          ++p
                        )
                          (m = h.charCodeAt(p)) >= 32 && m < 128 && ++u;
                        var g = u >= (4 * d) / 5;
                        (a.push(n),
                          a.push(
                            "Content-Location: " +
                              (r.root || "file:///C:/SheetJS/") +
                              i,
                          ),
                          a.push(
                            "Content-Transfer-Encoding: " +
                              (g ? "quoted-printable" : "base64"),
                          ),
                          a.push("Content-Type: " + we(l, i)),
                          a.push(""),
                          a.push(g ? ye(h) : be(h)));
                      }
                    return (a.push(n + "--\r\n"), a.join("\r\n"));
                  })(e, r);
                if ((S(e), "zip" === r.fileType))
                  return (function (e, t) {
                    var r = t || {},
                      n = [],
                      o = [],
                      i = Gt(1),
                      s = r.compression ? 8 : 0,
                      l = 0,
                      c = 0,
                      f = 0,
                      h = 0,
                      d = e.FullPaths[0],
                      p = d,
                      g = e.FileIndex[0],
                      v = [],
                      w = 0;
                    for (l = 1; l < e.FullPaths.length; ++l)
                      if (
                        ((p = e.FullPaths[l].slice(d.length)),
                        (g = e.FileIndex[l]).size &&
                          g.content &&
                          (!Array.isArray(g.content) ||
                            0 != g.content.length) &&
                          "Sh33tJ5" != p)
                      ) {
                        var b = f,
                          y = Gt(p.length);
                        for (c = 0; c < p.length; ++c)
                          y.write_shift(1, 127 & p.charCodeAt(c));
                        ((y = y.slice(0, y.l)),
                          (v[h] =
                            "string" == typeof g.content
                              ? ne.bstr(g.content, 0)
                              : ne.buf(g.content, 0)));
                        var x =
                          "string" == typeof g.content
                            ? u(g.content)
                            : g.content;
                        (8 == s && (x = P(x)),
                          (i = Gt(30)).write_shift(4, 67324752),
                          i.write_shift(2, 20),
                          i.write_shift(2, 0),
                          i.write_shift(2, s),
                          g.mt ? a(i, g.mt) : i.write_shift(4, 0),
                          i.write_shift(-4, v[h]),
                          i.write_shift(4, x.length),
                          i.write_shift(4, g.content.length),
                          i.write_shift(2, y.length),
                          i.write_shift(2, 0),
                          (f += i.length),
                          n.push(i),
                          (f += y.length),
                          n.push(y),
                          (f += x.length),
                          n.push(x),
                          (i = Gt(46)).write_shift(4, 33639248),
                          i.write_shift(2, 0),
                          i.write_shift(2, 20),
                          i.write_shift(2, 0),
                          i.write_shift(2, s),
                          i.write_shift(4, 0),
                          i.write_shift(-4, v[h]),
                          i.write_shift(4, x.length),
                          i.write_shift(4, g.content.length),
                          i.write_shift(2, y.length),
                          i.write_shift(2, 0),
                          i.write_shift(2, 0),
                          i.write_shift(2, 0),
                          i.write_shift(2, 0),
                          i.write_shift(4, 0),
                          i.write_shift(4, b),
                          (w += i.l),
                          o.push(i),
                          (w += y.length),
                          o.push(y),
                          ++h);
                      }
                    return (
                      (i = Gt(22)).write_shift(4, 101010256),
                      i.write_shift(2, 0),
                      i.write_shift(2, 0),
                      i.write_shift(2, h),
                      i.write_shift(2, h),
                      i.write_shift(4, w),
                      i.write_shift(4, f),
                      i.write_shift(2, 0),
                      m([m(n), m(o), i])
                    );
                  })(e, r);
                var n = (function (e) {
                    for (var t = 0, r = 0, n = 0; n < e.FileIndex.length; ++n) {
                      var a = e.FileIndex[n];
                      if (a.content) {
                        var o = a.content.length;
                        o > 0 &&
                          (o < 4096
                            ? (t += (o + 63) >> 6)
                            : (r += (o + 511) >> 9));
                      }
                    }
                    for (
                      var i = (e.FullPaths.length + 3) >> 2,
                        s = (t + 127) >> 7,
                        l = ((t + 7) >> 3) + r + i + s,
                        c = (l + 127) >> 7,
                        f = c <= 109 ? 0 : Math.ceil((c - 109) / 127);
                      (l + c + f + 127) >> 7 > c;
                    )
                      f = ++c <= 109 ? 0 : Math.ceil((c - 109) / 127);
                    var h = [1, f, c, s, i, r, t, 0];
                    return (
                      (e.FileIndex[0].size = t << 6),
                      (h[7] =
                        (e.FileIndex[0].start =
                          h[0] + h[1] + h[2] + h[3] + h[4] + h[5]) +
                        ((h[6] + 7) >> 3)),
                      h
                    );
                  })(e),
                  o = Gt(n[7] << 9),
                  i = 0,
                  l = 0;
                for (i = 0; i < 8; ++i) o.write_shift(1, T[i]);
                for (i = 0; i < 8; ++i) o.write_shift(2, 0);
                for (
                  o.write_shift(2, 62),
                    o.write_shift(2, 3),
                    o.write_shift(2, 65534),
                    o.write_shift(2, 9),
                    o.write_shift(2, 6),
                    i = 0;
                  i < 3;
                  ++i
                )
                  o.write_shift(2, 0);
                for (
                  o.write_shift(4, 0),
                    o.write_shift(4, n[2]),
                    o.write_shift(4, n[0] + n[1] + n[2] + n[3] - 1),
                    o.write_shift(4, 0),
                    o.write_shift(4, 4096),
                    o.write_shift(4, n[3] ? n[0] + n[1] + n[2] - 1 : E),
                    o.write_shift(4, n[3]),
                    o.write_shift(-4, n[1] ? n[0] - 1 : E),
                    o.write_shift(4, n[1]),
                    i = 0;
                  i < 109;
                  ++i
                )
                  o.write_shift(-4, i < n[2] ? n[1] + i : -1);
                if (n[1])
                  for (l = 0; l < n[1]; ++l) {
                    for (; i < 236 + 127 * l; ++i)
                      o.write_shift(-4, i < n[2] ? n[1] + i : -1);
                    o.write_shift(-4, l === n[1] - 1 ? E : l + 1);
                  }
                var c = function (e) {
                  for (l += e; i < l - 1; ++i) o.write_shift(-4, i + 1);
                  e && (++i, o.write_shift(-4, E));
                };
                for (l = i = 0, l += n[1]; i < l; ++i)
                  o.write_shift(-4, M.DIFSECT);
                for (l += n[2]; i < l; ++i) o.write_shift(-4, M.FATSECT);
                (c(n[3]), c(n[4]));
                for (
                  var f = 0, h = 0, d = e.FileIndex[0];
                  f < e.FileIndex.length;
                  ++f
                )
                  (d = e.FileIndex[f]).content &&
                    ((h = d.content.length) < 4096 ||
                      ((d.start = l), c((h + 511) >> 9)));
                for (c((n[6] + 7) >> 3); 511 & o.l; )
                  o.write_shift(-4, M.ENDOFCHAIN);
                for (l = i = 0, f = 0; f < e.FileIndex.length; ++f)
                  (d = e.FileIndex[f]).content &&
                    (!(h = d.content.length) ||
                      h >= 4096 ||
                      ((d.start = l), c((h + 63) >> 6)));
                for (; 511 & o.l; ) o.write_shift(-4, M.ENDOFCHAIN);
                for (i = 0; i < n[4] << 2; ++i) {
                  var p = e.FullPaths[i];
                  if (p && 0 !== p.length) {
                    ((d = e.FileIndex[i]),
                      0 === i && (d.start = d.size ? d.start - 1 : E));
                    var g = (0 === i && r.root) || d.name;
                    if (
                      (g.length > 31 &&
                        (console.error(
                          "Name " +
                            g +
                            " will be truncated to " +
                            g.slice(0, 31),
                        ),
                        (g = g.slice(0, 31))),
                      (h = 2 * (g.length + 1)),
                      o.write_shift(64, g, "utf16le"),
                      o.write_shift(2, h),
                      o.write_shift(1, d.type),
                      o.write_shift(1, d.color),
                      o.write_shift(-4, d.L),
                      o.write_shift(-4, d.R),
                      o.write_shift(-4, d.C),
                      d.clsid)
                    )
                      o.write_shift(16, d.clsid, "hex");
                    else for (f = 0; f < 4; ++f) o.write_shift(4, 0);
                    (o.write_shift(4, d.state || 0),
                      o.write_shift(4, 0),
                      o.write_shift(4, 0),
                      o.write_shift(4, 0),
                      o.write_shift(4, 0),
                      o.write_shift(4, d.start),
                      o.write_shift(4, d.size),
                      o.write_shift(4, 0));
                  } else {
                    for (f = 0; f < 17; ++f) o.write_shift(4, 0);
                    for (f = 0; f < 3; ++f) o.write_shift(4, -1);
                    for (f = 0; f < 12; ++f) o.write_shift(4, 0);
                  }
                }
                for (i = 1; i < e.FileIndex.length; ++i)
                  if ((d = e.FileIndex[i]).size >= 4096)
                    if (
                      ((o.l = (d.start + 1) << 9),
                      s && Buffer.isBuffer(d.content))
                    )
                      (d.content.copy(o, o.l, 0, d.size),
                        (o.l += (d.size + 511) & -512));
                    else {
                      for (f = 0; f < d.size; ++f)
                        o.write_shift(1, d.content[f]);
                      for (; 511 & f; ++f) o.write_shift(1, 0);
                    }
                for (i = 1; i < e.FileIndex.length; ++i)
                  if ((d = e.FileIndex[i]).size > 0 && d.size < 4096)
                    if (s && Buffer.isBuffer(d.content))
                      (d.content.copy(o, o.l, 0, d.size),
                        (o.l += (d.size + 63) & -64));
                    else {
                      for (f = 0; f < d.size; ++f)
                        o.write_shift(1, d.content[f]);
                      for (; 63 & f; ++f) o.write_shift(1, 0);
                    }
                if (s) o.l = o.length;
                else for (; o.l < o.length; ) o.write_shift(1, 0);
                return o;
              }
              t.version = "1.2.2";
              var _,
                A = 64,
                E = -2,
                O = "d0cf11e0a1b11ae1",
                T = [208, 207, 17, 224, 161, 177, 26, 225],
                D = "00000000000000000000000000000000",
                M = {
                  MAXREGSECT: -6,
                  DIFSECT: -4,
                  FATSECT: -3,
                  ENDOFCHAIN: E,
                  FREESECT: -1,
                  HEADER_SIGNATURE: O,
                  HEADER_MINOR_VERSION: "3e00",
                  MAXREGSID: -6,
                  NOSTREAM: -1,
                  HEADER_CLSID: D,
                  EntryTypes: [
                    "unknown",
                    "storage",
                    "stream",
                    "lockbytes",
                    "property",
                    "root",
                  ],
                };
              function F(e) {
                for (var t = new Array(e.length), r = 0; r < e.length; ++r)
                  t[r] = String.fromCharCode(e[r]);
                return t.join("");
              }
              function P(e) {
                return _ ? _.deflateRawSync(e) : ie(e);
              }
              var R = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                I = [
                  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                  43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                ],
                N = [
                  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                  12289, 16385, 24577,
                ];
              function L(e) {
                var t =
                  (139536 & ((e << 1) | (e << 11))) |
                  (558144 & ((e << 5) | (e << 15)));
                return 255 & ((t >> 16) | (t >> 8) | t);
              }
              for (
                var U = "undefined" != typeof Uint8Array,
                  j = U ? new Uint8Array(256) : [],
                  $ = 0;
                $ < 256;
                ++$
              )
                j[$] = L($);
              function z(e, t) {
                var r = j[255 & e];
                return t <= 8
                  ? r >>> (8 - t)
                  : ((r = (r << 8) | j[(e >> 8) & 255]),
                    t <= 16
                      ? r >>> (16 - t)
                      : (r = (r << 8) | j[(e >> 16) & 255]) >>> (24 - t));
              }
              function B(e, t) {
                var r = 7 & t,
                  n = t >>> 3;
                return ((e[n] | (r <= 6 ? 0 : e[n + 1] << 8)) >>> r) & 3;
              }
              function W(e, t) {
                var r = 7 & t,
                  n = t >>> 3;
                return ((e[n] | (r <= 5 ? 0 : e[n + 1] << 8)) >>> r) & 7;
              }
              function H(e, t) {
                var r = 7 & t,
                  n = t >>> 3;
                return ((e[n] | (r <= 3 ? 0 : e[n + 1] << 8)) >>> r) & 31;
              }
              function G(e, t) {
                var r = 7 & t,
                  n = t >>> 3;
                return ((e[n] | (r <= 1 ? 0 : e[n + 1] << 8)) >>> r) & 127;
              }
              function V(e, t, r) {
                var n = 7 & t,
                  a = t >>> 3,
                  o = (1 << r) - 1,
                  i = e[a] >>> n;
                return r < 8 - n
                  ? i & o
                  : ((i |= e[a + 1] << (8 - n)),
                    r < 16 - n
                      ? i & o
                      : ((i |= e[a + 2] << (16 - n)),
                        r < 24 - n ? i & o : (i |= e[a + 3] << (24 - n)) & o));
              }
              function q(e, t, r) {
                var n = 7 & t,
                  a = t >>> 3;
                return (
                  n <= 5
                    ? (e[a] |= (7 & r) << n)
                    : ((e[a] |= (r << n) & 255),
                      (e[a + 1] = (7 & r) >> (8 - n))),
                  t + 3
                );
              }
              function J(e, t, r) {
                return ((r = (1 & r) << (7 & t)), (e[t >>> 3] |= r), t + 1);
              }
              function X(e, t, r) {
                var n = t >>> 3;
                return (
                  (r <<= 7 & t),
                  (e[n] |= 255 & r),
                  (r >>>= 8),
                  (e[n + 1] = r),
                  t + 8
                );
              }
              function K(e, t, r) {
                var n = t >>> 3;
                return (
                  (r <<= 7 & t),
                  (e[n] |= 255 & r),
                  (r >>>= 8),
                  (e[n + 1] = 255 & r),
                  (e[n + 2] = r >>> 8),
                  t + 16
                );
              }
              function Y(e, t) {
                var r = e.length,
                  n = 2 * r > t ? 2 * r : t + 5,
                  a = 0;
                if (r >= t) return e;
                if (s) {
                  var o = h(n);
                  if (e.copy) e.copy(o);
                  else for (; a < e.length; ++a) o[a] = e[a];
                  return o;
                }
                if (U) {
                  var i = new Uint8Array(n);
                  if (i.set) i.set(e);
                  else for (; a < r; ++a) i[a] = e[a];
                  return i;
                }
                return ((e.length = n), e);
              }
              function Z(e) {
                for (var t = new Array(e), r = 0; r < e; ++r) t[r] = 0;
                return t;
              }
              function Q(e, t, r) {
                var n = 1,
                  a = 0,
                  o = 0,
                  i = 0,
                  s = 0,
                  l = e.length,
                  c = U ? new Uint16Array(32) : Z(32);
                for (o = 0; o < 32; ++o) c[o] = 0;
                for (o = l; o < r; ++o) e[o] = 0;
                l = e.length;
                var f = U ? new Uint16Array(l) : Z(l);
                for (o = 0; o < l; ++o)
                  (c[(a = e[o])]++, n < a && (n = a), (f[o] = 0));
                for (c[0] = 0, o = 1; o <= n; ++o)
                  c[o + 16] = s = (s + c[o - 1]) << 1;
                for (o = 0; o < l; ++o) 0 != (s = e[o]) && (f[o] = c[s + 16]++);
                var h = 0;
                for (o = 0; o < l; ++o)
                  if (0 != (h = e[o]))
                    for (
                      s = z(f[o], n) >> (n - h), i = (1 << (n + 4 - h)) - 1;
                      i >= 0;
                      --i
                    )
                      t[s | (i << h)] = (15 & h) | (o << 4);
                return n;
              }
              var ee = U ? new Uint16Array(512) : Z(512),
                te = U ? new Uint16Array(32) : Z(32);
              if (!U) {
                for (var re = 0; re < 512; ++re) ee[re] = 0;
                for (re = 0; re < 32; ++re) te[re] = 0;
              }
              !(function () {
                for (var e = [], t = 0; t < 32; t++) e.push(5);
                Q(e, te, 32);
                var r = [];
                for (t = 0; t <= 143; t++) r.push(8);
                for (; t <= 255; t++) r.push(9);
                for (; t <= 279; t++) r.push(7);
                for (; t <= 287; t++) r.push(8);
                Q(r, ee, 288);
              })();
              var oe = (function () {
                for (
                  var e = U ? new Uint8Array(32768) : [], t = 0, r = 0;
                  t < N.length - 1;
                  ++t
                )
                  for (; r < N[t + 1]; ++r) e[r] = t;
                for (; r < 32768; ++r) e[r] = 29;
                var n = U ? new Uint8Array(259) : [];
                for (t = 0, r = 0; t < I.length - 1; ++t)
                  for (; r < I[t + 1]; ++r) n[r] = t;
                return function (t, r) {
                  return t.length < 8
                    ? (function (e, t) {
                        for (var r = 0; r < e.length; ) {
                          var n = Math.min(65535, e.length - r),
                            a = r + n == e.length;
                          for (
                            t.write_shift(1, +a),
                              t.write_shift(2, n),
                              t.write_shift(2, 65535 & ~n);
                            n-- > 0;
                          )
                            t[t.l++] = e[r++];
                        }
                        return t.l;
                      })(t, r)
                    : (function (t, r) {
                        for (
                          var a = 0, o = 0, i = U ? new Uint16Array(32768) : [];
                          o < t.length;
                        ) {
                          var s = Math.min(65535, t.length - o);
                          if (s < 10) {
                            for (
                              7 & (a = q(r, a, +!(o + s != t.length))) &&
                                (a += 8 - (7 & a)),
                                r.l = (a / 8) | 0,
                                r.write_shift(2, s),
                                r.write_shift(2, 65535 & ~s);
                              s-- > 0;
                            )
                              r[r.l++] = t[o++];
                            a = 8 * r.l;
                          } else {
                            a = q(r, a, +!(o + s != t.length) + 2);
                            for (var l = 0; s-- > 0; ) {
                              var c = t[o],
                                f = -1,
                                h = 0;
                              if (
                                (f = i[(l = 32767 & ((l << 5) ^ c))]) &&
                                ((f |= -32768 & o) > o && (f -= 32768), f < o)
                              )
                                for (; t[f + h] == t[o + h] && h < 250; ) ++h;
                              if (h > 2) {
                                (c = n[h]) <= 22
                                  ? (a = X(r, a, j[c + 1] >> 1) - 1)
                                  : (X(r, a, 3),
                                    X(r, (a += 5), j[c - 23] >> 5),
                                    (a += 3));
                                var u = c < 8 ? 0 : (c - 4) >> 2;
                                (u > 0 && (K(r, a, h - I[c]), (a += u)),
                                  (c = e[o - f]),
                                  (a = X(r, a, j[c] >> 3)),
                                  (a -= 3));
                                var d = c < 4 ? 0 : (c - 2) >> 1;
                                d > 0 && (K(r, a, o - f - N[c]), (a += d));
                                for (var m = 0; m < h; ++m)
                                  ((i[l] = 32767 & o),
                                    (l = 32767 & ((l << 5) ^ t[o])),
                                    ++o);
                                s -= h - 1;
                              } else
                                (c <= 143 ? (c += 48) : (a = J(r, a, 1)),
                                  (a = X(r, a, j[c])),
                                  (i[l] = 32767 & o),
                                  ++o);
                            }
                            a = X(r, a, 0) - 1;
                          }
                        }
                        return ((r.l = ((a + 7) / 8) | 0), r.l);
                      })(t, r);
                };
              })();
              function ie(e) {
                var t = Gt(50 + Math.floor(1.1 * e.length)),
                  r = oe(e, t);
                return t.slice(0, r);
              }
              var se = U ? new Uint16Array(32768) : Z(32768),
                le = U ? new Uint16Array(32768) : Z(32768),
                ce = U ? new Uint16Array(128) : Z(128),
                fe = 1,
                he = 1;
              function ue(e, t) {
                var r = H(e, t) + 257,
                  n = H(e, (t += 5)) + 1,
                  a =
                    (function (e, t) {
                      var r = 7 & t,
                        n = t >>> 3;
                      return ((e[n] | (r <= 4 ? 0 : e[n + 1] << 8)) >>> r) & 15;
                    })(e, (t += 5)) + 4;
                t += 4;
                for (
                  var o = 0,
                    i = U ? new Uint8Array(19) : Z(19),
                    s = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ],
                    l = 1,
                    c = U ? new Uint8Array(8) : Z(8),
                    f = U ? new Uint8Array(8) : Z(8),
                    h = i.length,
                    u = 0;
                  u < a;
                  ++u
                )
                  ((i[R[u]] = o = W(e, t)), l < o && (l = o), c[o]++, (t += 3));
                var d = 0;
                for (c[0] = 0, u = 1; u <= l; ++u)
                  f[u] = d = (d + c[u - 1]) << 1;
                for (u = 0; u < h; ++u) 0 != (d = i[u]) && (s[u] = f[d]++);
                var m = 0;
                for (u = 0; u < h; ++u)
                  if (0 != (m = i[u])) {
                    d = j[s[u]] >> (8 - m);
                    for (var p = (1 << (7 - m)) - 1; p >= 0; --p)
                      ce[d | (p << m)] = (7 & m) | (u << 3);
                  }
                var g = [];
                for (l = 1; g.length < r + n; )
                  switch (((t += 7 & (d = ce[G(e, t)])), (d >>>= 3))) {
                    case 16:
                      for (
                        o = 3 + B(e, t), t += 2, d = g[g.length - 1];
                        o-- > 0;
                      )
                        g.push(d);
                      break;
                    case 17:
                      for (o = 3 + W(e, t), t += 3; o-- > 0; ) g.push(0);
                      break;
                    case 18:
                      for (o = 11 + G(e, t), t += 7; o-- > 0; ) g.push(0);
                      break;
                    default:
                      (g.push(d), l < d && (l = d));
                  }
                var v = g.slice(0, r),
                  w = g.slice(r);
                for (u = r; u < 286; ++u) v[u] = 0;
                for (u = n; u < 30; ++u) w[u] = 0;
                return ((fe = Q(v, se, 286)), (he = Q(w, le, 30)), t);
              }
              function de(e, t) {
                var r = (function (e, t) {
                  if (3 == e[0] && !(3 & e[1])) return [f(t), 2];
                  for (
                    var r = 0,
                      n = 0,
                      a = h(t || 1 << 18),
                      o = 0,
                      i = a.length >>> 0,
                      s = 0,
                      l = 0;
                    !(1 & n);
                  )
                    if (((n = W(e, r)), (r += 3), n >>> 1 != 0))
                      for (
                        n >> 1 == 1
                          ? ((s = 9), (l = 5))
                          : ((r = ue(e, r)), (s = fe), (l = he));
                        ;
                      ) {
                        !t &&
                          i < o + 32767 &&
                          (i = (a = Y(a, o + 32767)).length);
                        var c = V(e, r, s),
                          u = n >>> 1 == 1 ? ee[c] : se[c];
                        if (((r += 15 & u), ((u >>>= 4) >>> 8) & 255)) {
                          if (256 == u) break;
                          var d = (u -= 257) < 8 ? 0 : (u - 4) >> 2;
                          d > 5 && (d = 0);
                          var m = o + I[u];
                          (d > 0 && ((m += V(e, r, d)), (r += d)),
                            (c = V(e, r, l)),
                            (r += 15 & (u = n >>> 1 == 1 ? te[c] : le[c])));
                          var p = (u >>>= 4) < 4 ? 0 : (u - 2) >> 1,
                            g = N[u];
                          for (
                            p > 0 && ((g += V(e, r, p)), (r += p)),
                              !t && i < m && (i = (a = Y(a, m + 100)).length);
                            o < m;
                          )
                            ((a[o] = a[o - g]), ++o);
                        } else a[o++] = u;
                      }
                    else {
                      7 & r && (r += 8 - (7 & r));
                      var v = e[r >>> 3] | (e[1 + (r >>> 3)] << 8);
                      if (((r += 32), v > 0))
                        for (
                          !t && i < o + v && (i = (a = Y(a, o + v)).length);
                          v-- > 0;
                        )
                          ((a[o++] = e[r >>> 3]), (r += 8));
                    }
                  return t
                    ? [a, (r + 7) >>> 3]
                    : [a.slice(0, o), (r + 7) >>> 3];
                })(e.slice(e.l || 0), t);
                return ((e.l += r[1]), r[0]);
              }
              function me(e, t) {
                if (!e) throw new Error(t);
                "undefined" != typeof console && console.error(t);
              }
              function pe(e, t) {
                var r = e;
                Ht(r, 0);
                var n = { FileIndex: [], FullPaths: [] };
                C(n, { root: t.root });
                for (
                  var a = r.length - 4;
                  (80 != r[a] ||
                    75 != r[a + 1] ||
                    5 != r[a + 2] ||
                    6 != r[a + 3]) &&
                  a >= 0;
                )
                  --a;
                ((r.l = a + 4), (r.l += 4));
                var o = r.read_shift(2);
                r.l += 6;
                var i = r.read_shift(4);
                for (r.l = i, a = 0; a < o; ++a) {
                  r.l += 20;
                  var s = r.read_shift(4),
                    l = r.read_shift(4),
                    f = r.read_shift(2),
                    h = r.read_shift(2),
                    u = r.read_shift(2);
                  r.l += 8;
                  var d = r.read_shift(4),
                    m = c(r.slice(r.l + f, r.l + f + h));
                  r.l += f + h + u;
                  var p = r.l;
                  ((r.l = d + 4),
                    m &&
                      m[1] &&
                      ((m[1] || {}).usz && (l = m[1].usz),
                      (m[1] || {}).csz && (s = m[1].csz)),
                    ge(r, s, l, n, m),
                    (r.l = p));
                }
                return n;
              }
              function ge(e, t, r, n, a) {
                e.l += 2;
                var o = e.read_shift(2),
                  i = e.read_shift(2),
                  s = (function (e) {
                    var t = 65535 & e.read_shift(2),
                      r = 65535 & e.read_shift(2),
                      n = new Date(),
                      a = 31 & r,
                      o = 15 & (r >>>= 5);
                    ((r >>>= 4),
                      n.setMilliseconds(0),
                      n.setFullYear(r + 1980),
                      n.setMonth(o - 1),
                      n.setDate(a));
                    var i = 31 & t,
                      s = 63 & (t >>>= 5);
                    return (
                      (t >>>= 6),
                      n.setHours(t),
                      n.setMinutes(s),
                      n.setSeconds(i << 1),
                      n
                    );
                  })(e);
                if (8257 & o) throw new Error("Unsupported ZIP encryption");
                e.read_shift(4);
                for (
                  var l = e.read_shift(4),
                    f = e.read_shift(4),
                    h = e.read_shift(2),
                    u = e.read_shift(2),
                    d = "",
                    m = 0;
                  m < h;
                  ++m
                )
                  d += String.fromCharCode(e[e.l++]);
                if (u) {
                  var p = c(e.slice(e.l, e.l + u));
                  ((p[21589] || {}).mt && (s = p[21589].mt),
                    (p[1] || {}).usz && (f = p[1].usz),
                    (p[1] || {}).csz && (l = p[1].csz),
                    a &&
                      ((a[21589] || {}).mt && (s = a[21589].mt),
                      (a[1] || {}).usz && (f = a[1].usz),
                      (a[1] || {}).csz && (l = a[1].csz)));
                }
                e.l += u;
                var g = e.slice(e.l, e.l + l);
                switch (i) {
                  case 8:
                    g = (function (e, t) {
                      if (!_) return de(e, t);
                      var r = new (0, _.InflateRaw)(),
                        n = r._processChunk(e.slice(e.l), r._finishFlushFlag);
                      return ((e.l += r.bytesRead), n);
                    })(e, f);
                    break;
                  case 0:
                    e.l += l;
                    break;
                  default:
                    throw new Error("Unsupported ZIP Compression method " + i);
                }
                var v = !1;
                (8 & o &&
                  (134695760 == e.read_shift(4) && (e.read_shift(4), (v = !0)),
                  (l = e.read_shift(4)),
                  (f = e.read_shift(4))),
                  l != t && me(v, "Bad compressed size: " + t + " != " + l),
                  f != r && me(v, "Bad uncompressed size: " + r + " != " + f),
                  Ce(n, d, g, { unsafe: !0, mt: s }));
              }
              var ve = {
                htm: "text/html",
                xml: "text/xml",
                gif: "image/gif",
                jpg: "image/jpeg",
                png: "image/png",
                mso: "application/x-mso",
                thmx: "application/vnd.ms-officetheme",
                sh33tj5: "application/octet-stream",
              };
              function we(e, t) {
                if (e.ctype) return e.ctype;
                var r = e.name || "",
                  n = r.match(/\.([^\.]+)$/);
                return (n && ve[n[1]]) ||
                  (t && (n = (r = t).match(/[\.\\]([^\.\\])+$/)) && ve[n[1]])
                  ? ve[n[1]]
                  : "application/octet-stream";
              }
              function be(e) {
                for (var t = o(e), r = [], n = 0; n < t.length; n += 76)
                  r.push(t.slice(n, n + 76));
                return r.join("\r\n") + "\r\n";
              }
              function ye(e) {
                var t = e.replace(
                  /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
                  function (e) {
                    var t = e.charCodeAt(0).toString(16).toUpperCase();
                    return "=" + (1 == t.length ? "0" + t : t);
                  },
                );
                "\n" ==
                  (t = t.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(
                    0,
                  ) && (t = "=0D" + t.slice(1));
                for (
                  var r = [],
                    n = (t = t
                      .replace(/\r(?!\n)/gm, "=0D")
                      .replace(/\n\n/gm, "\n=0A")
                      .replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"),
                    a = 0;
                  a < n.length;
                  ++a
                ) {
                  var o = n[a];
                  if (0 != o.length)
                    for (var i = 0; i < o.length; ) {
                      var s = 76,
                        l = o.slice(i, i + s);
                      ("=" == l.charAt(s - 1)
                        ? s--
                        : "=" == l.charAt(s - 2)
                          ? (s -= 2)
                          : "=" == l.charAt(s - 3) && (s -= 3),
                        (l = o.slice(i, i + s)),
                        (i += s) < o.length && (l += "="),
                        r.push(l));
                    }
                  else r.push("");
                }
                return r.join("\r\n");
              }
              function xe(e, t, r) {
                for (var n, a = "", o = "", s = "", l = 0; l < 10; ++l) {
                  var c = t[l];
                  if (!c || c.match(/^\s*$/)) break;
                  var f = c.match(/^([^:]*?):\s*([^\s].*)$/);
                  if (f)
                    switch (f[1].toLowerCase()) {
                      case "content-location":
                        a = f[2].trim();
                        break;
                      case "content-type":
                        s = f[2].trim();
                        break;
                      case "content-transfer-encoding":
                        o = f[2].trim();
                    }
                }
                switch ((++l, o.toLowerCase())) {
                  case "base64":
                    n = u(i(t.slice(l).join("")));
                    break;
                  case "quoted-printable":
                    n = (function (e) {
                      for (var t = [], r = 0; r < e.length; ++r) {
                        for (
                          var n = e[r];
                          r <= e.length && "=" == n.charAt(n.length - 1);
                        )
                          n = n.slice(0, n.length - 1) + e[++r];
                        t.push(n);
                      }
                      for (var a = 0; a < t.length; ++a)
                        t[a] = t[a].replace(/[=][0-9A-Fa-f]{2}/g, function (e) {
                          return String.fromCharCode(parseInt(e.slice(1), 16));
                        });
                      return u(t.join("\r\n"));
                    })(t.slice(l));
                    break;
                  default:
                    throw new Error(
                      "Unsupported Content-Transfer-Encoding " + o,
                    );
                }
                var h = Ce(e, a.slice(r.length), n, { unsafe: !0 });
                s && (h.ctype = s);
              }
              function Ce(e, t, r, a) {
                var o = a && a.unsafe;
                o || C(e);
                var i = !o && ae.find(e, t);
                if (!i) {
                  var s = e.FullPaths[0];
                  (t.slice(0, s.length) == s
                    ? (s = t)
                    : ("/" != s.slice(-1) && (s += "/"),
                      (s = (s + t).replace("//", "/"))),
                    (i = { name: n(t), type: 2 }),
                    e.FileIndex.push(i),
                    e.FullPaths.push(s),
                    o || ae.utils.cfb_gc(e));
                }
                return (
                  (i.content = r),
                  (i.size = r ? r.length : 0),
                  a &&
                    (a.CLSID && (i.clsid = a.CLSID),
                    a.mt && (i.mt = a.mt),
                    a.ct && (i.ct = a.ct)),
                  i
                );
              }
              return (
                (t.find = function (e, t) {
                  var r = e.FullPaths.map(function (e) {
                      return e.toUpperCase();
                    }),
                    n = r.map(function (e) {
                      var t = e.split("/");
                      return t[t.length - ("/" == e.slice(-1) ? 2 : 1)];
                    }),
                    a = !1;
                  47 === t.charCodeAt(0)
                    ? ((a = !0), (t = r[0].slice(0, -1) + t))
                    : (a = -1 !== t.indexOf("/"));
                  var o = t.toUpperCase(),
                    i = !0 === a ? r.indexOf(o) : n.indexOf(o);
                  if (-1 !== i) return e.FileIndex[i];
                  var s = !o.match(g);
                  for (
                    o = o.replace(p, ""), s && (o = o.replace(g, "!")), i = 0;
                    i < r.length;
                    ++i
                  ) {
                    if ((s ? r[i].replace(g, "!") : r[i]).replace(p, "") == o)
                      return e.FileIndex[i];
                    if ((s ? n[i].replace(g, "!") : n[i]).replace(p, "") == o)
                      return e.FileIndex[i];
                  }
                  return null;
                }),
                (t.read = function (t, r) {
                  var n = r && r.type;
                  switch (
                    (n || (s && Buffer.isBuffer(t) && (n = "buffer")),
                    n || "base64")
                  ) {
                    case "file":
                      return (function (t, r) {
                        return (d(), v(e.readFileSync(t), r));
                      })(t, r);
                    case "base64":
                      return v(u(i(t)), r);
                    case "binary":
                      return v(u(t), r);
                  }
                  return v(t, r);
                }),
                (t.parse = v),
                (t.write = function (t, r) {
                  var n = k(t, r);
                  switch ((r && r.type) || "buffer") {
                    case "file":
                      return (d(), e.writeFileSync(r.filename, n), n);
                    case "binary":
                      return "string" == typeof n ? n : F(n);
                    case "base64":
                      return o("string" == typeof n ? n : F(n));
                    case "buffer":
                      if (s) return Buffer.isBuffer(n) ? n : l(n);
                    case "array":
                      return "string" == typeof n ? u(n) : n;
                  }
                  return n;
                }),
                (t.writeFile = function (t, r, n) {
                  d();
                  var a = k(t, n);
                  e.writeFileSync(r, a);
                }),
                (t.utils = {
                  cfb_new: function (e) {
                    var t = {};
                    return (C(t, e), t);
                  },
                  cfb_add: Ce,
                  cfb_del: function (e, t) {
                    C(e);
                    var r = ae.find(e, t);
                    if (r)
                      for (var n = 0; n < e.FileIndex.length; ++n)
                        if (e.FileIndex[n] == r)
                          return (
                            e.FileIndex.splice(n, 1),
                            e.FullPaths.splice(n, 1),
                            !0
                          );
                    return !1;
                  },
                  cfb_mov: function (e, t, r) {
                    C(e);
                    var a = ae.find(e, t);
                    if (a)
                      for (var o = 0; o < e.FileIndex.length; ++o)
                        if (e.FileIndex[o] == a)
                          return (
                            (e.FileIndex[o].name = n(r)),
                            (e.FullPaths[o] = r),
                            !0
                          );
                    return !1;
                  },
                  cfb_gc: function (e) {
                    S(e, !0);
                  },
                  ReadShift: Ut,
                  CheckField: Wt,
                  prep_blob: Ht,
                  bconcat: m,
                  use_zlib: function (e) {
                    try {
                      var t = new (0, e.InflateRaw)();
                      if (
                        (t._processChunk(
                          new Uint8Array([3, 0]),
                          t._finishFlushFlag,
                        ),
                        !t.bytesRead)
                      )
                        throw new Error("zlib does not expose bytesRead");
                      _ = e;
                    } catch (e) {
                      console.error(
                        "cannot use native zlib: " + (e.message || e),
                      );
                    }
                  },
                  _deflateRaw: ie,
                  _inflateRaw: de,
                  consts: M,
                }),
                t
              );
            })();
          function oe(e) {
            return "string" == typeof e
              ? d(e)
              : Array.isArray(e)
                ? (function (e) {
                    if ("undefined" == typeof Uint8Array)
                      throw new Error("Unsupported");
                    return new Uint8Array(e);
                  })(e)
                : e;
          }
          function ie(e, t, r) {
            if ("undefined" != typeof Deno) {
              if (r && "string" == typeof t)
                switch (r) {
                  case "utf8":
                    t = new TextEncoder(r).encode(t);
                    break;
                  case "binary":
                    t = d(t);
                    break;
                  default:
                    throw new Error("Unsupported encoding " + r);
                }
              return Deno.writeFileSync(e, t);
            }
            var n = "utf8" == r ? ze(t) : t;
            if ("undefined" != typeof IE_SaveFile) return IE_SaveFile(n, e);
            if ("undefined" != typeof Blob) {
              var o = new Blob([oe(n)], { type: "application/octet-stream" });
              if ("undefined" != typeof navigator && navigator.msSaveBlob)
                return navigator.msSaveBlob(o, e);
              if ("undefined" != typeof saveAs) return saveAs(o, e);
              if (
                "undefined" != typeof URL &&
                "undefined" != typeof document &&
                document.createElement &&
                URL.createObjectURL
              ) {
                var i = URL.createObjectURL(o);
                if (
                  "object" == typeof chrome &&
                  "function" == typeof (chrome.downloads || {}).download
                )
                  return (
                    URL.revokeObjectURL &&
                      "undefined" != typeof setTimeout &&
                      setTimeout(function () {
                        URL.revokeObjectURL(i);
                      }, 6e4),
                    chrome.downloads.download({
                      url: i,
                      filename: e,
                      saveAs: !0,
                    })
                  );
                var s = document.createElement("a");
                if (null != s.download)
                  return (
                    (s.download = e),
                    (s.href = i),
                    document.body.appendChild(s),
                    s.click(),
                    document.body.removeChild(s),
                    URL.revokeObjectURL &&
                      "undefined" != typeof setTimeout &&
                      setTimeout(function () {
                        URL.revokeObjectURL(i);
                      }, 6e4),
                    i
                  );
              } else if (
                "undefined" != typeof URL &&
                !URL.createObjectURL &&
                "object" == typeof chrome
              ) {
                var l =
                  "data:application/octet-stream;base64," +
                  (function (e) {
                    for (
                      var t = "",
                        r = 0,
                        n = 0,
                        o = 0,
                        i = 0,
                        s = 0,
                        l = 0,
                        c = 0,
                        f = 0;
                      f < e.length;
                    )
                      ((i = (r = e[f++]) >> 2),
                        (s = ((3 & r) << 4) | ((n = e[f++]) >> 4)),
                        (l = ((15 & n) << 2) | ((o = e[f++]) >> 6)),
                        (c = 63 & o),
                        isNaN(n) ? (l = c = 64) : isNaN(o) && (c = 64),
                        (t +=
                          a.charAt(i) +
                          a.charAt(s) +
                          a.charAt(l) +
                          a.charAt(c)));
                    return t;
                  })(new Uint8Array(oe(n)));
                return chrome.downloads.download({
                  url: l,
                  filename: e,
                  saveAs: !0,
                });
              }
            }
            if (
              "undefined" != typeof $ &&
              "undefined" != typeof File &&
              "undefined" != typeof Folder
            )
              try {
                var c = File(e);
                return (
                  c.open("w"),
                  (c.encoding = "binary"),
                  Array.isArray(t) &&
                    (t = (function (e) {
                      if (Array.isArray(e))
                        return e
                          .map(function (e) {
                            return String.fromCharCode(e);
                          })
                          .join("");
                      for (var t = [], r = 0; r < e.length; ++r)
                        t[r] = String.fromCharCode(e[r]);
                      return t.join("");
                    })(t)),
                  c.write(t),
                  c.close(),
                  t
                );
              } catch (e) {
                if (!e.message || -1 == e.message.indexOf("onstruct")) throw e;
              }
            throw new Error("cannot save file " + e);
          }
          function se(e) {
            for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
              Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
            return r;
          }
          var le = Date.UTC(1899, 11, 30, 0, 0, 0),
            ce = Date.UTC(1899, 11, 31, 0, 0, 0),
            fe = Date.UTC(1904, 0, 1, 0, 0, 0);
          function he(e, t) {
            var r = (e.getTime() - le) / 864e5;
            return t ? ((r -= 1462) < -1402 ? r - 1 : r) : r < 60 ? r - 1 : r;
          }
          function ue(e) {
            if (e >= 60 && e < 61) return e;
            var t = new Date();
            return (
              t.setTime(24 * (e > 60 ? e : e + 1) * 60 * 60 * 1e3 + le),
              t
            );
          }
          var de = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/,
            me = /^(\d+)-(\d+)-(\d+)$/,
            pe = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
          function ge(e, t) {
            if (e instanceof Date) return e;
            var r = e.match(de);
            return r
              ? new Date(
                  (t ? fe : ce) +
                    1e3 *
                      (60 * (60 * parseInt(r[1], 10) + parseInt(r[2], 10)) +
                        (r[3] ? parseInt(r[3].slice(1), 10) : 0)) +
                    (r[4] ? parseInt((r[4] + "000").slice(1, 4), 10) : 0),
                )
              : (r = e.match(me))
                ? new Date(Date.UTC(+r[1], +r[2] - 1, +r[3], 0, 0, 0, 0))
                : (r = e.match(pe))
                  ? new Date(
                      Date.UTC(
                        +r[1],
                        +r[2] - 1,
                        +r[3],
                        +r[4],
                        +r[5],
                        (r[6] && parseInt(r[6].slice(1), 10)) || 0,
                        (r[7] && parseInt((r[7] + "0000").slice(1, 4), 10)) ||
                          0,
                      ),
                    )
                  : new Date(e);
          }
          function ve(e) {
            if ("undefined" != typeof JSON && !Array.isArray(e))
              return JSON.parse(JSON.stringify(e));
            if ("object" != typeof e || null == e) return e;
            if (e instanceof Date) return new Date(e.getTime());
            var t = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ve(e[r]));
            return t;
          }
          function we(e, t) {
            for (var r = ""; r.length < t; ) r += e;
            return r;
          }
          function be(e) {
            var t = Number(e);
            if (!isNaN(t)) return isFinite(t) ? t : NaN;
            if (!/\d/.test(e)) return t;
            var r = 1,
              n = e
                .replace(/([\d]),([\d])/g, "$1$2")
                .replace(/[$]/g, "")
                .replace(/[%]/g, function () {
                  return ((r *= 100), "");
                });
            return isNaN((t = Number(n)))
              ? ((n = n.replace(/[(]([^()]*)[)]/, function (e, t) {
                  return ((r = -r), t);
                })),
                isNaN((t = Number(n))) ? t : t / r)
              : t / r;
          }
          var ye =
              /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/,
            xe =
              /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/,
            Ce = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/,
            Se = -177984e5 == new Date("6/9/69 00:00 UTC").valueOf(),
            ke = [
              "january",
              "february",
              "march",
              "april",
              "may",
              "june",
              "july",
              "august",
              "september",
              "october",
              "november",
              "december",
            ];
          function _e(e) {
            if (Ce.test(e))
              return -1 == e.indexOf("Z") ? Ee(new Date(e)) : new Date(e);
            var t = e.toLowerCase(),
              r = t.replace(/\s+/g, " ").trim(),
              n = r.match(ye);
            if (n)
              return (function (e) {
                return e[2]
                  ? e[3]
                    ? e[4]
                      ? new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            (+e[1] % 12) + ("p" == e[7] ? 12 : 0),
                            +e[2],
                            +e[4],
                            1e3 * parseFloat(e[3]),
                          ),
                        )
                      : new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            "p" == e[7] ? 12 : 0,
                            +e[1],
                            +e[2],
                            1e3 * parseFloat(e[3]),
                          ),
                        )
                    : e[5]
                      ? new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            (+e[1] % 12) + ("p" == e[7] ? 12 : 0),
                            +e[2],
                            +e[5],
                            e[6] ? 1e3 * parseFloat(e[6]) : 0,
                          ),
                        )
                      : new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            (+e[1] % 12) + ("p" == e[7] ? 12 : 0),
                            +e[2],
                            0,
                            0,
                          ),
                        )
                  : new Date(
                      Date.UTC(
                        1899,
                        11,
                        31,
                        (+e[1] % 12) + ("p" == e[7] ? 12 : 0),
                        0,
                        0,
                        0,
                      ),
                    );
              })(n);
            if ((n = r.match(xe)))
              return (function (e) {
                return e[2]
                  ? e[3]
                    ? e[4]
                      ? new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            +e[1],
                            +e[2],
                            +e[4],
                            1e3 * parseFloat(e[3]),
                          ),
                        )
                      : new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            0,
                            +e[1],
                            +e[2],
                            1e3 * parseFloat(e[3]),
                          ),
                        )
                    : e[5]
                      ? new Date(
                          Date.UTC(
                            1899,
                            11,
                            31,
                            +e[1],
                            +e[2],
                            +e[5],
                            e[6] ? 1e3 * parseFloat(e[6]) : 0,
                          ),
                        )
                      : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0))
                  : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
              })(n);
            if ((n = r.match(pe)))
              return new Date(
                Date.UTC(
                  +n[1],
                  +n[2] - 1,
                  +n[3],
                  +n[4],
                  +n[5],
                  (n[6] && parseInt(n[6].slice(1), 10)) || 0,
                  (n[7] && parseInt((n[7] + "0000").slice(1, 4), 10)) || 0,
                ),
              );
            var a = new Date(Se && -1 == e.indexOf("UTC") ? e + " UTC" : e),
              o = new Date(NaN),
              i = a.getYear();
            a.getMonth();
            var s = a.getDate();
            if (isNaN(s)) return o;
            if (t.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
              if (
                (t = t
                  .replace(/[^a-z]/g, "")
                  .replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 &&
                -1 == ke.indexOf(t)
              )
                return o;
            } else if (t.replace(/[ap]m?/, "").match(/[a-z]/)) return o;
            return i < 0 || i > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? o : a;
          }
          function Ae(e) {
            return new Date(
              e.getUTCFullYear(),
              e.getUTCMonth(),
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds(),
            );
          }
          function Ee(e) {
            return new Date(
              Date.UTC(
                e.getFullYear(),
                e.getMonth(),
                e.getDate(),
                e.getHours(),
                e.getMinutes(),
                e.getSeconds(),
                e.getMilliseconds(),
              ),
            );
          }
          function Oe(e, t, r) {
            if (e.FullPaths) {
              var n;
              if (
                (Array.isArray(r) &&
                  "string" == typeof r[0] &&
                  (r = r.join("")),
                "string" == typeof r)
              )
                return (
                  (n = s
                    ? l(r)
                    : (function (e) {
                        for (
                          var t = [],
                            r = 0,
                            n = e.length + 250,
                            a = f(e.length + 255),
                            o = 0;
                          o < e.length;
                          ++o
                        ) {
                          var i = e.charCodeAt(o);
                          if (i < 128) a[r++] = i;
                          else if (i < 2048)
                            ((a[r++] = 192 | ((i >> 6) & 31)),
                              (a[r++] = 128 | (63 & i)));
                          else if (i >= 55296 && i < 57344) {
                            i = 64 + (1023 & i);
                            var s = 1023 & e.charCodeAt(++o);
                            ((a[r++] = 240 | ((i >> 8) & 7)),
                              (a[r++] = 128 | ((i >> 2) & 63)),
                              (a[r++] = 128 | ((s >> 6) & 15) | ((3 & i) << 4)),
                              (a[r++] = 128 | (63 & s)));
                          } else
                            ((a[r++] = 224 | ((i >> 12) & 15)),
                              (a[r++] = 128 | ((i >> 6) & 63)),
                              (a[r++] = 128 | (63 & i)));
                          r > n &&
                            (t.push(a.slice(0, r)),
                            (r = 0),
                            (a = f(65535)),
                            (n = 65530));
                        }
                        return (t.push(a.slice(0, r)), m(t));
                      })(r)),
                  ae.utils.cfb_add(e, t, n)
                );
              ae.utils.cfb_add(e, t, r);
            } else e.file(t, r);
          }
          var Te =
              '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
            De = (function (e) {
              for (var t = [], r = se(e), n = 0; n !== r.length; ++n)
                t[e[r[n]]] = r[n];
              return t;
            })({
              "&quot;": '"',
              "&apos;": "'",
              "&gt;": ">",
              "&lt;": "<",
              "&amp;": "&",
            }),
            Me = /[&<>'"]/g,
            Fe = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
          function Pe(e) {
            return (e + "")
              .replace(Me, function (e) {
                return De[e];
              })
              .replace(Fe, function (e) {
                return (
                  "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_"
                );
              });
          }
          var Re = /[\u0000-\u001f]/g;
          function Ie(e) {
            return (e + "")
              .replace(Me, function (e) {
                return De[e];
              })
              .replace(/\n/g, "<br/>")
              .replace(Re, function (e) {
                return (
                  "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";"
                );
              });
          }
          function Ne(e) {
            for (
              var t = "", r = 0, n = 0, a = 0, o = 0, i = 0, s = 0;
              r < e.length;
            )
              (n = e.charCodeAt(r++)) < 128
                ? (t += String.fromCharCode(n))
                : ((a = e.charCodeAt(r++)),
                  n > 191 && n < 224
                    ? ((i = (31 & n) << 6),
                      (i |= 63 & a),
                      (t += String.fromCharCode(i)))
                    : ((o = e.charCodeAt(r++)),
                      n < 240
                        ? (t += String.fromCharCode(
                            ((15 & n) << 12) | ((63 & a) << 6) | (63 & o),
                          ))
                        : ((s =
                            (((7 & n) << 18) |
                              ((63 & a) << 12) |
                              ((63 & o) << 6) |
                              (63 & (i = e.charCodeAt(r++)))) -
                            65536),
                          (t += String.fromCharCode(
                            55296 + ((s >>> 10) & 1023),
                          )),
                          (t += String.fromCharCode(56320 + (1023 & s))))));
            return t;
          }
          function Le(e) {
            var t,
              r,
              n,
              a = f(2 * e.length),
              o = 1,
              i = 0,
              s = 0;
            for (r = 0; r < e.length; r += o)
              ((o = 1),
                (n = e.charCodeAt(r)) < 128
                  ? (t = n)
                  : n < 224
                    ? ((t = 64 * (31 & n) + (63 & e.charCodeAt(r + 1))),
                      (o = 2))
                    : n < 240
                      ? ((t =
                          4096 * (15 & n) +
                          64 * (63 & e.charCodeAt(r + 1)) +
                          (63 & e.charCodeAt(r + 2))),
                        (o = 3))
                      : ((o = 4),
                        (t =
                          262144 * (7 & n) +
                          4096 * (63 & e.charCodeAt(r + 1)) +
                          64 * (63 & e.charCodeAt(r + 2)) +
                          (63 & e.charCodeAt(r + 3))),
                        (s = 55296 + (((t -= 65536) >>> 10) & 1023)),
                        (t = 56320 + (1023 & t))),
                0 !== s && ((a[i++] = 255 & s), (a[i++] = s >>> 8), (s = 0)),
                (a[i++] = t % 256),
                (a[i++] = t >>> 8));
            return a.slice(0, i).toString("ucs2");
          }
          function Ue(e) {
            return l(e, "binary").toString("utf8");
          }
          var je = "foo bar bazâð£",
            $e =
              (s && ((Ue(je) == Ne(je) && Ue) || (Le(je) == Ne(je) && Le))) ||
              Ne,
            ze = s
              ? function (e) {
                  return l(e, "utf8").toString("binary");
                }
              : function (e) {
                  for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
                    switch (((n = e.charCodeAt(r++)), !0)) {
                      case n < 128:
                        t.push(String.fromCharCode(n));
                        break;
                      case n < 2048:
                        (t.push(String.fromCharCode(192 + (n >> 6))),
                          t.push(String.fromCharCode(128 + (63 & n))));
                        break;
                      case n >= 55296 && n < 57344:
                        ((n -= 55296),
                          (a = e.charCodeAt(r++) - 56320 + (n << 10)),
                          t.push(String.fromCharCode(240 + ((a >> 18) & 7))),
                          t.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                          t.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                          t.push(String.fromCharCode(128 + (63 & a))));
                        break;
                      default:
                        (t.push(String.fromCharCode(224 + (n >> 12))),
                          t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                          t.push(String.fromCharCode(128 + (63 & n))));
                    }
                  return t.join("");
                },
            Be = (function () {
              var e = [
                ["nbsp", " "],
                ["middot", "·"],
                ["quot", '"'],
                ["apos", "'"],
                ["gt", ">"],
                ["lt", "<"],
                ["amp", "&"],
              ].map(function (e) {
                return [new RegExp("&" + e[0] + ";", "ig"), e[1]];
              });
              return function (t) {
                for (
                  var r = t
                      .replace(/^[\t\n\r ]+/, "")
                      .replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1")
                      .replace(/>\s+/g, ">")
                      .replace(/\b\s+</g, "<")
                      .replace(/[\t\n\r ]+/g, " ")
                      .replace(/<\s*[bB][rR]\s*\/?>/g, "\n")
                      .replace(/<[^<>]*>/g, ""),
                    n = 0;
                  n < e.length;
                  ++n
                )
                  r = r.replace(e[n][0], e[n][1]);
                return r;
              };
            })(),
            We = /(^\s|\s$|\n)/;
          function He(e, t) {
            return (
              "<" +
              e +
              (t.match(We) ? ' xml:space="preserve"' : "") +
              ">" +
              t +
              "</" +
              e +
              ">"
            );
          }
          function Ge(e) {
            return se(e)
              .map(function (t) {
                return " " + t + '="' + e[t] + '"';
              })
              .join("");
          }
          function Ve(e, t, r) {
            return (
              "<" +
              e +
              (null != r ? Ge(r) : "") +
              (null != t
                ? (t.match(We) ? ' xml:space="preserve"' : "") +
                  ">" +
                  t +
                  "</" +
                  e
                : "/") +
              ">"
            );
          }
          function qe(e, t) {
            try {
              return e.toISOString().replace(/\.\d*/, "");
            } catch (e) {
              if (t) throw e;
            }
            return "";
          }
          var Je =
              "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
            Xe =
              "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
            Ke =
              "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
            Ye = "http://schemas.openxmlformats.org/package/2006/content-types",
            Ze = "http://schemas.openxmlformats.org/package/2006/relationships",
            Qe =
              "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
            et = "http://purl.org/dc/elements/1.1/",
            tt = "http://purl.org/dc/terms/",
            rt = "http://purl.org/dc/dcmitype/",
            nt =
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
            at =
              "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
            ot = "http://www.w3.org/2001/XMLSchema-instance",
            it = "http://www.w3.org/2001/XMLSchema",
            st = [
              "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
              "http://purl.oclc.org/ooxml/spreadsheetml/main",
              "http://schemas.microsoft.com/office/excel/2006/main",
              "http://schemas.microsoft.com/office/excel/2006/2",
            ],
            lt = "urn:schemas-microsoft-com:office:office",
            ct = "urn:schemas-microsoft-com:office:excel",
            ft = "http://macVmlSchemaUri",
            ht = "urn:schemas-microsoft-com:vml",
            ut = function (e) {
              for (var t = [], r = 0; r < e[0].length; ++r)
                if (e[0][r])
                  for (var n = 0, a = e[0][r].length; n < a; n += 10240)
                    t.push.apply(t, e[0][r].slice(n, n + 10240));
              return t;
            },
            dt = s
              ? function (e) {
                  return e[0].length > 0 && Buffer.isBuffer(e[0][0])
                    ? Buffer.concat(
                        e[0].map(function (e) {
                          return Buffer.isBuffer(e) ? e : l(e);
                        }),
                      )
                    : ut(e);
                }
              : ut,
            mt = function (e, t, r) {
              for (var n = [], a = t; a < r; a += 2)
                n.push(String.fromCharCode(Pt(e, a)));
              return n.join("").replace(p, "");
            },
            pt = s
              ? function (e, t, r) {
                  return Buffer.isBuffer(e) && c
                    ? e.toString("utf16le", t, r).replace(p, "")
                    : mt(e, t, r);
                }
              : mt,
            gt = function (e, t, r) {
              for (var n = [], a = t; a < t + r; ++a)
                n.push(("0" + e[a].toString(16)).slice(-2));
              return n.join("");
            },
            vt = s
              ? function (e, t, r) {
                  return Buffer.isBuffer(e)
                    ? e.toString("hex", t, t + r)
                    : gt(e, t, r);
                }
              : gt,
            wt = function (e, t, r) {
              for (var n = [], a = t; a < r; a++)
                n.push(String.fromCharCode(Ft(e, a)));
              return n.join("");
            },
            bt = s
              ? function (e, t, r) {
                  return Buffer.isBuffer(e)
                    ? e.toString("utf8", t, r)
                    : wt(e, t, r);
                }
              : wt,
            yt = function (e, t) {
              var r = It(e, t);
              return r > 0 ? bt(e, t + 4, t + 4 + r - 1) : "";
            },
            xt = yt,
            Ct = function (e, t) {
              var r = It(e, t);
              return r > 0 ? bt(e, t + 4, t + 4 + r - 1) : "";
            },
            St = Ct,
            kt = function (e, t) {
              var r = 2 * It(e, t);
              return r > 0 ? bt(e, t + 4, t + 4 + r - 1) : "";
            },
            _t = kt,
            At = function (e, t) {
              var r = It(e, t);
              return r > 0 ? pt(e, t + 4, t + 4 + r) : "";
            },
            Et = At,
            Ot = function (e, t) {
              var r = It(e, t);
              return r > 0 ? bt(e, t + 4, t + 4 + r) : "";
            },
            Tt = Ot,
            Dt = function (e, t) {
              return (function (e, t) {
                for (
                  var r = 1 - 2 * (e[t + 7] >>> 7),
                    n = ((127 & e[t + 7]) << 4) + ((e[t + 6] >>> 4) & 15),
                    a = 15 & e[t + 6],
                    o = 5;
                  o >= 0;
                  --o
                )
                  a = 256 * a + e[t + o];
                return 2047 == n
                  ? 0 == a
                    ? r * (1 / 0)
                    : NaN
                  : (0 == n
                      ? (n = -1022)
                      : ((n -= 1023), (a += Math.pow(2, 52))),
                    r * Math.pow(2, n - 52) * a);
              })(e, t);
            },
            Mt = Dt;
          s &&
            ((xt = function (e, t) {
              if (!Buffer.isBuffer(e)) return yt(e, t);
              var r = e.readUInt32LE(t);
              return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
            }),
            (St = function (e, t) {
              if (!Buffer.isBuffer(e)) return Ct(e, t);
              var r = e.readUInt32LE(t);
              return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
            }),
            (_t = function (e, t) {
              if (!Buffer.isBuffer(e) || !c) return kt(e, t);
              var r = 2 * e.readUInt32LE(t);
              return e.toString("utf16le", t + 4, t + 4 + r - 1);
            }),
            (Et = function (e, t) {
              if (!Buffer.isBuffer(e) || !c) return At(e, t);
              var r = e.readUInt32LE(t);
              return e.toString("utf16le", t + 4, t + 4 + r);
            }),
            (Tt = function (e, t) {
              if (!Buffer.isBuffer(e)) return Ot(e, t);
              var r = e.readUInt32LE(t);
              return e.toString("utf8", t + 4, t + 4 + r);
            }),
            (Mt = function (e, t) {
              return Buffer.isBuffer(e) ? e.readDoubleLE(t) : Dt(e, t);
            }));
          var Ft = function (e, t) {
              return e[t];
            },
            Pt = function (e, t) {
              return 256 * e[t + 1] + e[t];
            },
            Rt = function (e, t) {
              var r = 256 * e[t + 1] + e[t];
              return r < 32768 ? r : -1 * (65535 - r + 1);
            },
            It = function (e, t) {
              return (
                e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
              );
            },
            Nt = function (e, t) {
              return (
                (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t]
              );
            },
            Lt = function (e, t) {
              return (
                (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]
              );
            };
          function Ut(e, t) {
            var r,
              a,
              o,
              i,
              l,
              f,
              h = "",
              u = [];
            switch (t) {
              case "dbcs":
                if (((f = this.l), s && Buffer.isBuffer(this) && c))
                  h = this.slice(this.l, this.l + 2 * e).toString("utf16le");
                else
                  for (l = 0; l < e; ++l)
                    ((h += String.fromCharCode(Pt(this, f))), (f += 2));
                e *= 2;
                break;
              case "utf8":
                h = bt(this, this.l, this.l + e);
                break;
              case "utf16le":
                ((e *= 2), (h = pt(this, this.l, this.l + e)));
                break;
              case "wstr":
                return Ut.call(this, e, "dbcs");
              case "lpstr-ansi":
                ((h = xt(this, this.l)), (e = 4 + It(this, this.l)));
                break;
              case "lpstr-cp":
                ((h = St(this, this.l)), (e = 4 + It(this, this.l)));
                break;
              case "lpwstr":
                ((h = _t(this, this.l)), (e = 4 + 2 * It(this, this.l)));
                break;
              case "lpp4":
                ((e = 4 + It(this, this.l)),
                  (h = Et(this, this.l)),
                  2 & e && (e += 2));
                break;
              case "8lpp4":
                ((e = 4 + It(this, this.l)),
                  (h = Tt(this, this.l)),
                  3 & e && (e += 4 - (3 & e)));
                break;
              case "cstr":
                for (e = 0, h = ""; 0 !== (o = Ft(this, this.l + e++)); )
                  u.push(n(o));
                h = u.join("");
                break;
              case "_wstr":
                for (e = 0, h = ""; 0 !== (o = Pt(this, this.l + e)); )
                  (u.push(n(o)), (e += 2));
                ((e += 2), (h = u.join("")));
                break;
              case "dbcs-cont":
                for (h = "", f = this.l, l = 0; l < e; ++l) {
                  if (this.lens && -1 !== this.lens.indexOf(f))
                    return (
                      (o = Ft(this, f)),
                      (this.l = f + 1),
                      (i = Ut.call(this, e - l, o ? "dbcs-cont" : "sbcs-cont")),
                      u.join("") + i
                    );
                  (u.push(n(Pt(this, f))), (f += 2));
                }
                ((h = u.join("")), (e *= 2));
                break;
              case "cpstr":
              case "sbcs-cont":
                for (h = "", f = this.l, l = 0; l != e; ++l) {
                  if (this.lens && -1 !== this.lens.indexOf(f))
                    return (
                      (o = Ft(this, f)),
                      (this.l = f + 1),
                      (i = Ut.call(this, e - l, o ? "dbcs-cont" : "sbcs-cont")),
                      u.join("") + i
                    );
                  (u.push(n(Ft(this, f))), (f += 1));
                }
                h = u.join("");
                break;
              default:
                switch (e) {
                  case 1:
                    return ((r = Ft(this, this.l)), this.l++, r);
                  case 2:
                    return (
                      (r = ("i" === t ? Rt : Pt)(this, this.l)),
                      (this.l += 2),
                      r
                    );
                  case 4:
                  case -4:
                    return "i" !== t && 128 & this[this.l + 3]
                      ? ((a = It(this, this.l)), (this.l += 4), a)
                      : ((r = (e > 0 ? Nt : Lt)(this, this.l)),
                        (this.l += 4),
                        r);
                  case 8:
                  case -8:
                    if ("f" === t)
                      return (
                        (a =
                          8 == e
                            ? Mt(this, this.l)
                            : Mt(
                                [
                                  this[this.l + 7],
                                  this[this.l + 6],
                                  this[this.l + 5],
                                  this[this.l + 4],
                                  this[this.l + 3],
                                  this[this.l + 2],
                                  this[this.l + 1],
                                  this[this.l + 0],
                                ],
                                0,
                              )),
                        (this.l += 8),
                        a
                      );
                    e = 8;
                  case 16:
                    h = vt(this, this.l, e);
                }
            }
            return ((this.l += e), h);
          }
          var jt = function (e, t, r) {
              ((e[r] = 255 & t),
                (e[r + 1] = (t >>> 8) & 255),
                (e[r + 2] = (t >>> 16) & 255),
                (e[r + 3] = (t >>> 24) & 255));
            },
            $t = function (e, t, r) {
              ((e[r] = 255 & t),
                (e[r + 1] = (t >> 8) & 255),
                (e[r + 2] = (t >> 16) & 255),
                (e[r + 3] = (t >> 24) & 255));
            },
            zt = function (e, t, r) {
              ((e[r] = 255 & t), (e[r + 1] = (t >>> 8) & 255));
            };
          function Bt(e, t, r) {
            var n = 0,
              a = 0;
            if ("dbcs" === r) {
              for (a = 0; a != t.length; ++a)
                zt(this, t.charCodeAt(a), this.l + 2 * a);
              n = 2 * t.length;
            } else if ("sbcs" === r || "cpstr" == r) {
              for (
                t = t.replace(/[^\x00-\x7F]/g, "_"), a = 0;
                a != t.length;
                ++a
              )
                this[this.l + a] = 255 & t.charCodeAt(a);
              n = t.length;
            } else {
              if ("hex" === r) {
                for (; a < e; ++a)
                  this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
                return this;
              }
              if ("utf16le" === r) {
                var o = Math.min(this.l + e, this.length);
                for (a = 0; a < Math.min(t.length, e); ++a) {
                  var i = t.charCodeAt(a);
                  ((this[this.l++] = 255 & i), (this[this.l++] = i >> 8));
                }
                for (; this.l < o; ) this[this.l++] = 0;
                return this;
              }
              switch (e) {
                case 1:
                  ((n = 1), (this[this.l] = 255 & t));
                  break;
                case 2:
                  ((n = 2),
                    (this[this.l] = 255 & t),
                    (t >>>= 8),
                    (this[this.l + 1] = 255 & t));
                  break;
                case 3:
                  ((n = 3),
                    (this[this.l] = 255 & t),
                    (t >>>= 8),
                    (this[this.l + 1] = 255 & t),
                    (t >>>= 8),
                    (this[this.l + 2] = 255 & t));
                  break;
                case 4:
                  ((n = 4), jt(this, t, this.l));
                  break;
                case 8:
                  if (((n = 8), "f" === r)) {
                    !(function (e, t, r) {
                      var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
                        a = 0,
                        o = 0,
                        i = n ? -t : t;
                      isFinite(i)
                        ? 0 == i
                          ? (a = o = 0)
                          : ((a = Math.floor(Math.log(i) / Math.LN2)),
                            (o = i * Math.pow(2, 52 - a)),
                            a <= -1023 && (!isFinite(o) || o < Math.pow(2, 52))
                              ? (a = -1022)
                              : ((o -= Math.pow(2, 52)), (a += 1023)))
                        : ((a = 2047), (o = isNaN(t) ? 26985 : 0));
                      for (var s = 0; s <= 5; ++s, o /= 256) e[r + s] = 255 & o;
                      ((e[r + 6] = ((15 & a) << 4) | (15 & o)),
                        (e[r + 7] = (a >> 4) | n));
                    })(this, t, this.l);
                    break;
                  }
                case 16:
                  break;
                case -4:
                  ((n = 4), $t(this, t, this.l));
              }
            }
            return ((this.l += n), this);
          }
          function Wt(e, t) {
            var r = vt(this, this.l, e.length >> 1);
            if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
            this.l += e.length >> 1;
          }
          function Ht(e, t) {
            ((e.l = t),
              (e.read_shift = Ut),
              (e.chk = Wt),
              (e.write_shift = Bt));
          }
          function Gt(e) {
            var t = f(e);
            return (Ht(t, 0), t);
          }
          function Vt(e) {
            return "" + (e + 1);
          }
          function qt(e) {
            if (e < 0) throw new Error("invalid column " + e);
            var t = "";
            for (++e; e; e = Math.floor((e - 1) / 26))
              t = String.fromCharCode(((e - 1) % 26) + 65) + t;
            return t;
          }
          function Jt(e) {
            for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
              var a = e.charCodeAt(n);
              a >= 48 && a <= 57
                ? (t = 10 * t + (a - 48))
                : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
            }
            return { c: r - 1, r: t - 1 };
          }
          function Xt(e) {
            for (var t = e.c + 1, r = ""; t; t = ((t - 1) / 26) | 0)
              r = String.fromCharCode(((t - 1) % 26) + 65) + r;
            return r + (e.r + 1);
          }
          function Kt(e) {
            var t = e.indexOf(":");
            return -1 == t
              ? { s: Jt(e), e: Jt(e) }
              : { s: Jt(e.slice(0, t)), e: Jt(e.slice(t + 1)) };
          }
          function Yt(e, t) {
            return void 0 === t || "number" == typeof t
              ? Yt(e.s, e.e)
              : ("string" != typeof e && (e = Xt(e)),
                "string" != typeof t && (t = Xt(t)),
                e == t ? e : e + ":" + t);
          }
          function Zt(e) {
            var t = Kt(e);
            return (
              "$" +
              qt(t.s.c) +
              "$" +
              Vt(t.s.r) +
              ":$" +
              qt(t.e.c) +
              "$" +
              Vt(t.e.r)
            );
          }
          function Qt(e, t) {
            if (!(e || (t && t.biff <= 5 && t.biff >= 2)))
              throw new Error("empty sheet name");
            return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)
              ? "'" + e.replace(/'/g, "''") + "'"
              : e;
          }
          function er(e) {
            var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
              r = 0,
              n = 0,
              a = 0,
              o = e.length;
            for (
              r = 0;
              n < o && !((a = e.charCodeAt(n) - 64) < 1 || a > 26);
              ++n
            )
              r = 26 * r + a;
            for (
              t.s.c = --r, r = 0;
              n < o && !((a = e.charCodeAt(n) - 48) < 0 || a > 9);
              ++n
            )
              r = 10 * r + a;
            if (((t.s.r = --r), n === o || 10 != a))
              return ((t.e.c = t.s.c), (t.e.r = t.s.r), t);
            for (
              ++n, r = 0;
              n != o && !((a = e.charCodeAt(n) - 64) < 1 || a > 26);
              ++n
            )
              r = 26 * r + a;
            for (
              t.e.c = --r, r = 0;
              n != o && !((a = e.charCodeAt(n) - 48) < 0 || a > 9);
              ++n
            )
              r = 10 * r + a;
            return ((t.e.r = --r), t);
          }
          function tr(e, t, r) {
            return null == e || null == e.t || "z" == e.t
              ? ""
              : void 0 !== e.w
                ? e.w
                : ("d" == e.t && !e.z && r && r.dateNF && (e.z = r.dateNF),
                  "e" == e.t
                    ? nr[e.v] || e.v
                    : (function (e, t) {
                        var r = "d" == e.t && t instanceof Date;
                        if (null != e.z)
                          try {
                            return (e.w = Q(e.z, r ? he(t) : t));
                          } catch (e) {}
                        try {
                          return (e.w = Q(
                            (e.XF || {}).numFmtId || (r ? 14 : 0),
                            r ? he(t) : t,
                          ));
                        } catch (e) {
                          return "" + t;
                        }
                      })(e, null == t ? e.v : t));
          }
          function rr(e, t, r) {
            var n = r || {},
              a = e ? null != e["!data"] : n.dense,
              o = e || (a ? { "!data": [] } : {});
            a && !o["!data"] && (o["!data"] = []);
            var i = 0,
              s = 0;
            if (o && null != n.origin)
              if ("number" == typeof n.origin) i = n.origin;
              else {
                var l = "string" == typeof n.origin ? Jt(n.origin) : n.origin;
                ((i = l.r), (s = l.c));
              }
            var c = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
            if (o["!ref"]) {
              var f = er(o["!ref"]);
              ((c.s.c = f.s.c),
                (c.s.r = f.s.r),
                (c.e.c = Math.max(c.e.c, f.e.c)),
                (c.e.r = Math.max(c.e.r, f.e.r)),
                -1 == i && (c.e.r = i = o["!ref"] ? f.e.r + 1 : 0));
            } else c.s.c = c.e.c = c.s.r = c.e.r = 0;
            for (var h = [], u = !1, d = 0; d != t.length; ++d)
              if (t[d]) {
                if (!Array.isArray(t[d]))
                  throw new Error("aoa_to_sheet expects an array of arrays");
                var m = i + d;
                a &&
                  (o["!data"][m] || (o["!data"][m] = []), (h = o["!data"][m]));
                for (var p = t[d], g = 0; g != p.length; ++g)
                  if (void 0 !== p[g]) {
                    var v = { v: p[g], t: "" },
                      w = s + g;
                    if (
                      (c.s.r > m && (c.s.r = m),
                      c.s.c > w && (c.s.c = w),
                      c.e.r < m && (c.e.r = m),
                      c.e.c < w && (c.e.c = w),
                      (u = !0),
                      !p[g] ||
                        "object" != typeof p[g] ||
                        Array.isArray(p[g]) ||
                        p[g] instanceof Date)
                    )
                      if (
                        (Array.isArray(v.v) &&
                          ((v.f = p[g][1]), (v.v = v.v[0])),
                        null === v.v)
                      )
                        if (v.f) v.t = "n";
                        else if (n.nullError) ((v.t = "e"), (v.v = 0));
                        else {
                          if (!n.sheetStubs) continue;
                          v.t = "z";
                        }
                      else
                        "number" == typeof v.v
                          ? isFinite(v.v)
                            ? (v.t = "n")
                            : isNaN(v.v)
                              ? ((v.t = "e"), (v.v = 15))
                              : ((v.t = "e"), (v.v = 7))
                          : "boolean" == typeof v.v
                            ? (v.t = "b")
                            : v.v instanceof Date
                              ? ((v.z = n.dateNF || A[14]),
                                n.UTC || (v.v = Ee(v.v)),
                                n.cellDates
                                  ? ((v.t = "d"),
                                    (v.w = Q(v.z, he(v.v, n.date1904))))
                                  : ((v.t = "n"),
                                    (v.v = he(v.v, n.date1904)),
                                    (v.w = Q(v.z, v.v))))
                              : (v.t = "s");
                    else v = p[g];
                    if (a) (h[w] && h[w].z && (v.z = h[w].z), (h[w] = v));
                    else {
                      var b = qt(w) + (m + 1);
                      (o[b] && o[b].z && (v.z = o[b].z), (o[b] = v));
                    }
                  }
              }
            return (u && c.s.c < 104e5 && (o["!ref"] = Yt(c)), o);
          }
          var nr = {
              0: "#NULL!",
              7: "#DIV/0!",
              15: "#VALUE!",
              23: "#REF!",
              29: "#NAME?",
              36: "#NUM!",
              42: "#N/A",
              43: "#GETTING_DATA",
              255: "#WTF?",
            },
            ar = {
              "#NULL!": 0,
              "#DIV/0!": 7,
              "#VALUE!": 15,
              "#REF!": 23,
              "#NAME?": 29,
              "#NUM!": 36,
              "#N/A": 42,
              "#GETTING_DATA": 43,
              "#WTF?": 255,
            },
            or = {
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
                "workbooks",
              "application/vnd.ms-excel.sheet.macroEnabled.main+xml":
                "workbooks",
              "application/vnd.ms-excel.sheet.binary.macroEnabled.main":
                "workbooks",
              "application/vnd.ms-excel.addin.macroEnabled.main+xml":
                "workbooks",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
                "workbooks",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
                "sheets",
              "application/vnd.ms-excel.worksheet": "sheets",
              "application/vnd.ms-excel.binIndexWs": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
                "charts",
              "application/vnd.ms-excel.chartsheet": "charts",
              "application/vnd.ms-excel.macrosheet+xml": "macros",
              "application/vnd.ms-excel.macrosheet": "macros",
              "application/vnd.ms-excel.intlmacrosheet": "TODO",
              "application/vnd.ms-excel.binIndexMs": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
                "dialogs",
              "application/vnd.ms-excel.dialogsheet": "dialogs",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":
                "strs",
              "application/vnd.ms-excel.sharedStrings": "strs",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
                "styles",
              "application/vnd.ms-excel.styles": "styles",
              "application/vnd.openxmlformats-package.core-properties+xml":
                "coreprops",
              "application/vnd.openxmlformats-officedocument.custom-properties+xml":
                "custprops",
              "application/vnd.openxmlformats-officedocument.extended-properties+xml":
                "extprops",
              "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
                "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
                "comments",
              "application/vnd.ms-excel.comments": "comments",
              "application/vnd.ms-excel.threadedcomments+xml":
                "threadedcomments",
              "application/vnd.ms-excel.person+xml": "people",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
                "metadata",
              "application/vnd.ms-excel.sheetMetadata": "metadata",
              "application/vnd.ms-excel.pivotTable": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.drawingml.chart+xml":
                "TODO",
              "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
              "application/vnd.ms-office.chartstyle+xml": "TODO",
              "application/vnd.ms-office.chartex+xml": "TODO",
              "application/vnd.ms-excel.calcChain": "calcchains",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
                "calcchains",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
                "TODO",
              "application/vnd.ms-office.activeX": "TODO",
              "application/vnd.ms-office.activeX+xml": "TODO",
              "application/vnd.ms-excel.attachedToolbars": "TODO",
              "application/vnd.ms-excel.connections": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
                "TODO",
              "application/vnd.ms-excel.externalLink": "links",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
                "links",
              "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
              "application/vnd.ms-excel.pivotCacheRecords": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
                "TODO",
              "application/vnd.ms-excel.queryTable": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
                "TODO",
              "application/vnd.ms-excel.userNames": "TODO",
              "application/vnd.ms-excel.revisionHeaders": "TODO",
              "application/vnd.ms-excel.revisionLog": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
                "TODO",
              "application/vnd.ms-excel.tableSingleCells": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
                "TODO",
              "application/vnd.ms-excel.slicer": "TODO",
              "application/vnd.ms-excel.slicerCache": "TODO",
              "application/vnd.ms-excel.slicer+xml": "TODO",
              "application/vnd.ms-excel.slicerCache+xml": "TODO",
              "application/vnd.ms-excel.wsSortMap": "TODO",
              "application/vnd.ms-excel.table": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.theme+xml":
                "themes",
              "application/vnd.openxmlformats-officedocument.themeOverride+xml":
                "TODO",
              "application/vnd.ms-excel.Timeline+xml": "TODO",
              "application/vnd.ms-excel.TimelineCache+xml": "TODO",
              "application/vnd.ms-office.vbaProject": "vba",
              "application/vnd.ms-office.vbaProjectSignature": "TODO",
              "application/vnd.ms-office.volatileDependencies": "TODO",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
                "TODO",
              "application/vnd.ms-excel.controlproperties+xml": "TODO",
              "application/vnd.openxmlformats-officedocument.model+data":
                "TODO",
              "application/vnd.ms-excel.Survey+xml": "TODO",
              "application/vnd.openxmlformats-officedocument.drawing+xml":
                "drawings",
              "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
                "TODO",
              "application/vnd.openxmlformats-officedocument.vmlDrawing":
                "TODO",
              "application/vnd.openxmlformats-package.relationships+xml":
                "rels",
              "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
              "image/png": "TODO",
              sheet: "js",
            },
            ir = {
              workbooks: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
                xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
                xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
                xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
              },
              strs: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
                xlsb: "application/vnd.ms-excel.sharedStrings",
              },
              comments: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
                xlsb: "application/vnd.ms-excel.comments",
              },
              sheets: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
                xlsb: "application/vnd.ms-excel.worksheet",
              },
              charts: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
                xlsb: "application/vnd.ms-excel.chartsheet",
              },
              dialogs: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
                xlsb: "application/vnd.ms-excel.dialogsheet",
              },
              macros: {
                xlsx: "application/vnd.ms-excel.macrosheet+xml",
                xlsb: "application/vnd.ms-excel.macrosheet",
              },
              metadata: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
                xlsb: "application/vnd.ms-excel.sheetMetadata",
              },
              styles: {
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
                xlsb: "application/vnd.ms-excel.styles",
              },
            },
            sr = {
              WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
              SHEET:
                "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
              HLINK:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
              VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
              XPATH:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
              XMISS:
                "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
              XLINK:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
              CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
              CXMLP:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
              CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
              CORE_PROPS:
                "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
              EXT_PROPS:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
              CUST_PROPS:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
              SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
              STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
              THEME:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
              CHART:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
              CHARTEX:
                "http://schemas.microsoft.com/office/2014/relationships/chartEx",
              CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
              WS: [
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
                "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
              ],
              DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
              MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
              IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
              DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
              XLMETA:
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
              TCMNT:
                "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
              PEOPLE:
                "http://schemas.microsoft.com/office/2017/10/relationships/person",
              CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections",
              VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
            };
          function lr(e) {
            var t = e.lastIndexOf("/");
            return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
          }
          function cr(e) {
            var t = [Te, Ve("Relationships", null, { xmlns: Ze })];
            return (
              se(e["!id"]).forEach(function (r) {
                t[t.length] = Ve("Relationship", null, e["!id"][r]);
              }),
              t.length > 2 &&
                ((t[t.length] = "</Relationships>"),
                (t[1] = t[1].replace("/>", ">"))),
              t.join("")
            );
          }
          function fr(e, t, r, n, a, o) {
            if (
              (a || (a = {}),
              e["!id"] || (e["!id"] = {}),
              e["!idx"] || (e["!idx"] = 1),
              t < 0)
            )
              for (t = e["!idx"]; e["!id"]["rId" + t]; ++t);
            if (
              ((e["!idx"] = t + 1),
              (a.Id = "rId" + t),
              (a.Type = n),
              (a.Target = r),
              o
                ? (a.TargetMode = o)
                : [sr.HLINK, sr.XPATH, sr.XMISS].indexOf(a.Type) > -1 &&
                  (a.TargetMode = "External"),
              e["!id"][a.Id])
            )
              throw new Error("Cannot rewrite rId " + t);
            return (
              (e["!id"][a.Id] = a),
              (e[("/" + a.Target).replace("//", "/")] = a),
              t
            );
          }
          var hr = [
            ["cp:category", "Category"],
            ["cp:contentStatus", "ContentStatus"],
            ["cp:keywords", "Keywords"],
            ["cp:lastModifiedBy", "LastAuthor"],
            ["cp:lastPrinted", "LastPrinted"],
            ["cp:revision", "RevNumber"],
            ["cp:version", "Version"],
            ["dc:creator", "Author"],
            ["dc:description", "Comments"],
            ["dc:identifier", "Identifier"],
            ["dc:language", "Language"],
            ["dc:subject", "Subject"],
            ["dc:title", "Title"],
            ["dcterms:created", "CreatedDate", "date"],
            ["dcterms:modified", "ModifiedDate", "date"],
          ];
          function ur(e, t, r, n, a) {
            null == a[e] &&
              null != t &&
              "" !== t &&
              ((a[e] = t),
              (t = Pe(t)),
              (n[n.length] = r ? Ve(e, t, r) : He(e, t)));
          }
          var dr = [
              ["Application", "Application", "string"],
              ["AppVersion", "AppVersion", "string"],
              ["Company", "Company", "string"],
              ["DocSecurity", "DocSecurity", "string"],
              ["Manager", "Manager", "string"],
              ["HyperlinksChanged", "HyperlinksChanged", "bool"],
              ["SharedDoc", "SharedDoc", "bool"],
              ["LinksUpToDate", "LinksUpToDate", "bool"],
              ["ScaleCrop", "ScaleCrop", "bool"],
              ["HeadingPairs", "HeadingPairs", "raw"],
              ["TitlesOfParts", "TitlesOfParts", "raw"],
            ],
            mr = /^\s|\s$|[\t\n\r]/,
            pr = 6;
          function gr(e) {
            return (96 * e) / 96;
          }
          function vr(e, t, r) {
            var n = [21600, 21600],
              a = ["m0,0l0", n[1], n[0], n[1], n[0], "0xe"].join(","),
              o = [
                Ve("xml", null, {
                  "xmlns:v": ht,
                  "xmlns:o": lt,
                  "xmlns:x": ct,
                  "xmlns:mv": ft,
                }).replace(/\/>/, ">"),
                Ve(
                  "o:shapelayout",
                  Ve("o:idmap", null, { "v:ext": "edit", data: e }),
                  { "v:ext": "edit" },
                ),
              ],
              i = 65536 * e,
              s = t || [];
            return (
              s.length > 0 &&
                o.push(
                  Ve(
                    "v:shapetype",
                    [
                      Ve("v:stroke", null, { joinstyle: "miter" }),
                      Ve("v:path", null, {
                        gradientshapeok: "t",
                        "o:connecttype": "rect",
                      }),
                    ].join(""),
                    {
                      id: "_x0000_t202",
                      coordsize: n.join(","),
                      "o:spt": 202,
                      path: a,
                    },
                  ),
                ),
              s.forEach(function (e) {
                (++i,
                  o.push(
                    (function (e, t) {
                      var r = Jt(e[0]),
                        n = { color2: "#BEFF82", type: "gradient" };
                      "gradient" == n.type && (n.angle = "-180");
                      var a =
                          "gradient" == n.type
                            ? Ve("o:fill", null, {
                                type: "gradientUnscaled",
                                "v:ext": "view",
                              })
                            : null,
                        o = Ve("v:fill", a, n);
                      return [
                        "<v:shape" +
                          Ge({
                            id: "_x0000_s" + t,
                            type: "#_x0000_t202",
                            style:
                              "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
                              (e[1].hidden ? ";visibility:hidden" : ""),
                            fillcolor: "#ECFAD4",
                            strokecolor: "#edeaa1",
                          }) +
                          ">",
                        o,
                        Ve("v:shadow", null, { on: "t", obscured: "t" }),
                        Ve("v:path", null, { "o:connecttype": "none" }),
                        '<v:textbox><div style="text-align:left"></div></v:textbox>',
                        '<x:ClientData ObjectType="Note">',
                        "<x:MoveWithCells/>",
                        "<x:SizeWithCells/>",
                        He(
                          "x:Anchor",
                          [
                            r.c + 1,
                            0,
                            r.r + 1,
                            0,
                            r.c + 3,
                            20,
                            r.r + 5,
                            20,
                          ].join(","),
                        ),
                        He("x:AutoFill", "False"),
                        He("x:Row", String(r.r)),
                        He("x:Column", String(r.c)),
                        e[1].hidden ? "" : "<x:Visible/>",
                        "</x:ClientData>",
                        "</v:shape>",
                      ].join("");
                    })(e, i),
                  ));
              }),
              o.push("</xml>"),
              o.join("")
            );
          }
          function wr(e) {
            var t = [Te, Ve("comments", null, { xmlns: st[0] })],
              r = [];
            return (
              t.push("<authors>"),
              e.forEach(function (e) {
                e[1].forEach(function (e) {
                  var n = Pe(e.a);
                  (-1 == r.indexOf(n) &&
                    (r.push(n), t.push("<author>" + n + "</author>")),
                    e.T &&
                      e.ID &&
                      -1 == r.indexOf("tc=" + e.ID) &&
                      (r.push("tc=" + e.ID),
                      t.push("<author>tc=" + e.ID + "</author>")));
                });
              }),
              0 == r.length &&
                (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")),
              t.push("</authors>"),
              t.push("<commentList>"),
              e.forEach(function (e) {
                var n = 0,
                  a = [],
                  o = 0;
                if (
                  (e[1][0] &&
                    e[1][0].T &&
                    e[1][0].ID &&
                    (n = r.indexOf("tc=" + e[1][0].ID)),
                  e[1].forEach(function (e) {
                    (e.a && (n = r.indexOf(Pe(e.a))),
                      e.T && ++o,
                      a.push(null == e.t ? "" : Pe(e.t)));
                  }),
                  0 === o)
                )
                  e[1].forEach(function (n) {
                    (t.push(
                      '<comment ref="' +
                        e[0] +
                        '" authorId="' +
                        r.indexOf(Pe(n.a)) +
                        '"><text>',
                    ),
                      t.push(He("t", null == n.t ? "" : Pe(n.t))),
                      t.push("</text></comment>"));
                  });
                else {
                  (e[1][0] &&
                    e[1][0].T &&
                    e[1][0].ID &&
                    (n = r.indexOf("tc=" + e[1][0].ID)),
                    t.push(
                      '<comment ref="' + e[0] + '" authorId="' + n + '"><text>',
                    ));
                  for (
                    var i = "Comment:\n    " + a[0] + "\n", s = 1;
                    s < a.length;
                    ++s
                  )
                    i += "Reply:\n    " + a[s] + "\n";
                  (t.push(He("t", Pe(i))), t.push("</text></comment>"));
                }
              }),
              t.push("</commentList>"),
              t.length > 2 &&
                ((t[t.length] = "</comments>"),
                (t[1] = t[1].replace("/>", ">"))),
              t.join("")
            );
          }
          function br(e, t, r) {
            var n = [
              Te,
              Ve("ThreadedComments", null, { xmlns: Qe }).replace(/[\/]>/, ">"),
            ];
            return (
              e.forEach(function (e) {
                var a = "";
                (e[1] || []).forEach(function (o, i) {
                  if (o.T) {
                    o.a && -1 == t.indexOf(o.a) && t.push(o.a);
                    var s = {
                      ref: e[0],
                      id:
                        "{54EE7951-7262-4200-6969-" +
                        ("000000000000" + r.tcid++).slice(-12) +
                        "}",
                    };
                    (0 == i ? (a = s.id) : (s.parentId = a),
                      (o.ID = s.id),
                      o.a &&
                        (s.personId =
                          "{54EE7950-7262-4200-6969-" +
                          ("000000000000" + t.indexOf(o.a)).slice(-12) +
                          "}"),
                      n.push(Ve("threadedComment", He("text", o.t || ""), s)));
                  } else delete o.ID;
                });
              }),
              n.push("</ThreadedComments>"),
              n.join("")
            );
          }
          var yr = ["xlsb", "xlsm", "xlam", "biff8", "xla"],
            xr = "undefined" != typeof Map;
          function Cr(e, t) {
            var r,
              n,
              a = { min: e + 1, max: e + 1 },
              o = -1;
            return (
              t.MDW && (pr = t.MDW),
              null != t.width
                ? (a.customWidth = 1)
                : null != t.wpx
                  ? ((r = t.wpx),
                    (o = Math.floor(((r - 5) / pr) * 100 + 0.5) / 100))
                  : null != t.wch && (o = t.wch),
              o > -1
                ? ((a.width =
                    ((n = o), Math.round(((n * pr + 5) / pr) * 256) / 256)),
                  (a.customWidth = 1))
                : null != t.width && (a.width = t.width),
              t.hidden && (a.hidden = !0),
              null != t.level && (a.outlineLevel = a.level = t.level),
              a
            );
          }
          function Sr(e, t, r) {
            var n = r.revssf[null != t.z ? t.z : "General"],
              a = 60,
              o = e.length;
            if (null == n && r.ssf)
              for (; a < 392; ++a)
                if (null == r.ssf[a]) {
                  (re(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a));
                  break;
                }
            for (a = 0; a != o; ++a) if (e[a].numFmtId === n) return a;
            return (
              (e[o] = {
                numFmtId: n,
                fontId: 0,
                fillId: 0,
                borderId: 0,
                xfId: 0,
                applyNumberFormat: 1,
              }),
              o
            );
          }
          function kr(e, t, r) {
            if (e && e["!ref"]) {
              var n = er(e["!ref"]);
              if (n.e.c < n.s.c || n.e.r < n.s.r)
                throw new Error("Bad range (" + r + "): " + e["!ref"]);
            }
          }
          var _r = [
              "objects",
              "scenarios",
              "selectLockedCells",
              "selectUnlockedCells",
            ],
            Ar = [
              "formatColumns",
              "formatRows",
              "formatCells",
              "insertColumns",
              "insertRows",
              "insertHyperlinks",
              "deleteColumns",
              "deleteRows",
              "sort",
              "autoFilter",
              "pivotTables",
            ];
          function Er(e) {
            var t = { sheet: 1 };
            return (
              _r.forEach(function (r) {
                null != e[r] && e[r] && (t[r] = "1");
              }),
              Ar.forEach(function (r) {
                null == e[r] || e[r] || (t[r] = "0");
              }),
              e.password &&
                (t.password = (function (e) {
                  var t,
                    r,
                    n = 0,
                    a = (function (e) {
                      for (
                        var t = [], r = e.split(""), n = 0;
                        n < r.length;
                        ++n
                      )
                        t[n] = r[n].charCodeAt(0);
                      return t;
                    })(e),
                    o = a.length + 1;
                  for ((t = f(o))[0] = a.length, r = 1; r != o; ++r)
                    t[r] = a[r - 1];
                  for (r = o - 1; r >= 0; --r)
                    n = ((16384 & n ? 1 : 0) | ((n << 1) & 32767)) ^ t[r];
                  return 52811 ^ n;
                })(e.password)
                  .toString(16)
                  .toUpperCase()),
              Ve("sheetProtection", null, t)
            );
          }
          function Or(e, t, r, n, a, o, i) {
            if (
              (e.c && r["!comments"].push([t, e.c]),
              (void 0 === e.v || ("z" === e.t && !(n || {}).sheetStubs)) &&
                "string" != typeof e.f &&
                void 0 === e.z)
            )
              return "";
            var s = "",
              l = e.t,
              c = e.v;
            if ("z" !== e.t)
              switch (e.t) {
                case "b":
                  s = e.v ? "1" : "0";
                  break;
                case "n":
                  isNaN(e.v)
                    ? ((e.t = "e"), (s = nr[(e.v = 36)]))
                    : isFinite(e.v)
                      ? (s = "" + e.v)
                      : ((e.t = "e"), (s = nr[(e.v = 7)]));
                  break;
                case "e":
                  s = nr[e.v];
                  break;
                case "d":
                  if (n && n.cellDates) {
                    var f = ge(e.v, i);
                    ((s = f.toISOString()),
                      f.getUTCFullYear() < 1900 &&
                        (s = s.slice(s.indexOf("T") + 1).replace("Z", "")));
                  } else
                    (((e = ve(e)).t = "n"),
                      (s = "" + (e.v = he(ge(e.v, i), i))));
                  void 0 === e.z && (e.z = A[14]);
                  break;
                default:
                  s = e.v;
              }
            var h = "z" == e.t || null == e.v ? "" : He("v", Pe(s)),
              u = { r: t },
              d = Sr(n.cellXfs, e, n);
            switch ((0 !== d && (u.s = d), e.t)) {
              case "n":
              case "z":
                break;
              case "d":
                u.t = "d";
                break;
              case "b":
                u.t = "b";
                break;
              case "e":
                u.t = "e";
                break;
              default:
                if (null == e.v) {
                  delete e.t;
                  break;
                }
                if (e.v.length > 32767)
                  throw new Error(
                    "Text length must not exceed 32767 characters",
                  );
                if (n && n.bookSST) {
                  ((h = He(
                    "v",
                    "" +
                      (function (e, t, r) {
                        var n = 0,
                          a = e.length;
                        if (r) {
                          if (
                            xr
                              ? r.has(t)
                              : Object.prototype.hasOwnProperty.call(r, t)
                          )
                            for (
                              var o = xr ? r.get(t) : r[t];
                              n < o.length;
                              ++n
                            )
                              if (e[o[n]].t === t) return (e.Count++, o[n]);
                        } else
                          for (; n < a; ++n)
                            if (e[n].t === t) return (e.Count++, n);
                        return (
                          (e[a] = { t }),
                          e.Count++,
                          e.Unique++,
                          r &&
                            (xr
                              ? (r.has(t) || r.set(t, []), r.get(t).push(a))
                              : (Object.prototype.hasOwnProperty.call(r, t) ||
                                  (r[t] = []),
                                r[t].push(a))),
                          a
                        );
                      })(n.Strings, e.v, n.revStrings),
                  )),
                    (u.t = "s"));
                  break;
                }
                u.t = "str";
            }
            if (
              (e.t != l && ((e.t = l), (e.v = c)),
              "string" == typeof e.f && e.f)
            ) {
              var m =
                e.F && e.F.slice(0, t.length) == t
                  ? { t: "array", ref: e.F }
                  : null;
              h = Ve("f", Pe(e.f), m) + (null != e.v ? h : "");
            }
            return (
              e.l && ((e.l.display = Pe(s)), r["!links"].push([t, e.l])),
              e.D && (u.cm = 1),
              Ve("c", h, u)
            );
          }
          function Tr(e, t, r, n) {
            var a,
              o = [Te, Ve("worksheet", null, { xmlns: st[0], "xmlns:r": nt })],
              i = r.SheetNames[e],
              s = "",
              l = r.Sheets[i];
            null == l && (l = {});
            var c = l["!ref"] || "A1",
              f = er(c);
            if (f.e.c > 16383 || f.e.r > 1048575) {
              if (t.WTF)
                throw new Error(
                  "Range " + c + " exceeds format limit A1:XFD1048576",
                );
              ((f.e.c = Math.min(f.e.c, 16383)),
                (f.e.r = Math.min(f.e.c, 1048575)),
                (c = Yt(f)));
            }
            (n || (n = {}), (l["!comments"] = []));
            var h = [];
            (!(function (e, t, r, n, a) {
              var o = !1,
                i = {},
                s = null;
              if ("xlsx" !== n.bookType && t.vbaraw) {
                var l = t.SheetNames[r];
                try {
                  t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
                } catch (e) {}
                ((o = !0), (i.codeName = ze(Pe(l))));
              }
              if (e && e["!outline"]) {
                var c = { summaryBelow: 1, summaryRight: 1 };
                (e["!outline"].above && (c.summaryBelow = 0),
                  e["!outline"].left && (c.summaryRight = 0),
                  (s = (s || "") + Ve("outlinePr", null, c)));
              }
              (o || s) && (a[a.length] = Ve("sheetPr", s, i));
            })(l, r, e, t, o),
              (o[o.length] = Ve("dimension", null, { ref: c })),
              (o[o.length] = (function (e, t, r, n) {
                var a = { workbookViewId: "0" };
                return (
                  (((n || {}).Workbook || {}).Views || [])[0] &&
                    (a.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"),
                  Ve("sheetViews", Ve("sheetView", null, a), {})
                );
              })(0, 0, 0, r)),
              t.sheetFormat &&
                (o[o.length] = Ve("sheetFormatPr", null, {
                  defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
                  baseColWidth: t.sheetFormat.baseColWidth || "10",
                  outlineLevelRow: t.sheetFormat.outlineLevelRow || "7",
                })),
              null != l["!cols"] &&
                l["!cols"].length > 0 &&
                (o[o.length] = (function (e, t) {
                  for (var r, n = ["<cols>"], a = 0; a != t.length; ++a)
                    (r = t[a]) && (n[n.length] = Ve("col", null, Cr(a, r)));
                  return ((n[n.length] = "</cols>"), n.join(""));
                })(0, l["!cols"])),
              (o[(a = o.length)] = "<sheetData/>"),
              (l["!links"] = []),
              null != l["!ref"] &&
                ((s = (function (e, t, r, n) {
                  var a,
                    o,
                    i = [],
                    s = [],
                    l = er(e["!ref"]),
                    c = "",
                    f = "",
                    h = [],
                    u = 0,
                    d = 0,
                    m = e["!rows"],
                    p = null != e["!data"],
                    g = p ? e["!data"] : [],
                    v = { r: f },
                    w = -1,
                    b = (((n || {}).Workbook || {}).WBProps || {}).date1904;
                  for (d = l.s.c; d <= l.e.c; ++d) h[d] = qt(d);
                  for (u = l.s.r; u <= l.e.r; ++u) {
                    ((s = []), (f = Vt(u)));
                    var y = p ? g[u] : [];
                    for (d = l.s.c; d <= l.e.c; ++d) {
                      a = h[d] + f;
                      var x = p ? y[d] : e[a];
                      void 0 !== x &&
                        null != (c = Or(x, a, e, t, 0, 0, b)) &&
                        s.push(c);
                    }
                    (s.length > 0 || (m && m[u])) &&
                      ((v = { r: f }),
                      m &&
                        m[u] &&
                        ((o = m[u]).hidden && (v.hidden = 1),
                        (w = -1),
                        o.hpx ? (w = gr(o.hpx)) : o.hpt && (w = o.hpt),
                        w > -1 && ((v.ht = w), (v.customHeight = 1)),
                        o.level && (v.outlineLevel = o.level)),
                      (i[i.length] = Ve("row", s.join(""), v)));
                  }
                  if (m)
                    for (; u < m.length; ++u)
                      m &&
                        m[u] &&
                        ((v = { r: u + 1 }),
                        (o = m[u]).hidden && (v.hidden = 1),
                        (w = -1),
                        o.hpx ? (w = gr(o.hpx)) : o.hpt && (w = o.hpt),
                        w > -1 && ((v.ht = w), (v.customHeight = 1)),
                        o.level && (v.outlineLevel = o.level),
                        (i[i.length] = Ve("row", "", v)));
                  return i.join("");
                })(l, t, 0, r)),
                s.length > 0 && (o[o.length] = s)),
              o.length > a + 1 &&
                ((o[o.length] = "</sheetData>"),
                (o[a] = o[a].replace("/>", ">"))),
              l["!protect"] && (o[o.length] = Er(l["!protect"])),
              null != l["!autofilter"] &&
                (o[o.length] = (function (e, t, r, n) {
                  var a = "string" == typeof e.ref ? e.ref : Yt(e.ref);
                  (r.Workbook || (r.Workbook = { Sheets: [] }),
                    r.Workbook.Names || (r.Workbook.Names = []));
                  var o = r.Workbook.Names,
                    i = Kt(a);
                  i.s.r == i.e.r && ((i.e.r = Kt(t["!ref"]).e.r), (a = Yt(i)));
                  for (var s = 0; s < o.length; ++s) {
                    var l = o[s];
                    if ("_xlnm._FilterDatabase" == l.Name && l.Sheet == n) {
                      l.Ref = Qt(r.SheetNames[n]) + "!" + Zt(a);
                      break;
                    }
                  }
                  return (
                    s == o.length &&
                      o.push({
                        Name: "_xlnm._FilterDatabase",
                        Sheet: n,
                        Ref: "'" + r.SheetNames[n] + "'!" + a,
                      }),
                    Ve("autoFilter", null, { ref: a })
                  );
                })(l["!autofilter"], l, r, e)),
              null != l["!merges"] &&
                l["!merges"].length > 0 &&
                (o[o.length] = (function (e) {
                  if (0 === e.length) return "";
                  for (
                    var t = '<mergeCells count="' + e.length + '">', r = 0;
                    r != e.length;
                    ++r
                  )
                    t += '<mergeCell ref="' + Yt(e[r]) + '"/>';
                  return t + "</mergeCells>";
                })(l["!merges"])));
            var u,
              d,
              m = -1,
              p = -1;
            return (
              l["!links"].length > 0 &&
                ((o[o.length] = "<hyperlinks>"),
                l["!links"].forEach(function (e) {
                  e[1].Target &&
                    ((u = { ref: e[0] }),
                    "#" != e[1].Target.charAt(0) &&
                      ((p = fr(
                        n,
                        -1,
                        Pe(e[1].Target).replace(/#[\s\S]*$/, ""),
                        sr.HLINK,
                      )),
                      (u["r:id"] = "rId" + p)),
                    (m = e[1].Target.indexOf("#")) > -1 &&
                      (u.location = Pe(e[1].Target.slice(m + 1))),
                    e[1].Tooltip && (u.tooltip = Pe(e[1].Tooltip)),
                    (u.display = e[1].display),
                    (o[o.length] = Ve("hyperlink", null, u)));
                }),
                (o[o.length] = "</hyperlinks>")),
              delete l["!links"],
              null != l["!margins"] &&
                (o[o.length] =
                  ((function (e) {
                    if (e) {
                      var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
                      (null == e.left && (e.left = t[0]),
                        null == e.right && (e.right = t[1]),
                        null == e.top && (e.top = t[2]),
                        null == e.bottom && (e.bottom = t[3]),
                        null == e.header && (e.header = t[4]),
                        null == e.footer && (e.footer = t[5]));
                    }
                  })((d = l["!margins"])),
                  Ve("pageMargins", null, d))),
              (t && !t.ignoreEC && null != t.ignoreEC) ||
                (o[o.length] = He(
                  "ignoredErrors",
                  Ve("ignoredError", null, { numberStoredAsText: 1, sqref: c }),
                )),
              h.length > 0 &&
                ((p = fr(
                  n,
                  -1,
                  "../drawings/drawing" + (e + 1) + ".xml",
                  sr.DRAW,
                )),
                (o[o.length] = Ve("drawing", null, { "r:id": "rId" + p })),
                (l["!drawing"] = h)),
              l["!comments"].length > 0 &&
                ((p = fr(
                  n,
                  -1,
                  "../drawings/vmlDrawing" + (e + 1) + ".vml",
                  sr.VML,
                )),
                (o[o.length] = Ve("legacyDrawing", null, {
                  "r:id": "rId" + p,
                })),
                (l["!legacy"] = p)),
              o.length > 1 &&
                ((o[o.length] = "</worksheet>"),
                (o[1] = o[1].replace("/>", ">"))),
              o.join("")
            );
          }
          var Dr = [
              ["allowRefreshQuery", !1, "bool"],
              ["autoCompressPictures", !0, "bool"],
              ["backupFile", !1, "bool"],
              ["checkCompatibility", !1, "bool"],
              ["CodeName", ""],
              ["date1904", !1, "bool"],
              ["defaultThemeVersion", 0, "int"],
              ["filterPrivacy", !1, "bool"],
              ["hidePivotFieldList", !1, "bool"],
              ["promptedSolutions", !1, "bool"],
              ["publishItems", !1, "bool"],
              ["refreshAllConnections", !1, "bool"],
              ["saveExternalLinkValues", !0, "bool"],
              ["showBorderUnselectedTables", !0, "bool"],
              ["showInkAnnotation", !0, "bool"],
              ["showObjects", "all"],
              ["showPivotChartFilter", !1, "bool"],
              ["updateLinks", "userSet"],
            ],
            Mr = ":][*?/\\".split("");
          function Fr(e, t) {
            try {
              if ("" == e) throw new Error("Sheet name cannot be blank");
              if (e.length > 31)
                throw new Error("Sheet name cannot exceed 31 chars");
              if (39 == e.charCodeAt(0) || 39 == e.charCodeAt(e.length - 1))
                throw new Error(
                  "Sheet name cannot start or end with apostrophe (')",
                );
              if ("history" == e.toLowerCase())
                throw new Error("Sheet name cannot be 'History'");
              Mr.forEach(function (t) {
                if (-1 != e.indexOf(t))
                  throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
              });
            } catch (e) {
              if (t) return !1;
              throw e;
            }
            return !0;
          }
          function Pr(e, t, r, n) {
            for (
              var a = e["!merges"] || [],
                o = [],
                i = {},
                s = null != e["!data"],
                l = t.s.c;
              l <= t.e.c;
              ++l
            ) {
              for (var c = 0, f = 0, h = 0; h < a.length; ++h)
                if (
                  !(
                    a[h].s.r > r ||
                    a[h].s.c > l ||
                    a[h].e.r < r ||
                    a[h].e.c < l
                  )
                ) {
                  if (a[h].s.r < r || a[h].s.c < l) {
                    c = -1;
                    break;
                  }
                  ((c = a[h].e.r - a[h].s.r + 1),
                    (f = a[h].e.c - a[h].s.c + 1));
                  break;
                }
              if (!(c < 0)) {
                var u = qt(l) + Vt(r),
                  d = s ? (e["!data"][r] || [])[l] : e[u];
                d &&
                  "n" == d.t &&
                  null != d.v &&
                  !isFinite(d.v) &&
                  (d = isNaN(d.v)
                    ? { t: "e", v: 36, w: nr[36] }
                    : { t: "e", v: 7, w: nr[7] });
                var m =
                  (d &&
                    null != d.v &&
                    (d.h || Ie(d.w || (tr(d), d.w) || ""))) ||
                  "";
                ((i = {}),
                  c > 1 && (i.rowspan = c),
                  f > 1 && (i.colspan = f),
                  n.editable
                    ? (m = '<span contenteditable="true">' + m + "</span>")
                    : d &&
                      ((i["data-t"] = (d && d.t) || "z"),
                      null != d.v &&
                        (i["data-v"] = Ie(
                          d.v instanceof Date ? d.v.toISOString() : d.v,
                        )),
                      null != d.z && (i["data-z"] = d.z),
                      d.l &&
                        "#" != (d.l.Target || "#").charAt(0) &&
                        (m = '<a href="' + Ie(d.l.Target) + '">' + m + "</a>")),
                  (i.id = (n.id || "sjs") + "-" + u),
                  o.push(Ve("td", m, i)));
              }
            }
            return "<tr>" + o.join("") + "</tr>";
          }
          function Rr(e, t, r) {
            var n = t.rows;
            if (!n)
              throw "Unsupported origin when " + t.tagName + " is not a TABLE";
            var a = r || {},
              o = null != e["!data"],
              i = 0,
              s = 0;
            if (null != a.origin)
              if ("number" == typeof a.origin) i = a.origin;
              else {
                var l = "string" == typeof a.origin ? Jt(a.origin) : a.origin;
                ((i = l.r), (s = l.c));
              }
            var c = Math.min(a.sheetRows || 1e7, n.length),
              f = { s: { r: 0, c: 0 }, e: { r: i, c: s } };
            if (e["!ref"]) {
              var h = Kt(e["!ref"]);
              ((f.s.r = Math.min(f.s.r, h.s.r)),
                (f.s.c = Math.min(f.s.c, h.s.c)),
                (f.e.r = Math.max(f.e.r, h.e.r)),
                (f.e.c = Math.max(f.e.c, h.e.c)),
                -1 == i && (f.e.r = i = h.e.r + 1));
            }
            var u = [],
              d = 0,
              m = e["!rows"] || (e["!rows"] = []),
              p = 0,
              g = 0,
              v = 0,
              w = 0,
              b = 0,
              y = 0;
            for (e["!cols"] || (e["!cols"] = []); p < n.length && g < c; ++p) {
              var x = n[p];
              if (Nr(x)) {
                if (a.display) continue;
                m[g] = { hidden: !0 };
              }
              var C = x.cells;
              for (v = w = 0; v < C.length; ++v) {
                var S = C[v];
                if (!a.display || !Nr(S)) {
                  var k = S.hasAttribute("data-v")
                      ? S.getAttribute("data-v")
                      : S.hasAttribute("v")
                        ? S.getAttribute("v")
                        : Be(S.innerHTML),
                    _ = S.getAttribute("data-z") || S.getAttribute("z");
                  for (d = 0; d < u.length; ++d) {
                    var E = u[d];
                    E.s.c == w + s &&
                      E.s.r < g + i &&
                      g + i <= E.e.r &&
                      ((w = E.e.c + 1 - s), (d = -1));
                  }
                  ((y = +S.getAttribute("colspan") || 1),
                    ((b = +S.getAttribute("rowspan") || 1) > 1 || y > 1) &&
                      u.push({
                        s: { r: g + i, c: w + s },
                        e: { r: g + i + (b || 1) - 1, c: w + s + (y || 1) - 1 },
                      }));
                  var O = { t: "s", v: k },
                    T = S.getAttribute("data-t") || S.getAttribute("t") || "";
                  (null != k &&
                    (0 == k.length
                      ? (O.t = T || "z")
                      : a.raw ||
                        0 == k.trim().length ||
                        "s" == T ||
                        ("e" == T && nr[+k]
                          ? (O = { t: "e", v: +k, w: nr[+k] })
                          : "TRUE" === k
                            ? (O = { t: "b", v: !0 })
                            : "FALSE" === k
                              ? (O = { t: "b", v: !1 })
                              : isNaN(be(k))
                                ? isNaN(_e(k).getDate())
                                  ? 35 == k.charCodeAt(0) &&
                                    null != ar[k] &&
                                    (O = { t: "e", v: ar[k], w: k })
                                  : ((O = { t: "d", v: ge(k) }),
                                    a.UTC && (O.v = Ee(O.v)),
                                    a.cellDates || (O = { t: "n", v: he(O.v) }),
                                    (O.z = a.dateNF || A[14]))
                                : (O = { t: "n", v: be(k) }))),
                    void 0 === O.z && null != _ && (O.z = _));
                  var D = "",
                    M = S.getElementsByTagName("A");
                  if (M && M.length)
                    for (
                      var F = 0;
                      F < M.length &&
                      (!M[F].hasAttribute("href") ||
                        "#" == (D = M[F].getAttribute("href")).charAt(0));
                      ++F
                    );
                  (D &&
                    "#" != D.charAt(0) &&
                    "javascript:" != D.slice(0, 11).toLowerCase() &&
                    (O.l = { Target: D }),
                    o
                      ? (e["!data"][g + i] || (e["!data"][g + i] = []),
                        (e["!data"][g + i][w + s] = O))
                      : (e[Xt({ c: w + s, r: g + i })] = O),
                    f.e.c < w + s && (f.e.c = w + s),
                    (w += y));
                }
              }
              ++g;
            }
            return (
              u.length && (e["!merges"] = (e["!merges"] || []).concat(u)),
              (f.e.r = Math.max(f.e.r, g - 1 + i)),
              (e["!ref"] = Yt(f)),
              g >= c &&
                (e["!fullref"] = Yt(((f.e.r = n.length - p + g - 1 + i), f))),
              e
            );
          }
          function Ir(e, t) {
            var r = {};
            return ((t || {}).dense && (r["!data"] = []), Rr(r, e, t));
          }
          function Nr(e) {
            var t = "",
              r = (function (e) {
                return e.ownerDocument.defaultView &&
                  "function" ==
                    typeof e.ownerDocument.defaultView.getComputedStyle
                  ? e.ownerDocument.defaultView.getComputedStyle
                  : "function" == typeof getComputedStyle
                    ? getComputedStyle
                    : null;
              })(e);
            return (
              r && (t = r(e).getPropertyValue("display")),
              t || (t = e.style && e.style.display),
              "none" === t
            );
          }
          function Lr(e, t) {
            !(function (e) {
              if (!e || !e.SheetNames || !e.Sheets)
                throw new Error("Invalid Workbook");
              if (!e.SheetNames.length) throw new Error("Workbook is empty");
              var t,
                r,
                n,
                a = (e.Workbook && e.Workbook.Sheets) || [];
              ((t = e.SheetNames),
                (r = a),
                (n = !!e.vbaraw),
                t.forEach(function (e, a) {
                  Fr(e);
                  for (var o = 0; o < a; ++o)
                    if (e == t[o])
                      throw new Error("Duplicate Sheet Name: " + e);
                  if (n) {
                    var i = (r && r[a] && r[a].CodeName) || e;
                    if (95 == i.charCodeAt(0) && i.length > 22)
                      throw new Error("Bad Code Name: Worksheet" + i);
                  }
                }));
              for (var o = 0; o < e.SheetNames.length; ++o)
                kr(e.Sheets[e.SheetNames[o]], e.SheetNames[o], o);
              e.SheetNames.forEach(function (t, r) {
                var n = e.Sheets[t];
                if (n && n["!autofilter"]) {
                  var a;
                  (e.Workbook || (e.Workbook = {}),
                    e.Workbook.Names || (e.Workbook.Names = []),
                    e.Workbook.Names.forEach(function (e) {
                      "_xlnm._FilterDatabase" == e.Name &&
                        e.Sheet == r &&
                        (a = e);
                    }));
                  var o = Qt(t) + "!" + Zt(n["!autofilter"].ref);
                  a
                    ? (a.Ref = o)
                    : e.Workbook.Names.push({
                        Name: "_xlnm._FilterDatabase",
                        Sheet: r,
                        Ref: o,
                      });
                }
              });
            })(e);
            var r = ve(t || {});
            if (
              (r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)),
              "array" == r.type)
            ) {
              r.type = "binary";
              var n = Lr(e, r);
              return ((r.type = "array"), d(n));
            }
            return (function (e, t) {
              var r = ve(t || {});
              return (function (e, t) {
                var r = {},
                  n = s
                    ? "nodebuffer"
                    : "undefined" != typeof Uint8Array
                      ? "array"
                      : "string";
                if ((t.compression && (r.compression = "DEFLATE"), t.password))
                  r.type = n;
                else
                  switch (t.type) {
                    case "base64":
                      r.type = "base64";
                      break;
                    case "binary":
                      r.type = "string";
                      break;
                    case "string":
                      throw new Error(
                        "'string' output type invalid for '" +
                          t.bookType +
                          "' files",
                      );
                    case "buffer":
                    case "file":
                      r.type = n;
                      break;
                    default:
                      throw new Error("Unrecognized type " + t.type);
                  }
                var a = e.FullPaths
                  ? ae.write(e, {
                      fileType: "zip",
                      type:
                        { nodebuffer: "buffer", string: "binary" }[r.type] ||
                        r.type,
                      compression: !!t.compression,
                    })
                  : e.generate(r);
                if ("undefined" != typeof Deno && "string" == typeof a) {
                  if ("binary" == t.type || "base64" == t.type) return a;
                  a = new Uint8Array(d(a));
                }
                return t.password && "undefined" != typeof encrypt_agile
                  ? (function (e, t) {
                      switch (t.type) {
                        case "base64":
                        case "binary":
                          break;
                        case "buffer":
                        case "array":
                          t.type = "";
                          break;
                        case "file":
                          return ie(
                            t.file,
                            ae.write(e, { type: s ? "buffer" : "" }),
                          );
                        case "string":
                          throw new Error(
                            "'string' output type invalid for '" +
                              t.bookType +
                              "' files",
                          );
                        default:
                          throw new Error("Unrecognized type " + t.type);
                      }
                      return ae.write(e, t);
                    })(encrypt_agile(a, t.password), t)
                  : "file" === t.type
                    ? ie(t.file, a)
                    : "string" == t.type
                      ? $e(a)
                      : a;
              })(
                (function (e, t) {
                  var r;
                  (e && !e.SSF && (e.SSF = ve(A)),
                    e &&
                      e.SSF &&
                      (r || (r = {}),
                      (r[0] = "General"),
                      (r[1] = "0"),
                      (r[2] = "0.00"),
                      (r[3] = "#,##0"),
                      (r[4] = "#,##0.00"),
                      (r[9] = "0%"),
                      (r[10] = "0.00%"),
                      (r[11] = "0.00E+00"),
                      (r[12] = "# ?/?"),
                      (r[13] = "# ??/??"),
                      (r[14] = "m/d/yy"),
                      (r[15] = "d-mmm-yy"),
                      (r[16] = "d-mmm"),
                      (r[17] = "mmm-yy"),
                      (r[18] = "h:mm AM/PM"),
                      (r[19] = "h:mm:ss AM/PM"),
                      (r[20] = "h:mm"),
                      (r[21] = "h:mm:ss"),
                      (r[22] = "m/d/yy h:mm"),
                      (r[37] = "#,##0 ;(#,##0)"),
                      (r[38] = "#,##0 ;[Red](#,##0)"),
                      (r[39] = "#,##0.00;(#,##0.00)"),
                      (r[40] = "#,##0.00;[Red](#,##0.00)"),
                      (r[45] = "mm:ss"),
                      (r[46] = "[h]:mm:ss"),
                      (r[47] = "mmss.0"),
                      (r[48] = "##0.0E+0"),
                      (r[49] = "@"),
                      (r[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
                      (A = r),
                      (function (e) {
                        for (var t = 0; 392 != t; ++t)
                          void 0 !== e[t] && ee(e[t], t);
                      })(e.SSF),
                      (t.revssf = (function (e) {
                        for (var t = [], r = se(e), n = 0; n !== r.length; ++n)
                          t[e[r[n]]] = parseInt(r[n], 10);
                        return t;
                      })(e.SSF)),
                      (t.revssf[e.SSF[65535]] = 0),
                      (t.ssf = e.SSF)),
                    (t.rels = {}),
                    (t.wbrels = {}),
                    (t.Strings = []),
                    (t.Strings.Count = 0),
                    (t.Strings.Unique = 0),
                    xr
                      ? (t.revStrings = new Map())
                      : ((t.revStrings = {}),
                        (t.revStrings.foo = []),
                        delete t.revStrings.foo));
                  var n = "xml",
                    a = yr.indexOf(t.bookType) > -1,
                    o = {
                      workbooks: [],
                      sheets: [],
                      charts: [],
                      dialogs: [],
                      macros: [],
                      rels: [],
                      strs: [],
                      comments: [],
                      threadedcomments: [],
                      links: [],
                      coreprops: [],
                      extprops: [],
                      custprops: [],
                      themes: [],
                      styles: [],
                      calcchains: [],
                      vba: [],
                      drawings: [],
                      metadata: [],
                      people: [],
                      TODO: [],
                      xmlns: "",
                    };
                  !(function (e) {
                    var t;
                    ((t = [
                      ["cellDates", !1],
                      ["bookSST", !1],
                      ["bookType", "xlsx"],
                      ["compression", !1],
                      ["WTF", !1],
                    ]),
                    function (e) {
                      for (var r = 0; r != t.length; ++r) {
                        var n = t[r];
                        (void 0 === e[n[0]] && (e[n[0]] = n[1]),
                          "n" === n[2] && (e[n[0]] = Number(e[n[0]])));
                      }
                    })(e);
                  })((t = t || {}));
                  var i,
                    s,
                    l,
                    c = ae.utils.cfb_new(),
                    f = "",
                    h = 0;
                  if (
                    ((t.cellXfs = []),
                    Sr(t.cellXfs, {}, { revssf: { General: 0 } }),
                    e.Props || (e.Props = {}),
                    Oe(
                      c,
                      (f = "docProps/core.xml"),
                      (function (e, t) {
                        var r = t || {},
                          n = [
                            Te,
                            Ve("cp:coreProperties", null, {
                              "xmlns:cp": Je,
                              "xmlns:dc": et,
                              "xmlns:dcterms": tt,
                              "xmlns:dcmitype": rt,
                              "xmlns:xsi": ot,
                            }),
                          ],
                          a = {};
                        if (!e && !r.Props) return n.join("");
                        e &&
                          (null != e.CreatedDate &&
                            ur(
                              "dcterms:created",
                              "string" == typeof e.CreatedDate
                                ? e.CreatedDate
                                : qe(e.CreatedDate, r.WTF),
                              { "xsi:type": "dcterms:W3CDTF" },
                              n,
                              a,
                            ),
                          null != e.ModifiedDate &&
                            ur(
                              "dcterms:modified",
                              "string" == typeof e.ModifiedDate
                                ? e.ModifiedDate
                                : qe(e.ModifiedDate, r.WTF),
                              { "xsi:type": "dcterms:W3CDTF" },
                              n,
                              a,
                            ));
                        for (var o = 0; o != hr.length; ++o) {
                          var i = hr[o],
                            s =
                              r.Props && null != r.Props[i[1]]
                                ? r.Props[i[1]]
                                : e
                                  ? e[i[1]]
                                  : null;
                          (!0 === s
                            ? (s = "1")
                            : !1 === s
                              ? (s = "0")
                              : "number" == typeof s && (s = String(s)),
                            null != s && ur(i[0], s, null, n, a));
                        }
                        return (
                          n.length > 2 &&
                            ((n[n.length] = "</cp:coreProperties>"),
                            (n[1] = n[1].replace("/>", ">"))),
                          n.join("")
                        );
                      })(e.Props, t),
                    ),
                    o.coreprops.push(f),
                    fr(t.rels, 2, f, sr.CORE_PROPS),
                    (f = "docProps/app.xml"),
                    e.Props && e.Props.SheetNames)
                  );
                  else if (e.Workbook && e.Workbook.Sheets) {
                    for (var u = [], d = 0; d < e.SheetNames.length; ++d)
                      2 != (e.Workbook.Sheets[d] || {}).Hidden &&
                        u.push(e.SheetNames[d]);
                    e.Props.SheetNames = u;
                  } else e.Props.SheetNames = e.SheetNames;
                  ((e.Props.Worksheets = e.Props.SheetNames.length),
                    Oe(
                      c,
                      f,
                      ((i = e.Props),
                      (s = []),
                      (l = Ve),
                      i || (i = {}),
                      (i.Application = "SheetJS"),
                      (s[s.length] = Te),
                      (s[s.length] = Ve("Properties", null, {
                        xmlns: Ke,
                        "xmlns:vt": at,
                      })),
                      dr.forEach(function (e) {
                        if (void 0 !== i[e[1]]) {
                          var t;
                          switch (e[2]) {
                            case "string":
                              t = Pe(String(i[e[1]]));
                              break;
                            case "bool":
                              t = i[e[1]] ? "true" : "false";
                          }
                          void 0 !== t && (s[s.length] = l(e[0], t));
                        }
                      }),
                      (s[s.length] = l(
                        "HeadingPairs",
                        l(
                          "vt:vector",
                          l("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") +
                            l("vt:variant", l("vt:i4", String(i.Worksheets))),
                          { size: 2, baseType: "variant" },
                        ),
                      )),
                      (s[s.length] = l(
                        "TitlesOfParts",
                        l(
                          "vt:vector",
                          i.SheetNames.map(function (e) {
                            return "<vt:lpstr>" + Pe(e) + "</vt:lpstr>";
                          }).join(""),
                          { size: i.Worksheets, baseType: "lpstr" },
                        ),
                      )),
                      s.length > 2 &&
                        ((s[s.length] = "</Properties>"),
                        (s[1] = s[1].replace("/>", ">"))),
                      s.join("")),
                    ),
                    o.extprops.push(f),
                    fr(t.rels, 3, f, sr.EXT_PROPS),
                    e.Custprops !== e.Props &&
                      se(e.Custprops || {}).length > 0 &&
                      (Oe(
                        c,
                        (f = "docProps/custom.xml"),
                        (function (e) {
                          var t = [
                            Te,
                            Ve("Properties", null, {
                              xmlns: Xe,
                              "xmlns:vt": at,
                            }),
                          ];
                          if (!e) return t.join("");
                          var r = 1;
                          return (
                            se(e).forEach(function (n) {
                              (++r,
                                (t[t.length] = Ve(
                                  "property",
                                  (function (e) {
                                    switch (typeof e) {
                                      case "string":
                                        return Ve("vt:lpwstr", Pe(e)).replace(
                                          /&quot;/g,
                                          "_x0022_",
                                        );
                                      case "number":
                                        return Ve(
                                          (0 | e) == e ? "vt:i4" : "vt:r8",
                                          Pe(String(e)),
                                        );
                                      case "boolean":
                                        return Ve(
                                          "vt:bool",
                                          e ? "true" : "false",
                                        );
                                    }
                                    if (e instanceof Date)
                                      return Ve("vt:filetime", qe(e));
                                    throw new Error("Unable to serialize " + e);
                                  })(e[n]),
                                  {
                                    fmtid:
                                      "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                                    pid: r,
                                    name: Pe(n),
                                  },
                                )));
                            }),
                            t.length > 2 &&
                              ((t[t.length] = "</Properties>"),
                              (t[1] = t[1].replace("/>", ">"))),
                            t.join("")
                          );
                        })(e.Custprops),
                      ),
                      o.custprops.push(f),
                      fr(t.rels, 4, f, sr.CUST_PROPS)));
                  var m = ["SheetJ5"];
                  for (t.tcid = 0, h = 1; h <= e.SheetNames.length; ++h) {
                    var p = { "!id": {} },
                      g = e.Sheets[e.SheetNames[h - 1]];
                    if (
                      ((g || {})["!type"],
                      Oe(
                        c,
                        (f = "xl/worksheets/sheet" + h + "." + n),
                        Tr(h - 1, t, e, p),
                      ),
                      o.sheets.push(f),
                      fr(
                        t.wbrels,
                        -1,
                        "worksheets/sheet" + h + "." + n,
                        sr.WS[0],
                      ),
                      g)
                    ) {
                      var v = g["!comments"],
                        w = !1,
                        b = "";
                      if (v && v.length > 0) {
                        var y = !1;
                        (v.forEach(function (e) {
                          e[1].forEach(function (e) {
                            1 == e.T && (y = !0);
                          });
                        }),
                          y &&
                            (Oe(
                              c,
                              (b =
                                "xl/threadedComments/threadedComment" +
                                h +
                                ".xml"),
                              br(v, m, t),
                            ),
                            o.threadedcomments.push(b),
                            fr(
                              p,
                              -1,
                              "../threadedComments/threadedComment" +
                                h +
                                ".xml",
                              sr.TCMNT,
                            )),
                          Oe(c, (b = "xl/comments" + h + "." + n), wr(v)),
                          o.comments.push(b),
                          fr(p, -1, "../comments" + h + "." + n, sr.CMNT),
                          (w = !0));
                      }
                      (g["!legacy"] &&
                        w &&
                        Oe(
                          c,
                          "xl/drawings/vmlDrawing" + h + ".vml",
                          vr(h, g["!comments"]),
                        ),
                        delete g["!comments"],
                        delete g["!legacy"]);
                    }
                    p["!id"].rId1 && Oe(c, lr(f), cr(p));
                  }
                  return (
                    null != t.Strings &&
                      t.Strings.length > 0 &&
                      (Oe(
                        c,
                        (f = "xl/sharedStrings." + n),
                        (function (e, t) {
                          if (!t.bookSST) return "";
                          var r = [Te];
                          r[r.length] = Ve("sst", null, {
                            xmlns: st[0],
                            count: e.Count,
                            uniqueCount: e.Unique,
                          });
                          for (var n = 0; n != e.length; ++n)
                            if (null != e[n]) {
                              var a = e[n],
                                o = "<si>";
                              (a.r
                                ? (o += a.r)
                                : ((o += "<t"),
                                  a.t || (a.t = ""),
                                  "string" != typeof a.t && (a.t = String(a.t)),
                                  a.t.match(mr) &&
                                    (o += ' xml:space="preserve"'),
                                  (o += ">" + Pe(a.t) + "</t>")),
                                (o += "</si>"),
                                (r[r.length] = o));
                            }
                          return (
                            r.length > 2 &&
                              ((r[r.length] = "</sst>"),
                              (r[1] = r[1].replace("/>", ">"))),
                            r.join("")
                          );
                        })(t.Strings, t),
                      ),
                      o.strs.push(f),
                      fr(t.wbrels, -1, "sharedStrings." + n, sr.SST)),
                    Oe(
                      c,
                      (f = "xl/workbook." + n),
                      (function (e) {
                        var t = [Te];
                        t[t.length] = Ve("workbook", null, {
                          xmlns: st[0],
                          "xmlns:r": nt,
                        });
                        var r =
                            e.Workbook && (e.Workbook.Names || []).length > 0,
                          n = { codeName: "ThisWorkbook" };
                        (e.Workbook &&
                          e.Workbook.WBProps &&
                          (Dr.forEach(function (t) {
                            null != e.Workbook.WBProps[t[0]] &&
                              e.Workbook.WBProps[t[0]] != t[1] &&
                              (n[t[0]] = e.Workbook.WBProps[t[0]]);
                          }),
                          e.Workbook.WBProps.CodeName &&
                            ((n.codeName = e.Workbook.WBProps.CodeName),
                            delete n.CodeName)),
                          (t[t.length] = Ve("workbookPr", null, n)));
                        var a = (e.Workbook && e.Workbook.Sheets) || [],
                          o = 0;
                        if (a && a[0] && a[0].Hidden) {
                          for (
                            t[t.length] = "<bookViews>", o = 0;
                            o != e.SheetNames.length && a[o] && a[o].Hidden;
                            ++o
                          );
                          (o == e.SheetNames.length && (o = 0),
                            (t[t.length] =
                              '<workbookView firstSheet="' +
                              o +
                              '" activeTab="' +
                              o +
                              '"/>'),
                            (t[t.length] = "</bookViews>"));
                        }
                        for (
                          t[t.length] = "<sheets>", o = 0;
                          o != e.SheetNames.length;
                          ++o
                        ) {
                          var i = { name: Pe(e.SheetNames[o].slice(0, 31)) };
                          if (
                            ((i.sheetId = "" + (o + 1)),
                            (i["r:id"] = "rId" + (o + 1)),
                            a[o])
                          )
                            switch (a[o].Hidden) {
                              case 1:
                                i.state = "hidden";
                                break;
                              case 2:
                                i.state = "veryHidden";
                            }
                          t[t.length] = Ve("sheet", null, i);
                        }
                        return (
                          (t[t.length] = "</sheets>"),
                          r &&
                            ((t[t.length] = "<definedNames>"),
                            e.Workbook &&
                              e.Workbook.Names &&
                              e.Workbook.Names.forEach(function (e) {
                                var r = { name: e.Name };
                                (e.Comment && (r.comment = e.Comment),
                                  null != e.Sheet &&
                                    (r.localSheetId = "" + e.Sheet),
                                  e.Hidden && (r.hidden = "1"),
                                  e.Ref &&
                                    (t[t.length] = Ve(
                                      "definedName",
                                      Pe(e.Ref),
                                      r,
                                    )));
                              }),
                            (t[t.length] = "</definedNames>")),
                          t.length > 2 &&
                            ((t[t.length] = "</workbook>"),
                            (t[1] = t[1].replace("/>", ">"))),
                          t.join("")
                        );
                      })(e),
                    ),
                    o.workbooks.push(f),
                    fr(t.rels, 1, f, sr.WB),
                    Oe(
                      c,
                      (f = "xl/theme/theme1.xml"),
                      (function (e, t) {
                        if (t && t.themeXLSX) return t.themeXLSX;
                        if (e && "string" == typeof e.raw) return e.raw;
                        var r = [Te];
                        return (
                          (r[r.length] =
                            '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
                          (r[r.length] = "<a:themeElements>"),
                          (r[r.length] = '<a:clrScheme name="Office">'),
                          (r[r.length] =
                            '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
                          (r[r.length] =
                            '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
                          (r[r.length] =
                            '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
                          (r[r.length] =
                            '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
                          (r[r.length] =
                            '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
                          (r[r.length] =
                            '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
                          (r[r.length] =
                            '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
                          (r[r.length] =
                            '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
                          (r[r.length] =
                            '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
                          (r[r.length] =
                            '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
                          (r[r.length] =
                            '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
                          (r[r.length] =
                            '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
                          (r[r.length] = "</a:clrScheme>"),
                          (r[r.length] = '<a:fontScheme name="Office">'),
                          (r[r.length] = "<a:majorFont>"),
                          (r[r.length] = '<a:latin typeface="Cambria"/>'),
                          (r[r.length] = '<a:ea typeface=""/>'),
                          (r[r.length] = '<a:cs typeface=""/>'),
                          (r[r.length] =
                            '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
                          (r[r.length] =
                            '<a:font script="Hang" typeface="맑은 고딕"/>'),
                          (r[r.length] =
                            '<a:font script="Hans" typeface="宋体"/>'),
                          (r[r.length] =
                            '<a:font script="Hant" typeface="新細明體"/>'),
                          (r[r.length] =
                            '<a:font script="Arab" typeface="Times New Roman"/>'),
                          (r[r.length] =
                            '<a:font script="Hebr" typeface="Times New Roman"/>'),
                          (r[r.length] =
                            '<a:font script="Thai" typeface="Tahoma"/>'),
                          (r[r.length] =
                            '<a:font script="Ethi" typeface="Nyala"/>'),
                          (r[r.length] =
                            '<a:font script="Beng" typeface="Vrinda"/>'),
                          (r[r.length] =
                            '<a:font script="Gujr" typeface="Shruti"/>'),
                          (r[r.length] =
                            '<a:font script="Khmr" typeface="MoolBoran"/>'),
                          (r[r.length] =
                            '<a:font script="Knda" typeface="Tunga"/>'),
                          (r[r.length] =
                            '<a:font script="Guru" typeface="Raavi"/>'),
                          (r[r.length] =
                            '<a:font script="Cans" typeface="Euphemia"/>'),
                          (r[r.length] =
                            '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
                          (r[r.length] =
                            '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
                          (r[r.length] =
                            '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
                          (r[r.length] =
                            '<a:font script="Thaa" typeface="MV Boli"/>'),
                          (r[r.length] =
                            '<a:font script="Deva" typeface="Mangal"/>'),
                          (r[r.length] =
                            '<a:font script="Telu" typeface="Gautami"/>'),
                          (r[r.length] =
                            '<a:font script="Taml" typeface="Latha"/>'),
                          (r[r.length] =
                            '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
                          (r[r.length] =
                            '<a:font script="Orya" typeface="Kalinga"/>'),
                          (r[r.length] =
                            '<a:font script="Mlym" typeface="Kartika"/>'),
                          (r[r.length] =
                            '<a:font script="Laoo" typeface="DokChampa"/>'),
                          (r[r.length] =
                            '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
                          (r[r.length] =
                            '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
                          (r[r.length] =
                            '<a:font script="Viet" typeface="Times New Roman"/>'),
                          (r[r.length] =
                            '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
                          (r[r.length] =
                            '<a:font script="Geor" typeface="Sylfaen"/>'),
                          (r[r.length] = "</a:majorFont>"),
                          (r[r.length] = "<a:minorFont>"),
                          (r[r.length] = '<a:latin typeface="Calibri"/>'),
                          (r[r.length] = '<a:ea typeface=""/>'),
                          (r[r.length] = '<a:cs typeface=""/>'),
                          (r[r.length] =
                            '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
                          (r[r.length] =
                            '<a:font script="Hang" typeface="맑은 고딕"/>'),
                          (r[r.length] =
                            '<a:font script="Hans" typeface="宋体"/>'),
                          (r[r.length] =
                            '<a:font script="Hant" typeface="新細明體"/>'),
                          (r[r.length] =
                            '<a:font script="Arab" typeface="Arial"/>'),
                          (r[r.length] =
                            '<a:font script="Hebr" typeface="Arial"/>'),
                          (r[r.length] =
                            '<a:font script="Thai" typeface="Tahoma"/>'),
                          (r[r.length] =
                            '<a:font script="Ethi" typeface="Nyala"/>'),
                          (r[r.length] =
                            '<a:font script="Beng" typeface="Vrinda"/>'),
                          (r[r.length] =
                            '<a:font script="Gujr" typeface="Shruti"/>'),
                          (r[r.length] =
                            '<a:font script="Khmr" typeface="DaunPenh"/>'),
                          (r[r.length] =
                            '<a:font script="Knda" typeface="Tunga"/>'),
                          (r[r.length] =
                            '<a:font script="Guru" typeface="Raavi"/>'),
                          (r[r.length] =
                            '<a:font script="Cans" typeface="Euphemia"/>'),
                          (r[r.length] =
                            '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
                          (r[r.length] =
                            '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
                          (r[r.length] =
                            '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
                          (r[r.length] =
                            '<a:font script="Thaa" typeface="MV Boli"/>'),
                          (r[r.length] =
                            '<a:font script="Deva" typeface="Mangal"/>'),
                          (r[r.length] =
                            '<a:font script="Telu" typeface="Gautami"/>'),
                          (r[r.length] =
                            '<a:font script="Taml" typeface="Latha"/>'),
                          (r[r.length] =
                            '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
                          (r[r.length] =
                            '<a:font script="Orya" typeface="Kalinga"/>'),
                          (r[r.length] =
                            '<a:font script="Mlym" typeface="Kartika"/>'),
                          (r[r.length] =
                            '<a:font script="Laoo" typeface="DokChampa"/>'),
                          (r[r.length] =
                            '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
                          (r[r.length] =
                            '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
                          (r[r.length] =
                            '<a:font script="Viet" typeface="Arial"/>'),
                          (r[r.length] =
                            '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
                          (r[r.length] =
                            '<a:font script="Geor" typeface="Sylfaen"/>'),
                          (r[r.length] = "</a:minorFont>"),
                          (r[r.length] = "</a:fontScheme>"),
                          (r[r.length] = '<a:fmtScheme name="Office">'),
                          (r[r.length] = "<a:fillStyleLst>"),
                          (r[r.length] =
                            '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
                          (r[r.length] = '<a:gradFill rotWithShape="1">'),
                          (r[r.length] = "<a:gsLst>"),
                          (r[r.length] =
                            '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
                          (r[r.length] = "</a:gsLst>"),
                          (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
                          (r[r.length] = "</a:gradFill>"),
                          (r[r.length] = '<a:gradFill rotWithShape="1">'),
                          (r[r.length] = "<a:gsLst>"),
                          (r[r.length] =
                            '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
                          (r[r.length] = "</a:gsLst>"),
                          (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
                          (r[r.length] = "</a:gradFill>"),
                          (r[r.length] = "</a:fillStyleLst>"),
                          (r[r.length] = "<a:lnStyleLst>"),
                          (r[r.length] =
                            '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
                          (r[r.length] =
                            '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
                          (r[r.length] =
                            '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
                          (r[r.length] = "</a:lnStyleLst>"),
                          (r[r.length] = "<a:effectStyleLst>"),
                          (r[r.length] = "<a:effectStyle>"),
                          (r[r.length] = "<a:effectLst>"),
                          (r[r.length] =
                            '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
                          (r[r.length] = "</a:effectLst>"),
                          (r[r.length] = "</a:effectStyle>"),
                          (r[r.length] = "<a:effectStyle>"),
                          (r[r.length] = "<a:effectLst>"),
                          (r[r.length] =
                            '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
                          (r[r.length] = "</a:effectLst>"),
                          (r[r.length] = "</a:effectStyle>"),
                          (r[r.length] = "<a:effectStyle>"),
                          (r[r.length] = "<a:effectLst>"),
                          (r[r.length] =
                            '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
                          (r[r.length] = "</a:effectLst>"),
                          (r[r.length] =
                            '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
                          (r[r.length] =
                            '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
                          (r[r.length] = "</a:effectStyle>"),
                          (r[r.length] = "</a:effectStyleLst>"),
                          (r[r.length] = "<a:bgFillStyleLst>"),
                          (r[r.length] =
                            '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
                          (r[r.length] = '<a:gradFill rotWithShape="1">'),
                          (r[r.length] = "<a:gsLst>"),
                          (r[r.length] =
                            '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
                          (r[r.length] = "</a:gsLst>"),
                          (r[r.length] =
                            '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
                          (r[r.length] = "</a:gradFill>"),
                          (r[r.length] = '<a:gradFill rotWithShape="1">'),
                          (r[r.length] = "<a:gsLst>"),
                          (r[r.length] =
                            '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
                          (r[r.length] =
                            '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
                          (r[r.length] = "</a:gsLst>"),
                          (r[r.length] =
                            '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
                          (r[r.length] = "</a:gradFill>"),
                          (r[r.length] = "</a:bgFillStyleLst>"),
                          (r[r.length] = "</a:fmtScheme>"),
                          (r[r.length] = "</a:themeElements>"),
                          (r[r.length] = "<a:objectDefaults>"),
                          (r[r.length] = "<a:spDef>"),
                          (r[r.length] =
                            '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
                          (r[r.length] = "</a:spDef>"),
                          (r[r.length] = "<a:lnDef>"),
                          (r[r.length] =
                            '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
                          (r[r.length] = "</a:lnDef>"),
                          (r[r.length] = "</a:objectDefaults>"),
                          (r[r.length] = "<a:extraClrSchemeLst/>"),
                          (r[r.length] = "</a:theme>"),
                          r.join("")
                        );
                      })(e.Themes, t),
                    ),
                    o.themes.push(f),
                    fr(t.wbrels, -1, "theme/theme1.xml", sr.THEME),
                    Oe(
                      c,
                      (f = "xl/styles." + n),
                      (function (e, t) {
                        var r,
                          n = [
                            Te,
                            Ve("styleSheet", null, {
                              xmlns: st[0],
                              "xmlns:vt": at,
                            }),
                          ];
                        return (
                          e.SSF &&
                            null !=
                              (r = (function (e) {
                                var t = ["<numFmts>"];
                                return (
                                  [
                                    [5, 8],
                                    [23, 26],
                                    [41, 44],
                                    [50, 392],
                                  ].forEach(function (r) {
                                    for (var n = r[0]; n <= r[1]; ++n)
                                      null != e[n] &&
                                        (t[t.length] = Ve("numFmt", null, {
                                          numFmtId: n,
                                          formatCode: Pe(e[n]),
                                        }));
                                  }),
                                  1 === t.length
                                    ? ""
                                    : ((t[t.length] = "</numFmts>"),
                                      (t[0] = Ve("numFmts", null, {
                                        count: t.length - 2,
                                      }).replace("/>", ">")),
                                      t.join(""))
                                );
                              })(e.SSF)) &&
                            (n[n.length] = r),
                          (n[n.length] =
                            '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
                          (n[n.length] =
                            '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
                          (n[n.length] =
                            '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
                          (n[n.length] =
                            '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
                          (r = (function (e) {
                            var t = [];
                            return (
                              (t[t.length] = Ve("cellXfs", null)),
                              e.forEach(function (e) {
                                t[t.length] = Ve("xf", null, e);
                              }),
                              (t[t.length] = "</cellXfs>"),
                              2 === t.length
                                ? ""
                                : ((t[0] = Ve("cellXfs", null, {
                                    count: t.length - 2,
                                  }).replace("/>", ">")),
                                  t.join(""))
                            );
                          })(t.cellXfs)) && (n[n.length] = r),
                          (n[n.length] =
                            '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
                          (n[n.length] = '<dxfs count="0"/>'),
                          (n[n.length] =
                            '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
                          n.length > 2 &&
                            ((n[n.length] = "</styleSheet>"),
                            (n[1] = n[1].replace("/>", ">"))),
                          n.join("")
                        );
                      })(e, t),
                    ),
                    o.styles.push(f),
                    fr(t.wbrels, -1, "styles." + n, sr.STY),
                    e.vbaraw &&
                      a &&
                      (Oe(c, (f = "xl/vbaProject.bin"), e.vbaraw),
                      o.vba.push(f),
                      fr(t.wbrels, -1, "vbaProject.bin", sr.VBA)),
                    Oe(
                      c,
                      (f = "xl/metadata." + n),
                      (function () {
                        var e = [Te];
                        return (
                          e.push(
                            '<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>',
                          ),
                          e.join("")
                        );
                      })(),
                    ),
                    o.metadata.push(f),
                    fr(t.wbrels, -1, "metadata." + n, sr.XLMETA),
                    m.length > 1 &&
                      (Oe(
                        c,
                        (f = "xl/persons/person.xml"),
                        (function (e) {
                          var t = [
                            Te,
                            Ve("personList", null, {
                              xmlns: Qe,
                              "xmlns:x": st[0],
                            }).replace(/[\/]>/, ">"),
                          ];
                          return (
                            e.forEach(function (e, r) {
                              t.push(
                                Ve("person", null, {
                                  displayName: e,
                                  id:
                                    "{54EE7950-7262-4200-6969-" +
                                    ("000000000000" + r).slice(-12) +
                                    "}",
                                  userId: e,
                                  providerId: "None",
                                }),
                              );
                            }),
                            t.push("</personList>"),
                            t.join("")
                          );
                        })(m),
                      ),
                      o.people.push(f),
                      fr(t.wbrels, -1, "persons/person.xml", sr.PEOPLE)),
                    Oe(
                      c,
                      "[Content_Types].xml",
                      (function (e, t) {
                        var r,
                          n = (function (e) {
                            for (
                              var t = [], r = se(e), n = 0;
                              n !== r.length;
                              ++n
                            )
                              (null == t[e[r[n]]] && (t[e[r[n]]] = []),
                                t[e[r[n]]].push(r[n]));
                            return t;
                          })(or),
                          a = [];
                        ((a[a.length] = Te),
                          (a[a.length] = Ve("Types", null, {
                            xmlns: Ye,
                            "xmlns:xsd": it,
                            "xmlns:xsi": ot,
                          })),
                          (a = a.concat(
                            [
                              ["xml", "application/xml"],
                              [
                                "bin",
                                "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                              ],
                              [
                                "vml",
                                "application/vnd.openxmlformats-officedocument.vmlDrawing",
                              ],
                              [
                                "data",
                                "application/vnd.openxmlformats-officedocument.model+data",
                              ],
                              ["bmp", "image/bmp"],
                              ["png", "image/png"],
                              ["gif", "image/gif"],
                              ["emf", "image/x-emf"],
                              ["wmf", "image/x-wmf"],
                              ["jpg", "image/jpeg"],
                              ["jpeg", "image/jpeg"],
                              ["tif", "image/tiff"],
                              ["tiff", "image/tiff"],
                              ["pdf", "application/pdf"],
                              [
                                "rels",
                                "application/vnd.openxmlformats-package.relationships+xml",
                              ],
                            ].map(function (e) {
                              return Ve("Default", null, {
                                Extension: e[0],
                                ContentType: e[1],
                              });
                            }),
                          )));
                        var o = function (n) {
                            e[n] &&
                              e[n].length > 0 &&
                              ((r = e[n][0]),
                              (a[a.length] = Ve("Override", null, {
                                PartName: ("/" == r[0] ? "" : "/") + r,
                                ContentType: ir[n][t.bookType] || ir[n].xlsx,
                              })));
                          },
                          i = function (r) {
                            (e[r] || []).forEach(function (e) {
                              a[a.length] = Ve("Override", null, {
                                PartName: ("/" == e[0] ? "" : "/") + e,
                                ContentType: ir[r][t.bookType] || ir[r].xlsx,
                              });
                            });
                          },
                          s = function (t) {
                            (e[t] || []).forEach(function (e) {
                              a[a.length] = Ve("Override", null, {
                                PartName: ("/" == e[0] ? "" : "/") + e,
                                ContentType: n[t][0],
                              });
                            });
                          };
                        return (
                          o("workbooks"),
                          i("sheets"),
                          i("charts"),
                          s("themes"),
                          ["strs", "styles"].forEach(o),
                          ["coreprops", "extprops", "custprops"].forEach(s),
                          s("vba"),
                          s("comments"),
                          s("threadedcomments"),
                          s("drawings"),
                          i("metadata"),
                          s("people"),
                          a.length > 2 &&
                            ((a[a.length] = "</Types>"),
                            (a[1] = a[1].replace("/>", ">"))),
                          a.join("")
                        );
                      })(o, t),
                    ),
                    Oe(c, "_rels/.rels", cr(t.rels)),
                    Oe(c, "xl/_rels/workbook.xml.rels", cr(t.wbrels)),
                    delete t.revssf,
                    delete t.ssf,
                    c
                  );
                })(e, r),
                r,
              );
            })(e, r);
          }
          function Ur(e, t, r, n, a, o, i) {
            var s = Vt(r),
              l = i.defval,
              c = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw"),
              f = !0,
              h = null != e["!data"],
              u = 1 === a ? [] : {};
            if (1 !== a)
              if (Object.defineProperty)
                try {
                  Object.defineProperty(u, "__rowNum__", {
                    value: r,
                    enumerable: !1,
                  });
                } catch (e) {
                  u.__rowNum__ = r;
                }
              else u.__rowNum__ = r;
            if (!h || e["!data"][r])
              for (var d = t.s.c; d <= t.e.c; ++d) {
                var m = h ? (e["!data"][r] || [])[d] : e[n[d] + s];
                if (null != m && void 0 !== m.t) {
                  var p = m.v;
                  switch (m.t) {
                    case "z":
                      if (null == p) break;
                      continue;
                    case "e":
                      p = 0 == p ? null : void 0;
                      break;
                    case "s":
                    case "b":
                    case "n":
                      if (!m.z || !K(m.z)) break;
                      if ("number" == typeof (p = ue(p))) break;
                    case "d":
                      (i && (i.UTC || !1 === i.raw)) || (p = Ae(new Date(p)));
                      break;
                    default:
                      throw new Error("unrecognized type " + m.t);
                  }
                  if (null != o[d]) {
                    if (null == p)
                      if ("e" == m.t && null === p) u[o[d]] = null;
                      else if (void 0 !== l) u[o[d]] = l;
                      else {
                        if (!c || null !== p) continue;
                        u[o[d]] = null;
                      }
                    else
                      u[o[d]] = (
                        "n" === m.t && "boolean" == typeof i.rawNumbers
                          ? i.rawNumbers
                          : c
                      )
                        ? p
                        : tr(m, p, i);
                    null != p && (f = !1);
                  }
                } else {
                  if (void 0 === l) continue;
                  null != o[d] && (u[o[d]] = l);
                }
              }
            return { row: u, isempty: f };
          }
          function jr(e, t) {
            if (null == e || null == e["!ref"]) return [];
            var r = { t: "n", v: 0 },
              n = 0,
              a = 1,
              o = [],
              i = 0,
              s = "",
              l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
              c = t || {},
              f = null != c.range ? c.range : e["!ref"];
            switch (
              (1 === c.header
                ? (n = 1)
                : "A" === c.header
                  ? (n = 2)
                  : Array.isArray(c.header)
                    ? (n = 3)
                    : null == c.header && (n = 0),
              typeof f)
            ) {
              case "string":
                l = er(f);
                break;
              case "number":
                (l = er(e["!ref"])).s.r = f;
                break;
              default:
                l = f;
            }
            n > 0 && (a = 0);
            var h = Vt(l.s.r),
              u = [],
              d = [],
              m = 0,
              p = 0,
              g = null != e["!data"],
              v = l.s.r,
              w = 0,
              b = {};
            g && !e["!data"][v] && (e["!data"][v] = []);
            var y = (c.skipHidden && e["!cols"]) || [],
              x = (c.skipHidden && e["!rows"]) || [];
            for (w = l.s.c; w <= l.e.c; ++w)
              if (!(y[w] || {}).hidden)
                switch (
                  ((u[w] = qt(w)), (r = g ? e["!data"][v][w] : e[u[w] + h]), n)
                ) {
                  case 1:
                    o[w] = w - l.s.c;
                    break;
                  case 2:
                    o[w] = u[w];
                    break;
                  case 3:
                    o[w] = c.header[w - l.s.c];
                    break;
                  default:
                    if (
                      (null == r && (r = { w: "__EMPTY", t: "s" }),
                      (s = i = tr(r, null, c)),
                      (p = b[i] || 0))
                    ) {
                      do {
                        s = i + "_" + p++;
                      } while (b[s]);
                      ((b[i] = p), (b[s] = 1));
                    } else b[i] = 1;
                    o[w] = s;
                }
            for (v = l.s.r + a; v <= l.e.r; ++v)
              if (!(x[v] || {}).hidden) {
                var C = Ur(e, l, v, u, n, o, c);
                (!1 === C.isempty ||
                  (1 === n ? !1 !== c.blankrows : c.blankrows)) &&
                  (d[m++] = C.row);
              }
            return ((d.length = m), d);
          }
          !(function () {
            try {
              return "undefined" == typeof Uint8Array ||
                void 0 === Uint8Array.prototype.subarray
                ? "slice"
                : "undefined" != typeof Buffer
                  ? void 0 === Buffer.prototype.subarray
                    ? "slice"
                    : ("function" == typeof Buffer.from
                          ? Buffer.from([72, 62])
                          : new Buffer([72, 62])) instanceof Uint8Array
                      ? "subarray"
                      : "slice"
                  : "subarray";
            } catch (e) {
              return "slice";
            }
          })();
          var $r = /"/g;
          function zr(e, t, r, n, a, o, i, s, l) {
            for (
              var c = !0,
                f = [],
                h = "",
                u = Vt(r),
                d = null != e["!data"],
                m = (d && e["!data"][r]) || [],
                p = t.s.c;
              p <= t.e.c;
              ++p
            )
              if (n[p]) {
                var g = d ? m[p] : e[n[p] + u];
                if (null == g) h = "";
                else if (null != g.v) {
                  ((c = !1),
                    (h =
                      "" +
                      (l.rawNumbers && "n" == g.t ? g.v : tr(g, null, l))));
                  for (var v = 0, w = 0; v !== h.length; ++v)
                    if (
                      (w = h.charCodeAt(v)) === a ||
                      w === o ||
                      34 === w ||
                      l.forceQuotes
                    ) {
                      h = '"' + h.replace($r, '""') + '"';
                      break;
                    }
                  "ID" == h && 0 == s && 0 == f.length && (h = '"ID"');
                } else
                  null == g.f || g.F
                    ? (h = "")
                    : ((c = !1),
                      (h = "=" + g.f).indexOf(",") >= 0 &&
                        (h = '"' + h.replace($r, '""') + '"'));
                f.push(h);
              }
            if (l.strip) for (; "" === f[f.length - 1]; ) --f.length;
            return !1 === l.blankrows && c ? null : f.join(i);
          }
          function Br(e, t) {
            var r = [],
              n = null == t ? {} : t;
            if (null == e || null == e["!ref"]) return "";
            for (
              var a = er(e["!ref"]),
                o = void 0 !== n.FS ? n.FS : ",",
                i = o.charCodeAt(0),
                s = void 0 !== n.RS ? n.RS : "\n",
                l = s.charCodeAt(0),
                c = "",
                f = [],
                h = (n.skipHidden && e["!cols"]) || [],
                u = (n.skipHidden && e["!rows"]) || [],
                d = a.s.c;
              d <= a.e.c;
              ++d
            )
              (h[d] || {}).hidden || (f[d] = qt(d));
            for (var m = 0, p = a.s.r; p <= a.e.r; ++p)
              (u[p] || {}).hidden ||
                (null != (c = zr(e, a, p, f, i, l, o, m, n)) &&
                  (c || !1 !== n.blankrows) &&
                  r.push((m++ ? s : "") + c));
            return r.join("");
          }
          function Wr(e, t, r) {
            var n = r || {},
              a = e ? null != e["!data"] : n.dense,
              o = +!n.skipHeader,
              i = e || {};
            !e && a && (i["!data"] = []);
            var s = 0,
              l = 0;
            if (i && null != n.origin)
              if ("number" == typeof n.origin) s = n.origin;
              else {
                var c = "string" == typeof n.origin ? Jt(n.origin) : n.origin;
                ((s = c.r), (l = c.c));
              }
            var f = { s: { c: 0, r: 0 }, e: { c: l, r: s + t.length - 1 + o } };
            if (i["!ref"]) {
              var h = er(i["!ref"]);
              ((f.e.c = Math.max(f.e.c, h.e.c)),
                (f.e.r = Math.max(f.e.r, h.e.r)),
                -1 == s && ((s = h.e.r + 1), (f.e.r = s + t.length - 1 + o)));
            } else -1 == s && ((s = 0), (f.e.r = t.length - 1 + o));
            var u = n.header || [],
              d = 0,
              m = [];
            (t.forEach(function (e, t) {
              (a && !i["!data"][s + t + o] && (i["!data"][s + t + o] = []),
                a && (m = i["!data"][s + t + o]),
                se(e).forEach(function (r) {
                  -1 == (d = u.indexOf(r)) && (u[(d = u.length)] = r);
                  var c = e[r],
                    f = "z",
                    h = "",
                    p = a ? "" : qt(l + d) + Vt(s + t + o),
                    g = a ? m[l + d] : i[p];
                  !c || "object" != typeof c || c instanceof Date
                    ? ("number" == typeof c
                        ? (f = "n")
                        : "boolean" == typeof c
                          ? (f = "b")
                          : "string" == typeof c
                            ? (f = "s")
                            : c instanceof Date
                              ? ((f = "d"),
                                n.UTC || (c = Ee(c)),
                                n.cellDates || ((f = "n"), (c = he(c))),
                                (h =
                                  null != g && g.z && K(g.z)
                                    ? g.z
                                    : n.dateNF || A[14]))
                              : null === c &&
                                n.nullError &&
                                ((f = "e"), (c = 0)),
                      g
                        ? ((g.t = f),
                          (g.v = c),
                          delete g.w,
                          delete g.R,
                          h && (g.z = h))
                        : a
                          ? (m[l + d] = g = { t: f, v: c })
                          : (i[p] = g = { t: f, v: c }),
                      h && (g.z = h))
                    : a
                      ? (m[l + d] = c)
                      : (i[p] = c);
                }));
            }),
              (f.e.c = Math.max(f.e.c, l + u.length - 1)));
            var p = Vt(s);
            if ((a && !i["!data"][s] && (i["!data"][s] = []), o))
              for (d = 0; d < u.length; ++d)
                a
                  ? (i["!data"][s][d + l] = { t: "s", v: u[d] })
                  : (i[qt(d + l) + p] = { t: "s", v: u[d] });
            return ((i["!ref"] = Yt(f)), i);
          }
          function Hr(e, t, r) {
            if ("string" == typeof t) {
              if (null != e["!data"]) {
                var n = Jt(t);
                return (
                  e["!data"][n.r] || (e["!data"][n.r] = []),
                  e["!data"][n.r][n.c] || (e["!data"][n.r][n.c] = { t: "z" })
                );
              }
              return e[t] || (e[t] = { t: "z" });
            }
            return Hr(e, "number" != typeof t ? Xt(t) : qt(r || 0) + Vt(t));
          }
          function Gr(e, t, r, n) {
            var a = 1;
            if (!r)
              for (
                ;
                a <= 65535 && -1 != e.SheetNames.indexOf((r = "Sheet" + a));
                ++a, r = void 0
              );
            if (!r || e.SheetNames.length >= 65535)
              throw new Error("Too many worksheets");
            if (n && e.SheetNames.indexOf(r) >= 0 && r.length < 32) {
              var o = r.match(/\d+$/);
              a = (o && +o[0]) || 0;
              var i = (o && r.slice(0, o.index)) || r;
              for (
                ++a;
                a <= 65535 && -1 != e.SheetNames.indexOf((r = i + a));
                ++a
              );
            }
            if ((Fr(r), e.SheetNames.indexOf(r) >= 0))
              throw new Error(
                "Worksheet with name |" + r + "| already exists!",
              );
            return (e.SheetNames.push(r), (e.Sheets[r] = t), r);
          }
          function Vr(e, t, r) {
            return (
              t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l,
              e
            );
          }
          var qr = {
            encode_col: qt,
            encode_row: Vt,
            encode_cell: Xt,
            encode_range: Yt,
            decode_col: function (e) {
              for (
                var t = e.replace(/^\$([A-Z])/, "$1"), r = 0, n = 0;
                n !== t.length;
                ++n
              )
                r = 26 * r + t.charCodeAt(n) - 64;
              return r - 1;
            },
            decode_row: function (e) {
              return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1;
            },
            split_cell: function (e) {
              return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
            },
            decode_cell: Jt,
            decode_range: Kt,
            format_cell: tr,
            sheet_new: function (e) {
              var t = {};
              return ((e || {}).dense && (t["!data"] = []), t);
            },
            sheet_add_aoa: rr,
            sheet_add_json: Wr,
            sheet_add_dom: Rr,
            aoa_to_sheet: function (e, t) {
              return rr(null, e, t);
            },
            json_to_sheet: function (e, t) {
              return Wr(null, e, t);
            },
            table_to_sheet: Ir,
            table_to_book: function (e, t) {
              return (function (e, t) {
                var r = t && t.sheet ? t.sheet : "Sheet1",
                  n = {};
                return ((n[r] = e), { SheetNames: [r], Sheets: n });
              })(Ir(e, t), t);
            },
            sheet_to_csv: Br,
            sheet_to_txt: function (e, t) {
              return (t || (t = {}), (t.FS = "\t"), (t.RS = "\n"), Br(e, t));
            },
            sheet_to_json: jr,
            sheet_to_html: function (e, t) {
              var r = t || {},
                n =
                  null != r.header
                    ? r.header
                    : '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
                a = null != r.footer ? r.footer : "</body></html>",
                o = [n],
                i = Kt(e["!ref"] || "A1");
              if (
                (o.push(
                  (function (e, t, r) {
                    return (
                      [].join("") +
                      "<table" +
                      (r && r.id ? ' id="' + r.id + '"' : "") +
                      ">"
                    );
                  })(0, 0, r),
                ),
                e["!ref"])
              )
                for (var s = i.s.r; s <= i.e.r; ++s) o.push(Pr(e, i, s, r));
              return (o.push("</table>" + a), o.join(""));
            },
            sheet_to_formulae: function (e, t) {
              var r,
                n = "",
                a = "";
              if (null == e || null == e["!ref"]) return [];
              var o,
                i = er(e["!ref"]),
                s = "",
                l = [],
                c = [],
                f = null != e["!data"];
              for (o = i.s.c; o <= i.e.c; ++o) l[o] = qt(o);
              for (var h = i.s.r; h <= i.e.r; ++h)
                for (s = Vt(h), o = i.s.c; o <= i.e.c; ++o)
                  if (
                    ((n = l[o] + s),
                    (a = ""),
                    void 0 !== (r = f ? (e["!data"][h] || [])[o] : e[n]))
                  ) {
                    if (null != r.F) {
                      if (((n = r.F), !r.f)) continue;
                      ((a = r.f), -1 == n.indexOf(":") && (n = n + ":" + n));
                    }
                    if (null != r.f) a = r.f;
                    else {
                      if (t && !1 === t.values) continue;
                      if ("z" == r.t) continue;
                      if ("n" == r.t && null != r.v) a = "" + r.v;
                      else if ("b" == r.t) a = r.v ? "TRUE" : "FALSE";
                      else if (void 0 !== r.w) a = "'" + r.w;
                      else {
                        if (void 0 === r.v) continue;
                        a = "s" == r.t ? "'" + r.v : "" + r.v;
                      }
                    }
                    c[c.length] = n + "=" + a;
                  }
              return c;
            },
            sheet_to_row_object_array: jr,
            sheet_get_cell: Hr,
            book_new: function (e, t) {
              var r = { SheetNames: [], Sheets: {} };
              return (e && Gr(r, e, t || "Sheet1"), r);
            },
            book_append_sheet: Gr,
            book_set_sheet_visibility: function (e, t, r) {
              (e.Workbook || (e.Workbook = {}),
                e.Workbook.Sheets || (e.Workbook.Sheets = []));
              var n = (function (e, t) {
                if ("number" == typeof t) {
                  if (t >= 0 && e.SheetNames.length > t) return t;
                  throw new Error("Cannot find sheet # " + t);
                }
                if ("string" == typeof t) {
                  var r = e.SheetNames.indexOf(t);
                  if (r > -1) return r;
                  throw new Error("Cannot find sheet name |" + t + "|");
                }
                throw new Error("Cannot find sheet |" + t + "|");
              })(e, t);
              switch (
                (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)
              ) {
                case 0:
                case 1:
                case 2:
                  break;
                default:
                  throw new Error("Bad sheet visibility setting " + r);
              }
              e.Workbook.Sheets[n].Hidden = r;
            },
            cell_set_number_format: function (e, t) {
              return ((e.z = t), e);
            },
            cell_set_hyperlink: Vr,
            cell_set_internal_link: function (e, t, r) {
              return Vr(e, "#" + t, r);
            },
            cell_add_comment: function (e, t, r) {
              (e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" }));
            },
            sheet_set_array_formula: function (e, t, r, n) {
              for (
                var a = "string" != typeof t ? t : er(t),
                  o = "string" == typeof t ? t : Yt(t),
                  i = a.s.r;
                i <= a.e.r;
                ++i
              )
                for (var s = a.s.c; s <= a.e.c; ++s) {
                  var l = Hr(e, i, s);
                  ((l.t = "n"),
                    (l.F = o),
                    delete l.v,
                    i == a.s.r && s == a.s.c && ((l.f = r), n && (l.D = !0)));
                }
              var c = Kt(e["!ref"]);
              return (
                c.s.r > a.s.r && (c.s.r = a.s.r),
                c.s.c > a.s.c && (c.s.c = a.s.c),
                c.e.r < a.e.r && (c.e.r = a.e.r),
                c.e.c < a.e.c && (c.e.c = a.e.c),
                (e["!ref"] = Yt(c)),
                e
              );
            },
            consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
          };
          async function Jr(e, t, r, n, a) {
            if (!t || !e || !r) return !1;
            const o = window["com.mendix.widgets.web.datagrid.export"].get(e);
            return (
              void 0 !== o &&
              new Promise((e) => {
                o.exportData(
                  function (a) {
                    let o, i;
                    (a.on("headers", (e) => {
                      ((i = e.map((e) => e.name)),
                        n && (o = qr.aoa_to_sheet([i])));
                    }),
                      a.on("data", (e) => {
                        void 0 === o
                          ? (o = qr.aoa_to_sheet(e))
                          : qr.sheet_add_aoa(o, e, { origin: -1 });
                      }),
                      a.on("end", () => {
                        if (o) {
                          o["!cols"] = i.map((e) => ({ wch: e.length + 10 }));
                          const n = qr.book_new();
                          (qr.book_append_sheet(n, o, "" === r ? "Data" : r),
                            (function (e, t) {
                              var r = { type: "file" };
                              ((r.file = t),
                                (function (e) {
                                  if (!e.bookType) {
                                    var t = e.file
                                      .slice(e.file.lastIndexOf("."))
                                      .toLowerCase();
                                    (t.match(/^\.[a-z]+$/) &&
                                      (e.bookType = t.slice(1)),
                                      (e.bookType =
                                        {
                                          xls: "biff8",
                                          htm: "html",
                                          slk: "sylk",
                                          socialcalc: "eth",
                                          Sh33tJS: "WTF",
                                        }[e.bookType] || e.bookType));
                                  }
                                })(r),
                                Lr(e, r));
                            })(n, `${t}.xlsx`),
                            e(!0));
                        } else e(!1);
                      }),
                      a.on("abort", () => e(!1)));
                  },
                  { withHeaders: !0, limit: a.toNumber() },
                );
              })
            );
          }
        },
        611: (e, t, r) => {
          "use strict";
          async function n(e) {
            return e
              ? new Promise((t) => {
                  mx.data.update({ entity: e, callback: () => t(!0) });
                })
              : Promise.reject(
                  new Error("EntityToRefresh parameter is required"),
                );
          }
          (r.r(t), r.d(t, { RefreshEntity: () => n }), r(327));
        },
        624: (e, t, r) => {
          "use strict";
          async function n() {
            return mx.session.isGuest()
              ? Promise.resolve(!1)
              : (mx.logout(), Promise.resolve(!0));
          }
          (r.r(t), r.d(t, { SignOut: () => n }), r(327));
        },
        628: () => {},
        630: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { GetStorageItemObject: () => o }), r(628), r(327));
          var n = r(532),
            a = r.n(n);
          async function o(e, t) {
            return e
              ? t
                ? (function (e) {
                    if (navigator && "ReactNative" === navigator.product)
                      return a().getItem(e);
                    if (window) {
                      const t = window.localStorage.getItem(e);
                      return Promise.resolve(t);
                    }
                    return Promise.reject(
                      new Error("No storage API available"),
                    );
                  })(e).then((r) => {
                    if (null === r)
                      return Promise.reject(
                        new Error(`Storage item '${e}' does not exist`),
                      );
                    const n = JSON.parse(r);
                    return (function (e, t) {
                      return ((r = t.guid),
                      new Promise((e, t) => {
                        mx.data.get({
                          guid: r,
                          callback: (t) => e(t),
                          error: (e) => t(e),
                        });
                      })).then(
                        (r) =>
                          r ||
                          (function (e, t) {
                            return new Promise((r, n) => {
                              mx.data.create({
                                entity: e,
                                callback: (e) => {
                                  (Object.keys(t)
                                    .filter((e) => "guid" !== e)
                                    .forEach((r) => {
                                      const n = t[r];
                                      e.set(r, n);
                                    }),
                                    r(e));
                                },
                                error: () =>
                                  n(
                                    new Error(`Could not create '${e}' object`),
                                  ),
                              });
                            });
                          })(e, t),
                      );
                      var r;
                    })(t, n).then((t) => {
                      const r = (n = t)
                        .getAttributes()
                        .reduce((e, t) => ((e[t] = n.get(t)), e), {
                          guid: n.getGuid(),
                        });
                      var n;
                      return (function (e, t) {
                        return navigator && "ReactNative" === navigator.product
                          ? a().setItem(e, t)
                          : window
                            ? (window.localStorage.setItem(e, t),
                              Promise.resolve())
                            : Promise.reject(
                                new Error("No storage API available"),
                              );
                      })(e, JSON.stringify(r)).then(() => t);
                    });
                  })
                : Promise.reject(
                    new Error("Input parameter 'Entity' is required"),
                  )
              : Promise.reject(new Error("Input parameter 'Key' is required"));
          }
        },
        653: () => {},
        677: (e, t, r) => {
          "use strict";
          async function n(e, t) {
            const r = [...e.matchAll(/in nanoflow \"(.+)\"/g)];
            return Promise.resolve(r[t - 1][1]);
          }
          (r.r(t),
            r.d(t, { GetNanoflowFromLatestError: () => n }),
            r(628),
            r(327));
        },
        691: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { GetDeviceInfo: () => s }));
          var n = r(327),
            a = r(212),
            o = r.n(a),
            i = r(944);
          async function s() {
            return Promise.all([
              ((e = "NativeMobileResources.DeviceInfo"),
              new Promise((t, r) => {
                mx.data.create({
                  entity: e,
                  callback: (e) => t(e),
                  error: () =>
                    r(
                      new Error(
                        `Could not create '${e}' object to store device info`,
                      ),
                    ),
                });
              })),
              o().getBatteryLevel(),
              o().getFontScale(),
              o().getFreeDiskStorage(),
              o().getTotalDiskCapacity(),
              o().getTotalMemory(),
              o().getCarrier(),
              o().getManufacturer(),
              o().getUserAgent(),
              o().getUniqueId(),
              o().isEmulator(),
              o().isLandscape(),
            ]).then(async (e) => {
              let [t, r, a, s, l, c, f, h, u, d, m, p] = e;
              const g = (0, i.getLocales)();
              return (
                t.set("ApplicationName", o().getApplicationName()),
                t.set("BatteryLevel", new n.Big(r.toFixed(2))),
                t.set("Brand", o().getBrand()),
                t.set("BuildNumber", String(o().getBuildNumber())),
                t.set("BundleId", o().getBundleId()),
                t.set("Carrier", f),
                t.set("DeviceCountry", (0, i.getCountry)()),
                t.set("DeviceId", o().getDeviceId()),
                t.set(
                  "DeviceLocale",
                  g && g.length > 0 ? g[0].languageTag : "",
                ),
                t.set("FontScale", new n.Big(a.toFixed(2))),
                t.set("FreeDiskStorage", new n.Big(s)),
                t.set("Manufacturer", h),
                t.set("Model", o().getModel()),
                t.set("ReadableVersion", o().getReadableVersion()),
                t.set("SystemName", o().getSystemName()),
                t.set("SystemVersion", o().getSystemVersion()),
                t.set("Timezone", (0, i.getTimeZone)()),
                t.set("TotalDiskCapacity", new n.Big(l)),
                t.set("TotalMemory", new n.Big(c)),
                t.set("UniqueId", d),
                t.set("UserAgent", u),
                t.set("Version", o().getVersion()),
                t.set("Is24Hour", (0, i.uses24HourClock)()),
                t.set("IsEmulator", m),
                t.set("IsTablet", o().isTablet()),
                t.set("IsLandscape", p),
                t.set("HasNotch", o().hasNotch()),
                t
              );
            });
            var e;
          }
        },
        785: (e, t, r) => {
          "use strict";
          async function n(e, t) {
            if (!e || !t)
              return (
                console.warn(
                  "Unable to check version due to empty current (" +
                    e +
                    ") or required (" +
                    t +
                    ") version.",
                ),
                Promise.resolve(!0)
              );
            const r = e.split("."),
              n = t.split(".");
            for (let e = 0; e < 3; e++) {
              if (parseInt(r[e]) > parseInt(n[e])) return Promise.resolve(!0);
              if (parseInt(r[e]) < parseInt(n[e])) return Promise.resolve(!1);
            }
            return Promise.resolve(!0);
          }
          (r.r(t), r.d(t, { JS_ValidateVersie: () => n }), r(628), r(327));
        },
        802: (e, t, r) => {
          "use strict";
          async function n() {
            const e = "Maintenance",
              t = mx.remoteUrl + "rest/status";
            try {
              const r = await fetch(t, { cache: "no-store" });
              return (
                r.ok,
                "true" === (await r.text()).trim() ? e : "Available"
              );
            } catch {
              try {
                return (
                  console.info("try gstatic fetch"),
                  await fetch("https://www.gstatic.com/generate_204", {
                    method: "GET",
                    cache: "no-store",
                  }),
                  console.info("return maintenance"),
                  e
                );
              } catch {
                return "NoInternet";
              }
            }
          }
          (r.r(t), r.d(t, { IsConnectedCheck: () => n }), r(628), r(327));
        },
        807: (e, t, r) => {
          "use strict";
          async function n(e) {
            (document
              .querySelectorAll(".mx-navigationlist-item.active")
              .forEach((e) => {
                e.classList.remove("active");
              }),
              document
                .querySelectorAll(".mx-navigationlist-item")
                .forEach((t) => {
                  const r = t.querySelector("span");
                  r && r.textContent.trim() === e && t.classList.add("active");
                }));
          }
          (r.r(t), r.d(t, { RemoveActiveCssClass: () => n }), r(628), r(327));
        },
        813: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { StorageItemExists: () => o }), r(628), r(327));
          var n = r(532),
            a = r.n(n);
          async function o(e) {
            return e
              ? (function (e) {
                  if (navigator && "ReactNative" === navigator.product)
                    return a().getItem(e);
                  if (window) {
                    const t = window.localStorage.getItem(e);
                    return Promise.resolve(t);
                  }
                  return Promise.reject(new Error("No storage API available"));
                })(e).then((e) => null !== e)
              : Promise.reject(new Error("Input parameter 'Key' is required"));
          }
        },
        823: (e, t, r) => {
          "use strict";
          async function n(e) {
            return e
              ? new Promise((t) => {
                  mx.data.update({ guid: e.getGuid(), callback: () => t(!0) });
                })
              : Promise.reject(
                  new Error("ObjectToRefresh parameter is required"),
                );
          }
          (r.r(t), r.d(t, { RefreshObject: () => n }), r(327));
        },
        842: (e, t, r) => {
          "use strict";
          async function n(e) {
            if (!e)
              return Promise.reject(
                new Error("Input parameter 'Url' is required"),
              );
            if (navigator && "ReactNative" === navigator.product) {
              const t = r(464).Linking;
              return t
                .canOpenURL(e)
                .then((r) => !!r && t.openURL(e).then(() => !0));
            }
            return window && window.cordova
              ? (window.open(e, "_system"), Promise.resolve(!0))
              : window
                ? ((window.location.href = e), Promise.resolve(!0))
                : Promise.resolve(!1);
          }
          (r.r(t), r.d(t, { OpenURL: () => n }), r(327));
        },
        913: (e, t, r) => {
          "use strict";
          async function n(e) {
            window.open(e, "_blank").focus();
          }
          (r.r(t), r.d(t, { OpenUrlNewTab: () => n }), r(628), r(327));
        },
        914: (e, t, r) => {
          "use strict";
          async function n(e) {
            return e
              ? Promise.resolve(e.getGuid())
              : Promise.reject(
                  new Error("Input parameter 'Entity object' is required."),
                );
          }
          (r.r(t), r.d(t, { GetGuid: () => n }), r(628), r(327));
        },
        933: (e, t, r) => {
          "use strict";
          async function n() {
            const e = window.matchMedia("(pointer: coarse)").matches;
            return window.innerWidth <= 1200 && e;
          }
          (r.r(t), r.d(t, { JS_MobileOrTablet: () => n }), r(628), r(327));
        },
        944: () => {},
        962: (e, t, r) => {
          "use strict";
          async function n(e) {
            throw new Error("Error in nanoflow: " + e);
          }
          (r.r(t), r.d(t, { ThrowError: () => n }), r(628), r(327));
        },
        973: (e, t, r) => {
          "use strict";
          (r.r(t), r.d(t, { SignIn: () => a }));
          var n = r(327);
          async function a(e, t, r) {
            return e && t
              ? new Promise((a) => {
                  const o = () => a(new n.Big(200)),
                    i = (e) => a(new n.Big(e.status));
                  void 0 === r
                    ? mx.login(e, t, o, i)
                    : mx.login2(e, t, r, o, i);
                })
              : Promise.resolve(new n.Big(401));
          }
        },
        983: (e, t, r) => {
          "use strict";
          async function n() {
            return location.search + location.hash;
          }
          (r.r(t), r.d(t, { JS_GetReturnURL: () => n }), r(628), r(327));
        },
      },
      a = {};
    function o(e) {
      var t = a[e];
      if (void 0 !== t) return t.exports;
      var r = (a[e] = { exports: {} });
      return (n[e](r, r.exports, o), r.exports);
    }
    ((o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (o.d(t, { a: t }), t);
    }),
      (r = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__),
      (o.t = function (e, n) {
        if ((1 & n && (e = this(e)), 8 & n)) return e;
        if ("object" == typeof e && e) {
          if (4 & n && e.__esModule) return e;
          if (16 & n && "function" == typeof e.then) return e;
        }
        var a = Object.create(null);
        o.r(a);
        var i = {};
        t = t || [null, r({}), r([]), r(r)];
        for (
          var s = 2 & n && e;
          "object" == typeof s && !~t.indexOf(s);
          s = r(s)
        )
          Object.getOwnPropertyNames(s).forEach((t) => (i[t] = () => e[t]));
        return ((i.default = () => e), o.d(a, i), a);
      }),
      (o.d = (e, t) => {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (o.r = (e) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }));
    var i = {};
    return (
      (() => {
        "use strict";
        (o.r(i),
          o.d(i, {
            Atlas_Core$ReloadWithState: () => g,
            DataWidgets$Export_To_Excel: () => T,
            DeviceInsights$GetNanoflowFromLatestError: () => l,
            DeviceInsights$ThrowError: () => s,
            General$JS_ValidateVersie: () => h,
            General$JS_isNativeApp: () => a,
            Inloggen$JS_MobileOrTablet: () => D,
            MaintenanceMode$IsConnectedCheck: () => e,
            NanoflowCommons$GetGuid: () => d,
            NanoflowCommons$GetStorageItemObject: () => n,
            NanoflowCommons$HideProgress: () => b,
            NanoflowCommons$OpenURL: () => x,
            NanoflowCommons$RefreshEntity: () => S,
            NanoflowCommons$RefreshObject: () => A,
            NanoflowCommons$RemoveStorageItem: () => y,
            NanoflowCommons$SetStorageItemObject: () => r,
            NanoflowCommons$ShowConfirmation: () => f,
            NanoflowCommons$ShowProgress: () => v,
            NanoflowCommons$SignIn: () => w,
            NanoflowCommons$SignOut: () => u,
            NanoflowCommons$StorageItemExists: () => t,
            NanoflowCommons$Wait: () => M,
            NativeMobileResources$GetDeviceInfo: () => c,
            NativeObjects$GetObjectsByGUID: () => C,
            OIDC$JS_GetReturnURL: () => E,
            ParkerenWeb$OpenUrlNewTab: () => k,
            RotterdamMapsModule$RemoveActiveCssClass: () => _,
            RotterdamMapsModule$ValidateLayer: () => m,
            RotterdamMapsNative$RemoveActiveCssClass: () => O,
            ToastMessageWeb$Sendtoast: () => p,
          }));
        const e = async () =>
            (await Promise.resolve().then(o.bind(o, 802))).IsConnectedCheck,
          t = async () =>
            (await Promise.resolve().then(o.bind(o, 813))).StorageItemExists,
          r = async () =>
            (await Promise.resolve().then(o.bind(o, 530))).SetStorageItemObject,
          n = async () =>
            (await Promise.resolve().then(o.bind(o, 630))).GetStorageItemObject,
          a = async () =>
            (await Promise.resolve().then(o.bind(o, 529))).JS_isNativeApp,
          s = async () =>
            (await Promise.resolve().then(o.bind(o, 962))).ThrowError,
          l = async () =>
            (await Promise.resolve().then(o.bind(o, 677)))
              .GetNanoflowFromLatestError,
          c = async () =>
            (await Promise.resolve().then(o.bind(o, 691))).GetDeviceInfo,
          f = async () =>
            (await Promise.resolve().then(o.bind(o, 255))).ShowConfirmation,
          h = async () =>
            (await Promise.resolve().then(o.bind(o, 785))).JS_ValidateVersie,
          u = async () =>
            (await Promise.resolve().then(o.bind(o, 624))).SignOut,
          d = async () =>
            (await Promise.resolve().then(o.bind(o, 914))).GetGuid,
          m = async () =>
            (await Promise.resolve().then(o.bind(o, 109))).ValidateLayer,
          p = async () =>
            (await Promise.resolve().then(o.bind(o, 478))).Sendtoast,
          g = async () =>
            (await Promise.resolve().then(o.bind(o, 156))).ReloadWithState,
          v = async () =>
            (await Promise.resolve().then(o.bind(o, 205))).ShowProgress,
          w = async () => (await Promise.resolve().then(o.bind(o, 973))).SignIn,
          b = async () =>
            (await Promise.resolve().then(o.bind(o, 448))).HideProgress,
          y = async () =>
            (await Promise.resolve().then(o.bind(o, 189))).RemoveStorageItem,
          x = async () =>
            (await Promise.resolve().then(o.bind(o, 842))).OpenURL,
          C = async () =>
            (await Promise.resolve().then(o.bind(o, 500))).GetObjectsByGUID,
          S = async () =>
            (await Promise.resolve().then(o.bind(o, 611))).RefreshEntity,
          k = async () =>
            (await Promise.resolve().then(o.bind(o, 913))).OpenUrlNewTab,
          _ = async () =>
            (await Promise.resolve().then(o.bind(o, 807))).RemoveActiveCssClass,
          A = async () =>
            (await Promise.resolve().then(o.bind(o, 823))).RefreshObject,
          E = async () =>
            (await Promise.resolve().then(o.bind(o, 983))).JS_GetReturnURL,
          O = async () =>
            (await Promise.resolve().then(o.bind(o, 50))).RemoveActiveCssClass,
          T = async () =>
            (await Promise.resolve().then(o.bind(o, 543))).Export_To_Excel,
          D = async () =>
            (await Promise.resolve().then(o.bind(o, 933))).JS_MobileOrTablet,
          M = async () => (await Promise.resolve().then(o.bind(o, 90))).Wait;
      })(),
      i
    );
  })());
