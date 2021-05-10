"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helper");
function isObjDeepEqual(obj1, obj2, skipFunc, log) {
    if (skipFunc === void 0) { skipFunc = false; }
    if (log === void 0) { log = false; }
    var IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
    var type1 = helper_1.getType(obj1);
    var type2 = helper_1.getType(obj2);
    if (type1 !== type2) {
        if (!IS_PROD && log)
            console.warn('The type of own is unequal', obj1, obj2, type1, type2);
        return false;
    }
    if (type1 === 'object') {
        var keys1 = Object.keys(obj1);
        var keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            if (!IS_PROD && log)
                console.warn('The length of own property is unequal', obj1, obj2, keys1, keys2);
            return false;
        }
        return keys1.every(function (key) { return isObjDeepEqual(obj1[key], obj2[key], skipFunc, log); });
    }
    else if (type1 === 'array') {
        if (obj1.length !== obj2.length) {
            if (!IS_PROD && log)
                console.warn('The length of own is unequal', obj1, obj2, obj1.length, obj2.length);
            return false;
        }
        return obj1.every(function (item, index) { return isObjDeepEqual(item, obj2[index], skipFunc, log); });
    }
    else if (type1 === 'function') {
        var flag_1 = skipFunc || obj1.toString() === obj2.toString();
        if (!flag_1 && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1.toString(), obj2.toString());
        return flag_1;
    }
    else if (type1 === 'symbol') {
        var flag_2 = obj1.toString() === obj2.toString();
        if (!flag_2 && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1.toString(), obj2.toString());
        return flag_2;
    }
    else if (type1 === 'date') {
        var flag_3 = obj1.getTime() === obj2.getTime();
        if (!flag_3 && !IS_PROD && log)
            console.warn('The value of function is unequal', obj1, obj2, obj1.getTime(), obj2.getTime());
        return flag_3;
    }
    var flag = obj1 === obj2;
    if (!flag && !IS_PROD && log)
        console.warn('The value of own is unequal', obj1, obj2);
    return flag;
}
exports.default = isObjDeepEqual;
