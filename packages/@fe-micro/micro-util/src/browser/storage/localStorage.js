"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorage = void 0;
var localStorage;
if (typeof window !== 'undefined') {
    localStorage = window.localStorage;
}
var LocalStorage = (function () {
    function LocalStorage() {
    }
    LocalStorage.set = function (key, value, expires) {
        if (!localStorage)
            throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        if (!key)
            throw new Error('Did not set the Unique Key!');
        var storeObj = {
            data: value,
            expires: expires ? Date.now() + expires : 0,
        };
        localStorage.setItem(key, JSON.stringify(storeObj));
    };
    LocalStorage.get = function (key) {
        if (!localStorage)
            throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        if (!key)
            return null;
        var value = localStorage.getItem(key);
        if (value === null)
            return null;
        var storeObj = JSON.parse(value);
        if (!storeObj.expires)
            return storeObj.data;
        if (storeObj.expires <= Date.now()) {
            localStorage.removeItem(key);
            return null;
        }
        return storeObj.data;
    };
    LocalStorage.remove = function (key) {
        if (!localStorage)
            throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        localStorage.removeItem(key);
    };
    LocalStorage.clear = function () {
        localStorage && localStorage.clear();
    };
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
