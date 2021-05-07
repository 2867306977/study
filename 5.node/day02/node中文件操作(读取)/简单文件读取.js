/* 
fs.readFile(path[,options],callback)
      path:要读取的文件的路径
      options: 配置信息
          flag: 打开文件要进行的操作 默认为r
              w: 写入
              r: 读取
              a: 追加
          encoding: 编码 默认(utf-8)
      callback: 读取完毕需要执行的回调
 */
const fs = require('fs')
//回调函数 第一个参数是错误信息  第二个是读取的数据
//错误优先原则 如果有错误则先打印错误信息,如果没有出错则返回null
fs.readFile('./hello.txt', (err, data) => {//该回调函数是异步的
  console.log(err, data);//这个data 是buffer  
})
console.log(123);
