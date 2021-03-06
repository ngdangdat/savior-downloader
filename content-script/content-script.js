webpackJsonp([0], [, function(t, e, i) {
    "use strict";
    var n = i(10),
        r = function() {};
    r.QL_HIGH = "High", r.QL_MEDIUM = "Medium", r.QL_LOW = "Low", r.QL_VIDEO_ULTRAHD = "Ultra HD", r.QL_VIDEO_FULLHD = "Full HD", r.QL_VIDEO_HD = "HD", r.QL_VIDEO_STANDARD = "Standard", r.QL_VIDEO_MEDIUM = "Medium", r.QL_VIDEO_SMALL = "Small", r.QL_VIDEO_MOBILE = "Mobile";
    var o = {};
    o[r.QL_VIDEO_ULTRAHD] = {
        quality: r.QL_HIGH,
        qualityIndex: 8,
        size: 3072,
        videoTitle: "Super HD"
    }, o[r.QL_VIDEO_ULTRAHD] = {
        quality: r.QL_HIGH,
        qualityIndex: 7,
        size: 2160,
        videoTitle: "Ultra HD"
    }, o[r.QL_VIDEO_ULTRAHD] = {
        quality: r.QL_HIGH,
        qualityIndex: 6,
        size: 1440,
        videoTitle: "Quad HD"
    }, o[r.QL_VIDEO_FULLHD] = {
        quality: r.QL_HIGH,
        qualityIndex: 5,
        size: 1080,
        videoTitle: "Full HD",
        audioTitle: "High",
        vimeoQuality: "1080p",
        zingTag: ["1080p", "label1080"],
        dailymotionQuality: "hd1080",
        clipvnQuality: "5"
    }, o[r.QL_VIDEO_HD] = {
        quality: r.QL_HIGH,
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
    }, o[r.QL_VIDEO_STANDARD] = {
        quality: r.QL_MEDIUM,
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
    }, o[r.QL_VIDEO_MEDIUM] = {
        quality: r.QL_MEDIUM,
        qualityIndex: 2,
        size: 360,
        videoTitle: "Medium",
        audioTitle: "Medium",
        vimeoQuality: "360p",
        dailymotionQuality: "sd",
        zingTag: ["source", "360p"],
        JWQuality: "lowquality",
        clipvnQuality: "2"
    }, o[r.QL_VIDEO_SMALL] = {
        quality: r.QL_LOW,
        qualityIndex: 1,
        size: 240,
        videoTitle: "Small",
        audioTitle: "Low",
        dailymotionQuality: "ld",
        vimeoQuality: "270p",
        zingTag: ["f", "f240"],
        clipvnQuality: "1"
    }, o[r.QL_VIDEO_MOBILE] = {
        quality: r.QL_LOW,
        qualityIndex: 0,
        size: 144,
        videoTitle: "Mobile",
        audioTitle: "Low",
        vimeoQuality: "",
        clipvnQuality: "0"
    };
    var a = {};
    a[r.QL_HIGH] = o[r.QL_VIDEO_ULTRAHD].qualityIndex, a[r.QL_MEDIUM] = o[r.QL_VIDEO_STANDARD].qualityIndex, a[r.QL_LOW] = o[r.QL_VIDEO_SMALL].qualityIndex, r.prototype = {
        constructor: r,
        DEFAULT_QUALITY_LEVEL: r.QL_HIGH,
        QUALITY_LEVELS: [r.QL_HIGH, r.QL_MEDIUM, r.QL_LOW],
        VIDEO_QUALITY_LEVELS: [r.QL_VIDEO_ULTRAHD, r.QL_VIDEO_FULLHD, r.QL_VIDEO_HD, r.QL_VIDEO_STANDARD, r.QL_VIDEO_MEDIUM, r.QL_VIDEO_SMALL, r.QL_VIDEO_MOBILE],
        DEFAULT_QUALITY_TYPE: r.QL_VIDEO_STANDARD,
        QUALITY_TYPES: o,
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
            return (o[t] || {}).size || 0
        },
        _getVideoQuality: function(t, e, i) {
            for (var n in this.QUALITY_TYPES) {
                var r = this.QUALITY_TYPES[n][t];
                if (Array.isArray(r) || (r = [r]), -1 !== r.indexOf(e)) return this.QUALITY_TYPES[n]
            }
            return i ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _getTypeByQualityType: function(t) {
            for (var e in this.QUALITY_TYPES)
                if (t === e || t === this.QUALITY_TYPES[e].videoTitle || t === this.QUALITY_TYPES[e].audioTitle) return this.QUALITY_TYPES[e];
            return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
        },
        _calculateWeight: function(t, e) {
            var i = n.b[t.get("type")].extensions_weight,
                r = i.indexOf(t.get("ext")),
                o = this._getTypeByQualityType(t.get("quality")).qualityIndex;
            return r / i.length + Math.abs(e - o) / 7
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
            return void 0 !== o[t] ? o[t].qualityIndex : -1
        },
        chooseBestDownload: function(t, e, i) {
            var n = t.length;
            if (i)
                for (var r = i.split("/").filter(function(t) {
                        return t
                    }), o = r.length > 2, s = 0; s < n; ++s) {
                    var l = t[s],
                        c = l.extQuality();
                    if (c === i) return l;
                    if (o) {
                        var u = i.replace(/(.+)\/.+/, "$1"),
                            d = c.replace(/(.+)\/.+/, "$1");
                        if (d === u) return l
                    }
                }
            e = e || this.DEFAULT_QUALITY_LEVEL;
            var h = t.filter(function(t) {
                return "video" === t.type
            });
            h && h.length || (h = t), n = h.length;
            for (var f = a[e], p = 1e3, _ = -1, m = 0; m < n; ++m) {
                var v = h[m],
                    y = this._calculateWeight(v, f);
                p > y && (p = y, _ = m)
            }
            return h[_]
        }
    }, e.a = new r
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i() {
            t.classList.add("ps--focus")
        }

        function n() {
            t.classList.remove("ps--focus")
        }
        var r = this;
        r.settings = l();
        for (var o in e) r.settings[o] = e[o];
        r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === c.css(t, "direction"), r.isNegativeScroll = function() {
            var e = t.scrollLeft,
                i = null;
            return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i
        }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new u, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = c.appendTo(c.create("div", "ps__scrollbar-x-rail"), t), r.scrollbarX = c.appendTo(c.create("div", "ps__scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", i), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(c.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(c.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(c.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(c.css(r.scrollbarXRail, "borderRightWidth")), c.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(c.css(r.scrollbarXRail, "marginLeft")) + s.toInt(c.css(r.scrollbarXRail, "marginRight")), c.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = c.appendTo(c.create("div", "ps__scrollbar-y-rail"), t), r.scrollbarY = c.appendTo(c.create("div", "ps__scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", i), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(c.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(c.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(c.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(c.css(r.scrollbarYRail, "borderBottomWidth")), c.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(c.css(r.scrollbarYRail, "marginTop")) + s.toInt(c.css(r.scrollbarYRail, "marginBottom")), c.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
    }

    function r(t) {
        return t.getAttribute("data-ps-id")
    }

    function o(t, e) {
        t.setAttribute("data-ps-id", e)
    }

    function a(t) {
        t.removeAttribute("data-ps-id")
    }
    var s = i(6),
        l = i(51),
        c = i(8),
        u = i(48),
        d = i(49),
        h = {};
    e.add = function(t, e) {
        var i = d();
        return o(t, i), h[i] = new n(t, e), h[i]
    }, e.remove = function(t) {
        delete h[r(t)], a(t)
    }, e.get = function(t) {
        return h[r(t)]
    }
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = function() {};
    r.SERVER_LOG_URL = "https://coccoc.com/s_log", r.SOURCE_POPUP_PAGE = 0, r.SOURCE_OPTIONS_PAGE = 10, r.SOURCE_CONTENT_SCRIPT = 20, r.SOURCE_BACKGROUND_PAGE = 30, r.prototype = {
        LEGACY_METRICS_NAME_MAP: {
            ButtonClicked: "TryItNowButtonClicked",
            CheckBoxClicked: "OneClickCheckbox"
        },
        get source() {
            if (!chrome.extension.getBackgroundPage) return r.SOURCE_CONTENT_SCRIPT;
            switch (document.location.pathname) {
                case "/popup.html":
                    return r.SOURCE_POPUP_PAGE;
                case "/options.html":
                    return r.SOURCE_OPTIONS_PAGE;
                case "/background.html":
                    return r.SOURCE_BACKGROUND_PAGE;
                default:
                    return
            }
        },
        _getFullName: function(t) {
            return "Savior." + (this.LEGACY_METRICS_NAME_MAP[t] || t)
        },
        _getTotalValue: function(t, e, i) {
            return 0 === t.indexOf("Refr") || i || "PageShown" === t || "number" != typeof e ? e : e + this.source
        },
        _doLog: function(t, e, i) {
            var n = this._getFullName(e);
            if (this.source === r.SOURCE_CONTENT_SCRIPT) chrome.runtime.sendMessage({
                requestType: "metrics",
                method: "log",
                params: {
                    name: e,
                    value: i
                }
            });
            else if (chrome.metricsPrivate) switch (t) {
                case "recordSmallCount":
                    chrome.metricsPrivate.recordValue({
                        metricName: n,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 100,
                        buckets: 100
                    }, i);
                    break;
                case "recordValue":
                    chrome.metricsPrivate.recordValue({
                        metricName: n,
                        type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                        min: 0,
                        max: 1e3,
                        buckets: 1002
                    }, i);
                    break;
                case "recordSerpData":
                case "recordClickData":
                    chrome.metricsPrivate[t](i)
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
        log: function(t, e, i) {
            var n = this._getMethodByName(t),
                r = this._getTotalValue(t, e, i);
            this._doLog(n, t, r)
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
            var i = new Image,
                o = [];
            e = Object.assign({
                action: t,
                source: this.source,
                version: n.SAVIOR_VERSION
            }, e), Object.keys(e).reduce(function(t, i) {
                return o.push(i + "=" + encodeURIComponent(e[i])), o
            }, o), i.src = r.SERVER_LOG_URL + "?" + o.join("&")
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
    }, e.a = new r
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function r(t, e) {
        var i = {
            width: e.railXWidth
        };
        e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, i);
        var n = {
            top: t.scrollTop,
            height: e.railYHeight
        };
        e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, n), a.css(e.scrollbarX, {
            left: e.scrollbarXLeft,
            width: e.scrollbarXWidth - e.railBorderXWidth
        }), a.css(e.scrollbarY, {
            top: e.scrollbarYTop,
            height: e.scrollbarYHeight - e.railBorderYWidth
        })
    }
    var o = i(6),
        a = i(8),
        s = i(2),
        l = i(7);
    t.exports = function(t) {
        var e = s.get(t);
        e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
        var i;
        t.contains(e.scrollbarXRail) || (i = a.queryChildren(t, ".ps__scrollbar-x-rail"), i.length > 0 && i.forEach(function(t) {
            a.remove(t)
        }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (i = a.queryChildren(t, ".ps__scrollbar-y-rail"), i.length > 0 && i.forEach(function(t) {
            a.remove(t)
        }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = n(e, o.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = o.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = n(e, o.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = o.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), r(t, e), e.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, l(t, "left", 0)), e.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, l(t, "top", 0))
    }
}, function(t, e, i) {
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
        var t = this;
        chrome.storage.onChanged.addListener(function(e, i) {
            if ("local" === i)
                for (var n in e) t._options[n] = e[n].newValue
        })
    };
    n.prototype = {
        load: function() {
            var t = this;
            return new Promise(function(e) {
                t._storage.get(null, function(i) {
                    t._options = i, e(i)
                })
            })
        },
        set: function(t, e) {
            var i = {};
            ("string" == typeof t || "number" == typeof t && void 0 !== e) && (i[t] = e, this._options[t] = e, this._storage.set(i))
        },
        get: function(t) {
            return t in this._options ? this._options[t] : this._default[t]
        }
    }, e.a = new n
}, function(t, e, i) {
    "use strict";

    function n(t) {
        var e, i = ["ps--in-scrolling"];
        return e = void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t], i.concat(e)
    }
    var r = i(8),
        o = e.toInt = function(t) {
            return parseInt(t, 10) || 0
        };
    e.isEditable = function(t) {
        return r.matches(t, "input,[contenteditable]") || r.matches(t, "select,[contenteditable]") || r.matches(t, "textarea,[contenteditable]") || r.matches(t, "button,[contenteditable]")
    }, e.removePsClasses = function(t) {
        for (var e = 0; e < t.classList.length; e++) {
            var i = t.classList[e];
            0 === i.indexOf("ps-") && t.classList.remove(i)
        }
    }, e.outerWidth = function(t) {
        return o(r.css(t, "width")) + o(r.css(t, "paddingLeft")) + o(r.css(t, "paddingRight")) + o(r.css(t, "borderLeftWidth")) + o(r.css(t, "borderRightWidth"))
    }, e.startScrolling = function(t, e) {
        for (var i = n(e), r = 0; r < i.length; r++) t.classList.add(i[r])
    }, e.stopScrolling = function(t, e) {
        for (var i = n(e), r = 0; r < i.length; r++) t.classList.remove(i[r])
    }, e.env = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
    }
}, function(t, e, i) {
    "use strict";
    var n = i(2),
        r = function(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !0), e
        };
    t.exports = function(t, e, i) {
        if (void 0 === t) throw "You must provide an element to the update-scroll function";
        if (void 0 === e) throw "You must provide an axis to the update-scroll function";
        if (void 0 === i) throw "You must provide a value to the update-scroll function";
        "top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(r("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(r("ps-x-reach-start")));
        var o = n.get(t);
        "top" === e && i >= o.contentHeight - o.containerHeight && (i = o.contentHeight - o.containerHeight, i - t.scrollTop <= 2 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(r("ps-y-reach-end"))), "left" === e && i >= o.contentWidth - o.containerWidth && (i = o.contentWidth - o.containerWidth, i - t.scrollLeft <= 2 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(r("ps-x-reach-end"))), void 0 === o.lastTop && (o.lastTop = t.scrollTop), void 0 === o.lastLeft && (o.lastLeft = t.scrollLeft), "top" === e && i < o.lastTop && t.dispatchEvent(r("ps-scroll-up")), "top" === e && i > o.lastTop && t.dispatchEvent(r("ps-scroll-down")), "left" === e && i < o.lastLeft && t.dispatchEvent(r("ps-scroll-left")), "left" === e && i > o.lastLeft && t.dispatchEvent(r("ps-scroll-right")), "top" === e && i !== o.lastTop && (t.scrollTop = o.lastTop = i, t.dispatchEvent(r("ps-scroll-y"))), "left" === e && i !== o.lastLeft && (t.scrollLeft = o.lastLeft = i, t.dispatchEvent(r("ps-scroll-x")))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        return window.getComputedStyle(t)[e]
    }

    function r(t, e, i) {
        return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t
    }

    function o(t, e) {
        for (var i in e) {
            var n = e[i];
            "number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
        }
        return t
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = {};
    s.create = function(t, e) {
        var i = document.createElement(t);
        return i.className = e, i
    }, s.appendTo = function(t, e) {
        return e.appendChild(t), t
    }, s.css = function(t, e, i) {
        return "object" === (void 0 === e ? "undefined" : a(e)) ? o(t, e) : void 0 === i ? n(t, e) : r(t, e, i)
    }, s.matches = function(t, e) {
        return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
    }, s.remove = function(t) {
        void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }, s.queryChildren = function(t, e) {
        return Array.prototype.filter.call(t.childNodes, function(t) {
            return s.matches(t, e)
        })
    }, t.exports = s
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return !!t && !l.a.check(t)
    }

    function r(t) {
        if (!n(t)) return null;
        if (-1 !== ["PARAM", "SOURCE"].indexOf(t.tagName) && (t = t.parentElement), "OBJECT" === t.tagName) {
            var e = t.querySelectorAll("embed");
            e && 1 === e.length && (t = e[0])
        }
        return t
    }

    function o(t) {
        var e = t.parse,
            i = t.request;
        if (!i) return e;
        var n = i.url || function(t) {
                return t
            },
            r = i.params || function() {},
            o = i.headers || function() {};
        return function(t) {
            var a = n(t);
            return a ? new Promise(function(n, s) {
                c.Utils.send(i.method, a, r(t), o(t)).then(function(t) {
                    try {
                        var i = e(a, t);
                        Array.isArray(i) || (i = [i]), Promise.all(i).then(function(t) {
                            n(t)
                        }).catch(function(t) {
                            s(t)
                        })
                    } catch (t) {
                        s()
                    }
                }).catch(function(t) {})
            }) : e(t)
        }
    }

    function a(t) {
        return {
            nocache: !!t.nocache,
            getPlaylist: o(t)
        }
    }

    function s(t, e, n) {
        function o(e, i, r, o) {
            var a = n && n.pip || null,
                s = {
                    name: t,
                    node: e,
                    ids: i,
                    opts: o || {},
                    scraper: r,
                    getMedia: function() {
                        var e = [],
                            i = c.Utils.flatten(this.ids);
                        if (!i.length) return e;
                        var n = this.scraper;
                        return n ? (i.forEach(function(i) {
                            if (n.nocache) return void e.push(n.getPlaylist(i));
                            if (!i.url || !l.a.check(i.url)) {
                                var r = t + "_" + (i.url || i),
                                    o = new Promise(function(t) {
                                        h.a.get(r).then(function(e) {
                                            return t(e)
                                        }).catch(function() {
                                            Promise.resolve(n.getPlaylist(i)).then(function(e) {
                                                h.a.put(r, e), t(e)
                                            })
                                        })
                                    });
                                e.push(o)
                            }
                        }), e) : (e.push.apply(e, i), e)
                    }
                };
            return a && a.restore && a.detach && (s.restore = a.restore, s.detach = a.detach), s
        }
        var a = Boolean(n && n.dynamic),
            s = a ? function() {
                this._ids = []
            } : function() {};
        return s.prototype = {
            constructor: s,
            name: t,
            getMediaPlayers: e,
            makePlayer: function(t, e, i, n) {
                return o(r(t), e, i, n)
            },
            makePlayer0: o
        }, a && (s.prototype.processRequest = function(e) {
            if (e && -1 === this._ids.indexOf(e)) {
                if ("default" === t && (e.filename = i.i(f.a)(e.filename, document.title)), "youtube" === t && "www.youtube.com" === window.location.host && "/" === window.location.pathname) return;
                this._ids.push(e)
            }
        }), s
    }
    i.d(e, "a", function() {
        return a
    }), i.d(e, "b", function() {
        return s
    }), i.d(e, "c", function() {
        return p
    }), i.d(e, "d", function() {
        return r
    });
    var l = i(16),
        c = i(0),
        u = i(10),
        d = i(1),
        h = i(71),
        f = i(70),
        p = {
            extract: function(t) {
                var e = t.getAttribute("flashvars").split("&"),
                    i = void 0;
                return e.forEach(function(t) {
                    t = t.split("="), "file" === t[0] && (i = decodeURIComponent(t[1]))
                }), i
            },
            parsePlaylist: function(t, e) {
                var n = c.Utils.xmlParser.parseFromString(e, "text/xml"),
                    r = [];
                return c.Utils.queryAll("track", n).forEach(function(t) {
                    c.Utils.queryAll("location, highquality, lowquality", t).forEach(function(e) {
                        var n = e.textContent.trim(),
                            o = c.UrlUtils.parse(n);
                        if (!i.i(u.c)(o.ext)) {
                            var a = [t.querySelector("title").textContent.trim()],
                                s = t.querySelector("singer") || t.querySelector("creator");
                            s && "" !== s.textContent.trim() && a.unshift(s.textContent.trim()), o.type = "mp3" === o.ext ? "audio" : "video", o.title = a.join(" – "), o.quality = d.a.getJWQuality(e.nodeName), r.push(o)
                        }
                    })
                }), r
            }
        }
}, , function(t, e) {
    var i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
    }
    t.exports = i
}, function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
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

    function o(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === n || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
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

    function a() {
        _ && f && (_ = !1, f.length ? p = f.concat(p) : m = -1, p.length && s())
    }

    function s() {
        if (!_) {
            var t = r(a);
            _ = !0;
            for (var e = p.length; e;) {
                for (f = p, p = []; ++m < e;) f && f[m].run();
                m = -1, e = p.length
            }
            f = null, _ = !1, o(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function c() {}
    var u, d, h = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            u = i
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            d = n
        }
    }();
    var f, p = [],
        _ = !1,
        m = -1;
    h.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        p.push(new l(t, e)), 1 !== p.length || _ || r(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(t) {
        return []
    }, h.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, h.cwd = function() {
        return "/"
    }, h.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, h.umask = function() {
        return 0
    }
}, , , , , function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(10),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = function t(e) {
            var i = this;
            this._date = Date.now(), this.values = {}, this._sizePromise = null, this._hls = !1, e.title || Object.defineProperty(this, "title", {
                get: function() {
                    return "string" == typeof i._title ? i._title : (i._title = i.getName().substr(0, t.MAX_FILE_NAME_LENGTH), i._title)
                }
            }), this.merge(e)
        };
    a.MAX_FILE_NAME_LENGTH = 128, a.isValidData = function(t) {
        if (n.BrFeatures.M3U8 && i.i(r.c)(t.ext)) return !0;
        var e = r.b[t.type],
            o = e && e.extensions;
        return e && -1 !== o.indexOf(t.ext)
    }, a.prototype._createFieldGetter = function(t) {
        var e = this;
        this[t] = function() {
            return e.get(t)
        }
    }, a.prototype._generateFakeName = function() {
        return [this.type, n.Utils.makeId(this.values)].join("-").replace(/-+/g, "-")
    }, a.prototype.get = function(t) {
        if ("string" == typeof t || "number" == typeof t) return this.values[t] || this[t]
    }, a.prototype.set = function(t, e) {
        return "string" != typeof t && "number" != typeof t || this.values[t] === e || (this[t] = e), this
    }, a.prototype.merge = function(t) {
        var e = t instanceof a ? t.values : t;
        for (var n in e) this.set(n, void 0 !== e[n] ? e[n] : e[n] || null);
        return i.i(r.c)(this.get("ext")) && (this.set("ext", "mp4"), this._hls = !0), this
    }, a.prototype.getName = function() {
        var t = "string" == typeof this._title ? this._title : "";
        return n.Utils.replaceEntities(t || this.filename || this._generateFakeName())
    }, a.prototype.getFilename = function() {
        var t = this.getName(),
            e = "." + this.ext,
            i = 0;
        return t.endsWith(e) && (i = e.length + 1), t = t.replace(/\s+/g, " ").replace(/[\/\\:*?"<>|\u200c\u200d]/g, "-").substr(0, a.MAX_FILE_NAME_LENGTH - i) + e
    }, a.prototype.extQuality = function() {
        return (this.get("ext") || "") + "/" + (this.get("quality") || "") + "/" + (this.get("resolution") || "")
    }, a.prototype.getSize = function() {
        var t = this;
        if (t._sizePromise) return t._sizePromise;
        var e = new Promise(function(e, i) {
            function r(t) {
                t && s.push(n.Utils.getSize(t))
            }
            var a = t.get("size");
            if ((a = n.Utils.defined(a) ? a : 0) || null === a || t._hls) return e(a);
            var s = [],
                l = t.get("url");
            if ("object" === (void 0 === l ? "undefined" : o(l))) {
                [l.audioUrl, l.videoUrl].forEach(r)
            } else r(l);
            s = s.length > 0 ? 1 === s.length ? s[0] : Promise.all(s) : Promise.reject();
            var c = t.get("altUrl");
            s.then(function() {
                for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                for (var a = n.Utils.flatten(r), s = 0, l = a.length - 1; l >= 0; l--) s += a[l];
                t.set("size", s), e(s)
            }).catch(function() {
                if (c) {
                    var r = n.Utils.getSize(c);
                    return r.then(function(i) {
                        t.set("size", i), e(i)
                    }).catch(function(t) {
                        i(t)
                    }), r
                }
                i(null)
            })
        });
        return t._sizePromise = e, e
    }, e.a = a
}, function(t, e, i) {
    "use strict";
    (function(t, n) {
        function r(t) {
            setTimeout(t, 0)
        }

        function o(t) {
            return function(e) {
                var i = (0, c.default)(arguments, 1);
                t(function() {
                    e.apply(null, i)
                })
            }
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.hasNextTick = e.hasSetImmediate = void 0, e.fallback = r, e.wrap = o;
        var s, l = i(19),
            c = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(l),
            u = e.hasSetImmediate = "function" == typeof t && t,
            d = e.hasNextTick = "object" === (void 0 === n ? "undefined" : a(n)) && "function" == typeof n.nextTick;
        s = u ? t : d ? n.nextTick : r, e.default = o(s)
    }).call(e, i(22).setImmediate, i(12))
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        e |= 0;
        for (var i = Math.max(t.length - e, 0), n = Array(i), r = 0; r < i; r++) n[r] = t[e + r];
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n, t.exports = e.default
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return s && "AsyncFunction" === t[Symbol.toStringTag]
    }

    function r(t) {
        return n(t) ? (0, a.default)(t) : t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isAsync = void 0;
    var o = i(31),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = "function" == typeof Symbol;
    e.default = r, e.isAsync = n
}, , function(t, e, i) {
    function n(t, e) {
        this._id = t, this._clearFn = e
    }
    var r = Function.prototype.apply;
    e.setTimeout = function() {
        return new n(r.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function() {
        return new n(r.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }, n.prototype.unref = n.prototype.ref = function() {}, n.prototype.close = function() {
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
    }, i(23), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function(t, e, i) {
    (function(t, e) {
        ! function(t, i) {
            "use strict";

            function n(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                var n = {
                    callback: t,
                    args: e
                };
                return c[l] = n, s(l), l++
            }

            function r(t) {
                delete c[t]
            }

            function o(t) {
                var e = t.callback,
                    n = t.args;
                switch (n.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(n[0]);
                        break;
                    case 2:
                        e(n[0], n[1]);
                        break;
                    case 3:
                        e(n[0], n[1], n[2]);
                        break;
                    default:
                        e.apply(i, n)
                }
            }

            function a(t) {
                if (u) setTimeout(a, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            o(e)
                        } finally {
                            r(t), u = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var s, l = 1,
                    c = {},
                    u = !1,
                    d = t.document,
                    h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? function() {
                    s = function(t) {
                        e.nextTick(function() {
                            a(t)
                        })
                    }
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            i = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = i, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        i = function(i) {
                            i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && a(+i.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), s = function(i) {
                        t.postMessage(e + i, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        a(t.data)
                    }, s = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : d && "onreadystatechange" in d.createElement("script") ? function() {
                    var t = d.documentElement;
                    s = function(e) {
                        var i = d.createElement("script");
                        i.onreadystatechange = function() {
                            a(e), i.onreadystatechange = null, t.removeChild(i), i = null
                        }, t.appendChild(i)
                    }
                }() : function() {
                    s = function(t) {
                        setTimeout(a, 0, t)
                    }
                }(), h.setImmediate = n, h.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, i(11), i(12))
}, function(t, e, i) {
    "use strict";

    function n() {}
    var r = i(67);
    n.prototype = {
        constructor: n,
        verify: function(t) {
            var e = this,
                i = t.split("."),
                n = i[0],
                o = i[1],
                a = i[2];
            return window.crypto.subtle.importKey("jwk", r.a, {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            }, !1, ["verify"]).then(function(t) {
                return window.crypto.subtle.verify({
                    name: "RSASSA-PKCS1-v1_5"
                }, t, e._base64UrlToUint8Array(a), e._stringToArrayBuffer(n + "." + o))
            }).then(function(t) {
                var i = e.parsePayload(o);
                return null === i ? Promise.reject("Cannot parse JWT") : {
                    data: i,
                    valid: t
                }
            })
        },
        shouldHideWidget: function(t, e) {
            var i = this;
            return new Promise(function(n) {
                return i.verify(t).then(function(t) {
                    n(t.valid && t.data && i.checkURLPattern(t.data.host, e) && i.checkTime(t.data.exp, t.data.iat) ? !0 : !1)
                }).catch(function(t) {
                    n(!1)
                })
            })
        },
        checkURLPattern: function(t, e) {
            var i = e.replace("www.", "");
            if (i === t) return !0;
            var n = new RegExp("^" + t.replace("*.", "(?:\\w+\\.)*") + "$");
            return !!i.match(n)
        },
        checkTime: function(t, e) {
            var i = Date.now();
            return 1e3 * t > i && 1e3 * e <= i
        },
        parsePayload: function(t) {
            var e = void 0;
            try {
                e = JSON.parse(this._base64UrlToString(t))
            } catch (t) {
                return null
            }
            return e
        },
        _stringToBase64Url: function(t) {
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        },
        _base64UrlToString: function(t) {
            return atob(this._base64UrlToBase64(t))
        },
        _base64ToBase64Url: function(t) {
            return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        },
        _base64UrlToBase64: function(t) {
            return (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/")
        },
        _base64UrlToUint8Array: function(t) {
            return this._base64ToUint8Array(this._base64UrlToBase64(t))
        },
        _stringToArrayBuffer: function(t) {
            for (var e = new ArrayBuffer(t.length), i = new Uint8Array(e), n = 0, r = t.length; n < r; n++) i[n] = t.charCodeAt(n);
            return e
        },
        _base64ToUint8Array: function(t) {
            var e = atob(t).split(""),
                i = e.map(function(t) {
                    return t.charCodeAt(0)
                });
            return new Uint8Array(i)
        }
    }, e.a = new n
}, , , function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(3),
        o = i(72),
        a = n.Utils.query.bind(n.Utils),
        s = n.Utils.getNodePropOrEmptyString.bind(n.Utils),
        l = function(t, e, i, n, r) {
            this._node = e, this._docId = n, this._index = r, this._data = this._extractData(e, i), this._validateAndSetDataType(t), this._attachClickHandler()
        };
    l.prototype = {
        TITLE_SELECTOR: "h3 a",
        VISIBLE_URL_SELECTOR: "cite",
        LINK_SELECTOR: "h3 a:not([id])",
        DESC_SELECTOR: ".st",
        _extractData: function(t, e) {
            var i = a(this.TITLE_SELECTOR, t),
                n = a(this.VISIBLE_URL_SELECTOR, t),
                r = a(this.DESC_SELECTOR, t),
                o = a(this.LINK_SELECTOR, t);
            return {
                url: s(o, "href"),
                visibleUrl: s(n, "textContent"),
                position: e,
                title: s(i, "textContent"),
                description: s(r, "textContent"),
                addRawContent: ""
            }
        },
        _validateAndSetDataType: function(t) {
            this._isDataValid(this._data) ? this._data.type = t : this._data.type = this._guessType()
        },
        _isDataValid: function(t) {
            return Boolean(t.title && t.visibleUrl && t.url && t.description)
        },
        _attachClickHandler: function() {
            this._clickHandler = this._onClick.bind(this), this._node.addEventListener("click", this._clickHandler, !0)
        },
        _onClick: function(t) {
            var e = n.Utils.nearestParent(t.target, "a"),
                i = void 0,
                r = void 0;
            return e && e.nodeType === Node.ELEMENT_NODE && (i = e.getAttribute("href"), i.trim().match(/^(#|javascript:)/) || (r = e.dataset.href || e.href || this.data.url || "", o.a.triggeResultClicked(), this._reportClick(r))), !0
        },
        _reportClick: function(t) {
            r.a.log("SerpClickData", {
                serpId: this._docId,
                itemIndex: this._index,
                timestamp: Date.now(),
                url: t
            })
        },
        _reportClickConsole: function(t) {},
        _guessType: function() {
            return this._node.matches(".g.kno-kp.mnr-c.g-blk") ? "people_also_ask" : this._node.matches(".g.mnr-c.g-blk") ? this._node.querySelector(".g.mnr-c.g-blk .kp-header") ? "featured_video" : "featured_snippet" : "unknown"
        },
        destroy: function() {
            this._node.removeEventListener("click", this._clickHandler), this._node = null, this._data = null
        },
        get data() {
            return this._data
        },
        renderToConsole: function() {
            this.data.type;
            this.data.addRawContent
        }
    }, e.a = l
}, function(t, e, i) {
    "use strict";
    t.exports = i(50)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        var e = this;
        this._widget = t, this._sizeQueue = h()(function(t, i) {
            e._checkFileSize(t, i)
        }, p), this._downloads = null, location.protocol.includes("chrome") && location.pathname.includes("popup.html") && this.initPlayNowListener(), s.a.load()
    }
    var r = i(0),
        o = i(69),
        a = i(3),
        s = i(5),
        l = i(1),
        c = i(13),
        u = i.n(c),
        d = i(36),
        h = i.n(d),
        f = !r.Utils.IS_CONTENT_SCRIPT,
        p = 3;
    n.prototype = {
        setDownloads: function(t) {
            this._downloads = t
        },
        render: function(t, e, n) {
            e.downloads = this._downloads.group(), f && (e.is_only = this._downloads.isOneMedia());
            var a = r.Utils.query("#downloads", this._widget);
            a.innerHTML = f ? u.a.render(t, e, {
                media_template: s.a.get("template-media-popup")
            }) : u.a.render(t, e, {
                media_template: s.a.get("template-media")
            }), a.classList.add("content");
            var l = this.applyCurrentValues(n);
            if (f) {
                var c = r.Utils.query(".downloads-list", this._widget);
                c.scrollHeight > c.offsetHeight && (i.i(o.a)(r.Utils.queryAll("h1", this._widget), c), c.addEventListener("scroll", this._getSizeOfVisibleMedia.bind(this), !1)), this._widget.classList.add("done")
            }
            return l
        },
        initPlayNowListener: function() {
            var t = this;
            chrome.runtime.onMessage.addListener(function(e) {
                if ("downloads" === e.requestType && "widget_progress" === e.method) {
                    var i = e.params;
                    if (i.mime && i.mime.includes("video") && !i.filename.match(/\.mp3$/)) {
                        var n = i.url,
                            o = t._widget.querySelector('a[data-url="' + n + '"]'),
                            a = void 0;
                        if (!o) return;
                        a = r.Utils.nearestParent(o, ".j-media-scope"), i.exists && (i.playable || "complete" === i.state) ? t._handleProgress(a, i) : "interrupted" !== i.state && i.exists || t._changeWidgetMode(a, "select_media")
                    }
                }
            })
        },
        _handleProgress: function(t, e) {
            var n = 0,
                o = t.querySelector(".play-now-btn"),
                s = parseInt(o.dataset.downloadId);
            if (s && s === e.id || (o.dataset.downloadId = e.id), t.matches(".progress-mode") || (this._changeWidgetMode(t, "progress"), a.a.log("PlayNow", a.a.PLAY_NOW_SHOWN)), "complete" !== e.state) {
                var l = (e.bytesReceived / e.totalBytes * 100).toFixed(0);
                l < 0 && (l = 0), n = l + "%"
            } else n = "100%";
            var c = t.querySelector(".progress-bar .bar");
            c && (c.style.width = n);
            var u = r.Utils.beautifyFileSize(e.totalBytes, !0),
                d = r.Utils.beautifyFileSize(e.bytesReceived, !0),
                h = t.querySelector(".progress-box .progress-text");
            h && (h.innerText = "100%" !== n ? d + " " + i.i(r.i18n)("play_now_received_from") + " " + u : u);
            var f = t.dataset.prevReceived || 0,
                p = e.bytesReceived - f;
            p < 0 && (p = Math.abs(p)), p < 0 && (p = 0);
            var _ = r.Utils.beautifyFileSize(p, !0),
                m = t.querySelector(".progress-box .speed-text");
            m && (m.innerHTML = "100%" !== n ? '<span class="green-arrow-icon"></span> ' + _ + "/" + i.i(r.i18n)("play_now_per_second") : ""), t.dataset.prevReceived = e.bytesReceived
        },
        _changeWidgetMode: function(t, e) {
            t.classList.remove("progress-mode", "select-mode"), t.classList.add(e + "-mode")
        },
        _checkFileSize: function(t, e) {
            var i = this,
                n = this._downloads.getMedia(t);
            if (!n || n.size) return void("function" == typeof e && e());
            a.a.log("Download", a.a.DOWNLOAD_REQUEST_SIZE);
            var o = r.Utils.query("#size_" + n.id, this._widget);
            o.classList.add("size-loading"), n.getSize().then(function(t) {
                if ("function" == typeof e && e(), o) {
                    var i = r.Utils.beautifyFileSize(t);
                    o.classList.add("done"), o.classList.remove("size-loading"), o.textContent = "(" + i + ")";
                    var n = r.Utils.findParent(o, "select-wrapper");
                    if (n) {
                        var s = n.querySelector(".j-quality.selected .j-checked-size");
                        s && (s.innerText = i)
                    }
                    t || a.a.log("Download", a.a.DOWNLOAD_REQUEST_SIZE_FAILED)
                }
            }).catch(function() {
                "function" == typeof e && e(), o.classList.add("done"), o.textContent = "(Error)", r.Utils.query("#media_" + n.id, i._widget).setAttribute("disabled", "disabled")
            })
        },
        _applyCurrentValues: function(t) {
            var e = this,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = i || t.querySelector(".j-quality-selector"),
                o = n.getAttribute("data-selected-value");
            r.Utils.queryAll(".j-quality-option, .j-quality-download", t).forEach(function(t) {
                t.hidden = t.dataset.quality !== o, f || t.hidden || !t.classList.contains("j-quality-download") || e._sizeQueue.push(t.dataset.id)
            }, this), f && this._getSizeOfVisibleMedia()
        },
        applyCurrentValues: function(t) {
            var e = this._downloads,
                i = s.a.get("prefer_last_quality") && s.a.get("preferred_quality:" + t),
                n = r.Utils.queryAll(".j-media-scope", this._widget);
            return n.forEach(function(n) {
                var o = r.Utils.queryAll(".j-quality-download", n),
                    a = o.map(function(t) {
                        return t.dataset.id
                    }),
                    s = l.a.chooseBestDownload(e.getMediaGroup(a), t, i),
                    c = r.Utils.query(".j-quality-selector", n);
                if (c) {
                    var u = s.extQuality();
                    c.setAttribute("data-selected-value", u);
                    var d = c.querySelector('[data-quality-value="' + u + '"]');
                    d && d.classList.add("selected")
                }
                this._applyCurrentValues(n, c)
            }, this), n
        },
        _getSizeOfVisibleMedia: function() {
            for (var t = r.Utils.query(".downloads-list", this._widget), e = t.scrollTop, i = t.offsetHeight, n = r.Utils.queryAll(".j-quality-download:not([hidden])", t), o = 0, a = n.length; o < a; ++o) {
                var s = n[o];
                if (s.offsetTop > e + i + 10) break;
                this._sizeQueue.push(s.dataset.id)
            }
        },
        getMetricsParams: function(t, e) {
            var i = t instanceof Node ? t.dataset.id : t,
                n = this._downloads,
                r = n.getMedia(i),
                o = e || {},
                a = n.getAllMediaFormats(i),
                s = [];
            for (var c in a) s.push(c + ":" + a[c].join("|"));
            var u = r.ext ? r.ext : "unknown";
            return o.size = r.quality ? l.a.getSizeByQuality(r.quality) : 0, o.ext = u, o.same_size_exts = n.getSameQualityMediaFormats(i).join("|"), o.same_ext_sizes = n.getSameFormatMediaQuality(i).join("|"), o.total = s.join(","), o
        },
        download: function(t) {
            if (!t.classList.contains("j-disabled")) return t.classList.add("j-disabled"), t.classList.add("btn-progress"), this._downloads.download(t.dataset.id).then(function() {
                t.classList.remove("btn-progress"), t.classList.add("btn-started")
            }).catch(function(e) {
                t.classList.remove("btn-progress"), t.classList.remove("j-disabled")
            })
        }
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(146),
        o = i(148),
        a = (i(147), i(38)),
        s = function() {
            this.detector = new r.a, this._savedStyles = new Map, this._appliedStyles = new Map, this._observer = new MutationObserver(this._onStylePropertyChange.bind(this))
        };
    s.prototype = {
        PIPED_PLAYER_STYLE: {
            left: "0!important",
            top: "0!important",
            padding: "0!important",
            margin: "0!important",
            border: "0px none!important",
            width: "100%!important",
            height: "100%!important",
            "min-width": "100%!important",
            "max-width": "none!important",
            "min-height": "100%!important",
            "max-height": "none!important",
            transform: "none!important"
        },
        PLAYER_SIBLINGS_STYLE: {
            display: "none!important",
            visibility: "hidden!important",
            opacity: "0!important",
            width: "0!important",
            height: "0!important",
            margin: "0!important",
            padding: "0!important",
            border: "0px none!important",
            overflow: "hidden!important"
        },
        GENERATE_STACKING_CONTEXT_STYLE: {
            left: "0!important",
            top: "0!important",
            padding: "0!important",
            margin: "0!important",
            border: "0px none!important",
            width: "100%!important",
            height: "100%!important",
            "min-width": "100%!important",
            "max-width": "none!important",
            "min-height": "100%!important",
            "max-height": "none!important",
            overflow: "hidden!important",
            transform: "none!important"
        },
        GENERATE_STACKING_OUTER_STYLE: {
            "font-size": "0!important",
            "line-height": "0!important",
            "z-index": Number.MAX_SAFE_INTEGER - 1 + "!important"
        },
        FLASH_DIMENSION_PROPS: {
            width: "100%!important",
            height: "100%!important",
            _width: "100%",
            _height: "100%"
        },
        TAGS_NON_AFFECTING_LAYOUT: "head, script, style, link, meta",
        MUTATION_OBSERVER_CONFIG: {
            childList: !1,
            attributes: !0,
            characterData: !1,
            subtree: !1,
            attributeOldValue: !1,
            characterDataOldValue: !1,
            attributeFilter: ["style", "width", "height"]
        },
        _onStylePropertyChange: function(t) {
            var e = t.filter(function(t) {
                var e = t.target,
                    i = e.getAttribute(t.attributeName) || "",
                    r = this._appliedStyles.get(e),
                    o = void 0,
                    a = void 0,
                    s = void 0;
                switch (t.attributeName) {
                    case "style":
                        o = n.Utils.dom.parseStyleAttr(i);
                        for (s in r)
                            if (o[s] !== r[s]) return !0;
                        return !1;
                    case "width":
                    case "height":
                        return a = "_" + t.attributeName, r[a] !== i
                }
                return !1
            }.bind(this)).map(function(t) {
                return t.target
            });
            this._reApplyStyles(e)
        },
        _watchStyleChanges: function() {
            this._appliedStyles.forEach(function(t, e) {
                this._observer.observe(e, this.MUTATION_OBSERVER_CONFIG)
            }.bind(this))
        },
        _stopWatchingStyleChanges: function() {
            this._observer.disconnect()
        },
        _getNodeSize: function(t) {
            var e = n.Utils.dom.getEmbedSize(t);
            return {
                width: e.width || 640,
                height: e.height || 480
            }
        },
        _iterateSiblings: function(t, e) {
            for (var i = t.parentNode && t.parentNode.children, n = 0; i && n < i.length; n++) i[n] !== t && e(i[n])
        },
        _nodeInDocument: function(t) {
            for (; t && t !== document;) t = t.parentNode;
            return t === document
        },
        _saveStyle: function(t) {
            var e = t.style,
                i = {};
            for (var n in e) e.hasOwnProperty(n) && "" !== e[n] && (i[n] = t.style[n]);
            ["OBJECT", "EMBED", "IFRAME"].indexOf(t.tagName.toUpperCase()) > -1 && t.width && (i._width = t.width, i._height = t.height), 0 !== t.scrollTop && (i._scrollTop = t.scrollTop), this._savedStyles.set(t, i)
        },
        _restoreStyle: function(t) {
            var e = t.style,
                i = this._savedStyles.get(t);
            if (i) {
                for (var n in e) e.hasOwnProperty(n) && (n in i ? e[n] = i[n] : "" !== e[n] && (e[n] = ""));
                i._width && (t.width = i._width), i._height && (t.height = i._height), i._scrollTop && (t.scrollTop = i._scrollTop)
            }
        },
        detachPlayerOrNode: function(t) {
            var e = void 0,
                i = void 0;
            if (!this._currentPiP) {
                if (t instanceof HTMLElement) {
                    if (!this._nodeInDocument(t)) return;
                    i = t, e = !1
                } else i = t.node, e = Boolean(t.restore && t.detach);
                o.a.hasSpecialSupport() && (i = o.a.getNode(), e = !1);
                var n = this._getNodeSize(i),
                    r = void 0;
                if (e) {
                    if (!t.detach(this._maximizeNode.bind(this))) return;
                    r = {
                        player: t
                    }
                } else this._maximizeNode(i), r = {
                    node: i
                };
                this._currentPiP = r, chrome.extension.inIncognitoContext && (n.incognito = !0), this.emit("tab_detached", n)
            }
        },
        _saveAppliedStyle: function(t, e) {
            var i = this._appliedStyles.get(t) || {};
            for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
            this._appliedStyles.set(t, i)
        },
        _applyStyleForNode: function(t) {
            var e = this._appliedStyles.get(t);
            e && n.Utils.dom.setStyleAttr(t, e), e._width && (t.width = e._width), e._height && (t.height = e._height)
        },
        _maximizeNode: function(t) {
            var e = null,
                i = !1,
                n = this._getNodeSize(t);
            this._savedStyles.clear(), this._appliedStyles.clear(), this._saveAppliedStyle(t, this.PIPED_PLAYER_STYLE);
            var r = t.querySelector("embed");
            r && (this._saveStyle(r), this._saveAppliedStyle(r, this.FLASH_DIMENSION_PROPS));
            for (var o = t; o && o !== document; o = o.parentNode)
                if (!o.matches(this.TAGS_NON_AFFECTING_LAYOUT)) {
                    if (this._saveStyle(o), this._saveAppliedStyle(o, this.GENERATE_STACKING_CONTEXT_STYLE), i && this._saveAppliedStyle(o, this.GENERATE_STACKING_OUTER_STYLE), o.matches("object, embed") && this._saveAppliedStyle(o, this.FLASH_DIMENSION_PROPS), o.matches("iframe")) i = !0;
                    else if (!i && (Math.min(o.parentNode.scrollWidth, o.parentNode.offsetWidth) !== n.width || Math.min(o.parentNode.scrollHeight, o.parentNode.offsetHeight) !== n.height)) {
                        i = !0, e = window.getComputedStyle(o);
                        var a = {
                            "font-size": e["font-size"] + "!important",
                            "line-height": e["line-height"] + "!important",
                            "z-index": Number.MAX_SAFE_INTEGER - 1 + "!important"
                        };
                        this._saveAppliedStyle(o, a)
                    }
                    i && this._iterateSiblings(o, function(t) {
                        t.matches(this.TAGS_NON_AFFECTING_LAYOUT) || (this._saveStyle(t), this._saveAppliedStyle(t, this.PLAYER_SIBLINGS_STYLE))
                    }.bind(this))
                }
            var s = function() {
                this._reApplyStyles(), this._watchStyleChanges()
            }.bind(this);
            window.addEventListener("resize", s)
        },
        _restoreNode: function() {
            this._savedStyles.forEach(function(t, e) {
                this._restoreStyle(e)
            }.bind(this)), this._savedStyles.clear(), this._appliedStyles.clear()
        },
        _reApplyStyles: function(t) {
            Array.isArray(t) ? t.forEach(this._applyStyleForNode.bind(this)) : this._appliedStyles.forEach(function(t, e) {
                this._applyStyleForNode(e)
            }.bind(this))
        },
        restore: function() {
            this._currentPiP && (this._stopWatchingStyleChanges(), this._currentPiP.player ? this._currentPiP.player.restore(this._restoreNode.bind(this)) : this._restoreNode(this._currentPiP.node), this._currentPiP = null, this.emit("tab_restored", null))
        },
        get isPanelMode() {
            return !!this._currentPiP
        }
    }, a(s.prototype), e.a = new s
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t) {
        return (0, u.default)(function(e, i) {
            var n;
            try {
                n = t.apply(this, e)
            } catch (t) {
                return i(t)
            }(0, l.default)(n) && "function" == typeof n.then ? n.then(function(t) {
                o(i, null, t)
            }, function(t) {
                o(i, t.message ? t : new Error(t))
            }) : i(null, n)
        })
    }

    function o(t, e, i) {
        try {
            t(e, i)
        } catch (t) {
            (0, h.default)(a, t)
        }
    }

    function a(t) {
        throw t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = r;
    var s = i(45),
        l = n(s),
        c = i(33),
        u = n(c),
        d = i(18),
        h = n(d);
    t.exports = e.default
}, function(t, e, i) {
    "use strict";

    function n() {
        this.head = this.tail = null, this.length = 0
    }

    function r(t, e) {
        t.length = 1, t.head = t.tail = e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n, n.prototype.removeLink = function(t) {
        return t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev, t.prev = t.next = null, this.length -= 1, t
    }, n.prototype.empty = function() {
        for (; this.head;) this.shift();
        return this
    }, n.prototype.insertAfter = function(t, e) {
        e.prev = t, e.next = t.next, t.next ? t.next.prev = e : this.tail = e, t.next = e, this.length += 1
    }, n.prototype.insertBefore = function(t, e) {
        e.prev = t.prev, e.next = t, t.prev ? t.prev.next = e : this.head = e, t.prev = e, this.length += 1
    }, n.prototype.unshift = function(t) {
        this.head ? this.insertBefore(this.head, t) : r(this, t)
    }, n.prototype.push = function(t) {
        this.tail ? this.insertAfter(this.tail, t) : r(this, t)
    }, n.prototype.shift = function() {
        return this.head && this.removeLink(this.head)
    }, n.prototype.pop = function() {
        return this.tail && this.removeLink(this.tail)
    }, n.prototype.toArray = function() {
        for (var t = Array(this.length), e = this.head, i = 0; i < this.length; i++) t[i] = e.data, e = e.next;
        return t
    }, n.prototype.remove = function(t) {
        for (var e = this.head; e;) {
            var i = e.next;
            t(e) && this.removeLink(e), e = i
        }
        return this
    }, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        return function() {
            var e = (0, r.default)(arguments),
                i = e.pop();
            t.call(this, e, i)
        }
    };
    var n = i(19),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n);
    t.exports = e.default
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n, t.exports = e.default
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e, i) {
        function n(t, e, i) {
            if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
            if (f.started = !0, (0, l.default)(t) || (t = [t]), 0 === t.length && f.idle()) return (0, p.default)(function() {
                f.drain()
            });
            for (var n = 0, r = t.length; n < r; n++) {
                var o = {
                    data: t[n],
                    callback: i || u.default
                };
                e ? f._tasks.unshift(o) : f._tasks.push(o)
            }(0, p.default)(f.process)
        }

        function r(t) {
            return function(e) {
                s -= 1;
                for (var i = 0, n = t.length; i < n; i++) {
                    var r = t[i],
                        o = (0, a.default)(c, r, 0);
                    o >= 0 && c.splice(o, 1), r.callback.apply(r, arguments), null != e && f.error(e, r.data)
                }
                s <= f.concurrency - f.buffer && f.unsaturated(), f.idle() && f.drain(), f.process()
            }
        }
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var o = (0, y.default)(t),
            s = 0,
            c = [],
            d = !1,
            f = {
                _tasks: new m.default,
                concurrency: e,
                payload: i,
                saturated: u.default,
                unsaturated: u.default,
                buffer: e / 4,
                empty: u.default,
                drain: u.default,
                error: u.default,
                started: !1,
                paused: !1,
                push: function(t, e) {
                    n(t, !1, e)
                },
                kill: function() {
                    f.drain = u.default, f._tasks.empty()
                },
                unshift: function(t, e) {
                    n(t, !0, e)
                },
                remove: function(t) {
                    f._tasks.remove(t)
                },
                process: function() {
                    if (!d) {
                        for (d = !0; !f.paused && s < f.concurrency && f._tasks.length;) {
                            var t = [],
                                e = [],
                                i = f._tasks.length;
                            f.payload && (i = Math.min(i, f.payload));
                            for (var n = 0; n < i; n++) {
                                var a = f._tasks.shift();
                                t.push(a), c.push(a), e.push(a.data)
                            }
                            s += 1, 0 === f._tasks.length && f.empty(), s === f.concurrency && f.saturated();
                            var l = (0, h.default)(r(t));
                            o(e, l)
                        }
                        d = !1
                    }
                },
                length: function() {
                    return f._tasks.length
                },
                running: function() {
                    return s
                },
                workersList: function() {
                    return c
                },
                idle: function() {
                    return f._tasks.length + s === 0
                },
                pause: function() {
                    f.paused = !0
                },
                resume: function() {
                    !1 !== f.paused && (f.paused = !1, (0, p.default)(f.process))
                }
            };
        return f
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = r;
    var o = i(41),
        a = n(o),
        s = i(44),
        l = n(s),
        c = i(46),
        u = n(c),
        d = i(34),
        h = n(d),
        f = i(18),
        p = n(f),
        _ = i(32),
        m = n(_),
        v = i(20),
        y = n(v);
    t.exports = e.default
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t, e) {
        var i = (0, s.default)(t);
        return (0, o.default)(function(t, e) {
            i(t[0], e)
        }, e, 1)
    };
    var r = i(35),
        o = n(r),
        a = i(20),
        s = n(a);
    t.exports = e.default
}, function(t, e, i) {
    "use strict";
    var n = i(106)();
    t.exports = function(t) {
        return t !== n && null !== t
    }
}, function(t, e, i) {
    "use strict";
    var n, r, o, a, s, l, c, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        d = i(105),
        h = i(115),
        f = Function.prototype.apply,
        p = Function.prototype.call,
        _ = Object.create,
        m = Object.defineProperty,
        v = Object.defineProperties,
        y = Object.prototype.hasOwnProperty,
        g = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    n = function(t, e) {
        var i;
        return h(e), y.call(this, "__ee__") ? i = this.__ee__ : (i = g.value = _(null), m(this, "__ee__", g), g.value = null), i[t] ? "object" === u(i[t]) ? i[t].push(e) : i[t] = [i[t], e] : i[t] = e, this
    }, r = function(t, e) {
        var i, r;
        return h(e), r = this, n.call(this, t, i = function() {
            o.call(r, t, i), f.call(e, this, arguments)
        }), i.__eeOnceListener__ = e, this
    }, o = function(t, e) {
        var i, n, r, o;
        if (h(e), !y.call(this, "__ee__")) return this;
        if (i = this.__ee__, !i[t]) return this;
        if (n = i[t], "object" === (void 0 === n ? "undefined" : u(n)))
            for (o = 0; r = n[o]; ++o) r !== e && r.__eeOnceListener__ !== e || (2 === n.length ? i[t] = n[o ? 0 : 1] : n.splice(o, 1));
        else n !== e && n.__eeOnceListener__ !== e || delete i[t];
        return this
    }, a = function(t) {
        var e, i, n, r, o;
        if (y.call(this, "__ee__") && (r = this.__ee__[t]))
            if ("object" === (void 0 === r ? "undefined" : u(r))) {
                for (i = arguments.length, o = new Array(i - 1), e = 1; e < i; ++e) o[e - 1] = arguments[e];
                for (r = r.slice(), e = 0; n = r[e]; ++e) f.call(n, this, o)
            } else switch (arguments.length) {
                case 1:
                    p.call(r, this);
                    break;
                case 2:
                    p.call(r, this, arguments[1]);
                    break;
                case 3:
                    p.call(r, this, arguments[1], arguments[2]);
                    break;
                default:
                    for (i = arguments.length, o = new Array(i - 1), e = 1; e < i; ++e) o[e - 1] = arguments[e];
                    f.call(r, this, o)
            }
    }, s = {
        on: n,
        once: r,
        off: o,
        emit: a
    }, l = {
        on: d(n),
        once: d(r),
        off: d(o),
        emit: d(a)
    }, c = v({}, l), t.exports = e = function(t) {
        return null == t ? _(c) : v(Object(t), l)
    }, e.methods = s
}, , function(t, e) {
    function i(t, e, i, n) {
        for (var r = t.length, o = i + (n ? 1 : -1); n ? o-- : ++o < r;)
            if (e(t[o], o, t)) return o;
        return -1
    }
    t.exports = i
}, function(t, e, i) {
    function n(t, e, i) {
        return e === e ? a(t, e, i) : r(t, o, i)
    }
    var r = i(40),
        o = i(42),
        a = i(43);
    t.exports = n
}, function(t, e) {
    function i(t) {
        return t !== t
    }
    t.exports = i
}, function(t, e) {
    function i(t, e, i) {
        for (var n = i - 1, r = t.length; ++n < r;)
            if (t[n] === e) return n;
        return -1
    }
    t.exports = i
}, function(t, e) {
    var i = Array.isArray;
    t.exports = i
}, function(t, e) {
    function i(t) {
        var e = void 0 === t ? "undefined" : n(t);
        return null != t && ("object" == e || "function" == e)
    }
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    t.exports = i
}, function(t, e) {
    function i() {}
    t.exports = i
}, , function(t, e, i) {
    "use strict";
    var n = function(t) {
        this.element = t, this.events = {}
    };
    n.prototype.bind = function(t, e) {
        void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
    }, n.prototype.unbind = function(t, e) {
        var i = void 0 !== e;
        this.events[t] = this.events[t].filter(function(n) {
            return !(!i || n === e) || (this.element.removeEventListener(t, n, !1), !1)
        }, this)
    }, n.prototype.unbindAll = function() {
        for (var t in this.events) this.unbind(t)
    };
    var r = function() {
        this.eventElements = []
    };
    r.prototype.eventElement = function(t) {
        var e = this.eventElements.filter(function(e) {
            return e.element === t
        })[0];
        return void 0 === e && (e = new n(t), this.eventElements.push(e)), e
    }, r.prototype.bind = function(t, e, i) {
        this.eventElement(t).bind(e, i)
    }, r.prototype.unbind = function(t, e, i) {
        this.eventElement(t).unbind(e, i)
    }, r.prototype.unbindAll = function() {
        for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
    }, r.prototype.once = function(t, e, i) {
        var n = this.eventElement(t),
            r = function t(r) {
                n.unbind(e, t), i(r)
            };
        n.bind(e, r)
    }, t.exports = r
}, function(t, e, i) {
    "use strict";
    t.exports = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }()
}, function(t, e, i) {
    "use strict";
    var n = i(52),
        r = i(60),
        o = i(61);
    t.exports = {
        initialize: r,
        update: o,
        destroy: n
    }
}, function(t, e, i) {
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
}, function(t, e, i) {
    "use strict";
    var n = i(6),
        r = i(8),
        o = i(2);
    t.exports = function(t) {
        var e = o.get(t);
        e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), n.removePsClasses(t), o.remove(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i(t) {
            return t.getBoundingClientRect()
        }
        var n = function(t) {
            t.stopPropagation()
        };
        e.event.bind(e.scrollbarY, "click", n), e.event.bind(e.scrollbarYRail, "click", function(n) {
            var r = n.pageY - window.pageYOffset - i(e.scrollbarYRail).top,
                s = r > e.scrollbarYTop ? 1 : -1;
            a(t, "top", t.scrollTop + s * e.containerHeight), o(t), n.stopPropagation()
        }), e.event.bind(e.scrollbarX, "click", n), e.event.bind(e.scrollbarXRail, "click", function(n) {
            var r = n.pageX - window.pageXOffset - i(e.scrollbarXRail).left,
                s = r > e.scrollbarXLeft ? 1 : -1;
            a(t, "left", t.scrollLeft + s * e.containerWidth), o(t), n.stopPropagation()
        })
    }
    var r = i(2),
        o = i(4),
        a = i(7);
    t.exports = function(t) {
        n(t, r.get(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i(i) {
            var r = n + i * e.railXRatio,
                a = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
            e.scrollbarXLeft = r < 0 ? 0 : r > a ? a : r;
            var s = o.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
            c(t, "left", s)
        }
        var n = null,
            r = null,
            s = function(e) {
                i(e.pageX - r), l(t), e.stopPropagation(), e.preventDefault()
            },
            u = function() {
                o.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
        e.event.bind(e.scrollbarX, "mousedown", function(i) {
            r = i.pageX, n = o.toInt(a.css(e.scrollbarX, "left")) * e.railXRatio, o.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
        })
    }

    function r(t, e) {
        function i(i) {
            var r = n + i * e.railYRatio,
                a = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
            e.scrollbarYTop = r < 0 ? 0 : r > a ? a : r;
            var s = o.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
            c(t, "top", s)
        }
        var n = null,
            r = null,
            s = function(e) {
                i(e.pageY - r), l(t), e.stopPropagation(), e.preventDefault()
            },
            u = function() {
                o.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
            };
        e.event.bind(e.scrollbarY, "mousedown", function(i) {
            r = i.pageY, n = o.toInt(a.css(e.scrollbarY, "top")) * e.railYRatio, o.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
        })
    }
    var o = i(6),
        a = i(8),
        s = i(2),
        l = i(4),
        c = i(7);
    t.exports = function(t) {
        var e = s.get(t);
        n(t, e), r(t, e)
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i(i, n) {
            var r = t.scrollTop;
            if (0 === i) {
                if (!e.scrollbarYActive) return !1;
                if (0 === r && n > 0 || r >= e.contentHeight - e.containerHeight && n < 0) return !e.settings.wheelPropagation
            }
            var o = t.scrollLeft;
            if (0 === n) {
                if (!e.scrollbarXActive) return !1;
                if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
            }
            return !0
        }
        var n = !1;
        e.event.bind(t, "mouseenter", function() {
            n = !0
        }), e.event.bind(t, "mouseleave", function() {
            n = !1
        });
        var a = !1;
        e.event.bind(e.ownerDocument, "keydown", function(c) {
            if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                var u = o.matches(e.scrollbarX, ":focus") || o.matches(e.scrollbarY, ":focus");
                if (n || u) {
                    var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (d) {
                        if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                        else
                            for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                        if (r.isEditable(d)) return
                    }
                    var h = 0,
                        f = 0;
                    switch (c.which) {
                        case 37:
                            h = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                            break;
                        case 38:
                            f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                            break;
                        case 39:
                            h = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                            break;
                        case 40:
                            f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                            break;
                        case 33:
                            f = 90;
                            break;
                        case 32:
                            f = c.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            f = -90;
                            break;
                        case 35:
                            f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                            break;
                        case 36:
                            f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                            break;
                        default:
                            return
                    }
                    l(t, "top", t.scrollTop - f), l(t, "left", t.scrollLeft + h), s(t), a = i(h, f), a && c.preventDefault()
                }
            }
        })
    }
    var r = i(6),
        o = i(8),
        a = i(2),
        s = i(4),
        l = i(7);
    t.exports = function(t) {
        n(t, a.get(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i(i, n) {
            var r = t.scrollTop;
            if (0 === i) {
                if (!e.scrollbarYActive) return !1;
                if (0 === r && n > 0 || r >= e.contentHeight - e.containerHeight && n < 0) return !e.settings.wheelPropagation
            }
            var o = t.scrollLeft;
            if (0 === n) {
                if (!e.scrollbarXActive) return !1;
                if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
            }
            return !0
        }

        function n(t) {
            var e = t.deltaX,
                i = -1 * t.deltaY;
            return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
        }

        function r(e, i) {
            var n = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
            if (n) {
                var r = window.getComputedStyle(n);
                if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) return !1;
                var o = n.scrollHeight - n.clientHeight;
                if (o > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === o && i < 0)) return !0;
                var a = n.scrollLeft - n.clientWidth;
                if (a > 0 && !(0 === n.scrollLeft && e < 0 || n.scrollLeft === a && e > 0)) return !0
            }
            return !1
        }

        function s(s) {
            var c = n(s),
                u = c[0],
                d = c[1];
            r(u, d) || (l = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? a(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : a(t, "top", t.scrollTop + u * e.settings.wheelSpeed), l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : a(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), l = !0) : (a(t, "top", t.scrollTop - d * e.settings.wheelSpeed), a(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), o(t), (l = l || i(u, d)) && (s.stopPropagation(), s.preventDefault()))
        }
        var l = !1;
        void 0 !== window.onwheel ? e.event.bind(t, "wheel", s) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", s)
    }
    var r = i(2),
        o = i(4),
        a = i(7);
    t.exports = function(t) {
        n(t, r.get(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        e.event.bind(t, "scroll", function() {
            o(t)
        })
    }
    var r = i(2),
        o = i(4);
    t.exports = function(t) {
        n(t, r.get(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i() {
            var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
            return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
        }

        function n() {
            c || (c = setInterval(function() {
                if (!o.get(t)) return void clearInterval(c);
                s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), a(t)
            }, 50))
        }

        function l() {
            c && (clearInterval(c), c = null), r.stopScrolling(t)
        }
        var c = null,
            u = {
                top: 0,
                left: 0
            },
            d = !1;
        e.event.bind(e.ownerDocument, "selectionchange", function() {
            t.contains(i()) ? d = !0 : (d = !1, l())
        }), e.event.bind(window, "mouseup", function() {
            d && (d = !1, l())
        }), e.event.bind(window, "keyup", function() {
            d && (d = !1, l())
        }), e.event.bind(window, "mousemove", function(e) {
            if (d) {
                var i = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    o = {
                        left: t.offsetLeft,
                        right: t.offsetLeft + t.offsetWidth,
                        top: t.offsetTop,
                        bottom: t.offsetTop + t.offsetHeight
                    };
                i.x < o.left + 3 ? (u.left = -5, r.startScrolling(t, "x")) : i.x > o.right - 3 ? (u.left = 5, r.startScrolling(t, "x")) : u.left = 0, i.y < o.top + 3 ? (u.top = o.top + 3 - i.y < 5 ? -5 : -20, r.startScrolling(t, "y")) : i.y > o.bottom - 3 ? (u.top = i.y - o.bottom + 3 < 5 ? 5 : 20, r.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : n()
            }
        })
    }
    var r = i(6),
        o = i(2),
        a = i(4),
        s = i(7);
    t.exports = function(t) {
        n(t, o.get(t))
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
        function r(i, n) {
            var r = t.scrollTop,
                o = t.scrollLeft,
                a = Math.abs(i),
                s = Math.abs(n);
            if (s > a) {
                if (n < 0 && r === e.contentHeight - e.containerHeight || n > 0 && 0 === r) return !e.settings.swipePropagation
            } else if (a > s && (i < 0 && o === e.contentWidth - e.containerWidth || i > 0 && 0 === o)) return !e.settings.swipePropagation;
            return !0
        }

        function l(e, i) {
            s(t, "top", t.scrollTop - i), s(t, "left", t.scrollLeft - e), a(t)
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

        function h(t) {
            return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
        }

        function f(t) {
            if (h(t)) {
                w = !0;
                var e = d(t);
                m.pageX = e.pageX, m.pageY = e.pageY, v = (new Date).getTime(), null !== g && clearInterval(g), t.stopPropagation()
            }
        }

        function p(t) {
            if (!w && e.settings.swipePropagation && f(t), !b && w && h(t)) {
                var i = d(t),
                    n = {
                        pageX: i.pageX,
                        pageY: i.pageY
                    },
                    o = n.pageX - m.pageX,
                    a = n.pageY - m.pageY;
                l(o, a), m = n;
                var s = (new Date).getTime(),
                    c = s - v;
                c > 0 && (y.x = o / c, y.y = a / c, v = s), r(o, a) && (t.stopPropagation(), t.preventDefault())
            }
        }

        function _() {
            !b && w && (w = !1, e.settings.swipeEasing && (clearInterval(g), g = setInterval(function() {
                return o.get(t) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(g) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(g)
            }, 10)))
        }
        var m = {},
            v = 0,
            y = {},
            g = null,
            b = !1,
            w = !1;
        i ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", p), e.event.bind(t, "touchend", _)) : n && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", p), e.event.bind(t, "pointerup", _)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", p), e.event.bind(t, "MSPointerUp", _)))
    }
    var r = i(6),
        o = i(2),
        a = i(4),
        s = i(7);
    t.exports = function(t) {
        if (r.env.supportsTouch || r.env.supportsIePointer) {
            n(t, o.get(t), r.env.supportsTouch, r.env.supportsIePointer)
        }
    }
}, function(t, e, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        r = i(2),
        o = i(4),
        a = {
            "click-rail": i(53),
            "drag-scrollbar": i(54),
            keyboard: i(55),
            wheel: i(56),
            touch: i(59),
            selection: i(58)
        },
        s = i(57);
    t.exports = function(t, e) {
        t.classList.add("ps");
        var i = r.add(t, "object" === (void 0 === e ? "undefined" : n(e)) ? e : {});
        t.classList.add("ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(e) {
            a[e](t)
        }), s(t), o(t)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(6),
        r = i(8),
        o = i(2),
        a = i(4),
        s = i(7);
    t.exports = function(t) {
        var e = o.get(t);
        e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(r.css(e.scrollbarXRail, "marginLeft")) + n.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(r.css(e.scrollbarYRail, "marginTop")) + n.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), a(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", ""))
    }
}, , , , , , function(t, e, i) {
    "use strict";
    e.a = {
        kty: "RSA",
        n: "t5P2Nmmm7TCeGMx4YKXP-lhdeKpTDIGtqPcgI8CtkKPrsCz51RsD9nstDkSQJycx4Jwbepu2J14OqDYYAU_JcnJTxoDOD2ixk9HlqPkeYj2U7LKfANFnLwXZ_Ug1EjYH6iN6lM_NSbXwNkgWksZvBcADfpjsSAD01TV89Xw-3gU",
        e: "AQAB"
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = i(3),
        o = i(1),
        a = i(0),
        s = i(10),
        l = i(17),
        c = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        u = function() {
            function t(e, i, r) {
                n(this, t), this.api = window.downloads, this._uninitialized = !0, a.Utils.defined(i) || (i = -1), this._tid = i, this.data = [], this.setMediaData(e, r)
            }
            return c(t, [{
                key: "setMediaData",
                value: function(t, e) {
                    var i = this;
                    return new Promise(function(n) {
                        if (!t) return n({
                            model: i,
                            updated: !1
                        }), e && e(), this;
                        Promise.all([t]).then(function(t) {
                            var r = t[0];
                            if (i._uninitialized && 0 === r.length) return i._uninitialized = !1, n({
                                model: i,
                                updated: !0
                            }), void(e && e());
                            i._uninitialized = !1;
                            var o = i.data,
                                s = new Array(o.length),
                                c = o.map(function(t) {
                                    return t.id
                                });
                            r.forEach(function(t) {
                                t.id = t.id || a.Utils.makeId(t);
                                var e = c.indexOf(t.id),
                                    n = void 0; - 1 === e ? (c.push(t.id), n = new l.a(t), o.push(n)) : (e < s.length && (s[e] = !0), n = o[e], n.merge(t)), n._ditem = i.api.item(i._tid, t.id)
                            });
                            for (var u = s.length !== o.length, d = s.length - 1; d >= 0; d--) s[d] || (u = !0, o.splice(d, 1));
                            n({
                                model: i,
                                updated: u
                            }), e && e()
                        })
                    })
                }
            }, {
                key: "getMediaCountByTitle",
                value: function() {
                    var t = this.data;
                    if (0 === t.length) return 0;
                    var e = new Set;
                    return t.forEach(function(t) {
                        e.has(t.title) || e.add(t.title)
                    }), e.size
                }
            }, {
                key: "getMedia",
                value: function(t) {
                    return this.data.filter(function(e) {
                        return e.id === t
                    })[0]
                }
            }, {
                key: "getMediaGroup",
                value: function(t) {
                    return this.data.filter(function(e) {
                        return -1 !== t.indexOf(e.id)
                    })
                }
            }, {
                key: "download",
                value: function(t) {
                    var e = this.getMedia(t);
                    if (e) {
                        var i = {
                            id: e.id,
                            url: e.url,
                            filename: e.getFilename(),
                            referrer: e.referrer,
                            hls: e._hls
                        };
                        void 0 !== e.soundOnly && (i.soundOnly = e.soundOnly, i.resolution = e.resolution || 128), void 0 !== e.quality && (i.quality = e.quality);
                        var n = this.api.download(this._tid, i);
                        return n.then(function(t) {
                            e._ditem = t
                        }), void 0 !== i.soundOnly && i.soundOnly && r.a.log("Download", r.a.DOWNLOAD_SOUND_ONLY), i.filename && i.filename.match(/\.yt_srt$/i) && r.a.log("Download", r.a.DOWNLOAD_SUBTITLES), n
                    }
                }
            }, {
                key: "onChange",
                value: function(t) {
                    this.api.onChange(this._tid, t)
                }
            }, {
                key: "group",
                value: function() {
                    var t = this.sortMedia(this.data),
                        e = this.splitMediaByTitle(t);
                    return e = e.map(this.excludeQualityDuplicates.bind(this)), e.map(this.splitMediaByType.bind(this))
                }
            }, {
                key: "splitMediaByTitle",
                value: function(t) {
                    var e = [];
                    return t.forEach(function(t) {
                        var i = t.title,
                            n = e.find(function(t) {
                                return t.title === i
                            });
                        n ? n.media.push(t) : e.push({
                            media: [t],
                            title: i
                        })
                    }), e
                }
            }, {
                key: "excludeQualityDuplicates",
                value: function(t) {
                    var e = new Set,
                        i = Object.assign({}, t),
                        n = s.b.video.extensions;
                    return i.media = t.media.filter(function(i) {
                        var r = void 0;
                        r = void 0 !== i.resolution ? i.quality + "_" + i.resolution + "_" + i.ext : i.quality + "_" + i.ext;
                        var o = "video" === i.type && t.media.some(function(t) {
                            if (t.quality !== i.quality) return !1;
                            if (t === i) return !1;
                            if ("video" !== t.type) return !1;
                            var e = n.indexOf(t.ext) < n.indexOf(i.ext),
                                r = n.indexOf(t.ext) === n.indexOf(i.ext),
                                o = !i.resolution || t.resolution > i.resolution;
                            return e || r && o
                        });
                        return !e.has(r) && !o && (e.add(r), !0)
                    }), i
                }
            }, {
                key: "splitMediaByType",
                value: function(t) {
                    var e = [];
                    return t.media.forEach(function(t) {
                        var n = t.type,
                            r = e.find(function(t) {
                                return t.type === n
                            });
                        r ? r.media.push(t) : e.push({
                            media: [t],
                            i18n_type: i.i(a.i18n)("media_fields_type_" + n),
                            type: n
                        })
                    }), e = e.sort(function(t, e) {
                        return s.f.indexOf(t.type) < s.f.indexOf(e.type) ? -1 : 1
                    }), t.media = e, t
                }
            }, {
                key: "sortMedia",
                value: function(t) {
                    var e = Array.isArray(t.media) ? t.media : t;
                    return e.forEach(function(e) {
                        var i = t.type || e.type;
                        e.quality = e.quality || o.a.DEFAULT_QUALITY_TYPE, e.sortValues = e.sortValues || {}, e.sortValues.qualityValue || (e.sortValues.qualityValue = 100 * (o.a.getQualityIndexByVideoTitleQuality(e.quality) || 1)), e.sortValues.extensionValue = s.b[i].extensions.indexOf(e.ext) || 0, e.sortValues.totalValue = e.sortValues.qualityValue + e.sortValues.extensionValue
                    }), e = e.sort(function(t, e) {
                        return t.sortValues.totalValue > e.sortValues.totalValue ? -1 : 1
                    })
                }
            }, {
                key: "filterByCommonFields",
                value: function(t, e, i) {
                    var n = this.getMedia(t);
                    return i = i || [], this.data.filter(function(r) {
                        return t !== r.id && e.reduce(function(t, e) {
                            return t && n[e] && r[e] && n[e] === r[e]
                        }, !0) && i.reduce(function(t, e) {
                            return t && n[e] && r[e] && n[e] !== r[e]
                        }, !0)
                    })
                }
            }, {
                key: "getSameQualityMediaFormats",
                value: function(t) {
                    var e = this.filterByCommonFields(t, ["title", "type", "quality"], ["ext"]).map(function(t) {
                        return t.ext && t.ext
                    });
                    return Array.from(new Set(e))
                }
            }, {
                key: "getSameFormatMediaQuality",
                value: function(t) {
                    var e = this.filterByCommonFields(t, ["title", "type", "ext"], ["quality"]).map(function(t) {
                        return t.quality ? o.a.getSizeByQuality(t.quality) : 0
                    });
                    return Array.from(new Set(e))
                }
            }, {
                key: "getAllMediaFormats",
                value: function(t) {
                    return this.filterByCommonFields(t, ["title", "type"]).reduce(function(t, e) {
                        var i = e.ext && e.ext,
                            n = e.quality ? o.a.getSizeByQuality(e.quality) : 0;
                        return i ? (t[i] || (t[i] = []), -1 === t[i].indexOf(n) && t[i].push(n), t) : t
                    }, {})
                }
            }, {
                key: "isOneMedia",
                value: function() {
                    for (var t = this.data, e = {}, i = void 0, n = void 0, r = 0, o = 0; r < t.length && o <= 1; ++r)
                        if (i = t[r], n = i.title, !e[n] && (e[n] = !0, ++o > 1)) return !1;
                    return !0
                }
            }]), t
        }();
    e.a = u
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        function i() {
            for (var t = e.scrollTop, i = -1; i < r - 1 && n[i + 1].top <= t;) i++;
            return -1 !== i && (o !== i && (-1 !== o && (n[o].node.style.position = "static", n[o].placeholder.hidden = !0), n[i].node.style.position = "fixed", n[i].placeholder.hidden = !1, o = i), i !== r - 1 && t + n[i].height > n[i + 1].top ? (n[i].node.style.top = 0 - (t + n[i].height - n[i + 1].top) + "px", n[i].node.classList.contains("pulled") || n[i].node.classList.add("pulled")) : (n[i].node.style.top = "0px", n[i].node.classList.contains("pulled") && n[i].node.classList.remove("pulled")), !1)
        }
        var n = [],
            r = t.length,
            o = -1;
        r < 1 || (e.style.position = "relative", n = t.map(function(t) {
            var e = document.createElement("div");
            return e.style.height = t.offsetHeight + "px", e.hidden = !0, t.parentNode.insertBefore(e, t), {
                node: t,
                top: t.offsetTop,
                height: t.offsetHeight,
                placeholder: e
            }
        }), e.addEventListener("scroll", i, !1))
    }
    e.a = n
}, function(t, e, i) {
    "use strict";

    function n(t) {
        var e = t.match(/\d/g);
        return e ? e.length : 0
    }

    function r(t) {
        var e = t.match(/[A-Za-z]/g);
        return e ? e.length : 0
    }

    function o(t) {
        return t.replace(/xem|phim|clips?|videos?/gi, "").replace(/^\s?-\s?/gi, "").trim()
    }
    e.a = function(t, e) {
        if ("string" != typeof t || "string" != typeof e) return t;
        if ("videoplayback" === t) return o(e);
        var i = t.replace(/[\W+_]/g, ""),
            a = i.length,
            s = n(i),
            l = r(i),
            c = s / a;
        return .99 > c + l / a ? t : c >= .5 ? o(e) : t
    }
}, function(t, e, i) {
    "use strict";
    var n = function() {};
    n.prototype = {
        constructor: n,
        _sendMessage: function(t, e, i) {
            chrome.runtime.sendMessage({
                requestType: "cache",
                method: t,
                params: e
            }, i)
        },
        get: function(t) {
            return new Promise(function(e, i) {
                this._sendMessage("get", {
                    key: t
                }, function(t) {
                    t && "reject" !== t.success ? e(t.data) : i(t)
                })
            }.bind(this))
        },
        put: function(t, e, i) {
            this._sendMessage("put", {
                key: t,
                value: e,
                ttl: i
            })
        },
        delete: function(t) {
            this._sendMessage("delete", {
                key: t
            })
        },
        proxy: function(t, e, i, n) {
            var r = this;
            return new Promise(function(o) {
                this.get(e + n).then(o).catch(function() {
                    new Promise(i.call(t, n)).then(function(t) {
                        r.put(e + n, t)
                    }).then(function(t) {
                        o(t)
                    })
                })
            }.bind(this))
        }
    }, e.a = new n
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(165),
        o = n.Utils.query.bind(n.Utils),
        a = function() {
            n.Utils.g.isSERPHost(location.host) && (this._lastQs = null, this._currentQParams = n.Utils.g.getSearchParams(location.href), this._isLastWasIndex = this._isIndexPage, window.addEventListener("popstate", this._onPopState.bind(this)), window.addEventListener("hashchange", this._onPopState.bind(this)), this._startPolling())
        };
    a.prototype = {
        POLLING_INTERVAL: 200,
        SERP_URL_PATTERN: /[#?&]q=.+/,
        get _isOrganic() {
            return !n.Utils.g.getSearchParams(location.href).tbm
        },
        _clearResults: function() {
            this._currentResults && this._currentResults.destroy(), this._currentResults = null, this._currentQParams = null
        },
        _reportResultsIfQueriesMatch: function() {
            this._currentResults && this._currentResults.isSameSearchAs(this._currentQParams) && (this._currentResults.report(this._isLastWasIndex), this._isLastWasIndex = !1)
        },
        _onPopState: function() {
            if (!this._isOrganic) return void this._clearResults();
            this._currentQParams = n.Utils.g.getSearchParams(location.href), this._reportResultsIfQueriesMatch()
        },
        _onResultsRendered: function() {
            if (!this._isOrganic) return void this._clearResults();
            this._currentResults && this._currentResults.destroy(), this._currentResults = new r.a, this._reportResultsIfQueriesMatch()
        },
        triggeResultClicked: function() {
            if (!this._isOrganic) return void this._clearResults();
            this._currentResults && (this._currentResults.report(this._isLastWasIndex), this._isLastWasIndex = !1)
        },
        get _isDOMStateDifferent() {
            var t = o(".qs");
            return !!t && (t !== this._lastQs && (this._lastQs = t, !0))
        },
        get _areQParamsDifferent() {
            var t = n.Utils.g.getSearchParams(location.href);
            return !this._currentQParams && t.q || t.q !== this._currentQParams.q || t.s != this._currentQParams.s
        },
        get _isResultBlockVisible() {
            var t = o("#search");
            return !!t && "hidden" !== t.style.visibility
        },
        get _isIndexPage() {
            return !this.SERP_URL_PATTERN.test(window.location.href)
        },
        _startPolling: function() {
            setInterval(this._onTimerTick.bind(this), this.POLLING_INTERVAL)
        },
        _onTimerTick: function() {
            this._isResultBlockVisible && this._isDOMStateDifferent && this._onResultsRendered(), this._areQParamsDifferent && this._onPopState(), this._isLastWasIndex || (this._isLastWasIndex = this._isIndexPage)
        }
    }, e.a = new a
}, , , , , , , , , , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        r = i(5),
        o = i(71),
        a = i(96),
        s = i(97),
        l = i(98),
        c = i(30),
        u = i(24),
        d = i(93),
        h = i(95),
        f = i(94);
    i(72);
    i(99), window.downloads = h.a;
    var p = function() {
        this._options = r.a, this._cache = o.a, this._manager = a.a, this._mediaScanner = new s.a(this._manager), this._overlay = l.a, this._options.load().then(this._init.bind(this)), this._pip = c.a, this._exportGlobals(), this._controls = null, this._jwtTool = u.a, this._shouldHideWidget = !1, this._isPanelWindow = !1
    };
    p.prototype = {
        constructor: p,
        _init: function() {
            this.onMediaUpdate = this._onMediaUpdate.bind(this), this.onUnload = this._onUnload.bind(this), this.onMessageReceived = this._onMessageReceived.bind(this), window.onbeforeunload = this.onUnload, this._mediaScanner.on("media_update", this.onMediaUpdate), this._pip.on("tab_detached", this._onPiPDetach.bind(this)), chrome.runtime.onMessage.addListener(this.onMessageReceived), this.doNotShowWidgetByToken().then(function(t) {
                this._shouldHideWidget = t
            }.bind(this)).catch(function(t) {}), this.checkWindowType()
        },
        _exportGlobals: function() {
            window.cache = this._cache, document.addEventListener("DOMContentLoaded", function() {
                window.pageComm = new d.a
            })
        },
        _hasMedia: function(t) {
            return !!n.Utils.flatten(n.Utils.toArray(t)).filter(function(t) {
                return !!(t && t.ids && Array.isArray(t.ids) && n.Utils.flatten(t.ids).length > 0)
            }).length
        },
        _onMediaUpdate: function(t) {
            var e = this._hasMedia(t);
            if (!n.BGUtils.sendMessage({
                    requestType: "media",
                    method: "set_present",
                    params: e
                })) return void this.onUnload();
            this._controls || !document.documentElement || !this.canShowControls || this._shouldHideWidget || this._isPanelWindow || (this._controls = i.i(f.a)(document.documentElement)), this._controls && this._controls.setMediaPlayers(this._manager, t)
        },
        _onMessageReceived: function(t, e, n) {
            var r = null;
            switch (t.requestType) {
                case "get_media":
                    a.a.getMedia().then(function(t) {
                        n(t)
                    });
                    break;
                case "downloads":
                    r = window.downloads.processRequest(t.method, t.params);
                    break;
                case "request.matched":
                    a.a.processRequest(t);
                    break;
                case "restore_tab":
                    this._mediaScanner.start(), this._pip.restore(), this._controls.switchForceHide(!1);
                    break;
                case "page_changed":
                    this._controls.destroy(), this._controls = i.i(f.a)(document.documentElement);
                    break;
                case "hide_playnow_tooltip":
                    this._controls && this._controls.playNowBottomTooltip && this._controls.playNowBottomTooltip.hide()
            }
            return r && r.then(function(t) {
                n({
                    success: r.state === Promise.RESOLVED,
                    data: t
                })
            }), !0
        },
        _onPiPDetach: function(t) {
            this._mediaScanner.pause(), n.BGUtils.sendMessage({
                requestType: "pip",
                method: "detachTab",
                params: t
            }), this._controls && this._controls.playNowBottomTooltip && this._controls.playNowBottomTooltip.hide(), this._controls.switchForceHide(!0)
        },
        _onUnload: function() {
            this._controls && this._controls.destroy(), this._overlay.destroy(), this._mediaScanner.destroy(), this._pip.isPanelMode && n.BGUtils.sendMessage({
                requestType: "pip",
                method: "restorePanelToTab",
                params: null
            })
        },
        doNotShowWidgetByToken: function() {
            return new Promise(function(t) {
                var e = n.Utils.query("[data-savior-token]");
                e || t(!1);
                var i = e.getAttribute("data-savior-token"),
                    r = location.host,
                    o = this._jwtTool.parsePayload(i.split(".")[1]);
                null === o && t(!1), this._jwtTool.checkURLPattern(o.host, r) ? n.BGUtils.sendMessage({
                    requestType: "verify_token",
                    params: {
                        token: i,
                        host: r
                    }
                }, function(e) {
                    t(e.data)
                }) : t(!1)
            }.bind(this))
        },
        checkWindowType: function() {
            this._isPanelWindow = !0, chrome.runtime.sendMessage({
                requestType: "should_show_widget"
            }, function(t) {
                t && "resolve" === t.success && t.data && (this._isPanelWindow = !1)
            }.bind(this))
        },
        get canShowControls() {
            return "file:" !== location.protocol && "" !== location.hostname && "localhost" !== location.hostname
        },
        start: function() {
            n.BGUtils.sendMessage({
                requestType: "media",
                method: "reset_all"
            }), this._mediaScanner.start()
        }
    };
    var _ = new p;
    _.start(), e.default = _
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = void 0,
        s = {
            "4320p60": {
                label: "8K UHD",
                value: 1700
            },
            "4320p": {
                label: "8K UHD",
                value: 1600
            },
            "3072p60": {
                label: "Super HD",
                value: 1500
            },
            "3072p": {
                label: "Super HD",
                value: 1400
            },
            "2160p": {
                label: "Ultra HD",
                value: 1300
            },
            "2160p60": {
                label: "Ultra HD",
                value: 1200
            },
            "1440p60": {
                label: "Quad HD",
                value: 1100
            },
            "1440p": {
                label: "Quad HD",
                value: 1e3
            },
            "1080p60": {
                label: "Full HD",
                value: 900
            },
            "1080p": {
                label: "Full HD",
                value: 800
            },
            "720p60": {
                label: "HD",
                value: 700
            },
            "720p": {
                label: "HD",
                value: 600
            },
            "480p": {
                label: "Standard",
                value: 500
            },
            "360p": {
                label: "Medium",
                value: 400
            },
            "270p": {
                label: "Small",
                value: 300
            },
            "240p": {
                label: "Small",
                value: 200
            },
            "144p": {
                label: "Mobile",
                value: 100
            }
        };
    ! function() {
        function t(t) {
            for (var e = void 0, i = 0; i < p.length; ++i)
                if (e = t.match(p[i])) return e[1];
            return null
        }

        function e() {
            var e = t(location.href);
            if (!e) {
                var i = r.Utils.query(".html5-video-player"),
                    n = c(i);
                n && (e = t(n))
            }
            return e || null
        }

        function l(t) {
            return new Promise(function(e, i) {
                return r.Utils.getYoutubeInfo(_ + t).then(function(t) {
                    return d(e.bind(this), t)
                }).catch(function(t) {
                    return i(t)
                })
            })
        }

        function c(t) {
            var e = t.querySelector("a.ytp-title-link");
            return e ? e.href : null
        }

        function u(t, e) {
            var n = t.player_response;
            if (!n) return null;
            var a = void 0;
            try {
                a = "object" === (void 0 === n ? "undefined" : o(n)) && n.captions ? n : JSON.parse(n)
            } catch (t) {
                return null
            }
            var s = void 0;
            try {
                s = a.captions.playerCaptionsTracklistRenderer.captionTracks
            } catch (t) {
                return null
            }
            if (!s || !s.length) return null;
            var l = s.filter(function(t) {
                    return e.includes(t.languageCode)
                }),
                c = {};
            return l.forEach(function(t) {
                var e = t.languageCode,
                    n = i.i(r.i18n)("subtitles_lang_" + e) || e.toUpperCase(),
                    o = t.baseUrl;
                t.vssId !== "a." + e && (c[n] = o)
            }), c
        }

        function d(t, e) {
            if (!e) return t([]);
            var i = {},
                n = [],
                o = null;
            r.BrFeatures.SUBTITLES && (o = u(e, ["en", "vi", "ko", "ja"]));
            var a = e.formats.map(function(t) {
                var o = t.quality_label || t.resolution;
                o && s[o] && (t.quality = s[o].label);
                var a = s[o] ? s[o].value : null,
                    l = t.container,
                    c = {
                        ext: t.container,
                        filename: e.title,
                        title: e.title,
                        quality: t.quality,
                        url: t.url,
                        type: r.Utils.getMediaType(t.type, l),
                        resolution: o,
                        sortValues: {
                            qualityValue: a
                        }
                    },
                    u = r.UrlUtils.parse(t.url);
                return u.host && (c.altUrl = r.UrlUtils.format(u)), !t.encoding && t.audioEncoding && (i[t.container] = i[t.container] || {
                    audioBitrate: 0
                }, i[t.container].audioBitrate < t.audioBitrate && (i[t.container] = t)), t.audioEncoding || n.push(c), c
            });
            if (n.forEach(function(t) {
                    var e = g[t.ext];
                    if (!i[e] || !i[e].url || !y[e]) return t.url = null, void(t.quality = null);
                    var n = t.url;
                    t.url = {
                        videoUrl: decodeURIComponent(n),
                        audioUrl: decodeURIComponent(i[e].url)
                    }
                }), o) {
                var l = Object.keys(o).map(function(t) {
                    var i = r.UrlUtils.parse(o[t]);
                    return i.ext = "yt_srt", i.i18n_ext = "srt", i.filename = e.title, i.title = e.title, i.quality = t, i.type = "subtitles", i.isSubtitles = !0, i
                });
                a = a.concat(l)
            }
            a = a.filter(function(t) {
                return !!t.url && "audio" !== t.type && !b.includes(t.ext)
            }), a = h(a), t(a)
        }

        function h(t) {
            var e = new Set;
            return t.sort(function(t) {
                return "mp4" === t.ext ? -1 : 1
            }).filter(function(t) {
                var i = t.quality + "_" + t.resolution + "_" + t.ext;
                if (e.has(i)) return !1;
                if ("webm" === t.ext) {
                    var n = t.quality + "_" + t.resolution + "_mp4";
                    if (e.has(n)) return !1
                }
                return e.add(i), !0
            })
        }
        var f = "https:" === location.protocol.toLowerCase() ? "https:" : "http:",
            p = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([^&?]+)/i, /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i],
            _ = f + "//www.youtube.com/watch?v=",
            m = [/^https?:\/\/(?:www\.)?facebook.com\//i],
            v = r.Utils.isMatches(document.location.href, m),
            y = r.BrFeatures.YT,
            g = {
                webm: "webm",
                mp4: "m4a"
            },
            b = ["m4a"],
            w = i.i(n.a)({
                parse: function(t) {
                    return l(t)
                }
            });
        a = i.i(n.b)("youtube", function() {
            var e = this,
                o = [],
                a = [],
                s = void 0,
                l = r.Utils.query('meta[itemprop="isLiveBroadcast"]'),
                u = r.Utils.query('meta[itemprop="endDate"]');
            if (l && "True" === l.content && !u) return o;
            if (r.Utils.query("ytd-live-chat-frame:not([hidden])")) return o;
            if (!r.Utils.query("#player-unavailable:not(.hid)")) {
                s = r.Utils.query(".html5-video-player") || r.Utils.query("#player, #movie_player, #movie_player-html5, #movie_player-flash");
                var d = r.Utils.queryAll('embed[type="application/x-shockwave-flash"]', s);
                if (1 === d.length && (d = i.i(n.d)(d[0])) && (s = d), s) {
                    s = e.makePlayer(s, [], w);
                    var h = t(location.href);
                    if (!h) {
                        var f = c(s.node);
                        f && (h = t(f))
                    }
                    h && (s.ids.push(h), a.push(h))
                }
            }
            var p = r.Utils.query(".channels-video-player, #upsell-video");
            if (p) {
                var _ = p.dataset;
                if (p = e.makePlayer(p, [], w), _) {
                    var m = _.videoId;
                    m && (p.ids.push(m), a.push(m))
                }
                s || (s = p, p = null)
            }
            return r.Utils.queryAll('iframe[src*="youtube"], embed[src*="youtube"]').forEach(function(i) {
                var n = t(i.src);
                n && -1 === a.indexOf(n) && (a.push(n), o.push(e.makePlayer(i, [n], w)))
            }), v && r.Utils.queryAll('a[href*="youtube.com"], a[href*="youtu.be"]').forEach(function(i) {
                var n = t(decodeURIComponent(i.href));
                n && -1 === a.indexOf(n) && (a.push(n), i = null, o.push(e.makePlayer(i, [n], w, {
                    aggressive: !0
                })))
            }), p && p.ids.length && o.splice(0, 0, p), s && s.ids.length && o.splice(0, 0, s), o.push(e.makePlayer(null, this._ids, w)), o
        }, {
            dynamic: !0,
            pip: {
                detach: function(t) {
                    if (this.node.matches("iframe, embed")) return t(this.node), !0;
                    var i = e();
                    if (!i) return !1;
                    var n = "https://www.youtube";
                    n += ".com/embed/" + i + "?showinfo=0&autohide=1&enablejsapi=1";
                    var o = r.Utils.closest(this.node, "video");
                    o.length && (o = o[0], this._videoNode = o, o.currentTime > 0 && (n += "&start=" + Math.floor(o.currentTime)), o.ended || (n += "&autoplay=1"), o.pause()), document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden";
                    var a = document.createElement("iframe");
                    r.Utils.dom.style(a, {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        "z-index": Number.MAX_SAFE_INTEGER - 1
                    }), a.setAttribute("allowfullscreen", !0), a.src = n;
                    var s = document.body.children[0];
                    return s ? document.body.insertBefore(a, s) : document.body.appendChild(a), this._pipNode = a, !0
                },
                restore: function(i) {
                    if (this.node.matches("iframe, embed")) return i(this.node);
                    if (this._pipNode) {
                        var n = this._pipNode && this._pipNode.contentWindow,
                            r = n && n.document.querySelector("video"),
                            o = n && n.document.querySelector("a.ytp-title-link");
                        if (r && o) {
                            e() !== t(o.href) ? location.href = o.href + "#t=" + Math.floor(r.currentTime) : this._videoNode && (this._videoNode.currentTime = r.currentTime, this._videoNode[r.paused ? "pause" : "play"]())
                        }
                        document.body.removeChild(this._pipNode), document.body.style.overflow = "auto", document.documentElement.style.overflow = "auto"
                    }
                }
            }
        }), a.getMoviesById = l
    }(), e.a = a
}, , , , , , , , , , function(t, e, i) {
    "use strict";
    var n = i(172),
        r = function() {
            var t = function() {
                this.port = Math.floor(Math.random() * Math.pow(2, 32)), this.msgId = 0, this._promises = {}, this._initPage(), window.addEventListener("message", this._listener.bind(this))
            };
            return t.prototype = {
                send: function(t) {
                    var e = this;
                    return t = {
                        data: t,
                        id: this.msgId,
                        port: this.port,
                        type: "coc_crx2page"
                    }, new Promise(function(i) {
                        e._promises[e.msgId] = i, e.msgId++, window.postMessage(t, location.origin)
                    })
                },
                _initPage: function() {
                    var t = document.head || document.body;
                    if (t) {
                        var e = document.createElement("script"),
                            i = "(" + n.a.toString() + ")(window," + this.port + ")";
                        e.innerText = i, t.appendChild(e), setTimeout(function() {
                            t.removeChild(e)
                        }, 100)
                    }
                },
                _listener: function(t) {
                    if (t.origin === location.origin && t.data && t.data.port === this.port && "coc_page2crx" === t.data.type) {
                        var e = t.data;
                        try {
                            this._promises[e.id](e.data)
                        } finally {
                            delete this._promises[e.id]
                        }
                    }
                }
            }, t
        }();
    e.a = r
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return (t.createShadowRoot || t.webkitCreateShadowRoot).call(t)
    }

    function r(t, e) {
        for (e = e.parentNode; e && e !== t;) e = e.parentNode;
        return !!e
    }

    function o(t) {
        t = t || {};
        var e = i.i(f.a)("div"),
            r = n(e),
            o = i.i(f.a)("style"),
            a = "";
        (t.styles || chrome.runtime.getManifest().web_accessible_resources || []).forEach(function(t) {
            h.Utils.endsWith(t, ".css") && (a += '@import "' + chrome.runtime.getURL(t) + '";\n')
        }), o.innerHTML = a, r.appendChild(o);
        var s = i.i(f.a)("div", "body");
        return r.appendChild(s), {
            element: e,
            shadowElement: s
        }
    }

    function a(t) {
        function e(t) {
            return -1 !== ["mouseenter", "mouseover", "touchstart", "touchmove"].indexOf(t)
        }

        function i(i) {
            var n = t.getTarget(i.target);
            if (n) return r(n, e(i.type)), !0
        }

        function n(t) {
            var e = o[t.type];
            e && (null !== s && (s = t), e(t) && (t.preventDefault(), t.stopPropagation()))
        }
        var r = h.Utils.debounce(t.onFocus.bind(this), y, !1),
            o = {
                mouseenter: i,
                mouseleave: i
            },
            a = Object.keys(o),
            s = void 0;
        return {
            emitLastEvent: function() {
                var t = s && o[s.type];
                t && t(s), s = null
            },
            attach: function(t) {
                for (var e = a.length - 1; e >= 0; e--) t.addEventListener(a[e], n, !0)
            },
            detach: function(t) {
                for (var e = a.length - 1; e >= 0; e--) t.removeEventListener(a[e], n, !0)
            }
        }
    }

    function s(t, e) {
        for (; e && e !== document;) {
            var i = t.getComputedStyle(e);
            if (i && "fixed" === i.getPropertyValue("position")) return "fixed";
            e = e.parentNode
        }
        return "absolute"
    }

    function l(t) {
        try {
            if (t.matches("object, embed")) {
                var e = t.parentNode && t.parentNode.matches("object") ? t.parentNode : t.querySelector("embed");
                e && e.offsetHeight > t.offsetHeight && (t = e)
            }
            var i = t.ownerDocument.defaultView,
                n = s(i, t),
                r = t.getBoundingClientRect(),
                o = r.top,
                a = r.left;
            "fixed" !== n && (o += i.pageYOffset, a += i.pageXOffset), t.matches("video") && t.controls && t.offsetHeight < 35 && (a += 5, o = o + t.offsetHeight - 35);
            return h.Utils.dom.getOffset(t).top <= g && (o += g), {
                position: n,
                top: o + "px",
                left: a + "px",
                height: r.height + "px",
                width: r.width + "px"
            }
        } catch (t) {
            return null
        }
    }

    function c(t) {
        function e(t) {
            if (t) {
                for (var e = t.parentNode; e;) t = e, e = t.parentNode;
                return t.activeElement
            }
        }

        function n() {
            u.classList.contains("hidden") && p.a.log("PageShown", p.a.PAGE_CONTENT_SHOW_CONTROLS), setTimeout(function() {
                u.classList.remove("hidden")
            }, 0)
        }

        function r() {
            setTimeout(function() {
                if (d.hide) {
                    var t = h.Utils.query(".downloads-multi #downloads", u);
                    t && (t.hidden = !0), u.classList.add("hidden")
                }
            }, v)
        }

        function o() {
            if (d.node) {
                var t = "",
                    e = l(d.node);
                Object.keys(e).forEach(function(i) {
                    t += i + ":" + e[i] + ";"
                }), u.setAttribute("style", t), c(u, d.node)
            }
        }

        function s() {
            h.Utils.isFullscreen() && (d.hide = !0, r())
        }

        function c(t, e) {
            var i = e.clientWidth;
            t && (i < 470 ? t.classList.add("adaptive") : t.classList.remove("adaptive"))
        }
        var u = i.i(f.a)("div", "base overlay");
        u.innerHTML = "&nbsp;", u.classList.add("hidden");
        var d = {
            hide: !0,
            node: null,
            forced: !1
        };
        window.addEventListener("resize", o), document.addEventListener("webkitfullscreenchange", s);
        var _ = a({
            onFocus: function(t, i) {
                if (!d.forced) {
                    var a = void 0;
                    if (!i && (a = e(u)) && a.matches("select")) {
                        if ("o" === t) return;
                        a.blur()
                    }
                    if (!i || !m.a.get("on_page_buttons")) return d.hide = !0, void r();
                    if (d.hide = !1, "o" !== t) {
                        d.node = t.node;
                        var s = t.widget;
                        s && s.isReady() && t.node.offsetParent && (s.attach(u), o(), n())
                    }
                }
            },
            getTarget: function(e) {
                return e ? e === u ? "o" : t.findEntry(e) : e
            }
        });
        return _.attach(u), _.attach(document), {
            attach: function(t) {
                t.appendChild(u), _.emitLastEvent()
            },
            destroy: function() {
                _.detach(document), _.detach(u), window.removeEventListener("resize", o), document.removeEventListener("webkitfullscreenchange", s)
            },
            forceShow: function(e) {
                var i = t.findEntry(e);
                return !(!i || !i.widget.isReady()) && (d.hide = !1, d.node = e, d.forced = !0, i.widget.attach(u), o(), n(), i.widget)
            },
            cancelForced: function() {
                d.hide = !0, d.forced = !1, d.node = null, r()
            }
        }
    }

    function u() {
        this.reset(), this.nodeWithoutPlayer = null
    }

    function d(t) {
        var e = new u,
            i = c(e),
            n = void 0,
            r = new _.a;
        return {
            destroy: function() {
                i && (i.destroy(), i = null), n && (t.removeChild(n.element), n = null), e.reset()
            },
            setMediaPlayers: function(a, s) {
                e.setMediaPlayers(a, s) && !n && (n = o(), t.appendChild(n.element), i.attach(n.shadowElement), h.BrFeatures.PLAY_NOW_BOTTOM_TOOLTIP && (r.init(), r.attach(n.shadowElement)))
            },
            switchForceHide: function(t) {
                void 0 !== t && (n.element.style.display = t ? "none" : "block")
            },
            playNowBottomTooltip: h.BrFeatures.PLAY_NOW_BOTTOM_TOOLTIP ? r : null
        }
    }
    e.a = d;
    var h = i(0),
        f = i(164),
        p = i(3),
        _ = i(149),
        m = i(5),
        v = 1100,
        y = 50,
        g = 26;
    u.prototype = {
        reset: function() {
            this._nodesToMedia = new Map
        },
        findEntry: function(t, e) {
            if (e) return this._nodesToMedia.get(t);
            for (var i = this._nodesToMedia.entries(), n = i.next(); !n.done; n = i.next())
                if (n.value[0] === t || r(n.value[0], t) || n.value[1].coverNodesSet && n.value[1].coverNodesSet.has(t)) return {
                    node: n.value[0],
                    widget: n.value[1].widget
                };
            return null
        },
        setMediaPlayers: function(t, e) {
            var i = 0,
                n = [];
            e = this._removeEmptyPlayers(e), e = this._overlayCase(e);
            var r = this._getNotPipNodes(e);
            e = this._filterDescendant(e, r), e.forEach(function(e) {
                var r = e.node;
                if (!r) return void(e.ids.length && n.push(e));
                e.ids.length || this.nodeWithoutPlayer && this._isNodeStillExist(this.nodeWithoutPlayer) || (this.nodeWithoutPlayer = r), this._nodesToMedia.forEach(function(t, e) {
                    r !== e && (e.contains(r) || r.contains(e)) && this._nodesToMedia.delete(e)
                }.bind(this));
                var o = this._nodesToMedia.get(r),
                    a = o ? o.widget : null,
                    s = this._getTopCoverNodesSet(r);
                a ? s.size && (o.coverNodesSet = s) : (a = new f.b(r, r === this.nodeWithoutPlayer), this._nodesToMedia.set(r, {
                    widget: a,
                    coverNodeSet: s
                }), ++i), a.setMediaData(t, e)
            }.bind(this));
            var o = this._nodesToMedia.get(this.nodeWithoutPlayer);
            return o = o ? o.widget : null, this.nodeWithoutPlayer && o && n.forEach(function(e) {
                var i = o.getWidgetPlayerName();
                (e.name === i || "pip" === i && !e.opts.aggressive) && (e.node = e.node ? e.node : this.nodeWithoutPlayer, o.setMediaData(t, e))
            }.bind(this)), !!i
        },
        _removeEmptyPlayers: function(t) {
            return t[0].filter(function(t) {
                return t.node || t.ids.length && h.Utils.flatten(t.ids).length
            })
        },
        _getNotPipNodes: function(t) {
            return t.filter(function(t) {
                return "pip" !== t.name && t.node
            }).map(function(t) {
                return t.node
            })
        },
        _filterDescendant: function(t, e) {
            return t.filter(function(t) {
                var i = t.node;
                return !("pip" === t.name && (-1 !== e.indexOf(i) || this._checkDescendant(e, i)))
            }.bind(this))
        },
        _checkDescendant: function(t, e) {
            var i = !1;
            return t.forEach(function(t) {
                (t.contains(e) || e.contains(t)) && (i = !0)
            }), i
        },
        _getTopCoverNodesSet: function(t) {
            var e = new Set,
                i = t.getBoundingClientRect(),
                n = i.width,
                r = i.height;
            return [{
                x: i.left + n / 4,
                y: i.bottom - r / 4
            }, {
                x: i.left + n / 4,
                y: i.bottom - .75 * r
            }, {
                x: i.left + .75 * n,
                y: i.bottom - .75 * r
            }].forEach(function(i) {
                var n = document.elementFromPoint(i.x, i.y);
                n !== t && e.add(n)
            }), e
        },
        _overlayCase: function(t) {
            var e = [];
            return t.forEach(function(t) {
                var i = t.node;
                i && (i.parentNode instanceof Node && i.parentNode.matches("object") && (i = i.parentNode), (location.host.match(/^([\w\d_-]+\.)*fptplay.net$/) && i.matches("object") || location.host.match(/^([\w\d_-]+\.)*vnexpress.net$/) && i.matches("video#media-video, video.video-js") || location.host.match(/^([\w\d_-]+\.)*nhaccuatui.com$/) && i.matches("video#videonctPlayer")) && (t.node = i.parentNode)), e.push(t)
            }), e
        },
        _isNodeStillExist: function(t) {
            for (var e = t, i = !1, n = void 0; n = e.parentNode;) {
                if (n === document) {
                    i = !0;
                    break
                }
                e = n
            }
            return i
        }
    }
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = this;
        t._callbacks = [], t._data = {}, t._media2id = {}
    }
    var r = i(0);
    n.prototype = {
        processRequest: function(t, e) {
            var i = this;
            switch (t) {
                case "created":
                    i._onCreated(e);
                    break;
                case "erased":
                    delete i._data[e];
                    break;
                case "changed":
                    i._onChange(e)
            }
        },
        _sendMessage: function(t, e, i) {
            chrome.runtime.sendMessage({
                requestType: "downloads",
                method: t,
                params: e
            }, i)
        },
        _onCreated: function(t) {
            var e = this;
            if (t) {
                var i = t.item.id;
                e._data[i] = t, e._media2id[t.mid] = i
            }
        },
        _onChange: function(t) {
            var e = this,
                i = e._data[t.id];
            if (i) {
                var n = i.item;
                for (var o in t) "id" !== o && (n[o] = t[o].current);
                r.Utils.call(e._callbacks, e, i.mid, n, t)
            }
        },
        onChange: function(t, e) {
            this._callbacks.push(e)
        },
        download: function(t, e) {
            var i = this,
                n = e.id;
            return new Promise(function(t, r) {
                this._sendMessage("download", e, function(e) {
                    var o = e.data;
                    e.success && "reject" !== e.success ? (i._data[o.id] = {
                        item: o,
                        mid: n
                    }, i._media2id[n] = o.id, t(o)) : r(o)
                })
            }.bind(this))
        },
        item: function(t, e) {
            var i = this,
                n = i._media2id[e],
                r = i._data[n];
            return r && r.item
        },
        pause: function(t) {
            this._sendMessage("pause", t)
        },
        resume: function(t) {
            this._sendMessage("resume", t)
        },
        cancel: function(t) {
            this._sendMessage("cancel", t)
        },
        open: function(t) {
            this._sendMessage("open", t)
        },
        show: function(t) {
            this._sendMessage("show", t)
        }
    }, e.a = new n
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        Array.prototype.push.apply(t, e)
    }

    function r(t) {
        return new Promise(function(e) {
            var n = t.map(function(t) {
                return void 0 !== t.promise ? t.promise : t
            });
            Promise.all(n).then(function() {
                var t = i.i(a.a)(),
                    n = [];
                o.Utils.flatten(Array.from(arguments)).forEach(function(e) {
                    e && (s.a.isValidData(e) || e.force) && (/&\w+;/.exec(e.title) && (e.title = o.Utils.unescapeHTML(e.title)), e.referrer = e.referrer || location.href, !e.title && t && t.test(e) && (e.title = t.title), n.push(e))
                }), e(n)
            })
        })
    }
    var o = i(0),
        a = i(145),
        s = i(17),
        l = i(151),
        c = i(83),
        u = i(160),
        d = i(152),
        h = i(163),
        f = i(154),
        p = i(159),
        _ = i(150),
        m = i(155),
        v = i(156),
        y = i(157),
        g = i(153),
        b = i(162),
        w = i(161),
        E = i(158),
        T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        S = function() {
            this._providers = [new l.a, new c.a, new u.a, new d.a, new h.a, new f.a, new p.a, new _.a, new m.a, new v.a, new y.a, new g.a, new b.a, new w.a, new E.a]
        };
    S.prototype = {
        constructor: S,
        processRequest: function(t) {
            for (var e = t.name, i = 0; i < this._providers.length; ++i) {
                var n = this._providers[i];
                if (n.name === e && n.processRequest) {
                    n.processRequest(t.result);
                    break
                }
            }
        },
        getMedia: function(t) {
            var e = t || this._players;
            if (!e) return new Promise(function(t, e) {
                e([])
            });
            var i = [];
            e.forEach(function(t) {
                n(i, t.getMedia())
            });
            var a = this;
            return new Promise(function(t) {
                r(i).then(function(e) {
                    if (o.BrFeatures.SOUND_ONLY && e.length) {
                        var i = a.createMP3Resources(e);
                        e = e.concat(i);
                        var n = o.Utils.splitMediaSourcesByTitle(e),
                            r = [];
                        n.forEach(function(t) {
                            r = r.concat(t)
                        }), e = r
                    }
                    t(e)
                }.bind(this))
            })
        },
        createMP3Resources: function(t) {
            function e(t, e) {
                var i = parseInt(e),
                    n = t.filter(function() {
                        return !0
                    }),
                    r = t.filter(function(t) {
                        return "mp4" === t.ext
                    });
                r.length && (n = r);
                var o = n.filter(function(t) {
                        return t.quality && "full hd" === t.quality.toLowerCase()
                    }),
                    a = n.filter(function(t) {
                        return t.quality && "hd" === t.quality.toLowerCase()
                    }),
                    s = n.filter(function(t) {
                        return t.quality && ["normal", "medium", "standard"].includes(t.quality.toLowerCase())
                    });
                switch (i) {
                    case 320:
                        o.length ? n = o : a.length ? n = a : s.length && (n = s);
                        break;
                    case 128:
                    default:
                        s.length ? n = s : a.length ? n = a : o.length && (n = o)
                }
                var l = n.filter(function(t) {
                    return "object" === T(t.url) && t.url.audioUrl
                });
                return l.length && (n = l), n[0]
            }
            var i = function(t) {
                    return t.filter(function(t) {
                        return "video" === t.type && ("object" === T(t.url) && t.url.audioUrl || "string" == typeof t.url)
                    })
                }(t),
                n = [{
                    bitrate: "128kbps",
                    name: "Medium",
                    qualityValue: 100
                }, {
                    bitrate: "320kbps",
                    name: "High",
                    qualityValue: 200
                }],
                r = [];
            return i.length ? (o.Utils.splitMediaSourcesByTitle(i).forEach(function(t) {
                var i = n.map(function(i) {
                    var n = e(t, i.bitrate),
                        r = Object.assign({}, n);
                    return r.url = r.url.audioUrl || r.url, r.ext = "mp3", r.soundOnly = !0, r.quality = i.name, r.resolution = i.bitrate, r.type = "audio", r.sortValues = {
                        qualityValue: i.qualityValue
                    }, r
                });
                r = r.concat(i)
            }), r) : r
        },
        getMediaForPlayer: function(t) {
            return r(t.getMedia())
        },
        getMediaPlayers: function() {
            var t = [];
            return this._providers.forEach(function(e) {
                n(t, e.getMediaPlayers())
            }), this._players = t, t
        }
    }, e.a = new S
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(38),
        o = function(t) {
            this._manager = t, this._timeout = null, this._started = !1, this._paused = !1, this._pollCallback = this._poll.bind(this)
        };
    o.prototype = {
        RECHECK_PERIOD: 3e3,
        _init: function() {
            document.addEventListener("webkitvisibilitychange", this._pollCallback, !1)
        },
        _getPlayerNodes: function(t) {
            for (var e, i = [], n = t.length; e = t[--n];) e.node && e.ids.length && i.push(e.node);
            return i
        },
        _poll: function() {
            if (clearTimeout(this._timeout), !this._paused && !document.webkitHidden) {
                var t = this._manager.getMediaPlayers(),
                    e = t.map(function(t) {
                        return new Promise(function(e) {
                            Promise.all(t.ids).then(function(i) {
                                t.ids = [], i && i.length && n.Utils.flatten(i).length && (t.ids = t.ids.concat(i)), e(t)
                            })
                        })
                    });
                Promise.all(e).then(function() {
                    var e = n.Utils.toArray(arguments),
                        i = this._getPlayerNodes(t);
                    this.emit("media_update", e, i), this._timeout = setTimeout(this._pollCallback, this.RECHECK_PERIOD)
                }.bind(this))
            }
        },
        start: function() {
            this._started ? this._paused && (this._paused = !1, this._poll()) : (this._init(), this._poll(), this._started = !0)
        },
        pause: function() {
            clearTimeout(this._timeout), this._paused = !0
        },
        destroy: function() {
            clearTimeout(this._timeout), document.removeEventListener("webkitvisibilitychange", this._pollCallback, !1)
        }
    }, r(o.prototype), e.a = o
}, function(t, e, i) {
    "use strict";

    function n() {
        this._init()
    }
    var r = i(0);
    n.prototype = {
        STYLE: {
            background: "#000000",
            position: "fixed",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px",
            opacity: .6,
            zIndex: 2147483647
        },
        _init: function() {
            var t = document.createElement("savior:overlay");
            r.Utils.dom.style(t, this.STYLE), this._overlay = t, this._warp = document.createDocumentFragment(), this._styleElement = document.createElement("style"), this._styleElement.innerHTML = "body { -webkit-filter: blur(3px)!important; }", t.addEventListener("mouseup", this.hide.bind(this), !0), t.addEventListener("mousedown", this.hide.bind(this), !0), this._port = null, this._onConnectCallback = this._onConnect.bind(this), this._onDisconnectCallback = this._onDisconnect.bind(this), chrome.runtime.onConnect.addListener(this._onConnectCallback)
        },
        _onConnect: function(t) {
            this._port = t, "overlay" === t.name && (this.show(), t.onDisconnect.addListener(this._onDisconnectCallback))
        },
        _onDisconnect: function() {
            this.hide(), this._port && this._port.onDisconnect.removeListener(this._onDisconnectCallback), this._port = null
        },
        hide: function(t) {
            this._warp && (t && t.stopPropagation && (t.stopPropagation(), t.preventDefault()), this._warp.appendChild(this._overlay), this._warp.appendChild(this._styleElement))
        },
        show: function() {
            document.body.appendChild(this._overlay), document.head.appendChild(this._styleElement)
        },
        destroy: function() {
            this.hide(), this._port && this._port.onConnect.removeListener(this._onConnectCallback), this._port = null, this._styleElement = null, this._overlay = null, this._warp = null
        }
    }, e.a = new n
}, function(t, e) {}, , , , , , function(t, e, i) {
    "use strict";
    var n, r = i(107),
        o = i(114),
        a = i(110),
        s = i(117);
    n = t.exports = function(t, e) {
        var i, n, a, l, c;
        return arguments.length < 2 || "string" != typeof t ? (l = e, e = t, t = null) : l = arguments[2], null == t ? (i = a = !0, n = !1) : (i = s.call(t, "c"), n = s.call(t, "e"), a = s.call(t, "w")), c = {
            value: e,
            configurable: i,
            enumerable: n,
            writable: a
        }, l ? r(o(l), c) : c
    }, n.gs = function(t, e, i) {
        var n, l, c, u;
        return "string" != typeof t ? (c = i, i = e, e = t, t = null) : c = arguments[3], null == e ? e = void 0 : a(e) ? null == i ? i = void 0 : a(i) || (c = i, i = void 0) : (c = e, e = i = void 0), null == t ? (n = !0, l = !1) : (n = s.call(t, "c"), l = s.call(t, "e")), u = {
            get: e,
            set: i,
            configurable: n,
            enumerable: l
        }, c ? r(o(c), u) : u
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function() {}
}, function(t, e, i) {
    "use strict";
    t.exports = i(108)() ? Object.assign : i(109)
}, function(t, e, i) {
    "use strict";
    t.exports = function() {
        var t, e = Object.assign;
        return "function" == typeof e && (t = {
            foo: "raz"
        }, e(t, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }), t.foo + t.bar + t.trzy === "razdwatrzy")
    }
}, function(t, e, i) {
    "use strict";
    var n = i(111),
        r = i(116),
        o = Math.max;
    t.exports = function(t, e) {
        var i, a, s, l = o(arguments.length, 2);
        for (t = Object(r(t)), s = function(n) {
                try {
                    t[n] = e[n]
                } catch (t) {
                    i || (i = t)
                }
            }, a = 1; a < l; ++a) e = arguments[a], n(e).forEach(s);
        if (void 0 !== i) throw i;
        return t
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        return "function" == typeof t
    }
}, function(t, e, i) {
    "use strict";
    t.exports = i(112)() ? Object.keys : i(113)
}, function(t, e, i) {
    "use strict";
    t.exports = function() {
        try {
            return Object.keys("primitive"), !0
        } catch (t) {
            return !1
        }
    }
}, function(t, e, i) {
    "use strict";
    var n = i(37),
        r = Object.keys;
    t.exports = function(t) {
        return r(n(t) ? Object(t) : t)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(37),
        r = Array.prototype.forEach,
        o = Object.create,
        a = function(t, e) {
            var i;
            for (i in t) e[i] = t[i]
        };
    t.exports = function(t) {
        var e = o(null);
        return r.call(arguments, function(t) {
            n(t) && a(Object(t), e)
        }), e
    }
}, function(t, e, i) {
    "use strict";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        return t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(37);
    t.exports = function(t) {
        if (!n(t)) throw new TypeError("Cannot use null or undefined");
        return t
    }
}, function(t, e, i) {
    "use strict";
    t.exports = i(118)() ? String.prototype.contains : i(119)
}, function(t, e, i) {
    "use strict";
    var n = "razdwatrzy";
    t.exports = function() {
        return "function" == typeof n.contains && (!0 === n.contains("dwa") && !1 === n.contains("foo"))
    }
}, function(t, e, i) {
    "use strict";
    var n = String.prototype.indexOf;
    t.exports = function(t) {
        return n.call(this, t, arguments[1]) > -1
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";

    function n(t, e, i, n) {
        return {
            match: function(e) {
                if (t.filename && t.filename !== e.filename) return !1;
                var i = e.host;
                if (!i || e.title) return !1;
                if (!t.hosts) return !0;
                for (var n = t.hosts.length - 1; n >= 0; n--)
                    if (s.Utils.endsWith(i, t.hosts[n])) return !0;
                return !1
            },
            location: Array.isArray(e) ? e : [e],
            selector: i,
            auxSelector: n
        }
    }

    function r(t, e, i) {
        return n({
            hosts: [".googlevideo.com", "docs.google.com"],
            filename: "videoplayback"
        }, t, e, i)
    }

    function o(t, e) {
        return r(t, "title", e)
    }

    function a() {
        var t = location.href;
        if (!d.test(t)) return null;
        t = t.replace(d, "");
        for (var e = void 0, i = void 0, n = 0; n < l.length; ++n)
            if (i = l[n], s.Utils.isMatches(t, i.location)) {
                try {
                    var r = s.Utils.queryAll(i.selector);
                    if (r.length ? e = r.pop().textContent : (e = s.Utils.query("title").textContent, i.selector = "title"), "title" === i.selector && (e = e.replace(c, "").replace(u, "")), i.auxSelector) {
                        var o = s.Utils.query(i.auxSelector).textContent.trim();
                        o && (e += " (" + o + ")")
                    }
                    e = e.replace(/\s+/g, " ").trim()
                } catch (t) {}
                if (e) return {
                    title: e,
                    test: i.match
                }
            }
        return t.match(/^fptplay\.net/i) ? {
            title: null,
            test: function(t) {
                var e = t.pathname.split("/"),
                    i = e.length - 1,
                    n = e[i];
                return "chunklist.m3u8" === n && i > 0 && (n = e[i - 1]), n && (this.title = n), !0
            }
        } : null
    }
    e.a = a;
    var s = i(0),
        l = [n({
            hosts: ["ustream.tv"]
        }, /^ustream.tv\/recorded\/([0-9]+)/i, "#ViewerContent h2"), n({
            hosts: ["yan.vn"]
        }, /^yan\.vn/i, 'title, [role="complementary"] h3'), n({
            hosts: ["vcdn.vn", ".googlevideo.com", "docs.google.com"]
        }, /^phim22\.com/i, "title"), n({
            hosts: ["olivia24.com"]
        }, /^olivia24\.com/, "h1.visible-lg.visible-md"), n({}, /vipphim\.net/, "title"), n({}, /kenh14\.vn/, "h1.title"), n({}, /vtv\.vn/, "h1.news-title,h1.video-title"), n({}, /dantri\.com\.vn/, "#video-title"), n({
            hosts: [".memeclip.com"]
        }, /nguoiduatin\.vn/, "title"), r(/^phim3s.net\/phim/i, "h2.title a", ".serverlist .server li a.active"), r(/^thegioiphim\.eu\/movie-episode-full\.php/i, ".category-main"), r(/^hayghe\.com\/xem-phim/i, "#tit_player"), r(/^phim14\.net\/xem-phim/i, ".blocktitle h1 a", ".server_item .active a"), r(/^phimnhanh\.net\/movie/i, "h1 > a", ".epicurrent"), r(/^xemnghe\.com\/phim/i, "h1"), r(/^phimhd\.vn\/xem-phim/i, "h1.title", "a.playing"), o(/^phimmoi\.net\/phim/i, ".episode-link.active"), o(/^phimtv\.vn\/xem-phim/i, "a.playing"), n({
            hosts: ["203.162.121.25:88", "110.164.180.35", "130.211.247.87"]
        }, /^m-viet\.com/i, "h1"), n({
            hosts: ["memeclip.com"]
        }, /^meme\.vn/i, "h1"), n({
            hosts: ["memeclip.com"]
        }, /^doisongphapluat\.com/, "title"), n({}, /^keeng\.vn\/video\//, "title"), n({}, /^vlxx\.tv\/video/, "title"), o(/phim/i)],
        c = /^((xem )?phim)|(video:)/i,
        u = /(-? picasaweb( \d+)?)|(\| server .*)?$/i,
        d = /^https?:\/\/(www\.)?/i
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(16),
        o = function() {
            this._nodes = new Set([]), r.a.check(window.location.href, "pip") && (this.checkPage = n.Utils.noop)
        };
    o.prototype = {
        _MARK_PIP_NODES_: !1,
        MIN_PROPORTION: 1,
        MAX_PROPORTION: 3,
        MEDIA_SELECTOR: "embed, object, iframe, video",
        FULLSCREENABLE_NODES_SELECTOR: 'embed[allowfullscreen="true"], iframe[allowfullscreen], video',
        _getMediaSize: function(t) {
            return t.offsetWidth * t.offsetHeight
        },
        _isVideoProportion: function(t, e) {
            return t >= e * this.MIN_PROPORTION && t <= e * this.MAX_PROPORTION
        },
        _isLargeEnough: function(t) {
            return t > 240
        },
        _isChildOf: function(t, e) {
            for (var i = !1; t && t.tagName && "body" !== t.tagName.toLowerCase();) {
                if (e.has(t)) {
                    i = !0;
                    break
                }
                t = t.parentNode
            }
            return i
        },
        _isBanned: function(t) {
            var e = !1,
                i = t.querySelector("embed");
            return i && (e = r.a.check(i)), e || r.a.check(t)
        },
        _isFullscreenable: function(t) {
            var e = !t.matches(this.MEDIA_SELECTOR) && n.Utils.queryAll(this.MEDIA_SELECTOR, t);
            if (e && e.reduce(function(t, e) {
                    return t || this._isFullscreenable(e)
                }.bind(this), !1)) return !0;
            if (t.matches(this.FULLSCREENABLE_NODES_SELECTOR) || r.a.check(t, "pip-allowfullscreen-false")) return !0;
            if ("OBJECT" === t.tagName) {
                return !!n.Utils.queryAll('param[value="true"]', t).filter(function(t) {
                    return t.name && "allowfullscreen" === t.name.toLowerCase()
                }).length
            }
            return !1
        },
        isVideoNode: function(t) {
            var e = n.Utils.dom.getEmbedSize(t),
                i = e.width,
                r = e.height;
            return this._isLargeEnough(i, r) && this._isVideoProportion(i, r) && this._isFullscreenable(t) && this._isVideoNodeContainsSource(t) && !this._isBanned(t)
        },
        _isVideoNodeContainsSource: function(t) {
            return "video" !== t.tagName.toLowerCase() || !(!t.attributes.src && !t.querySelector("source"))
        },
        _findVideos: function() {
            if (!r.a.check(location.href, "pip"))
                for (var t, e = n.Utils.queryAll(this.MEDIA_SELECTOR), i = 0, o = e.length; i < o; i++) {
                    t = e[i];
                    var a = t.querySelector("embed");
                    this._isChildOf(t, this._nodes) || a && this._isChildOf(a, this._nodes) || !this.isVideoNode(t) || t.dataset.linkSaviorIgnore || this._nodes.add(t)
                }
        },
        markCandidate: function(t) {
            if (this._MARK_PIP_NODES_ && !t.__hasOverlay) {
                var e = n.Utils.dom.getOffset(t),
                    i = {
                        position: "absolute",
                        background: "linear-gradient(135deg, #000 25%, transparent 25%) -50px 0,linear-gradient(225deg, #000 25%, transparent 25%) -50px 0,linear-gradient(315deg, #000 25%, transparent 25%),linear-gradient(45deg, #000 25%, transparent 25%)",
                        "background-size": "20px 20px",
                        "background-color": "#EC173A",
                        opacity: "0.5",
                        "pointer-events": "none",
                        "z-index": Number.MAX_SAFE_INTEGER - 1,
                        top: e.top + "px",
                        left: e.left + "px",
                        width: t.offsetWidth + "px",
                        height: t.offsetHeight + "px"
                    },
                    r = document.createElement("div");
                n.Utils.dom.setStyleAttr(r, i), document.body.appendChild(r), t.__hasOverlay = !0
            }
        },
        checkPage: function(t) {
            return this._nodes.clear(), this._nodes = new Set(t), this._findVideos(), Array.from(this._nodes)
        }
    }, e.a = o
}, function(t, e, i) {
    "use strict";
    var n = i(0);
    ! function() {
        var t = {
            width: 640,
            height: 480
        };
        location.host.match(/^(?:[\w\d_-]+\.)*coccoc.com$/) && document.addEventListener("click", function(e) {
            if (e.target && e.target.matches("a[x-coccoc-pip-url]")) {
                var i = e.target,
                    r = i.getAttribute("x-coccoc-pip-url"),
                    o = i.getAttribute("x-coccoc-pip-size"),
                    a = i.hasAttribute("x-coccoc-keep-size"),
                    s = o && /^(\d+)x(\d+)/.exec(o);
                o = s ? {
                    width: +s[1],
                    height: +s[2]
                } : t;
                var l = {
                    url: r,
                    width: o.width,
                    height: o.height
                };
                a && (l.isAds = !0), n.BGUtils.sendMessage({
                    requestType: "pip",
                    method: "pipUrl",
                    params: l
                }), e.preventDefault(), e.stopPropagation()
            }
        })
    }()
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        o = function() {
            function t() {
                n(this, t), this.hostMapping = {
                    "24h.com.vn": ".media-player",
                    "phimmoi.net": ".media-player",
                    "clipvuivn.com": "#video-js",
                    "kenhvideo.com": ".jwplayer",
                    "chimsedinang.com": "#clh-vid-video",
                    "phimnhanh.net": "#player",
                    "eva.vn": ".zPlayer_mainContainer"
                }
            }
            return r(t, [{
                key: "hasSpecialSupport",
                value: function() {
                    return Object.keys(this.hostMapping).some(function(t) {
                        return window.location.host.includes(t)
                    })
                }
            }, {
                key: "getNode",
                value: function(t) {
                    t = t || window.location.host;
                    var e = t.replace("www.", ""),
                        i = this.hostMapping[e];
                    return i ? document.querySelector(i) : null
                }
            }]), t
        }();
    e.a = new o
}, function(t, e, i) {
    "use strict";

    function n() {
        this.node = null, this.isShown = !1, this.playCallback = null
    }
    var r = i(3),
        o = i(0),
        a = i(5),
        s = i(13),
        l = i.n(s);
    n.prototype = {
        constructor: n,
        init: function() {
            if (!this.node) {
                var t = document.createElement("div");
                t.innerHTML = l.a.render(a.a.get("template-tooltip-play-now-bottom"), {
                    i18n_play_now: i.i(o.i18n)("play_now_play_now"),
                    i18n_play_text: i.i(o.i18n)("play_now_click_to_play"),
                    i18n_play_not_show: i.i(o.i18n)("play_now_do_not_show")
                }), this.node = t.firstElementChild, this._addListeners(), chrome.runtime.onMessage.addListener(function(t) {
                    "widget" === t.requestType && "new_download" === t.method && this._processNewDownload()
                }.bind(this))
            }
        },
        _addListeners: function() {
            this.node.addEventListener("click", function(t) {
                switch (t.target.id) {
                    case "close-play-now-tooltip-bottom":
                        this.hide();
                        break;
                    case "play-now-not-show-check-bottom":
                        var e = t.target.checked;
                        a.a.set("hide_play_now_tooltip_bottom", e), e && r.a.log("PlayNow", r.a.PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN);
                        break;
                    default:
                        t.target.matches('label[for="play-now-not-show-check-bottom"]') || (this._playVideo(), this.hide())
                }
            }.bind(this))
        },
        _processNewDownload: function() {
            this.isShown && this.hide()
        },
        attach: function(t) {
            t.appendChild(this.node), setTimeout(function() {
                this.node.removeAttribute("hidden")
            }.bind(this), 0)
        },
        show: function(t) {
            a.a.get("hide_play_now_tooltip_bottom") || (this.node.classList.add("tooltip-shown"), this.isShown = !0, this._notifyBgScript(), "function" == typeof t && (this.playCallback = t), r.a.log("PlayNow", r.a.PLAY_NOW_TOOLTIP_BOTTOM_SHOWN))
        },
        _playVideo: function() {
            "function" == typeof this.playCallback && this.playCallback()
        },
        _notifyBgScript: function() {
            chrome.runtime.sendMessage({
                requestType: "downloads",
                method: "bottom_tooltip_shown"
            })
        },
        hide: function() {
            this.isShown && (this.node.classList.remove("tooltip-shown"), this.isShown = !1, r.a.log("PlayNow", r.a.PLAY_NOW_TOOLTIP_BOTTOM_CLOSED))
        }
    }, e.a = n
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(1),
        o = i(0),
        a = void 0;
    ! function() {
        function t(t) {
            t = t || {};
            try {
                var i = void 0;
                switch (t.tagName) {
                    case "IFRAME":
                        i = t.src.match(e);
                        break;
                    case "PARAM":
                        i = t.getAttribute("value").match(l);
                        break;
                    default:
                        i = location.pathname.match(s)
                }
                return (i || [])[1]
            } catch (t) {
                return
            }
        }
        var e = /https?:\/\/clip\.vn\/embed\/([0-9a-z_-]+)/i,
            s = /\/watch\/[^,]+,([0-9a-z_-]+)\/?$/i,
            l = /(?:^|&)id=([0-9a-z_-]+)/i,
            c = /([^.]+\.)*clip\.vn/i,
            u = i.i(n.a)({
                request: {
                    method: "POST",
                    url: function(t) {
                        return "http://clip.vn/movies/nfo/" + t
                    },
                    params: function() {
                        return {
                            referrer: encodeURIComponent(btoa(location.href)),
                            onsite: "clip"
                        }
                    },
                    headers: function() {
                        return {
                            "X-REFERRER": location.href,
                            "Content-type": "application/x-www-form-urlencoded"
                        }
                    }
                },
                parse: function(t, e) {
                    var i = o.Utils.xmlParser.parseFromString(e, "text/xml"),
                        n = i.querySelector("ClipInfo title");
                    return o.Utils.queryAll("ClipInfo enclosure", i).map(function(t) {
                        var e = t.getAttribute("url"),
                            i = o.UrlUtils.parse(e),
                            a = t.getAttribute("quality");
                        return i.type = "video", n && (i.title = n.textContent), i.quality = r.a.getClipvnQuality(a), i
                    })
                }
            });
        a = i.i(n.b)("clipvn", function() {
            function e(t, e) {
                t && -1 === r.indexOf(t) && (r.push(t), n.push(i.makePlayer(e, [t], u)))
            }
            var i = this,
                n = [],
                r = [];
            return location.hostname.match(c) && e(t(), o.Utils.query("#player_wrapper object")), o.Utils.queryAll('param[name="flashvars"][value*="clip.vn"], iframe[src*="clip.vn"]').forEach(function(i) {
                e(t(i), i)
            }), n
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return !!t && s.a.check(t)
    }
    var r = i(9),
        o = i(0),
        a = i(10),
        s = i(16),
        l = i(17),
        c = i(70),
        u = i(1),
        d = void 0;
    ! function() {
        function t(t) {
            return o.Utils.isMatches(t, a.d)
        }
        var e = i.i(r.a)({
            request: {
                method: "GET",
                url: function(t) {
                    return i.i(a.c)(t.ext) ? t.url : null
                }
            },
            parse: function(t) {
                return t.quality || (t.quality = u.a.DEFAULT_QUALITY_TYPE), "number" == typeof t.size && (t.size = o.Utils.beautifyFileSize(t.size)), [t]
            }
        });
        d = i.i(r.b)("default", function() {
            var a = location.host,
                s = [];
            if (t(a)) return s;
            if ("vetv.vn" === a) {
                if (!o.Utils.queryAll(".livestream>#player").length) return s
            }
            var d = o.Utils.queryAll("[src]");
            d = d.filter(function(t) {
                return t.tagName && !["script", "img"].includes(t.tagName.toLocaleLowerCase())
            });
            for (var h = [], f = 0, p = d.length; f < p; ++f) {
                var _ = d[f],
                    m = _.src,
                    v = o.UrlUtils.getMediaType(m);
                if (v && _.getAttribute("src")) {
                    var y = o.UrlUtils.parse(m);
                    n(y.host) || (m.includes("videoplayback") && m.includes("mp4") && (y.ext = "mp4"), y.type = v, l.a.isValidData(y) && (y.filename = i.i(c.a)(y.filename, document.title), _ = i.i(r.d)(_), y.quality = u.a.DEFAULT_QUALITY_TYPE, _ ? s.push(this.makePlayer0(_, [y], e)) : h.push(y)))
                }
            }
            return h.length && s.push(this.makePlayer(null, h, e)), this._ids.length && s.push(this.makePlayer0(null, this._ids, e)), s
        }, {
            dynamic: !0
        }), s.a.check(location.href, "download") && (d.prototype.processRequest = o.Utils.noop)
    }(), e.a = d
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(1),
        o = i(9),
        a = void 0;
    ! function() {
        function t(t, e, i) {
            var o = n.UrlUtils.parse(t);
            return o.type = "video", o.title = e || o.title, o.quality = r.a.getFacebookQuality(i), o
        }

        function e(t) {
            var e = f.exec(t);
            return e = e && e.length ? e[0].replace(f, "$1") : null
        }

        function s(t) {
            var e = t.parentNode.querySelectorAll('a[href^="/"]');
            if (e && /\/videos\/\d+\/?$/.test(e.href)) return e;
            var i = n.Utils.nearestParent(t, '[role="article"]');
            if (i) {
                var r = i.querySelector("a[data-video-id]");
                if (r) return r.href;
                var o = i.querySelector('a[target][rel="theater"]');
                if (o) return o.href
            }
            var a = n.Utils.nearestParent(t, "#contentArea");
            if (a) {
                return a.querySelector("a[target][href][data-video-id]").href
            }
            return location.href.match(/permalink\/[0-9]+/) ? location.href : null
        }
        var l = /(\.|^)(facebook|fb).com$/i,
            c = /^blob:https?:\/\/(www)?\.?facebook\.com\/[A-z0-9-]+$/,
            u = ["sd_src", "hd_src", "sd_src_no_ratelimit", "hd_src_no_ratelimit"],
            d = /"?videoData"?:\s?\[[\s\S]*?\}\]/g,
            h = '"?video_id"?:\\s?"{{{ID}}}"',
            f = /<title.*>([\s\S]*)<\/title>/gim,
            p = /(?:h|s)d_src(?:_no_ratelimit)?:"([^"]+)"+?/g,
            _ = new Set,
            m = i.i(o.a)({
                request: {
                    method: "GET",
                    url: function(t) {
                        return t
                    }
                },
                parse: function(i, n) {
                    _.add(i);
                    var r = i.split("/").filter(function(t) {
                            return !!t
                        }),
                        o = r[r.length - 1],
                        a = e(n),
                        s = n.match(d);
                    if (s) {
                        var l = new RegExp(h.replace("{{{ID}}}", o), "g"),
                            c = Array.from(s).filter(function(t) {
                                return l.test(t)
                            });
                        if (!c.length) {
                            if (!location.href.includes("permalink")) return;
                            c = s
                        }
                        var f = void 0,
                            m = void 0,
                            v = void 0,
                            y = c[0].replace(/"?videoData"?:/, "");
                        try {
                            f = JSON.parse(y)[0]
                        } catch (t) {
                            if (v = y.match(p), !v.length) return null;
                            m = v.map(function(t) {
                                return t.replace(p, "$1")
                            })
                        }
                        var g = [];
                        return f && u.forEach(function(e) {
                            f[e] && g.push(t(f[e], a, e))
                        }), m && m.length && m.forEach(function(e) {
                            var i = "sd_src";
                            v.forEach(function(t) {
                                t.includes(e) && (i = t.includes("hd_") ? "hd_src" : "sd_src")
                            }), g.push(t(e, a, i))
                        }), g
                    }
                }
            });
        a = i.i(o.b)("facebook", function() {
            var t = this,
                e = [];
            if (location.host.match(l)) {
                n.Utils.queryAll("video").forEach(function(i) {
                    var r = i.src;
                    if (r && c.test(r)) {
                        var o = s(i),
                            a = n.Utils.nearestParent(i, "div[data-story-id]");
                        o && !a && e.push(t.makePlayer(i, [o], m))
                    }
                })
            }
            return e
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t(t) {
            var e = t.match(l);
            return e && e.length ? parseInt(e[1]) : null
        }

        function e(t) {
            return t = t.split("/").pop(), t = t.replace(l, "")
        }

        function s(t) {
            return t.html5 && t.html5.length ? t.html5 : t.mp4 ? Array.isArray(t.mp4) ? t.mp4 : [t.mp4] : []
        }
        var l = /_([0-9]{3,4})p/,
            c = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function(i, n) {
                    var a = [],
                        l = void 0;
                    try {
                        l = JSON.parse(n)
                    } catch (t) {
                        return a
                    }
                    return s(l).forEach(function(i) {
                        var n = r.UrlUtils.parse(i),
                            s = t(i),
                            l = e(i);
                        n.quality = s ? o.a.getQualityBySize(s) : o.a.DEFAULT_QUALITY_TYPE, n.filename = l, n.title = l.replace(/-/g, " "), n.type = "video", a.push(n)
                    }), a
                }
            });
        a = i.i(n.b)("kenh14", function() {
            var t = this,
                e = [];
            return e.push(t.makePlayer(null, [this._ids], c)), e
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t() {
            if ("www.nhaccuatui.com" !== location.hostname) return null;
            var t = r.Utils.query("video#videonctPlayer");
            if (t) return e(t) ? null : t;
            var o = r.Utils.queryAll('object[type="application/x-shockwave-flash"]');
            if (1 !== o.length) return null;
            var a = o[0],
                s = a.getAttribute("data");
            return s && s.match(/flash\/player\.nct/) ? a : i.i(n.d)(a)
        }

        function e(t) {
            var e = t.parentNode;
            return !!e && !!e.querySelector(".prerollAdv")
        }

        function s() {
            return new Promise(function(t) {
                window.pageComm.send({
                    method: "report",
                    args: [
                        ["__data", "flashPlayer", "mp3"]
                    ]
                }).then(function(e) {
                    if (!Array.isArray(e)) return void t([]);
                    e = e.map(p).filter(function(t) {
                        return t
                    }), t(e)
                })
            })
        }

        function l(t) {
            var e = t.match(/_([0-9]{3,4})\.mp4$/);
            return e ? o.a.getQualityBySize(parseInt(e[1])) : o.a.getQualityBySize(480)
        }

        function c() {
            return new Promise(function(t) {
                window.pageComm.send({
                    method: "report",
                    args: [
                        ["__data", "nctPlayer", "curVideoItem"]
                    ]
                }).then(function(e) {
                    if (!e || !e.highquality || !e.lowquality) return void t([]);
                    var i = [e.highquality, e.location, e.lowquality].filter(function(t) {
                            return !!t
                        }),
                        n = i.map(function(t) {
                            var i = r.UrlUtils.parse(t);
                            return i.type = "video", i.title = e.title || document.title.replace("Xem", ""), i.ext = "mp4", i.quality = l(t), i.force = !0, i
                        });
                    t(n)
                })
            })
        }
        var u = /https?:\/\/[^?]+xml\?key.*/,
            d = /_([0-8]{3,4})\.mp4/,
            h = i.i(n.a)({
                request: {
                    method: "GET",
                    headers: function() {
                        return {
                            "X-Savior-Replace-Cookie": document.cookie + "; touchEnable=true;"
                        }
                    }
                },
                parse: function(t, e) {
                    var i = n.c.parsePlaylist(t, e);
                    return i = i.filter(function(t) {
                        return "html" !== t.ext
                    }), i = i.map(function(t) {
                        var e = t.url.match(d);
                        return e && e[1] ? t.resolution = e[1] + "p" : t.resolution = "480p", t
                    })
                }
            }),
            f = /^([\w\d_-]+\.)*nhaccuatui.com$/,
            p = function(t) {
                var e = t.location.replace(/^[\n\s]*|[\n\s]*$/gm, "");
                if (!e) return null;
                var i = r.UrlUtils.parse(e);
                return i.type = "audio", i.title = t.title.replace(/^[\n\s]*|[\n\s]*$/gm, ""), i.force = !0, i.ext = "mp3", i
            };
        a = i.i(n.b)("nhaccuatui", function() {
            function e(t, e) {
                var i = a.indexOf(t); - 1 !== i ? l[i] || (l[i] = e) : (a.push(t), l.push(e))
            }

            function i(t, e) {
                o.push(n.makePlayer(l[e], [t], h))
            }
            var n = this,
                o = [],
                a = [],
                l = [];
            if (r.Utils.queryAll('meta[content*="flash/xml?key"], param[value*="flash/xml?key"], embed[flashvars*="flash/xml?key"]').forEach(function(t) {
                    var i = t.getAttribute("content") || t.getAttribute("value") || t.getAttribute("flashvars") || "",
                        n = i.match(u),
                        r = n && n[0];
                    r && t && "meta" !== t.tagName.toLowerCase() && e(r, t)
                }), a.length && a.forEach(i), window.pageComm && location.host.match(f)) {
                var d = [s(), c()],
                    p = r.Utils.query("#nctPlayer") || null;
                o.push(n.makePlayer0(p, d))
            }
            return o.push(this.makePlayer0(t(), this._ids, h)), o
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = void 0;
    ! function() {
        function t(t) {
            var e = void 0,
                i = /^https?:\/\/nhacso.net\/embed\/([^\/]+)\/(.+)/i,
                n = void 0;
            if (t.src) {
                if (n = t.src.match(i), 3 !== n.length) return null;
                switch (n[1]) {
                    case "album":
                        e = u + n[2];
                        break;
                    case "video":
                        e = c + n[2];
                        break;
                    default:
                        return null
                }
            } else e = t.value.replace(/^.*xmlPath=([^&]+).*$/i, "$1");
            return e
        }

        function e(t, e) {
            var i = p[e];
            if (i && t) return location.origin + i + encodeURIComponent(t)
        }

        function a(t) {
            var i = t.getAttribute("object-id"),
                n = t.getAttribute("object-type");
            return i ? e(i, n) : null
        }

        function s() {
            if (!location.host.match(d)) return !1;
            var t = location.pathname;
            return 0 === t.indexOf("/xem-video/") || 0 === t.indexOf("/nghe-playlist/") || 0 === t.indexOf("/nghe-album/") || 0 === t.indexOf("/nghe-nhac/")
        }
        var l = ['param[name="flashvars"][value*="xmlPath=http://nhacso.net"]', 'iframe[src*="http://nhacso.net/embed"]', 'param[name="movie"][value*="xmlPath=http://nhacso.net"]'].join(","),
            c = "http://nhacso.net/flash/video2/xnl/1/id/",
            u = "http://nhacso.net/flash/album/xnl/1/uid/X1xQVUNcZgQEBQ==,",
            d = /(\w+\.)?nhacso\.net$/,
            h = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function(t, e) {
                    var i = r.Utils.xmlParser.parseFromString(e, "text/xml"),
                        n = [];
                    return r.Utils.queryAll("track, song", i).forEach(function(t) {
                        try {
                            var e = [t.querySelector("name, title").textContent],
                                i = t.querySelector("artist");
                            i && "" !== i.textContent.trim() && e.unshift(i.textContent.trim());
                            var o = t.querySelector("sourceUrl, url, mp3link").textContent,
                                a = r.UrlUtils.parse(o);
                            a.type = "mp3" === a.ext ? "audio" : "video", a.title = e.join(" – "), n.push(a)
                        } catch (t) {}
                    }), n
                }
            }),
            f = i.i(n.a)({
                nocache: !0,
                request: {
                    method: "GET"
                },
                parse: function(t, e) {
                    var i = JSON.parse(e),
                        n = (i.object_name || "").trim();
                    n && (n += " - ");
                    for (var o = i.songs || [], a = o.filter(function(t) {
                            return t.link_mp3
                        }), s = 0; s < o.length; s++) {
                        var l = o[s],
                            c = l.link_mp3;
                        if (c) {
                            var u = r.UrlUtils.parse(c);
                            u.type = "audio", u.title = n + (l.name || "").trim(), a.push(u)
                        }
                    }
                    return a
                }
            }),
            p = {
                album: "/albums/ajax-get-detail-album?dataId=",
                playlist: "/playlists/ajax-get-detail-playlist?dataId=",
                song: "/songs/ajax-get-detail-song?dataId="
            },
            _ = function(t) {
                var e = t.url;
                if (!e) return null;
                var i = r.UrlUtils.parse(e);
                i.type = "audio";
                var n = t.singer[0] ? t.singer[0].alias + " - " : "";
                return i.title = n + (t.name || "").trim(), i
            };
        o = i.i(n.b)("nhacso", function() {
            var e = this,
                i = [],
                n = [];
            if (r.Utils.queryAll(l).forEach(function(r) {
                    var o = t(r);
                    o && -1 === n.indexOf(o) && (n.push(o), i.push(e.makePlayer(r, [o], h)))
                }), window.pageComm && location.host.match(d)) {
                var o = new Promise;
                window.pageComm.send({
                    method: "report",
                    args: [
                        ["myPeakPlayer", "songs"]
                    ]
                }).then(function(t) {
                    if (!Array.isArray(t)) return void o.resolve([]);
                    t = t.map(_).filter(function(t) {
                        return t
                    }), o.resolve(t)
                }), i.push(e.makePlayer0(null, [o]))
            }
            if (!s()) return i;
            var c = [];
            return r.Utils.queryAll("a.play[object-type]").forEach(function(t) {
                var e = a(t);
                e && -1 === c.indexOf(e) && c.push(e)
            }), c.length > 0 && i.push(e.makePlayer(null, c, f)), r.Utils.queryAll(".video-details").forEach(function(t) {
                var n = r.Utils.query("video", t),
                    o = n && n.src;
                if (o) {
                    var a = r.UrlUtils.parse(o);
                    a.type = "video";
                    var s = r.Utils.query(".singer-link", t);
                    s = s && s.textContent.trim() || "";
                    var l = r.Utils.query("h3.name");
                    l = l && l.textContent.trim() || "", s && l && (l = s + " - " + l), l && (a.title = l), i.push(e.makePlayer(n, [a]))
                }
            }), i
        })
    }(), e.a = o
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(30),
        o = void 0;
    ! function() {
        o = i.i(n.b)("pip", function() {
            var t = [];
            return r.a.detector.checkPage().forEach(function(e) {
                t.push(this.makePlayer0(e, [], null))
            }.bind(this)), t
        }, {
            dynamic: !0
        })
    }(), e.a = o
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        var t = "https://api-v2.soundcloud.com/tracks?ids={{track_id}}&client_id={{client_id}}",
            e = function(t, e) {
                e || (e = window.location.href), t = t.replace(/[[\]]/g, "\\$&");
                var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
                    n = i.exec(e);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
            },
            s = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function(i, n) {
                    return new Promise(function(a, s) {
                        var l = [],
                            c = void 0;
                        try {
                            c = JSON.parse(n)
                        } catch (t) {
                            return s([])
                        }
                        if (c.http_mp3_128_url) {
                            var u = r.UrlUtils.parse(c.http_mp3_128_url),
                                d = i.match(/soundcloud\.com\/i1\/tracks\/(\d+)\//);
                            if (!d || !d.length) return s([]);
                            var h = d[1],
                                f = e("client_id", i);
                            window.fetch(t.replace("{{track_id}}", h).replace("{{client_id}}", f)).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                if (!t.length) return s([]);
                                var e = t[0];
                                u.title = e.title, u.quality = o.a.DEFAULT_QUALITY_TYPE, u.type = "audio", l.push(u), a(l)
                            }).catch(function() {
                                s([])
                            })
                        }
                    }.bind(this))
                }
            });
        a = i.i(n.b)("soundcloud", function() {
            var t = this,
                e = [];
            return window.location.pathname.replace("/", "") && e.push(t.makePlayer(null, [this._ids], s)), e
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t(t) {
            var e = t.match(l);
            return e && e.length ? parseInt(e[1]) : null
        }

        function e(t) {
            return t = t.split("/").pop(), t = t.replace(l, "")
        }

        function s(t) {
            return t.html5 && t.html5.length ? t.html5 : t.mp4 ? Array.isArray(t.mp4) ? t.mp4 : [t.mp4] : []
        }
        var l = /_([0-9]{3,4})p/,
            c = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function(i, n) {
                    var a = [],
                        l = void 0;
                    try {
                        l = JSON.parse(n)
                    } catch (t) {
                        return a
                    }
                    return s(l).forEach(function(i) {
                        var n = r.UrlUtils.parse(i),
                            s = t(i),
                            l = e(i);
                        n.quality = s ? o.a.getQualityBySize(s) : o.a.DEFAULT_QUALITY_TYPE, n.filename = l, n.title = l.replace(/-/g, " "), n.type = "video", a.push(n)
                    }), a
                }
            });
        a = i.i(n.b)("tuoitre", function() {
            var t = this,
                e = [];
            return e.push(t.makePlayer(null, [this._ids], c)), e
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(83),
        o = i(0),
        a = void 0;
    ! function() {
        var t = i.i(n.a)({
                nocache: !0,
                parse: function(t) {
                    return r.a.getMoviesById(t)
                }
            }),
            e = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: n.c.parsePlaylist
            });
        a = i.i(n.b)("vietgiaitri", function() {
            var i = this,
                r = [],
                a = location.href.match(/vietgiaitri\.com\/.*id\.([^.]+)\.vgt/i),
                s = (a || [])[1];
            if (s) {
                var l = o.Utils.query("object#youtube");
                r.push(this.makePlayer(l, [s], t))
            }
            return location.host.match(/vietgiaitri\.com/i) && o.Utils.queryAll('embed[src*="vietgiaitri.com"]').forEach(function(t) {
                var o = n.c.extract(t);
                o && r.push(i.makePlayer(t, [o], e))
            }), r
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t(t) {
            for (var e, i = 0; i < u.length; ++i)
                if ((e = t.match(u[i])) && e[1]) return e[1];
            return null
        }

        function e(t) {
            return (t.match(d) || [])[1]
        }

        function s(t) {
            var e = [],
                i = [];
            try {
                i = r.Utils.getProp(t, "request.files.progressive") || []
            } catch (t) {
                return e
            }
            return i.forEach(function(i) {
                e.push({
                    type: "video",
                    title: t.video.title,
                    filename: t.video.title,
                    ext: "mp4",
                    url: i.url,
                    resolution: i.quality,
                    quality: o.a.getVimeoQuality(i.quality)
                })
            }), e
        }

        function l(i) {
            switch (i.tagName) {
                case "IFRAME":
                    return t(i.src);
                case "PARAM":
                    return e(i.value);
                case "VIDEO":
                    return e(i.src);
                default:
                    return t(i.getAttribute("data-fallback-url") || "")
            }
        }
        var c = "https:" === location.protocol.toLowerCase() ? "https:" : "http:",
            u = [/\/\/(?:player\.)?vimeo\.com(?:\/video)?\/([0-9]+)/i, /\/\/vimeo.com\/couchmode\/.*\/([0-9]+)/i, /\/\/player.vimeo.com\/v[0-9]\/video\/([0-9]+)/i, /\/\/player.vimeo.com\/moog\/([0-9]+)/i],
            d = /(?:&|\?)clip_id=([0-9]+)(?:&|$)/i,
            h = c + "//player.vimeo.com/video/{{id}}/config",
            f = i.i(n.a)({
                request: {
                    method: "GET",
                    url: function(t) {
                        return t.match(/\/video\/(\d+)\/config(\?|$)/i) ? t : h.replace("{{id}}", t).replace("{{location}}", location.href)
                    },
                    headers: function() {
                        return {
                            "X-Savior-Replace-Referer": document.location.href
                        }
                    }
                },
                parse: function(t, e) {
                    return s(JSON.parse(e))
                }
            });
        a = i.i(n.b)("vimeo", function() {
            var e = this,
                i = [],
                n = [];
            if (r.Utils.queryAll('iframe[src*="vimeo.com"], param[value*="vimeo.com"], video[src*="vimeo.com"], .player[data-fallback-url]').forEach(function(t) {
                    var r = l(t);
                    r && -1 === n.indexOf(r) && (n.push(r), i.push(e.makePlayer(t, [r], f)))
                }), "vimeo.com" === location.host || "player.vimeo.com" === location.host) {
                var o = r.Utils.query("#videos_gallery li.selected a"),
                    a = o && o.href || location.href,
                    s = t(a);
                s && -1 === n.indexOf(s) && (n.push(s), i.push(e.makePlayer(o, [s], f)))
            }
            return i.push(e.makePlayer(null, e._ids, f)), i
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t() {
            for (var t = document.querySelector(".infobar > strong"), e = t.firstChild, i = []; e;) 3 === e.nodeType && i.push(e.data), e = e.nextSibling;
            return i.join("").trim()
        }
        var e = /xnxx\.com\/video-/,
            s = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function() {
                    return new Promise(function(e) {
                        window.pageComm.send({
                            method: "eval",
                            args: ["return [html5player.url_high, html5player.url_low]"]
                        }).then(function(i) {
                            if (i && i.length) {
                                var n = i.map(function(e) {
                                    var i = r.UrlUtils.parse(e);
                                    return i.type = "video", i.title = t() || document.title, i.quality = o.a.getQualityBySize(e.includes("3gp") ? 240 : 480), i
                                });
                                e(n)
                            }
                        }).catch(function(t) {})
                    })
                }
            });
        a = i.i(n.b)("xnxx", function() {
            var t = [],
                i = this;
            if (location.href.match(e) && window.pageComm) {
                var n = r.Utils.query("#html5video");
                t.push(i.makePlayer(n, [window.location.href], s))
            }
            return t
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = void 0;
    ! function() {
        function t() {
            for (var t = document.querySelector("#main h2"), e = t.firstChild, i = []; e;) 3 === e.nodeType && i.push(e.data), e = e.nextSibling;
            return i.join("").trim()
        }
        var e = /w?\.xvideos\.com\/video[0-9]+\//,
            s = i.i(n.a)({
                request: {
                    method: "GET"
                },
                parse: function() {
                    return new Promise(function(e) {
                        window.pageComm.send({
                            method: "eval",
                            args: ["return [html5player.url_high, html5player.url_low]"]
                        }).then(function(i) {
                            if (i && i.length) {
                                var n = i.map(function(e) {
                                    var i = r.UrlUtils.parse(e);
                                    return i.type = "video", i.title = t() || document.title, i.quality = o.a.getQualityBySize(e.includes("3gp") ? 240 : 480), i
                                });
                                e(n)
                            }
                        }).catch(function(t) {})
                    })
                }
            });
        a = i.i(n.b)("xvideos", function() {
            var t = [],
                i = this;
            if (location.href.match(e) && window.pageComm) {
                var n = r.Utils.query("#html5video");
                t.push(i.makePlayer(n, [window.location.href], s))
            }
            return t
        }, {
            dynamic: !0
        })
    }(), e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(9),
        r = i(0),
        o = i(1),
        a = i(70),
        s = void 0;
    ! function() {
        function t(t) {
            var e = [];
            return t && t.data && t.data ? ((void 0 !== t.data.items ? t.data.items : [t.data]).forEach(function(t) {
                var n = Object.keys(t.source).map(function(e) {
                        return t.source[e] ? {
                            quality: e,
                            url: t.source[e]
                        } : null
                    }).filter(function(t) {
                        return !!t
                    }),
                    s = void 0 !== t.thumbnail ? "video" : "audio";
                n.forEach(function(n) {
                    var l = r.UrlUtils.parse(n.url);
                    l.type = s, l.title = t.artists_names ? t.artists_names + " - " + t.name : t.title, l.filename = i.i(a.a)(l.filename, l.title), "audio" === s ? (l.ext = "mp3", l.quality = o.a.getZingAudioQuality(n.quality)) : (l.ext = "mp4", l.quality = o.a.getZingVideoQuality(n.quality)), l.url = r.Utils.addProtocol(l.url, "https"), e.push(l)
                })
            }), e) : e
        }

        function e(t) {
            var e = [];
            return Object.keys(u).map(function(e) {
                return {
                    quality: e,
                    match: t.match(u[e])
                }
            }).forEach(function(t) {
                if (t.match && t.match.length > 1) {
                    var i = r.UrlUtils.parse(t.match[1]);
                    i.type = "video", i.title = document.title, i.quality = o.a.getZingVideoQuality(t.quality), i.url = r.Utils.addProtocol(i.url, "https"), i.resolution = t.quality, e.push(i)
                }
            }), e
        }
        var l = /tv\.zing\.vn/,
            c = /radio\.zing\.vn/,
            u = {
                "360p": /source:\s"(\/\/\S+)",\n?\s+label:\s?'360p'/,
                "480p": /source:\s"(\/\/\S+)",\n?\s+label:\s?'480p'/,
                "720p": /video720\s=\s"(\/\/\S+)";/,
                "1080p": /video1080\s=\s"(\/\/\S+)";/
            },
            d = i.i(n.a)({
                request: {
                    method: "GET",
                    headers: function() {
                        return {
                            "X-Savior-Replace-Referer": document.location.href
                        }
                    }
                },
                parse: function(i, n) {
                    var r = [];
                    if (0 === r.length) {
                        var o = void 0;
                        try {
                            if (o = JSON.parse(n)) {
                                var a = t(o);
                                a.length && (r = r.concat(a))
                            }
                        } catch (t) {}
                    }
                    if (window.location.host.match(l) && (r = r.concat(e(n)), 0 === r.length && n.match(/source:\s?.+m3u8\??/))) {
                        var s = window.fetch(window.location.href, {
                            cache: "no-store"
                        }).then(function(t) {
                            return t.text()
                        }).then(function(t) {
                            return Promise.resolve(e(t))
                        }).catch(function(t) {});
                        r.push(s)
                    }
                    return r
                }
            }),
            h = /^([\d\w_-]+\.)*zing\.vn$/,
            f = function(t) {
                var e = t.mp3;
                if (!e) return null;
                var i = r.UrlUtils.parse(e);
                i.type = "audio";
                var n = t.artist ? t.artist + " - " : "";
                return i.title = n + (t.title || "").trim(), i.force = !0, i.ext = "mp3", i.url = r.Utils.addProtocol(i.url, "https"), i
            },
            p = function(t) {
                var e = t.source[0];
                if (!e) return null;
                var i = r.UrlUtils.parse(e);
                i.type = "audio";
                var n = t.artist ? t.artist + " - " : "";
                return i.title = n + (t.title || "").trim(), i.force = !0, i.ext = "mp3", i.url = r.Utils.addProtocol(i.url, "https"), i
            };
        s = i.i(n.b)("zingvn", function() {
            var t = this,
                e = [];
            if (window.location.host.match(c) || e.push(t.makePlayer(null, [this._ids] || [], d)), window.pageComm && location.host.match(h)) {
                var i = new Promise(function(t) {
                    window.pageComm.send({
                        method: "report",
                        args: [
                            ["zmp3HTML5", "playlist"]
                        ]
                    }).then(function(e) {
                        if (!Array.isArray(e)) return void t([]);
                        e = e.map(f).filter(function(t) {
                            return t
                        }), t(e)
                    })
                });
                e.push(t.makePlayer0(null, [i]));
                var n = new Promise(function(t) {
                    window.pageComm.send({
                        method: "eval",
                        args: ['return [].map.call(zmCore("li[id^=\'fnPlayerItem\']"),function(el){return zmCore.data(el,"item")})']
                    }).then(function(e) {
                        if (!Array.isArray(e)) return void t([]);
                        e = e.map(p).filter(function(t) {
                            return t
                        }), t(e)
                    })
                });
                e.push(t.makePlayer0(null, [n]))
            }
            return window.location.host.match(l) && window.location.pathname.replace("/", "") && e.push(t.makePlayer(null, [window.location.href] || [], d)), e
        }, {
            dynamic: !0
        })
    }(), e.a = s
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        var i = document.createElement(t);
        return e && (i.className = e), i
    }

    function r(t) {
        var e = t._dl.render(s.a.get("template-list"), {
                i18n_check_label: i.i(a.i18n)("popup_check_label"),
                i18n_check_all: i.i(a.i18n)("popup_check_all"),
                i18n_check_none: i.i(a.i18n)("popup_check_none"),
                i18n_download_selected: i.i(a.i18n)("popup_download_selected"),
                i18n_download: i.i(a.i18n)("popup_download"),
                i18n_wait: i.i(a.i18n)("popup_download_starting"),
                i18n_one_click: i.i(a.i18n)("popup_one_click"),
                i18n_preferred_quality: i.i(a.i18n)("popup_preferred_quality"),
                i18n_no_media_found: i.i(a.i18n)("popup_no_media_found"),
                i18n_download_failed: i.i(a.i18n)("popup_download_failed"),
                i18n_pip_button: i.i(a.i18n)("popup_pip_button"),
                i18n_sound_only: i.i(a.i18n)("popup_sound_only"),
                has_pip: l.a.check(window.location.hostname, "pip")
            }, t._preferredQuality),
            n = 1 === e.length ? e[0] : null;
        if (n && "download" === t._make_action) {
            var r = a.Utils.query(".j-quality-download:not([hidden])", n);
            r && t._download(r) && (o.a.log("Download", o.a.DOWNLOAD_AUTO), t.serverLogDownload(r, {
                autoselect: 1
            }), t._updateDownloadSelected())
        }
        t._make_action = void 0
    }
    i.d(e, "b", function() {
        return y
    }), i.d(e, "a", function() {
        return n
    });
    var o = i(3),
        a = i(0),
        s = i(5),
        l = i(16),
        c = i(1),
        u = i(30),
        d = i(82),
        h = i(68),
        f = i(29),
        p = i(13),
        _ = i.n(p),
        m = i(28),
        v = (i.n(m), i(38)),
        y = function(t, e) {
            this._widget = n("div", "downloads"), this._pseudoSelects = new Map, this._node = t, this._mode = "select_media", this._downloadingId = -1, this._logShownSent = !1, this._showFirstSelectTime = null, this._userInitiated = !1, this._ready = !1, this._make_action = void 0, this._rendered = !1, this._hasDownloadLinks = !1, this._isFirstFreeNode = e
        };
    y.prototype = {
        constructor: y,
        _init: function(t) {
            this._widget = t, this._setPreferredQuality(s.a.get("preferred_quality_level")), this._widget.addEventListener("click", this._onWidgetClick.bind(this), !1), chrome.runtime.onMessage.addListener(function(t) {
                if ("downloads" === t.requestType && "widget_progress" === t.method) {
                    var e = t.params;
                    this._getWidgetMedialURLs().includes(e.url) && e.mime && (e.mime.includes("video") || e.mime.includes("octet-stream") && e.filename.match(/\.mp4$/)) && !e.filename.match(/\.mp3$/) && (e.exists && (e.playable || "complete" === e.state) ? (this._downloadingId = e.id, this._handleProgress(e)) : "interrupted" !== e.state && e.exists || this._changeWidgetMode("select_media"))
                }
            }.bind(this))
        },
        _renderWidget: function() {
            if (!this._rendered) {
                var t = !l.a.check(location.href, "pip");
                t = t && u.a.detector.isVideoNode(this._node), t = t || location.host.match(/^([\w\d_-]+\.)*youtube.com$/), t = t && s.a.get("detach_enabled"), t && u.a.detector.markCandidate(this._node), this._widget.innerHTML = _.a.render(s.a.get("template-widget"), {
                    i18n_download: i.i(a.i18n)("popup_download"),
                    i18n_pip_button: i.i(a.i18n)("popup_pip_button"),
                    i18n_play_now: i.i(a.i18n)("play_now_play_now"),
                    i18n_play_text: i.i(a.i18n)("play_now_click_to_play"),
                    i18n_play_not_show: i.i(a.i18n)("play_now_do_not_show"),
                    has_pip: t,
                    no_downloads: !this._player || !this._player.ids.length || !a.Utils.flatten(this._player.ids || []).length
                }), this._dl = new f.a(this._widget), this._dl.setDownloads(new h.a), this._rendered = !0, this._init(this._widget)
            }
        },
        attach: function(t) {
            this._renderWidget();
            var e = t.firstChild;
            e ? e !== this._widget && t.replaceChild(this._widget, e) : t.appendChild(this._widget), this._updateDownloads(), this._userInitiated = !1
        },
        _setPreferredQuality: function(t) {
            if (t = t || c.a.DEFAULT_QUALITY_LEVEL, !this._userInitiated && this._preferredQuality !== t) {
                var e = a.Utils.query("#preferred-select", this._widget);
                e && (this._preferredQuality = t, e.setAttribute("data-selected-value", t), e.innerText = i.i(a.i18n)("popup_preferred_quality_hint") + " " + i.i(a.i18n)("ql_" + t.toLowerCase()))
            }
        },
        _updateDownloads: function() {
            if (!this._player || !this._userInitiated) return void this._setPreferredQuality(s.a.get("preferred_quality_level"));
            var t = this._manager._players.filter(function(t) {
                return (t.node === this._node || this._isFirstFreeNode && null === t.node) && t.ids.length && !t.opts.aggressive
            }.bind(this));
            if (t.length) {
                this._dl._downloads.setMediaData(this._manager.getMedia(t)).then(function(t) {
                    this._showDownloads(t.model, t.updated)
                }.bind(this))
            }
            this._userInitiated = !1
        },
        _showDownloads: function(t, e) {
            if (e) {
                var n = this._widget,
                    s = t.getMediaCountByTitle(),
                    l = a.Utils.query("#showhide-all", n);
                if (0 === s && !this._hasDownloadLinks) return n.className = "downloads-empty", l.textContent = l.title = i.i(a.i18n)("popup_no_media_found"), void o.a.log("PageShown", o.a.PAGE_CONTENT_NO_MEDIA);
                n.className = s > 1 ? "downloads-multi" : "downloads-single main", l.textContent = i.i(a.i18n)("popup_how_many_media_found", [s]), r(this), this._updateButtonsStatus(), this._initPseudoSelect()
            }
        },
        _updateButtonsStatus: function() {
            if (this._rendered) {
                var t = this._player && this._player.ids.length && a.Utils.flatten(this._player.ids).length;
                this._widget.querySelector(".main-panel")[t ? "removeAttribute" : "setAttribute"]("hidden", !0);
                var e = this._widget.querySelector("#downloads");
                t && "progress" !== this._mode ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden"), t && !this._hasDownloadLinks && (this._hasDownloadLinks = !0)
            }
        },
        _initPseudoSelect: function() {
            var t = this,
                e = a.Utils.queryAll(".j-quality-selector", this._widget);
            e && e.length && (e.forEach(function(e) {
                m.initialize(e);
                var i = a.Utils.findParent(e, "j-media-scope");
                t._pseudoSelects.set(i, e)
            }), 1 === e.length && this._showFirstSelectTime && (this._showFirstSelectTime = !1, e[0].removeAttribute("hidden")), document.body.addEventListener("click", this._hideAllPseudoSelects.bind(this)))
        },
        _hideAllPseudoSelects: function() {
            var t = !0,
                e = !1,
                i = void 0;
            try {
                for (var n, r = this._pseudoSelects.values()[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
                    n.value.setAttribute("hidden", !0)
                }
            } catch (t) {
                e = !0, i = t
            } finally {
                try {
                    !t && r.return && r.return()
                } finally {
                    if (e) throw i
                }
            }
        },
        _getPseudoSelect: function(t) {
            var e = Array.from(this._pseudoSelects.keys()).filter(function(e) {
                    return a.Utils.isDescendant(e, t)
                }),
                i = e[0];
            return this._pseudoSelects.get(i)
        },
        _onClick: function(t) {
            var e = this,
                i = t.target;
            switch (this.emit("widget_click", t), a.Utils.queryAll(".j-quality-selector:not([hidden])", this._widget).forEach(function(t) {
                a.Utils.isDescendant(t, i) || a.Utils.isDescendant(t.parentNode, i) || t.setAttribute("hidden", !0)
            }), i.id) {
                case "download-main":
                case "preferred-select":
                    if (!e._userInitiated) {
                        i.setAttribute("disabled", !0);
                        var n = "preferred-select" === i.id;
                        e._make_action = n ? "select" : "download", e._userInitiated = !0, o.a.log("ButtonClicked", n ? o.a.BUTTON_FAKE_QUALITY : o.a.BUTTON_MAIN), i.innerHTML = '<span class="file-size"></span>', "preferred-select" === i.id && null === this._showFirstSelectTime && (this._showFirstSelectTime = !0), e._updateDownloads()
                    }
                    return;
                case "showhide-all":
                    var r = a.Utils.query("#downloads", e._widget);
                    if (r) {
                        var s = !r.hidden;
                        r.hidden = s, o.a.log("ButtonClicked", s ? o.a.BUTTON_HIDE_DOWNLOADS : o.a.BUTTON_SHOW_DOWNLOADS)
                    }
                    return;
                case "download-selected":
                    return o.a.log("ButtonClicked", o.a.BUTTON_DOWNLOAD_ALL), a.Utils.queryAll(".j-media-scope.selected", e._widget).forEach(function(t) {
                        e._download(a.Utils.query(".j-quality-download:not([hidden])", t)) && o.a.log("Download", o.a.DOWNLOAD_ALL)
                    }), void e._updateDownloadSelected();
                case "check-all":
                    return o.a.log("ButtonClicked", o.a.BUTTON_CHECK_ALL), void e._toggleSelectMedia(a.Utils.queryAll(".j-media-scope", e._widget), !0);
                case "check-none":
                    return o.a.log("ButtonClicked", o.a.BUTTON_CHECK_NONE), void e._toggleSelectMedia(a.Utils.queryAll(".j-media-scope", e._widget), !1);
                case "open-pip":
                    return o.a.log("ButtonClicked", o.a.BUTTON_DETACH), void u.a.detachPlayerOrNode(this._player);
                case "hide-widget":
                    return o.a.log("ButtonClicked", o.a.BUTTON_HIDE), e._hideWidget(), void e.emit("hide");
                case "play-now":
                    return void this._playNow();
                case "close-play-now-tooltip":
                    var l = this._widget.querySelector(".tooltip-box");
                    l && (l.classList.remove("tooltip-shown"), o.a.log("PlayNow", o.a.PLAY_NOW_TOOLTIP_CLOSED))
            }
            switch (i.tagName) {
                case "A":
                    var c = i;
                    return "SPAN" === i.tagName.toUpperCase() && (c = i.parentNode), void(e._download(c) && (o.a.log("Download", o.a.DOWNLOAD_BUTTON), this.serverLogDownload(c, {
                        autoselect: 0
                    }), e._updateDownloadSelected()));
                case "SPAN":
                    var d = i;
                    if (!d.classList.contains("j-quality-download")) {
                        var h = this._getPseudoSelect(d);
                        return h.hasAttribute("hidden") ? h.removeAttribute("hidden") : h.setAttribute("hidden", !0), !1
                    }
                    return;
                case "SELECT":
                    return;
                case "INPUT":
                    if ("checkbox" === i.type) {
                        if (i.matches("#play-now-not-show-check")) return this._doNotShowTooltipAgain(t.target.checked), !0;
                        var f = a.Utils.findParent(i, "j-media-scope");
                        return f && e._toggleSelectMedia(f, i.checked), !0
                    }
                    break;
                case "DIV":
                    i.matches(".quality-label.j-quality") && this._onSelectChange(t)
            }
            return !0
        },
        _doNotShowTooltipAgain: function(t) {
            s.a.set("hide_play_now_tooltip", t), t && o.a.log("PlayNow", o.a.PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN)
        },
        _onSelectChange: function(t) {
            var e = t.target,
                i = e.getAttribute("data-quality-value").trim(),
                n = i.split("/")[1];
            if (s.a.get("prefer_last_quality") && 1 === a.Utils.queryAll(".j-media-scope", this._widget).length) {
                var r = c.a.getQualityLevelByQualityType(n);
                s.a.set("preferred_quality_level", r), s.a.set("preferred_quality:" + r, i)
            }
            var l = a.Utils.findParent(e, "j-media-scope"),
                u = this._getPseudoSelect(e);
            return u.setAttribute("data-selected-value", i), this._markSelected(e, u), this._dl._applyCurrentValues(l, u), o.a.log("VideoQualityChanged", c.a.getVideoQualityIndex(n)), this._updateDownloadSelected(), u.setAttribute("hidden", !0), !1
        },
        _markSelected: function(t, e) {
            a.Utils.queryAll(".quality-label.selected", e).forEach(function(t) {
                return t.classList.remove("selected")
            }), t.classList.add("selected")
        },
        _onWidgetClick: function(t) {
            if (!this._onClick(t)) return t.preventDefault(), t.stopPropagation(), !0
        },
        _toggleSelectMedia: function(t, e) {
            function i(t) {
                t.classList.toggle("selected", e), a.Utils.query('.filename [type="checkbox"]', t).checked = e
            }
            Array.isArray(t) ? t.forEach(i) : i(t), this._updateDownloadSelected()
        },
        _updateDownloadSelected: function() {
            a.Utils.queryAll(".j-media-scope.selected", this._widget).some(function(t) {
                if (a.Utils.query(".j-quality-download:not([hidden]):not(.j-disabled)", t)) return !0
            })
        },
        _getMetricsParams: function(t, e) {
            return this._dl.getMetricsParams(t, e)
        },
        _download: function(t) {
            var e = !!this._dl.download(t);
            return e && this.emit("download", t.dataset.quality), e
        },
        _hideWidget: function() {
            this._widget.setAttribute("hidden", "hidden")
        },
        _handleProgress: function(t) {
            var e = 0;
            if ("select_media" === this._mode && (this._changeWidgetMode("progress"), this._logShownSent || (o.a.log("PlayNow", o.a.PLAY_NOW_SHOWN), this.emit("playnow_shown"))), "complete" !== t.state) {
                var i = (t.bytesReceived / t.totalBytes * 100).toFixed(0);
                i < 0 && (i = 0), e = i + "%"
            } else e = "100%";
            var n = this._widget.querySelector(".progress-box .percent");
            n && (n.innerText = e);
            var r = this._widget.querySelector(".progress-bar .bar");
            r && (r.style.width = e)
        },
        _playNow: function() {
            -1 !== this._downloadingId && (chrome.runtime.sendMessage({
                method: "play",
                requestType: "downloads",
                params: this._downloadingId
            }), this._pauseMainVideo(), o.a.log("PlayNow", o.a.PLAY_NOW_WIDGET_CLICKED))
        },
        _pauseMainVideo: function() {
            var t = this._node.matches("video") ? this._node : this._node.querySelector("video");
            t && t.pause()
        },
        _changeWidgetMode: function(t) {
            this._mode !== t && (this._mode = t, this._updateUIMode(this._mode), d.default._controls.playNowBottomTooltip && ("progress" === this._mode ? d.default._controls.playNowBottomTooltip.show(this._playNow.bind(this)) : d.default._controls.playNowBottomTooltip.hide()))
        },
        _updateUIMode: function(t) {
            var e = this._widget.querySelector(".main-panel"),
                i = this._widget.querySelector(".play-and-progress-box"),
                n = this._widget.querySelector("#downloads"),
                r = this._widget.querySelector(".progress-bar .bar"),
                a = this._widget.querySelector(".tooltip-box");
            switch (t) {
                case "select_media":
                    i.setAttribute("hidden", "hidden"), e.removeAttribute("hidden"), n.removeAttribute("hidden"), a.classList.remove("tooltip-shown"), this._widget.classList.remove("adaptive-progress");
                    break;
                case "progress":
                    if (r.style.width = 0, e.setAttribute("hidden", "hidden"), n.setAttribute("hidden", "hidden"), i.removeAttribute("hidden"), this._widget.classList.add("adaptive-progress"), !s.a.get("hide_play_now_tooltip")) {
                        setTimeout(function() {
                            a.classList.add("tooltip-shown"), o.a.log("PlayNow", o.a.PLAY_NOW_TOOLTIP_SHOWN)
                        }.bind(this), 500)
                    }
            }
        },
        _getWidgetMedialURLs: function() {
            var t = [];
            try {
                t = this._dl._downloads.data.map(function(t) {
                    return t.url
                })
            } catch (t) {}
            return t
        },
        setMediaData: function(t, e) {
            this._manager = t, this._player = e, null !== this._widget.parentNode && !this._widget.parentNode.hidden && this._hasDownloadLinks || (this._ready = !0, this._updateDownloads(), this._updateButtonsStatus())
        },
        isReady: function() {
            return this._ready
        },
        getWidgetRect: function() {
            var t = this._widget;
            return t ? t.getBoundingClientRect() : null
        },
        serverLogDownload: function(t, e) {
            e = Object.assign(e, this._getMetricsParams(t)), o.a.serverLog("Download", e)
        },
        getWidgetPlayerName: function() {
            return this._player.name
        }
    }, v(y.prototype)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return function(e) {
            return e[t]
        }
    }

    function r(t) {
        var e = a.Utils.toArray(arguments);
        return e.shift(),
            function(i) {
                return i[t].apply(i, e)
            }
    }
    var o = i(169),
        a = i(0),
        s = i(3),
        l = a.Utils.query.bind(a.Utils),
        c = a.Utils.queryAll.bind(a.Utils),
        u = function() {
            this._items = [], this._isReported = !1, this._scrape()
        };
    u.VERSION = 6, u.prototype = {
        ITEMS_PER_PAGE: 10,
        NOT_SERP_NODES_SELECTOR: "hr",
        IMAGE_NODE_SELECTOR: "#imagebox_bigimages",
        SEARCH_BLOCKS_SELECTOR: "#ires .g",
        SEARCH_BLOCKS_FILTER_SELECTOR: ".g .g",
        POI_SERP_SELECTOR: "#rso > div > div[data-hveid] > div[jsl]",
        POI_SIDE_SELECTOR: "#rhs_block > div",
        _addItem: function(t, e, i) {
            var n = this._items.length;
            this._items.push(new o.a(t, e, i, this._docId, n))
        },
        _scrapeAds: function(t) {
            var e = this,
                i = {
                    "top-ad": "#tads > ol > li",
                    "bottom-ad": "#bottomads ol >li"
                },
                n = c(i[t]);
            return n.forEach(function(i, n) {
                e._addItem(t, i, n)
            }), n.length
        },
        _scrapeSER: function(t, e) {
            var i = this,
                n = a.Utils.toArray(t.children).filter(function(t) {
                    return t.nodeType === Node.ELEMENT_NODE
                });
            return n.forEach(function(t, n) {
                i._addItem("organic", t, e + n)
            }), n.length
        },
        _scrapeResults: function() {
            var t = this,
                e = c(this.SEARCH_BLOCKS_SELECTOR + ", " + this.POI_SERP_SELECTOR).filter(function(e) {
                    return !e.matches(t.SEARCH_BLOCKS_FILTER_SELECTOR)
                }),
                i = 0;
            return e.forEach(function(e) {
                if ("" !== e.textContent.trim() && !e.matches(t.NOT_SERP_NODES_SELECTOR)) {
                    var n = e.matches(".srg") ? e : e.querySelector(".srg");
                    n ? i += t._scrapeSER(n, i) : e.matches(t.IMAGE_NODE_SELECTOR) ? t._addItem("image", e, i++) : e.matches(t.POI_SERP_SELECTOR) ? t._addItem("poi-serp", e, i++) : t._addItem("organic", e, i++)
                }
            }), i
        },
        _generateDocId: function() {
            return Date.now().toString(32) + "-" + Math.random().toString(32).slice(2)
        },
        _scrapeSidePOI: function() {
            var t = l(this.POI_SIDE_SELECTOR);
            t && this._addItem("poi-side", t, this._items.length)
        },
        get _q() {
            function t(t) {
                return t.offsetWidth && t.offsetHeight
            }
            var e = l(".spell_orig b");
            if (e && t(e)) return e.textContent.trim();
            var i = l("a.spell_orig");
            return i && i.href && t(i) || (i = l(".qs")), i && t(i) && i.href ? a.Utils.g.getSearchParams(i.href).q : null
        },
        _parsePage: function() {
            var t = l("#nav .cur");
            return t ? parseInt(t.textContent.trim()) : 1
        },
        _scrape: function() {
            this._docId = this._generateDocId(), this._s = (this._parsePage() - 1) * this.ITEMS_PER_PAGE, this._scrapeAds("top-ad"), this._scrapeResults(), this._scrapeAds("bottom-ad"), this._scrapeSidePOI()
        },
        getSERPData: function() {
            return {
                type: "gsearch",
                id: this._docId,
                domain: window.location.href,
                referer: this._extractReferer(),
                searchQuery: this._q,
                searchStart: this._s,
                timestamp: Date.now(),
                items: this._items.map(n("data")),
                version: u.VERSION
            }
        },
        _extractReferer: function() {
            if (document.referrer) return document.referrer;
            if (this._isFromIndexPage) return "g_index";
            var t = document.location.search,
                e = document.location.hash,
                i = /[&?]sourceid=chrome&?/gi;
            return /#q=./gi.test(e) ? "g_serp" : i.test(t) ? "omnibox" : "unknown"
        },
        _metricsReport: function() {
            s.a.log("SerpData", this.getSERPData())
        },
        _consoleReport: function() {
            this._items.forEach(r("renderToConsole"))
        },
        isSameSearchAs: function(t) {
            return t && t.q === this._q && t.s == this._s
        },
        report: function(t) {
            this._isFromIndexPage = t, this._isReported || (this._isReported = !0, this._metricsReport())
        },
        destroy: function() {
            this._items.forEach(r("destroy"))
        }
    }, e.a = u
}, function(t, e, i) {
    "use strict";
    var n = i(27),
        r = function() {
            n.a.apply(this, arguments)
        };
    r.prototype = {
        __proto__: n.a.prototype,
        DESC_SELECTOR: ".ads-creative",
        LINK_SELECTOR: "h3 a:last-child",
        NOT_RAW_CONTENT_SELECTOR: "h3, .ads-visurl, .ads-creative",
        TITLE_SELECTOR: "h3 a:last-child",
        _extractAdditionalContent: function() {
            var t = this,
                e = "";
            return Array.from(this._node.children).forEach(function(i) {
                i.matches(t.NOT_RAW_CONTENT_SELECTOR) || (e += i.outerHTML + "\n")
            }), e
        },
        _extractData: function() {
            var t = n.a.prototype._extractData.apply(this, arguments),
                e = this._extractAdditionalContent();
            return t.addRawContent = e, t
        }
    }, e.a = r
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(27),
        o = n.Utils.query.bind(n.Utils),
        a = n.Utils.getNodePropOrEmptyString.bind(n.Utils),
        s = function() {
            r.a.apply(this, arguments)
        };
    s.prototype = {
        __proto__: r.a.prototype,
        IMAGE_NODE_SELECTOR: "#imagebox_bigimages",
        IMAGE_TITLE: "h3 > a",
        SEARCH_BLOCKS_SELECTOR: "#ires .g",
        _validateAndSetDataType: function(t) {
            if (this._node.matches(this.IMAGE_NODE_SELECTOR)) {
                var e = o(this.IMAGE_TITLE, this._node);
                this._data.type = t, this._data.title = a(e, "textContent"), this._data.url = a(e, "href")
            } else this._data.type = "unknown"
        }
    }, e.a = s
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        r = i(27),
        o = n.Utils.getNodePropOrEmptyString.bind(n.Utils),
        a = function() {
            r.a.apply(this, arguments)
        };
    a.prototype = {
        __proto__: r.a.prototype,
        LINK_SELECTOR: 'a[tabindex="0"]',
        LINK_MAP: "#lu_map",
        _validateAndSetDataType: function(t) {
            var e = this._node.querySelector(this.LINK_MAP);
            if (e) {
                var i = e.parentNode;
                this._data.url = o(i, "href"), this._data.type = t
            } else this._data.type = "info_box"
        }
    }, e.a = a
}, function(t, e, i) {
    "use strict";
    var n = i(166),
        r = i(167),
        o = i(168),
        a = i(27),
        s = {
            "top-ad": n.a,
            "bottom-ad": n.a,
            image: r.a,
            "poi-serp": o.a,
            "poi-side": o.a
        },
        l = function(t, e, i, n, r) {
            return new(s[t] || a.a)(t, e, i, n, r)
        };
    e.a = l
}, , , function(t, e, i) {
    "use strict";
    e.a = function(t, e) {
        var i = new Set(["string", "number", "boolean", "undefined"]),
            n = function(t) {
                try {
                    if (null === t || i.has(typeof t)) return t;
                    if (Array.isArray(t)) return t.map(n);
                    if ("object" == typeof t && Object.getPrototypeOf(t) === Object.prototype) {
                        var e = {};
                        return Object.keys(t).forEach(function(i) {
                            e[i] = n(t[i])
                        }), e
                    }
                    return null
                } catch (t) {
                    return null
                }
            },
            r = {
                report: function(e, i) {
                    e(Array.isArray(i) ? n(i.reduce(function(t, e) {
                        return t && t[e]
                    }, t)) : null)
                },
                eval: function(t, e) {
                    var i = null;
                    try {
                        i = new Function(e).call(this)
                    } catch (t) {
                        i = t.toString()
                    }
                    t(n(i))
                }
            };
        t.addEventListener("message", function(i) {
            if (i.origin === location.origin && i.data && i.data.port === e && "coc_crx2page" === i.data.type) {
                var n = i.data.id,
                    o = i.data.data,
                    a = function(i) {
                        i = {
                            data: i,
                            id: n,
                            port: e,
                            type: "coc_page2crx"
                        }, t.postMessage(i, location.origin)
                    };
                "method" in o && o.method in r && r[o.method].apply(r, [a].concat(o.args))
            }
        })
    }
}], [82]);