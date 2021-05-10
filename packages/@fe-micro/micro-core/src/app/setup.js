import Vue from 'vue'
import VueRouter from "vue-router";
import { LocalStorage } from '../storage';
window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__  = !window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ ? null : window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__;
const { __POWERED_BY_QIANKUN__, __INJECTED_PUBLIC_PATH_BY_QIANKUN__ } = window;

export const loadPublicPath = () => {
    if (__POWERED_BY_QIANKUN__) {
        // eslint-disable-next-line no-undef
        __webpack_public_path__ = __INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    }
}

/**
* @name 子应用实例化函数
* @param {Object} props param0 qiankun将用户添加信息和自带信息整合，通过props传给子应用
* @description {Array} routes 主应用请求获取注册表后，从服务端拿到路由数据
* @description {String} 子应用路由前缀 主应用请求获取注册表后，从服务端拿到路由数据
*/
export const renderSubchild = ({ routes, routerBase, container, subappKey, store, parentStore, mountPoint, i18n, } = {}) => {
    const { __CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__, } = window;
    let instance = null;
    const router = new VueRouter({
        mode: 'history',
        base: routerBase,
        routes: routes,
    })
    router.onError(err => {
        console.log(err, 35);
        window.history.pushState(null, null, '/404')
    });
    /*
        set subapplication's routes
        will need when add tag
    */
    LocalStorage.setSubapplicationRoutes(routes.map(i => {
        const prefix = i.path.slice(0, routerBase.length + 1);
        let path = i.path;
        if (prefix !== `${routerBase}/`) {
            path = `${routerBase}${path}`;
        }
        return {
            ...i,
            path,
        }
    }));
    // console.log(routes.map(i => ({ ...i, path: `${routerBase}${i.path}`, })));
    Vue.prototype.$parentStore = parentStore;
    if (__POWERED_BY_QIANKUN__ && __CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__) {
        const cachedInstance = __CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__;

        // 从最初的Vue实例上获得_vnode
        const cachedNode = cachedInstance._vnode;

        // 让当前路由在最初的Vue实例上可用
        router.apps.push(...cachedInstance?.catchRoute?.apps);

        // cachedNode.data.keepAlive = true;

        instance = new Vue({
            router,
            store,
            i18n,
            render: () => cachedNode
        });
        // 缓存最初的Vue实例
        instance.cachedInstance = cachedInstance;

        router.onReady(() => {
            const { path } = router.currentRoute;
            const { path: oldPath } = cachedInstance.$router.currentRoute;
            // 当前路由和上一次卸载时不一致，则切换至新路由
            if (path !== oldPath) {
                cachedInstance.$router.push(path);
            }
        });
        instance.$mount(container ? container.querySelector(subappKey) : subappKey);
    } else {
        instance = new Vue({
            router,
            store,
            i18n,
            render: h => h(mountPoint)
        }).$mount(container ? container.querySelector(subappKey) : subappKey)
    }
    return { originInstance: instance, originRouter: router };
};
