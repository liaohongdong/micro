/*
 * @Author: lingyong.zeng
 * @Date: 2021-04-30 18:40:04
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-04-30 18:48:01
 * @Description:
 * @FilePath: /nextop/packages/@micro/micro-core/src/utils/assets.js
 */
// import variables from '../../styles/variables.scss';

/**
 * 获取静态服务器地址, 在styles/variables.scss配置
 */

const $assets = '//nextop-saas-web-static-prod.oss-cn-shenzhen.aliyuncs.com/nextop-erp-micro';

export const getAssetsUrl = () => {
    return String($assets).replace(/"/g, '');
}
