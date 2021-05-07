const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'NextopCore',
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
        '@vantop/vantop-util': 'VantopUtil',
        'async-validator': 'AsyncValidator',
        'nprogress': 'NProgress',
    },
}