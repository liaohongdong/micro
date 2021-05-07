const sass = require('node-sass');
const postcss = require('rollup-plugin-postcss');

const isProductionEnv = process.env.NODE_ENV === 'production'

const processSass = function(context, payload) {
    return new Promise(( resolve, reject ) => {
      sass.render({
        file: context
      }, function(err, result) {
        if( !err ) {
          resolve(result);
        } else {
          reject(err)
        }
      });
    })
}

export default {
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
    },
    plugins: [
        postcss({
            extract: true,
            minimize: isProductionEnv,
            extensions:['css', 'scss'],
            process: processSass,
        }),
    ]
};