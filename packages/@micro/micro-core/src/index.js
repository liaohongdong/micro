/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 16:57:40
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-04-29 15:05:30
 * @FilePath: /nextop/packages/@micro/micro-core/src/index.js
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
