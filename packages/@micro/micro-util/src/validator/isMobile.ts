/*
 * @Descripttion: 验证手机号函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:58:03
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isMobile(mobile: string): boolean {
    typeErrorHandle(mobile, 'string', FILE_PATH);

    return /^1[3456789]\d{9}$/.test(mobile);
}