"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_PATH = 'Validator';
function isMobile(mobile) {
    TypeError_1.typeErrorHandle(mobile, 'string', FILE_PATH);
    return /^1[3456789]\d{9}$/.test(mobile);
}
exports.default = isMobile;
