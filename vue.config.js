module.exports = {
    publicPath: "",
    lintOnSave: 'warning',
    devServer:{
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