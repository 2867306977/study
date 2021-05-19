const mongoose = require('mongoose')
//createConnection
const url1 = 'mongodb://127.0.0.1:27017/todo';
const url2 = 'mongodb://127.0.0.1:27017/messages'
const todoDb = mongoose.createConnection(url1, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const loginDb = mongoose.createConnection(url2, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
module.exports.todoDb = todoDb
module.exports.loginDb = loginDb
