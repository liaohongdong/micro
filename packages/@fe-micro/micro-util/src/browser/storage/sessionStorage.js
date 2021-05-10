"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorage = void 0;
var sessionStorage;
if (typeof window !== 'undefined') {
    sessionStorage = window.sessionStorage;
}
var SessionStorage = (function () {
    function SessionStorage() {
    }
    SessionStorage.set = function (key, value) {
        if (!sessionStorage)
            throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        if (!key)
            throw new Error('Did not set the Unique Key!');
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    SessionStorage.get = function (key) {
        if (!sessionStorage)
            throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        if (!key)
            return null;
        var storeObj = sessionStorage.getItem(key);
        if (storeObj === null)
            return null;
        return JSON.parse(storeObj);
    };
    SessionStorage.remove = function (key) {
        if (!sessionStorage)
            throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        sessionStorage.removeItem(key);
    };
    SessionStorage.clear = function () {
        sessionStorage && sessionStorage.clear();
    };
    return SessionStorage;
}());
exports.SessionStorage = SessionStorage;
