/*
 * @Descripttion: countBy
 * @Author: 曾令涌
 * @Date: 2021-01-28 10:50:36
 * @LastEditTime: 2021-02-05 11:56:18
 */

import { FunctionLike, } from '../types/interface';

export default function countBy<T extends Record<string, any>, S>(
    array: Array<T> | Array<S>,
    iteratee?: FunctionLike | string
): Record<string, number> {

    const { length = 0, } = array;
    if (!Array.isArray(array) || length === 0) {
        return {};
    }

    const iterateeType = typeof iteratee;
    const isFunction = iterateeType === 'function';
    const isString = iterateeType === 'string';
    let hasIteratee = true;

    if (iteratee) {
        if (!isString && !isFunction) {
            throw new TypeError('Expected iteratee is a function or property string');
        }
    } else {
        hasIteratee = false;
    }

    const countObj: Record<string, number> = {};

    for (const item of array) {
        const key = hasIteratee ? (
            isFunction
                ? (iteratee as FunctionLike)(item)
                : (item as T)[iteratee as string]
        ) : item;

        const existCount = countObj[key];
        countObj[key] = (existCount ? existCount : 0) + 1;
    }

    return countObj;
}