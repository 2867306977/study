//创建model
const mongoose = require('mongoose')
//创建Schema对象
const Schema = mongoose.Schema;
//对数据的约束
const messageSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  registerDate: {
    type: Date,
    default: Date.now()
  }
})
//创建model对象
const messageModel = mongoose.model('users', messageSchema);
module.exports = messageModel
