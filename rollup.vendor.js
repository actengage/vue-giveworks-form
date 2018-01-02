import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default [{
    input: 'src/vendor.js',
    output: {
        file: 'dist/vendor.js',
        format: 'umd'
    },
    globals: {
        'vue': 'Vue',
        'axios': 'axios',
        'moment': 'moment',
        '_': 'lodash-es',
        'vue-awesome': 'vue-awesome'
    },
    plugins: [
        resolve(),
        commonjs({
            include: 'node_modules/**'
        })
    ]
}];
