"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_PATH = 'Validator';
function isNumCombineLetter(val) {
    TypeError_1.typeErrorHandle(val, 'string', FILE_PATH);
    return /^[0-9a-zA-Z]{1,}$/.test(val);
}
exports.default = isNumCombineLetter;
