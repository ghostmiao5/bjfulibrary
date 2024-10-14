(function(e) {
    function t(t) {
        for (var a, r, c = t[0], i = t[1], u = t[2], l = 0, d = []; l < c.length; l++)
            r = c[l],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]),
            o[r] = 0;
        for (a in i)
            Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        f && f(t);
        while (d.length)
            d.shift()();
        return s.push.apply(s, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (a = !1)
            }
            a && (s.splice(t--, 1),
            e = i(i.s = n[0]))
        }
        return e
    }
    var a = {}
      , r = {
        app: 0
    }
      , o = {
        app: 0
    }
      , s = [];
    function c(e) {
        return i.p + "static/js/" + ({}[e] || e) + ".undefined.1702032332236.js"
    }
    function i(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.e = function(e) {
        var t = []
          , n = {
            "chunk-0200bcef": 1,
            "chunk-14c33bd4": 1,
            "chunk-00809a44": 1,
            "chunk-8f3ec796": 1,
            "chunk-1f8aabd4": 1,
            "chunk-2819398b": 1,
            "chunk-3a83660a": 1,
            "chunk-009dcf06": 1,
            "chunk-e23172ba": 1,
            "chunk-5d8eaa0c": 1,
            "chunk-749a43c0": 1,
            "chunk-792d422c": 1,
            "chunk-7cca7247": 1,
            "chunk-db916254": 1,
            "chunk-f8c66676": 1
        };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var a = "css/" + ({}[e] || e) + "." + {
                "chunk-0200bcef": "5062c333",
                "chunk-14c33bd4": "5be6745c",
                "chunk-1eefc112": "31d6cfe0",
                "chunk-00809a44": "248cb560",
                "chunk-8f3ec796": "e438fa35",
                "chunk-1f8aabd4": "18686b8a",
                "chunk-2819398b": "2cff89a7",
                "chunk-2d0cebfc": "31d6cfe0",
                "chunk-3a83660a": "09d0f616",
                "chunk-009dcf06": "4de863f8",
                "chunk-e23172ba": "4ea5ed4a",
                "chunk-5d8eaa0c": "f0aca9e8",
                "chunk-749a43c0": "2999562d",
                "chunk-792d422c": "38b68367",
                "chunk-7cca7247": "81c83040",
                "chunk-db916254": "8f752c34",
                "chunk-f8c66676": "42c2728b"
            }[e] + ".css", o = i.p + a, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var u = s[c]
                  , l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === a || l === o))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
                u = d[c],
                l = u.getAttribute("data-href");
                if (l === a || l === o)
                    return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = t,
            f.onerror = function(t) {
                var a = t && t.target && t.target.src || o
                  , s = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED",
                s.request = a,
                delete r[e],
                f.parentNode.removeChild(f),
                n(s)
            }
            ,
            f.href = o;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var a = o[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var s = new Promise((function(t, n) {
                    a = o[e] = [t, n]
                }
                ));
                t.push(a[2] = s);
                var u, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                i.nc && l.setAttribute("nonce", i.nc),
                l.src = c(e);
                var d = new Error;
                u = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(f);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")",
                            d.name = "ChunkLoadError",
                            d.type = a,
                            d.request = r,
                            n[1](d)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var f = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = u,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    i.m = e,
    i.c = a,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                i.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        t(u[d]);
    var f = l;
    s.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    1: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("2b0e")
          , r = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [e.$route.meta.keepAlive ? t("keep-alive", [t("router-view")], 1) : t("router-view")], 1)
        }
          , o = []
          , s = {
            name: "App",
            created() {}
        }
          , c = s
          , i = (n("91f7"),
        n("2877"))
          , u = Object(i["a"])(c, r, o, !1, null, null, null)
          , l = u.exports
          , d = n("a18c")
          , f = n("ca95")
          , h = n.n(f)
          , p = n("e11d")
          , m = n("92e2")
          , g = n("7744")
          , v = (n("5cfb"),
        n("157a"),
        n("9ed2"))
          , b = n("b650")
          , k = n("6e47")
          , y = n("ad06")
          , S = n("5596")
          , w = n("ab2c")
          , C = n("417e")
          , I = n("3acc")
          , $ = n("6b41")
          , A = n("2bb1")
          , B = n("0b33")
          , P = n("5e46")
          , _ = n("f0ca")
          , O = n("2bdd")
          , E = n("473d")
          , j = n("f253")
          , x = n("e41f")
          , G = n("c41f")
          , T = n("a822")
          , U = n("565f")
          , M = n("2241")
          , H = n("d399")
          , D = n("543e");
        a["default"].use(v["a"]),
        a["default"].use(b["a"]),
        a["default"].use(k["a"]),
        a["default"].use(y["a"]),
        a["default"].use(S["a"]),
        a["default"].use(w["a"]),
        a["default"].use(C["a"]),
        a["default"].use(I["a"]),
        a["default"].use($["a"]),
        a["default"].use(A["a"]),
        a["default"].use(B["a"]),
        a["default"].use(P["a"]),
        a["default"].use(_["a"]),
        a["default"].use(O["a"]),
        a["default"].use(E["a"]),
        a["default"].use(j["a"]),
        a["default"].use(x["a"]),
        a["default"].use(G["a"]),
        a["default"].use(T["a"]),
        a["default"].use(U["a"]),
        a["default"].use(M["a"]),
        a["default"].use(H["a"]),
        a["default"].use(D["a"]),
        H["a"].setDefaultOptions({
            duration: 2e3
        });
        const N = (e=1) => {
            let t = new Date
              , n = t.getFullYear()
              , a = t.getMonth() >= 9 ? t.getMonth() + 1 : "0" + (t.getMonth() + 1)
              , r = t.getDate() > 9 ? t.getDate() : "0" + t.getDate()
              , o = t.getHours() > 9 ? t.getHours() : "0" + t.getHours()
              , s = t.getMinutes() > 9 ? t.getMinutes() : "0" + t.getMinutes()
              , c = t.getSeconds() > 9 ? t.getSeconds() : "0" + t.getSeconds();
            return 1 == e ? `${n}/${a}/${r} ${o}:${s}:${c}` : `${n}/${a}/${r}`
        }
          , L = (e=new Date, t=1) => {
            e = new Date(e);
            let n = e.getFullYear()
              , a = e.getMonth() > 8 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1)
              , r = e.getDate() > 9 ? e.getDate() : "0" + e.getDate()
              , o = e.getHours() > 9 ? e.getHours() : "0" + e.getHours()
              , s = e.getMinutes() > 9 ? e.getMinutes() : "0" + e.getMinutes()
              , c = e.getSeconds() > 9 ? e.getSeconds() : "0" + e.getSeconds();
            switch (t) {
            case 1:
                return `${n}-${a}-${r}`;
            case 2:
                return `${n}-${a}-${r} ${o}:${s}:${c}`;
            case 3:
                return `${n}年${a}月${r}日`
            }
        }
        ;
        function F(e, t=1e3) {
            let n = null;
            return function() {
                let a = this
                  , r = arguments;
                clearTimeout(n),
                n = setTimeout( () => e.apply(a, r), t)
            }
        }
        function J(e, t=1e3) {
            let n = Date.now();
            return function() {
                const a = this
                  , r = arguments
                  , o = Date.now();
                o - n >= t && (e.apply(a, r),
                n = Date.now())
            }
        }
        var R = {
            newDate: N,
            debounce: F,
            throttle: J,
            formDate: L
        }
          , z = (n("a2f0"),
        n("313e"))
          , K = n("4eb5")
          , q = n.n(K);
        n("df1e");
        const W = e => {
            for (var t in Global)
                a["default"].prototype["$" + t] = Global[t];
            e()
        }
        ;
        a["default"].prototype.$echarts = z,
        a["default"].use(q.a),
        console.log(h.a),
        a["default"].use(h.a, {
            name: "v-touch"
        }),
        a["default"].config.productionTip = !1,
        a["default"].prototype.$version = "1.0.7",
        a["default"].prototype.$utils = R,
        a["default"].use(p["a"]),
        a["default"].use(m["a"]),
        a["default"].use(g["a"]),
        W( () => {
            new a["default"]({
                router: d["a"],
                render: e => e(l)
            }).$mount("#app")
        }
        )
    },
    "91f7": function(e, t, n) {
        "use strict";
        n("a32d")
    },
    a18c: function(e, t, n) {
        "use strict";
        var a = n("2b0e")
          , r = n("8c4f")
          , o = n("db16")
          , s = n("f8c8");
        a["default"].use(r["a"]);
        const c = r["a"].prototype.replace;
        r["a"].prototype.replace = function(e) {
            return c.call(this, e).catch(e => e)
        }
        ;
        const i = [{
            path: "/",
            redirect: "/login"
        }, {
            path: "/code",
            name: "code",
            component: () => Promise.all([n.e("chunk-3a83660a"), n.e("chunk-009dcf06")]).then(n.bind(null, "93d8"))
        }, {
            path: "/login",
            name: "login",
            component: () => n.e("chunk-1f8aabd4").then(n.bind(null, "dd7b"))
        }, {
            path: "/loginWatch",
            name: "loginWatch",
            component: () => n.e("chunk-792d422c").then(n.bind(null, "f91a"))
        }, {
            path: "/codeLogin",
            name: "codeLogin",
            component: () => n.e("chunk-5d8eaa0c").then(n.bind(null, "be1d"))
        }, {
            path: "/main",
            name: "main",
            component: () => n.e("chunk-db916254").then(n.bind(null, "50f9")),
            children: [{
                path: "my",
                name: "my",
                component: () => n.e("chunk-749a43c0").then(n.bind(null, "c345"))
            }, {
                path: "book",
                name: "book",
                component: () => n.e("chunk-7cca7247").then(n.bind(null, "77a3")),
                meta: {
                    keepAlive: !0
                }
            }, {
                path: "notice",
                name: "notice",
                component: () => n.e("chunk-f8c66676").then(n.bind(null, "504c")),
                meta: {
                    keepAlive: !0
                }
            }, {
                path: "bookList",
                name: "bookList",
                component: () => n.e("chunk-2819398b").then(n.bind(null, "d8a4")),
                meta: {
                    keepAlive: !0
                }
            }]
        }, {
            path: "/detail",
            name: "detail",
            component: () => Promise.all([n.e("chunk-1eefc112"), n.e("chunk-8f3ec796")]).then(n.bind(null, "1000"))
        }, {
            path: "/layout",
            name: "layout",
            component: () => Promise.all([n.e("chunk-1eefc112"), n.e("chunk-00809a44")]).then(n.bind(null, "ed3a"))
        }, {
            path: "/resetLogin",
            name: "resetLogin",
            component: () => n.e("chunk-0200bcef").then(n.bind(null, "7299"))
        }, {
            path: "/watchs",
            name: "watchs",
            component: () => Promise.all([n.e("chunk-3a83660a"), n.e("chunk-e23172ba")]).then(n.bind(null, "260e"))
        }, {
            path: "/casing",
            name: "casing",
            component: () => n.e("chunk-2d0cebfc").then(n.bind(null, "617b"))
        }, {
            path: "/school",
            name: "school",
            component: () => n.e("chunk-14c33bd4").then(n.bind(null, "d5c7"))
        }]
          , u = new r["a"]({
            mode: "hash",
            base: "",
            routes: i
        });
        u.beforeEach( (e, t, n) => {
            let a = l(window.location.hash);
            if ("1" === a.test && alert("进入了路由：" + e.name),
            "loginWatch" == e.name || "resetLogin" == e.name || "casing" == e.name || "school" == e.name || "codeLogin" == e.name)
                if ("school" == e.name) {
                    let t = JSON.parse(localStorage.getItem("school"))
                      , a = JSON.parse(localStorage.getItem("userInfo"))
                      , r = localStorage.getItem("expiredTime")
                      , c = (new Date).getTime();
                    if (null != t && null != r && c < r) {
                        let e = {
                            username: a.libUsername,
                            password: a.libPassword,
                            actCode: !0,
                            HMAC: t.hmacKey
                        };
                        Object(o["b"])(e, n, !1, t)
                    } else
                        localStorage.removeItem("school"),
                        Object(s["K"])({
                            openId: e.query.openid
                        }).then(e => {
                            if (e.status && "" !== e.data.data.userInfo) {
                                let t = e.data.data.userInfo
                                  , a = e.data.data.school;
                                localStorage.setItem("school", JSON.stringify(a)),
                                localStorage.setItem("userInfo", JSON.stringify(t));
                                let r = {
                                    username: t.libUsername,
                                    password: t.libPassword,
                                    actCode: !0,
                                    HMAC: a.hmacKey
                                };
                                Object(o["b"])(r, n, !1, e.data.data.school)
                            } else
                                n()
                        }
                        ).catch(e => {
                            alert("获取绑定信息失败"),
                            n()
                        }
                        )
                } else
                    n();
            else {
                "1" === a.test && alert("查看是否有token");
                let t = sessionStorage.getItem("token");
                t ? ("1" === a.test && alert("有token开始跳转页面：" + e.name),
                "login" === e.name ? n({
                    path: "/main/book"
                }) : n()) : ("1" === a.test && alert("开始调用登录方法"),
                Object(o["a"])(e, n, u))
            }
        }
        );
        const l = e => {
            let t = e.split("?")[1]
              , n = t ? t.split("&") : []
              , a = {};
            for (let r = 0; r < n.length; r++) {
                let e = n[r].split("=")
                  , t = e[0]
                  , o = e[1];
                a[t] = o
            }
            return a
        }
        ;
        t["a"] = u
    },
    a2f0: function(e, t, n) {},
    a32d: function(e, t, n) {},
    be01: function(e, t) {
        var n = n || function(e, t) {
            var n = {}
              , a = n.lib = {}
              , r = a.Base = function() {
                function e() {}
                return {
                    extend: function(t) {
                        e.prototype = this;
                        var n = new e;
                        return t && n.mixIn(t),
                        n.$super = this,
                        n
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments),
                        e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.$super.extend(this)
                    }
                }
            }()
              , o = a.WordArray = r.extend({
                init: function(e, n) {
                    e = this.words = e || [],
                    this.sigBytes = n != t ? n : 4 * e.length
                },
                toString: function(e) {
                    return (e || c).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , n = e.words
                      , a = this.sigBytes;
                    e = e.sigBytes;
                    if (this.clamp(),
                    a % 4)
                        for (var r = 0; r < e; r++)
                            t[a + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (a + r) % 4 * 8;
                    else if (65535 < n.length)
                        for (r = 0; r < e; r += 4)
                            t[a + r >>> 2] = n[r >>> 2];
                    else
                        t.push.apply(t, n);
                    return this.sigBytes += e,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                    t.length = e.ceil(n / 4)
                },
                clone: function() {
                    var e = r.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var n = [], a = 0; a < t; a += 4)
                        n.push(4294967296 * e.random() | 0);
                    return o.create(n, t)
                }
            })
              , s = n.enc = {}
              , c = s.Hex = {
                stringify: function(e) {
                    for (var t = e.words, n = (e = e.sigBytes,
                    []), a = 0; a < e; a++) {
                        var r = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        n.push((r >>> 4).toString(16)),
                        n.push((15 & r).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], a = 0; a < t; a += 2)
                        n[a >>> 3] |= parseInt(e.substr(a, 2), 16) << 24 - a % 8 * 4;
                    return o.create(n, t / 2)
                }
            }
              , i = s.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, n = (e = e.sigBytes,
                    []), a = 0; a < e; a++)
                        n.push(String.fromCharCode(t[a >>> 2] >>> 24 - a % 4 * 8 & 255));
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, n = [], a = 0; a < t; a++)
                        n[a >>> 2] |= (255 & e.charCodeAt(a)) << 24 - a % 4 * 8;
                    return o.create(n, t)
                }
            }
              , u = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(i.stringify(e)))
                    } catch (l) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return i.parse(unescape(encodeURIComponent(e)))
                }
            }
              , l = a.BufferedBlockAlgorithm = r.extend({
                reset: function() {
                    this._data = o.create(),
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = u.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var n = this._data
                      , a = n.words
                      , r = n.sigBytes
                      , s = this.blockSize
                      , c = r / (4 * s);
                    c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0),
                    t = c * s,
                    r = e.min(4 * t, r);
                    if (t) {
                        for (var i = 0; i < t; i += s)
                            this._doProcessBlock(a, i);
                        i = a.splice(0, t),
                        n.sigBytes -= r
                    }
                    return o.create(i, r)
                },
                clone: function() {
                    var e = r.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            });
            a.Hasher = l.extend({
                init: function() {
                    this.reset()
                },
                reset: function() {
                    l.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    return e && this._append(e),
                    this._doFinalize(),
                    this._hash
                },
                clone: function() {
                    var e = l.clone.call(this);
                    return e._hash = this._hash.clone(),
                    e
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return e.create(n).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return d.HMAC.create(e, n).finalize(t)
                    }
                }
            });
            var d = n.algo = {};
            return n
        }(Math);
        (function(e) {
            var t = n
              , a = t.lib
              , r = a.WordArray
              , o = (a = a.Hasher,
            t.algo)
              , s = []
              , c = [];
            (function() {
                function t(t) {
                    for (var n = e.sqrt(t), a = 2; a <= n; a++)
                        if (!(t % a))
                            return !1;
                    return !0
                }
                function n(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                }
                for (var a = 2, r = 0; 64 > r; )
                    t(a) && (8 > r && (s[r] = n(e.pow(a, .5))),
                    c[r] = n(e.pow(a, 1 / 3)),
                    r++),
                    a++
            }
            )();
            var i = [];
            o = o.SHA256 = a.extend({
                _doReset: function() {
                    this._hash = r.create(s.slice(0))
                },
                _doProcessBlock: function(e, t) {
                    for (var n = this._hash.words, a = n[0], r = n[1], o = n[2], s = n[3], u = n[4], l = n[5], d = n[6], f = n[7], h = 0; 64 > h; h++) {
                        if (16 > h)
                            i[h] = 0 | e[t + h];
                        else {
                            var p = i[h - 15]
                              , m = i[h - 2];
                            i[h] = ((p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3) + i[h - 7] + ((m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10) + i[h - 16]
                        }
                        p = f + ((u << 26 | u >>> 6) ^ (u << 21 | u >>> 11) ^ (u << 7 | u >>> 25)) + (u & l ^ ~u & d) + c[h] + i[h],
                        m = ((a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22)) + (a & r ^ a & o ^ r & o),
                        f = d,
                        d = l,
                        l = u,
                        u = s + p | 0,
                        s = o,
                        o = r,
                        r = a,
                        a = p + m | 0
                    }
                    n[0] = n[0] + a | 0,
                    n[1] = n[1] + r | 0,
                    n[2] = n[2] + o | 0,
                    n[3] = n[3] + s | 0,
                    n[4] = n[4] + u | 0,
                    n[5] = n[5] + l | 0,
                    n[6] = n[6] + d | 0,
                    n[7] = n[7] + f | 0
                },
                _doFinalize: function() {
                    var e = this._data
                      , t = e.words
                      , n = 8 * this._nDataBytes
                      , a = 8 * e.sigBytes;
                    t[a >>> 5] |= 128 << 24 - a % 32,
                    t[15 + (a + 64 >>> 9 << 4)] = n,
                    e.sigBytes = 4 * t.length,
                    this._process()
                }
            });
            t.SHA256 = a._createHelper(o),
            t.HmacSHA256 = a._createHmacHelper(o)
        }
        )(Math),
        function() {
            var e = n
              , t = e.enc.Utf8;
            e.algo.HMAC = e.lib.Base.extend({
                init: function(e, n) {
                    e = this._hasher = e.create(),
                    "string" == typeof n && (n = t.parse(n));
                    var a = e.blockSize
                      , r = 4 * a;
                    n.sigBytes > r && (n = e.finalize(n));
                    for (var o = this._oKey = n.clone(), s = this._iKey = n.clone(), c = o.words, i = s.words, u = 0; u < a; u++)
                        c[u] ^= 1549556828,
                        i[u] ^= 909522486;
                    o.sigBytes = s.sigBytes = r,
                    this.reset()
                },
                reset: function() {
                    var e = this._hasher;
                    e.reset(),
                    e.update(this._iKey)
                },
                update: function(e) {
                    return this._hasher.update(e),
                    this
                },
                finalize: function(e) {
                    var t = this._hasher;
                    e = t.finalize(e);
                    return t.reset(),
                    t.finalize(this._oKey.clone().concat(e))
                }
            })
        }(),
        e.exports = n
    },
    db16: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        ));
        var a = n("2b0e")
          , r = n("f8c8")
          , o = n("2241")
          , s = n("d399");
        const c = function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            this.encode = function(n) {
                var a, r, o, s, c, i, u, l = "", d = 0;
                n = t(n);
                while (d < n.length)
                    a = n.charCodeAt(d++),
                    r = n.charCodeAt(d++),
                    o = n.charCodeAt(d++),
                    s = a >> 2,
                    c = (3 & a) << 4 | r >> 4,
                    i = (15 & r) << 2 | o >> 6,
                    u = 63 & o,
                    isNaN(r) ? i = u = 64 : isNaN(o) && (u = 64),
                    l = l + e.charAt(s) + e.charAt(c) + e.charAt(i) + e.charAt(u);
                return l
            }
            ,
            this.decode = function(t) {
                var a, r, o, s, c, i, u, l = "", d = 0;
                t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (d < t.length)
                    s = e.indexOf(t.charAt(d++)),
                    c = e.indexOf(t.charAt(d++)),
                    i = e.indexOf(t.charAt(d++)),
                    u = e.indexOf(t.charAt(d++)),
                    a = s << 2 | c >> 4,
                    r = (15 & c) << 4 | i >> 2,
                    o = (3 & i) << 6 | u,
                    l += String.fromCharCode(a),
                    64 != i && (l += String.fromCharCode(r)),
                    64 != u && (l += String.fromCharCode(o));
                return l = n(l),
                l
            }
            ;
            var t = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var a = e.charCodeAt(n);
                    a < 128 ? t += String.fromCharCode(a) : a > 127 && a < 2048 ? (t += String.fromCharCode(a >> 6 | 192),
                    utfText += String.fromCharCode(63 & a | 128)) : (t += String.fromCharCode(a >> 12 | 224),
                    t += String.fromCharCode(a >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & a | 128))
                }
                return t
            }
              , n = function(e) {
                var t = ""
                  , n = 0
                  , a = 0
                  , r = 0
                  , o = 0;
                while (n < e.length)
                    a = e.charCodeAt(n),
                    a < 128 ? (t += String.fromCharCode(a),
                    n++) : a > 191 && a < 224 ? (r = e.charCodeAt(n + 1),
                    t += String.fromCharCode((31 & a) << 6 | 63 & r),
                    n += 2) : (r = e.charCodeAt(n + 1),
                    o = e.charCodeAt(n + 2),
                    t += String.fromCharCode((15 & a) << 12 | (63 & r) << 6 | 63 & o),
                    n += 3);
                return t
            }
        }
          , i = e => {
            let t = e.split("?")[1]
              , n = t ? t.split("&") : []
              , a = {};
            for (let r = 0; r < n.length; r++) {
                let e = n[r].split("=")
                  , t = e[0]
                  , o = e[1];
                a[t] = o
            }
            return a
        }
          , u = (e, t, n) => {
            sessionStorage.setItem("loginType", "wechat"),
            sessionStorage.setItem("openid", e.openid),
            "1" === e.test && alert("开始构建参数");
            let a = {
                username: e.account,
                password: e.ticketCode,
                openid: e.openid,
                sign: e.sign
            };
            Object(r["N"])(a).then(n => {
                "1" === e.test && alert("登录方法返回了结果"),
                "success" == n.data.status ? ("1" === e.test && alert("登录成功，开始获取个人信息"),
                sessionStorage.setItem("token", n.data.data.token),
                l(t, e)) : ("1" === e.test && alert("登录失败，开始打印原因"),
                o["a"].alert({
                    message: n.data.message,
                    confirmButtonColor: "#447EF2"
                }))
            }
            ).catch(t => {
                "1" === e.test && alert("登录错误"),
                console.log("微信授权登录Error:" + t),
                o["a"].alert({
                    message: "服务异常,请联系管理员。错误代码:01",
                    confirmButtonColor: "#447EF2"
                })
            }
            )
        }
          , l = (e, t) => {
            "1" === t.test && alert("开始获取用户身份"),
            Object(r["L"])({
                token: sessionStorage.getItem("token")
            }).then(n => {
                "success" == n.data.status ? ("1" === t.test && alert("获取用户身份成功"),
                sessionStorage.setItem("userInfo", JSON.stringify(n.data.data)),
                n.data.data.isAdmin ? ("1" === t.test && alert("是管理员，跳转到监控界面"),
                e({
                    path: "/watchs"
                })) : ("1" === t.test && alert("学生身份，开始跳转首页"),
                sessionStorage.setItem("showNotice", !0),
                "1" === t.test && alert("客户开启的是" + a["default"].prototype.$mode),
                "code" == a["default"].prototype.$mode ? e({
                    path: "/code"
                }) : e({
                    path: "/main/book"
                }))) : ("1" === t.test && alert("获取用户信息失败" + n.data.message),
                o["a"].alert({
                    message: n.data.message,
                    confirmButtonColor: "#447EF2"
                }))
            }
            ).catch(e => {
                "1" === t.test && alert("获取用户信息Error:" + e),
                console.log("获取用户信息Error:" + e),
                o["a"].alert({
                    message: "服务异常,请联系管理员。错误代码:02",
                    confirmButtonColor: "#447EF2"
                })
            }
            )
        }
          , d = (e, t, n) => {
            let o = i(window.location.hash);
            "1" === o.test && alert("进入了登录方法"),
            o && o.openid ? ("1" === o.test && alert("openId存在"),
            u(o, t, n)) : a["default"].prototype.$CASLOGIN ? (sessionStorage.setItem("loginType", "cas"),
            o && o.token && "" != o.token ? Object(r["j"])({
                token: o.token
            }).then(e => {
                "success" == e.data.status ? (sessionStorage.setItem("token", e.data.data.token),
                l(t, o)) : t({
                    path: "/resetLogin"
                })
            }
            ).catch(e => {
                t({
                    path: "/casing"
                })
            }
            ) : t({
                path: "/casing"
            })) : "login" == e.name ? t() : t({
                path: "/login"
            })
        }
          , f = (e, t, n, a) => {
            let o = a.hmacKey;
            Object(r["N"])(e).then(r => {
                if ("success" == r.data.status)
                    if (sessionStorage.setItem("token", r.data.data.token),
                    n) {
                        var i = new c;
                        let n = {
                            actCode: e.code,
                            libPassword: i.encode(e.password),
                            libUsername: e.username,
                            openid: e.openId,
                            school: a.id
                        };
                        localStorage.removeItem("school"),
                        h(n).then( (n, r) => {
                            if (1 == n) {
                                localStorage.setItem("school", JSON.stringify(a)),
                                localStorage.setItem("username", e.username),
                                localStorage.setItem("password", e.password);
                                let n = (new Date).getTime()
                                  , r = n + 6048e5;
                                localStorage.setItem("expiredTime", r),
                                p(t, 0, o)
                            } else
                                Object(s["a"])(r)
                        }
                        )
                    } else {
                        localStorage.setItem("school", JSON.stringify(a)),
                        localStorage.setItem("username", e.username),
                        localStorage.setItem("password", e.password);
                        let n = (new Date).getTime()
                          , r = n + 6048e5;
                        localStorage.setItem("expiredTime", r),
                        p(t, 1, o)
                    }
                else
                    Object(s["a"])("登录失败!")
            }
            )
        }
        ;
        function h(e) {
            return new Promise(t => {
                Object(r["R"])(Global.BASEURL),
                Object(r["h"])(e).then(e => {
                    let n = e.data.data.userInfo;
                    localStorage.setItem("userInfo", JSON.stringify(n)),
                    e.data.status ? t(1) : t(-1, e.data.message)
                }
                ).catch(e => {
                    t(-1, "绑定错误！")
                }
                )
            }
            )
        }
        const p = (e, t, n) => {
            Object(r["L"])({
                token: sessionStorage.getItem("token"),
                HMAC: n
            }).then(n => {
                "success" == n.data.status ? (sessionStorage.setItem("userInfo", JSON.stringify(n.data.data)),
                n.data.data.isAdmin ? (void 0).$router.push("/watchs") : "code" == a["default"].prototype.$mode ? 1 == t ? e({
                    path: "/code"
                }) : e.push({
                    path: "/code"
                }) : 1 == t ? e({
                    path: "/main/book"
                }) : e.push({
                    path: "/main/book"
                })) : (void 0).$toast(n.data.message)
            }
            ).catch(e => {
                console.log("获取用户信息Error:" + e),
                Object(s["a"])("获取用户信息失败")
            }
            )
        }
    },
    df1e: function(e, t, n) {
        "use strict";
        var a = n("bc3a")
          , r = n("2b0e")
          , o = n("3452")
          , s = n.n(o);
        const c = {
            key: "server_date_time",
            iv: "client_date_time"
        };
        var i = {
            encrypt(e, t=c.key, n=c.iv) {
                let a = s.a.enc.Utf8.parse(n)
                  , r = s.a.enc.Utf8.parse(t);
                var o = s.a.enc.Utf8.parse(e)
                  , i = s.a.AES.encrypt(o, r, {
                    iv: a,
                    mode: s.a.mode.CBC,
                    padding: s.a.pad.Pkcs7
                });
                return i.toString()
            },
            decrypt(e, t=c.key, n=c.iv) {
                let a = s.a.enc.Utf8.parse(n);
                var r = s.a.enc.Utf8.parse(t)
                  , o = s.a.AES.decrypt(e, r, {
                    iv: a,
                    mode: s.a.mode.CBC,
                    padding: s.a.pad.Pkcs7
                });
                return s.a.enc.Utf8.stringify(o).toString()
            }
        }
          , u = n("a18c")
          , l = n("2241")
          , d = n("be01");
        const f = () => {
            document.addEventListener("WeixinJSBridgeReady", (function() {
                WeixinJSBridge.call("closeWindow")
            }
            ), !1),
            WeixinJSBridge.call("closeWindow")
        }
        ;
        a["a"].defaults.timeout = 15e3,
        a["a"].defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8;application/json";
        let h = null;
        function p(e, t) {
            var n = m()
              , a = (new Date).getTime()
              , r = "seat::" + n + "::" + a + "::" + e.toUpperCase()
              , o = i.decrypt(t)
              , s = d.HmacSHA256(r, o).toString();
            return {
                id: n,
                date: a,
                requestKey: s
            }
        }
        function m() {
            for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
                e[n] = t.substr(Math.floor(16 * Math.random()), 1);
            e[14] = "4",
            e[19] = t.substr(3 & e[19] | 8, 1),
            e[8] = e[13] = e[18] = e[23] = "-";
            var a = e.join("");
            return a
        }
        a["a"].interceptors.request.use(e => {
            e.params && e.params.noloading || (h = r["default"].prototype.$toast.loading({
                message: "加载中...",
                forbidClick: !0,
                duration: 0
            }));
            let t = {};
            if (e.params && e.params.manager && Object.assign(e.headers, {
                adminKey: !0
            }),
            e.params && e.params.actCode && Object.assign(e.headers, {
                actCode: !0
            }),
            Global.HMACKEY || localStorage.getItem("school")) {
                let a = JSON.parse(localStorage.getItem("school"));
                var n = p(e.method, Global.actCode && null != a ? a.hmacKey : Global.HMACKEY);
                t = {
                    "X-request-id": n.id,
                    "X-request-date": n.date,
                    "X-hmac-request-key": n.requestKey
                }
            }
            "wechat" == sessionStorage.getItem("loginType") && (e.headers.wechatAuth = !0);
            let a = JSON.parse(sessionStorage.getItem("userInfo"));
            return a && a.isAdmin && sessionStorage.getItem("token") && Object.assign(e.headers, {
                token: sessionStorage.getItem("token")
            }),
            e.headers = {
                ...e.headers,
                loginType: "MOBILE",
                ...t
            },
            e
        }
        , e => Promise.reject(e)),
        a["a"].interceptors.response.use(e => {
            if (h.clear(),
            "12" == e.data.code) {
                let e = sessionStorage.getItem("loginType");
                switch (e) {
                case "login":
                    l["a"].alert({
                        title: "登录已过期",
                        message: "当前登录状态已过期，请重新登录~",
                        confirmButtonColor: "#447EF2"
                    }).then(e => {
                        u["a"].push({
                            path: "/login"
                        })
                    }
                    );
                    break;
                case "wechat":
                    l["a"].alert({
                        title: "登录已过期",
                        message: "当前登录状态已过期，请关闭浏览器之后重新打开",
                        confirmButtonColor: "#447EF2"
                    }).then(e => {
                        f()
                    }
                    );
                    break;
                case "cas":
                    l["a"].alert({
                        title: "登录已过期",
                        message: "当前登录状态已过期，请重新登录~",
                        confirmButtonColor: "#447EF2"
                    }).then(e => {
                        window.location.href = `${r["default"].prototype.$CASSSERVICE}/static/sso/login?redirectUrl=${encodeURIComponent(r["default"].prototype.$VUESERVICE)}`
                    }
                    );
                    break
                }
            }
            return e.data.success ? e : Promise.resolve(e)
        }
        , e => {
            if (h.clear(),
            "12" == e.response.status) {
                let e = sessionStorage.getItem("loginType");
                switch (e) {
                case "login":
                    u["a"].push({
                        path: "/login"
                    });
                    break;
                case "wechat":
                    l["a"].alert({
                        title: "登录已过期",
                        message: "当前登录状态已过期，请关闭浏览器之后重新打开",
                        confirmButtonColor: "#447EF2"
                    });
                    break;
                case "cas":
                    window.location.href = `${r["default"].prototype.$CASSSERVICE}/static/sso/loginout?redirectUrl=${encodeURIComponent(r["default"].prototype.$VUESERVICE)}`;
                    break
                }
            }n
            return Promise.reject(e)
        }
        );
        t["a"] = {
            fetchPost(e, t, n) {
                return new Promise( (r, o) => {
                    a["a"].post(e, t, n).then(e => {
                        r(e)
                    }
                    , e => {
                        o(e)
                    }
                    ).catch(e => {
                        o(e)
                    }
                    )
                }
                )
            },
            fetchGet(e, t) {
                return new Promise( (n, r) => {
                    a["a"].get(e, t).then(e => {
                        n(e)
                    }
                    , e => {
                        r(e)
                    }
                    ).catch(e => {
                        r(e)
                    }
                    )
                }
                )
            }
        }
    },
    f8c8: function(e, t, n) {
        "use strict";
        n.d(t, "R", (function() {
            return o
        }
        )),
        n.d(t, "l", (function() {
            return c
        }
        )),
        n.d(t, "m", (function() {
            return i
        }
        )),
        n.d(t, "y", (function() {
            return u
        }
        )),
        n.d(t, "N", (function() {
            return l
        }
        )),
        n.d(t, "T", (function() {
            return d
        }
        )),
        n.d(t, "f", (function() {
            return f
        }
        )),
        n.d(t, "L", (function() {
            return h
        }
        )),
        n.d(t, "u", (function() {
            return p
        }
        )),
        n.d(t, "B", (function() {
            return m
        }
        )),
        n.d(t, "o", (function() {
            return g
        }
        )),
        n.d(t, "z", (function() {
            return v
        }
        )),
        n.d(t, "M", (function() {
            return b
        }
        )),
        n.d(t, "P", (function() {
            return k
        }
        )),
        n.d(t, "v", (function() {
            return y
        }
        )),
        n.d(t, "x", (function() {
            return S
        }
        )),
        n.d(t, "n", (function() {
            return w
        }
        )),
        n.d(t, "E", (function() {
            return C
        }
        )),
        n.d(t, "O", (function() {
            return I
        }
        )),
        n.d(t, "J", (function() {
            return $
        }
        )),
        n.d(t, "t", (function() {
            return A
        }
        )),
        n.d(t, "p", (function() {
            return B
        }
        )),
        n.d(t, "Q", (function() {
            return P
        }
        )),
        n.d(t, "i", (function() {
            return _
        }
        )),
        n.d(t, "g", (function() {
            return O
        }
        )),
        n.d(t, "S", (function() {
            return E
        }
        )),
        n.d(t, "j", (function() {
            return j
        }
        )),
        n.d(t, "s", (function() {
            return x
        }
        )),
        n.d(t, "C", (function() {
            return G
        }
        )),
        n.d(t, "G", (function() {
            return T
        }
        )),
        n.d(t, "H", (function() {
            return U
        }
        )),
        n.d(t, "F", (function() {
            return M
        }
        )),
        n.d(t, "b", (function() {
            return H
        }
        )),
        n.d(t, "e", (function() {
            return D
        }
        )),
        n.d(t, "c", (function() {
            return N
        }
        )),
        n.d(t, "d", (function() {
            return L
        }
        )),
        n.d(t, "a", (function() {
            return F
        }
        )),
        n.d(t, "q", (function() {
            return J
        }
        )),
        n.d(t, "I", (function() {
            return R
        }
        )),
        n.d(t, "A", (function() {
            return z
        }
        )),
        n.d(t, "w", (function() {
            return K
        }
        )),
        n.d(t, "r", (function() {
            return q
        }
        )),
        n.d(t, "h", (function() {
            return W
        }
        )),
        n.d(t, "K", (function() {
            return V
        }
        )),
        n.d(t, "D", (function() {
            return Y
        }
        )),
        n.d(t, "k", (function() {
            return X
        }
        )),
        n.d(t, "U", (function() {
            return Q
        }
        ));
        var a = n("df1e");
        let r = Global.BASEURL;
        function o(e) {
            r = e
        }
        function s() {
            let e = JSON.parse(localStorage.getItem("school"));
            return e ? e.libseatUrl : r
        }
        function c(e) {
            return a["a"].fetchGet(s() + "/cap/checkCaptcha", {
                params: e
            })
        }
        function i(e) {
            return a["a"].fetchGet(s() + "/rest/v2/checkInByQr/" + e.id, {
                params: e
            })
        }
        function u() {
            return a["a"].fetchGet(s() + "/rest/v2/announce")
        }
        function l(e) {
            return a["a"].fetchGet(s() + "/rest/auth", {
                params: e
            })
        }
        function d(e) {
            return a["a"].fetchGet(s() + "/rest/v2/unbindUserByUsername?token=" + e)
        }
        function f(e) {
            return a["a"].fetchGet(s() + "/rest/v2/awayReservationBySeat/" + e.seatId, {
                params: e
            })
        }
        function h(e) {
            return a["a"].fetchGet(s() + "/rest/v2/user", {
                params: e
            })
        }
        function p(e) {
            return a["a"].fetchGet(s() + "/rest/v2/free/filters", {
                params: e
            })
        }
        function m(e) {
            return a["a"].fetchGet(s() + `/rest/v2/room/stats2/${e.buildingId}/${e.date}`, {
                params: e
            })
        }
        function g() {
            return a["a"].fetchGet(s() + "/auth/createCaptcha")
        }
        function v(e) {
            return a["a"].fetchGet(s() + `/rest/v2/history/${e.page}/${e.pageSize}`, {
                params: e
            })
        }
        function b(e) {
            return a["a"].fetchGet(s() + "/rest/v2/violations", {
                params: e
            })
        }
        function k(e) {
            return a["a"].fetchGet(s() + "/rest/v2/user/reservations", {
                params: e
            })
        }
        function y(e) {
            return a["a"].fetchGet(s() + `/rest/v2/searchSeats/${e.date}/${e.begin}/${e.end}`, {
                params: e
            })
        }
        function S(e) {
            return a["a"].fetchGet(s() + `/rest/v2/room/layoutByDate/${e.id}/${e.date}`, {
                params: e
            })
        }
        function w(e) {
            return a["a"].fetchGet(s() + "/rest/v2/timeExtend/" + e.id, {
                params: e
            })
        }
        function C(e) {
            return a["a"].fetchPost(s() + `/cap/captcha/${e.token}?username=${e.username}`)
        }
        function I(e) {
            return a["a"].fetchPost(s() + `/rest/v2/extend/?token=${e.token}&endTime=${e.endTime}`, {
                params: e
            })
        }
        function $(e) {
            return a["a"].fetchGet(s() + `/rest/v2/startTimesForSeat/${e.seatId}/${e.date}`, {
                params: e
            })
        }
        function A(e) {
            return a["a"].fetchGet(s() + `/rest/v2/endTimesForSeat/${e.seatId}/${e.date}/${e.start}`, {
                params: e
            })
        }
        function B(e) {
            return a["a"].fetchPost(s() + "/rest/v2/freeBook", e)
        }
        function P(e) {
            return a["a"].fetchPost(s() + "/rest/v2/setActivationCode?token=" + e.token, e)
        }
        function _(e) {
            return a["a"].fetchGet(s() + "/rest/v2/cancel/" + e.id, {
                params: e
            })
        }
        function O(e) {
            return a["a"].fetchGet(s() + "/rest/v2/leave/" + e.id, {
                params: e
            })
        }
        function E(e) {
            return a["a"].fetchGet(s() + "/rest/v2/stop//" + e.id, {
                params: e
            })
        }
        function j(e) {
            return a["a"].fetchPost(s() + "/rest/ssoAuth?token=" + e.token, e)
        }
        function x() {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/getBuildings", {
                watch: !0
            })
        }
        function G(e) {
            return Object.assign(e, {
                watch: !0
            }),
            a["a"].fetchPost(s() + "/rest/v2/monitor/getRooms", e)
        }
        function T(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/getSeatsForMonitor/" + e, {
                watch: !0
            })
        }
        function U(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/getSeatsStatus/" + e, {
                watch: !0
            })
        }
        function M(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/getSeatReservations/" + e, {
                watch: !0
            })
        }
        function H(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/adminForceStop/" + e, {
                watch: !0
            })
        }
        function D(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/awayAdminStart/" + e, {
                watch: !0
            })
        }
        function N(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/awayAdminCancel/" + e, {
                watch: !0
            })
        }
        function L(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/awayAdminCollect/" + e, {
                watch: !0
            })
        }
        function F(e) {
            return a["a"].fetchPost(s() + "/rest/v2/monitor/adminForceAway/" + e, {
                watch: !0
            })
        }
        function J(e) {
            return a["a"].fetchPost(s() + `/rest/v2/timeAllowedForSeat/${e.seatId}/${e.date}?token=` + sessionStorage.getItem("token"), {
                watch: !0
            })
        }
        function R() {
            return a["a"].fetchPost(s() + "/rest/v2/settings", {
                watch: !0
            })
        }
        function z() {
            return a["a"].fetchPost(s() + "/rest/v2/qrSignJy?token=" + sessionStorage.getItem("token"), {
                watch: !0
            })
        }
        function K() {
            var e = window.location.href.split("#")[0]
              , t = Global.corpId
              , n = `/rest/v2/remoteJsSdkInfo?token=${sessionStorage.getItem("token")}&url=${e}`;
            return n += "" != t ? "&corpType=" + t : "",
            a["a"].fetchPost(s() + n, {
                watch: !0
            })
        }
        const q = e => a["a"].fetchPost(s() + `/rest/v2/room/floors/${e}?token=${sessionStorage.getItem("token")}`, {})
          , W = e => a["a"].fetchPost(s() + "/static/wechat/api/operate/actCodeBind", e)
          , V = e => a["a"].fetchGet(s() + "/static/wechat/api/getUserByCode?openId=" + e.openId, {})
          , Y = () => a["a"].fetchGet(s() + "/static/wechat/api/getProvinceAndSchool", {
            actCode: !0
        })
          , X = e => a["a"].fetchPost(s() + "/rest/v2/checkActivationCode/" + e.code, {})
          , Q = e => a["a"].fetchGet(s() + "/static/wechat/api/operate/libseatUserUnbind?id=" + e, {})
    }
});
