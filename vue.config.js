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
            
        ],
        externals: !isDemo ? {
            axios: 'axios',
            // vue: 'vue'
        } : undefined
    }
};
