!function(a,b,c){var d;!function(a){"undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define?define(a):d=a}(function(){function a(a,b){return RegExp.prototype.test.call(a,b)}function b(b){return!a(p,b)}function c(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(a){return String(a).replace(/[&<>"'\/]/g,function(a){return u[a]})}function e(a){this.string=a,this.tail=a,this.pos=0}function f(a,b){this.view=a,this.parent=b,this.clearCache()}function g(){this.clearCache()}function h(a){for(var b,c=a[3],d=c;(b=a[4])&&b.length;)a=b[b.length-1],d=a[3];return[c,d]}function i(a){function b(a,b,c){if(!d[a]){var e=i(b);d[a]=function(a,b){return e(a,b,c)}}return d[a]}function c(c,d,e){for(var f,g,i="",j=0,k=a.length;k>j;++j)switch(f=a[j],f[0]){case"#":g=e.slice.apply(e,h(f)),i+=c._section(f[1],d,g,b(j,f[4],e));break;case"^":i+=c._inverted(f[1],d,b(j,f[4],e));break;case">":i+=c._partial(f[1],d);break;case"&":i+=c._name(f[1],d);break;case"name":i+=c._escaped(f[1],d);break;case"text":i+=f[1]}return i}var d={};return c}function j(a){for(var b,c,d=[],e=d,f=[],g=0;g<a.length;++g)switch(b=a[g],b[0]){case"#":case"^":b[4]=[],f.push(b),e.push(b),e=b[4];break;case"/":if(0===f.length)throw new Error("Unopened section: "+b[1]);if(c=f.pop(),c[1]!==b[1])throw new Error("Unclosed section: "+c[1]);e=f.length>0?f[f.length-1][4]:d;break;default:e.push(b)}if(c=f.pop())throw new Error("Unclosed section: "+c[1]);return d}function k(a){for(var b,c,d=0;d<a.length;++d)b=a[d],c&&"text"===c[0]&&"text"===b[0]?(c[1]+=b[1],c[3]=b[3],a.splice(d--,1)):c=b}function l(a){if(2!==a.length)throw new Error("Invalid tags: "+a.join(" "));return[new RegExp(c(a[0])+"\\s*"),new RegExp("\\s*"+c(a[1]))]}var m={};m.name="mustache.js",m.version="0.7.0",m.tags=["{{","}}"],m.Scanner=e,m.Context=f,m.Writer=g;var n=/\s*/,o=/\s+/,p=/\S/,q=/\s*=/,r=/\s*\}/,s=/#|\^|\/|>|\{|&|=|!/,t=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};m.escape=d,e.prototype.eos=function(){return""===this.tail},e.prototype.scan=function(a){var b=this.tail.match(a);return b&&0===b.index?(this.tail=this.tail.substring(b[0].length),this.pos+=b[0].length,b[0]):""},e.prototype.scanUntil=function(a){var b,c=this.tail.search(a);switch(c){case-1:b=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,c),this.tail=this.tail.substring(c),this.pos+=c}return b},f.make=function(a){return a instanceof f?a:new f(a)},f.prototype.clearCache=function(){this._cache={}},f.prototype.push=function(a){return new f(a,this)},f.prototype.lookup=function(a){var b=this._cache[a];if(!b){if("."===a)b=this.view;else for(var c=this;c;){if(a.indexOf(".")>0){var d=a.split("."),e=0;for(b=c.view;b&&e<d.length;)b=b[d[e++]]}else b=c.view[a];if(null!=b)break;c=c.parent}this._cache[a]=b}return"function"==typeof b&&(b=b.call(this.view)),b},g.prototype.clearCache=function(){this._cache={},this._partialCache={}},g.prototype.compile=function(a,b){return this._compile(this._cache,a,a,b)},g.prototype.compilePartial=function(a,b,c){return this._compile(this._partialCache,a,b,c)},g.prototype.render=function(a,b,c){return this.compile(a)(b,c)},g.prototype._compile=function(a,b,c,d){if(!a[b]){var e=m.parse(c,d),g=i(e),h=this;a[b]=function(a,b){if(b)if("function"==typeof b)h._loadPartial=b;else for(var d in b)h.compilePartial(d,b[d]);return g(h,f.make(a),c)}}return a[b]},g.prototype._section=function(a,b,c,d){var e=b.lookup(a);switch(typeof e){case"object":if(t(e)){for(var f="",g=0,h=e.length;h>g;++g)f+=d(this,b.push(e[g]));return f}return e?d(this,b.push(e)):"";case"function":var i=this,j=function(a){return i.render(a,b)};return e.call(b.view,c,j)||"";default:if(e)return d(this,b)}return""},g.prototype._inverted=function(a,b,c){var d=b.lookup(a);return!d||t(d)&&0===d.length?c(this,b):""},g.prototype._partial=function(a,b){a in this._partialCache||!this._loadPartial||this.compilePartial(a,this._loadPartial(a));var c=this._partialCache[a];return c?c(b):""},g.prototype._name=function(a,b){var c=b.lookup(a);return"function"==typeof c&&(c=c.call(b.view)),null==c?"":String(c)},g.prototype._escaped=function(a,b){return m.escape(this._name(a,b))},m.parse=function(a,d){function f(){if(x&&!y)for(;w.length;)v.splice(w.pop(),1);else w=[];x=!1,y=!1}d=d||m.tags;for(var g,h,i,p,t=l(d),u=new e(a),v=[],w=[],x=!1,y=!1;!u.eos();){if(g=u.pos,i=u.scanUntil(t[0]))for(var z=0,A=i.length;A>z;++z)p=i.charAt(z),b(p)?w.push(v.length):y=!0,v.push(["text",p,g,g+1]),g+=1,"\n"===p&&f();if(g=u.pos,!u.scan(t[0]))break;if(x=!0,h=u.scan(s)||"name",u.scan(n),"="===h)i=u.scanUntil(q),u.scan(q),u.scanUntil(t[1]);else if("{"===h){var B=new RegExp("\\s*"+c("}"+d[1]));i=u.scanUntil(B),u.scan(r),u.scanUntil(t[1]),h="&"}else i=u.scanUntil(t[1]);if(!u.scan(t[1]))throw new Error("Unclosed tag at "+u.pos);v.push([h,i,g,u.pos]),("name"===h||"{"===h||"&"===h)&&(y=!0),"="===h&&(d=i.split(o),t=l(d))}return k(v),j(v)};var v=new g;return m.clearCache=function(){return v.clearCache()},m.compile=function(a,b){return v.compile(a,b)},m.compilePartial=function(a,b,c){return v.compilePartial(a,b,c)},m.render=function(a,b,c){return v.render(a,b,c)},m.to_html=function(a,b,c,d){var e=m.render(a,b,c);return"function"!=typeof d?e:void d(e)},m}());var e=(function(){function a(a,b){var c=a[0]-b[0];return 0!==c?c:(c=a[1]-b[1],0!==c?c:(c=a[2]-b[2],0!==c?c:c=a[3]-b[3]))}var b="",c={mp4:!0},d=0,e=navigator.userAgent.match(/Chrome\/([\d\.]+)/);return e&&e[1]&&(e=e[1].split("."),e=[+e[0],+e[1],+e[2],+e[3]],a(e,[39,0,2171,103])>=0&&(b+=" webm!",c.webm=!0),a(e,[39,0,2171,105])>=0&&(b+=" m3u8!",d=1)),{YT:c,M3U8:d}}(),function(){function a(a){return a&&0!==a.indexOf("data:image")?g.exec(a):[]}var c=b.createElement("a"),d=/([^/]+)$/i,e=/\.([^/.]*)$/i,g={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}.strict,h=a(b.location.href);return{parse:function(a,b){var f=c;f.setAttribute("href",a);var g=(f.pathname.match(d)||[])[1]||"",h=g.split(".").map(function(a){return a.toLowerCase()});g=decodeURIComponent(g.replace(e,"")),h.shift();var i=h[h.length-1]||"",j={url:a,protocol:f.protocol,host:f.host,port:f.port,pathname:f.pathname,filename:g,ext:i,exts:h,hash:f.hash,search:f.search};return j.port||delete j.port,b&&(j.query={},f.search.replace(/^\?/,"").split(/\&/).forEach(function(a){a=a.split("="),j.query[a[0]]=a[1]})),j},parseParamString:function(a){a=a.replace(/^[#?]{1}/,"");var b=a.split("&"),c={};return b.forEach(function(a){var b=a.split("=");f.defined(b[0])&&f.defined(b[1])&&(c[b[0]]=decodeURIComponent(b[1].replace(/\+/g," ")))}),c},format:function(a){if(a=Object.create(a),a.query){a.search=[];for(var b in a.query)"undefined"!=typeof a.query[b]?a.search.push(b+"="+encodeURIComponent(a.query[b])):a.search.push(b);a.search="?"+a.search.join("&"),delete a.query}for(var d in a)c[d]=a[d];var e=c.href;return e},parse0:a,resolve:function(b,c){b=a(b),c||(c=h);var d=b[1],e=b[2],f=b[9],g=b[12],i=b[13];if(!d&&(d=c[1],!e))if(e=c[2],f){if("/"!==f.charAt(0)){var j=c[10]||"/";f=j+f}}else f=c[9],g||(g=c[12]);var k=d+"://"+e+f;return g&&(k+="?"+g),i&&(k+="#"+i),k},getHost:function(b){return a(b)[6]||""},getMediaType:function(b){var c=a(b)[11]||"";if(!c)return"";var d=c.split("."),e=d.length-1;if(0>=e)return"";var f=d[e].toLowerCase();return MEDIA_EXTENSION_TYPE[f]}}}()),f={SIZES:["B","KB","MB","GB","TB","PB"],_BASE:-1!==navigator.appVersion.indexOf("Win")?1024:1e3,xmlParser:new DOMParser,endsWith:function(a,b){var c=a.length-b.length;return c>=0&&a.indexOf(b,c)===c},hash:function(a,b){if(b=0|b,0===a.length)return b;var c,d;for(c=0,d=a.length;d>c;c++)b=(b<<5)-b+a.charCodeAt(c),b|=0;return b},query:function(a,c){return c=c||b,c.querySelector(a)},queryAll:function(a,c){return c=c||b,f.toArray(c.querySelectorAll(a))},findParent:function(a,b){for(;null!==a&&!a.classList.contains(b);)a=a.parentNode;return a},nearestParent:function(a,c){for(;null!==a&&a!==b&&!a.matches(c);)a=a.parentNode;return a},closest:function(a,b){return a.matches(b)?[a]:f.queryAll(b,a)},toArray:function(a){return Array.prototype.slice.call(a)},unique:function(a){var b=[];return Array.isArray(a)?(a.forEach(function(a){-1===b.indexOf(a)&&b.push(a)}),b):a},extend:function(a,b){var c=function(){};c.prototype=a.prototype,b.prototype=new c,b.prototype.constructor=b,b._super=a.prototype},extendObject:function(a){return Array.prototype.forEach.call(Array.prototype.slice.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},isMatches:function(a,b){var c,d,e;if(Array.isArray(a)){for(c=0;c<a.length;++c)if(f.isMatches(a[c],b))return!0;return!1}for(b=Array.isArray(b)?b:[b],c=0,d=b.length,e;d>c;++c)if(e=b[c],"string"==typeof e&&-1!==a.indexOf(e)||e instanceof RegExp&&a.match(e))return!0;return!1},_sendBackgroundRequest:function(a,b,c,d){var e=new i;return chrome.runtime.sendMessage({requestType:"make_http_request",method:a,url:b,params:c,headers:d},function(a){e[a.success?"resolve":"reject"](a.data)}),e},send:function(a,b,c,d){var e=new i,g=null;if(f.IS_CONTENT_SCRIPT)return f._sendBackgroundRequest(a,b,c,d);try{var h=new XMLHttpRequest;if(h.open(a,b,!0),h.setRequestHeader("Cache-Control","no-cache"),"object"==typeof c&&(g=Object.keys(c).map(function(a){return a+"="+c[a]}).join("&")),"object"==typeof d)for(var j in d)h.setRequestHeader(j,d[j]);"POST"===a&&(h.setRequestHeader("Content-type","application/x-www-form-urlencoded"),g&&h.setRequestHeader("Content-Length",g.length)),h.onload=function(){e.resolve(this.responseText)},h.onerror=function(){e.reject()},h.send(g)}catch(k){e.reject()}return e},get:function(a,b){return f.send("GET",a,{},b)},post:function(a,b,c){return f.send("POST",a,b,c)},_getSize:function(a){function b(a){d&&d[a?"resolve":"reject"](a),d=null,c.abort(),clearTimeout(e),e=null}var c=new XMLHttpRequest,d=new i,e=null,f=1e4;return c.open("GET",a),c.setRequestHeader("Cache-Control","no-cache"),c.url=a,c.onreadystatechange=function(){if(!(this.readyState<2)){var a=null;try{a=+this.getResponseHeader("Content-Length"),Number.isNaN(a)&&(a=null)}catch(c){}(null!==a||200===this.status)&&(200!==this.status&&(a=null),b(a))}},c.send(null),e=setTimeout(b,f),d},getSize:function(b){var c=new i,d=a.cache;return d.get(b).success(function(a){a?(c.resolve(a),d.put(b,a)):c.bind(f._getSize(b)).success(d.put.bind(d,b))}).fail(function(){c.bind(f._getSize(b)).success(d.put.bind(d,b))}),c},beautifyFileSize:function(a){if(null===a||"undefined"==typeof a)return"???";for(var b=f._BASE,c=0;c<f.SIZES.length&&a>=b;++c,a/=b);return Math.round(10*a)/10+f.SIZES[c]},detectMediaTypeAndExt:function(a,b){b=b||"";var c=["application/x-mpegurl","application/vnd.apple.mpegurl","audio/x-mpegurl","audio/mpegurl"];if(-1!==c.indexOf(b))return a.type="video",a.ext="m3u8",a;var d=f.getMediaType(b,a.exts);return d&&MEDIA_TYPES[d]&&(a.type=d,a.ext=this._findIntersection(a.exts,MEDIA_TYPES[d].extensions)||f.extByContentType(b,d)||a.ext),a},getMediaType:function(a,b){var c;for(var d in MEDIA_TYPES){if(c=MEDIA_TYPES[d],a.match(c.rgxp))return d;if(Array.isArray(b)&&f._findIntersection(b,c.extensions)||-1!==c.extensions.indexOf(b))return d}return null},_findIntersection:function(a,b){for(var c=a.concat(b),d={},e=0;e<c.length;++e){var f=c[e];if(d[f])return f;d[f]=!0}return null},extByContentType:function(a,b){var c=MEDIA_TYPES[b].ctype2extension;for(var d in c)if(-1!==a.indexOf(d))return c[d];return null},call:function(a,b){if(a&&!(a.length<=0))for(var c=[].slice.call(arguments,2),d=0;d<a.length;d++)a[d].apply(b,c)},isTrue:function(a){return!!a},noop:function(){},defined:function(a){return"undefined"!=typeof a},notNull:function(a){return null!==a},debounce:function(a,b,c){var d;return function(){function e(){c||a.apply(f,g),d=null}var f=this,g=arguments;d?clearTimeout(d):c&&a.apply(f,g),d=setTimeout(e,b||100)}},unescapeHTML:function(){var a;return function(c){a=a||b.createElement("div"),a.innerHTML=(""+c).replace(/</g,"&lt;");var d=a.firstChild.textContent;return a.innerHTML="",d}}(),replaceEntities:function(a){var b={"&amp;":"&"};return String(a).replace(/&amp;/g,function(a){return b[a]})},xpath:function(){function a(a){return a&&a.id&&!/\d/.test(a.id)?"//"+a.tagName+'[@id="'+a.id+'"]':c(a)}function c(a){for(var b=[];a&&a.nodeType==Node.ELEMENT_NODE;a=a.parentNode){for(var c=0,d=!1,e=a.previousSibling;e;e=e.previousSibling)e.nodeType!=Node.DOCUMENT_TYPE_NODE&&e.nodeName==a.nodeName&&++c;for(e=a.nextSibling;e&&!d;e=e.nextSibling)e.nodeName==a.nodeName&&(d=!0);var f=(a.prefix?a.prefix+":":"")+a.localName,g=c||d?"["+(c+1)+"]":"";b.splice(0,0,f+g)}return b.length?"/"+b.join("/"):null}function d(a,c){return c=c||b,b.evaluate(a,c,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}return{forElement:a,find:d}}(),dom:function(){function a(a,b){return Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])}),a}function c(a,b){return Object.keys(b).forEach(function(c){a.style[c]=b[c]}),a}function d(a){var c=b.createElement("div"),d=b.createDocumentFragment();return c.innerHTML=a,[].slice.call(c.childNodes).forEach(d.appendChild,d),c=null,d}function e(a){if(!(a instanceof HTMLElement))return{width:0,height:0};a.matches("embed")&&a.parentNode.matches("object")&&(a=a.parentNode);var b=a.querySelector("embed");return b&&!adFilter.check(b)&&b.offsetWidth&&b.offsetHeight&&(a=b),{width:a.offsetWidth,height:a.offsetHeight}}function f(a){return a.split(";").reduce(function(a,b){var c=b.indexOf(":");if(-1!==c){var d=b.substr(0,c).trim(),e=b.substr(c+1);a[d]=e}return a},{})}function g(a){return Object.keys(a).map(function(b){return b+":"+a[b]}).join(";")}function h(a){for(var b={top:0,left:0,height:a.offsetHeight,width:a.offsetWidth};a;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b}return{attr:function(b,c){Array.isArray(b)?b.forEach(function(b){a(b,c)}):a(b,c)},style:function(a,b){Array.isArray(a)?a.forEach(function(a){c(a,b)}):c(a,b)},setStyleAttr:function(a,b){var c=function(a){var c=a.getAttribute("style")||"",d=f(c);for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);var h=g(d);c!==h&&a.setAttribute("style",h)}.bind(this);Array.isArray(a)?a.forEach(c):c(a)},parseHTML:d,getOffset:h,getEmbedSize:e}}(),google:function(){var a="com|ac|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cc|cd|cf|cat|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|ee|fi|dm|dz|es|fm|fr|ga|ge|gf|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ir|iq|ie|im|io|is|it|je|ki|kg|jo|kz|la|lt|lu|lv|li|lk|md|me|mg|mk|ml|mn|ms|mu|mv|mw|nl|no|nr|nu|pl|ne|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sn|sm|so|tk|tl|tm|to|tn|st|sk|tt|td|vu|ws|vg|tg|us",b="th|id|il|in|jp|ke|ma|kr|mz|ls|nz|tz|ug|uk|uz|ve|vi|za|zm|zw|ao|ck|bw|cr",c="pr|py|qa|sa|sb|sg|sl|sv|tj|tn|tr|tw|gh|gi|gt|hk|jm|kw|lb|lc|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|ph|pk|pg|ua|uy|vc|vn|af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|kh|co|cu|cy|do|ec|eg|et|fj",d=new RegExp("^(www\\.)?google\\.(("+a+")|(co((\\.("+b+"))|m\\.("+c+"))))$","i"),g=/[&?]q=[^&]/i;return{isSERPHost:function(a){return Boolean(a.match(d))},isSERPRequest:function(a){var b=e.parse(a);return Boolean(this.isSERPHost(b.host)&&b.pathname.match(/\/s(earch)?/i)&&b.search.match(g))},getSearchParams:function(a){var b=e.parse(a),c=e.parseParamString(b.search),d=e.parseParamString(b.hash||"#"),g=f.defined(d.q);return{_rawSearch:c,_rawHash:d,q:g?d.q:c.q||null,s:g?d.start||0:c.start||0,tbm:g?d.tbm:c.tbm||null,isXHR:c.tch,isHash:g}}}}()},g=chrome.i18n.getMessage;try{chrome.extension.getBackgroundPage(),f.IS_CONTENT_SCRIPT=!1}catch(h){f.IS_CONTENT_SCRIPT=!0}try{f.IS_INCOGNITO=chrome.extension.inIncognitoContext}catch(h){f.IS_INCOGNITO=!1}var i=function(a){if(0===arguments.length)return this._init(),this;if(a instanceof i)return a;var b=new i;return b.resolve(a),b};i.RUNNING=0,i.RESOLVED=1,i.FAILED=2,i.prototype={constructor:i,_init:function(){this._results=[],this._subscribers=[],this.state=i.RUNNING},_notify:function(){var a=this;this._subscribers.forEach(function(b){b.apply(a,a._results)}),this._subscribers=[]},resolve:function(){return this.state=i.RESOLVED,this._results=arguments,this._notify(),this},reject:function(){return this.state=i.FAILED,this._results=arguments,this._notify(),this},subscribe:function(a){this.state!==i.RUNNING?a.apply(this,this._results):this._subscribers.push(a)},done:function(a){return this.subscribe(a),this},success:function(a){var b=this;return this.subscribe(function(){b.state===i.RESOLVED&&a.apply(b,b._results)}),this},fail:function(a){var b=this;return this.subscribe(function(){b.state===i.FAILED&&a.apply(b,b._results)}),this},bind:function(a){return a=new i(a),a.success(this.resolve.bind(this)).fail(this.reject.bind(this)),this}},i.when=function(){var a=[];return a=Array.isArray(arguments[0])?arguments[0]:f.toArray(arguments),new i.When(a)},i.When=function(a){this._doneCallbacks=[],this._successCallbacks=[],this._failCallbacks=[],this._state=i.RUNNING,this._thingsToDo=a.length,this._results=Array(this._thingsToDo),this._init(a)},i.When.prototype={constructor:i.When,_init:function(a){var b=this;a.forEach(function(a,c){a=new i(a),a.subscribe(function(){a.state===i.FAILED&&(b._state=i.FAILED),b._results[c]=f.toArray(arguments),b._thingsToDo--,b._checkIsDone()})}),this._checkIsDone()},_checkIsDone:function(){if(0!==this._thingsToDo)return!1;var a=[];this._results.forEach(function(b){a=a.concat(b)}),this._state===i.FAILED?this._runCallbacks(this._failCallbacks,a):this._runCallbacks(this._successCallbacks,a),this._runCallbacks(this._doneCallbacks,a),this._doneCallbacks=[],this._successCallbacks=[],this._failCallbacks=[]},_runCallbacks:function(a,b){a.forEach(function(a){a.apply(this,b)})},done:function(a){return this._doneCallbacks.push(a),this._checkIsDone(),this},success:function(a){return this._successCallbacks.push(a),this._checkIsDone(),this},fail:function(a){return this._failCallbacks.push(a),this._checkIsDone(),this}},i.chain=function(){function a(b){if(!b.length)return c.resolve.apply(c,d);var e,f=b.shift();"function"==typeof f?(e=i(f()),e.done(function(c){d.push(c),a(b)})):(d.push(f),a(b))}var b,c=new i,d=[];return b=Array.isArray(arguments[0])?arguments[0]:f.toArray(arguments),a(b),c};var j=function(){this._storage=chrome.storage.local,this._options={},this._default={detach_enabled:!0,on_page_buttons:!0,min_stream_size:30720,prefer_last_quality:!0};var a=this;chrome.storage.onChanged.addListener(function(b,c){if("local"===c)for(var d in b)a._options[d]=b[d].newValue})};j.prototype={load:function(){var a=new i,b=this;return this._storage.get(null,function(c){b._options=c,a.resolve(c)}),a},set:function(a,b){var c={};("string"==typeof a||"number"==typeof a&&"undefined"!=typeof b)&&(c[a]=b,this._options[a]=b,this._storage.set(c))},get:function(a){return a in this._options?this._options[a]:this._default[a]}};var k=function(){};k.QL_HIGH="High",k.QL_MEDIUM="Medium",k.QL_LOW="Low",k.QL_VIDEO_ULTRAHD="Ultra HD",k.QL_VIDEO_FULLHD="Full HD",k.QL_VIDEO_HD="HD",k.QL_VIDEO_STANDARD="Standard",k.QL_VIDEO_MEDIUM="Medium",k.QL_VIDEO_SMALL="Small",k.QL_VIDEO_MOBILE="Mobile";var l={};l[k.QL_VIDEO_ULTRAHD]={quality:k.QL_HIGH,qualityIndex:6,size:3072,videoTitle:"Ultra HD",itag:[38,138]},l[k.QL_VIDEO_FULLHD]={quality:k.QL_HIGH,qualityIndex:5,size:1080,videoTitle:"Full HD",audioTitle:"High",itag:[37,46,137],vimeoQuality:"",zingTag:"f1080",dailymotionQuality:"hd1080",clipvnQuality:"5"},l[k.QL_VIDEO_HD]={quality:k.QL_HIGH,qualityIndex:4,size:720,videoTitle:"HD",audioTitle:"High",itag:[22,45,120,136,247],zingTag:["f720","hq"],vimeoQuality:"hd",dailymotionQuality:["hd","hd720"],facebookQuality:["hd_src","hd_src_no_ratelimit"],JWQuality:"highquality",clipvnQuality:"4"},l[k.QL_VIDEO_STANDARD]={quality:k.QL_MEDIUM,qualityIndex:3,size:480,videoTitle:"Standard",audioTitle:"Normal",itag:[44,35,135,244],zingTag:["f480"],dailymotionQuality:"hq",vimeoQuality:"sd",facebookQuality:["sd_src","sd_src_no_ratelimit"],JWQuality:"location",clipvnQuality:"3"},l[k.QL_VIDEO_MEDIUM]={quality:k.QL_MEDIUM,qualityIndex:2,size:360,videoTitle:"Medium",audioTitle:"Normal",itag:[18,43,34,134,243],vimeoQuality:"",dailymotionQuality:"sd",zingTag:["source","f360"],JWQuality:"lowquality",clipvnQuality:"2"},l[k.QL_VIDEO_SMALL]={quality:k.QL_LOW,qualityIndex:1,size:240,videoTitle:"Small",audioTitle:"Low",itag:[36,5,133,242],dailymotionQuality:"ld",vimeoQuality:"mobile",zingTag:["f","f240"],clipvnQuality:"1"},l[k.QL_VIDEO_MOBILE]={quality:k.QL_LOW,qualityIndex:0,size:144,videoTitle:"Mobile",audioTitle:"Low",itag:[17,6,160],vimeoQuality:"",clipvnQuality:"0"};var m={};m[k.QL_HIGH]=l[k.QL_VIDEO_ULTRAHD].qualityIndex,m[k.QL_MEDIUM]=l[k.QL_VIDEO_STANDARD].qualityIndex,m[k.QL_LOW]=l[k.QL_VIDEO_SMALL].qualityIndex,k.prototype={constructor:k,DEFAULT_QUALITY_LEVEL:k.QL_HIGH,QUALITY_LEVELS:[k.QL_HIGH,k.QL_MEDIUM,k.QL_LOW],VIDEO_QUALITY_LEVELS:[k.QL_VIDEO_ULTRAHD,k.QL_VIDEO_FULLHD,k.QL_VIDEO_HD,k.QL_VIDEO_STANDARD,k.QL_VIDEO_MEDIUM,k.QL_VIDEO_SMALL,k.QL_VIDEO_MOBILE],DEFAULT_QUALITY_TYPE:k.QL_VIDEO_STANDARD,QUALITY_TYPES:l,getFacebookQuality:function(a){return this._getVideoQuality("facebookQuality",a).videoTitle},getDailymotionQuality:function(a){return this._getVideoQuality("dailymotionQuality",a).videoTitle},getZingVideoQuality:function(a){return this._getVideoQuality("zingTag",a).videoTitle},getZingAudioQuality:function(a){return this._getVideoQuality("zingTag",a).audioTitle},getYoutubeQuality:function(a,b){var c=this._getVideoQuality("itag",+a,b);return c&&c.videoTitle},getVimeoQuality:function(a){return this._getVideoQuality("vimeoQuality",a).videoTitle},getClipvnQuality:function(a){return this._getVideoQuality("clipvnQuality",a).videoTitle},getJWQuality:function(a){return this._getVideoQuality("JWQuality",a).videoTitle},_getVideoQuality:function(a,b,c){for(var d in this.QUALITY_TYPES){var e=this.QUALITY_TYPES[d][a];if(Array.isArray(e)||(e=[e]),-1!==e.indexOf(b))return this.QUALITY_TYPES[d]}return c?null:this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]},_getTypeByQualityType:function(a){for(var b in this.QUALITY_TYPES)if(a===b||a===this.QUALITY_TYPES[b].videoTitle||a===this.QUALITY_TYPES[b].audioTitle)return this.QUALITY_TYPES[b];return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE]},_calculateWeight:function(a,b){var c=MEDIA_TYPES[a.get("type")].extensions,d=c.indexOf(a.get("ext")),e=this._getTypeByQualityType(a.get("quality")).qualityIndex,f=d/c.length+Math.abs(b-e)/7;return f},getQualityLevelByType:function(a){return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(a).videoTitle)},getVideoQualityIndex:function(a){return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(a)},getOneClickQualityIndex:function(a){return this.QUALITY_LEVELS.concat().reverse().indexOf(a)},getQualityLevelByQualityType:function(a){return this._getTypeByQualityType(a).quality},chooseBestDownload:function(a,b,c){var d=a.length;if(c)for(var e=0;d>e;++e){var f=a[e];if(f.extQuality()===c)return f}b=b||this.DEFAULT_QUALITY_LEVEL;for(var g=m[b],h=1e3,i=-1,e=0;d>e;++e){var f=a[e],j=this._calculateWeight(f,g);h>j&&(h=j,i=e)}return a[i]}},a.quality=new k,function(){var c=function(){};c.SOURCE_POPUP_PAGE=0,c.SOURCE_OPTIONS_PAGE=10,c.SOURCE_CONTENT_SCRIPT=20,c.SOURCE_BACKGROUND_PAGE=30,c.prototype={LEGACY_METRICS_NAME_MAP:{ButtonClicked:"TryItNowButtonClicked",CheckBoxClicked:"OneClickCheckbox"},get source(){if(!chrome.extension.getBackgroundPage)return c.SOURCE_CONTENT_SCRIPT;switch(b.location.pathname){case"/popup.html":return c.SOURCE_POPUP_PAGE;case"/options.html":return c.SOURCE_OPTIONS_PAGE;case"/background.html":return c.SOURCE_BACKGROUND_PAGE;default:return}},_getFullName:function(a){return"Savior."+(this.LEGACY_METRICS_NAME_MAP[a]||a)},_getTotalValue:function(a,b,c){return c||"PageShown"===a||"number"!=typeof b?b:b+this.source},_doLog:function(a,b,d){var e=this._getFullName(b);if(this.source===c.SOURCE_CONTENT_SCRIPT)chrome.runtime.sendMessage({requestType:"metrics",method:"log",params:{name:b,value:d}});else if(chrome.metricsPrivate)switch(a){case"recordSmallCount":chrome.metricsPrivate.recordSmallCount(e,d);break;case"recordValue":chrome.metricsPrivate.recordValue({metricName:e,type:"histogram-linear",min:0,max:1e3,buckets:1002},d);break;case"recordSerpData":case"recordClickData":chrome.metricsPrivate[a](d)}},_getMethodByName:function(a){switch(a){case"Refr":case"RefrSE":case"RefrFE":return"recordValue";case"SerpData":return"recordSerpData";case"SerpClickData":return"recordClickData";default:return"recordSmallCount"}},log:function(a,b,c){var d=this._getMethodByName(a),e=this._getTotalValue(a,b,c);this._doLog(d,a,e)},logFromContentScript:function(a,b){this.log(a,b,!0)},PAGE_WELCOME_SCREEN:0,PAGE_DOWNLOADS_LIST:1,PAGE_ONE_CLICK_DOWNLOAD:2,PAGE_NO_MEDIA_FOUND:3,PAGE_OPTIONS:4,PAGE_CONTENT_SHOW_CONTROLS:5,PAGE_CONTENT_NO_MEDIA:9,DOWNLOAD_AUTO:0,DOWNLOAD_BUTTON:1,DOWNLOAD_ALL:2,DOWNLOAD_REQUEST_SIZE:3,DOWNLOAD_REQUEST_SIZE_FAILED:4,DOWNLOAD_CANCELED:7,BUTTON_MAIN:0,BUTTON_TRY_IT_NOW:1,BUTTON_SHOW_DOWNLOADS:2,BUTTON_HIDE_DOWNLOADS:3,BUTTON_DOWNLOAD_ALL:4,BUTTON_CHECK_ALL:5,BUTTON_CHECK_NONE:6,BUTTON_FAKE_QUALITY:7,BUTTON_DETACH:8,CHECK_BOX_ENABLE_ONE_CLICK:0,CHECK_BOX_SHOW_ON_PAGE_BUTTONS:2,CHECK_BOX_PREFER_LAST_QUALITY:4,CHECK_BOX_DETACH_ENABLED:6,PIP_DETACH_CLICK:0,PIP_RESTORE_CLICK:1,PIP_SITE_LINK_CLICK:2},a.metrics=new c}();var n;n=chrome.storage?chrome.extension.getBackgroundPage().options:{preferred_quality_level:"High",one_click:!0,get:function(a){return this[a]},load:function(){return{done:function(a){a()}}},set:function(){}},n.load().done(function(){function b(){var a=n.get("preferred_quality_level"),b=n.get("min_stream_size"),e={onPageButtonsEnabled:n.get("on_page_buttons"),detachButtonEnabled:n.get("detach_enabled"),isOneClickEnabled:n.get("one_click"),preferLastQuality:n.get("prefer_last_quality"),minStreamSize:b,minStreamSizeValue:f.beautifyFileSize(b),qLevels:quality.QUALITY_LEVELS.map(function(b){return{i18n_ql_title:g("ql_"+b.toLowerCase()),qLevelName:b,isChecked:b===a}}),i18n_options_title:g("options_title"),i18n_show_on_page_buttons:g("options_show_on_page_buttons"),i18n_show_detach_button:g("options_show_detach_button"),i18n_one_click:g("options_one_click"),i18n_preferred_quality:g("popup_preferred_quality"),i18n_prefer_last_quality:g("options_prefer_last_quality"),i18n_min_stream_szie:g("options_min_stream_size"),i18n_save_and_close:g("options_save_and_close")},h=f.query("#options-template").textContent;c.innerHTML=d.render(h,e)}var c=f.query("#options");b(),c.addEventListener("click",function(c){var d=c.target;if(d.classList.contains("close-button"))return void a.close();var e=!!d.checked;switch(d.id){case"on-page-buttons":return n.set("on_page_buttons",e),b(),void metrics.log("CheckBoxClicked",metrics.CHECK_BOX_SHOW_ON_PAGE_BUTTONS+e);case"detach-button":return n.set("detach_enabled",e),void metrics.log("CheckBoxClicked",metrics.CHECK_BOX_DETACH_ENABLED+e);case"one-click-download":return n.set("one_click",e),void metrics.log("CheckBoxClicked",metrics.CHECK_BOX_ENABLE_ONE_CLICK+e);case"prefer-last-quality":return n.set("prefer_last_quality",e),void metrics.log("CheckBoxClicked",metrics.CHECK_BOX_PREFER_LAST_QUALITY+e)}switch(d.getAttribute("type")){case"radio":n.set("preferred_quality_level",d.value),metrics.log("OneClickQualityChanged",quality.getOneClickQualityIndex(d.value))}},!1),c.addEventListener("change",function(){var a=f.query("#min-stream-size"),b=f.query("#min-stream-size-value"),c=+a.value;n.set("min_stream_size",c),b.textContent=f.beautifyFileSize(c)},!1),metrics.log("PageShown",metrics.PAGE_OPTIONS),a.addEventListener("focus",function(){b()},!1)})}(window,document);