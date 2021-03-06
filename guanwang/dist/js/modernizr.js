window.Modernizr = function (e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function o(e, t) {
        return r(x.join(e + ";") + (t || ""))
    }

    function i(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
        }
        return !1
    }

    function s(e, t, r) {
        for (var o in e) {
            var a = t[e[o]];
            if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }

    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), o = (e + " " + C.join(r + " ") + r).split(" ");
        return i(t, "string") || i(t, "undefined") ? c(o, t) : (o = (e + " " + j.join(r + " ") + r).split(" "), s(o, t, n))
    }

    var u, f, d, p = "2.7.1", m = {}, h = !0, g = t.documentElement, y = "modernizr", v = t.createElement(y),
        b = v.style, E = ":)", x = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), w = "Webkit Moz O ms",
        C = w.split(" "), j = w.toLowerCase().split(" "), k = {}, S = [], N = S.slice, F = function (e, n, r, o) {
            var i, a, c, s, l = t.createElement("div"), u = t.body, f = u || t.createElement("body");
            if (parseInt(r, 10)) for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : y + (r + 1), l.appendChild(c);
            return i = ["&#173;", '<style id="s', y, '">', e, "</style>"].join(""), l.id = y, (u ? l : f).innerHTML += i, f.appendChild(l), u || (f.style.background = "", f.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(l, e), u ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), g.style.overflow = s), !!a
        }, T = {}.hasOwnProperty;
    d = i(T, "undefined") || i(T.call, "undefined") ? function (e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return T.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = N.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var o = function () {
                };
                o.prototype = t.prototype;
                var i = new o, a = t.apply(i, n.concat(N.call(arguments)));
                return Object(a) === a ? a : i
            }
            return t.apply(e, n.concat(N.call(arguments)))
        };
        return r
    }), k.flexbox = function () {
        return l("flexWrap")
    }, k.flexboxlegacy = function () {
        return l("boxDirection")
    }, k.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
    }, k.hsla = function () {
        return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
    }, k.multiplebgs = function () {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, k.backgroundsize = function () {
        return l("backgroundSize")
    }, k.borderimage = function () {
        return l("borderImage")
    }, k.borderradius = function () {
        return l("borderRadius")
    }, k.boxshadow = function () {
        return l("boxShadow")
    }, k.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, k.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, k.cssanimations = function () {
        return l("animationName")
    }, k.csscolumns = function () {
        return l("columnCount")
    }, k.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
    }, k.cssreflections = function () {
        return l("boxReflect")
    }, k.csstransforms = function () {
        return !!l("transform")
    }, k.csstransforms3d = function () {
        var e = !!l("perspective");
        return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, k.csstransitions = function () {
        return l("transition")
    }, k.fontface = function () {
        var e;
        return F('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
            var o = t.getElementById("smodernizr"), i = o.sheet || o.styleSheet,
                a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
        }), e
    }, k.generatedcontent = function () {
        var e;
        return F(["#", y, "{font:0/0 a}#", y, ':after{content:"', E, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    };
    for (var O in k) d(k, O) && (f = O.toLowerCase(), m[f] = k[O](), S.push((m[f] ? "" : "no-") + f));
    return m.addTest = function (e, t) {
        if ("object" == typeof e) for (var r in e) d(e, r) && m.addTest(r, e[r]); else {
            if (e = e.toLowerCase(), m[e] !== n) return m;
            t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), m[e] = t
        }
        return m
    }, r(""), v = u = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, g++, e[h] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || p.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
        }

        function a(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; s > a; a++) i.createElement(c[a]);
            return i
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return v.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function s(e) {
            e || (e = t);
            var r = o(e);
            return v.shivCSS && !l && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }

        var l, u, f = "3.7.0", d = e.html5 || {},
            p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv", g = 0, y = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                l = !0, u = !0
            }
        }();
        var v = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: f,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: s,
            createElement: i,
            createDocumentFragment: a
        };
        e.html5 = v, s(t)
    }(this, t), m._version = p, m._prefixes = x, m._domPrefixes = j, m._cssomPrefixes = C, m.testProp = function (e) {
        return c([e])
    }, m.testAllProps = l, m.testStyles = F, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + S.join(" ") : ""), m
}(this, this.document), function (e, t, n) {
    function r(e) {
        return "[object Function]" == g.call(e)
    }

    function o(e) {
        return "string" == typeof e
    }

    function i() {
    }

    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function c() {
        var e = y.shift();
        v = 1, e ? e.t ? m(function () {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), c()) : v = 0
    }

    function s(e, n, r, o, i, s, l) {
        function u(t) {
            if (!p && a(f.readyState) && (b.r = p = 1, !v && c(), f.onload = f.onreadystatechange = null, t)) {
                "img" != e && m(function () {
                    x.removeChild(f)
                }, 50);
                for (var r in S[n]) S[n].hasOwnProperty(r) && S[n][r].onload()
            }
        }

        var l = l || d.errorTimeout, f = t.createElement(e), p = 0, g = 0, b = {t: r, s: n, e: i, a: s, x: l};
        1 === S[n] && (g = 1, S[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
            u.call(this, g)
        }, y.splice(o, 0, b), "img" != e && (g || 2 === S[n] ? (x.insertBefore(f, E ? null : h), m(u, l)) : S[n].push(f))
    }

    function l(e, t, n, r, i) {
        return v = 0, t = t || "j", o(e) ? s("c" == t ? C : w, e, t, this.i++, n, r, i) : (y.splice(this.i++, 0, e), 1 == y.length && c()), this
    }

    function u() {
        var e = d;
        return e.loader = {load: l, i: 0}, e
    }

    var f, d, p = t.documentElement, m = e.setTimeout, h = t.getElementsByTagName("script")[0], g = {}.toString, y = [],
        v = 0, b = "MozAppearance" in p.style, E = b && !!t.createRange().compareNode, x = E ? p : h.parentNode,
        p = e.opera && "[object Opera]" == g.call(e.opera), p = !!t.attachEvent && !p,
        w = b ? "object" : p ? "script" : "img", C = p ? "script" : w, j = Array.isArray || function (e) {
            return "[object Array]" == g.call(e)
        }, k = [], S = {}, N = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    d = function (e) {
        function t(e) {
            var t, n, r, e = e.split("!"), o = k.length, i = e.pop(), a = e.length,
                i = {url: i, origUrl: i, prefixes: e};
            for (n = 0; a > n; n++) r = e[n].split("="), (t = N[r.shift()]) && (i = t(i, r));
            for (n = 0; o > n; n++) i = k[n](i);
            return i
        }

        function a(e, o, i, a, c) {
            var s = t(e), l = s.autoCallback;
            s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, a, c) : (S[s.url] ? s.noexec = !0 : S[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(l)) && i.load(function () {
                u(), o && o(s.origUrl, c, a), l && l(s.origUrl, c, a), S[s.url] = 2
            })))
        }

        function c(e, t) {
            function n(e, n) {
                if (e) {
                    if (o(e)) n || (f = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    }), a(e, f, t, 0, l); else if (Object(e) === e) for (s in c = function () {
                        var t, n = 0;
                        for (t in e) e.hasOwnProperty(t) && n++;
                        return n
                    }(), e) e.hasOwnProperty(s) && (!n && !--c && (r(f) ? f = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    } : f[s] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(d[s])), a(e[s], f, t, s, l))
                } else !n && p()
            }

            var c, s, l = !!e.test, u = e.load || e.both, f = e.callback || i, d = f, p = e.complete || i;
            n(l ? e.yep : e.nope, !!u), u && n(u)
        }

        var s, l, f = this.yepnope.loader;
        if (o(e)) a(e, 0, f, 0); else if (j(e)) for (s = 0; s < e.length; s++) l = e[s], o(l) ? a(l, 0, f, 0) : j(l) ? d(l) : Object(l) === l && c(l, f); else Object(e) === e && c(e, f)
    }, d.addPrefix = function (e, t) {
        N[e] = t
    }, d.addFilter = function (e) {
        k.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function () {
        t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function (e, n, r, o, s, l) {
        var u, f, p = t.createElement("script"), o = o || d.errorTimeout;
        p.src = e;
        for (f in r) p.setAttribute(f, r[f]);
        n = l ? c : n || i, p.onreadystatechange = p.onload = function () {
            !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, m(function () {
            u || (u = 1, n(1))
        }, o), s ? p.onload() : h.parentNode.insertBefore(p, h)
    }, e.yepnope.injectCss = function (e, n, r, o, a, s) {
        var l, o = t.createElement("link"), n = s ? c : n || i;
        o.href = e, o.rel = "stylesheet", o.type = "text/css";
        for (l in r) o.setAttribute(l, r[l]);
        a || (h.parentNode.insertBefore(o, h), m(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};