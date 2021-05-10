/*
 * @Descripttion: 返回predicate最后一个返回真值的第一个元素下标。
 * @Author: 曾令涌
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:35:25
 */

import { PredicateFunc, } from '../types/interface';
import baseFindIndex from './_baseFindIndex';

export default function findLastIndex<T>(
    arr: Array<T>,
    predicate: PredicateFunc | T,
    fromIndex?: number
): number {
    const { length = 0, } = arr || [];
    if (!length) {
        return -1;
    }

    let index = length - 1;
    if (fromIndex !== undefined) {
        index = +fromIndex;
        index = fromIndex < 0
            ? Math.max(length + index, 0)
            : Math.min(index, length - 1);
    }

    if (index < 0) {
        return -1;
    }

    return baseFindIndex(arr, predicate, index, true);
}