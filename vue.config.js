module.exports = {
    publicPath: "",
    lintOnSave: 'warning',
    devServer:{
        host:"0.0.0.0",
        proxy:{
            '/api':{
                target:'http://localhost:4000',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
};