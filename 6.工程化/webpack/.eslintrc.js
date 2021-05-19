//eslint定义配置文件
module.exports = {
  parserOptions: {
    ecmaVersion: 8, //es8
    sourceType: 'module'//使用了es6的模块化语法
  },
  rules: {
    //报错 error 2 (红色 终止打包)
    //警告 warn 1 (黄色 不终止打包)
    //关闭 off 0
    // semi: 'error',//必须使用分号结尾,不使用报错
    semi: 'off',
    'no-console': 1,
    eqeqeq: 2
  }
}