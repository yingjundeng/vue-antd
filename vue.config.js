/**
 * 配置该文件可以参考:
 * https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8
 *
 */
//process.env.NODE_ENV==='production'  (打包环境)
// process.env.NODE_ENV==='development' (开发环境)
 let path = require('path')
 //http://112.124.65.24:8081/
 //http://112.124.65.24
 //https://www.fastmock.site/mock/552fac5cc88f27249bff9351eeca2683/api
 //https://www.fastmock.site/mock/b8ca85fd736f66d70a642a24d3888712/api
const url = 'https://www.fastmock.site/mock/552fac5cc88f27249bff9351eeca2683/api' 

// 如果是hash模式
// env !== "development" ? "./" : "/",
// 如果是history模式
// env !== "development" ? "/" : "/",
// 基础路径，发布前修改这里,当前配置打包出来的资源都是相对路径
let publicPath =  process.env.NODE_ENV==='development' ? "./" : "/";
module.exports = {
  configureWebpack: {
    externals: {
      "BMap": "BMap"
    }
  },
  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: '',
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
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  // 配置转发代理
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    before: app => {},
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
