/*
 * @Descripttion: 日期增加函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:35
 * @LastEditTime: 2021-01-29 14:24:32
 */
import { TimeParam, } from '../types/type';

export default function addDays(n = 0, date: TimeParam = new Date() ): string {
    if (isNaN(+date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    date = new Date(+date);
    date.setDate(date.getDate() + n);
    const Y = date.getFullYear();
    const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const result = Y + '-' + M + '-' + D;
    return result;
}