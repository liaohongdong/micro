"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_NAME = 'MathHelper';
function number2Byte(limit) {
    TypeError_1.numErrorHandle(limit, FILE_NAME);
    limit = Number(limit);
    var size = '';
    if (limit < 0.1 * 1024) {
        size = limit.toFixed(2) + 'B';
    }
    else if (limit < 0.1 * 1024 * 1024) {
        size = (limit / 1024).toFixed(2) + 'KB';
    }
    else if (limit < 0.1 * 1024 * 1024 * 1024) {
        size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
    }
    else if (limit < 0.1 * 1024 * 1024 * 1024 * 1024) {
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
    }
    else {
        size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TB';
    }
    var sizestr = size + '';
    var len = sizestr.indexOf('\.');
    var dec = sizestr.substr(len + 1, 2);
    if (dec === '00') {
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
}
exports.default = number2Byte;
