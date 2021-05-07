/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: 易鑫
 * @Date: 2021-01-25 18:10:03
 * @LastEditTime: 2021-02-07 15:25:11
 * @Description: 浏览器UA检测
 */
const getUserAgent = (ua?: string): string => {
    if (typeof window !== 'object') {
        if (ua) {
            return ua;
        }
        throw new ReferenceError('[Reference Error] Please run UA in a browser environment!');
    }
    return window.navigator.userAgent;
};

const isFirefox = (ua?: string): boolean => getUserAgent(ua).indexOf('Firefox') > -1;

const isWebKit = (ua?: string): boolean => getUserAgent(ua).indexOf('WebKit') > -1;

const isChrome = (ua?: string): boolean => getUserAgent(ua).indexOf('Chrome') > -1;

const isOpera = (ua?: string): boolean => getUserAgent(ua).indexOf('Opera') > -1;

const isIE = (ua?: string): boolean => getUserAgent(ua).indexOf('compatible') > -1 && getUserAgent(ua).indexOf('MSIE') > -1 && !isOpera(ua);
//IE内核
const trident = (ua?: string): boolean => getUserAgent(ua).indexOf('Trident') > -1;
//opera内核
const Presto = (ua?: string): boolean => getUserAgent(ua).indexOf('Presto') > -1;
//苹果、谷歌内核
const webKit = (ua?: string): boolean => getUserAgent(ua).indexOf('AppleWebKit') > -1;
//火狐内核gecko
const gecko = (ua?: string): boolean => getUserAgent(ua).indexOf('gecko') > -1;
//是否为移动终端
const mobile = (ua?: string): boolean => !!getUserAgent(ua).match(/AppleWebKit.*Mobile.*/);

const isIOS = (ua?: string): boolean => !!getUserAgent(ua).match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const isAndroid = (ua?: string): boolean => getUserAgent(ua).indexOf('Android') > -1 && getUserAgent(ua).indexOf('Linux') > -1;

const iPhone = (ua?: string): boolean => getUserAgent(ua).indexOf('iPhone') > -1;

const iPad = (ua?: string): boolean => getUserAgent(ua).indexOf('iPad') > -1;

const isWechat = (ua?: string): boolean => getUserAgent(ua).indexOf('MicroMessenger') > -1;

const isMobile = (ua?: string): boolean => mobile(ua) || isIOS(ua) || isAndroid(ua) || iPhone(ua) || iPad(ua);

const isPc = (ua?: string): boolean => {
    const userAgentInfo = getUserAgent(ua);
    const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = true;
    for (let v = 0; v < agents.length; v++) {
        if (userAgentInfo.indexOf(agents[v]) > 0) { flag = false; break; }
    }
    return flag;
};

export const UA = {
    isPc,
    isFirefox,
    isChrome,
    isOpera,
    isIE,
    isMobile,
    isIOS,
    isAndroid,
    isWechat,
};