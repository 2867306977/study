//登录查找数据库
const messageModel = require('../model')
function findUser(username, password) {
  return messageModel.findOne({ username, password })
}
function findUserById(_id) {
  return messageModel.findOne({ _id })
}
module.exports.findUser = findUser
module.exports.findUserById = findUserById
