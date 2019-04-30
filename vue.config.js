const path = require('path');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const isDemo = process.argv.indexOf('--demo') > -1;

let paths = [];

paths = paths.concat(glob.sync(`${path.join(__dirname, 'src')}/**/*.vue`, { nodir: true }));
paths = paths.concat(glob.sync(`${path.join(__dirname, 'node_modules')}/vue-interface/src/**/*.vue`, { nodir: true }));

module.exports = {
    lintOnSave: false,
    publicPath: isDemo ? './' : undefined,
    outputDir: isDemo ? './demo' : undefined,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        plugins: [
            new PurgecssPlugin({
                paths: paths,
                whitelist: ['btn-primary']
            })
        ],
        externals: !isDemo ? {
            axios: 'axios',
            //vue: 'vue'
        } : undefined
    }
};
