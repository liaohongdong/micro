"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniqBy(arr, predicate) {
    var set = new Set();
    var result = [];
    var idx = 0;
    while (idx < arr.length) {
        var item = arr[idx];
        var appliedItem = typeof predicate === 'function'
            ? predicate(item)
            : item[predicate];
        if (!set.has(appliedItem)) {
            set.add(appliedItem);
            result.push(item);
        }
        idx += 1;
    }
    return result;
}
exports.default = uniqBy;
