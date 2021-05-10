"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.get = exports.set = void 0;
var set = function (name, value, time) {
    if (name === void 0) { name = ''; }
    if (time === void 0) { time = 0; }
    var exp = new Date();
    exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toUTCString();
};
exports.set = set;
var get = function (name) {
    var arr;
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    return '';
};
exports.get = get;
var remove = function (name) {
    document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};
exports.remove = remove;
