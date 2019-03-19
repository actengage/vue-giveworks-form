const isDemo = process.argv.indexOf('--demo') > -1;

module.exports = {
    lintOnSave: false,
    publicPath: isDemo ? './' : undefined,
    outputDir: isDemo ? './demo' : undefined,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
};
