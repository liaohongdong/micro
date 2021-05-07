/*
 * @Descripttion: 数字转换字节大小函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-03-04 17:27:25
 */
import { numErrorHandle, } from '../error-handle/TypeError';
import { NumericType, } from '../types/type';
const FILE_NAME = 'MathHelper';

export default function number2Byte(limit: NumericType): string {
    numErrorHandle(limit, FILE_NAME);
    limit = Number(limit);
    let size = '';
    if ( limit < 0.1 * 1024 ){
        size = limit.toFixed(2) + 'B';
    } else if (limit < 0.1 * 1024 * 1024 ){
        size = (limit / 1024).toFixed(2) + 'KB';
    } else if (limit < 0.1 * 1024 * 1024 * 1024){
        size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
    } else if (limit < 0.1 * 1024 * 1024 * 1024 * 1024){
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
    } else {
        size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TB';
    }

    const sizestr = size + '';
    const len = sizestr.indexOf('\.');
    const dec = sizestr.substr(len + 1, 2);
    if (dec === '00'){//当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
    }
    return sizestr;
}