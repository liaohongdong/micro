/*
 * @Descripttion: 将函数转化为带缓存功能的函数
 * @Author: 曾令涌
 * @Date: 2021-01-26 15:38:36
 * @LastEditTime: 2021-02-05 11:56:38
 */

import { FunctionLike, } from '../types/interface';
class MapCache {
    _cache: Map<any, any>;
    size: number;

    constructor() {
        this._cache = new Map();
        this.size = 0;
    }

    clear() {
        this._cache.clear();
        this.size = 0;
        return this;
    }

    delete(key: any) {
        this._cache.delete(key);
        --this.size;
        return this;
    }

    get(key: any) {
        return this._cache.get(key);
    }

    has(key: any) {
        return this._cache.has(key);
    }

    set(key: any, data: any): MapCache {
        this._cache.set(key, data);
        ++this.size;
        return this;
    }
}

export default function memoize(func: FunctionLike, resolver?: FunctionLike): FunctionLike {
    if (
        typeof func !== 'function'
        || (resolver && typeof resolver !== 'function')
    ) {
        throw new TypeError('Expected a function');
    }

    const memoized: FunctionLike = function(this, ...args) {
        const key = resolver ? resolver.apply(this, args) : args[0];
        const cache = (memoized as Record<string, any>).cache;

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = func.apply(this, args);
        (memoized as Record<string, any>).cache = cache.set(key, result) || cache;
        return result;
    };

    (memoized as Record<string, any>).cache = new MapCache;
    return memoized;
}