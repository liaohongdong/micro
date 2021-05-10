/*
 * @Descripttion: 数组去重
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:19:59
 */

export default function uniq<T>(arr: Array<T>): Array<T> {
    return Array.from(new Set(arr));
}