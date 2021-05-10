"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = exports.isArray = exports.isFunction = exports.isObject = exports.isSymbol = exports.isBoolean = exports.isNumber = exports.isString = void 0;
var helper_1 = require("../helper");
function isString(target) {
    return helper_1.getType(target) === 'string';
}
exports.isString = isString;
function isNumber(target) {
    return helper_1.getType(target) === 'number';
}
exports.isNumber = isNumber;
function isBoolean(target) {
    return helper_1.getType(target) === 'boolean';
}
exports.isBoolean = isBoolean;
function isSymbol(target) {
    return helper_1.getType(target) === 'symbol';
}
exports.isSymbol = isSymbol;
function isObject(target) {
    return helper_1.getType(target) === 'object';
}
exports.isObject = isObject;
function isFunction(target) {
    return helper_1.getType(target) === 'function';
}
exports.isFunction = isFunction;
function isArray(target) {
    return helper_1.getType(target) === 'array';
}
exports.isArray = isArray;
function isDate(target) {
    return helper_1.getType(target) === 'date';
}
exports.isDate = isDate;
