! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(r, i, a) {
        for (var c, s, u, l = 0, f = []; l < r.length; l++) s = r[l], o[s] && f.push(o[s][0]), o[s] = 0;
        for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
        for (n && n(r, i, a); f.length;) f.shift()();
        if (a)
            for (l = 0; l < a.length; l++) u = t(t.s = a[l]);
        return u
    };
    var r = {},
        o = {
            4: 0
        };
    t.e = function(e) {
        function n() {
            c.onerror = c.onload = null, clearTimeout(s);
            var t = o[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0)
        }
        var r = o[e];
        if (0 === r) return new Promise(function(e) {
            e()
        });
        if (r) return r[2];
        var i = new Promise(function(t, n) {
            r = o[e] = [t, n]
        });
        r[2] = i;
        var a = document.getElementsByTagName("head")[0],
            c = document.createElement("script");
        c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, t.nc && c.setAttribute("nonce", t.nc), c.src = t.p + "" + e + "/" + ({
            0: "content-script",
            1: "background",
            2: "popup",
            3: "options"
        } [e] || e) + ".js";
        var s = setTimeout(n, 12e4);
        return c.onerror = c.onload = n, a.appendChild(c), i
    }, t.m = e, t.c = r, t.i = function(e) {
        return e
    }, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "./", t.oe = function(e) {
        throw e
    }, t(t.s = 174)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "BrFeatures", function() {
            return a
        }), n.d(t, "UrlUtils", function() {
            return c
        }), n.d(t, "BGUtils", function() {
            return s
        }), n.d(t, "Utils", function() {
            return u
        }), n.d(t, "i18n", function() {
            return f
        }), n.d(t, "SAVIOR_VERSION", function() {
            return l
        });
        var r = n(10),
            o = n(16),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    var n = e[0] - t[0];
                    return 0 !== n ? n : 0 !== (n = e[1] - t[1]) ? n : 0 !== (n = e[2] - t[2]) ? n : n = e[3] - t[3]
                }
                var t = {
                        mp4: !0,
                        m4a: !0
                    },
                    n = 0,
                    r = 0,
                    o = 0,
                    i = 0,
                    a = navigator.userAgent.match(/Chrome\/([\d.]+)/);
                return a && a[1] && (a = a[1].split("."), a = [+a[0], +a[1], +a[2], +a[3]], e(a, [39, 0, 2171, 103]) >= 0 && (t.webm = !0), (e(a, [55, 4, 2883, 114]) >= 1 || 50 === a[0] && e(a, [50, 3, 2661, 150]) >= 1) && (n = 1), (e(a, [55, 4, 2883, 114]) >= 1 || 50 === a[0] && e(a, [50, 3, 2661, 150]) >= 1) && (r = 1), e(a, [55, 4, 2883, 126]) >= 1 && (o = 1), e(a, [60, 4, 3112, 120]) >= 1 && (i = 1)), {
                    YT: t,
                    M3U8: 0,
                    SOUND_ONLY: n,
                    SUBTITLES: r,
                    PLAY_NOW_BOTTOM_TOOLTIP: o,
                    IS_ADS_PIP_PARAMS: i
                }
            }(),
            c = function() {
                function e(e) {
                    return e && 0 !== e.indexOf("data:image") ? i.exec(e) : []
                }
                var t = document.createElement("a"),
                    n = /([^\/]+)$/i,
                    o = /\.([^\/.]*)$/i,
                    i = {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }.strict,
                    a = e(document.location.href);
                return {
                    parse: function(e, r) {
                        var i = t;
                        i.setAttribute("href", e);
                        var a = (i.pathname.match(n) || [])[1] || "",
                            c = a.split(".").map(function(e) {
                                return e.toLowerCase()
                            });
                        a = decodeURIComponent(a.replace(o, "")), c.shift();
                        var s = c[c.length - 1] || "",
                            u = {
                                url: e,
                                protocol: i.protocol,
                                host: i.host,
                                port: i.port,
                                pathname: i.pathname,
                                filename: a,
                                ext: s,
                                exts: c,
                                hash: i.hash,
                                search: i.search
                            };
                        return u.port || delete u.port, r && (u.query = {}, i.search.replace(/^\?/, "").split(/&/).forEach(function(e) {
                            e = e.split("="), u.query[e[0]] = e[1]
                        })), u
                    },
                    parseParamString: function(e) {
                        e = e.replace(/^[#?]{1}/, "");
                        var t = e.split("&"),
                            n = {};
                        return t.forEach(function(e) {
                            var t = e.split("=");
                            u.defined(t[0]) && u.defined(t[1]) && (n[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " ")))
                        }), n
                    },
                    format: function(e) {
                        if (e = Object.create(e), e.query) {
                            e.search = [];
                            for (var n in e.query) void 0 !== e.query[n] ? e.search.push(n + "=" + encodeURIComponent(e.query[n])) : e.search.push(n);
                            e.search = "?" + e.search.join("&"), delete e.query
                        }
                        for (var r in e) t[r] = e[r];
                        return t.href
                    },
                    parse0: e,
                    resolve: function(t, n) {
                        t = e(t), n || (n = a);
                        var r = t[1],
                            o = t[2],
                            i = t[9],
                            c = t[12],
                            s = t[13];
                        if (!r && (r = n[1], !o))
                            if (o = n[2], i) {
                                if ("/" !== i.charAt(0)) {
                                    var u = n[10] || "/";
                                    i = u + i
                                }
                            } else i = n[9], c || (c = n[12]);
                        var l = r + "://" + o + i;
                        return c && (l += "?" + c), s && (l += "#" + s), l
                    },
                    getHost: function(t) {
                        return e(t)[6] || ""
                    },
                    getMediaType: function(t) {
                        var n = e(t)[11] || "";
                        if (!n) return "";
                        t.includes("googlevideo.com/videoplayback") && "videoplayback" === n && t.includes("mp4") && (n = "video.mp4"), t.includes("videoplayback") && "videoplayback" === n && t.includes("mp4") && (n = "video.mp4");
                        var o = n.split("."),
                            i = o.length - 1;
                        if (i <= 0) return "";
                        var a = o[i].toLowerCase();
                        return r.a.get(a)
                    }
                }
            }(),
            s = {
                sendMessage: function(e, t) {
                    try {
                        chrome.runtime.sendMessage(e, t)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
            },
            u = {
                SIZES: ["B", "KB", "MB", "GB", "TB", "PB"],
                _BASE: -1 !== navigator.appVersion.indexOf("Win") ? 1024 : 1e3,
                xmlParser: new DOMParser,
                endsWith: function(e, t) {
                    var n = e.length - t.length;
                    return n >= 0 && e.indexOf(t, n) === n
                },
                hash: function(e, t) {
                    if (t |= 0, 0 === e.length) return t;
                    var n = void 0,
                        r = void 0;
                    for (n = 0, r = e.length; n < r; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                    return t
                },
                query: function(e, t) {
                    return t = t || document, t.querySelector(e)
                },
                queryAll: function(e, t) {
                    return t = t || document, u.toArray(t.querySelectorAll(e))
                },
                findParent: function(e, t) {
                    for (; null !== e && !e.classList.contains(t);) e = e.parentNode;
                    return e
                },
                nearestParent: function(e, t) {
                    for (var n = e; null !== n && n !== document && !n.matches(t);) n = n.parentNode;
                    return document === n ? null : n
                },
                closest: function(e, t) {
                    return e.matches(t) ? [e] : u.queryAll(t, e)
                },
                getNodePropOrEmptyString: function(e, t) {
                    return e && e[t] || ""
                },
                toArray: function(e) {
                    return Array.prototype.slice.call(e)
                },
                unique: function(e) {
                    var t = [];
                    return Array.isArray(e) ? (e.forEach(function(e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), t) : e
                },
                extend: function(e, t) {
                    var n = function() {};
                    n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t, t._super = e.prototype
                },
                extendObject: function(e) {
                    return Array.prototype.forEach.call(Array.prototype.slice.call(arguments, 1), function(t) {
                        if (t)
                            for (var n in t) e[n] = t[n]
                    }), e
                },
                isMatches: function(e, t) {
                    var n = void 0,
                        r = void 0,
                        o = void 0;
                    if (Array.isArray(e)) {
                        for (n = 0; n < e.length; ++n)
                            if (u.isMatches(e[n], t)) return !0;
                        return !1
                    }
                    for (t = Array.isArray(t) ? t : [t], n = 0, r = t.length, o; n < r; ++n)
                        if ("string" == typeof(o = t[n]) && -1 !== e.indexOf(o) || o instanceof RegExp && e.match(o)) return !0;
                    return !1
                },
                _sendBackgroundRequest: function(e, t, n, r) {
                    return new Promise(function(o, i) {
                        chrome.runtime.sendMessage({
                            requestType: "make_http_request",
                            method: e,
                            url: t,
                            params: n,
                            headers: r
                        }, function(e) {
                            e && "resolve" === e.success ? o(e.data) : i(e.data)
                        })
                    })
                },
                getYoutubeInfo: function(e) {
                    return new Promise(function(t, n) {
                        chrome.runtime.sendMessage({
                            requestType: "youtube_get_info",
                            method: "GET",
                            url: e
                        }, function(e) {
                            e.success ? t(e.data) : n(e.data)
                        })
                    })
                },
                send: function(e, t, n, r) {
                    return u.IS_CONTENT_SCRIPT ? u._sendBackgroundRequest(e, t, n, r) : new Promise(function(o, a) {
                        var c = null;
                        try {
                            var s = new XMLHttpRequest;
                            if (s.open(e, t, !0), s.setRequestHeader("Cache-Control", "no-cache"), "object" === (void 0 === n ? "undefined" : i(n)) && (c = Object.keys(n).map(function(e) {
                                    return e + "=" + n[e]
                                }).join("&")), "object" === (void 0 === r ? "undefined" : i(r)))
                                for (var u in r) s.setRequestHeader(u, r[u]);
                            "POST" === e && (s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), c && s.setRequestHeader("Content-Length", c.length)), s.onload = function() {
                                o(this.responseText)
                            }, s.onerror = function() {
                                a()
                            }, s.send(c)
                        } catch (e) {
                            a()
                        }
                    })
                },
                get: function(e, t) {
                    return u.send("GET", e, {}, t)
                },
                post: function(e, t, n) {
                    return u.send("POST", e, t, n)
                },
                _getSize: function(e) {
                    var t = null,
                        n = new XMLHttpRequest;
                    return e = this.addProtocol(e), new Promise(function(r, o) {
                        function i(e) {
                            e ? r(e) : o(e), n.abort(), clearTimeout(t), t = null
                        }
                        n.open("GET", e), n.setRequestHeader("Cache-Control", "no-cache"), n.url = e, n.onreadystatechange = function() {
                            if (!(this.readyState < 2)) {
                                var e = null;
                                try {
                                    e = +this.getResponseHeader("Content-Length"), Number.isNaN(e) && (e = null)
                                } catch (e) {}
                                null === e && 200 !== this.status || (200 !== this.status && (e = null), i(e))
                            }
                        }, n.send(null), t = setTimeout(i, 1e4)
                    })
                },
                getSize: function(e) {
                    return new Promise(function(t, n) {
                        window.cache.get(e).then(function(n) {
                            if (!n) return Promise.reject();
                            t(n), window.cache.put(e, n)
                        }).catch(function() {
                            u._getSize(e).then(function(n) {
                                window.cache.put(e, n), t(n)
                            }).catch(function() {
                                n(null)
                            })
                        })
                    })
                },
                beautifyFileSize: function(e, t) {
                    if (null === e || void 0 === e) return "???";
                    var n = u._BASE,
                        r = void 0;
                    for (r = 0; r < u.SIZES.length && e >= n; ++r) e /= n;
                    var o = u.SIZES[r],
                        i = Math.round(10 * e) / 10;
                    return t && o && "kb" === o.toLowerCase() && (i = i.toFixed(0)), i + u.SIZES[r]
                },
                detectMediaTypeAndExt: function(e, t) {
                    if (t = t || "", -1 !== ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl", "audio/mpegurl"].indexOf(t)) return e.type = "video", e.ext = "m3u8", e;
                    var n = u.getMediaType(t, e.exts);
                    return n && r.b[n] && (e.type = n, e.ext = this._findIntersection(e.exts, r.b[n].extensions) || u.extByContentType(t, n) || e.ext), e
                },
                getMediaType: function(e, t) {
                    var n = void 0;
                    for (var o in r.b) {
                        if (n = r.b[o], e && e.match(n.rgxp)) return o;
                        if (Array.isArray(t) && u._findIntersection(t, n.extensions) || -1 !== n.extensions.indexOf(t)) return o
                    }
                    return null
                },
                _findIntersection: function(e, t) {
                    for (var n = e.concat(t), r = {}, o = 0; o < n.length; ++o) {
                        var i = n[o];
                        if (r[i]) return i;
                        r[i] = !0
                    }
                    return null
                },
                extByContentType: function(e, t) {
                    var n = r.b[t].ctype2extension;
                    for (var o in n)
                        if (-1 !== e.indexOf(o)) return n[o];
                    return null
                },
                getProp: function(e, t) {
                    function n(e, t) {
                        var r = t.shift();
                        if (r && ("object" === (void 0 === e ? "undefined" : i(e)) || "function" == typeof e) && null !== e) return 0 === t.length ? e[r] : n(e[r], t)
                    }
                    return n(e, t.split("."))
                },
                call: function(e, t) {
                    if (e && !(e.length <= 0))
                        for (var n = [].slice.call(arguments, 2), r = 0; r < e.length; r++) e[r].apply(t, n)
                },
                isTrue: function(e) {
                    return !!e
                },
                noop: function() {},
                defined: function(e) {
                    return void 0 !== e
                },
                notNull: function(e) {
                    return null !== e
                },
                debounce: function(e, t, n) {
                    var r = void 0;
                    return function() {
                        function o() {
                            n || e.apply(i, a), r = null
                        }
                        var i = this,
                            a = arguments;
                        r ? clearTimeout(r) : n && e.apply(i, a), r = setTimeout(o, t || 100)
                    }
                },
                unescapeHTML: function() {
                    var e = void 0;
                    return function(t) {
                        e = e || document.createElement("div"), e.innerHTML = ("" + t).replace(/</g, "&lt;");
                        var n = e.firstChild.textContent;
                        return e.innerHTML = "", n
                    }
                }(),
                replaceEntities: function(e) {
                    var t = {
                        "&amp;": "&"
                    };
                    return String(e).replace(/&amp;/g, function(e) {
                        return t[e]
                    })
                },
                isFullscreen: function() {
                    return Boolean(document.fullscreenElement || document.webkitFullscreenElement)
                },
                splitMediaSourcesByTitle: function(e) {
                    var t = new Map;
                    return e.forEach(function(e) {
                        var n = e.title || e.filename;
                        t.has(n) ? t.set(n, t.get(n).concat(e)) : t.set(n, [e])
                    }), t
                },
                flatten: function(e, t) {
                    var n = Object.prototype.toString,
                        r = [],
                        o = t && e || e.slice(),
                        i = void 0;
                    if (!e.length) return r;
                    i = o.pop();
                    do {
                        "[object Array]" === n.call(i) ? o.push.apply(o, i) : r.push(i)
                    } while (o.length && void 0 !== (i = o.pop()));
                    return r.reverse(), r
                },
                addProtocol: function(e, t) {
                    return e ? (void 0 === t && (t = "http"), "//" === e.slice(0, 2) ? t + ":" + e : e) : e
                },
                isDescendant: function(e, t) {
                    for (t = t.parentNode; t && t !== e;) t = t.parentNode;
                    return !!t
                },
                makeId: function(e) {
                    var t = e.url,
                        n = e.quality,
                        r = !!e.soundOnly;
                    return e = "object" === (void 0 === t ? "undefined" : i(t)) ? t.videoUrl + "\n" + t.audioUrl : t + (r ? "mp3_" + n : ""), u.hash(e).toString()
                },
                xpath: function() {
                    function e(e) {
                        return e && e.id && !/\d/.test(e.id) ? "//" + e.tagName + '[@id="' + e.id + '"]' : t(e)
                    }

                    function t(e) {
                        for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                            var n = 0,
                                r = !1,
                                o = void 0;
                            for (o = e.previousSibling; o; o = o.previousSibling) o.nodeType != Node.DOCUMENT_TYPE_NODE && o.nodeName == e.nodeName && ++n;
                            for (o = e.nextSibling; o && !r; o = o.nextSibling) o.nodeName == e.nodeName && (r = !0);
                            var i = (e.prefix ? e.prefix + ":" : "") + e.localName,
                                a = n || r ? "[" + (n + 1) + "]" : "";
                            t.splice(0, 0, i + a)
                        }
                        return t.length ? "/" + t.join("/") : null
                    }

                    function n(e, t) {
                        return t = t || document, document.evaluate(e, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
                    }
                    return {
                        forElement: e,
                        find: n
                    }
                }(),
                dom: function() {
                    function e(e, t) {
                        return Object.keys(t).forEach(function(n) {
                            e.setAttribute(n, t[n])
                        }), e
                    }

                    function t(e, t) {
                        return Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n]
                        }), e
                    }

                    function n(e) {
                        var t = document.createElement("div"),
                            n = document.createDocumentFragment();
                        return t.innerHTML = e, [].slice.call(t.childNodes).forEach(n.appendChild, n), t = null, n
                    }

                    function r(e) {
                        if (!(e instanceof HTMLElement)) return {
                            width: 0,
                            height: 0
                        };
                        e.matches("embed") && e.parentNode.matches("object") && (e = e.parentNode);
                        var t = e.querySelector("embed");
                        return t && !o.a.check(t) && t.offsetWidth && t.offsetHeight && (e = t), {
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }
                    }

                    function i(e) {
                        return e.split(";").reduce(function(e, t) {
                            var n = t.indexOf(":");
                            if (-1 !== n) {
                                var r = t.substr(0, n).trim(),
                                    o = t.substr(n + 1).trim();
                                e[r] = o
                            }
                            return e
                        }, {})
                    }

                    function a(e) {
                        return Object.keys(e).map(function(t) {
                            return t + ": " + e[t]
                        }).join("; ") + ";"
                    }

                    function c(e) {
                        for (var t = {
                                top: 0,
                                left: 0,
                                height: e.offsetHeight,
                                width: e.offsetWidth
                            }; e;) t.left += e.offsetLeft, t.top += e.offsetTop, e = e.offsetParent;
                        return t
                    }
                    return {
                        attr: function(t, n) {
                            Array.isArray(t) ? t.forEach(function(t) {
                                e(t, n)
                            }) : e(t, n)
                        },
                        style: function(e, n) {
                            Array.isArray(e) ? e.forEach(function(e) {
                                t(e, n)
                            }) : t(e, n)
                        },
                        setStyleAttr: function(e, t) {
                            var n = function(e) {
                                var n = e.getAttribute("style") || "",
                                    r = i(n);
                                for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
                                var c = a(r);
                                n !== c && e.setAttribute("style", c)
                            };
                            Array.isArray(e) ? e.forEach(n) : n(e)
                        },
                        parseStyleAttr: i,
                        parseHTML: n,
                        getOffset: c,
                        getEmbedSize: r
                    }
                }(),
                g: function() {
                    var e = new RegExp("^(www\\.)?google\\.((com|ac|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cc|cd|cf|cat|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|ee|fi|dm|dz|es|fm|fr|ga|ge|gf|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ir|iq|ie|im|io|is|it|je|ki|kg|jo|kz|la|lt|lu|lv|li|lk|md|me|mg|mk|ml|mn|ms|mu|mv|mw|nl|no|nr|nu|pl|ne|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sn|sm|so|tk|tl|tm|to|tn|st|sk|tt|td|vu|ws|vg|tg|us)|(co((\\.(th|id|il|in|jp|ke|ma|kr|mz|ls|nz|tz|ug|uk|uz|ve|vi|za|zm|zw|ao|ck|bw|cr))|m\\.(pr|py|qa|sa|sb|sg|sl|sv|tj|tn|tr|tw|gh|gi|gt|hk|jm|kw|lb|lc|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|ph|pk|pg|ua|uy|vc|vn|af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|kh|co|cu|cy|do|ec|eg|et|fj))))$", "i"),
                        t = /[&?]q=[^&]/i;
                    return {
                        isSERPHost: function(t) {
                            return Boolean(t.match(e))
                        },
                        isSERPRequest: function(e) {
                            var n = c.parse(e);
                            return Boolean(this.isSERPHost(n.host) && n.pathname.match(/\/s(earch)?/i) && n.search.match(t))
                        },
                        getSearchParams: function(e) {
                            var t = c.parse(e),
                                n = c.parseParamString(t.search),
                                r = c.parseParamString(t.hash || "#"),
                                o = u.defined(r.q);
                            return {
                                _rawSearch: n,
                                _rawHash: r,
                                q: o ? r.q : n.q || null,
                                s: o ? r.start || 0 : n.start || 0,
                                tbm: o ? r.tbm : n.tbm || null,
                                isXHR: n.tch,
                                isHash: o
                            }
                        }
                    }
                }()
            };
        try {
            chrome.extension.getBackgroundPage(), u.IS_CONTENT_SCRIPT = !1
        } catch (e) {
            u.IS_CONTENT_SCRIPT = !0
        }
        try {
            u.IS_INCOGNITO = chrome.extension.inIncognitoContext
        } catch (e) {
            u.IS_INCOGNITO = !1
        }
        var l = window.SAVIOR_VERSION || "dev",
            f = void 0;
        try {
            f = chrome.i18n.getMessage
        } catch (e) {}
    },
    10: function(e, t, n) {
        "use strict";

        function r(e) {
            return -1 !== ["m3u8", "m3u"].indexOf(e)
        }
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "f", function() {
            return i
        });
        var o = {
                audio: {
                    title: "Audio",
                    rgxp: /audio/i,
                    extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
                    extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
                    ctype2extension: {
                        midi: "mid",
                        mp4: "m4a",
                        m4a: "m4a",
                        mpeg: "mp3",
                        mpeg3: "mp3",
                        wav: "wav",
                        aiff: "aif",
                        opus: "opus"
                    }
                },
                video: {
                    title: "Video",
                    rgxp: /video/i,
                    extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "yt_srt"],
                    extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "yt_srt"],
                    ctype2extension: {
                        mpeg: "mp4",
                        mp4: "mp4",
                        m4v: "mp4",
                        "3gpp": "3gp",
                        flv: "flv",
                        quicktime: "mov",
                        msvideo: "avi",
                        "ms-wmv": "wmv",
                        "ms-asf": "asf"
                    }
                },
                subtitles: {
                    title: "Subtitles",
                    rgxp: /subtitles/i,
                    extensions: ["yt_srt"],
                    extensions_weight: ["yt_srt"]
                }
            },
            i = ["video", "audio", "subtitles"],
            a = function() {
                var e = new Map;
                return Object.keys(o).forEach(function(t) {
                    for (var n = o[t].extensions, r = 0; r < n.length; r++) e.set(n[r], t)
                }), e
            }(),
            c = [/^(.+\.)?youtube.com/i, /^(?:(?!news).+\.)?zing\.vn/i, /^(.+\.)?nhaccuatui.com/i, /^(.+\.)?vimeo.com/i, /^(.+\.)?clip.vn/i, /vietgiaitri\.com/i, /^(.+\.)?soundcloud\.com/i, /^(.+\.)?kenh14\.vn/i, /^(.+\.)?xvideos\.com/i, /^(.+\.)?xnxx\.com/i],
            s = [/^(.+\.)?nixcdn\.com/im, /^(.+\.)?vcmedia\.vn/i, /^(.+\.)?kenhhd\.tv/i]
    },
    13: function(e, t, n) {
        var r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(n, c) {
            "object" === a(t) && t && "string" != typeof t.nodeName ? c(t) : (o = [t], r = c, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i))
        }(0, function(e) {
            function t(e) {
                return "function" == typeof e
            }

            function n(e) {
                return v(e) ? "array" : void 0 === e ? "undefined" : a(e)
            }

            function r(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function o(e, t) {
                return null != e && "object" === (void 0 === e ? "undefined" : a(e)) && t in e
            }

            function i(e, t) {
                return g.call(e, t)
            }

            function c(e) {
                return !i(y, e)
            }

            function s(e) {
                return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                    return b[e]
                })
            }

            function u(t, n) {
                function o(e) {
                    if ("string" == typeof e && (e = e.split(x, 2)), !v(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                    i = new RegExp(r(e[0]) + "\\s*"), a = new RegExp("\\s*" + r(e[1])), s = new RegExp("\\s*" + r("}" + e[1]))
                }
                if (!t) return [];
                var i, a, s, u = [],
                    p = [],
                    m = [],
                    h = !1,
                    g = !1;
                o(n || e.tags);
                for (var y, b, E, T, O, A, P = new d(t); !P.eos();) {
                    if (y = P.pos, E = P.scanUntil(i))
                        for (var R = 0, j = E.length; R < j; ++R) T = E.charAt(R), c(T) ? m.push(p.length) : g = !0, p.push(["text", T, y, y + 1]), y += 1, "\n" === T && function() {
                            if (h && !g)
                                for (; m.length;) delete p[m.pop()];
                            else m = [];
                            h = !1, g = !1
                        }();
                    if (!P.scan(i)) break;
                    if (h = !0, b = P.scan(S) || "name", P.scan(w), "=" === b ? (E = P.scanUntil(k), P.scan(k), P.scanUntil(a)) : "{" === b ? (E = P.scanUntil(s), P.scan(_), P.scanUntil(a), b = "&") : E = P.scanUntil(a), !P.scan(a)) throw new Error("Unclosed tag at " + P.pos);
                    if (O = [b, E, y, P.pos], p.push(O), "#" === b || "^" === b) u.push(O);
                    else if ("/" === b) {
                        if (!(A = u.pop())) throw new Error('Unopened section "' + E + '" at ' + y);
                        if (A[1] !== E) throw new Error('Unclosed section "' + A[1] + '" at ' + y)
                    } else "name" === b || "{" === b || "&" === b ? g = !0 : "=" === b && o(E)
                }
                if (A = u.pop()) throw new Error('Unclosed section "' + A[1] + '" at ' + P.pos);
                return f(l(p))
            }

            function l(e) {
                for (var t, n, r = [], o = 0, i = e.length; o < i; ++o)(t = e[o]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
                return r
            }

            function f(e) {
                for (var t, n, r = [], o = r, i = [], a = 0, c = e.length; a < c; ++a) switch (t = e[a], t[0]) {
                    case "#":
                    case "^":
                        o.push(t), i.push(t), o = t[4] = [];
                        break;
                    case "/":
                        n = i.pop(), n[5] = t[2], o = i.length > 0 ? i[i.length - 1][4] : r;
                        break;
                    default:
                        o.push(t)
                }
                return r
            }

            function d(e) {
                this.string = e, this.tail = e, this.pos = 0
            }

            function p(e, t) {
                this.view = e, this.cache = {
                    ".": this.view
                }, this.parent = t
            }

            function m() {
                this.cache = {}
            }
            var h = Object.prototype.toString,
                v = Array.isArray || function(e) {
                    return "[object Array]" === h.call(e)
                },
                g = RegExp.prototype.test,
                y = /\S/,
                b = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                w = /\s*/,
                x = /\s+/,
                k = /\s*=/,
                _ = /\s*\}/,
                S = /#|\^|\/|>|\{|&|=|!/;
            d.prototype.eos = function() {
                return "" === this.tail
            }, d.prototype.scan = function(e) {
                var t = this.tail.match(e);
                if (!t || 0 !== t.index) return "";
                var n = t[0];
                return this.tail = this.tail.substring(n.length), this.pos += n.length, n
            }, d.prototype.scanUntil = function(e) {
                var t, n = this.tail.search(e);
                switch (n) {
                    case -1:
                        t = this.tail, this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
                }
                return this.pos += t.length, t
            }, p.prototype.push = function(e) {
                return new p(e, this)
            }, p.prototype.lookup = function(e) {
                var n, r = this.cache;
                if (r.hasOwnProperty(e)) n = r[e];
                else {
                    for (var i, a, c = this, s = !1; c;) {
                        if (e.indexOf(".") > 0)
                            for (n = c.view, i = e.split("."), a = 0; null != n && a < i.length;) a === i.length - 1 && (s = o(n, i[a])), n = n[i[a++]];
                        else n = c.view[e], s = o(c.view, e);
                        if (s) break;
                        c = c.parent
                    }
                    r[e] = n
                }
                return t(n) && (n = n.call(this.view)), n
            }, m.prototype.clearCache = function() {
                this.cache = {}
            }, m.prototype.parse = function(e, t) {
                var n = this.cache,
                    r = n[e];
                return null == r && (r = n[e] = u(e, t)), r
            }, m.prototype.render = function(e, t, n) {
                var r = this.parse(e),
                    o = t instanceof p ? t : new p(t);
                return this.renderTokens(r, o, n, e)
            }, m.prototype.renderTokens = function(e, t, n, r) {
                for (var o, i, a, c = "", s = 0, u = e.length; s < u; ++s) a = void 0, o = e[s], i = o[0], "#" === i ? a = this.renderSection(o, t, n, r) : "^" === i ? a = this.renderInverted(o, t, n, r) : ">" === i ? a = this.renderPartial(o, t, n, r) : "&" === i ? a = this.unescapedValue(o, t) : "name" === i ? a = this.escapedValue(o, t) : "text" === i && (a = this.rawValue(o)), void 0 !== a && (c += a);
                return c
            }, m.prototype.renderSection = function(e, n, r, o) {
                function i(e) {
                    return c.render(e, n, r)
                }
                var c = this,
                    s = "",
                    u = n.lookup(e[1]);
                if (u) {
                    if (v(u))
                        for (var l = 0, f = u.length; l < f; ++l) s += this.renderTokens(e[4], n.push(u[l]), r, o);
                    else if ("object" === (void 0 === u ? "undefined" : a(u)) || "string" == typeof u || "number" == typeof u) s += this.renderTokens(e[4], n.push(u), r, o);
                    else if (t(u)) {
                        if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                        u = u.call(n.view, o.slice(e[3], e[5]), i), null != u && (s += u)
                    } else s += this.renderTokens(e[4], n, r, o);
                    return s
                }
            }, m.prototype.renderInverted = function(e, t, n, r) {
                var o = t.lookup(e[1]);
                if (!o || v(o) && 0 === o.length) return this.renderTokens(e[4], t, n, r)
            }, m.prototype.renderPartial = function(e, n, r) {
                if (r) {
                    var o = t(r) ? r(e[1]) : r[e[1]];
                    return null != o ? this.renderTokens(this.parse(o), n, r, o) : void 0
                }
            }, m.prototype.unescapedValue = function(e, t) {
                var n = t.lookup(e[1]);
                if (null != n) return n
            }, m.prototype.escapedValue = function(t, n) {
                var r = n.lookup(t[1]);
                if (null != r) return e.escape(r)
            }, m.prototype.rawValue = function(e) {
                return e[1]
            }, e.name = "mustache.js", e.version = "2.3.0", e.tags = ["{{", "}}"];
            var E = new m;
            return e.clearCache = function() {
                return E.clearCache()
            }, e.parse = function(e, t) {
                return E.parse(e, t)
            }, e.render = function(e, t, r) {
                if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
                return E.render(e, t, r)
            }, e.to_html = function(n, r, o, i) {
                var a = e.render(n, r, o);
                if (!t(i)) return a;
                i(a)
            }, e.escape = s, e.Scanner = d, e.Context = p, e.Writer = m, e
        })
    },
    144: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return c
        });
        var r = ["/pre-roll/", "/preroll/", "/ads/", "||histats.com/", "||adnetwork.vn/", "||doubleclick.net/", "||admicro/", "||adnet.vn/", "||ds-vn.serving-sys.com/", "||lavanetwork.net/", "||video.sgame.vn:8080/", "blueseed.tv", "||new-cdn.blueseed/", "||vcmedia.vn/", "||innity.net/", "||serving-sys.com/", "||ambientplatform.vn/", "||gvt1.com/", "||comment.dantri.com.vn/", "||adsquangcao.com/", "||facebook.com/connect", "||facebook.com/plugins/likebox.php", "||facebook.com/plugins/comments.php", "||facebook.com/connect/xd_arbiter", "||facebook.com/plugins/page.php", "||facebook.com/v*/plugins/*", "||googlesyndication.com", "||qccoccocmedia.vn/", "||coccoc.com/webhp##*", "||meme.vn/##*", "||ads.phimnhanh.net/", "||adsquangcao.com/", "||edgecastcdn.net/", "||qccoccocmedia.vn/", "||dev-qccoccocmedia.vn/", "||media.adnetwork.vn/", "@@||vhosting.vcmedia.vn/", "@@||vcplayer.vcmedia.vn/", "@@||vscc.hosting.vcmedia.vn/", "@@||vscc.dantri.hosting.vcmedia.vn/", "@@||vscc-kenh14-hosting.vcmedia.vn/", "@@||hls.vcmedia.vn/", "##.adsbygoogle iframe", "###adcontainer *", "##.ad-container *", '##.facebook-top *, .fb-like-box *, iframe[title^="fb:like_box"]', '##iframe[title^="fb:page"]', '##[id^="AbdVideoPreroll"]', '##[data^="player-ads"]', '##[id^="google_ads_iframe_"]', "###pyv-iframe", "##.box-ads *", "##.ads *", "##.video-ads *", '##iframe[onload*="google_iframe_oncopy"]', '||youtube.com##[id*="sidebar-ads"] *', "||bit.ly/", '##[name*="zeroclipboard"],[data*="zeroclipboard"]', "||xemphimso.com/##.right-menu *", "###AbdPopupAd_left iframe", '||phim.hayhd.vn/###adsdiv iframe,div[class*="ads"] iframe', "||nhaccuatui.com/##.box_right *,#banner-container-bottom *", "||adxpansion.com/", "||porn99.net##.content-right *", "||thuvienanh.org/", "||xemvtv.net/###ads-slider *", '||yeucahat.com/##div[id^="adscont"] *', "||sexad.net/", "||ads.sex.com/", '||redtube.com/##div[id^="as_"] *', '##object[id^="abdPopup"]', "||adnetwork.vn/", '##object[data*=".adnetwork.vn/"]', "||phim3s.net/##.ad_location *", "||xhamster.com/###plAds *,.adVideo *,#adBottom *", "||exoclick.com/", "||trafficstars.com/", "||traffichaus.com/", "||trafficjunky.net/", "||vivo.vn##.content-right-sidebar *", '||dailymotion.com##div[id^="mc_"] *', "||pornhub.com/###pb_block *,.right-ads *", '||xemphimso.com/##[id^="ebAd"],#eyeDiv *', '||vivo.vn/##div[class*="ads"] *', "||phim.hayhd.vn/###block-resize-sidebar *", "||phim.hayhd.vn/##.container .col-sm-8+.col-sm-4 *", "||pornhub.com,tube8.com,youporn.com,redtube.com###pb_template *", "||nhac.vui.vn/##.colRight *", "||tube8.com/##.blockHtml *", "||vkool.net/##.float-ck *,.col-left *,#sidebar *, #boxes *", "||comment.vietid.net/comments", "||dantri.com.vn/comment", "||dantri.com.vn/##.fr.w510 *", '||vnexpress.net/##[id*="_BANNER_"] *, .block_banner *', '||24h.com.vn/##[id*="ADS_"] *', "||ngoisao.net/###right *", "||nhaccuatui.com/##.coverImage *", "||phimsexporn.com/##.balloons-ck *", "/twitter\\.com\\/.*cards\\/.*cardname=poll/", "##.twitter-tweet.twitter-tweet-rendered", '##[id^="preroll"] *', '##[id^="preroll-player_swf_0"]', '##[class^="preroll"] *', "||adpoints.media", "||media.yomedia.vn", "goldendatagroup.*", "||stream.nixcdn.com", "||video-juice.com", "##.jw-flag-ads > .jw-media > .jw-video", "||zing.vn###highlight video", "*.danet.vn/html/embed", "http://www.phimmoi.net/resource/video/blank.mp4", "vividobj.*.cdnviet.com", "vcdn.media.innity.net", "ds-vn.serving-sys.com", "###video-anchor_ad iframe"],
            o = ["||mail.google.com/", "||docs.google.com/", "||dropbox.com/", "||meme.vn/"],
            i = ["||fptplay.net/##.hls-playback embed", "||pubvn.tv/bar/threads/##iframe#player", "||www.24h.com.vn/###player_video_kieu_moi iframe", '||facebook.com/##iframe[src^="https://attachment.fbsbx.com/external_iframe.php"]'],
            a = ["||mail.google.com/", "||docs.google.com/", "||drive.google.com/", "||dropbox.com/", "||fptplay.net/livetv", "||twitch.tv", "||talktv.vn", "@@||talktv.vn/video/", "hdonline.vn", "garena.live"],
            c = ["/fbcdn([^.]+\\.akamaihd)?\\.net/", "/.*dailymotion.*\\/frag\\(\\d+\\)\\//", "||youtube.com/", "||vimeo.com/", "||vimeocdn.com/", "||clip.vn/", "||subs.xemphimonlines.com/", "||dailymotion.com/", "||dmcdn.net/", "||nhacrap.tv/", "||nixcdn.com/", "||zdn.vn/", "/fptplay\\.net\\/.*?seg\\d*-frag\\d*/", "/hlscache\\.fptplay\\.net(?:\\.vn)?\\//", "/49ef4358-e34d-484f-a18e-495cd9fe3817", "/75247339-7897-437d-9627-55b1a1528700"]
    },
    16: function(e, t, n) {
        "use strict";
        var r = n(144),
            o = function() {
                this.extra = {}, this.loadRules(r.a), this.loadRules(r.b, "pip"), this.loadRules(r.c, "pip-allowfullscreen-false"), this.loadRules(r.d, "download"), this.loadRules(r.e, "requests")
            };
        o.prototype = {
            check: function(e, t) {
                var n = t ? this.extra[t] : this.rules;
                return this._testRules(e, n)
            },
            _testRules: function(e, t) {
                if (!t) return !1;
                var n = void 0;
                if ("string" == typeof e ? n = e : (e.src || e.href) && (n = e.src || e.href), n) {
                    for (var r = t.wlUrls.length, o = 0; o < r; o++)
                        if (t.wlUrls[o].test(n)) return !1;
                    r = t.blUrls.length;
                    for (var i = 0; i < r; i++)
                        if (t.blUrls[i].test(n)) return !0
                }
                if (!(e instanceof Node)) return !1;
                for (var a = e.ownerDocument.location.href, c = 0; c < t.wlCosmetics.length; c++) {
                    var s = t.wlCosmetics[c];
                    if (("~" === s.domain[0] && a.match(s.domain.substr(1)) || a.match(s.domain)) && s.selectors.some(e.matches.bind(e))) return !1
                }
                for (var u = 0; u < t.blCosmetics.length; u++) {
                    var l = t.blCosmetics[u];
                    if (("~" === l.domain[0] && a.match(l.domain.substr(1)) || a.match(l.domain)) && l.selectors.some(e.matches.bind(e))) return !0
                }
                return !1
            },
            convertWildcard: function(e) {
                if (/^\/.*?\/$/.test(e) && /[[\\(){}]/.test(e)) return new RegExp(e.replace(/^\/|\/$/g, ""), "i");
                var t = e.replace(/[.?+\\[{()]/g, function(e) {
                    return "\\" + e
                }).replace(/\^/g, "[\\w\\d_.%-]").replace(/\*/g, ".*").replace(/\|\|/g, "^\\w+://([\\d\\w-]+\\.)*").replace(/\|/g, "$");
                return new RegExp(t, "i")
            },
            getParsingRegex: function() {
                if (this.regex) return this.regex;
                return this.regex = new RegExp("^\\s*(@@)?(/(?:[^/]|\\\\/)+/|(?:[^#$]+|#(?!#))+)?(?:(#@#|##)([^$]+))?(?:\\$(.*))?\\s*$", "i"), this.regex
            },
            parseFilters: function(e) {
                var t = e;
                "string" == typeof t && (t = t.split(/[\r\n]+/));
                for (var n = {
                        blUrls: [],
                        wlUrls: [],
                        blCosmetics: [],
                        wlCosmetics: []
                    }, r = {
                        "": {
                            bl: [],
                            wl: []
                        }
                    }, o = 0; o < t.length; o++) {
                    var i = t[o];
                    if (!/^\s*!|^\s*\[.*?\]\s*$/.test(i)) {
                        var a = this.getParsingRegex().exec(i);
                        if (a) {
                            var c = {
                                whitelist: a[1],
                                url: a[2],
                                separator: a[3],
                                selector: a[4],
                                comment: a[5]
                            };
                            if (c.separator)
                                for (var s = c.url ? c.url.split(/,/) : [""], u = void 0, l = 0; l < s.length; l++) u = s[l], u in r || (r[u] = {
                                    bl: [],
                                    wl: []
                                }), u = r[u], "#@#" === c.separator ? (c.whiteList || r[""].wl.push(c.selector), u[c.whitelist ? "bl" : "wl"].push(c.selector)) : u[c.whitelist ? "wl" : "bl"].push(c.selector);
                            else {
                                if (!c.url) continue;
                                var f = "@@" === c.whitelist ? n.wlUrls : n.blUrls,
                                    d = this.convertWildcard(c.url);
                                f.push(d)
                            }
                        }
                    }
                }
                for (var p = Object.keys(r), m = 0; m < p.length; m++) {
                    var h = p[m],
                        v = r[h];
                    v.bl.length && n.blCosmetics.push({
                        domain: this.convertWildcard(h),
                        selectors: r[h].bl
                    }), v.wl.length && n.wlCosmetics.push({
                        domain: this.convertWildcard(h),
                        selectors: r[h].wl
                    })
                }
                return n
            },
            loadRules: function(e, t) {
                var n = this.parseFilters(e);
                t ? this.extra[t] = n : this.rules = n
            }
        }, t.a = new o
    },
    174: function(e, t, n) {
        n(13), e.exports = n(0)
    }
});