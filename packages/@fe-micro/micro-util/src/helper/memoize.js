"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapCache = (function () {
    function MapCache() {
        this._cache = new Map();
        this.size = 0;
    }
    MapCache.prototype.clear = function () {
        this._cache.clear();
        this.size = 0;
        return this;
    };
    MapCache.prototype.delete = function (key) {
        this._cache.delete(key);
        --this.size;
        return this;
    };
    MapCache.prototype.get = function (key) {
        return this._cache.get(key);
    };
    MapCache.prototype.has = function (key) {
        return this._cache.has(key);
    };
    MapCache.prototype.set = function (key, data) {
        this._cache.set(key, data);
        ++this.size;
        return this;
    };
    return MapCache;
}());
function memoize(func, resolver) {
    if (typeof func !== 'function'
        || (resolver && typeof resolver !== 'function')) {
        throw new TypeError('Expected a function');
    }
    var memoized = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = resolver ? resolver.apply(this, args) : args[0];
        var cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new MapCache;
    return memoized;
}
exports.default = memoize;
