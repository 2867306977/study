//把注册页面对数据库的添加数据封装成函数
const messageModel = require('../model')
function registerUser(username, password) {
  return messageModel.create({
    username,
    password
  })
}
module.exports.registerUser = registerUser
