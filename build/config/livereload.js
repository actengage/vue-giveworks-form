import fs from 'fs';
import * as paths from './paths';

export default {
    watch: paths.SRC,
    port: 35729,
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};
