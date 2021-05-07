/*
 * @Descripttion: 验证是否为数字或字母函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-02-02 10:12:42
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isNumCombineLetter(val: string): boolean {
    typeErrorHandle(val, 'string', FILE_PATH);

    return /^[0-9a-zA-Z]{1,}$/.test(val);
}