/*
 * @Descripttion: findIndex/findLastIndex
 * @Author: 曾令涌
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-02-03 16:56:54
 */

import { PredicateFunc, } from '../types/interface';

export default function baseFindIndex<T>(
    arr: Array<T>,
    predicate: PredicateFunc | T,
    fromIndex: number,
    fromRight = false
): number {
    const { length, } = arr;
    let index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
        if (typeof predicate === 'function') {
            if ((<PredicateFunc>predicate)(arr[index], index, arr)) {
                return index;
            }
        } else {
            if (arr[index] === predicate) {
                return index;
            }
        }
    }
    return -1;
}