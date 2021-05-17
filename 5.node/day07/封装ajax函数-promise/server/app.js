const express = require('express')
const app = express()
app.use(express.static('../public'))
app.use(express.urlencoded({ extended: true }))
app.post('/test', (req, res) => {
  // setTimeout(() => {
  res.send(req.body)
  // }, 3000);
})
app.get('/test', (req, res) => {
  res.send(req.query)
})
app.listen(5000, () => {
  console.log('服务器开启成功');
})