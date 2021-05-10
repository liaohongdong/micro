/*
 * @Descripttion: 验证小写字母函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:00:56
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isLowerCase(str: string): boolean {
    typeErrorHandle(str, 'string', FILE_PATH);

    str = str.replace(/\s+/g, '');
    // const reg = /^[a-z0-9\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+$/;
    const reg = /^[a-z]+$/;
    return reg.test(str);
}