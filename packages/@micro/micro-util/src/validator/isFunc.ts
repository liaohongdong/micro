/*
 * @Descripttion: 验证类型。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:56:20
 */
import { getType, } from '../helper';

export function isString(target: unknown): boolean {
    return getType(target) === 'string';
}
export function isNumber(target: unknown): boolean {
    return getType(target) === 'number';
}
export function isBoolean(target: unknown): boolean {
    return getType(target) === 'boolean';
}
export function isSymbol(target: unknown): boolean {
    return getType(target) === 'symbol';
}
export function isObject(target: unknown): boolean {
    return getType(target) === 'object';
}
export function isFunction(target: unknown): boolean {
    return getType(target) === 'function';
}
export function isArray(target: unknown): boolean {
    return getType(target) === 'array';
}
export function isDate(target: unknown): boolean {
    return getType(target) === 'date';
}