/*
 * @Descripttion: 去除不可见字符
 * @Author: 曾令涌
 * @Date: 2021-03-02 15:38:36
 * @LastEditTime: 2021-03-02 18:29:33
 */

import { typeErrorHandle, } from '../error-handle/TypeError';
const FILE_PATH = 'Validator';

export default function removeInvisibleCharacter(content: string): string | never {
    typeErrorHandle(content, 'string', FILE_PATH);
    return content.replace(/[\u200b-\u200f\uFEFF\u202a-\u202e]/g, '');
}