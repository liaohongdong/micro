"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decimalNumber(val, decimal) {
    if (decimal === void 0) { decimal = 2; }
    var _baseNum = Math.pow(10, decimal);
    return Math.round(val * _baseNum) / _baseNum;
}
exports.default = decimalNumber;
