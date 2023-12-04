const {createProxyMiddleware} = require("http-proxy-middleware")

console.log(process.env.REACT_APP_API_URL);
module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: process.env.REACT_APP_API_URL,
            changeOrigin: true,
        })
    );
};