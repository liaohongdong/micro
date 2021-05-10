"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numErrorHandle = exports.typeErrorHandle = void 0;
var helper_1 = require("../helper");
function typeErrorHandle(target, expected, name) {
    if (helper_1.getType(target) !== expected) {
        var errorLocation = name ? "(" + name + ".js)" : '';
        throw TypeError("Argument of type '" + helper_1.getType(target) + "' is not assignable to parameter of type '" + expected + "'. " + errorLocation);
    }
}
exports.typeErrorHandle = typeErrorHandle;
function numErrorHandle(target, name) {
    if (isNaN(target)) {
        var errorLocation = name ? "(" + name + ".js)" : '';
        throw TypeError("The parameter must be Number or Numeric String. " + errorLocation);
    }
}
exports.numErrorHandle = numErrorHandle;
