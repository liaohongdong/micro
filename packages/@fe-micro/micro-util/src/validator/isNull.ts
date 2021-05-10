/*
 * @Descripttion: 为避免歧义，isNull方法更名为isEmpty，在项目中所有使用到的isNull替换为isEmpty前，暂时保留isNUll。
 * @TODO: 待删除方法
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 16:50:23
 */

export default function isNull(val: unknown): boolean {
    if (typeof val === 'boolean') {
        return false;
    }
    if (typeof val === 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length === 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        if (val === null || val === undefined || val === '') return true;
    }
    return false;
}