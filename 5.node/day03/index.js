/* 
  怎么知道连接成功,可以使用async和await来配合使用
  并且连接失败能知道  注意: 函数调用方式通常使用在多次地方需要调用  如果只需调用一次 可使用自调用方式
 */

; (async function () {
  //引入mongoose
  const mongoose = require('mongoose')
  //成功执行try语句中代码  失败则立马执行catch语句中代码
  try {
    //连接数据库  有就连接 没有就创建 
    await mongoose.connect('mongodb://127.0.0.1:27017/test',
      //解决警告问题:要求使用新方法来连接
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )

    // 创建一个Schema对象
    const Schema = mongoose.Schema;
    //制定规则约束 返回的是Schema对象 传入一个对象
    const testSchema = new Schema({
      name: {
        type: String,//类型为字符串类型
        required: true,//表示必需填
        unique: true//表示唯一的
      },
      age: {
        type: Number,//为数字类型
        required: true
      },
      gender: {
        type: String,
        default: '男'//默认值
      },
      info: {
        type: Schema.Types.Mixed,//表示任何类型
        default: '暂无任何信息'
      },
      date: {
        type: Date,
        default: new Date(),//默认值为当前时间
      }
    })

    //创建Model对象 集合  第一个参数为集合名,第二个参数为Schema对象 指定的规则 返回一个model对象
    const testModel = mongoose.model('user', testSchema);
    //创建文档
    //集合中创建文档  model.create()它是一个异步回调,第一个参数是文档,第二个参数回调函数,
    testModel.create({
      name: 'xx',
      age: 19,
      gender: '女'
    }, (err, data) => console.log(err, data));//回调函数中有两个参数 1.err 2.data 插入成功err返回的是null,data则返回的插入的文档,失败则返回失败的信息

    console.log('成功');
  } catch (error) {
    console.log('失败', error);
  }
})()
// mongoose.connect('mongodb://127.0.0.1:27017/test')返回的一个promise对象 连接成功返回成功的promise