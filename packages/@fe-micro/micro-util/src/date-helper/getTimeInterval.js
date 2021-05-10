"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTimeInterval(date) {
    date = Number(date);
    if (isNaN(date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    var diff = Number(new Date()) - date;
    if (diff < 0)
        return '';
    var runTime = diff / 1000;
    var year = Math.floor(runTime / (24 * 60 * 60) / 365);
    runTime = runTime % (24 * 60 * 60 * 365);
    var month = Math.floor(runTime / (24 * 60 * 60) / 30);
    runTime = runTime % (24 * 60 * 60 * 30);
    var day = Math.floor(runTime / (24 * 60 * 60));
    runTime = runTime % (24 * 60 * 60);
    var hour = Math.floor(runTime / 3600);
    runTime = runTime % 3600;
    var minute = Math.floor(runTime / 60);
    runTime = runTime % 60;
    var second = runTime;
    var str = '';
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
exports.default = getTimeInterval;
