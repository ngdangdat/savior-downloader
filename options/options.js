webpackJsonp([3], {
    1: function(e, t, i) {
        "use strict";
        var _ = i(10),
            n = function() {};
        n.QL_HIGH = "High", n.QL_MEDIUM = "Medium", n.QL_LOW = "Low", n.QL_VIDEO_ULTRAHD = "Ultra HD", n.QL_VIDEO_FULLHD = "Full HD", n.QL_VIDEO_HD = "HD", n.QL_VIDEO_STANDARD = "Standard", n.QL_VIDEO_MEDIUM = "Medium", n.QL_VIDEO_SMALL = "Small", n.QL_VIDEO_MOBILE = "Mobile";
        var a = {};
        a[n.QL_VIDEO_ULTRAHD] = {
            quality: n.QL_HIGH,
            qualityIndex: 8,
            size: 3072,
            videoTitle: "Super HD"
        }, a[n.QL_VIDEO_ULTRAHD] = {
            quality: n.QL_HIGH,
            qualityIndex: 7,
            size: 2160,
            videoTitle: "Ultra HD"
        }, a[n.QL_VIDEO_ULTRAHD] = {
            quality: n.QL_HIGH,
            qualityIndex: 6,
            size: 1440,
            videoTitle: "Quad HD"
        }, a[n.QL_VIDEO_FULLHD] = {
            quality: n.QL_HIGH,
            qualityIndex: 5,
            size: 1080,
            videoTitle: "Full HD",
            audioTitle: "High",
            vimeoQuality: "1080p",
            zingTag: ["1080p", "label1080"],
            dailymotionQuality: "hd1080",
            clipvnQuality: "5"
        }, a[n.QL_VIDEO_HD] = {
            quality: n.QL_HIGH,
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
        }, a[n.QL_VIDEO_STANDARD] = {
            quality: n.QL_MEDIUM,
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
        }, a[n.QL_VIDEO_MEDIUM] = {
            quality: n.QL_MEDIUM,
            qualityIndex: 2,
            size: 360,
            videoTitle: "Medium",
            audioTitle: "Medium",
            vimeoQuality: "360p",
            dailymotionQuality: "sd",
            zingTag: ["source", "360p"],
            JWQuality: "lowquality",
            clipvnQuality: "2"
        }, a[n.QL_VIDEO_SMALL] = {
            quality: n.QL_LOW,
            qualityIndex: 1,
            size: 240,
            videoTitle: "Small",
            audioTitle: "Low",
            dailymotionQuality: "ld",
            vimeoQuality: "270p",
            zingTag: ["f", "f240"],
            clipvnQuality: "1"
        }, a[n.QL_VIDEO_MOBILE] = {
            quality: n.QL_LOW,
            qualityIndex: 0,
            size: 144,
            videoTitle: "Mobile",
            audioTitle: "Low",
            vimeoQuality: "",
            clipvnQuality: "0"
        };
        var o = {};
        o[n.QL_HIGH] = a[n.QL_VIDEO_ULTRAHD].qualityIndex, o[n.QL_MEDIUM] = a[n.QL_VIDEO_STANDARD].qualityIndex, o[n.QL_LOW] = a[n.QL_VIDEO_SMALL].qualityIndex, n.prototype = {
            constructor: n,
            DEFAULT_QUALITY_LEVEL: n.QL_HIGH,
            QUALITY_LEVELS: [n.QL_HIGH, n.QL_MEDIUM, n.QL_LOW],
            VIDEO_QUALITY_LEVELS: [n.QL_VIDEO_ULTRAHD, n.QL_VIDEO_FULLHD, n.QL_VIDEO_HD, n.QL_VIDEO_STANDARD, n.QL_VIDEO_MEDIUM, n.QL_VIDEO_SMALL, n.QL_VIDEO_MOBILE],
            DEFAULT_QUALITY_TYPE: n.QL_VIDEO_STANDARD,
            QUALITY_TYPES: a,
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
                return (a[e] || {}).size || 0
            },
            _getVideoQuality: function(e, t, i) {
                for (var _ in this.QUALITY_TYPES) {
                    var n = this.QUALITY_TYPES[_][e];
                    if (Array.isArray(n) || (n = [n]), -1 !== n.indexOf(t)) return this.QUALITY_TYPES[_]
                }
                return i ? null : this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
            },
            _getTypeByQualityType: function(e) {
                for (var t in this.QUALITY_TYPES)
                    if (e === t || e === this.QUALITY_TYPES[t].videoTitle || e === this.QUALITY_TYPES[t].audioTitle) return this.QUALITY_TYPES[t];
                return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]
            },
            _calculateWeight: function(e, t) {
                var i = _.b[e.get("type")].extensions_weight,
                    n = i.indexOf(e.get("ext")),
                    a = this._getTypeByQualityType(e.get("quality")).qualityIndex;
                return n / i.length + Math.abs(t - a) / 7
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
                return void 0 !== a[e] ? a[e].qualityIndex : -1
            },
            chooseBestDownload: function(e, t, i) {
                var _ = e.length;
                if (i)
                    for (var n = i.split("/").filter(function(e) {
                            return e
                        }), a = n.length > 2, r = 0; r < _; ++r) {
                        var l = e[r],
                            u = l.extQuality();
                        if (u === i) return l;
                        if (a) {
                            var s = i.replace(/(.+)\/.+/, "$1"),
                                c = u.replace(/(.+)\/.+/, "$1");
                            if (c === s) return l
                        }
                    }
                t = t || this.DEFAULT_QUALITY_LEVEL;
                var E = e.filter(function(e) {
                    return "video" === e.type
                });
                E && E.length || (E = e), _ = E.length;
                for (var T = o[t], O = 1e3, L = -1, d = 0; d < _; ++d) {
                    var y = E[d],
                        I = this._calculateWeight(y, T);
                    O > I && (O = I, L = d)
                }
                return E[L]
            }
        }, t.a = new n
    },
    100: function(e, t) {},
    170: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _ = i(0),
            n = i(1),
            a = i(3),
            o = i(5),
            r = i(13),
            l = i.n(r);
        i(100);
        var u = void 0;
        u = chrome.storage ? o.a : {
            preferred_quality_level: "High",
            one_click: !0,
            get: function(e) {
                return this[e]
            },
            load: function() {
                return {
                    done: function(e) {
                        e()
                    }
                }
            },
            set: function() {}
        }, u.load().then(function() {
            function e() {
                var e = u.get("preferred_quality_level"),
                    a = u.get("min_stream_size"),
                    o = {
                        onPageButtonsEnabled: u.get("on_page_buttons"),
                        detachButtonEnabled: u.get("detach_enabled"),
                        isOneClickEnabled: u.get("one_click"),
                        preferLastQuality: u.get("prefer_last_quality"),
                        minStreamSize: a,
                        minStreamSizeValue: _.Utils.beautifyFileSize(a),
                        qLevels: n.a.QUALITY_LEVELS.map(function(t) {
                            return {
                                i18n_ql_title: i.i(_.i18n)("ql_" + t.toLowerCase()),
                                qLevelName: t,
                                isChecked: t === e
                            }
                        }),
                        i18n_options_title: i.i(_.i18n)("options_title"),
                        i18n_show_on_page_buttons: i.i(_.i18n)("options_show_on_page_buttons"),
                        i18n_show_detach_button: i.i(_.i18n)("options_show_detach_button"),
                        i18n_one_click: i.i(_.i18n)("options_one_click"),
                        i18n_preferred_quality: i.i(_.i18n)("popup_preferred_quality"),
                        i18n_prefer_last_quality: i.i(_.i18n)("options_prefer_last_quality"),
                        i18n_min_stream_szie: i.i(_.i18n)("options_min_stream_size"),
                        i18n_save_and_close: i.i(_.i18n)("options_save_and_close")
                    },
                    r = _.Utils.query("#options-template").textContent;
                t.innerHTML = l.a.render(r, o)
            }
            var t = _.Utils.query("#options");
            e(), t.addEventListener("click", function(t) {
                var i = t.target;
                if (i.classList.contains("close-button")) return void window.close();
                var _ = !!i.checked;
                switch (i.id) {
                    case "on-page-buttons":
                        return u.set("on_page_buttons", _), e(), void a.a.log("CheckBoxClicked", a.a.CHECK_BOX_SHOW_ON_PAGE_BUTTONS + _);
                    case "detach-button":
                        return u.set("detach_enabled", _), void a.a.log("CheckBoxClicked", a.a.CHECK_BOX_DETACH_ENABLED + _);
                    case "one-click-download":
                        return u.set("one_click", _), void a.a.log("CheckBoxClicked", a.a.CHECK_BOX_ENABLE_ONE_CLICK + _);
                    case "prefer-last-quality":
                        return u.set("prefer_last_quality", _), void a.a.log("CheckBoxClicked", a.a.CHECK_BOX_PREFER_LAST_QUALITY + _)
                }
                switch (i.getAttribute("type")) {
                    case "radio":
                        u.set("preferred_quality_level", i.value), a.a.log("OneClickQualityChanged", n.a.getOneClickQualityIndex(i.value))
                }
            }, !1), t.addEventListener("input", function() {
                var e = _.Utils.query("#min-stream-size"),
                    t = _.Utils.query("#min-stream-size-value"),
                    i = +e.value;
                u.set("min_stream_size", i), t.textContent = _.Utils.beautifyFileSize(i)
            }, !1), a.a.log("PageShown", a.a.PAGE_OPTIONS), window.addEventListener("focus", function() {}, !1)
        })
    },
    3: function(e, t, i) {
        "use strict";
        var _ = i(0),
            n = function() {};
        n.SERVER_LOG_URL = "https://coccoc.com/s_log", n.SOURCE_POPUP_PAGE = 0, n.SOURCE_OPTIONS_PAGE = 10, n.SOURCE_CONTENT_SCRIPT = 20, n.SOURCE_BACKGROUND_PAGE = 30, n.prototype = {
            LEGACY_METRICS_NAME_MAP: {
                ButtonClicked: "TryItNowButtonClicked",
                CheckBoxClicked: "OneClickCheckbox"
            },
            get source() {
                if (!chrome.extension.getBackgroundPage) return n.SOURCE_CONTENT_SCRIPT;
                switch (document.location.pathname) {
                    case "/popup.html":
                        return n.SOURCE_POPUP_PAGE;
                    case "/options.html":
                        return n.SOURCE_OPTIONS_PAGE;
                    case "/background.html":
                        return n.SOURCE_BACKGROUND_PAGE;
                    default:
                        return
                }
            },
            _getFullName: function(e) {
                return "Savior." + (this.LEGACY_METRICS_NAME_MAP[e] || e)
            },
            _getTotalValue: function(e, t, i) {
                return 0 === e.indexOf("Refr") || i || "PageShown" === e || "number" != typeof t ? t : t + this.source
            },
            _doLog: function(e, t, i) {
                var _ = this._getFullName(t);
                if (this.source === n.SOURCE_CONTENT_SCRIPT) chrome.runtime.sendMessage({
                    requestType: "metrics",
                    method: "log",
                    params: {
                        name: t,
                        value: i
                    }
                });
                else if (chrome.metricsPrivate) switch (e) {
                    case "recordSmallCount":
                        chrome.metricsPrivate.recordValue({
                            metricName: _,
                            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                            min: 0,
                            max: 100,
                            buckets: 100
                        }, i);
                        break;
                    case "recordValue":
                        chrome.metricsPrivate.recordValue({
                            metricName: _,
                            type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
                            min: 0,
                            max: 1e3,
                            buckets: 1002
                        }, i);
                        break;
                    case "recordSerpData":
                    case "recordClickData":
                        chrome.metricsPrivate[e](i)
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
            log: function(e, t, i) {
                var _ = this._getMethodByName(e),
                    n = this._getTotalValue(e, t, i);
                this._doLog(_, e, n)
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
                var i = new Image,
                    a = [];
                t = Object.assign({
                    action: e,
                    source: this.source,
                    version: _.SAVIOR_VERSION
                }, t), Object.keys(t).reduce(function(e, i) {
                    return a.push(i + "=" + encodeURIComponent(t[i])), a
                }, a), i.src = n.SERVER_LOG_URL + "?" + a.join("&")
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
        }, t.a = new n
    },
    5: function(e, t, i) {
        "use strict";
        var _ = function() {
            this._storage = chrome.storage.local, this._options = {}, this._default = {
                detach_enabled: !0,
                on_page_buttons: !0,
                min_stream_size: 30720,
                prefer_last_quality: !0,
                hide_play_now_tooltip: !1,
                hide_play_now_tooltip_bottom: !1
            };
            var e = this;
            chrome.storage.onChanged.addListener(function(t, i) {
                if ("local" === i)
                    for (var _ in t) e._options[_] = t[_].newValue
            })
        };
        _.prototype = {
            load: function() {
                var e = this;
                return new Promise(function(t) {
                    e._storage.get(null, function(i) {
                        e._options = i, t(i)
                    })
                })
            },
            set: function(e, t) {
                var i = {};
                ("string" == typeof e || "number" == typeof e && void 0 !== t) && (i[e] = t, this._options[e] = t, this._storage.set(i))
            },
            get: function(e) {
                return e in this._options ? this._options[e] : this._default[e]
            }
        }, t.a = new _
    }
}, [170]);