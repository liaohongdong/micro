"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UA = void 0;
var getUserAgent = function (ua) {
    if (typeof window !== 'object') {
        if (ua) {
            return ua;
        }
        throw new ReferenceError('[Reference Error] Please run UA in a browser environment!');
    }
    return window.navigator.userAgent;
};
var isFirefox = function (ua) { return getUserAgent(ua).indexOf('Firefox') > -1; };
var isWebKit = function (ua) { return getUserAgent(ua).indexOf('WebKit') > -1; };
var isChrome = function (ua) { return getUserAgent(ua).indexOf('Chrome') > -1; };
var isOpera = function (ua) { return getUserAgent(ua).indexOf('Opera') > -1; };
var isIE = function (ua) { return getUserAgent(ua).indexOf('compatible') > -1 && getUserAgent(ua).indexOf('MSIE') > -1 && !isOpera(ua); };
var trident = function (ua) { return getUserAgent(ua).indexOf('Trident') > -1; };
var Presto = function (ua) { return getUserAgent(ua).indexOf('Presto') > -1; };
var webKit = function (ua) { return getUserAgent(ua).indexOf('AppleWebKit') > -1; };
var gecko = function (ua) { return getUserAgent(ua).indexOf('gecko') > -1; };
var mobile = function (ua) { return !!getUserAgent(ua).match(/AppleWebKit.*Mobile.*/); };
var isIOS = function (ua) { return !!getUserAgent(ua).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); };
var isAndroid = function (ua) { return getUserAgent(ua).indexOf('Android') > -1 && getUserAgent(ua).indexOf('Linux') > -1; };
var iPhone = function (ua) { return getUserAgent(ua).indexOf('iPhone') > -1; };
var iPad = function (ua) { return getUserAgent(ua).indexOf('iPad') > -1; };
var isWechat = function (ua) { return getUserAgent(ua).indexOf('MicroMessenger') > -1; };
var isMobile = function (ua) { return mobile(ua) || isIOS(ua) || isAndroid(ua) || iPhone(ua) || iPad(ua); };
var isPc = function (ua) {
    var userAgentInfo = getUserAgent(ua);
    var agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;
    for (var v = 0; v < agents.length; v++) {
        if (userAgentInfo.indexOf(agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
exports.UA = {
    isPc: isPc,
    isFirefox: isFirefox,
    isChrome: isChrome,
    isOpera: isOpera,
    isIE: isIE,
    isMobile: isMobile,
    isIOS: isIOS,
    isAndroid: isAndroid,
    isWechat: isWechat,
};
