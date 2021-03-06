webpackJsonp([2], [, function(t, e, n) {
    "use strict";
    var i = n(10),
        o = function() {};
    o.QL_HIGH = "High", o.QL_MEDIUM = "Medium", o.QL_LOW = "Low", o.QL_VIDEO_ULTRAHD = "Ultra HD", o.QL_VIDEO_FULLHD = "Full HD", o.QL_VIDEO_HD = "HD", o.QL_VIDEO_STANDARD = "Standard", o.QL_VIDEO_MEDIUM = "Medium", o.QL_VIDEO_SMALL = "Small", o.QL_VIDEO_MOBILE = "Mobile";
    var r = {};
    r[o.QL_VIDEO_ULTRAHD] = {
        quality: o.QL_HIGH,
        qualityIndex: 8,
        size: 3072,
        videoTitle: "Super HD"
    }, r[o.QL_VIDEO_ULTRAHD] = {
        quality: o.QL_HIGH,
        qualityIndex: 7,
        size: 2160,
        videoTitle: "Ultra HD"
    }, r[o.QL_VIDEO_ULTRAHD] = {
        quality: o.QL_HIGH,
        qualityIndex: 6,
        size: 1440,
        videoTitle: "Quad HD"
    }, r[o.QL_VIDEO_FULLHD] = {
        quality: o.QL_HIGH,
        qualityIndex: 5,
        size: 1080,
        videoTitle: "Full HD",
        audioTitle: "High",
        vimeoQuality: "1080p",
        zingTag: ["1080p", "label1080"],
        dailymotionQuality: "hd1080",
        clipvnQuality: "5"
    }, r[o.QL_VIDEO_HD] = {
        quality: o.QL_HIGH,
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
    }, r[o.QL_VIDEO_STANDARD] = {
        quality: o.QL_MEDIUM,
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
    }, r[o.QL_VIDEO_MEDIUM] = {
        quality: o.QL_MEDIUM,
        qualityIndex: 2,
        size: 360,
        videoTitle: "Medium",
        audioTitle: "Medium",
        vimeoQuality: "360p",
        dailymotionQuality: "sd",
        zingTag: ["source", "360p"],
        JWQuality: "lowquality",
        clipvnQuality: "2"
    }, r[o.QL_VIDEO_SMALL] = {
        quality: o.QL_LOW,
        qualityIndex: 1,
        size: 240,
        videoTitle: "Small",
        audioTitle: "Low",
        dailymotionQuality: "ld",
        vimeoQuality: "270p",
        zingTag: ["f", "f240"],
        clipvnQuality: "1"
    }, r[o.QL_VIDEO_MOBILE] = {
        quality: o.QL_LOW,
        qualityIndex: 0,
        size: 144,
        videoTitle: "Mobile",
        audioTitle: "Low",
        vimeoQuality: "",
        clipvnQuality: "0"
    };
    var l = {};
    l[o.QL_HIGH] = r[o.QL_VIDEO_ULTRAHD].qualityIndex, l[o.QL_MEDIUM] = r[o.QL_VIDEO_STANDARD].qualityIndex, l[o.QL_LOW] = r[o.QL_VIDEO_SMALL].qualityIndex, o.prototype = {
        constructor: o,
        DEFAULT_QUALITY_LEVEL: o.QL_HIGH,
        QUALITY_LEVELS: [o.QL_HIGH, o.QL_MEDIUM, o.QL_LOW],
        VIDEO_QUALITY_LEVELS: [o.QL_VIDEO_ULTRAHD, o.QL_VIDEO_FULLHD, o.QL_VIDEO_HD, o.QL_VIDEO_STANDARD, o.QL_VIDEO_MEDIUM, o.QL_VIDEO_SMALL, o.QL_VIDEO_MOBILE],
        DEFAULT_QUALITY_TYPE: o.QL_VIDEO_STANDARD,
        QUALITY_TYPES: r,
        getFacebookQuality: function(t) {
            return this._getVideoQuality("facebookQuality", t).videoTitle
        },
        getDailymotionQuality: function(t) {
            return this._getVideoQuality("dailymotionQuality", t).videoTitle
        },
        getZingVideoQuality: function(t) {
            return this._getVideoQuality("zingTag", t).videoTitle
        },
        getZingAudioQuality: function(t) {
            return this._getVideoQuality("zingTag", t).audioTitle
        },
        getVimeoQuality: function(t) {
            return this._getVideoQuality("vimeoQuality", t).videoTitle
        },
        getClipvnQuality: function(t) {
            return this._getVideoQuality("clipvnQuality", t).videoTitle
        },
        getJWQuality: function(t) {
            return this._getVideoQuality("JWQuality", t).videoTitle
        },
        getQualityBySize: function(t) {
            return this._getVideoQuality("size", t).videoTitle
        },
        getSizeByQuality: function(t) {
            return (r[t] || {}).size || 0
        },
        _getVideoQuality: function(t, e, n) {
            for (var i in this.QUALITY_TYPES) {
                var o = this.QUALITY_TYPES[i][t];
                if (Array.isArray(o) || (o = [o]), -1 !== o.indexOf(e)) return this.QUALITY_TYPES[i]
            }
            return n ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _getTypeByQualityType: function(t) {
            for (var e in this.QUALITY_TYPES)
                if (t === e || t === this.QUALITY_TYPES[e].videoTitle || t === this.QUALITY_TYPES[e].audioTitle) return this.QUALITY_TYPES[e];
            return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _calculateWeight: function(t, e) {
            var n = i.b[t.get("type")].extensions_weight,
                o = n.indexOf(t.get("ext")),
                r = this._getTypeByQualityType(t.get("quality")).qualityIndex;
            return o / n.length + Math.abs(e - r) / 7
        },
        getQualityLevelByType: function(t) {
            return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(t).videoTitle)
        },
        getVideoQualityIndex: function(t) {
            return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(t)
        },
        getOneClickQualityIndex: function(t) {
            return this.QUALITY_LEVELS.concat().reverse().indexOf(t)
        },
        getQualityLevelByQualityType: function(t) {
            return this._getTypeByQualityType(t).quality
        },
        getQualityIndexByVideoTitleQuality: function(t) {
            return void 0 !== r[t] ? r[t].qualityIndex : -1
        },
        chooseBestDownload: function(t, e, n) {
            var i = t.length;
            if (n)
                for (var o = n.split("/").filter(function(t) {
                        return t
                    }), r = o.length > 2, a = 0; a < i; ++a) {
                    var s = t[a],
                        c = s.extQuality();
                    if (c === n) return s;
                    if (r) {
                        var u = n.replace(/(.+)\/.+/, "$1"),
                            d = c.replace(/(.+)\/.+/, "$1");
                        if (d === u) return s
                    }
                }
            e = e || this.DEFAULT_QUALITY_LEVEL;
            var f = t.filter(function(t) {
                return "video" === t.type
            });
            f && f.length || (f = t), i = f.length;
            for (var p = l[e], h = 1e3, _ = -1, v = 0; v < i; ++v) {
                var g = f[v],
                    m = this._calculateWeight(g, p);
                h > m && (h = m, _ = v)
            }
            return f[_]
        }
    }, e.a = new o
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n() {
            t.classList.add("ps--focus")
        }

        function i() {
            t.classList.remove("ps--focus")
        }
        var o = this;
        o.settings = s();
        for (var r in e) o.settings[r] = e[r];
        o.containerWidth = null, o.containerHeight = null, o.contentWidth = null, o.contentHeight = null, o.isRtl = "rtl" === c.css(t, "direction"), o.isNegativeScroll = function() {
            var e = t.scrollLeft,
                n = null;
            return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
        }(), o.negativeScrollAdjustment = o.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.event = new u, o.ownerDocument = t.ownerDocument || document, o.scrollbarXRail = c.appendTo(c.create("div", "ps__scrollbar-x-rail"), t), o.scrollbarX = c.appendTo(c.create("div", "ps__scrollbar-x"), o.scrollbarXRail), o.scrollbarX.setAttribute("tabindex", 0), o.event.bind(o.scrollbarX, "focus", n), o.event.bind(o.scrollbarX, "blur", i), o.scrollbarXActive = null, o.scrollbarXWidth = null, o.scrollbarXLeft = null, o.scrollbarXBottom = a.toInt(c.css(o.scrollbarXRail, "bottom")), o.isScrollbarXUsingBottom = o.scrollbarXBottom === o.scrollbarXBottom, o.scrollbarXTop = o.isScrollbarXUsingBottom ? null : a.toInt(c.css(o.scrollbarXRail, "top")), o.railBorderXWidth = a.toInt(c.css(o.scrollbarXRail, "borderLeftWidth")) + a.toInt(c.css(o.scrollbarXRail, "borderRightWidth")), c.css(o.scrollbarXRail, "display", "block"), o.railXMarginWidth = a.toInt(c.css(o.scrollbarXRail, "marginLeft")) + a.toInt(c.css(o.scrollbarXRail, "marginRight")), c.css(o.scrollbarXRail, "display", ""), o.railXWidth = null, o.railXRatio = null, o.scrollbarYRail = c.appendTo(c.create("div", "ps__scrollbar-y-rail"), t), o.scrollbarY = c.appendTo(c.create("div", "ps__scrollbar-y"), o.scrollbarYRail), o.scrollbarY.setAttribute("tabindex", 0), o.event.bind(o.scrollbarY, "focus", n), o.event.bind(o.scrollbarY, "blur", i), o.scrollbarYActive = null, o.scrollbarYHeight = null, o.scrollbarYTop = null, o.scrollbarYRight = a.toInt(c.css(o.scrollbarYRail, "right")), o.isScrollbarYUsingRight = o.scrollbarYRight === o.scrollbarYRight, o.scrollbarYLeft = o.isScrollbarYUsingRight ? null : a.toInt(c.css(o.scrollbarYRail, "left")), o.scrollbarYOuterWidth = o.isRtl ? a.outerWidth(o.scrollbarY) : null, o.railBorderYWidth = a.toInt(c.css(o.scrollbarYRail, "borderTopWidth")) + a.toInt(c.css(o.scrollbarYRail, "borderBottomWidth")), c.css(o.scrollbarYRail, "display", "block"), o.railYMarginHeight = a.toInt(c.css(o.scrollbarYRail, "marginTop")) + a.toInt(c.css(o.scrollbarYRail, "marginBottom")), c.css(o.scrollbarYRail, "display", ""), o.railYHeight = null, o.railYRatio = null
    }

    function o(t) {
        return t.getAttribute("data-ps-id")
    }

    function r(t, e) {
        t.setAttribute("data-ps-id", e)
    }

    function l(t) {
        t.removeAttribute("data-ps-id")
    }
    var a = n(6),
        s = n(51),
        c = n(8),
        u = n(48),
        d = n(49),
        f = {};
    e.add = function(t, e) {
        var n = d();
        return r(t, n), f[n] = new i(t, e), f[n]
    }, e.remove = function(t) {
        delete f[o(t)], l(t)
    }, e.get = function(t) {
        return f[o(t)]
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = function() {};
    o.SERVER_LOG_URL = "https://coccoc.com/s_log", o.SOURCE_POPUP_PAGE = 0, o.SOURCE_OPTIONS_PAGE = 10, o.SOURCE_CONTENT_SCRIPT = 20, o.SOURCE_BACKGROUND_PAGE = 30, o.prototype = {
        LEGACY_METRICS_NAME_MAP: {
            ButtonClicked: "TryItNowButtonClicked",
            CheckBoxClicked: "OneClickCheckbox"
        },
        get source() {
            if (!chrome.extension.getBackgroundPage) return o.SOURCE_CONTENT_SCRIPT;
            switch (document.location.pathname) {
                case "/popup.html":
                    return o.SOURCE_POPUP_PAGE;
                case "/options.html":
                    return o.SOURCE_OPTIONS_PAGE;
                case "/background.html":
                    return o.SOURCE_BACKGROUND_PAGE;
                default:
                    return
            }
        },
        _getFullName: function(t) {
            return "Savior." + (this.LEGACY_METRICS_NAME_MAP[t] || t)
        },
        _getTotalValue: function(t, e, n) {
            return 0 === t.indexOf("Refr") || n || "PageShown" === t || "number" != typeof e ? e : e + this.source
        },
        _doLog: function(t, e, n) {
            var i = this._getFullName(e);
            if (this.source === o.SOURCE_CONTENT_SCRIPT) chrome.runtime.sendMessage({
                requestType: "metrics",
                method: "log",
                params: {
                    name: e,
                    value: n
                }
            });
            else if (chrome.metricsPrivate) switch (t) {
                case "recordSmallCount":
                    chrome.metricsPrivate.recordValue({
                        metricName: i,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 100,
                        buckets: 100
                    }, n);
                    break;
                case "recordValue":
                    chrome.metricsPrivate.recordValue({
                        metricName: i,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 1e3,
                        buckets: 1002
                    }, n);
                    break;
                case "recordSerpData":
                case "recordClickData":
                    chrome.metricsPrivate[t](n)
            }
        },
        _getMethodByName: function(t) {
            switch (t) {
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
        log: function(t, e, n) {
            var i = this._getMethodByName(t),
                o = this._getTotalValue(t, e, n);
            this._doLog(i, t, o)
        },
        logYtExtension: function(t) {
            switch (t.toLowerCase()) {
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
        logFromContentScript: function(t, e) {
            this.log(t, e, !0)
        },
        serverLog: function(t, e) {
            var n = new Image,
                r = [];
            e = Object.assign({
                action: t,
                source: this.source,
                version: i.SAVIOR_VERSION
            }, e), Object.keys(e).reduce(function(t, n) {
                return r.push(n + "=" + encodeURIComponent(e[n])), r
            }, r), n.src = o.SERVER_LOG_URL + "?" + r.join("&")
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
    }, e.a = new o
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function o(t, e) {
        var n = {
            width: e.railXWidth
        };
        e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, l.css(e.scrollbarXRail, n);
        var i = {
            top: t.scrollTop,
            height: e.railYHeight
        };
        e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, l.css(e.scrollbarYRail, i), l.css(e.scrollbarX, {
            left: e.scrollbarXLeft,
            width: e.scrollbarXWidth - e.railBorderXWidth
        }), l.css(e.scrollbarY, {
            top: e.scrollbarYTop,
            height: e.scrollbarYHeight - e.railBorderYWidth
        })
    }
    var r = n(6),
        l = n(8),
        a = n(2),
        s = n(7);
    t.exports = function(t) {
        var e = a.get(t);
        e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
        var n;
        t.contains(e.scrollbarXRail) || (n = l.queryChildren(t, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
            l.remove(t)
        }), l.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = l.queryChildren(t, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
            l.remove(t)
        }), l.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = i(e, r.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = r.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = i(e, r.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = r.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, s(t, "left", 0)), e.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, s(t, "top", 0))
    }
}, function(t, e, n) {
    "use strict";
    var i = function() {
        this._storage = chrome.storage.local, this._options = {}, this._default = {
            detach_enabled: !0,
            on_page_buttons: !0,
            min_stream_size: 30720,
            prefer_last_quality: !0,
            hide_play_now_tooltip: !1,
            hide_play_now_tooltip_bottom: !1
        };
        var t = this;
        chrome.storage.onChanged.addListener(function(e, n) {
            if ("local" === n)
                for (var i in e) t._options[i] = e[i].newValue
        })
    };
    i.prototype = {
        load: function() {
            var t = this;
            return new Promise(function(e) {
                t._storage.get(null, function(n) {
                    t._options = n, e(n)
                })
            })
        },
        set: function(t, e) {
            var n = {};
            ("string" == typeof t || "number" == typeof t && void 0 !== e) && (n[t] = e, this._options[t] = e, this._storage.set(n))
        },
        get: function(t) {
            return t in this._options ? this._options[t] : this._default[t]
        }
    }, e.a = new i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e, n = ["ps--in-scrolling"];
        return e = void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t], n.concat(e)
    }
    var o = n(8),
        r = e.toInt = function(t) {
            return parseInt(t, 10) || 0
        };
    e.isEditable = function(t) {
        return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
    }, e.removePsClasses = function(t) {
        for (var e = 0; e < t.classList.length; e++) {
            var n = t.classList[e];
            0 === n.indexOf("ps-") && t.classList.remove(n)
        }
    }, e.outerWidth = function(t) {
        return r(o.css(t, "width")) + r(o.css(t, "paddingLeft")) + r(o.css(t, "paddingRight")) + r(o.css(t, "borderLeftWidth")) + r(o.css(t, "borderRightWidth"))
    }, e.startScrolling = function(t, e) {
        for (var n = i(e), o = 0; o < n.length; o++) t.classList.add(n[o])
    }, e.stopScrolling = function(t, e) {
        for (var n = i(e), o = 0; o < n.length; o++) t.classList.remove(n[o])
    }, e.env = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
    }
}, function(t, e, n) {
    "use strict";
    var i = n(2),
        o = function(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e
        };
    t.exports = function(t, e, n) {
        if (void 0 === t) throw "You must provide an element to the update-scroll function";
        if (void 0 === e) throw "You must provide an axis to the update-scroll function";
        if (void 0 === n) throw "You must provide a value to the update-scroll function";
        "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
        var r = i.get(t);
        "top" === e && n >= r.contentHeight - r.containerHeight && (n = r.contentHeight - r.containerHeight, n - t.scrollTop <= 2 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= r.contentWidth - r.containerWidth && (n = r.contentWidth - r.containerWidth, n - t.scrollLeft <= 2 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = t.scrollTop), void 0 === r.lastLeft && (r.lastLeft = t.scrollLeft), "top" === e && n < r.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > r.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < r.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > r.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== r.lastTop && (t.scrollTop = r.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== r.lastLeft && (t.scrollLeft = r.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return window.getComputedStyle(t)[e]
    }

    function o(t, e, n) {
        return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
    }

    function r(t, e) {
        for (var n in e) {
            var i = e[n];
            "number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
        }
        return t
    }
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = {};
    a.create = function(t, e) {
        var n = document.createElement(t);
        return n.className = e, n
    }, a.appendTo = function(t, e) {
        return e.appendChild(t), t
    }, a.css = function(t, e, n) {
        return "object" === (void 0 === e ? "undefined" : l(e)) ? r(t, e) : void 0 === n ? i(t, e) : o(t, e, n)
    }, a.matches = function(t, e) {
        return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
    }, a.remove = function(t) {
        void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }, a.queryChildren = function(t, e) {
        return Array.prototype.filter.call(t.childNodes, function(t) {
            return a.matches(t, e)
        })
    }, t.exports = a
}, , , function(t, e) {
    var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
    }
    t.exports = n
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function r(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }

    function l() {
        _ && p && (_ = !1, p.length ? h = p.concat(h) : v = -1, h.length && a())
    }

    function a() {
        if (!_) {
            var t = o(l);
            _ = !0;
            for (var e = h.length; e;) {
                for (p = h, h = []; ++v < e;) p && p[v].run();
                v = -1, e = h.length
            }
            p = null, _ = !1, r(t)
        }
    }

    function s(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var u, d, f = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var p, h = [],
        _ = !1,
        v = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new s(t, e)), 1 !== h.length || _ || o(a)
    }, s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, , , , , , function(t, e, n) {
    "use strict";
    (function(t, i) {
        function o(t) {
            setTimeout(t, 0)
        }

        function r(t) {
            return function(e) {
                var n = (0, c.default)(arguments, 1);
                t(function() {
                    e.apply(null, n)
                })
            }
        }
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.hasNextTick = e.hasSetImmediate = void 0, e.fallback = o, e.wrap = r;
        var a, s = n(19),
            c = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(s),
            u = e.hasSetImmediate = "function" == typeof t && t,
            d = e.hasNextTick = "object" === (void 0 === i ? "undefined" : l(i)) && "function" == typeof i.nextTick;
        a = u ? t : d ? i.nextTick : o, e.default = r(a)
    }).call(e, n(22).setImmediate, n(12))
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        e |= 0;
        for (var n = Math.max(t.length - e, 0), i = Array(n), o = 0; o < n; o++) i[o] = t[e + o];
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return a && "AsyncFunction" === t[Symbol.toStringTag]
    }

    function o(t) {
        return i(t) ? (0, l.default)(t) : t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isAsync = void 0;
    var r = n(31),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = "function" == typeof Symbol;
    e.default = o, e.isAsync = i
}, , function(t, e, n) {
    function i(t, e) {
        this._id = t, this._clearFn = e
    }
    var o = Function.prototype.apply;
    e.setTimeout = function() {
        return new i(o.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function() {
        return new i(o.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }, n(23), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";

            function i(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var i = {
                    callback: t,
                    args: e
                };
                return c[s] = i, a(s), s++
            }

            function o(t) {
                delete c[t]
            }

            function r(t) {
                var e = t.callback,
                    i = t.args;
                switch (i.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(i[0]);
                        break;
                    case 2:
                        e(i[0], i[1]);
                        break;
                    case 3:
                        e(i[0], i[1], i[2]);
                        break;
                    default:
                        e.apply(n, i)
                }
            }

            function l(t) {
                if (u) setTimeout(l, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            r(e)
                        } finally {
                            o(t), u = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var a, s = 1,
                    c = {},
                    u = !1,
                    d = t.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? function() {
                    a = function(t) {
                        e.nextTick(function() {
                            l(t)
                        })
                    }
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            n = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = n, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && l(+n.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), a = function(n) {
                        t.postMessage(e + n, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        l(t.data)
                    }, a = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : d && "onreadystatechange" in d.createElement("script") ? function() {
                    var t = d.documentElement;
                    a = function(e) {
                        var n = d.createElement("script");
                        n.onreadystatechange = function() {
                            l(e), n.onreadystatechange = null, t.removeChild(n), n = null
                        }, t.appendChild(n)
                    }
                }() : function() {
                    a = function(t) {
                        setTimeout(l, 0, t)
                    }
                }(), f.setImmediate = i, f.clearImmediate = o
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(11), n(12))
}, , , , , function(t, e, n) {
    "use strict";
    t.exports = n(50)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = this;
        this._widget = t, this._sizeQueue = f()(function(t, n) {
            e._checkFileSize(t, n)
        }, h), this._downloads = null, location.protocol.includes("chrome") && location.pathname.includes("popup.html") && this.initPlayNowListener(), a.a.load()
    }
    var o = n(0),
        r = n(69),
        l = n(3),
        a = n(5),
        s = n(1),
        c = n(13),
        u = n.n(c),
        d = n(36),
        f = n.n(d),
        p = !o.Utils.IS_CONTENT_SCRIPT,
        h = 3;
    i.prototype = {
        setDownloads: function(t) {
            this._downloads = t
        },
        render: function(t, e, i) {
            e.downloads = this._downloads.group(), p && (e.is_only = this._downloads.isOneMedia());
            var l = o.Utils.query("#downloads", this._widget);
            l.innerHTML = p ? u.a.render(t, e, {
                media_template: a.a.get("template-media-popup")
            }) : u.a.render(t, e, {
                media_template: a.a.get("template-media")
            }), l.classList.add("content");
            var s = this.applyCurrentValues(i);
            if (p) {
                var c = o.Utils.query(".downloads-list", this._widget);
                c.scrollHeight > c.offsetHeight && (n.i(r.a)(o.Utils.queryAll("h1", this._widget), c), c.addEventListener("scroll", this._getSizeOfVisibleMedia.bind(this), !1)), this._widget.classList.add("done")
            }
            return s
        },
        initPlayNowListener: function() {
            var t = this;
            chrome.runtime.onMessage.addListener(function(e) {
                if ("downloads" === e.requestType && "widget_progress" === e.method) {
                    var n = e.params;
                    if (n.mime && n.mime.includes("video") && !n.filename.match(/\.mp3$/)) {
                        var i = n.url,
                            r = t._widget.querySelector('a[data-url="' + i + '"]'),
                            l = void 0;
                        if (!r) return;
                        l = o.Utils.nearestParent(r, ".j-media-scope"), n.exists && (n.playable || "complete" === n.state) ? t._handleProgress(l, n) : "interrupted" !== n.state && n.exists || t._changeWidgetMode(l, "select_media")
                    }
                }
            })
        },
        _handleProgress: function(t, e) {
            var i = 0,
                r = t.querySelector(".play-now-btn"),
                a = parseInt(r.dataset.downloadId);
            if (a && a === e.id || (r.dataset.downloadId = e.id), t.matches(".progress-mode") || (this._changeWidgetMode(t, "progress"), l.a.log("PlayNow", l.a.PLAY_NOW_SHOWN)), "complete" !== e.state) {
                var s = (e.bytesReceived / e.totalBytes * 100).toFixed(0);
                s < 0 && (s = 0), i = s + "%"
            } else i = "100%";
            var c = t.querySelector(".progress-bar .bar");
            c && (c.style.width = i);
            var u = o.Utils.beautifyFileSize(e.totalBytes, !0),
                d = o.Utils.beautifyFileSize(e.bytesReceived, !0),
                f = t.querySelector(".progress-box .progress-text");
            f && (f.innerText = "100%" !== i ? d + " " + n.i(o.i18n)("play_now_received_from") + " " + u : u);
            var p = t.dataset.prevReceived || 0,
                h = e.bytesReceived - p;
            h < 0 && (h = Math.abs(h)), h < 0 && (h = 0);
            var _ = o.Utils.beautifyFileSize(h, !0),
                v = t.querySelector(".progress-box .speed-text");
            v && (v.innerHTML = "100%" !== i ? '<span class="green-arrow-icon"></span> ' + _ + "/" + n.i(o.i18n)("play_now_per_second") : ""), t.dataset.prevReceived = e.bytesReceived
        },
        _changeWidgetMode: function(t, e) {
            t.classList.remove("progress-mode", "select-mode"), t.classList.add(e + "-mode")
        },
        _checkFileSize: function(t, e) {
            var n = this,
                i = this._downloads.getMedia(t);
            if (!i || i.size) return void("function" == typeof e && e());
            l.a.log("Download", l.a.DOWNLOAD_REQUEST_SIZE);
            var r = o.Utils.query("#size_" + i.id, this._widget);
            r.classList.add("size-loading"), i.getSize().then(function(t) {
                if ("function" == typeof e && e(), r) {
                    var n = o.Utils.beautifyFileSize(t);
                    r.classList.add("done"), r.classList.remove("size-loading"), r.textContent = "(" + n + ")";
                    var i = o.Utils.findParent(r, "select-wrapper");
                    if (i) {
                        var a = i.querySelector(".j-quality.selected .j-checked-size");
                        a && (a.innerText = n)
                    }
                    t || l.a.log("Download", l.a.DOWNLOAD_REQUEST_SIZE_FAILED)
                }
            }).catch(function() {
                "function" == typeof e && e(), r.classList.add("done"), r.textContent = "(Error)", o.Utils.query("#media_" + i.id, n._widget).setAttribute("disabled", "disabled")
            })
        },
        _applyCurrentValues: function(t) {
            var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                i = n || t.querySelector(".j-quality-selector"),
                r = i.getAttribute("data-selected-value");
            o.Utils.queryAll(".j-quality-option, .j-quality-download", t).forEach(function(t) {
                t.hidden = t.dataset.quality !== r, p || t.hidden || !t.classList.contains("j-quality-download") || e._sizeQueue.push(t.dataset.id)
            }, this), p && this._getSizeOfVisibleMedia()
        },
        applyCurrentValues: function(t) {
            var e = this._downloads,
                n = a.a.get("prefer_last_quality") && a.a.get("preferred_quality:" + t),
                i = o.Utils.queryAll(".j-media-scope", this._widget);
            return i.forEach(function(i) {
                var r = o.Utils.queryAll(".j-quality-download", i),
                    l = r.map(function(t) {
                        return t.dataset.id
                    }),
                    a = s.a.chooseBestDownload(e.getMediaGroup(l), t, n),
                    c = o.Utils.query(".j-quality-selector", i);
                if (c) {
                    var u = a.extQuality();
                    c.setAttribute("data-selected-value", u);
                    var d = c.querySelector('[data-quality-value="' + u + '"]');
                    d && d.classList.add("selected")
                }
                this._applyCurrentValues(i, c)
            }, this), i
        },
        _getSizeOfVisibleMedia: function() {
            for (var t = o.Utils.query(".downloads-list", this._widget), e = t.scrollTop, n = t.offsetHeight, i = o.Utils.queryAll(".j-quality-download:not([hidden])", t), r = 0, l = i.length; r < l; ++r) {
                var a = i[r];
                if (a.offsetTop > e + n + 10) break;
                this._sizeQueue.push(a.dataset.id)
            }
        },
        getMetricsParams: function(t, e) {
            var n = t instanceof Node ? t.dataset.id : t,
                i = this._downloads,
                o = i.getMedia(n),
                r = e || {},
                l = i.getAllMediaFormats(n),
                a = [];
            for (var c in l) a.push(c + ":" + l[c].join("|"));
            var u = o.ext ? o.ext : "unknown";
            return r.size = o.quality ? s.a.getSizeByQuality(o.quality) : 0, r.ext = u, r.same_size_exts = i.getSameQualityMediaFormats(n).join("|"), r.same_ext_sizes = i.getSameFormatMediaQuality(n).join("|"), r.total = a.join(","), r
        },
        download: function(t) {
            if (!t.classList.contains("j-disabled")) return t.classList.add("j-disabled"), t.classList.add("btn-progress"), this._downloads.download(t.dataset.id).then(function() {
                t.classList.remove("btn-progress"), t.classList.add("btn-started")
            }).catch(function(e) {
                t.classList.remove("btn-progress"), t.classList.remove("j-disabled")
            })
        }
    }, e.a = i
}, , function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        return (0, u.default)(function(e, n) {
            var i;
            try {
                i = t.apply(this, e)
            } catch (t) {
                return n(t)
            }(0, s.default)(i) && "function" == typeof i.then ? i.then(function(t) {
                r(n, null, t)
            }, function(t) {
                r(n, t.message ? t : new Error(t))
            }) : n(null, i)
        })
    }

    function r(t, e, n) {
        try {
            t(e, n)
        } catch (t) {
            (0, f.default)(l, t)
        }
    }

    function l(t) {
        throw t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var a = n(45),
        s = i(a),
        c = n(33),
        u = i(c),
        d = n(18),
        f = i(d);
    t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i() {
        this.head = this.tail = null, this.length = 0
    }

    function o(t, e) {
        t.length = 1, t.head = t.tail = e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i, i.prototype.removeLink = function(t) {
        return t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev, t.prev = t.next = null, this.length -= 1, t
    }, i.prototype.empty = function() {
        for (; this.head;) this.shift();
        return this
    }, i.prototype.insertAfter = function(t, e) {
        e.prev = t, e.next = t.next, t.next ? t.next.prev = e : this.tail = e, t.next = e, this.length += 1
    }, i.prototype.insertBefore = function(t, e) {
        e.prev = t.prev, e.next = t, t.prev ? t.prev.next = e : this.head = e, t.prev = e, this.length += 1
    }, i.prototype.unshift = function(t) {
        this.head ? this.insertBefore(this.head, t) : o(this, t)
    }, i.prototype.push = function(t) {
        this.tail ? this.insertAfter(this.tail, t) : o(this, t)
    }, i.prototype.shift = function() {
        return this.head && this.removeLink(this.head)
    }, i.prototype.pop = function() {
        return this.tail && this.removeLink(this.tail)
    }, i.prototype.toArray = function() {
        for (var t = Array(this.length), e = this.head, n = 0; n < this.length; n++) t[n] = e.data, e = e.next;
        return t
    }, i.prototype.remove = function(t) {
        for (var e = this.head; e;) {
            var n = e.next;
            t(e) && this.removeLink(e), e = n
        }
        return this
    }, t.exports = e.default
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return function() {
            var e = (0, o.default)(arguments),
                n = e.pop();
            t.call(this, e, n)
        }
    };
    var i = n(19),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
    t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i, t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e, n) {
        function i(t, e, n) {
            if (null != n && "function" != typeof n) throw new Error("task callback must be a function");
            if (p.started = !0, (0, s.default)(t) || (t = [t]), 0 === t.length && p.idle()) return (0, h.default)(function() {
                p.drain()
            });
            for (var i = 0, o = t.length; i < o; i++) {
                var r = {
                    data: t[i],
                    callback: n || u.default
                };
                e ? p._tasks.unshift(r) : p._tasks.push(r)
            }(0, h.default)(p.process)
        }

        function o(t) {
            return function(e) {
                a -= 1;
                for (var n = 0, i = t.length; n < i; n++) {
                    var o = t[n],
                        r = (0, l.default)(c, o, 0);
                    r >= 0 && c.splice(r, 1), o.callback.apply(o, arguments), null != e && p.error(e, o.data)
                }
                a <= p.concurrency - p.buffer && p.unsaturated(), p.idle() && p.drain(), p.process()
            }
        }
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var r = (0, m.default)(t),
            a = 0,
            c = [],
            d = !1,
            p = {
                _tasks: new v.default,
                concurrency: e,
                payload: n,
                saturated: u.default,
                unsaturated: u.default,
                buffer: e / 4,
                empty: u.default,
                drain: u.default,
                error: u.default,
                started: !1,
                paused: !1,
                push: function(t, e) {
                    i(t, !1, e)
                },
                kill: function() {
                    p.drain = u.default, p._tasks.empty()
                },
                unshift: function(t, e) {
                    i(t, !0, e)
                },
                remove: function(t) {
                    p._tasks.remove(t)
                },
                process: function() {
                    if (!d) {
                        for (d = !0; !p.paused && a < p.concurrency && p._tasks.length;) {
                            var t = [],
                                e = [],
                                n = p._tasks.length;
                            p.payload && (n = Math.min(n, p.payload));
                            for (var i = 0; i < n; i++) {
                                var l = p._tasks.shift();
                                t.push(l), c.push(l), e.push(l.data)
                            }
                            a += 1, 0 === p._tasks.length && p.empty(), a === p.concurrency && p.saturated();
                            var s = (0, f.default)(o(t));
                            r(e, s)
                        }
                        d = !1
                    }
                },
                length: function() {
                    return p._tasks.length
                },
                running: function() {
                    return a
                },
                workersList: function() {
                    return c
                },
                idle: function() {
                    return p._tasks.length + a === 0
                },
                pause: function() {
                    p.paused = !0
                },
                resume: function() {
                    !1 !== p.paused && (p.paused = !1, (0, h.default)(p.process))
                }
            };
        return p
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = o;
    var r = n(41),
        l = i(r),
        a = n(44),
        s = i(a),
        c = n(46),
        u = i(c),
        d = n(34),
        f = i(d),
        p = n(18),
        h = i(p),
        _ = n(32),
        v = i(_),
        g = n(20),
        m = i(g);
    t.exports = e.default
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        var n = (0, a.default)(t);
        return (0, r.default)(function(t, e) {
            n(t[0], e)
        }, e, 1)
    };
    var o = n(35),
        r = i(o),
        l = n(20),
        a = i(l);
    t.exports = e.default
}, , , , function(t, e) {
    function n(t, e, n, i) {
        for (var o = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o;)
            if (e(t[r], r, t)) return r;
        return -1
    }
    t.exports = n
}, function(t, e, n) {
    function i(t, e, n) {
        return e === e ? l(t, e, n) : o(t, r, n)
    }
    var o = n(40),
        r = n(42),
        l = n(43);
    t.exports = i
}, function(t, e) {
    function n(t) {
        return t !== t
    }
    t.exports = n
}, function(t, e) {
    function n(t, e, n) {
        for (var i = n - 1, o = t.length; ++i < o;)
            if (t[i] === e) return i;
        return -1
    }
    t.exports = n
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e) {
    function n(t) {
        var e = void 0 === t ? "undefined" : i(t);
        return null != t && ("object" == e || "function" == e)
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = n
}, function(t, e) {
    function n() {}
    t.exports = n
}, , function(t, e, n) {
    "use strict";
    var i = function(t) {
        this.element = t, this.events = {}
    };
    i.prototype.bind = function(t, e) {
        void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
    }, i.prototype.unbind = function(t, e) {
        var n = void 0 !== e;
        this.events[t] = this.events[t].filter(function(i) {
            return !(!n || i === e) || (this.element.removeEventListener(t, i, !1), !1)
        }, this)
    }, i.prototype.unbindAll = function() {
        for (var t in this.events) this.unbind(t)
    };
    var o = function() {
        this.eventElements = []
    };
    o.prototype.eventElement = function(t) {
        var e = this.eventElements.filter(function(e) {
            return e.element === t
        })[0];
        return void 0 === e && (e = new i(t), this.eventElements.push(e)), e
    }, o.prototype.bind = function(t, e, n) {
        this.eventElement(t).bind(e, n)
    }, o.prototype.unbind = function(t, e, n) {
        this.eventElement(t).unbind(e, n)
    }, o.prototype.unbindAll = function() {
        for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
    }, o.prototype.once = function(t, e, n) {
        var i = this.eventElement(t),
            o = function t(o) {
                i.unbind(e, t), n(o)
            };
        i.bind(e, o)
    }, t.exports = o
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }()
}, function(t, e, n) {
    "use strict";
    var i = n(52),
        o = n(60),
        r = n(61);
    t.exports = {
        initialize: o,
        update: r,
        destroy: i
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(6),
        o = n(8),
        r = n(2);
    t.exports = function(t) {
        var e = r.get(t);
        e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), i.removePsClasses(t), r.remove(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n(t) {
            return t.getBoundingClientRect()
        }
        var i = function(t) {
            t.stopPropagation()
        };
        e.event.bind(e.scrollbarY, "click", i), e.event.bind(e.scrollbarYRail, "click", function(i) {
            var o = i.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                a = o > e.scrollbarYTop ? 1 : -1;
            l(t, "top", t.scrollTop + a * e.containerHeight), r(t), i.stopPropagation()
        }), e.event.bind(e.scrollbarX, "click", i), e.event.bind(e.scrollbarXRail, "click", function(i) {
            var o = i.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                a = o > e.scrollbarXLeft ? 1 : -1;
            l(t, "left", t.scrollLeft + a * e.containerWidth), r(t), i.stopPropagation()
        })
    }
    var o = n(2),
        r = n(4),
        l = n(7);
    t.exports = function(t) {
        i(t, o.get(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n(n) {
            var o = i + n * e.railXRatio,
                l = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
            e.scrollbarXLeft = o < 0 ? 0 : o > l ? l : o;
            var a = r.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
            c(t, "left", a)
        }
        var i = null,
            o = null,
            a = function(e) {
                n(e.pageX - o), s(t), e.stopPropagation(), e.preventDefault()
            },
            u = function() {
                r.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a)
            };
        e.event.bind(e.scrollbarX, "mousedown", function(n) {
            o = n.pageX, i = r.toInt(l.css(e.scrollbarX, "left")) * e.railXRatio, r.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
    }

    function o(t, e) {
        function n(n) {
            var o = i + n * e.railYRatio,
                l = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
            e.scrollbarYTop = o < 0 ? 0 : o > l ? l : o;
            var a = r.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
            c(t, "top", a)
        }
        var i = null,
            o = null,
            a = function(e) {
                n(e.pageY - o), s(t), e.stopPropagation(), e.preventDefault()
            },
            u = function() {
                r.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a)
            };
        e.event.bind(e.scrollbarY, "mousedown", function(n) {
            o = n.pageY, i = r.toInt(l.css(e.scrollbarY, "top")) * e.railYRatio, r.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
        })
    }
    var r = n(6),
        l = n(8),
        a = n(2),
        s = n(4),
        c = n(7);
    t.exports = function(t) {
        var e = a.get(t);
        i(t, e), o(t, e)
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n(n, i) {
            var o = t.scrollTop;
            if (0 === n) {
                if (!e.scrollbarYActive) return !1;
                if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
            }
            var r = t.scrollLeft;
            if (0 === i) {
                if (!e.scrollbarXActive) return !1;
                if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
            }
            return !0
        }
        var i = !1;
        e.event.bind(t, "mouseenter", function() {
            i = !0
        }), e.event.bind(t, "mouseleave", function() {
            i = !1
        });
        var l = !1;
        e.event.bind(e.ownerDocument, "keydown", function(c) {
            if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                var u = r.matches(e.scrollbarX, ":focus") || r.matches(e.scrollbarY, ":focus");
                if (i || u) {
                    var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (d) {
                        if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                        else
                            for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                        if (o.isEditable(d)) return
                    }
                    var f = 0,
                        p = 0;
                    switch (c.which) {
                        case 37:
                            f = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                            break;
                        case 38:
                            p = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                            break;
                        case 39:
                            f = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                            break;
                        case 40:
                            p = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                            break;
                        case 33:
                            p = 90;
                            break;
                        case 32:
                            p = c.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            p = -90;
                            break;
                        case 35:
                            p = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                            break;
                        case 36:
                            p = c.ctrlKey ? t.scrollTop : e.containerHeight;
                            break;
                        default:
                            return
                    }
                    s(t, "top", t.scrollTop - p), s(t, "left", t.scrollLeft + f), a(t), l = n(f, p), l && c.preventDefault()
                }
            }
        })
    }
    var o = n(6),
        r = n(8),
        l = n(2),
        a = n(4),
        s = n(7);
    t.exports = function(t) {
        i(t, l.get(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n(n, i) {
            var o = t.scrollTop;
            if (0 === n) {
                if (!e.scrollbarYActive) return !1;
                if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
            }
            var r = t.scrollLeft;
            if (0 === i) {
                if (!e.scrollbarXActive) return !1;
                if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
            }
            return !0
        }

        function i(t) {
            var e = t.deltaX,
                n = -1 * t.deltaY;
            return void 0 !== e && void 0 !== n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
        }

        function o(e, n) {
            var i = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
            if (i) {
                var o = window.getComputedStyle(i);
                if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
                var r = i.scrollHeight - i.clientHeight;
                if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && n < 0)) return !0;
                var l = i.scrollLeft - i.clientWidth;
                if (l > 0 && !(0 === i.scrollLeft && e < 0 || i.scrollLeft === l && e > 0)) return !0
            }
            return !1
        }

        function a(a) {
            var c = i(a),
                u = c[0],
                d = c[1];
            o(u, d) || (s = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), s = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), r(t), (s = s || n(u, d)) && (a.stopPropagation(), a.preventDefault()))
        }
        var s = !1;
        void 0 !== window.onwheel ? e.event.bind(t, "wheel", a) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", a)
    }
    var o = n(2),
        r = n(4),
        l = n(7);
    t.exports = function(t) {
        i(t, o.get(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        e.event.bind(t, "scroll", function() {
            r(t)
        })
    }
    var o = n(2),
        r = n(4);
    t.exports = function(t) {
        i(t, o.get(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n() {
            var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
            return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
        }

        function i() {
            c || (c = setInterval(function() {
                if (!r.get(t)) return void clearInterval(c);
                a(t, "top", t.scrollTop + u.top), a(t, "left", t.scrollLeft + u.left), l(t)
            }, 50))
        }

        function s() {
            c && (clearInterval(c), c = null), o.stopScrolling(t)
        }
        var c = null,
            u = {
                top: 0,
                left: 0
            },
            d = !1;
        e.event.bind(e.ownerDocument, "selectionchange", function() {
            t.contains(n()) ? d = !0 : (d = !1, s())
        }), e.event.bind(window, "mouseup", function() {
            d && (d = !1, s())
        }), e.event.bind(window, "keyup", function() {
            d && (d = !1, s())
        }), e.event.bind(window, "mousemove", function(e) {
            if (d) {
                var n = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    r = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                n.x < r.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > r.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < r.top + 3 ? (u.top = r.top + 3 - n.y < 5 ? -5 : -20, o.startScrolling(t, "y")) : n.y > r.bottom - 3 ? (u.top = n.y - r.bottom + 3 < 5 ? 5 : 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? s() : i()
            }
        })
    }
    var o = n(6),
        r = n(2),
        l = n(4),
        a = n(7);
    t.exports = function(t) {
        i(t, r.get(t))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e, n, i) {
        function o(n, i) {
            var o = t.scrollTop,
                r = t.scrollLeft,
                l = Math.abs(n),
                a = Math.abs(i);
            if (a > l) {
                if (i < 0 && o === e.contentHeight - e.containerHeight || i > 0 && 0 === o) return !e.settings.swipePropagation
            } else if (l > a && (n < 0 && r === e.contentWidth - e.containerWidth || n > 0 && 0 === r)) return !e.settings.swipePropagation;
            return !0
        }

        function s(e, n) {
            a(t, "top", t.scrollTop - n), a(t, "left", t.scrollLeft - e), l(t)
        }

        function c() {
            b = !0
        }

        function u() {
            b = !1
        }

        function d(t) {
            return t.targetTouches ? t.targetTouches[0] : t
        }

        function f(t) {
            return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
        }

        function p(t) {
            if (f(t)) {
                T = !0;
                var e = d(t);
                v.pageX = e.pageX, v.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
            }
        }

        function h(t) {
            if (!T && e.settings.swipePropagation && p(t), !b && T && f(t)) {
                var n = d(t),
                    i = {
                        pageX: n.pageX,
                        pageY: n.pageY
                    },
                    r = i.pageX - v.pageX,
                    l = i.pageY - v.pageY;
                s(r, l), v = i;
                var a = (new Date).getTime(),
                    c = a - g;
                c > 0 && (m.x = r / c, m.y = l / c, g = a), o(r, l) && (t.stopPropagation(), t.preventDefault())
            }
        }

        function _() {
            !b && T && (T = !1, e.settings.swipeEasing && (clearInterval(y), y = setInterval(function() {
                return r.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (s(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
            }, 10)))
        }
        var v = {},
            g = 0,
            m = {},
            y = null,
            b = !1,
            T = !1;
        n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", p), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", _)) : i && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", p), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", _)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", p), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", _)))
    }
    var o = n(6),
        r = n(2),
        l = n(4),
        a = n(7);
    t.exports = function(t) {
        if (o.env.supportsTouch || o.env.supportsIePointer) {
            i(t, r.get(t), o.env.supportsTouch, o.env.supportsIePointer)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        o = n(2),
        r = n(4),
        l = {
            "click-rail": n(53),
            "drag-scrollbar": n(54),
            keyboard: n(55),
            wheel: n(56),
            touch: n(59),
            selection: n(58)
        },
        a = n(57);
    t.exports = function(t, e) {
        t.classList.add("ps");
        var n = o.add(t, "object" === (void 0 === e ? "undefined" : i(e)) ? e : {});
        t.classList.add("ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(e) {
            l[e](t)
        }), a(t), r(t)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(6),
        o = n(8),
        r = n(2),
        l = n(4),
        a = n(7);
    t.exports = function(t) {
        var e = r.get(t);
        e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(o.css(e.scrollbarXRail, "marginLeft")) + i.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(o.css(e.scrollbarYRail, "marginTop")) + i.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), l(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
    }
}, , , , , , , , function(t, e, n) {
    "use strict";

    function i(t, e) {
        function n() {
            for (var t = e.scrollTop, n = -1; n < o - 1 && i[n + 1].top <= t;) n++;
            return -1 !== n && (r !== n && (-1 !== r && (i[r].node.style.position = "static", i[r].placeholder.hidden = !0), i[n].node.style.position = "fixed", i[n].placeholder.hidden = !1, r = n), n !== o - 1 && t + i[n].height > i[n + 1].top ? (i[n].node.style.top = 0 - (t + i[n].height - i[n + 1].top) + "px", i[n].node.classList.contains("pulled") || i[n].node.classList.add("pulled")) : (i[n].node.style.top = "0px", i[n].node.classList.contains("pulled") && i[n].node.classList.remove("pulled")), !1)
        }
        var i = [],
            o = t.length,
            r = -1;
        o < 1 || (e.style.position = "relative", i = t.map(function(t) {
            var e = document.createElement("div");
            return e.style.height = t.offsetHeight + "px", e.hidden = !0, t.parentNode.insertBefore(e, t), {
                node: t,
                top: t.offsetTop,
                height: t.offsetHeight,
                placeholder: e
            }
        }), e.addEventListener("scroll", n, !1))
    }
    e.a = i
}, , , , , , , , , , , , , , , , function(t, e, n) {
    function i(t, e, n, i, l) {
        function a() {
            d = !0
        }

        function s(i) {
            if (d) return l(new Error("Scroll cancelled"), e[t]);
            var o = +new Date,
                a = Math.min(1, (o - c) / p),
                h = f(a);
            e[t] = h * (n - u) + u, r(a < 1 ? s : function() {
                l(null, e[t])
            })
        }
        var c = +new Date,
            u = e[t],
            d = !1,
            f = o,
            p = 350;
        return "function" == typeof i ? l = i : (i = i || {}, f = i.ease || f, p = i.duration || p, l = l || function() {}), u === n ? l(new Error("Element already at target scroll position"), e[t]) : (r(s), a)
    }

    function o(t) {
        return .5 * (1 - Math.cos(Math.PI * t))
    }
    var r = n(128);
    t.exports = {
        top: function(t, e, n, o) {
            return i("scrollTop", t, e, n, o)
        },
        left: function(t, e, n, o) {
            return i("scrollLeft", t, e, n, o)
        }
    }
}, , , , , , , , , , , , , , , , function(t, e) {}, , , , , , , , , , , , , , , , , , , function(t, e, n) {
    (function(e) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n
    }).call(e, n(11))
}, , , , , , , , function(t, e, n) {
    function i(t) {
        var e = +new Date,
            n = Math.max(0, 16 - (e - l)),
            i = setTimeout(t, n);
        return l = e, i
    }
    var o = n(120),
        r = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || i,
        l = +new Date,
        a = o.cancelAnimationFrame || o.webkitCancelAnimationFrame || o.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (r = r.bind(o), a = a.bind(o)), e = t.exports = r, e.cancel = a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function i() {
        setTimeout(function() {
            window && window.close()
        }, 500)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(0),
        r = n(1),
        l = n(3),
        a = n(29),
        s = n(5),
        c = n(13),
        u = n.n(c),
        d = n(28),
        f = (n.n(d), n(85)),
        p = n.n(f);
    n(101);
    var h = function() {
            return new Promise(function(t) {
                chrome.tabs.query({
                    windowId: chrome.windows.WINDOW_ID_CURRENT,
                    active: !0
                }, function(e) {
                    var n = e && e[0] && e[0].id || -1;
                    t(n)
                })
            })
        }(),
        _ = function() {
            var t = this,
                e = document.body;
            this._oneClickDownload = !1, this._dl = new a.a(e), s.a.load().then(function() {
                return t._init(e)
            })
        };
    _.prototype = {
        constructor: _,
        _init: function(t) {
            var e = this;
            this._widget = t, this._oneClickBlock = o.Utils.query("#one-click-block"), this._template = o.Utils.query("#list-template").textContent, this._welcome = o.Utils.query("#welcome"), this._mediaListHeight = null, t.addEventListener("click", function(t) {
                if (!e._onClick(t)) return t.stopPropagation(), !0
            }, !1), document.addEventListener("change", this._onSelectChange.bind(this), !1), this._oneClickDownload = !!s.a.get("one_click"), this._drawPopupContent()
        },
        _drawPopupContent: function() {
            o.Utils.query("#downloads").hidden = !1, this._welcome.hidden = !0
        },
        _showWelcomeScreen: function() {
            var t = o.Utils.query("#welcome-template").textContent,
                e = u.a.render(t, {
                    i18n_welcome_title: n.i(o.i18n)("popup_welcome_title"),
                    i18n_welcome_text: n.i(o.i18n)("popup_welcome_text"),
                    i18n_welcome_button: n.i(o.i18n)("popup_welcome_button")
                });
            this._welcome.innerHTML = e
        },
        _showOneClickDownloadScreen: function(t) {
            var e = o.Utils.query("#one-click-template").textContent,
                i = u.a.render(e, {
                    media: t,
                    i18n_starting_download: n.i(o.i18n)("popup_starting_download"),
                    i18n_download_failed: n.i(o.i18n)("popup_download_failed")
                });
            this._oneClickBlock.innerHTML = i, o.Utils.query("#downloads").hidden = !0, this._oneClickBlock.hidden = !1, l.a.log("PageShown", l.a.PAGE_ONE_CLICK_DOWNLOAD)
        },
        _onClick: function(t) {
            var e = this,
                n = this,
                r = t.target;
            if ("quality-level-selection" !== r.id) {
                o.Utils.queryAll(".j-quality-selector:not([hidden])", this._widget).forEach(function(t) {
                    o.Utils.isDescendant(t, r) || o.Utils.isDescendant(t.parentNode, r) || (t.setAttribute("hidden", !0), e._tunePopupHeight(t, !1))
                })
            }
            switch (r.id) {
                case "close-popup":
                    return void window.close();
                case "welcome-button":
                    return n._drawPopupContent(), l.a.log("ButtonClicked", l.a.BUTTON_TRY_IT_NOW), void setTimeout(function() {
                        document.body.offsetHeight
                    }, 0)
            }
            switch (r.tagName) {
                case "A":
                case "SPAN":
                    var a = r;
                    if ("SPAN" === r.tagName.toUpperCase() && (a = r.parentNode), !a.classList.contains("j-quality-download") && a.classList.contains("select-wrapper")) {
                        var c = o.Utils.query(".j-quality-selector", a);
                        if (c) {
                            c.classList.contains("init") || (c.classList.add("popup-mode"), c.classList.add("init"), d.initialize(c, {
                                wheelPropagation: !0
                            }));
                            c.hasAttribute("hidden") ? (c.removeAttribute("hidden"), this._tunePopupHeight(c, !0)) : (c.setAttribute("hidden", "hidden"), this._tunePopupHeight(c, !1))
                        }
                        return !0
                    }
                    return !a.classList.contains("j-quality-download") || void n._download(a);
                case "INPUT":
                    if (!r.classList.contains("j-one-click")) return !0;
                    var u = !!r.checked;
                    return s.a.set("one_click", u), void l.a.log("CheckBoxClicked", l.a.CHECK_BOX_ENABLE_ONE_CLICK + u);
                case "BUTTON":
                    if (r.matches(".play-now-btn")) {
                        var f = parseInt(t.target.dataset.downloadId);
                        chrome.runtime.sendMessage({
                            method: "play",
                            requestType: "downloads",
                            params: f
                        }), l.a.log("PlayNow", l.a.PLAY_NOW_WIDGET_CLICKED), i()
                    }
                    break;
                case "DIV":
                    r.matches(".quality-label.j-quality") && this._onSelectChange(event)
            }
            return !0
        },
        _onSelectChange: function(t) {
            var e = t.target;
            if (!e.matches(".j-one-click")) {
                if ("quality-level-selection" === e.id) return s.a.set("preferred_quality_level", e.value), void l.a.log("OneClickQualityChanged", r.a.getOneClickQualityIndex(e.value));
                var n = e.getAttribute("data-quality-value").trim(),
                    i = n.split("/")[1];
                if (s.a.get("prefer_last_quality") && 1 === o.Utils.queryAll(".j-media-scope", this._widget).length) {
                    var a = r.a.getQualityLevelByQualityType(i);
                    s.a.set("preferred_quality_level", a), s.a.set("preferred_quality:" + a, n)
                }
                var c = o.Utils.findParent(e, "j-media-scope"),
                    u = o.Utils.findParent(e, "j-quality-selector");
                return u.setAttribute("data-selected-value", n), this._markSelected(e, u), this._dl._applyCurrentValues(c, u), l.a.log("VideoQualityChanged", r.a.getVideoQualityIndex(i)), u.setAttribute("hidden", !0), this._tunePopupHeight(u, !1), !1
            }
        },
        _markSelected: function(t, e) {
            o.Utils.queryAll(".quality-label.selected", e).forEach(function(t) {
                return t.classList.remove("selected")
            }), t.classList.add("selected")
        },
        _tunePopupHeight: function(t) {
            if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) {
                var e = o.Utils.dom.getOffset(t),
                    n = window.innerHeight,
                    i = window.scrollY,
                    r = e.height + e.top;
                r >= n + i && p.a.top(document.body, r - n + 20, {
                    duration: 300
                })
            }
        },
        _render: function() {
            var t = s.a.get("preferred_quality_level");
            this._dl.render(this._template, {
                is_single: this._oneClickDownload,
                quality_levels: r.a.QUALITY_LEVELS.map(function(e) {
                    return {
                        i18n_ql_title: n.i(o.i18n)("ql_" + e.toLowerCase()),
                        name: e,
                        is_checked: e === t
                    }
                }),
                i18n_download: n.i(o.i18n)("popup_download"),
                i18n_wait: n.i(o.i18n)("popup_download_starting"),
                i18n_one_click: n.i(o.i18n)("popup_one_click"),
                i18n_preferred_quality: n.i(o.i18n)("popup_preferred_quality"),
                i18n_no_media_found: n.i(o.i18n)("popup_no_media_found"),
                i18n_download_failed: n.i(o.i18n)("popup_download_failed"),
                i18n_sound_only: n.i(o.i18n)("popup_sound_only"),
                i18n_play_now: n.i(o.i18n)("play_now_play_now"),
                has_pip: !1
            }, t), this._downloadsNode = document.querySelector(".downloads-list")
        },
        _showDownloadError: function(t) {
            var e = this,
                n = o.Utils.query("#error-message");
            n.classList.add("visible"), e._errorTimeout && clearTimeout(e._errorTimeout), e._errorTimeout = setTimeout(function() {
                n.classList.remove("visible")
            }, 5e3), chrome.extension.getBackgroundPage().console.error('Download has failed. Reason: "%s"', t.message)
        },
        _download: function(t) {
            var e = this,
                n = this._dl.download(t);
            if (n) {
                o.Utils.queryAll(".j-media-scope", this._widget).length, n.catch(function(t) {
                    e._showDownloadError(t)
                }), l.a.log("Download", l.a.DOWNLOAD_BUTTON);
                var i = this._dl.getMetricsParams(t, {
                    autoselect: 0
                });
                l.a.serverLog("Download", i)
            }
        },
        setDownloads: function(t) {
            var e = this;
            e._dl.setDownloads(t);
            var n = t.getMediaCountByTitle();
            if (e._oneClickDownload && 1 === n) {
                var a = s.a.get("preferred_quality_level"),
                    c = s.a.get("prefer_last_quality") && s.a.get("preferred_quality:" + a),
                    u = r.a.chooseBestDownload(t.data, a, c);
                e._showOneClickDownloadScreen(u), t.download(u.id).then(function() {
                    i()
                }).catch(function(t) {
                    e._render(), o.Utils.query("#downloads").hidden = !1, e._oneClickBlock.hidden = !0, e._showDownloadError(t)
                }), l.a.log("Download", l.a.DOWNLOAD_AUTO);
                var d = e._dl.getMetricsParams(u.id, {
                    autoselect: 1
                });
                l.a.serverLog("Download", d)
            } else e._render(), l.a.log("PageShown", 0 === n ? l.a.PAGE_NO_MEDIA_FOUND : l.a.PAGE_DOWNLOADS_LIST)
        }
    }, window.onload = function() {
        var t = chrome.extension.getBackgroundPage();
        window.options = t.options, window.cache = t.cache;
        var e = new _;
        h.then(function(n) {
            t.db.getMediaForTab(n).then(function(t) {
                e.setDownloads(t)
            })
        }), chrome.runtime.getPlatformInfo(function(t) {
            "mac" === t.os && setTimeout(function() {
                document.body.style.width = document.body.clientWidth + 1 + "px"
            }, 250)
        })
    }
}], [171]);