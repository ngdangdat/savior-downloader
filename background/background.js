webpackJsonp([1], [, function(e, t, r) {
    "use strict";
    var n = r(10),
        i = function() {};
    i.QL_HIGH = "High", i.QL_MEDIUM = "Medium", i.QL_LOW = "Low", i.QL_VIDEO_ULTRAHD = "Ultra HD", i.QL_VIDEO_FULLHD = "Full HD", i.QL_VIDEO_HD = "HD", i.QL_VIDEO_STANDARD = "Standard", i.QL_VIDEO_MEDIUM = "Medium", i.QL_VIDEO_SMALL = "Small", i.QL_VIDEO_MOBILE = "Mobile";
    var o = {};
    o[i.QL_VIDEO_ULTRAHD] = {
        quality: i.QL_HIGH,
        qualityIndex: 8,
        size: 3072,
        videoTitle: "Super HD"
    }, o[i.QL_VIDEO_ULTRAHD] = {
        quality: i.QL_HIGH,
        qualityIndex: 7,
        size: 2160,
        videoTitle: "Ultra HD"
    }, o[i.QL_VIDEO_ULTRAHD] = {
        quality: i.QL_HIGH,
        qualityIndex: 6,
        size: 1440,
        videoTitle: "Quad HD"
    }, o[i.QL_VIDEO_FULLHD] = {
        quality: i.QL_HIGH,
        qualityIndex: 5,
        size: 1080,
        videoTitle: "Full HD",
        audioTitle: "High",
        vimeoQuality: "1080p",
        zingTag: ["1080p", "label1080"],
        dailymotionQuality: "hd1080",
        clipvnQuality: "5"
    }, o[i.QL_VIDEO_HD] = {
        quality: i.QL_HIGH,
        qualityIndex: 4,
        size: 720,
        videoTitle: "HD",
        audioTitle: "High",
        zingTag: ["720p", "label720"],
        vimeoQuality: "720p",
        dailymotionQuality: ["hd", "hd720"],
        facebookQuality: ["hd_src", "hd_src_no_ratelimit"],
        JWQuality: "highquality",
        clipvnQuality: "4"
    }, o[i.QL_VIDEO_STANDARD] = {
        quality: i.QL_MEDIUM,
        qualityIndex: 3,
        size: 480,
        videoTitle: "Standard",
        audioTitle: "Standard",
        zingTag: ["480p"],
        dailymotionQuality: "hq",
        vimeoQuality: "480p",
        facebookQuality: ["sd_src", "sd_src_no_ratelimit"],
        JWQuality: "location",
        clipvnQuality: "3"
    }, o[i.QL_VIDEO_MEDIUM] = {
        quality: i.QL_MEDIUM,
        qualityIndex: 2,
        size: 360,
        videoTitle: "Medium",
        audioTitle: "Medium",
        vimeoQuality: "360p",
        dailymotionQuality: "sd",
        zingTag: ["source", "360p"],
        JWQuality: "lowquality",
        clipvnQuality: "2"
    }, o[i.QL_VIDEO_SMALL] = {
        quality: i.QL_LOW,
        qualityIndex: 1,
        size: 240,
        videoTitle: "Small",
        audioTitle: "Low",
        dailymotionQuality: "ld",
        vimeoQuality: "270p",
        zingTag: ["f", "f240"],
        clipvnQuality: "1"
    }, o[i.QL_VIDEO_MOBILE] = {
        quality: i.QL_LOW,
        qualityIndex: 0,
        size: 144,
        videoTitle: "Mobile",
        audioTitle: "Low",
        vimeoQuality: "",
        clipvnQuality: "0"
    };
    var a = {};
    a[i.QL_HIGH] = o[i.QL_VIDEO_ULTRAHD].qualityIndex, a[i.QL_MEDIUM] = o[i.QL_VIDEO_STANDARD].qualityIndex, a[i.QL_LOW] = o[i.QL_VIDEO_SMALL].qualityIndex, i.prototype = {
        constructor: i,
        DEFAULT_QUALITY_LEVEL: i.QL_HIGH,
        QUALITY_LEVELS: [i.QL_HIGH, i.QL_MEDIUM, i.QL_LOW],
        VIDEO_QUALITY_LEVELS: [i.QL_VIDEO_ULTRAHD, i.QL_VIDEO_FULLHD, i.QL_VIDEO_HD, i.QL_VIDEO_STANDARD, i.QL_VIDEO_MEDIUM, i.QL_VIDEO_SMALL, i.QL_VIDEO_MOBILE],
        DEFAULT_QUALITY_TYPE: i.QL_VIDEO_STANDARD,
        QUALITY_TYPES: o,
        getFacebookQuality: function(e) {
            return this._getVideoQuality("facebookQuality", e).videoTitle
        },
        getDailymotionQuality: function(e) {
            return this._getVideoQuality("dailymotionQuality", e).videoTitle
        },
        getZingVideoQuality: function(e) {
            return this._getVideoQuality("zingTag", e).videoTitle
        },
        getZingAudioQuality: function(e) {
            return this._getVideoQuality("zingTag", e).audioTitle
        },
        getVimeoQuality: function(e) {
            return this._getVideoQuality("vimeoQuality", e).videoTitle
        },
        getClipvnQuality: function(e) {
            return this._getVideoQuality("clipvnQuality", e).videoTitle
        },
        getJWQuality: function(e) {
            return this._getVideoQuality("JWQuality", e).videoTitle
        },
        getQualityBySize: function(e) {
            return this._getVideoQuality("size", e).videoTitle
        },
        getSizeByQuality: function(e) {
            return (o[e] || {}).size || 0
        },
        _getVideoQuality: function(e, t, r) {
            for (var n in this.QUALITY_TYPES) {
                var i = this.QUALITY_TYPES[n][e];
                if (Array.isArray(i) || (i = [i]), -1 !== i.indexOf(t)) return this.QUALITY_TYPES[n]
            }
            return r ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _getTypeByQualityType: function(e) {
            for (var t in this.QUALITY_TYPES)
                if (e === t || e === this.QUALITY_TYPES[t].videoTitle || e === this.QUALITY_TYPES[t].audioTitle) return this.QUALITY_TYPES[t];
            return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _calculateWeight: function(e, t) {
            var r = n.b[e.get("type")].extensions_weight,
                i = r.indexOf(e.get("ext")),
                o = this._getTypeByQualityType(e.get("quality")).qualityIndex;
            return i / r.length + Math.abs(t - o) / 7
        },
        getQualityLevelByType: function(e) {
            return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(e).videoTitle)
        },
        getVideoQualityIndex: function(e) {
            return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(e)
        },
        getOneClickQualityIndex: function(e) {
            return this.QUALITY_LEVELS.concat().reverse().indexOf(e)
        },
        getQualityLevelByQualityType: function(e) {
            return this._getTypeByQualityType(e).quality
        },
        getQualityIndexByVideoTitleQuality: function(e) {
            return void 0 !== o[e] ? o[e].qualityIndex : -1
        },
        chooseBestDownload: function(e, t, r) {
            var n = e.length;
            if (r)
                for (var i = r.split("/").filter(function(e) {
                        return e
                    }), o = i.length > 2, s = 0; s < n; ++s) {
                    var u = e[s],
                        l = u.extQuality();
                    if (l === r) return u;
                    if (o) {
                        var c = r.replace(/(.+)\/.+/, "$1"),
                            f = l.replace(/(.+)\/.+/, "$1");
                        if (f === c) return u
                    }
                }
            t = t || this.DEFAULT_QUALITY_LEVEL;
            var d = e.filter(function(e) {
                return "video" === e.type
            });
            d && d.length || (d = e), n = d.length;
            for (var h = a[t], p = 1e3, m = -1, g = 0; g < n; ++g) {
                var v = d[g],
                    b = this._calculateWeight(v, h);
                p > b && (p = b, m = g)
            }
            return d[m]
        }
    }, t.a = new i
}, , function(e, t, r) {
    "use strict";
    var n = r(0),
        i = function() {};
    i.SERVER_LOG_URL = "https://coccoc.com/s_log", i.SOURCE_POPUP_PAGE = 0, i.SOURCE_OPTIONS_PAGE = 10, i.SOURCE_CONTENT_SCRIPT = 20, i.SOURCE_BACKGROUND_PAGE = 30, i.prototype = {
        LEGACY_METRICS_NAME_MAP: {
            ButtonClicked: "TryItNowButtonClicked",
            CheckBoxClicked: "OneClickCheckbox"
        },
        get source() {
            if (!chrome.extension.getBackgroundPage) return i.SOURCE_CONTENT_SCRIPT;
            switch (document.location.pathname) {
                case "/popup.html":
                    return i.SOURCE_POPUP_PAGE;
                case "/options.html":
                    return i.SOURCE_OPTIONS_PAGE;
                case "/background.html":
                    return i.SOURCE_BACKGROUND_PAGE;
                default:
                    return
            }
        },
        _getFullName: function(e) {
            return "Savior." + (this.LEGACY_METRICS_NAME_MAP[e] || e)
        },
        _getTotalValue: function(e, t, r) {
            return 0 === e.indexOf("Refr") || r || "PageShown" === e || "number" != typeof t ? t : t + this.source
        },
        _doLog: function(e, t, r) {
            var n = this._getFullName(t);
            if (this.source === i.SOURCE_CONTENT_SCRIPT) chrome.runtime.sendMessage({
                requestType: "metrics",
                method: "log",
                params: {
                    name: t,
                    value: r
                }
            });
            else if (chrome.metricsPrivate) switch (e) {
                case "recordSmallCount":
                    chrome.metricsPrivate.recordValue({
                        metricName: n,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 100,
                        buckets: 100
                    }, r);
                    break;
                case "recordValue":
                    chrome.metricsPrivate.recordValue({
                        metricName: n,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 1e3,
                        buckets: 1002
                    }, r);
                    break;
                case "recordSerpData":
                case "recordClickData":
                    chrome.metricsPrivate[e](r)
            }
        },
        _getMethodByName: function(e) {
            switch (e) {
                case "Refr":
                case "RefrSE":
                case "RefrFE":
                case "RefrPin":
                    return "recordValue";
                case "SerpData":
                    return "recordSerpData";
                case "SerpClickData":
                    return "recordClickData";
                default:
                    return "recordSmallCount"
            }
        },
        log: function(e, t, r) {
            var n = this._getMethodByName(e),
                i = this._getTotalValue(e, t, r);
            this._doLog(n, e, i)
        },
        logYtExtension: function(e) {
            switch (e.toLowerCase()) {
                case "mp4":
                    this.log("YtExtension", this.EXTENSION_MP4);
                    break;
                case "mp3":
                    this.log("YtExtension", this.EXTENSION_MP3);
                    break;
                case "webm":
                    this.log("YtExtension", this.EXTENSION_WEBM);
                    break;
                case "3gp":
                    this.log("YtExtension", this.EXTENSION_3GP);
                    break;
                case "srt":
                    this.log("YtExtension", this.EXTENSION_SRT);
                    break;
                default:
                    this.log("YtExtension", this.EXTENSION_OTHER)
            }
        },
        logFromContentScript: function(e, t) {
            this.log(e, t, !0)
        },
        serverLog: function(e, t) {
            var r = new Image,
                o = [];
            t = Object.assign({
                action: e,
                source: this.source,
                version: n.SAVIOR_VERSION
            }, t), Object.keys(t).reduce(function(e, r) {
                return o.push(r + "=" + encodeURIComponent(t[r])), o
            }, o), r.src = i.SERVER_LOG_URL + "?" + o.join("&")
        },
        PAGE_WELCOME_SCREEN: 0,
        PAGE_DOWNLOADS_LIST: 1,
        PAGE_ONE_CLICK_DOWNLOAD: 2,
        PAGE_NO_MEDIA_FOUND: 3,
        PAGE_OPTIONS: 4,
        PAGE_CONTENT_SHOW_CONTROLS: 5,
        PAGE_CONTENT_NO_MEDIA: 9,
        DOWNLOAD_AUTO: 0,
        DOWNLOAD_BUTTON: 1,
        DOWNLOAD_ALL: 2,
        DOWNLOAD_REQUEST_SIZE: 3,
        DOWNLOAD_REQUEST_SIZE_FAILED: 4,
        DOWNLOAD_SOUND_ONLY: 5,
        DOWNLOAD_CANCELED: 7,
        DOWNLOAD_SUBTITLES: 9,
        BUTTON_MAIN: 0,
        BUTTON_TRY_IT_NOW: 1,
        BUTTON_SHOW_DOWNLOADS: 2,
        BUTTON_HIDE_DOWNLOADS: 3,
        BUTTON_DOWNLOAD_ALL: 4,
        BUTTON_CHECK_ALL: 5,
        BUTTON_CHECK_NONE: 6,
        BUTTON_FAKE_QUALITY: 7,
        BUTTON_DETACH: 8,
        BUTTON_HIDE: 9,
        CHECK_BOX_ENABLE_ONE_CLICK: 0,
        CHECK_BOX_SHOW_ON_PAGE_BUTTONS: 2,
        CHECK_BOX_PREFER_LAST_QUALITY: 4,
        CHECK_BOX_DETACH_ENABLED: 6,
        PIP_DETACH_CLICK: 0,
        PIP_RESTORE_CLICK: 1,
        PIP_SITE_LINK_CLICK: 2,
        PLAY_NOW_SHOWN: 0,
        PLAY_NOW_WIDGET_CLICKED: 1,
        PLAY_NOW_TOOLTIP_SHOWN: 2,
        PLAY_NOW_TOOLTIP_CLOSED: 3,
        PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN: 4,
        PLAY_NOW_TOOLTIP_BOTTOM_SHOWN: 5,
        PLAY_NOW_TOOLTIP_BOTTOM_CLOSED: 6,
        PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN: 7,
        EXTENSION_MP4: 1,
        EXTENSION_MP3: 2,
        EXTENSION_WEBM: 3,
        EXTENSION_3GP: 4,
        EXTENSION_SRT: 5,
        EXTENSION_OTHER: 6
    }, t.a = new i
}, , function(e, t, r) {
    "use strict";
    var n = function() {
        this._storage = chrome.storage.local, this._options = {}, this._default = {
            detach_enabled: !0,
            on_page_buttons: !0,
            min_stream_size: 30720,
            prefer_last_quality: !0,
            hide_play_now_tooltip: !1,
            hide_play_now_tooltip_bottom: !1
        };
        var e = this;
        chrome.storage.onChanged.addListener(function(t, r) {
            if ("local" === r)
                for (var n in t) e._options[n] = t[n].newValue
        })
    };
    n.prototype = {
        load: function() {
            var e = this;
            return new Promise(function(t) {
                e._storage.get(null, function(r) {
                    e._options = r, t(r)
                })
            })
        },
        set: function(e, t) {
            var r = {};
            ("string" == typeof e || "number" == typeof e && void 0 !== t) && (r[e] = t, this._options[e] = t, this._storage.set(r))
        },
        get: function(e) {
            return e in this._options ? this._options[e] : this._default[e]
        }
    }, t.a = new n
}, , , , , , function(e, t) {
    var r, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
    }
    e.exports = r
}, function(e, t) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (f === clearTimeout) return clearTimeout(e);
        if ((f === n || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
        try {
            return f(e)
        } catch (t) {
            try {
                return f.call(null, e)
            } catch (t) {
                return f.call(this, e)
            }
        }
    }

    function a() {
        m && h && (m = !1, h.length ? p = h.concat(p) : g = -1, p.length && s())
    }

    function s() {
        if (!m) {
            var e = i(a);
            m = !0;
            for (var t = p.length; t;) {
                for (h = p, p = []; ++g < t;) h && h[g].run();
                g = -1, t = p.length
            }
            h = null, m = !1, o(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var c, f, d = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            c = r
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
            f = n
        }
    }();
    var h, p = [],
        m = !1,
        g = -1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        p.push(new u(e, t)), 1 !== p.length || m || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(e) {
        return []
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, , function(e, t, r) {
    "use strict";

    function n(e) {
        if (!(this instanceof n)) return new n(e);
        l.call(this, e), c.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", i)
    }

    function i() {
        this.allowHalfOpen || this._writableState.ended || a(o, this)
    }

    function o(e) {
        e.end()
    }
    var a = r(26),
        s = Object.keys || function(e) {
            var t = [];
            for (var r in e) t.push(r);
            return t
        };
    e.exports = n;
    var u = r(21);
    u.inherits = r(15);
    var l = r(75),
        c = r(63);
    u.inherits(n, l);
    for (var f = s(c.prototype), d = 0; d < f.length; d++) {
        var h = f[d];
        n.prototype[h] || (n.prototype[h] = c.prototype[h])
    }
    Object.defineProperty(n.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
        }
    }), n.prototype._destroy = function(e, t) {
        this.push(null), this.end(), a(t, e)
    }
}, function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    } : e.exports = function(e, t) {
        e.super_ = t;
        var r = function() {};
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
    }
}, , function(e, t, r) {
    "use strict";
    var n = r(0),
        i = r(10),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = function e(t) {
            var r = this;
            this._date = Date.now(), this.values = {}, this._sizePromise = null, this._hls = !1, t.title || Object.defineProperty(this, "title", {
                get: function() {
                    return "string" == typeof r._title ? r._title : (r._title = r.getName().substr(0, e.MAX_FILE_NAME_LENGTH), r._title)
                }
            }), this.merge(t)
        };
    a.MAX_FILE_NAME_LENGTH = 128, a.isValidData = function(e) {
        if (n.BrFeatures.M3U8 && r.i(i.c)(e.ext)) return !0;
        var t = i.b[e.type],
            o = t && t.extensions;
        return t && -1 !== o.indexOf(e.ext)
    }, a.prototype._createFieldGetter = function(e) {
        var t = this;
        this[e] = function() {
            return t.get(e)
        }
    }, a.prototype._generateFakeName = function() {
        return [this.type, n.Utils.makeId(this.values)].join("-").replace(/-+/g, "-")
    }, a.prototype.get = function(e) {
        if ("string" == typeof e || "number" == typeof e) return this.values[e] || this[e]
    }, a.prototype.set = function(e, t) {
        return "string" != typeof e && "number" != typeof e || this.values[e] === t || (this[e] = t), this
    }, a.prototype.merge = function(e) {
        var t = e instanceof a ? e.values : e;
        for (var n in t) this.set(n, void 0 !== t[n] ? t[n] : t[n] || null);
        return r.i(i.c)(this.get("ext")) && (this.set("ext", "mp4"), this._hls = !0), this
    }, a.prototype.getName = function() {
        var e = "string" == typeof this._title ? this._title : "";
        return n.Utils.replaceEntities(e || this.filename || this._generateFakeName())
    }, a.prototype.getFilename = function() {
        var e = this.getName(),
            t = "." + this.ext,
            r = 0;
        return e.endsWith(t) && (r = t.length + 1), e = e.replace(/\s+/g, " ").replace(/[\/\\:*?"<>|\u200c\u200d]/g, "-").substr(0, a.MAX_FILE_NAME_LENGTH - r) + t
    }, a.prototype.extQuality = function() {
        return (this.get("ext") || "") + "/" + (this.get("quality") || "") + "/" + (this.get("resolution") || "")
    }, a.prototype.getSize = function() {
        var e = this;
        if (e._sizePromise) return e._sizePromise;
        var t = new Promise(function(t, r) {
            function i(e) {
                e && s.push(n.Utils.getSize(e))
            }
            var a = e.get("size");
            if ((a = n.Utils.defined(a) ? a : 0) || null === a || e._hls) return t(a);
            var s = [],
                u = e.get("url");
            if ("object" === (void 0 === u ? "undefined" : o(u))) {
                [u.audioUrl, u.videoUrl].forEach(i)
            } else i(u);
            s = s.length > 0 ? 1 === s.length ? s[0] : Promise.all(s) : Promise.reject();
            var l = e.get("altUrl");
            s.then(function() {
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                for (var a = n.Utils.flatten(i), s = 0, u = a.length - 1; u >= 0; u--) s += a[u];
                e.set("size", s), t(s)
            }).catch(function() {
                if (l) {
                    var i = n.Utils.getSize(l);
                    return i.then(function(r) {
                        e.set("size", r), t(r)
                    }).catch(function(e) {
                        r(e)
                    }), i
                }
                r(null)
            })
        });
        return e._sizePromise = t, t
    }, t.a = a
}, , , , function(e, t, r) {
    (function(e) {
        function r(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === g(e)
        }

        function n(e) {
            return "boolean" == typeof e
        }

        function i(e) {
            return null === e
        }

        function o(e) {
            return null == e
        }

        function a(e) {
            return "number" == typeof e
        }

        function s(e) {
            return "string" == typeof e
        }

        function u(e) {
            return "symbol" === (void 0 === e ? "undefined" : v(e))
        }

        function l(e) {
            return void 0 === e
        }

        function c(e) {
            return "[object RegExp]" === g(e)
        }

        function f(e) {
            return "object" === (void 0 === e ? "undefined" : v(e)) && null !== e
        }

        function d(e) {
            return "[object Date]" === g(e)
        }

        function h(e) {
            return "[object Error]" === g(e) || e instanceof Error
        }

        function p(e) {
            return "function" == typeof e
        }

        function m(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" === (void 0 === e ? "undefined" : v(e)) || void 0 === e
        }

        function g(e) {
            return Object.prototype.toString.call(e)
        }
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.isArray = r, t.isBoolean = n, t.isNull = i, t.isNullOrUndefined = o, t.isNumber = a, t.isString = s, t.isSymbol = u, t.isUndefined = l, t.isRegExp = c, t.isObject = f, t.isDate = d, t.isError = h, t.isFunction = p, t.isPrimitive = m, t.isBuffer = e.isBuffer
    }).call(t, r(25).Buffer)
}, function(e, t, r) {
    function n(e, t) {
        this._id = e, this._clearFn = t
    }
    var i = Function.prototype.apply;
    t.setTimeout = function() {
        return new n(i.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function() {
        return new n(i.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
        }, t))
    }, r(23), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function(e, t, r) {
    (function(e, t) {
        ! function(e, r) {
            "use strict";

            function n(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
                var n = {
                    callback: e,
                    args: t
                };
                return l[u] = n, s(u), u++
            }

            function i(e) {
                delete l[e]
            }

            function o(e) {
                var t = e.callback,
                    n = e.args;
                switch (n.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(n[0]);
                        break;
                    case 2:
                        t(n[0], n[1]);
                        break;
                    case 3:
                        t(n[0], n[1], n[2]);
                        break;
                    default:
                        t.apply(r, n)
                }
            }

            function a(e) {
                if (c) setTimeout(a, 0, e);
                else {
                    var t = l[e];
                    if (t) {
                        c = !0;
                        try {
                            o(t)
                        } finally {
                            i(e), c = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var s, u = 1,
                    l = {},
                    c = !1,
                    f = e.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function() {
                    s = function(e) {
                        t.nextTick(function() {
                            a(e)
                        })
                    }
                }() : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            r = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = r, t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$",
                        r = function(r) {
                            r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && a(+r.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), s = function(r) {
                        e.postMessage(t + r, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        a(e.data)
                    }, s = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                    var e = f.documentElement;
                    s = function(t) {
                        var r = f.createElement("script");
                        r.onreadystatechange = function() {
                            a(t), r.onreadystatechange = null, e.removeChild(r), r = null
                        }, e.appendChild(r)
                    }
                }() : function() {
                    s = function(e) {
                        setTimeout(a, 0, e)
                    }
                }(), d.setImmediate = n, d.clearImmediate = i
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(t, r(11), r(12))
}, function(e, t, r) {
    "use strict";

    function n() {}
    var i = r(67);
    n.prototype = {
        constructor: n,
        verify: function(e) {
            var t = this,
                r = e.split("."),
                n = r[0],
                o = r[1],
                a = r[2];
            return window.crypto.subtle.importKey("jwk", i.a, {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            }, !1, ["verify"]).then(function(e) {
                return window.crypto.subtle.verify({
                    name: "RSASSA-PKCS1-v1_5"
                }, e, t._base64UrlToUint8Array(a), t._stringToArrayBuffer(n + "." + o))
            }).then(function(e) {
                var r = t.parsePayload(o);
                return null === r ? Promise.reject("Cannot parse JWT") : {
                    data: r,
                    valid: e
                }
            })
        },
        shouldHideWidget: function(e, t) {
            var r = this;
            return new Promise(function(n) {
                return r.verify(e).then(function(e) {
                    n(e.valid && e.data && r.checkURLPattern(e.data.host, t) && r.checkTime(e.data.exp, e.data.iat) ? !0 : !1)
                }).catch(function(e) {
                    n(!1)
                })
            })
        },
        checkURLPattern: function(e, t) {
            var r = t.replace("www.", "");
            if (r === e) return !0;
            var n = new RegExp("^" + e.replace("*.", "(?:\\w+\\.)*") + "$");
            return !!r.match(n)
        },
        checkTime: function(e, t) {
            var r = Date.now();
            return 1e3 * e > r && 1e3 * t <= r
        },
        parsePayload: function(e) {
            var t = void 0;
            try {
                t = JSON.parse(this._base64UrlToString(e))
            } catch (e) {
                return null
            }
            return t
        },
        _stringToBase64Url: function(e) {
            return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        },
        _base64UrlToString: function(e) {
            return atob(this._base64UrlToBase64(e))
        },
        _base64ToBase64Url: function(e) {
            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        },
        _base64UrlToBase64: function(e) {
            return (e + "===".slice((e.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/")
        },
        _base64UrlToUint8Array: function(e) {
            return this._base64ToUint8Array(this._base64UrlToBase64(e))
        },
        _stringToArrayBuffer: function(e) {
            for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0, i = e.length; n < i; n++) r[n] = e.charCodeAt(n);
            return t
        },
        _base64ToUint8Array: function(e) {
            var t = atob(e).split(""),
                r = t.map(function(e) {
                    return e.charCodeAt(0)
                });
            return new Uint8Array(r)
        }
    }, t.a = new n
}, function(e, t, r) {
    "use strict";
    (function(e) {
        function n() {
            return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function i(e, t) {
            if (n() < t) throw new RangeError("Invalid typed array length");
            return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e
        }

        function o(e, t, r) {
            if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, r);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return l(this, e)
            }
            return a(this, e, t, r)
        }

        function a(e, t, r, n) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d(e, t, r, n) : "string" == typeof t ? c(e, t, r) : h(e, t)
        }

        function s(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function u(e, t, r, n) {
            return s(t), t <= 0 ? i(e, t) : void 0 !== r ? "string" == typeof n ? i(e, t).fill(r, n) : i(e, t).fill(r) : i(e, t)
        }

        function l(e, t) {
            if (s(t), e = i(e, t < 0 ? 0 : 0 | p(t)), !o.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < t; ++r) e[r] = 0;
            return e
        }

        function c(e, t, r) {
            if ("string" == typeof r && "" !== r || (r = "utf8"), !o.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | g(t, r);
            e = i(e, n);
            var a = e.write(t, r);
            return a !== n && (e = e.slice(0, a)), e
        }

        function f(e, t) {
            var r = t.length < 0 ? 0 : 0 | p(t.length);
            e = i(e, r);
            for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
            return e
        }

        function d(e, t, r, n) {
            if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = f(e, t), e
        }

        function h(e, t) {
            if (o.isBuffer(t)) {
                var r = 0 | p(t.length);
                return e = i(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e)
            }
            if (t) {
                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || X(t.length) ? i(e, 0) : f(e, t);
                if ("Buffer" === t.type && Z(t.data)) return f(e, t.data)
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }

        function p(e) {
            if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
            return 0 | e
        }

        function m(e) {
            return +e != e && (e = 0), o.alloc(+e)
        }

        function g(e, t) {
            if (o.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var r = e.length;
            if (0 === r) return 0;
            for (var n = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return Q(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return z(e).length;
                default:
                    if (n) return Q(e).length;
                    t = ("" + t).toLowerCase(), n = !0
            }
        }

        function v(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if (r >>>= 0, t >>>= 0, r <= t) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return R(this, t, r);
                case "utf8":
                case "utf-8":
                    return I(this, t, r);
                case "ascii":
                    return D(this, t, r);
                case "latin1":
                case "binary":
                    return N(this, t, r);
                case "base64":
                    return x(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return q(this, t, r);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), n = !0
            }
        }

        function b(e, t, r) {
            var n = e[t];
            e[t] = e[r], e[r] = n
        }

        function y(e, t, r, n, i) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                if (i) return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, r, n, i);
            if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : _(e, [t], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function _(e, t, r, n, i) {
            function o(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            var a = 1,
                s = e.length,
                u = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, u /= 2, r /= 2
            }
            var l;
            if (i) {
                var c = -1;
                for (l = r; l < s; l++)
                    if (o(e, l) === o(t, -1 === c ? 0 : l - c)) {
                        if (-1 === c && (c = l), l - c + 1 === u) return c * a
                    } else -1 !== c && (l -= l - c), c = -1
            } else
                for (r + u > s && (r = s - u), l = r; l >= 0; l--) {
                    for (var f = !0, d = 0; d < u; d++)
                        if (o(e, l + d) !== o(t, d)) {
                            f = !1;
                            break
                        }
                    if (f) return l
                }
            return -1
        }

        function w(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var a = 0; a < n; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[r + a] = s
            }
            return a
        }

        function E(e, t, r, n) {
            return W(Q(t, e.length - r), e, r, n)
        }

        function T(e, t, r, n) {
            return W(Y(t), e, r, n)
        }

        function A(e, t, r, n) {
            return T(e, t, r, n)
        }

        function S(e, t, r, n) {
            return W(z(t), e, r, n)
        }

        function L(e, t, r, n) {
            return W(G(t, e.length - r), e, r, n)
        }

        function x(e, t, r) {
            return 0 === t && r === e.length ? $.fromByteArray(e) : $.fromByteArray(e.slice(t, r))
        }

        function I(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r;) {
                var o = e[i],
                    a = null,
                    s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                if (i + s <= r) {
                    var u, l, c, f;
                    switch (s) {
                        case 1:
                            o < 128 && (a = o);
                            break;
                        case 2:
                            u = e[i + 1], 128 == (192 & u) && (f = (31 & o) << 6 | 63 & u) > 127 && (a = f);
                            break;
                        case 3:
                            u = e[i + 1], l = e[i + 2], 128 == (192 & u) && 128 == (192 & l) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & l) > 2047 && (f < 55296 || f > 57343) && (a = f);
                            break;
                        case 4:
                            u = e[i + 1], l = e[i + 2], c = e[i + 3], 128 == (192 & u) && 128 == (192 & l) && 128 == (192 & c) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & l) << 6 | 63 & c) > 65535 && f < 1114112 && (a = f)
                    }
                }
                null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += s
            }
            return O(n)
        }

        function O(e) {
            var t = e.length;
            if (t <= J) return String.fromCharCode.apply(String, e);
            for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += J));
            return r
        }

        function D(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
            return n
        }

        function N(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
            return n
        }

        function R(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = t; o < r; ++o) i += j(e[o]);
            return i
        }

        function q(e, t, r) {
            for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }

        function C(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function U(e, t, r, n, i, a) {
            if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range")
        }

        function P(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }

        function B(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
        }

        function k(e, t, r, n, i, o) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function M(e, t, r, n, i) {
            return i || k(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(e, t, r, n, 23, 4), r + 4
        }

        function V(e, t, r, n, i) {
            return i || k(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(e, t, r, n, 52, 8), r + 8
        }

        function F(e) {
            if (e = H(e).replace(ee, ""), e.length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }

        function H(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        }

        function j(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function Q(e, t) {
            t = t || 1 / 0;
            for (var r, n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }

        function Y(e) {
            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t
        }

        function G(e, t) {
            for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
            return o
        }

        function z(e) {
            return $.toByteArray(F(e))
        }

        function W(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
            return i
        }

        function X(e) {
            return e !== e
        }
        var $ = r(104),
            K = r(124),
            Z = r(74);
        t.Buffer = o, t.SlowBuffer = m, t.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = n(), o.poolSize = 8192, o._augment = function(e) {
            return e.__proto__ = o.prototype, e
        }, o.from = function(e, t, r) {
            return a(null, e, t, r)
        }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0
        })), o.alloc = function(e, t, r) {
            return u(null, e, t, r)
        }, o.allocUnsafe = function(e) {
            return l(null, e)
        }, o.allocUnsafeSlow = function(e) {
            return l(null, e)
        }, o.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, o.compare = function(e, t) {
            if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                if (e[i] !== t[i]) {
                    r = e[i], n = t[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }, o.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, o.concat = function(e, t) {
            if (!Z(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return o.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = o.allocUnsafe(t),
                i = 0;
            for (r = 0; r < e.length; ++r) {
                var a = e[r];
                if (!o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, i), i += a.length
            }
            return n
        }, o.byteLength = g, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) b(this, t, t + 1);
            return this
        }, o.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
            return this
        }, o.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
            return this
        }, o.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : v.apply(this, arguments)
        }, o.prototype.equals = function(e) {
            if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === o.compare(this, e)
        }, o.prototype.inspect = function() {
            var e = "",
                r = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (e += " ... ")), "<Buffer " + e + ">"
        }, o.prototype.compare = function(e, t, r, n, i) {
            if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
            for (var a = i - n, s = r - t, u = Math.min(a, s), l = this.slice(n, i), c = e.slice(t, r), f = 0; f < u; ++f)
                if (l[f] !== c[f]) {
                    a = l[f], s = c[f];
                    break
                }
            return a < s ? -1 : s < a ? 1 : 0
        }, o.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, o.prototype.indexOf = function(e, t, r) {
            return y(this, e, t, r, !0)
        }, o.prototype.lastIndexOf = function(e, t, r) {
            return y(this, e, t, r, !1)
        }, o.prototype.write = function(e, t, r, n) {
            if (void 0 === t) n = "utf8", r = this.length, t = 0;
            else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1;;) switch (n) {
                case "hex":
                    return w(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return E(this, e, t, r);
                case "ascii":
                    return T(this, e, t, r);
                case "latin1":
                case "binary":
                    return A(this, e, t, r);
                case "base64":
                    return S(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return L(this, e, t, r);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0
            }
        }, o.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var J = 4096;
        o.prototype.slice = function(e, t) {
            var r = this.length;
            e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
            var n;
            if (o.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = o.prototype;
            else {
                var i = t - e;
                n = new o(i, void 0);
                for (var a = 0; a < i; ++a) n[a] = this[a + e]
            }
            return n
        }, o.prototype.readUIntLE = function(e, t, r) {
            e |= 0, t |= 0, r || C(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
            return n
        }, o.prototype.readUIntBE = function(e, t, r) {
            e |= 0, t |= 0, r || C(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
            return n
        }, o.prototype.readUInt8 = function(e, t) {
            return t || C(e, 1, this.length), this[e]
        }, o.prototype.readUInt16LE = function(e, t) {
            return t || C(e, 2, this.length), this[e] | this[e + 1] << 8
        }, o.prototype.readUInt16BE = function(e, t) {
            return t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, o.prototype.readUInt32LE = function(e, t) {
            return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, o.prototype.readUInt32BE = function(e, t) {
            return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, o.prototype.readIntLE = function(e, t, r) {
            e |= 0, t |= 0, r || C(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
            return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n
        }, o.prototype.readIntBE = function(e, t, r) {
            e |= 0, t |= 0, r || C(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
            return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
        }, o.prototype.readInt8 = function(e, t) {
            return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, o.prototype.readInt16LE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, o.prototype.readInt16BE = function(e, t) {
            t || C(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, o.prototype.readInt32LE = function(e, t) {
            return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, o.prototype.readInt32BE = function(e, t) {
            return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, o.prototype.readFloatLE = function(e, t) {
            return t || C(e, 4, this.length), K.read(this, e, !0, 23, 4)
        }, o.prototype.readFloatBE = function(e, t) {
            return t || C(e, 4, this.length), K.read(this, e, !1, 23, 4)
        }, o.prototype.readDoubleLE = function(e, t) {
            return t || C(e, 8, this.length), K.read(this, e, !0, 52, 8)
        }, o.prototype.readDoubleBE = function(e, t) {
            return t || C(e, 8, this.length), K.read(this, e, !1, 52, 8)
        }, o.prototype.writeUIntLE = function(e, t, r, n) {
            if (e = +e, t |= 0, r |= 0, !n) {
                U(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            }
            var i = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
            return t + r
        }, o.prototype.writeUIntBE = function(e, t, r, n) {
            if (e = +e, t |= 0, r |= 0, !n) {
                U(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            }
            var i = r - 1,
                o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
            return t + r
        }, o.prototype.writeUInt8 = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, o.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
        }, o.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
        }, o.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : B(this, e, t, !0), t + 4
        }, o.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
        }, o.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                U(this, e, t, r, i - 1, -i)
            }
            var o = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + r
        }, o.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e, t |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                U(this, e, t, r, i - 1, -i)
            }
            var o = r - 1,
                a = 1,
                s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + r
        }, o.prototype.writeInt8 = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, o.prototype.writeInt16LE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
        }, o.prototype.writeInt16BE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
        }, o.prototype.writeInt32LE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : B(this, e, t, !0), t + 4
        }, o.prototype.writeInt32BE = function(e, t, r) {
            return e = +e, t |= 0, r || U(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : B(this, e, t, !1), t + 4
        }, o.prototype.writeFloatLE = function(e, t, r) {
            return M(this, e, t, !0, r)
        }, o.prototype.writeFloatBE = function(e, t, r) {
            return M(this, e, t, !1, r)
        }, o.prototype.writeDoubleLE = function(e, t, r) {
            return V(this, e, t, !0, r)
        }, o.prototype.writeDoubleBE = function(e, t, r) {
            return V(this, e, t, !1, r)
        }, o.prototype.copy = function(e, t, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var i, a = n - r;
            if (this === e && r < t && t < n)
                for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < a; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
            return a
        }, o.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
            var a;
            if ("number" == typeof e)
                for (a = t; a < r; ++a) this[a] = e;
            else {
                var s = o.isBuffer(e) ? e : Q(new o(e, n).toString()),
                    u = s.length;
                for (a = 0; a < r - t; ++a) this[a + t] = s[a % u]
            }
            return this
        };
        var ee = /[^+\/0-9A-Za-z-_]/g
    }).call(t, r(11))
}, function(e, t, r) {
    "use strict";
    (function(t) {
        function r(e, r, n, i) {
            if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
            var o, a, s = arguments.length;
            switch (s) {
                case 0:
                case 1:
                    return t.nextTick(e);
                case 2:
                    return t.nextTick(function() {
                        e.call(null, r)
                    });
                case 3:
                    return t.nextTick(function() {
                        e.call(null, r, n)
                    });
                case 4:
                    return t.nextTick(function() {
                        e.call(null, r, n, i)
                    });
                default:
                    for (o = new Array(s - 1), a = 0; a < o.length;) o[a++] = arguments[a];
                    return t.nextTick(function() {
                        e.apply(null, o)
                    })
            }
        }!t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = r : e.exports = t.nextTick
    }).call(t, r(12))
}, , , , , , , , , , , , , function(e, t) {
    function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function n(e) {
        return "function" == typeof e
    }

    function i(e) {
        return "number" == typeof e
    }

    function o(e) {
        return "object" === (void 0 === e ? "undefined" : s(e)) && null !== e
    }

    function a(e) {
        return void 0 === e
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
        if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, r.prototype.emit = function(e) {
        var t, r, i, s, u, l;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw c.context = t, c
        }
        if (r = this._events[e], a(r)) return !1;
        if (n(r)) switch (arguments.length) {
            case 1:
                r.call(this);
                break;
            case 2:
                r.call(this, arguments[1]);
                break;
            case 3:
                r.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
        } else if (o(r))
            for (s = Array.prototype.slice.call(arguments, 1), l = r.slice(), i = l.length, u = 0; u < i; u++) l[u].apply(this, s);
        return !0
    }, r.prototype.addListener = function(e, t) {
        var i;
        if (!n(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (i = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.trace), this
    }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
        function r() {
            this.removeListener(e, r), i || (i = !0, t.apply(this, arguments))
        }
        if (!n(t)) throw TypeError("listener must be a function");
        var i = !1;
        return r.listener = t, this.on(e, r), this
    }, r.prototype.removeListener = function(e, t) {
        var r, i, a, s;
        if (!n(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (r = this._events[e], a = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (o(r)) {
            for (s = a; s-- > 0;)
                if (r[s] === t || r[s].listener && r[s].listener === t) {
                    i = s;
                    break
                }
            if (i < 0) return this;
            1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, r.prototype.removeAllListeners = function(e) {
        var t, r;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (r = this._events[e], n(r)) this.removeListener(e, r);
        else if (r)
            for (; r.length;) this.removeListener(e, r[r.length - 1]);
        return delete this._events[e], this
    }, r.prototype.listeners = function(e) {
        return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, r.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (n(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, r.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}, , , , , , , , function(e, t, r) {
    function n(e) {
        if (e && !u(e)) throw new Error("Unknown encoding: " + e)
    }

    function i(e) {
        return e.toString(this.encoding)
    }

    function o(e) {
        this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
    }

    function a(e) {
        this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
    }
    var s = r(25).Buffer,
        u = s.isEncoding || function(e) {
            switch (e && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return !0;
                default:
                    return !1
            }
        },
        l = t.StringDecoder = function(e) {
            switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), n(e), this.encoding) {
                case "utf8":
                    this.surrogateSize = 3;
                    break;
                case "ucs2":
                case "utf16le":
                    this.surrogateSize = 2, this.detectIncompleteChar = o;
                    break;
                case "base64":
                    this.surrogateSize = 3, this.detectIncompleteChar = a;
                    break;
                default:
                    return void(this.write = i)
            }
            this.charBuffer = new s(6), this.charReceived = 0, this.charLength = 0
        };
    l.prototype.write = function(e) {
        for (var t = ""; this.charLength;) {
            var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
            if (e.copy(this.charBuffer, this.charReceived, 0, r), this.charReceived += r, this.charReceived < this.charLength) return "";
            e = e.slice(r, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
            var n = t.charCodeAt(t.length - 1);
            if (!(n >= 55296 && n <= 56319)) {
                if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                break
            }
            this.charLength += this.surrogateSize, t = ""
        }
        this.detectIncompleteChar(e);
        var i = e.length;
        this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, i), i -= this.charReceived), t += e.toString(this.encoding, 0, i);
        var i = t.length - 1,
            n = t.charCodeAt(i);
        if (n >= 55296 && n <= 56319) {
            var o = this.surrogateSize;
            return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, i)
        }
        return t
    }, l.prototype.detectIncompleteChar = function(e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
            var r = e[e.length - t];
            if (1 == t && r >> 5 == 6) {
                this.charLength = 2;
                break
            }
            if (t <= 2 && r >> 4 == 14) {
                this.charLength = 3;
                break
            }
            if (t <= 3 && r >> 3 == 30) {
                this.charLength = 4;
                break
            }
        }
        this.charReceived = t
    }, l.prototype.end = function(e) {
        var t = "";
        if (e && e.length && (t = this.write(e)), this.charReceived) {
            var r = this.charReceived,
                n = this.charBuffer,
                i = this.encoding;
            t += n.slice(0, r).toString(i)
        }
        return t
    }
}, , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    t.decode = t.parse = r(126), t.encode = t.stringify = r(127)
}, function(e, t, r) {
    "use strict";
    (function(t, n, i) {
        function o(e) {
            var t = this;
            this.next = null, this.entry = null, this.finish = function() {
                x(t, e)
            }
        }

        function a(e) {
            return C.from(e)
        }

        function s(e) {
            return C.isBuffer(e) || e instanceof U
        }

        function u() {}

        function l(e, t) {
            O = O || r(14), e = e || {}, this.objectMode = !!e.objectMode, t instanceof O && (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var n = e.highWaterMark,
                i = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
            var a = !1 === e.decodeStrings;
            this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                b(t, e)
            }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
        }

        function c(e) {
            if (O = O || r(14), !(B.call(c, this) || this instanceof O)) return new c(e);
            this._writableState = new l(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), q.call(this)
        }

        function f(e, t) {
            var r = new Error("write after end");
            e.emit("error", r), I(t, r)
        }

        function d(e, t, r, n) {
            var i = !0,
                o = !1;
            return null === r ? o = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), I(n, o), i = !1), i
        }

        function h(e, t, r) {
            return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = C.from(t, r)), t
        }

        function p(e, t, r, n, i, o) {
            if (!r) {
                var a = h(t, n, i);
                n !== a && (r = !0, i = "buffer", n = a)
            }
            var s = t.objectMode ? 1 : n.length;
            t.length += s;
            var u = t.length < t.highWaterMark;
            if (u || (t.needDrain = !0), t.writing || t.corked) {
                var l = t.lastBufferedRequest;
                t.lastBufferedRequest = {
                    chunk: n,
                    encoding: i,
                    isBuf: r,
                    callback: o,
                    next: null
                }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
            } else m(e, t, !1, s, n, i, o);
            return u
        }

        function m(e, t, r, n, i, o, a) {
            t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
        }

        function g(e, t, r, n, i) {
            --t.pendingcb, r ? (I(i, n), I(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", n)) : (i(n), e._writableState.errorEmitted = !0, e.emit("error", n), S(e, t))
        }

        function v(e) {
            e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
        }

        function b(e, t) {
            var r = e._writableState,
                n = r.sync,
                i = r.writecb;
            if (v(r), t) g(e, r, n, t, i);
            else {
                var o = E(r);
                o || r.corked || r.bufferProcessing || !r.bufferedRequest || w(e, r), n ? D(y, e, r, o, i) : y(e, r, o, i)
            }
        }

        function y(e, t, r, n) {
            r || _(e, t), t.pendingcb--, n(), S(e, t)
        }

        function _(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }

        function w(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
                var n = t.bufferedRequestCount,
                    i = new Array(n),
                    a = t.corkedRequestsFree;
                a.entry = r;
                for (var s = 0, u = !0; r;) i[s] = r, r.isBuf || (u = !1), r = r.next, s += 1;
                i.allBuffers = u, m(e, t, !0, t.length, i, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new o(t)
            } else {
                for (; r;) {
                    var l = r.chunk,
                        c = r.encoding,
                        f = r.callback;
                    if (m(e, t, !1, t.objectMode ? 1 : l.length, l, c, f), r = r.next, t.writing) break
                }
                null === r && (t.lastBufferedRequest = null)
            }
            t.bufferedRequestCount = 0, t.bufferedRequest = r, t.bufferProcessing = !1
        }

        function E(e) {
            return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
        }

        function T(e, t) {
            e._final(function(r) {
                t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), S(e, t)
            })
        }

        function A(e, t) {
            t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, I(T, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
        }

        function S(e, t) {
            var r = E(t);
            return r && (A(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), r
        }

        function L(e, t, r) {
            t.ending = !0, S(e, t), r && (t.finished ? I(r) : e.once("finish", r)), t.ended = !0, e.writable = !1
        }

        function x(e, t, r) {
            var n = e.entry;
            for (e.entry = null; n;) {
                var i = n.callback;
                t.pendingcb--, i(r), n = n.next
            }
            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
        }
        var I = r(26);
        e.exports = c;
        var O, D = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? n : I;
        c.WritableState = l;
        var N = r(21);
        N.inherits = r(15);
        var R = {
                deprecate: r(138)
            },
            q = r(78),
            C = r(65).Buffer,
            U = i.Uint8Array || function() {},
            P = r(77);
        N.inherits(c, q), l.prototype.getBuffer = function() {
                for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                return t
            },
            function() {
                try {
                    Object.defineProperty(l.prototype, "buffer", {
                        get: R.deprecate(function() {
                            return this.getBuffer()
                        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (e) {}
            }();
        var B;
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(c, Symbol.hasInstance, {
            value: function(e) {
                return !!B.call(this, e) || e && e._writableState instanceof l
            }
        })) : B = function(e) {
            return e instanceof this
        }, c.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }, c.prototype.write = function(e, t, r) {
            var n = this._writableState,
                i = !1,
                o = s(e) && !n.objectMode;
            return o && !C.isBuffer(e) && (e = a(e)), "function" == typeof t && (r = t, t = null), o ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof r && (r = u), n.ended ? f(this, r) : (o || d(this, n, e, r)) && (n.pendingcb++, i = p(this, n, o, e, t, r)), i
        }, c.prototype.cork = function() {
            this._writableState.corked++
        }, c.prototype.uncork = function() {
            var e = this._writableState;
            e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || w(this, e))
        }, c.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
            return this._writableState.defaultEncoding = e, this
        }, c.prototype._write = function(e, t, r) {
            r(new Error("_write() is not implemented"))
        }, c.prototype._writev = null, c.prototype.end = function(e, t, r) {
            var n = this._writableState;
            "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || L(this, n, r)
        }, Object.defineProperty(c.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(e) {
                this._writableState && (this._writableState.destroyed = e)
            }
        }), c.prototype.destroy = P.destroy, c.prototype._undestroy = P.undestroy, c.prototype._destroy = function(e, t) {
            this.end(), t(e)
        }
    }).call(t, r(12), r(22).setImmediate, r(11))
}, function(e, t, r) {
    t = e.exports = r(75), t.Stream = t, t.Readable = t, t.Writable = r(63), t.Duplex = r(14), t.Transform = r(76), t.PassThrough = r(130)
}, function(e, t, r) {
    function n(e, t) {
        for (var r in e) t[r] = e[r]
    }

    function i(e, t, r) {
        return a(e, t, r)
    }
    var o = r(25),
        a = o.Buffer;
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = o : (n(o, t), t.Buffer = i), n(a, i), i.from = function(e, t, r) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return a(e, t, r)
    }, i.alloc = function(e, t, r) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var n = a(e);
        return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
    }, i.allocUnsafe = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return a(e)
    }, i.allocUnsafeSlow = function(e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return o.SlowBuffer(e)
    }
}, function(e, t, r) {
    "use strict";

    function n() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function i(e, t, r) {
        if (e && c.isObject(e) && e instanceof n) return e;
        var i = new n;
        return i.parse(e, t, r), i
    }

    function o(e) {
        return c.isString(e) && (e = i(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
    }

    function a(e, t) {
        return i(e, !1, !0).resolve(t)
    }

    function s(e, t) {
        return e ? i(e, !1, !0).resolveObject(t) : t
    }
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = r(125),
        c = r(137);
    t.parse = i, t.resolve = a, t.resolveObject = s, t.format = o, t.Url = n;
    var f = /^([a-z0-9.+-]+:)/i,
        d = /:[0-9]*$/,
        h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        m = ["{", "}", "|", "\\", "^", "`"].concat(p),
        g = ["'"].concat(m),
        v = ["%", "/", "?", ";", "#"].concat(g),
        b = ["/", "?", "#"],
        y = /^[+a-z0-9A-Z_-]{0,63}$/,
        _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        w = {
            javascript: !0,
            "javascript:": !0
        },
        E = {
            javascript: !0,
            "javascript:": !0
        },
        T = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        A = r(62);
    n.prototype.parse = function(e, t, r) {
        if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + (void 0 === e ? "undefined" : u(e)));
        var n = e.indexOf("?"),
            i = -1 !== n && n < e.indexOf("#") ? "?" : "#",
            o = e.split(i),
            a = /\\/g;
        o[0] = o[0].replace(a, "/"), e = o.join(i);
        var s = e;
        if (s = s.trim(), !r && 1 === e.split("#").length) {
            var d = h.exec(s);
            if (d) return this.path = s, this.href = s, this.pathname = d[1], d[2] ? (this.search = d[2], this.query = t ? A.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
        }
        var p = f.exec(s);
        if (p) {
            p = p[0];
            var m = p.toLowerCase();
            this.protocol = m, s = s.substr(p.length)
        }
        if (r || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var S = "//" === s.substr(0, 2);
            !S || p && E[p] || (s = s.substr(2), this.slashes = !0)
        }
        if (!E[p] && (S || p && !T[p])) {
            for (var L = -1, x = 0; x < b.length; x++) {
                var I = s.indexOf(b[x]); - 1 !== I && (-1 === L || I < L) && (L = I)
            }
            var O, D;
            D = -1 === L ? s.lastIndexOf("@") : s.lastIndexOf("@", L), -1 !== D && (O = s.slice(0, D), s = s.slice(D + 1), this.auth = decodeURIComponent(O)), L = -1;
            for (var x = 0; x < v.length; x++) {
                var I = s.indexOf(v[x]); - 1 !== I && (-1 === L || I < L) && (L = I)
            } - 1 === L && (L = s.length), this.host = s.slice(0, L), s = s.slice(L), this.parseHost(), this.hostname = this.hostname || "";
            var N = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!N)
                for (var R = this.hostname.split(/\./), x = 0, q = R.length; x < q; x++) {
                    var C = R[x];
                    if (C && !C.match(y)) {
                        for (var U = "", P = 0, B = C.length; P < B; P++) C.charCodeAt(P) > 127 ? U += "x" : U += C[P];
                        if (!U.match(y)) {
                            var k = R.slice(0, x),
                                M = R.slice(x + 1),
                                V = C.match(_);
                            V && (k.push(V[1]), M.unshift(V[2])), M.length && (s = "/" + M.join(".") + s), this.hostname = k.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), N || (this.hostname = l.toASCII(this.hostname));
            var F = this.port ? ":" + this.port : "",
                H = this.hostname || "";
            this.host = H + F, this.href += this.host, N && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!w[m])
            for (var x = 0, q = g.length; x < q; x++) {
                var j = g[x];
                if (-1 !== s.indexOf(j)) {
                    var Q = encodeURIComponent(j);
                    Q === j && (Q = escape(j)), s = s.split(j).join(Q)
                }
            }
        var Y = s.indexOf("#"); - 1 !== Y && (this.hash = s.substr(Y), s = s.slice(0, Y));
        var G = s.indexOf("?");
        if (-1 !== G ? (this.search = s.substr(G), this.query = s.substr(G + 1), t && (this.query = A.parse(this.query)), s = s.slice(0, G)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), T[m] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var F = this.pathname || "",
                z = this.search || "";
            this.path = F + z
        }
        return this.href = this.format(), this
    }, n.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            r = this.pathname || "",
            n = this.hash || "",
            i = !1,
            o = "";
        this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = A.stringify(this.query));
        var a = this.search || o && "?" + o || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || T[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), a && "?" !== a.charAt(0) && (a = "?" + a), r = r.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), a = a.replace("#", "%23"), t + i + r + a + n
    }, n.prototype.resolve = function(e) {
        return this.resolveObject(i(e, !1, !0)).format()
    }, n.prototype.resolveObject = function(e) {
        if (c.isString(e)) {
            var t = new n;
            t.parse(e, !1, !0), e = t
        }
        for (var r = new n, i = Object.keys(this), o = 0; o < i.length; o++) {
            var a = i[o];
            r[a] = this[a]
        }
        if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                var l = s[u];
                "protocol" !== l && (r[l] = e[l])
            }
            return T[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
        }
        if (e.protocol && e.protocol !== r.protocol) {
            if (!T[e.protocol]) {
                for (var f = Object.keys(e), d = 0; d < f.length; d++) {
                    var h = f[d];
                    r[h] = e[h]
                }
                return r.href = r.format(), r
            }
            if (r.protocol = e.protocol, e.host || E[e.protocol]) r.pathname = e.pathname;
            else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/")
            }
            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                var m = r.pathname || "",
                    g = r.search || "";
                r.path = m + g
            }
            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }
        var v = r.pathname && "/" === r.pathname.charAt(0),
            b = e.host || e.pathname && "/" === e.pathname.charAt(0),
            y = b || v || r.host && e.pathname,
            _ = y,
            w = r.pathname && r.pathname.split("/") || [],
            p = e.pathname && e.pathname.split("/") || [],
            A = r.protocol && !T[r.protocol];
        if (A && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), y = y && ("" === p[0] || "" === w[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, w = p;
        else if (p.length) w || (w = []), w.pop(), w = w.concat(p), r.search = e.search, r.query = e.query;
        else if (!c.isNullOrUndefined(e.search)) {
            if (A) {
                r.hostname = r.host = w.shift();
                var S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
                S && (r.auth = S.shift(), r.host = r.hostname = S.shift())
            }
            return r.search = e.search, r.query = e.query, c.isNull(r.pathname) && c.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
        }
        if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
        for (var L = w.slice(-1)[0], x = (r.host || e.host || w.length > 1) && ("." === L || ".." === L) || "" === L, I = 0, O = w.length; O >= 0; O--) L = w[O], "." === L ? w.splice(O, 1) : ".." === L ? (w.splice(O, 1), I++) : I && (w.splice(O, 1), I--);
        if (!y && !_)
            for (; I--; I) w.unshift("..");
        !y || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), x && "/" !== w.join("/").substr(-1) && w.push("");
        var D = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        if (A) {
            r.hostname = r.host = D ? "" : w.length ? w.shift() : "";
            var S = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
            S && (r.auth = S.shift(), r.host = r.hostname = S.shift())
        }
        return y = y || r.host && w.length, y && !D && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), c.isNull(r.pathname) && c.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
    }, n.prototype.parseHost = function() {
        var e = this.host,
            t = d.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}, function(e, t, r) {
    "use strict";
    t.a = {
        kty: "RSA",
        n: "t5P2Nmmm7TCeGMx4YKXP-lhdeKpTDIGtqPcgI8CtkKPrsCz51RsD9nstDkSQJycx4Jwbepu2J14OqDYYAU_JcnJTxoDOD2ixk9HlqPkeYj2U7LKfANFnLwXZ_Ug1EjYH6iN6lM_NSbXwNkgWksZvBcADfpjsSAD01TV89Xw-3gU",
        e: "AQAB"
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = r(3),
        o = r(1),
        a = r(0),
        s = r(10),
        u = r(17),
        l = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        c = function() {
            function e(t, r, i) {
                n(this, e), this.api = window.downloads, this._uninitialized = !0, a.Utils.defined(r) || (r = -1), this._tid = r, this.data = [], this.setMediaData(t, i)
            }
            return l(e, [{
                key: "setMediaData",
                value: function(e, t) {
                    var r = this;
                    return new Promise(function(n) {
                        if (!e) return n({
                            model: r,
                            updated: !1
                        }), t && t(), this;
                        Promise.all([e]).then(function(e) {
                            var i = e[0];
                            if (r._uninitialized && 0 === i.length) return r._uninitialized = !1, n({
                                model: r,
                                updated: !0
                            }), void(t && t());
                            r._uninitialized = !1;
                            var o = r.data,
                                s = new Array(o.length),
                                l = o.map(function(e) {
                                    return e.id
                                });
                            i.forEach(function(e) {
                                e.id = e.id || a.Utils.makeId(e);
                                var t = l.indexOf(e.id),
                                    n = void 0; - 1 === t ? (l.push(e.id), n = new u.a(e), o.push(n)) : (t < s.length && (s[t] = !0), n = o[t], n.merge(e)), n._ditem = r.api.item(r._tid, e.id)
                            });
                            for (var c = s.length !== o.length, f = s.length - 1; f >= 0; f--) s[f] || (c = !0, o.splice(f, 1));
                            n({
                                model: r,
                                updated: c
                            }), t && t()
                        })
                    })
                }
            }, {
                key: "getMediaCountByTitle",
                value: function() {
                    var e = this.data;
                    if (0 === e.length) return 0;
                    var t = new Set;
                    return e.forEach(function(e) {
                        t.has(e.title) || t.add(e.title)
                    }), t.size
                }
            }, {
                key: "getMedia",
                value: function(e) {
                    return this.data.filter(function(t) {
                        return t.id === e
                    })[0]
                }
            }, {
                key: "getMediaGroup",
                value: function(e) {
                    return this.data.filter(function(t) {
                        return -1 !== e.indexOf(t.id)
                    })
                }
            }, {
                key: "download",
                value: function(e) {
                    var t = this.getMedia(e);
                    if (t) {
                        var r = {
                            id: t.id,
                            url: t.url,
                            filename: t.getFilename(),
                            referrer: t.referrer,
                            hls: t._hls
                        };
                        void 0 !== t.soundOnly && (r.soundOnly = t.soundOnly, r.resolution = t.resolution || 128), void 0 !== t.quality && (r.quality = t.quality);
                        var n = this.api.download(this._tid, r);
                        return n.then(function(e) {
                            t._ditem = e
                        }), void 0 !== r.soundOnly && r.soundOnly && i.a.log("Download", i.a.DOWNLOAD_SOUND_ONLY), r.filename && r.filename.match(/\.yt_srt$/i) && i.a.log("Download", i.a.DOWNLOAD_SUBTITLES), n
                    }
                }
            }, {
                key: "onChange",
                value: function(e) {
                    this.api.onChange(this._tid, e)
                }
            }, {
                key: "group",
                value: function() {
                    var e = this.sortMedia(this.data),
                        t = this.splitMediaByTitle(e);
                    return t = t.map(this.excludeQualityDuplicates.bind(this)), t.map(this.splitMediaByType.bind(this))
                }
            }, {
                key: "splitMediaByTitle",
                value: function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        var r = e.title,
                            n = t.find(function(e) {
                                return e.title === r
                            });
                        n ? n.media.push(e) : t.push({
                            media: [e],
                            title: r
                        })
                    }), t
                }
            }, {
                key: "excludeQualityDuplicates",
                value: function(e) {
                    var t = new Set,
                        r = Object.assign({}, e),
                        n = s.b.video.extensions;
                    return r.media = e.media.filter(function(r) {
                        var i = void 0;
                        i = void 0 !== r.resolution ? r.quality + "_" + r.resolution + "_" + r.ext : r.quality + "_" + r.ext;
                        var o = "video" === r.type && e.media.some(function(e) {
                            if (e.quality !== r.quality) return !1;
                            if (e === r) return !1;
                            if ("video" !== e.type) return !1;
                            var t = n.indexOf(e.ext) < n.indexOf(r.ext),
                                i = n.indexOf(e.ext) === n.indexOf(r.ext),
                                o = !r.resolution || e.resolution > r.resolution;
                            return t || i && o
                        });
                        return !t.has(i) && !o && (t.add(i), !0)
                    }), r
                }
            }, {
                key: "splitMediaByType",
                value: function(e) {
                    var t = [];
                    return e.media.forEach(function(e) {
                        var n = e.type,
                            i = t.find(function(e) {
                                return e.type === n
                            });
                        i ? i.media.push(e) : t.push({
                            media: [e],
                            i18n_type: r.i(a.i18n)("media_fields_type_" + n),
                            type: n
                        })
                    }), t = t.sort(function(e, t) {
                        return s.f.indexOf(e.type) < s.f.indexOf(t.type) ? -1 : 1
                    }), e.media = t, e
                }
            }, {
                key: "sortMedia",
                value: function(e) {
                    var t = Array.isArray(e.media) ? e.media : e;
                    return t.forEach(function(t) {
                        var r = e.type || t.type;
                        t.quality = t.quality || o.a.DEFAULT_QUALITY_TYPE, t.sortValues = t.sortValues || {}, t.sortValues.qualityValue || (t.sortValues.qualityValue = 100 * (o.a.getQualityIndexByVideoTitleQuality(t.quality) || 1)), t.sortValues.extensionValue = s.b[r].extensions.indexOf(t.ext) || 0, t.sortValues.totalValue = t.sortValues.qualityValue + t.sortValues.extensionValue
                    }), t = t.sort(function(e, t) {
                        return e.sortValues.totalValue > t.sortValues.totalValue ? -1 : 1
                    })
                }
            }, {
                key: "filterByCommonFields",
                value: function(e, t, r) {
                    var n = this.getMedia(e);
                    return r = r || [], this.data.filter(function(i) {
                        return e !== i.id && t.reduce(function(e, t) {
                            return e && n[t] && i[t] && n[t] === i[t]
                        }, !0) && r.reduce(function(e, t) {
                            return e && n[t] && i[t] && n[t] !== i[t]
                        }, !0)
                    })
                }
            }, {
                key: "getSameQualityMediaFormats",
                value: function(e) {
                    var t = this.filterByCommonFields(e, ["title", "type", "quality"], ["ext"]).map(function(e) {
                        return e.ext && e.ext
                    });
                    return Array.from(new Set(t))
                }
            }, {
                key: "getSameFormatMediaQuality",
                value: function(e) {
                    var t = this.filterByCommonFields(e, ["title", "type", "ext"], ["quality"]).map(function(e) {
                        return e.quality ? o.a.getSizeByQuality(e.quality) : 0
                    });
                    return Array.from(new Set(t))
                }
            }, {
                key: "getAllMediaFormats",
                value: function(e) {
                    return this.filterByCommonFields(e, ["title", "type"]).reduce(function(e, t) {
                        var r = t.ext && t.ext,
                            n = t.quality ? o.a.getSizeByQuality(t.quality) : 0;
                        return r ? (e[r] || (e[r] = []), -1 === e[r].indexOf(n) && e[r].push(n), e) : e
                    }, {})
                }
            }, {
                key: "isOneMedia",
                value: function() {
                    for (var e = this.data, t = {}, r = void 0, n = void 0, i = 0, o = 0; i < e.length && o <= 1; ++i)
                        if (r = e[i], n = r.title, !t[n] && (t[n] = !0, ++o > 1)) return !1;
                    return !0
                }
            }]), e
        }();
    t.a = c
}, , , , , function(e, t) {
    function r() {}
    var n = [
            ["Aacute", [193]],
            ["aacute", [225]],
            ["Abreve", [258]],
            ["abreve", [259]],
            ["ac", [8766]],
            ["acd", [8767]],
            ["acE", [8766, 819]],
            ["Acirc", [194]],
            ["acirc", [226]],
            ["acute", [180]],
            ["Acy", [1040]],
            ["acy", [1072]],
            ["AElig", [198]],
            ["aelig", [230]],
            ["af", [8289]],
            ["Afr", [120068]],
            ["afr", [120094]],
            ["Agrave", [192]],
            ["agrave", [224]],
            ["alefsym", [8501]],
            ["aleph", [8501]],
            ["Alpha", [913]],
            ["alpha", [945]],
            ["Amacr", [256]],
            ["amacr", [257]],
            ["amalg", [10815]],
            ["amp", [38]],
            ["AMP", [38]],
            ["andand", [10837]],
            ["And", [10835]],
            ["and", [8743]],
            ["andd", [10844]],
            ["andslope", [10840]],
            ["andv", [10842]],
            ["ang", [8736]],
            ["ange", [10660]],
            ["angle", [8736]],
            ["angmsdaa", [10664]],
            ["angmsdab", [10665]],
            ["angmsdac", [10666]],
            ["angmsdad", [10667]],
            ["angmsdae", [10668]],
            ["angmsdaf", [10669]],
            ["angmsdag", [10670]],
            ["angmsdah", [10671]],
            ["angmsd", [8737]],
            ["angrt", [8735]],
            ["angrtvb", [8894]],
            ["angrtvbd", [10653]],
            ["angsph", [8738]],
            ["angst", [197]],
            ["angzarr", [9084]],
            ["Aogon", [260]],
            ["aogon", [261]],
            ["Aopf", [120120]],
            ["aopf", [120146]],
            ["apacir", [10863]],
            ["ap", [8776]],
            ["apE", [10864]],
            ["ape", [8778]],
            ["apid", [8779]],
            ["apos", [39]],
            ["ApplyFunction", [8289]],
            ["approx", [8776]],
            ["approxeq", [8778]],
            ["Aring", [197]],
            ["aring", [229]],
            ["Ascr", [119964]],
            ["ascr", [119990]],
            ["Assign", [8788]],
            ["ast", [42]],
            ["asymp", [8776]],
            ["asympeq", [8781]],
            ["Atilde", [195]],
            ["atilde", [227]],
            ["Auml", [196]],
            ["auml", [228]],
            ["awconint", [8755]],
            ["awint", [10769]],
            ["backcong", [8780]],
            ["backepsilon", [1014]],
            ["backprime", [8245]],
            ["backsim", [8765]],
            ["backsimeq", [8909]],
            ["Backslash", [8726]],
            ["Barv", [10983]],
            ["barvee", [8893]],
            ["barwed", [8965]],
            ["Barwed", [8966]],
            ["barwedge", [8965]],
            ["bbrk", [9141]],
            ["bbrktbrk", [9142]],
            ["bcong", [8780]],
            ["Bcy", [1041]],
            ["bcy", [1073]],
            ["bdquo", [8222]],
            ["becaus", [8757]],
            ["because", [8757]],
            ["Because", [8757]],
            ["bemptyv", [10672]],
            ["bepsi", [1014]],
            ["bernou", [8492]],
            ["Bernoullis", [8492]],
            ["Beta", [914]],
            ["beta", [946]],
            ["beth", [8502]],
            ["between", [8812]],
            ["Bfr", [120069]],
            ["bfr", [120095]],
            ["bigcap", [8898]],
            ["bigcirc", [9711]],
            ["bigcup", [8899]],
            ["bigodot", [10752]],
            ["bigoplus", [10753]],
            ["bigotimes", [10754]],
            ["bigsqcup", [10758]],
            ["bigstar", [9733]],
            ["bigtriangledown", [9661]],
            ["bigtriangleup", [9651]],
            ["biguplus", [10756]],
            ["bigvee", [8897]],
            ["bigwedge", [8896]],
            ["bkarow", [10509]],
            ["blacklozenge", [10731]],
            ["blacksquare", [9642]],
            ["blacktriangle", [9652]],
            ["blacktriangledown", [9662]],
            ["blacktriangleleft", [9666]],
            ["blacktriangleright", [9656]],
            ["blank", [9251]],
            ["blk12", [9618]],
            ["blk14", [9617]],
            ["blk34", [9619]],
            ["block", [9608]],
            ["bne", [61, 8421]],
            ["bnequiv", [8801, 8421]],
            ["bNot", [10989]],
            ["bnot", [8976]],
            ["Bopf", [120121]],
            ["bopf", [120147]],
            ["bot", [8869]],
            ["bottom", [8869]],
            ["bowtie", [8904]],
            ["boxbox", [10697]],
            ["boxdl", [9488]],
            ["boxdL", [9557]],
            ["boxDl", [9558]],
            ["boxDL", [9559]],
            ["boxdr", [9484]],
            ["boxdR", [9554]],
            ["boxDr", [9555]],
            ["boxDR", [9556]],
            ["boxh", [9472]],
            ["boxH", [9552]],
            ["boxhd", [9516]],
            ["boxHd", [9572]],
            ["boxhD", [9573]],
            ["boxHD", [9574]],
            ["boxhu", [9524]],
            ["boxHu", [9575]],
            ["boxhU", [9576]],
            ["boxHU", [9577]],
            ["boxminus", [8863]],
            ["boxplus", [8862]],
            ["boxtimes", [8864]],
            ["boxul", [9496]],
            ["boxuL", [9563]],
            ["boxUl", [9564]],
            ["boxUL", [9565]],
            ["boxur", [9492]],
            ["boxuR", [9560]],
            ["boxUr", [9561]],
            ["boxUR", [9562]],
            ["boxv", [9474]],
            ["boxV", [9553]],
            ["boxvh", [9532]],
            ["boxvH", [9578]],
            ["boxVh", [9579]],
            ["boxVH", [9580]],
            ["boxvl", [9508]],
            ["boxvL", [9569]],
            ["boxVl", [9570]],
            ["boxVL", [9571]],
            ["boxvr", [9500]],
            ["boxvR", [9566]],
            ["boxVr", [9567]],
            ["boxVR", [9568]],
            ["bprime", [8245]],
            ["breve", [728]],
            ["Breve", [728]],
            ["brvbar", [166]],
            ["bscr", [119991]],
            ["Bscr", [8492]],
            ["bsemi", [8271]],
            ["bsim", [8765]],
            ["bsime", [8909]],
            ["bsolb", [10693]],
            ["bsol", [92]],
            ["bsolhsub", [10184]],
            ["bull", [8226]],
            ["bullet", [8226]],
            ["bump", [8782]],
            ["bumpE", [10926]],
            ["bumpe", [8783]],
            ["Bumpeq", [8782]],
            ["bumpeq", [8783]],
            ["Cacute", [262]],
            ["cacute", [263]],
            ["capand", [10820]],
            ["capbrcup", [10825]],
            ["capcap", [10827]],
            ["cap", [8745]],
            ["Cap", [8914]],
            ["capcup", [10823]],
            ["capdot", [10816]],
            ["CapitalDifferentialD", [8517]],
            ["caps", [8745, 65024]],
            ["caret", [8257]],
            ["caron", [711]],
            ["Cayleys", [8493]],
            ["ccaps", [10829]],
            ["Ccaron", [268]],
            ["ccaron", [269]],
            ["Ccedil", [199]],
            ["ccedil", [231]],
            ["Ccirc", [264]],
            ["ccirc", [265]],
            ["Cconint", [8752]],
            ["ccups", [10828]],
            ["ccupssm", [10832]],
            ["Cdot", [266]],
            ["cdot", [267]],
            ["cedil", [184]],
            ["Cedilla", [184]],
            ["cemptyv", [10674]],
            ["cent", [162]],
            ["centerdot", [183]],
            ["CenterDot", [183]],
            ["cfr", [120096]],
            ["Cfr", [8493]],
            ["CHcy", [1063]],
            ["chcy", [1095]],
            ["check", [10003]],
            ["checkmark", [10003]],
            ["Chi", [935]],
            ["chi", [967]],
            ["circ", [710]],
            ["circeq", [8791]],
            ["circlearrowleft", [8634]],
            ["circlearrowright", [8635]],
            ["circledast", [8859]],
            ["circledcirc", [8858]],
            ["circleddash", [8861]],
            ["CircleDot", [8857]],
            ["circledR", [174]],
            ["circledS", [9416]],
            ["CircleMinus", [8854]],
            ["CirclePlus", [8853]],
            ["CircleTimes", [8855]],
            ["cir", [9675]],
            ["cirE", [10691]],
            ["cire", [8791]],
            ["cirfnint", [10768]],
            ["cirmid", [10991]],
            ["cirscir", [10690]],
            ["ClockwiseContourIntegral", [8754]],
            ["clubs", [9827]],
            ["clubsuit", [9827]],
            ["colon", [58]],
            ["Colon", [8759]],
            ["Colone", [10868]],
            ["colone", [8788]],
            ["coloneq", [8788]],
            ["comma", [44]],
            ["commat", [64]],
            ["comp", [8705]],
            ["compfn", [8728]],
            ["complement", [8705]],
            ["complexes", [8450]],
            ["cong", [8773]],
            ["congdot", [10861]],
            ["Congruent", [8801]],
            ["conint", [8750]],
            ["Conint", [8751]],
            ["ContourIntegral", [8750]],
            ["copf", [120148]],
            ["Copf", [8450]],
            ["coprod", [8720]],
            ["Coproduct", [8720]],
            ["copy", [169]],
            ["COPY", [169]],
            ["copysr", [8471]],
            ["CounterClockwiseContourIntegral", [8755]],
            ["crarr", [8629]],
            ["cross", [10007]],
            ["Cross", [10799]],
            ["Cscr", [119966]],
            ["cscr", [119992]],
            ["csub", [10959]],
            ["csube", [10961]],
            ["csup", [10960]],
            ["csupe", [10962]],
            ["ctdot", [8943]],
            ["cudarrl", [10552]],
            ["cudarrr", [10549]],
            ["cuepr", [8926]],
            ["cuesc", [8927]],
            ["cularr", [8630]],
            ["cularrp", [10557]],
            ["cupbrcap", [10824]],
            ["cupcap", [10822]],
            ["CupCap", [8781]],
            ["cup", [8746]],
            ["Cup", [8915]],
            ["cupcup", [10826]],
            ["cupdot", [8845]],
            ["cupor", [10821]],
            ["cups", [8746, 65024]],
            ["curarr", [8631]],
            ["curarrm", [10556]],
            ["curlyeqprec", [8926]],
            ["curlyeqsucc", [8927]],
            ["curlyvee", [8910]],
            ["curlywedge", [8911]],
            ["curren", [164]],
            ["curvearrowleft", [8630]],
            ["curvearrowright", [8631]],
            ["cuvee", [8910]],
            ["cuwed", [8911]],
            ["cwconint", [8754]],
            ["cwint", [8753]],
            ["cylcty", [9005]],
            ["dagger", [8224]],
            ["Dagger", [8225]],
            ["daleth", [8504]],
            ["darr", [8595]],
            ["Darr", [8609]],
            ["dArr", [8659]],
            ["dash", [8208]],
            ["Dashv", [10980]],
            ["dashv", [8867]],
            ["dbkarow", [10511]],
            ["dblac", [733]],
            ["Dcaron", [270]],
            ["dcaron", [271]],
            ["Dcy", [1044]],
            ["dcy", [1076]],
            ["ddagger", [8225]],
            ["ddarr", [8650]],
            ["DD", [8517]],
            ["dd", [8518]],
            ["DDotrahd", [10513]],
            ["ddotseq", [10871]],
            ["deg", [176]],
            ["Del", [8711]],
            ["Delta", [916]],
            ["delta", [948]],
            ["demptyv", [10673]],
            ["dfisht", [10623]],
            ["Dfr", [120071]],
            ["dfr", [120097]],
            ["dHar", [10597]],
            ["dharl", [8643]],
            ["dharr", [8642]],
            ["DiacriticalAcute", [180]],
            ["DiacriticalDot", [729]],
            ["DiacriticalDoubleAcute", [733]],
            ["DiacriticalGrave", [96]],
            ["DiacriticalTilde", [732]],
            ["diam", [8900]],
            ["diamond", [8900]],
            ["Diamond", [8900]],
            ["diamondsuit", [9830]],
            ["diams", [9830]],
            ["die", [168]],
            ["DifferentialD", [8518]],
            ["digamma", [989]],
            ["disin", [8946]],
            ["div", [247]],
            ["divide", [247]],
            ["divideontimes", [8903]],
            ["divonx", [8903]],
            ["DJcy", [1026]],
            ["djcy", [1106]],
            ["dlcorn", [8990]],
            ["dlcrop", [8973]],
            ["dollar", [36]],
            ["Dopf", [120123]],
            ["dopf", [120149]],
            ["Dot", [168]],
            ["dot", [729]],
            ["DotDot", [8412]],
            ["doteq", [8784]],
            ["doteqdot", [8785]],
            ["DotEqual", [8784]],
            ["dotminus", [8760]],
            ["dotplus", [8724]],
            ["dotsquare", [8865]],
            ["doublebarwedge", [8966]],
            ["DoubleContourIntegral", [8751]],
            ["DoubleDot", [168]],
            ["DoubleDownArrow", [8659]],
            ["DoubleLeftArrow", [8656]],
            ["DoubleLeftRightArrow", [8660]],
            ["DoubleLeftTee", [10980]],
            ["DoubleLongLeftArrow", [10232]],
            ["DoubleLongLeftRightArrow", [10234]],
            ["DoubleLongRightArrow", [10233]],
            ["DoubleRightArrow", [8658]],
            ["DoubleRightTee", [8872]],
            ["DoubleUpArrow", [8657]],
            ["DoubleUpDownArrow", [8661]],
            ["DoubleVerticalBar", [8741]],
            ["DownArrowBar", [10515]],
            ["downarrow", [8595]],
            ["DownArrow", [8595]],
            ["Downarrow", [8659]],
            ["DownArrowUpArrow", [8693]],
            ["DownBreve", [785]],
            ["downdownarrows", [8650]],
            ["downharpoonleft", [8643]],
            ["downharpoonright", [8642]],
            ["DownLeftRightVector", [10576]],
            ["DownLeftTeeVector", [10590]],
            ["DownLeftVectorBar", [10582]],
            ["DownLeftVector", [8637]],
            ["DownRightTeeVector", [10591]],
            ["DownRightVectorBar", [10583]],
            ["DownRightVector", [8641]],
            ["DownTeeArrow", [8615]],
            ["DownTee", [8868]],
            ["drbkarow", [10512]],
            ["drcorn", [8991]],
            ["drcrop", [8972]],
            ["Dscr", [119967]],
            ["dscr", [119993]],
            ["DScy", [1029]],
            ["dscy", [1109]],
            ["dsol", [10742]],
            ["Dstrok", [272]],
            ["dstrok", [273]],
            ["dtdot", [8945]],
            ["dtri", [9663]],
            ["dtrif", [9662]],
            ["duarr", [8693]],
            ["duhar", [10607]],
            ["dwangle", [10662]],
            ["DZcy", [1039]],
            ["dzcy", [1119]],
            ["dzigrarr", [10239]],
            ["Eacute", [201]],
            ["eacute", [233]],
            ["easter", [10862]],
            ["Ecaron", [282]],
            ["ecaron", [283]],
            ["Ecirc", [202]],
            ["ecirc", [234]],
            ["ecir", [8790]],
            ["ecolon", [8789]],
            ["Ecy", [1069]],
            ["ecy", [1101]],
            ["eDDot", [10871]],
            ["Edot", [278]],
            ["edot", [279]],
            ["eDot", [8785]],
            ["ee", [8519]],
            ["efDot", [8786]],
            ["Efr", [120072]],
            ["efr", [120098]],
            ["eg", [10906]],
            ["Egrave", [200]],
            ["egrave", [232]],
            ["egs", [10902]],
            ["egsdot", [10904]],
            ["el", [10905]],
            ["Element", [8712]],
            ["elinters", [9191]],
            ["ell", [8467]],
            ["els", [10901]],
            ["elsdot", [10903]],
            ["Emacr", [274]],
            ["emacr", [275]],
            ["empty", [8709]],
            ["emptyset", [8709]],
            ["EmptySmallSquare", [9723]],
            ["emptyv", [8709]],
            ["EmptyVerySmallSquare", [9643]],
            ["emsp13", [8196]],
            ["emsp14", [8197]],
            ["emsp", [8195]],
            ["ENG", [330]],
            ["eng", [331]],
            ["ensp", [8194]],
            ["Eogon", [280]],
            ["eogon", [281]],
            ["Eopf", [120124]],
            ["eopf", [120150]],
            ["epar", [8917]],
            ["eparsl", [10723]],
            ["eplus", [10865]],
            ["epsi", [949]],
            ["Epsilon", [917]],
            ["epsilon", [949]],
            ["epsiv", [1013]],
            ["eqcirc", [8790]],
            ["eqcolon", [8789]],
            ["eqsim", [8770]],
            ["eqslantgtr", [10902]],
            ["eqslantless", [10901]],
            ["Equal", [10869]],
            ["equals", [61]],
            ["EqualTilde", [8770]],
            ["equest", [8799]],
            ["Equilibrium", [8652]],
            ["equiv", [8801]],
            ["equivDD", [10872]],
            ["eqvparsl", [10725]],
            ["erarr", [10609]],
            ["erDot", [8787]],
            ["escr", [8495]],
            ["Escr", [8496]],
            ["esdot", [8784]],
            ["Esim", [10867]],
            ["esim", [8770]],
            ["Eta", [919]],
            ["eta", [951]],
            ["ETH", [208]],
            ["eth", [240]],
            ["Euml", [203]],
            ["euml", [235]],
            ["euro", [8364]],
            ["excl", [33]],
            ["exist", [8707]],
            ["Exists", [8707]],
            ["expectation", [8496]],
            ["exponentiale", [8519]],
            ["ExponentialE", [8519]],
            ["fallingdotseq", [8786]],
            ["Fcy", [1060]],
            ["fcy", [1092]],
            ["female", [9792]],
            ["ffilig", [64259]],
            ["fflig", [64256]],
            ["ffllig", [64260]],
            ["Ffr", [120073]],
            ["ffr", [120099]],
            ["filig", [64257]],
            ["FilledSmallSquare", [9724]],
            ["FilledVerySmallSquare", [9642]],
            ["fjlig", [102, 106]],
            ["flat", [9837]],
            ["fllig", [64258]],
            ["fltns", [9649]],
            ["fnof", [402]],
            ["Fopf", [120125]],
            ["fopf", [120151]],
            ["forall", [8704]],
            ["ForAll", [8704]],
            ["fork", [8916]],
            ["forkv", [10969]],
            ["Fouriertrf", [8497]],
            ["fpartint", [10765]],
            ["frac12", [189]],
            ["frac13", [8531]],
            ["frac14", [188]],
            ["frac15", [8533]],
            ["frac16", [8537]],
            ["frac18", [8539]],
            ["frac23", [8532]],
            ["frac25", [8534]],
            ["frac34", [190]],
            ["frac35", [8535]],
            ["frac38", [8540]],
            ["frac45", [8536]],
            ["frac56", [8538]],
            ["frac58", [8541]],
            ["frac78", [8542]],
            ["frasl", [8260]],
            ["frown", [8994]],
            ["fscr", [119995]],
            ["Fscr", [8497]],
            ["gacute", [501]],
            ["Gamma", [915]],
            ["gamma", [947]],
            ["Gammad", [988]],
            ["gammad", [989]],
            ["gap", [10886]],
            ["Gbreve", [286]],
            ["gbreve", [287]],
            ["Gcedil", [290]],
            ["Gcirc", [284]],
            ["gcirc", [285]],
            ["Gcy", [1043]],
            ["gcy", [1075]],
            ["Gdot", [288]],
            ["gdot", [289]],
            ["ge", [8805]],
            ["gE", [8807]],
            ["gEl", [10892]],
            ["gel", [8923]],
            ["geq", [8805]],
            ["geqq", [8807]],
            ["geqslant", [10878]],
            ["gescc", [10921]],
            ["ges", [10878]],
            ["gesdot", [10880]],
            ["gesdoto", [10882]],
            ["gesdotol", [10884]],
            ["gesl", [8923, 65024]],
            ["gesles", [10900]],
            ["Gfr", [120074]],
            ["gfr", [120100]],
            ["gg", [8811]],
            ["Gg", [8921]],
            ["ggg", [8921]],
            ["gimel", [8503]],
            ["GJcy", [1027]],
            ["gjcy", [1107]],
            ["gla", [10917]],
            ["gl", [8823]],
            ["glE", [10898]],
            ["glj", [10916]],
            ["gnap", [10890]],
            ["gnapprox", [10890]],
            ["gne", [10888]],
            ["gnE", [8809]],
            ["gneq", [10888]],
            ["gneqq", [8809]],
            ["gnsim", [8935]],
            ["Gopf", [120126]],
            ["gopf", [120152]],
            ["grave", [96]],
            ["GreaterEqual", [8805]],
            ["GreaterEqualLess", [8923]],
            ["GreaterFullEqual", [8807]],
            ["GreaterGreater", [10914]],
            ["GreaterLess", [8823]],
            ["GreaterSlantEqual", [10878]],
            ["GreaterTilde", [8819]],
            ["Gscr", [119970]],
            ["gscr", [8458]],
            ["gsim", [8819]],
            ["gsime", [10894]],
            ["gsiml", [10896]],
            ["gtcc", [10919]],
            ["gtcir", [10874]],
            ["gt", [62]],
            ["GT", [62]],
            ["Gt", [8811]],
            ["gtdot", [8919]],
            ["gtlPar", [10645]],
            ["gtquest", [10876]],
            ["gtrapprox", [10886]],
            ["gtrarr", [10616]],
            ["gtrdot", [8919]],
            ["gtreqless", [8923]],
            ["gtreqqless", [10892]],
            ["gtrless", [8823]],
            ["gtrsim", [8819]],
            ["gvertneqq", [8809, 65024]],
            ["gvnE", [8809, 65024]],
            ["Hacek", [711]],
            ["hairsp", [8202]],
            ["half", [189]],
            ["hamilt", [8459]],
            ["HARDcy", [1066]],
            ["hardcy", [1098]],
            ["harrcir", [10568]],
            ["harr", [8596]],
            ["hArr", [8660]],
            ["harrw", [8621]],
            ["Hat", [94]],
            ["hbar", [8463]],
            ["Hcirc", [292]],
            ["hcirc", [293]],
            ["hearts", [9829]],
            ["heartsuit", [9829]],
            ["hellip", [8230]],
            ["hercon", [8889]],
            ["hfr", [120101]],
            ["Hfr", [8460]],
            ["HilbertSpace", [8459]],
            ["hksearow", [10533]],
            ["hkswarow", [10534]],
            ["hoarr", [8703]],
            ["homtht", [8763]],
            ["hookleftarrow", [8617]],
            ["hookrightarrow", [8618]],
            ["hopf", [120153]],
            ["Hopf", [8461]],
            ["horbar", [8213]],
            ["HorizontalLine", [9472]],
            ["hscr", [119997]],
            ["Hscr", [8459]],
            ["hslash", [8463]],
            ["Hstrok", [294]],
            ["hstrok", [295]],
            ["HumpDownHump", [8782]],
            ["HumpEqual", [8783]],
            ["hybull", [8259]],
            ["hyphen", [8208]],
            ["Iacute", [205]],
            ["iacute", [237]],
            ["ic", [8291]],
            ["Icirc", [206]],
            ["icirc", [238]],
            ["Icy", [1048]],
            ["icy", [1080]],
            ["Idot", [304]],
            ["IEcy", [1045]],
            ["iecy", [1077]],
            ["iexcl", [161]],
            ["iff", [8660]],
            ["ifr", [120102]],
            ["Ifr", [8465]],
            ["Igrave", [204]],
            ["igrave", [236]],
            ["ii", [8520]],
            ["iiiint", [10764]],
            ["iiint", [8749]],
            ["iinfin", [10716]],
            ["iiota", [8489]],
            ["IJlig", [306]],
            ["ijlig", [307]],
            ["Imacr", [298]],
            ["imacr", [299]],
            ["image", [8465]],
            ["ImaginaryI", [8520]],
            ["imagline", [8464]],
            ["imagpart", [8465]],
            ["imath", [305]],
            ["Im", [8465]],
            ["imof", [8887]],
            ["imped", [437]],
            ["Implies", [8658]],
            ["incare", [8453]],
            ["in", [8712]],
            ["infin", [8734]],
            ["infintie", [10717]],
            ["inodot", [305]],
            ["intcal", [8890]],
            ["int", [8747]],
            ["Int", [8748]],
            ["integers", [8484]],
            ["Integral", [8747]],
            ["intercal", [8890]],
            ["Intersection", [8898]],
            ["intlarhk", [10775]],
            ["intprod", [10812]],
            ["InvisibleComma", [8291]],
            ["InvisibleTimes", [8290]],
            ["IOcy", [1025]],
            ["iocy", [1105]],
            ["Iogon", [302]],
            ["iogon", [303]],
            ["Iopf", [120128]],
            ["iopf", [120154]],
            ["Iota", [921]],
            ["iota", [953]],
            ["iprod", [10812]],
            ["iquest", [191]],
            ["iscr", [119998]],
            ["Iscr", [8464]],
            ["isin", [8712]],
            ["isindot", [8949]],
            ["isinE", [8953]],
            ["isins", [8948]],
            ["isinsv", [8947]],
            ["isinv", [8712]],
            ["it", [8290]],
            ["Itilde", [296]],
            ["itilde", [297]],
            ["Iukcy", [1030]],
            ["iukcy", [1110]],
            ["Iuml", [207]],
            ["iuml", [239]],
            ["Jcirc", [308]],
            ["jcirc", [309]],
            ["Jcy", [1049]],
            ["jcy", [1081]],
            ["Jfr", [120077]],
            ["jfr", [120103]],
            ["jmath", [567]],
            ["Jopf", [120129]],
            ["jopf", [120155]],
            ["Jscr", [119973]],
            ["jscr", [119999]],
            ["Jsercy", [1032]],
            ["jsercy", [1112]],
            ["Jukcy", [1028]],
            ["jukcy", [1108]],
            ["Kappa", [922]],
            ["kappa", [954]],
            ["kappav", [1008]],
            ["Kcedil", [310]],
            ["kcedil", [311]],
            ["Kcy", [1050]],
            ["kcy", [1082]],
            ["Kfr", [120078]],
            ["kfr", [120104]],
            ["kgreen", [312]],
            ["KHcy", [1061]],
            ["khcy", [1093]],
            ["KJcy", [1036]],
            ["kjcy", [1116]],
            ["Kopf", [120130]],
            ["kopf", [120156]],
            ["Kscr", [119974]],
            ["kscr", [12e4]],
            ["lAarr", [8666]],
            ["Lacute", [313]],
            ["lacute", [314]],
            ["laemptyv", [10676]],
            ["lagran", [8466]],
            ["Lambda", [923]],
            ["lambda", [955]],
            ["lang", [10216]],
            ["Lang", [10218]],
            ["langd", [10641]],
            ["langle", [10216]],
            ["lap", [10885]],
            ["Laplacetrf", [8466]],
            ["laquo", [171]],
            ["larrb", [8676]],
            ["larrbfs", [10527]],
            ["larr", [8592]],
            ["Larr", [8606]],
            ["lArr", [8656]],
            ["larrfs", [10525]],
            ["larrhk", [8617]],
            ["larrlp", [8619]],
            ["larrpl", [10553]],
            ["larrsim", [10611]],
            ["larrtl", [8610]],
            ["latail", [10521]],
            ["lAtail", [10523]],
            ["lat", [10923]],
            ["late", [10925]],
            ["lates", [10925, 65024]],
            ["lbarr", [10508]],
            ["lBarr", [10510]],
            ["lbbrk", [10098]],
            ["lbrace", [123]],
            ["lbrack", [91]],
            ["lbrke", [10635]],
            ["lbrksld", [10639]],
            ["lbrkslu", [10637]],
            ["Lcaron", [317]],
            ["lcaron", [318]],
            ["Lcedil", [315]],
            ["lcedil", [316]],
            ["lceil", [8968]],
            ["lcub", [123]],
            ["Lcy", [1051]],
            ["lcy", [1083]],
            ["ldca", [10550]],
            ["ldquo", [8220]],
            ["ldquor", [8222]],
            ["ldrdhar", [10599]],
            ["ldrushar", [10571]],
            ["ldsh", [8626]],
            ["le", [8804]],
            ["lE", [8806]],
            ["LeftAngleBracket", [10216]],
            ["LeftArrowBar", [8676]],
            ["leftarrow", [8592]],
            ["LeftArrow", [8592]],
            ["Leftarrow", [8656]],
            ["LeftArrowRightArrow", [8646]],
            ["leftarrowtail", [8610]],
            ["LeftCeiling", [8968]],
            ["LeftDoubleBracket", [10214]],
            ["LeftDownTeeVector", [10593]],
            ["LeftDownVectorBar", [10585]],
            ["LeftDownVector", [8643]],
            ["LeftFloor", [8970]],
            ["leftharpoondown", [8637]],
            ["leftharpoonup", [8636]],
            ["leftleftarrows", [8647]],
            ["leftrightarrow", [8596]],
            ["LeftRightArrow", [8596]],
            ["Leftrightarrow", [8660]],
            ["leftrightarrows", [8646]],
            ["leftrightharpoons", [8651]],
            ["leftrightsquigarrow", [8621]],
            ["LeftRightVector", [10574]],
            ["LeftTeeArrow", [8612]],
            ["LeftTee", [8867]],
            ["LeftTeeVector", [10586]],
            ["leftthreetimes", [8907]],
            ["LeftTriangleBar", [10703]],
            ["LeftTriangle", [8882]],
            ["LeftTriangleEqual", [8884]],
            ["LeftUpDownVector", [10577]],
            ["LeftUpTeeVector", [10592]],
            ["LeftUpVectorBar", [10584]],
            ["LeftUpVector", [8639]],
            ["LeftVectorBar", [10578]],
            ["LeftVector", [8636]],
            ["lEg", [10891]],
            ["leg", [8922]],
            ["leq", [8804]],
            ["leqq", [8806]],
            ["leqslant", [10877]],
            ["lescc", [10920]],
            ["les", [10877]],
            ["lesdot", [10879]],
            ["lesdoto", [10881]],
            ["lesdotor", [10883]],
            ["lesg", [8922, 65024]],
            ["lesges", [10899]],
            ["lessapprox", [10885]],
            ["lessdot", [8918]],
            ["lesseqgtr", [8922]],
            ["lesseqqgtr", [10891]],
            ["LessEqualGreater", [8922]],
            ["LessFullEqual", [8806]],
            ["LessGreater", [8822]],
            ["lessgtr", [8822]],
            ["LessLess", [10913]],
            ["lesssim", [8818]],
            ["LessSlantEqual", [10877]],
            ["LessTilde", [8818]],
            ["lfisht", [10620]],
            ["lfloor", [8970]],
            ["Lfr", [120079]],
            ["lfr", [120105]],
            ["lg", [8822]],
            ["lgE", [10897]],
            ["lHar", [10594]],
            ["lhard", [8637]],
            ["lharu", [8636]],
            ["lharul", [10602]],
            ["lhblk", [9604]],
            ["LJcy", [1033]],
            ["ljcy", [1113]],
            ["llarr", [8647]],
            ["ll", [8810]],
            ["Ll", [8920]],
            ["llcorner", [8990]],
            ["Lleftarrow", [8666]],
            ["llhard", [10603]],
            ["lltri", [9722]],
            ["Lmidot", [319]],
            ["lmidot", [320]],
            ["lmoustache", [9136]],
            ["lmoust", [9136]],
            ["lnap", [10889]],
            ["lnapprox", [10889]],
            ["lne", [10887]],
            ["lnE", [8808]],
            ["lneq", [10887]],
            ["lneqq", [8808]],
            ["lnsim", [8934]],
            ["loang", [10220]],
            ["loarr", [8701]],
            ["lobrk", [10214]],
            ["longleftarrow", [10229]],
            ["LongLeftArrow", [10229]],
            ["Longleftarrow", [10232]],
            ["longleftrightarrow", [10231]],
            ["LongLeftRightArrow", [10231]],
            ["Longleftrightarrow", [10234]],
            ["longmapsto", [10236]],
            ["longrightarrow", [10230]],
            ["LongRightArrow", [10230]],
            ["Longrightarrow", [10233]],
            ["looparrowleft", [8619]],
            ["looparrowright", [8620]],
            ["lopar", [10629]],
            ["Lopf", [120131]],
            ["lopf", [120157]],
            ["loplus", [10797]],
            ["lotimes", [10804]],
            ["lowast", [8727]],
            ["lowbar", [95]],
            ["LowerLeftArrow", [8601]],
            ["LowerRightArrow", [8600]],
            ["loz", [9674]],
            ["lozenge", [9674]],
            ["lozf", [10731]],
            ["lpar", [40]],
            ["lparlt", [10643]],
            ["lrarr", [8646]],
            ["lrcorner", [8991]],
            ["lrhar", [8651]],
            ["lrhard", [10605]],
            ["lrm", [8206]],
            ["lrtri", [8895]],
            ["lsaquo", [8249]],
            ["lscr", [120001]],
            ["Lscr", [8466]],
            ["lsh", [8624]],
            ["Lsh", [8624]],
            ["lsim", [8818]],
            ["lsime", [10893]],
            ["lsimg", [10895]],
            ["lsqb", [91]],
            ["lsquo", [8216]],
            ["lsquor", [8218]],
            ["Lstrok", [321]],
            ["lstrok", [322]],
            ["ltcc", [10918]],
            ["ltcir", [10873]],
            ["lt", [60]],
            ["LT", [60]],
            ["Lt", [8810]],
            ["ltdot", [8918]],
            ["lthree", [8907]],
            ["ltimes", [8905]],
            ["ltlarr", [10614]],
            ["ltquest", [10875]],
            ["ltri", [9667]],
            ["ltrie", [8884]],
            ["ltrif", [9666]],
            ["ltrPar", [10646]],
            ["lurdshar", [10570]],
            ["luruhar", [10598]],
            ["lvertneqq", [8808, 65024]],
            ["lvnE", [8808, 65024]],
            ["macr", [175]],
            ["male", [9794]],
            ["malt", [10016]],
            ["maltese", [10016]],
            ["Map", [10501]],
            ["map", [8614]],
            ["mapsto", [8614]],
            ["mapstodown", [8615]],
            ["mapstoleft", [8612]],
            ["mapstoup", [8613]],
            ["marker", [9646]],
            ["mcomma", [10793]],
            ["Mcy", [1052]],
            ["mcy", [1084]],
            ["mdash", [8212]],
            ["mDDot", [8762]],
            ["measuredangle", [8737]],
            ["MediumSpace", [8287]],
            ["Mellintrf", [8499]],
            ["Mfr", [120080]],
            ["mfr", [120106]],
            ["mho", [8487]],
            ["micro", [181]],
            ["midast", [42]],
            ["midcir", [10992]],
            ["mid", [8739]],
            ["middot", [183]],
            ["minusb", [8863]],
            ["minus", [8722]],
            ["minusd", [8760]],
            ["minusdu", [10794]],
            ["MinusPlus", [8723]],
            ["mlcp", [10971]],
            ["mldr", [8230]],
            ["mnplus", [8723]],
            ["models", [8871]],
            ["Mopf", [120132]],
            ["mopf", [120158]],
            ["mp", [8723]],
            ["mscr", [120002]],
            ["Mscr", [8499]],
            ["mstpos", [8766]],
            ["Mu", [924]],
            ["mu", [956]],
            ["multimap", [8888]],
            ["mumap", [8888]],
            ["nabla", [8711]],
            ["Nacute", [323]],
            ["nacute", [324]],
            ["nang", [8736, 8402]],
            ["nap", [8777]],
            ["napE", [10864, 824]],
            ["napid", [8779, 824]],
            ["napos", [329]],
            ["napprox", [8777]],
            ["natural", [9838]],
            ["naturals", [8469]],
            ["natur", [9838]],
            ["nbsp", [160]],
            ["nbump", [8782, 824]],
            ["nbumpe", [8783, 824]],
            ["ncap", [10819]],
            ["Ncaron", [327]],
            ["ncaron", [328]],
            ["Ncedil", [325]],
            ["ncedil", [326]],
            ["ncong", [8775]],
            ["ncongdot", [10861, 824]],
            ["ncup", [10818]],
            ["Ncy", [1053]],
            ["ncy", [1085]],
            ["ndash", [8211]],
            ["nearhk", [10532]],
            ["nearr", [8599]],
            ["neArr", [8663]],
            ["nearrow", [8599]],
            ["ne", [8800]],
            ["nedot", [8784, 824]],
            ["NegativeMediumSpace", [8203]],
            ["NegativeThickSpace", [8203]],
            ["NegativeThinSpace", [8203]],
            ["NegativeVeryThinSpace", [8203]],
            ["nequiv", [8802]],
            ["nesear", [10536]],
            ["nesim", [8770, 824]],
            ["NestedGreaterGreater", [8811]],
            ["NestedLessLess", [8810]],
            ["nexist", [8708]],
            ["nexists", [8708]],
            ["Nfr", [120081]],
            ["nfr", [120107]],
            ["ngE", [8807, 824]],
            ["nge", [8817]],
            ["ngeq", [8817]],
            ["ngeqq", [8807, 824]],
            ["ngeqslant", [10878, 824]],
            ["nges", [10878, 824]],
            ["nGg", [8921, 824]],
            ["ngsim", [8821]],
            ["nGt", [8811, 8402]],
            ["ngt", [8815]],
            ["ngtr", [8815]],
            ["nGtv", [8811, 824]],
            ["nharr", [8622]],
            ["nhArr", [8654]],
            ["nhpar", [10994]],
            ["ni", [8715]],
            ["nis", [8956]],
            ["nisd", [8954]],
            ["niv", [8715]],
            ["NJcy", [1034]],
            ["njcy", [1114]],
            ["nlarr", [8602]],
            ["nlArr", [8653]],
            ["nldr", [8229]],
            ["nlE", [8806, 824]],
            ["nle", [8816]],
            ["nleftarrow", [8602]],
            ["nLeftarrow", [8653]],
            ["nleftrightarrow", [8622]],
            ["nLeftrightarrow", [8654]],
            ["nleq", [8816]],
            ["nleqq", [8806, 824]],
            ["nleqslant", [10877, 824]],
            ["nles", [10877, 824]],
            ["nless", [8814]],
            ["nLl", [8920, 824]],
            ["nlsim", [8820]],
            ["nLt", [8810, 8402]],
            ["nlt", [8814]],
            ["nltri", [8938]],
            ["nltrie", [8940]],
            ["nLtv", [8810, 824]],
            ["nmid", [8740]],
            ["NoBreak", [8288]],
            ["NonBreakingSpace", [160]],
            ["nopf", [120159]],
            ["Nopf", [8469]],
            ["Not", [10988]],
            ["not", [172]],
            ["NotCongruent", [8802]],
            ["NotCupCap", [8813]],
            ["NotDoubleVerticalBar", [8742]],
            ["NotElement", [8713]],
            ["NotEqual", [8800]],
            ["NotEqualTilde", [8770, 824]],
            ["NotExists", [8708]],
            ["NotGreater", [8815]],
            ["NotGreaterEqual", [8817]],
            ["NotGreaterFullEqual", [8807, 824]],
            ["NotGreaterGreater", [8811, 824]],
            ["NotGreaterLess", [8825]],
            ["NotGreaterSlantEqual", [10878, 824]],
            ["NotGreaterTilde", [8821]],
            ["NotHumpDownHump", [8782, 824]],
            ["NotHumpEqual", [8783, 824]],
            ["notin", [8713]],
            ["notindot", [8949, 824]],
            ["notinE", [8953, 824]],
            ["notinva", [8713]],
            ["notinvb", [8951]],
            ["notinvc", [8950]],
            ["NotLeftTriangleBar", [10703, 824]],
            ["NotLeftTriangle", [8938]],
            ["NotLeftTriangleEqual", [8940]],
            ["NotLess", [8814]],
            ["NotLessEqual", [8816]],
            ["NotLessGreater", [8824]],
            ["NotLessLess", [8810, 824]],
            ["NotLessSlantEqual", [10877, 824]],
            ["NotLessTilde", [8820]],
            ["NotNestedGreaterGreater", [10914, 824]],
            ["NotNestedLessLess", [10913, 824]],
            ["notni", [8716]],
            ["notniva", [8716]],
            ["notnivb", [8958]],
            ["notnivc", [8957]],
            ["NotPrecedes", [8832]],
            ["NotPrecedesEqual", [10927, 824]],
            ["NotPrecedesSlantEqual", [8928]],
            ["NotReverseElement", [8716]],
            ["NotRightTriangleBar", [10704, 824]],
            ["NotRightTriangle", [8939]],
            ["NotRightTriangleEqual", [8941]],
            ["NotSquareSubset", [8847, 824]],
            ["NotSquareSubsetEqual", [8930]],
            ["NotSquareSuperset", [8848, 824]],
            ["NotSquareSupersetEqual", [8931]],
            ["NotSubset", [8834, 8402]],
            ["NotSubsetEqual", [8840]],
            ["NotSucceeds", [8833]],
            ["NotSucceedsEqual", [10928, 824]],
            ["NotSucceedsSlantEqual", [8929]],
            ["NotSucceedsTilde", [8831, 824]],
            ["NotSuperset", [8835, 8402]],
            ["NotSupersetEqual", [8841]],
            ["NotTilde", [8769]],
            ["NotTildeEqual", [8772]],
            ["NotTildeFullEqual", [8775]],
            ["NotTildeTilde", [8777]],
            ["NotVerticalBar", [8740]],
            ["nparallel", [8742]],
            ["npar", [8742]],
            ["nparsl", [11005, 8421]],
            ["npart", [8706, 824]],
            ["npolint", [10772]],
            ["npr", [8832]],
            ["nprcue", [8928]],
            ["nprec", [8832]],
            ["npreceq", [10927, 824]],
            ["npre", [10927, 824]],
            ["nrarrc", [10547, 824]],
            ["nrarr", [8603]],
            ["nrArr", [8655]],
            ["nrarrw", [8605, 824]],
            ["nrightarrow", [8603]],
            ["nRightarrow", [8655]],
            ["nrtri", [8939]],
            ["nrtrie", [8941]],
            ["nsc", [8833]],
            ["nsccue", [8929]],
            ["nsce", [10928, 824]],
            ["Nscr", [119977]],
            ["nscr", [120003]],
            ["nshortmid", [8740]],
            ["nshortparallel", [8742]],
            ["nsim", [8769]],
            ["nsime", [8772]],
            ["nsimeq", [8772]],
            ["nsmid", [8740]],
            ["nspar", [8742]],
            ["nsqsube", [8930]],
            ["nsqsupe", [8931]],
            ["nsub", [8836]],
            ["nsubE", [10949, 824]],
            ["nsube", [8840]],
            ["nsubset", [8834, 8402]],
            ["nsubseteq", [8840]],
            ["nsubseteqq", [10949, 824]],
            ["nsucc", [8833]],
            ["nsucceq", [10928, 824]],
            ["nsup", [8837]],
            ["nsupE", [10950, 824]],
            ["nsupe", [8841]],
            ["nsupset", [8835, 8402]],
            ["nsupseteq", [8841]],
            ["nsupseteqq", [10950, 824]],
            ["ntgl", [8825]],
            ["Ntilde", [209]],
            ["ntilde", [241]],
            ["ntlg", [8824]],
            ["ntriangleleft", [8938]],
            ["ntrianglelefteq", [8940]],
            ["ntriangleright", [8939]],
            ["ntrianglerighteq", [8941]],
            ["Nu", [925]],
            ["nu", [957]],
            ["num", [35]],
            ["numero", [8470]],
            ["numsp", [8199]],
            ["nvap", [8781, 8402]],
            ["nvdash", [8876]],
            ["nvDash", [8877]],
            ["nVdash", [8878]],
            ["nVDash", [8879]],
            ["nvge", [8805, 8402]],
            ["nvgt", [62, 8402]],
            ["nvHarr", [10500]],
            ["nvinfin", [10718]],
            ["nvlArr", [10498]],
            ["nvle", [8804, 8402]],
            ["nvlt", [60, 8402]],
            ["nvltrie", [8884, 8402]],
            ["nvrArr", [10499]],
            ["nvrtrie", [8885, 8402]],
            ["nvsim", [8764, 8402]],
            ["nwarhk", [10531]],
            ["nwarr", [8598]],
            ["nwArr", [8662]],
            ["nwarrow", [8598]],
            ["nwnear", [10535]],
            ["Oacute", [211]],
            ["oacute", [243]],
            ["oast", [8859]],
            ["Ocirc", [212]],
            ["ocirc", [244]],
            ["ocir", [8858]],
            ["Ocy", [1054]],
            ["ocy", [1086]],
            ["odash", [8861]],
            ["Odblac", [336]],
            ["odblac", [337]],
            ["odiv", [10808]],
            ["odot", [8857]],
            ["odsold", [10684]],
            ["OElig", [338]],
            ["oelig", [339]],
            ["ofcir", [10687]],
            ["Ofr", [120082]],
            ["ofr", [120108]],
            ["ogon", [731]],
            ["Ograve", [210]],
            ["ograve", [242]],
            ["ogt", [10689]],
            ["ohbar", [10677]],
            ["ohm", [937]],
            ["oint", [8750]],
            ["olarr", [8634]],
            ["olcir", [10686]],
            ["olcross", [10683]],
            ["oline", [8254]],
            ["olt", [10688]],
            ["Omacr", [332]],
            ["omacr", [333]],
            ["Omega", [937]],
            ["omega", [969]],
            ["Omicron", [927]],
            ["omicron", [959]],
            ["omid", [10678]],
            ["ominus", [8854]],
            ["Oopf", [120134]],
            ["oopf", [120160]],
            ["opar", [10679]],
            ["OpenCurlyDoubleQuote", [8220]],
            ["OpenCurlyQuote", [8216]],
            ["operp", [10681]],
            ["oplus", [8853]],
            ["orarr", [8635]],
            ["Or", [10836]],
            ["or", [8744]],
            ["ord", [10845]],
            ["order", [8500]],
            ["orderof", [8500]],
            ["ordf", [170]],
            ["ordm", [186]],
            ["origof", [8886]],
            ["oror", [10838]],
            ["orslope", [10839]],
            ["orv", [10843]],
            ["oS", [9416]],
            ["Oscr", [119978]],
            ["oscr", [8500]],
            ["Oslash", [216]],
            ["oslash", [248]],
            ["osol", [8856]],
            ["Otilde", [213]],
            ["otilde", [245]],
            ["otimesas", [10806]],
            ["Otimes", [10807]],
            ["otimes", [8855]],
            ["Ouml", [214]],
            ["ouml", [246]],
            ["ovbar", [9021]],
            ["OverBar", [8254]],
            ["OverBrace", [9182]],
            ["OverBracket", [9140]],
            ["OverParenthesis", [9180]],
            ["para", [182]],
            ["parallel", [8741]],
            ["par", [8741]],
            ["parsim", [10995]],
            ["parsl", [11005]],
            ["part", [8706]],
            ["PartialD", [8706]],
            ["Pcy", [1055]],
            ["pcy", [1087]],
            ["percnt", [37]],
            ["period", [46]],
            ["permil", [8240]],
            ["perp", [8869]],
            ["pertenk", [8241]],
            ["Pfr", [120083]],
            ["pfr", [120109]],
            ["Phi", [934]],
            ["phi", [966]],
            ["phiv", [981]],
            ["phmmat", [8499]],
            ["phone", [9742]],
            ["Pi", [928]],
            ["pi", [960]],
            ["pitchfork", [8916]],
            ["piv", [982]],
            ["planck", [8463]],
            ["planckh", [8462]],
            ["plankv", [8463]],
            ["plusacir", [10787]],
            ["plusb", [8862]],
            ["pluscir", [10786]],
            ["plus", [43]],
            ["plusdo", [8724]],
            ["plusdu", [10789]],
            ["pluse", [10866]],
            ["PlusMinus", [177]],
            ["plusmn", [177]],
            ["plussim", [10790]],
            ["plustwo", [10791]],
            ["pm", [177]],
            ["Poincareplane", [8460]],
            ["pointint", [10773]],
            ["popf", [120161]],
            ["Popf", [8473]],
            ["pound", [163]],
            ["prap", [10935]],
            ["Pr", [10939]],
            ["pr", [8826]],
            ["prcue", [8828]],
            ["precapprox", [10935]],
            ["prec", [8826]],
            ["preccurlyeq", [8828]],
            ["Precedes", [8826]],
            ["PrecedesEqual", [10927]],
            ["PrecedesSlantEqual", [8828]],
            ["PrecedesTilde", [8830]],
            ["preceq", [10927]],
            ["precnapprox", [10937]],
            ["precneqq", [10933]],
            ["precnsim", [8936]],
            ["pre", [10927]],
            ["prE", [10931]],
            ["precsim", [8830]],
            ["prime", [8242]],
            ["Prime", [8243]],
            ["primes", [8473]],
            ["prnap", [10937]],
            ["prnE", [10933]],
            ["prnsim", [8936]],
            ["prod", [8719]],
            ["Product", [8719]],
            ["profalar", [9006]],
            ["profline", [8978]],
            ["profsurf", [8979]],
            ["prop", [8733]],
            ["Proportional", [8733]],
            ["Proportion", [8759]],
            ["propto", [8733]],
            ["prsim", [8830]],
            ["prurel", [8880]],
            ["Pscr", [119979]],
            ["pscr", [120005]],
            ["Psi", [936]],
            ["psi", [968]],
            ["puncsp", [8200]],
            ["Qfr", [120084]],
            ["qfr", [120110]],
            ["qint", [10764]],
            ["qopf", [120162]],
            ["Qopf", [8474]],
            ["qprime", [8279]],
            ["Qscr", [119980]],
            ["qscr", [120006]],
            ["quaternions", [8461]],
            ["quatint", [10774]],
            ["quest", [63]],
            ["questeq", [8799]],
            ["quot", [34]],
            ["QUOT", [34]],
            ["rAarr", [8667]],
            ["race", [8765, 817]],
            ["Racute", [340]],
            ["racute", [341]],
            ["radic", [8730]],
            ["raemptyv", [10675]],
            ["rang", [10217]],
            ["Rang", [10219]],
            ["rangd", [10642]],
            ["range", [10661]],
            ["rangle", [10217]],
            ["raquo", [187]],
            ["rarrap", [10613]],
            ["rarrb", [8677]],
            ["rarrbfs", [10528]],
            ["rarrc", [10547]],
            ["rarr", [8594]],
            ["Rarr", [8608]],
            ["rArr", [8658]],
            ["rarrfs", [10526]],
            ["rarrhk", [8618]],
            ["rarrlp", [8620]],
            ["rarrpl", [10565]],
            ["rarrsim", [10612]],
            ["Rarrtl", [10518]],
            ["rarrtl", [8611]],
            ["rarrw", [8605]],
            ["ratail", [10522]],
            ["rAtail", [10524]],
            ["ratio", [8758]],
            ["rationals", [8474]],
            ["rbarr", [10509]],
            ["rBarr", [10511]],
            ["RBarr", [10512]],
            ["rbbrk", [10099]],
            ["rbrace", [125]],
            ["rbrack", [93]],
            ["rbrke", [10636]],
            ["rbrksld", [10638]],
            ["rbrkslu", [10640]],
            ["Rcaron", [344]],
            ["rcaron", [345]],
            ["Rcedil", [342]],
            ["rcedil", [343]],
            ["rceil", [8969]],
            ["rcub", [125]],
            ["Rcy", [1056]],
            ["rcy", [1088]],
            ["rdca", [10551]],
            ["rdldhar", [10601]],
            ["rdquo", [8221]],
            ["rdquor", [8221]],
            ["CloseCurlyDoubleQuote", [8221]],
            ["rdsh", [8627]],
            ["real", [8476]],
            ["realine", [8475]],
            ["realpart", [8476]],
            ["reals", [8477]],
            ["Re", [8476]],
            ["rect", [9645]],
            ["reg", [174]],
            ["REG", [174]],
            ["ReverseElement", [8715]],
            ["ReverseEquilibrium", [8651]],
            ["ReverseUpEquilibrium", [10607]],
            ["rfisht", [10621]],
            ["rfloor", [8971]],
            ["rfr", [120111]],
            ["Rfr", [8476]],
            ["rHar", [10596]],
            ["rhard", [8641]],
            ["rharu", [8640]],
            ["rharul", [10604]],
            ["Rho", [929]],
            ["rho", [961]],
            ["rhov", [1009]],
            ["RightAngleBracket", [10217]],
            ["RightArrowBar", [8677]],
            ["rightarrow", [8594]],
            ["RightArrow", [8594]],
            ["Rightarrow", [8658]],
            ["RightArrowLeftArrow", [8644]],
            ["rightarrowtail", [8611]],
            ["RightCeiling", [8969]],
            ["RightDoubleBracket", [10215]],
            ["RightDownTeeVector", [10589]],
            ["RightDownVectorBar", [10581]],
            ["RightDownVector", [8642]],
            ["RightFloor", [8971]],
            ["rightharpoondown", [8641]],
            ["rightharpoonup", [8640]],
            ["rightleftarrows", [8644]],
            ["rightleftharpoons", [8652]],
            ["rightrightarrows", [8649]],
            ["rightsquigarrow", [8605]],
            ["RightTeeArrow", [8614]],
            ["RightTee", [8866]],
            ["RightTeeVector", [10587]],
            ["rightthreetimes", [8908]],
            ["RightTriangleBar", [10704]],
            ["RightTriangle", [8883]],
            ["RightTriangleEqual", [8885]],
            ["RightUpDownVector", [10575]],
            ["RightUpTeeVector", [10588]],
            ["RightUpVectorBar", [10580]],
            ["RightUpVector", [8638]],
            ["RightVectorBar", [10579]],
            ["RightVector", [8640]],
            ["ring", [730]],
            ["risingdotseq", [8787]],
            ["rlarr", [8644]],
            ["rlhar", [8652]],
            ["rlm", [8207]],
            ["rmoustache", [9137]],
            ["rmoust", [9137]],
            ["rnmid", [10990]],
            ["roang", [10221]],
            ["roarr", [8702]],
            ["robrk", [10215]],
            ["ropar", [10630]],
            ["ropf", [120163]],
            ["Ropf", [8477]],
            ["roplus", [10798]],
            ["rotimes", [10805]],
            ["RoundImplies", [10608]],
            ["rpar", [41]],
            ["rpargt", [10644]],
            ["rppolint", [10770]],
            ["rrarr", [8649]],
            ["Rrightarrow", [8667]],
            ["rsaquo", [8250]],
            ["rscr", [120007]],
            ["Rscr", [8475]],
            ["rsh", [8625]],
            ["Rsh", [8625]],
            ["rsqb", [93]],
            ["rsquo", [8217]],
            ["rsquor", [8217]],
            ["CloseCurlyQuote", [8217]],
            ["rthree", [8908]],
            ["rtimes", [8906]],
            ["rtri", [9657]],
            ["rtrie", [8885]],
            ["rtrif", [9656]],
            ["rtriltri", [10702]],
            ["RuleDelayed", [10740]],
            ["ruluhar", [10600]],
            ["rx", [8478]],
            ["Sacute", [346]],
            ["sacute", [347]],
            ["sbquo", [8218]],
            ["scap", [10936]],
            ["Scaron", [352]],
            ["scaron", [353]],
            ["Sc", [10940]],
            ["sc", [8827]],
            ["sccue", [8829]],
            ["sce", [10928]],
            ["scE", [10932]],
            ["Scedil", [350]],
            ["scedil", [351]],
            ["Scirc", [348]],
            ["scirc", [349]],
            ["scnap", [10938]],
            ["scnE", [10934]],
            ["scnsim", [8937]],
            ["scpolint", [10771]],
            ["scsim", [8831]],
            ["Scy", [1057]],
            ["scy", [1089]],
            ["sdotb", [8865]],
            ["sdot", [8901]],
            ["sdote", [10854]],
            ["searhk", [10533]],
            ["searr", [8600]],
            ["seArr", [8664]],
            ["searrow", [8600]],
            ["sect", [167]],
            ["semi", [59]],
            ["seswar", [10537]],
            ["setminus", [8726]],
            ["setmn", [8726]],
            ["sext", [10038]],
            ["Sfr", [120086]],
            ["sfr", [120112]],
            ["sfrown", [8994]],
            ["sharp", [9839]],
            ["SHCHcy", [1065]],
            ["shchcy", [1097]],
            ["SHcy", [1064]],
            ["shcy", [1096]],
            ["ShortDownArrow", [8595]],
            ["ShortLeftArrow", [8592]],
            ["shortmid", [8739]],
            ["shortparallel", [8741]],
            ["ShortRightArrow", [8594]],
            ["ShortUpArrow", [8593]],
            ["shy", [173]],
            ["Sigma", [931]],
            ["sigma", [963]],
            ["sigmaf", [962]],
            ["sigmav", [962]],
            ["sim", [8764]],
            ["simdot", [10858]],
            ["sime", [8771]],
            ["simeq", [8771]],
            ["simg", [10910]],
            ["simgE", [10912]],
            ["siml", [10909]],
            ["simlE", [10911]],
            ["simne", [8774]],
            ["simplus", [10788]],
            ["simrarr", [10610]],
            ["slarr", [8592]],
            ["SmallCircle", [8728]],
            ["smallsetminus", [8726]],
            ["smashp", [10803]],
            ["smeparsl", [10724]],
            ["smid", [8739]],
            ["smile", [8995]],
            ["smt", [10922]],
            ["smte", [10924]],
            ["smtes", [10924, 65024]],
            ["SOFTcy", [1068]],
            ["softcy", [1100]],
            ["solbar", [9023]],
            ["solb", [10692]],
            ["sol", [47]],
            ["Sopf", [120138]],
            ["sopf", [120164]],
            ["spades", [9824]],
            ["spadesuit", [9824]],
            ["spar", [8741]],
            ["sqcap", [8851]],
            ["sqcaps", [8851, 65024]],
            ["sqcup", [8852]],
            ["sqcups", [8852, 65024]],
            ["Sqrt", [8730]],
            ["sqsub", [8847]],
            ["sqsube", [8849]],
            ["sqsubset", [8847]],
            ["sqsubseteq", [8849]],
            ["sqsup", [8848]],
            ["sqsupe", [8850]],
            ["sqsupset", [8848]],
            ["sqsupseteq", [8850]],
            ["square", [9633]],
            ["Square", [9633]],
            ["SquareIntersection", [8851]],
            ["SquareSubset", [8847]],
            ["SquareSubsetEqual", [8849]],
            ["SquareSuperset", [8848]],
            ["SquareSupersetEqual", [8850]],
            ["SquareUnion", [8852]],
            ["squarf", [9642]],
            ["squ", [9633]],
            ["squf", [9642]],
            ["srarr", [8594]],
            ["Sscr", [119982]],
            ["sscr", [120008]],
            ["ssetmn", [8726]],
            ["ssmile", [8995]],
            ["sstarf", [8902]],
            ["Star", [8902]],
            ["star", [9734]],
            ["starf", [9733]],
            ["straightepsilon", [1013]],
            ["straightphi", [981]],
            ["strns", [175]],
            ["sub", [8834]],
            ["Sub", [8912]],
            ["subdot", [10941]],
            ["subE", [10949]],
            ["sube", [8838]],
            ["subedot", [10947]],
            ["submult", [10945]],
            ["subnE", [10955]],
            ["subne", [8842]],
            ["subplus", [10943]],
            ["subrarr", [10617]],
            ["subset", [8834]],
            ["Subset", [8912]],
            ["subseteq", [8838]],
            ["subseteqq", [10949]],
            ["SubsetEqual", [8838]],
            ["subsetneq", [8842]],
            ["subsetneqq", [10955]],
            ["subsim", [10951]],
            ["subsub", [10965]],
            ["subsup", [10963]],
            ["succapprox", [10936]],
            ["succ", [8827]],
            ["succcurlyeq", [8829]],
            ["Succeeds", [8827]],
            ["SucceedsEqual", [10928]],
            ["SucceedsSlantEqual", [8829]],
            ["SucceedsTilde", [8831]],
            ["succeq", [10928]],
            ["succnapprox", [10938]],
            ["succneqq", [10934]],
            ["succnsim", [8937]],
            ["succsim", [8831]],
            ["SuchThat", [8715]],
            ["sum", [8721]],
            ["Sum", [8721]],
            ["sung", [9834]],
            ["sup1", [185]],
            ["sup2", [178]],
            ["sup3", [179]],
            ["sup", [8835]],
            ["Sup", [8913]],
            ["supdot", [10942]],
            ["supdsub", [10968]],
            ["supE", [10950]],
            ["supe", [8839]],
            ["supedot", [10948]],
            ["Superset", [8835]],
            ["SupersetEqual", [8839]],
            ["suphsol", [10185]],
            ["suphsub", [10967]],
            ["suplarr", [10619]],
            ["supmult", [10946]],
            ["supnE", [10956]],
            ["supne", [8843]],
            ["supplus", [10944]],
            ["supset", [8835]],
            ["Supset", [8913]],
            ["supseteq", [8839]],
            ["supseteqq", [10950]],
            ["supsetneq", [8843]],
            ["supsetneqq", [10956]],
            ["supsim", [10952]],
            ["supsub", [10964]],
            ["supsup", [10966]],
            ["swarhk", [10534]],
            ["swarr", [8601]],
            ["swArr", [8665]],
            ["swarrow", [8601]],
            ["swnwar", [10538]],
            ["szlig", [223]],
            ["Tab", [9]],
            ["target", [8982]],
            ["Tau", [932]],
            ["tau", [964]],
            ["tbrk", [9140]],
            ["Tcaron", [356]],
            ["tcaron", [357]],
            ["Tcedil", [354]],
            ["tcedil", [355]],
            ["Tcy", [1058]],
            ["tcy", [1090]],
            ["tdot", [8411]],
            ["telrec", [8981]],
            ["Tfr", [120087]],
            ["tfr", [120113]],
            ["there4", [8756]],
            ["therefore", [8756]],
            ["Therefore", [8756]],
            ["Theta", [920]],
            ["theta", [952]],
            ["thetasym", [977]],
            ["thetav", [977]],
            ["thickapprox", [8776]],
            ["thicksim", [8764]],
            ["ThickSpace", [8287, 8202]],
            ["ThinSpace", [8201]],
            ["thinsp", [8201]],
            ["thkap", [8776]],
            ["thksim", [8764]],
            ["THORN", [222]],
            ["thorn", [254]],
            ["tilde", [732]],
            ["Tilde", [8764]],
            ["TildeEqual", [8771]],
            ["TildeFullEqual", [8773]],
            ["TildeTilde", [8776]],
            ["timesbar", [10801]],
            ["timesb", [8864]],
            ["times", [215]],
            ["timesd", [10800]],
            ["tint", [8749]],
            ["toea", [10536]],
            ["topbot", [9014]],
            ["topcir", [10993]],
            ["top", [8868]],
            ["Topf", [120139]],
            ["topf", [120165]],
            ["topfork", [10970]],
            ["tosa", [10537]],
            ["tprime", [8244]],
            ["trade", [8482]],
            ["TRADE", [8482]],
            ["triangle", [9653]],
            ["triangledown", [9663]],
            ["triangleleft", [9667]],
            ["trianglelefteq", [8884]],
            ["triangleq", [8796]],
            ["triangleright", [9657]],
            ["trianglerighteq", [8885]],
            ["tridot", [9708]],
            ["trie", [8796]],
            ["triminus", [10810]],
            ["TripleDot", [8411]],
            ["triplus", [10809]],
            ["trisb", [10701]],
            ["tritime", [10811]],
            ["trpezium", [9186]],
            ["Tscr", [119983]],
            ["tscr", [120009]],
            ["TScy", [1062]],
            ["tscy", [1094]],
            ["TSHcy", [1035]],
            ["tshcy", [1115]],
            ["Tstrok", [358]],
            ["tstrok", [359]],
            ["twixt", [8812]],
            ["twoheadleftarrow", [8606]],
            ["twoheadrightarrow", [8608]],
            ["Uacute", [218]],
            ["uacute", [250]],
            ["uarr", [8593]],
            ["Uarr", [8607]],
            ["uArr", [8657]],
            ["Uarrocir", [10569]],
            ["Ubrcy", [1038]],
            ["ubrcy", [1118]],
            ["Ubreve", [364]],
            ["ubreve", [365]],
            ["Ucirc", [219]],
            ["ucirc", [251]],
            ["Ucy", [1059]],
            ["ucy", [1091]],
            ["udarr", [8645]],
            ["Udblac", [368]],
            ["udblac", [369]],
            ["udhar", [10606]],
            ["ufisht", [10622]],
            ["Ufr", [120088]],
            ["ufr", [120114]],
            ["Ugrave", [217]],
            ["ugrave", [249]],
            ["uHar", [10595]],
            ["uharl", [8639]],
            ["uharr", [8638]],
            ["uhblk", [9600]],
            ["ulcorn", [8988]],
            ["ulcorner", [8988]],
            ["ulcrop", [8975]],
            ["ultri", [9720]],
            ["Umacr", [362]],
            ["umacr", [363]],
            ["uml", [168]],
            ["UnderBar", [95]],
            ["UnderBrace", [9183]],
            ["UnderBracket", [9141]],
            ["UnderParenthesis", [9181]],
            ["Union", [8899]],
            ["UnionPlus", [8846]],
            ["Uogon", [370]],
            ["uogon", [371]],
            ["Uopf", [120140]],
            ["uopf", [120166]],
            ["UpArrowBar", [10514]],
            ["uparrow", [8593]],
            ["UpArrow", [8593]],
            ["Uparrow", [8657]],
            ["UpArrowDownArrow", [8645]],
            ["updownarrow", [8597]],
            ["UpDownArrow", [8597]],
            ["Updownarrow", [8661]],
            ["UpEquilibrium", [10606]],
            ["upharpoonleft", [8639]],
            ["upharpoonright", [8638]],
            ["uplus", [8846]],
            ["UpperLeftArrow", [8598]],
            ["UpperRightArrow", [8599]],
            ["upsi", [965]],
            ["Upsi", [978]],
            ["upsih", [978]],
            ["Upsilon", [933]],
            ["upsilon", [965]],
            ["UpTeeArrow", [8613]],
            ["UpTee", [8869]],
            ["upuparrows", [8648]],
            ["urcorn", [8989]],
            ["urcorner", [8989]],
            ["urcrop", [8974]],
            ["Uring", [366]],
            ["uring", [367]],
            ["urtri", [9721]],
            ["Uscr", [119984]],
            ["uscr", [120010]],
            ["utdot", [8944]],
            ["Utilde", [360]],
            ["utilde", [361]],
            ["utri", [9653]],
            ["utrif", [9652]],
            ["uuarr", [8648]],
            ["Uuml", [220]],
            ["uuml", [252]],
            ["uwangle", [10663]],
            ["vangrt", [10652]],
            ["varepsilon", [1013]],
            ["varkappa", [1008]],
            ["varnothing", [8709]],
            ["varphi", [981]],
            ["varpi", [982]],
            ["varpropto", [8733]],
            ["varr", [8597]],
            ["vArr", [8661]],
            ["varrho", [1009]],
            ["varsigma", [962]],
            ["varsubsetneq", [8842, 65024]],
            ["varsubsetneqq", [10955, 65024]],
            ["varsupsetneq", [8843, 65024]],
            ["varsupsetneqq", [10956, 65024]],
            ["vartheta", [977]],
            ["vartriangleleft", [8882]],
            ["vartriangleright", [8883]],
            ["vBar", [10984]],
            ["Vbar", [10987]],
            ["vBarv", [10985]],
            ["Vcy", [1042]],
            ["vcy", [1074]],
            ["vdash", [8866]],
            ["vDash", [8872]],
            ["Vdash", [8873]],
            ["VDash", [8875]],
            ["Vdashl", [10982]],
            ["veebar", [8891]],
            ["vee", [8744]],
            ["Vee", [8897]],
            ["veeeq", [8794]],
            ["vellip", [8942]],
            ["verbar", [124]],
            ["Verbar", [8214]],
            ["vert", [124]],
            ["Vert", [8214]],
            ["VerticalBar", [8739]],
            ["VerticalLine", [124]],
            ["VerticalSeparator", [10072]],
            ["VerticalTilde", [8768]],
            ["VeryThinSpace", [8202]],
            ["Vfr", [120089]],
            ["vfr", [120115]],
            ["vltri", [8882]],
            ["vnsub", [8834, 8402]],
            ["vnsup", [8835, 8402]],
            ["Vopf", [120141]],
            ["vopf", [120167]],
            ["vprop", [8733]],
            ["vrtri", [8883]],
            ["Vscr", [119985]],
            ["vscr", [120011]],
            ["vsubnE", [10955, 65024]],
            ["vsubne", [8842, 65024]],
            ["vsupnE", [10956, 65024]],
            ["vsupne", [8843, 65024]],
            ["Vvdash", [8874]],
            ["vzigzag", [10650]],
            ["Wcirc", [372]],
            ["wcirc", [373]],
            ["wedbar", [10847]],
            ["wedge", [8743]],
            ["Wedge", [8896]],
            ["wedgeq", [8793]],
            ["weierp", [8472]],
            ["Wfr", [120090]],
            ["wfr", [120116]],
            ["Wopf", [120142]],
            ["wopf", [120168]],
            ["wp", [8472]],
            ["wr", [8768]],
            ["wreath", [8768]],
            ["Wscr", [119986]],
            ["wscr", [120012]],
            ["xcap", [8898]],
            ["xcirc", [9711]],
            ["xcup", [8899]],
            ["xdtri", [9661]],
            ["Xfr", [120091]],
            ["xfr", [120117]],
            ["xharr", [10231]],
            ["xhArr", [10234]],
            ["Xi", [926]],
            ["xi", [958]],
            ["xlarr", [10229]],
            ["xlArr", [10232]],
            ["xmap", [10236]],
            ["xnis", [8955]],
            ["xodot", [10752]],
            ["Xopf", [120143]],
            ["xopf", [120169]],
            ["xoplus", [10753]],
            ["xotime", [10754]],
            ["xrarr", [10230]],
            ["xrArr", [10233]],
            ["Xscr", [119987]],
            ["xscr", [120013]],
            ["xsqcup", [10758]],
            ["xuplus", [10756]],
            ["xutri", [9651]],
            ["xvee", [8897]],
            ["xwedge", [8896]],
            ["Yacute", [221]],
            ["yacute", [253]],
            ["YAcy", [1071]],
            ["yacy", [1103]],
            ["Ycirc", [374]],
            ["ycirc", [375]],
            ["Ycy", [1067]],
            ["ycy", [1099]],
            ["yen", [165]],
            ["Yfr", [120092]],
            ["yfr", [120118]],
            ["YIcy", [1031]],
            ["yicy", [1111]],
            ["Yopf", [120144]],
            ["yopf", [120170]],
            ["Yscr", [119988]],
            ["yscr", [120014]],
            ["YUcy", [1070]],
            ["yucy", [1102]],
            ["yuml", [255]],
            ["Yuml", [376]],
            ["Zacute", [377]],
            ["zacute", [378]],
            ["Zcaron", [381]],
            ["zcaron", [382]],
            ["Zcy", [1047]],
            ["zcy", [1079]],
            ["Zdot", [379]],
            ["zdot", [380]],
            ["zeetrf", [8488]],
            ["ZeroWidthSpace", [8203]],
            ["Zeta", [918]],
            ["zeta", [950]],
            ["zfr", [120119]],
            ["Zfr", [8488]],
            ["ZHcy", [1046]],
            ["zhcy", [1078]],
            ["zigrarr", [8669]],
            ["zopf", [120171]],
            ["Zopf", [8484]],
            ["Zscr", [119989]],
            ["zscr", [120015]],
            ["zwj", [8205]],
            ["zwnj", [8204]]
        ],
        i = {},
        o = {};
    ! function(e, t) {
        for (var r = n.length, i = []; r--;) {
            var o, a = n[r],
                s = a[0],
                u = a[1],
                l = u[0],
                c = l < 32 || l > 126 || 62 === l || 60 === l || 38 === l || 34 === l || 39 === l;
            if (c && (o = t[l] = t[l] || {}), u[1]) {
                var f = u[1];
                e[s] = String.fromCharCode(l) + String.fromCharCode(f), i.push(c && (o[f] = s))
            } else e[s] = String.fromCharCode(l), i.push(c && (o[""] = s))
        }
    }(i, o), r.prototype.decode = function(e) {
        return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, function(e, t) {
            var r;
            if ("#" === t.charAt(0)) {
                var n = "x" === t.charAt(1) ? parseInt(t.substr(2).toLowerCase(), 16) : parseInt(t.substr(1));
                isNaN(n) || n < -32768 || n > 65535 || (r = String.fromCharCode(n))
            } else r = i[t];
            return r || e
        }) : ""
    }, r.decode = function(e) {
        return (new r).decode(e)
    }, r.prototype.encode = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = o[e.charCodeAt(n)];
            if (i) {
                var a = i[e.charCodeAt(n + 1)];
                if (a ? n++ : a = i[""], a) {
                    r += "&" + a + ";", n++;
                    continue
                }
            }
            r += e.charAt(n), n++
        }
        return r
    }, r.encode = function(e) {
        return (new r).encode(e)
    }, r.prototype.encodeNonUTF = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n),
                a = o[i];
            if (a) {
                var s = a[e.charCodeAt(n + 1)];
                if (s ? n++ : s = a[""], s) {
                    r += "&" + s + ";", n++;
                    continue
                }
            }
            r += i < 32 || i > 126 ? "&#" + i + ";" : e.charAt(n), n++
        }
        return r
    }, r.encodeNonUTF = function(e) {
        return (new r).encodeNonUTF(e)
    }, r.prototype.encodeNonASCII = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n);
            i <= 255 ? r += e[n++] : (r += "&#" + i + ";", n++)
        }
        return r
    }, r.encodeNonASCII = function(e) {
        return (new r).encodeNonASCII(e)
    }, e.exports = r
}, function(e, t) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}, function(e, t, r) {
    "use strict";
    (function(t, n) {
        function i(e) {
            return B.from(e)
        }

        function o(e) {
            return B.isBuffer(e) || e instanceof k
        }

        function a(e, t, r) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
            e._events && e._events[t] ? C(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
        }

        function s(e, t) {
            q = q || r(14), e = e || {}, this.objectMode = !!e.objectMode, t instanceof q && (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var n = e.highWaterMark,
                i = this.objectMode ? 16 : 16384;
            this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new j, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (H || (H = r(47).StringDecoder), this.decoder = new H(e.encoding), this.encoding = e.encoding)
        }

        function u(e) {
            if (q = q || r(14), !(this instanceof u)) return new u(e);
            this._readableState = new s(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), P.call(this)
        }

        function l(e, t, r, n, o) {
            var a = e._readableState;
            if (null === t) a.reading = !1, m(e, a);
            else {
                var s;
                o || (s = f(a, t)), s ? e.emit("error", s) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === B.prototype || (t = i(t)), n ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : c(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? c(e, a, t, !1) : b(e, a)) : c(e, a, t, !1))) : n || (a.reading = !1)
            }
            return d(a)
        }

        function c(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && g(e)), b(e, t)
        }

        function f(e, t) {
            var r;
            return o(t) || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")), r
        }

        function d(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }

        function h(e) {
            return e >= G ? e = G : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
        }

        function p(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = h(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
        }

        function m(e, t) {
            if (!t.ended) {
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0, g(e)
            }
        }

        function g(e) {
            var t = e._readableState;
            t.needReadable = !1, t.emittedReadable || (F("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? R(v, e) : v(e))
        }

        function v(e) {
            F("emit readable"), e.emit("readable"), A(e)
        }

        function b(e, t) {
            t.readingMore || (t.readingMore = !0, R(y, e, t))
        }

        function y(e, t) {
            for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (F("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
            t.readingMore = !1
        }

        function _(e) {
            return function() {
                var t = e._readableState;
                F("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && U(e, "data") && (t.flowing = !0, A(e))
            }
        }

        function w(e) {
            F("readable nexttick read 0"), e.read(0)
        }

        function E(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, R(T, e, t))
        }

        function T(e, t) {
            t.reading || (F("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), A(e), t.flowing && !t.reading && e.read(0)
        }

        function A(e) {
            var t = e._readableState;
            for (F("flow", t.flowing); t.flowing && null !== e.read(););
        }

        function S(e, t) {
            if (0 === t.length) return null;
            var r;
            return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = L(e, t.buffer, t.decoder), r
        }

        function L(e, t, r) {
            var n;
            return e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? x(e, t) : I(e, t), n
        }

        function x(e, t) {
            var r = t.head,
                n = 1,
                i = r.data;
            for (e -= i.length; r = r.next;) {
                var o = r.data,
                    a = e > o.length ? o.length : e;
                if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                    a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                    break
                }++n
            }
            return t.length -= n, i
        }

        function I(e, t) {
            var r = B.allocUnsafe(e),
                n = t.head,
                i = 1;
            for (n.data.copy(r), e -= n.data.length; n = n.next;) {
                var o = n.data,
                    a = e > o.length ? o.length : e;
                if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
                    a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                    break
                }++i
            }
            return t.length -= i, r
        }

        function O(e) {
            var t = e._readableState;
            if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || (t.ended = !0, R(D, t, e))
        }

        function D(e, t) {
            e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
        }

        function N(e, t) {
            for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t) return r;
            return -1
        }
        var R = r(26);
        e.exports = u;
        var q, C = r(74);
        u.ReadableState = s;
        var U = (r(39).EventEmitter, function(e, t) {
                return e.listeners(t).length
            }),
            P = r(78),
            B = r(65).Buffer,
            k = t.Uint8Array || function() {},
            M = r(21);
        M.inherits = r(15);
        var V = r(173),
            F = void 0;
        F = V && V.debuglog ? V.debuglog("stream") : function() {};
        var H, j = r(131),
            Q = r(77);
        M.inherits(u, P);
        var Y = ["error", "close", "destroy", "pause", "resume"];
        Object.defineProperty(u.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(e) {
                this._readableState && (this._readableState.destroyed = e)
            }
        }), u.prototype.destroy = Q.destroy, u.prototype._undestroy = Q.undestroy, u.prototype._destroy = function(e, t) {
            this.push(null), t(e)
        }, u.prototype.push = function(e, t) {
            var r, n = this._readableState;
            return n.objectMode ? r = !0 : "string" == typeof e && (t = t || n.defaultEncoding, t !== n.encoding && (e = B.from(e, t), t = ""), r = !0), l(this, e, t, !1, r)
        }, u.prototype.unshift = function(e) {
            return l(this, e, null, !0, !1)
        }, u.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }, u.prototype.setEncoding = function(e) {
            return H || (H = r(47).StringDecoder), this._readableState.decoder = new H(e), this._readableState.encoding = e, this
        };
        var G = 8388608;
        u.prototype.read = function(e) {
            F("read", e), e = parseInt(e, 10);
            var t = this._readableState,
                r = e;
            if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return F("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? O(this) : g(this), null;
            if (0 === (e = p(e, t)) && t.ended) return 0 === t.length && O(this), null;
            var n = t.needReadable;
            F("need readable", n), (0 === t.length || t.length - e < t.highWaterMark) && (n = !0, F("length less than watermark", n)), t.ended || t.reading ? (n = !1, F("reading or ended", n)) : n && (F("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = p(r, t)));
            var i;
            return i = e > 0 ? S(e, t) : null, null === i ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && O(this)), null !== i && this.emit("data", i), i
        }, u.prototype._read = function(e) {
            this.emit("error", new Error("_read() is not implemented"))
        }, u.prototype.pipe = function(e, t) {
            function r(e, t) {
                F("onunpipe"), e === d && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, o())
            }

            function i() {
                F("onend"), e.end()
            }

            function o() {
                F("cleanup"), e.removeListener("close", l), e.removeListener("finish", c), e.removeListener("drain", g), e.removeListener("error", u), e.removeListener("unpipe", r), d.removeListener("end", i), d.removeListener("end", f), d.removeListener("data", s), v = !0, !h.awaitDrain || e._writableState && !e._writableState.needDrain || g()
            }

            function s(t) {
                F("ondata"), b = !1, !1 !== e.write(t) || b || ((1 === h.pipesCount && h.pipes === e || h.pipesCount > 1 && -1 !== N(h.pipes, e)) && !v && (F("false write response, pause", d._readableState.awaitDrain), d._readableState.awaitDrain++, b = !0), d.pause())
            }

            function u(t) {
                F("onerror", t), f(), e.removeListener("error", u), 0 === U(e, "error") && e.emit("error", t)
            }

            function l() {
                e.removeListener("finish", c), f()
            }

            function c() {
                F("onfinish"), e.removeListener("close", l), f()
            }

            function f() {
                F("unpipe"), d.unpipe(e)
            }
            var d = this,
                h = this._readableState;
            switch (h.pipesCount) {
                case 0:
                    h.pipes = e;
                    break;
                case 1:
                    h.pipes = [h.pipes, e];
                    break;
                default:
                    h.pipes.push(e)
            }
            h.pipesCount += 1, F("pipe count=%d opts=%j", h.pipesCount, t);
            var p = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr,
                m = p ? i : f;
            h.endEmitted ? R(m) : d.once("end", m), e.on("unpipe", r);
            var g = _(d);
            e.on("drain", g);
            var v = !1,
                b = !1;
            return d.on("data", s), a(e, "error", u), e.once("close", l), e.once("finish", c), e.emit("pipe", d), h.flowing || (F("pipe resume"), d.resume()), e
        }, u.prototype.unpipe = function(e) {
            var t = this._readableState,
                r = {
                    hasUnpiped: !1
                };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this);
            if (!e) {
                var n = t.pipes,
                    i = t.pipesCount;
                t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
                return this
            }
            var a = N(t.pipes, e);
            return -1 === a ? this : (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this)
        }, u.prototype.on = function(e, t) {
            var r = P.prototype.on.call(this, e, t);
            if ("data" === e) !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === e) {
                var n = this._readableState;
                n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && g(this) : R(w, this))
            }
            return r
        }, u.prototype.addListener = u.prototype.on, u.prototype.resume = function() {
            var e = this._readableState;
            return e.flowing || (F("resume"), e.flowing = !0, E(this, e)), this
        }, u.prototype.pause = function() {
            return F("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (F("pause"), this._readableState.flowing = !1, this.emit("pause")), this
        }, u.prototype.wrap = function(e) {
            var t = this._readableState,
                r = !1,
                n = this;
            e.on("end", function() {
                if (F("wrapped end"), t.decoder && !t.ended) {
                    var e = t.decoder.end();
                    e && e.length && n.push(e)
                }
                n.push(null)
            }), e.on("data", function(i) {
                if (F("wrapped data"), t.decoder && (i = t.decoder.write(i)), (!t.objectMode || null !== i && void 0 !== i) && (t.objectMode || i && i.length)) {
                    n.push(i) || (r = !0, e.pause())
                }
            });
            for (var i in e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                return function() {
                    return e[t].apply(e, arguments)
                }
            }(i));
            for (var o = 0; o < Y.length; o++) e.on(Y[o], n.emit.bind(n, Y[o]));
            return n._read = function(t) {
                F("wrapped _read", t), r && (r = !1, e.resume())
            }, n
        }, u._fromList = S
    }).call(t, r(11), r(12))
}, function(e, t, r) {
    "use strict";

    function n(e) {
        this.afterTransform = function(t, r) {
            return i(e, t, r)
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
    }

    function i(e, t, r) {
        var n = e._transformState;
        n.transforming = !1;
        var i = n.writecb;
        if (!i) return e.emit("error", new Error("write callback called multiple times"));
        n.writechunk = null, n.writecb = null, null !== r && void 0 !== r && e.push(r), i(t);
        var o = e._readableState;
        o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
    }

    function o(e) {
        if (!(this instanceof o)) return new o(e);
        s.call(this, e), this._transformState = new n(this);
        var t = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() {
            "function" == typeof this._flush ? this._flush(function(e, r) {
                a(t, e, r)
            }) : a(t)
        })
    }

    function a(e, t, r) {
        if (t) return e.emit("error", t);
        null !== r && void 0 !== r && e.push(r);
        var n = e._writableState,
            i = e._transformState;
        if (n.length) throw new Error("Calling transform done when ws.length != 0");
        if (i.transforming) throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }
    e.exports = o;
    var s = r(14),
        u = r(21);
    u.inherits = r(15), u.inherits(o, s), o.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t)
    }, o.prototype._transform = function(e, t, r) {
        throw new Error("_transform() is not implemented")
    }, o.prototype._write = function(e, t, r) {
        var n = this._transformState;
        if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, o.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }, o.prototype._destroy = function(e, t) {
        var r = this;
        s.prototype._destroy.call(this, e, function(e) {
            t(e), r.emit("close")
        })
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = this,
            n = this._readableState && this._readableState.destroyed,
            i = this._writableState && this._writableState.destroyed;
        if (n || i) return void(t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || a(o, this, e));
        this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
            !t && e ? (a(o, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
        })
    }

    function i() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function o(e, t) {
        e.emit("error", t)
    }
    var a = r(26);
    e.exports = {
        destroy: n,
        undestroy: i
    }
}, function(e, t, r) {
    e.exports = r(39).EventEmitter
}, function(e, t) {
    e.exports = {
        5: {
            container: "flv",
            resolution: "240p",
            encoding: "Sorenson H.283",
            profile: null,
            bitrate: "0.25",
            audioEncoding: "mp3",
            audioBitrate: 64
        },
        6: {
            container: "flv",
            resolution: "270p",
            encoding: "Sorenson H.263",
            profile: null,
            bitrate: "0.8",
            audioEncoding: "mp3",
            audioBitrate: 64
        },
        13: {
            container: "3gp",
            resolution: null,
            encoding: "MPEG-4 Visual",
            profile: null,
            bitrate: "0.5",
            audioEncoding: "aac",
            audioBitrate: null
        },
        17: {
            container: "3gp",
            resolution: "144p",
            encoding: "MPEG-4 Visual",
            profile: "simple",
            bitrate: "0.05",
            audioEncoding: "aac",
            audioBitrate: 24
        },
        18: {
            container: "mp4",
            resolution: "360p",
            encoding: "H.264",
            profile: "baseline",
            bitrate: "0.5",
            audioEncoding: "aac",
            audioBitrate: 96
        },
        22: {
            container: "mp4",
            resolution: "720p",
            encoding: "H.264",
            profile: "high",
            bitrate: "2-3",
            audioEncoding: "aac",
            audioBitrate: 192
        },
        34: {
            container: "flv",
            resolution: "360p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.5",
            audioEncoding: "aac",
            audioBitrate: 128
        },
        35: {
            container: "flv",
            resolution: "480p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.8-1",
            audioEncoding: "aac",
            audioBitrate: 128
        },
        36: {
            container: "3gp",
            resolution: "240p",
            encoding: "MPEG-4 Visual",
            profile: "simple",
            bitrate: "0.175",
            audioEncoding: "aac",
            audioBitrate: 32
        },
        37: {
            container: "mp4",
            resolution: "1080p",
            encoding: "H.264",
            profile: "high",
            bitrate: "3-5.9",
            audioEncoding: "aac",
            audioBitrate: 192
        },
        38: {
            container: "mp4",
            resolution: "3072p",
            encoding: "H.264",
            profile: "high",
            bitrate: "3.5-5",
            audioEncoding: "aac",
            audioBitrate: 192
        },
        43: {
            container: "webm",
            resolution: "360p",
            encoding: "VP8",
            profile: null,
            bitrate: "0.5-0.75",
            audioEncoding: "vorbis",
            audioBitrate: 128
        },
        44: {
            container: "webm",
            resolution: "480p",
            encoding: "VP8",
            profile: null,
            bitrate: "1",
            audioEncoding: "vorbis",
            audioBitrate: 128
        },
        45: {
            container: "webm",
            resolution: "720p",
            encoding: "VP8",
            profile: null,
            bitrate: "2",
            audioEncoding: "vorbis",
            audioBitrate: 192
        },
        46: {
            container: "webm",
            resolution: "1080p",
            encoding: "vp8",
            profile: null,
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 192
        },
        82: {
            container: "mp4",
            resolution: "360p",
            encoding: "H.264",
            profile: "3d",
            bitrate: "0.5",
            audioEncoding: "aac",
            audioBitrate: 96
        },
        83: {
            container: "mp4",
            resolution: "240p",
            encoding: "H.264",
            profile: "3d",
            bitrate: "0.5",
            audioEncoding: "aac",
            audioBitrate: 96
        },
        84: {
            container: "mp4",
            resolution: "720p",
            encoding: "H.264",
            profile: "3d",
            bitrate: "2-3",
            audioEncoding: "aac",
            audioBitrate: 192
        },
        85: {
            container: "mp4",
            resolution: "1080p",
            encoding: "H.264",
            profile: "3d",
            bitrate: "3-4",
            audioEncoding: "aac",
            audioBitrate: 192
        },
        100: {
            container: "webm",
            resolution: "360p",
            encoding: "VP8",
            profile: "3d",
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 128
        },
        101: {
            container: "webm",
            resolution: "360p",
            encoding: "VP8",
            profile: "3d",
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 192
        },
        102: {
            container: "webm",
            resolution: "720p",
            encoding: "VP8",
            profile: "3d",
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 192
        },
        133: {
            container: "mp4",
            resolution: "240p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.2-0.3",
            audioEncoding: null,
            audioBitrate: null
        },
        134: {
            container: "mp4",
            resolution: "360p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.3-0.4",
            audioEncoding: null,
            audioBitrate: null
        },
        135: {
            container: "mp4",
            resolution: "480p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.5-1",
            audioEncoding: null,
            audioBitrate: null
        },
        136: {
            container: "mp4",
            resolution: "720p",
            encoding: "H.264",
            profile: "main",
            bitrate: "1-1.5",
            audioEncoding: null,
            audioBitrate: null
        },
        137: {
            container: "mp4",
            resolution: "1080p",
            encoding: "H.264",
            profile: "high",
            bitrate: "2.5-3",
            audioEncoding: null,
            audioBitrate: null
        },
        138: {
            container: "mp4",
            resolution: "4320p",
            encoding: "H.264",
            profile: "high",
            bitrate: "13.5-25",
            audioEncoding: null,
            audioBitrate: null
        },
        160: {
            container: "mp4",
            resolution: "144p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.1",
            audioEncoding: null,
            audioBitrate: null
        },
        242: {
            container: "webm",
            resolution: "240p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "0.1-0.2",
            audioEncoding: null,
            audioBitrate: null
        },
        243: {
            container: "webm",
            resolution: "360p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "0.25",
            audioEncoding: null,
            audioBitrate: null
        },
        244: {
            container: "webm",
            resolution: "480p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "0.5",
            audioEncoding: null,
            audioBitrate: null
        },
        247: {
            container: "webm",
            resolution: "720p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "0.7-0.8",
            audioEncoding: null,
            audioBitrate: null
        },
        248: {
            container: "webm",
            resolution: "1080p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "1.5",
            audioEncoding: null,
            audioBitrate: null
        },
        264: {
            container: "mp4",
            resolution: "1440p",
            encoding: "H.264",
            profile: "high",
            bitrate: "4-4.5",
            audioEncoding: null,
            audioBitrate: null
        },
        266: {
            container: "mp4",
            resolution: "2160p",
            encoding: "H.264",
            profile: "high",
            bitrate: "12.5-16",
            audioEncoding: null,
            audioBitrate: null
        },
        271: {
            container: "webm",
            resolution: "1440p",
            encoding: "VP9",
            profile: "profle 0",
            bitrate: "9",
            audioEncoding: null,
            audioBitrate: null
        },
        272: {
            container: "webm",
            resolution: "4320p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "20-25",
            audioEncoding: null,
            audioBitrate: null
        },
        278: {
            container: "webm",
            resolution: "144p 15fps",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "0.08",
            audioEncoding: null,
            audioBitrate: null
        },
        298: {
            container: "mp4",
            resolution: "720p",
            encoding: "H.264",
            profile: "main",
            bitrate: "3-3.5",
            audioEncoding: null,
            audioBitrate: null
        },
        299: {
            container: "mp4",
            resolution: "1080p",
            encoding: "H.264",
            profile: "high",
            bitrate: "5.5",
            audioEncoding: null,
            audioBitrate: null
        },
        302: {
            container: "webm",
            resolution: "720p HFR",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "2.5",
            audioEncoding: null,
            audioBitrate: null
        },
        303: {
            container: "webm",
            resolution: "1080p HFR",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "5",
            audioEncoding: null,
            audioBitrate: null
        },
        308: {
            container: "webm",
            resolution: "1440p HFR",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "10",
            audioEncoding: null,
            audioBitrate: null
        },
        313: {
            container: "webm",
            resolution: "2160p",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "13-15",
            audioEncoding: null,
            audioBitrate: null
        },
        315: {
            container: "webm",
            resolution: "2160p HFR",
            encoding: "VP9",
            profile: "profile 0",
            bitrate: "20-25",
            audioEncoding: null,
            audioBitrate: null
        },
        330: {
            container: "webm",
            resolution: "144p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "0.08",
            audioEncoding: null,
            audioBitrate: null
        },
        331: {
            container: "webm",
            resolution: "240p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "0.1-0.15",
            audioEncoding: null,
            audioBitrate: null
        },
        332: {
            container: "webm",
            resolution: "360p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "0.25",
            audioEncoding: null,
            audioBitrate: null
        },
        333: {
            container: "webm",
            resolution: "240p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "0.5",
            audioEncoding: null,
            audioBitrate: null
        },
        334: {
            container: "webm",
            resolution: "720p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "1",
            audioEncoding: null,
            audioBitrate: null
        },
        335: {
            container: "webm",
            resolution: "1080p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "1.5-2",
            audioEncoding: null,
            audioBitrate: null
        },
        336: {
            container: "webm",
            resolution: "1440p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "5-7",
            audioEncoding: null,
            audioBitrate: null
        },
        337: {
            container: "webm",
            resolution: "2160p HDR, HFR",
            encoding: "VP9",
            profile: "profile 2",
            bitrate: "12-14",
            audioEncoding: null,
            audioBitrate: null
        },
        139: {
            container: "mp4",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "aac",
            audioBitrate: 48
        },
        140: {
            container: "m4a",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "aac",
            audioBitrate: 128
        },
        141: {
            container: "mp4",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "aac",
            audioBitrate: 256
        },
        171: {
            container: "webm",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 128
        },
        172: {
            container: "webm",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "vorbis",
            audioBitrate: 192
        },
        249: {
            container: "webm",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "opus",
            audioBitrate: 48
        },
        250: {
            container: "webm",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "opus",
            audioBitrate: 64
        },
        251: {
            container: "webm",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "opus",
            audioBitrate: 160
        },
        91: {
            container: "ts",
            resolution: "144p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.1",
            audioEncoding: "aac",
            audioBitrate: 48
        },
        92: {
            container: "ts",
            resolution: "240p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.15-0.3",
            audioEncoding: "aac",
            audioBitrate: 48
        },
        93: {
            container: "ts",
            resolution: "360p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.5-1",
            audioEncoding: "aac",
            audioBitrate: 128
        },
        94: {
            container: "ts",
            resolution: "480p",
            encoding: "H.264",
            profile: "main",
            bitrate: "0.8-1.25",
            audioEncoding: "aac",
            audioBitrate: 128
        },
        95: {
            container: "ts",
            resolution: "720p",
            encoding: "H.264",
            profile: "main",
            bitrate: "1.5-3",
            audioEncoding: "aac",
            audioBitrate: 256
        },
        96: {
            container: "ts",
            resolution: "1080p",
            encoding: "H.264",
            profile: "high",
            bitrate: "2.5-6",
            audioEncoding: "aac",
            audioBitrate: 256
        },
        120: {
            container: "flv",
            resolution: "720p",
            encoding: "H.264",
            profile: "Main@L3.1",
            bitrate: "2",
            audioEncoding: "aac",
            audioBitrate: 128
        },
        127: {
            container: "ts",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "aac",
            audioBitrate: 96
        },
        128: {
            container: "ts",
            resolution: null,
            encoding: null,
            profile: null,
            bitrate: null,
            audioEncoding: "aac",
            audioBitrate: 96
        },
        132: {
            container: "ts",
            resolution: "240p",
            encoding: "H.264",
            profile: "baseline",
            bitrate: "0.15-0.2",
            audioEncoding: "aac",
            audioBitrate: 48
        },
        151: {
            container: "ts",
            resolution: "720p",
            encoding: "H.264",
            profile: "baseline",
            bitrate: "0.05",
            audioEncoding: "aac",
            audioBitrate: 24
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(0),
        i = function() {
            for (var e = ["facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn", "radio.zing.vn", "tv.zing.vn", "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net", "xvideos.com", "phimmoi.net", "clip.vn", "yan.vn", "xem.vn", "pornhub.com", "xhamster.com", "dailymotion.com", "xnxx.com", "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net", "soundcloud.com", "youporn.com", "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com", "movies.hdviet.com", "nhac.vui.vn", "nhacso.net", "anime47.com", "tube8.com", "talktv.vn", "chatvl.info", "cohet.tv", "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn", "xemvtv.net", "vkool.net", "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn", "xemphimon.com", "ixxx.com", "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in", "voh.com.vn", "phimsexporn.com", "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com", "24h.com.vn", "phim.clip.vn", "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn", "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com", "gamek.vn", "phapluattp.vn", "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn", "videos.vietgiaitri.com", "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv", "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com", "bongda365.com.vn", "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com", "phimdata.com", "phimnhanh.net", "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com", "phim7.com", "hayxemphim.com", "m-viet.com", "thethaoclip.com", "nhac.hay365.com", "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv", "vino.vn/mp3", "haivl.io", "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com", "123tv.vn", "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net", "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com", "txxx.com", "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com", "tv.naver.com", "tv.tuoitre.vn", "icdrama.se", "video.thanhnien.vn", "spankbang.com", "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com", "thethao247.vn", "e.vnexpress.net", "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com", "emdep.vn", "tuoitre.vn", "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn", "bongdaso.com", "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com", "buzzfeed.com", "businessinsider.com", "cnet.com", "dailymail.co.uk"], t = {}, r = 0, i = e.length; r < i; ++r) {
                var o = e[r];
                t[o] = r + 1
            }
            return function(e) {
                for (var r = n.UrlUtils.getHost(e), i = t[r]; !i && r;) {
                    var o = r.indexOf(".") + 1;
                    if (0 === o) break;
                    r = r.substr(o), i = t[r]
                }
                return 100 + (0 | i)
            }
        }();
    t.a = i
}, function(e, t) {
    e.exports = function(e, t, r) {
        var n = new Map;
        return fetch(e).then(function(e) {
            return e.text()
        }).then(function(e) {
            if ("function" == typeof r) return void r(null, e, e);
            var t = n.get("data");
            t && t.forEach(function(t) {
                return t(e)
            });
            var i = n.get("end");
            i && i.forEach(function(e) {
                return e()
            })
        }).catch(function(e) {
            if ("function" == typeof r) return void r(e);
            var t = n.get("error");
            t && t.forEach(function(t) {
                return t(e)
            })
        }), {
            on: function(e, t) {
                var r = n.get(e) || new Set;
                r.add(t), n.set(e, r)
            },
            setEncoding: function() {}
        }
    }
}, , , function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}, , function(e, t, r) {
    "use strict";
    var n = function() {
        this._cache = {}
    };
    n.DEFAULT_TTL = 12e5, n.prototype = {
        constructor: n,
        processRequest: function(e, t, r) {
            var n = this;
            switch (t) {
                case "get":
                    return n.get(r.key);
                case "put":
                    n.put(r.key, r.value, r.ttl);
                    break;
                case "delete":
                    n.delete(r.key)
            }
        },
        get: function(e) {
            var t = this;
            return new Promise(function(r, n) {
                e in t._cache ? r(t._cache[e]) : n(null)
            })
        },
        put: function(e, t, r) {
            e && void 0 !== t && (r = r || n.DEFAULT_TTL, this._cache[e] = t, setTimeout(this.delete.bind(this, e), r))
        },
        delete: function(e) {
            this._cache[e] && delete this._cache[e]
        }
    }, t.a = new n
}, function(e, t, r) {
    "use strict";
    var n = (r(5), r(68)),
        i = function() {
            var e = this;
            this._media = {}, chrome.tabs.onRemoved.addListener(function(t) {
                e.resetAllMedia(t, !0)
            })
        };
    i.prototype = {
        constructor: i,
        processRequest: function(e, t, r) {
            var n = this;
            switch (t) {
                case "reset_all":
                    n.resetAllMedia(e);
                    break;
                case "set_present":
                    n.setHasMedia(e, r)
            }
        },
        showPageActionState: function(e) {
            var t = !!this._media[e];
            chrome.pageAction[t ? "show" : "hide"](e)
        },
        _requestMediaFromCS: function(e) {
            return new Promise(function(t) {
                chrome.tabs.sendMessage(e, {
                    requestType: "get_media"
                }, function(e) {
                    t(e)
                })
            })
        },
        resetAllMedia: function(e, t) {
            delete this._media[e], t || this.showPageActionState(e)
        },
        setHasMedia: function(e, t) {
            this._media[e] = t, this.showPageActionState(e)
        },
        getMediaForTab: function(e) {
            var t = this;
            return new Promise(function(r) {
                t._requestMediaFromCS(e).then(function(t) {
                    var i = new n.a(t, e, function() {
                        r(i)
                    })
                })
            })
        }
    }, t.a = new i
}, function(e, t, r) {
    "use strict";

    function n() {
        function e(e, t) {
            if (e) {
                if ("USER_CANCELED" === e) return void o.a.log("Download", o.a.DOWNLOAD_CANCELED);
                var r = void 0;
                0 === e.indexOf("SERVER_") ? r = "RefrSE" : 0 === e.indexOf("FILE_") && (r = "RefrFE"), r && o.a.log(r, t.ref)
            }
        }
        var t = this;
        t._callbacks = {}, t._data = new Map, t._tabsWithBottomTooltip = new Set, t._tabMedia2id = {}, chrome.downloads.onCreated.addListener(function(e) {
            t._data.set(e.id, {
                item: e,
                tid: null
            }), t._tabsWithBottomTooltip.forEach(function(e) {
                chrome.tabs.sendMessage(e, {
                    requestType: "widget",
                    method: "new_download"
                }), t._tabsWithBottomTooltip.delete(e)
            })
        }), chrome.downloads.onErased.addListener(function(e) {
            var r = t._data.get(e);
            r && null !== r.tid && t._sendMessage(r.tid, "erased", e), t._data.delete(e), t._tabsWithBottomTooltip.delete(e)
        }), chrome.downloads.onChanged.addListener(function(r) {
            var n = t._data.get(r.id);
            n && null !== n.tid && (t._sendMessage(n.tid, "changed", r), r.error && e(r.error.current, n), t._onChange(r))
        }), chrome.tabs.onRemoved.addListener(function(e) {
            delete t._callbacks[e], delete t._tabMedia2id[e]
        }), this.downloadsStatsWatcher()
    }
    var i = r(0),
        o = r(3),
        a = r(10),
        s = r(80),
        u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    n.prototype = {
        processRequest: function(e, t, r) {
            var n = this;
            switch (t) {
                case "download":
                    return n.download(e, r, !0);
                case "pause":
                    n.pause(r);
                    break;
                case "resume":
                    n.resume(r);
                    break;
                case "cancel":
                    n.cancel(r);
                    break;
                case "open":
                    n.open(r);
                    break;
                case "show":
                    n.show(r);
                    break;
                case "play":
                    n.play(r);
                    break;
                case "bottom_tooltip_shown":
                    n._tabsWithBottomTooltip.add(e)
            }
        },
        _sendMessage: function(e, t, r, n) {
            chrome.tabs.sendMessage(e, {
                requestType: "downloads",
                method: t,
                params: r
            }, n)
        },
        _onChange: function(e) {
            var t = this._data.get(e.id);
            if (t) {
                var r = t.item;
                for (var n in e) "id" !== n && (r[n] = e[n].current);
                i.Utils.call(this._callbacks[t.tid], this, t.mid, r, e), (e.state && ("interrupted" === e.state.current || "complete" === e.state.current) || e.exists && !1 === e.exists.current) && (this._sendMessage(t.tid, "widget_progress", r), chrome.runtime.sendMessage({
                    requestType: "downloads",
                    method: "widget_progress",
                    params: r
                }), e.exists && !e.exists.current && this._data.delete(e.id))
            }
        },
        _options: function(e) {
            var t = {
                    filename: e.filename
                },
                r = e.url;
            if ("object" === (void 0 === r ? "undefined" : u(r))) {
                if (!r.videoUrl || !r.audioUrl) return;
                chrome.mediaDownload ? (t.videoUrl = r.videoUrl, t.audioUrl = r.audioUrl) : t.url = r.videoUrl
            } else t.url = r;
            if (chrome.mediaDownload) {
                var n = e.referrer;
                n && (t.referrer = n);
                var o = [t.url, t.audioUrl, t.videoUrl].filter(i.Utils.defined);
                i.Utils.isMatches(o, a.e) && (t.streamsNumber = 1), e.hls && (t.streamsNumber = -42)
            }
            if (void 0 !== e.soundOnly) {
                t.soundOnly = e.soundOnly, t.soundQuality = e.resolution ? parseInt(e.resolution) : 128
            }
            var s = /\.yt_srt$/i;
            return e.filename.match(s) && (t.isYoutubeSubtitles = !0, t.filename = t.filename.replace(s, ".srt")), t
        },
        onChange: function(e, t) {
            var r = this._callbacks[e];
            r || (r = this._callbacks[e] = []), r.push(t)
        },
        download: function(e, t, n) {
            var i = this,
                a = t.referrer,
                u = t.id;
            return new Promise(function(l, c) {
                function f(t) {
                    if (t) {
                        var f = i._data.get(t);
                        if (f) {
                            f.tid = e, f.mid = u, f.ref = r.i(s.a)(a);
                            var d = i._tabMedia2id[e];
                            return d || (d = i._tabMedia2id[e] = {}), d[u] = t, o.a.log("Refr", f.ref), l(f.item), void(n || i._sendMessage(e, "created", f))
                        }
                    }
                    c(chrome.runtime.lastError)
                }
                var d = i._options(t);
                if (d ? d.url ? (d.conflictAction = "uniquify", chrome.downloads.download(d, f)) : chrome.mediaDownload.combineStreams(d, f) : f(), d.referrer && d.referrer.includes("youtube.com")) {
                    var h = d.filename.split(".").pop();
                    o.a.logYtExtension(h)
                }
            })
        },
        downloadsStatsWatcher: function() {
            var e = this;
            setInterval(function() {
                e.getDownloadsStats()
            }, 1e3)
        },
        getDownloadsStats: function() {
            var e = this;
            if (!this._data.size) return null;
            chrome.downloads.search({
                state: "in_progress",
                paused: !1
            }, function(t) {
                if (t && t.length) {
                    t.filter(function(t) {
                        return e._data.has(t.id)
                    }).forEach(function(t) {
                        var r = e._data.get(t.id),
                            n = r.tid;
                        null !== n && e._sendMessage(n, "widget_progress", t), chrome.runtime.sendMessage({
                            requestType: "downloads",
                            method: "widget_progress",
                            params: t
                        })
                    })
                }
            })
        },
        item: function(e, t) {
            var r = this._tabMedia2id[e],
                n = r && r[t],
                i = this._data.get(n);
            return i && i.item
        },
        pause: function(e) {
            chrome.downloads.pause(e)
        },
        resume: function(e) {
            chrome.downloads.resume(e)
        },
        cancel: function(e) {
            chrome.downloads.cancel(e)
        },
        open: function(e) {
            chrome.downloads.open(e)
        },
        show: function(e) {
            chrome.downloads.show(+e)
        },
        play: function(e) {
            chrome.downloads.play(e)
        }
    }, t.a = new n
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.indexOf(s);
        return -1 !== t ? e.slice(t + u) : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(0),
        o = function() {
            this._replacers = [], this._urls = []
        };
    o.prototype = {
        _onBeforeSendHeader: function(e) {
            return {
                requestHeaders: this._replacers.reduce(function(e, t) {
                    return t(e)
                }, e.requestHeaders)
            }
        },
        _addUrls: function(e) {
            e && (Array.isArray(e) || (e = [e]), -1 !== e.indexOf("<all_urls>") ? this._urls = ["<all_urls>"] : this._urls = this._urls.concat(e))
        },
        addReplacer: function(e, t) {
            this._addUrls(t), "function" == typeof e && this._replacers.push(e)
        },
        startListening: function() {
            chrome.webRequest.onBeforeSendHeaders.addListener(this._onBeforeSendHeader.bind(this), {
                urls: this._urls
            }, ["blocking", "requestHeaders"])
        }
    };
    var a = new o,
        s = "X-Savior-Replace-",
        u = s.length,
        l = i.Utils.defined;
    a.addReplacer(function(e) {
        var t = {},
            r = {},
            i = void 0,
            o = void 0,
            a = void 0,
            s = void 0,
            u = void 0,
            c = void 0,
            f = void 0;
        for (c = 0, f = e.length; c < f; ++c) i = e[c], o = i.name, a = i.value, s = n(o), s ? (u = t[s], l(u) ? e[u].name = a : r[s] = a, e.splice(c, 1), c--, f--) : l(r[o]) ? (i.value = r[o], delete r[o]) : t[o] = c;
        return Object.keys(r).forEach(function(t) {
            e.push({
                name: t,
                value: r[t]
            })
        }), e
    }, ["*://*.nhaccuatui.com/flash/xml?key3=*", "*://player.vimeo.com/video/*/config*", "*://tv.zing.vn/video/*", "*://mp3.zing.vn/xhr/*"]), a.startListening()
}, function(e, t, r) {
    "use strict";

    function n() {
        chrome.tabs.onAttached.addListener(function(e, t) {
            t.isFromPanel && (o.a.log("Pip", o.a.PIP_RESTORE_CLICK), chrome.tabs.sendMessage(e, {
                requestType: "restore_tab"
            }))
        })
    }

    function i(e) {
        return new Promise(function(t) {
            chrome.windows.getAll({
                populate: !0
            }, function(r) {
                for (var n = 0; n < r.length; n++) {
                    var i = r[n];
                    if ("panel" === i.type && 0 !== i.tabs.length && i.tabs[0].url === e) return void t(!0)
                }
                t(!1)
            })
        })
    }
    var o = r(3),
        a = r(0),
        s = r(80);
    n.prototype = {
        constructor: n,
        processRequest: function(e) {
            var t = e.method;
            if (t && this.requestActions[t]) return this.requestActions[t].apply(this, arguments)
        },
        requestActions: {
            detachTab: function(e, t) {
                var n = e.params,
                    i = t.tab.url,
                    a = t.tab.id;
                chrome.windows.create(this.getWindowOptions(n, i, a), function() {
                    o.a.log("Pip", o.a.PIP_DETACH_CLICK);
                    var e = r.i(s.a)(i);
                    o.a.log("RefrPin", e)
                })
            },
            pipUrl: function(e) {
                var t = e.params;
                i(t.url).then(function(e) {
                    if (!e) {
                        var r = {
                            type: "panel",
                            width: t.width,
                            height: t.height + 36,
                            url: t.url
                        };
                        t.isAds && a.BrFeatures.IS_ADS_PIP_PARAMS && (r.isAds = !0), "Coc Coc" === navigator.vendor && (r.proportional = !0), chrome.windows.create(r, function() {
                            o.a.log("Pip", o.a.PIP_SITE_LINK_CLICK)
                        })
                    }
                })
            },
            restorePanelToTab: function(e, t) {
                var r = t.tab.id;
                try {
                    chrome.tabs.move(r, {
                        index: -1,
                        restoreFromPanel: !0
                    })
                } catch (e) {}
            }
        },
        getWindowOptions: function(e, t, r) {
            var n = {
                width: e.width,
                height: e.height + 36,
                type: "panel",
                url: t
            };
            return e.incognito && (n.incognito = !0), "Coc Coc" === navigator.vendor && (n.proportional = !0, n.moveTabToPanel = !0, n.forceAlwaysOnTop = !0, n.tabId = r), n
        }
    }, t.a = new n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        return {
            name: e,
            hosts: Array.isArray(t) ? t : [t],
            match: r
        }
    }

    function i(e, t, r) {
        chrome.tabs.sendMessage(e, {
            requestType: "request.matched",
            name: t,
            result: r
        })
    }

    function o(e, t) {
        if ("flv" !== e.ext) return !1;
        var r = t.server;
        return r && -1 !== r.indexOf("icecast")
    }

    function a(e, t) {
        if (!t || r.i(f.c)(e.ext)) return !0;
        if ("vhosting.vcmedia.vn" === e.host) return !0;
        var n = +t;
        Number.isNaN(n) && (n = null);
        var i = l.a.get("min_stream_size");
        return !(null !== n && n < i) && (e.size = n, !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = r(0),
        u = r(16),
        l = r(5),
        c = r(17),
        f = r(10),
        d = function(e) {
            return u.a.check(e.url, "requests") || u.a.check(e.url)
        },
        h = function() {};
    h.prototype = {
        constructor: h,
        name: "default",
        match: function(e, t, n) {
            if (!d(t) && n["content-type"]) {
                var i = t;
                "plist.vn-hd.com" === i.host && r.i(f.c)(i.ext) ? i.type = "video" : i = s.Utils.detectMediaTypeAndExt(i, n["content-type"]), c.a.isValidData(i) && !o(i, n) && (i.url = this._filterUrl(e.url), (302 === e.statusCode || a(i, n["content-length"])) && (302 === e.statusCode && e.redirectUrl && (i.altUrl = this._filterUrl(e.redirectUrl)), this._reportNewMedia(e, i)))
            }
        },
        _reportNewMedia: function(e, t) {
            function r(e) {
                var r = s.UrlUtils.parse(e);
                s.Utils.isMatches(r.host, f.d) || !r.protocol.match(/^http|^ftp/) || "coccoc.com" === r.host && "/webhp" === r.pathname || (t.referrer = e, i(o, n.name, t))
            }
            var n = this,
                o = e.tabId; - 1 === e.parentFrameId ? chrome.tabs.get(o, function(e) {
                e && r(e.url)
            }) : chrome.webNavigation.getAllFrames({
                tabId: o
            }, function(t) {
                if (t) {
                    var n = t.filter(function(t) {
                        return t.frameId === e.frameId
                    })[0];
                    n && r(n.url)
                }
            })
        },
        _filterUrl: function(e) {
            return e.match(/googlevideo\.com/g) && (e = e.replace(/[&?]begin=\d+/g, "")), e
        }
    };
    var p = function(e) {
        this._listeners = e, this._init()
    };
    p.prototype = {
        constructor: p,
        _init: function() {
            var e = this._onResponseStarted.bind(this),
                t = {
                    urls: ["*://*/*"],
                    types: ["xmlhttprequest", "object", "other", "script"]
                };
            chrome.webRequest.onBeforeRedirect.addListener(e, t, ["responseHeaders"]), chrome.webRequest.onResponseStarted.addListener(e, t, ["responseHeaders"])
        },
        _onResponseStarted: function(e) {
            if (!(e.tabId < 0)) {
                var t = this._parseHeaders(e.responseHeaders),
                    r = s.UrlUtils.parse(e.url);
                this._listeners.some(function(n) {
                    if (!n.hosts || s.Utils.isMatches(r.host, n.hosts)) {
                        var o = n.match(e, r, t);
                        return o && i(e.tabId, n.name, o), !0
                    }
                })
            }
        },
        _parseHeaders: function(e) {
            var t = {};
            return e.length ? (e.forEach(function(e) {
                t[e.name.toLowerCase()] = e.value.toLowerCase()
            }), t) : {}
        }
    }, new p([n("youtube", "youtube.com", function(e, t) {
        var r = void 0;
        if (t.pathname.match(/^\/(api|get)_video_info/) && (r = t.search.match(/(?:&|\?)video_id=([^&]+)(?:&|$)/i))) return r[1]
    }), n("zingvn", /[a-z0-9]+\.zing\.vn/i, function(e, t) {
        var r = t.pathname;
        return r.includes("load-song") || r.includes("album-xml") || r.includes("video-xml") ? t.protocol + "//" + t.host + t.pathname : r.match(/json\/playlist\/get-source\/playlist\/[A-z-]+/gi) ? t.protocol + "//" + t.host + t.pathname : r.match(/json\/song\/get-source\/[A-z-]+/gi) ? t.protocol + "//" + t.host + t.pathname : r.match(/xhr\/media\/get-source/gi) ? t.url : r.match(/xml\/radio\/[A-z-]+/gi) ? t.protocol + "//" + t.host + t.pathname : void 0
    }), n("nhaccuatui", "www.nhaccuatui.com", function(e, t) {
        if (t.search.match(/key[0-9]=[0-9a-f]{32}/i)) return e.url
    }), n("dailymotion", /(www\.)?dailymotion\.com$/, function(e, t) {
        var r = t.pathname.match(/^\/sequence\/(play|full)\/([a-z0-9]+)/i);
        if (r) return r[2]
    }), n("vimeo", /player\.vimeo\.com$/i, function(e, t) {
        if ((t.pathname + t.search).match(/\/video\/(\d+)\/config(\?|$)/i)) return e.url
    }), n("soundcloud", /api\.soundcloud\.com/i, function(e, t) {
        if (t.url.match(/api\.soundcloud\.com\/i1\/tracks\/[0-9]+\/streams\?client_id/gi)) return e.url
    }), n("kenh14", /hls\.mediacdn\.vn/i, function(e, t) {
        if (t.url.match(/hls\.mediacdn\.vn\/kenh14\/\S+\.mp4\.json/gi)) return e.url
    }), n("tuoitre", /hls\.tuoitre\.vn/i, function(e, t) {
        if (t.url.match(/hls\.tuoitre\.vn\/tuoitre\/\S+\.mp4\.json/gi)) return e.url
    }), new h])
}, function(e, t, r) {
    var n = r(140);
    e.exports = n
}, , , , , , , , , , function(e, t) {
    e.exports = '<div class="j-media-scope media-scope">\n    <span class="filename">{{title}}</span>\n\n    <div class="select-wrapper">\n        <span class="select">\n            {{#media}}\n                {{#media}}\n                    <span class="j-quality-option quality-option" data-quality="{{ext}}/{{quality}}/{{resolution}}" hidden>\n                        <span class="selected-type">{{i18n_type}}</span>\n                        <span class="quality-option-ext-quality">\n                            {{#quality}} {{quality}}{{/quality}}\n                            <span class="quality-option-ext">.{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}</span>\n                        </span>\n                        <span class="file-size{{#size}} done{{/size}}" id="size_{{id}}">{{size}}</span>\n                    </span>\n                {{/media}}\n            {{/media}}\n        </span>\n\n        \x3c!-- Pseudo Select --\x3e\n        <div class="quality-selector-box j-quality-selector" hidden>\n            {{#media}}\n                <div class="extension-box">\n                    <div class="extensions-label"><strong>\n                        {{i18n_type}}\n                    </strong></div>\n                    {{#media}}\n                        <div data-quality-value="{{ext}}/{{quality}}/{{resolution}}" class="quality-label j-quality">\n                            {{quality}}\n\n                            <span class="media-sub-info">\n                                {{resolution}}\n                            </span>\n\n                            <span class="media-sub-info j-checked-size">\n                                {{size}}\n                            </span>\n\n                            <span class="media-sub-info">\n                                .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                            </span>\n                        </div>\n                    {{/media}}\n                </div>\n            {{/media}}\n        </div>\n    </div>\n\n    <div class="progress-box">\n        <div class="progress-info progress-text">\n            ...\n        </div>\n\n        <div class="progress-info speed-text">\n            ...\n        </div>\n\n        <div class="progress-bar">\n            <div class="bar"></div>\n        </div>\n    </div>\n\n    {{#media}}\n        {{#media}}\n            <a title="{{title}}" class="download-btn j-quality-download"\n               data-quality="{{ext}}/{{quality}}/{{resolution}}"\n               data-id="{{id}}"\n               data-url="{{url}}"\n               id="media_{{id}}"\n               hidden>\n                <span class="d">{{i18n_download}}</span>\n            </a>\n        {{/media}}\n    {{/media}}\n\n    <button class="play-now-btn">\n        <span class="play-now-play-icon">&#9654;</span> {{i18n_play_now}}\n    </button>\n</div>'
}, function(e, t) {
    e.exports = '<li class="j-media-scope media-scope">\n    <span class="filename">{{title}}</span>\n\n    <div class="select-wrapper">\n        <span class="select {{#is_only}}disabled{{/is_only}}">\n            {{#media}}\n                {{#media}}\n                    <span class="j-quality-option quality-option" data-quality="{{ext}}/{{quality}}/{{resolution}}" hidden>\n                        <span class="selected-type">{{i18n_type}}</span>\n                        <span class="quality-option-ext-quality">\n                            {{#quality}} {{quality}}{{/quality}}\n                            <span class="quality-option-ext">.{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}</span>\n                        </span>\n                        <span class="file-size{{#size}} done{{/size}}" id="size_{{id}}">{{size}}</span>\n                    </span>\n                {{/media}}\n            {{/media}}\n        </span>\n\n        \x3c!-- Pseudo Select --\x3e\n        <div class="quality-selector-box j-quality-selector" hidden>\n            {{#media}}\n                <div class="extension-box">\n                    <div class="extensions-label"><strong>\n                        {{i18n_type}}\n                    </strong></div>\n                    {{#media}}\n                        <div data-quality-value="{{ext}}/{{quality}}/{{resolution}}" class="quality-label j-quality">\n                            {{quality}}\n\n                            <span class="media-sub-info">\n                                {{resolution}}\n                            </span>\n\n                            <span class="media-sub-info j-checked-size">\n                                {{size}}\n                            </span>\n\n                            <span class="media-sub-info">\n                                .{{i18n_ext}}{{^i18n_ext}}{{ext}}{{/i18n_ext}}\n                            </span>\n                        </div>\n                    {{/media}}\n                </div>\n            {{/media}}\n        </div>\n    </div>\n\n\n    <div class="progress-box">\n        <div class="progress-info progress-text">\n            ...\n        </div>\n\n        <div class="progress-info speed-text">\n            ...\n        </div>\n\n        <div class="progress-bar">\n            <div class="bar"></div>\n        </div>\n    </div>\n\n    {{#media}}\n        {{#media}}\n            <a title="{{title}}" class="download-btn j-quality-download"\n               data-quality="{{ext}}/{{quality}}/{{resolution}}"\n               data-id="{{id}}"\n               id="media_{{id}}"\n               hidden>\n                <span class="d">{{i18n_download}}</span>\n            </a>\n        {{/media}}\n    {{/media}}\n\n    <button class="play-now-btn">\n        &#9654; {{i18n_play_now}}\n    </button>\n</li>'
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
    }

    function i(e) {
        return 3 * e.length / 4 - n(e)
    }

    function o(e) {
        var t, r, i, o, a, s = e.length;
        o = n(e), a = new f(3 * s / 4 - o), r = o > 0 ? s - 4 : s;
        var u = 0;
        for (t = 0; t < r; t += 4) i = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], a[u++] = i >> 16 & 255, a[u++] = i >> 8 & 255, a[u++] = 255 & i;
        return 2 === o ? (i = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & i) : 1 === o && (i = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, a[u++] = i >> 8 & 255, a[u++] = 255 & i), a
    }

    function a(e) {
        return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e]
    }

    function s(e, t, r) {
        for (var n, i = [], o = t; o < r; o += 3) n = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], i.push(a(n));
        return i.join("")
    }

    function u(e) {
        for (var t, r = e.length, n = r % 3, i = "", o = [], a = 0, u = r - n; a < u; a += 16383) o.push(s(e, a, a + 16383 > u ? u : a + 16383));
        return 1 === n ? (t = e[r - 1], i += l[t >> 2], i += l[t << 4 & 63], i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i += l[t >> 10], i += l[t >> 4 & 63], i += l[t << 2 & 63], i += "="), o.push(i), o.join("")
    }
    t.byteLength = i, t.toByteArray = o, t.fromByteArray = u;
    for (var l = [], c = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = 0, p = d.length; h < p; ++h) l[h] = d[h], c[d.charCodeAt(h)] = h;
    c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
}, , , , , , , , , , , , , , , , , function(e, t, r) {
    e.exports = {
        XmlEntities: r(123),
        Html4Entities: r(122),
        Html5Entities: r(73),
        AllHtmlEntities: r(73)
    }
}, function(e, t) {
    function r() {}
    for (var n = ["apos", "nbsp", "iexcl", "cent", "pound", "curren", "yen", "brvbar", "sect", "uml", "copy", "ordf", "laquo", "not", "shy", "reg", "macr", "deg", "plusmn", "sup2", "sup3", "acute", "micro", "para", "middot", "cedil", "sup1", "ordm", "raquo", "frac14", "frac12", "frac34", "iquest", "Agrave", "Aacute", "Acirc", "Atilde", "Auml", "Aring", "Aelig", "Ccedil", "Egrave", "Eacute", "Ecirc", "Euml", "Igrave", "Iacute", "Icirc", "Iuml", "ETH", "Ntilde", "Ograve", "Oacute", "Ocirc", "Otilde", "Ouml", "times", "Oslash", "Ugrave", "Uacute", "Ucirc", "Uuml", "Yacute", "THORN", "szlig", "agrave", "aacute", "acirc", "atilde", "auml", "aring", "aelig", "ccedil", "egrave", "eacute", "ecirc", "euml", "igrave", "iacute", "icirc", "iuml", "eth", "ntilde", "ograve", "oacute", "ocirc", "otilde", "ouml", "divide", "oslash", "ugrave", "uacute", "ucirc", "uuml", "yacute", "thorn", "yuml", "quot", "amp", "lt", "gt", "OElig", "oelig", "Scaron", "scaron", "Yuml", "circ", "tilde", "ensp", "emsp", "thinsp", "zwnj", "zwj", "lrm", "rlm", "ndash", "mdash", "lsquo", "rsquo", "sbquo", "ldquo", "rdquo", "bdquo", "dagger", "Dagger", "permil", "lsaquo", "rsaquo", "euro", "fnof", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigmaf", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega", "thetasym", "upsih", "piv", "bull", "hellip", "prime", "Prime", "oline", "frasl", "weierp", "image", "real", "trade", "alefsym", "larr", "uarr", "rarr", "darr", "harr", "crarr", "lArr", "uArr", "rArr", "dArr", "hArr", "forall", "part", "exist", "empty", "nabla", "isin", "notin", "ni", "prod", "sum", "minus", "lowast", "radic", "prop", "infin", "ang", "and", "or", "cap", "cup", "int", "there4", "sim", "cong", "asymp", "ne", "equiv", "le", "ge", "sub", "sup", "nsub", "sube", "supe", "oplus", "otimes", "perp", "sdot", "lceil", "rceil", "lfloor", "rfloor", "lang", "rang", "loz", "spades", "clubs", "hearts", "diams"], i = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830], o = {}, a = {}, s = 0, u = n.length; s < u;) {
        var l = n[s],
            c = i[s];
        o[l] = String.fromCharCode(c), a[c] = l, s++
    }
    r.prototype.decode = function(e) {
        return e && e.length ? e.replace(/&(#?[\w\d]+);?/g, function(e, t) {
            var r;
            if ("#" === t.charAt(0)) {
                var n = "x" === t.charAt(1).toLowerCase() ? parseInt(t.substr(2), 16) : parseInt(t.substr(1));
                isNaN(n) || n < -32768 || n > 65535 || (r = String.fromCharCode(n))
            } else r = o[t];
            return r || e
        }) : ""
    }, r.decode = function(e) {
        return (new r).decode(e)
    }, r.prototype.encode = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = a[e.charCodeAt(n)];
            r += i ? "&" + i + ";" : e.charAt(n), n++
        }
        return r
    }, r.encode = function(e) {
        return (new r).encode(e)
    }, r.prototype.encodeNonUTF = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n),
                o = a[i];
            r += o ? "&" + o + ";" : i < 32 || i > 126 ? "&#" + i + ";" : e.charAt(n), n++
        }
        return r
    }, r.encodeNonUTF = function(e) {
        return (new r).encodeNonUTF(e)
    }, r.prototype.encodeNonASCII = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n);
            i <= 255 ? r += e[n++] : (r += "&#" + i + ";", n++)
        }
        return r
    }, r.encodeNonASCII = function(e) {
        return (new r).encodeNonASCII(e)
    }, e.exports = r
}, function(e, t) {
    function r() {}
    var n = {
            "&lt": "<",
            "&gt": ">",
            "&quot": '"',
            "&apos": "'",
            "&amp": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&amp;": "&"
        },
        i = {
            60: "lt",
            62: "gt",
            34: "quot",
            39: "apos",
            38: "amp"
        },
        o = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;",
            "&": "&amp;"
        };
    r.prototype.encode = function(e) {
        return e && e.length ? e.replace(/<|>|"|'|&/g, function(e) {
            return o[e]
        }) : ""
    }, r.encode = function(e) {
        return (new r).encode(e)
    }, r.prototype.decode = function(e) {
        return e && e.length ? e.replace(/&#?[0-9a-zA-Z]+;?/g, function(e) {
            if ("#" === e.charAt(1)) {
                var t = "x" === e.charAt(2).toLowerCase() ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                return isNaN(t) || t < -32768 || t > 65535 ? "" : String.fromCharCode(t)
            }
            return n[e] || e
        }) : ""
    }, r.decode = function(e) {
        return (new r).decode(e)
    }, r.prototype.encodeNonUTF = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var o = e.charCodeAt(n),
                a = i[o];
            a ? (r += "&" + a + ";", n++) : (r += o < 32 || o > 126 ? "&#" + o + ";" : e.charAt(n), n++)
        }
        return r
    }, r.encodeNonUTF = function(e) {
        return (new r).encodeNonUTF(e)
    }, r.prototype.encodeNonASCII = function(e) {
        if (!e || !e.length) return "";
        for (var t = e.length, r = "", n = 0; n < t;) {
            var i = e.charCodeAt(n);
            i <= 255 ? r += e[n++] : (r += "&#" + i + ";", n++)
        }
        return r
    }, r.encodeNonASCII = function(e) {
        return (new r).encodeNonASCII(e)
    }, e.exports = r
}, function(e, t) {
    t.read = function(e, t, r, n, i) {
        var o, a, s = 8 * i - n - 1,
            u = (1 << s) - 1,
            l = u >> 1,
            c = -7,
            f = r ? i - 1 : 0,
            d = r ? -1 : 1,
            h = e[t + f];
        for (f += d, o = h & (1 << -c) - 1, h >>= -c, c += s; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
        for (a = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
        if (0 === o) o = 1 - l;
        else {
            if (o === u) return a ? NaN : 1 / 0 * (h ? -1 : 1);
            a += Math.pow(2, n), o -= l
        }
        return (h ? -1 : 1) * a * Math.pow(2, o - n)
    }, t.write = function(e, t, r, n, i, o) {
        var a, s, u, l = 8 * o - i - 1,
            c = (1 << l) - 1,
            f = c >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : o - 1,
            p = n ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), t += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f), t * u >= 2 && (a++, u /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + h] = 255 & s, h += p, s /= 256, i -= 8);
        for (a = a << i | s, l += i; l > 0; e[r + h] = 255 & a, h += p, a /= 256, l -= 8);
        e[r + h - p] |= 128 * m
    }
}, function(e, t, r) {
    (function(e, n) {
        var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(a) {
            function s(e) {
                throw new RangeError(P[e])
            }

            function u(e, t) {
                for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                return n
            }

            function l(e, t) {
                var r = e.split("@"),
                    n = "";
                return r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(U, "."), n + u(e.split("."), t).join(".")
            }

            function c(e) {
                for (var t, r, n = [], i = 0, o = e.length; i < o;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < o ? (r = e.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--)) : n.push(t);
                return n
            }

            function f(e) {
                return u(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536, t += M(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += M(e)
                }).join("")
            }

            function d(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : S
            }

            function h(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }

            function p(e, t, r) {
                var n = 0;
                for (e = r ? k(e / O) : e >> 1, e += k(e / t); e > B * x >> 1; n += S) e = k(e / B);
                return k(n + (B + 1) * e / (e + I))
            }

            function m(e) {
                var t, r, n, i, o, a, u, l, c, h, m = [],
                    g = e.length,
                    v = 0,
                    b = N,
                    y = D;
                for (r = e.lastIndexOf(R), r < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && s("not-basic"), m.push(e.charCodeAt(n));
                for (i = r > 0 ? r + 1 : 0; i < g;) {
                    for (o = v, a = 1, u = S; i >= g && s("invalid-input"), l = d(e.charCodeAt(i++)), (l >= S || l > k((A - v) / a)) && s("overflow"), v += l * a, c = u <= y ? L : u >= y + x ? x : u - y, !(l < c); u += S) h = S - c, a > k(A / h) && s("overflow"), a *= h;
                    t = m.length + 1, y = p(v - o, t, 0 == o), k(v / t) > A - b && s("overflow"), b += k(v / t), v %= t, m.splice(v++, 0, b)
                }
                return f(m)
            }

            function g(e) {
                var t, r, n, i, o, a, u, l, f, d, m, g, v, b, y, _ = [];
                for (e = c(e), g = e.length, t = N, r = 0, o = D, a = 0; a < g; ++a)(m = e[a]) < 128 && _.push(M(m));
                for (n = i = _.length, i && _.push(R); n < g;) {
                    for (u = A, a = 0; a < g; ++a)(m = e[a]) >= t && m < u && (u = m);
                    for (v = n + 1, u - t > k((A - r) / v) && s("overflow"), r += (u - t) * v, t = u, a = 0; a < g; ++a)
                        if (m = e[a], m < t && ++r > A && s("overflow"), m == t) {
                            for (l = r, f = S; d = f <= o ? L : f >= o + x ? x : f - o, !(l < d); f += S) y = l - d, b = S - d, _.push(M(h(d + y % b, 0))), l = k(y / b);
                            _.push(M(h(l, 0))), o = p(r, v, n == i), r = 0, ++n
                        }++r, ++t
                }
                return _.join("")
            }

            function v(e) {
                return l(e, function(e) {
                    return q.test(e) ? m(e.slice(4).toLowerCase()) : e
                })
            }

            function b(e) {
                return l(e, function(e) {
                    return C.test(e) ? "xn--" + g(e) : e
                })
            }
            var y = "object" == o(t) && t && !t.nodeType && t,
                _ = "object" == o(e) && e && !e.nodeType && e,
                w = "object" == (void 0 === n ? "undefined" : o(n)) && n;
            w.global !== w && w.window !== w && w.self !== w || (a = w);
            var E, T, A = 2147483647,
                S = 36,
                L = 1,
                x = 26,
                I = 38,
                O = 700,
                D = 72,
                N = 128,
                R = "-",
                q = /^xn--/,
                C = /[^\x20-\x7E]/,
                U = /[\x2E\u3002\uFF0E\uFF61]/g,
                P = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                B = S - L,
                k = Math.floor,
                M = String.fromCharCode;
            if (E = {
                    version: "1.4.1",
                    ucs2: {
                        decode: c,
                        encode: f
                    },
                    decode: m,
                    encode: g,
                    toASCII: b,
                    toUnicode: v
                }, "object" == o(r(84)) && r(84)) void 0 !== (i = function() {
                return E
            }.call(t, r, t, e)) && (e.exports = i);
            else if (y && _)
                if (e.exports == y) _.exports = E;
                else
                    for (T in E) E.hasOwnProperty(T) && (y[T] = E[T]);
            else a.punycode = E
        }(this)
    }).call(t, r(139)(e), r(11))
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function(e, t, r, o) {
        t = t || "&", r = r || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var s = /\+/g;
        e = e.split(t);
        var u = 1e3;
        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
        var l = e.length;
        u > 0 && l > u && (l = u);
        for (var c = 0; c < l; ++c) {
            var f, d, h, p, m = e[c].replace(s, "%20"),
                g = m.indexOf(r);
            g >= 0 ? (f = m.substr(0, g), d = m.substr(g + 1)) : (f = m, d = ""), h = decodeURIComponent(f), p = decodeURIComponent(d), n(a, h) ? i(a[h]) ? a[h].push(p) : a[h] = [a[h], p] : a[h] = p
        }
        return a
    };
    var i = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = function(e) {
            switch (void 0 === e ? "undefined" : i(e)) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
    e.exports = function(e, t, r, u) {
        return t = t || "&", r = r || "=", null === e && (e = void 0), "object" === (void 0 === e ? "undefined" : i(e)) ? n(s(e), function(i) {
            var s = encodeURIComponent(o(i)) + r;
            return a(e[i]) ? n(e[i], function(e) {
                return s + encodeURIComponent(o(e))
            }).join(t) : s + encodeURIComponent(o(e[i]))
        }).join(t) : u ? encodeURIComponent(o(u)) + r + encodeURIComponent(o(e)) : ""
    };
    var a = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        s = Object.keys || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
            return t
        }
}, , function(e, t, r) {
    e.exports = r(14)
}, function(e, t, r) {
    "use strict";

    function n(e) {
        if (!(this instanceof n)) return new n(e);
        i.call(this, e)
    }
    e.exports = n;
    var i = r(76),
        o = r(21);
    o.inherits = r(15), o.inherits(n, i), n.prototype._transform = function(e, t, r) {
        r(null, e)
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t, r) {
        e.copy(t, r)
    }
    var o = r(65).Buffer;
    e.exports = function() {
        function e() {
            n(this, e), this.head = null, this.tail = null, this.length = 0
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
        }, e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t), this.head = t, ++this.length
        }, e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
            }
        }, e.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0
        }, e.prototype.join = function(e) {
            if (0 === this.length) return "";
            for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
            return r
        }, e.prototype.concat = function(e) {
            if (0 === this.length) return o.alloc(0);
            if (1 === this.length) return this.head.data;
            for (var t = o.allocUnsafe(e >>> 0), r = this.head, n = 0; r;) i(r.data, t, n), n += r.data.length, r = r.next;
            return t
        }, e
    }()
}, function(e, t, r) {
    e.exports = r(64).PassThrough
}, function(e, t, r) {
    e.exports = r(64).Transform
}, function(e, t, r) {
    e.exports = r(63)
}, function(e, t, r) {
    (function(e) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(t) {
            function i(e, r) {
                if (!(this instanceof i)) return new i(e, r);
                var n = this;
                a(n), n.q = n.c = "", n.bufferCheckPosition = t.MAX_BUFFER_LENGTH, n.opt = r || {}, n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags, n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase", n.tags = [], n.closed = n.closedRoot = n.sawRoot = !1, n.tag = n.error = null, n.strict = !!e, n.noscript = !(!e && !n.opt.noscript), n.state = j.BEGIN, n.strictEntities = n.opt.strictEntities, n.ENTITIES = n.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), n.attribList = [], n.opt.xmlns && (n.ns = Object.create(k)), n.trackPosition = !1 !== n.opt.position, n.trackPosition && (n.position = n.line = n.column = 0), m(n, "onready")
            }

            function o(e) {
                for (var r = Math.max(t.MAX_BUFFER_LENGTH, 10), n = 0, i = 0, o = N.length; i < o; i++) {
                    var a = e[N[i]].length;
                    if (a > r) switch (N[i]) {
                        case "textNode":
                            v(e);
                            break;
                        case "cdata":
                            g(e, "oncdata", e.cdata), e.cdata = "";
                            break;
                        case "script":
                            g(e, "onscript", e.script), e.script = "";
                            break;
                        default:
                            y(e, "Max buffer length exceeded: " + N[i])
                    }
                    n = Math.max(n, a)
                }
                var s = t.MAX_BUFFER_LENGTH - n;
                e.bufferCheckPosition = s + e.position
            }

            function a(e) {
                for (var t = 0, r = N.length; t < r; t++) e[N[t]] = ""
            }

            function s(e) {
                v(e), "" !== e.cdata && (g(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (g(e, "onscript", e.script), e.script = "")
            }

            function u(e, t) {
                return new l(e, t)
            }

            function l(e, t) {
                if (!(this instanceof l)) return new l(e, t);
                R.apply(this), this._parser = new i(e, t), this.writable = !0, this.readable = !0;
                var r = this;
                this._parser.onend = function() {
                    r.emit("end")
                }, this._parser.onerror = function(e) {
                    r.emit("error", e), r._parser.error = null
                }, this._decoder = null, q.forEach(function(e) {
                    Object.defineProperty(r, "on" + e, {
                        get: function() {
                            return r._parser["on" + e]
                        },
                        set: function(t) {
                            if (!t) return r.removeAllListeners(e), r._parser["on" + e] = t, t;
                            r.on(e, t)
                        },
                        enumerable: !0,
                        configurable: !1
                    })
                })
            }

            function c(e) {
                return " " === e || "\n" === e || "\r" === e || "\t" === e
            }

            function f(e) {
                return '"' === e || "'" === e
            }

            function d(e) {
                return ">" === e || c(e)
            }

            function h(e, t) {
                return e.test(t)
            }

            function p(e, t) {
                return !h(e, t)
            }

            function m(e, t, r) {
                e[t] && e[t](r)
            }

            function g(e, t, r) {
                e.textNode && v(e), m(e, t, r)
            }

            function v(e) {
                e.textNode = b(e.opt, e.textNode), e.textNode && m(e, "ontext", e.textNode), e.textNode = ""
            }

            function b(e, t) {
                return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
            }

            function y(e, t) {
                return v(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, m(e, "onerror", t), e
            }

            function _(e) {
                return e.sawRoot && !e.closedRoot && w(e, "Unclosed root tag"), e.state !== j.BEGIN && e.state !== j.BEGIN_WHITESPACE && e.state !== j.TEXT && y(e, "Unexpected end"), v(e), e.c = "", e.closed = !0, m(e, "onend"), i.call(e, e.strict, e.opt), e
            }

            function w(e, t) {
                if ("object" !== (void 0 === e ? "undefined" : n(e)) || !(e instanceof i)) throw new Error("bad call to strictFail");
                e.strict && y(e, t)
            }

            function E(e) {
                e.strict || (e.tagName = e.tagName[e.looseCase]());
                var t = e.tags[e.tags.length - 1] || e,
                    r = e.tag = {
                        name: e.tagName,
                        attributes: {}
                    };
                e.opt.xmlns && (r.ns = t.ns), e.attribList.length = 0, g(e, "onopentagstart", r)
            }

            function T(e, t) {
                var r = e.indexOf(":"),
                    n = r < 0 ? ["", e] : e.split(":"),
                    i = n[0],
                    o = n[1];
                return t && "xmlns" === e && (i = "xmlns", o = ""), {
                    prefix: i,
                    local: o
                }
            }

            function A(e) {
                if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) return void(e.attribName = e.attribValue = "");
                if (e.opt.xmlns) {
                    var t = T(e.attribName, !0),
                        r = t.prefix,
                        n = t.local;
                    if ("xmlns" === r)
                        if ("xml" === n && e.attribValue !== P) w(e, "xml: prefix must be bound to " + P + "\nActual: " + e.attribValue);
                        else if ("xmlns" === n && e.attribValue !== B) w(e, "xmlns: prefix must be bound to " + B + "\nActual: " + e.attribValue);
                    else {
                        var i = e.tag,
                            o = e.tags[e.tags.length - 1] || e;
                        i.ns === o.ns && (i.ns = Object.create(o.ns)), i.ns[n] = e.attribValue
                    }
                    e.attribList.push([e.attribName, e.attribValue])
                } else e.tag.attributes[e.attribName] = e.attribValue, g(e, "onattribute", {
                    name: e.attribName,
                    value: e.attribValue
                });
                e.attribName = e.attribValue = ""
            }

            function S(e, t) {
                if (e.opt.xmlns) {
                    var r = e.tag,
                        n = T(e.tagName);
                    r.prefix = n.prefix, r.local = n.local, r.uri = r.ns[n.prefix] || "", r.prefix && !r.uri && (w(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), r.uri = n.prefix);
                    var i = e.tags[e.tags.length - 1] || e;
                    r.ns && i.ns !== r.ns && Object.keys(r.ns).forEach(function(t) {
                        g(e, "onopennamespace", {
                            prefix: t,
                            uri: r.ns[t]
                        })
                    });
                    for (var o = 0, a = e.attribList.length; o < a; o++) {
                        var s = e.attribList[o],
                            u = s[0],
                            l = s[1],
                            c = T(u, !0),
                            f = c.prefix,
                            d = c.local,
                            h = "" === f ? "" : r.ns[f] || "",
                            p = {
                                name: u,
                                value: l,
                                prefix: f,
                                local: d,
                                uri: h
                            };
                        f && "xmlns" !== f && !h && (w(e, "Unbound namespace prefix: " + JSON.stringify(f)), p.uri = f), e.tag.attributes[u] = p, g(e, "onattribute", p)
                    }
                    e.attribList.length = 0
                }
                e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), g(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = j.TEXT : e.state = j.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
            }

            function L(e) {
                if (!e.tagName) return w(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = j.TEXT);
                if (e.script) {
                    if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = j.SCRIPT);
                    g(e, "onscript", e.script), e.script = ""
                }
                var t = e.tags.length,
                    r = e.tagName;
                e.strict || (r = r[e.looseCase]());
                for (var n = r; t--;) {
                    if (e.tags[t].name === n) break;
                    w(e, "Unexpected close tag")
                }
                if (t < 0) return w(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = j.TEXT);
                e.tagName = r;
                for (var i = e.tags.length; i-- > t;) {
                    var o = e.tag = e.tags.pop();
                    e.tagName = e.tag.name, g(e, "onclosetag", e.tagName);
                    var a = {};
                    for (var s in o.ns) a[s] = o.ns[s];
                    var u = e.tags[e.tags.length - 1] || e;
                    e.opt.xmlns && o.ns !== u.ns && Object.keys(o.ns).forEach(function(t) {
                        var r = o.ns[t];
                        g(e, "onclosenamespace", {
                            prefix: t,
                            uri: r
                        })
                    })
                }
                0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = j.TEXT
            }

            function x(e) {
                var t, r = e.entity,
                    n = r.toLowerCase(),
                    i = "";
                return e.ENTITIES[r] ? e.ENTITIES[r] : e.ENTITIES[n] ? e.ENTITIES[n] : (r = n, "#" === r.charAt(0) && ("x" === r.charAt(1) ? (r = r.slice(2), t = parseInt(r, 16), i = t.toString(16)) : (r = r.slice(1), t = parseInt(r, 10), i = t.toString(10))), r = r.replace(/^0+/, ""), isNaN(t) || i.toLowerCase() !== r ? (w(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
            }

            function I(e, t) {
                "<" === t ? (e.state = j.OPEN_WAKA, e.startTagPosition = e.position) : c(t) || (w(e, "Non-whitespace before first tag."), e.textNode = t, e.state = j.TEXT)
            }

            function O(e, t) {
                var r = "";
                return t < e.length && (r = e.charAt(t)), r
            }

            function D(e) {
                var t = this;
                if (this.error) throw this.error;
                if (t.closed) return y(t, "Cannot write after close. Assign an onready handler.");
                if (null === e) return _(t);
                "object" === (void 0 === e ? "undefined" : n(e)) && (e = e.toString());
                for (var r = 0, i = "";;) {
                    if (i = O(e, r++), t.c = i, !i) break;
                    switch (t.trackPosition && (t.position++, "\n" === i ? (t.line++, t.column = 0) : t.column++), t.state) {
                        case j.BEGIN:
                            if (t.state = j.BEGIN_WHITESPACE, "\ufeff" === i) continue;
                            I(t, i);
                            continue;
                        case j.BEGIN_WHITESPACE:
                            I(t, i);
                            continue;
                        case j.TEXT:
                            if (t.sawRoot && !t.closedRoot) {
                                for (var a = r - 1; i && "<" !== i && "&" !== i;)(i = O(e, r++)) && t.trackPosition && (t.position++, "\n" === i ? (t.line++, t.column = 0) : t.column++);
                                t.textNode += e.substring(a, r - 1)
                            }
                            "<" !== i || t.sawRoot && t.closedRoot && !t.strict ? (c(i) || t.sawRoot && !t.closedRoot || w(t, "Text data outside of root node."), "&" === i ? t.state = j.TEXT_ENTITY : t.textNode += i) : (t.state = j.OPEN_WAKA, t.startTagPosition = t.position);
                            continue;
                        case j.SCRIPT:
                            "<" === i ? t.state = j.SCRIPT_ENDING : t.script += i;
                            continue;
                        case j.SCRIPT_ENDING:
                            "/" === i ? t.state = j.CLOSE_TAG : (t.script += "<" + i, t.state = j.SCRIPT);
                            continue;
                        case j.OPEN_WAKA:
                            if ("!" === i) t.state = j.SGML_DECL, t.sgmlDecl = "";
                            else if (c(i));
                            else if (h(M, i)) t.state = j.OPEN_TAG, t.tagName = i;
                            else if ("/" === i) t.state = j.CLOSE_TAG, t.tagName = "";
                            else if ("?" === i) t.state = j.PROC_INST, t.procInstName = t.procInstBody = "";
                            else {
                                if (w(t, "Unencoded <"), t.startTagPosition + 1 < t.position) {
                                    var s = t.position - t.startTagPosition;
                                    i = new Array(s).join(" ") + i
                                }
                                t.textNode += "<" + i, t.state = j.TEXT
                            }
                            continue;
                        case j.SGML_DECL:
                            (t.sgmlDecl + i).toUpperCase() === C ? (g(t, "onopencdata"), t.state = j.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + i === "--" ? (t.state = j.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + i).toUpperCase() === U ? (t.state = j.DOCTYPE, (t.doctype || t.sawRoot) && w(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : ">" === i ? (g(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = j.TEXT) : f(i) ? (t.state = j.SGML_DECL_QUOTED, t.sgmlDecl += i) : t.sgmlDecl += i;
                            continue;
                        case j.SGML_DECL_QUOTED:
                            i === t.q && (t.state = j.SGML_DECL, t.q = ""), t.sgmlDecl += i;
                            continue;
                        case j.DOCTYPE:
                            ">" === i ? (t.state = j.TEXT, g(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += i, "[" === i ? t.state = j.DOCTYPE_DTD : f(i) && (t.state = j.DOCTYPE_QUOTED, t.q = i));
                            continue;
                        case j.DOCTYPE_QUOTED:
                            t.doctype += i, i === t.q && (t.q = "", t.state = j.DOCTYPE);
                            continue;
                        case j.DOCTYPE_DTD:
                            t.doctype += i, "]" === i ? t.state = j.DOCTYPE : f(i) && (t.state = j.DOCTYPE_DTD_QUOTED, t.q = i);
                            continue;
                        case j.DOCTYPE_DTD_QUOTED:
                            t.doctype += i, i === t.q && (t.state = j.DOCTYPE_DTD, t.q = "");
                            continue;
                        case j.COMMENT:
                            "-" === i ? t.state = j.COMMENT_ENDING : t.comment += i;
                            continue;
                        case j.COMMENT_ENDING:
                            "-" === i ? (t.state = j.COMMENT_ENDED, t.comment = b(t.opt, t.comment), t.comment && g(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + i, t.state = j.COMMENT);
                            continue;
                        case j.COMMENT_ENDED:
                            ">" !== i ? (w(t, "Malformed comment"), t.comment += "--" + i, t.state = j.COMMENT) : t.state = j.TEXT;
                            continue;
                        case j.CDATA:
                            "]" === i ? t.state = j.CDATA_ENDING : t.cdata += i;
                            continue;
                        case j.CDATA_ENDING:
                            "]" === i ? t.state = j.CDATA_ENDING_2 : (t.cdata += "]" + i, t.state = j.CDATA);
                            continue;
                        case j.CDATA_ENDING_2:
                            ">" === i ? (t.cdata && g(t, "oncdata", t.cdata), g(t, "onclosecdata"), t.cdata = "", t.state = j.TEXT) : "]" === i ? t.cdata += "]" : (t.cdata += "]]" + i, t.state = j.CDATA);
                            continue;
                        case j.PROC_INST:
                            "?" === i ? t.state = j.PROC_INST_ENDING : c(i) ? t.state = j.PROC_INST_BODY : t.procInstName += i;
                            continue;
                        case j.PROC_INST_BODY:
                            if (!t.procInstBody && c(i)) continue;
                            "?" === i ? t.state = j.PROC_INST_ENDING : t.procInstBody += i;
                            continue;
                        case j.PROC_INST_ENDING:
                            ">" === i ? (g(t, "onprocessinginstruction", {
                                name: t.procInstName,
                                body: t.procInstBody
                            }), t.procInstName = t.procInstBody = "", t.state = j.TEXT) : (t.procInstBody += "?" + i, t.state = j.PROC_INST_BODY);
                            continue;
                        case j.OPEN_TAG:
                            h(V, i) ? t.tagName += i : (E(t), ">" === i ? S(t) : "/" === i ? t.state = j.OPEN_TAG_SLASH : (c(i) || w(t, "Invalid character in tag name"), t.state = j.ATTRIB));
                            continue;
                        case j.OPEN_TAG_SLASH:
                            ">" === i ? (S(t, !0), L(t)) : (w(t, "Forward-slash in opening tag not followed by >"), t.state = j.ATTRIB);
                            continue;
                        case j.ATTRIB:
                            if (c(i)) continue;
                            ">" === i ? S(t) : "/" === i ? t.state = j.OPEN_TAG_SLASH : h(M, i) ? (t.attribName = i, t.attribValue = "", t.state = j.ATTRIB_NAME) : w(t, "Invalid attribute name");
                            continue;
                        case j.ATTRIB_NAME:
                            "=" === i ? t.state = j.ATTRIB_VALUE : ">" === i ? (w(t, "Attribute without value"), t.attribValue = t.attribName, A(t), S(t)) : c(i) ? t.state = j.ATTRIB_NAME_SAW_WHITE : h(V, i) ? t.attribName += i : w(t, "Invalid attribute name");
                            continue;
                        case j.ATTRIB_NAME_SAW_WHITE:
                            if ("=" === i) t.state = j.ATTRIB_VALUE;
                            else {
                                if (c(i)) continue;
                                w(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", g(t, "onattribute", {
                                    name: t.attribName,
                                    value: ""
                                }), t.attribName = "", ">" === i ? S(t) : h(M, i) ? (t.attribName = i, t.state = j.ATTRIB_NAME) : (w(t, "Invalid attribute name"), t.state = j.ATTRIB)
                            }
                            continue;
                        case j.ATTRIB_VALUE:
                            if (c(i)) continue;
                            f(i) ? (t.q = i, t.state = j.ATTRIB_VALUE_QUOTED) : (w(t, "Unquoted attribute value"), t.state = j.ATTRIB_VALUE_UNQUOTED, t.attribValue = i);
                            continue;
                        case j.ATTRIB_VALUE_QUOTED:
                            if (i !== t.q) {
                                "&" === i ? t.state = j.ATTRIB_VALUE_ENTITY_Q : t.attribValue += i;
                                continue
                            }
                            A(t), t.q = "", t.state = j.ATTRIB_VALUE_CLOSED;
                            continue;
                        case j.ATTRIB_VALUE_CLOSED:
                            c(i) ? t.state = j.ATTRIB : ">" === i ? S(t) : "/" === i ? t.state = j.OPEN_TAG_SLASH : h(M, i) ? (w(t, "No whitespace between attributes"), t.attribName = i, t.attribValue = "", t.state = j.ATTRIB_NAME) : w(t, "Invalid attribute name");
                            continue;
                        case j.ATTRIB_VALUE_UNQUOTED:
                            if (!d(i)) {
                                "&" === i ? t.state = j.ATTRIB_VALUE_ENTITY_U : t.attribValue += i;
                                continue
                            }
                            A(t), ">" === i ? S(t) : t.state = j.ATTRIB;
                            continue;
                        case j.CLOSE_TAG:
                            if (t.tagName) ">" === i ? L(t) : h(V, i) ? t.tagName += i : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = j.SCRIPT) : (c(i) || w(t, "Invalid tagname in closing tag"), t.state = j.CLOSE_TAG_SAW_WHITE);
                            else {
                                if (c(i)) continue;
                                p(M, i) ? t.script ? (t.script += "</" + i, t.state = j.SCRIPT) : w(t, "Invalid tagname in closing tag.") : t.tagName = i
                            }
                            continue;
                        case j.CLOSE_TAG_SAW_WHITE:
                            if (c(i)) continue;
                            ">" === i ? L(t) : w(t, "Invalid characters in closing tag");
                            continue;
                        case j.TEXT_ENTITY:
                        case j.ATTRIB_VALUE_ENTITY_Q:
                        case j.ATTRIB_VALUE_ENTITY_U:
                            var u, l;
                            switch (t.state) {
                                case j.TEXT_ENTITY:
                                    u = j.TEXT, l = "textNode";
                                    break;
                                case j.ATTRIB_VALUE_ENTITY_Q:
                                    u = j.ATTRIB_VALUE_QUOTED, l = "attribValue";
                                    break;
                                case j.ATTRIB_VALUE_ENTITY_U:
                                    u = j.ATTRIB_VALUE_UNQUOTED, l = "attribValue"
                            }
                            ";" === i ? (t[l] += x(t), t.entity = "", t.state = u) : h(t.entity.length ? H : F, i) ? t.entity += i : (w(t, "Invalid character in entity name"), t[l] += "&" + t.entity + i, t.entity = "", t.state = u);
                            continue;
                        default:
                            throw new Error(t, "Unknown state: " + t.state)
                    }
                }
                return t.position >= t.bufferCheckPosition && o(t), t
            }
            t.parser = function(e, t) {
                return new i(e, t)
            }, t.SAXParser = i, t.SAXStream = l, t.createStream = u, t.MAX_BUFFER_LENGTH = 65536;
            var N = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
            t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
                function t() {}
                return t.prototype = e, new t
            }), Object.keys || (Object.keys = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(r);
                return t
            }), i.prototype = {
                end: function() {
                    _(this)
                },
                write: D,
                resume: function() {
                    return this.error = null, this
                },
                close: function() {
                    return this.write(null)
                },
                flush: function() {
                    s(this)
                }
            };
            var R;
            try {
                R = r(136).Stream
            } catch (e) {
                R = function() {}
            }
            var q = t.EVENTS.filter(function(e) {
                return "error" !== e && "end" !== e
            });
            l.prototype = Object.create(R.prototype, {
                constructor: {
                    value: l
                }
            }), l.prototype.write = function(t) {
                if ("function" == typeof e && "function" == typeof e.isBuffer && e.isBuffer(t)) {
                    if (!this._decoder) {
                        var n = r(47).StringDecoder;
                        this._decoder = new n("utf8")
                    }
                    t = this._decoder.write(t)
                }
                return this._parser.write(t.toString()), this.emit("data", t), !0
            }, l.prototype.end = function(e) {
                return e && e.length && this.write(e), this._parser.end(), !0
            }, l.prototype.on = function(e, t) {
                var r = this;
                return r._parser["on" + e] || -1 === q.indexOf(e) || (r._parser["on" + e] = function() {
                    var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                    t.splice(0, 0, e), r.emit.apply(r, t)
                }), R.prototype.on.call(r, e, t)
            };
            var C = "[CDATA[",
                U = "DOCTYPE",
                P = "http://www.w3.org/XML/1998/namespace",
                B = "http://www.w3.org/2000/xmlns/",
                k = {
                    xml: P,
                    xmlns: B
                },
                M = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                V = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                F = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                H = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                j = 0;
            t.STATE = {
                BEGIN: j++,
                BEGIN_WHITESPACE: j++,
                TEXT: j++,
                TEXT_ENTITY: j++,
                OPEN_WAKA: j++,
                SGML_DECL: j++,
                SGML_DECL_QUOTED: j++,
                DOCTYPE: j++,
                DOCTYPE_QUOTED: j++,
                DOCTYPE_DTD: j++,
                DOCTYPE_DTD_QUOTED: j++,
                COMMENT_STARTING: j++,
                COMMENT: j++,
                COMMENT_ENDING: j++,
                COMMENT_ENDED: j++,
                CDATA: j++,
                CDATA_ENDING: j++,
                CDATA_ENDING_2: j++,
                PROC_INST: j++,
                PROC_INST_BODY: j++,
                PROC_INST_ENDING: j++,
                OPEN_TAG: j++,
                OPEN_TAG_SLASH: j++,
                ATTRIB: j++,
                ATTRIB_NAME: j++,
                ATTRIB_NAME_SAW_WHITE: j++,
                ATTRIB_VALUE: j++,
                ATTRIB_VALUE_QUOTED: j++,
                ATTRIB_VALUE_CLOSED: j++,
                ATTRIB_VALUE_UNQUOTED: j++,
                ATTRIB_VALUE_ENTITY_Q: j++,
                ATTRIB_VALUE_ENTITY_U: j++,
                CLOSE_TAG: j++,
                CLOSE_TAG_SAW_WHITE: j++,
                SCRIPT: j++,
                SCRIPT_ENDING: j++
            }, t.XML_ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'"
            }, t.ENTITIES = {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: '"',
                apos: "'",
                AElig: 198,
                Aacute: 193,
                Acirc: 194,
                Agrave: 192,
                Aring: 197,
                Atilde: 195,
                Auml: 196,
                Ccedil: 199,
                ETH: 208,
                Eacute: 201,
                Ecirc: 202,
                Egrave: 200,
                Euml: 203,
                Iacute: 205,
                Icirc: 206,
                Igrave: 204,
                Iuml: 207,
                Ntilde: 209,
                Oacute: 211,
                Ocirc: 212,
                Ograve: 210,
                Oslash: 216,
                Otilde: 213,
                Ouml: 214,
                THORN: 222,
                Uacute: 218,
                Ucirc: 219,
                Ugrave: 217,
                Uuml: 220,
                Yacute: 221,
                aacute: 225,
                acirc: 226,
                aelig: 230,
                agrave: 224,
                aring: 229,
                atilde: 227,
                auml: 228,
                ccedil: 231,
                eacute: 233,
                ecirc: 234,
                egrave: 232,
                eth: 240,
                euml: 235,
                iacute: 237,
                icirc: 238,
                igrave: 236,
                iuml: 239,
                ntilde: 241,
                oacute: 243,
                ocirc: 244,
                ograve: 242,
                oslash: 248,
                otilde: 245,
                ouml: 246,
                szlig: 223,
                thorn: 254,
                uacute: 250,
                ucirc: 251,
                ugrave: 249,
                uuml: 252,
                yacute: 253,
                yuml: 255,
                copy: 169,
                reg: 174,
                nbsp: 160,
                iexcl: 161,
                cent: 162,
                pound: 163,
                curren: 164,
                yen: 165,
                brvbar: 166,
                sect: 167,
                uml: 168,
                ordf: 170,
                laquo: 171,
                not: 172,
                shy: 173,
                macr: 175,
                deg: 176,
                plusmn: 177,
                sup1: 185,
                sup2: 178,
                sup3: 179,
                acute: 180,
                micro: 181,
                para: 182,
                middot: 183,
                cedil: 184,
                ordm: 186,
                raquo: 187,
                frac14: 188,
                frac12: 189,
                frac34: 190,
                iquest: 191,
                times: 215,
                divide: 247,
                OElig: 338,
                oelig: 339,
                Scaron: 352,
                scaron: 353,
                Yuml: 376,
                fnof: 402,
                circ: 710,
                tilde: 732,
                Alpha: 913,
                Beta: 914,
                Gamma: 915,
                Delta: 916,
                Epsilon: 917,
                Zeta: 918,
                Eta: 919,
                Theta: 920,
                Iota: 921,
                Kappa: 922,
                Lambda: 923,
                Mu: 924,
                Nu: 925,
                Xi: 926,
                Omicron: 927,
                Pi: 928,
                Rho: 929,
                Sigma: 931,
                Tau: 932,
                Upsilon: 933,
                Phi: 934,
                Chi: 935,
                Psi: 936,
                Omega: 937,
                alpha: 945,
                beta: 946,
                gamma: 947,
                delta: 948,
                epsilon: 949,
                zeta: 950,
                eta: 951,
                theta: 952,
                iota: 953,
                kappa: 954,
                lambda: 955,
                mu: 956,
                nu: 957,
                xi: 958,
                omicron: 959,
                pi: 960,
                rho: 961,
                sigmaf: 962,
                sigma: 963,
                tau: 964,
                upsilon: 965,
                phi: 966,
                chi: 967,
                psi: 968,
                omega: 969,
                thetasym: 977,
                upsih: 978,
                piv: 982,
                ensp: 8194,
                emsp: 8195,
                thinsp: 8201,
                zwnj: 8204,
                zwj: 8205,
                lrm: 8206,
                rlm: 8207,
                ndash: 8211,
                mdash: 8212,
                lsquo: 8216,
                rsquo: 8217,
                sbquo: 8218,
                ldquo: 8220,
                rdquo: 8221,
                bdquo: 8222,
                dagger: 8224,
                Dagger: 8225,
                bull: 8226,
                hellip: 8230,
                permil: 8240,
                prime: 8242,
                Prime: 8243,
                lsaquo: 8249,
                rsaquo: 8250,
                oline: 8254,
                frasl: 8260,
                euro: 8364,
                image: 8465,
                weierp: 8472,
                real: 8476,
                trade: 8482,
                alefsym: 8501,
                larr: 8592,
                uarr: 8593,
                rarr: 8594,
                darr: 8595,
                harr: 8596,
                crarr: 8629,
                lArr: 8656,
                uArr: 8657,
                rArr: 8658,
                dArr: 8659,
                hArr: 8660,
                forall: 8704,
                part: 8706,
                exist: 8707,
                empty: 8709,
                nabla: 8711,
                isin: 8712,
                notin: 8713,
                ni: 8715,
                prod: 8719,
                sum: 8721,
                minus: 8722,
                lowast: 8727,
                radic: 8730,
                prop: 8733,
                infin: 8734,
                ang: 8736,
                and: 8743,
                or: 8744,
                cap: 8745,
                cup: 8746,
                int: 8747,
                there4: 8756,
                sim: 8764,
                cong: 8773,
                asymp: 8776,
                ne: 8800,
                equiv: 8801,
                le: 8804,
                ge: 8805,
                sub: 8834,
                sup: 8835,
                nsub: 8836,
                sube: 8838,
                supe: 8839,
                oplus: 8853,
                otimes: 8855,
                perp: 8869,
                sdot: 8901,
                lceil: 8968,
                rceil: 8969,
                lfloor: 8970,
                rfloor: 8971,
                lang: 9001,
                rang: 9002,
                loz: 9674,
                spades: 9824,
                clubs: 9827,
                hearts: 9829,
                diams: 9830
            }, Object.keys(t.ENTITIES).forEach(function(e) {
                var r = t.ENTITIES[e],
                    n = "number" == typeof r ? String.fromCharCode(r) : r;
                t.ENTITIES[e] = n
            });
            for (var Q in t.STATE) t.STATE[t.STATE[Q]] = Q;
            j = t.STATE, String.fromCodePoint || function() {
                var e = String.fromCharCode,
                    t = Math.floor,
                    r = function() {
                        var r, n, i = [],
                            o = -1,
                            a = arguments.length;
                        if (!a) return "";
                        for (var s = ""; ++o < a;) {
                            var u = Number(arguments[o]);
                            if (!isFinite(u) || u < 0 || u > 1114111 || t(u) !== u) throw RangeError("Invalid code point: " + u);
                            u <= 65535 ? i.push(u) : (u -= 65536, r = 55296 + (u >> 10), n = u % 1024 + 56320, i.push(r, n)), (o + 1 === a || i.length > 16384) && (s += e.apply(null, i), i.length = 0)
                        }
                        return s
                    };
                Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                    value: r,
                    configurable: !0,
                    writable: !0
                }) : String.fromCodePoint = r
            }()
        }(t)
    }).call(t, r(25).Buffer)
}, function(e, t, r) {
    function n() {
        i.call(this)
    }
    e.exports = n;
    var i = r(39).EventEmitter;
    r(15)(n, i), n.Readable = r(64), n.Writable = r(134), n.Duplex = r(129), n.Transform = r(133), n.PassThrough = r(132), n.Stream = n, n.prototype.pipe = function(e, t) {
        function r(t) {
            e.writable && !1 === e.write(t) && l.pause && l.pause()
        }

        function n() {
            l.readable && l.resume && l.resume()
        }

        function o() {
            c || (c = !0, e.end())
        }

        function a() {
            c || (c = !0, "function" == typeof e.destroy && e.destroy())
        }

        function s(e) {
            if (u(), 0 === i.listenerCount(this, "error")) throw e
        }

        function u() {
            l.removeListener("data", r), e.removeListener("drain", n), l.removeListener("end", o), l.removeListener("close", a), l.removeListener("error", s), e.removeListener("error", s), l.removeListener("end", u), l.removeListener("close", u), e.removeListener("close", u)
        }
        var l = this;
        l.on("data", r), e.on("drain", n), e._isStdio || t && !1 === t.end || (l.on("end", o), l.on("close", a));
        var c = !1;
        return l.on("error", s), e.on("error", s), l.on("end", u), l.on("close", u), e.on("close", u), e.emit("pipe", l), e
    }
}, function(e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = {
        isString: function(e) {
            return "string" == typeof e
        },
        isObject: function(e) {
            return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e
        },
        isNull: function(e) {
            return null === e
        },
        isNullOrUndefined: function(e) {
            return null == e
        }
    }
}, function(e, t, r) {
    (function(t) {
        function r(e, t) {
            function r() {
                if (!i) {
                    if (n("throwDeprecation")) throw new Error(t);
                    n("traceDeprecation"), i = !0
                }
                return e.apply(this, arguments)
            }
            if (n("noDeprecation")) return e;
            var i = !1;
            return r
        }

        function n(e) {
            try {
                if (!t.localStorage) return !1
            } catch (e) {
                return !1
            }
            var r = t.localStorage[e];
            return null != r && "true" === String(r).toLowerCase()
        }
        e.exports = r
    }).call(t, r(11))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n, c, _) {
        if (!n) return _(new Error("Could not find player config"));
        try {
            n = JSON.parse(n + (c ? "}" : ""))
        } catch (e) {
            return _(new Error("Error parsing config: " + e.message))
        }
        var w = u.format({
            protocol: "https",
            host: v,
            pathname: b,
            query: {
                video_id: e,
                eurl: g + e,
                ps: "default",
                gl: "US",
                hl: t.lang || "en",
                sts: n.sts,
                el: "info"
            }
        });
        f(w, t.requestOptions, function(e, c, f) {
            if (e) return _(e);
            var g = l.parse(f);
            if ("1" === g.requires_purchase) return _(new Error("Video requires purchase"));
            if (y.forEach(function(e) {
                    g[e] && (g[e] = g[e].split(",").filter(function(e) {
                        return "" !== e
                    }))
                }), n.args.player_response) try {
                g.player_response = JSON.parse(n.args.player_response)
            } catch (e) {
                return _(new Error("Error parsing `player_response`: " + e.message))
            }
            if (g.fmt_list = g.fmt_list ? g.fmt_list.map(function(e) {
                    return e.split("/")
                }) : [], g.formats = d.parseFormats(g), g = d.objectAssign(g, r, !1), g.formats.length || n.args.dashmpd || g.dashmpd || g.hlsvp) {
                var v = u.resolve(m, n.assets.js);
                h.getTokens(v, t, function(e, r) {
                    if (e) return _(e);
                    h.decipherFormats(g.formats, r, t.debug);
                    var u = [];
                    if (n.args.dashmpd) {
                        var l = i(n.args.dashmpd, r);
                        u.push(a.bind(null, l, t))
                    }
                    if (g.dashmpd && g.dashmpd !== n.args.dashmpd) {
                        var c = i(g.dashmpd, r);
                        u.push(a.bind(null, c, t))
                    }
                    g.hlsvp && (g.hlsvp = i(g.hlsvp, r), u.push(s.bind(null, g.hlsvp, t))), d.parallel(u, function(e, r) {
                        return e ? _(e) : (r[0] && o(g, r[0]), r[1] && o(g, r[1]), r[2] && o(g, r[2]), g.formats.length ? (t.debug && g.formats.forEach(function(e) {
                            var t = e.itag;
                            p[t]
                        }), g.formats.forEach(d.addFormatMeta), g.formats.sort(d.sortFormats), void _(null, g)) : void _(new Error("No formats found")))
                    })
                })
            } else _(new Error("This video is unavailable"))
        })
    }

    function i(e, t) {
        return e.replace(/\/s\/([a-fA-F0-9.]+)/, function(e, r) {
            return "/signature/" + h.decipher(t, r)
        })
    }

    function o(e, t) {
        e.formats.forEach(function(e) {
            var r = t[e.itag];
            if (r)
                for (var n in e) r[n] = e[n];
            else t[e.itag] = e
        }), e.formats = [];
        for (var r in t) e.formats.push(t[r])
    }

    function a(e, t, r) {
        var n = {},
            i = null,
            o = !1,
            a = c.parser(!1);
        a.onerror = r, a.onopentag = function(e) {
            if ("REPRESENTATION" === e.name) {
                var t = e.attributes.ID;
                i = {
                    itag: t
                }, n[t] = i
            }
            o = "BASEURL" === e.name
        }, a.ontext = function(e) {
            o && (i.url = e)
        }, a.onend = function() {
            r(null, n)
        };
        var s = f(u.resolve(m, e), t.requestOptions);
        s.setEncoding("utf8"), s.on("error", r), s.on("data", function(e) {
            a.write(e)
        }), s.on("end", a.close.bind(a))
    }

    function s(e, t, r) {
        e = u.resolve(m, e), f(e, t.requestOptions, function(e, t, n) {
            if (e) return r(e);
            var i = {};
            n.split("\n").filter(function(e) {
                return /https?:\/\//.test(e)
            }).forEach(function(e) {
                var t = e.match(/\/itag\/(\d+)\//)[1];
                i[t] = {
                    itag: t,
                    url: e
                }
            }), r(null, i)
        })
    }
    var u = r(66),
        l = r(62),
        c = r(135),
        f = r(81),
        d = r(142),
        h = r(141),
        p = r(79),
        m = "https://www.youtube.com/watch?v=",
        g = "https://youtube.googleapis.com/v/",
        v = "www.youtube.com",
        b = "/get_video_info",
        y = ["keywords", "fmt_list", "fexp", "watermark"];
    e.exports = function e(t, r, i) {
        if ("function" == typeof r ? (i = r, r = {}) : r || (r = {}), !i) return new Promise(function(n, i) {
            e(t, r, function(e, t) {
                if (e) return i(e);
                n(t)
            })
        });
        var o = d.getVideoID(t);
        if (o instanceof Error) return i(o);
        var a = "hl=" + (r.lang || "en"),
            s = m + o + "&" + a;
        f(s, r.requestOptions, function(e, t, u) {
            if (e) return i(e);
            var l = d.between(u, '<div id="player-unavailable"', ">");
            if (l && !/\bhid\b/.test(d.between(l, 'class="', '"')) && !u.includes('<div id="watch7-player-age-gate-content"')) return i(new Error(d.between(u, '<h1 id="unavailable-message" class="message">', "</h1>").trim()));
            var c, h = {
                    author: d.getAuthor(u),
                    published: d.getPublished(u),
                    description: d.getVideoDescription(u),
                    related_videos: d.getRelatedVideos(u),
                    video_url: s
                },
                p = d.between(u, "ytplayer.config = ", "<\/script>");
            p ? (c = p.slice(0, p.lastIndexOf(";ytplayer.load")), n(o, r, h, c, !1, i)) : (s = "https://www.youtube.com/embed/" + o + "?" + a, f(s, r.requestOptions, function(e, t, a) {
                if (e) return i(e);
                c = d.between(a, "t.setConfig({'PLAYER_CONFIG': ", "},'"), n(o, r, h, c, !0, i)
            }))
        })
    }
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = e[0];
        return e[0] = e[t % e.length], e[t] = r, e
    }
    var i = r(66),
        o = r(81);
    t.cache = new Map, t.getTokens = function(e, r, n) {
        var i, a, s = /(?:html5)?player[-_]([a-zA-Z0-9\-_]+)(?:\.js|\/)/.exec(e);
        s && (i = s[1], a = t.cache.get(i)), a ? n(null, a) : o(e, r.requestOptions, function(e, r, o) {
            if (e) return n(e);
            var a = t.extractActions(o);
            if (i && (!a || !a.length)) return void n(new Error("Could not extract signature deciphering actions"));
            t.cache.set(i, a), n(null, a)
        })
    }, t.decipher = function(e, t) {
        t = t.split("");
        for (var r = 0, i = e.length; r < i; r++) {
            var o = e[r],
                a = void 0;
            switch (o[0]) {
                case "r":
                    t = t.reverse();
                    break;
                case "w":
                    a = ~~o.slice(1), t = n(t, a);
                    break;
                case "s":
                    a = ~~o.slice(1), t = t.slice(a);
                    break;
                case "p":
                    a = ~~o.slice(1), t.splice(0, a)
            }
        }
        return t.join("")
    };
    var a = "[a-zA-Z_\\$][a-zA-Z_0-9]*",
        s = "(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|" + '"[^"\\\\]*(:?\\\\[\\s\\S][^"\\\\]*)*")',
        u = "(?:" + a + "|" + s + ")",
        l = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}",
        c = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}",
        f = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}",
        d = ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b%a\\.length\\];a\\[b\\]=c(?:;return a)?\\}",
        h = new RegExp("var (" + a + ")=\\{((?:(?:" + u + l + "|" + u + c + "|" + u + f + "|" + u + d + "),?\\r?\\n?)+)\\};"),
        p = new RegExp("function(?: " + a + ")?\\(a\\)\\{a=a\\.split\\((?:''|\"\")\\);\\s*((?:(?:a=)?" + a + "(?:\\.[a-zA-Z_\\$][a-zA-Z_0-9]*|\\[(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\")\\])\\(a,\\d+\\);)+)return a\\.join\\((?:''|\"\")\\)\\}"),
        m = new RegExp("(?:^|,)(" + u + ")" + l, "m"),
        g = new RegExp("(?:^|,)(" + u + ")" + c, "m"),
        v = new RegExp("(?:^|,)(" + u + ")" + f, "m"),
        b = new RegExp("(?:^|,)(" + u + ")" + d, "m");
    t.extractActions = function(e) {
        var t = h.exec(e),
            r = p.exec(e);
        if (!t || !r) return null;
        var n = t[1].replace(/\$/g, "\\$"),
            i = t[2].replace(/\$/g, "\\$"),
            o = r[1].replace(/\$/g, "\\$"),
            a = m.exec(i),
            s = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
        a = g.exec(i);
        var u = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
        a = v.exec(i);
        var l = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
        a = b.exec(i);
        for (var c = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, ""), f = "(" + [s, u, l, c].join("|") + ")", d = "(?:a=)?" + n + "(?:\\." + f + "|\\['" + f + "'\\]|\\[\"" + f + '"\\])\\(a,(\\d+)\\)', y = new RegExp(d, "g"), _ = []; null !== (a = y.exec(o));) {
            switch (a[1] || a[2] || a[3]) {
                case c:
                    _.push("w" + a[4]);
                    break;
                case s:
                    _.push("r");
                    break;
                case u:
                    _.push("s" + a[4]);
                    break;
                case l:
                    _.push("p" + a[4])
            }
        }
        return _
    }, t.setDownloadURL = function(e, t, r) {
        var n;
        if (e.url) {
            n = e.url;
            try {
                n = decodeURIComponent(n)
            } catch (e) {
                return
            }
            var o = i.parse(n, !0);
            delete o.search;
            var a = o.query;
            a.ratebypass = "yes", t && (a.signature = t), e.url = i.format(o)
        }
    }, t.decipherFormats = function(e, r, n) {
        e.forEach(function(e) {
            var i = r && e.s ? t.decipher(r, e.s) : null;
            t.setDownloadURL(e, i, n)
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = r(62),
        o = r(66),
        a = r(121).AllHtmlEntities,
        s = r(79),
        u = /(?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+)s)?(?:(\d+)(?:ms)?)?/;
    t.parseTime = function(e) {
        var t = u.exec(e.toString()),
            r = t[1] || 0,
            n = t[2] || 0,
            i = t[3] || 0,
            o = t[4] || 0;
        return 36e5 * r + 6e4 * n + 1e3 * i + parseInt(o, 10)
    };
    var l = {
            mp3: 1,
            vorbis: 2,
            aac: 3,
            opus: 4,
            flac: 5
        },
        c = {
            "Sorenson H.283": 1,
            "MPEG-4 Visual": 2,
            VP8: 3,
            VP9: 4,
            "H.264": 5
        };
    t.sortFormats = function(e, t) {
        function r(e) {
            if (e.bitrate) {
                var t = e.bitrate.split("-");
                return parseFloat(t[t.length - 1], 10)
            }
            return 0
        }

        function n(e) {
            return (e.audioBitrate || 0) + (l[e.audioEncoding] || 0) / 10
        }
        var i = e.resolution ? parseInt(e.resolution.slice(0, -1), 10) : 0,
            o = t.resolution ? parseInt(t.resolution.slice(0, -1), 10) : 0,
            a = 2 * ~~!!i + ~~!!e.audioBitrate,
            s = 2 * ~~!!o + ~~!!t.audioBitrate;
        if (a === s) {
            if (i === o) {
                var u = r(e),
                    f = r(t);
                if (u === f) {
                    var d = n(e),
                        h = n(t);
                    if (d === h) {
                        var p = c[e.encoding] || 0;
                        return (c[t.encoding] || 0) - p
                    }
                    return h - d
                }
                return f - u
            }
            return o - i
        }
        return s - a
    }, t.chooseFormat = function(e, r) {
        if ("object" === n(r.format)) return r.format;
        if (r.filter && (e = t.filterFormats(e, r.filter), 0 === e.length)) return new Error("No formats found with custom filter");
        var i, o = r.quality || "highest";
        switch (o) {
            case "highest":
                i = e[0];
                break;
            case "lowest":
                i = e[e.length - 1];
                break;
            default:
                var a = function(t) {
                    return e.find(function(e) {
                        return e.itag === "" + t
                    })
                };
                Array.isArray(o) ? o.find(function(e) {
                    return i = a(e)
                }) : i = a(o)
        }
        return i || new Error("No such format found: " + o)
    }, t.filterFormats = function(e, t) {
        var r;
        switch (t) {
            case "video":
                r = function(e) {
                    return e.bitrate
                };
                break;
            case "videoonly":
                r = function(e) {
                    return e.bitrate && !e.audioBitrate
                };
                break;
            case "audio":
                r = function(e) {
                    return e.audioBitrate
                };
                break;
            case "audioonly":
                r = function(e) {
                    return !e.bitrate && e.audioBitrate
                };
                break;
            default:
                if ("function" != typeof t) throw new TypeError("Given filter (" + t + ") is not supported");
                r = t
        }
        return e.filter(r)
    }, t.between = function(e, t, r) {
        var n;
        return -1 === (n = e.indexOf(t)) ? "" : (e = e.slice(n + t.length), -1 === (n = e.indexOf(r)) ? "" : e = e.slice(0, n))
    }, t.getURLVideoID = function(e) {
        var r = o.parse(e, !0),
            n = r.query.v;
        if ("youtu.be" === r.hostname || ("youtube.com" === r.hostname || "www.youtube.com" === r.hostname) && !n) {
            var i = r.pathname.split("/");
            n = i[i.length - 1]
        }
        return n ? (n = n.substring(0, 11), t.validateID(n) ? n : new TypeError("Video id (" + n + ") does not match expected format (" + f.toString() + ")")) : new Error("No video id found: " + e)
    }, t.getVideoID = function(e) {
        return t.validateID(e) ? e : t.getURLVideoID(e)
    };
    var f = /^[a-zA-Z0-9-_]{11}$/;
    t.validateID = function(e) {
        return f.test(e)
    }, t.validateURL = function(e) {
        return !(t.getURLVideoID(e) instanceof Error)
    }, t.parseFormats = function(e) {
        var t = [];
        return e.url_encoded_fmt_stream_map && (t = t.concat(e.url_encoded_fmt_stream_map.split(","))), e.adaptive_fmts && (t = t.concat(e.adaptive_fmts.split(","))), t = t.map(function(e) {
            return i.parse(e)
        }), delete e.url_encoded_fmt_stream_map, delete e.adaptive_fmts, t
    }, t.addFormatMeta = function(e) {
        var t = s[e.itag];
        for (var r in t) e[r] = t[r];
        /\/live\/1\//.test(e.url) && (e.live = !0)
    }, t.getVideoDescription = function(e) {
        var t = /<p.*?id="eow-description".*?>(.+?)<\/p>[\n\r\s]*?<\/div>/im,
            r = e.match(t);
        return r ? (new a).decode(r[1].replace(/\n/g, " ").replace(/\s*<\s*br\s*\/?\s*>\s*/gi, "\n").replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, "\n").replace(/<.*?>/gi, "")).trim() : ""
    };
    var d = /<a href="\/channel\/([\w-]+)"[^>]+>(.+?(?=<\/a>))/,
        h = /<a href="\/user\/([^"]+)/;
    t.getAuthor = function(e) {
        var r = t.between(e, '<div id="watch7-user-header" class=" spf-link ">', '<div id="watch8-action-buttons" class="watch-action-buttons clearfix">');
        if ("" === r) return {};
        r = (new a).decode(r);
        var n = r.match(d),
            i = r.match(h);
        return {
            id: n[1],
            name: n[2],
            avatar: o.resolve("https://www.youtube.com/watch?v=", t.between(r, 'data-thumb="', '"')),
            user: i ? i[1] : null,
            channel_url: "https://www.youtube.com/channel/" + n[1],
            user_url: i ? "https://www.youtube.com/user/" + i[1] : null
        }
    }, t.getPublished = function(e) {
        return Date.parse(t.between(e, '<meta itemprop="datePublished" content="', '">'))
    }, t.getRelatedVideos = function(e) {
        var r = t.between(e, "'RELATED_PLAYER_ARGS': {\"rvs\":", "},");
        try {
            r = JSON.parse(r)
        } catch (e) {
            return []
        }
        return r.split(",").map(function(e) {
            return i.parse(e)
        })
    }, t.parallel = function(e, t) {
        function r(e, r, s) {
            if (!o) {
                if (r) return o = !0, void t(r);
                a[e] = s, ++n === i && t(null, a)
            }
        }
        var n = 0,
            i = e.length,
            o = !1,
            a = [];
        i > 0 ? e.forEach(function(e, t) {
            e(r.bind(null, t))
        }) : t(null, a)
    }, t.objectAssign = function(e, r, i) {
        for (var o in r) i && "object" === n(r[o]) && null != r[o] && e[o] ? t.objectAssign(e[o], r[o]) : e[o] = r[o];
        return e
    };
    var p = /^\d+$/,
        m = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/,
        g = {
            ms: 1,
            s: 1e3,
            m: 6e4,
            h: 36e5
        };
    t.fromHumanTime = function(e) {
        if ("number" == typeof e) return e;
        if (p.test(e)) return +e;
        var t = m.exec(e);
        if (t) return +(t[1] || 0) * g.h + +(t[2] || 0) * g.m + +t[3] * g.s + +(t[4] || 0);
        for (var r, n = 0, i = /(\d+)(ms|s|m|h)/g; null != (r = i.exec(e));) n += +r[1] * g[r[2]];
        return n
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(0),
        i = r(5),
        o = r(24),
        a = r(1),
        s = r(3),
        u = r(90),
        l = r(86),
        c = r(87),
        f = r(88),
        d = r(92),
        h = r.n(d),
        p = r(103),
        m = r.n(p),
        g = r(102),
        v = r.n(g);
    r(89), window.db = c.a, window.downloads = f.a, window.cache = l.a, r(91), window.onRequest = function(e, t, r) {
        if (!t.tab || -1 !== t.tab.index || "restorePanelToTab" === e.method) {
            var i = null;
            switch (e.requestType) {
                case "media":
                    i = c.a.processRequest(t.tab.id, e.method, e.params);
                    break;
                case "cache":
                    i = l.a.processRequest(t.tab.id, e.method, e.params);
                    break;
                case "make_http_request":
                    i = n.Utils.send(e.method, e.url, e.params, e.headers);
                    break;
                case "downloads":
                    i = f.a.processRequest(t.tab ? t.tab.id : null, e.method, e.params);
                    break;
                case "metrics":
                    if ("log" === e.method) {
                        var a = e.params;
                        s.a.logFromContentScript(a.name, a.value)
                    }
                    break;
                case "pip":
                    u.a.processRequest(e, t);
                    break;
                case "verify_token":
                    i = o.a.shouldHideWidget(e.params.token, e.params.host);
                    break;
                case "should_show_widget":
                    r({
                        success: "resolve",
                        data: !0
                    });
                    break;
                case "youtube_get_info":
                    i = new Promise(function(t, r) {
                        h()(e.url, function(e, n) {
                            e ? r(e) : t(n)
                        })
                    })
            }
            return i ? (i.then(function(e) {
                r({
                    success: "resolve",
                    data: e
                })
            }).catch(function() {
                r({
                    success: "reject",
                    data: null
                })
            }), !0) : void 0
        }
    };
    var b = i.a.load();
    b.then(function() {
        i.a.get("preferred_quality_level") || i.a.set("preferred_quality_level", a.a.DEFAULT_QUALITY_LEVEL), chrome.runtime.onMessage.addListener(window.onRequest), chrome.tabs.onUpdated.addListener(function(e, t, r) {
            r.url.match(/^(coccoc|chrome):/) && c.a.resetAllMedia(e), "complete" === t.status && c.a.showPageActionState(e), chrome.downloads.onDownloadShelfClosed && chrome.downloads.onDownloadShelfClosed.addListener(function() {
                chrome.tabs.sendMessage(e, {
                    requestType: "hide_playnow_tooltip"
                })
            })
        })
    }), document.addEventListener("DOMContentLoaded", function() {
        b.then(function() {
            i.a.set("template-widget", n.Utils.query("#template-widget").textContent), i.a.set("template-sound-only-tour", n.Utils.query("#template-sound-only-tour").textContent), i.a.set("template-list", n.Utils.query("#template-list").textContent), i.a.set("template-media", m.a), i.a.set("template-media-popup", v.a), i.a.set("template-tooltip-play-now-bottom", n.Utils.query("#template-tooltip-play-now-bottom").textContent)
        })
    });
    var y = [/^https?:\/\/w{0,3}\.youtube\.com\/watch\?v=/, /^https?:\/\/v.nhaccuatui.com/];
    chrome.tabs.onUpdated.addListener(function(e, t) {
        "loading" === t.status && t.url && y.some(function(e) {
            return e.test(t.url)
        }) && chrome.tabs.sendMessage(e, {
            requestType: "page_changed",
            newUrl: t.url
        })
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}], [143]);