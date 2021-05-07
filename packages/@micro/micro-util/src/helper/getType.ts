/*
 * @Descripttion: 获取类型函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:18:11
 */

export default function getType(target: any): string {
    const type = Object.prototype.toString.call(target).slice(8, -1);
    return type.toLowerCase();
}