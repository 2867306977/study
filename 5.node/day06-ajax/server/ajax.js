const express = require('express')
const app = express()
app.use(express.static('../public'))
app.use(express.urlencoded({ extended: true }))
app.post('/findUser', (req, res) => {
  let arr = ['ls', 'zs', 'ff', 'lh']
  const username = req.body.username
  let result = arr.includes(username)
  if (result) {
    res.send('ok')
  } else {
    res.send('no')
  }

})
app.listen(5000, (err) => {
  if (err) console.log('错误', err);
  else console.log('服务器开启成功');
})