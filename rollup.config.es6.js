import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/giveworks-form.es6.js',
        format: 'es',
        name: 'GiveworksForm'
    },
    external: [
        'vue',
        'axios'
    ],
    globals: {
        'vue': 'Vue',
        'axios': 'axios'
    },
    sourcemap: true,
    sourcemapFile: './dist/giveworks-form.es6.js.map',
    watch: {
        include: './src/**'
    },
    plugins: [
        resolve({
            // pass custom options to the resolve plugin
            customResolveOptions: {
                moduleDirectory: './node_modules'
            }
        }),
        vue(),
        json()
    ]
};
