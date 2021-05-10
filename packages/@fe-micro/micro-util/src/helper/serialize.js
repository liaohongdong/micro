"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serialize(data) {
    var list = [];
    for (var key in data) {
        list.push(key + "=" + data[key]);
    }
    return list.join('&');
}
exports.default = serialize;
