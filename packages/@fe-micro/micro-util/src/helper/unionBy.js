"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getType_1 = __importDefault(require("./getType"));
function unionBy() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var iteratee = arrays.pop();
    var result = [];
    var isFunction = typeof iteratee === 'function';
    var isString = typeof iteratee === 'string';
    if (!isFunction && !isString) {
        throw new TypeError('Expected iteratee is a function or property string');
    }
    var _map = new Map();
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        for (var _b = 0, array_1 = array; _b < array_1.length; _b++) {
            var item = array_1[_b];
            var key = void 0;
            if (isFunction) {
                key = iteratee(item);
                if (_map.has(key)) {
                    continue;
                }
            }
            else {
                if (getType_1.default(item) !== 'object') {
                    throw new TypeError('Expected arrays is object array by iteratee is property string');
                }
                key = item[iteratee];
                if (key !== undefined && _map.has(key)) {
                    continue;
                }
            }
            _map.set(key, true);
            result.push(item);
        }
    }
    return result;
}
exports.default = unionBy;
