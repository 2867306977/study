; (async function () {
  const express = require('express')
  const cors = require('cors')
  //引入处理的路由
  const logicRouter = require('./routers/logicRouter')
  //引入数据库
  await require('../db/db')

  console.log('数据库连接成功');
  const app = express()

  //设置跨域   
  /* app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    next()
  }) */
  app.use(cors())
  //中间件
  app.use(express.urlencoded({ extended: true }))
  //路由器中间件
  app.use(logicRouter)



  app.listen(5000, (err) => {
    if (err) console.log('错误', err);
    else console.log('服务器连接成功');
  })
})()