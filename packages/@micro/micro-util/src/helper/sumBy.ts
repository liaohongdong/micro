/*
 * @Descripttion: 对数组项(对象属性值)求和
 * @Author: 曾令涌
 * @Date: 2021-01-27 15:38:36
 * @LastEditTime: 2021-02-05 11:56:53
 */

import { FunctionLike, } from '../types/interface';

export default function sumBy<T extends Record<string, any>, S>(
    array: Array<T> | Array<S>,
    iteratee?: FunctionLike | string
): number | string | undefined {
    const { length = 0, } = array;
    if (!Array.isArray(array) || !length) {
        return 0;
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

    let result;
    for (const item of array) {
        const current = hasIteratee ? (
            isFunction
                ? (iteratee as FunctionLike)(item)
                : (item as T)[iteratee as string]
        ) : item;
        result = result === undefined ? current : result + current;
    }

    return result;
}