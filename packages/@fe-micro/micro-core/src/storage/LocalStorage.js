import {
    AUTH_CODE_LIST,
    TOKEN_CACHE,
    USER_INFO_CACHE,
    ORIGINAL_MENU,
    SIDEBAR_STATUS,
    WITHOUTANIMATION,
    ACTIVESUBPANEL,
    FLAT_MENU,
    ACTIVE_MENU,
    ACTIVED_MENU_CHILD_CACHE,
    LANGUAGE,
    SUBAPPLICATION_ROUTES_CACHE,
    EXTRACT_ROUTER_VIEW,
    REDIRECT_URL,
    INIT404LIST,
} from './keys';

const prefix = 'micro-micro:';
export class LocalStorage {
    static _set(key, val) {
        return window.localStorage.setItem(`${prefix}${key}`, JSON.stringify(val));
    }
    static _remove(key) {
        return window.localStorage.removeItem(`${prefix}${key}`);
    }
    static _get(key) {
        const item = window.localStorage.getItem(`${prefix}${key}`);
        if (!item) {
            return null;
        }
        return JSON.parse(item);
    }
    static clear() {
        window.localStorage.clear();
    }

    /**
     * inner core project
     */
    static setAuthCodeList(val) {
        return this._set(AUTH_CODE_LIST, val);
    }
    static getAuthCodeList() {
        return this._get(AUTH_CODE_LIST);
    }
    static removeAuthCodeList() {
        return this._remove(AUTH_CODE_LIST);
    }

    static setToken(val) {
        return this._set(TOKEN_CACHE, val);
    }
    static getToken() {
        return this._get(TOKEN_CACHE);
    }
    static removeToken() {
        return this._remove(TOKEN_CACHE);
    }
    static setUserInfo(val) {
        return this._set(USER_INFO_CACHE, val);
    }
    static getUserInfo() {
        return this._get(USER_INFO_CACHE);
    }
    static removeUserInfo() {
        return this._remove(USER_INFO_CACHE);
    }
    static setOriginalMenu(val) {
        return this._set(ORIGINAL_MENU, val);
    }
    static getOriginalMenu() {
        return this._get(ORIGINAL_MENU);
    }
    static removeOriginalMenu() {
        return this._remove(ORIGINAL_MENU);
    }
    static setSidebarStatus(val) {
        return this._set(SIDEBAR_STATUS, val);
    }
    static getSidebarStatus() {
        return this._get(SIDEBAR_STATUS);
    }
    static removeSidebarStatus() {
        return this._remove(SIDEBAR_STATUS);
    }

    static setWithoutAnimation(val) {
        return this._set(WITHOUTANIMATION, val);
    }
    static getWithoutAnimation() {
        return this._get(WITHOUTANIMATION);
    }
    static removeWithoutAnimation() {
        return this._remove(WITHOUTANIMATION);
    }

    static setActiveSubPanel(val) {
        return this._set(ACTIVESUBPANEL, val);
    }
    static getActiveSubPanel() {
        return this._get(ACTIVESUBPANEL);
    }
    static removeActiveSubPanel() {
        return this._remove(ACTIVESUBPANEL);
    }

    static setFlatMenu(val) {
        return this._set(FLAT_MENU, val);
    }
    static getFlatMenu() {
        return this._get(FLAT_MENU);
    }
    static removeFlatMenu() {
        return this._remove(FLAT_MENU);
    }
    static setActiveMenu(val) {
        return this._set(ACTIVE_MENU, val);
    }
    static getActiveMenu() {
        return this._get(ACTIVE_MENU);
    }
    static removeActiveMenu() {
        return this._remove(ACTIVE_MENU);
    }

    static setActiveMenuChild(val) {
        return this._set(ACTIVED_MENU_CHILD_CACHE, val);
    }
    static getActiveMenuChild() {
        return this._get(ACTIVED_MENU_CHILD_CACHE);
    }
    static this() {
        return this._remove(ACTIVED_MENU_CHILD_CACHE);
    }

    static setLanguage(val) {
        return this._set(LANGUAGE, val);
    }
    static getLanguage() {
        return this._get(LANGUAGE);
    }
    static removeLanguage() {
        return this._remove(LANGUAGE);
    }
    static setSubapplicationRoutes(val) {
        return this._set(SUBAPPLICATION_ROUTES_CACHE, val);
    }
    static getSubapplicationRoutes() {
        return this._get(SUBAPPLICATION_ROUTES_CACHE);
    }
    static removeSubapplicationRoutes() {
        return this._remove(SUBAPPLICATION_ROUTES_CACHE);
    }

    static setExtractRouterView(val) {
        return this._set(EXTRACT_ROUTER_VIEW, val);
    }
    static getExtractRouterView() {
        return this._get(EXTRACT_ROUTER_VIEW);
    }
    static removeExtractRouterView() {
        return this._remove(EXTRACT_ROUTER_VIEW);
    }

    static setRedirectUrl(val) {
        return this._set(REDIRECT_URL, val);
    }
    static getRedirectUrl() {
        return this._get(REDIRECT_URL);
    }
    static removeRedirectUrl() {
        return this._remove(REDIRECT_URL);
    }

    static setInit404List(val) {
        let data = this.getInit404List();
        if (!data) {
            return this._set(INIT404LIST, [val]);
        } else {
            if (data?.indexOf(val) === -1) {
                data.push(val);
                return this._set(INIT404LIST, data);
            }
        }
    }
    static getInit404List() {
        return this._get(INIT404LIST);
    }
    static removeInit404List() {
        return this._remove(INIT404LIST);
    }

}

