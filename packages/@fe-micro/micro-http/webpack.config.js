/*
 * @Author: lingyong.zeng
 * @Date: 2021-05-06 19:59:15
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-05-06 20:21:53
 * @Description:
 * @FilePath: /packages/@micro/micro-http/webpack.config.js
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'microHttp',
        libraryTarget: 'umd',
        libraryExport: undefined,
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.min.js'
    },
    externals: {
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vue': 'Vue',
        '@micro/micro-util': 'microUtil',
        '@micro/micro-core': 'microCore',
        'async-validator': 'AsyncValidator',
        'nprogress': 'NProgress',
        'element-ui': 'ELEMENT',
    },
}
