import fs from 'fs';
import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import rootImport from 'rollup-plugin-root-import';
import conditional from "rollup-plugin-conditional";

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
        'moment',
        'lodash-es',
    ],
    globals: {
        'vue': 'Vue',
        'axios': 'axios',
        'moment': 'moment',
        'lodash-es': 'lodash-es'
    },
    sourcemap: true,
    sourcemapFile: './dist/giveworks-form.js.map',
    watch: {
        include: './src/**'
    },
    plugins: [
        json(),
        rootImport({
            // Will first look in `client/src/*` and then `common/src/*`.
            root: `${__dirname}/src`,
            // If we don't find the file verbatim, try adding these extensions
            extensions: ['.js', '.vue']
        }),
        commonjs({
            include: 'node_modules/**',
            extensions: [ '.js']
        }),
        resolve({
            jsnext: true,
            main: true,
            sourceMap: true,
            extensions: [ '.js', '.scss', '.vue']
        }),
        vue({
            scss: {
                indentedSyntax: true
            },
            css: function(style, styles, compiler) {
                fs.writeFileSync('./css/giveworks-form.css', style);
            }
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup']
        }),
        conditional(process.env.ROLLUP_WATCH == 'true', [{
            onwrite: (...args) => {
                return serve({
                    contentBase: '',
                    https: {
                        key: fs.readFileSync('./livereload.key'),
                        cert: fs.readFileSync('./livereload.crt'),
                        ca: fs.readFileSync("./livereload.pem")
                    }
                })
            }
        }, {
            onwrite: (...args) => {
                return livereload({
                    watch: './dist/giveworks-form.js',
                    https: {
                        key: fs.readFileSync('./livereload.key'),
                        cert: fs.readFileSync('./livereload.crt'),
                        ca: fs.readFileSync("./livereload.pem")
                    }
                })
            }
        }])
    ]
};
