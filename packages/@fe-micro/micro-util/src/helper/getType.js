"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getType(target) {
    var type = Object.prototype.toString.call(target).slice(8, -1);
    return type.toLowerCase();
}
exports.default = getType;
