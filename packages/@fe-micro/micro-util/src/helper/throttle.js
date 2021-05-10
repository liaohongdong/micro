"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function throttle(func, wait) {
    if (wait === void 0) { wait = 0; }
    var previous = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = +new Date();
        if (now - previous >= wait) {
            func.apply(this, args);
            previous = now;
        }
    };
}
exports.default = throttle;
