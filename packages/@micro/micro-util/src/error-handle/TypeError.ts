/*
 * @Descripttion: 提供常用的错误处理函数
 * @Author: 蔡远程
 * @Date: 2020-12-15 16:14:21
 * @LastEditTime: 2021-01-25 18:06:43
 */

import { getType, } from '../helper';

export function typeErrorHandle(target: any, expected: string, name: string): void {
    if (getType(target) !== expected) {
        const errorLocation = name ? `(${name}.js)` : '';
        throw TypeError(
            `Argument of type '${getType(
                target
            )}' is not assignable to parameter of type '${expected}'. ${errorLocation}`
        );
    }
}

export function numErrorHandle(target: any, name: string): void {
    if (isNaN(target)) {
        const errorLocation = name ? `(${name}.js)` : '';
        throw TypeError(`The parameter must be Number or Numeric String. ${errorLocation}`);
    }
}
