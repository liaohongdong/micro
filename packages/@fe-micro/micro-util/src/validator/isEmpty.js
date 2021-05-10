"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(val) {
    if (typeof val === 'boolean') {
        return false;
    }
    if (typeof val === 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length === 0)
            return true;
    }
    else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}')
            return true;
    }
    else {
        if (val === null || val === undefined || val === '')
            return true;
    }
    return false;
}
exports.default = isEmpty;
