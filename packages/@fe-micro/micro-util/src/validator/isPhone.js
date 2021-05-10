"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_PATH = 'Validator';
function isPhone(phone) {
    TypeError_1.typeErrorHandle(phone, 'string', FILE_PATH);
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone);
}
exports.default = isPhone;
