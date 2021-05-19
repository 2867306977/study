//webpack配置文件
//引入path模块,里面有个resolve可以设置路径
const { resolve } = require('path')//path: node内置核心模块
//因为webpack是基于node实现所以需要用commonjs导出
module.exports = {
  //webpack定义配置文件
  entry: './src/app.js',//入口文件
  output: {
    path: resolve(__dirname, 'build'),//输出的目录,必须是绝对路径
    filename: './js/main.js',//输出的文件名
    // clean: true 清除打包目录的文件
  },
  mode: 'development', //表示什么环境下运行代码参数:development/production 生产环境比开发环境多了压缩代码
  //loader加载器,帮助webpack识别其他文件
  module: {
    rules: [
      {
        test: /\.js$/,//只检测js文件
        enforce: 'pre',//优先执行
        // exclude: /node_modules/,//排除node_modules文件夹
        use: {
          //表示使用eslint-loader插件解析
          //需先配置好eslint文件
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        use: {
          //使用babel-loader解析 把ES6语法转为ES5语法
          loader: 'babel-loader',
          //下面的已经配置好了babel,不需要在创建一个.babelrc文件
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  }
}