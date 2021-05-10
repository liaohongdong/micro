"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var DEEP_TAG = [
    "map",
    "set",
    "array",
    "object"
];
function getInit(target) {
    var Ctor = target.constructor;
    return new Ctor();
}
function forEach(arr, iteratee) {
    var index = -1;
    var length = arr.length;
    while (++index < length) {
        iteratee(arr[index], index);
    }
    return arr;
}
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}
function cloneReg(target) {
    var rexFlags = /\w*$/;
    var result = new target.constructor(target.source, rexFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
}
function cloneFunction(func) {
    return func;
}
function cloneOtherType(target, type) {
    var Ctor = target.constructor;
    switch (type) {
        case "boolean":
        case "number":
        case "string":
        case "date":
            return new Ctor(target);
        case "error":
            return new Ctor(target.message);
        case "regexp":
            return cloneReg(target);
        case "symbol":
            return cloneSymbol(target);
        case "function":
            return cloneFunction(target);
        default:
            return null;
    }
}
function cloneDeep(target, map) {
    if (map === void 0) { map = new WeakMap(); }
    var _type = typeof target;
    if (target === null || !['object', 'function'].includes(_type)) {
        return target;
    }
    var cloneTarget;
    var type = _1.getType(target);
    if (DEEP_TAG.includes(type)) {
        cloneTarget = getInit(target);
    }
    else {
        return cloneOtherType(target, type);
    }
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);
    if (type === "set") {
        target.forEach(function (value) {
            cloneTarget.add(cloneDeep(value, map));
        });
        return cloneTarget;
    }
    if (type === "map") {
        target.forEach(function (value, key) {
            cloneTarget.set(key, cloneDeep(value, map));
        });
        return cloneTarget;
    }
    var keys = type === "array" ? undefined : Object.keys(target);
    forEach(keys || target, function (value, key) {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = cloneDeep(target[key], map);
    });
    return cloneTarget;
}
exports.default = cloneDeep;
