const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/b', {
        target: 'http://m.maoyan.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/b": ""
        }
    }));
    // app.use(proxy('/a', {
    //     target: 'https://i.meituan.com',
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/a": ""
    //     }
    // }));
    
};  