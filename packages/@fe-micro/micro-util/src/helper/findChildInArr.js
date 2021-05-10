"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findChildInArr(array, value, key, likeCompare, childrenKey) {
    if (key === void 0) { key = 'id'; }
    if (likeCompare === void 0) { likeCompare = false; }
    if (childrenKey === void 0) { childrenKey = 'children'; }
    if (!Array.isArray(array)) {
        throw new Error('Array must be an array!');
    }
    if (!value) {
        throw new TypeError('Value must not be null!');
    }
    var obj = {
        root: null,
        item: null,
    };
    var findDeepestChild = function (arr) { return arr.some(function (item) {
        var children = item[childrenKey];
        if (children && children.length) {
            return findDeepestChild(children);
        }
        if (likeCompare) {
            if (("" + value).indexOf(item[key]) > -1) {
                obj.item = item;
                return true;
            }
        }
        else {
            if (key === 'id' && value === item[key]) {
                obj.item = item;
                return true;
            }
            if ("" + value === item[key]) {
                obj.item = item;
                return true;
            }
        }
        return false;
    }); };
    array.some(function (item) {
        var children = item[childrenKey];
        if (children && children.length) {
            var flag = findDeepestChild(children);
            if (flag) {
                obj.root = item;
            }
            return flag;
        }
        return false;
    });
    return obj;
}
exports.default = findChildInArr;
