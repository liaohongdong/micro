"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_PATH = 'Validator';
function isUpperCase(str) {
    TypeError_1.typeErrorHandle(str, 'string', FILE_PATH);
    str = str.replace(/\s+/g, '');
    var reg = /^[A-Z]+$/;
    return reg.test(str);
}
exports.default = isUpperCase;
