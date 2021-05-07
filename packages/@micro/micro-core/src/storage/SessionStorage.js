import {
    TAG_CACHE,
    ROUTES_CACHE,
    TAGLIST_CACHE,
    TENANT_INFO,
} from './keys';
import { LocalStorage } from './LocalStorage';
const prefix = 'nextop-micro:';
export class SessionStorage {
    static _set(key, val) {
        return window.sessionStorage.setItem(`${prefix}${key}`, JSON.stringify(val));
    }
    static _remove(key) {
        return window.sessionStorage.removeItem(`${prefix}${key}`);
    }
    static _get(key) {
        const item = window.sessionStorage.getItem(`${prefix}${key}`);
        if (!item) {
            return null;
        }
        return JSON.parse(item);
    }
    static clear() {
        window.sessionStorage.clear();
    }

    static setRoutes(val) {
        return this._set(ROUTES_CACHE, val);
    }
    static getRoutes() {
        return this._get(ROUTES_CACHE);
    }
    static removeRoutes() {
        return this._remove(ROUTES_CACHE);
    }
    static setTagList(val) {
        return this._set(TAGLIST_CACHE, val);
    }
    static getTagList() {
        return this._get(TAGLIST_CACHE);
    }
    static removeTagList() {
        return this._remove(TAGLIST_CACHE);
    }
    static setTag(val) {
        return this._set(TAG_CACHE, val);
    }
    static getTag() {
        return this._get(TAG_CACHE);
    }
    static removeTag() {
        return this._remove(TAG_CACHE);
    }
    static setTenantInfo(val) {
        return this._set(TENANT_INFO, val);
    }
    static getTenantInfo() {
        return this._get(TENANT_INFO);
    }
    static removeTenantInfo() {
        return this._remove(TENANT_INFO);
    }
}
