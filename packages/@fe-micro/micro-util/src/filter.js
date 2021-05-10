"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var Filter = (function () {
    function Filter() {
    }
    Filter.searchListAllByVal = function (filterVal, list, props) {
        if (!Array.isArray(list) || !list.length) {
            throw new TypeError('List must be an not-empty array! (Filter.js)');
        }
        var _props = props || [];
        if (!_props || !_props.length) {
            _props = Object.keys(list[0]);
        }
        if (filterVal) {
            var toStrAndTrim_1 = function (val) { return ("" + val).trim(); };
            return list.filter(function (item) {
                return _props.some(function (key) {
                    var str = toStrAndTrim_1(item[key]);
                    return str.indexOf(filterVal.toString()) > -1;
                });
            });
        }
        return list;
    };
    return Filter;
}());
exports.Filter = Filter;
