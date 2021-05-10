/*
 * @Author: hongdong.liao
 * @Date: 2021-01-07 11:05:35
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-05-06 10:43:24
 * @FilePath: /micro/packages/@micro/micro-core/src/utils/router.js
 */
import { isArray, isFunction, uniqBy, } from "@fe-micro/micro-util";
/**
 * 根据路由匹配地址
 * @param {*} data 路由数据
 * @param {*} base 路由前缀
 * @param {*} options 粗略的配置项
 */

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
export function routerGo(href = '/', title = null, stateObj = {}) {
    window.history.pushState(stateObj, title, href);
}

export function routerReplace(href = '/', title = null, stateObj = {}) {
    window.history.replaceState(stateObj, title, href);
}
