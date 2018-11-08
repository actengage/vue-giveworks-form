import fs from 'fs';
import { SRC } from './paths';

export default {
    include: `${SRC}**/*`,
    extensions: ['.js', '.scss', '.vue'],
    https: {
        key: fs.readFileSync('./livereload.key'),
        cert: fs.readFileSync('./livereload.crt'),
        ca: fs.readFileSync("./livereload.pem")
    }
};
