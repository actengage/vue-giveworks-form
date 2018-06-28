//import path from 'path';
import { each } from 'lodash';
import config from './rollup.config';
import uglify from 'rollup-plugin-uglify-es';
import license from 'rollup-plugin-license';

const plugins = [
    uglify(),
    /*
    license({
        sourceMap: true,
        banner: {
            file: path.join(__dirname, 'BANNER'),
            encoding: 'utf-8', // Default is utf-8
        },
        thirdParty: {
            output: path.join(__dirname, 'dist', 'dependencies.txt'),
            includePrivate: false, // Default is false.
            encoding: 'utf-8', // Default is utf-8.
        }
    })
    */
];

each(config, (config, i) => {
    config.output.file = config.output.file.replace(/\.js$/, '.min.js');
    config.plugins = config.plugins.concat(plugins);
});

export default config;
