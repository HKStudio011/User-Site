function Xc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var gs = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
var qc = gs.exports, zo;
function Yc() {
  return zo || (zo = 1, (function(i) {
    (function(e, t) {
      i.exports = e.document ? t(e, !0) : function(n) {
        if (!n.document)
          throw new Error("jQuery requires a window with a document");
        return t(n);
      };
    })(typeof window < "u" ? window : qc, function(e, t) {
      var n = [], s = Object.getPrototypeOf, o = n.slice, u = n.flat ? function(r) {
        return n.flat.call(r);
      } : function(r) {
        return n.concat.apply([], r);
      }, f = n.push, d = n.indexOf, p = {}, v = p.toString, y = p.hasOwnProperty, S = y.toString, M = S.call(Object), b = {}, C = function(a) {
        return typeof a == "function" && typeof a.nodeType != "number" && typeof a.item != "function";
      }, g = function(a) {
        return a != null && a === a.window;
      }, m = e.document, F = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function D(r, a, c) {
        c = c || m;
        var h, _, x = c.createElement("script");
        if (x.text = r, a)
          for (h in F)
            _ = a[h] || a.getAttribute && a.getAttribute(h), _ && x.setAttribute(h, _);
        c.head.appendChild(x).parentNode.removeChild(x);
      }
      function N(r) {
        return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? p[v.call(r)] || "object" : typeof r;
      }
      var ne = "3.7.1", k = /HTML$/i, l = function(r, a) {
        return new l.fn.init(r, a);
      };
      l.fn = l.prototype = {
        // The current version of jQuery being used
        jquery: ne,
        constructor: l,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return o.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(r) {
          return r == null ? o.call(this) : r < 0 ? this[r + this.length] : this[r];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(r) {
          var a = l.merge(this.constructor(), r);
          return a.prevObject = this, a;
        },
        // Execute a callback for every element in the matched set.
        each: function(r) {
          return l.each(this, r);
        },
        map: function(r) {
          return this.pushStack(l.map(this, function(a, c) {
            return r.call(a, c, a);
          }));
        },
        slice: function() {
          return this.pushStack(o.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(l.grep(this, function(r, a) {
            return (a + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(l.grep(this, function(r, a) {
            return a % 2;
          }));
        },
        eq: function(r) {
          var a = this.length, c = +r + (r < 0 ? a : 0);
          return this.pushStack(c >= 0 && c < a ? [this[c]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: f,
        sort: n.sort,
        splice: n.splice
      }, l.extend = l.fn.extend = function() {
        var r, a, c, h, _, x, E = arguments[0] || {}, U = 1, I = arguments.length, z = !1;
        for (typeof E == "boolean" && (z = E, E = arguments[U] || {}, U++), typeof E != "object" && !C(E) && (E = {}), U === I && (E = this, U--); U < I; U++)
          if ((r = arguments[U]) != null)
            for (a in r)
              h = r[a], !(a === "__proto__" || E === h) && (z && h && (l.isPlainObject(h) || (_ = Array.isArray(h))) ? (c = E[a], _ && !Array.isArray(c) ? x = [] : !_ && !l.isPlainObject(c) ? x = {} : x = c, _ = !1, E[a] = l.extend(z, x, h)) : h !== void 0 && (E[a] = h));
        return E;
      }, l.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(r) {
          throw new Error(r);
        },
        noop: function() {
        },
        isPlainObject: function(r) {
          var a, c;
          return !r || v.call(r) !== "[object Object]" ? !1 : (a = s(r), a ? (c = y.call(a, "constructor") && a.constructor, typeof c == "function" && S.call(c) === M) : !0);
        },
        isEmptyObject: function(r) {
          var a;
          for (a in r)
            return !1;
          return !0;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(r, a, c) {
          D(r, { nonce: a && a.nonce }, c);
        },
        each: function(r, a) {
          var c, h = 0;
          if (Q(r))
            for (c = r.length; h < c && a.call(r[h], h, r[h]) !== !1; h++)
              ;
          else
            for (h in r)
              if (a.call(r[h], h, r[h]) === !1)
                break;
          return r;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(r) {
          var a, c = "", h = 0, _ = r.nodeType;
          if (!_)
            for (; a = r[h++]; )
              c += l.text(a);
          return _ === 1 || _ === 11 ? r.textContent : _ === 9 ? r.documentElement.textContent : _ === 3 || _ === 4 ? r.nodeValue : c;
        },
        // results is for internal usage only
        makeArray: function(r, a) {
          var c = a || [];
          return r != null && (Q(Object(r)) ? l.merge(
            c,
            typeof r == "string" ? [r] : r
          ) : f.call(c, r)), c;
        },
        inArray: function(r, a, c) {
          return a == null ? -1 : d.call(a, r, c);
        },
        isXMLDoc: function(r) {
          var a = r && r.namespaceURI, c = r && (r.ownerDocument || r).documentElement;
          return !k.test(a || c && c.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(r, a) {
          for (var c = +a.length, h = 0, _ = r.length; h < c; h++)
            r[_++] = a[h];
          return r.length = _, r;
        },
        grep: function(r, a, c) {
          for (var h, _ = [], x = 0, E = r.length, U = !c; x < E; x++)
            h = !a(r[x], x), h !== U && _.push(r[x]);
          return _;
        },
        // arg is for internal usage only
        map: function(r, a, c) {
          var h, _, x = 0, E = [];
          if (Q(r))
            for (h = r.length; x < h; x++)
              _ = a(r[x], x, c), _ != null && E.push(_);
          else
            for (x in r)
              _ = a(r[x], x, c), _ != null && E.push(_);
          return u(E);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: b
      }), typeof Symbol == "function" && (l.fn[Symbol.iterator] = n[Symbol.iterator]), l.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(r, a) {
          p["[object " + a + "]"] = a.toLowerCase();
        }
      );
      function Q(r) {
        var a = !!r && "length" in r && r.length, c = N(r);
        return C(r) || g(r) ? !1 : c === "array" || a === 0 || typeof a == "number" && a > 0 && a - 1 in r;
      }
      function fe(r, a) {
        return r.nodeName && r.nodeName.toLowerCase() === a.toLowerCase();
      }
      var T = n.pop, R = n.sort, ae = n.splice, X = "[\\x20\\t\\r\\n\\f]", se = new RegExp(
        "^" + X + "+|((?:^|[^\\\\])(?:\\\\.)*)" + X + "+$",
        "g"
      );
      l.contains = function(r, a) {
        var c = a && a.parentNode;
        return r === c || !!(c && c.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (r.contains ? r.contains(c) : r.compareDocumentPosition && r.compareDocumentPosition(c) & 16));
      };
      var pe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function j(r, a) {
        return a ? r === "\0" ? "�" : r.slice(0, -1) + "\\" + r.charCodeAt(r.length - 1).toString(16) + " " : "\\" + r;
      }
      l.escapeSelector = function(r) {
        return (r + "").replace(pe, j);
      };
      var me = m, ie = f;
      (function() {
        var r, a, c, h, _, x = ie, E, U, I, z, te, le = l.expando, $ = 0, ge = 0, Je = Wr(), xt = Wr(), at = Wr(), Yt = Wr(), Gt = function(P, O) {
          return P === O && (_ = !0), 0;
        }, Pn = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Dn = "(?:\\\\[\\da-fA-F]{1,6}" + X + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", pt = "\\[" + X + "*(" + Dn + ")(?:" + X + // Operator (capture 2)
        "*([*^$|!~]?=)" + X + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Dn + "))|)" + X + "*\\]", yi = ":(" + Dn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + pt + ")*)|.*)\\)|)", Tt = new RegExp(X + "+", "g"), Ot = new RegExp("^" + X + "*," + X + "*"), Mr = new RegExp("^" + X + "*([>+~]|" + X + ")" + X + "*"), Gs = new RegExp(X + "|>"), Ln = new RegExp(yi), Er = new RegExp("^" + Dn + "$"), In = {
          ID: new RegExp("^#(" + Dn + ")"),
          CLASS: new RegExp("^\\.(" + Dn + ")"),
          TAG: new RegExp("^(" + Dn + "|[*])"),
          ATTR: new RegExp("^" + pt),
          PSEUDO: new RegExp("^" + yi),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + X + "*(even|odd|(([+-]|)(\\d*)n|)" + X + "*(?:([+-]|)" + X + "*(\\d+)|))" + X + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Pn + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + X + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + X + "*((?:-\\d)?\\d*)" + X + "*\\)|)(?=[^-]|$)", "i")
        }, ni = /^(?:input|select|textarea|button)$/i, ii = /^h\d$/i, gn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Vs = /[+~]/, Hn = new RegExp("\\\\[\\da-fA-F]{1,6}" + X + "?|\\\\([^\\r\\n\\f])", "g"), kn = function(P, O) {
          var Y = "0x" + P.slice(1) - 65536;
          return O || (Y < 0 ? String.fromCharCode(Y + 65536) : String.fromCharCode(Y >> 10 | 55296, Y & 1023 | 56320));
        }, Bc = function() {
          ri();
        }, zc = qr(
          function(P) {
            return P.disabled === !0 && fe(P, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function Hc() {
          try {
            return E.activeElement;
          } catch {
          }
        }
        try {
          x.apply(
            n = o.call(me.childNodes),
            me.childNodes
          ), n[me.childNodes.length].nodeType;
        } catch {
          x = {
            apply: function(O, Y) {
              ie.apply(O, o.call(Y));
            },
            call: function(O) {
              ie.apply(O, o.call(arguments, 1));
            }
          };
        }
        function Dt(P, O, Y, J) {
          var oe, Se, Re, He, Pe, ct, Ke, et = O && O.ownerDocument, ut = O ? O.nodeType : 9;
          if (Y = Y || [], typeof P != "string" || !P || ut !== 1 && ut !== 9 && ut !== 11)
            return Y;
          if (!J && (ri(O), O = O || E, I)) {
            if (ut !== 11 && (Pe = gn.exec(P)))
              if (oe = Pe[1]) {
                if (ut === 9)
                  if (Re = O.getElementById(oe)) {
                    if (Re.id === oe)
                      return x.call(Y, Re), Y;
                  } else
                    return Y;
                else if (et && (Re = et.getElementById(oe)) && Dt.contains(O, Re) && Re.id === oe)
                  return x.call(Y, Re), Y;
              } else {
                if (Pe[2])
                  return x.apply(Y, O.getElementsByTagName(P)), Y;
                if ((oe = Pe[3]) && O.getElementsByClassName)
                  return x.apply(Y, O.getElementsByClassName(oe)), Y;
              }
            if (!Yt[P + " "] && (!z || !z.test(P))) {
              if (Ke = P, et = O, ut === 1 && (Gs.test(P) || Mr.test(P))) {
                for (et = Vs.test(P) && Ws(O.parentNode) || O, (et != O || !b.scope) && ((He = O.getAttribute("id")) ? He = l.escapeSelector(He) : O.setAttribute("id", He = le)), ct = Tr(P), Se = ct.length; Se--; )
                  ct[Se] = (He ? "#" + He : ":scope") + " " + Xr(ct[Se]);
                Ke = ct.join(",");
              }
              try {
                return x.apply(
                  Y,
                  et.querySelectorAll(Ke)
                ), Y;
              } catch {
                Yt(P, !0);
              } finally {
                He === le && O.removeAttribute("id");
              }
            }
          }
          return Bo(P.replace(se, "$1"), O, Y, J);
        }
        function Wr() {
          var P = [];
          function O(Y, J) {
            return P.push(Y + " ") > a.cacheLength && delete O[P.shift()], O[Y + " "] = J;
          }
          return O;
        }
        function En(P) {
          return P[le] = !0, P;
        }
        function Hi(P) {
          var O = E.createElement("fieldset");
          try {
            return !!P(O);
          } catch {
            return !1;
          } finally {
            O.parentNode && O.parentNode.removeChild(O), O = null;
          }
        }
        function kc(P) {
          return function(O) {
            return fe(O, "input") && O.type === P;
          };
        }
        function Gc(P) {
          return function(O) {
            return (fe(O, "input") || fe(O, "button")) && O.type === P;
          };
        }
        function Fo(P) {
          return function(O) {
            return "form" in O ? O.parentNode && O.disabled === !1 ? "label" in O ? "label" in O.parentNode ? O.parentNode.disabled === P : O.disabled === P : O.isDisabled === P || // Where there is no isDisabled, check manually
            O.isDisabled !== !P && zc(O) === P : O.disabled === P : "label" in O ? O.disabled === P : !1;
          };
        }
        function Mi(P) {
          return En(function(O) {
            return O = +O, En(function(Y, J) {
              for (var oe, Se = P([], Y.length, O), Re = Se.length; Re--; )
                Y[oe = Se[Re]] && (Y[oe] = !(J[oe] = Y[oe]));
            });
          });
        }
        function Ws(P) {
          return P && typeof P.getElementsByTagName < "u" && P;
        }
        function ri(P) {
          var O, Y = P ? P.ownerDocument || P : me;
          return Y == E || Y.nodeType !== 9 || !Y.documentElement || (E = Y, U = E.documentElement, I = !l.isXMLDoc(E), te = U.matches || U.webkitMatchesSelector || U.msMatchesSelector, U.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          me != E && (O = E.defaultView) && O.top !== O && O.addEventListener("unload", Bc), b.getById = Hi(function(J) {
            return U.appendChild(J).id = l.expando, !E.getElementsByName || !E.getElementsByName(l.expando).length;
          }), b.disconnectedMatch = Hi(function(J) {
            return te.call(J, "*");
          }), b.scope = Hi(function() {
            return E.querySelectorAll(":scope");
          }), b.cssHas = Hi(function() {
            try {
              return E.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), b.getById ? (a.filter.ID = function(J) {
            var oe = J.replace(Hn, kn);
            return function(Se) {
              return Se.getAttribute("id") === oe;
            };
          }, a.find.ID = function(J, oe) {
            if (typeof oe.getElementById < "u" && I) {
              var Se = oe.getElementById(J);
              return Se ? [Se] : [];
            }
          }) : (a.filter.ID = function(J) {
            var oe = J.replace(Hn, kn);
            return function(Se) {
              var Re = typeof Se.getAttributeNode < "u" && Se.getAttributeNode("id");
              return Re && Re.value === oe;
            };
          }, a.find.ID = function(J, oe) {
            if (typeof oe.getElementById < "u" && I) {
              var Se, Re, He, Pe = oe.getElementById(J);
              if (Pe) {
                if (Se = Pe.getAttributeNode("id"), Se && Se.value === J)
                  return [Pe];
                for (He = oe.getElementsByName(J), Re = 0; Pe = He[Re++]; )
                  if (Se = Pe.getAttributeNode("id"), Se && Se.value === J)
                    return [Pe];
              }
              return [];
            }
          }), a.find.TAG = function(J, oe) {
            return typeof oe.getElementsByTagName < "u" ? oe.getElementsByTagName(J) : oe.querySelectorAll(J);
          }, a.find.CLASS = function(J, oe) {
            if (typeof oe.getElementsByClassName < "u" && I)
              return oe.getElementsByClassName(J);
          }, z = [], Hi(function(J) {
            var oe;
            U.appendChild(J).innerHTML = "<a id='" + le + "' href='' disabled='disabled'></a><select id='" + le + "-\r\\' disabled='disabled'><option selected=''></option></select>", J.querySelectorAll("[selected]").length || z.push("\\[" + X + "*(?:value|" + Pn + ")"), J.querySelectorAll("[id~=" + le + "-]").length || z.push("~="), J.querySelectorAll("a#" + le + "+*").length || z.push(".#.+[+~]"), J.querySelectorAll(":checked").length || z.push(":checked"), oe = E.createElement("input"), oe.setAttribute("type", "hidden"), J.appendChild(oe).setAttribute("name", "D"), U.appendChild(J).disabled = !0, J.querySelectorAll(":disabled").length !== 2 && z.push(":enabled", ":disabled"), oe = E.createElement("input"), oe.setAttribute("name", ""), J.appendChild(oe), J.querySelectorAll("[name='']").length || z.push("\\[" + X + "*name" + X + "*=" + X + `*(?:''|"")`);
          }), b.cssHas || z.push(":has"), z = z.length && new RegExp(z.join("|")), Gt = function(J, oe) {
            if (J === oe)
              return _ = !0, 0;
            var Se = !J.compareDocumentPosition - !oe.compareDocumentPosition;
            return Se || (Se = (J.ownerDocument || J) == (oe.ownerDocument || oe) ? J.compareDocumentPosition(oe) : (
              // Otherwise we know they are disconnected
              1
            ), Se & 1 || !b.sortDetached && oe.compareDocumentPosition(J) === Se ? J === E || J.ownerDocument == me && Dt.contains(me, J) ? -1 : oe === E || oe.ownerDocument == me && Dt.contains(me, oe) ? 1 : h ? d.call(h, J) - d.call(h, oe) : 0 : Se & 4 ? -1 : 1);
          }), E;
        }
        Dt.matches = function(P, O) {
          return Dt(P, null, null, O);
        }, Dt.matchesSelector = function(P, O) {
          if (ri(P), I && !Yt[O + " "] && (!z || !z.test(O)))
            try {
              var Y = te.call(P, O);
              if (Y || b.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              P.document && P.document.nodeType !== 11)
                return Y;
            } catch {
              Yt(O, !0);
            }
          return Dt(O, E, null, [P]).length > 0;
        }, Dt.contains = function(P, O) {
          return (P.ownerDocument || P) != E && ri(P), l.contains(P, O);
        }, Dt.attr = function(P, O) {
          (P.ownerDocument || P) != E && ri(P);
          var Y = a.attrHandle[O.toLowerCase()], J = Y && y.call(a.attrHandle, O.toLowerCase()) ? Y(P, O, !I) : void 0;
          return J !== void 0 ? J : P.getAttribute(O);
        }, Dt.error = function(P) {
          throw new Error("Syntax error, unrecognized expression: " + P);
        }, l.uniqueSort = function(P) {
          var O, Y = [], J = 0, oe = 0;
          if (_ = !b.sortStable, h = !b.sortStable && o.call(P, 0), R.call(P, Gt), _) {
            for (; O = P[oe++]; )
              O === P[oe] && (J = Y.push(oe));
            for (; J--; )
              ae.call(P, Y[J], 1);
          }
          return h = null, P;
        }, l.fn.uniqueSort = function() {
          return this.pushStack(l.uniqueSort(o.apply(this)));
        }, a = l.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: En,
          match: In,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(P) {
              return P[1] = P[1].replace(Hn, kn), P[3] = (P[3] || P[4] || P[5] || "").replace(Hn, kn), P[2] === "~=" && (P[3] = " " + P[3] + " "), P.slice(0, 4);
            },
            CHILD: function(P) {
              return P[1] = P[1].toLowerCase(), P[1].slice(0, 3) === "nth" ? (P[3] || Dt.error(P[0]), P[4] = +(P[4] ? P[5] + (P[6] || 1) : 2 * (P[3] === "even" || P[3] === "odd")), P[5] = +(P[7] + P[8] || P[3] === "odd")) : P[3] && Dt.error(P[0]), P;
            },
            PSEUDO: function(P) {
              var O, Y = !P[6] && P[2];
              return In.CHILD.test(P[0]) ? null : (P[3] ? P[2] = P[4] || P[5] || "" : Y && Ln.test(Y) && // Get excess from tokenize (recursively)
              (O = Tr(Y, !0)) && // advance to the next closing parenthesis
              (O = Y.indexOf(")", Y.length - O) - Y.length) && (P[0] = P[0].slice(0, O), P[2] = Y.slice(0, O)), P.slice(0, 3));
            }
          },
          filter: {
            TAG: function(P) {
              var O = P.replace(Hn, kn).toLowerCase();
              return P === "*" ? function() {
                return !0;
              } : function(Y) {
                return fe(Y, O);
              };
            },
            CLASS: function(P) {
              var O = Je[P + " "];
              return O || (O = new RegExp("(^|" + X + ")" + P + "(" + X + "|$)")) && Je(P, function(Y) {
                return O.test(
                  typeof Y.className == "string" && Y.className || typeof Y.getAttribute < "u" && Y.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(P, O, Y) {
              return function(J) {
                var oe = Dt.attr(J, P);
                return oe == null ? O === "!=" : O ? (oe += "", O === "=" ? oe === Y : O === "!=" ? oe !== Y : O === "^=" ? Y && oe.indexOf(Y) === 0 : O === "*=" ? Y && oe.indexOf(Y) > -1 : O === "$=" ? Y && oe.slice(-Y.length) === Y : O === "~=" ? (" " + oe.replace(Tt, " ") + " ").indexOf(Y) > -1 : O === "|=" ? oe === Y || oe.slice(0, Y.length + 1) === Y + "-" : !1) : !0;
              };
            },
            CHILD: function(P, O, Y, J, oe) {
              var Se = P.slice(0, 3) !== "nth", Re = P.slice(-4) !== "last", He = O === "of-type";
              return J === 1 && oe === 0 ? (
                // Shortcut for :nth-*(n)
                function(Pe) {
                  return !!Pe.parentNode;
                }
              ) : function(Pe, ct, Ke) {
                var et, ut, We, It, on, Zt = Se !== Re ? "nextSibling" : "previousSibling", _n = Pe.parentNode, Un = He && Pe.nodeName.toLowerCase(), ki = !Ke && !He, nn = !1;
                if (_n) {
                  if (Se) {
                    for (; Zt; ) {
                      for (We = Pe; We = We[Zt]; )
                        if (He ? fe(We, Un) : We.nodeType === 1)
                          return !1;
                      on = Zt = P === "only" && !on && "nextSibling";
                    }
                    return !0;
                  }
                  if (on = [Re ? _n.firstChild : _n.lastChild], Re && ki) {
                    for (ut = _n[le] || (_n[le] = {}), et = ut[P] || [], It = et[0] === $ && et[1], nn = It && et[2], We = It && _n.childNodes[It]; We = ++It && We && We[Zt] || // Fallback to seeking `elem` from the start
                    (nn = It = 0) || on.pop(); )
                      if (We.nodeType === 1 && ++nn && We === Pe) {
                        ut[P] = [$, It, nn];
                        break;
                      }
                  } else if (ki && (ut = Pe[le] || (Pe[le] = {}), et = ut[P] || [], It = et[0] === $ && et[1], nn = It), nn === !1)
                    for (; (We = ++It && We && We[Zt] || (nn = It = 0) || on.pop()) && !((He ? fe(We, Un) : We.nodeType === 1) && ++nn && (ki && (ut = We[le] || (We[le] = {}), ut[P] = [$, nn]), We === Pe)); )
                      ;
                  return nn -= oe, nn === J || nn % J === 0 && nn / J >= 0;
                }
              };
            },
            PSEUDO: function(P, O) {
              var Y, J = a.pseudos[P] || a.setFilters[P.toLowerCase()] || Dt.error("unsupported pseudo: " + P);
              return J[le] ? J(O) : J.length > 1 ? (Y = [P, P, "", O], a.setFilters.hasOwnProperty(P.toLowerCase()) ? En(function(oe, Se) {
                for (var Re, He = J(oe, O), Pe = He.length; Pe--; )
                  Re = d.call(oe, He[Pe]), oe[Re] = !(Se[Re] = He[Pe]);
              }) : function(oe) {
                return J(oe, 0, Y);
              }) : J;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: En(function(P) {
              var O = [], Y = [], J = js(P.replace(se, "$1"));
              return J[le] ? En(function(oe, Se, Re, He) {
                for (var Pe, ct = J(oe, null, He, []), Ke = oe.length; Ke--; )
                  (Pe = ct[Ke]) && (oe[Ke] = !(Se[Ke] = Pe));
              }) : function(oe, Se, Re) {
                return O[0] = oe, J(O, null, Re, Y), O[0] = null, !Y.pop();
              };
            }),
            has: En(function(P) {
              return function(O) {
                return Dt(P, O).length > 0;
              };
            }),
            contains: En(function(P) {
              return P = P.replace(Hn, kn), function(O) {
                return (O.textContent || l.text(O)).indexOf(P) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: En(function(P) {
              return Er.test(P || "") || Dt.error("unsupported lang: " + P), P = P.replace(Hn, kn).toLowerCase(), function(O) {
                var Y;
                do
                  if (Y = I ? O.lang : O.getAttribute("xml:lang") || O.getAttribute("lang"))
                    return Y = Y.toLowerCase(), Y === P || Y.indexOf(P + "-") === 0;
                while ((O = O.parentNode) && O.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(P) {
              var O = e.location && e.location.hash;
              return O && O.slice(1) === P.id;
            },
            root: function(P) {
              return P === U;
            },
            focus: function(P) {
              return P === Hc() && E.hasFocus() && !!(P.type || P.href || ~P.tabIndex);
            },
            // Boolean properties
            enabled: Fo(!1),
            disabled: Fo(!0),
            checked: function(P) {
              return fe(P, "input") && !!P.checked || fe(P, "option") && !!P.selected;
            },
            selected: function(P) {
              return P.parentNode && P.parentNode.selectedIndex, P.selected === !0;
            },
            // Contents
            empty: function(P) {
              for (P = P.firstChild; P; P = P.nextSibling)
                if (P.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(P) {
              return !a.pseudos.empty(P);
            },
            // Element/input types
            header: function(P) {
              return ii.test(P.nodeName);
            },
            input: function(P) {
              return ni.test(P.nodeName);
            },
            button: function(P) {
              return fe(P, "input") && P.type === "button" || fe(P, "button");
            },
            text: function(P) {
              var O;
              return fe(P, "input") && P.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((O = P.getAttribute("type")) == null || O.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Mi(function() {
              return [0];
            }),
            last: Mi(function(P, O) {
              return [O - 1];
            }),
            eq: Mi(function(P, O, Y) {
              return [Y < 0 ? Y + O : Y];
            }),
            even: Mi(function(P, O) {
              for (var Y = 0; Y < O; Y += 2)
                P.push(Y);
              return P;
            }),
            odd: Mi(function(P, O) {
              for (var Y = 1; Y < O; Y += 2)
                P.push(Y);
              return P;
            }),
            lt: Mi(function(P, O, Y) {
              var J;
              for (Y < 0 ? J = Y + O : Y > O ? J = O : J = Y; --J >= 0; )
                P.push(J);
              return P;
            }),
            gt: Mi(function(P, O, Y) {
              for (var J = Y < 0 ? Y + O : Y; ++J < O; )
                P.push(J);
              return P;
            })
          }
        }, a.pseudos.nth = a.pseudos.eq;
        for (r in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          a.pseudos[r] = kc(r);
        for (r in { submit: !0, reset: !0 })
          a.pseudos[r] = Gc(r);
        function Oo() {
        }
        Oo.prototype = a.filters = a.pseudos, a.setFilters = new Oo();
        function Tr(P, O) {
          var Y, J, oe, Se, Re, He, Pe, ct = xt[P + " "];
          if (ct)
            return O ? 0 : ct.slice(0);
          for (Re = P, He = [], Pe = a.preFilter; Re; ) {
            (!Y || (J = Ot.exec(Re))) && (J && (Re = Re.slice(J[0].length) || Re), He.push(oe = [])), Y = !1, (J = Mr.exec(Re)) && (Y = J.shift(), oe.push({
              value: Y,
              // Cast descendant combinators to space
              type: J[0].replace(se, " ")
            }), Re = Re.slice(Y.length));
            for (Se in a.filter)
              (J = In[Se].exec(Re)) && (!Pe[Se] || (J = Pe[Se](J))) && (Y = J.shift(), oe.push({
                value: Y,
                type: Se,
                matches: J
              }), Re = Re.slice(Y.length));
            if (!Y)
              break;
          }
          return O ? Re.length : Re ? Dt.error(P) : (
            // Cache the tokens
            xt(P, He).slice(0)
          );
        }
        function Xr(P) {
          for (var O = 0, Y = P.length, J = ""; O < Y; O++)
            J += P[O].value;
          return J;
        }
        function qr(P, O, Y) {
          var J = O.dir, oe = O.next, Se = oe || J, Re = Y && Se === "parentNode", He = ge++;
          return O.first ? (
            // Check against closest ancestor/preceding element
            function(Pe, ct, Ke) {
              for (; Pe = Pe[J]; )
                if (Pe.nodeType === 1 || Re)
                  return P(Pe, ct, Ke);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(Pe, ct, Ke) {
              var et, ut, We = [$, He];
              if (Ke) {
                for (; Pe = Pe[J]; )
                  if ((Pe.nodeType === 1 || Re) && P(Pe, ct, Ke))
                    return !0;
              } else
                for (; Pe = Pe[J]; )
                  if (Pe.nodeType === 1 || Re)
                    if (ut = Pe[le] || (Pe[le] = {}), oe && fe(Pe, oe))
                      Pe = Pe[J] || Pe;
                    else {
                      if ((et = ut[Se]) && et[0] === $ && et[1] === He)
                        return We[2] = et[2];
                      if (ut[Se] = We, We[2] = P(Pe, ct, Ke))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function Xs(P) {
          return P.length > 1 ? function(O, Y, J) {
            for (var oe = P.length; oe--; )
              if (!P[oe](O, Y, J))
                return !1;
            return !0;
          } : P[0];
        }
        function Vc(P, O, Y) {
          for (var J = 0, oe = O.length; J < oe; J++)
            Dt(P, O[J], Y);
          return Y;
        }
        function Yr(P, O, Y, J, oe) {
          for (var Se, Re = [], He = 0, Pe = P.length, ct = O != null; He < Pe; He++)
            (Se = P[He]) && (!Y || Y(Se, J, oe)) && (Re.push(Se), ct && O.push(He));
          return Re;
        }
        function qs(P, O, Y, J, oe, Se) {
          return J && !J[le] && (J = qs(J)), oe && !oe[le] && (oe = qs(oe, Se)), En(function(Re, He, Pe, ct) {
            var Ke, et, ut, We, It = [], on = [], Zt = He.length, _n = Re || Vc(
              O || "*",
              Pe.nodeType ? [Pe] : Pe,
              []
            ), Un = P && (Re || !O) ? Yr(_n, It, P, Pe, ct) : _n;
            if (Y ? (We = oe || (Re ? P : Zt || J) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              He
            ), Y(Un, We, Pe, ct)) : We = Un, J)
              for (Ke = Yr(We, on), J(Ke, [], Pe, ct), et = Ke.length; et--; )
                (ut = Ke[et]) && (We[on[et]] = !(Un[on[et]] = ut));
            if (Re) {
              if (oe || P) {
                if (oe) {
                  for (Ke = [], et = We.length; et--; )
                    (ut = We[et]) && Ke.push(Un[et] = ut);
                  oe(null, We = [], Ke, ct);
                }
                for (et = We.length; et--; )
                  (ut = We[et]) && (Ke = oe ? d.call(Re, ut) : It[et]) > -1 && (Re[Ke] = !(He[Ke] = ut));
              }
            } else
              We = Yr(
                We === He ? We.splice(Zt, We.length) : We
              ), oe ? oe(null, He, We, ct) : x.apply(He, We);
          });
        }
        function Ys(P) {
          for (var O, Y, J, oe = P.length, Se = a.relative[P[0].type], Re = Se || a.relative[" "], He = Se ? 1 : 0, Pe = qr(function(et) {
            return et === O;
          }, Re, !0), ct = qr(function(et) {
            return d.call(O, et) > -1;
          }, Re, !0), Ke = [function(et, ut, We) {
            var It = !Se && (We || ut != c) || ((O = ut).nodeType ? Pe(et, ut, We) : ct(et, ut, We));
            return O = null, It;
          }]; He < oe; He++)
            if (Y = a.relative[P[He].type])
              Ke = [qr(Xs(Ke), Y)];
            else {
              if (Y = a.filter[P[He].type].apply(null, P[He].matches), Y[le]) {
                for (J = ++He; J < oe && !a.relative[P[J].type]; J++)
                  ;
                return qs(
                  He > 1 && Xs(Ke),
                  He > 1 && Xr(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    P.slice(0, He - 1).concat({ value: P[He - 2].type === " " ? "*" : "" })
                  ).replace(se, "$1"),
                  Y,
                  He < J && Ys(P.slice(He, J)),
                  J < oe && Ys(P = P.slice(J)),
                  J < oe && Xr(P)
                );
              }
              Ke.push(Y);
            }
          return Xs(Ke);
        }
        function Wc(P, O) {
          var Y = O.length > 0, J = P.length > 0, oe = function(Se, Re, He, Pe, ct) {
            var Ke, et, ut, We = 0, It = "0", on = Se && [], Zt = [], _n = c, Un = Se || J && a.find.TAG("*", ct), ki = $ += _n == null ? 1 : Math.random() || 0.1, nn = Un.length;
            for (ct && (c = Re == E || Re || ct); It !== nn && (Ke = Un[It]) != null; It++) {
              if (J && Ke) {
                for (et = 0, !Re && Ke.ownerDocument != E && (ri(Ke), He = !I); ut = P[et++]; )
                  if (ut(Ke, Re || E, He)) {
                    x.call(Pe, Ke);
                    break;
                  }
                ct && ($ = ki);
              }
              Y && ((Ke = !ut && Ke) && We--, Se && on.push(Ke));
            }
            if (We += It, Y && It !== We) {
              for (et = 0; ut = O[et++]; )
                ut(on, Zt, Re, He);
              if (Se) {
                if (We > 0)
                  for (; It--; )
                    on[It] || Zt[It] || (Zt[It] = T.call(Pe));
                Zt = Yr(Zt);
              }
              x.apply(Pe, Zt), ct && !Se && Zt.length > 0 && We + O.length > 1 && l.uniqueSort(Pe);
            }
            return ct && ($ = ki, c = _n), on;
          };
          return Y ? En(oe) : oe;
        }
        function js(P, O) {
          var Y, J = [], oe = [], Se = at[P + " "];
          if (!Se) {
            for (O || (O = Tr(P)), Y = O.length; Y--; )
              Se = Ys(O[Y]), Se[le] ? J.push(Se) : oe.push(Se);
            Se = at(
              P,
              Wc(oe, J)
            ), Se.selector = P;
          }
          return Se;
        }
        function Bo(P, O, Y, J) {
          var oe, Se, Re, He, Pe, ct = typeof P == "function" && P, Ke = !J && Tr(P = ct.selector || P);
          if (Y = Y || [], Ke.length === 1) {
            if (Se = Ke[0] = Ke[0].slice(0), Se.length > 2 && (Re = Se[0]).type === "ID" && O.nodeType === 9 && I && a.relative[Se[1].type]) {
              if (O = (a.find.ID(
                Re.matches[0].replace(Hn, kn),
                O
              ) || [])[0], O)
                ct && (O = O.parentNode);
              else return Y;
              P = P.slice(Se.shift().value.length);
            }
            for (oe = In.needsContext.test(P) ? 0 : Se.length; oe-- && (Re = Se[oe], !a.relative[He = Re.type]); )
              if ((Pe = a.find[He]) && (J = Pe(
                Re.matches[0].replace(Hn, kn),
                Vs.test(Se[0].type) && Ws(O.parentNode) || O
              ))) {
                if (Se.splice(oe, 1), P = J.length && Xr(Se), !P)
                  return x.apply(Y, J), Y;
                break;
              }
          }
          return (ct || js(P, Ke))(
            J,
            O,
            !I,
            Y,
            !O || Vs.test(P) && Ws(O.parentNode) || O
          ), Y;
        }
        b.sortStable = le.split("").sort(Gt).join("") === le, ri(), b.sortDetached = Hi(function(P) {
          return P.compareDocumentPosition(E.createElement("fieldset")) & 1;
        }), l.find = Dt, l.expr[":"] = l.expr.pseudos, l.unique = l.uniqueSort, Dt.compile = js, Dt.select = Bo, Dt.setDocument = ri, Dt.tokenize = Tr, Dt.escape = l.escapeSelector, Dt.getText = l.text, Dt.isXML = l.isXMLDoc, Dt.selectors = l.expr, Dt.support = l.support, Dt.uniqueSort = l.uniqueSort;
      })();
      var be = function(r, a, c) {
        for (var h = [], _ = c !== void 0; (r = r[a]) && r.nodeType !== 9; )
          if (r.nodeType === 1) {
            if (_ && l(r).is(c))
              break;
            h.push(r);
          }
        return h;
      }, Ae = function(r, a) {
        for (var c = []; r; r = r.nextSibling)
          r.nodeType === 1 && r !== a && c.push(r);
        return c;
      }, Fe = l.expr.match.needsContext, _t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function St(r, a, c) {
        return C(a) ? l.grep(r, function(h, _) {
          return !!a.call(h, _, h) !== c;
        }) : a.nodeType ? l.grep(r, function(h) {
          return h === a !== c;
        }) : typeof a != "string" ? l.grep(r, function(h) {
          return d.call(a, h) > -1 !== c;
        }) : l.filter(a, r, c);
      }
      l.filter = function(r, a, c) {
        var h = a[0];
        return c && (r = ":not(" + r + ")"), a.length === 1 && h.nodeType === 1 ? l.find.matchesSelector(h, r) ? [h] : [] : l.find.matches(r, l.grep(a, function(_) {
          return _.nodeType === 1;
        }));
      }, l.fn.extend({
        find: function(r) {
          var a, c, h = this.length, _ = this;
          if (typeof r != "string")
            return this.pushStack(l(r).filter(function() {
              for (a = 0; a < h; a++)
                if (l.contains(_[a], this))
                  return !0;
            }));
          for (c = this.pushStack([]), a = 0; a < h; a++)
            l.find(r, _[a], c);
          return h > 1 ? l.uniqueSort(c) : c;
        },
        filter: function(r) {
          return this.pushStack(St(this, r || [], !1));
        },
        not: function(r) {
          return this.pushStack(St(this, r || [], !0));
        },
        is: function(r) {
          return !!St(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof r == "string" && Fe.test(r) ? l(r) : r || [],
            !1
          ).length;
        }
      });
      var ue, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Be = l.fn.init = function(r, a, c) {
        var h, _;
        if (!r)
          return this;
        if (c = c || ue, typeof r == "string")
          if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? h = [null, r, null] : h = _e.exec(r), h && (h[1] || !a))
            if (h[1]) {
              if (a = a instanceof l ? a[0] : a, l.merge(this, l.parseHTML(
                h[1],
                a && a.nodeType ? a.ownerDocument || a : m,
                !0
              )), _t.test(h[1]) && l.isPlainObject(a))
                for (h in a)
                  C(this[h]) ? this[h](a[h]) : this.attr(h, a[h]);
              return this;
            } else
              return _ = m.getElementById(h[2]), _ && (this[0] = _, this.length = 1), this;
          else return !a || a.jquery ? (a || c).find(r) : this.constructor(a).find(r);
        else {
          if (r.nodeType)
            return this[0] = r, this.length = 1, this;
          if (C(r))
            return c.ready !== void 0 ? c.ready(r) : (
              // Execute immediately if ready is not present
              r(l)
            );
        }
        return l.makeArray(r, this);
      };
      Be.prototype = l.fn, ue = l(m);
      var Ie = /^(?:parents|prev(?:Until|All))/, tt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
      l.fn.extend({
        has: function(r) {
          var a = l(r, this), c = a.length;
          return this.filter(function() {
            for (var h = 0; h < c; h++)
              if (l.contains(this, a[h]))
                return !0;
          });
        },
        closest: function(r, a) {
          var c, h = 0, _ = this.length, x = [], E = typeof r != "string" && l(r);
          if (!Fe.test(r)) {
            for (; h < _; h++)
              for (c = this[h]; c && c !== a; c = c.parentNode)
                if (c.nodeType < 11 && (E ? E.index(c) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  c.nodeType === 1 && l.find.matchesSelector(c, r)
                ))) {
                  x.push(c);
                  break;
                }
          }
          return this.pushStack(x.length > 1 ? l.uniqueSort(x) : x);
        },
        // Determine the position of an element within the set
        index: function(r) {
          return r ? typeof r == "string" ? d.call(l(r), this[0]) : d.call(
            this,
            // If it receives a jQuery object, the first element is used
            r.jquery ? r[0] : r
          ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(r, a) {
          return this.pushStack(
            l.uniqueSort(
              l.merge(this.get(), l(r, a))
            )
          );
        },
        addBack: function(r) {
          return this.add(
            r == null ? this.prevObject : this.prevObject.filter(r)
          );
        }
      });
      function je(r, a) {
        for (; (r = r[a]) && r.nodeType !== 1; )
          ;
        return r;
      }
      l.each({
        parent: function(r) {
          var a = r.parentNode;
          return a && a.nodeType !== 11 ? a : null;
        },
        parents: function(r) {
          return be(r, "parentNode");
        },
        parentsUntil: function(r, a, c) {
          return be(r, "parentNode", c);
        },
        next: function(r) {
          return je(r, "nextSibling");
        },
        prev: function(r) {
          return je(r, "previousSibling");
        },
        nextAll: function(r) {
          return be(r, "nextSibling");
        },
        prevAll: function(r) {
          return be(r, "previousSibling");
        },
        nextUntil: function(r, a, c) {
          return be(r, "nextSibling", c);
        },
        prevUntil: function(r, a, c) {
          return be(r, "previousSibling", c);
        },
        siblings: function(r) {
          return Ae((r.parentNode || {}).firstChild, r);
        },
        children: function(r) {
          return Ae(r.firstChild);
        },
        contents: function(r) {
          return r.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          s(r.contentDocument) ? r.contentDocument : (fe(r, "template") && (r = r.content || r), l.merge([], r.childNodes));
        }
      }, function(r, a) {
        l.fn[r] = function(c, h) {
          var _ = l.map(this, a, c);
          return r.slice(-5) !== "Until" && (h = c), h && typeof h == "string" && (_ = l.filter(h, _)), this.length > 1 && (tt[r] || l.uniqueSort(_), Ie.test(r) && _.reverse()), this.pushStack(_);
        };
      });
      var nt = /[^\x20\t\r\n\f]+/g;
      function Ct(r) {
        var a = {};
        return l.each(r.match(nt) || [], function(c, h) {
          a[h] = !0;
        }), a;
      }
      l.Callbacks = function(r) {
        r = typeof r == "string" ? Ct(r) : l.extend({}, r);
        var a, c, h, _, x = [], E = [], U = -1, I = function() {
          for (_ = _ || r.once, h = a = !0; E.length; U = -1)
            for (c = E.shift(); ++U < x.length; )
              x[U].apply(c[0], c[1]) === !1 && r.stopOnFalse && (U = x.length, c = !1);
          r.memory || (c = !1), a = !1, _ && (c ? x = [] : x = "");
        }, z = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return x && (c && !a && (U = x.length - 1, E.push(c)), (function te(le) {
              l.each(le, function($, ge) {
                C(ge) ? (!r.unique || !z.has(ge)) && x.push(ge) : ge && ge.length && N(ge) !== "string" && te(ge);
              });
            })(arguments), c && !a && I()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return l.each(arguments, function(te, le) {
              for (var $; ($ = l.inArray(le, x, $)) > -1; )
                x.splice($, 1), $ <= U && U--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(te) {
            return te ? l.inArray(te, x) > -1 : x.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            return x && (x = []), this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            return _ = E = [], x = c = "", this;
          },
          disabled: function() {
            return !x;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            return _ = E = [], !c && !a && (x = c = ""), this;
          },
          locked: function() {
            return !!_;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(te, le) {
            return _ || (le = le || [], le = [te, le.slice ? le.slice() : le], E.push(le), a || I()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return z.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!h;
          }
        };
        return z;
      };
      function st(r) {
        return r;
      }
      function B(r) {
        throw r;
      }
      function jt(r, a, c, h) {
        var _;
        try {
          r && C(_ = r.promise) ? _.call(r).done(a).fail(c) : r && C(_ = r.then) ? _.call(r, a, c) : a.apply(void 0, [r].slice(h));
        } catch (x) {
          c.apply(void 0, [x]);
        }
      }
      l.extend({
        Deferred: function(r) {
          var a = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              l.Callbacks("memory"),
              l.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              l.Callbacks("once memory"),
              l.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              l.Callbacks("once memory"),
              l.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], c = "pending", h = {
            state: function() {
              return c;
            },
            always: function() {
              return _.done(arguments).fail(arguments), this;
            },
            catch: function(x) {
              return h.then(null, x);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var x = arguments;
              return l.Deferred(function(E) {
                l.each(a, function(U, I) {
                  var z = C(x[I[4]]) && x[I[4]];
                  _[I[1]](function() {
                    var te = z && z.apply(this, arguments);
                    te && C(te.promise) ? te.promise().progress(E.notify).done(E.resolve).fail(E.reject) : E[I[0] + "With"](
                      this,
                      z ? [te] : arguments
                    );
                  });
                }), x = null;
              }).promise();
            },
            then: function(x, E, U) {
              var I = 0;
              function z(te, le, $, ge) {
                return function() {
                  var Je = this, xt = arguments, at = function() {
                    var Gt, Pn;
                    if (!(te < I)) {
                      if (Gt = $.apply(Je, xt), Gt === le.promise())
                        throw new TypeError("Thenable self-resolution");
                      Pn = Gt && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof Gt == "object" || typeof Gt == "function") && Gt.then, C(Pn) ? ge ? Pn.call(
                        Gt,
                        z(I, le, st, ge),
                        z(I, le, B, ge)
                      ) : (I++, Pn.call(
                        Gt,
                        z(I, le, st, ge),
                        z(I, le, B, ge),
                        z(
                          I,
                          le,
                          st,
                          le.notifyWith
                        )
                      )) : ($ !== st && (Je = void 0, xt = [Gt]), (ge || le.resolveWith)(Je, xt));
                    }
                  }, Yt = ge ? at : function() {
                    try {
                      at();
                    } catch (Gt) {
                      l.Deferred.exceptionHook && l.Deferred.exceptionHook(
                        Gt,
                        Yt.error
                      ), te + 1 >= I && ($ !== B && (Je = void 0, xt = [Gt]), le.rejectWith(Je, xt));
                    }
                  };
                  te ? Yt() : (l.Deferred.getErrorHook ? Yt.error = l.Deferred.getErrorHook() : l.Deferred.getStackHook && (Yt.error = l.Deferred.getStackHook()), e.setTimeout(Yt));
                };
              }
              return l.Deferred(function(te) {
                a[0][3].add(
                  z(
                    0,
                    te,
                    C(U) ? U : st,
                    te.notifyWith
                  )
                ), a[1][3].add(
                  z(
                    0,
                    te,
                    C(x) ? x : st
                  )
                ), a[2][3].add(
                  z(
                    0,
                    te,
                    C(E) ? E : B
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(x) {
              return x != null ? l.extend(x, h) : h;
            }
          }, _ = {};
          return l.each(a, function(x, E) {
            var U = E[2], I = E[5];
            h[E[1]] = U.add, I && U.add(
              function() {
                c = I;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              a[3 - x][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              a[3 - x][3].disable,
              // progress_callbacks.lock
              a[0][2].lock,
              // progress_handlers.lock
              a[0][3].lock
            ), U.add(E[3].fire), _[E[0]] = function() {
              return _[E[0] + "With"](this === _ ? void 0 : this, arguments), this;
            }, _[E[0] + "With"] = U.fireWith;
          }), h.promise(_), r && r.call(_, _), _;
        },
        // Deferred helper
        when: function(r) {
          var a = arguments.length, c = a, h = Array(c), _ = o.call(arguments), x = l.Deferred(), E = function(U) {
            return function(I) {
              h[U] = this, _[U] = arguments.length > 1 ? o.call(arguments) : I, --a || x.resolveWith(h, _);
            };
          };
          if (a <= 1 && (jt(
            r,
            x.done(E(c)).resolve,
            x.reject,
            !a
          ), x.state() === "pending" || C(_[c] && _[c].then)))
            return x.then();
          for (; c--; )
            jt(_[c], E(c), x.reject);
          return x.promise();
        }
      });
      var ft = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      l.Deferred.exceptionHook = function(r, a) {
        e.console && e.console.warn && r && ft.test(r.name) && e.console.warn(
          "jQuery.Deferred exception: " + r.message,
          r.stack,
          a
        );
      }, l.readyException = function(r) {
        e.setTimeout(function() {
          throw r;
        });
      };
      var ht = l.Deferred();
      l.fn.ready = function(r) {
        return ht.then(r).catch(function(a) {
          l.readyException(a);
        }), this;
      }, l.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(r) {
          (r === !0 ? --l.readyWait : l.isReady) || (l.isReady = !0, !(r !== !0 && --l.readyWait > 0) && ht.resolveWith(m, [l]));
        }
      }), l.ready.then = ht.then;
      function qe() {
        m.removeEventListener("DOMContentLoaded", qe), e.removeEventListener("load", qe), l.ready();
      }
      m.readyState === "complete" || m.readyState !== "loading" && !m.documentElement.doScroll ? e.setTimeout(l.ready) : (m.addEventListener("DOMContentLoaded", qe), e.addEventListener("load", qe));
      var mt = function(r, a, c, h, _, x, E) {
        var U = 0, I = r.length, z = c == null;
        if (N(c) === "object") {
          _ = !0;
          for (U in c)
            mt(r, a, U, c[U], !0, x, E);
        } else if (h !== void 0 && (_ = !0, C(h) || (E = !0), z && (E ? (a.call(r, h), a = null) : (z = a, a = function(te, le, $) {
          return z.call(l(te), $);
        })), a))
          for (; U < I; U++)
            a(
              r[U],
              c,
              E ? h : h.call(r[U], U, a(r[U], c))
            );
        return _ ? r : z ? a.call(r) : I ? a(r[0], c) : x;
      }, Ze = /^-ms-/, L = /-([a-z])/g;
      function A(r, a) {
        return a.toUpperCase();
      }
      function q(r) {
        return r.replace(Ze, "ms-").replace(L, A);
      }
      var ce = function(r) {
        return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
      };
      function de() {
        this.expando = l.expando + de.uid++;
      }
      de.uid = 1, de.prototype = {
        cache: function(r) {
          var a = r[this.expando];
          return a || (a = {}, ce(r) && (r.nodeType ? r[this.expando] = a : Object.defineProperty(r, this.expando, {
            value: a,
            configurable: !0
          }))), a;
        },
        set: function(r, a, c) {
          var h, _ = this.cache(r);
          if (typeof a == "string")
            _[q(a)] = c;
          else
            for (h in a)
              _[q(h)] = a[h];
          return _;
        },
        get: function(r, a) {
          return a === void 0 ? this.cache(r) : (
            // Always use camelCase key (gh-2257)
            r[this.expando] && r[this.expando][q(a)]
          );
        },
        access: function(r, a, c) {
          return a === void 0 || a && typeof a == "string" && c === void 0 ? this.get(r, a) : (this.set(r, a, c), c !== void 0 ? c : a);
        },
        remove: function(r, a) {
          var c, h = r[this.expando];
          if (h !== void 0) {
            if (a !== void 0)
              for (Array.isArray(a) ? a = a.map(q) : (a = q(a), a = a in h ? [a] : a.match(nt) || []), c = a.length; c--; )
                delete h[a[c]];
            (a === void 0 || l.isEmptyObject(h)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando]);
          }
        },
        hasData: function(r) {
          var a = r[this.expando];
          return a !== void 0 && !l.isEmptyObject(a);
        }
      };
      var W = new de(), we = new de(), Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ue = /[A-Z]/g;
      function vt(r) {
        return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Te.test(r) ? JSON.parse(r) : r;
      }
      function ve(r, a, c) {
        var h;
        if (c === void 0 && r.nodeType === 1)
          if (h = "data-" + a.replace(Ue, "-$&").toLowerCase(), c = r.getAttribute(h), typeof c == "string") {
            try {
              c = vt(c);
            } catch {
            }
            we.set(r, a, c);
          } else
            c = void 0;
        return c;
      }
      l.extend({
        hasData: function(r) {
          return we.hasData(r) || W.hasData(r);
        },
        data: function(r, a, c) {
          return we.access(r, a, c);
        },
        removeData: function(r, a) {
          we.remove(r, a);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(r, a, c) {
          return W.access(r, a, c);
        },
        _removeData: function(r, a) {
          W.remove(r, a);
        }
      }), l.fn.extend({
        data: function(r, a) {
          var c, h, _, x = this[0], E = x && x.attributes;
          if (r === void 0) {
            if (this.length && (_ = we.get(x), x.nodeType === 1 && !W.get(x, "hasDataAttrs"))) {
              for (c = E.length; c--; )
                E[c] && (h = E[c].name, h.indexOf("data-") === 0 && (h = q(h.slice(5)), ve(x, h, _[h])));
              W.set(x, "hasDataAttrs", !0);
            }
            return _;
          }
          return typeof r == "object" ? this.each(function() {
            we.set(this, r);
          }) : mt(this, function(U) {
            var I;
            if (x && U === void 0)
              return I = we.get(x, r), I !== void 0 || (I = ve(x, r), I !== void 0) ? I : void 0;
            this.each(function() {
              we.set(this, r, U);
            });
          }, null, a, arguments.length > 1, null, !0);
        },
        removeData: function(r) {
          return this.each(function() {
            we.remove(this, r);
          });
        }
      }), l.extend({
        queue: function(r, a, c) {
          var h;
          if (r)
            return a = (a || "fx") + "queue", h = W.get(r, a), c && (!h || Array.isArray(c) ? h = W.access(r, a, l.makeArray(c)) : h.push(c)), h || [];
        },
        dequeue: function(r, a) {
          a = a || "fx";
          var c = l.queue(r, a), h = c.length, _ = c.shift(), x = l._queueHooks(r, a), E = function() {
            l.dequeue(r, a);
          };
          _ === "inprogress" && (_ = c.shift(), h--), _ && (a === "fx" && c.unshift("inprogress"), delete x.stop, _.call(r, E, x)), !h && x && x.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(r, a) {
          var c = a + "queueHooks";
          return W.get(r, c) || W.access(r, c, {
            empty: l.Callbacks("once memory").add(function() {
              W.remove(r, [a + "queue", c]);
            })
          });
        }
      }), l.fn.extend({
        queue: function(r, a) {
          var c = 2;
          return typeof r != "string" && (a = r, r = "fx", c--), arguments.length < c ? l.queue(this[0], r) : a === void 0 ? this : this.each(function() {
            var h = l.queue(this, r, a);
            l._queueHooks(this, r), r === "fx" && h[0] !== "inprogress" && l.dequeue(this, r);
          });
        },
        dequeue: function(r) {
          return this.each(function() {
            l.dequeue(this, r);
          });
        },
        clearQueue: function(r) {
          return this.queue(r || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(r, a) {
          var c, h = 1, _ = l.Deferred(), x = this, E = this.length, U = function() {
            --h || _.resolveWith(x, [x]);
          };
          for (typeof r != "string" && (a = r, r = void 0), r = r || "fx"; E--; )
            c = W.get(x[E], r + "queueHooks"), c && c.empty && (h++, c.empty.add(U));
          return U(), _.promise(a);
        }
      });
      var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Xe = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"), Ve = ["Top", "Right", "Bottom", "Left"], Ce = m.documentElement, rt = function(r) {
        return l.contains(r.ownerDocument, r);
      }, it = { composed: !0 };
      Ce.getRootNode && (rt = function(r) {
        return l.contains(r.ownerDocument, r) || r.getRootNode(it) === r.ownerDocument;
      });
      var At = function(r, a) {
        return r = a || r, r.style.display === "none" || r.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        rt(r) && l.css(r, "display") === "none";
      };
      function H(r, a, c, h) {
        var _, x, E = 20, U = h ? function() {
          return h.cur();
        } : function() {
          return l.css(r, a, "");
        }, I = U(), z = c && c[3] || (l.cssNumber[a] ? "" : "px"), te = r.nodeType && (l.cssNumber[a] || z !== "px" && +I) && Xe.exec(l.css(r, a));
        if (te && te[3] !== z) {
          for (I = I / 2, z = z || te[3], te = +I || 1; E--; )
            l.style(r, a, te + z), (1 - x) * (1 - (x = U() / I || 0.5)) <= 0 && (E = 0), te = te / x;
          te = te * 2, l.style(r, a, te + z), c = c || [];
        }
        return c && (te = +te || +I || 0, _ = c[1] ? te + (c[1] + 1) * c[2] : +c[2], h && (h.unit = z, h.start = te, h.end = _)), _;
      }
      var De = {};
      function re(r) {
        var a, c = r.ownerDocument, h = r.nodeName, _ = De[h];
        return _ || (a = c.body.appendChild(c.createElement(h)), _ = l.css(a, "display"), a.parentNode.removeChild(a), _ === "none" && (_ = "block"), De[h] = _, _);
      }
      function he(r, a) {
        for (var c, h, _ = [], x = 0, E = r.length; x < E; x++)
          h = r[x], h.style && (c = h.style.display, a ? (c === "none" && (_[x] = W.get(h, "display") || null, _[x] || (h.style.display = "")), h.style.display === "" && At(h) && (_[x] = re(h))) : c !== "none" && (_[x] = "none", W.set(h, "display", c)));
        for (x = 0; x < E; x++)
          _[x] != null && (r[x].style.display = _[x]);
        return r;
      }
      l.fn.extend({
        show: function() {
          return he(this, !0);
        },
        hide: function() {
          return he(this);
        },
        toggle: function(r) {
          return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
            At(this) ? l(this).show() : l(this).hide();
          });
        }
      });
      var ye = /^(?:checkbox|radio)$/i, Le = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, dt = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var r = m.createDocumentFragment(), a = r.appendChild(m.createElement("div")), c = m.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), b.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, a.innerHTML = "<option></option>", b.option = !!a.lastChild;
      })();
      var yt = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, b.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
      function Pt(r, a) {
        var c;
        return typeof r.getElementsByTagName < "u" ? c = r.getElementsByTagName(a || "*") : typeof r.querySelectorAll < "u" ? c = r.querySelectorAll(a || "*") : c = [], a === void 0 || a && fe(r, a) ? l.merge([r], c) : c;
      }
      function gt(r, a) {
        for (var c = 0, h = r.length; c < h; c++)
          W.set(
            r[c],
            "globalEval",
            !a || W.get(a[c], "globalEval")
          );
      }
      var $t = /<|&#?\w+;/;
      function mn(r, a, c, h, _) {
        for (var x, E, U, I, z, te, le = a.createDocumentFragment(), $ = [], ge = 0, Je = r.length; ge < Je; ge++)
          if (x = r[ge], x || x === 0)
            if (N(x) === "object")
              l.merge($, x.nodeType ? [x] : x);
            else if (!$t.test(x))
              $.push(a.createTextNode(x));
            else {
              for (E = E || le.appendChild(a.createElement("div")), U = (Le.exec(x) || ["", ""])[1].toLowerCase(), I = yt[U] || yt._default, E.innerHTML = I[1] + l.htmlPrefilter(x) + I[2], te = I[0]; te--; )
                E = E.lastChild;
              l.merge($, E.childNodes), E = le.firstChild, E.textContent = "";
            }
        for (le.textContent = "", ge = 0; x = $[ge++]; ) {
          if (h && l.inArray(x, h) > -1) {
            _ && _.push(x);
            continue;
          }
          if (z = rt(x), E = Pt(le.appendChild(x), "script"), z && gt(E), c)
            for (te = 0; x = E[te++]; )
              dt.test(x.type || "") && c.push(x);
        }
        return le;
      }
      var gr = /^([^.]*)(?:\.(.+)|)/;
      function zn() {
        return !0;
      }
      function sn() {
        return !1;
      }
      function gi(r, a, c, h, _, x) {
        var E, U;
        if (typeof a == "object") {
          typeof c != "string" && (h = h || c, c = void 0);
          for (U in a)
            gi(r, U, c, h, a[U], x);
          return r;
        }
        if (h == null && _ == null ? (_ = c, h = c = void 0) : _ == null && (typeof c == "string" ? (_ = h, h = void 0) : (_ = h, h = c, c = void 0)), _ === !1)
          _ = sn;
        else if (!_)
          return r;
        return x === 1 && (E = _, _ = function(I) {
          return l().off(I), E.apply(this, arguments);
        }, _.guid = E.guid || (E.guid = l.guid++)), r.each(function() {
          l.event.add(this, a, _, h, c);
        });
      }
      l.event = {
        global: {},
        add: function(r, a, c, h, _) {
          var x, E, U, I, z, te, le, $, ge, Je, xt, at = W.get(r);
          if (ce(r))
            for (c.handler && (x = c, c = x.handler, _ = x.selector), _ && l.find.matchesSelector(Ce, _), c.guid || (c.guid = l.guid++), (I = at.events) || (I = at.events = /* @__PURE__ */ Object.create(null)), (E = at.handle) || (E = at.handle = function(Yt) {
              return typeof l < "u" && l.event.triggered !== Yt.type ? l.event.dispatch.apply(r, arguments) : void 0;
            }), a = (a || "").match(nt) || [""], z = a.length; z--; )
              U = gr.exec(a[z]) || [], ge = xt = U[1], Je = (U[2] || "").split(".").sort(), ge && (le = l.event.special[ge] || {}, ge = (_ ? le.delegateType : le.bindType) || ge, le = l.event.special[ge] || {}, te = l.extend({
                type: ge,
                origType: xt,
                data: h,
                handler: c,
                guid: c.guid,
                selector: _,
                needsContext: _ && l.expr.match.needsContext.test(_),
                namespace: Je.join(".")
              }, x), ($ = I[ge]) || ($ = I[ge] = [], $.delegateCount = 0, (!le.setup || le.setup.call(r, h, Je, E) === !1) && r.addEventListener && r.addEventListener(ge, E)), le.add && (le.add.call(r, te), te.handler.guid || (te.handler.guid = c.guid)), _ ? $.splice($.delegateCount++, 0, te) : $.push(te), l.event.global[ge] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(r, a, c, h, _) {
          var x, E, U, I, z, te, le, $, ge, Je, xt, at = W.hasData(r) && W.get(r);
          if (!(!at || !(I = at.events))) {
            for (a = (a || "").match(nt) || [""], z = a.length; z--; ) {
              if (U = gr.exec(a[z]) || [], ge = xt = U[1], Je = (U[2] || "").split(".").sort(), !ge) {
                for (ge in I)
                  l.event.remove(r, ge + a[z], c, h, !0);
                continue;
              }
              for (le = l.event.special[ge] || {}, ge = (h ? le.delegateType : le.bindType) || ge, $ = I[ge] || [], U = U[2] && new RegExp("(^|\\.)" + Je.join("\\.(?:.*\\.|)") + "(\\.|$)"), E = x = $.length; x--; )
                te = $[x], (_ || xt === te.origType) && (!c || c.guid === te.guid) && (!U || U.test(te.namespace)) && (!h || h === te.selector || h === "**" && te.selector) && ($.splice(x, 1), te.selector && $.delegateCount--, le.remove && le.remove.call(r, te));
              E && !$.length && ((!le.teardown || le.teardown.call(r, Je, at.handle) === !1) && l.removeEvent(r, ge, at.handle), delete I[ge]);
            }
            l.isEmptyObject(I) && W.remove(r, "handle events");
          }
        },
        dispatch: function(r) {
          var a, c, h, _, x, E, U = new Array(arguments.length), I = l.event.fix(r), z = (W.get(this, "events") || /* @__PURE__ */ Object.create(null))[I.type] || [], te = l.event.special[I.type] || {};
          for (U[0] = I, a = 1; a < arguments.length; a++)
            U[a] = arguments[a];
          if (I.delegateTarget = this, !(te.preDispatch && te.preDispatch.call(this, I) === !1)) {
            for (E = l.event.handlers.call(this, I, z), a = 0; (_ = E[a++]) && !I.isPropagationStopped(); )
              for (I.currentTarget = _.elem, c = 0; (x = _.handlers[c++]) && !I.isImmediatePropagationStopped(); )
                (!I.rnamespace || x.namespace === !1 || I.rnamespace.test(x.namespace)) && (I.handleObj = x, I.data = x.data, h = ((l.event.special[x.origType] || {}).handle || x.handler).apply(_.elem, U), h !== void 0 && (I.result = h) === !1 && (I.preventDefault(), I.stopPropagation()));
            return te.postDispatch && te.postDispatch.call(this, I), I.result;
          }
        },
        handlers: function(r, a) {
          var c, h, _, x, E, U = [], I = a.delegateCount, z = r.target;
          if (I && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          z.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(r.type === "click" && r.button >= 1)) {
            for (; z !== this; z = z.parentNode || this)
              if (z.nodeType === 1 && !(r.type === "click" && z.disabled === !0)) {
                for (x = [], E = {}, c = 0; c < I; c++)
                  h = a[c], _ = h.selector + " ", E[_] === void 0 && (E[_] = h.needsContext ? l(_, this).index(z) > -1 : l.find(_, this, null, [z]).length), E[_] && x.push(h);
                x.length && U.push({ elem: z, handlers: x });
              }
          }
          return z = this, I < a.length && U.push({ elem: z, handlers: a.slice(I) }), U;
        },
        addProp: function(r, a) {
          Object.defineProperty(l.Event.prototype, r, {
            enumerable: !0,
            configurable: !0,
            get: C(a) ? function() {
              if (this.originalEvent)
                return a(this.originalEvent);
            } : function() {
              if (this.originalEvent)
                return this.originalEvent[r];
            },
            set: function(c) {
              Object.defineProperty(this, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c
              });
            }
          });
        },
        fix: function(r) {
          return r[l.expando] ? r : new l.Event(r);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: !0
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(r) {
              var a = this || r;
              return ye.test(a.type) && a.click && fe(a, "input") && _i(a, "click", !0), !1;
            },
            trigger: function(r) {
              var a = this || r;
              return ye.test(a.type) && a.click && fe(a, "input") && _i(a, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(r) {
              var a = r.target;
              return ye.test(a.type) && a.click && fe(a, "input") && W.get(a, "click") || fe(a, "a");
            }
          },
          beforeunload: {
            postDispatch: function(r) {
              r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result);
            }
          }
        }
      };
      function _i(r, a, c) {
        if (!c) {
          W.get(r, a) === void 0 && l.event.add(r, a, zn);
          return;
        }
        W.set(r, a, !1), l.event.add(r, a, {
          namespace: !1,
          handler: function(h) {
            var _, x = W.get(this, a);
            if (h.isTrigger & 1 && this[a]) {
              if (x)
                (l.event.special[a] || {}).delegateType && h.stopPropagation();
              else if (x = o.call(arguments), W.set(this, a, x), this[a](), _ = W.get(this, a), W.set(this, a, !1), x !== _)
                return h.stopImmediatePropagation(), h.preventDefault(), _;
            } else x && (W.set(this, a, l.event.trigger(
              x[0],
              x.slice(1),
              this
            )), h.stopPropagation(), h.isImmediatePropagationStopped = zn);
          }
        });
      }
      l.removeEvent = function(r, a, c) {
        r.removeEventListener && r.removeEventListener(a, c);
      }, l.Event = function(r, a) {
        if (!(this instanceof l.Event))
          return new l.Event(r, a);
        r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && // Support: Android <=2.3 only
        r.returnValue === !1 ? zn : sn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, a && l.extend(this, a), this.timeStamp = r && r.timeStamp || Date.now(), this[l.expando] = !0;
      }, l.Event.prototype = {
        constructor: l.Event,
        isDefaultPrevented: sn,
        isPropagationStopped: sn,
        isImmediatePropagationStopped: sn,
        isSimulated: !1,
        preventDefault: function() {
          var r = this.originalEvent;
          this.isDefaultPrevented = zn, r && !this.isSimulated && r.preventDefault();
        },
        stopPropagation: function() {
          var r = this.originalEvent;
          this.isPropagationStopped = zn, r && !this.isSimulated && r.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var r = this.originalEvent;
          this.isImmediatePropagationStopped = zn, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation();
        }
      }, l.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, l.event.addProp), l.each({ focus: "focusin", blur: "focusout" }, function(r, a) {
        function c(h) {
          if (m.documentMode) {
            var _ = W.get(this, "handle"), x = l.event.fix(h);
            x.type = h.type === "focusin" ? "focus" : "blur", x.isSimulated = !0, _(h), x.target === x.currentTarget && _(x);
          } else
            l.event.simulate(
              a,
              h.target,
              l.event.fix(h)
            );
        }
        l.event.special[r] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var h;
            if (_i(this, r, !0), m.documentMode)
              h = W.get(this, a), h || this.addEventListener(a, c), W.set(this, a, (h || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return _i(this, r), !0;
          },
          teardown: function() {
            var h;
            if (m.documentMode)
              h = W.get(this, a) - 1, h ? W.set(this, a, h) : (this.removeEventListener(a, c), W.remove(this, a));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(h) {
            return W.get(h.target, r);
          },
          delegateType: a
        }, l.event.special[a] = {
          setup: function() {
            var h = this.ownerDocument || this.document || this, _ = m.documentMode ? this : h, x = W.get(_, a);
            x || (m.documentMode ? this.addEventListener(a, c) : h.addEventListener(r, c, !0)), W.set(_, a, (x || 0) + 1);
          },
          teardown: function() {
            var h = this.ownerDocument || this.document || this, _ = m.documentMode ? this : h, x = W.get(_, a) - 1;
            x ? W.set(_, a, x) : (m.documentMode ? this.removeEventListener(a, c) : h.removeEventListener(r, c, !0), W.remove(_, a));
          }
        };
      }), l.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(r, a) {
        l.event.special[r] = {
          delegateType: a,
          bindType: a,
          handle: function(c) {
            var h, _ = this, x = c.relatedTarget, E = c.handleObj;
            return (!x || x !== _ && !l.contains(_, x)) && (c.type = E.origType, h = E.handler.apply(this, arguments), c.type = a), h;
          }
        };
      }), l.fn.extend({
        on: function(r, a, c, h) {
          return gi(this, r, a, c, h);
        },
        one: function(r, a, c, h) {
          return gi(this, r, a, c, h, 1);
        },
        off: function(r, a, c) {
          var h, _;
          if (r && r.preventDefault && r.handleObj)
            return h = r.handleObj, l(r.delegateTarget).off(
              h.namespace ? h.origType + "." + h.namespace : h.origType,
              h.selector,
              h.handler
            ), this;
          if (typeof r == "object") {
            for (_ in r)
              this.off(_, a, r[_]);
            return this;
          }
          return (a === !1 || typeof a == "function") && (c = a, a = void 0), c === !1 && (c = sn), this.each(function() {
            l.event.remove(this, r, c, a);
          });
        }
      });
      var zr = /<script|<style|<link/i, zi = /checked\s*(?:[^=]|=\s*.checked.)/i, Hr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function vi(r, a) {
        return fe(r, "table") && fe(a.nodeType !== 11 ? a : a.firstChild, "tr") && l(r).children("tbody")[0] || r;
      }
      function kr(r) {
        return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r;
      }
      function Gr(r) {
        return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r;
      }
      function Vr(r, a) {
        var c, h, _, x, E, U, I;
        if (a.nodeType === 1) {
          if (W.hasData(r) && (x = W.get(r), I = x.events, I)) {
            W.remove(a, "handle events");
            for (_ in I)
              for (c = 0, h = I[_].length; c < h; c++)
                l.event.add(a, _, I[_][c]);
          }
          we.hasData(r) && (E = we.access(r), U = l.extend({}, E), we.set(a, U));
        }
      }
      function Is(r, a) {
        var c = a.nodeName.toLowerCase();
        c === "input" && ye.test(r.type) ? a.checked = r.checked : (c === "input" || c === "textarea") && (a.defaultValue = r.defaultValue);
      }
      function ei(r, a, c, h) {
        a = u(a);
        var _, x, E, U, I, z, te = 0, le = r.length, $ = le - 1, ge = a[0], Je = C(ge);
        if (Je || le > 1 && typeof ge == "string" && !b.checkClone && zi.test(ge))
          return r.each(function(xt) {
            var at = r.eq(xt);
            Je && (a[0] = ge.call(this, xt, at.html())), ei(at, a, c, h);
          });
        if (le && (_ = mn(a, r[0].ownerDocument, !1, r, h), x = _.firstChild, _.childNodes.length === 1 && (_ = x), x || h)) {
          for (E = l.map(Pt(_, "script"), kr), U = E.length; te < le; te++)
            I = _, te !== $ && (I = l.clone(I, !0, !0), U && l.merge(E, Pt(I, "script"))), c.call(r[te], I, te);
          if (U)
            for (z = E[E.length - 1].ownerDocument, l.map(E, Gr), te = 0; te < U; te++)
              I = E[te], dt.test(I.type || "") && !W.access(I, "globalEval") && l.contains(z, I) && (I.src && (I.type || "").toLowerCase() !== "module" ? l._evalUrl && !I.noModule && l._evalUrl(I.src, {
                nonce: I.nonce || I.getAttribute("nonce")
              }, z) : D(I.textContent.replace(Hr, ""), I, z));
        }
        return r;
      }
      function w(r, a, c) {
        for (var h, _ = a ? l.filter(a, r) : r, x = 0; (h = _[x]) != null; x++)
          !c && h.nodeType === 1 && l.cleanData(Pt(h)), h.parentNode && (c && rt(h) && gt(Pt(h, "script")), h.parentNode.removeChild(h));
        return r;
      }
      l.extend({
        htmlPrefilter: function(r) {
          return r;
        },
        clone: function(r, a, c) {
          var h, _, x, E, U = r.cloneNode(!0), I = rt(r);
          if (!b.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !l.isXMLDoc(r))
            for (E = Pt(U), x = Pt(r), h = 0, _ = x.length; h < _; h++)
              Is(x[h], E[h]);
          if (a)
            if (c)
              for (x = x || Pt(r), E = E || Pt(U), h = 0, _ = x.length; h < _; h++)
                Vr(x[h], E[h]);
            else
              Vr(r, U);
          return E = Pt(U, "script"), E.length > 0 && gt(E, !I && Pt(r, "script")), U;
        },
        cleanData: function(r) {
          for (var a, c, h, _ = l.event.special, x = 0; (c = r[x]) !== void 0; x++)
            if (ce(c)) {
              if (a = c[W.expando]) {
                if (a.events)
                  for (h in a.events)
                    _[h] ? l.event.remove(c, h) : l.removeEvent(c, h, a.handle);
                c[W.expando] = void 0;
              }
              c[we.expando] && (c[we.expando] = void 0);
            }
        }
      }), l.fn.extend({
        detach: function(r) {
          return w(this, r, !0);
        },
        remove: function(r) {
          return w(this, r);
        },
        text: function(r) {
          return mt(this, function(a) {
            return a === void 0 ? l.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = a);
            });
          }, null, r, arguments.length);
        },
        append: function() {
          return ei(this, arguments, function(r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var a = vi(this, r);
              a.appendChild(r);
            }
          });
        },
        prepend: function() {
          return ei(this, arguments, function(r) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var a = vi(this, r);
              a.insertBefore(r, a.firstChild);
            }
          });
        },
        before: function() {
          return ei(this, arguments, function(r) {
            this.parentNode && this.parentNode.insertBefore(r, this);
          });
        },
        after: function() {
          return ei(this, arguments, function(r) {
            this.parentNode && this.parentNode.insertBefore(r, this.nextSibling);
          });
        },
        empty: function() {
          for (var r, a = 0; (r = this[a]) != null; a++)
            r.nodeType === 1 && (l.cleanData(Pt(r, !1)), r.textContent = "");
          return this;
        },
        clone: function(r, a) {
          return r = r ?? !1, a = a ?? r, this.map(function() {
            return l.clone(this, r, a);
          });
        },
        html: function(r) {
          return mt(this, function(a) {
            var c = this[0] || {}, h = 0, _ = this.length;
            if (a === void 0 && c.nodeType === 1)
              return c.innerHTML;
            if (typeof a == "string" && !zr.test(a) && !yt[(Le.exec(a) || ["", ""])[1].toLowerCase()]) {
              a = l.htmlPrefilter(a);
              try {
                for (; h < _; h++)
                  c = this[h] || {}, c.nodeType === 1 && (l.cleanData(Pt(c, !1)), c.innerHTML = a);
                c = 0;
              } catch {
              }
            }
            c && this.empty().append(a);
          }, null, r, arguments.length);
        },
        replaceWith: function() {
          var r = [];
          return ei(this, arguments, function(a) {
            var c = this.parentNode;
            l.inArray(this, r) < 0 && (l.cleanData(Pt(this)), c && c.replaceChild(a, this));
          }, r);
        }
      }), l.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(r, a) {
        l.fn[r] = function(c) {
          for (var h, _ = [], x = l(c), E = x.length - 1, U = 0; U <= E; U++)
            h = U === E ? this : this.clone(!0), l(x[U])[a](h), f.apply(_, h.get());
          return this.pushStack(_);
        };
      });
      var G = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"), K = /^--/, Z = function(r) {
        var a = r.ownerDocument.defaultView;
        return (!a || !a.opener) && (a = e), a.getComputedStyle(r);
      }, V = function(r, a, c) {
        var h, _, x = {};
        for (_ in a)
          x[_] = r.style[_], r.style[_] = a[_];
        h = c.call(r);
        for (_ in a)
          r.style[_] = x[_];
        return h;
      }, xe = new RegExp(Ve.join("|"), "i");
      (function() {
        function r() {
          if (z) {
            I.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ce.appendChild(I).appendChild(z);
            var te = e.getComputedStyle(z);
            c = te.top !== "1%", U = a(te.marginLeft) === 12, z.style.right = "60%", x = a(te.right) === 36, h = a(te.width) === 36, z.style.position = "absolute", _ = a(z.offsetWidth / 3) === 12, Ce.removeChild(I), z = null;
          }
        }
        function a(te) {
          return Math.round(parseFloat(te));
        }
        var c, h, _, x, E, U, I = m.createElement("div"), z = m.createElement("div");
        z.style && (z.style.backgroundClip = "content-box", z.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = z.style.backgroundClip === "content-box", l.extend(b, {
          boxSizingReliable: function() {
            return r(), h;
          },
          pixelBoxStyles: function() {
            return r(), x;
          },
          pixelPosition: function() {
            return r(), c;
          },
          reliableMarginLeft: function() {
            return r(), U;
          },
          scrollboxSize: function() {
            return r(), _;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var te, le, $, ge;
            return E == null && (te = m.createElement("table"), le = m.createElement("tr"), $ = m.createElement("div"), te.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", le.style.cssText = "box-sizing:content-box;border:1px solid", le.style.height = "1px", $.style.height = "9px", $.style.display = "block", Ce.appendChild(te).appendChild(le).appendChild($), ge = e.getComputedStyle(le), E = parseInt(ge.height, 10) + parseInt(ge.borderTopWidth, 10) + parseInt(ge.borderBottomWidth, 10) === le.offsetHeight, Ce.removeChild(te)), E;
          }
        }));
      })();
      function Me(r, a, c) {
        var h, _, x, E, U = K.test(a), I = r.style;
        return c = c || Z(r), c && (E = c.getPropertyValue(a) || c[a], U && E && (E = E.replace(se, "$1") || void 0), E === "" && !rt(r) && (E = l.style(r, a)), !b.pixelBoxStyles() && G.test(E) && xe.test(a) && (h = I.width, _ = I.minWidth, x = I.maxWidth, I.minWidth = I.maxWidth = I.width = E, E = c.width, I.width = h, I.minWidth = _, I.maxWidth = x)), E !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          E + ""
        ) : E;
      }
      function Oe(r, a) {
        return {
          get: function() {
            if (r()) {
              delete this.get;
              return;
            }
            return (this.get = a).apply(this, arguments);
          }
        };
      }
      var ze = ["Webkit", "Moz", "ms"], Ye = m.createElement("div").style, $e = {};
      function Ge(r) {
        for (var a = r[0].toUpperCase() + r.slice(1), c = ze.length; c--; )
          if (r = ze[c] + a, r in Ye)
            return r;
      }
      function Mt(r) {
        var a = l.cssProps[r] || $e[r];
        return a || (r in Ye ? r : $e[r] = Ge(r) || r);
      }
      var Lt = /^(none|table(?!-c[ea]).+)/, Ft = { position: "absolute", visibility: "hidden", display: "block" }, Kt = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function Et(r, a, c) {
        var h = Xe.exec(a);
        return h ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, h[2] - (c || 0)) + (h[3] || "px")
        ) : a;
      }
      function ke(r, a, c, h, _, x) {
        var E = a === "width" ? 1 : 0, U = 0, I = 0, z = 0;
        if (c === (h ? "border" : "content"))
          return 0;
        for (; E < 4; E += 2)
          c === "margin" && (z += l.css(r, c + Ve[E], !0, _)), h ? (c === "content" && (I -= l.css(r, "padding" + Ve[E], !0, _)), c !== "margin" && (I -= l.css(r, "border" + Ve[E] + "Width", !0, _))) : (I += l.css(r, "padding" + Ve[E], !0, _), c !== "padding" ? I += l.css(r, "border" + Ve[E] + "Width", !0, _) : U += l.css(r, "border" + Ve[E] + "Width", !0, _));
        return !h && x >= 0 && (I += Math.max(0, Math.ceil(
          r["offset" + a[0].toUpperCase() + a.slice(1)] - x - I - U - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), I + z;
      }
      function zt(r, a, c) {
        var h = Z(r), _ = !b.boxSizingReliable() || c, x = _ && l.css(r, "boxSizing", !1, h) === "border-box", E = x, U = Me(r, a, h), I = "offset" + a[0].toUpperCase() + a.slice(1);
        if (G.test(U)) {
          if (!c)
            return U;
          U = "auto";
        }
        return (!b.boxSizingReliable() && x || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !b.reliableTrDimensions() && fe(r, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        U === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(U) && l.css(r, "display", !1, h) === "inline") && // Make sure the element is visible & connected
        r.getClientRects().length && (x = l.css(r, "boxSizing", !1, h) === "border-box", E = I in r, E && (U = r[I])), U = parseFloat(U) || 0, U + ke(
          r,
          a,
          c || (x ? "border" : "content"),
          E,
          h,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          U
        ) + "px";
      }
      l.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(r, a) {
              if (a) {
                var c = Me(r, "opacity");
                return c === "" ? "1" : c;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          // SVG-related
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(r, a, c, h) {
          if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
            var _, x, E, U = q(a), I = K.test(a), z = r.style;
            if (I || (a = Mt(U)), E = l.cssHooks[a] || l.cssHooks[U], c !== void 0) {
              if (x = typeof c, x === "string" && (_ = Xe.exec(c)) && _[1] && (c = H(r, a, _), x = "number"), c == null || c !== c)
                return;
              x === "number" && !I && (c += _ && _[3] || (l.cssNumber[U] ? "" : "px")), !b.clearCloneStyle && c === "" && a.indexOf("background") === 0 && (z[a] = "inherit"), (!E || !("set" in E) || (c = E.set(r, c, h)) !== void 0) && (I ? z.setProperty(a, c) : z[a] = c);
            } else
              return E && "get" in E && (_ = E.get(r, !1, h)) !== void 0 ? _ : z[a];
          }
        },
        css: function(r, a, c, h) {
          var _, x, E, U = q(a), I = K.test(a);
          return I || (a = Mt(U)), E = l.cssHooks[a] || l.cssHooks[U], E && "get" in E && (_ = E.get(r, !0, c)), _ === void 0 && (_ = Me(r, a, h)), _ === "normal" && a in Kt && (_ = Kt[a]), c === "" || c ? (x = parseFloat(_), c === !0 || isFinite(x) ? x || 0 : _) : _;
        }
      }), l.each(["height", "width"], function(r, a) {
        l.cssHooks[a] = {
          get: function(c, h, _) {
            if (h)
              return Lt.test(l.css(c, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!c.getClientRects().length || !c.getBoundingClientRect().width) ? V(c, Ft, function() {
                return zt(c, a, _);
              }) : zt(c, a, _);
          },
          set: function(c, h, _) {
            var x, E = Z(c), U = !b.scrollboxSize() && E.position === "absolute", I = U || _, z = I && l.css(c, "boxSizing", !1, E) === "border-box", te = _ ? ke(
              c,
              a,
              _,
              z,
              E
            ) : 0;
            return z && U && (te -= Math.ceil(
              c["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(E[a]) - ke(c, a, "border", !1, E) - 0.5
            )), te && (x = Xe.exec(h)) && (x[3] || "px") !== "px" && (c.style[a] = h, h = l.css(c, a)), Et(c, h, te);
          }
        };
      }), l.cssHooks.marginLeft = Oe(
        b.reliableMarginLeft,
        function(r, a) {
          if (a)
            return (parseFloat(Me(r, "marginLeft")) || r.getBoundingClientRect().left - V(r, { marginLeft: 0 }, function() {
              return r.getBoundingClientRect().left;
            })) + "px";
        }
      ), l.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(r, a) {
        l.cssHooks[r + a] = {
          expand: function(c) {
            for (var h = 0, _ = {}, x = typeof c == "string" ? c.split(" ") : [c]; h < 4; h++)
              _[r + Ve[h] + a] = x[h] || x[h - 2] || x[0];
            return _;
          }
        }, r !== "margin" && (l.cssHooks[r + a].set = Et);
      }), l.fn.extend({
        css: function(r, a) {
          return mt(this, function(c, h, _) {
            var x, E, U = {}, I = 0;
            if (Array.isArray(h)) {
              for (x = Z(c), E = h.length; I < E; I++)
                U[h[I]] = l.css(c, h[I], !1, x);
              return U;
            }
            return _ !== void 0 ? l.style(c, h, _) : l.css(c, h);
          }, r, a, arguments.length > 1);
        }
      });
      function Qe(r, a, c, h, _) {
        return new Qe.prototype.init(r, a, c, h, _);
      }
      l.Tween = Qe, Qe.prototype = {
        constructor: Qe,
        init: function(r, a, c, h, _, x) {
          this.elem = r, this.prop = c, this.easing = _ || l.easing._default, this.options = a, this.start = this.now = this.cur(), this.end = h, this.unit = x || (l.cssNumber[c] ? "" : "px");
        },
        cur: function() {
          var r = Qe.propHooks[this.prop];
          return r && r.get ? r.get(this) : Qe.propHooks._default.get(this);
        },
        run: function(r) {
          var a, c = Qe.propHooks[this.prop];
          return this.options.duration ? this.pos = a = l.easing[this.easing](
            r,
            this.options.duration * r,
            0,
            1,
            this.options.duration
          ) : this.pos = a = r, this.now = (this.end - this.start) * a + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Qe.propHooks._default.set(this), this;
        }
      }, Qe.prototype.init.prototype = Qe.prototype, Qe.propHooks = {
        _default: {
          get: function(r) {
            var a;
            return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (a = l.css(r.elem, r.prop, ""), !a || a === "auto" ? 0 : a);
          },
          set: function(r) {
            l.fx.step[r.prop] ? l.fx.step[r.prop](r) : r.elem.nodeType === 1 && (l.cssHooks[r.prop] || r.elem.style[Mt(r.prop)] != null) ? l.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now;
          }
        }
      }, Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
        set: function(r) {
          r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
        }
      }, l.easing = {
        linear: function(r) {
          return r;
        },
        swing: function(r) {
          return 0.5 - Math.cos(r * Math.PI) / 2;
        },
        _default: "swing"
      }, l.fx = Qe.prototype.init, l.fx.step = {};
      var Xt, yn, en = /^(?:toggle|show|hide)$/, _r = /queueHooks$/;
      function Ut() {
        yn && (m.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Ut) : e.setTimeout(Ut, l.fx.interval), l.fx.tick());
      }
      function Mn() {
        return e.setTimeout(function() {
          Xt = void 0;
        }), Xt = Date.now();
      }
      function ti(r, a) {
        var c, h = 0, _ = { height: r };
        for (a = a ? 1 : 0; h < 4; h += 2 - a)
          c = Ve[h], _["margin" + c] = _["padding" + c] = r;
        return a && (_.opacity = _.width = r), _;
      }
      function tn(r, a, c) {
        for (var h, _ = (an.tweeners[a] || []).concat(an.tweeners["*"]), x = 0, E = _.length; x < E; x++)
          if (h = _[x].call(c, a, r))
            return h;
      }
      function vr(r, a, c) {
        var h, _, x, E, U, I, z, te, le = "width" in a || "height" in a, $ = this, ge = {}, Je = r.style, xt = r.nodeType && At(r), at = W.get(r, "fxshow");
        c.queue || (E = l._queueHooks(r, "fx"), E.unqueued == null && (E.unqueued = 0, U = E.empty.fire, E.empty.fire = function() {
          E.unqueued || U();
        }), E.unqueued++, $.always(function() {
          $.always(function() {
            E.unqueued--, l.queue(r, "fx").length || E.empty.fire();
          });
        }));
        for (h in a)
          if (_ = a[h], en.test(_)) {
            if (delete a[h], x = x || _ === "toggle", _ === (xt ? "hide" : "show"))
              if (_ === "show" && at && at[h] !== void 0)
                xt = !0;
              else
                continue;
            ge[h] = at && at[h] || l.style(r, h);
          }
        if (I = !l.isEmptyObject(a), !(!I && l.isEmptyObject(ge))) {
          le && r.nodeType === 1 && (c.overflow = [Je.overflow, Je.overflowX, Je.overflowY], z = at && at.display, z == null && (z = W.get(r, "display")), te = l.css(r, "display"), te === "none" && (z ? te = z : (he([r], !0), z = r.style.display || z, te = l.css(r, "display"), he([r]))), (te === "inline" || te === "inline-block" && z != null) && l.css(r, "float") === "none" && (I || ($.done(function() {
            Je.display = z;
          }), z == null && (te = Je.display, z = te === "none" ? "" : te)), Je.display = "inline-block")), c.overflow && (Je.overflow = "hidden", $.always(function() {
            Je.overflow = c.overflow[0], Je.overflowX = c.overflow[1], Je.overflowY = c.overflow[2];
          })), I = !1;
          for (h in ge)
            I || (at ? "hidden" in at && (xt = at.hidden) : at = W.access(r, "fxshow", { display: z }), x && (at.hidden = !xt), xt && he([r], !0), $.done(function() {
              xt || he([r]), W.remove(r, "fxshow");
              for (h in ge)
                l.style(r, h, ge[h]);
            })), I = tn(xt ? at[h] : 0, h, $), h in at || (at[h] = I.start, xt && (I.end = I.start, I.start = 0));
        }
      }
      function Us(r, a) {
        var c, h, _, x, E;
        for (c in r)
          if (h = q(c), _ = a[h], x = r[c], Array.isArray(x) && (_ = x[1], x = r[c] = x[0]), c !== h && (r[h] = x, delete r[c]), E = l.cssHooks[h], E && "expand" in E) {
            x = E.expand(x), delete r[h];
            for (c in x)
              c in r || (r[c] = x[c], a[c] = _);
          } else
            a[h] = _;
      }
      function an(r, a, c) {
        var h, _, x = 0, E = an.prefilters.length, U = l.Deferred().always(function() {
          delete I.elem;
        }), I = function() {
          if (_)
            return !1;
          for (var le = Xt || Mn(), $ = Math.max(0, z.startTime + z.duration - le), ge = $ / z.duration || 0, Je = 1 - ge, xt = 0, at = z.tweens.length; xt < at; xt++)
            z.tweens[xt].run(Je);
          return U.notifyWith(r, [z, Je, $]), Je < 1 && at ? $ : (at || U.notifyWith(r, [z, 1, 0]), U.resolveWith(r, [z]), !1);
        }, z = U.promise({
          elem: r,
          props: l.extend({}, a),
          opts: l.extend(!0, {
            specialEasing: {},
            easing: l.easing._default
          }, c),
          originalProperties: a,
          originalOptions: c,
          startTime: Xt || Mn(),
          duration: c.duration,
          tweens: [],
          createTween: function(le, $) {
            var ge = l.Tween(
              r,
              z.opts,
              le,
              $,
              z.opts.specialEasing[le] || z.opts.easing
            );
            return z.tweens.push(ge), ge;
          },
          stop: function(le) {
            var $ = 0, ge = le ? z.tweens.length : 0;
            if (_)
              return this;
            for (_ = !0; $ < ge; $++)
              z.tweens[$].run(1);
            return le ? (U.notifyWith(r, [z, 1, 0]), U.resolveWith(r, [z, le])) : U.rejectWith(r, [z, le]), this;
          }
        }), te = z.props;
        for (Us(te, z.opts.specialEasing); x < E; x++)
          if (h = an.prefilters[x].call(z, r, te, z.opts), h)
            return C(h.stop) && (l._queueHooks(z.elem, z.opts.queue).stop = h.stop.bind(h)), h;
        return l.map(te, tn, z), C(z.opts.start) && z.opts.start.call(r, z), z.progress(z.opts.progress).done(z.opts.done, z.opts.complete).fail(z.opts.fail).always(z.opts.always), l.fx.timer(
          l.extend(I, {
            elem: r,
            anim: z,
            queue: z.opts.queue
          })
        ), z;
      }
      l.Animation = l.extend(an, {
        tweeners: {
          "*": [function(r, a) {
            var c = this.createTween(r, a);
            return H(c.elem, r, Xe.exec(a), c), c;
          }]
        },
        tweener: function(r, a) {
          C(r) ? (a = r, r = ["*"]) : r = r.match(nt);
          for (var c, h = 0, _ = r.length; h < _; h++)
            c = r[h], an.tweeners[c] = an.tweeners[c] || [], an.tweeners[c].unshift(a);
        },
        prefilters: [vr],
        prefilter: function(r, a) {
          a ? an.prefilters.unshift(r) : an.prefilters.push(r);
        }
      }), l.speed = function(r, a, c) {
        var h = r && typeof r == "object" ? l.extend({}, r) : {
          complete: c || !c && a || C(r) && r,
          duration: r,
          easing: c && a || a && !C(a) && a
        };
        return l.fx.off ? h.duration = 0 : typeof h.duration != "number" && (h.duration in l.fx.speeds ? h.duration = l.fx.speeds[h.duration] : h.duration = l.fx.speeds._default), (h.queue == null || h.queue === !0) && (h.queue = "fx"), h.old = h.complete, h.complete = function() {
          C(h.old) && h.old.call(this), h.queue && l.dequeue(this, h.queue);
        }, h;
      }, l.fn.extend({
        fadeTo: function(r, a, c, h) {
          return this.filter(At).css("opacity", 0).show().end().animate({ opacity: a }, r, c, h);
        },
        animate: function(r, a, c, h) {
          var _ = l.isEmptyObject(r), x = l.speed(a, c, h), E = function() {
            var U = an(this, l.extend({}, r), x);
            (_ || W.get(this, "finish")) && U.stop(!0);
          };
          return E.finish = E, _ || x.queue === !1 ? this.each(E) : this.queue(x.queue, E);
        },
        stop: function(r, a, c) {
          var h = function(_) {
            var x = _.stop;
            delete _.stop, x(c);
          };
          return typeof r != "string" && (c = a, a = r, r = void 0), a && this.queue(r || "fx", []), this.each(function() {
            var _ = !0, x = r != null && r + "queueHooks", E = l.timers, U = W.get(this);
            if (x)
              U[x] && U[x].stop && h(U[x]);
            else
              for (x in U)
                U[x] && U[x].stop && _r.test(x) && h(U[x]);
            for (x = E.length; x--; )
              E[x].elem === this && (r == null || E[x].queue === r) && (E[x].anim.stop(c), _ = !1, E.splice(x, 1));
            (_ || !c) && l.dequeue(this, r);
          });
        },
        finish: function(r) {
          return r !== !1 && (r = r || "fx"), this.each(function() {
            var a, c = W.get(this), h = c[r + "queue"], _ = c[r + "queueHooks"], x = l.timers, E = h ? h.length : 0;
            for (c.finish = !0, l.queue(this, r, []), _ && _.stop && _.stop.call(this, !0), a = x.length; a--; )
              x[a].elem === this && x[a].queue === r && (x[a].anim.stop(!0), x.splice(a, 1));
            for (a = 0; a < E; a++)
              h[a] && h[a].finish && h[a].finish.call(this);
            delete c.finish;
          });
        }
      }), l.each(["toggle", "show", "hide"], function(r, a) {
        var c = l.fn[a];
        l.fn[a] = function(h, _, x) {
          return h == null || typeof h == "boolean" ? c.apply(this, arguments) : this.animate(ti(a, !0), h, _, x);
        };
      }), l.each({
        slideDown: ti("show"),
        slideUp: ti("hide"),
        slideToggle: ti("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(r, a) {
        l.fn[r] = function(c, h, _) {
          return this.animate(a, c, h, _);
        };
      }), l.timers = [], l.fx.tick = function() {
        var r, a = 0, c = l.timers;
        for (Xt = Date.now(); a < c.length; a++)
          r = c[a], !r() && c[a] === r && c.splice(a--, 1);
        c.length || l.fx.stop(), Xt = void 0;
      }, l.fx.timer = function(r) {
        l.timers.push(r), l.fx.start();
      }, l.fx.interval = 13, l.fx.start = function() {
        yn || (yn = !0, Ut());
      }, l.fx.stop = function() {
        yn = null;
      }, l.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }, l.fn.delay = function(r, a) {
        return r = l.fx && l.fx.speeds[r] || r, a = a || "fx", this.queue(a, function(c, h) {
          var _ = e.setTimeout(c, r);
          h.stop = function() {
            e.clearTimeout(_);
          };
        });
      }, (function() {
        var r = m.createElement("input"), a = m.createElement("select"), c = a.appendChild(m.createElement("option"));
        r.type = "checkbox", b.checkOn = r.value !== "", b.optSelected = c.selected, r = m.createElement("input"), r.value = "t", r.type = "radio", b.radioValue = r.value === "t";
      })();
      var Ao, xr = l.expr.attrHandle;
      l.fn.extend({
        attr: function(r, a) {
          return mt(this, l.attr, r, a, arguments.length > 1);
        },
        removeAttr: function(r) {
          return this.each(function() {
            l.removeAttr(this, r);
          });
        }
      }), l.extend({
        attr: function(r, a, c) {
          var h, _, x = r.nodeType;
          if (!(x === 3 || x === 8 || x === 2)) {
            if (typeof r.getAttribute > "u")
              return l.prop(r, a, c);
            if ((x !== 1 || !l.isXMLDoc(r)) && (_ = l.attrHooks[a.toLowerCase()] || (l.expr.match.bool.test(a) ? Ao : void 0)), c !== void 0) {
              if (c === null) {
                l.removeAttr(r, a);
                return;
              }
              return _ && "set" in _ && (h = _.set(r, c, a)) !== void 0 ? h : (r.setAttribute(a, c + ""), c);
            }
            return _ && "get" in _ && (h = _.get(r, a)) !== null ? h : (h = l.find.attr(r, a), h ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function(r, a) {
              if (!b.radioValue && a === "radio" && fe(r, "input")) {
                var c = r.value;
                return r.setAttribute("type", a), c && (r.value = c), a;
              }
            }
          }
        },
        removeAttr: function(r, a) {
          var c, h = 0, _ = a && a.match(nt);
          if (_ && r.nodeType === 1)
            for (; c = _[h++]; )
              r.removeAttribute(c);
        }
      }), Ao = {
        set: function(r, a, c) {
          return a === !1 ? l.removeAttr(r, c) : r.setAttribute(c, c), c;
        }
      }, l.each(l.expr.match.bool.source.match(/\w+/g), function(r, a) {
        var c = xr[a] || l.find.attr;
        xr[a] = function(h, _, x) {
          var E, U, I = _.toLowerCase();
          return x || (U = xr[I], xr[I] = E, E = c(h, _, x) != null ? I : null, xr[I] = U), E;
        };
      });
      var xc = /^(?:input|select|textarea|button)$/i, Sc = /^(?:a|area)$/i;
      l.fn.extend({
        prop: function(r, a) {
          return mt(this, l.prop, r, a, arguments.length > 1);
        },
        removeProp: function(r) {
          return this.each(function() {
            delete this[l.propFix[r] || r];
          });
        }
      }), l.extend({
        prop: function(r, a, c) {
          var h, _, x = r.nodeType;
          if (!(x === 3 || x === 8 || x === 2))
            return (x !== 1 || !l.isXMLDoc(r)) && (a = l.propFix[a] || a, _ = l.propHooks[a]), c !== void 0 ? _ && "set" in _ && (h = _.set(r, c, a)) !== void 0 ? h : r[a] = c : _ && "get" in _ && (h = _.get(r, a)) !== null ? h : r[a];
        },
        propHooks: {
          tabIndex: {
            get: function(r) {
              var a = l.find.attr(r, "tabindex");
              return a ? parseInt(a, 10) : xc.test(r.nodeName) || Sc.test(r.nodeName) && r.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), b.optSelected || (l.propHooks.selected = {
        get: function(r) {
          var a = r.parentNode;
          return a && a.parentNode && a.parentNode.selectedIndex, null;
        },
        set: function(r) {
          var a = r.parentNode;
          a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
        }
      }), l.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        l.propFix[this.toLowerCase()] = this;
      });
      function xi(r) {
        var a = r.match(nt) || [];
        return a.join(" ");
      }
      function Si(r) {
        return r.getAttribute && r.getAttribute("class") || "";
      }
      function Ns(r) {
        return Array.isArray(r) ? r : typeof r == "string" ? r.match(nt) || [] : [];
      }
      l.fn.extend({
        addClass: function(r) {
          var a, c, h, _, x, E;
          return C(r) ? this.each(function(U) {
            l(this).addClass(r.call(this, U, Si(this)));
          }) : (a = Ns(r), a.length ? this.each(function() {
            if (h = Si(this), c = this.nodeType === 1 && " " + xi(h) + " ", c) {
              for (x = 0; x < a.length; x++)
                _ = a[x], c.indexOf(" " + _ + " ") < 0 && (c += _ + " ");
              E = xi(c), h !== E && this.setAttribute("class", E);
            }
          }) : this);
        },
        removeClass: function(r) {
          var a, c, h, _, x, E;
          return C(r) ? this.each(function(U) {
            l(this).removeClass(r.call(this, U, Si(this)));
          }) : arguments.length ? (a = Ns(r), a.length ? this.each(function() {
            if (h = Si(this), c = this.nodeType === 1 && " " + xi(h) + " ", c) {
              for (x = 0; x < a.length; x++)
                for (_ = a[x]; c.indexOf(" " + _ + " ") > -1; )
                  c = c.replace(" " + _ + " ", " ");
              E = xi(c), h !== E && this.setAttribute("class", E);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(r, a) {
          var c, h, _, x, E = typeof r, U = E === "string" || Array.isArray(r);
          return C(r) ? this.each(function(I) {
            l(this).toggleClass(
              r.call(this, I, Si(this), a),
              a
            );
          }) : typeof a == "boolean" && U ? a ? this.addClass(r) : this.removeClass(r) : (c = Ns(r), this.each(function() {
            if (U)
              for (x = l(this), _ = 0; _ < c.length; _++)
                h = c[_], x.hasClass(h) ? x.removeClass(h) : x.addClass(h);
            else (r === void 0 || E === "boolean") && (h = Si(this), h && W.set(this, "__className__", h), this.setAttribute && this.setAttribute(
              "class",
              h || r === !1 ? "" : W.get(this, "__className__") || ""
            ));
          }));
        },
        hasClass: function(r) {
          var a, c, h = 0;
          for (a = " " + r + " "; c = this[h++]; )
            if (c.nodeType === 1 && (" " + xi(Si(c)) + " ").indexOf(a) > -1)
              return !0;
          return !1;
        }
      });
      var yc = /\r/g;
      l.fn.extend({
        val: function(r) {
          var a, c, h, _ = this[0];
          return arguments.length ? (h = C(r), this.each(function(x) {
            var E;
            this.nodeType === 1 && (h ? E = r.call(this, x, l(this).val()) : E = r, E == null ? E = "" : typeof E == "number" ? E += "" : Array.isArray(E) && (E = l.map(E, function(U) {
              return U == null ? "" : U + "";
            })), a = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], (!a || !("set" in a) || a.set(this, E, "value") === void 0) && (this.value = E));
          })) : _ ? (a = l.valHooks[_.type] || l.valHooks[_.nodeName.toLowerCase()], a && "get" in a && (c = a.get(_, "value")) !== void 0 ? c : (c = _.value, typeof c == "string" ? c.replace(yc, "") : c ?? "")) : void 0;
        }
      }), l.extend({
        valHooks: {
          option: {
            get: function(r) {
              var a = l.find.attr(r, "value");
              return a ?? // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              xi(l.text(r));
            }
          },
          select: {
            get: function(r) {
              var a, c, h, _ = r.options, x = r.selectedIndex, E = r.type === "select-one", U = E ? null : [], I = E ? x + 1 : _.length;
              for (x < 0 ? h = I : h = E ? x : 0; h < I; h++)
                if (c = _[h], (c.selected || h === x) && // Don't return options that are disabled or in a disabled optgroup
                !c.disabled && (!c.parentNode.disabled || !fe(c.parentNode, "optgroup"))) {
                  if (a = l(c).val(), E)
                    return a;
                  U.push(a);
                }
              return U;
            },
            set: function(r, a) {
              for (var c, h, _ = r.options, x = l.makeArray(a), E = _.length; E--; )
                h = _[E], (h.selected = l.inArray(l.valHooks.option.get(h), x) > -1) && (c = !0);
              return c || (r.selectedIndex = -1), x;
            }
          }
        }
      }), l.each(["radio", "checkbox"], function() {
        l.valHooks[this] = {
          set: function(r, a) {
            if (Array.isArray(a))
              return r.checked = l.inArray(l(r).val(), a) > -1;
          }
        }, b.checkOn || (l.valHooks[this].get = function(r) {
          return r.getAttribute("value") === null ? "on" : r.value;
        });
      });
      var Sr = e.location, wo = { guid: Date.now() }, Fs = /\?/;
      l.parseXML = function(r) {
        var a, c;
        if (!r || typeof r != "string")
          return null;
        try {
          a = new e.DOMParser().parseFromString(r, "text/xml");
        } catch {
        }
        return c = a && a.getElementsByTagName("parsererror")[0], (!a || c) && l.error("Invalid XML: " + (c ? l.map(c.childNodes, function(h) {
          return h.textContent;
        }).join(`
`) : r)), a;
      };
      var Co = /^(?:focusinfocus|focusoutblur)$/, Ro = function(r) {
        r.stopPropagation();
      };
      l.extend(l.event, {
        trigger: function(r, a, c, h) {
          var _, x, E, U, I, z, te, le, $ = [c || m], ge = y.call(r, "type") ? r.type : r, Je = y.call(r, "namespace") ? r.namespace.split(".") : [];
          if (x = le = E = c = c || m, !(c.nodeType === 3 || c.nodeType === 8) && !Co.test(ge + l.event.triggered) && (ge.indexOf(".") > -1 && (Je = ge.split("."), ge = Je.shift(), Je.sort()), I = ge.indexOf(":") < 0 && "on" + ge, r = r[l.expando] ? r : new l.Event(ge, typeof r == "object" && r), r.isTrigger = h ? 2 : 3, r.namespace = Je.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Je.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = c), a = a == null ? [r] : l.makeArray(a, [r]), te = l.event.special[ge] || {}, !(!h && te.trigger && te.trigger.apply(c, a) === !1))) {
            if (!h && !te.noBubble && !g(c)) {
              for (U = te.delegateType || ge, Co.test(U + ge) || (x = x.parentNode); x; x = x.parentNode)
                $.push(x), E = x;
              E === (c.ownerDocument || m) && $.push(E.defaultView || E.parentWindow || e);
            }
            for (_ = 0; (x = $[_++]) && !r.isPropagationStopped(); )
              le = x, r.type = _ > 1 ? U : te.bindType || ge, z = (W.get(x, "events") || /* @__PURE__ */ Object.create(null))[r.type] && W.get(x, "handle"), z && z.apply(x, a), z = I && x[I], z && z.apply && ce(x) && (r.result = z.apply(x, a), r.result === !1 && r.preventDefault());
            return r.type = ge, !h && !r.isDefaultPrevented() && (!te._default || te._default.apply($.pop(), a) === !1) && ce(c) && I && C(c[ge]) && !g(c) && (E = c[I], E && (c[I] = null), l.event.triggered = ge, r.isPropagationStopped() && le.addEventListener(ge, Ro), c[ge](), r.isPropagationStopped() && le.removeEventListener(ge, Ro), l.event.triggered = void 0, E && (c[I] = E)), r.result;
          }
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(r, a, c) {
          var h = l.extend(
            new l.Event(),
            c,
            {
              type: r,
              isSimulated: !0
            }
          );
          l.event.trigger(h, null, a);
        }
      }), l.fn.extend({
        trigger: function(r, a) {
          return this.each(function() {
            l.event.trigger(r, a, this);
          });
        },
        triggerHandler: function(r, a) {
          var c = this[0];
          if (c)
            return l.event.trigger(r, a, c, !0);
        }
      });
      var Mc = /\[\]$/, Po = /\r?\n/g, Ec = /^(?:submit|button|image|reset|file)$/i, Tc = /^(?:input|select|textarea|keygen)/i;
      function Os(r, a, c, h) {
        var _;
        if (Array.isArray(a))
          l.each(a, function(x, E) {
            c || Mc.test(r) ? h(r, E) : Os(
              r + "[" + (typeof E == "object" && E != null ? x : "") + "]",
              E,
              c,
              h
            );
          });
        else if (!c && N(a) === "object")
          for (_ in a)
            Os(r + "[" + _ + "]", a[_], c, h);
        else
          h(r, a);
      }
      l.param = function(r, a) {
        var c, h = [], _ = function(x, E) {
          var U = C(E) ? E() : E;
          h[h.length] = encodeURIComponent(x) + "=" + encodeURIComponent(U ?? "");
        };
        if (r == null)
          return "";
        if (Array.isArray(r) || r.jquery && !l.isPlainObject(r))
          l.each(r, function() {
            _(this.name, this.value);
          });
        else
          for (c in r)
            Os(c, r[c], a, _);
        return h.join("&");
      }, l.fn.extend({
        serialize: function() {
          return l.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var r = l.prop(this, "elements");
            return r ? l.makeArray(r) : this;
          }).filter(function() {
            var r = this.type;
            return this.name && !l(this).is(":disabled") && Tc.test(this.nodeName) && !Ec.test(r) && (this.checked || !ye.test(r));
          }).map(function(r, a) {
            var c = l(this).val();
            return c == null ? null : Array.isArray(c) ? l.map(c, function(h) {
              return { name: a.name, value: h.replace(Po, `\r
`) };
            }) : { name: a.name, value: c.replace(Po, `\r
`) };
          }).get();
        }
      });
      var bc = /%20/g, Ac = /#.*$/, wc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)$/mg, Rc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pc = /^(?:GET|HEAD)$/, Dc = /^\/\//, Do = {}, Bs = {}, Lo = "*/".concat("*"), zs = m.createElement("a");
      zs.href = Sr.href;
      function Io(r) {
        return function(a, c) {
          typeof a != "string" && (c = a, a = "*");
          var h, _ = 0, x = a.toLowerCase().match(nt) || [];
          if (C(c))
            for (; h = x[_++]; )
              h[0] === "+" ? (h = h.slice(1) || "*", (r[h] = r[h] || []).unshift(c)) : (r[h] = r[h] || []).push(c);
        };
      }
      function Uo(r, a, c, h) {
        var _ = {}, x = r === Bs;
        function E(U) {
          var I;
          return _[U] = !0, l.each(r[U] || [], function(z, te) {
            var le = te(a, c, h);
            if (typeof le == "string" && !x && !_[le])
              return a.dataTypes.unshift(le), E(le), !1;
            if (x)
              return !(I = le);
          }), I;
        }
        return E(a.dataTypes[0]) || !_["*"] && E("*");
      }
      function Hs(r, a) {
        var c, h, _ = l.ajaxSettings.flatOptions || {};
        for (c in a)
          a[c] !== void 0 && ((_[c] ? r : h || (h = {}))[c] = a[c]);
        return h && l.extend(!0, r, h), r;
      }
      function Lc(r, a, c) {
        for (var h, _, x, E, U = r.contents, I = r.dataTypes; I[0] === "*"; )
          I.shift(), h === void 0 && (h = r.mimeType || a.getResponseHeader("Content-Type"));
        if (h) {
          for (_ in U)
            if (U[_] && U[_].test(h)) {
              I.unshift(_);
              break;
            }
        }
        if (I[0] in c)
          x = I[0];
        else {
          for (_ in c) {
            if (!I[0] || r.converters[_ + " " + I[0]]) {
              x = _;
              break;
            }
            E || (E = _);
          }
          x = x || E;
        }
        if (x)
          return x !== I[0] && I.unshift(x), c[x];
      }
      function Ic(r, a, c, h) {
        var _, x, E, U, I, z = {}, te = r.dataTypes.slice();
        if (te[1])
          for (E in r.converters)
            z[E.toLowerCase()] = r.converters[E];
        for (x = te.shift(); x; )
          if (r.responseFields[x] && (c[r.responseFields[x]] = a), !I && h && r.dataFilter && (a = r.dataFilter(a, r.dataType)), I = x, x = te.shift(), x) {
            if (x === "*")
              x = I;
            else if (I !== "*" && I !== x) {
              if (E = z[I + " " + x] || z["* " + x], !E) {
                for (_ in z)
                  if (U = _.split(" "), U[1] === x && (E = z[I + " " + U[0]] || z["* " + U[0]], E)) {
                    E === !0 ? E = z[_] : z[_] !== !0 && (x = U[0], te.unshift(U[1]));
                    break;
                  }
              }
              if (E !== !0)
                if (E && r.throws)
                  a = E(a);
                else
                  try {
                    a = E(a);
                  } catch (le) {
                    return {
                      state: "parsererror",
                      error: E ? le : "No conversion from " + I + " to " + x
                    };
                  }
            }
          }
        return { state: "success", data: a };
      }
      l.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Sr.href,
          type: "GET",
          isLocal: Rc.test(Sr.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": Lo,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": !0,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": l.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(r, a) {
          return a ? (
            // Building a settings object
            Hs(Hs(r, l.ajaxSettings), a)
          ) : (
            // Extending ajaxSettings
            Hs(l.ajaxSettings, r)
          );
        },
        ajaxPrefilter: Io(Do),
        ajaxTransport: Io(Bs),
        // Main method
        ajax: function(r, a) {
          typeof r == "object" && (a = r, r = void 0), a = a || {};
          var c, h, _, x, E, U, I, z, te, le, $ = l.ajaxSetup({}, a), ge = $.context || $, Je = $.context && (ge.nodeType || ge.jquery) ? l(ge) : l.event, xt = l.Deferred(), at = l.Callbacks("once memory"), Yt = $.statusCode || {}, Gt = {}, Pn = {}, Dn = "canceled", pt = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(Tt) {
              var Ot;
              if (I) {
                if (!x)
                  for (x = {}; Ot = Cc.exec(_); )
                    x[Ot[1].toLowerCase() + " "] = (x[Ot[1].toLowerCase() + " "] || []).concat(Ot[2]);
                Ot = x[Tt.toLowerCase() + " "];
              }
              return Ot == null ? null : Ot.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return I ? _ : null;
            },
            // Caches the header
            setRequestHeader: function(Tt, Ot) {
              return I == null && (Tt = Pn[Tt.toLowerCase()] = Pn[Tt.toLowerCase()] || Tt, Gt[Tt] = Ot), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(Tt) {
              return I == null && ($.mimeType = Tt), this;
            },
            // Status-dependent callbacks
            statusCode: function(Tt) {
              var Ot;
              if (Tt)
                if (I)
                  pt.always(Tt[pt.status]);
                else
                  for (Ot in Tt)
                    Yt[Ot] = [Yt[Ot], Tt[Ot]];
              return this;
            },
            // Cancel the request
            abort: function(Tt) {
              var Ot = Tt || Dn;
              return c && c.abort(Ot), yi(0, Ot), this;
            }
          };
          if (xt.promise(pt), $.url = ((r || $.url || Sr.href) + "").replace(Dc, Sr.protocol + "//"), $.type = a.method || a.type || $.method || $.type, $.dataTypes = ($.dataType || "*").toLowerCase().match(nt) || [""], $.crossDomain == null) {
            U = m.createElement("a");
            try {
              U.href = $.url, U.href = U.href, $.crossDomain = zs.protocol + "//" + zs.host != U.protocol + "//" + U.host;
            } catch {
              $.crossDomain = !0;
            }
          }
          if ($.data && $.processData && typeof $.data != "string" && ($.data = l.param($.data, $.traditional)), Uo(Do, $, a, pt), I)
            return pt;
          z = l.event && $.global, z && l.active++ === 0 && l.event.trigger("ajaxStart"), $.type = $.type.toUpperCase(), $.hasContent = !Pc.test($.type), h = $.url.replace(Ac, ""), $.hasContent ? $.data && $.processData && ($.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ($.data = $.data.replace(bc, "+")) : (le = $.url.slice(h.length), $.data && ($.processData || typeof $.data == "string") && (h += (Fs.test(h) ? "&" : "?") + $.data, delete $.data), $.cache === !1 && (h = h.replace(wc, "$1"), le = (Fs.test(h) ? "&" : "?") + "_=" + wo.guid++ + le), $.url = h + le), $.ifModified && (l.lastModified[h] && pt.setRequestHeader("If-Modified-Since", l.lastModified[h]), l.etag[h] && pt.setRequestHeader("If-None-Match", l.etag[h])), ($.data && $.hasContent && $.contentType !== !1 || a.contentType) && pt.setRequestHeader("Content-Type", $.contentType), pt.setRequestHeader(
            "Accept",
            $.dataTypes[0] && $.accepts[$.dataTypes[0]] ? $.accepts[$.dataTypes[0]] + ($.dataTypes[0] !== "*" ? ", " + Lo + "; q=0.01" : "") : $.accepts["*"]
          );
          for (te in $.headers)
            pt.setRequestHeader(te, $.headers[te]);
          if ($.beforeSend && ($.beforeSend.call(ge, pt, $) === !1 || I))
            return pt.abort();
          if (Dn = "abort", at.add($.complete), pt.done($.success), pt.fail($.error), c = Uo(Bs, $, a, pt), !c)
            yi(-1, "No Transport");
          else {
            if (pt.readyState = 1, z && Je.trigger("ajaxSend", [pt, $]), I)
              return pt;
            $.async && $.timeout > 0 && (E = e.setTimeout(function() {
              pt.abort("timeout");
            }, $.timeout));
            try {
              I = !1, c.send(Gt, yi);
            } catch (Tt) {
              if (I)
                throw Tt;
              yi(-1, Tt);
            }
          }
          function yi(Tt, Ot, Mr, Gs) {
            var Ln, Er, In, ni, ii, gn = Ot;
            I || (I = !0, E && e.clearTimeout(E), c = void 0, _ = Gs || "", pt.readyState = Tt > 0 ? 4 : 0, Ln = Tt >= 200 && Tt < 300 || Tt === 304, Mr && (ni = Lc($, pt, Mr)), !Ln && l.inArray("script", $.dataTypes) > -1 && l.inArray("json", $.dataTypes) < 0 && ($.converters["text script"] = function() {
            }), ni = Ic($, ni, pt, Ln), Ln ? ($.ifModified && (ii = pt.getResponseHeader("Last-Modified"), ii && (l.lastModified[h] = ii), ii = pt.getResponseHeader("etag"), ii && (l.etag[h] = ii)), Tt === 204 || $.type === "HEAD" ? gn = "nocontent" : Tt === 304 ? gn = "notmodified" : (gn = ni.state, Er = ni.data, In = ni.error, Ln = !In)) : (In = gn, (Tt || !gn) && (gn = "error", Tt < 0 && (Tt = 0))), pt.status = Tt, pt.statusText = (Ot || gn) + "", Ln ? xt.resolveWith(ge, [Er, gn, pt]) : xt.rejectWith(ge, [pt, gn, In]), pt.statusCode(Yt), Yt = void 0, z && Je.trigger(
              Ln ? "ajaxSuccess" : "ajaxError",
              [pt, $, Ln ? Er : In]
            ), at.fireWith(ge, [pt, gn]), z && (Je.trigger("ajaxComplete", [pt, $]), --l.active || l.event.trigger("ajaxStop")));
          }
          return pt;
        },
        getJSON: function(r, a, c) {
          return l.get(r, a, c, "json");
        },
        getScript: function(r, a) {
          return l.get(r, void 0, a, "script");
        }
      }), l.each(["get", "post"], function(r, a) {
        l[a] = function(c, h, _, x) {
          return C(h) && (x = x || _, _ = h, h = void 0), l.ajax(l.extend({
            url: c,
            type: a,
            dataType: x,
            data: h,
            success: _
          }, l.isPlainObject(c) && c));
        };
      }), l.ajaxPrefilter(function(r) {
        var a;
        for (a in r.headers)
          a.toLowerCase() === "content-type" && (r.contentType = r.headers[a] || "");
      }), l._evalUrl = function(r, a, c) {
        return l.ajax({
          url: r,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(h) {
            l.globalEval(h, a, c);
          }
        });
      }, l.fn.extend({
        wrapAll: function(r) {
          var a;
          return this[0] && (C(r) && (r = r.call(this[0])), a = l(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function() {
            for (var c = this; c.firstElementChild; )
              c = c.firstElementChild;
            return c;
          }).append(this)), this;
        },
        wrapInner: function(r) {
          return C(r) ? this.each(function(a) {
            l(this).wrapInner(r.call(this, a));
          }) : this.each(function() {
            var a = l(this), c = a.contents();
            c.length ? c.wrapAll(r) : a.append(r);
          });
        },
        wrap: function(r) {
          var a = C(r);
          return this.each(function(c) {
            l(this).wrapAll(a ? r.call(this, c) : r);
          });
        },
        unwrap: function(r) {
          return this.parent(r).not("body").each(function() {
            l(this).replaceWith(this.childNodes);
          }), this;
        }
      }), l.expr.pseudos.hidden = function(r) {
        return !l.expr.pseudos.visible(r);
      }, l.expr.pseudos.visible = function(r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
      }, l.ajaxSettings.xhr = function() {
        try {
          return new e.XMLHttpRequest();
        } catch {
        }
      };
      var Uc = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, yr = l.ajaxSettings.xhr();
      b.cors = !!yr && "withCredentials" in yr, b.ajax = yr = !!yr, l.ajaxTransport(function(r) {
        var a, c;
        if (b.cors || yr && !r.crossDomain)
          return {
            send: function(h, _) {
              var x, E = r.xhr();
              if (E.open(
                r.type,
                r.url,
                r.async,
                r.username,
                r.password
              ), r.xhrFields)
                for (x in r.xhrFields)
                  E[x] = r.xhrFields[x];
              r.mimeType && E.overrideMimeType && E.overrideMimeType(r.mimeType), !r.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
              for (x in h)
                E.setRequestHeader(x, h[x]);
              a = function(U) {
                return function() {
                  a && (a = c = E.onload = E.onerror = E.onabort = E.ontimeout = E.onreadystatechange = null, U === "abort" ? E.abort() : U === "error" ? typeof E.status != "number" ? _(0, "error") : _(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    E.status,
                    E.statusText
                  ) : _(
                    Uc[E.status] || E.status,
                    E.statusText,
                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (E.responseType || "text") !== "text" || typeof E.responseText != "string" ? { binary: E.response } : { text: E.responseText },
                    E.getAllResponseHeaders()
                  ));
                };
              }, E.onload = a(), c = E.onerror = E.ontimeout = a("error"), E.onabort !== void 0 ? E.onabort = c : E.onreadystatechange = function() {
                E.readyState === 4 && e.setTimeout(function() {
                  a && c();
                });
              }, a = a("abort");
              try {
                E.send(r.hasContent && r.data || null);
              } catch (U) {
                if (a)
                  throw U;
              }
            },
            abort: function() {
              a && a();
            }
          };
      }), l.ajaxPrefilter(function(r) {
        r.crossDomain && (r.contents.script = !1);
      }), l.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(r) {
            return l.globalEval(r), r;
          }
        }
      }), l.ajaxPrefilter("script", function(r) {
        r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET");
      }), l.ajaxTransport("script", function(r) {
        if (r.crossDomain || r.scriptAttrs) {
          var a, c;
          return {
            send: function(h, _) {
              a = l("<script>").attr(r.scriptAttrs || {}).prop({ charset: r.scriptCharset, src: r.url }).on("load error", c = function(x) {
                a.remove(), c = null, x && _(x.type === "error" ? 404 : 200, x.type);
              }), m.head.appendChild(a[0]);
            },
            abort: function() {
              c && c();
            }
          };
        }
      });
      var No = [], ks = /(=)\?(?=&|$)|\?\?/;
      l.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var r = No.pop() || l.expando + "_" + wo.guid++;
          return this[r] = !0, r;
        }
      }), l.ajaxPrefilter("json jsonp", function(r, a, c) {
        var h, _, x, E = r.jsonp !== !1 && (ks.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ks.test(r.data) && "data");
        if (E || r.dataTypes[0] === "jsonp")
          return h = r.jsonpCallback = C(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, E ? r[E] = r[E].replace(ks, "$1" + h) : r.jsonp !== !1 && (r.url += (Fs.test(r.url) ? "&" : "?") + r.jsonp + "=" + h), r.converters["script json"] = function() {
            return x || l.error(h + " was not called"), x[0];
          }, r.dataTypes[0] = "json", _ = e[h], e[h] = function() {
            x = arguments;
          }, c.always(function() {
            _ === void 0 ? l(e).removeProp(h) : e[h] = _, r[h] && (r.jsonpCallback = a.jsonpCallback, No.push(h)), x && C(_) && _(x[0]), x = _ = void 0;
          }), "script";
      }), b.createHTMLDocument = (function() {
        var r = m.implementation.createHTMLDocument("").body;
        return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2;
      })(), l.parseHTML = function(r, a, c) {
        if (typeof r != "string")
          return [];
        typeof a == "boolean" && (c = a, a = !1);
        var h, _, x;
        return a || (b.createHTMLDocument ? (a = m.implementation.createHTMLDocument(""), h = a.createElement("base"), h.href = m.location.href, a.head.appendChild(h)) : a = m), _ = _t.exec(r), x = !c && [], _ ? [a.createElement(_[1])] : (_ = mn([r], a, x), x && x.length && l(x).remove(), l.merge([], _.childNodes));
      }, l.fn.load = function(r, a, c) {
        var h, _, x, E = this, U = r.indexOf(" ");
        return U > -1 && (h = xi(r.slice(U)), r = r.slice(0, U)), C(a) ? (c = a, a = void 0) : a && typeof a == "object" && (_ = "POST"), E.length > 0 && l.ajax({
          url: r,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: _ || "GET",
          dataType: "html",
          data: a
        }).done(function(I) {
          x = arguments, E.html(h ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            l("<div>").append(l.parseHTML(I)).find(h)
          ) : (
            // Otherwise use the full result
            I
          ));
        }).always(c && function(I, z) {
          E.each(function() {
            c.apply(this, x || [I.responseText, z, I]);
          });
        }), this;
      }, l.expr.pseudos.animated = function(r) {
        return l.grep(l.timers, function(a) {
          return r === a.elem;
        }).length;
      }, l.offset = {
        setOffset: function(r, a, c) {
          var h, _, x, E, U, I, z, te = l.css(r, "position"), le = l(r), $ = {};
          te === "static" && (r.style.position = "relative"), U = le.offset(), x = l.css(r, "top"), I = l.css(r, "left"), z = (te === "absolute" || te === "fixed") && (x + I).indexOf("auto") > -1, z ? (h = le.position(), E = h.top, _ = h.left) : (E = parseFloat(x) || 0, _ = parseFloat(I) || 0), C(a) && (a = a.call(r, c, l.extend({}, U))), a.top != null && ($.top = a.top - U.top + E), a.left != null && ($.left = a.left - U.left + _), "using" in a ? a.using.call(r, $) : le.css($);
        }
      }, l.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(r) {
          if (arguments.length)
            return r === void 0 ? this : this.each(function(_) {
              l.offset.setOffset(this, r, _);
            });
          var a, c, h = this[0];
          if (h)
            return h.getClientRects().length ? (a = h.getBoundingClientRect(), c = h.ownerDocument.defaultView, {
              top: a.top + c.pageYOffset,
              left: a.left + c.pageXOffset
            }) : { top: 0, left: 0 };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (this[0]) {
            var r, a, c, h = this[0], _ = { top: 0, left: 0 };
            if (l.css(h, "position") === "fixed")
              a = h.getBoundingClientRect();
            else {
              for (a = this.offset(), c = h.ownerDocument, r = h.offsetParent || c.documentElement; r && (r === c.body || r === c.documentElement) && l.css(r, "position") === "static"; )
                r = r.parentNode;
              r && r !== h && r.nodeType === 1 && (_ = l(r).offset(), _.top += l.css(r, "borderTopWidth", !0), _.left += l.css(r, "borderLeftWidth", !0));
            }
            return {
              top: a.top - _.top - l.css(h, "marginTop", !0),
              left: a.left - _.left - l.css(h, "marginLeft", !0)
            };
          }
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            for (var r = this.offsetParent; r && l.css(r, "position") === "static"; )
              r = r.offsetParent;
            return r || Ce;
          });
        }
      }), l.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(r, a) {
        var c = a === "pageYOffset";
        l.fn[r] = function(h) {
          return mt(this, function(_, x, E) {
            var U;
            if (g(_) ? U = _ : _.nodeType === 9 && (U = _.defaultView), E === void 0)
              return U ? U[a] : _[x];
            U ? U.scrollTo(
              c ? U.pageXOffset : E,
              c ? E : U.pageYOffset
            ) : _[x] = E;
          }, r, h, arguments.length);
        };
      }), l.each(["top", "left"], function(r, a) {
        l.cssHooks[a] = Oe(
          b.pixelPosition,
          function(c, h) {
            if (h)
              return h = Me(c, a), G.test(h) ? l(c).position()[a] + "px" : h;
          }
        );
      }), l.each({ Height: "height", Width: "width" }, function(r, a) {
        l.each({
          padding: "inner" + r,
          content: a,
          "": "outer" + r
        }, function(c, h) {
          l.fn[h] = function(_, x) {
            var E = arguments.length && (c || typeof _ != "boolean"), U = c || (_ === !0 || x === !0 ? "margin" : "border");
            return mt(this, function(I, z, te) {
              var le;
              return g(I) ? h.indexOf("outer") === 0 ? I["inner" + r] : I.document.documentElement["client" + r] : I.nodeType === 9 ? (le = I.documentElement, Math.max(
                I.body["scroll" + r],
                le["scroll" + r],
                I.body["offset" + r],
                le["offset" + r],
                le["client" + r]
              )) : te === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                l.css(I, z, U)
              ) : (
                // Set width or height on the element
                l.style(I, z, te, U)
              );
            }, a, E ? _ : void 0, E);
          };
        });
      }), l.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(r, a) {
        l.fn[a] = function(c) {
          return this.on(a, c);
        };
      }), l.fn.extend({
        bind: function(r, a, c) {
          return this.on(r, null, a, c);
        },
        unbind: function(r, a) {
          return this.off(r, null, a);
        },
        delegate: function(r, a, c, h) {
          return this.on(a, r, c, h);
        },
        undelegate: function(r, a, c) {
          return arguments.length === 1 ? this.off(r, "**") : this.off(a, r || "**", c);
        },
        hover: function(r, a) {
          return this.on("mouseenter", r).on("mouseleave", a || r);
        }
      }), l.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(r, a) {
          l.fn[a] = function(c, h) {
            return arguments.length > 0 ? this.on(a, null, c, h) : this.trigger(a);
          };
        }
      );
      var Nc = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      l.proxy = function(r, a) {
        var c, h, _;
        if (typeof a == "string" && (c = r[a], a = r, r = c), !!C(r))
          return h = o.call(arguments, 2), _ = function() {
            return r.apply(a || this, h.concat(o.call(arguments)));
          }, _.guid = r.guid = r.guid || l.guid++, _;
      }, l.holdReady = function(r) {
        r ? l.readyWait++ : l.ready(!0);
      }, l.isArray = Array.isArray, l.parseJSON = JSON.parse, l.nodeName = fe, l.isFunction = C, l.isWindow = g, l.camelCase = q, l.type = N, l.now = Date.now, l.isNumeric = function(r) {
        var a = l.type(r);
        return (a === "number" || a === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(r - parseFloat(r));
      }, l.trim = function(r) {
        return r == null ? "" : (r + "").replace(Nc, "$1");
      };
      var Fc = e.jQuery, Oc = e.$;
      return l.noConflict = function(r) {
        return e.$ === l && (e.$ = Oc), r && e.jQuery === l && (e.jQuery = Fc), l;
      }, typeof t > "u" && (e.jQuery = e.$ = l), l;
    });
  })(gs)), gs.exports;
}
var jc = Yc();
const hg = /* @__PURE__ */ Xc(jc);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const mo = "169", $c = 0, Ho = 1, Kc = 2, Hl = 1, Zc = 2, Yn = 3, pi = 0, un = 1, jn = 2, hi = 0, ir = 1, ko = 2, Go = 3, Vo = 4, Jc = 5, Di = 100, Qc = 101, eu = 102, tu = 103, nu = 104, iu = 200, ru = 201, su = 202, au = 203, wa = 204, Ca = 205, ou = 206, lu = 207, cu = 208, uu = 209, fu = 210, hu = 211, du = 212, pu = 213, mu = 214, Ra = 0, Pa = 1, Da = 2, lr = 3, La = 4, Ia = 5, Ua = 6, Na = 7, kl = 0, gu = 1, _u = 2, di = 0, vu = 1, xu = 2, Su = 3, yu = 4, Mu = 5, Eu = 6, Tu = 7, Gl = 300, cr = 301, ur = 302, Fa = 303, Oa = 304, Rs = 306, Ba = 1e3, Ii = 1001, za = 1002, Sn = 1003, bu = 1004, jr = 1005, wn = 1006, $s = 1007, Ui = 1008, Zn = 1009, Vl = 1010, Wl = 1011, Lr = 1012, go = 1013, Fi = 1014, $n = 1015, Ir = 1016, _o = 1017, vo = 1018, fr = 1020, Xl = 35902, ql = 1021, Yl = 1022, Rn = 1023, jl = 1024, $l = 1025, rr = 1026, hr = 1027, Kl = 1028, xo = 1029, Zl = 1030, So = 1031, yo = 1033, _s = 33776, vs = 33777, xs = 33778, Ss = 33779, Ha = 35840, ka = 35841, Ga = 35842, Va = 35843, Wa = 36196, Xa = 37492, qa = 37496, Ya = 37808, ja = 37809, $a = 37810, Ka = 37811, Za = 37812, Ja = 37813, Qa = 37814, eo = 37815, to = 37816, no = 37817, io = 37818, ro = 37819, so = 37820, ao = 37821, ys = 36492, oo = 36494, lo = 36495, Jl = 36283, co = 36284, uo = 36285, fo = 36286, Au = 3200, wu = 3201, Cu = 0, Ru = 1, fi = "", Nn = "srgb", mi = "srgb-linear", Mo = "display-p3", Ps = "display-p3-linear", Ts = "linear", Nt = "srgb", bs = "rec709", As = "p3", Gi = 7680, Wo = 519, Pu = 512, Du = 513, Lu = 514, Ql = 515, Iu = 516, Uu = 517, Nu = 518, Fu = 519, Xo = 35044, qo = "300 es", Kn = 2e3, ws = 2001;
class pr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const s = this._listeners[e];
    if (s !== void 0) {
      const o = s.indexOf(t);
      o !== -1 && s.splice(o, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const s = n.slice(0);
      for (let o = 0, u = s.length; o < u; o++)
        s[o].call(this, e);
      e.target = null;
    }
  }
}
const Jt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Ks = Math.PI / 180, ho = 180 / Math.PI;
function Ur() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Jt[i & 255] + Jt[i >> 8 & 255] + Jt[i >> 16 & 255] + Jt[i >> 24 & 255] + "-" + Jt[e & 255] + Jt[e >> 8 & 255] + "-" + Jt[e >> 16 & 15 | 64] + Jt[e >> 24 & 255] + "-" + Jt[t & 63 | 128] + Jt[t >> 8 & 255] + "-" + Jt[t >> 16 & 255] + Jt[t >> 24 & 255] + Jt[n & 255] + Jt[n >> 8 & 255] + Jt[n >> 16 & 255] + Jt[n >> 24 & 255]).toLowerCase();
}
function cn(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Ou(i, e) {
  return (i % e + e) % e;
}
function Zs(i, e, t) {
  return (1 - t) * i + t * e;
}
function br(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ln(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class wt {
  constructor(e = 0, t = 0) {
    wt.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(cn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), o = this.x - e.x, u = this.y - e.y;
    return this.x = o * n - u * s + e.x, this.y = o * s + u * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class lt {
  constructor(e, t, n, s, o, u, f, d, p) {
    lt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, o, u, f, d, p);
  }
  set(e, t, n, s, o, u, f, d, p) {
    const v = this.elements;
    return v[0] = e, v[1] = s, v[2] = f, v[3] = t, v[4] = o, v[5] = d, v[6] = n, v[7] = u, v[8] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, o = this.elements, u = n[0], f = n[3], d = n[6], p = n[1], v = n[4], y = n[7], S = n[2], M = n[5], b = n[8], C = s[0], g = s[3], m = s[6], F = s[1], D = s[4], N = s[7], ne = s[2], k = s[5], l = s[8];
    return o[0] = u * C + f * F + d * ne, o[3] = u * g + f * D + d * k, o[6] = u * m + f * N + d * l, o[1] = p * C + v * F + y * ne, o[4] = p * g + v * D + y * k, o[7] = p * m + v * N + y * l, o[2] = S * C + M * F + b * ne, o[5] = S * g + M * D + b * k, o[8] = S * m + M * N + b * l, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], o = e[3], u = e[4], f = e[5], d = e[6], p = e[7], v = e[8];
    return t * u * v - t * f * p - n * o * v + n * f * d + s * o * p - s * u * d;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], o = e[3], u = e[4], f = e[5], d = e[6], p = e[7], v = e[8], y = v * u - f * p, S = f * d - v * o, M = p * o - u * d, b = t * y + n * S + s * M;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / b;
    return e[0] = y * C, e[1] = (s * p - v * n) * C, e[2] = (f * n - s * u) * C, e[3] = S * C, e[4] = (v * t - s * d) * C, e[5] = (s * o - f * t) * C, e[6] = M * C, e[7] = (n * d - p * t) * C, e[8] = (u * t - n * o) * C, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, o, u, f) {
    const d = Math.cos(o), p = Math.sin(o);
    return this.set(
      n * d,
      n * p,
      -n * (d * u + p * f) + u + e,
      -s * p,
      s * d,
      -s * (-p * u + d * f) + f + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Js.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Js.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Js.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Js = /* @__PURE__ */ new lt();
function ec(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Cs(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Bu() {
  const i = Cs("canvas");
  return i.style.display = "block", i;
}
const Yo = {};
function Ms(i) {
  i in Yo || (Yo[i] = !0, console.warn(i));
}
function zu(i, e, t) {
  return new Promise(function(n, s) {
    function o() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(o, t);
          break;
        default:
          n();
      }
    }
    setTimeout(o, t);
  });
}
function Hu(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function ku(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const jo = /* @__PURE__ */ new lt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), $o = /* @__PURE__ */ new lt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Ar = {
  [mi]: {
    transfer: Ts,
    primaries: bs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [Nn]: {
    transfer: Nt,
    primaries: bs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [Ps]: {
    transfer: Ts,
    primaries: As,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.applyMatrix3($o),
    fromReference: (i) => i.applyMatrix3(jo)
  },
  [Mo]: {
    transfer: Nt,
    primaries: As,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3($o),
    fromReference: (i) => i.applyMatrix3(jo).convertLinearToSRGB()
  }
}, Gu = /* @__PURE__ */ new Set([mi, Ps]), Rt = {
  enabled: !0,
  _workingColorSpace: mi,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!Gu.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = Ar[e].toReference, s = Ar[t].fromReference;
    return s(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return Ar[i].primaries;
  },
  getTransfer: function(i) {
    return i === fi ? Ts : Ar[i].transfer;
  },
  getLuminanceCoefficients: function(i, e = this._workingColorSpace) {
    return i.fromArray(Ar[e].luminanceCoefficients);
  }
};
function sr(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Qs(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Vi;
class Vu {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Vi === void 0 && (Vi = Cs("canvas")), Vi.width = e.width, Vi.height = e.height;
      const n = Vi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Vi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Cs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const s = n.getImageData(0, 0, e.width, e.height), o = s.data;
      for (let u = 0; u < o.length; u++)
        o[u] = sr(o[u] / 255) * 255;
      return n.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(sr(t[n] / 255) * 255) : t[n] = sr(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Wu = 0;
class tc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Wu++ }), this.uuid = Ur(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, s = this.data;
    if (s !== null) {
      let o;
      if (Array.isArray(s)) {
        o = [];
        for (let u = 0, f = s.length; u < f; u++)
          s[u].isDataTexture ? o.push(ea(s[u].image)) : o.push(ea(s[u]));
      } else
        o = ea(s);
      n.url = o;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ea(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Vu.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Xu = 0;
class fn extends pr {
  constructor(e = fn.DEFAULT_IMAGE, t = fn.DEFAULT_MAPPING, n = Ii, s = Ii, o = wn, u = Ui, f = Rn, d = Zn, p = fn.DEFAULT_ANISOTROPY, v = fi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Xu++ }), this.uuid = Ur(), this.name = "", this.source = new tc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = o, this.minFilter = u, this.anisotropy = p, this.format = f, this.internalFormat = null, this.type = d, this.offset = new wt(0, 0), this.repeat = new wt(1, 1), this.center = new wt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new lt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = v, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Gl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ba:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ii:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case za:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ba:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ii:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case za:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
fn.DEFAULT_IMAGE = null;
fn.DEFAULT_MAPPING = Gl;
fn.DEFAULT_ANISOTROPY = 1;
class Bt {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    Bt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, s) {
    return this.x = e, this.y = t, this.z = n, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, o = this.w, u = e.elements;
    return this.x = u[0] * t + u[4] * n + u[8] * s + u[12] * o, this.y = u[1] * t + u[5] * n + u[9] * s + u[13] * o, this.z = u[2] * t + u[6] * n + u[10] * s + u[14] * o, this.w = u[3] * t + u[7] * n + u[11] * s + u[15] * o, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, s, o;
    const d = e.elements, p = d[0], v = d[4], y = d[8], S = d[1], M = d[5], b = d[9], C = d[2], g = d[6], m = d[10];
    if (Math.abs(v - S) < 0.01 && Math.abs(y - C) < 0.01 && Math.abs(b - g) < 0.01) {
      if (Math.abs(v + S) < 0.1 && Math.abs(y + C) < 0.1 && Math.abs(b + g) < 0.1 && Math.abs(p + M + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const D = (p + 1) / 2, N = (M + 1) / 2, ne = (m + 1) / 2, k = (v + S) / 4, l = (y + C) / 4, Q = (b + g) / 4;
      return D > N && D > ne ? D < 0.01 ? (n = 0, s = 0.707106781, o = 0.707106781) : (n = Math.sqrt(D), s = k / n, o = l / n) : N > ne ? N < 0.01 ? (n = 0.707106781, s = 0, o = 0.707106781) : (s = Math.sqrt(N), n = k / s, o = Q / s) : ne < 0.01 ? (n = 0.707106781, s = 0.707106781, o = 0) : (o = Math.sqrt(ne), n = l / o, s = Q / o), this.set(n, s, o, t), this;
    }
    let F = Math.sqrt((g - b) * (g - b) + (y - C) * (y - C) + (S - v) * (S - v));
    return Math.abs(F) < 1e-3 && (F = 1), this.x = (g - b) / F, this.y = (y - C) / F, this.z = (S - v) / F, this.w = Math.acos((p + M + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class qu extends pr {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Bt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Bt(0, 0, e, t);
    const s = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: wn,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const o = new fn(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    o.flipY = !1, o.generateMipmaps = n.generateMipmaps, o.internalFormat = n.internalFormat, this.textures = [];
    const u = n.count;
    for (let f = 0; f < u; f++)
      this.textures[f] = o.clone(), this.textures[f].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let s = 0, o = this.textures.length; s < o; s++)
        this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, s = e.textures.length; n < s; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new tc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Oi extends qu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class nc extends fn {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Sn, this.minFilter = Sn, this.wrapR = Ii, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Yu extends fn {
  constructor(e = null, t = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: s }, this.magFilter = Sn, this.minFilter = Sn, this.wrapR = Ii, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Nr {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, o, u, f) {
    let d = n[s + 0], p = n[s + 1], v = n[s + 2], y = n[s + 3];
    const S = o[u + 0], M = o[u + 1], b = o[u + 2], C = o[u + 3];
    if (f === 0) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = v, e[t + 3] = y;
      return;
    }
    if (f === 1) {
      e[t + 0] = S, e[t + 1] = M, e[t + 2] = b, e[t + 3] = C;
      return;
    }
    if (y !== C || d !== S || p !== M || v !== b) {
      let g = 1 - f;
      const m = d * S + p * M + v * b + y * C, F = m >= 0 ? 1 : -1, D = 1 - m * m;
      if (D > Number.EPSILON) {
        const ne = Math.sqrt(D), k = Math.atan2(ne, m * F);
        g = Math.sin(g * k) / ne, f = Math.sin(f * k) / ne;
      }
      const N = f * F;
      if (d = d * g + S * N, p = p * g + M * N, v = v * g + b * N, y = y * g + C * N, g === 1 - f) {
        const ne = 1 / Math.sqrt(d * d + p * p + v * v + y * y);
        d *= ne, p *= ne, v *= ne, y *= ne;
      }
    }
    e[t] = d, e[t + 1] = p, e[t + 2] = v, e[t + 3] = y;
  }
  static multiplyQuaternionsFlat(e, t, n, s, o, u) {
    const f = n[s], d = n[s + 1], p = n[s + 2], v = n[s + 3], y = o[u], S = o[u + 1], M = o[u + 2], b = o[u + 3];
    return e[t] = f * b + v * y + d * M - p * S, e[t + 1] = d * b + v * S + p * y - f * M, e[t + 2] = p * b + v * M + f * S - d * y, e[t + 3] = v * b - f * y - d * S - p * M, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, o = e._z, u = e._order, f = Math.cos, d = Math.sin, p = f(n / 2), v = f(s / 2), y = f(o / 2), S = d(n / 2), M = d(s / 2), b = d(o / 2);
    switch (u) {
      case "XYZ":
        this._x = S * v * y + p * M * b, this._y = p * M * y - S * v * b, this._z = p * v * b + S * M * y, this._w = p * v * y - S * M * b;
        break;
      case "YXZ":
        this._x = S * v * y + p * M * b, this._y = p * M * y - S * v * b, this._z = p * v * b - S * M * y, this._w = p * v * y + S * M * b;
        break;
      case "ZXY":
        this._x = S * v * y - p * M * b, this._y = p * M * y + S * v * b, this._z = p * v * b + S * M * y, this._w = p * v * y - S * M * b;
        break;
      case "ZYX":
        this._x = S * v * y - p * M * b, this._y = p * M * y + S * v * b, this._z = p * v * b - S * M * y, this._w = p * v * y + S * M * b;
        break;
      case "YZX":
        this._x = S * v * y + p * M * b, this._y = p * M * y + S * v * b, this._z = p * v * b - S * M * y, this._w = p * v * y - S * M * b;
        break;
      case "XZY":
        this._x = S * v * y - p * M * b, this._y = p * M * y - S * v * b, this._z = p * v * b + S * M * y, this._w = p * v * y + S * M * b;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + u);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], o = t[8], u = t[1], f = t[5], d = t[9], p = t[2], v = t[6], y = t[10], S = n + f + y;
    if (S > 0) {
      const M = 0.5 / Math.sqrt(S + 1);
      this._w = 0.25 / M, this._x = (v - d) * M, this._y = (o - p) * M, this._z = (u - s) * M;
    } else if (n > f && n > y) {
      const M = 2 * Math.sqrt(1 + n - f - y);
      this._w = (v - d) / M, this._x = 0.25 * M, this._y = (s + u) / M, this._z = (o + p) / M;
    } else if (f > y) {
      const M = 2 * Math.sqrt(1 + f - n - y);
      this._w = (o - p) / M, this._x = (s + u) / M, this._y = 0.25 * M, this._z = (d + v) / M;
    } else {
      const M = 2 * Math.sqrt(1 + y - n - f);
      this._w = (u - s) / M, this._x = (o + p) / M, this._y = (d + v) / M, this._z = 0.25 * M;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(cn(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, o = e._z, u = e._w, f = t._x, d = t._y, p = t._z, v = t._w;
    return this._x = n * v + u * f + s * p - o * d, this._y = s * v + u * d + o * f - n * p, this._z = o * v + u * p + n * d - s * f, this._w = u * v - n * f - s * d - o * p, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, o = this._z, u = this._w;
    let f = u * e._w + n * e._x + s * e._y + o * e._z;
    if (f < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, f = -f) : this.copy(e), f >= 1)
      return this._w = u, this._x = n, this._y = s, this._z = o, this;
    const d = 1 - f * f;
    if (d <= Number.EPSILON) {
      const M = 1 - t;
      return this._w = M * u + t * this._w, this._x = M * n + t * this._x, this._y = M * s + t * this._y, this._z = M * o + t * this._z, this.normalize(), this;
    }
    const p = Math.sqrt(d), v = Math.atan2(p, f), y = Math.sin((1 - t) * v) / p, S = Math.sin(t * v) / p;
    return this._w = u * y + this._w * S, this._x = n * y + this._x * S, this._y = s * y + this._y * S, this._z = o * y + this._z * S, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), o = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      o * Math.sin(t),
      o * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class ee {
  constructor(e = 0, t = 0, n = 0) {
    ee.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ko.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ko.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, o = e.elements;
    return this.x = o[0] * t + o[3] * n + o[6] * s, this.y = o[1] * t + o[4] * n + o[7] * s, this.z = o[2] * t + o[5] * n + o[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, o = e.elements, u = 1 / (o[3] * t + o[7] * n + o[11] * s + o[15]);
    return this.x = (o[0] * t + o[4] * n + o[8] * s + o[12]) * u, this.y = (o[1] * t + o[5] * n + o[9] * s + o[13]) * u, this.z = (o[2] * t + o[6] * n + o[10] * s + o[14]) * u, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, o = e.x, u = e.y, f = e.z, d = e.w, p = 2 * (u * s - f * n), v = 2 * (f * t - o * s), y = 2 * (o * n - u * t);
    return this.x = t + d * p + u * y - f * v, this.y = n + d * v + f * p - o * y, this.z = s + d * y + o * v - u * p, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * s, this.y = o[1] * t + o[5] * n + o[9] * s, this.z = o[2] * t + o[6] * n + o[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, o = e.z, u = t.x, f = t.y, d = t.z;
    return this.x = s * d - o * f, this.y = o * u - n * d, this.z = n * f - s * u, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return ta.copy(this).projectOnVector(e), this.sub(ta);
  }
  reflect(e) {
    return this.sub(ta.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(cn(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ta = /* @__PURE__ */ new ee(), Ko = /* @__PURE__ */ new Nr();
class Fr {
  constructor(e = new ee(1 / 0, 1 / 0, 1 / 0), t = new ee(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Tn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Tn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Tn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const o = n.getAttribute("position");
      if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0)
        for (let u = 0, f = o.count; u < f; u++)
          e.isMesh === !0 ? e.getVertexPosition(u, Tn) : Tn.fromBufferAttribute(o, u), Tn.applyMatrix4(e.matrixWorld), this.expandByPoint(Tn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), $r.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), $r.copy(n.boundingBox)), $r.applyMatrix4(e.matrixWorld), this.union($r);
    }
    const s = e.children;
    for (let o = 0, u = s.length; o < u; o++)
      this.expandByObject(s[o], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Tn), Tn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(wr), Kr.subVectors(this.max, wr), Wi.subVectors(e.a, wr), Xi.subVectors(e.b, wr), qi.subVectors(e.c, wr), si.subVectors(Xi, Wi), ai.subVectors(qi, Xi), Ei.subVectors(Wi, qi);
    let t = [
      0,
      -si.z,
      si.y,
      0,
      -ai.z,
      ai.y,
      0,
      -Ei.z,
      Ei.y,
      si.z,
      0,
      -si.x,
      ai.z,
      0,
      -ai.x,
      Ei.z,
      0,
      -Ei.x,
      -si.y,
      si.x,
      0,
      -ai.y,
      ai.x,
      0,
      -Ei.y,
      Ei.x,
      0
    ];
    return !na(t, Wi, Xi, qi, Kr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !na(t, Wi, Xi, qi, Kr)) ? !1 : (Zr.crossVectors(si, ai), t = [Zr.x, Zr.y, Zr.z], na(t, Wi, Xi, qi, Kr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Tn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Tn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Gn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Gn = [
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee(),
  /* @__PURE__ */ new ee()
], Tn = /* @__PURE__ */ new ee(), $r = /* @__PURE__ */ new Fr(), Wi = /* @__PURE__ */ new ee(), Xi = /* @__PURE__ */ new ee(), qi = /* @__PURE__ */ new ee(), si = /* @__PURE__ */ new ee(), ai = /* @__PURE__ */ new ee(), Ei = /* @__PURE__ */ new ee(), wr = /* @__PURE__ */ new ee(), Kr = /* @__PURE__ */ new ee(), Zr = /* @__PURE__ */ new ee(), Ti = /* @__PURE__ */ new ee();
function na(i, e, t, n, s) {
  for (let o = 0, u = i.length - 3; o <= u; o += 3) {
    Ti.fromArray(i, o);
    const f = s.x * Math.abs(Ti.x) + s.y * Math.abs(Ti.y) + s.z * Math.abs(Ti.z), d = e.dot(Ti), p = t.dot(Ti), v = n.dot(Ti);
    if (Math.max(-Math.max(d, p, v), Math.min(d, p, v)) > f)
      return !1;
  }
  return !0;
}
const ju = /* @__PURE__ */ new Fr(), Cr = /* @__PURE__ */ new ee(), ia = /* @__PURE__ */ new ee();
class Eo {
  constructor(e = new ee(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ju.setFromPoints(e).getCenter(n);
    let s = 0;
    for (let o = 0, u = e.length; o < u; o++)
      s = Math.max(s, n.distanceToSquared(e[o]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Cr.subVectors(e, this.center);
    const t = Cr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Cr, s / n), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ia.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Cr.copy(e.center).add(ia)), this.expandByPoint(Cr.copy(e.center).sub(ia))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = /* @__PURE__ */ new ee(), ra = /* @__PURE__ */ new ee(), Jr = /* @__PURE__ */ new ee(), oi = /* @__PURE__ */ new ee(), sa = /* @__PURE__ */ new ee(), Qr = /* @__PURE__ */ new ee(), aa = /* @__PURE__ */ new ee();
class $u {
  constructor(e = new ee(), t = new ee(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Vn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Vn.copy(this.origin).addScaledVector(this.direction, t), Vn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, s) {
    ra.copy(e).add(t).multiplyScalar(0.5), Jr.copy(t).sub(e).normalize(), oi.copy(this.origin).sub(ra);
    const o = e.distanceTo(t) * 0.5, u = -this.direction.dot(Jr), f = oi.dot(this.direction), d = -oi.dot(Jr), p = oi.lengthSq(), v = Math.abs(1 - u * u);
    let y, S, M, b;
    if (v > 0)
      if (y = u * d - f, S = u * f - d, b = o * v, y >= 0)
        if (S >= -b)
          if (S <= b) {
            const C = 1 / v;
            y *= C, S *= C, M = y * (y + u * S + 2 * f) + S * (u * y + S + 2 * d) + p;
          } else
            S = o, y = Math.max(0, -(u * S + f)), M = -y * y + S * (S + 2 * d) + p;
        else
          S = -o, y = Math.max(0, -(u * S + f)), M = -y * y + S * (S + 2 * d) + p;
      else
        S <= -b ? (y = Math.max(0, -(-u * o + f)), S = y > 0 ? -o : Math.min(Math.max(-o, -d), o), M = -y * y + S * (S + 2 * d) + p) : S <= b ? (y = 0, S = Math.min(Math.max(-o, -d), o), M = S * (S + 2 * d) + p) : (y = Math.max(0, -(u * o + f)), S = y > 0 ? o : Math.min(Math.max(-o, -d), o), M = -y * y + S * (S + 2 * d) + p);
    else
      S = u > 0 ? -o : o, y = Math.max(0, -(u * S + f)), M = -y * y + S * (S + 2 * d) + p;
    return n && n.copy(this.origin).addScaledVector(this.direction, y), s && s.copy(ra).addScaledVector(Jr, S), M;
  }
  intersectSphere(e, t) {
    Vn.subVectors(e.center, this.origin);
    const n = Vn.dot(this.direction), s = Vn.dot(Vn) - n * n, o = e.radius * e.radius;
    if (s > o) return null;
    const u = Math.sqrt(o - s), f = n - u, d = n + u;
    return d < 0 ? null : f < 0 ? this.at(d, t) : this.at(f, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, s, o, u, f, d;
    const p = 1 / this.direction.x, v = 1 / this.direction.y, y = 1 / this.direction.z, S = this.origin;
    return p >= 0 ? (n = (e.min.x - S.x) * p, s = (e.max.x - S.x) * p) : (n = (e.max.x - S.x) * p, s = (e.min.x - S.x) * p), v >= 0 ? (o = (e.min.y - S.y) * v, u = (e.max.y - S.y) * v) : (o = (e.max.y - S.y) * v, u = (e.min.y - S.y) * v), n > u || o > s || ((o > n || isNaN(n)) && (n = o), (u < s || isNaN(s)) && (s = u), y >= 0 ? (f = (e.min.z - S.z) * y, d = (e.max.z - S.z) * y) : (f = (e.max.z - S.z) * y, d = (e.min.z - S.z) * y), n > d || f > s) || ((f > n || n !== n) && (n = f), (d < s || s !== s) && (s = d), s < 0) ? null : this.at(n >= 0 ? n : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Vn) !== null;
  }
  intersectTriangle(e, t, n, s, o) {
    sa.subVectors(t, e), Qr.subVectors(n, e), aa.crossVectors(sa, Qr);
    let u = this.direction.dot(aa), f;
    if (u > 0) {
      if (s) return null;
      f = 1;
    } else if (u < 0)
      f = -1, u = -u;
    else
      return null;
    oi.subVectors(this.origin, e);
    const d = f * this.direction.dot(Qr.crossVectors(oi, Qr));
    if (d < 0)
      return null;
    const p = f * this.direction.dot(sa.cross(oi));
    if (p < 0 || d + p > u)
      return null;
    const v = -f * oi.dot(aa);
    return v < 0 ? null : this.at(v / u, o);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class kt {
  constructor(e, t, n, s, o, u, f, d, p, v, y, S, M, b, C, g) {
    kt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, o, u, f, d, p, v, y, S, M, b, C, g);
  }
  set(e, t, n, s, o, u, f, d, p, v, y, S, M, b, C, g) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = n, m[12] = s, m[1] = o, m[5] = u, m[9] = f, m[13] = d, m[2] = p, m[6] = v, m[10] = y, m[14] = S, m[3] = M, m[7] = b, m[11] = C, m[15] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new kt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / Yi.setFromMatrixColumn(e, 0).length(), o = 1 / Yi.setFromMatrixColumn(e, 1).length(), u = 1 / Yi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * o, t[5] = n[5] * o, t[6] = n[6] * o, t[7] = 0, t[8] = n[8] * u, t[9] = n[9] * u, t[10] = n[10] * u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, o = e.z, u = Math.cos(n), f = Math.sin(n), d = Math.cos(s), p = Math.sin(s), v = Math.cos(o), y = Math.sin(o);
    if (e.order === "XYZ") {
      const S = u * v, M = u * y, b = f * v, C = f * y;
      t[0] = d * v, t[4] = -d * y, t[8] = p, t[1] = M + b * p, t[5] = S - C * p, t[9] = -f * d, t[2] = C - S * p, t[6] = b + M * p, t[10] = u * d;
    } else if (e.order === "YXZ") {
      const S = d * v, M = d * y, b = p * v, C = p * y;
      t[0] = S + C * f, t[4] = b * f - M, t[8] = u * p, t[1] = u * y, t[5] = u * v, t[9] = -f, t[2] = M * f - b, t[6] = C + S * f, t[10] = u * d;
    } else if (e.order === "ZXY") {
      const S = d * v, M = d * y, b = p * v, C = p * y;
      t[0] = S - C * f, t[4] = -u * y, t[8] = b + M * f, t[1] = M + b * f, t[5] = u * v, t[9] = C - S * f, t[2] = -u * p, t[6] = f, t[10] = u * d;
    } else if (e.order === "ZYX") {
      const S = u * v, M = u * y, b = f * v, C = f * y;
      t[0] = d * v, t[4] = b * p - M, t[8] = S * p + C, t[1] = d * y, t[5] = C * p + S, t[9] = M * p - b, t[2] = -p, t[6] = f * d, t[10] = u * d;
    } else if (e.order === "YZX") {
      const S = u * d, M = u * p, b = f * d, C = f * p;
      t[0] = d * v, t[4] = C - S * y, t[8] = b * y + M, t[1] = y, t[5] = u * v, t[9] = -f * v, t[2] = -p * v, t[6] = M * y + b, t[10] = S - C * y;
    } else if (e.order === "XZY") {
      const S = u * d, M = u * p, b = f * d, C = f * p;
      t[0] = d * v, t[4] = -y, t[8] = p * v, t[1] = S * y + C, t[5] = u * v, t[9] = M * y - b, t[2] = b * y - M, t[6] = f * v, t[10] = C * y + S;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Ku, e, Zu);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return hn.subVectors(e, t), hn.lengthSq() === 0 && (hn.z = 1), hn.normalize(), li.crossVectors(n, hn), li.lengthSq() === 0 && (Math.abs(n.z) === 1 ? hn.x += 1e-4 : hn.z += 1e-4, hn.normalize(), li.crossVectors(n, hn)), li.normalize(), es.crossVectors(hn, li), s[0] = li.x, s[4] = es.x, s[8] = hn.x, s[1] = li.y, s[5] = es.y, s[9] = hn.y, s[2] = li.z, s[6] = es.z, s[10] = hn.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, o = this.elements, u = n[0], f = n[4], d = n[8], p = n[12], v = n[1], y = n[5], S = n[9], M = n[13], b = n[2], C = n[6], g = n[10], m = n[14], F = n[3], D = n[7], N = n[11], ne = n[15], k = s[0], l = s[4], Q = s[8], fe = s[12], T = s[1], R = s[5], ae = s[9], X = s[13], se = s[2], pe = s[6], j = s[10], me = s[14], ie = s[3], be = s[7], Ae = s[11], Fe = s[15];
    return o[0] = u * k + f * T + d * se + p * ie, o[4] = u * l + f * R + d * pe + p * be, o[8] = u * Q + f * ae + d * j + p * Ae, o[12] = u * fe + f * X + d * me + p * Fe, o[1] = v * k + y * T + S * se + M * ie, o[5] = v * l + y * R + S * pe + M * be, o[9] = v * Q + y * ae + S * j + M * Ae, o[13] = v * fe + y * X + S * me + M * Fe, o[2] = b * k + C * T + g * se + m * ie, o[6] = b * l + C * R + g * pe + m * be, o[10] = b * Q + C * ae + g * j + m * Ae, o[14] = b * fe + C * X + g * me + m * Fe, o[3] = F * k + D * T + N * se + ne * ie, o[7] = F * l + D * R + N * pe + ne * be, o[11] = F * Q + D * ae + N * j + ne * Ae, o[15] = F * fe + D * X + N * me + ne * Fe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], o = e[12], u = e[1], f = e[5], d = e[9], p = e[13], v = e[2], y = e[6], S = e[10], M = e[14], b = e[3], C = e[7], g = e[11], m = e[15];
    return b * (+o * d * y - s * p * y - o * f * S + n * p * S + s * f * M - n * d * M) + C * (+t * d * M - t * p * S + o * u * S - s * u * M + s * p * v - o * d * v) + g * (+t * p * y - t * f * M - o * u * y + n * u * M + o * f * v - n * p * v) + m * (-s * f * v - t * d * y + t * f * S + s * u * y - n * u * S + n * d * v);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], o = e[3], u = e[4], f = e[5], d = e[6], p = e[7], v = e[8], y = e[9], S = e[10], M = e[11], b = e[12], C = e[13], g = e[14], m = e[15], F = y * g * p - C * S * p + C * d * M - f * g * M - y * d * m + f * S * m, D = b * S * p - v * g * p - b * d * M + u * g * M + v * d * m - u * S * m, N = v * C * p - b * y * p + b * f * M - u * C * M - v * f * m + u * y * m, ne = b * y * d - v * C * d - b * f * S + u * C * S + v * f * g - u * y * g, k = t * F + n * D + s * N + o * ne;
    if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const l = 1 / k;
    return e[0] = F * l, e[1] = (C * S * o - y * g * o - C * s * M + n * g * M + y * s * m - n * S * m) * l, e[2] = (f * g * o - C * d * o + C * s * p - n * g * p - f * s * m + n * d * m) * l, e[3] = (y * d * o - f * S * o - y * s * p + n * S * p + f * s * M - n * d * M) * l, e[4] = D * l, e[5] = (v * g * o - b * S * o + b * s * M - t * g * M - v * s * m + t * S * m) * l, e[6] = (b * d * o - u * g * o - b * s * p + t * g * p + u * s * m - t * d * m) * l, e[7] = (u * S * o - v * d * o + v * s * p - t * S * p - u * s * M + t * d * M) * l, e[8] = N * l, e[9] = (b * y * o - v * C * o - b * n * M + t * C * M + v * n * m - t * y * m) * l, e[10] = (u * C * o - b * f * o + b * n * p - t * C * p - u * n * m + t * f * m) * l, e[11] = (v * f * o - u * y * o - v * n * p + t * y * p + u * n * M - t * f * M) * l, e[12] = ne * l, e[13] = (v * C * s - b * y * s + b * n * S - t * C * S - v * n * g + t * y * g) * l, e[14] = (b * f * s - u * C * s - b * n * d + t * C * d + u * n * g - t * f * g) * l, e[15] = (u * y * s - v * f * s + v * n * d - t * y * d - u * n * S + t * f * S) * l, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, o = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= o, t[1] *= n, t[5] *= s, t[9] *= o, t[2] *= n, t[6] *= s, t[10] *= o, t[3] *= n, t[7] *= s, t[11] *= o, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), o = 1 - n, u = e.x, f = e.y, d = e.z, p = o * u, v = o * f;
    return this.set(
      p * u + n,
      p * f - s * d,
      p * d + s * f,
      0,
      p * f + s * d,
      v * f + n,
      v * d - s * u,
      0,
      p * d - s * f,
      v * d + s * u,
      o * d * d + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, s, o, u) {
    return this.set(
      1,
      n,
      o,
      0,
      e,
      1,
      u,
      0,
      t,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, o = t._x, u = t._y, f = t._z, d = t._w, p = o + o, v = u + u, y = f + f, S = o * p, M = o * v, b = o * y, C = u * v, g = u * y, m = f * y, F = d * p, D = d * v, N = d * y, ne = n.x, k = n.y, l = n.z;
    return s[0] = (1 - (C + m)) * ne, s[1] = (M + N) * ne, s[2] = (b - D) * ne, s[3] = 0, s[4] = (M - N) * k, s[5] = (1 - (S + m)) * k, s[6] = (g + F) * k, s[7] = 0, s[8] = (b + D) * l, s[9] = (g - F) * l, s[10] = (1 - (S + C)) * l, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let o = Yi.set(s[0], s[1], s[2]).length();
    const u = Yi.set(s[4], s[5], s[6]).length(), f = Yi.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (o = -o), e.x = s[12], e.y = s[13], e.z = s[14], bn.copy(this);
    const p = 1 / o, v = 1 / u, y = 1 / f;
    return bn.elements[0] *= p, bn.elements[1] *= p, bn.elements[2] *= p, bn.elements[4] *= v, bn.elements[5] *= v, bn.elements[6] *= v, bn.elements[8] *= y, bn.elements[9] *= y, bn.elements[10] *= y, t.setFromRotationMatrix(bn), n.x = o, n.y = u, n.z = f, this;
  }
  makePerspective(e, t, n, s, o, u, f = Kn) {
    const d = this.elements, p = 2 * o / (t - e), v = 2 * o / (n - s), y = (t + e) / (t - e), S = (n + s) / (n - s);
    let M, b;
    if (f === Kn)
      M = -(u + o) / (u - o), b = -2 * u * o / (u - o);
    else if (f === ws)
      M = -u / (u - o), b = -u * o / (u - o);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + f);
    return d[0] = p, d[4] = 0, d[8] = y, d[12] = 0, d[1] = 0, d[5] = v, d[9] = S, d[13] = 0, d[2] = 0, d[6] = 0, d[10] = M, d[14] = b, d[3] = 0, d[7] = 0, d[11] = -1, d[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, o, u, f = Kn) {
    const d = this.elements, p = 1 / (t - e), v = 1 / (n - s), y = 1 / (u - o), S = (t + e) * p, M = (n + s) * v;
    let b, C;
    if (f === Kn)
      b = (u + o) * y, C = -2 * y;
    else if (f === ws)
      b = o * y, C = -1 * y;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + f);
    return d[0] = 2 * p, d[4] = 0, d[8] = 0, d[12] = -S, d[1] = 0, d[5] = 2 * v, d[9] = 0, d[13] = -M, d[2] = 0, d[6] = 0, d[10] = C, d[14] = -b, d[3] = 0, d[7] = 0, d[11] = 0, d[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Yi = /* @__PURE__ */ new ee(), bn = /* @__PURE__ */ new kt(), Ku = /* @__PURE__ */ new ee(0, 0, 0), Zu = /* @__PURE__ */ new ee(1, 1, 1), li = /* @__PURE__ */ new ee(), es = /* @__PURE__ */ new ee(), hn = /* @__PURE__ */ new ee(), Zo = /* @__PURE__ */ new kt(), Jo = /* @__PURE__ */ new Nr();
class Jn {
  constructor(e = 0, t = 0, n = 0, s = Jn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, s = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const s = e.elements, o = s[0], u = s[4], f = s[8], d = s[1], p = s[5], v = s[9], y = s[2], S = s[6], M = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(cn(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(-v, M), this._z = Math.atan2(-u, o)) : (this._x = Math.atan2(S, p), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-cn(v, -1, 1)), Math.abs(v) < 0.9999999 ? (this._y = Math.atan2(f, M), this._z = Math.atan2(d, p)) : (this._y = Math.atan2(-y, o), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(cn(S, -1, 1)), Math.abs(S) < 0.9999999 ? (this._y = Math.atan2(-y, M), this._z = Math.atan2(-u, p)) : (this._y = 0, this._z = Math.atan2(d, o));
        break;
      case "ZYX":
        this._y = Math.asin(-cn(y, -1, 1)), Math.abs(y) < 0.9999999 ? (this._x = Math.atan2(S, M), this._z = Math.atan2(d, o)) : (this._x = 0, this._z = Math.atan2(-u, p));
        break;
      case "YZX":
        this._z = Math.asin(cn(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(-v, p), this._y = Math.atan2(-y, o)) : (this._x = 0, this._y = Math.atan2(f, M));
        break;
      case "XZY":
        this._z = Math.asin(-cn(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(S, p), this._y = Math.atan2(f, o)) : (this._x = Math.atan2(-v, M), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Zo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Zo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Jo.setFromEuler(this), this.setFromQuaternion(Jo, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Jn.DEFAULT_ORDER = "XYZ";
class ic {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Ju = 0;
const Qo = /* @__PURE__ */ new ee(), ji = /* @__PURE__ */ new Nr(), Wn = /* @__PURE__ */ new kt(), ts = /* @__PURE__ */ new ee(), Rr = /* @__PURE__ */ new ee(), Qu = /* @__PURE__ */ new ee(), ef = /* @__PURE__ */ new Nr(), el = /* @__PURE__ */ new ee(1, 0, 0), tl = /* @__PURE__ */ new ee(0, 1, 0), nl = /* @__PURE__ */ new ee(0, 0, 1), il = { type: "added" }, tf = { type: "removed" }, $i = { type: "childadded", child: null }, oa = { type: "childremoved", child: null };
class pn extends pr {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ju++ }), this.uuid = Ur(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = pn.DEFAULT_UP.clone();
    const e = new ee(), t = new Jn(), n = new Nr(), s = new ee(1, 1, 1);
    function o() {
      n.setFromEuler(t, !1);
    }
    function u() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(o), n._onChange(u), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      modelViewMatrix: {
        value: new kt()
      },
      normalMatrix: {
        value: new lt()
      }
    }), this.matrix = new kt(), this.matrixWorld = new kt(), this.matrixAutoUpdate = pn.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ic(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ji.setFromAxisAngle(e, t), this.quaternion.multiply(ji), this;
  }
  rotateOnWorldAxis(e, t) {
    return ji.setFromAxisAngle(e, t), this.quaternion.premultiply(ji), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(el, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(tl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(nl, e);
  }
  translateOnAxis(e, t) {
    return Qo.copy(e).applyQuaternion(this.quaternion), this.position.add(Qo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(el, e);
  }
  translateY(e) {
    return this.translateOnAxis(tl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(nl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Wn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ts.copy(e) : ts.set(e, t, n);
    const s = this.parent;
    this.updateWorldMatrix(!0, !1), Rr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Wn.lookAt(Rr, ts, this.up) : Wn.lookAt(ts, Rr, this.up), this.quaternion.setFromRotationMatrix(Wn), s && (Wn.extractRotation(s.matrixWorld), ji.setFromRotationMatrix(Wn), this.quaternion.premultiply(ji.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(il), $i.child = e, this.dispatchEvent($i), $i.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(tf), oa.child = e, this.dispatchEvent(oa), oa.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Wn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Wn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Wn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(il), $i.child = e, this.dispatchEvent($i), $i.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const u = this.children[n].getObjectByProperty(e, t);
      if (u !== void 0)
        return u;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const s = this.children;
    for (let o = 0, u = s.length; o < u; o++)
      s[o].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rr, e, Qu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Rr, ef, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, s = t.length; n < s; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const s = this.children;
      for (let o = 0, u = s.length; o < u; o++)
        s[o].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((f) => ({
      boxInitialized: f.boxInitialized,
      boxMin: f.box.min.toArray(),
      boxMax: f.box.max.toArray(),
      sphereInitialized: f.sphereInitialized,
      sphereRadius: f.sphere.radius,
      sphereCenter: f.sphere.center.toArray()
    })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = {
      center: s.boundingSphere.center.toArray(),
      radius: s.boundingSphere.radius
    }), this.boundingBox !== null && (s.boundingBox = {
      min: s.boundingBox.min.toArray(),
      max: s.boundingBox.max.toArray()
    }));
    function o(f, d) {
      return f[d.uuid] === void 0 && (f[d.uuid] = d.toJSON(e)), d.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = o(e.geometries, this.geometry);
      const f = this.geometry.parameters;
      if (f !== void 0 && f.shapes !== void 0) {
        const d = f.shapes;
        if (Array.isArray(d))
          for (let p = 0, v = d.length; p < v; p++) {
            const y = d[p];
            o(e.shapes, y);
          }
        else
          o(e.shapes, d);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (o(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const f = [];
        for (let d = 0, p = this.material.length; d < p; d++)
          f.push(o(e.materials, this.material[d]));
        s.material = f;
      } else
        s.material = o(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let f = 0; f < this.children.length; f++)
        s.children.push(this.children[f].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let f = 0; f < this.animations.length; f++) {
        const d = this.animations[f];
        s.animations.push(o(e.animations, d));
      }
    }
    if (t) {
      const f = u(e.geometries), d = u(e.materials), p = u(e.textures), v = u(e.images), y = u(e.shapes), S = u(e.skeletons), M = u(e.animations), b = u(e.nodes);
      f.length > 0 && (n.geometries = f), d.length > 0 && (n.materials = d), p.length > 0 && (n.textures = p), v.length > 0 && (n.images = v), y.length > 0 && (n.shapes = y), S.length > 0 && (n.skeletons = S), M.length > 0 && (n.animations = M), b.length > 0 && (n.nodes = b);
    }
    return n.object = s, n;
    function u(f) {
      const d = [];
      for (const p in f) {
        const v = f[p];
        delete v.metadata, d.push(v);
      }
      return d;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const s = e.children[n];
        this.add(s.clone());
      }
    return this;
  }
}
pn.DEFAULT_UP = /* @__PURE__ */ new ee(0, 1, 0);
pn.DEFAULT_MATRIX_AUTO_UPDATE = !0;
pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const An = /* @__PURE__ */ new ee(), Xn = /* @__PURE__ */ new ee(), la = /* @__PURE__ */ new ee(), qn = /* @__PURE__ */ new ee(), Ki = /* @__PURE__ */ new ee(), Zi = /* @__PURE__ */ new ee(), rl = /* @__PURE__ */ new ee(), ca = /* @__PURE__ */ new ee(), ua = /* @__PURE__ */ new ee(), fa = /* @__PURE__ */ new ee(), ha = /* @__PURE__ */ new Bt(), da = /* @__PURE__ */ new Bt(), pa = /* @__PURE__ */ new Bt();
class Cn {
  constructor(e = new ee(), t = new ee(), n = new ee()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, s) {
    s.subVectors(n, t), An.subVectors(e, t), s.cross(An);
    const o = s.lengthSq();
    return o > 0 ? s.multiplyScalar(1 / Math.sqrt(o)) : s.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, s, o) {
    An.subVectors(s, t), Xn.subVectors(n, t), la.subVectors(e, t);
    const u = An.dot(An), f = An.dot(Xn), d = An.dot(la), p = Xn.dot(Xn), v = Xn.dot(la), y = u * p - f * f;
    if (y === 0)
      return o.set(0, 0, 0), null;
    const S = 1 / y, M = (p * d - f * v) * S, b = (u * v - f * d) * S;
    return o.set(1 - M - b, b, M);
  }
  static containsPoint(e, t, n, s) {
    return this.getBarycoord(e, t, n, s, qn) === null ? !1 : qn.x >= 0 && qn.y >= 0 && qn.x + qn.y <= 1;
  }
  static getInterpolation(e, t, n, s, o, u, f, d) {
    return this.getBarycoord(e, t, n, s, qn) === null ? (d.x = 0, d.y = 0, "z" in d && (d.z = 0), "w" in d && (d.w = 0), null) : (d.setScalar(0), d.addScaledVector(o, qn.x), d.addScaledVector(u, qn.y), d.addScaledVector(f, qn.z), d);
  }
  static getInterpolatedAttribute(e, t, n, s, o, u) {
    return ha.setScalar(0), da.setScalar(0), pa.setScalar(0), ha.fromBufferAttribute(e, t), da.fromBufferAttribute(e, n), pa.fromBufferAttribute(e, s), u.setScalar(0), u.addScaledVector(ha, o.x), u.addScaledVector(da, o.y), u.addScaledVector(pa, o.z), u;
  }
  static isFrontFacing(e, t, n, s) {
    return An.subVectors(n, t), Xn.subVectors(e, t), An.cross(Xn).dot(s) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, s) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, n, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return An.subVectors(this.c, this.b), Xn.subVectors(this.a, this.b), An.cross(Xn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Cn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Cn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, s, o) {
    return Cn.getInterpolation(e, this.a, this.b, this.c, t, n, s, o);
  }
  containsPoint(e) {
    return Cn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Cn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, s = this.b, o = this.c;
    let u, f;
    Ki.subVectors(s, n), Zi.subVectors(o, n), ca.subVectors(e, n);
    const d = Ki.dot(ca), p = Zi.dot(ca);
    if (d <= 0 && p <= 0)
      return t.copy(n);
    ua.subVectors(e, s);
    const v = Ki.dot(ua), y = Zi.dot(ua);
    if (v >= 0 && y <= v)
      return t.copy(s);
    const S = d * y - v * p;
    if (S <= 0 && d >= 0 && v <= 0)
      return u = d / (d - v), t.copy(n).addScaledVector(Ki, u);
    fa.subVectors(e, o);
    const M = Ki.dot(fa), b = Zi.dot(fa);
    if (b >= 0 && M <= b)
      return t.copy(o);
    const C = M * p - d * b;
    if (C <= 0 && p >= 0 && b <= 0)
      return f = p / (p - b), t.copy(n).addScaledVector(Zi, f);
    const g = v * b - M * y;
    if (g <= 0 && y - v >= 0 && M - b >= 0)
      return rl.subVectors(o, s), f = (y - v) / (y - v + (M - b)), t.copy(s).addScaledVector(rl, f);
    const m = 1 / (g + C + S);
    return u = C * m, f = S * m, t.copy(n).addScaledVector(Ki, u).addScaledVector(Zi, f);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const rc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, ci = { h: 0, s: 0, l: 0 }, ns = { h: 0, s: 0, l: 0 };
function ma(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class bt {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Nn) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Rt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = Rt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Rt.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = Rt.workingColorSpace) {
    if (e = Ou(e, 1), t = cn(t, 0, 1), n = cn(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const o = n <= 0.5 ? n * (1 + t) : n + t - n * t, u = 2 * n - o;
      this.r = ma(u, o, e + 1 / 3), this.g = ma(u, o, e), this.b = ma(u, o, e - 1 / 3);
    }
    return Rt.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = Nn) {
    function n(o) {
      o !== void 0 && parseFloat(o) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let o;
      const u = s[1], f = s[2];
      switch (u) {
        case "rgb":
        case "rgba":
          if (o = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))
            return n(o[4]), this.setRGB(
              Math.min(255, parseInt(o[1], 10)) / 255,
              Math.min(255, parseInt(o[2], 10)) / 255,
              Math.min(255, parseInt(o[3], 10)) / 255,
              t
            );
          if (o = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))
            return n(o[4]), this.setRGB(
              Math.min(100, parseInt(o[1], 10)) / 100,
              Math.min(100, parseInt(o[2], 10)) / 100,
              Math.min(100, parseInt(o[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (o = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))
            return n(o[4]), this.setHSL(
              parseFloat(o[1]) / 360,
              parseFloat(o[2]) / 100,
              parseFloat(o[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const o = s[1], u = o.length;
      if (u === 3)
        return this.setRGB(
          parseInt(o.charAt(0), 16) / 15,
          parseInt(o.charAt(1), 16) / 15,
          parseInt(o.charAt(2), 16) / 15,
          t
        );
      if (u === 6)
        return this.setHex(parseInt(o, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Nn) {
    const n = rc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = sr(e.r), this.g = sr(e.g), this.b = sr(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Qs(e.r), this.g = Qs(e.g), this.b = Qs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Nn) {
    return Rt.fromWorkingColorSpace(Qt.copy(this), e), Math.round(cn(Qt.r * 255, 0, 255)) * 65536 + Math.round(cn(Qt.g * 255, 0, 255)) * 256 + Math.round(cn(Qt.b * 255, 0, 255));
  }
  getHexString(e = Nn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Rt.workingColorSpace) {
    Rt.fromWorkingColorSpace(Qt.copy(this), t);
    const n = Qt.r, s = Qt.g, o = Qt.b, u = Math.max(n, s, o), f = Math.min(n, s, o);
    let d, p;
    const v = (f + u) / 2;
    if (f === u)
      d = 0, p = 0;
    else {
      const y = u - f;
      switch (p = v <= 0.5 ? y / (u + f) : y / (2 - u - f), u) {
        case n:
          d = (s - o) / y + (s < o ? 6 : 0);
          break;
        case s:
          d = (o - n) / y + 2;
          break;
        case o:
          d = (n - s) / y + 4;
          break;
      }
      d /= 6;
    }
    return e.h = d, e.s = p, e.l = v, e;
  }
  getRGB(e, t = Rt.workingColorSpace) {
    return Rt.fromWorkingColorSpace(Qt.copy(this), t), e.r = Qt.r, e.g = Qt.g, e.b = Qt.b, e;
  }
  getStyle(e = Nn) {
    Rt.fromWorkingColorSpace(Qt.copy(this), e);
    const t = Qt.r, n = Qt.g, s = Qt.b;
    return e !== Nn ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(ci), this.setHSL(ci.h + e, ci.s + t, ci.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(ci), e.getHSL(ns);
    const n = Zs(ci.h, ns.h, t), s = Zs(ci.s, ns.s, t), o = Zs(ci.l, ns.l, t);
    return this.setHSL(n, s, o), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, o = e.elements;
    return this.r = o[0] * t + o[3] * n + o[6] * s, this.g = o[1] * t + o[4] * n + o[7] * s, this.b = o[2] * t + o[5] * n + o[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Qt = /* @__PURE__ */ new bt();
bt.NAMES = rc;
let nf = 0;
class Ds extends pr {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: nf++ }), this.uuid = Ur(), this.name = "", this.type = "Material", this.blending = ir, this.side = pi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = wa, this.blendDst = Ca, this.blendEquation = Di, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new bt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = lr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Wo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gi, this.stencilZFail = Gi, this.stencilZPass = Gi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const s = this[t];
        if (s === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ir && (n.blending = this.blending), this.side !== pi && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== wa && (n.blendSrc = this.blendSrc), this.blendDst !== Ca && (n.blendDst = this.blendDst), this.blendEquation !== Di && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== lr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Wo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Gi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Gi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Gi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(o) {
      const u = [];
      for (const f in o) {
        const d = o[f];
        delete d.metadata, u.push(d);
      }
      return u;
    }
    if (t) {
      const o = s(e.textures), u = s(e.images);
      o.length > 0 && (n.textures = o), u.length > 0 && (n.images = u);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const s = t.length;
      n = new Array(s);
      for (let o = 0; o !== s; ++o)
        n[o] = t[o].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class sc extends Ds {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new bt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Jn(), this.combine = kl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ht = /* @__PURE__ */ new ee(), is = /* @__PURE__ */ new wt();
class Bn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Xo, this.updateRanges = [], this.gpuType = $n, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let s = 0, o = this.itemSize; s < o; s++)
      this.array[e + s] = t.array[n + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        is.fromBufferAttribute(this, t), is.applyMatrix3(e), this.setXY(t, is.x, is.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ht.fromBufferAttribute(this, t), Ht.applyMatrix3(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ht.fromBufferAttribute(this, t), Ht.applyMatrix4(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ht.fromBufferAttribute(this, t), Ht.applyNormalMatrix(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ht.fromBufferAttribute(this, t), Ht.transformDirection(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = br(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = ln(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = br(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ln(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = br(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ln(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = br(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ln(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = br(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ln(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ln(t, this.array), n = ln(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, s) {
    return e *= this.itemSize, this.normalized && (t = ln(t, this.array), n = ln(n, this.array), s = ln(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, n, s, o) {
    return e *= this.itemSize, this.normalized && (t = ln(t, this.array), n = ln(n, this.array), s = ln(s, this.array), o = ln(o, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = s, this.array[e + 3] = o, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Xo && (e.usage = this.usage), e;
  }
}
class ac extends Bn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class oc extends Bn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ni extends Bn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let rf = 0;
const vn = /* @__PURE__ */ new kt(), ga = /* @__PURE__ */ new pn(), Ji = /* @__PURE__ */ new ee(), dn = /* @__PURE__ */ new Fr(), Pr = /* @__PURE__ */ new Fr(), qt = /* @__PURE__ */ new ee();
class Bi extends pr {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: rf++ }), this.uuid = Ur(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ec(e) ? oc : ac)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const o = new lt().getNormalMatrix(e);
      n.applyNormalMatrix(o), n.needsUpdate = !0;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return vn.makeRotationFromQuaternion(e), this.applyMatrix4(vn), this;
  }
  rotateX(e) {
    return vn.makeRotationX(e), this.applyMatrix4(vn), this;
  }
  rotateY(e) {
    return vn.makeRotationY(e), this.applyMatrix4(vn), this;
  }
  rotateZ(e) {
    return vn.makeRotationZ(e), this.applyMatrix4(vn), this;
  }
  translate(e, t, n) {
    return vn.makeTranslation(e, t, n), this.applyMatrix4(vn), this;
  }
  scale(e, t, n) {
    return vn.makeScale(e, t, n), this.applyMatrix4(vn), this;
  }
  lookAt(e) {
    return ga.lookAt(e), ga.updateMatrix(), this.applyMatrix4(ga.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ji).negate(), this.translate(Ji.x, Ji.y, Ji.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      t.push(o.x, o.y, o.z || 0);
    }
    return this.setAttribute("position", new Ni(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Fr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new ee(-1 / 0, -1 / 0, -1 / 0),
        new ee(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, s = t.length; n < s; n++) {
          const o = t[n];
          dn.setFromBufferAttribute(o), this.morphTargetsRelative ? (qt.addVectors(this.boundingBox.min, dn.min), this.boundingBox.expandByPoint(qt), qt.addVectors(this.boundingBox.max, dn.max), this.boundingBox.expandByPoint(qt)) : (this.boundingBox.expandByPoint(dn.min), this.boundingBox.expandByPoint(dn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Eo());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new ee(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (dn.setFromBufferAttribute(e), t)
        for (let o = 0, u = t.length; o < u; o++) {
          const f = t[o];
          Pr.setFromBufferAttribute(f), this.morphTargetsRelative ? (qt.addVectors(dn.min, Pr.min), dn.expandByPoint(qt), qt.addVectors(dn.max, Pr.max), dn.expandByPoint(qt)) : (dn.expandByPoint(Pr.min), dn.expandByPoint(Pr.max));
        }
      dn.getCenter(n);
      let s = 0;
      for (let o = 0, u = e.count; o < u; o++)
        qt.fromBufferAttribute(e, o), s = Math.max(s, n.distanceToSquared(qt));
      if (t)
        for (let o = 0, u = t.length; o < u; o++) {
          const f = t[o], d = this.morphTargetsRelative;
          for (let p = 0, v = f.count; p < v; p++)
            qt.fromBufferAttribute(f, p), d && (Ji.fromBufferAttribute(e, p), qt.add(Ji)), s = Math.max(s, n.distanceToSquared(qt));
        }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, s = t.normal, o = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Bn(new Float32Array(4 * n.count), 4));
    const u = this.getAttribute("tangent"), f = [], d = [];
    for (let Q = 0; Q < n.count; Q++)
      f[Q] = new ee(), d[Q] = new ee();
    const p = new ee(), v = new ee(), y = new ee(), S = new wt(), M = new wt(), b = new wt(), C = new ee(), g = new ee();
    function m(Q, fe, T) {
      p.fromBufferAttribute(n, Q), v.fromBufferAttribute(n, fe), y.fromBufferAttribute(n, T), S.fromBufferAttribute(o, Q), M.fromBufferAttribute(o, fe), b.fromBufferAttribute(o, T), v.sub(p), y.sub(p), M.sub(S), b.sub(S);
      const R = 1 / (M.x * b.y - b.x * M.y);
      isFinite(R) && (C.copy(v).multiplyScalar(b.y).addScaledVector(y, -M.y).multiplyScalar(R), g.copy(y).multiplyScalar(M.x).addScaledVector(v, -b.x).multiplyScalar(R), f[Q].add(C), f[fe].add(C), f[T].add(C), d[Q].add(g), d[fe].add(g), d[T].add(g));
    }
    let F = this.groups;
    F.length === 0 && (F = [{
      start: 0,
      count: e.count
    }]);
    for (let Q = 0, fe = F.length; Q < fe; ++Q) {
      const T = F[Q], R = T.start, ae = T.count;
      for (let X = R, se = R + ae; X < se; X += 3)
        m(
          e.getX(X + 0),
          e.getX(X + 1),
          e.getX(X + 2)
        );
    }
    const D = new ee(), N = new ee(), ne = new ee(), k = new ee();
    function l(Q) {
      ne.fromBufferAttribute(s, Q), k.copy(ne);
      const fe = f[Q];
      D.copy(fe), D.sub(ne.multiplyScalar(ne.dot(fe))).normalize(), N.crossVectors(k, fe);
      const R = N.dot(d[Q]) < 0 ? -1 : 1;
      u.setXYZW(Q, D.x, D.y, D.z, R);
    }
    for (let Q = 0, fe = F.length; Q < fe; ++Q) {
      const T = F[Q], R = T.start, ae = T.count;
      for (let X = R, se = R + ae; X < se; X += 3)
        l(e.getX(X + 0)), l(e.getX(X + 1)), l(e.getX(X + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Bn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let S = 0, M = n.count; S < M; S++)
          n.setXYZ(S, 0, 0, 0);
      const s = new ee(), o = new ee(), u = new ee(), f = new ee(), d = new ee(), p = new ee(), v = new ee(), y = new ee();
      if (e)
        for (let S = 0, M = e.count; S < M; S += 3) {
          const b = e.getX(S + 0), C = e.getX(S + 1), g = e.getX(S + 2);
          s.fromBufferAttribute(t, b), o.fromBufferAttribute(t, C), u.fromBufferAttribute(t, g), v.subVectors(u, o), y.subVectors(s, o), v.cross(y), f.fromBufferAttribute(n, b), d.fromBufferAttribute(n, C), p.fromBufferAttribute(n, g), f.add(v), d.add(v), p.add(v), n.setXYZ(b, f.x, f.y, f.z), n.setXYZ(C, d.x, d.y, d.z), n.setXYZ(g, p.x, p.y, p.z);
        }
      else
        for (let S = 0, M = t.count; S < M; S += 3)
          s.fromBufferAttribute(t, S + 0), o.fromBufferAttribute(t, S + 1), u.fromBufferAttribute(t, S + 2), v.subVectors(u, o), y.subVectors(s, o), v.cross(y), n.setXYZ(S + 0, v.x, v.y, v.z), n.setXYZ(S + 1, v.x, v.y, v.z), n.setXYZ(S + 2, v.x, v.y, v.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      qt.fromBufferAttribute(e, t), qt.normalize(), e.setXYZ(t, qt.x, qt.y, qt.z);
  }
  toNonIndexed() {
    function e(f, d) {
      const p = f.array, v = f.itemSize, y = f.normalized, S = new p.constructor(d.length * v);
      let M = 0, b = 0;
      for (let C = 0, g = d.length; C < g; C++) {
        f.isInterleavedBufferAttribute ? M = d[C] * f.data.stride + f.offset : M = d[C] * v;
        for (let m = 0; m < v; m++)
          S[b++] = p[M++];
      }
      return new Bn(S, v, y);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Bi(), n = this.index.array, s = this.attributes;
    for (const f in s) {
      const d = s[f], p = e(d, n);
      t.setAttribute(f, p);
    }
    const o = this.morphAttributes;
    for (const f in o) {
      const d = [], p = o[f];
      for (let v = 0, y = p.length; v < y; v++) {
        const S = p[v], M = e(S, n);
        d.push(M);
      }
      t.morphAttributes[f] = d;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const u = this.groups;
    for (let f = 0, d = u.length; f < d; f++) {
      const p = u[f];
      t.addGroup(p.start, p.count, p.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const d = this.parameters;
      for (const p in d)
        d[p] !== void 0 && (e[p] = d[p]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const d in n) {
      const p = n[d];
      e.data.attributes[d] = p.toJSON(e.data);
    }
    const s = {};
    let o = !1;
    for (const d in this.morphAttributes) {
      const p = this.morphAttributes[d], v = [];
      for (let y = 0, S = p.length; y < S; y++) {
        const M = p[y];
        v.push(M.toJSON(e.data));
      }
      v.length > 0 && (s[d] = v, o = !0);
    }
    o && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const u = this.groups;
    u.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(u)));
    const f = this.boundingSphere;
    return f !== null && (e.data.boundingSphere = {
      center: f.center.toArray(),
      radius: f.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const s = e.attributes;
    for (const p in s) {
      const v = s[p];
      this.setAttribute(p, v.clone(t));
    }
    const o = e.morphAttributes;
    for (const p in o) {
      const v = [], y = o[p];
      for (let S = 0, M = y.length; S < M; S++)
        v.push(y[S].clone(t));
      this.morphAttributes[p] = v;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const u = e.groups;
    for (let p = 0, v = u.length; p < v; p++) {
      const y = u[p];
      this.addGroup(y.start, y.count, y.materialIndex);
    }
    const f = e.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    const d = e.boundingSphere;
    return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const sl = /* @__PURE__ */ new kt(), bi = /* @__PURE__ */ new $u(), rs = /* @__PURE__ */ new Eo(), al = /* @__PURE__ */ new ee(), ss = /* @__PURE__ */ new ee(), as = /* @__PURE__ */ new ee(), os = /* @__PURE__ */ new ee(), _a = /* @__PURE__ */ new ee(), ls = /* @__PURE__ */ new ee(), ol = /* @__PURE__ */ new ee(), cs = /* @__PURE__ */ new ee();
class On extends pn {
  constructor(e = new Bi(), t = new sc()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const s = t[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let o = 0, u = s.length; o < u; o++) {
          const f = s[o].name || String(o);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[f] = o;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, s = n.attributes.position, o = n.morphAttributes.position, u = n.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const f = this.morphTargetInfluences;
    if (o && f) {
      ls.set(0, 0, 0);
      for (let d = 0, p = o.length; d < p; d++) {
        const v = f[d], y = o[d];
        v !== 0 && (_a.fromBufferAttribute(y, e), u ? ls.addScaledVector(_a, v) : ls.addScaledVector(_a.sub(t), v));
      }
      t.add(ls);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, s = this.material, o = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), rs.copy(n.boundingSphere), rs.applyMatrix4(o), bi.copy(e.ray).recast(e.near), !(rs.containsPoint(bi.origin) === !1 && (bi.intersectSphere(rs, al) === null || bi.origin.distanceToSquared(al) > (e.far - e.near) ** 2)) && (sl.copy(o).invert(), bi.copy(e.ray).applyMatrix4(sl), !(n.boundingBox !== null && bi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, bi)));
  }
  _computeIntersections(e, t, n) {
    let s;
    const o = this.geometry, u = this.material, f = o.index, d = o.attributes.position, p = o.attributes.uv, v = o.attributes.uv1, y = o.attributes.normal, S = o.groups, M = o.drawRange;
    if (f !== null)
      if (Array.isArray(u))
        for (let b = 0, C = S.length; b < C; b++) {
          const g = S[b], m = u[g.materialIndex], F = Math.max(g.start, M.start), D = Math.min(f.count, Math.min(g.start + g.count, M.start + M.count));
          for (let N = F, ne = D; N < ne; N += 3) {
            const k = f.getX(N), l = f.getX(N + 1), Q = f.getX(N + 2);
            s = us(this, m, e, n, p, v, y, k, l, Q), s && (s.faceIndex = Math.floor(N / 3), s.face.materialIndex = g.materialIndex, t.push(s));
          }
        }
      else {
        const b = Math.max(0, M.start), C = Math.min(f.count, M.start + M.count);
        for (let g = b, m = C; g < m; g += 3) {
          const F = f.getX(g), D = f.getX(g + 1), N = f.getX(g + 2);
          s = us(this, u, e, n, p, v, y, F, D, N), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
        }
      }
    else if (d !== void 0)
      if (Array.isArray(u))
        for (let b = 0, C = S.length; b < C; b++) {
          const g = S[b], m = u[g.materialIndex], F = Math.max(g.start, M.start), D = Math.min(d.count, Math.min(g.start + g.count, M.start + M.count));
          for (let N = F, ne = D; N < ne; N += 3) {
            const k = N, l = N + 1, Q = N + 2;
            s = us(this, m, e, n, p, v, y, k, l, Q), s && (s.faceIndex = Math.floor(N / 3), s.face.materialIndex = g.materialIndex, t.push(s));
          }
        }
      else {
        const b = Math.max(0, M.start), C = Math.min(d.count, M.start + M.count);
        for (let g = b, m = C; g < m; g += 3) {
          const F = g, D = g + 1, N = g + 2;
          s = us(this, u, e, n, p, v, y, F, D, N), s && (s.faceIndex = Math.floor(g / 3), t.push(s));
        }
      }
  }
}
function sf(i, e, t, n, s, o, u, f) {
  let d;
  if (e.side === un ? d = n.intersectTriangle(u, o, s, !0, f) : d = n.intersectTriangle(s, o, u, e.side === pi, f), d === null) return null;
  cs.copy(f), cs.applyMatrix4(i.matrixWorld);
  const p = t.ray.origin.distanceTo(cs);
  return p < t.near || p > t.far ? null : {
    distance: p,
    point: cs.clone(),
    object: i
  };
}
function us(i, e, t, n, s, o, u, f, d, p) {
  i.getVertexPosition(f, ss), i.getVertexPosition(d, as), i.getVertexPosition(p, os);
  const v = sf(i, e, t, n, ss, as, os, ol);
  if (v) {
    const y = new ee();
    Cn.getBarycoord(ol, ss, as, os, y), s && (v.uv = Cn.getInterpolatedAttribute(s, f, d, p, y, new wt())), o && (v.uv1 = Cn.getInterpolatedAttribute(o, f, d, p, y, new wt())), u && (v.normal = Cn.getInterpolatedAttribute(u, f, d, p, y, new ee()), v.normal.dot(n.direction) > 0 && v.normal.multiplyScalar(-1));
    const S = {
      a: f,
      b: d,
      c: p,
      normal: new ee(),
      materialIndex: 0
    };
    Cn.getNormal(ss, as, os, S.normal), v.face = S, v.barycoord = y;
  }
  return v;
}
class Or extends Bi {
  constructor(e = 1, t = 1, n = 1, s = 1, o = 1, u = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: s,
      heightSegments: o,
      depthSegments: u
    };
    const f = this;
    s = Math.floor(s), o = Math.floor(o), u = Math.floor(u);
    const d = [], p = [], v = [], y = [];
    let S = 0, M = 0;
    b("z", "y", "x", -1, -1, n, t, e, u, o, 0), b("z", "y", "x", 1, -1, n, t, -e, u, o, 1), b("x", "z", "y", 1, 1, e, n, t, s, u, 2), b("x", "z", "y", 1, -1, e, n, -t, s, u, 3), b("x", "y", "z", 1, -1, e, t, n, s, o, 4), b("x", "y", "z", -1, -1, e, t, -n, s, o, 5), this.setIndex(d), this.setAttribute("position", new Ni(p, 3)), this.setAttribute("normal", new Ni(v, 3)), this.setAttribute("uv", new Ni(y, 2));
    function b(C, g, m, F, D, N, ne, k, l, Q, fe) {
      const T = N / l, R = ne / Q, ae = N / 2, X = ne / 2, se = k / 2, pe = l + 1, j = Q + 1;
      let me = 0, ie = 0;
      const be = new ee();
      for (let Ae = 0; Ae < j; Ae++) {
        const Fe = Ae * R - X;
        for (let _t = 0; _t < pe; _t++) {
          const St = _t * T - ae;
          be[C] = St * F, be[g] = Fe * D, be[m] = se, p.push(be.x, be.y, be.z), be[C] = 0, be[g] = 0, be[m] = k > 0 ? 1 : -1, v.push(be.x, be.y, be.z), y.push(_t / l), y.push(1 - Ae / Q), me += 1;
        }
      }
      for (let Ae = 0; Ae < Q; Ae++)
        for (let Fe = 0; Fe < l; Fe++) {
          const _t = S + Fe + pe * Ae, St = S + Fe + pe * (Ae + 1), ue = S + (Fe + 1) + pe * (Ae + 1), _e = S + (Fe + 1) + pe * Ae;
          d.push(_t, St, _e), d.push(St, ue, _e), ie += 6;
        }
      f.addGroup(M, ie, fe), M += ie, S += me;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Or(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function dr(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const s = i[t][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s;
    }
  }
  return e;
}
function rn(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = dr(i[t]);
    for (const s in n)
      e[s] = n[s];
  }
  return e;
}
function af(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function lc(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Rt.workingColorSpace;
}
const of = { clone: dr, merge: rn };
var lf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, cf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qn extends Ds {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = lf, this.fragmentShader = cf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = dr(e.uniforms), this.uniformsGroups = af(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const u = this.uniforms[s].value;
      u && u.isTexture ? t.uniforms[s] = {
        type: "t",
        value: u.toJSON(e).uuid
      } : u && u.isColor ? t.uniforms[s] = {
        type: "c",
        value: u.getHex()
      } : u && u.isVector2 ? t.uniforms[s] = {
        type: "v2",
        value: u.toArray()
      } : u && u.isVector3 ? t.uniforms[s] = {
        type: "v3",
        value: u.toArray()
      } : u && u.isVector4 ? t.uniforms[s] = {
        type: "v4",
        value: u.toArray()
      } : u && u.isMatrix3 ? t.uniforms[s] = {
        type: "m3",
        value: u.toArray()
      } : u && u.isMatrix4 ? t.uniforms[s] = {
        type: "m4",
        value: u.toArray()
      } : t.uniforms[s] = {
        value: u
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions)
      this.extensions[s] === !0 && (n[s] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class cc extends pn {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new kt(), this.projectionMatrix = new kt(), this.projectionMatrixInverse = new kt(), this.coordinateSystem = Kn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ui = /* @__PURE__ */ new ee(), ll = /* @__PURE__ */ new wt(), cl = /* @__PURE__ */ new wt();
class xn extends cc {
  constructor(e = 50, t = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ho * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Ks * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ho * 2 * Math.atan(
      Math.tan(Ks * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    ui.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(ui.x, ui.y).multiplyScalar(-e / ui.z), ui.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(ui.x, ui.y).multiplyScalar(-e / ui.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, ll, cl), t.subVectors(cl, ll);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, s, o, u) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = o, this.view.height = u, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ks * 0.5 * this.fov) / this.zoom, n = 2 * t, s = this.aspect * n, o = -0.5 * s;
    const u = this.view;
    if (this.view !== null && this.view.enabled) {
      const d = u.fullWidth, p = u.fullHeight;
      o += u.offsetX * s / d, t -= u.offsetY * n / p, s *= u.width / d, n *= u.height / p;
    }
    const f = this.filmOffset;
    f !== 0 && (o += e * f / this.getFilmWidth()), this.projectionMatrix.makePerspective(o, o + s, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Qi = -90, er = 1;
class uf extends pn {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new xn(Qi, er, e, t);
    s.layers = this.layers, this.add(s);
    const o = new xn(Qi, er, e, t);
    o.layers = this.layers, this.add(o);
    const u = new xn(Qi, er, e, t);
    u.layers = this.layers, this.add(u);
    const f = new xn(Qi, er, e, t);
    f.layers = this.layers, this.add(f);
    const d = new xn(Qi, er, e, t);
    d.layers = this.layers, this.add(d);
    const p = new xn(Qi, er, e, t);
    p.layers = this.layers, this.add(p);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, s, o, u, f, d] = t;
    for (const p of t) this.remove(p);
    if (e === Kn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), o.up.set(0, 0, -1), o.lookAt(0, 1, 0), u.up.set(0, 0, 1), u.lookAt(0, -1, 0), f.up.set(0, 1, 0), f.lookAt(0, 0, 1), d.up.set(0, 1, 0), d.lookAt(0, 0, -1);
    else if (e === ws)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), o.up.set(0, 0, 1), o.lookAt(0, 1, 0), u.up.set(0, 0, -1), u.lookAt(0, -1, 0), f.up.set(0, -1, 0), f.lookAt(0, 0, 1), d.up.set(0, -1, 0), d.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const p of t)
      this.add(p), p.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [o, u, f, d, p, v] = this.children, y = e.getRenderTarget(), S = e.getActiveCubeFace(), M = e.getActiveMipmapLevel(), b = e.xr.enabled;
    e.xr.enabled = !1;
    const C = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, s), e.render(t, o), e.setRenderTarget(n, 1, s), e.render(t, u), e.setRenderTarget(n, 2, s), e.render(t, f), e.setRenderTarget(n, 3, s), e.render(t, d), e.setRenderTarget(n, 4, s), e.render(t, p), n.texture.generateMipmaps = C, e.setRenderTarget(n, 5, s), e.render(t, v), e.setRenderTarget(y, S, M), e.xr.enabled = b, n.texture.needsPMREMUpdate = !0;
  }
}
class uc extends fn {
  constructor(e, t, n, s, o, u, f, d, p, v) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : cr, super(e, t, n, s, o, u, f, d, p, v), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ff extends Oi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new uc(s, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : wn;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, s = new Or(5, 5, 5), o = new Qn({
      name: "CubemapFromEquirect",
      uniforms: dr(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: un,
      blending: hi
    });
    o.uniforms.tEquirect.value = t;
    const u = new On(s, o), f = t.minFilter;
    return t.minFilter === Ui && (t.minFilter = wn), new uf(1, 10, this).update(e, u), t.minFilter = f, u.geometry.dispose(), u.material.dispose(), this;
  }
  clear(e, t, n, s) {
    const o = e.getRenderTarget();
    for (let u = 0; u < 6; u++)
      e.setRenderTarget(this, u), e.clear(t, n, s);
    e.setRenderTarget(o);
  }
}
const va = /* @__PURE__ */ new ee(), hf = /* @__PURE__ */ new ee(), df = /* @__PURE__ */ new lt();
class Ri {
  constructor(e = new ee(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, s) {
    return this.normal.set(e, t, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const s = va.subVectors(n, t).cross(hf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(va), s = this.normal.dot(n);
    if (s === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const o = -(e.start.dot(this.normal) + this.constant) / s;
    return o < 0 || o > 1 ? null : t.copy(e.start).addScaledVector(n, o);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || df.getNormalMatrix(e), s = this.coplanarPoint(va).applyMatrix4(e), o = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(o), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ai = /* @__PURE__ */ new Eo(), fs = /* @__PURE__ */ new ee();
class fc {
  constructor(e = new Ri(), t = new Ri(), n = new Ri(), s = new Ri(), o = new Ri(), u = new Ri()) {
    this.planes = [e, t, n, s, o, u];
  }
  set(e, t, n, s, o, u) {
    const f = this.planes;
    return f[0].copy(e), f[1].copy(t), f[2].copy(n), f[3].copy(s), f[4].copy(o), f[5].copy(u), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Kn) {
    const n = this.planes, s = e.elements, o = s[0], u = s[1], f = s[2], d = s[3], p = s[4], v = s[5], y = s[6], S = s[7], M = s[8], b = s[9], C = s[10], g = s[11], m = s[12], F = s[13], D = s[14], N = s[15];
    if (n[0].setComponents(d - o, S - p, g - M, N - m).normalize(), n[1].setComponents(d + o, S + p, g + M, N + m).normalize(), n[2].setComponents(d + u, S + v, g + b, N + F).normalize(), n[3].setComponents(d - u, S - v, g - b, N - F).normalize(), n[4].setComponents(d - f, S - y, g - C, N - D).normalize(), t === Kn)
      n[5].setComponents(d + f, S + y, g + C, N + D).normalize();
    else if (t === ws)
      n[5].setComponents(f, y, C, D).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ai);
  }
  intersectsSprite(e) {
    return Ai.center.set(0, 0, 0), Ai.radius = 0.7071067811865476, Ai.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ai);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, s = -e.radius;
    for (let o = 0; o < 6; o++)
      if (t[o].distanceToPoint(n) < s)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = t[n];
      if (fs.x = s.normal.x > 0 ? e.max.x : e.min.x, fs.y = s.normal.y > 0 ? e.max.y : e.min.y, fs.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(fs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function hc() {
  let i = null, e = !1, t = null, n = null;
  function s(o, u) {
    t(o, u), n = i.requestAnimationFrame(s);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(s), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(o) {
      t = o;
    },
    setContext: function(o) {
      i = o;
    }
  };
}
function pf(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(f, d) {
    const p = f.array, v = f.usage, y = p.byteLength, S = i.createBuffer();
    i.bindBuffer(d, S), i.bufferData(d, p, v), f.onUploadCallback();
    let M;
    if (p instanceof Float32Array)
      M = i.FLOAT;
    else if (p instanceof Uint16Array)
      f.isFloat16BufferAttribute ? M = i.HALF_FLOAT : M = i.UNSIGNED_SHORT;
    else if (p instanceof Int16Array)
      M = i.SHORT;
    else if (p instanceof Uint32Array)
      M = i.UNSIGNED_INT;
    else if (p instanceof Int32Array)
      M = i.INT;
    else if (p instanceof Int8Array)
      M = i.BYTE;
    else if (p instanceof Uint8Array)
      M = i.UNSIGNED_BYTE;
    else if (p instanceof Uint8ClampedArray)
      M = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + p);
    return {
      buffer: S,
      type: M,
      bytesPerElement: p.BYTES_PER_ELEMENT,
      version: f.version,
      size: y
    };
  }
  function n(f, d, p) {
    const v = d.array, y = d.updateRanges;
    if (i.bindBuffer(p, f), y.length === 0)
      i.bufferSubData(p, 0, v);
    else {
      y.sort((M, b) => M.start - b.start);
      let S = 0;
      for (let M = 1; M < y.length; M++) {
        const b = y[S], C = y[M];
        C.start <= b.start + b.count + 1 ? b.count = Math.max(
          b.count,
          C.start + C.count - b.start
        ) : (++S, y[S] = C);
      }
      y.length = S + 1;
      for (let M = 0, b = y.length; M < b; M++) {
        const C = y[M];
        i.bufferSubData(
          p,
          C.start * v.BYTES_PER_ELEMENT,
          v,
          C.start,
          C.count
        );
      }
      d.clearUpdateRanges();
    }
    d.onUploadCallback();
  }
  function s(f) {
    return f.isInterleavedBufferAttribute && (f = f.data), e.get(f);
  }
  function o(f) {
    f.isInterleavedBufferAttribute && (f = f.data);
    const d = e.get(f);
    d && (i.deleteBuffer(d.buffer), e.delete(f));
  }
  function u(f, d) {
    if (f.isInterleavedBufferAttribute && (f = f.data), f.isGLBufferAttribute) {
      const v = e.get(f);
      (!v || v.version < f.version) && e.set(f, {
        buffer: f.buffer,
        type: f.type,
        bytesPerElement: f.elementSize,
        version: f.version
      });
      return;
    }
    const p = e.get(f);
    if (p === void 0)
      e.set(f, t(f, d));
    else if (p.version < f.version) {
      if (p.size !== f.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(p.buffer, f, d), p.version = f.version;
    }
  }
  return {
    get: s,
    remove: o,
    update: u
  };
}
class Br extends Bi {
  constructor(e = 1, t = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: s
    };
    const o = e / 2, u = t / 2, f = Math.floor(n), d = Math.floor(s), p = f + 1, v = d + 1, y = e / f, S = t / d, M = [], b = [], C = [], g = [];
    for (let m = 0; m < v; m++) {
      const F = m * S - u;
      for (let D = 0; D < p; D++) {
        const N = D * y - o;
        b.push(N, -F, 0), C.push(0, 0, 1), g.push(D / f), g.push(1 - m / d);
      }
    }
    for (let m = 0; m < d; m++)
      for (let F = 0; F < f; F++) {
        const D = F + p * m, N = F + p * (m + 1), ne = F + 1 + p * (m + 1), k = F + 1 + p * m;
        M.push(D, N, k), M.push(N, ne, k);
      }
    this.setIndex(M), this.setAttribute("position", new Ni(b, 3)), this.setAttribute("normal", new Ni(C, 3)), this.setAttribute("uv", new Ni(g, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Br(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var mf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, gf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, _f = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, vf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Sf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, yf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Mf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ef = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Tf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, bf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Af = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Cf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Rf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Pf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Df = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Lf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, If = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Uf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Nf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ff = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Of = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Bf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, zf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Hf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, kf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Gf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Vf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Wf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Xf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", qf = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Yf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, jf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, $f = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Kf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Zf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Jf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Qf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, eh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, th = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, nh = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ih = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, rh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, sh = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ah = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, oh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, lh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ch = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, uh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, fh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, hh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, dh = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, ph = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, mh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, gh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, _h = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, vh = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xh = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Sh = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, yh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Mh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Eh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Th = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ah = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, wh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Ch = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Rh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ph = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Dh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Lh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ih = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Uh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Fh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Oh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Bh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, zh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Hh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, kh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Gh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Wh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Xh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, qh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Yh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, jh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, $h = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Kh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Zh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Jh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Qh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ed = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, td = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, nd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, id = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, rd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, sd = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ad = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, od = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ld = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, cd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ud = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, fd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, hd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, dd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const pd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, md = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, gd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, _d = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, xd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Sd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, yd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Md = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ed = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Td = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, bd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ad = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, wd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Cd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Rd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Dd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ld = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Id = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ud = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Nd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Fd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Od = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, zd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Vd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Wd = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, qd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Yd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ot = {
  alphahash_fragment: mf,
  alphahash_pars_fragment: gf,
  alphamap_fragment: _f,
  alphamap_pars_fragment: vf,
  alphatest_fragment: xf,
  alphatest_pars_fragment: Sf,
  aomap_fragment: yf,
  aomap_pars_fragment: Mf,
  batching_pars_vertex: Ef,
  batching_vertex: Tf,
  begin_vertex: bf,
  beginnormal_vertex: Af,
  bsdfs: wf,
  iridescence_fragment: Cf,
  bumpmap_pars_fragment: Rf,
  clipping_planes_fragment: Pf,
  clipping_planes_pars_fragment: Df,
  clipping_planes_pars_vertex: Lf,
  clipping_planes_vertex: If,
  color_fragment: Uf,
  color_pars_fragment: Nf,
  color_pars_vertex: Ff,
  color_vertex: Of,
  common: Bf,
  cube_uv_reflection_fragment: zf,
  defaultnormal_vertex: Hf,
  displacementmap_pars_vertex: kf,
  displacementmap_vertex: Gf,
  emissivemap_fragment: Vf,
  emissivemap_pars_fragment: Wf,
  colorspace_fragment: Xf,
  colorspace_pars_fragment: qf,
  envmap_fragment: Yf,
  envmap_common_pars_fragment: jf,
  envmap_pars_fragment: $f,
  envmap_pars_vertex: Kf,
  envmap_physical_pars_fragment: oh,
  envmap_vertex: Zf,
  fog_vertex: Jf,
  fog_pars_vertex: Qf,
  fog_fragment: eh,
  fog_pars_fragment: th,
  gradientmap_pars_fragment: nh,
  lightmap_pars_fragment: ih,
  lights_lambert_fragment: rh,
  lights_lambert_pars_fragment: sh,
  lights_pars_begin: ah,
  lights_toon_fragment: lh,
  lights_toon_pars_fragment: ch,
  lights_phong_fragment: uh,
  lights_phong_pars_fragment: fh,
  lights_physical_fragment: hh,
  lights_physical_pars_fragment: dh,
  lights_fragment_begin: ph,
  lights_fragment_maps: mh,
  lights_fragment_end: gh,
  logdepthbuf_fragment: _h,
  logdepthbuf_pars_fragment: vh,
  logdepthbuf_pars_vertex: xh,
  logdepthbuf_vertex: Sh,
  map_fragment: yh,
  map_pars_fragment: Mh,
  map_particle_fragment: Eh,
  map_particle_pars_fragment: Th,
  metalnessmap_fragment: bh,
  metalnessmap_pars_fragment: Ah,
  morphinstance_vertex: wh,
  morphcolor_vertex: Ch,
  morphnormal_vertex: Rh,
  morphtarget_pars_vertex: Ph,
  morphtarget_vertex: Dh,
  normal_fragment_begin: Lh,
  normal_fragment_maps: Ih,
  normal_pars_fragment: Uh,
  normal_pars_vertex: Nh,
  normal_vertex: Fh,
  normalmap_pars_fragment: Oh,
  clearcoat_normal_fragment_begin: Bh,
  clearcoat_normal_fragment_maps: zh,
  clearcoat_pars_fragment: Hh,
  iridescence_pars_fragment: kh,
  opaque_fragment: Gh,
  packing: Vh,
  premultiplied_alpha_fragment: Wh,
  project_vertex: Xh,
  dithering_fragment: qh,
  dithering_pars_fragment: Yh,
  roughnessmap_fragment: jh,
  roughnessmap_pars_fragment: $h,
  shadowmap_pars_fragment: Kh,
  shadowmap_pars_vertex: Zh,
  shadowmap_vertex: Jh,
  shadowmask_pars_fragment: Qh,
  skinbase_vertex: ed,
  skinning_pars_vertex: td,
  skinning_vertex: nd,
  skinnormal_vertex: id,
  specularmap_fragment: rd,
  specularmap_pars_fragment: sd,
  tonemapping_fragment: ad,
  tonemapping_pars_fragment: od,
  transmission_fragment: ld,
  transmission_pars_fragment: cd,
  uv_pars_fragment: ud,
  uv_pars_vertex: fd,
  uv_vertex: hd,
  worldpos_vertex: dd,
  background_vert: pd,
  background_frag: md,
  backgroundCube_vert: gd,
  backgroundCube_frag: _d,
  cube_vert: vd,
  cube_frag: xd,
  depth_vert: Sd,
  depth_frag: yd,
  distanceRGBA_vert: Md,
  distanceRGBA_frag: Ed,
  equirect_vert: Td,
  equirect_frag: bd,
  linedashed_vert: Ad,
  linedashed_frag: wd,
  meshbasic_vert: Cd,
  meshbasic_frag: Rd,
  meshlambert_vert: Pd,
  meshlambert_frag: Dd,
  meshmatcap_vert: Ld,
  meshmatcap_frag: Id,
  meshnormal_vert: Ud,
  meshnormal_frag: Nd,
  meshphong_vert: Fd,
  meshphong_frag: Od,
  meshphysical_vert: Bd,
  meshphysical_frag: zd,
  meshtoon_vert: Hd,
  meshtoon_frag: kd,
  points_vert: Gd,
  points_frag: Vd,
  shadow_vert: Wd,
  shadow_frag: Xd,
  sprite_vert: qd,
  sprite_frag: Yd
}, Ee = {
  common: {
    diffuse: { value: /* @__PURE__ */ new bt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new lt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new lt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new lt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new lt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new lt() },
    normalScale: { value: /* @__PURE__ */ new wt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new lt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new lt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new bt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new bt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new lt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new lt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new bt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new wt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new lt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new lt() },
    alphaTest: { value: 0 }
  }
}, Fn = {
  basic: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.fog
    ]),
    vertexShader: ot.meshbasic_vert,
    fragmentShader: ot.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new bt(0) }
      }
    ]),
    vertexShader: ot.meshlambert_vert,
    fragmentShader: ot.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.specularmap,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new bt(0) },
        specular: { value: /* @__PURE__ */ new bt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: ot.meshphong_vert,
    fragmentShader: ot.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.envmap,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.roughnessmap,
      Ee.metalnessmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new bt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ot.meshphysical_vert,
    fragmentShader: ot.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.aomap,
      Ee.lightmap,
      Ee.emissivemap,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.gradientmap,
      Ee.fog,
      Ee.lights,
      {
        emissive: { value: /* @__PURE__ */ new bt(0) }
      }
    ]),
    vertexShader: ot.meshtoon_vert,
    fragmentShader: ot.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      Ee.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ot.meshmatcap_vert,
    fragmentShader: ot.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ rn([
      Ee.points,
      Ee.fog
    ]),
    vertexShader: ot.points_vert,
    fragmentShader: ot.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ot.linedashed_vert,
    fragmentShader: ot.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.displacementmap
    ]),
    vertexShader: ot.depth_vert,
    fragmentShader: ot.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.bumpmap,
      Ee.normalmap,
      Ee.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ot.meshnormal_vert,
    fragmentShader: ot.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ rn([
      Ee.sprite,
      Ee.fog
    ]),
    vertexShader: ot.sprite_vert,
    fragmentShader: ot.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new lt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ot.background_vert,
    fragmentShader: ot.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new lt() }
    },
    vertexShader: ot.backgroundCube_vert,
    fragmentShader: ot.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ot.cube_vert,
    fragmentShader: ot.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ot.equirect_vert,
    fragmentShader: ot.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ rn([
      Ee.common,
      Ee.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new ee() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ot.distanceRGBA_vert,
    fragmentShader: ot.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ rn([
      Ee.lights,
      Ee.fog,
      {
        color: { value: /* @__PURE__ */ new bt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ot.shadow_vert,
    fragmentShader: ot.shadow_frag
  }
};
Fn.physical = {
  uniforms: /* @__PURE__ */ rn([
    Fn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new lt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new lt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new wt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new lt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new lt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new lt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new bt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new lt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new lt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new lt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new wt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new lt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new bt(0) },
      specularColor: { value: /* @__PURE__ */ new bt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new lt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new lt() },
      anisotropyVector: { value: /* @__PURE__ */ new wt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new lt() }
    }
  ]),
  vertexShader: ot.meshphysical_vert,
  fragmentShader: ot.meshphysical_frag
};
const hs = { r: 0, b: 0, g: 0 }, wi = /* @__PURE__ */ new Jn(), jd = /* @__PURE__ */ new kt();
function $d(i, e, t, n, s, o, u) {
  const f = new bt(0);
  let d = o === !0 ? 0 : 1, p, v, y = null, S = 0, M = null;
  function b(F) {
    let D = F.isScene === !0 ? F.background : null;
    return D && D.isTexture && (D = (F.backgroundBlurriness > 0 ? t : e).get(D)), D;
  }
  function C(F) {
    let D = !1;
    const N = b(F);
    N === null ? m(f, d) : N && N.isColor && (m(N, 1), D = !0);
    const ne = i.xr.getEnvironmentBlendMode();
    ne === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, u) : ne === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, u), (i.autoClear || D) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function g(F, D) {
    const N = b(D);
    N && (N.isCubeTexture || N.mapping === Rs) ? (v === void 0 && (v = new On(
      new Or(1, 1, 1),
      new Qn({
        name: "BackgroundCubeMaterial",
        uniforms: dr(Fn.backgroundCube.uniforms),
        vertexShader: Fn.backgroundCube.vertexShader,
        fragmentShader: Fn.backgroundCube.fragmentShader,
        side: un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), v.geometry.deleteAttribute("normal"), v.geometry.deleteAttribute("uv"), v.onBeforeRender = function(ne, k, l) {
      this.matrixWorld.copyPosition(l.matrixWorld);
    }, Object.defineProperty(v.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), s.update(v)), wi.copy(D.backgroundRotation), wi.x *= -1, wi.y *= -1, wi.z *= -1, N.isCubeTexture && N.isRenderTargetTexture === !1 && (wi.y *= -1, wi.z *= -1), v.material.uniforms.envMap.value = N, v.material.uniforms.flipEnvMap.value = N.isCubeTexture && N.isRenderTargetTexture === !1 ? -1 : 1, v.material.uniforms.backgroundBlurriness.value = D.backgroundBlurriness, v.material.uniforms.backgroundIntensity.value = D.backgroundIntensity, v.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(wi)), v.material.toneMapped = Rt.getTransfer(N.colorSpace) !== Nt, (y !== N || S !== N.version || M !== i.toneMapping) && (v.material.needsUpdate = !0, y = N, S = N.version, M = i.toneMapping), v.layers.enableAll(), F.unshift(v, v.geometry, v.material, 0, 0, null)) : N && N.isTexture && (p === void 0 && (p = new On(
      new Br(2, 2),
      new Qn({
        name: "BackgroundMaterial",
        uniforms: dr(Fn.background.uniforms),
        vertexShader: Fn.background.vertexShader,
        fragmentShader: Fn.background.fragmentShader,
        side: pi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), p.geometry.deleteAttribute("normal"), Object.defineProperty(p.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), s.update(p)), p.material.uniforms.t2D.value = N, p.material.uniforms.backgroundIntensity.value = D.backgroundIntensity, p.material.toneMapped = Rt.getTransfer(N.colorSpace) !== Nt, N.matrixAutoUpdate === !0 && N.updateMatrix(), p.material.uniforms.uvTransform.value.copy(N.matrix), (y !== N || S !== N.version || M !== i.toneMapping) && (p.material.needsUpdate = !0, y = N, S = N.version, M = i.toneMapping), p.layers.enableAll(), F.unshift(p, p.geometry, p.material, 0, 0, null));
  }
  function m(F, D) {
    F.getRGB(hs, lc(i)), n.buffers.color.setClear(hs.r, hs.g, hs.b, D, u);
  }
  return {
    getClearColor: function() {
      return f;
    },
    setClearColor: function(F, D = 1) {
      f.set(F), d = D, m(f, d);
    },
    getClearAlpha: function() {
      return d;
    },
    setClearAlpha: function(F) {
      d = F, m(f, d);
    },
    render: C,
    addToRenderList: g
  };
}
function Kd(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = S(null);
  let o = s, u = !1;
  function f(T, R, ae, X, se) {
    let pe = !1;
    const j = y(X, ae, R);
    o !== j && (o = j, p(o.object)), pe = M(T, X, ae, se), pe && b(T, X, ae, se), se !== null && e.update(se, i.ELEMENT_ARRAY_BUFFER), (pe || u) && (u = !1, N(T, R, ae, X), se !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(se).buffer));
  }
  function d() {
    return i.createVertexArray();
  }
  function p(T) {
    return i.bindVertexArray(T);
  }
  function v(T) {
    return i.deleteVertexArray(T);
  }
  function y(T, R, ae) {
    const X = ae.wireframe === !0;
    let se = n[T.id];
    se === void 0 && (se = {}, n[T.id] = se);
    let pe = se[R.id];
    pe === void 0 && (pe = {}, se[R.id] = pe);
    let j = pe[X];
    return j === void 0 && (j = S(d()), pe[X] = j), j;
  }
  function S(T) {
    const R = [], ae = [], X = [];
    for (let se = 0; se < t; se++)
      R[se] = 0, ae[se] = 0, X[se] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: R,
      enabledAttributes: ae,
      attributeDivisors: X,
      object: T,
      attributes: {},
      index: null
    };
  }
  function M(T, R, ae, X) {
    const se = o.attributes, pe = R.attributes;
    let j = 0;
    const me = ae.getAttributes();
    for (const ie in me)
      if (me[ie].location >= 0) {
        const Ae = se[ie];
        let Fe = pe[ie];
        if (Fe === void 0 && (ie === "instanceMatrix" && T.instanceMatrix && (Fe = T.instanceMatrix), ie === "instanceColor" && T.instanceColor && (Fe = T.instanceColor)), Ae === void 0 || Ae.attribute !== Fe || Fe && Ae.data !== Fe.data) return !0;
        j++;
      }
    return o.attributesNum !== j || o.index !== X;
  }
  function b(T, R, ae, X) {
    const se = {}, pe = R.attributes;
    let j = 0;
    const me = ae.getAttributes();
    for (const ie in me)
      if (me[ie].location >= 0) {
        let Ae = pe[ie];
        Ae === void 0 && (ie === "instanceMatrix" && T.instanceMatrix && (Ae = T.instanceMatrix), ie === "instanceColor" && T.instanceColor && (Ae = T.instanceColor));
        const Fe = {};
        Fe.attribute = Ae, Ae && Ae.data && (Fe.data = Ae.data), se[ie] = Fe, j++;
      }
    o.attributes = se, o.attributesNum = j, o.index = X;
  }
  function C() {
    const T = o.newAttributes;
    for (let R = 0, ae = T.length; R < ae; R++)
      T[R] = 0;
  }
  function g(T) {
    m(T, 0);
  }
  function m(T, R) {
    const ae = o.newAttributes, X = o.enabledAttributes, se = o.attributeDivisors;
    ae[T] = 1, X[T] === 0 && (i.enableVertexAttribArray(T), X[T] = 1), se[T] !== R && (i.vertexAttribDivisor(T, R), se[T] = R);
  }
  function F() {
    const T = o.newAttributes, R = o.enabledAttributes;
    for (let ae = 0, X = R.length; ae < X; ae++)
      R[ae] !== T[ae] && (i.disableVertexAttribArray(ae), R[ae] = 0);
  }
  function D(T, R, ae, X, se, pe, j) {
    j === !0 ? i.vertexAttribIPointer(T, R, ae, se, pe) : i.vertexAttribPointer(T, R, ae, X, se, pe);
  }
  function N(T, R, ae, X) {
    C();
    const se = X.attributes, pe = ae.getAttributes(), j = R.defaultAttributeValues;
    for (const me in pe) {
      const ie = pe[me];
      if (ie.location >= 0) {
        let be = se[me];
        if (be === void 0 && (me === "instanceMatrix" && T.instanceMatrix && (be = T.instanceMatrix), me === "instanceColor" && T.instanceColor && (be = T.instanceColor)), be !== void 0) {
          const Ae = be.normalized, Fe = be.itemSize, _t = e.get(be);
          if (_t === void 0) continue;
          const St = _t.buffer, ue = _t.type, _e = _t.bytesPerElement, Be = ue === i.INT || ue === i.UNSIGNED_INT || be.gpuType === go;
          if (be.isInterleavedBufferAttribute) {
            const Ie = be.data, tt = Ie.stride, je = be.offset;
            if (Ie.isInstancedInterleavedBuffer) {
              for (let nt = 0; nt < ie.locationSize; nt++)
                m(ie.location + nt, Ie.meshPerAttribute);
              T.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Ie.meshPerAttribute * Ie.count);
            } else
              for (let nt = 0; nt < ie.locationSize; nt++)
                g(ie.location + nt);
            i.bindBuffer(i.ARRAY_BUFFER, St);
            for (let nt = 0; nt < ie.locationSize; nt++)
              D(
                ie.location + nt,
                Fe / ie.locationSize,
                ue,
                Ae,
                tt * _e,
                (je + Fe / ie.locationSize * nt) * _e,
                Be
              );
          } else {
            if (be.isInstancedBufferAttribute) {
              for (let Ie = 0; Ie < ie.locationSize; Ie++)
                m(ie.location + Ie, be.meshPerAttribute);
              T.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = be.meshPerAttribute * be.count);
            } else
              for (let Ie = 0; Ie < ie.locationSize; Ie++)
                g(ie.location + Ie);
            i.bindBuffer(i.ARRAY_BUFFER, St);
            for (let Ie = 0; Ie < ie.locationSize; Ie++)
              D(
                ie.location + Ie,
                Fe / ie.locationSize,
                ue,
                Ae,
                Fe * _e,
                Fe / ie.locationSize * Ie * _e,
                Be
              );
          }
        } else if (j !== void 0) {
          const Ae = j[me];
          if (Ae !== void 0)
            switch (Ae.length) {
              case 2:
                i.vertexAttrib2fv(ie.location, Ae);
                break;
              case 3:
                i.vertexAttrib3fv(ie.location, Ae);
                break;
              case 4:
                i.vertexAttrib4fv(ie.location, Ae);
                break;
              default:
                i.vertexAttrib1fv(ie.location, Ae);
            }
        }
      }
    }
    F();
  }
  function ne() {
    Q();
    for (const T in n) {
      const R = n[T];
      for (const ae in R) {
        const X = R[ae];
        for (const se in X)
          v(X[se].object), delete X[se];
        delete R[ae];
      }
      delete n[T];
    }
  }
  function k(T) {
    if (n[T.id] === void 0) return;
    const R = n[T.id];
    for (const ae in R) {
      const X = R[ae];
      for (const se in X)
        v(X[se].object), delete X[se];
      delete R[ae];
    }
    delete n[T.id];
  }
  function l(T) {
    for (const R in n) {
      const ae = n[R];
      if (ae[T.id] === void 0) continue;
      const X = ae[T.id];
      for (const se in X)
        v(X[se].object), delete X[se];
      delete ae[T.id];
    }
  }
  function Q() {
    fe(), u = !0, o !== s && (o = s, p(o.object));
  }
  function fe() {
    s.geometry = null, s.program = null, s.wireframe = !1;
  }
  return {
    setup: f,
    reset: Q,
    resetDefaultState: fe,
    dispose: ne,
    releaseStatesOfGeometry: k,
    releaseStatesOfProgram: l,
    initAttributes: C,
    enableAttribute: g,
    disableUnusedAttributes: F
  };
}
function Zd(i, e, t) {
  let n;
  function s(p) {
    n = p;
  }
  function o(p, v) {
    i.drawArrays(n, p, v), t.update(v, n, 1);
  }
  function u(p, v, y) {
    y !== 0 && (i.drawArraysInstanced(n, p, v, y), t.update(v, n, y));
  }
  function f(p, v, y) {
    if (y === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, p, 0, v, 0, y);
    let M = 0;
    for (let b = 0; b < y; b++)
      M += v[b];
    t.update(M, n, 1);
  }
  function d(p, v, y, S) {
    if (y === 0) return;
    const M = e.get("WEBGL_multi_draw");
    if (M === null)
      for (let b = 0; b < p.length; b++)
        u(p[b], v[b], S[b]);
    else {
      M.multiDrawArraysInstancedWEBGL(n, p, 0, v, 0, S, 0, y);
      let b = 0;
      for (let C = 0; C < y; C++)
        b += v[C];
      for (let C = 0; C < S.length; C++)
        t.update(b, n, S[C]);
    }
  }
  this.setMode = s, this.render = o, this.renderInstances = u, this.renderMultiDraw = f, this.renderMultiDrawInstances = d;
}
function Jd(i, e, t, n) {
  let s;
  function o() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const l = e.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      s = 0;
    return s;
  }
  function u(l) {
    return !(l !== Rn && n.convert(l) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function f(l) {
    const Q = l === Ir && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(l !== Zn && n.convert(l) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    l !== $n && !Q);
  }
  function d(l) {
    if (l === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      l = "mediump";
    }
    return l === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let p = t.precision !== void 0 ? t.precision : "highp";
  const v = d(p);
  v !== p && (console.warn("THREE.WebGLRenderer:", p, "not supported, using", v, "instead."), p = v);
  const y = t.logarithmicDepthBuffer === !0, S = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control");
  if (S === !0) {
    const l = e.get("EXT_clip_control");
    l.clipControlEXT(l.LOWER_LEFT_EXT, l.ZERO_TO_ONE_EXT);
  }
  const M = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), b = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), C = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), m = i.getParameter(i.MAX_VERTEX_ATTRIBS), F = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), D = i.getParameter(i.MAX_VARYING_VECTORS), N = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), ne = b > 0, k = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: o,
    getMaxPrecision: d,
    textureFormatReadable: u,
    textureTypeReadable: f,
    precision: p,
    logarithmicDepthBuffer: y,
    reverseDepthBuffer: S,
    maxTextures: M,
    maxVertexTextures: b,
    maxTextureSize: C,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: F,
    maxVaryings: D,
    maxFragmentUniforms: N,
    vertexTextures: ne,
    maxSamples: k
  };
}
function Qd(i) {
  const e = this;
  let t = null, n = 0, s = !1, o = !1;
  const u = new Ri(), f = new lt(), d = { value: null, needsUpdate: !1 };
  this.uniform = d, this.numPlanes = 0, this.numIntersection = 0, this.init = function(y, S) {
    const M = y.length !== 0 || S || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || s;
    return s = S, n = y.length, M;
  }, this.beginShadows = function() {
    o = !0, v(null);
  }, this.endShadows = function() {
    o = !1;
  }, this.setGlobalState = function(y, S) {
    t = v(y, S, 0);
  }, this.setState = function(y, S, M) {
    const b = y.clippingPlanes, C = y.clipIntersection, g = y.clipShadows, m = i.get(y);
    if (!s || b === null || b.length === 0 || o && !g)
      o ? v(null) : p();
    else {
      const F = o ? 0 : n, D = F * 4;
      let N = m.clippingState || null;
      d.value = N, N = v(b, S, D, M);
      for (let ne = 0; ne !== D; ++ne)
        N[ne] = t[ne];
      m.clippingState = N, this.numIntersection = C ? this.numPlanes : 0, this.numPlanes += F;
    }
  };
  function p() {
    d.value !== t && (d.value = t, d.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function v(y, S, M, b) {
    const C = y !== null ? y.length : 0;
    let g = null;
    if (C !== 0) {
      if (g = d.value, b !== !0 || g === null) {
        const m = M + C * 4, F = S.matrixWorldInverse;
        f.getNormalMatrix(F), (g === null || g.length < m) && (g = new Float32Array(m));
        for (let D = 0, N = M; D !== C; ++D, N += 4)
          u.copy(y[D]).applyMatrix4(F, f), u.normal.toArray(g, N), g[N + 3] = u.constant;
      }
      d.value = g, d.needsUpdate = !0;
    }
    return e.numPlanes = C, e.numIntersection = 0, g;
  }
}
function ep(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(u, f) {
    return f === Fa ? u.mapping = cr : f === Oa && (u.mapping = ur), u;
  }
  function n(u) {
    if (u && u.isTexture) {
      const f = u.mapping;
      if (f === Fa || f === Oa)
        if (e.has(u)) {
          const d = e.get(u).texture;
          return t(d, u.mapping);
        } else {
          const d = u.image;
          if (d && d.height > 0) {
            const p = new ff(d.height);
            return p.fromEquirectangularTexture(i, u), e.set(u, p), u.addEventListener("dispose", s), t(p.texture, u.mapping);
          } else
            return null;
        }
    }
    return u;
  }
  function s(u) {
    const f = u.target;
    f.removeEventListener("dispose", s);
    const d = e.get(f);
    d !== void 0 && (e.delete(f), d.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: o
  };
}
class To extends cc {
  constructor(e = -1, t = 1, n = 1, s = -1, o = 0.1, u = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = s, this.near = o, this.far = u, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, s, o, u) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = s, this.view.width = o, this.view.height = u, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let o = n - e, u = n + e, f = s + t, d = s - t;
    if (this.view !== null && this.view.enabled) {
      const p = (this.right - this.left) / this.view.fullWidth / this.zoom, v = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      o += p * this.view.offsetX, u = o + p * this.view.width, f -= v * this.view.offsetY, d = f - v * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(o, u, f, d, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const nr = 4, ul = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Li = 20, xa = /* @__PURE__ */ new To(), fl = /* @__PURE__ */ new bt();
let Sa = null, ya = 0, Ma = 0, Ea = !1;
const Pi = (1 + Math.sqrt(5)) / 2, tr = 1 / Pi, hl = [
  /* @__PURE__ */ new ee(-Pi, tr, 0),
  /* @__PURE__ */ new ee(Pi, tr, 0),
  /* @__PURE__ */ new ee(-tr, 0, Pi),
  /* @__PURE__ */ new ee(tr, 0, Pi),
  /* @__PURE__ */ new ee(0, Pi, -tr),
  /* @__PURE__ */ new ee(0, Pi, tr),
  /* @__PURE__ */ new ee(-1, 1, -1),
  /* @__PURE__ */ new ee(1, 1, -1),
  /* @__PURE__ */ new ee(-1, 1, 1),
  /* @__PURE__ */ new ee(1, 1, 1)
];
class dl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, s = 100) {
    Sa = this._renderer.getRenderTarget(), ya = this._renderer.getActiveCubeFace(), Ma = this._renderer.getActiveMipmapLevel(), Ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const o = this._allocateTargets();
    return o.depthBuffer = !0, this._sceneToCubeUV(e, n, s, o), t > 0 && this._blur(o, 0, 0, t), this._applyPMREM(o), this._cleanup(o), o;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = gl(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ml(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Sa, ya, Ma), this._renderer.xr.enabled = Ea, e.scissorTest = !1, ds(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === cr || e.mapping === ur ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Sa = this._renderer.getRenderTarget(), ya = this._renderer.getActiveCubeFace(), Ma = this._renderer.getActiveMipmapLevel(), Ea = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: wn,
      minFilter: wn,
      generateMipmaps: !1,
      type: Ir,
      format: Rn,
      colorSpace: mi,
      depthBuffer: !1
    }, s = pl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = pl(e, t, n);
      const { _lodMax: o } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = tp(o)), this._blurMaterial = np(o, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new On(this._lodPlanes[0], e);
    this._renderer.compile(t, xa);
  }
  _sceneToCubeUV(e, t, n, s) {
    const f = new xn(90, 1, t, n), d = [1, -1, 1, 1, 1, 1], p = [1, 1, 1, -1, -1, -1], v = this._renderer, y = v.autoClear, S = v.toneMapping;
    v.getClearColor(fl), v.toneMapping = di, v.autoClear = !1;
    const M = new sc({
      name: "PMREM.Background",
      side: un,
      depthWrite: !1,
      depthTest: !1
    }), b = new On(new Or(), M);
    let C = !1;
    const g = e.background;
    g ? g.isColor && (M.color.copy(g), e.background = null, C = !0) : (M.color.copy(fl), C = !0);
    for (let m = 0; m < 6; m++) {
      const F = m % 3;
      F === 0 ? (f.up.set(0, d[m], 0), f.lookAt(p[m], 0, 0)) : F === 1 ? (f.up.set(0, 0, d[m]), f.lookAt(0, p[m], 0)) : (f.up.set(0, d[m], 0), f.lookAt(0, 0, p[m]));
      const D = this._cubeSize;
      ds(s, F * D, m > 2 ? D : 0, D, D), v.setRenderTarget(s), C && v.render(b, f), v.render(e, f);
    }
    b.geometry.dispose(), b.material.dispose(), v.toneMapping = S, v.autoClear = y, e.background = g;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, s = e.mapping === cr || e.mapping === ur;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = gl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ml());
    const o = s ? this._cubemapMaterial : this._equirectMaterial, u = new On(this._lodPlanes[0], o), f = o.uniforms;
    f.envMap.value = e;
    const d = this._cubeSize;
    ds(t, 0, 0, 3 * d, 2 * d), n.setRenderTarget(t), n.render(u, xa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const s = this._lodPlanes.length;
    for (let o = 1; o < s; o++) {
      const u = Math.sqrt(this._sigmas[o] * this._sigmas[o] - this._sigmas[o - 1] * this._sigmas[o - 1]), f = hl[(s - o - 1) % hl.length];
      this._blur(e, o - 1, o, u, f);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, s, o) {
    const u = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      u,
      t,
      n,
      s,
      "latitudinal",
      o
    ), this._halfBlur(
      u,
      e,
      n,
      n,
      s,
      "longitudinal",
      o
    );
  }
  _halfBlur(e, t, n, s, o, u, f) {
    const d = this._renderer, p = this._blurMaterial;
    u !== "latitudinal" && u !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const v = 3, y = new On(this._lodPlanes[s], p), S = p.uniforms, M = this._sizeLods[n] - 1, b = isFinite(o) ? Math.PI / (2 * M) : 2 * Math.PI / (2 * Li - 1), C = o / b, g = isFinite(o) ? 1 + Math.floor(v * C) : Li;
    g > Li && console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);
    const m = [];
    let F = 0;
    for (let l = 0; l < Li; ++l) {
      const Q = l / C, fe = Math.exp(-Q * Q / 2);
      m.push(fe), l === 0 ? F += fe : l < g && (F += 2 * fe);
    }
    for (let l = 0; l < m.length; l++)
      m[l] = m[l] / F;
    S.envMap.value = e.texture, S.samples.value = g, S.weights.value = m, S.latitudinal.value = u === "latitudinal", f && (S.poleAxis.value = f);
    const { _lodMax: D } = this;
    S.dTheta.value = b, S.mipInt.value = D - n;
    const N = this._sizeLods[s], ne = 3 * N * (s > D - nr ? s - D + nr : 0), k = 4 * (this._cubeSize - N);
    ds(t, ne, k, 3 * N, 2 * N), d.setRenderTarget(t), d.render(y, xa);
  }
}
function tp(i) {
  const e = [], t = [], n = [];
  let s = i;
  const o = i - nr + 1 + ul.length;
  for (let u = 0; u < o; u++) {
    const f = Math.pow(2, s);
    t.push(f);
    let d = 1 / f;
    u > i - nr ? d = ul[u - i + nr - 1] : u === 0 && (d = 0), n.push(d);
    const p = 1 / (f - 2), v = -p, y = 1 + p, S = [v, v, y, v, y, y, v, v, y, y, v, y], M = 6, b = 6, C = 3, g = 2, m = 1, F = new Float32Array(C * b * M), D = new Float32Array(g * b * M), N = new Float32Array(m * b * M);
    for (let k = 0; k < M; k++) {
      const l = k % 3 * 2 / 3 - 1, Q = k > 2 ? 0 : -1, fe = [
        l,
        Q,
        0,
        l + 2 / 3,
        Q,
        0,
        l + 2 / 3,
        Q + 1,
        0,
        l,
        Q,
        0,
        l + 2 / 3,
        Q + 1,
        0,
        l,
        Q + 1,
        0
      ];
      F.set(fe, C * b * k), D.set(S, g * b * k);
      const T = [k, k, k, k, k, k];
      N.set(T, m * b * k);
    }
    const ne = new Bi();
    ne.setAttribute("position", new Bn(F, C)), ne.setAttribute("uv", new Bn(D, g)), ne.setAttribute("faceIndex", new Bn(N, m)), e.push(ne), s > nr && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function pl(i, e, t) {
  const n = new Oi(i, e, t);
  return n.texture.mapping = Rs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function ds(i, e, t, n, s) {
  i.viewport.set(e, t, n, s), i.scissor.set(e, t, n, s);
}
function np(i, e, t) {
  const n = new Float32Array(Li), s = new ee(0, 1, 0);
  return new Qn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Li,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s }
    },
    vertexShader: bo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function ml() {
  return new Qn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: bo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function gl() {
  return new Qn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: bo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: hi,
    depthTest: !1,
    depthWrite: !1
  });
}
function bo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function ip(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(f) {
    if (f && f.isTexture) {
      const d = f.mapping, p = d === Fa || d === Oa, v = d === cr || d === ur;
      if (p || v) {
        let y = e.get(f);
        const S = y !== void 0 ? y.texture.pmremVersion : 0;
        if (f.isRenderTargetTexture && f.pmremVersion !== S)
          return t === null && (t = new dl(i)), y = p ? t.fromEquirectangular(f, y) : t.fromCubemap(f, y), y.texture.pmremVersion = f.pmremVersion, e.set(f, y), y.texture;
        if (y !== void 0)
          return y.texture;
        {
          const M = f.image;
          return p && M && M.height > 0 || v && M && s(M) ? (t === null && (t = new dl(i)), y = p ? t.fromEquirectangular(f) : t.fromCubemap(f), y.texture.pmremVersion = f.pmremVersion, e.set(f, y), f.addEventListener("dispose", o), y.texture) : null;
        }
      }
    }
    return f;
  }
  function s(f) {
    let d = 0;
    const p = 6;
    for (let v = 0; v < p; v++)
      f[v] !== void 0 && d++;
    return d === p;
  }
  function o(f) {
    const d = f.target;
    d.removeEventListener("dispose", o);
    const p = e.get(d);
    p !== void 0 && (e.delete(d), p.dispose());
  }
  function u() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: u
  };
}
function rp(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return e[n] = s, s;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const s = t(n);
      return s === null && Ms("THREE.WebGLRenderer: " + n + " extension not supported."), s;
    }
  };
}
function sp(i, e, t, n) {
  const s = {}, o = /* @__PURE__ */ new WeakMap();
  function u(y) {
    const S = y.target;
    S.index !== null && e.remove(S.index);
    for (const b in S.attributes)
      e.remove(S.attributes[b]);
    for (const b in S.morphAttributes) {
      const C = S.morphAttributes[b];
      for (let g = 0, m = C.length; g < m; g++)
        e.remove(C[g]);
    }
    S.removeEventListener("dispose", u), delete s[S.id];
    const M = o.get(S);
    M && (e.remove(M), o.delete(S)), n.releaseStatesOfGeometry(S), S.isInstancedBufferGeometry === !0 && delete S._maxInstanceCount, t.memory.geometries--;
  }
  function f(y, S) {
    return s[S.id] === !0 || (S.addEventListener("dispose", u), s[S.id] = !0, t.memory.geometries++), S;
  }
  function d(y) {
    const S = y.attributes;
    for (const b in S)
      e.update(S[b], i.ARRAY_BUFFER);
    const M = y.morphAttributes;
    for (const b in M) {
      const C = M[b];
      for (let g = 0, m = C.length; g < m; g++)
        e.update(C[g], i.ARRAY_BUFFER);
    }
  }
  function p(y) {
    const S = [], M = y.index, b = y.attributes.position;
    let C = 0;
    if (M !== null) {
      const F = M.array;
      C = M.version;
      for (let D = 0, N = F.length; D < N; D += 3) {
        const ne = F[D + 0], k = F[D + 1], l = F[D + 2];
        S.push(ne, k, k, l, l, ne);
      }
    } else if (b !== void 0) {
      const F = b.array;
      C = b.version;
      for (let D = 0, N = F.length / 3 - 1; D < N; D += 3) {
        const ne = D + 0, k = D + 1, l = D + 2;
        S.push(ne, k, k, l, l, ne);
      }
    } else
      return;
    const g = new (ec(S) ? oc : ac)(S, 1);
    g.version = C;
    const m = o.get(y);
    m && e.remove(m), o.set(y, g);
  }
  function v(y) {
    const S = o.get(y);
    if (S) {
      const M = y.index;
      M !== null && S.version < M.version && p(y);
    } else
      p(y);
    return o.get(y);
  }
  return {
    get: f,
    update: d,
    getWireframeAttribute: v
  };
}
function ap(i, e, t) {
  let n;
  function s(S) {
    n = S;
  }
  let o, u;
  function f(S) {
    o = S.type, u = S.bytesPerElement;
  }
  function d(S, M) {
    i.drawElements(n, M, o, S * u), t.update(M, n, 1);
  }
  function p(S, M, b) {
    b !== 0 && (i.drawElementsInstanced(n, M, o, S * u, b), t.update(M, n, b));
  }
  function v(S, M, b) {
    if (b === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, M, 0, o, S, 0, b);
    let g = 0;
    for (let m = 0; m < b; m++)
      g += M[m];
    t.update(g, n, 1);
  }
  function y(S, M, b, C) {
    if (b === 0) return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null)
      for (let m = 0; m < S.length; m++)
        p(S[m] / u, M[m], C[m]);
    else {
      g.multiDrawElementsInstancedWEBGL(n, M, 0, o, S, 0, C, 0, b);
      let m = 0;
      for (let F = 0; F < b; F++)
        m += M[F];
      for (let F = 0; F < C.length; F++)
        t.update(m, n, C[F]);
    }
  }
  this.setMode = s, this.setIndex = f, this.render = d, this.renderInstances = p, this.renderMultiDraw = v, this.renderMultiDrawInstances = y;
}
function op(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(o, u, f) {
    switch (t.calls++, u) {
      case i.TRIANGLES:
        t.triangles += f * (o / 3);
        break;
      case i.LINES:
        t.lines += f * (o / 2);
        break;
      case i.LINE_STRIP:
        t.lines += f * (o - 1);
        break;
      case i.LINE_LOOP:
        t.lines += f * o;
        break;
      case i.POINTS:
        t.points += f * o;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", u);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n
  };
}
function lp(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), s = new Bt();
  function o(u, f, d) {
    const p = u.morphTargetInfluences, v = f.morphAttributes.position || f.morphAttributes.normal || f.morphAttributes.color, y = v !== void 0 ? v.length : 0;
    let S = n.get(f);
    if (S === void 0 || S.count !== y) {
      let fe = function() {
        l.dispose(), n.delete(f), f.removeEventListener("dispose", fe);
      };
      S !== void 0 && S.texture.dispose();
      const M = f.morphAttributes.position !== void 0, b = f.morphAttributes.normal !== void 0, C = f.morphAttributes.color !== void 0, g = f.morphAttributes.position || [], m = f.morphAttributes.normal || [], F = f.morphAttributes.color || [];
      let D = 0;
      M === !0 && (D = 1), b === !0 && (D = 2), C === !0 && (D = 3);
      let N = f.attributes.position.count * D, ne = 1;
      N > e.maxTextureSize && (ne = Math.ceil(N / e.maxTextureSize), N = e.maxTextureSize);
      const k = new Float32Array(N * ne * 4 * y), l = new nc(k, N, ne, y);
      l.type = $n, l.needsUpdate = !0;
      const Q = D * 4;
      for (let T = 0; T < y; T++) {
        const R = g[T], ae = m[T], X = F[T], se = N * ne * 4 * T;
        for (let pe = 0; pe < R.count; pe++) {
          const j = pe * Q;
          M === !0 && (s.fromBufferAttribute(R, pe), k[se + j + 0] = s.x, k[se + j + 1] = s.y, k[se + j + 2] = s.z, k[se + j + 3] = 0), b === !0 && (s.fromBufferAttribute(ae, pe), k[se + j + 4] = s.x, k[se + j + 5] = s.y, k[se + j + 6] = s.z, k[se + j + 7] = 0), C === !0 && (s.fromBufferAttribute(X, pe), k[se + j + 8] = s.x, k[se + j + 9] = s.y, k[se + j + 10] = s.z, k[se + j + 11] = X.itemSize === 4 ? s.w : 1);
        }
      }
      S = {
        count: y,
        texture: l,
        size: new wt(N, ne)
      }, n.set(f, S), f.addEventListener("dispose", fe);
    }
    if (u.isInstancedMesh === !0 && u.morphTexture !== null)
      d.getUniforms().setValue(i, "morphTexture", u.morphTexture, t);
    else {
      let M = 0;
      for (let C = 0; C < p.length; C++)
        M += p[C];
      const b = f.morphTargetsRelative ? 1 : 1 - M;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", b), d.getUniforms().setValue(i, "morphTargetInfluences", p);
    }
    d.getUniforms().setValue(i, "morphTargetsTexture", S.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", S.size);
  }
  return {
    update: o
  };
}
function cp(i, e, t, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const p = n.render.frame, v = d.geometry, y = e.get(d, v);
    if (s.get(y) !== p && (e.update(y), s.set(y, p)), d.isInstancedMesh && (d.hasEventListener("dispose", f) === !1 && d.addEventListener("dispose", f), s.get(d) !== p && (t.update(d.instanceMatrix, i.ARRAY_BUFFER), d.instanceColor !== null && t.update(d.instanceColor, i.ARRAY_BUFFER), s.set(d, p))), d.isSkinnedMesh) {
      const S = d.skeleton;
      s.get(S) !== p && (S.update(), s.set(S, p));
    }
    return y;
  }
  function u() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function f(d) {
    const p = d.target;
    p.removeEventListener("dispose", f), t.remove(p.instanceMatrix), p.instanceColor !== null && t.remove(p.instanceColor);
  }
  return {
    update: o,
    dispose: u
  };
}
class dc extends fn {
  constructor(e, t, n, s, o, u, f, d, p, v = rr) {
    if (v !== rr && v !== hr)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && v === rr && (n = Fi), n === void 0 && v === hr && (n = fr), super(null, s, o, u, f, d, v, n, p), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = f !== void 0 ? f : Sn, this.minFilter = d !== void 0 ? d : Sn, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const pc = /* @__PURE__ */ new fn(), _l = /* @__PURE__ */ new dc(1, 1), mc = /* @__PURE__ */ new nc(), gc = /* @__PURE__ */ new Yu(), _c = /* @__PURE__ */ new uc(), vl = [], xl = [], Sl = new Float32Array(16), yl = new Float32Array(9), Ml = new Float32Array(4);
function mr(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = e * t;
  let o = vl[s];
  if (o === void 0 && (o = new Float32Array(s), vl[s] = o), e !== 0) {
    n.toArray(o, 0);
    for (let u = 1, f = 0; u !== e; ++u)
      f += t, i[u].toArray(o, f);
  }
  return o;
}
function Vt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function Wt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ls(i, e) {
  let t = xl[e];
  t === void 0 && (t = new Int32Array(e), xl[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function up(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function fp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Vt(t, e)) return;
    i.uniform2fv(this.addr, e), Wt(t, e);
  }
}
function hp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Vt(t, e)) return;
    i.uniform3fv(this.addr, e), Wt(t, e);
  }
}
function dp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Vt(t, e)) return;
    i.uniform4fv(this.addr, e), Wt(t, e);
  }
}
function pp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Vt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), Wt(t, e);
  } else {
    if (Vt(t, n)) return;
    Ml.set(n), i.uniformMatrix2fv(this.addr, !1, Ml), Wt(t, n);
  }
}
function mp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Vt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), Wt(t, e);
  } else {
    if (Vt(t, n)) return;
    yl.set(n), i.uniformMatrix3fv(this.addr, !1, yl), Wt(t, n);
  }
}
function gp(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Vt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), Wt(t, e);
  } else {
    if (Vt(t, n)) return;
    Sl.set(n), i.uniformMatrix4fv(this.addr, !1, Sl), Wt(t, n);
  }
}
function _p(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function vp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Vt(t, e)) return;
    i.uniform2iv(this.addr, e), Wt(t, e);
  }
}
function xp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Vt(t, e)) return;
    i.uniform3iv(this.addr, e), Wt(t, e);
  }
}
function Sp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Vt(t, e)) return;
    i.uniform4iv(this.addr, e), Wt(t, e);
  }
}
function yp(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Mp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Vt(t, e)) return;
    i.uniform2uiv(this.addr, e), Wt(t, e);
  }
}
function Ep(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Vt(t, e)) return;
    i.uniform3uiv(this.addr, e), Wt(t, e);
  }
}
function Tp(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Vt(t, e)) return;
    i.uniform4uiv(this.addr, e), Wt(t, e);
  }
}
function bp(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let o;
  this.type === i.SAMPLER_2D_SHADOW ? (_l.compareFunction = Ql, o = _l) : o = pc, t.setTexture2D(e || o, s);
}
function Ap(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture3D(e || gc, s);
}
function wp(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTextureCube(e || _c, s);
}
function Cp(i, e, t) {
  const n = this.cache, s = t.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), t.setTexture2DArray(e || mc, s);
}
function Rp(i) {
  switch (i) {
    case 5126:
      return up;
    // FLOAT
    case 35664:
      return fp;
    // _VEC2
    case 35665:
      return hp;
    // _VEC3
    case 35666:
      return dp;
    // _VEC4
    case 35674:
      return pp;
    // _MAT2
    case 35675:
      return mp;
    // _MAT3
    case 35676:
      return gp;
    // _MAT4
    case 5124:
    case 35670:
      return _p;
    // INT, BOOL
    case 35667:
    case 35671:
      return vp;
    // _VEC2
    case 35668:
    case 35672:
      return xp;
    // _VEC3
    case 35669:
    case 35673:
      return Sp;
    // _VEC4
    case 5125:
      return yp;
    // UINT
    case 36294:
      return Mp;
    // _VEC2
    case 36295:
      return Ep;
    // _VEC3
    case 36296:
      return Tp;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return bp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Ap;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return wp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Cp;
  }
}
function Pp(i, e) {
  i.uniform1fv(this.addr, e);
}
function Dp(i, e) {
  const t = mr(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Lp(i, e) {
  const t = mr(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Ip(i, e) {
  const t = mr(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Up(i, e) {
  const t = mr(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Np(i, e) {
  const t = mr(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Fp(i, e) {
  const t = mr(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Op(i, e) {
  i.uniform1iv(this.addr, e);
}
function Bp(i, e) {
  i.uniform2iv(this.addr, e);
}
function zp(i, e) {
  i.uniform3iv(this.addr, e);
}
function Hp(i, e) {
  i.uniform4iv(this.addr, e);
}
function kp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function Gp(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Vp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Wp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Xp(i, e, t) {
  const n = this.cache, s = e.length, o = Ls(t, s);
  Vt(n, o) || (i.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== s; ++u)
    t.setTexture2D(e[u] || pc, o[u]);
}
function qp(i, e, t) {
  const n = this.cache, s = e.length, o = Ls(t, s);
  Vt(n, o) || (i.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== s; ++u)
    t.setTexture3D(e[u] || gc, o[u]);
}
function Yp(i, e, t) {
  const n = this.cache, s = e.length, o = Ls(t, s);
  Vt(n, o) || (i.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== s; ++u)
    t.setTextureCube(e[u] || _c, o[u]);
}
function jp(i, e, t) {
  const n = this.cache, s = e.length, o = Ls(t, s);
  Vt(n, o) || (i.uniform1iv(this.addr, o), Wt(n, o));
  for (let u = 0; u !== s; ++u)
    t.setTexture2DArray(e[u] || mc, o[u]);
}
function $p(i) {
  switch (i) {
    case 5126:
      return Pp;
    // FLOAT
    case 35664:
      return Dp;
    // _VEC2
    case 35665:
      return Lp;
    // _VEC3
    case 35666:
      return Ip;
    // _VEC4
    case 35674:
      return Up;
    // _MAT2
    case 35675:
      return Np;
    // _MAT3
    case 35676:
      return Fp;
    // _MAT4
    case 5124:
    case 35670:
      return Op;
    // INT, BOOL
    case 35667:
    case 35671:
      return Bp;
    // _VEC2
    case 35668:
    case 35672:
      return zp;
    // _VEC3
    case 35669:
    case 35673:
      return Hp;
    // _VEC4
    case 5125:
      return kp;
    // UINT
    case 36294:
      return Gp;
    // _VEC2
    case 36295:
      return Vp;
    // _VEC3
    case 36296:
      return Wp;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Xp;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return qp;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Yp;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return jp;
  }
}
class Kp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Rp(t.type);
  }
}
class Zp {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = $p(t.type);
  }
}
class Jp {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const s = this.seq;
    for (let o = 0, u = s.length; o !== u; ++o) {
      const f = s[o];
      f.setValue(e, t[f.id], n);
    }
  }
}
const Ta = /(\w+)(\])?(\[|\.)?/g;
function El(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Qp(i, e, t) {
  const n = i.name, s = n.length;
  for (Ta.lastIndex = 0; ; ) {
    const o = Ta.exec(n), u = Ta.lastIndex;
    let f = o[1];
    const d = o[2] === "]", p = o[3];
    if (d && (f = f | 0), p === void 0 || p === "[" && u + 2 === s) {
      El(t, p === void 0 ? new Kp(f, i, e) : new Zp(f, i, e));
      break;
    } else {
      let y = t.map[f];
      y === void 0 && (y = new Jp(f), El(t, y)), t = y;
    }
  }
}
class Es {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const o = e.getActiveUniform(t, s), u = e.getUniformLocation(t, o.name);
      Qp(o, u, this);
    }
  }
  setValue(e, t, n, s) {
    const o = this.map[t];
    o !== void 0 && o.setValue(e, n, s);
  }
  setOptional(e, t, n) {
    const s = t[n];
    s !== void 0 && this.setValue(e, n, s);
  }
  static upload(e, t, n, s) {
    for (let o = 0, u = t.length; o !== u; ++o) {
      const f = t[o], d = n[f.id];
      d.needsUpdate !== !1 && f.setValue(e, d.value, s);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let s = 0, o = e.length; s !== o; ++s) {
      const u = e[s];
      u.id in t && n.push(u);
    }
    return n;
  }
}
function Tl(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const em = 37297;
let tm = 0;
function nm(i, e) {
  const t = i.split(`
`), n = [], s = Math.max(e - 6, 0), o = Math.min(e + 6, t.length);
  for (let u = s; u < o; u++) {
    const f = u + 1;
    n.push(`${f === e ? ">" : " "} ${f}: ${t[u]}`);
  }
  return n.join(`
`);
}
function im(i) {
  const e = Rt.getPrimaries(Rt.workingColorSpace), t = Rt.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === As && t === bs ? n = "LinearDisplayP3ToLinearSRGB" : e === bs && t === As && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case mi:
    case Ps:
      return [n, "LinearTransferOETF"];
    case Nn:
    case Mo:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function bl(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), s = i.getShaderInfoLog(e).trim();
  if (n && s === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(s);
  if (o) {
    const u = parseInt(o[1]);
    return t.toUpperCase() + `

` + s + `

` + nm(i.getShaderSource(e), u);
  } else
    return s;
}
function rm(i, e) {
  const t = im(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function sm(i, e) {
  let t;
  switch (e) {
    case vu:
      t = "Linear";
      break;
    case xu:
      t = "Reinhard";
      break;
    case Su:
      t = "Cineon";
      break;
    case yu:
      t = "ACESFilmic";
      break;
    case Eu:
      t = "AgX";
      break;
    case Tu:
      t = "Neutral";
      break;
    case Mu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ps = /* @__PURE__ */ new ee();
function am() {
  Rt.getLuminanceCoefficients(ps);
  const i = ps.x.toFixed(4), e = ps.y.toFixed(4), t = ps.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function om(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Dr).join(`
`);
}
function lm(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function cm(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const o = i.getActiveAttrib(e, s), u = o.name;
    let f = 1;
    o.type === i.FLOAT_MAT2 && (f = 2), o.type === i.FLOAT_MAT3 && (f = 3), o.type === i.FLOAT_MAT4 && (f = 4), t[u] = {
      type: o.type,
      location: i.getAttribLocation(e, u),
      locationSize: f
    };
  }
  return t;
}
function Dr(i) {
  return i !== "";
}
function Al(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function wl(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const um = /^[ \t]*#include +<([\w\d./]+)>/gm;
function po(i) {
  return i.replace(um, hm);
}
const fm = /* @__PURE__ */ new Map();
function hm(i, e) {
  let t = ot[e];
  if (t === void 0) {
    const n = fm.get(e);
    if (n !== void 0)
      t = ot[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return po(t);
}
const dm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Cl(i) {
  return i.replace(dm, pm);
}
function pm(i, e, t, n) {
  let s = "";
  for (let o = parseInt(e); o < parseInt(t); o++)
    s += n.replace(/\[\s*i\s*\]/g, "[ " + o + " ]").replace(/UNROLLED_LOOP_INDEX/g, o);
  return s;
}
function Rl(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function mm(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Hl ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Zc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Yn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function gm(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case cr:
      case ur:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Rs:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function _m(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ur:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function vm(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case kl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case gu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case _u:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function xm(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Sm(i, e, t, n) {
  const s = i.getContext(), o = t.defines;
  let u = t.vertexShader, f = t.fragmentShader;
  const d = mm(t), p = gm(t), v = _m(t), y = vm(t), S = xm(t), M = om(t), b = lm(o), C = s.createProgram();
  let g, m, F = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    b
  ].filter(Dr).join(`
`), g.length > 0 && (g += `
`), m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    b
  ].filter(Dr).join(`
`), m.length > 0 && (m += `
`)) : (g = [
    Rl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    b,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + v : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + d : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Dr).join(`
`), m = [
    Rl(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    b,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + p : "",
    t.envMap ? "#define " + v : "",
    t.envMap ? "#define " + y : "",
    S ? "#define CUBEUV_TEXEL_WIDTH " + S.texelWidth : "",
    S ? "#define CUBEUV_TEXEL_HEIGHT " + S.texelHeight : "",
    S ? "#define CUBEUV_MAX_MIP " + S.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + d : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== di ? "#define TONE_MAPPING" : "",
    t.toneMapping !== di ? ot.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== di ? sm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    ot.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    rm("linearToOutputTexel", t.outputColorSpace),
    am(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Dr).join(`
`)), u = po(u), u = Al(u, t), u = wl(u, t), f = po(f), f = Al(f, t), f = wl(f, t), u = Cl(u), f = Cl(f), t.isRawShaderMaterial !== !0 && (F = `#version 300 es
`, g = [
    M,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, m = [
    "#define varying in",
    t.glslVersion === qo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === qo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const D = F + g + u, N = F + m + f, ne = Tl(s, s.VERTEX_SHADER, D), k = Tl(s, s.FRAGMENT_SHADER, N);
  s.attachShader(C, ne), s.attachShader(C, k), t.index0AttributeName !== void 0 ? s.bindAttribLocation(C, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(C, 0, "position"), s.linkProgram(C);
  function l(R) {
    if (i.debug.checkShaderErrors) {
      const ae = s.getProgramInfoLog(C).trim(), X = s.getShaderInfoLog(ne).trim(), se = s.getShaderInfoLog(k).trim();
      let pe = !0, j = !0;
      if (s.getProgramParameter(C, s.LINK_STATUS) === !1)
        if (pe = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(s, C, ne, k);
        else {
          const me = bl(s, ne, "vertex"), ie = bl(s, k, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(C, s.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + ae + `
` + me + `
` + ie
          );
        }
      else ae !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ae) : (X === "" || se === "") && (j = !1);
      j && (R.diagnostics = {
        runnable: pe,
        programLog: ae,
        vertexShader: {
          log: X,
          prefix: g
        },
        fragmentShader: {
          log: se,
          prefix: m
        }
      });
    }
    s.deleteShader(ne), s.deleteShader(k), Q = new Es(s, C), fe = cm(s, C);
  }
  let Q;
  this.getUniforms = function() {
    return Q === void 0 && l(this), Q;
  };
  let fe;
  this.getAttributes = function() {
    return fe === void 0 && l(this), fe;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return T === !1 && (T = s.getProgramParameter(C, em)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(C), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = tm++, this.cacheKey = e, this.usedTimes = 1, this.program = C, this.vertexShader = ne, this.fragmentShader = k, this;
}
let ym = 0;
class Mm {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, s = this._getShaderStage(t), o = this._getShaderStage(n), u = this._getShaderCacheForMaterial(e);
    return u.has(s) === !1 && (u.add(s), s.usedTimes++), u.has(o) === !1 && (u.add(o), o.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Em(e), t.set(e, n)), n;
  }
}
class Em {
  constructor(e) {
    this.id = ym++, this.code = e, this.usedTimes = 0;
  }
}
function Tm(i, e, t, n, s, o, u) {
  const f = new ic(), d = new Mm(), p = /* @__PURE__ */ new Set(), v = [], y = s.logarithmicDepthBuffer, S = s.reverseDepthBuffer, M = s.vertexTextures;
  let b = s.precision;
  const C = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function g(T) {
    return p.add(T), T === 0 ? "uv" : `uv${T}`;
  }
  function m(T, R, ae, X, se) {
    const pe = X.fog, j = se.geometry, me = T.isMeshStandardMaterial ? X.environment : null, ie = (T.isMeshStandardMaterial ? t : e).get(T.envMap || me), be = ie && ie.mapping === Rs ? ie.image.height : null, Ae = C[T.type];
    T.precision !== null && (b = s.getMaxPrecision(T.precision), b !== T.precision && console.warn("THREE.WebGLProgram.getParameters:", T.precision, "not supported, using", b, "instead."));
    const Fe = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, _t = Fe !== void 0 ? Fe.length : 0;
    let St = 0;
    j.morphAttributes.position !== void 0 && (St = 1), j.morphAttributes.normal !== void 0 && (St = 2), j.morphAttributes.color !== void 0 && (St = 3);
    let ue, _e, Be, Ie;
    if (Ae) {
      const $t = Fn[Ae];
      ue = $t.vertexShader, _e = $t.fragmentShader;
    } else
      ue = T.vertexShader, _e = T.fragmentShader, d.update(T), Be = d.getVertexShaderID(T), Ie = d.getFragmentShaderID(T);
    const tt = i.getRenderTarget(), je = se.isInstancedMesh === !0, nt = se.isBatchedMesh === !0, Ct = !!T.map, st = !!T.matcap, B = !!ie, jt = !!T.aoMap, ft = !!T.lightMap, ht = !!T.bumpMap, qe = !!T.normalMap, mt = !!T.displacementMap, Ze = !!T.emissiveMap, L = !!T.metalnessMap, A = !!T.roughnessMap, q = T.anisotropy > 0, ce = T.clearcoat > 0, de = T.dispersion > 0, W = T.iridescence > 0, we = T.sheen > 0, Te = T.transmission > 0, Ue = q && !!T.anisotropyMap, vt = ce && !!T.clearcoatMap, ve = ce && !!T.clearcoatNormalMap, Ne = ce && !!T.clearcoatRoughnessMap, Xe = W && !!T.iridescenceMap, Ve = W && !!T.iridescenceThicknessMap, Ce = we && !!T.sheenColorMap, rt = we && !!T.sheenRoughnessMap, it = !!T.specularMap, At = !!T.specularColorMap, H = !!T.specularIntensityMap, De = Te && !!T.transmissionMap, re = Te && !!T.thicknessMap, he = !!T.gradientMap, ye = !!T.alphaMap, Le = T.alphaTest > 0, dt = !!T.alphaHash, yt = !!T.extensions;
    let Pt = di;
    T.toneMapped && (tt === null || tt.isXRRenderTarget === !0) && (Pt = i.toneMapping);
    const gt = {
      shaderID: Ae,
      shaderType: T.type,
      shaderName: T.name,
      vertexShader: ue,
      fragmentShader: _e,
      defines: T.defines,
      customVertexShaderID: Be,
      customFragmentShaderID: Ie,
      isRawShaderMaterial: T.isRawShaderMaterial === !0,
      glslVersion: T.glslVersion,
      precision: b,
      batching: nt,
      batchingColor: nt && se._colorsTexture !== null,
      instancing: je,
      instancingColor: je && se.instanceColor !== null,
      instancingMorph: je && se.morphTexture !== null,
      supportsVertexTextures: M,
      outputColorSpace: tt === null ? i.outputColorSpace : tt.isXRRenderTarget === !0 ? tt.texture.colorSpace : mi,
      alphaToCoverage: !!T.alphaToCoverage,
      map: Ct,
      matcap: st,
      envMap: B,
      envMapMode: B && ie.mapping,
      envMapCubeUVHeight: be,
      aoMap: jt,
      lightMap: ft,
      bumpMap: ht,
      normalMap: qe,
      displacementMap: M && mt,
      emissiveMap: Ze,
      normalMapObjectSpace: qe && T.normalMapType === Ru,
      normalMapTangentSpace: qe && T.normalMapType === Cu,
      metalnessMap: L,
      roughnessMap: A,
      anisotropy: q,
      anisotropyMap: Ue,
      clearcoat: ce,
      clearcoatMap: vt,
      clearcoatNormalMap: ve,
      clearcoatRoughnessMap: Ne,
      dispersion: de,
      iridescence: W,
      iridescenceMap: Xe,
      iridescenceThicknessMap: Ve,
      sheen: we,
      sheenColorMap: Ce,
      sheenRoughnessMap: rt,
      specularMap: it,
      specularColorMap: At,
      specularIntensityMap: H,
      transmission: Te,
      transmissionMap: De,
      thicknessMap: re,
      gradientMap: he,
      opaque: T.transparent === !1 && T.blending === ir && T.alphaToCoverage === !1,
      alphaMap: ye,
      alphaTest: Le,
      alphaHash: dt,
      combine: T.combine,
      //
      mapUv: Ct && g(T.map.channel),
      aoMapUv: jt && g(T.aoMap.channel),
      lightMapUv: ft && g(T.lightMap.channel),
      bumpMapUv: ht && g(T.bumpMap.channel),
      normalMapUv: qe && g(T.normalMap.channel),
      displacementMapUv: mt && g(T.displacementMap.channel),
      emissiveMapUv: Ze && g(T.emissiveMap.channel),
      metalnessMapUv: L && g(T.metalnessMap.channel),
      roughnessMapUv: A && g(T.roughnessMap.channel),
      anisotropyMapUv: Ue && g(T.anisotropyMap.channel),
      clearcoatMapUv: vt && g(T.clearcoatMap.channel),
      clearcoatNormalMapUv: ve && g(T.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ne && g(T.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Xe && g(T.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ve && g(T.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ce && g(T.sheenColorMap.channel),
      sheenRoughnessMapUv: rt && g(T.sheenRoughnessMap.channel),
      specularMapUv: it && g(T.specularMap.channel),
      specularColorMapUv: At && g(T.specularColorMap.channel),
      specularIntensityMapUv: H && g(T.specularIntensityMap.channel),
      transmissionMapUv: De && g(T.transmissionMap.channel),
      thicknessMapUv: re && g(T.thicknessMap.channel),
      alphaMapUv: ye && g(T.alphaMap.channel),
      //
      vertexTangents: !!j.attributes.tangent && (qe || q),
      vertexColors: T.vertexColors,
      vertexAlphas: T.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
      pointsUvs: se.isPoints === !0 && !!j.attributes.uv && (Ct || ye),
      fog: !!pe,
      useFog: T.fog === !0,
      fogExp2: !!pe && pe.isFogExp2,
      flatShading: T.flatShading === !0,
      sizeAttenuation: T.sizeAttenuation === !0,
      logarithmicDepthBuffer: y,
      reverseDepthBuffer: S,
      skinning: se.isSkinnedMesh === !0,
      morphTargets: j.morphAttributes.position !== void 0,
      morphNormals: j.morphAttributes.normal !== void 0,
      morphColors: j.morphAttributes.color !== void 0,
      morphTargetsCount: _t,
      morphTextureStride: St,
      numDirLights: R.directional.length,
      numPointLights: R.point.length,
      numSpotLights: R.spot.length,
      numSpotLightMaps: R.spotLightMap.length,
      numRectAreaLights: R.rectArea.length,
      numHemiLights: R.hemi.length,
      numDirLightShadows: R.directionalShadowMap.length,
      numPointLightShadows: R.pointShadowMap.length,
      numSpotLightShadows: R.spotShadowMap.length,
      numSpotLightShadowsWithMaps: R.numSpotLightShadowsWithMaps,
      numLightProbes: R.numLightProbes,
      numClippingPlanes: u.numPlanes,
      numClipIntersection: u.numIntersection,
      dithering: T.dithering,
      shadowMapEnabled: i.shadowMap.enabled && ae.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Pt,
      decodeVideoTexture: Ct && T.map.isVideoTexture === !0 && Rt.getTransfer(T.map.colorSpace) === Nt,
      premultipliedAlpha: T.premultipliedAlpha,
      doubleSided: T.side === jn,
      flipSided: T.side === un,
      useDepthPacking: T.depthPacking >= 0,
      depthPacking: T.depthPacking || 0,
      index0AttributeName: T.index0AttributeName,
      extensionClipCullDistance: yt && T.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (yt && T.extensions.multiDraw === !0 || nt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: T.customProgramCacheKey()
    };
    return gt.vertexUv1s = p.has(1), gt.vertexUv2s = p.has(2), gt.vertexUv3s = p.has(3), p.clear(), gt;
  }
  function F(T) {
    const R = [];
    if (T.shaderID ? R.push(T.shaderID) : (R.push(T.customVertexShaderID), R.push(T.customFragmentShaderID)), T.defines !== void 0)
      for (const ae in T.defines)
        R.push(ae), R.push(T.defines[ae]);
    return T.isRawShaderMaterial === !1 && (D(R, T), N(R, T), R.push(i.outputColorSpace)), R.push(T.customProgramCacheKey), R.join();
  }
  function D(T, R) {
    T.push(R.precision), T.push(R.outputColorSpace), T.push(R.envMapMode), T.push(R.envMapCubeUVHeight), T.push(R.mapUv), T.push(R.alphaMapUv), T.push(R.lightMapUv), T.push(R.aoMapUv), T.push(R.bumpMapUv), T.push(R.normalMapUv), T.push(R.displacementMapUv), T.push(R.emissiveMapUv), T.push(R.metalnessMapUv), T.push(R.roughnessMapUv), T.push(R.anisotropyMapUv), T.push(R.clearcoatMapUv), T.push(R.clearcoatNormalMapUv), T.push(R.clearcoatRoughnessMapUv), T.push(R.iridescenceMapUv), T.push(R.iridescenceThicknessMapUv), T.push(R.sheenColorMapUv), T.push(R.sheenRoughnessMapUv), T.push(R.specularMapUv), T.push(R.specularColorMapUv), T.push(R.specularIntensityMapUv), T.push(R.transmissionMapUv), T.push(R.thicknessMapUv), T.push(R.combine), T.push(R.fogExp2), T.push(R.sizeAttenuation), T.push(R.morphTargetsCount), T.push(R.morphAttributeCount), T.push(R.numDirLights), T.push(R.numPointLights), T.push(R.numSpotLights), T.push(R.numSpotLightMaps), T.push(R.numHemiLights), T.push(R.numRectAreaLights), T.push(R.numDirLightShadows), T.push(R.numPointLightShadows), T.push(R.numSpotLightShadows), T.push(R.numSpotLightShadowsWithMaps), T.push(R.numLightProbes), T.push(R.shadowMapType), T.push(R.toneMapping), T.push(R.numClippingPlanes), T.push(R.numClipIntersection), T.push(R.depthPacking);
  }
  function N(T, R) {
    f.disableAll(), R.supportsVertexTextures && f.enable(0), R.instancing && f.enable(1), R.instancingColor && f.enable(2), R.instancingMorph && f.enable(3), R.matcap && f.enable(4), R.envMap && f.enable(5), R.normalMapObjectSpace && f.enable(6), R.normalMapTangentSpace && f.enable(7), R.clearcoat && f.enable(8), R.iridescence && f.enable(9), R.alphaTest && f.enable(10), R.vertexColors && f.enable(11), R.vertexAlphas && f.enable(12), R.vertexUv1s && f.enable(13), R.vertexUv2s && f.enable(14), R.vertexUv3s && f.enable(15), R.vertexTangents && f.enable(16), R.anisotropy && f.enable(17), R.alphaHash && f.enable(18), R.batching && f.enable(19), R.dispersion && f.enable(20), R.batchingColor && f.enable(21), T.push(f.mask), f.disableAll(), R.fog && f.enable(0), R.useFog && f.enable(1), R.flatShading && f.enable(2), R.logarithmicDepthBuffer && f.enable(3), R.reverseDepthBuffer && f.enable(4), R.skinning && f.enable(5), R.morphTargets && f.enable(6), R.morphNormals && f.enable(7), R.morphColors && f.enable(8), R.premultipliedAlpha && f.enable(9), R.shadowMapEnabled && f.enable(10), R.doubleSided && f.enable(11), R.flipSided && f.enable(12), R.useDepthPacking && f.enable(13), R.dithering && f.enable(14), R.transmission && f.enable(15), R.sheen && f.enable(16), R.opaque && f.enable(17), R.pointsUvs && f.enable(18), R.decodeVideoTexture && f.enable(19), R.alphaToCoverage && f.enable(20), T.push(f.mask);
  }
  function ne(T) {
    const R = C[T.type];
    let ae;
    if (R) {
      const X = Fn[R];
      ae = of.clone(X.uniforms);
    } else
      ae = T.uniforms;
    return ae;
  }
  function k(T, R) {
    let ae;
    for (let X = 0, se = v.length; X < se; X++) {
      const pe = v[X];
      if (pe.cacheKey === R) {
        ae = pe, ++ae.usedTimes;
        break;
      }
    }
    return ae === void 0 && (ae = new Sm(i, R, T, o), v.push(ae)), ae;
  }
  function l(T) {
    if (--T.usedTimes === 0) {
      const R = v.indexOf(T);
      v[R] = v[v.length - 1], v.pop(), T.destroy();
    }
  }
  function Q(T) {
    d.remove(T);
  }
  function fe() {
    d.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: F,
    getUniforms: ne,
    acquireProgram: k,
    releaseProgram: l,
    releaseShaderCache: Q,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: v,
    dispose: fe
  };
}
function bm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(u) {
    return i.has(u);
  }
  function t(u) {
    let f = i.get(u);
    return f === void 0 && (f = {}, i.set(u, f)), f;
  }
  function n(u) {
    i.delete(u);
  }
  function s(u, f, d) {
    i.get(u)[f] = d;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: s,
    dispose: o
  };
}
function Am(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Pl(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Dl() {
  const i = [];
  let e = 0;
  const t = [], n = [], s = [];
  function o() {
    e = 0, t.length = 0, n.length = 0, s.length = 0;
  }
  function u(y, S, M, b, C, g) {
    let m = i[e];
    return m === void 0 ? (m = {
      id: y.id,
      object: y,
      geometry: S,
      material: M,
      groupOrder: b,
      renderOrder: y.renderOrder,
      z: C,
      group: g
    }, i[e] = m) : (m.id = y.id, m.object = y, m.geometry = S, m.material = M, m.groupOrder = b, m.renderOrder = y.renderOrder, m.z = C, m.group = g), e++, m;
  }
  function f(y, S, M, b, C, g) {
    const m = u(y, S, M, b, C, g);
    M.transmission > 0 ? n.push(m) : M.transparent === !0 ? s.push(m) : t.push(m);
  }
  function d(y, S, M, b, C, g) {
    const m = u(y, S, M, b, C, g);
    M.transmission > 0 ? n.unshift(m) : M.transparent === !0 ? s.unshift(m) : t.unshift(m);
  }
  function p(y, S) {
    t.length > 1 && t.sort(y || Am), n.length > 1 && n.sort(S || Pl), s.length > 1 && s.sort(S || Pl);
  }
  function v() {
    for (let y = e, S = i.length; y < S; y++) {
      const M = i[y];
      if (M.id === null) break;
      M.id = null, M.object = null, M.geometry = null, M.material = null, M.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: s,
    init: o,
    push: f,
    unshift: d,
    finish: v,
    sort: p
  };
}
function wm() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, s) {
    const o = i.get(n);
    let u;
    return o === void 0 ? (u = new Dl(), i.set(n, [u])) : s >= o.length ? (u = new Dl(), o.push(u)) : u = o[s], u;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Cm() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new ee(),
            color: new bt()
          };
          break;
        case "SpotLight":
          t = {
            position: new ee(),
            direction: new ee(),
            color: new bt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new ee(),
            color: new bt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new ee(),
            skyColor: new bt(),
            groundColor: new bt()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new bt(),
            position: new ee(),
            halfWidth: new ee(),
            halfHeight: new ee()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Rm() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new wt()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new wt()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new wt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Pm = 0;
function Dm(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Lm(i) {
  const e = new Cm(), t = Rm(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let p = 0; p < 9; p++) n.probe.push(new ee());
  const s = new ee(), o = new kt(), u = new kt();
  function f(p) {
    let v = 0, y = 0, S = 0;
    for (let fe = 0; fe < 9; fe++) n.probe[fe].set(0, 0, 0);
    let M = 0, b = 0, C = 0, g = 0, m = 0, F = 0, D = 0, N = 0, ne = 0, k = 0, l = 0;
    p.sort(Dm);
    for (let fe = 0, T = p.length; fe < T; fe++) {
      const R = p[fe], ae = R.color, X = R.intensity, se = R.distance, pe = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight)
        v += ae.r * X, y += ae.g * X, S += ae.b * X;
      else if (R.isLightProbe) {
        for (let j = 0; j < 9; j++)
          n.probe[j].addScaledVector(R.sh.coefficients[j], X);
        l++;
      } else if (R.isDirectionalLight) {
        const j = e.get(R);
        if (j.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const me = R.shadow, ie = t.get(R);
          ie.shadowIntensity = me.intensity, ie.shadowBias = me.bias, ie.shadowNormalBias = me.normalBias, ie.shadowRadius = me.radius, ie.shadowMapSize = me.mapSize, n.directionalShadow[M] = ie, n.directionalShadowMap[M] = pe, n.directionalShadowMatrix[M] = R.shadow.matrix, F++;
        }
        n.directional[M] = j, M++;
      } else if (R.isSpotLight) {
        const j = e.get(R);
        j.position.setFromMatrixPosition(R.matrixWorld), j.color.copy(ae).multiplyScalar(X), j.distance = se, j.coneCos = Math.cos(R.angle), j.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), j.decay = R.decay, n.spot[C] = j;
        const me = R.shadow;
        if (R.map && (n.spotLightMap[ne] = R.map, ne++, me.updateMatrices(R), R.castShadow && k++), n.spotLightMatrix[C] = me.matrix, R.castShadow) {
          const ie = t.get(R);
          ie.shadowIntensity = me.intensity, ie.shadowBias = me.bias, ie.shadowNormalBias = me.normalBias, ie.shadowRadius = me.radius, ie.shadowMapSize = me.mapSize, n.spotShadow[C] = ie, n.spotShadowMap[C] = pe, N++;
        }
        C++;
      } else if (R.isRectAreaLight) {
        const j = e.get(R);
        j.color.copy(ae).multiplyScalar(X), j.halfWidth.set(R.width * 0.5, 0, 0), j.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[g] = j, g++;
      } else if (R.isPointLight) {
        const j = e.get(R);
        if (j.color.copy(R.color).multiplyScalar(R.intensity), j.distance = R.distance, j.decay = R.decay, R.castShadow) {
          const me = R.shadow, ie = t.get(R);
          ie.shadowIntensity = me.intensity, ie.shadowBias = me.bias, ie.shadowNormalBias = me.normalBias, ie.shadowRadius = me.radius, ie.shadowMapSize = me.mapSize, ie.shadowCameraNear = me.camera.near, ie.shadowCameraFar = me.camera.far, n.pointShadow[b] = ie, n.pointShadowMap[b] = pe, n.pointShadowMatrix[b] = R.shadow.matrix, D++;
        }
        n.point[b] = j, b++;
      } else if (R.isHemisphereLight) {
        const j = e.get(R);
        j.skyColor.copy(R.color).multiplyScalar(X), j.groundColor.copy(R.groundColor).multiplyScalar(X), n.hemi[m] = j, m++;
      }
    }
    g > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = Ee.LTC_FLOAT_1, n.rectAreaLTC2 = Ee.LTC_FLOAT_2) : (n.rectAreaLTC1 = Ee.LTC_HALF_1, n.rectAreaLTC2 = Ee.LTC_HALF_2)), n.ambient[0] = v, n.ambient[1] = y, n.ambient[2] = S;
    const Q = n.hash;
    (Q.directionalLength !== M || Q.pointLength !== b || Q.spotLength !== C || Q.rectAreaLength !== g || Q.hemiLength !== m || Q.numDirectionalShadows !== F || Q.numPointShadows !== D || Q.numSpotShadows !== N || Q.numSpotMaps !== ne || Q.numLightProbes !== l) && (n.directional.length = M, n.spot.length = C, n.rectArea.length = g, n.point.length = b, n.hemi.length = m, n.directionalShadow.length = F, n.directionalShadowMap.length = F, n.pointShadow.length = D, n.pointShadowMap.length = D, n.spotShadow.length = N, n.spotShadowMap.length = N, n.directionalShadowMatrix.length = F, n.pointShadowMatrix.length = D, n.spotLightMatrix.length = N + ne - k, n.spotLightMap.length = ne, n.numSpotLightShadowsWithMaps = k, n.numLightProbes = l, Q.directionalLength = M, Q.pointLength = b, Q.spotLength = C, Q.rectAreaLength = g, Q.hemiLength = m, Q.numDirectionalShadows = F, Q.numPointShadows = D, Q.numSpotShadows = N, Q.numSpotMaps = ne, Q.numLightProbes = l, n.version = Pm++);
  }
  function d(p, v) {
    let y = 0, S = 0, M = 0, b = 0, C = 0;
    const g = v.matrixWorldInverse;
    for (let m = 0, F = p.length; m < F; m++) {
      const D = p[m];
      if (D.isDirectionalLight) {
        const N = n.directional[y];
        N.direction.setFromMatrixPosition(D.matrixWorld), s.setFromMatrixPosition(D.target.matrixWorld), N.direction.sub(s), N.direction.transformDirection(g), y++;
      } else if (D.isSpotLight) {
        const N = n.spot[M];
        N.position.setFromMatrixPosition(D.matrixWorld), N.position.applyMatrix4(g), N.direction.setFromMatrixPosition(D.matrixWorld), s.setFromMatrixPosition(D.target.matrixWorld), N.direction.sub(s), N.direction.transformDirection(g), M++;
      } else if (D.isRectAreaLight) {
        const N = n.rectArea[b];
        N.position.setFromMatrixPosition(D.matrixWorld), N.position.applyMatrix4(g), u.identity(), o.copy(D.matrixWorld), o.premultiply(g), u.extractRotation(o), N.halfWidth.set(D.width * 0.5, 0, 0), N.halfHeight.set(0, D.height * 0.5, 0), N.halfWidth.applyMatrix4(u), N.halfHeight.applyMatrix4(u), b++;
      } else if (D.isPointLight) {
        const N = n.point[S];
        N.position.setFromMatrixPosition(D.matrixWorld), N.position.applyMatrix4(g), S++;
      } else if (D.isHemisphereLight) {
        const N = n.hemi[C];
        N.direction.setFromMatrixPosition(D.matrixWorld), N.direction.transformDirection(g), C++;
      }
    }
  }
  return {
    setup: f,
    setupView: d,
    state: n
  };
}
function Ll(i) {
  const e = new Lm(i), t = [], n = [];
  function s(v) {
    p.camera = v, t.length = 0, n.length = 0;
  }
  function o(v) {
    t.push(v);
  }
  function u(v) {
    n.push(v);
  }
  function f() {
    e.setup(t);
  }
  function d(v) {
    e.setupView(t, v);
  }
  const p = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: s,
    state: p,
    setupLights: f,
    setupLightsView: d,
    pushLight: o,
    pushShadow: u
  };
}
function Im(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, o = 0) {
    const u = e.get(s);
    let f;
    return u === void 0 ? (f = new Ll(i), e.set(s, [f])) : o >= u.length ? (f = new Ll(i), u.push(f)) : f = u[o], f;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class Um extends Ds {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Au, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Nm extends Ds {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Fm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Om = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Bm(i, e, t) {
  let n = new fc();
  const s = new wt(), o = new wt(), u = new Bt(), f = new Um({ depthPacking: wu }), d = new Nm(), p = {}, v = t.maxTextureSize, y = { [pi]: un, [un]: pi, [jn]: jn }, S = new Qn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new wt() },
      radius: { value: 4 }
    },
    vertexShader: Fm,
    fragmentShader: Om
  }), M = S.clone();
  M.defines.HORIZONTAL_PASS = 1;
  const b = new Bi();
  b.setAttribute(
    "position",
    new Bn(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const C = new On(b, S), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Hl;
  let m = this.type;
  this.render = function(k, l, Q) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || k.length === 0) return;
    const fe = i.getRenderTarget(), T = i.getActiveCubeFace(), R = i.getActiveMipmapLevel(), ae = i.state;
    ae.setBlending(hi), ae.buffers.color.setClear(1, 1, 1, 1), ae.buffers.depth.setTest(!0), ae.setScissorTest(!1);
    const X = m !== Yn && this.type === Yn, se = m === Yn && this.type !== Yn;
    for (let pe = 0, j = k.length; pe < j; pe++) {
      const me = k[pe], ie = me.shadow;
      if (ie === void 0) {
        console.warn("THREE.WebGLShadowMap:", me, "has no shadow.");
        continue;
      }
      if (ie.autoUpdate === !1 && ie.needsUpdate === !1) continue;
      s.copy(ie.mapSize);
      const be = ie.getFrameExtents();
      if (s.multiply(be), o.copy(ie.mapSize), (s.x > v || s.y > v) && (s.x > v && (o.x = Math.floor(v / be.x), s.x = o.x * be.x, ie.mapSize.x = o.x), s.y > v && (o.y = Math.floor(v / be.y), s.y = o.y * be.y, ie.mapSize.y = o.y)), ie.map === null || X === !0 || se === !0) {
        const Fe = this.type !== Yn ? { minFilter: Sn, magFilter: Sn } : {};
        ie.map !== null && ie.map.dispose(), ie.map = new Oi(s.x, s.y, Fe), ie.map.texture.name = me.name + ".shadowMap", ie.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(ie.map), i.clear();
      const Ae = ie.getViewportCount();
      for (let Fe = 0; Fe < Ae; Fe++) {
        const _t = ie.getViewport(Fe);
        u.set(
          o.x * _t.x,
          o.y * _t.y,
          o.x * _t.z,
          o.y * _t.w
        ), ae.viewport(u), ie.updateMatrices(me, Fe), n = ie.getFrustum(), N(l, Q, ie.camera, me, this.type);
      }
      ie.isPointLightShadow !== !0 && this.type === Yn && F(ie, Q), ie.needsUpdate = !1;
    }
    m = this.type, g.needsUpdate = !1, i.setRenderTarget(fe, T, R);
  };
  function F(k, l) {
    const Q = e.update(C);
    S.defines.VSM_SAMPLES !== k.blurSamples && (S.defines.VSM_SAMPLES = k.blurSamples, M.defines.VSM_SAMPLES = k.blurSamples, S.needsUpdate = !0, M.needsUpdate = !0), k.mapPass === null && (k.mapPass = new Oi(s.x, s.y)), S.uniforms.shadow_pass.value = k.map.texture, S.uniforms.resolution.value = k.mapSize, S.uniforms.radius.value = k.radius, i.setRenderTarget(k.mapPass), i.clear(), i.renderBufferDirect(l, null, Q, S, C, null), M.uniforms.shadow_pass.value = k.mapPass.texture, M.uniforms.resolution.value = k.mapSize, M.uniforms.radius.value = k.radius, i.setRenderTarget(k.map), i.clear(), i.renderBufferDirect(l, null, Q, M, C, null);
  }
  function D(k, l, Q, fe) {
    let T = null;
    const R = Q.isPointLight === !0 ? k.customDistanceMaterial : k.customDepthMaterial;
    if (R !== void 0)
      T = R;
    else if (T = Q.isPointLight === !0 ? d : f, i.localClippingEnabled && l.clipShadows === !0 && Array.isArray(l.clippingPlanes) && l.clippingPlanes.length !== 0 || l.displacementMap && l.displacementScale !== 0 || l.alphaMap && l.alphaTest > 0 || l.map && l.alphaTest > 0) {
      const ae = T.uuid, X = l.uuid;
      let se = p[ae];
      se === void 0 && (se = {}, p[ae] = se);
      let pe = se[X];
      pe === void 0 && (pe = T.clone(), se[X] = pe, l.addEventListener("dispose", ne)), T = pe;
    }
    if (T.visible = l.visible, T.wireframe = l.wireframe, fe === Yn ? T.side = l.shadowSide !== null ? l.shadowSide : l.side : T.side = l.shadowSide !== null ? l.shadowSide : y[l.side], T.alphaMap = l.alphaMap, T.alphaTest = l.alphaTest, T.map = l.map, T.clipShadows = l.clipShadows, T.clippingPlanes = l.clippingPlanes, T.clipIntersection = l.clipIntersection, T.displacementMap = l.displacementMap, T.displacementScale = l.displacementScale, T.displacementBias = l.displacementBias, T.wireframeLinewidth = l.wireframeLinewidth, T.linewidth = l.linewidth, Q.isPointLight === !0 && T.isMeshDistanceMaterial === !0) {
      const ae = i.properties.get(T);
      ae.light = Q;
    }
    return T;
  }
  function N(k, l, Q, fe, T) {
    if (k.visible === !1) return;
    if (k.layers.test(l.layers) && (k.isMesh || k.isLine || k.isPoints) && (k.castShadow || k.receiveShadow && T === Yn) && (!k.frustumCulled || n.intersectsObject(k))) {
      k.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse, k.matrixWorld);
      const X = e.update(k), se = k.material;
      if (Array.isArray(se)) {
        const pe = X.groups;
        for (let j = 0, me = pe.length; j < me; j++) {
          const ie = pe[j], be = se[ie.materialIndex];
          if (be && be.visible) {
            const Ae = D(k, be, fe, T);
            k.onBeforeShadow(i, k, l, Q, X, Ae, ie), i.renderBufferDirect(Q, null, X, Ae, k, ie), k.onAfterShadow(i, k, l, Q, X, Ae, ie);
          }
        }
      } else if (se.visible) {
        const pe = D(k, se, fe, T);
        k.onBeforeShadow(i, k, l, Q, X, pe, null), i.renderBufferDirect(Q, null, X, pe, k, null), k.onAfterShadow(i, k, l, Q, X, pe, null);
      }
    }
    const ae = k.children;
    for (let X = 0, se = ae.length; X < se; X++)
      N(ae[X], l, Q, fe, T);
  }
  function ne(k) {
    k.target.removeEventListener("dispose", ne);
    for (const Q in p) {
      const fe = p[Q], T = k.target.uuid;
      T in fe && (fe[T].dispose(), delete fe[T]);
    }
  }
}
const zm = {
  [Ra]: Pa,
  [Da]: Ua,
  [La]: Na,
  [lr]: Ia,
  [Pa]: Ra,
  [Ua]: Da,
  [Na]: La,
  [Ia]: lr
};
function Hm(i) {
  function e() {
    let H = !1;
    const De = new Bt();
    let re = null;
    const he = new Bt(0, 0, 0, 0);
    return {
      setMask: function(ye) {
        re !== ye && !H && (i.colorMask(ye, ye, ye, ye), re = ye);
      },
      setLocked: function(ye) {
        H = ye;
      },
      setClear: function(ye, Le, dt, yt, Pt) {
        Pt === !0 && (ye *= yt, Le *= yt, dt *= yt), De.set(ye, Le, dt, yt), he.equals(De) === !1 && (i.clearColor(ye, Le, dt, yt), he.copy(De));
      },
      reset: function() {
        H = !1, re = null, he.set(-1, 0, 0, 0);
      }
    };
  }
  function t() {
    let H = !1, De = !1, re = null, he = null, ye = null;
    return {
      setReversed: function(Le) {
        De = Le;
      },
      setTest: function(Le) {
        Le ? Be(i.DEPTH_TEST) : Ie(i.DEPTH_TEST);
      },
      setMask: function(Le) {
        re !== Le && !H && (i.depthMask(Le), re = Le);
      },
      setFunc: function(Le) {
        if (De && (Le = zm[Le]), he !== Le) {
          switch (Le) {
            case Ra:
              i.depthFunc(i.NEVER);
              break;
            case Pa:
              i.depthFunc(i.ALWAYS);
              break;
            case Da:
              i.depthFunc(i.LESS);
              break;
            case lr:
              i.depthFunc(i.LEQUAL);
              break;
            case La:
              i.depthFunc(i.EQUAL);
              break;
            case Ia:
              i.depthFunc(i.GEQUAL);
              break;
            case Ua:
              i.depthFunc(i.GREATER);
              break;
            case Na:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          he = Le;
        }
      },
      setLocked: function(Le) {
        H = Le;
      },
      setClear: function(Le) {
        ye !== Le && (i.clearDepth(Le), ye = Le);
      },
      reset: function() {
        H = !1, re = null, he = null, ye = null;
      }
    };
  }
  function n() {
    let H = !1, De = null, re = null, he = null, ye = null, Le = null, dt = null, yt = null, Pt = null;
    return {
      setTest: function(gt) {
        H || (gt ? Be(i.STENCIL_TEST) : Ie(i.STENCIL_TEST));
      },
      setMask: function(gt) {
        De !== gt && !H && (i.stencilMask(gt), De = gt);
      },
      setFunc: function(gt, $t, mn) {
        (re !== gt || he !== $t || ye !== mn) && (i.stencilFunc(gt, $t, mn), re = gt, he = $t, ye = mn);
      },
      setOp: function(gt, $t, mn) {
        (Le !== gt || dt !== $t || yt !== mn) && (i.stencilOp(gt, $t, mn), Le = gt, dt = $t, yt = mn);
      },
      setLocked: function(gt) {
        H = gt;
      },
      setClear: function(gt) {
        Pt !== gt && (i.clearStencil(gt), Pt = gt);
      },
      reset: function() {
        H = !1, De = null, re = null, he = null, ye = null, Le = null, dt = null, yt = null, Pt = null;
      }
    };
  }
  const s = new e(), o = new t(), u = new n(), f = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let p = {}, v = {}, y = /* @__PURE__ */ new WeakMap(), S = [], M = null, b = !1, C = null, g = null, m = null, F = null, D = null, N = null, ne = null, k = new bt(0, 0, 0), l = 0, Q = !1, fe = null, T = null, R = null, ae = null, X = null;
  const se = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let pe = !1, j = 0;
  const me = i.getParameter(i.VERSION);
  me.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(me)[1]), pe = j >= 1) : me.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(me)[1]), pe = j >= 2);
  let ie = null, be = {};
  const Ae = i.getParameter(i.SCISSOR_BOX), Fe = i.getParameter(i.VIEWPORT), _t = new Bt().fromArray(Ae), St = new Bt().fromArray(Fe);
  function ue(H, De, re, he) {
    const ye = new Uint8Array(4), Le = i.createTexture();
    i.bindTexture(H, Le), i.texParameteri(H, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(H, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let dt = 0; dt < re; dt++)
      H === i.TEXTURE_3D || H === i.TEXTURE_2D_ARRAY ? i.texImage3D(De, 0, i.RGBA, 1, 1, he, 0, i.RGBA, i.UNSIGNED_BYTE, ye) : i.texImage2D(De + dt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ye);
    return Le;
  }
  const _e = {};
  _e[i.TEXTURE_2D] = ue(i.TEXTURE_2D, i.TEXTURE_2D, 1), _e[i.TEXTURE_CUBE_MAP] = ue(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), _e[i.TEXTURE_2D_ARRAY] = ue(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), _e[i.TEXTURE_3D] = ue(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), o.setClear(1), u.setClear(0), Be(i.DEPTH_TEST), o.setFunc(lr), ft(!1), ht(Ho), Be(i.CULL_FACE), B(hi);
  function Be(H) {
    p[H] !== !0 && (i.enable(H), p[H] = !0);
  }
  function Ie(H) {
    p[H] !== !1 && (i.disable(H), p[H] = !1);
  }
  function tt(H, De) {
    return v[H] !== De ? (i.bindFramebuffer(H, De), v[H] = De, H === i.DRAW_FRAMEBUFFER && (v[i.FRAMEBUFFER] = De), H === i.FRAMEBUFFER && (v[i.DRAW_FRAMEBUFFER] = De), !0) : !1;
  }
  function je(H, De) {
    let re = S, he = !1;
    if (H) {
      re = y.get(De), re === void 0 && (re = [], y.set(De, re));
      const ye = H.textures;
      if (re.length !== ye.length || re[0] !== i.COLOR_ATTACHMENT0) {
        for (let Le = 0, dt = ye.length; Le < dt; Le++)
          re[Le] = i.COLOR_ATTACHMENT0 + Le;
        re.length = ye.length, he = !0;
      }
    } else
      re[0] !== i.BACK && (re[0] = i.BACK, he = !0);
    he && i.drawBuffers(re);
  }
  function nt(H) {
    return M !== H ? (i.useProgram(H), M = H, !0) : !1;
  }
  const Ct = {
    [Di]: i.FUNC_ADD,
    [Qc]: i.FUNC_SUBTRACT,
    [eu]: i.FUNC_REVERSE_SUBTRACT
  };
  Ct[tu] = i.MIN, Ct[nu] = i.MAX;
  const st = {
    [iu]: i.ZERO,
    [ru]: i.ONE,
    [su]: i.SRC_COLOR,
    [wa]: i.SRC_ALPHA,
    [fu]: i.SRC_ALPHA_SATURATE,
    [cu]: i.DST_COLOR,
    [ou]: i.DST_ALPHA,
    [au]: i.ONE_MINUS_SRC_COLOR,
    [Ca]: i.ONE_MINUS_SRC_ALPHA,
    [uu]: i.ONE_MINUS_DST_COLOR,
    [lu]: i.ONE_MINUS_DST_ALPHA,
    [hu]: i.CONSTANT_COLOR,
    [du]: i.ONE_MINUS_CONSTANT_COLOR,
    [pu]: i.CONSTANT_ALPHA,
    [mu]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function B(H, De, re, he, ye, Le, dt, yt, Pt, gt) {
    if (H === hi) {
      b === !0 && (Ie(i.BLEND), b = !1);
      return;
    }
    if (b === !1 && (Be(i.BLEND), b = !0), H !== Jc) {
      if (H !== C || gt !== Q) {
        if ((g !== Di || D !== Di) && (i.blendEquation(i.FUNC_ADD), g = Di, D = Di), gt)
          switch (H) {
            case ir:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ko:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Go:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Vo:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", H);
              break;
          }
        else
          switch (H) {
            case ir:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ko:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Go:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Vo:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", H);
              break;
          }
        m = null, F = null, N = null, ne = null, k.set(0, 0, 0), l = 0, C = H, Q = gt;
      }
      return;
    }
    ye = ye || De, Le = Le || re, dt = dt || he, (De !== g || ye !== D) && (i.blendEquationSeparate(Ct[De], Ct[ye]), g = De, D = ye), (re !== m || he !== F || Le !== N || dt !== ne) && (i.blendFuncSeparate(st[re], st[he], st[Le], st[dt]), m = re, F = he, N = Le, ne = dt), (yt.equals(k) === !1 || Pt !== l) && (i.blendColor(yt.r, yt.g, yt.b, Pt), k.copy(yt), l = Pt), C = H, Q = !1;
  }
  function jt(H, De) {
    H.side === jn ? Ie(i.CULL_FACE) : Be(i.CULL_FACE);
    let re = H.side === un;
    De && (re = !re), ft(re), H.blending === ir && H.transparent === !1 ? B(hi) : B(H.blending, H.blendEquation, H.blendSrc, H.blendDst, H.blendEquationAlpha, H.blendSrcAlpha, H.blendDstAlpha, H.blendColor, H.blendAlpha, H.premultipliedAlpha), o.setFunc(H.depthFunc), o.setTest(H.depthTest), o.setMask(H.depthWrite), s.setMask(H.colorWrite);
    const he = H.stencilWrite;
    u.setTest(he), he && (u.setMask(H.stencilWriteMask), u.setFunc(H.stencilFunc, H.stencilRef, H.stencilFuncMask), u.setOp(H.stencilFail, H.stencilZFail, H.stencilZPass)), mt(H.polygonOffset, H.polygonOffsetFactor, H.polygonOffsetUnits), H.alphaToCoverage === !0 ? Be(i.SAMPLE_ALPHA_TO_COVERAGE) : Ie(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ft(H) {
    fe !== H && (H ? i.frontFace(i.CW) : i.frontFace(i.CCW), fe = H);
  }
  function ht(H) {
    H !== $c ? (Be(i.CULL_FACE), H !== T && (H === Ho ? i.cullFace(i.BACK) : H === Kc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ie(i.CULL_FACE), T = H;
  }
  function qe(H) {
    H !== R && (pe && i.lineWidth(H), R = H);
  }
  function mt(H, De, re) {
    H ? (Be(i.POLYGON_OFFSET_FILL), (ae !== De || X !== re) && (i.polygonOffset(De, re), ae = De, X = re)) : Ie(i.POLYGON_OFFSET_FILL);
  }
  function Ze(H) {
    H ? Be(i.SCISSOR_TEST) : Ie(i.SCISSOR_TEST);
  }
  function L(H) {
    H === void 0 && (H = i.TEXTURE0 + se - 1), ie !== H && (i.activeTexture(H), ie = H);
  }
  function A(H, De, re) {
    re === void 0 && (ie === null ? re = i.TEXTURE0 + se - 1 : re = ie);
    let he = be[re];
    he === void 0 && (he = { type: void 0, texture: void 0 }, be[re] = he), (he.type !== H || he.texture !== De) && (ie !== re && (i.activeTexture(re), ie = re), i.bindTexture(H, De || _e[H]), he.type = H, he.texture = De);
  }
  function q() {
    const H = be[ie];
    H !== void 0 && H.type !== void 0 && (i.bindTexture(H.type, null), H.type = void 0, H.texture = void 0);
  }
  function ce() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function de() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function W() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function we() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Te() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ue() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function vt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function ve() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ne() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Xe() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ve(H) {
    _t.equals(H) === !1 && (i.scissor(H.x, H.y, H.z, H.w), _t.copy(H));
  }
  function Ce(H) {
    St.equals(H) === !1 && (i.viewport(H.x, H.y, H.z, H.w), St.copy(H));
  }
  function rt(H, De) {
    let re = d.get(De);
    re === void 0 && (re = /* @__PURE__ */ new WeakMap(), d.set(De, re));
    let he = re.get(H);
    he === void 0 && (he = i.getUniformBlockIndex(De, H.name), re.set(H, he));
  }
  function it(H, De) {
    const he = d.get(De).get(H);
    f.get(De) !== he && (i.uniformBlockBinding(De, he, H.__bindingPointIndex), f.set(De, he));
  }
  function At() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), p = {}, ie = null, be = {}, v = {}, y = /* @__PURE__ */ new WeakMap(), S = [], M = null, b = !1, C = null, g = null, m = null, F = null, D = null, N = null, ne = null, k = new bt(0, 0, 0), l = 0, Q = !1, fe = null, T = null, R = null, ae = null, X = null, _t.set(0, 0, i.canvas.width, i.canvas.height), St.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), o.reset(), u.reset();
  }
  return {
    buffers: {
      color: s,
      depth: o,
      stencil: u
    },
    enable: Be,
    disable: Ie,
    bindFramebuffer: tt,
    drawBuffers: je,
    useProgram: nt,
    setBlending: B,
    setMaterial: jt,
    setFlipSided: ft,
    setCullFace: ht,
    setLineWidth: qe,
    setPolygonOffset: mt,
    setScissorTest: Ze,
    activeTexture: L,
    bindTexture: A,
    unbindTexture: q,
    compressedTexImage2D: ce,
    compressedTexImage3D: de,
    texImage2D: Ne,
    texImage3D: Xe,
    updateUBOMapping: rt,
    uniformBlockBinding: it,
    texStorage2D: vt,
    texStorage3D: ve,
    texSubImage2D: W,
    texSubImage3D: we,
    compressedTexSubImage2D: Te,
    compressedTexSubImage3D: Ue,
    scissor: Ve,
    viewport: Ce,
    reset: At
  };
}
function Il(i, e, t, n) {
  const s = km(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case ql:
      return i * e;
    case jl:
      return i * e;
    case $l:
      return i * e * 2;
    case Kl:
      return i * e / s.components * s.byteLength;
    case xo:
      return i * e / s.components * s.byteLength;
    case Zl:
      return i * e * 2 / s.components * s.byteLength;
    case So:
      return i * e * 2 / s.components * s.byteLength;
    case Yl:
      return i * e * 3 / s.components * s.byteLength;
    case Rn:
      return i * e * 4 / s.components * s.byteLength;
    case yo:
      return i * e * 4 / s.components * s.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case _s:
    case vs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case xs:
    case Ss:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case ka:
    case Va:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case Ha:
    case Ga:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case Wa:
    case Xa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case qa:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case Ya:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ja:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case $a:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ka:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Za:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ja:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Qa:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case eo:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case to:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case no:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case io:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case ro:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case so:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ao:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case ys:
    case oo:
    case lo:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case Jl:
    case co:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case uo:
    case fo:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function km(i) {
  switch (i) {
    case Zn:
    case Vl:
      return { byteLength: 1, components: 1 };
    case Lr:
    case Wl:
    case Ir:
      return { byteLength: 2, components: 1 };
    case _o:
    case vo:
      return { byteLength: 2, components: 4 };
    case Fi:
    case go:
    case $n:
      return { byteLength: 4, components: 1 };
    case Xl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function Gm(i, e, t, n, s, o, u) {
  const f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, d = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), p = new wt(), v = /* @__PURE__ */ new WeakMap();
  let y;
  const S = /* @__PURE__ */ new WeakMap();
  let M = !1;
  try {
    M = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function b(L, A) {
    return M ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(L, A)
    ) : Cs("canvas");
  }
  function C(L, A, q) {
    let ce = 1;
    const de = Ze(L);
    if ((de.width > q || de.height > q) && (ce = q / Math.max(de.width, de.height)), ce < 1)
      if (typeof HTMLImageElement < "u" && L instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && L instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && L instanceof ImageBitmap || typeof VideoFrame < "u" && L instanceof VideoFrame) {
        const W = Math.floor(ce * de.width), we = Math.floor(ce * de.height);
        y === void 0 && (y = b(W, we));
        const Te = A ? b(W, we) : y;
        return Te.width = W, Te.height = we, Te.getContext("2d").drawImage(L, 0, 0, W, we), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + de.width + "x" + de.height + ") to (" + W + "x" + we + ")."), Te;
      } else
        return "data" in L && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + de.width + "x" + de.height + ")."), L;
    return L;
  }
  function g(L) {
    return L.generateMipmaps && L.minFilter !== Sn && L.minFilter !== wn;
  }
  function m(L) {
    i.generateMipmap(L);
  }
  function F(L, A, q, ce, de = !1) {
    if (L !== null) {
      if (i[L] !== void 0) return i[L];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + L + "'");
    }
    let W = A;
    if (A === i.RED && (q === i.FLOAT && (W = i.R32F), q === i.HALF_FLOAT && (W = i.R16F), q === i.UNSIGNED_BYTE && (W = i.R8)), A === i.RED_INTEGER && (q === i.UNSIGNED_BYTE && (W = i.R8UI), q === i.UNSIGNED_SHORT && (W = i.R16UI), q === i.UNSIGNED_INT && (W = i.R32UI), q === i.BYTE && (W = i.R8I), q === i.SHORT && (W = i.R16I), q === i.INT && (W = i.R32I)), A === i.RG && (q === i.FLOAT && (W = i.RG32F), q === i.HALF_FLOAT && (W = i.RG16F), q === i.UNSIGNED_BYTE && (W = i.RG8)), A === i.RG_INTEGER && (q === i.UNSIGNED_BYTE && (W = i.RG8UI), q === i.UNSIGNED_SHORT && (W = i.RG16UI), q === i.UNSIGNED_INT && (W = i.RG32UI), q === i.BYTE && (W = i.RG8I), q === i.SHORT && (W = i.RG16I), q === i.INT && (W = i.RG32I)), A === i.RGB_INTEGER && (q === i.UNSIGNED_BYTE && (W = i.RGB8UI), q === i.UNSIGNED_SHORT && (W = i.RGB16UI), q === i.UNSIGNED_INT && (W = i.RGB32UI), q === i.BYTE && (W = i.RGB8I), q === i.SHORT && (W = i.RGB16I), q === i.INT && (W = i.RGB32I)), A === i.RGBA_INTEGER && (q === i.UNSIGNED_BYTE && (W = i.RGBA8UI), q === i.UNSIGNED_SHORT && (W = i.RGBA16UI), q === i.UNSIGNED_INT && (W = i.RGBA32UI), q === i.BYTE && (W = i.RGBA8I), q === i.SHORT && (W = i.RGBA16I), q === i.INT && (W = i.RGBA32I)), A === i.RGB && q === i.UNSIGNED_INT_5_9_9_9_REV && (W = i.RGB9_E5), A === i.RGBA) {
      const we = de ? Ts : Rt.getTransfer(ce);
      q === i.FLOAT && (W = i.RGBA32F), q === i.HALF_FLOAT && (W = i.RGBA16F), q === i.UNSIGNED_BYTE && (W = we === Nt ? i.SRGB8_ALPHA8 : i.RGBA8), q === i.UNSIGNED_SHORT_4_4_4_4 && (W = i.RGBA4), q === i.UNSIGNED_SHORT_5_5_5_1 && (W = i.RGB5_A1);
    }
    return (W === i.R16F || W === i.R32F || W === i.RG16F || W === i.RG32F || W === i.RGBA16F || W === i.RGBA32F) && e.get("EXT_color_buffer_float"), W;
  }
  function D(L, A) {
    let q;
    return L ? A === null || A === Fi || A === fr ? q = i.DEPTH24_STENCIL8 : A === $n ? q = i.DEPTH32F_STENCIL8 : A === Lr && (q = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : A === null || A === Fi || A === fr ? q = i.DEPTH_COMPONENT24 : A === $n ? q = i.DEPTH_COMPONENT32F : A === Lr && (q = i.DEPTH_COMPONENT16), q;
  }
  function N(L, A) {
    return g(L) === !0 || L.isFramebufferTexture && L.minFilter !== Sn && L.minFilter !== wn ? Math.log2(Math.max(A.width, A.height)) + 1 : L.mipmaps !== void 0 && L.mipmaps.length > 0 ? L.mipmaps.length : L.isCompressedTexture && Array.isArray(L.image) ? A.mipmaps.length : 1;
  }
  function ne(L) {
    const A = L.target;
    A.removeEventListener("dispose", ne), l(A), A.isVideoTexture && v.delete(A);
  }
  function k(L) {
    const A = L.target;
    A.removeEventListener("dispose", k), fe(A);
  }
  function l(L) {
    const A = n.get(L);
    if (A.__webglInit === void 0) return;
    const q = L.source, ce = S.get(q);
    if (ce) {
      const de = ce[A.__cacheKey];
      de.usedTimes--, de.usedTimes === 0 && Q(L), Object.keys(ce).length === 0 && S.delete(q);
    }
    n.remove(L);
  }
  function Q(L) {
    const A = n.get(L);
    i.deleteTexture(A.__webglTexture);
    const q = L.source, ce = S.get(q);
    delete ce[A.__cacheKey], u.memory.textures--;
  }
  function fe(L) {
    const A = n.get(L);
    if (L.depthTexture && L.depthTexture.dispose(), L.isWebGLCubeRenderTarget)
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(A.__webglFramebuffer[ce]))
          for (let de = 0; de < A.__webglFramebuffer[ce].length; de++) i.deleteFramebuffer(A.__webglFramebuffer[ce][de]);
        else
          i.deleteFramebuffer(A.__webglFramebuffer[ce]);
        A.__webglDepthbuffer && i.deleteRenderbuffer(A.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(A.__webglFramebuffer))
        for (let ce = 0; ce < A.__webglFramebuffer.length; ce++) i.deleteFramebuffer(A.__webglFramebuffer[ce]);
      else
        i.deleteFramebuffer(A.__webglFramebuffer);
      if (A.__webglDepthbuffer && i.deleteRenderbuffer(A.__webglDepthbuffer), A.__webglMultisampledFramebuffer && i.deleteFramebuffer(A.__webglMultisampledFramebuffer), A.__webglColorRenderbuffer)
        for (let ce = 0; ce < A.__webglColorRenderbuffer.length; ce++)
          A.__webglColorRenderbuffer[ce] && i.deleteRenderbuffer(A.__webglColorRenderbuffer[ce]);
      A.__webglDepthRenderbuffer && i.deleteRenderbuffer(A.__webglDepthRenderbuffer);
    }
    const q = L.textures;
    for (let ce = 0, de = q.length; ce < de; ce++) {
      const W = n.get(q[ce]);
      W.__webglTexture && (i.deleteTexture(W.__webglTexture), u.memory.textures--), n.remove(q[ce]);
    }
    n.remove(L);
  }
  let T = 0;
  function R() {
    T = 0;
  }
  function ae() {
    const L = T;
    return L >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + L + " texture units while this GPU supports only " + s.maxTextures), T += 1, L;
  }
  function X(L) {
    const A = [];
    return A.push(L.wrapS), A.push(L.wrapT), A.push(L.wrapR || 0), A.push(L.magFilter), A.push(L.minFilter), A.push(L.anisotropy), A.push(L.internalFormat), A.push(L.format), A.push(L.type), A.push(L.generateMipmaps), A.push(L.premultiplyAlpha), A.push(L.flipY), A.push(L.unpackAlignment), A.push(L.colorSpace), A.join();
  }
  function se(L, A) {
    const q = n.get(L);
    if (L.isVideoTexture && qe(L), L.isRenderTargetTexture === !1 && L.version > 0 && q.__version !== L.version) {
      const ce = L.image;
      if (ce === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ce.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        St(q, L, A);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, q.__webglTexture, i.TEXTURE0 + A);
  }
  function pe(L, A) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      St(q, L, A);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, q.__webglTexture, i.TEXTURE0 + A);
  }
  function j(L, A) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      St(q, L, A);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, q.__webglTexture, i.TEXTURE0 + A);
  }
  function me(L, A) {
    const q = n.get(L);
    if (L.version > 0 && q.__version !== L.version) {
      ue(q, L, A);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture, i.TEXTURE0 + A);
  }
  const ie = {
    [Ba]: i.REPEAT,
    [Ii]: i.CLAMP_TO_EDGE,
    [za]: i.MIRRORED_REPEAT
  }, be = {
    [Sn]: i.NEAREST,
    [bu]: i.NEAREST_MIPMAP_NEAREST,
    [jr]: i.NEAREST_MIPMAP_LINEAR,
    [wn]: i.LINEAR,
    [$s]: i.LINEAR_MIPMAP_NEAREST,
    [Ui]: i.LINEAR_MIPMAP_LINEAR
  }, Ae = {
    [Pu]: i.NEVER,
    [Fu]: i.ALWAYS,
    [Du]: i.LESS,
    [Ql]: i.LEQUAL,
    [Lu]: i.EQUAL,
    [Nu]: i.GEQUAL,
    [Iu]: i.GREATER,
    [Uu]: i.NOTEQUAL
  };
  function Fe(L, A) {
    if (A.type === $n && e.has("OES_texture_float_linear") === !1 && (A.magFilter === wn || A.magFilter === $s || A.magFilter === jr || A.magFilter === Ui || A.minFilter === wn || A.minFilter === $s || A.minFilter === jr || A.minFilter === Ui) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(L, i.TEXTURE_WRAP_S, ie[A.wrapS]), i.texParameteri(L, i.TEXTURE_WRAP_T, ie[A.wrapT]), (L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY) && i.texParameteri(L, i.TEXTURE_WRAP_R, ie[A.wrapR]), i.texParameteri(L, i.TEXTURE_MAG_FILTER, be[A.magFilter]), i.texParameteri(L, i.TEXTURE_MIN_FILTER, be[A.minFilter]), A.compareFunction && (i.texParameteri(L, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(L, i.TEXTURE_COMPARE_FUNC, Ae[A.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (A.magFilter === Sn || A.minFilter !== jr && A.minFilter !== Ui || A.type === $n && e.has("OES_texture_float_linear") === !1) return;
      if (A.anisotropy > 1 || n.get(A).__currentAnisotropy) {
        const q = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(L, q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(A.anisotropy, s.getMaxAnisotropy())), n.get(A).__currentAnisotropy = A.anisotropy;
      }
    }
  }
  function _t(L, A) {
    let q = !1;
    L.__webglInit === void 0 && (L.__webglInit = !0, A.addEventListener("dispose", ne));
    const ce = A.source;
    let de = S.get(ce);
    de === void 0 && (de = {}, S.set(ce, de));
    const W = X(A);
    if (W !== L.__cacheKey) {
      de[W] === void 0 && (de[W] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, u.memory.textures++, q = !0), de[W].usedTimes++;
      const we = de[L.__cacheKey];
      we !== void 0 && (de[L.__cacheKey].usedTimes--, we.usedTimes === 0 && Q(A)), L.__cacheKey = W, L.__webglTexture = de[W].texture;
    }
    return q;
  }
  function St(L, A, q) {
    let ce = i.TEXTURE_2D;
    (A.isDataArrayTexture || A.isCompressedArrayTexture) && (ce = i.TEXTURE_2D_ARRAY), A.isData3DTexture && (ce = i.TEXTURE_3D);
    const de = _t(L, A), W = A.source;
    t.bindTexture(ce, L.__webglTexture, i.TEXTURE0 + q);
    const we = n.get(W);
    if (W.version !== we.__version || de === !0) {
      t.activeTexture(i.TEXTURE0 + q);
      const Te = Rt.getPrimaries(Rt.workingColorSpace), Ue = A.colorSpace === fi ? null : Rt.getPrimaries(A.colorSpace), vt = A.colorSpace === fi || Te === Ue ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, A.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, A.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
      let ve = C(A.image, !1, s.maxTextureSize);
      ve = mt(A, ve);
      const Ne = o.convert(A.format, A.colorSpace), Xe = o.convert(A.type);
      let Ve = F(A.internalFormat, Ne, Xe, A.colorSpace, A.isVideoTexture);
      Fe(ce, A);
      let Ce;
      const rt = A.mipmaps, it = A.isVideoTexture !== !0, At = we.__version === void 0 || de === !0, H = W.dataReady, De = N(A, ve);
      if (A.isDepthTexture)
        Ve = D(A.format === hr, A.type), At && (it ? t.texStorage2D(i.TEXTURE_2D, 1, Ve, ve.width, ve.height) : t.texImage2D(i.TEXTURE_2D, 0, Ve, ve.width, ve.height, 0, Ne, Xe, null));
      else if (A.isDataTexture)
        if (rt.length > 0) {
          it && At && t.texStorage2D(i.TEXTURE_2D, De, Ve, rt[0].width, rt[0].height);
          for (let re = 0, he = rt.length; re < he; re++)
            Ce = rt[re], it ? H && t.texSubImage2D(i.TEXTURE_2D, re, 0, 0, Ce.width, Ce.height, Ne, Xe, Ce.data) : t.texImage2D(i.TEXTURE_2D, re, Ve, Ce.width, Ce.height, 0, Ne, Xe, Ce.data);
          A.generateMipmaps = !1;
        } else
          it ? (At && t.texStorage2D(i.TEXTURE_2D, De, Ve, ve.width, ve.height), H && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ve.width, ve.height, Ne, Xe, ve.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ve, ve.width, ve.height, 0, Ne, Xe, ve.data);
      else if (A.isCompressedTexture)
        if (A.isCompressedArrayTexture) {
          it && At && t.texStorage3D(i.TEXTURE_2D_ARRAY, De, Ve, rt[0].width, rt[0].height, ve.depth);
          for (let re = 0, he = rt.length; re < he; re++)
            if (Ce = rt[re], A.format !== Rn)
              if (Ne !== null)
                if (it) {
                  if (H)
                    if (A.layerUpdates.size > 0) {
                      const ye = Il(Ce.width, Ce.height, A.format, A.type);
                      for (const Le of A.layerUpdates) {
                        const dt = Ce.data.subarray(
                          Le * ye / Ce.data.BYTES_PER_ELEMENT,
                          (Le + 1) * ye / Ce.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, re, 0, 0, Le, Ce.width, Ce.height, 1, Ne, dt, 0, 0);
                      }
                      A.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, re, 0, 0, 0, Ce.width, Ce.height, ve.depth, Ne, Ce.data, 0, 0);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, re, Ve, Ce.width, Ce.height, ve.depth, 0, Ce.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              it ? H && t.texSubImage3D(i.TEXTURE_2D_ARRAY, re, 0, 0, 0, Ce.width, Ce.height, ve.depth, Ne, Xe, Ce.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, re, Ve, Ce.width, Ce.height, ve.depth, 0, Ne, Xe, Ce.data);
        } else {
          it && At && t.texStorage2D(i.TEXTURE_2D, De, Ve, rt[0].width, rt[0].height);
          for (let re = 0, he = rt.length; re < he; re++)
            Ce = rt[re], A.format !== Rn ? Ne !== null ? it ? H && t.compressedTexSubImage2D(i.TEXTURE_2D, re, 0, 0, Ce.width, Ce.height, Ne, Ce.data) : t.compressedTexImage2D(i.TEXTURE_2D, re, Ve, Ce.width, Ce.height, 0, Ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : it ? H && t.texSubImage2D(i.TEXTURE_2D, re, 0, 0, Ce.width, Ce.height, Ne, Xe, Ce.data) : t.texImage2D(i.TEXTURE_2D, re, Ve, Ce.width, Ce.height, 0, Ne, Xe, Ce.data);
        }
      else if (A.isDataArrayTexture)
        if (it) {
          if (At && t.texStorage3D(i.TEXTURE_2D_ARRAY, De, Ve, ve.width, ve.height, ve.depth), H)
            if (A.layerUpdates.size > 0) {
              const re = Il(ve.width, ve.height, A.format, A.type);
              for (const he of A.layerUpdates) {
                const ye = ve.data.subarray(
                  he * re / ve.data.BYTES_PER_ELEMENT,
                  (he + 1) * re / ve.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, he, ve.width, ve.height, 1, Ne, Xe, ye);
              }
              A.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ve.width, ve.height, ve.depth, Ne, Xe, ve.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ve, ve.width, ve.height, ve.depth, 0, Ne, Xe, ve.data);
      else if (A.isData3DTexture)
        it ? (At && t.texStorage3D(i.TEXTURE_3D, De, Ve, ve.width, ve.height, ve.depth), H && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, ve.width, ve.height, ve.depth, Ne, Xe, ve.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ve, ve.width, ve.height, ve.depth, 0, Ne, Xe, ve.data);
      else if (A.isFramebufferTexture) {
        if (At)
          if (it)
            t.texStorage2D(i.TEXTURE_2D, De, Ve, ve.width, ve.height);
          else {
            let re = ve.width, he = ve.height;
            for (let ye = 0; ye < De; ye++)
              t.texImage2D(i.TEXTURE_2D, ye, Ve, re, he, 0, Ne, Xe, null), re >>= 1, he >>= 1;
          }
      } else if (rt.length > 0) {
        if (it && At) {
          const re = Ze(rt[0]);
          t.texStorage2D(i.TEXTURE_2D, De, Ve, re.width, re.height);
        }
        for (let re = 0, he = rt.length; re < he; re++)
          Ce = rt[re], it ? H && t.texSubImage2D(i.TEXTURE_2D, re, 0, 0, Ne, Xe, Ce) : t.texImage2D(i.TEXTURE_2D, re, Ve, Ne, Xe, Ce);
        A.generateMipmaps = !1;
      } else if (it) {
        if (At) {
          const re = Ze(ve);
          t.texStorage2D(i.TEXTURE_2D, De, Ve, re.width, re.height);
        }
        H && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ne, Xe, ve);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, Ve, Ne, Xe, ve);
      g(A) && m(ce), we.__version = W.version, A.onUpdate && A.onUpdate(A);
    }
    L.__version = A.version;
  }
  function ue(L, A, q) {
    if (A.image.length !== 6) return;
    const ce = _t(L, A), de = A.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, L.__webglTexture, i.TEXTURE0 + q);
    const W = n.get(de);
    if (de.version !== W.__version || ce === !0) {
      t.activeTexture(i.TEXTURE0 + q);
      const we = Rt.getPrimaries(Rt.workingColorSpace), Te = A.colorSpace === fi ? null : Rt.getPrimaries(A.colorSpace), Ue = A.colorSpace === fi || we === Te ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, A.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, A.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ue);
      const vt = A.isCompressedTexture || A.image[0].isCompressedTexture, ve = A.image[0] && A.image[0].isDataTexture, Ne = [];
      for (let he = 0; he < 6; he++)
        !vt && !ve ? Ne[he] = C(A.image[he], !0, s.maxCubemapSize) : Ne[he] = ve ? A.image[he].image : A.image[he], Ne[he] = mt(A, Ne[he]);
      const Xe = Ne[0], Ve = o.convert(A.format, A.colorSpace), Ce = o.convert(A.type), rt = F(A.internalFormat, Ve, Ce, A.colorSpace), it = A.isVideoTexture !== !0, At = W.__version === void 0 || ce === !0, H = de.dataReady;
      let De = N(A, Xe);
      Fe(i.TEXTURE_CUBE_MAP, A);
      let re;
      if (vt) {
        it && At && t.texStorage2D(i.TEXTURE_CUBE_MAP, De, rt, Xe.width, Xe.height);
        for (let he = 0; he < 6; he++) {
          re = Ne[he].mipmaps;
          for (let ye = 0; ye < re.length; ye++) {
            const Le = re[ye];
            A.format !== Rn ? Ve !== null ? it ? H && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye, 0, 0, Le.width, Le.height, Ve, Le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye, rt, Le.width, Le.height, 0, Le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : it ? H && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye, 0, 0, Le.width, Le.height, Ve, Ce, Le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye, rt, Le.width, Le.height, 0, Ve, Ce, Le.data);
          }
        }
      } else {
        if (re = A.mipmaps, it && At) {
          re.length > 0 && De++;
          const he = Ze(Ne[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, De, rt, he.width, he.height);
        }
        for (let he = 0; he < 6; he++)
          if (ve) {
            it ? H && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, 0, 0, 0, Ne[he].width, Ne[he].height, Ve, Ce, Ne[he].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, 0, rt, Ne[he].width, Ne[he].height, 0, Ve, Ce, Ne[he].data);
            for (let ye = 0; ye < re.length; ye++) {
              const dt = re[ye].image[he].image;
              it ? H && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye + 1, 0, 0, dt.width, dt.height, Ve, Ce, dt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye + 1, rt, dt.width, dt.height, 0, Ve, Ce, dt.data);
            }
          } else {
            it ? H && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, 0, 0, 0, Ve, Ce, Ne[he]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, 0, rt, Ve, Ce, Ne[he]);
            for (let ye = 0; ye < re.length; ye++) {
              const Le = re[ye];
              it ? H && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye + 1, 0, 0, Ve, Ce, Le.image[he]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + he, ye + 1, rt, Ve, Ce, Le.image[he]);
            }
          }
      }
      g(A) && m(i.TEXTURE_CUBE_MAP), W.__version = de.version, A.onUpdate && A.onUpdate(A);
    }
    L.__version = A.version;
  }
  function _e(L, A, q, ce, de, W) {
    const we = o.convert(q.format, q.colorSpace), Te = o.convert(q.type), Ue = F(q.internalFormat, we, Te, q.colorSpace);
    if (!n.get(A).__hasExternalTextures) {
      const ve = Math.max(1, A.width >> W), Ne = Math.max(1, A.height >> W);
      de === i.TEXTURE_3D || de === i.TEXTURE_2D_ARRAY ? t.texImage3D(de, W, Ue, ve, Ne, A.depth, 0, we, Te, null) : t.texImage2D(de, W, Ue, ve, Ne, 0, we, Te, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, L), ht(A) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ce, de, n.get(q).__webglTexture, 0, ft(A)) : (de === i.TEXTURE_2D || de >= i.TEXTURE_CUBE_MAP_POSITIVE_X && de <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, ce, de, n.get(q).__webglTexture, W), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Be(L, A, q) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, L), A.depthBuffer) {
      const ce = A.depthTexture, de = ce && ce.isDepthTexture ? ce.type : null, W = D(A.stencilBuffer, de), we = A.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Te = ft(A);
      ht(A) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Te, W, A.width, A.height) : q ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Te, W, A.width, A.height) : i.renderbufferStorage(i.RENDERBUFFER, W, A.width, A.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, we, i.RENDERBUFFER, L);
    } else {
      const ce = A.textures;
      for (let de = 0; de < ce.length; de++) {
        const W = ce[de], we = o.convert(W.format, W.colorSpace), Te = o.convert(W.type), Ue = F(W.internalFormat, we, Te, W.colorSpace), vt = ft(A);
        q && ht(A) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, vt, Ue, A.width, A.height) : ht(A) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, vt, Ue, A.width, A.height) : i.renderbufferStorage(i.RENDERBUFFER, Ue, A.width, A.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Ie(L, A) {
    if (A && A.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, L), !(A.depthTexture && A.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(A.depthTexture).__webglTexture || A.depthTexture.image.width !== A.width || A.depthTexture.image.height !== A.height) && (A.depthTexture.image.width = A.width, A.depthTexture.image.height = A.height, A.depthTexture.needsUpdate = !0), se(A.depthTexture, 0);
    const ce = n.get(A.depthTexture).__webglTexture, de = ft(A);
    if (A.depthTexture.format === rr)
      ht(A) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ce, 0, de) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ce, 0);
    else if (A.depthTexture.format === hr)
      ht(A) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ce, 0, de) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ce, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function tt(L) {
    const A = n.get(L), q = L.isWebGLCubeRenderTarget === !0;
    if (A.__boundDepthTexture !== L.depthTexture) {
      const ce = L.depthTexture;
      if (A.__depthDisposeCallback && A.__depthDisposeCallback(), ce) {
        const de = () => {
          delete A.__boundDepthTexture, delete A.__depthDisposeCallback, ce.removeEventListener("dispose", de);
        };
        ce.addEventListener("dispose", de), A.__depthDisposeCallback = de;
      }
      A.__boundDepthTexture = ce;
    }
    if (L.depthTexture && !A.__autoAllocateDepthBuffer) {
      if (q) throw new Error("target.depthTexture not supported in Cube render targets");
      Ie(A.__webglFramebuffer, L);
    } else if (q) {
      A.__webglDepthbuffer = [];
      for (let ce = 0; ce < 6; ce++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer[ce]), A.__webglDepthbuffer[ce] === void 0)
          A.__webglDepthbuffer[ce] = i.createRenderbuffer(), Be(A.__webglDepthbuffer[ce], L, !1);
        else {
          const de = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, W = A.__webglDepthbuffer[ce];
          i.bindRenderbuffer(i.RENDERBUFFER, W), i.framebufferRenderbuffer(i.FRAMEBUFFER, de, i.RENDERBUFFER, W);
        }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, A.__webglFramebuffer), A.__webglDepthbuffer === void 0)
      A.__webglDepthbuffer = i.createRenderbuffer(), Be(A.__webglDepthbuffer, L, !1);
    else {
      const ce = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, de = A.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, de), i.framebufferRenderbuffer(i.FRAMEBUFFER, ce, i.RENDERBUFFER, de);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function je(L, A, q) {
    const ce = n.get(L);
    A !== void 0 && _e(ce.__webglFramebuffer, L, L.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), q !== void 0 && tt(L);
  }
  function nt(L) {
    const A = L.texture, q = n.get(L), ce = n.get(A);
    L.addEventListener("dispose", k);
    const de = L.textures, W = L.isWebGLCubeRenderTarget === !0, we = de.length > 1;
    if (we || (ce.__webglTexture === void 0 && (ce.__webglTexture = i.createTexture()), ce.__version = A.version, u.memory.textures++), W) {
      q.__webglFramebuffer = [];
      for (let Te = 0; Te < 6; Te++)
        if (A.mipmaps && A.mipmaps.length > 0) {
          q.__webglFramebuffer[Te] = [];
          for (let Ue = 0; Ue < A.mipmaps.length; Ue++)
            q.__webglFramebuffer[Te][Ue] = i.createFramebuffer();
        } else
          q.__webglFramebuffer[Te] = i.createFramebuffer();
    } else {
      if (A.mipmaps && A.mipmaps.length > 0) {
        q.__webglFramebuffer = [];
        for (let Te = 0; Te < A.mipmaps.length; Te++)
          q.__webglFramebuffer[Te] = i.createFramebuffer();
      } else
        q.__webglFramebuffer = i.createFramebuffer();
      if (we)
        for (let Te = 0, Ue = de.length; Te < Ue; Te++) {
          const vt = n.get(de[Te]);
          vt.__webglTexture === void 0 && (vt.__webglTexture = i.createTexture(), u.memory.textures++);
        }
      if (L.samples > 0 && ht(L) === !1) {
        q.__webglMultisampledFramebuffer = i.createFramebuffer(), q.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, q.__webglMultisampledFramebuffer);
        for (let Te = 0; Te < de.length; Te++) {
          const Ue = de[Te];
          q.__webglColorRenderbuffer[Te] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, q.__webglColorRenderbuffer[Te]);
          const vt = o.convert(Ue.format, Ue.colorSpace), ve = o.convert(Ue.type), Ne = F(Ue.internalFormat, vt, ve, Ue.colorSpace, L.isXRRenderTarget === !0), Xe = ft(L);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Xe, Ne, L.width, L.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Te, i.RENDERBUFFER, q.__webglColorRenderbuffer[Te]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), L.depthBuffer && (q.__webglDepthRenderbuffer = i.createRenderbuffer(), Be(q.__webglDepthRenderbuffer, L, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (W) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ce.__webglTexture), Fe(i.TEXTURE_CUBE_MAP, A);
      for (let Te = 0; Te < 6; Te++)
        if (A.mipmaps && A.mipmaps.length > 0)
          for (let Ue = 0; Ue < A.mipmaps.length; Ue++)
            _e(q.__webglFramebuffer[Te][Ue], L, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Te, Ue);
        else
          _e(q.__webglFramebuffer[Te], L, A, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + Te, 0);
      g(A) && m(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (we) {
      for (let Te = 0, Ue = de.length; Te < Ue; Te++) {
        const vt = de[Te], ve = n.get(vt);
        t.bindTexture(i.TEXTURE_2D, ve.__webglTexture), Fe(i.TEXTURE_2D, vt), _e(q.__webglFramebuffer, L, vt, i.COLOR_ATTACHMENT0 + Te, i.TEXTURE_2D, 0), g(vt) && m(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let Te = i.TEXTURE_2D;
      if ((L.isWebGL3DRenderTarget || L.isWebGLArrayRenderTarget) && (Te = L.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(Te, ce.__webglTexture), Fe(Te, A), A.mipmaps && A.mipmaps.length > 0)
        for (let Ue = 0; Ue < A.mipmaps.length; Ue++)
          _e(q.__webglFramebuffer[Ue], L, A, i.COLOR_ATTACHMENT0, Te, Ue);
      else
        _e(q.__webglFramebuffer, L, A, i.COLOR_ATTACHMENT0, Te, 0);
      g(A) && m(Te), t.unbindTexture();
    }
    L.depthBuffer && tt(L);
  }
  function Ct(L) {
    const A = L.textures;
    for (let q = 0, ce = A.length; q < ce; q++) {
      const de = A[q];
      if (g(de)) {
        const W = L.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, we = n.get(de).__webglTexture;
        t.bindTexture(W, we), m(W), t.unbindTexture();
      }
    }
  }
  const st = [], B = [];
  function jt(L) {
    if (L.samples > 0) {
      if (ht(L) === !1) {
        const A = L.textures, q = L.width, ce = L.height;
        let de = i.COLOR_BUFFER_BIT;
        const W = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, we = n.get(L), Te = A.length > 1;
        if (Te)
          for (let Ue = 0; Ue < A.length; Ue++)
            t.bindFramebuffer(i.FRAMEBUFFER, we.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ue, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, we.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ue, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, we.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, we.__webglFramebuffer);
        for (let Ue = 0; Ue < A.length; Ue++) {
          if (L.resolveDepthBuffer && (L.depthBuffer && (de |= i.DEPTH_BUFFER_BIT), L.stencilBuffer && L.resolveStencilBuffer && (de |= i.STENCIL_BUFFER_BIT)), Te) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, we.__webglColorRenderbuffer[Ue]);
            const vt = n.get(A[Ue]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, vt, 0);
          }
          i.blitFramebuffer(0, 0, q, ce, 0, 0, q, ce, de, i.NEAREST), d === !0 && (st.length = 0, B.length = 0, st.push(i.COLOR_ATTACHMENT0 + Ue), L.depthBuffer && L.resolveDepthBuffer === !1 && (st.push(W), B.push(W), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, B)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, st));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), Te)
          for (let Ue = 0; Ue < A.length; Ue++) {
            t.bindFramebuffer(i.FRAMEBUFFER, we.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ue, i.RENDERBUFFER, we.__webglColorRenderbuffer[Ue]);
            const vt = n.get(A[Ue]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, we.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Ue, i.TEXTURE_2D, vt, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, we.__webglMultisampledFramebuffer);
      } else if (L.depthBuffer && L.resolveDepthBuffer === !1 && d) {
        const A = L.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [A]);
      }
    }
  }
  function ft(L) {
    return Math.min(s.maxSamples, L.samples);
  }
  function ht(L) {
    const A = n.get(L);
    return L.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && A.__useRenderToTexture !== !1;
  }
  function qe(L) {
    const A = u.render.frame;
    v.get(L) !== A && (v.set(L, A), L.update());
  }
  function mt(L, A) {
    const q = L.colorSpace, ce = L.format, de = L.type;
    return L.isCompressedTexture === !0 || L.isVideoTexture === !0 || q !== mi && q !== fi && (Rt.getTransfer(q) === Nt ? (ce !== Rn || de !== Zn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", q)), A;
  }
  function Ze(L) {
    return typeof HTMLImageElement < "u" && L instanceof HTMLImageElement ? (p.width = L.naturalWidth || L.width, p.height = L.naturalHeight || L.height) : typeof VideoFrame < "u" && L instanceof VideoFrame ? (p.width = L.displayWidth, p.height = L.displayHeight) : (p.width = L.width, p.height = L.height), p;
  }
  this.allocateTextureUnit = ae, this.resetTextureUnits = R, this.setTexture2D = se, this.setTexture2DArray = pe, this.setTexture3D = j, this.setTextureCube = me, this.rebindTextures = je, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = Ct, this.updateMultisampleRenderTarget = jt, this.setupDepthRenderbuffer = tt, this.setupFrameBufferTexture = _e, this.useMultisampledRTT = ht;
}
function Vm(i, e) {
  function t(n, s = fi) {
    let o;
    const u = Rt.getTransfer(s);
    if (n === Zn) return i.UNSIGNED_BYTE;
    if (n === _o) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === vo) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Xl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Vl) return i.BYTE;
    if (n === Wl) return i.SHORT;
    if (n === Lr) return i.UNSIGNED_SHORT;
    if (n === go) return i.INT;
    if (n === Fi) return i.UNSIGNED_INT;
    if (n === $n) return i.FLOAT;
    if (n === Ir) return i.HALF_FLOAT;
    if (n === ql) return i.ALPHA;
    if (n === Yl) return i.RGB;
    if (n === Rn) return i.RGBA;
    if (n === jl) return i.LUMINANCE;
    if (n === $l) return i.LUMINANCE_ALPHA;
    if (n === rr) return i.DEPTH_COMPONENT;
    if (n === hr) return i.DEPTH_STENCIL;
    if (n === Kl) return i.RED;
    if (n === xo) return i.RED_INTEGER;
    if (n === Zl) return i.RG;
    if (n === So) return i.RG_INTEGER;
    if (n === yo) return i.RGBA_INTEGER;
    if (n === _s || n === vs || n === xs || n === Ss)
      if (u === Nt)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (n === _s) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === vs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === xs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ss) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (n === _s) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === vs) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === xs) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ss) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Ha || n === ka || n === Ga || n === Va)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (n === Ha) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ka) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ga) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Va) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Wa || n === Xa || n === qa)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (n === Wa || n === Xa) return u === Nt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (n === qa) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Ya || n === ja || n === $a || n === Ka || n === Za || n === Ja || n === Qa || n === eo || n === to || n === no || n === io || n === ro || n === so || n === ao)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (n === Ya) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ja) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === $a) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Ka) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === Za) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ja) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Qa) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === eo) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === to) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === no) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === io) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ro) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === so) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ao) return u === Nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === ys || n === oo || n === lo)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (n === ys) return u === Nt ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === oo) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === lo) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Jl || n === co || n === uo || n === fo)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (n === ys) return o.COMPRESSED_RED_RGTC1_EXT;
        if (n === co) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === uo) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === fo) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === fr ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class Wm extends xn {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class ms extends pn {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Xm = { type: "move" };
class ba {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ms(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ms(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new ee(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new ee()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ms(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new ee(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new ee()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let s = null, o = null, u = null;
    const f = this._targetRay, d = this._grip, p = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (p && e.hand) {
        u = !0;
        for (const C of e.hand.values()) {
          const g = t.getJointPose(C, n), m = this._getHandJoint(p, C);
          g !== null && (m.matrix.fromArray(g.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = g.radius), m.visible = g !== null;
        }
        const v = p.joints["index-finger-tip"], y = p.joints["thumb-tip"], S = v.position.distanceTo(y.position), M = 0.02, b = 5e-3;
        p.inputState.pinching && S > M + b ? (p.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !p.inputState.pinching && S <= M - b && (p.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        d !== null && e.gripSpace && (o = t.getPose(e.gripSpace, n), o !== null && (d.matrix.fromArray(o.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, o.linearVelocity ? (d.hasLinearVelocity = !0, d.linearVelocity.copy(o.linearVelocity)) : d.hasLinearVelocity = !1, o.angularVelocity ? (d.hasAngularVelocity = !0, d.angularVelocity.copy(o.angularVelocity)) : d.hasAngularVelocity = !1));
      f !== null && (s = t.getPose(e.targetRaySpace, n), s === null && o !== null && (s = o), s !== null && (f.matrix.fromArray(s.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (f.hasLinearVelocity = !0, f.linearVelocity.copy(s.linearVelocity)) : f.hasLinearVelocity = !1, s.angularVelocity ? (f.hasAngularVelocity = !0, f.angularVelocity.copy(s.angularVelocity)) : f.hasAngularVelocity = !1, this.dispatchEvent(Xm)));
    }
    return f !== null && (f.visible = s !== null), d !== null && (d.visible = o !== null), p !== null && (p.visible = u !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ms();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const qm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Ym = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class jm {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const s = new fn(), o = e.properties.get(s);
      o.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = s;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Qn({
        vertexShader: qm,
        fragmentShader: Ym,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new On(new Br(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class $m extends pr {
  constructor(e, t) {
    super();
    const n = this;
    let s = null, o = 1, u = null, f = "local-floor", d = 1, p = null, v = null, y = null, S = null, M = null, b = null;
    const C = new jm(), g = t.getContextAttributes();
    let m = null, F = null;
    const D = [], N = [], ne = new wt();
    let k = null;
    const l = new xn();
    l.layers.enable(1), l.viewport = new Bt();
    const Q = new xn();
    Q.layers.enable(2), Q.viewport = new Bt();
    const fe = [l, Q], T = new Wm();
    T.layers.enable(1), T.layers.enable(2);
    let R = null, ae = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(ue) {
      let _e = D[ue];
      return _e === void 0 && (_e = new ba(), D[ue] = _e), _e.getTargetRaySpace();
    }, this.getControllerGrip = function(ue) {
      let _e = D[ue];
      return _e === void 0 && (_e = new ba(), D[ue] = _e), _e.getGripSpace();
    }, this.getHand = function(ue) {
      let _e = D[ue];
      return _e === void 0 && (_e = new ba(), D[ue] = _e), _e.getHandSpace();
    };
    function X(ue) {
      const _e = N.indexOf(ue.inputSource);
      if (_e === -1)
        return;
      const Be = D[_e];
      Be !== void 0 && (Be.update(ue.inputSource, ue.frame, p || u), Be.dispatchEvent({ type: ue.type, data: ue.inputSource }));
    }
    function se() {
      s.removeEventListener("select", X), s.removeEventListener("selectstart", X), s.removeEventListener("selectend", X), s.removeEventListener("squeeze", X), s.removeEventListener("squeezestart", X), s.removeEventListener("squeezeend", X), s.removeEventListener("end", se), s.removeEventListener("inputsourceschange", pe);
      for (let ue = 0; ue < D.length; ue++) {
        const _e = N[ue];
        _e !== null && (N[ue] = null, D[ue].disconnect(_e));
      }
      R = null, ae = null, C.reset(), e.setRenderTarget(m), M = null, S = null, y = null, s = null, F = null, St.stop(), n.isPresenting = !1, e.setPixelRatio(k), e.setSize(ne.width, ne.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(ue) {
      o = ue, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(ue) {
      f = ue, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return p || u;
    }, this.setReferenceSpace = function(ue) {
      p = ue;
    }, this.getBaseLayer = function() {
      return S !== null ? S : M;
    }, this.getBinding = function() {
      return y;
    }, this.getFrame = function() {
      return b;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(ue) {
      if (s = ue, s !== null) {
        if (m = e.getRenderTarget(), s.addEventListener("select", X), s.addEventListener("selectstart", X), s.addEventListener("selectend", X), s.addEventListener("squeeze", X), s.addEventListener("squeezestart", X), s.addEventListener("squeezeend", X), s.addEventListener("end", se), s.addEventListener("inputsourceschange", pe), g.xrCompatible !== !0 && await t.makeXRCompatible(), k = e.getPixelRatio(), e.getSize(ne), s.renderState.layers === void 0) {
          const _e = {
            antialias: g.antialias,
            alpha: !0,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: o
          };
          M = new XRWebGLLayer(s, t, _e), s.updateRenderState({ baseLayer: M }), e.setPixelRatio(1), e.setSize(M.framebufferWidth, M.framebufferHeight, !1), F = new Oi(
            M.framebufferWidth,
            M.framebufferHeight,
            {
              format: Rn,
              type: Zn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let _e = null, Be = null, Ie = null;
          g.depth && (Ie = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, _e = g.stencil ? hr : rr, Be = g.stencil ? fr : Fi);
          const tt = {
            colorFormat: t.RGBA8,
            depthFormat: Ie,
            scaleFactor: o
          };
          y = new XRWebGLBinding(s, t), S = y.createProjectionLayer(tt), s.updateRenderState({ layers: [S] }), e.setPixelRatio(1), e.setSize(S.textureWidth, S.textureHeight, !1), F = new Oi(
            S.textureWidth,
            S.textureHeight,
            {
              format: Rn,
              type: Zn,
              depthTexture: new dc(S.textureWidth, S.textureHeight, Be, void 0, void 0, void 0, void 0, void 0, void 0, _e),
              stencilBuffer: g.stencil,
              colorSpace: e.outputColorSpace,
              samples: g.antialias ? 4 : 0,
              resolveDepthBuffer: S.ignoreDepthValues === !1
            }
          );
        }
        F.isXRRenderTarget = !0, this.setFoveation(d), p = null, u = await s.requestReferenceSpace(f), St.setContext(s), St.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null)
        return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return C.getDepthTexture();
    };
    function pe(ue) {
      for (let _e = 0; _e < ue.removed.length; _e++) {
        const Be = ue.removed[_e], Ie = N.indexOf(Be);
        Ie >= 0 && (N[Ie] = null, D[Ie].disconnect(Be));
      }
      for (let _e = 0; _e < ue.added.length; _e++) {
        const Be = ue.added[_e];
        let Ie = N.indexOf(Be);
        if (Ie === -1) {
          for (let je = 0; je < D.length; je++)
            if (je >= N.length) {
              N.push(Be), Ie = je;
              break;
            } else if (N[je] === null) {
              N[je] = Be, Ie = je;
              break;
            }
          if (Ie === -1) break;
        }
        const tt = D[Ie];
        tt && tt.connect(Be);
      }
    }
    const j = new ee(), me = new ee();
    function ie(ue, _e, Be) {
      j.setFromMatrixPosition(_e.matrixWorld), me.setFromMatrixPosition(Be.matrixWorld);
      const Ie = j.distanceTo(me), tt = _e.projectionMatrix.elements, je = Be.projectionMatrix.elements, nt = tt[14] / (tt[10] - 1), Ct = tt[14] / (tt[10] + 1), st = (tt[9] + 1) / tt[5], B = (tt[9] - 1) / tt[5], jt = (tt[8] - 1) / tt[0], ft = (je[8] + 1) / je[0], ht = nt * jt, qe = nt * ft, mt = Ie / (-jt + ft), Ze = mt * -jt;
      if (_e.matrixWorld.decompose(ue.position, ue.quaternion, ue.scale), ue.translateX(Ze), ue.translateZ(mt), ue.matrixWorld.compose(ue.position, ue.quaternion, ue.scale), ue.matrixWorldInverse.copy(ue.matrixWorld).invert(), tt[10] === -1)
        ue.projectionMatrix.copy(_e.projectionMatrix), ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse);
      else {
        const L = nt + mt, A = Ct + mt, q = ht - Ze, ce = qe + (Ie - Ze), de = st * Ct / A * L, W = B * Ct / A * L;
        ue.projectionMatrix.makePerspective(q, ce, de, W, L, A), ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert();
      }
    }
    function be(ue, _e) {
      _e === null ? ue.matrixWorld.copy(ue.matrix) : ue.matrixWorld.multiplyMatrices(_e.matrixWorld, ue.matrix), ue.matrixWorldInverse.copy(ue.matrixWorld).invert();
    }
    this.updateCamera = function(ue) {
      if (s === null) return;
      let _e = ue.near, Be = ue.far;
      C.texture !== null && (C.depthNear > 0 && (_e = C.depthNear), C.depthFar > 0 && (Be = C.depthFar)), T.near = Q.near = l.near = _e, T.far = Q.far = l.far = Be, (R !== T.near || ae !== T.far) && (s.updateRenderState({
        depthNear: T.near,
        depthFar: T.far
      }), R = T.near, ae = T.far);
      const Ie = ue.parent, tt = T.cameras;
      be(T, Ie);
      for (let je = 0; je < tt.length; je++)
        be(tt[je], Ie);
      tt.length === 2 ? ie(T, l, Q) : T.projectionMatrix.copy(l.projectionMatrix), Ae(ue, T, Ie);
    };
    function Ae(ue, _e, Be) {
      Be === null ? ue.matrix.copy(_e.matrixWorld) : (ue.matrix.copy(Be.matrixWorld), ue.matrix.invert(), ue.matrix.multiply(_e.matrixWorld)), ue.matrix.decompose(ue.position, ue.quaternion, ue.scale), ue.updateMatrixWorld(!0), ue.projectionMatrix.copy(_e.projectionMatrix), ue.projectionMatrixInverse.copy(_e.projectionMatrixInverse), ue.isPerspectiveCamera && (ue.fov = ho * 2 * Math.atan(1 / ue.projectionMatrix.elements[5]), ue.zoom = 1);
    }
    this.getCamera = function() {
      return T;
    }, this.getFoveation = function() {
      if (!(S === null && M === null))
        return d;
    }, this.setFoveation = function(ue) {
      d = ue, S !== null && (S.fixedFoveation = ue), M !== null && M.fixedFoveation !== void 0 && (M.fixedFoveation = ue);
    }, this.hasDepthSensing = function() {
      return C.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return C.getMesh(T);
    };
    let Fe = null;
    function _t(ue, _e) {
      if (v = _e.getViewerPose(p || u), b = _e, v !== null) {
        const Be = v.views;
        M !== null && (e.setRenderTargetFramebuffer(F, M.framebuffer), e.setRenderTarget(F));
        let Ie = !1;
        Be.length !== T.cameras.length && (T.cameras.length = 0, Ie = !0);
        for (let je = 0; je < Be.length; je++) {
          const nt = Be[je];
          let Ct = null;
          if (M !== null)
            Ct = M.getViewport(nt);
          else {
            const B = y.getViewSubImage(S, nt);
            Ct = B.viewport, je === 0 && (e.setRenderTargetTextures(
              F,
              B.colorTexture,
              S.ignoreDepthValues ? void 0 : B.depthStencilTexture
            ), e.setRenderTarget(F));
          }
          let st = fe[je];
          st === void 0 && (st = new xn(), st.layers.enable(je), st.viewport = new Bt(), fe[je] = st), st.matrix.fromArray(nt.transform.matrix), st.matrix.decompose(st.position, st.quaternion, st.scale), st.projectionMatrix.fromArray(nt.projectionMatrix), st.projectionMatrixInverse.copy(st.projectionMatrix).invert(), st.viewport.set(Ct.x, Ct.y, Ct.width, Ct.height), je === 0 && (T.matrix.copy(st.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), Ie === !0 && T.cameras.push(st);
        }
        const tt = s.enabledFeatures;
        if (tt && tt.includes("depth-sensing")) {
          const je = y.getDepthInformation(Be[0]);
          je && je.isValid && je.texture && C.init(e, je, s.renderState);
        }
      }
      for (let Be = 0; Be < D.length; Be++) {
        const Ie = N[Be], tt = D[Be];
        Ie !== null && tt !== void 0 && tt.update(Ie, _e, p || u);
      }
      Fe && Fe(ue, _e), _e.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: _e }), b = null;
    }
    const St = new hc();
    St.setAnimationLoop(_t), this.setAnimationLoop = function(ue) {
      Fe = ue;
    }, this.dispose = function() {
    };
  }
}
const Ci = /* @__PURE__ */ new Jn(), Km = /* @__PURE__ */ new kt();
function Zm(i, e) {
  function t(g, m) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), m.value.copy(g.matrix);
  }
  function n(g, m) {
    m.color.getRGB(g.fogColor.value, lc(i)), m.isFog ? (g.fogNear.value = m.near, g.fogFar.value = m.far) : m.isFogExp2 && (g.fogDensity.value = m.density);
  }
  function s(g, m, F, D, N) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? o(g, m) : m.isMeshToonMaterial ? (o(g, m), y(g, m)) : m.isMeshPhongMaterial ? (o(g, m), v(g, m)) : m.isMeshStandardMaterial ? (o(g, m), S(g, m), m.isMeshPhysicalMaterial && M(g, m, N)) : m.isMeshMatcapMaterial ? (o(g, m), b(g, m)) : m.isMeshDepthMaterial ? o(g, m) : m.isMeshDistanceMaterial ? (o(g, m), C(g, m)) : m.isMeshNormalMaterial ? o(g, m) : m.isLineBasicMaterial ? (u(g, m), m.isLineDashedMaterial && f(g, m)) : m.isPointsMaterial ? d(g, m, F, D) : m.isSpriteMaterial ? p(g, m) : m.isShadowMaterial ? (g.color.value.copy(m.color), g.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function o(g, m) {
    g.opacity.value = m.opacity, m.color && g.diffuse.value.copy(m.color), m.emissive && g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (g.map.value = m.map, t(m.map, g.mapTransform)), m.alphaMap && (g.alphaMap.value = m.alphaMap, t(m.alphaMap, g.alphaMapTransform)), m.bumpMap && (g.bumpMap.value = m.bumpMap, t(m.bumpMap, g.bumpMapTransform), g.bumpScale.value = m.bumpScale, m.side === un && (g.bumpScale.value *= -1)), m.normalMap && (g.normalMap.value = m.normalMap, t(m.normalMap, g.normalMapTransform), g.normalScale.value.copy(m.normalScale), m.side === un && g.normalScale.value.negate()), m.displacementMap && (g.displacementMap.value = m.displacementMap, t(m.displacementMap, g.displacementMapTransform), g.displacementScale.value = m.displacementScale, g.displacementBias.value = m.displacementBias), m.emissiveMap && (g.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, g.emissiveMapTransform)), m.specularMap && (g.specularMap.value = m.specularMap, t(m.specularMap, g.specularMapTransform)), m.alphaTest > 0 && (g.alphaTest.value = m.alphaTest);
    const F = e.get(m), D = F.envMap, N = F.envMapRotation;
    D && (g.envMap.value = D, Ci.copy(N), Ci.x *= -1, Ci.y *= -1, Ci.z *= -1, D.isCubeTexture && D.isRenderTargetTexture === !1 && (Ci.y *= -1, Ci.z *= -1), g.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Ci)), g.flipEnvMap.value = D.isCubeTexture && D.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = m.reflectivity, g.ior.value = m.ior, g.refractionRatio.value = m.refractionRatio), m.lightMap && (g.lightMap.value = m.lightMap, g.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, g.lightMapTransform)), m.aoMap && (g.aoMap.value = m.aoMap, g.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, g.aoMapTransform));
  }
  function u(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, m.map && (g.map.value = m.map, t(m.map, g.mapTransform));
  }
  function f(g, m) {
    g.dashSize.value = m.dashSize, g.totalSize.value = m.dashSize + m.gapSize, g.scale.value = m.scale;
  }
  function d(g, m, F, D) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.size.value = m.size * F, g.scale.value = D * 0.5, m.map && (g.map.value = m.map, t(m.map, g.uvTransform)), m.alphaMap && (g.alphaMap.value = m.alphaMap, t(m.alphaMap, g.alphaMapTransform)), m.alphaTest > 0 && (g.alphaTest.value = m.alphaTest);
  }
  function p(g, m) {
    g.diffuse.value.copy(m.color), g.opacity.value = m.opacity, g.rotation.value = m.rotation, m.map && (g.map.value = m.map, t(m.map, g.mapTransform)), m.alphaMap && (g.alphaMap.value = m.alphaMap, t(m.alphaMap, g.alphaMapTransform)), m.alphaTest > 0 && (g.alphaTest.value = m.alphaTest);
  }
  function v(g, m) {
    g.specular.value.copy(m.specular), g.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function y(g, m) {
    m.gradientMap && (g.gradientMap.value = m.gradientMap);
  }
  function S(g, m) {
    g.metalness.value = m.metalness, m.metalnessMap && (g.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, g.metalnessMapTransform)), g.roughness.value = m.roughness, m.roughnessMap && (g.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, g.roughnessMapTransform)), m.envMap && (g.envMapIntensity.value = m.envMapIntensity);
  }
  function M(g, m, F) {
    g.ior.value = m.ior, m.sheen > 0 && (g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), g.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (g.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, g.sheenColorMapTransform)), m.sheenRoughnessMap && (g.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, g.sheenRoughnessMapTransform))), m.clearcoat > 0 && (g.clearcoat.value = m.clearcoat, g.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (g.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, g.clearcoatMapTransform)), m.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (g.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === un && g.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (g.dispersion.value = m.dispersion), m.iridescence > 0 && (g.iridescence.value = m.iridescence, g.iridescenceIOR.value = m.iridescenceIOR, g.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (g.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, g.iridescenceMapTransform)), m.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), m.transmission > 0 && (g.transmission.value = m.transmission, g.transmissionSamplerMap.value = F.texture, g.transmissionSamplerSize.value.set(F.width, F.height), m.transmissionMap && (g.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, g.transmissionMapTransform)), g.thickness.value = m.thickness, m.thicknessMap && (g.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = m.attenuationDistance, g.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (g.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (g.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = m.specularIntensity, g.specularColor.value.copy(m.specularColor), m.specularColorMap && (g.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, g.specularColorMapTransform)), m.specularIntensityMap && (g.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function b(g, m) {
    m.matcap && (g.matcap.value = m.matcap);
  }
  function C(g, m) {
    const F = e.get(m).light;
    g.referencePosition.value.setFromMatrixPosition(F.matrixWorld), g.nearDistance.value = F.shadow.camera.near, g.farDistance.value = F.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: s
  };
}
function Jm(i, e, t, n) {
  let s = {}, o = {}, u = [];
  const f = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function d(F, D) {
    const N = D.program;
    n.uniformBlockBinding(F, N);
  }
  function p(F, D) {
    let N = s[F.id];
    N === void 0 && (b(F), N = v(F), s[F.id] = N, F.addEventListener("dispose", g));
    const ne = D.program;
    n.updateUBOMapping(F, ne);
    const k = e.render.frame;
    o[F.id] !== k && (S(F), o[F.id] = k);
  }
  function v(F) {
    const D = y();
    F.__bindingPointIndex = D;
    const N = i.createBuffer(), ne = F.__size, k = F.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, N), i.bufferData(i.UNIFORM_BUFFER, ne, k), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, D, N), N;
  }
  function y() {
    for (let F = 0; F < f; F++)
      if (u.indexOf(F) === -1)
        return u.push(F), F;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function S(F) {
    const D = s[F.id], N = F.uniforms, ne = F.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, D);
    for (let k = 0, l = N.length; k < l; k++) {
      const Q = Array.isArray(N[k]) ? N[k] : [N[k]];
      for (let fe = 0, T = Q.length; fe < T; fe++) {
        const R = Q[fe];
        if (M(R, k, fe, ne) === !0) {
          const ae = R.__offset, X = Array.isArray(R.value) ? R.value : [R.value];
          let se = 0;
          for (let pe = 0; pe < X.length; pe++) {
            const j = X[pe], me = C(j);
            typeof j == "number" || typeof j == "boolean" ? (R.__data[0] = j, i.bufferSubData(i.UNIFORM_BUFFER, ae + se, R.__data)) : j.isMatrix3 ? (R.__data[0] = j.elements[0], R.__data[1] = j.elements[1], R.__data[2] = j.elements[2], R.__data[3] = 0, R.__data[4] = j.elements[3], R.__data[5] = j.elements[4], R.__data[6] = j.elements[5], R.__data[7] = 0, R.__data[8] = j.elements[6], R.__data[9] = j.elements[7], R.__data[10] = j.elements[8], R.__data[11] = 0) : (j.toArray(R.__data, se), se += me.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, ae, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function M(F, D, N, ne) {
    const k = F.value, l = D + "_" + N;
    if (ne[l] === void 0)
      return typeof k == "number" || typeof k == "boolean" ? ne[l] = k : ne[l] = k.clone(), !0;
    {
      const Q = ne[l];
      if (typeof k == "number" || typeof k == "boolean") {
        if (Q !== k)
          return ne[l] = k, !0;
      } else if (Q.equals(k) === !1)
        return Q.copy(k), !0;
    }
    return !1;
  }
  function b(F) {
    const D = F.uniforms;
    let N = 0;
    const ne = 16;
    for (let l = 0, Q = D.length; l < Q; l++) {
      const fe = Array.isArray(D[l]) ? D[l] : [D[l]];
      for (let T = 0, R = fe.length; T < R; T++) {
        const ae = fe[T], X = Array.isArray(ae.value) ? ae.value : [ae.value];
        for (let se = 0, pe = X.length; se < pe; se++) {
          const j = X[se], me = C(j), ie = N % ne, be = ie % me.boundary, Ae = ie + be;
          N += be, Ae !== 0 && ne - Ae < me.storage && (N += ne - Ae), ae.__data = new Float32Array(me.storage / Float32Array.BYTES_PER_ELEMENT), ae.__offset = N, N += me.storage;
        }
      }
    }
    const k = N % ne;
    return k > 0 && (N += ne - k), F.__size = N, F.__cache = {}, this;
  }
  function C(F) {
    const D = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof F == "number" || typeof F == "boolean" ? (D.boundary = 4, D.storage = 4) : F.isVector2 ? (D.boundary = 8, D.storage = 8) : F.isVector3 || F.isColor ? (D.boundary = 16, D.storage = 12) : F.isVector4 ? (D.boundary = 16, D.storage = 16) : F.isMatrix3 ? (D.boundary = 48, D.storage = 48) : F.isMatrix4 ? (D.boundary = 64, D.storage = 64) : F.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", F), D;
  }
  function g(F) {
    const D = F.target;
    D.removeEventListener("dispose", g);
    const N = u.indexOf(D.__bindingPointIndex);
    u.splice(N, 1), i.deleteBuffer(s[D.id]), delete s[D.id], delete o[D.id];
  }
  function m() {
    for (const F in s)
      i.deleteBuffer(s[F]);
    u = [], s = {}, o = {};
  }
  return {
    bind: d,
    update: p,
    dispose: m
  };
}
class Qm {
  constructor(e = {}) {
    const {
      canvas: t = Bu(),
      context: n = null,
      depth: s = !0,
      stencil: o = !1,
      alpha: u = !1,
      antialias: f = !1,
      premultipliedAlpha: d = !0,
      preserveDrawingBuffer: p = !1,
      powerPreference: v = "default",
      failIfMajorPerformanceCaveat: y = !1
    } = e;
    this.isWebGLRenderer = !0;
    let S;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      S = n.getContextAttributes().alpha;
    } else
      S = u;
    const M = new Uint32Array(4), b = new Int32Array(4);
    let C = null, g = null;
    const m = [], F = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Nn, this.toneMapping = di, this.toneMappingExposure = 1;
    const D = this;
    let N = !1, ne = 0, k = 0, l = null, Q = -1, fe = null;
    const T = new Bt(), R = new Bt();
    let ae = null;
    const X = new bt(0);
    let se = 0, pe = t.width, j = t.height, me = 1, ie = null, be = null;
    const Ae = new Bt(0, 0, pe, j), Fe = new Bt(0, 0, pe, j);
    let _t = !1;
    const St = new fc();
    let ue = !1, _e = !1;
    const Be = new kt(), Ie = new kt(), tt = new ee(), je = new Bt(), nt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let Ct = !1;
    function st() {
      return l === null ? me : 1;
    }
    let B = n;
    function jt(w, G) {
      return t.getContext(w, G);
    }
    try {
      const w = {
        alpha: !0,
        depth: s,
        stencil: o,
        antialias: f,
        premultipliedAlpha: d,
        preserveDrawingBuffer: p,
        powerPreference: v,
        failIfMajorPerformanceCaveat: y
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${mo}`), t.addEventListener("webglcontextlost", he, !1), t.addEventListener("webglcontextrestored", ye, !1), t.addEventListener("webglcontextcreationerror", Le, !1), B === null) {
        const G = "webgl2";
        if (B = jt(G, w), B === null)
          throw jt(G) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (w) {
      throw console.error("THREE.WebGLRenderer: " + w.message), w;
    }
    let ft, ht, qe, mt, Ze, L, A, q, ce, de, W, we, Te, Ue, vt, ve, Ne, Xe, Ve, Ce, rt, it, At, H;
    function De() {
      ft = new rp(B), ft.init(), it = new Vm(B, ft), ht = new Jd(B, ft, e, it), qe = new Hm(B), ht.reverseDepthBuffer && qe.buffers.depth.setReversed(!0), mt = new op(B), Ze = new bm(), L = new Gm(B, ft, qe, Ze, ht, it, mt), A = new ep(D), q = new ip(D), ce = new pf(B), At = new Kd(B, ce), de = new sp(B, ce, mt, At), W = new cp(B, de, ce, mt), Ve = new lp(B, ht, L), ve = new Qd(Ze), we = new Tm(D, A, q, ft, ht, At, ve), Te = new Zm(D, Ze), Ue = new wm(), vt = new Im(ft), Xe = new $d(D, A, q, qe, W, S, d), Ne = new Bm(D, W, ht), H = new Jm(B, mt, ht, qe), Ce = new Zd(B, ft, mt), rt = new ap(B, ft, mt), mt.programs = we.programs, D.capabilities = ht, D.extensions = ft, D.properties = Ze, D.renderLists = Ue, D.shadowMap = Ne, D.state = qe, D.info = mt;
    }
    De();
    const re = new $m(D, B);
    this.xr = re, this.getContext = function() {
      return B;
    }, this.getContextAttributes = function() {
      return B.getContextAttributes();
    }, this.forceContextLoss = function() {
      const w = ft.get("WEBGL_lose_context");
      w && w.loseContext();
    }, this.forceContextRestore = function() {
      const w = ft.get("WEBGL_lose_context");
      w && w.restoreContext();
    }, this.getPixelRatio = function() {
      return me;
    }, this.setPixelRatio = function(w) {
      w !== void 0 && (me = w, this.setSize(pe, j, !1));
    }, this.getSize = function(w) {
      return w.set(pe, j);
    }, this.setSize = function(w, G, K = !0) {
      if (re.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      pe = w, j = G, t.width = Math.floor(w * me), t.height = Math.floor(G * me), K === !0 && (t.style.width = w + "px", t.style.height = G + "px"), this.setViewport(0, 0, w, G);
    }, this.getDrawingBufferSize = function(w) {
      return w.set(pe * me, j * me).floor();
    }, this.setDrawingBufferSize = function(w, G, K) {
      pe = w, j = G, me = K, t.width = Math.floor(w * K), t.height = Math.floor(G * K), this.setViewport(0, 0, w, G);
    }, this.getCurrentViewport = function(w) {
      return w.copy(T);
    }, this.getViewport = function(w) {
      return w.copy(Ae);
    }, this.setViewport = function(w, G, K, Z) {
      w.isVector4 ? Ae.set(w.x, w.y, w.z, w.w) : Ae.set(w, G, K, Z), qe.viewport(T.copy(Ae).multiplyScalar(me).round());
    }, this.getScissor = function(w) {
      return w.copy(Fe);
    }, this.setScissor = function(w, G, K, Z) {
      w.isVector4 ? Fe.set(w.x, w.y, w.z, w.w) : Fe.set(w, G, K, Z), qe.scissor(R.copy(Fe).multiplyScalar(me).round());
    }, this.getScissorTest = function() {
      return _t;
    }, this.setScissorTest = function(w) {
      qe.setScissorTest(_t = w);
    }, this.setOpaqueSort = function(w) {
      ie = w;
    }, this.setTransparentSort = function(w) {
      be = w;
    }, this.getClearColor = function(w) {
      return w.copy(Xe.getClearColor());
    }, this.setClearColor = function() {
      Xe.setClearColor.apply(Xe, arguments);
    }, this.getClearAlpha = function() {
      return Xe.getClearAlpha();
    }, this.setClearAlpha = function() {
      Xe.setClearAlpha.apply(Xe, arguments);
    }, this.clear = function(w = !0, G = !0, K = !0) {
      let Z = 0;
      if (w) {
        let V = !1;
        if (l !== null) {
          const xe = l.texture.format;
          V = xe === yo || xe === So || xe === xo;
        }
        if (V) {
          const xe = l.texture.type, Me = xe === Zn || xe === Fi || xe === Lr || xe === fr || xe === _o || xe === vo, Oe = Xe.getClearColor(), ze = Xe.getClearAlpha(), Ye = Oe.r, $e = Oe.g, Ge = Oe.b;
          Me ? (M[0] = Ye, M[1] = $e, M[2] = Ge, M[3] = ze, B.clearBufferuiv(B.COLOR, 0, M)) : (b[0] = Ye, b[1] = $e, b[2] = Ge, b[3] = ze, B.clearBufferiv(B.COLOR, 0, b));
        } else
          Z |= B.COLOR_BUFFER_BIT;
      }
      G && (Z |= B.DEPTH_BUFFER_BIT, B.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), K && (Z |= B.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), B.clear(Z);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", he, !1), t.removeEventListener("webglcontextrestored", ye, !1), t.removeEventListener("webglcontextcreationerror", Le, !1), Ue.dispose(), vt.dispose(), Ze.dispose(), A.dispose(), q.dispose(), W.dispose(), At.dispose(), H.dispose(), we.dispose(), re.dispose(), re.removeEventListener("sessionstart", gr), re.removeEventListener("sessionend", zn), sn.stop();
    };
    function he(w) {
      w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), N = !0;
    }
    function ye() {
      console.log("THREE.WebGLRenderer: Context Restored."), N = !1;
      const w = mt.autoReset, G = Ne.enabled, K = Ne.autoUpdate, Z = Ne.needsUpdate, V = Ne.type;
      De(), mt.autoReset = w, Ne.enabled = G, Ne.autoUpdate = K, Ne.needsUpdate = Z, Ne.type = V;
    }
    function Le(w) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", w.statusMessage);
    }
    function dt(w) {
      const G = w.target;
      G.removeEventListener("dispose", dt), yt(G);
    }
    function yt(w) {
      Pt(w), Ze.remove(w);
    }
    function Pt(w) {
      const G = Ze.get(w).programs;
      G !== void 0 && (G.forEach(function(K) {
        we.releaseProgram(K);
      }), w.isShaderMaterial && we.releaseShaderCache(w));
    }
    this.renderBufferDirect = function(w, G, K, Z, V, xe) {
      G === null && (G = nt);
      const Me = V.isMesh && V.matrixWorld.determinant() < 0, Oe = Vr(w, G, K, Z, V);
      qe.setMaterial(Z, Me);
      let ze = K.index, Ye = 1;
      if (Z.wireframe === !0) {
        if (ze = de.getWireframeAttribute(K), ze === void 0) return;
        Ye = 2;
      }
      const $e = K.drawRange, Ge = K.attributes.position;
      let Mt = $e.start * Ye, Lt = ($e.start + $e.count) * Ye;
      xe !== null && (Mt = Math.max(Mt, xe.start * Ye), Lt = Math.min(Lt, (xe.start + xe.count) * Ye)), ze !== null ? (Mt = Math.max(Mt, 0), Lt = Math.min(Lt, ze.count)) : Ge != null && (Mt = Math.max(Mt, 0), Lt = Math.min(Lt, Ge.count));
      const Ft = Lt - Mt;
      if (Ft < 0 || Ft === 1 / 0) return;
      At.setup(V, Z, Oe, K, ze);
      let Kt, Et = Ce;
      if (ze !== null && (Kt = ce.get(ze), Et = rt, Et.setIndex(Kt)), V.isMesh)
        Z.wireframe === !0 ? (qe.setLineWidth(Z.wireframeLinewidth * st()), Et.setMode(B.LINES)) : Et.setMode(B.TRIANGLES);
      else if (V.isLine) {
        let ke = Z.linewidth;
        ke === void 0 && (ke = 1), qe.setLineWidth(ke * st()), V.isLineSegments ? Et.setMode(B.LINES) : V.isLineLoop ? Et.setMode(B.LINE_LOOP) : Et.setMode(B.LINE_STRIP);
      } else V.isPoints ? Et.setMode(B.POINTS) : V.isSprite && Et.setMode(B.TRIANGLES);
      if (V.isBatchedMesh)
        if (V._multiDrawInstances !== null)
          Et.renderMultiDrawInstances(V._multiDrawStarts, V._multiDrawCounts, V._multiDrawCount, V._multiDrawInstances);
        else if (ft.get("WEBGL_multi_draw"))
          Et.renderMultiDraw(V._multiDrawStarts, V._multiDrawCounts, V._multiDrawCount);
        else {
          const ke = V._multiDrawStarts, zt = V._multiDrawCounts, Qe = V._multiDrawCount, Xt = ze ? ce.get(ze).bytesPerElement : 1, yn = Ze.get(Z).currentProgram.getUniforms();
          for (let en = 0; en < Qe; en++)
            yn.setValue(B, "_gl_DrawID", en), Et.render(ke[en] / Xt, zt[en]);
        }
      else if (V.isInstancedMesh)
        Et.renderInstances(Mt, Ft, V.count);
      else if (K.isInstancedBufferGeometry) {
        const ke = K._maxInstanceCount !== void 0 ? K._maxInstanceCount : 1 / 0, zt = Math.min(K.instanceCount, ke);
        Et.renderInstances(Mt, Ft, zt);
      } else
        Et.render(Mt, Ft);
    };
    function gt(w, G, K) {
      w.transparent === !0 && w.side === jn && w.forceSinglePass === !1 ? (w.side = un, w.needsUpdate = !0, vi(w, G, K), w.side = pi, w.needsUpdate = !0, vi(w, G, K), w.side = jn) : vi(w, G, K);
    }
    this.compile = function(w, G, K = null) {
      K === null && (K = w), g = vt.get(K), g.init(G), F.push(g), K.traverseVisible(function(V) {
        V.isLight && V.layers.test(G.layers) && (g.pushLight(V), V.castShadow && g.pushShadow(V));
      }), w !== K && w.traverseVisible(function(V) {
        V.isLight && V.layers.test(G.layers) && (g.pushLight(V), V.castShadow && g.pushShadow(V));
      }), g.setupLights();
      const Z = /* @__PURE__ */ new Set();
      return w.traverse(function(V) {
        if (!(V.isMesh || V.isPoints || V.isLine || V.isSprite))
          return;
        const xe = V.material;
        if (xe)
          if (Array.isArray(xe))
            for (let Me = 0; Me < xe.length; Me++) {
              const Oe = xe[Me];
              gt(Oe, K, V), Z.add(Oe);
            }
          else
            gt(xe, K, V), Z.add(xe);
      }), F.pop(), g = null, Z;
    }, this.compileAsync = function(w, G, K = null) {
      const Z = this.compile(w, G, K);
      return new Promise((V) => {
        function xe() {
          if (Z.forEach(function(Me) {
            Ze.get(Me).currentProgram.isReady() && Z.delete(Me);
          }), Z.size === 0) {
            V(w);
            return;
          }
          setTimeout(xe, 10);
        }
        ft.get("KHR_parallel_shader_compile") !== null ? xe() : setTimeout(xe, 10);
      });
    };
    let $t = null;
    function mn(w) {
      $t && $t(w);
    }
    function gr() {
      sn.stop();
    }
    function zn() {
      sn.start();
    }
    const sn = new hc();
    sn.setAnimationLoop(mn), typeof self < "u" && sn.setContext(self), this.setAnimationLoop = function(w) {
      $t = w, re.setAnimationLoop(w), w === null ? sn.stop() : sn.start();
    }, re.addEventListener("sessionstart", gr), re.addEventListener("sessionend", zn), this.render = function(w, G) {
      if (G !== void 0 && G.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (N === !0) return;
      if (w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(), G.parent === null && G.matrixWorldAutoUpdate === !0 && G.updateMatrixWorld(), re.enabled === !0 && re.isPresenting === !0 && (re.cameraAutoUpdate === !0 && re.updateCamera(G), G = re.getCamera()), w.isScene === !0 && w.onBeforeRender(D, w, G, l), g = vt.get(w, F.length), g.init(G), F.push(g), Ie.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse), St.setFromProjectionMatrix(Ie), _e = this.localClippingEnabled, ue = ve.init(this.clippingPlanes, _e), C = Ue.get(w, m.length), C.init(), m.push(C), re.enabled === !0 && re.isPresenting === !0) {
        const xe = D.xr.getDepthSensingMesh();
        xe !== null && gi(xe, G, -1 / 0, D.sortObjects);
      }
      gi(w, G, 0, D.sortObjects), C.finish(), D.sortObjects === !0 && C.sort(ie, be), Ct = re.enabled === !1 || re.isPresenting === !1 || re.hasDepthSensing() === !1, Ct && Xe.addToRenderList(C, w), this.info.render.frame++, ue === !0 && ve.beginShadows();
      const K = g.state.shadowsArray;
      Ne.render(K, w, G), ue === !0 && ve.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const Z = C.opaque, V = C.transmissive;
      if (g.setupLights(), G.isArrayCamera) {
        const xe = G.cameras;
        if (V.length > 0)
          for (let Me = 0, Oe = xe.length; Me < Oe; Me++) {
            const ze = xe[Me];
            zr(Z, V, w, ze);
          }
        Ct && Xe.render(w);
        for (let Me = 0, Oe = xe.length; Me < Oe; Me++) {
          const ze = xe[Me];
          _i(C, w, ze, ze.viewport);
        }
      } else
        V.length > 0 && zr(Z, V, w, G), Ct && Xe.render(w), _i(C, w, G);
      l !== null && (L.updateMultisampleRenderTarget(l), L.updateRenderTargetMipmap(l)), w.isScene === !0 && w.onAfterRender(D, w, G), At.resetDefaultState(), Q = -1, fe = null, F.pop(), F.length > 0 ? (g = F[F.length - 1], ue === !0 && ve.setGlobalState(D.clippingPlanes, g.state.camera)) : g = null, m.pop(), m.length > 0 ? C = m[m.length - 1] : C = null;
    };
    function gi(w, G, K, Z) {
      if (w.visible === !1) return;
      if (w.layers.test(G.layers)) {
        if (w.isGroup)
          K = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === !0 && w.update(G);
        else if (w.isLight)
          g.pushLight(w), w.castShadow && g.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || St.intersectsSprite(w)) {
            Z && je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);
            const Me = W.update(w), Oe = w.material;
            Oe.visible && C.push(w, Me, Oe, K, je.z, null);
          }
        } else if ((w.isMesh || w.isLine || w.isPoints) && (!w.frustumCulled || St.intersectsObject(w))) {
          const Me = W.update(w), Oe = w.material;
          if (Z && (w.boundingSphere !== void 0 ? (w.boundingSphere === null && w.computeBoundingSphere(), je.copy(w.boundingSphere.center)) : (Me.boundingSphere === null && Me.computeBoundingSphere(), je.copy(Me.boundingSphere.center)), je.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)), Array.isArray(Oe)) {
            const ze = Me.groups;
            for (let Ye = 0, $e = ze.length; Ye < $e; Ye++) {
              const Ge = ze[Ye], Mt = Oe[Ge.materialIndex];
              Mt && Mt.visible && C.push(w, Me, Mt, K, je.z, Ge);
            }
          } else Oe.visible && C.push(w, Me, Oe, K, je.z, null);
        }
      }
      const xe = w.children;
      for (let Me = 0, Oe = xe.length; Me < Oe; Me++)
        gi(xe[Me], G, K, Z);
    }
    function _i(w, G, K, Z) {
      const V = w.opaque, xe = w.transmissive, Me = w.transparent;
      g.setupLightsView(K), ue === !0 && ve.setGlobalState(D.clippingPlanes, K), Z && qe.viewport(T.copy(Z)), V.length > 0 && zi(V, G, K), xe.length > 0 && zi(xe, G, K), Me.length > 0 && zi(Me, G, K), qe.buffers.depth.setTest(!0), qe.buffers.depth.setMask(!0), qe.buffers.color.setMask(!0), qe.setPolygonOffset(!1);
    }
    function zr(w, G, K, Z) {
      if ((K.isScene === !0 ? K.overrideMaterial : null) !== null)
        return;
      g.state.transmissionRenderTarget[Z.id] === void 0 && (g.state.transmissionRenderTarget[Z.id] = new Oi(1, 1, {
        generateMipmaps: !0,
        type: ft.has("EXT_color_buffer_half_float") || ft.has("EXT_color_buffer_float") ? Ir : Zn,
        minFilter: Ui,
        samples: 4,
        stencilBuffer: o,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Rt.workingColorSpace
      }));
      const xe = g.state.transmissionRenderTarget[Z.id], Me = Z.viewport || T;
      xe.setSize(Me.z, Me.w);
      const Oe = D.getRenderTarget();
      D.setRenderTarget(xe), D.getClearColor(X), se = D.getClearAlpha(), se < 1 && D.setClearColor(16777215, 0.5), D.clear(), Ct && Xe.render(K);
      const ze = D.toneMapping;
      D.toneMapping = di;
      const Ye = Z.viewport;
      if (Z.viewport !== void 0 && (Z.viewport = void 0), g.setupLightsView(Z), ue === !0 && ve.setGlobalState(D.clippingPlanes, Z), zi(w, K, Z), L.updateMultisampleRenderTarget(xe), L.updateRenderTargetMipmap(xe), ft.has("WEBGL_multisampled_render_to_texture") === !1) {
        let $e = !1;
        for (let Ge = 0, Mt = G.length; Ge < Mt; Ge++) {
          const Lt = G[Ge], Ft = Lt.object, Kt = Lt.geometry, Et = Lt.material, ke = Lt.group;
          if (Et.side === jn && Ft.layers.test(Z.layers)) {
            const zt = Et.side;
            Et.side = un, Et.needsUpdate = !0, Hr(Ft, K, Z, Kt, Et, ke), Et.side = zt, Et.needsUpdate = !0, $e = !0;
          }
        }
        $e === !0 && (L.updateMultisampleRenderTarget(xe), L.updateRenderTargetMipmap(xe));
      }
      D.setRenderTarget(Oe), D.setClearColor(X, se), Ye !== void 0 && (Z.viewport = Ye), D.toneMapping = ze;
    }
    function zi(w, G, K) {
      const Z = G.isScene === !0 ? G.overrideMaterial : null;
      for (let V = 0, xe = w.length; V < xe; V++) {
        const Me = w[V], Oe = Me.object, ze = Me.geometry, Ye = Z === null ? Me.material : Z, $e = Me.group;
        Oe.layers.test(K.layers) && Hr(Oe, G, K, ze, Ye, $e);
      }
    }
    function Hr(w, G, K, Z, V, xe) {
      w.onBeforeRender(D, G, K, Z, V, xe), w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), V.onBeforeRender(D, G, K, Z, w, xe), V.transparent === !0 && V.side === jn && V.forceSinglePass === !1 ? (V.side = un, V.needsUpdate = !0, D.renderBufferDirect(K, G, Z, V, w, xe), V.side = pi, V.needsUpdate = !0, D.renderBufferDirect(K, G, Z, V, w, xe), V.side = jn) : D.renderBufferDirect(K, G, Z, V, w, xe), w.onAfterRender(D, G, K, Z, V, xe);
    }
    function vi(w, G, K) {
      G.isScene !== !0 && (G = nt);
      const Z = Ze.get(w), V = g.state.lights, xe = g.state.shadowsArray, Me = V.state.version, Oe = we.getParameters(w, V.state, xe, G, K), ze = we.getProgramCacheKey(Oe);
      let Ye = Z.programs;
      Z.environment = w.isMeshStandardMaterial ? G.environment : null, Z.fog = G.fog, Z.envMap = (w.isMeshStandardMaterial ? q : A).get(w.envMap || Z.environment), Z.envMapRotation = Z.environment !== null && w.envMap === null ? G.environmentRotation : w.envMapRotation, Ye === void 0 && (w.addEventListener("dispose", dt), Ye = /* @__PURE__ */ new Map(), Z.programs = Ye);
      let $e = Ye.get(ze);
      if ($e !== void 0) {
        if (Z.currentProgram === $e && Z.lightsStateVersion === Me)
          return Gr(w, Oe), $e;
      } else
        Oe.uniforms = we.getUniforms(w), w.onBeforeCompile(Oe, D), $e = we.acquireProgram(Oe, ze), Ye.set(ze, $e), Z.uniforms = Oe.uniforms;
      const Ge = Z.uniforms;
      return (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (Ge.clippingPlanes = ve.uniform), Gr(w, Oe), Z.needsLights = ei(w), Z.lightsStateVersion = Me, Z.needsLights && (Ge.ambientLightColor.value = V.state.ambient, Ge.lightProbe.value = V.state.probe, Ge.directionalLights.value = V.state.directional, Ge.directionalLightShadows.value = V.state.directionalShadow, Ge.spotLights.value = V.state.spot, Ge.spotLightShadows.value = V.state.spotShadow, Ge.rectAreaLights.value = V.state.rectArea, Ge.ltc_1.value = V.state.rectAreaLTC1, Ge.ltc_2.value = V.state.rectAreaLTC2, Ge.pointLights.value = V.state.point, Ge.pointLightShadows.value = V.state.pointShadow, Ge.hemisphereLights.value = V.state.hemi, Ge.directionalShadowMap.value = V.state.directionalShadowMap, Ge.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Ge.spotShadowMap.value = V.state.spotShadowMap, Ge.spotLightMatrix.value = V.state.spotLightMatrix, Ge.spotLightMap.value = V.state.spotLightMap, Ge.pointShadowMap.value = V.state.pointShadowMap, Ge.pointShadowMatrix.value = V.state.pointShadowMatrix), Z.currentProgram = $e, Z.uniformsList = null, $e;
    }
    function kr(w) {
      if (w.uniformsList === null) {
        const G = w.currentProgram.getUniforms();
        w.uniformsList = Es.seqWithValue(G.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function Gr(w, G) {
      const K = Ze.get(w);
      K.outputColorSpace = G.outputColorSpace, K.batching = G.batching, K.batchingColor = G.batchingColor, K.instancing = G.instancing, K.instancingColor = G.instancingColor, K.instancingMorph = G.instancingMorph, K.skinning = G.skinning, K.morphTargets = G.morphTargets, K.morphNormals = G.morphNormals, K.morphColors = G.morphColors, K.morphTargetsCount = G.morphTargetsCount, K.numClippingPlanes = G.numClippingPlanes, K.numIntersection = G.numClipIntersection, K.vertexAlphas = G.vertexAlphas, K.vertexTangents = G.vertexTangents, K.toneMapping = G.toneMapping;
    }
    function Vr(w, G, K, Z, V) {
      G.isScene !== !0 && (G = nt), L.resetTextureUnits();
      const xe = G.fog, Me = Z.isMeshStandardMaterial ? G.environment : null, Oe = l === null ? D.outputColorSpace : l.isXRRenderTarget === !0 ? l.texture.colorSpace : mi, ze = (Z.isMeshStandardMaterial ? q : A).get(Z.envMap || Me), Ye = Z.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4, $e = !!K.attributes.tangent && (!!Z.normalMap || Z.anisotropy > 0), Ge = !!K.morphAttributes.position, Mt = !!K.morphAttributes.normal, Lt = !!K.morphAttributes.color;
      let Ft = di;
      Z.toneMapped && (l === null || l.isXRRenderTarget === !0) && (Ft = D.toneMapping);
      const Kt = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, Et = Kt !== void 0 ? Kt.length : 0, ke = Ze.get(Z), zt = g.state.lights;
      if (ue === !0 && (_e === !0 || w !== fe)) {
        const tn = w === fe && Z.id === Q;
        ve.setState(Z, w, tn);
      }
      let Qe = !1;
      Z.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== zt.state.version || ke.outputColorSpace !== Oe || V.isBatchedMesh && ke.batching === !1 || !V.isBatchedMesh && ke.batching === !0 || V.isBatchedMesh && ke.batchingColor === !0 && V.colorTexture === null || V.isBatchedMesh && ke.batchingColor === !1 && V.colorTexture !== null || V.isInstancedMesh && ke.instancing === !1 || !V.isInstancedMesh && ke.instancing === !0 || V.isSkinnedMesh && ke.skinning === !1 || !V.isSkinnedMesh && ke.skinning === !0 || V.isInstancedMesh && ke.instancingColor === !0 && V.instanceColor === null || V.isInstancedMesh && ke.instancingColor === !1 && V.instanceColor !== null || V.isInstancedMesh && ke.instancingMorph === !0 && V.morphTexture === null || V.isInstancedMesh && ke.instancingMorph === !1 && V.morphTexture !== null || ke.envMap !== ze || Z.fog === !0 && ke.fog !== xe || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== ve.numPlanes || ke.numIntersection !== ve.numIntersection) || ke.vertexAlphas !== Ye || ke.vertexTangents !== $e || ke.morphTargets !== Ge || ke.morphNormals !== Mt || ke.morphColors !== Lt || ke.toneMapping !== Ft || ke.morphTargetsCount !== Et) && (Qe = !0) : (Qe = !0, ke.__version = Z.version);
      let Xt = ke.currentProgram;
      Qe === !0 && (Xt = vi(Z, G, V));
      let yn = !1, en = !1, _r = !1;
      const Ut = Xt.getUniforms(), Mn = ke.uniforms;
      if (qe.useProgram(Xt.program) && (yn = !0, en = !0, _r = !0), Z.id !== Q && (Q = Z.id, en = !0), yn || fe !== w) {
        ht.reverseDepthBuffer ? (Be.copy(w.projectionMatrix), Hu(Be), ku(Be), Ut.setValue(B, "projectionMatrix", Be)) : Ut.setValue(B, "projectionMatrix", w.projectionMatrix), Ut.setValue(B, "viewMatrix", w.matrixWorldInverse);
        const tn = Ut.map.cameraPosition;
        tn !== void 0 && tn.setValue(B, tt.setFromMatrixPosition(w.matrixWorld)), ht.logarithmicDepthBuffer && Ut.setValue(
          B,
          "logDepthBufFC",
          2 / (Math.log(w.far + 1) / Math.LN2)
        ), (Z.isMeshPhongMaterial || Z.isMeshToonMaterial || Z.isMeshLambertMaterial || Z.isMeshBasicMaterial || Z.isMeshStandardMaterial || Z.isShaderMaterial) && Ut.setValue(B, "isOrthographic", w.isOrthographicCamera === !0), fe !== w && (fe = w, en = !0, _r = !0);
      }
      if (V.isSkinnedMesh) {
        Ut.setOptional(B, V, "bindMatrix"), Ut.setOptional(B, V, "bindMatrixInverse");
        const tn = V.skeleton;
        tn && (tn.boneTexture === null && tn.computeBoneTexture(), Ut.setValue(B, "boneTexture", tn.boneTexture, L));
      }
      V.isBatchedMesh && (Ut.setOptional(B, V, "batchingTexture"), Ut.setValue(B, "batchingTexture", V._matricesTexture, L), Ut.setOptional(B, V, "batchingIdTexture"), Ut.setValue(B, "batchingIdTexture", V._indirectTexture, L), Ut.setOptional(B, V, "batchingColorTexture"), V._colorsTexture !== null && Ut.setValue(B, "batchingColorTexture", V._colorsTexture, L));
      const ti = K.morphAttributes;
      if ((ti.position !== void 0 || ti.normal !== void 0 || ti.color !== void 0) && Ve.update(V, K, Xt), (en || ke.receiveShadow !== V.receiveShadow) && (ke.receiveShadow = V.receiveShadow, Ut.setValue(B, "receiveShadow", V.receiveShadow)), Z.isMeshGouraudMaterial && Z.envMap !== null && (Mn.envMap.value = ze, Mn.flipEnvMap.value = ze.isCubeTexture && ze.isRenderTargetTexture === !1 ? -1 : 1), Z.isMeshStandardMaterial && Z.envMap === null && G.environment !== null && (Mn.envMapIntensity.value = G.environmentIntensity), en && (Ut.setValue(B, "toneMappingExposure", D.toneMappingExposure), ke.needsLights && Is(Mn, _r), xe && Z.fog === !0 && Te.refreshFogUniforms(Mn, xe), Te.refreshMaterialUniforms(Mn, Z, me, j, g.state.transmissionRenderTarget[w.id]), Es.upload(B, kr(ke), Mn, L)), Z.isShaderMaterial && Z.uniformsNeedUpdate === !0 && (Es.upload(B, kr(ke), Mn, L), Z.uniformsNeedUpdate = !1), Z.isSpriteMaterial && Ut.setValue(B, "center", V.center), Ut.setValue(B, "modelViewMatrix", V.modelViewMatrix), Ut.setValue(B, "normalMatrix", V.normalMatrix), Ut.setValue(B, "modelMatrix", V.matrixWorld), Z.isShaderMaterial || Z.isRawShaderMaterial) {
        const tn = Z.uniformsGroups;
        for (let vr = 0, Us = tn.length; vr < Us; vr++) {
          const an = tn[vr];
          H.update(an, Xt), H.bind(an, Xt);
        }
      }
      return Xt;
    }
    function Is(w, G) {
      w.ambientLightColor.needsUpdate = G, w.lightProbe.needsUpdate = G, w.directionalLights.needsUpdate = G, w.directionalLightShadows.needsUpdate = G, w.pointLights.needsUpdate = G, w.pointLightShadows.needsUpdate = G, w.spotLights.needsUpdate = G, w.spotLightShadows.needsUpdate = G, w.rectAreaLights.needsUpdate = G, w.hemisphereLights.needsUpdate = G;
    }
    function ei(w) {
      return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return ne;
    }, this.getActiveMipmapLevel = function() {
      return k;
    }, this.getRenderTarget = function() {
      return l;
    }, this.setRenderTargetTextures = function(w, G, K) {
      Ze.get(w.texture).__webglTexture = G, Ze.get(w.depthTexture).__webglTexture = K;
      const Z = Ze.get(w);
      Z.__hasExternalTextures = !0, Z.__autoAllocateDepthBuffer = K === void 0, Z.__autoAllocateDepthBuffer || ft.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), Z.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(w, G) {
      const K = Ze.get(w);
      K.__webglFramebuffer = G, K.__useDefaultFramebuffer = G === void 0;
    }, this.setRenderTarget = function(w, G = 0, K = 0) {
      l = w, ne = G, k = K;
      let Z = !0, V = null, xe = !1, Me = !1;
      if (w) {
        const ze = Ze.get(w);
        if (ze.__useDefaultFramebuffer !== void 0)
          qe.bindFramebuffer(B.FRAMEBUFFER, null), Z = !1;
        else if (ze.__webglFramebuffer === void 0)
          L.setupRenderTarget(w);
        else if (ze.__hasExternalTextures)
          L.rebindTextures(w, Ze.get(w.texture).__webglTexture, Ze.get(w.depthTexture).__webglTexture);
        else if (w.depthBuffer) {
          const Ge = w.depthTexture;
          if (ze.__boundDepthTexture !== Ge) {
            if (Ge !== null && Ze.has(Ge) && (w.width !== Ge.image.width || w.height !== Ge.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            L.setupDepthRenderbuffer(w);
          }
        }
        const Ye = w.texture;
        (Ye.isData3DTexture || Ye.isDataArrayTexture || Ye.isCompressedArrayTexture) && (Me = !0);
        const $e = Ze.get(w).__webglFramebuffer;
        w.isWebGLCubeRenderTarget ? (Array.isArray($e[G]) ? V = $e[G][K] : V = $e[G], xe = !0) : w.samples > 0 && L.useMultisampledRTT(w) === !1 ? V = Ze.get(w).__webglMultisampledFramebuffer : Array.isArray($e) ? V = $e[K] : V = $e, T.copy(w.viewport), R.copy(w.scissor), ae = w.scissorTest;
      } else
        T.copy(Ae).multiplyScalar(me).floor(), R.copy(Fe).multiplyScalar(me).floor(), ae = _t;
      if (qe.bindFramebuffer(B.FRAMEBUFFER, V) && Z && qe.drawBuffers(w, V), qe.viewport(T), qe.scissor(R), qe.setScissorTest(ae), xe) {
        const ze = Ze.get(w.texture);
        B.framebufferTexture2D(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, B.TEXTURE_CUBE_MAP_POSITIVE_X + G, ze.__webglTexture, K);
      } else if (Me) {
        const ze = Ze.get(w.texture), Ye = G || 0;
        B.framebufferTextureLayer(B.FRAMEBUFFER, B.COLOR_ATTACHMENT0, ze.__webglTexture, K || 0, Ye);
      }
      Q = -1;
    }, this.readRenderTargetPixels = function(w, G, K, Z, V, xe, Me) {
      if (!(w && w.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Oe = Ze.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && Me !== void 0 && (Oe = Oe[Me]), Oe) {
        qe.bindFramebuffer(B.FRAMEBUFFER, Oe);
        try {
          const ze = w.texture, Ye = ze.format, $e = ze.type;
          if (!ht.textureFormatReadable(Ye)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ht.textureTypeReadable($e)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          G >= 0 && G <= w.width - Z && K >= 0 && K <= w.height - V && B.readPixels(G, K, Z, V, it.convert(Ye), it.convert($e), xe);
        } finally {
          const ze = l !== null ? Ze.get(l).__webglFramebuffer : null;
          qe.bindFramebuffer(B.FRAMEBUFFER, ze);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(w, G, K, Z, V, xe, Me) {
      if (!(w && w.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Oe = Ze.get(w).__webglFramebuffer;
      if (w.isWebGLCubeRenderTarget && Me !== void 0 && (Oe = Oe[Me]), Oe) {
        const ze = w.texture, Ye = ze.format, $e = ze.type;
        if (!ht.textureFormatReadable(Ye))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ht.textureTypeReadable($e))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (G >= 0 && G <= w.width - Z && K >= 0 && K <= w.height - V) {
          qe.bindFramebuffer(B.FRAMEBUFFER, Oe);
          const Ge = B.createBuffer();
          B.bindBuffer(B.PIXEL_PACK_BUFFER, Ge), B.bufferData(B.PIXEL_PACK_BUFFER, xe.byteLength, B.STREAM_READ), B.readPixels(G, K, Z, V, it.convert(Ye), it.convert($e), 0);
          const Mt = l !== null ? Ze.get(l).__webglFramebuffer : null;
          qe.bindFramebuffer(B.FRAMEBUFFER, Mt);
          const Lt = B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return B.flush(), await zu(B, Lt, 4), B.bindBuffer(B.PIXEL_PACK_BUFFER, Ge), B.getBufferSubData(B.PIXEL_PACK_BUFFER, 0, xe), B.deleteBuffer(Ge), B.deleteSync(Lt), xe;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(w, G = null, K = 0) {
      w.isTexture !== !0 && (Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."), G = arguments[0] || null, w = arguments[1]);
      const Z = Math.pow(2, -K), V = Math.floor(w.image.width * Z), xe = Math.floor(w.image.height * Z), Me = G !== null ? G.x : 0, Oe = G !== null ? G.y : 0;
      L.setTexture2D(w, 0), B.copyTexSubImage2D(B.TEXTURE_2D, K, 0, 0, Me, Oe, V, xe), qe.unbindTexture();
    }, this.copyTextureToTexture = function(w, G, K = null, Z = null, V = 0) {
      w.isTexture !== !0 && (Ms("WebGLRenderer: copyTextureToTexture function signature has changed."), Z = arguments[0] || null, w = arguments[1], G = arguments[2], V = arguments[3] || 0, K = null);
      let xe, Me, Oe, ze, Ye, $e;
      K !== null ? (xe = K.max.x - K.min.x, Me = K.max.y - K.min.y, Oe = K.min.x, ze = K.min.y) : (xe = w.image.width, Me = w.image.height, Oe = 0, ze = 0), Z !== null ? (Ye = Z.x, $e = Z.y) : (Ye = 0, $e = 0);
      const Ge = it.convert(G.format), Mt = it.convert(G.type);
      L.setTexture2D(G, 0), B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, G.flipY), B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), B.pixelStorei(B.UNPACK_ALIGNMENT, G.unpackAlignment);
      const Lt = B.getParameter(B.UNPACK_ROW_LENGTH), Ft = B.getParameter(B.UNPACK_IMAGE_HEIGHT), Kt = B.getParameter(B.UNPACK_SKIP_PIXELS), Et = B.getParameter(B.UNPACK_SKIP_ROWS), ke = B.getParameter(B.UNPACK_SKIP_IMAGES), zt = w.isCompressedTexture ? w.mipmaps[V] : w.image;
      B.pixelStorei(B.UNPACK_ROW_LENGTH, zt.width), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, zt.height), B.pixelStorei(B.UNPACK_SKIP_PIXELS, Oe), B.pixelStorei(B.UNPACK_SKIP_ROWS, ze), w.isDataTexture ? B.texSubImage2D(B.TEXTURE_2D, V, Ye, $e, xe, Me, Ge, Mt, zt.data) : w.isCompressedTexture ? B.compressedTexSubImage2D(B.TEXTURE_2D, V, Ye, $e, zt.width, zt.height, Ge, zt.data) : B.texSubImage2D(B.TEXTURE_2D, V, Ye, $e, xe, Me, Ge, Mt, zt), B.pixelStorei(B.UNPACK_ROW_LENGTH, Lt), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, Ft), B.pixelStorei(B.UNPACK_SKIP_PIXELS, Kt), B.pixelStorei(B.UNPACK_SKIP_ROWS, Et), B.pixelStorei(B.UNPACK_SKIP_IMAGES, ke), V === 0 && G.generateMipmaps && B.generateMipmap(B.TEXTURE_2D), qe.unbindTexture();
    }, this.copyTextureToTexture3D = function(w, G, K = null, Z = null, V = 0) {
      w.isTexture !== !0 && (Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."), K = arguments[0] || null, Z = arguments[1] || null, w = arguments[2], G = arguments[3], V = arguments[4] || 0);
      let xe, Me, Oe, ze, Ye, $e, Ge, Mt, Lt;
      const Ft = w.isCompressedTexture ? w.mipmaps[V] : w.image;
      K !== null ? (xe = K.max.x - K.min.x, Me = K.max.y - K.min.y, Oe = K.max.z - K.min.z, ze = K.min.x, Ye = K.min.y, $e = K.min.z) : (xe = Ft.width, Me = Ft.height, Oe = Ft.depth, ze = 0, Ye = 0, $e = 0), Z !== null ? (Ge = Z.x, Mt = Z.y, Lt = Z.z) : (Ge = 0, Mt = 0, Lt = 0);
      const Kt = it.convert(G.format), Et = it.convert(G.type);
      let ke;
      if (G.isData3DTexture)
        L.setTexture3D(G, 0), ke = B.TEXTURE_3D;
      else if (G.isDataArrayTexture || G.isCompressedArrayTexture)
        L.setTexture2DArray(G, 0), ke = B.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL, G.flipY), B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha), B.pixelStorei(B.UNPACK_ALIGNMENT, G.unpackAlignment);
      const zt = B.getParameter(B.UNPACK_ROW_LENGTH), Qe = B.getParameter(B.UNPACK_IMAGE_HEIGHT), Xt = B.getParameter(B.UNPACK_SKIP_PIXELS), yn = B.getParameter(B.UNPACK_SKIP_ROWS), en = B.getParameter(B.UNPACK_SKIP_IMAGES);
      B.pixelStorei(B.UNPACK_ROW_LENGTH, Ft.width), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, Ft.height), B.pixelStorei(B.UNPACK_SKIP_PIXELS, ze), B.pixelStorei(B.UNPACK_SKIP_ROWS, Ye), B.pixelStorei(B.UNPACK_SKIP_IMAGES, $e), w.isDataTexture || w.isData3DTexture ? B.texSubImage3D(ke, V, Ge, Mt, Lt, xe, Me, Oe, Kt, Et, Ft.data) : G.isCompressedArrayTexture ? B.compressedTexSubImage3D(ke, V, Ge, Mt, Lt, xe, Me, Oe, Kt, Ft.data) : B.texSubImage3D(ke, V, Ge, Mt, Lt, xe, Me, Oe, Kt, Et, Ft), B.pixelStorei(B.UNPACK_ROW_LENGTH, zt), B.pixelStorei(B.UNPACK_IMAGE_HEIGHT, Qe), B.pixelStorei(B.UNPACK_SKIP_PIXELS, Xt), B.pixelStorei(B.UNPACK_SKIP_ROWS, yn), B.pixelStorei(B.UNPACK_SKIP_IMAGES, en), V === 0 && G.generateMipmaps && B.generateMipmap(ke), qe.unbindTexture();
    }, this.initRenderTarget = function(w) {
      Ze.get(w).__webglFramebuffer === void 0 && L.setupRenderTarget(w);
    }, this.initTexture = function(w) {
      w.isCubeTexture ? L.setTextureCube(w, 0) : w.isData3DTexture ? L.setTexture3D(w, 0) : w.isDataArrayTexture || w.isCompressedArrayTexture ? L.setTexture2DArray(w, 0) : L.setTexture2D(w, 0), qe.unbindTexture();
    }, this.resetState = function() {
      ne = 0, k = 0, l = null, qe.reset(), At.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Kn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Mo ? "display-p3" : "srgb", t.unpackColorSpace = Rt.workingColorSpace === Ps ? "display-p3" : "srgb";
  }
}
class eg extends pn {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Jn(), this.environmentIntensity = 1, this.environmentRotation = new Jn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class tg {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Ul(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Ul();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Ul() {
  return performance.now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: mo
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = mo);
const ar = 50, or = 80, ng = !0, Aa = 5, ig = new tg(), vc = cg();
class rg {
  _ref;
  _speed = -1;
  _horizontalPressure = -1;
  _verticalPressure = -1;
  _waveFrequencyX = -1;
  _waveFrequencyY = -1;
  _waveAmplitude = -1;
  _shadows = -1;
  _highlights = -1;
  _saturation = -1;
  _brightness = -1;
  _grainScale = -1;
  _grainIntensity = -1;
  _grainSparsity = -1;
  _grainSpeed = -1;
  _colorBlending = -1;
  _colors = [];
  _wireframe = !1;
  _backgroundColor = "#FFFFFF";
  _backgroundAlpha = 1;
  requestRef = -1;
  sizeObserver;
  sceneState;
  _yOffset = 0;
  constructor(e) {
    const {
      ref: t,
      speed: n = 4,
      horizontalPressure: s = 3,
      verticalPressure: o = 3,
      waveFrequencyX: u = 5,
      waveFrequencyY: f = 5,
      waveAmplitude: d = 3,
      colors: p,
      highlights: v = 4,
      shadows: y = 4,
      colorSaturation: S = 0,
      colorBrightness: M = 1,
      colorBlending: b = 5,
      grainScale: C = 2,
      grainIntensity: g = 0.55,
      grainSparsity: m = 0,
      grainSpeed: F = 0.1,
      wireframe: D = !1,
      backgroundColor: N = "#FFFFFF",
      backgroundAlpha: ne = 1,
      resolution: k = 1,
      seed: l,
      yOffset: Q = 0
    } = e;
    this._ref = t, this.destroy = this.destroy.bind(this), this._initScene = this._initScene.bind(this), this._buildMaterial = this._buildMaterial.bind(this), this.speed = n, this.horizontalPressure = s, this.verticalPressure = o, this.waveFrequencyX = u, this.waveFrequencyY = f, this.waveAmplitude = d, this.colorBlending = b, this.grainScale = C, this.grainIntensity = g, this.grainSparsity = m, this.grainSpeed = F, this.colors = p, this.shadows = y, this.highlights = v, this.colorSaturation = S, this.colorBrightness = M, this.wireframe = D, this.backgroundColor = N, this.backgroundAlpha = ne, this.yOffset = Q, this.sceneState = this._initScene(k);
    let fe = l !== void 0 ? l : lg();
    const T = () => {
      const { renderer: ae, camera: X, scene: se, meshes: pe } = this.sceneState;
      Math.floor(fe * 10) % 5 === 0 && og(t), ae.setClearColor(this._backgroundColor, this._backgroundAlpha), pe.forEach((j) => {
        const me = this._ref.width, ie = this._ref.height, be = [
          ...this._colors.map((Ae) => {
            let Fe = new bt();
            return Fe.setStyle(Ae.color, ""), {
              is_active: Ae.enabled,
              color: Fe,
              influence: Ae.influence
            };
          }),
          ...Array.from({ length: Aa - this._colors.length }).map(() => ({
            is_active: !1,
            color: new bt(0)
          }))
        ];
        fe += ig.getDelta() * this._speed, j.material.uniforms.u_time.value = fe, j.material.uniforms.u_resolution = { value: new wt(me, ie) }, j.material.uniforms.u_color_pressure = { value: new wt(this._horizontalPressure, this._verticalPressure) }, j.material.uniforms.u_wave_frequency_x = { value: this._waveFrequencyX }, j.material.uniforms.u_wave_frequency_y = { value: this._waveFrequencyY }, j.material.uniforms.u_wave_amplitude = { value: this._waveAmplitude }, j.material.uniforms.u_plane_width = { value: ar }, j.material.uniforms.u_plane_height = { value: or }, j.material.uniforms.u_color_blending = { value: this._colorBlending }, j.material.uniforms.u_colors = { value: be }, j.material.uniforms.u_colors_count = { value: Aa }, j.material.uniforms.u_shadows = { value: this._shadows }, j.material.uniforms.u_highlights = { value: this._highlights }, j.material.uniforms.u_saturation = { value: this._saturation }, j.material.uniforms.u_brightness = { value: this._brightness }, j.material.uniforms.u_grain_intensity = { value: this._grainIntensity }, j.material.uniforms.u_grain_sparsity = { value: this._grainSparsity }, j.material.uniforms.u_grain_speed = { value: this._grainSpeed }, j.material.uniforms.u_grain_scale = { value: this._grainScale }, j.material.uniforms.u_y_offset = { value: this._yOffset }, j.material.wireframe = this._wireframe;
      }), ae.render(se, X), this.requestRef = requestAnimationFrame(T);
    }, R = () => {
      const { renderer: ae } = this.sceneState, X = ae.domElement, se = X.clientWidth, pe = X.clientHeight;
      this.sceneState.renderer.setSize(se, pe, !1), Nl(this.sceneState.camera, se, pe);
    };
    this.sizeObserver = new ResizeObserver((ae) => {
      R();
    }), this.sizeObserver.observe(t), T();
  }
  destroy() {
    this && (cancelAnimationFrame(this.requestRef), this.sizeObserver.disconnect());
  }
  downloadAsPNG(e = "neat.png") {
    console.log("Downloading as PNG", this._ref);
    const t = this._ref.toDataURL("image/png");
    console.log("data", t), ug(t, e);
  }
  set speed(e) {
    this._speed = e / 20;
  }
  set horizontalPressure(e) {
    this._horizontalPressure = e / 4;
  }
  set verticalPressure(e) {
    this._verticalPressure = e / 4;
  }
  set waveFrequencyX(e) {
    this._waveFrequencyX = e * 0.04;
  }
  set waveFrequencyY(e) {
    this._waveFrequencyY = e * 0.04;
  }
  set waveAmplitude(e) {
    this._waveAmplitude = e * 0.75;
  }
  set colors(e) {
    this._colors = e;
  }
  set highlights(e) {
    this._highlights = e / 100;
  }
  set shadows(e) {
    this._shadows = e / 100;
  }
  set colorSaturation(e) {
    this._saturation = e / 10;
  }
  set colorBrightness(e) {
    this._brightness = e;
  }
  set colorBlending(e) {
    this._colorBlending = e / 10;
  }
  set grainScale(e) {
    this._grainScale = e == 0 ? 1 : e;
  }
  set grainIntensity(e) {
    this._grainIntensity = e;
  }
  set grainSparsity(e) {
    this._grainSparsity = e;
  }
  set grainSpeed(e) {
    this._grainSpeed = e;
  }
  set wireframe(e) {
    this._wireframe = e;
  }
  set resolution(e) {
    this.sceneState = this._initScene(e);
  }
  set backgroundColor(e) {
    this._backgroundColor = e;
  }
  set backgroundAlpha(e) {
    this._backgroundAlpha = e;
  }
  set yOffset(e) {
    this._yOffset = e;
  }
  _initScene(e) {
    const t = this._ref.width, n = this._ref.height, s = new Qm({
      alpha: !0,
      preserveDrawingBuffer: !0,
      canvas: this._ref
    });
    s.setClearColor(16711680, 0.5), s.setSize(t, n, !1);
    const o = [], u = new eg(), f = this._buildMaterial(t, n), d = new Br(ar, or, 240 * e, 240 * e), p = new On(d, f);
    p.rotation.x = -Math.PI / 3.5, p.position.z = -1, o.push(p), u.add(p);
    const v = new To(0, 0, 0, 0, 0, 0);
    return v.position.z = 5, Nl(v, t, n), {
      renderer: s,
      camera: v,
      scene: u,
      meshes: o,
      resolution: e
    };
  }
  _buildMaterial(e, t) {
    const n = [
      ...this._colors.map((u) => ({
        is_active: u.enabled,
        color: new bt(u.color),
        influence: u.influence
      })),
      ...Array.from({ length: Aa - this._colors.length }).map(() => ({
        is_active: !1,
        color: new bt(0)
      }))
    ], s = {
      u_time: { value: 0 },
      u_color_pressure: { value: new wt(this._horizontalPressure, this._verticalPressure) },
      u_wave_frequency_x: { value: this._waveFrequencyX },
      u_wave_frequency_y: { value: this._waveFrequencyY },
      u_wave_amplitude: { value: this._waveAmplitude },
      u_resolution: { value: new wt(e, t) },
      u_colors: { value: n },
      u_colors_count: { value: this._colors.length },
      u_plane_width: { value: ar },
      u_plane_height: { value: or },
      u_shadows: { value: this._shadows },
      u_highlights: { value: this._highlights },
      u_grain_intensity: { value: this._grainIntensity },
      u_grain_sparsity: { value: this._grainSparsity },
      u_grain_scale: { value: this._grainScale },
      u_grain_speed: { value: this._grainSpeed }
    }, o = new Qn({
      uniforms: s,
      vertexShader: Fl() + Ol() + Bl() + sg(),
      fragmentShader: Fl() + Bl() + Ol() + ag()
    });
    return o.wireframe = ng, o;
  }
}
function Nl(i, e, t) {
  const n = e * t / 1e6 * ar * or / 1.5, s = e / t, o = Math.sqrt(n * s), u = n / o, f = -ar / 2, d = Math.min((f + o) / 1.5, ar / 2), p = or / 4, v = Math.max((p - u) / 2, -or / 4), y = -100, S = 1e3;
  i instanceof To ? (i.left = f, i.right = d, i.top = p, i.bottom = v, i.near = y, i.far = S, i.updateProjectionMatrix()) : i instanceof xn && (i.aspect = e / t, i.updateProjectionMatrix());
}
function sg() {
  return `

void main() {

    vUv = uv;

    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * position.y + u_time,
        u_time
    ));

    vec3 color;

    // float t = mod(u_base_color, 100.0);
    color = u_colors[0].color;

    // Apply y_offset to the noise coordinates
    vec2 noise_cord = vUv * u_color_pressure;
    // Apply the y-offset to shift the pattern vertically (1:1 pixel ratio)
    // Scale the offset to match the UV coordinate space
    float scaledOffset = u_y_offset / u_resolution.y;
    noise_cord.y -= scaledOffset;

    const float minNoise = .0;
    const float maxNoise = .9;

    for (int i = 1; i < u_colors_count; i++) {

        if(u_colors[i].is_active == 1.0){
            float noiseFlow = (1. + float(i)) / 30.;
            float noiseSpeed = (1. + float(i)) * 0.11;
            float noiseSeed = 13. + float(i) * 7.;

            int reverseIndex = u_colors_count - i;

            float noise = snoise(
                vec3(
                    noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                    noise_cord.y * u_color_pressure.y,
                    u_time * noiseSpeed
                ) + noiseSeed
            ) - (.1 * float(i)) + (.5 * u_color_blending);

            noise = clamp(minNoise, maxNoise + float(i) * 0.02, noise);
            vec3 nextColor = u_colors[i].color;
            color = mix(color, nextColor, smoothstep(0.0, u_color_blending, noise));
        }
    }

    v_color = color;

    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    v_new_position = gl_Position;
}
`;
}
function ag() {
  return `
float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float fbm(vec3 x) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(x * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    vec3 color = v_color;
    color += pow(v_displacement_amount, 1.0) * u_highlights;
    color -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;

    // Generate grain using fbm
    vec2 noiseCoords = gl_FragCoord.xy / u_grain_scale;
    float grain = (u_grain_speed != 0.0) ? fbm(vec3(noiseCoords, u_time * u_grain_speed)) : fbm(vec3(noiseCoords, 0.0));

    // Center the grain around zero
    grain = grain * 0.5 + 0.5;
    grain -= 0.5;

    // Add sparsity control
    grain = (grain > u_grain_sparsity) ? grain : 0.0;

    // Apply grain intensity
    grain *= u_grain_intensity;

    // Add grain to color
    color += vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}
    `;
}
const Fl = () => `
precision highp float;

struct Color {
    float is_active;
    vec3 color;
    float value;
};

uniform float u_grain_intensity; 
uniform float u_grain_sparsity; 
uniform float u_grain_scale; 
uniform float u_grain_speed; 
uniform float u_time;

uniform float u_wave_amplitude;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;

uniform vec2 u_color_pressure;

uniform float u_plane_width;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;

uniform float u_color_blending;

uniform int u_colors_count;
uniform Color u_colors[5];
uniform vec2 u_resolution;

uniform float u_y_offset;

varying vec2 vUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

    `, Ol = () => `

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);
                    
vec3 oklab2rgb(vec3 linear)
{
    const mat3 im1 = mat3(0.4121656120, 0.2118591070, 0.0883097947,
                          0.5362752080, 0.6807189584, 0.2818474174,
                          0.0514575653, 0.1074065790, 0.6302613616);
                       
    const mat3 im2 = mat3(+0.2104542553, +1.9779984951, +0.0259040371,
                          +0.7936177850, -2.4285922050, +0.7827717662,
                          -0.0040720468, +0.4505937099, -0.8086757660);
                       
    vec3 lms = im1 * linear;
            
    return im2 * (sign(lms) * pow(abs(lms), vec3(1.0/3.0)));
}

vec3 rgb2oklab(vec3 oklab)
{
    const mat3 m1 = mat3(+1.000000000, +1.000000000, +1.000000000,
                         +0.396337777, -0.105561346, -0.089484178,
                         +0.215803757, -0.063854173, -1.291485548);
                       
    const mat3 m2 = mat3(+4.076724529, -1.268143773, -0.004111989,
                         -3.307216883, +2.609332323, -0.703476310,
                         +0.230759054, -0.341134429, +1.706862569);
    vec3 lms = m1 * oklab;
    
    return m2 * (lms * lms * lms);
}

    `, Bl = () => `

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

float saturation(vec3 rgb)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return abs(6.0 * d + e);
}

// get saturation of a color in values between 0 and 1
float getSaturation(vec3 color) {
    float max = max(color.r, max(color.g, color.b));
    float min = min(color.r, min(color.g, color.b));
    return (max - min) / max;
}
    
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`, zl = (i) => {
  i.id = vc, i.href = "https://neat.firecms.co", i.target = "_blank", i.style.position = "absolute", i.style.display = "block", i.style.bottom = "0", i.style.right = "0", i.style.padding = "10px", i.style.color = "#dcdcdc", i.style.opacity = "0.8", i.style.fontFamily = "sans-serif", i.style.fontSize = "16px", i.style.fontWeight = "bold", i.style.textDecoration = "none", i.style.zIndex = "10000", i.innerHTML = "NEAT";
}, og = (i) => {
  const e = i.parentElement?.getElementsByTagName("a");
  if (e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].id === vc) {
        zl(e[n]);
        return;
      }
  }
  const t = document.createElement("a");
  zl(t), i.parentElement?.appendChild(t);
};
function lg() {
  const i = /* @__PURE__ */ new Date(), e = i.getMinutes(), t = i.getSeconds();
  return e * 60 + t;
}
function cg(i = 6) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let t = "";
  for (let n = 0; n < i; n++) {
    const s = Math.floor(Math.random() * e.length);
    t += e.charAt(s);
  }
  return t;
}
function ug(i, e) {
  const t = document.createElement("a");
  t.download = e, t.href = i, document.body.appendChild(t), t.click(), document.body.removeChild(t);
}
const fg = {
  colors: [
    {
      color: "#FF5772",
      enabled: !0
    },
    {
      color: "#4CB4BB",
      enabled: !0
    },
    {
      color: "#FFC600",
      enabled: !0
    },
    {
      color: "#8B6AE6",
      enabled: !0
    },
    {
      color: "#2E0EC7",
      enabled: !0
    }
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 3,
  waveAmplitude: 8,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: !1,
  colorBlending: 8,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 3,
  grainIntensity: 0.3,
  grainSpeed: 1,
  resolution: 1
};
function dg() {
  const i = document.getElementById("gradient");
  if (i instanceof HTMLCanvasElement) {
    const e = new rg({
      ref: i,
      ...fg
    });
    window.neat = e;
  }
}
function pg() {
  console.log("Vite library successfully imported!");
}
export {
  hg as $,
  dg as initNeatGradient,
  pg as testViteLibrary
};
