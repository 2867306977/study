//对数据库的增删改查
//在插入数据前需确认数据库是否连接成功
; (async function () { //使用自调用函数
  //引入db模块 引入的是promise对象
  const db = require('../db')
  await db;//db是promise对象,只有返回成功了才执行后面代码
  console.log('数据库连接成功');
  //引入model模块 需要向文档插入数据
  const testModel = require('../model')//因为是自己创建的模块 需要写路径,如果文件是index.js,可以忽略index.js
  //因为增删改查是异步的 没有返回值,则返回promise对象
  //创建
  // await testModel.create({
  //   name: 'ls',
  //   age: 20,
  //   gender: '女',
  //   info: '我爱吃香蕉'
  // })
  //修改
  // await testModel.updateOne({ name: 'ls' }, { $set: { info: '我看完了瑞克和莫蒂' } })
  //查找需要在创建完之后查找,所以创建前面得添加await
  //需要一个查找的数据,所以得需要一个返回值
  //返回的是一个成功的promise 其返回值就是查找到的数据
  const data = await testModel.findOne()
  console.log(data);
})()