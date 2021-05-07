/*
 * @Descripttion: 数字转换中文金额函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-03-04 17:27:05
 */
import { numErrorHandle, } from '../error-handle/TypeError';
import { NumericType, } from '../types/type';
const FILE_NAME = 'MathHelper';

export default function number2CNY(number: NumericType, isUpper = false): string {
    numErrorHandle(number, FILE_NAME);
    // 配置
    const CONFS = {
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

    // 过滤不合法参数
    if (Number(number) > 999999999999.99) {
        throw RangeError(`The maxNumber is 999999999999.99. ${number} is bigger than it!`);
    }
    const conf = isUpper ? CONFS['upper'] : CONFS['lower'];
    const numbers = String(Number(number).toFixed(2)).split('.');
    const integer = numbers[0].split('');
    const decimal = Number(numbers[1]) === 0 ? [] : numbers[1].split('');

    // 四位分级
    const levels = integer.reverse().reduce((pre: Array<string[]>, item, idx) => {
        const level = pre[0] && pre[0].length < 4 ? pre[0] : [];
        const value = item === '0' ? conf.num[Number(item)] : conf.num[Number(item)] + conf.unit[idx % 4];
        level.unshift(value);

        if (level.length === 1) {
            pre.unshift(level);
        } else {
            pre[0] = level;
        }

        return pre;
    }, []);

    // 整数部分
    const _integer = levels.reduce((pre: string, item: Array<string>, idx: number) => {
        let _level = conf.level[levels.length - idx - 1];
        let _item = item.join('').replace(/(零)\1+/g, '$1'); // 连续多个零字的部分设置为单个零字

        // 如果这一级只有一个零字，则去掉这级
        if (_item === '零') {
            _item = '';
            _level = '';

            // 否则如果末尾为零字，则去掉这个零字
        } else if (_item[_item.length - 1] === '零') {
            _item = _item.slice(0, _item.length - 1);
        }

        return pre + _item + _level;
    }, '');

    // 小数部分
    const _decimal = decimal
        .map((item, idx) => {
            const unit = ['分', '角'];
            const _unit = item !== '0' ? unit[unit.length - idx - 1] : '';

            return `${conf.num[Number(item)]}${_unit}`;
        })
        .join('');

    // 如果是整数，则补个整字
    return `${_integer}元` + (_decimal || '整');
}