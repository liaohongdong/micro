/*
 * @Descripttion: 序列化函数
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:19:11
 */

export default function serialize(data: Record<string, number | boolean | string>): string {
    const list: Array<string> = [];
    for (const key in data) {
        list.push(`${key}=${data[key]}`);
    }
    return list.join('&');
}