/*
 * @Descripttion: 毫秒换算函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:02:54
 */

export default function calcDuration(ms: number): string {
    if (!ms) return '0\'0\'\'0';

    const hour = Math.floor(ms / 3600000);
    const minute = Math.floor(ms / 60000) % 60;
    const second = Math.floor(ms / 1000) % 60;

    return `${hour}'${minute}''${second}`;
}