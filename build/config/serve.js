import fs from 'fs';

export default {
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
