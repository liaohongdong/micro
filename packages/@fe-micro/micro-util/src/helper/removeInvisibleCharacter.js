"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_PATH = 'Validator';
function removeInvisibleCharacter(content) {
    TypeError_1.typeErrorHandle(content, 'string', FILE_PATH);
    return content.replace(/[\u200b-\u200f\uFEFF\u202a-\u202e]/g, '');
}
exports.default = removeInvisibleCharacter;
