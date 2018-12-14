var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    //配置别名
    config.resolve.alias
      .set('styles',resolve('src/assets/styles'))
  },
  //配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.107.167.164:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}