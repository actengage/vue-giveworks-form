const path = require('path');
const glob = require('glob-all');
const isDemo = process.argv.indexOf('--demo') > -1;
const PurgecssPlugin = require('purgecss-webpack-plugin');

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
                whitelist: [
                    'container'
                ],
                paths: glob.sync([
                    path.join(__dirname, './src/index.html'),
                    path.join(__dirname, './**/*.vue'),
                    path.join(__dirname, './src/**/*.js')
                ])
            })
        ],
        externals: !isDemo ? {
            axios: 'axios',
            vue: 'vue'
        } : undefined
    }
};
