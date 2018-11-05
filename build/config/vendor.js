import { MINIFY } from './args';
import { DIST, SRC } from './paths';
import { EXTENSION_PREFIX } from '../config';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify-es';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

export default {
    input: `${SRC}vendor.js`,
    output: {
        format: 'iife',
        file: `${DIST}vendor${EXTENSION_PREFIX}.js`
    },
    plugins: [
        json(),
        resolve({
            preferBuiltins: false
        }),
        commonjs(),
        globals(),
        builtins(),
        MINIFY ? uglify() : null
    ]
}
