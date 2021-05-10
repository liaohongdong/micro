"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _baseFindIndex_1 = __importDefault(require("./_baseFindIndex"));
function findIndex(arr, predicate, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var _a = (arr || []).length, length = _a === void 0 ? 0 : _a;
    if (!length) {
        return -1;
    }
    var index = !fromIndex ? 0 : +fromIndex;
    if (index < 0) {
        return -1;
    }
    return _baseFindIndex_1.default(arr, predicate, index);
}
exports.default = findIndex;
