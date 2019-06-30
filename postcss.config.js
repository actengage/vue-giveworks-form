const prefixer = require('postcss-prefix-selector');


module.exports = {
    plugins: [
        prefixer({
            prefix: '.giveworks-form',
            // exclude: ['.c'],
            // Optional transform callback for case-by-case overrides
            transform: (prefix, selector, prefixedSelector) => {
                if(selector === 'body') {
                    return prefix;
                }
                else {
                    return prefixedSelector;
                }
            }
        })
    ]
};
