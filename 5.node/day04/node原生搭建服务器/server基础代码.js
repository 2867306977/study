//引入http模块
const http = require('http');
//引入querystring模块
const queryString = require('querystring')
//创建服务器 http.createServer([options],[requestListen])requestListen <Function>,返回一个新的http.Server实例(用于创建TCP或IPC服务器)
//创建完成之后 立刻调用这个回调函数 回调函数会传入两个参数 1.请求对象 2.响应对象
const server = http.createServer((request, response) => {
  let str = request.url;
  // console.log(str);  /?name=zs&age=19
  let arr = str.split('?'); //['/' , 'name=zs&age=19']  以?切割
  //querystring里面有parse和stringify方法 parse转为对象
  console.log(queryString.parse(arr[1]));
  //end方法可以响应客户端  如果为中文则会出现乱码现象,使用response.setHeader()设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('服务器响应')
})
//启动HTTP服务器用于监听连接 这个函数是异步的 listen方法里面传两个参数 1.端口号 2.回调 回调函数会传入一个error
//server.listen([port[, host[, backlog]]][, callback]) 用于TCP服务器
server.listen(5000, (err) => {
  if (err) console.log('服务器开启失败', err)
  else console.log('服务器开启成功')
})