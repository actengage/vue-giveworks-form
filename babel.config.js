module.exports = {
    presets: [
        ['@vue/app', {
            useBuiltIns: 'usage',
            targets: {
                node: "current"
            }
        }]
    ],
    ignore: [
        "node_modules",
    ]
};