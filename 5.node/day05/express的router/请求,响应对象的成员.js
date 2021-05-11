/*
请求对象的成员
req.query  获取get请求的查询字符串
req.body   获取通过post请求发送的数据(需配合中间件express.urlencoded({extended:true})来获取,把数据赋值给body属性) 注意:post请求中用户发送的数据在请求体中,get请求需要的数据在URL中
req.get("属性")  获取请求头的属性值
req.params  获取路由参数 (路由参数一般传递简单信息)

响应对象的成员
res.send()  响应的字符串
res.download('相对/绝对路径')  根据地址下载该资源
res.sendFile('绝对路径')  浏览器可以展示就直接展示,如不能展示则直接下载
res.set('属性','值')  自定义响应头信息(要在响应之前设置)
res.get('属性')  获取响应头的信息
 */

const express = require('express')
const app = express()

//中间件
app.use(express.urlencoded({ extended: true }))

//一般为了安全会隐藏X-Powered-By
app.disable('x-powered-by') //隐藏x-powered-by信息
//  /:page/:pageSize? 配置路由参数  ?表示可选
app.get('/getUser/:page/:pageSize?', (req, res) => {
  // console.log(req.params);//返回路由参数
  // console.log(req.query);//获取查询字符串
  // console.log(req.get('user-agent'));//使用的浏览器的信息

  // res.send('get')//响应字符串
  // res.download('./文件.txt')//下载文件  相对路径
  // res.download(__dirname + '/文件.txt') //绝对路径
  // res.sendFile(__dirname + '/文件.txt') //必须为绝对路径
  // console.log(res.get('X-Powered-By'))//express X-Powered-By是用于告知网站是用什么语言或框架来编写的
  res.send('get')
})

app.post('/getUser', (req, res) => {
  // console.log(req.body) //post请求主体的数据 配合中间件获取
  res.send('post')
})
app.listen(5000, () => {
  console.log('成功');
})