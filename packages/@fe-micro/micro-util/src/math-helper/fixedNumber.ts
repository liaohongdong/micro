/*
 * @Descripttion: 数字格式化函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-03-04 17:52:18
 */

import { NumericType, } from '../types/type';
import { isEmpty, } from '../validator';

export default function fixedNumber(num: NumericType, decimal = 2, digits = -1, zero = true): string {
    num = num.toString().replace(/[^\d.-]+/g, '');
    if (isEmpty(num)) return num;
    const index = num.indexOf('.');
    if (index !== -1) {
        num = num.substring(0, decimal + index + 2);
    } else {
        num = num.substring(0);
    }
    num = parseFloat(num).toFixed(decimal);
    if (digits >= 0) {
        const arr = num.split('.');
        arr[0] = digits === 0 ? '0' : arr[0].substring(0, digits);
        num = arr.join('.');
    }
    if (zero) {
        return num;
    }
    return parseFloat(num).toString();

}