"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcDuration(ms) {
    if (!ms)
        return '0\'0\'\'0';
    var hour = Math.floor(ms / 3600000);
    var minute = Math.floor(ms / 60000) % 60;
    var second = Math.floor(ms / 1000) % 60;
    return hour + "'" + minute + "''" + second;
}
exports.default = calcDuration;
