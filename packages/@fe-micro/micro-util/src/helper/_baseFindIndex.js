"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function baseFindIndex(arr, predicate, fromIndex, fromRight) {
    if (fromRight === void 0) { fromRight = false; }
    var length = arr.length;
    var index = fromIndex + (fromRight ? 1 : -1);
    while ((fromRight ? index-- : ++index < length)) {
        if (typeof predicate === 'function') {
            if (predicate(arr[index], index, arr)) {
                return index;
            }
        }
        else {
            if (arr[index] === predicate) {
                return index;
            }
        }
    }
    return -1;
}
exports.default = baseFindIndex;
