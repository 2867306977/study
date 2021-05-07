/*
fs.createReadStream(path[,options])
    path: 读取文件的路径
    options: 配置文件
        flag:
            w
            r
            a
        encoding:
        fd: 文件描述符
        autoClose: 读取完毕自动关闭,默认为true
        start: 读取的开始位置 默认为0
        end: 读取的结束位置 默认是highWaterMark
        highWaterMark: 每次读取数据的大小(管子的粗细)64(byte) * 1024
 */
const fs = require('fs')
//创建一个读取流
let rs = fs.createReadStream('./hello.txt', {
  start: 1  //读取的开始位置
})

//读取文件中的数据
//on 里面传的是data 监听这个文件读取的信息,每次读取到文件的一部分信息,就执行一次回调
rs.on('data', (data) => {
  console.log(data);
})
