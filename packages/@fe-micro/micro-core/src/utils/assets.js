/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:50:44
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-core/src/utils/assets.js
 */
/**
 * 获取静态服务器地址, 在styles/variables.scss配置
 */

const $assets = '//micro-saas-web-static-prod.oss-cn-shenzhen.aliyuncs.com/micro-erp-micro';

export const getAssetsUrl = () => {
    return String($assets).replace(/"/g, '');
}
