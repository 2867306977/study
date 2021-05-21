const { resolve } = require('path')
//引入插件 插件首字母一般大写
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取js中css成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//压缩css插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  //入口文件
  entry: './src/app.js',
  output: {
    //输出的目录
    path: resolve(__dirname, '../build'),
    //输出的文件名
    filename: 'js/main.[contenthash:8].js',//添加了hash值,让静态资源有缓存
    //公共路径
    publicPath: '/',//所有的加载资源路径都以/开头
    //图片输出的位置
    assetModuleFilename: 'images/[hash:8][ext][query]',
    clean: true
  },
  //loader加载器
  module: {
    //loader定义配置
    rules: [
      //检查js语法
      {
        test: /\.js$/,
        enforce: 'pre',//表示优先执行
        //单条loader可直接使用loader,多条使用use
        loader: 'babel-loader'
      },
      //兼容js语法,把ES6语法转换为ES5以下
      // {
      //   test: /\.js$/,//所有的js文件
      //   use: {
      //     //使用babel-loader解析
      //     loader: 'babel-loader',
      //     //定义配置babel文件,不然要在根目录配置.babelrc文件
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      //彻底兼容js语法(兼容ie) 比如promise async generator等
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // 将ES6以上语法编译成ES5语法
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // npm i core-js
                {
                  useBuiltIns: "usage", // 按需加载
                  corejs: { version: 3 },
                  targets: {
                    ie: "10",
                    chrome: "70",
                  },
                },
              ],
            ],
            cacheDirectory: true, // 开启缓存
            plugins: ["@babel/plugin-transform-runtime"], // 避免重复函数
          },
        },
      },
      //处理less文件
      {
        test: /\.less$/,
        use: [
          //从下到上执行less->css->style
          // 'style-loader',//动态创建style,把js中的css代码添加到style中
          //提取css成单独文件
          //将style-loader替换成minicss...
          MiniCssExtractPlugin.loader,
          'css-loader',//把css以module方式整合到js中
          //兼容css文件
          // 'postcss-loader',
          //可以单独写配置文件也可以在这里配置
          "postcss-loader", // 做css的兼容性处理
          'less-loader'//less文件解析为css文件
        ]
      },
      //处理图片文件
      {
        test: /\.jpg$/,
        //可以自由在输出原文件和输出base64中选择
        type: 'asset',
        //解析器
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 //限制大小
          }
        }
      },
      //处理字体文件
      {
        test: [/\.woff2?$/, /\.ttf$/, /\.map3$/, /\.map4$/],
        //输出原文件
        type: 'asset/resource',
        //输出位置 权重更高
        generator: {
          filename: 'fonts/[hash:8][ext][query]'
        }
      }
    ]
  },
  //webpack插件 
  plugins: [
    //打包html文件
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    //配置插件提取css单独文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CssMinimizerPlugin()
  ],
  mode: 'production',//生产环境
  target: 'browserslist'
}
//生产环境需部署到服务器上才能运行 下载npm i serve -g