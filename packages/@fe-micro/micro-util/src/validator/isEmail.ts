/*
 * @Descripttion: 验证电子邮件函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:00:19
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function isEmail(email: string): boolean {
    typeErrorHandle(email, 'string', FILE_PATH);

    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}