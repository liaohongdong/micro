/*
 * @Descripttion: 验证身份证函数。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:04:25
 */
import { typeErrorHandle, } from '../error-handle/TypeError';
import isEmpty from './isEmpty';
const FILE_PATH = 'Validator';

export default function isIdCard(code: string): boolean {
    typeErrorHandle(code, 'string', FILE_PATH);

    enum CITY {
        '北京' = 11,
        '天津' = 12,
        '河北' = 13,
        '山西' = 14,
        '内蒙古' = 15,
        '辽宁' = 21,
        '吉林' = 22,
        '黑龙江' = 23,
        '上海' = 31,
        '江苏' = 32,
        '浙江' = 33,
        '安徽' = 34,
        '福建' = 35,
        '江西' = 36,
        '山东' = 37,
        '河南' = 41,
        '湖北' = 42,
        '湖南' = 43,
        '广东' = 44,
        '广西' = 45,
        '海南' = 46,
        '重庆' = 50,
        '四川' = 51,
        '贵州' = 52,
        '云南' = 53,
        '西藏' = 54,
        '陕西' = 61,
        '甘肃' = 62,
        '青海' = 63,
        '宁夏' = 64,
        '新疆' = 65,
        '台湾' = 71,
        '香港' = 81,
        '澳门' = 82,
        '国外' = 91,
    }
    if (!isEmpty(code)) {
        if (code.length === 18) {
            if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
                return false;
            } else if (!CITY[Number(code.substr(0, 2))]) {
                // 地址编码错误
                return false;
            }
            //18位身份证需要验证最后一位校验位
            const codeArr = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2', 'x'];
            let sum = 0;
            let ai = 0;
            let wi = 0;
            for (let i = 0; i < 17; i++) {
                ai = Number(codeArr[i]);
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] !== codeArr[17]) {
                // 证件号码校验位错误
                return false;
            }
            return true;


        }
        // 证件号码长度不为18位
        return false;

    }
    // 证件号码不能为空
    return false;

}