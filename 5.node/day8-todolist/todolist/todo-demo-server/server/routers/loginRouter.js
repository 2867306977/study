//登录的路由
const express = require('express')
const { loginFind } = require('../../db/crud')
const router = express.Router()
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  console.log(username, password);
  //判断用户名和密码
  /* 
  如果数据库中用户名和密码存在那么就直接登录
   */
  await loginFind(username, password)
  console.log(1);
  res.redirect('http://127.0.0.1:5000/index.html')
})
module.exports = router