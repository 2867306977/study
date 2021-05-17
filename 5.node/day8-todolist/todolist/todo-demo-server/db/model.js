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
const todoModel = mongoose.model('todos', todoSchema)
// await todoModel.create({
//   todoName: '玩游戏',
//   isDone: true
// })
module.exports = todoModel
// })()