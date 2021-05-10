/*
 * @Descripttion: 验证电话号码函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:58:42
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isPhone(phone: string): boolean {
    typeErrorHandle(phone, 'string', FILE_PATH);

    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone);
}