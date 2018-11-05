import { MINIFY } from './args';
import { DIST, SRC } from './paths';
import { EXTENSION_PREFIX } from '../config';
import uglify from 'rollup-plugin-uglify-es';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: `${SRC}polyfills.js`,
    output: {
        format: 'iife',
        file: `${DIST}polyfills${EXTENSION_PREFIX}.js`
    },
    plugins: [
        resolve(),
        commonjs(),
        MINIFY ? uglify() : null
    ]
}
