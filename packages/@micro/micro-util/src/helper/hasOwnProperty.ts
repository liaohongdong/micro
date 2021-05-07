/*
 * @Descripttion: 指示对象自身属性中是否具有指定的属性
 * @Author: 蔡远程
 * @Date: 2021-03-05 10:39:47
 * @LastEditTime: 2021-03-05 10:48:13
 * @LastEditors: 蔡远程
 */

export default function hasOwnProperty(obj: Record<string, unknown>, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
}