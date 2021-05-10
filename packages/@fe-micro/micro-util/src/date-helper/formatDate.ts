/*
 * @Descripttion: 日期格式化函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:35
 * @LastEditTime: 2021-02-05 12:05:21
 */

import { TimeParam, } from '../types/type';

export default function formatDate(date: TimeParam, format = 'YYYY-MM-DD hh:mm:ss'): string {
    if (date === null || date === undefined || date === '') {
        return '';
    }
    date = Number(date);
    if (isNaN(date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    date = new Date(date);
    const o = {
        'M+': date['getMonth']() + 1, //month
        'D+': date['getDate'](), //day
        'h+': date['getHours'](), //hour
        'm+': date['getMinutes'](), //minute
        's+': date['getSeconds'](), //second
        'Q+': Math.floor((date['getMonth']() + 3) / 3), //quarter
        'S': date['getMilliseconds'](), //millisecond
    };
    enum week {
        '星期日' = 0,
        '星期一' = 1,
        '星期二' = 2,
        '星期三' = 3,
        '星期四' = 4,
        '星期五' = 5,
        '星期六' = 6,
    }
    if (/(Y+)/.test(format))
        format = format.replace(RegExp.$1, (date['getFullYear']() + '').substr(4 - RegExp.$1.length));
    if (/(W+)/.test(format)) format = format.replace(RegExp.$1, week[date['getDay']()]);

    let k: keyof typeof o;
    for (k in o)
        if (new RegExp('(' + k + ')').test(format))
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] + '' : ('00' + o[k]).substr(('' + o[k]).length)
            );
    return format;
}