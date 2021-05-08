//创建数据库
const mongoose = require('mongoose')
//创建schema对象  每一个Schema对象对应着Mongodb中的一个集合
const Schema = mongoose.Schema;
//对文档对象进行约束
const testSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    default: '男'
  },
  info: {
    type: Schema.Types.Mixed,
    default: '暂无任何信息'
  },
  date: {
    type: Date,
    default: new Date()
  }
}, {
  collection: 'user' //集合名
})
//创建集合
const testModel = mongoose.model('user', testSchema);
//并且把集合导出
module.exports = testModel;
