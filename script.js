/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-canvas-csspointerevents-csstransforms-csstransforms3d-csstransitions-hashchange-history-input-inputtypes-placeholder-postmessage-svg-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
  function r(e) {
    var t = S.className,
      n = Modernizr._config.classPrefix || "";
    if ((E && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      E ? (S.className.baseVal = t) : (S.className = t));
  }
  function i(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, r, o, a, s;
    for (var l in x)
      if (x.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = x[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (
          r = i(t.fn, "function") ? t.fn() : t.fn, o = 0;
          o < e.length;
          o++
        )
          (a = e[o]),
            (s = a.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = r)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = r)),
            y.push((r ? "" : "no-") + s.join("-"));
      }
  }
  function a() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : E
      ? t.createElementNS.call(
          t,
          "http://www.w3.org/2000/svg",
          arguments[0]
        )
      : t.createElement.apply(t, arguments);
  }
  function s(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function l(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function u() {
    var e = t.body;
    return e || ((e = a(E ? "svg" : "body")), (e.fake = !0)), e;
  }
  function d(e, n, r, i) {
    var o,
      s,
      l,
      d,
      c = "modernizr",
      f = a("div"),
      p = u();
    if (parseInt(r, 10))
      for (; r--; )
        (l = a("div")), (l.id = i ? i[r] : c + (r + 1)), f.appendChild(l);
    return (
      (o = a("style")),
      (o.type = "text/css"),
      (o.id = "s" + c),
      (p.fake ? p : f).appendChild(o),
      p.appendChild(f),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (f.id = c),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (d = S.style.overflow),
        (S.style.overflow = "hidden"),
        S.appendChild(p)),
      (s = n(f, e)),
      p.fake
        ? (p.parentNode.removeChild(p),
          (S.style.overflow = d),
          S.offsetHeight)
        : f.parentNode.removeChild(f),
      !!s
    );
  }
  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function f(e, t, n) {
    var r;
    for (var o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((r = t[e[o]]), i(r, "function") ? c(r, n || t) : r);
    return !1;
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function m(t, r) {
    var i = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; i--; ) if (e.CSS.supports(p(t[i]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; i--; ) o.push("(" + p(t[i]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        d(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return n;
  }
  function h(e, t, r, o) {
    function u() {
      c && (delete $.style, delete $.modElem);
    }
    if (((o = i(o, "undefined") ? !1 : o), !i(r, "undefined"))) {
      var d = m(e, r);
      if (!i(d, "undefined")) return d;
    }
    for (
      var c, f, p, h, v, g = ["modernizr", "tspan", "samp"];
      !$.style && g.length;

    )
      (c = !0), ($.modElem = a(g.shift())), ($.style = $.modElem.style);
    for (p = e.length, f = 0; p > f; f++)
      if (
        ((h = e[f]),
        (v = $.style[h]),
        l(h, "-") && (h = s(h)),
        $.style[h] !== n)
      ) {
        if (o || i(r, "undefined")) return u(), "pfx" == t ? h : !0;
        try {
          $.style[h] = r;
        } catch (y) {}
        if ($.style[h] != v) return u(), "pfx" == t ? h : !0;
      }
    return u(), !1;
  }
  function v(e, t, n, r, o) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + O.join(a + " ") + a).split(" ");
    return i(t, "string") || i(t, "undefined")
      ? h(s, t, r, o)
      : ((s = (e + " " + _.join(a + " ") + a).split(" ")), f(s, t, n));
  }
  function g(e, t, r) {
    return v(e, n, n, t, r);
  }
  var y = [],
    x = [],
    C = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        x.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        x.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = C),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("history", function () {
      var t = navigator.userAgent;
      return (-1 === t.indexOf("Android 2.") &&
        -1 === t.indexOf("Android 4.0")) ||
        -1 === t.indexOf("Mobile Safari") ||
        -1 !== t.indexOf("Chrome") ||
        -1 !== t.indexOf("Windows Phone")
        ? e.history && "pushState" in e.history
        : !1;
    }),
    Modernizr.addTest("postmessage", "postMessage" in e),
    Modernizr.addTest(
      "svg",
      !!t.createElementNS &&
        !!t.createElementNS("http://www.w3.org/2000/svg", "svg")
          .createSVGRect
    );
  var b = C._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  C._prefixes = b;
  var S = t.documentElement,
    E = "svg" === S.nodeName.toLowerCase();
  E ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = x.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function i(e, t) {
        var n = x.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (x.elements = n + " " + e),
          u(t);
      }
      function o(e) {
        var t = y[e[v]];
        return t || ((t = {}), g++, (e[v] = g), (y[g] = t)), t;
      }
      function a(e, n, r) {
        if ((n || (n = t), c)) return n.createElement(e);
        r || (r = o(n));
        var i;
        return (
          (i = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !i.canHaveChildren || m.test(e) || i.tagUrn
            ? i
            : r.frag.appendChild(i)
        );
      }
      function s(e, n) {
        if ((e || (e = t), c)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var i = n.frag.cloneNode(), a = 0, s = r(), l = s.length;
          l > a;
          a++
        )
          i.createElement(s[a]);
        return i;
      }
      function l(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return x.shivMethods ? a(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e),
                    t.frag.createElement(e),
                    'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(x, t.frag));
      }
      function u(e) {
        e || (e = t);
        var r = o(e);
        return (
          !x.shivCSS ||
            d ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          c || l(e, r),
          e
        );
      }
      var d,
        c,
        f = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        v = "_html5shiv",
        g = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (d = "hidden" in e),
            (c =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (d = !0), (c = !0);
        }
      })();
      var x = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: f,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: c,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: u,
        createElement: a,
        createDocumentFragment: s,
        addElements: i,
      };
      (e.html5 = x),
        u(t),
        "object" == typeof module &&
          module.exports &&
          (module.exports = x);
    })("undefined" != typeof e ? e : this, t);
  var w = (function () {
    function e(e, t) {
      var i;
      return e
        ? ((t && "string" != typeof t) || (t = a(t || "div")),
          (e = "on" + e),
          (i = e in t),
          !i &&
            r &&
            (t.setAttribute || (t = a("div")),
            t.setAttribute(e, ""),
            (i = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          i)
        : !1;
    }
    var r = !("onblur" in t.documentElement);
    return e;
  })();
  (C.hasEvent = w),
    Modernizr.addTest("hashchange", function () {
      return w("hashchange", e) === !1
        ? !1
        : t.documentMode === n || t.documentMode > 7;
    }),
    Modernizr.addTest("canvas", function () {
      var e = a("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("csspointerevents", function () {
      var e = a("a").style;
      return (
        (e.cssText = "pointer-events:auto"), "auto" === e.pointerEvents
      );
    }),
    Modernizr.addTest(
      "placeholder",
      "placeholder" in a("input") && "placeholder" in a("textarea")
    );
  var T = "Moz O ms Webkit",
    _ = C._config.usePrefixes ? T.toLowerCase().split(" ") : [];
  C._domPrefixes = _;
  var k = a("input"),
    N =
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      ),
    A = {};
  Modernizr.input = (function (t) {
    for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in k);
    return (
      A.list && (A.list = !(!a("datalist") || !e.HTMLDataListElement)), A
    );
  })(N);
  var P =
      "search tel url email datetime date month week time datetime-local number range color".split(
        " "
      ),
    z = {};
  Modernizr.inputtypes = (function (e) {
    for (var r, i, o, a = e.length, s = "1)", l = 0; a > l; l++)
      k.setAttribute("type", (r = e[l])),
        (o = "text" !== k.type && "style" in k),
        o &&
          ((k.value = s),
          (k.style.cssText = "position:absolute;visibility:hidden;"),
          /^range$/.test(r) && k.style.WebkitAppearance !== n
            ? (S.appendChild(k),
              (i = t.defaultView),
              (o =
                i.getComputedStyle &&
                "textfield" !==
                  i.getComputedStyle(k, null).WebkitAppearance &&
                0 !== k.offsetHeight),
              S.removeChild(k))
            : /^(search|tel)$/.test(r) ||
              (o = /^(url|email)$/.test(r)
                ? k.checkValidity && k.checkValidity() === !1
                : k.value != s)),
        (z[e[l]] = !!o);
    return z;
  })(P);
  var M = "CSS" in e && "supports" in e.CSS,
    j = "supportsCSS" in e;
  Modernizr.addTest("supports", M || j);
  var O = C._config.usePrefixes ? T.split(" ") : [];
  C._cssomPrefixes = O;
  var F = function (t) {
    var r,
      i = b.length,
      o = e.CSSRule;
    if ("undefined" == typeof o) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in o)
    )
      return "@" + t;
    for (var a = 0; i > a; a++) {
      var s = b[a],
        l = s.toUpperCase() + "_" + r;
      if (l in o) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  C.atRule = F;
  var L = (C.testStyles = d),
    D = { elem: a("modernizr") };
  Modernizr._q.push(function () {
    delete D.elem;
  });
  var $ = { style: D.elem.style };
  Modernizr._q.unshift(function () {
    delete $.style;
  });
  C.testProp = function (e, t, r) {
    return h([e], n, t, r);
  };
  C.testAllProps = v;
  var q = (C.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@")
      ? F(e)
      : (-1 != e.indexOf("-") && (e = s(e)), t ? v(e, t, n) : v(e, "pfx"));
  });
  Modernizr.addTest(
    "backgroundblendmode",
    q("backgroundBlendMode", "text")
  ),
    (C.testAllProps = g),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        g("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransforms3d", function () {
      var e = !!g("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;
      if (e && (!t || "webkitPerspective" in S.style)) {
        var n,
          r = "#modernizr{width:0;height:0}";
        Modernizr.supports
          ? (n = "@supports (perspective: 1px)")
          : ((n = "@media (transform-3d)"),
            t && (n += ",(-webkit-transform-3d)")),
          (n +=
            "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
          L(r + n, function (t) {
            e = 7 === t.offsetWidth && 18 === t.offsetHeight;
          });
      }
      return e;
    }),
    Modernizr.addTest("csstransitions", g("transition", "all", !0)),
    o(),
    r(y),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var H = 0; H < Modernizr._q.length; H++) Modernizr._q[H]();
  e.Modernizr = Modernizr;
})(window, document);
