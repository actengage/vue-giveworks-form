import fs from 'fs';
import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import rootImport from 'rollup-plugin-root-import';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/giveworks-form.js',
        format: 'umd',
        name: 'GiveworksForm'
    },
    external: [
        'vue',
        'axios',
    ],
    globals: {
        'vue': 'Vue',
        'axios': 'axios',
        //'broadcast': 'Broadcast'
    },
    sourcemap: true,
    sourcemapFile: './dist/giveworks-form.js.map',
    watch: {
        include: './src/**'
    },
    plugins: [
        rootImport({
            // Will first look in `client/src/*` and then `common/src/*`.
            root: `${__dirname}/src`,

            //useEntry: 'prepend',

            // If we don't find the file verbatim, try adding these extensions
            extensions: ['.js', '.vue']
        }),
        resolve({
            sourceMap: true,
            extensions: [ '.js', '.scss', '.vue']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        json(),
        vue({
            scss: {
                indentedSyntax: true
            },
            css: function(style, styles, compiler) {
                fs.writeFileSync('./css/giveworks-form.css', style);
                //fs.writeFileSync('dist/giveworks-form.sass', styles.map(style => style.code).concat('\n'));
            }
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
        serve({
            // Folder to serve files from
            contentBase: '',

            https: {
                key: fs.readFileSync('./livereload.key'),
                cert: fs.readFileSync('./livereload.crt'),
                ca: fs.readFileSync("./livereload.pem")
            }
        }),
        livereload({
            watch: './dist/giveworks-form.js',
            https: {
                key: fs.readFileSync('./livereload.key'),
                cert: fs.readFileSync('./livereload.crt'),
                ca: fs.readFileSync("./livereload.pem")
            }
        })
    ]
};
