/*
 * @Descripttion: ---
 * @Author: 曾令涌
 * @Date: 2021-01-27 15:38:36
 * @LastEditTime: 2021-02-05 11:57:00
 */
import getType from './getType';
import { FunctionLike, } from '../types/interface';

export default function unionBy(...arrays: any[]): any[] {
    const iteratee = arrays.pop();
    const result = [];
    const isFunction = typeof iteratee === 'function';
    const isString = typeof iteratee === 'string';

    // 判断规则仅支持函数或属性名字符串
    if (!isFunction && !isString) {
        throw new TypeError('Expected iteratee is a function or property string');
    }

    const _map = new Map();
    for (const array of arrays) {
        for (const item of array) {
            let key;
            if (isFunction) {
                // 函数根据函数执行结果作为唯一性判断
                key = (iteratee as FunctionLike)(item);
                if (_map.has(key)) {
                    continue;
                }
            } else {
                // 属性名字符串仅支持对象数组
                if (getType(item) !== 'object') {
                    throw new TypeError('Expected arrays is object array by iteratee is property string');
                }
                // 根据对象属性值作为唯一性判断
                key = item[iteratee as string];
                if (key !== undefined && _map.has(key)) {
                    continue;
                }
            }
            _map.set(key, true);
            result.push(item);
        }
    }
    return result;
}