/*
 * @Author: lingyong.zeng
 * @Date: 2021-05-06 19:59:15
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-05-06 20:21:53
 * @Description: 
 * @FilePath: /packages/@nextop/nextop-http/webpack.config.js
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'NextopHttp',
        libraryTarget: 'umd',
        libraryExport: undefined,
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.min.js'
    },
    externals: {
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vue': 'Vue',
        '@vantop/vantop-util': 'VantopUtil',
        '@nextop/nextop-core': 'NextopCore',
        'async-validator': 'AsyncValidator',
        'nprogress': 'NProgress',
        'element-ui': 'ELEMENT',
    },
}