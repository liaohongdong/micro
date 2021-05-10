/*
 * @Descripttion: 废弃方法，推荐使用fixedNumber，由于项目中已大量使用，暂时保留，隐藏使用文档。
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:37:11
 */

export default function decimalNumber(val: number, decimal = 2): number {
    const _baseNum: number = Math.pow(10, decimal);
    return Math.round(val * _baseNum) / _baseNum;
}