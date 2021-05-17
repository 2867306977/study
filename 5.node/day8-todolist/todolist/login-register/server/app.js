//后端代码 先创建数据库 再开启服务器
; (async function () {
  const express = require('express')
  const cors = require('cors')
  const logicRouter = require('./router/logicRouters')
  //引入cookie包
  const cookieParser = require('cookie-parser')
  //因为只使用cookie不安全,所以使用session, cookie是服务器发送给浏览器,session是浏览器发送给服务器(以前保存在服务器中,现在保存在数据库中)
  const session = require('express-session')
  const MongoStore = require('connect-mongo')(session) //因为require('connect-mongo')返回的是一个函数 然后直接调用(session)
  //连接数据库
  await require('../db/condb')
  console.log('数据库连接成功');

  const app = express()

  app.use(cors())
  //中间件 
  app.use(express.urlencoded({ extended: true }))

  //调用cookieParser,并使用中间件
  app.use(cookieParser())
  //设置中间件
  app.use(session({
    name: 'id1',   //设置cookie的name，默认值是：connect.sid
    secret: 'fii', //参与加密的字符串（又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true,//是否在每次请求时重新保存session
    store: new MongoStore({
      url: 'mongodb://localhost:27017/test-app',
      touchAfter: 24 * 3600 // 24小时之内只修改一次
    }),
    cookie: {
      httpOnly: true, // 开启后前端无法通过 JS 操作
      maxAge: 1000 * 60 * 60// 这一条 是控制 sessionID 的过期时间的！！！
    },
  }));


  //路由器中间件
  app.use(logicRouter)

  //开启服务器
  app.listen(5000, (err) => {
    if (err) console.log('错误', err);
    console.log('服务器开启成功');
  })
})()


