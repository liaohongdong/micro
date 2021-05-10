"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(date, format) {
    if (format === void 0) { format = 'YYYY-MM-DD hh:mm:ss'; }
    if (date === null || date === undefined || date === '') {
        return '';
    }
    date = Number(date);
    if (isNaN(date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    date = new Date(date);
    var o = {
        'M+': date['getMonth']() + 1,
        'D+': date['getDate'](),
        'h+': date['getHours'](),
        'm+': date['getMinutes'](),
        's+': date['getSeconds'](),
        'Q+': Math.floor((date['getMonth']() + 3) / 3),
        'S': date['getMilliseconds'](),
    };
    var week;
    (function (week) {
        week[week["\u661F\u671F\u65E5"] = 0] = "\u661F\u671F\u65E5";
        week[week["\u661F\u671F\u4E00"] = 1] = "\u661F\u671F\u4E00";
        week[week["\u661F\u671F\u4E8C"] = 2] = "\u661F\u671F\u4E8C";
        week[week["\u661F\u671F\u4E09"] = 3] = "\u661F\u671F\u4E09";
        week[week["\u661F\u671F\u56DB"] = 4] = "\u661F\u671F\u56DB";
        week[week["\u661F\u671F\u4E94"] = 5] = "\u661F\u671F\u4E94";
        week[week["\u661F\u671F\u516D"] = 6] = "\u661F\u671F\u516D";
    })(week || (week = {}));
    if (/(Y+)/.test(format))
        format = format.replace(RegExp.$1, (date['getFullYear']() + '').substr(4 - RegExp.$1.length));
    if (/(W+)/.test(format))
        format = format.replace(RegExp.$1, week[date['getDay']()]);
    var k;
    for (k in o)
        if (new RegExp('(' + k + ')').test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] + '' : ('00' + o[k]).substr(('' + o[k]).length));
    return format;
}
exports.default = formatDate;
