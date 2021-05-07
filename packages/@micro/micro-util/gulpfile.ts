/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const del = require('del');
const plugins = require('gulp-load-plugins')();
const tsProject = plugins.typescript.createProject('tsconfig.json');
const env = process.env.NODE_ENV;

gulp.task('clean', async () => {
    await del('lib');
});

gulp.task('compile', () => tsProject.src()
    .pipe(tsProject())
    .js.pipe(plugins.uglify({
        compress: {
            'drop_debugger': env === 'production' ? true : false,
        },
    }))
    .pipe(gulp.dest('lib')));

gulp.task('build', gulp.series('clean', 'compile'));

gulp.task('serve', () => plugins.nodemon({
    script: 'lib/index.js',
    watch: 'src',
    tasks: ['compile'],
    ext: 'ts',
    env: {
        'NODE_ENV': 'local',
    },
    exec: 'node --inspect',
}));
