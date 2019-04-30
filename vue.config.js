const path = require('path');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const isDemo = process.argv.indexOf('--demo') > -1;

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
                paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`),
            })
        ],
        externals: !isDemo ? {
            axios: 'axios',
            //vue: 'vue'
        } : undefined
    }
};
