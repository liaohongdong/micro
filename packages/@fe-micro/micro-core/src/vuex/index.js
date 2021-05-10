/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:51:24
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-core/src/vuex/index.js
 */
export const mapParentGetters = function (...args) {
    let namespace = '';
    let mapObj;
    const getters = {};
    if (typeof args[0] === 'boolean') {
        namespace = args[0];
        mapObj = args[1];
    } else {
        mapObj = args[0];
    }

    if (Array.isArray(mapObj)) {
        for (let key of mapObj) {
            getters[key] = function () {
                return this.$parentStore.getters[namespace + key];
            };
        }
    } else {
        Object.getOwnPropertyNames(mapObj).forEach(key => {
            const newKey = mapObj[key];
            getters[newKey] = function () {
                return this.$parentStore.getters[namespace + key];
            };
        });
    }
    return getters;
};
