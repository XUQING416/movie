const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/maoyan', {
        target:"http://m.maoyan.com/ajax",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/maoyan": ""
        }
    }));
};
