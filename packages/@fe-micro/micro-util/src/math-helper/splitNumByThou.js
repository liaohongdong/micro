"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var validator_1 = require("../validator");
var FILE_NAME = 'MathHelper';
function splitNumByThou(number, sign) {
    if (sign === void 0) { sign = ','; }
    TypeError_1.numErrorHandle(number, FILE_NAME);
    if (validator_1.isEmpty(number))
        return number;
    var parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign);
    return parts.join('.');
}
exports.default = splitNumByThou;
