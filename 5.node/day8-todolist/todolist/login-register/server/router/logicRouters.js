//把路由拆分到路由逻辑代码中实现
const express = require('express')
const md5 = require('md5')
//创建路由
const logicRouter = express.Router()

//引入注册添加数据的方法
const { registerUser } = require('../../db/crud/register')
//引入登录查找数据的方法
const { findUser } = require('../../db/crud/login')

//如果再重新创建app那么就是又重新创建了一个服务器,所以此时需要使用router
//这个router就是指向app
//登录页面
logicRouter.post('/login', async (req, res) => {
  //获取登录上传的数据
  const { username, password } = req.body
  // console.log('username:' + username, 'password:' + password);
  //查找数据库中是否有上传的该数据
  const findMessage = await findUser(username, md5(password))
  // console.log(findMessage);
  //判断 如果没有这个账号或者密码错误,提醒用户重新登录
  if (!findMessage) {
    res.send('账号不存在或密码不正确请<a href="http://127.0.0.1:5000/login/index.html">重新登录</a>');
  } else {
    //登录成功后给浏览器发送一个cookie
    //cookie 使用方法
    // res.cookie('userId', findMessage._id);//参数:1.cookie仓库中定义的键,2.值,3.cookie有效期,默认一个会话事件,单位(ms)

    //session使用方法
    //干的事情:1. 给服务器发送请求 开启了session 给session开辟一块空间,这个空间有一个唯一标识符sessionId,然后把用户的findMessage._id存储在里面
    //然后把sessionId响应给浏览器,把这个sessionId存储在了cookie中
    req.session.userId = findMessage._id
    //登录成功后跳转到首页  去服务器处理这个get请求
    res.redirect('http://127.0.0.1:5000/home?_id=' + findMessage._id)
  }
})

//注册页面
logicRouter.post('/register', async (req, res) => {
  //获取登录上传的数据
  const { username, password } = req.body
  // console.log('username:' + username, 'password:' + password);
  //把上传的数据添加到数据库中
  await registerUser(username, md5(password))
  res.send('注册成功请<a href="http://127.0.0.1:5000/login/index.html">登录</a>')
})

module.exports = logicRouter