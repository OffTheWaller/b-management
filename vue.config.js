var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles',resolve('src/assets/styles'))
  },
  //配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          //public会作为默认目录，不用写，实际访问的是/public/mock/
          '^/api': '/mock'
        }
      }
    }
  }
}