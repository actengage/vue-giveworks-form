// PostCSS plugin imports
import { SRC } from './paths';
import { MINIFY } from './args';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import prepend from 'postcss-prepend-selector';
import purgecss from '@fullhuman/postcss-purgecss';

export default [
    MINIFY ? purgecss({
        content: [`${SRC}Components/**/*.vue`]
    }) : null,
    autoprefixer(),
    prepend({
        selector: '.giveworks-form '
    }),
    MINIFY ? cssnano() : null,
];
