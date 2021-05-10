/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:52:05
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-http/webpack.config.js
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
        '@fe-micro/micro-util': 'microUtil',
        '@fe-micro/micro-core': 'microCore',
        'async-validator': 'AsyncValidator',
        'nprogress': 'NProgress',
        'element-ui': 'ELEMENT',
    },
}
