/*
 * @Author: hongdong.liao
 * @Date: 2021-01-07 11:05:35
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-06 11:35:10
 * @FilePath: /micro/packages/@micro/micro-router/src/router.js
 */
import { isArray, isFunction, uniqBy, } from "@micro/micro-util";

export function routerGo(href = '/', title = null, stateObj = {}) {
    window.history.pushState(stateObj, title, href);
}

export function routerReplace(href = '/', title = null, stateObj = {}) {
    window.history.replaceState(stateObj, title, href);
}

export function routeMatch(
    data,
    routerBase,
    options = { component: 'component', url: "url", name: "name", id: "id", permissions: "permissions" },
    errorCb,
) {
    if (!isArray(data)) return [];
    let routerBox = [];
    routerMapFile(data);
    function routerMapFile(data) {
        if (data?.length > 0) {
            data = uniqBy(data, 'url');
            data.forEach(item => {
                if (item[options.url]) {
                    let _url = item[options.url].replace(routerBase, "");
                    if (_url && _url !== '/' && _url?.split('')?.[0] !== '-') {
                        try {
                            let routerItem = {
                                path: _url, // 路由路径名
                                name: item[options.name],
                                meta: {
                                    componentName: item.componentName || '',
                                    keepAlive: !!item.isCached,
                                },
                                // 动态引入组件 [request] 是webpack固定写法 是根据item[options.component]的值来决定
                                // component: () => import(/* webpackChunkName: "[request]" */`@/views${item[options.component]}.vue`) // 路由映射真实视图路径
                                // component: () => import(/* webpackChunkName: "[request]" */`@/views${_url}.vue`) // 路由映射真实视图路径
                                component: () => {
                                    try {
                                        return Promise.resolve(require(`@/views${_url}.vue`).default)
                                    } catch (err) {
                                        return Promise.reject(err);
                                    }
                                }
                            };
                            routerBox.push(routerItem);
                            routerBox = uniqBy(routerBox, 'path');
                        } catch (err) {
                            if (isFunction(errorCb)) {
                                errorCb();
                                return;
                            }
                            console.log(err);
                        }
                    }
                }
                if (isArray(item.children) && item.children.length > 0) routerMapFile(item.children);
            })
        }
    }
    return routerBox;
}
