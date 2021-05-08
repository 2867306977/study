//引入express库
const { request, response } = require('express');
const express = require('express');
//创建应用对象
const app = express();
//get请求 第一个参数 path 必填路径
app.get('/', (request, response) => {
  //  /  是路径
  // ?name=zs&age=19  ?后面是查询字符串
  console.log(request.query);//返回的是一个对象
  response.send('get/服务器响应')
})

//服务器端区分多个请求,利用请求方式和请求的路径,当前情况下是get请求方式,那么就通过路径来区分
//浏览器的地址栏都是通过get请求 表单可以自定义post或者get
app.get('/abc', (request, response) => {
  console.log(request.query);
  response.send('get/hahaha')
})

//虽然路径一样但是请求方式不一样
app.post('/abc', (request, response) => {
  console.log('post/abc');
  response.send('post/abc')
})
//启动服务器并监听
app.listen(5000, (err) => {
  if (err) console.log('服务器启动失败', err)
  else console.log('服务器启动成功');
})
