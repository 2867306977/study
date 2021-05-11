/* 
中间件其实是一个函数  可以接收到请求对象和响应对象 和下一个中间件
 */
const express = require('express')
const app = express()
//在请求和响应过程中,所有的中间件中的请求对象和响应对象都是指向同一个
app.use((req, res, next) => {
  //只有调用了next()才能走到下一个中间件
})
// app.use(express.static('静态资源文件夹'))//开启静态服务器
app.get('/', (req, res) => {

})
app.listen(5000, () => {
  console.log('成功');
})