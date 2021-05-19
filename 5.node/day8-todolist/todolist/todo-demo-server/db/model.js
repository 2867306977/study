// ; (async function () {
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  todoName: {
    type: String,
    required: true,
    unique: true
  },
  isDone: {
    type: String,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
})
const loginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
})
// console.log(todoSchema, loginSchema);
const todoModel = mongoose.model('todos', todoSchema)
const loginModel = mongoose.model('users', loginSchema)
// await todoModel.create({
//   todoName: '玩游戏',
//   isDone: true
// })
module.exports.todoModel = todoModel
module.exports.loginModel = loginModel
// })()