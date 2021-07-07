/**
 * 配置该文件可以参考:
 * https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8
 *
 */
 let path = require('path')
 //http://112.124.65.24:8081/
 //http://112.124.65.24
 //https://www.fastmock.site/mock/552fac5cc88f27249bff9351eeca2683/api
 //https://www.fastmock.site/mock/b8ca85fd736f66d70a642a24d3888712/api
const url = 'https://www.fastmock.site/mock/552fac5cc88f27249bff9351eeca2683/api' 

// 基础路径，发布前修改这里,当前配置打包出来的资源都是相对路径
let publicPath = './'
module.exports = {
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  },
  publicPath: publicPath,
  // eslint校验
  lintOnSave: false,
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
    }
  },
  // 配置转发代理
  devServer: {
    proxy: {
      '/api': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/auth': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/code': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/code': '/code'
        }
      },
      '/gen': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/gen': '/gen'
        }
      },
      '/member': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/member': '/member'
        }
      },
      '/wechat': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/wechat': '/wechat'
        }
      },
      '/logistics': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/logistics': '/logistics'
        }
      },
      '/iot': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/iot': '/iot'
        }
      }
    }
  }
}
