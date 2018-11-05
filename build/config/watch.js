import fs from 'fs';
import * as paths from './paths';

export default {
    include: `${paths.SRC}**/*`,
    extensions: ['.js', '.scss', '.vue'],
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};
