"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var FILE_NAME = 'MathHelper';
function number2CNY(number, isUpper) {
    if (isUpper === void 0) { isUpper = false; }
    TypeError_1.numErrorHandle(number, FILE_NAME);
    var CONFS = {
        lower: {
            num: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
            unit: ['', '十', '百', '千', '万'],
            level: ['', '万', '亿'],
        },
        upper: {
            num: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
            unit: ['', '拾', '佰', '仟'],
            level: ['', '万', '亿'],
        },
    };
    if (Number(number) > 999999999999.99) {
        throw RangeError("The maxNumber is 999999999999.99. " + number + " is bigger than it!");
    }
    var conf = isUpper ? CONFS['upper'] : CONFS['lower'];
    var numbers = String(Number(number).toFixed(2)).split('.');
    var integer = numbers[0].split('');
    var decimal = Number(numbers[1]) === 0 ? [] : numbers[1].split('');
    var levels = integer.reverse().reduce(function (pre, item, idx) {
        var level = pre[0] && pre[0].length < 4 ? pre[0] : [];
        var value = item === '0' ? conf.num[Number(item)] : conf.num[Number(item)] + conf.unit[idx % 4];
        level.unshift(value);
        if (level.length === 1) {
            pre.unshift(level);
        }
        else {
            pre[0] = level;
        }
        return pre;
    }, []);
    var _integer = levels.reduce(function (pre, item, idx) {
        var _level = conf.level[levels.length - idx - 1];
        var _item = item.join('').replace(/(零)\1+/g, '$1');
        if (_item === '零') {
            _item = '';
            _level = '';
        }
        else if (_item[_item.length - 1] === '零') {
            _item = _item.slice(0, _item.length - 1);
        }
        return pre + _item + _level;
    }, '');
    var _decimal = decimal
        .map(function (item, idx) {
        var unit = ['分', '角'];
        var _unit = item !== '0' ? unit[unit.length - idx - 1] : '';
        return "" + conf.num[Number(item)] + _unit;
    })
        .join('');
    return _integer + "\u5143" + (_decimal || '整');
}
exports.default = number2CNY;
