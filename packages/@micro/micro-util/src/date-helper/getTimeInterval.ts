/*
 * @Descripttion: 获取时间间隔函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:45:02
 */

import { TimeParam, } from '../types/type';

export default function getTimeInterval(date: TimeParam): string {
    date = Number(date);
    if (isNaN(date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    const diff = Number(new Date()) - date;
    if (diff < 0) return '';

    let runTime = diff / 1000;
    const year = Math.floor(runTime / (24 * 60 * 60) / 365);
    runTime = runTime % (24 * 60 * 60 * 365);
    const month = Math.floor(runTime / (24 * 60 * 60) / 30);
    runTime = runTime % (24 * 60 * 60 * 30);
    const day = Math.floor(runTime / (24 * 60 * 60));
    runTime = runTime % (24 * 60 * 60);
    const hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    const minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    const second = runTime;
    let str = '';
    if (year > 0) {
        str = year + '年';
    }
    if (year <= 0 && month > 0) {
        str = month + '月';
    }
    if (year <= 0 && month <= 0 && day > 0) {
        str = day + '天';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
        str = hour + '小时';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
        str = minute + '分钟';
    }
    if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second > 0) {
        str += second + '秒';
    }
    str += '前';
    return str;
}