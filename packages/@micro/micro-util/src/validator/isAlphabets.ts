/*
 * @Descripttion: 验证字母函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:02:18
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isAlphabets(str: string): boolean {
    typeErrorHandle(str, 'string', FILE_PATH);

    str = str.replace(/\s+/g, '');
    // const reg = /^[A-Za-z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+$/;
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
}
