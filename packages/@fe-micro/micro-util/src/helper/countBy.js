"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countBy(array, iteratee) {
    var _a = array.length, length = _a === void 0 ? 0 : _a;
    if (!Array.isArray(array) || length === 0) {
        return {};
    }
    var iterateeType = typeof iteratee;
    var isFunction = iterateeType === 'function';
    var isString = iterateeType === 'string';
    var hasIteratee = true;
    if (iteratee) {
        if (!isString && !isFunction) {
            throw new TypeError('Expected iteratee is a function or property string');
        }
    }
    else {
        hasIteratee = false;
    }
    var countObj = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        var key = hasIteratee ? (isFunction
            ? iteratee(item)
            : item[iteratee]) : item;
        var existCount = countObj[key];
        countObj[key] = (existCount ? existCount : 0) + 1;
    }
    return countObj;
}
exports.default = countBy;
