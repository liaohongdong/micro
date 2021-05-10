"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, timeout) {
    if (timeout === void 0) { timeout = 0; }
    var timer;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, timeout);
    };
}
exports.default = debounce;
