import plugins from './build/plugins';
import vendor from './build/config/vendor';
import polyfill from './build/config/polyfill';

import {
    BUILD_OPTIONS,
    DIST,
    EXTERNAL,
    EXTENSION_PREFIX,
    FILENAME,
    MAINJS,
    NAMESPACE,
    OUTPUT_GLOBALS,
    PACKAGE_FORMAT,
    SOURCEMAP,
    SRC,
    WATCH_OPTIONS,
} from './build/config';

// Export the config object
export default [{
    input: MAINJS,
    output: {
        name: NAMESPACE,
        format: PACKAGE_FORMAT,
        file: `${DIST}${FILENAME}${EXTENSION_PREFIX}.js`,
        sourcemap: true,
        globals: OUTPUT_GLOBALS,
        exports: 'named',
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins(BUILD_OPTIONS[PACKAGE_FORMAT])
},{
    input: `${SRC}install.js`,
    output: {
        name: NAMESPACE,
        format: 'iife',
        file: `${DIST}${FILENAME}.install${EXTENSION_PREFIX}.js`,
        sourcemap: true,
        globals: OUTPUT_GLOBALS
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins(BUILD_OPTIONS.es)
}, polyfill, vendor];
