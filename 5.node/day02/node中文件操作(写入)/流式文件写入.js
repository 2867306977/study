const fs = require('fs')
//创建一个读取流
let rs = fs.createReadStream('./music.mp3')
//创建一个写入流
let ws = fs.createWriteStream('./musicCopy.mp3')

//监听读取的数据
//要读取数据 把数据写入到写入流中
// rs.on('data', (data) => {
//   ws.write(data);
// })

//流对象有一个pipe方法 直接读取rs的数据并写入到ws
rs.pipe(ws)