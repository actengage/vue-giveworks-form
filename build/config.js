import fs from 'fs';
import { argv } from 'yargs';
import pkg from "../package.json";
import { kebabCase } from 'lodash';
import { camelCase } from 'lodash';
import { upperFirst } from 'lodash';

// PostCSS plugin imports
import cssnano from 'cssnano';

// Build specific overrides
export const BUILD_OPTIONS = {
    es: {
        postcss: {
            extract: false
        }
    }
};

// Define the list of output globals
export const OUTPUT_GLOBALS = {
    // 'vue': 'Vue'
};

// Define an array of external packages to not include in the bundle
export const EXTERNAL = [
    // 'vue'
];

// Sould run the watcher?
export const WATCH = !!argv.watch;

// Should export minified files?
export const MINIFY = !!argv.configMinify;

// Add .min prefix to all extensions if MINIFY is `true`.
export const EXTENSION_PREFIX = MINIFY ? '.min' : '';

// The directory of the package source code files
export const SRC = `${__dirname}/src/`;

// The directory to ouput the compiled files
export const DIST = `${__dirname}/dist/`;

// The main.js or entry point of your package
export const MAINJS = `${SRC}main.js`;

// The base filename of the compiled files (no ex)
export const FILENAME = kebabCase(pkg.name);

// This is global variable used in UMD packages
export const NAMESPACE = upperFirst(camelCase(pkg.name));

// The node_modules directory path
export const NODE_MODULES = `${__dirname}/node_modules/**`;

// The type of package Rollup should create
export const PACKAGE_FORMAT = 'umd';

// The sourcemap format. Accepted values: `inline`, `true`, `false`
export const SOURCEMAP = WATCH ? 'inline' : true;

// The options for the serve() plugin

// The options for the serve() plugin
export const SERVE_OPTIONS = {
    open: true,
    port: 10001,
    contentBase: './',
    host: 'localhost',
    historyApiFallback: true,
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};

// The options for the watch plugin
export const WATCH_OPTIONS = {
    include: `${SRC}**/*`,
    extensions: ['.js', '.scss', '.vue'],
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};

// The options for the livereload plugin (undefined or object).
export const LIVERELOAD_OPTIONS = {
    watch: SRC,
    port: 35729,
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};

// Should the CSS be injected into the JS?
export const INJECT_CSS = !!argv.configInjectCss;

// Should the export exclude the CSS?
export const EXTRACT_CSS = !!argv.configExtractCss || (
    argv.configExtractCss === undefined && !INJECT_CSS
);

// The defined PostCSS plugins that should be used. `null` values will be filtered.
export const POSTCSS_PLUGINS = [
    MINIFY ? cssnano() : null
];
