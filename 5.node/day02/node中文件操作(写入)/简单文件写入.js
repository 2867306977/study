/* 
fs.writeFile(path,data[,options],callback)
    path:路径
    data:要写入的数据
 */
//对于简单文件来说是一次性就把数据写入到文件中
const fs = require('fs')
fs.writeFile('./test.txt', 'hahaha', (err) => {
  console.log(err);
})
