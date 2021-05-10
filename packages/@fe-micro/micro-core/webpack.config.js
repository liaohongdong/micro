/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:48:15
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-core/webpack.config.js
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'microCore',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.min.js'
    },
    module: {
        rules: [
            {
                exclude: [
                    path.resolve(__dirname, 'styles/**/*')
                ],
            }
        ]
    },
    externals: {
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vue': 'Vue',
        '@fe-micro/micro-util': 'microUtil',
        'async-validator': 'AsyncValidator',
        'nprogress': 'NProgress',
    },
}
