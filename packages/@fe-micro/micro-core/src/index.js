/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:49:05
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-core/src/index.js
 */
// import DataType from "./utils/type"
import Time from "./utils/time"

export * from './app/setup';
export * from "./storage/index"
export * from "./utils/array"
export * from "./utils/validate"
export * from "./utils/event"
export * from "./utils/utils"
export * from "./utils/router"
export * from './utils/flatRoute';
export * from './utils/assets';
export * from './utils/user';
export * from './utils/auth';
export * from './vuex';
export * from './directives';

export * from './lang';

export {
    // Storage,
    // DataType,
    Time,
}
