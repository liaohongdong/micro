/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 15:50:39
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-01-19 09:55:06
 * @FilePath: /nextop/packages/@nextop/nextop-core/src/utils/validate.js
 * des: el自定义表单验证及正则验证
 * rule：el校验以valid开头 validPhone；正则验证以reg开头
 */

// el手机格式校验
function validPhone(rule, value, callback) {
    if (!value || regPhone(value)) { callback(); } else { callback(new Error('请输入正确的手机号!')); }
}

// 正则手机格式校验
function regPhone(value) {
    return /^1[3-9][0-9]{9}/.test(value)
}

/**
 * 验证是数字类型或可转换为数字类型
 * @param {*} value 要验证的值
 */
function isNum(value) {
    return !Number.isNaN(Math.sign(value));
}

/**
 * @name 验证整数
 * @param {*} val 要验证的内容
 */
function isInteger(val) {
    return /^[0-9]*$/.test(value);
}

/**
 * 需要校验的表格验证
 * @param {*} columns 表头
 * @param {*} length 长度
 */
function validate(columns, length, _vm) {
    let _va_columns = columns.filter(i => i.validate);
    for (let i of _va_columns) {
        for (let t = 0; t < length; t++) {
            let _va_result = _vm.$refs[i.prop + t].validate()
            if (!_va_result) return false;
        }
    }
    return true;
}

export {
    validPhone, // el手机格式校验
    regPhone, // 正则手机格式校验
    isNum, // 验证数字
    isInteger, // 验证整数
    validate, // 整体表单验证
}
