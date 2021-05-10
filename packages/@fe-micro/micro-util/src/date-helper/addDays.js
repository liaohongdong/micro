"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addDays(n, date) {
    if (n === void 0) { n = 0; }
    if (date === void 0) { date = new Date(); }
    if (isNaN(+date)) {
        throw TypeError('The parameter must be Number Date or Numeric String. (DateHelper.js)');
    }
    date = new Date(+date);
    date.setDate(date.getDate() + n);
    var Y = date.getFullYear();
    var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var result = Y + '-' + M + '-' + D;
    return result;
}
exports.default = addDays;
