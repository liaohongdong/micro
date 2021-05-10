import { LocalStorage, } from '../storage/LocalStorage';

// 获取token
export function getToken() {
    return LocalStorage.getToken();
}

/**
 * 设置token
 * @param {*} token
 * @returns
 */
export function setToken(token) {
    return LocalStorage.setToken(token);
}

/**
 * 删除token
 * @returns
 */
export function removeToken() {
    return LocalStorage.removeToken();
}

/**
 * 获取头部认证信息
 * @returns
 */
export function getAuthorization() {
    let token = LocalStorage.getToken();
    return {
        'Authorization': 'bearer ' + token,
        'x-ca-language': LocalStorage.getLanguage() === 'en' ? 'en_US' : 'zh_CN',
        'x-ca-reqid': Math.random() + new Date().getTime(),
        'x-ca-reqtime': new Date().getTime(),
    }
}