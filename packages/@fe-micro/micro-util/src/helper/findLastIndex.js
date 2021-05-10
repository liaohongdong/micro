"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _baseFindIndex_1 = __importDefault(require("./_baseFindIndex"));
function findLastIndex(arr, predicate, fromIndex) {
    var _a = (arr || []).length, length = _a === void 0 ? 0 : _a;
    if (!length) {
        return -1;
    }
    var index = length - 1;
    if (fromIndex !== undefined) {
        index = +fromIndex;
        index = fromIndex < 0
            ? Math.max(length + index, 0)
            : Math.min(index, length - 1);
    }
    if (index < 0) {
        return -1;
    }
    return _baseFindIndex_1.default(arr, predicate, index, true);
}
exports.default = findLastIndex;
