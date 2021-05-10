/*
 * @Descripttion: 返回predicate第一个返回真值的第一个元素下标。
 * @Author: 曾令涌
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:34:54
 */

import { PredicateFunc, } from '../types/interface';
import baseFindIndex from './_baseFindIndex';

export default function findIndex<T>(
    arr: Array<T>,
    predicate: PredicateFunc | T,
    fromIndex = 0
): number {
    const { length = 0, } = arr || [];
    if (!length) {
        return -1;
    }
    const index = !fromIndex ? 0 : +fromIndex;

    if (index < 0) {
        return -1;
    }

    return baseFindIndex(arr, predicate, index);
}