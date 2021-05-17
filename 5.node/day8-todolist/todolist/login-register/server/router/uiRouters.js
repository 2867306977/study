const express = require('express')
const { findUserById } = require('../../db/crud/login')
//创建路由对象
const uiRouter = express.Router()
//点击登录后重定向http://127.0.0.1:5000/home 页面,重定向是在地址栏输入地址所以是get请求
//当127.0.0.1:5000/home发送了get请求后执行里面的代码
uiRouter.get('/home', async (req, res) => {
  //判断:如果请求头中有cookies.userId说明之前登录过,那么就可以访问首页,如果没有则重新登陆 //cookie使用:req.cookies.userId

  //req.session.userId干的事情: 1.自动把这个session唯一标识发送给服务器,
  //2.然后服务器在session空间中查找这个userId如果找到了(则下面代码就是true,)说明之前登录过,那么久把/home/index响应给浏览器
  //3.如果没找到说明之前没有登录过(或者sessionId过期),则下面要求重新登陆
  if (req.session.userId) {
    // console.log(req.session.userId);
    //使用地址栏的id查询字符串,去数据库中查找对应的用户名
    const _id = req.query._id
    console.log(_id);
    const user = await findUserById(_id)//数据库的增删改查都是返回promise对象异步回调
    // console.log(user);
    //将.ejs里面的代码进行拼接,然后响应给服务器
    //127.0.0.1:5000/home/index.ejs?username=username
    //render('模板名',context)//context传递需要渲染的模板数据
    res.render('index', { username: user.username })
  } else {
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})
//详情页的路由
uiRouter.get('/detail', (req, res) => {
  //详情页也是和上面一样,只有有该cookie,说明登录过,那么就可以访问
  if (req.session.userId) {
    res.render('detail', {})
  } else {
    res.redirect('http://127.0.0.1:5000/login/index.html')
  }
})
module.exports = uiRouter