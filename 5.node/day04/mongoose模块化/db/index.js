//连接数据库
const mongoose = require('mongoose');
//连接数据库 并且导出 导出的是promise对象
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})