/*
 * @Descripttion: 数字千位分隔函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-03-04 17:27:47
 */
import { numErrorHandle, } from '../error-handle/TypeError';
import { NumericType, } from '../types/type';
import { isEmpty, } from '../validator';
const FILE_NAME = 'MathHelper';

export default function splitNumByThou(number: NumericType, sign = ','): NumericType {
    numErrorHandle(number, FILE_NAME);
    if (isEmpty(number)) return number;
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign);
    return parts.join('.');
}