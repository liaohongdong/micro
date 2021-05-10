"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("../validator");
function fixedNumber(num, decimal, digits, zero) {
    if (decimal === void 0) { decimal = 2; }
    if (digits === void 0) { digits = -1; }
    if (zero === void 0) { zero = true; }
    num = num.toString().replace(/[^\d.-]+/g, '');
    if (validator_1.isEmpty(num))
        return num;
    var index = num.indexOf('.');
    if (index !== -1) {
        num = num.substring(0, decimal + index + 2);
    }
    else {
        num = num.substring(0);
    }
    num = parseFloat(num).toFixed(decimal);
    if (digits >= 0) {
        var arr = num.split('.');
        arr[0] = digits === 0 ? '0' : arr[0].substring(0, digits);
        num = arr.join('.');
    }
    if (zero) {
        return num;
    }
    return parseFloat(num).toString();
}
exports.default = fixedNumber;
