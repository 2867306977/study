/* 
buffer是一个类数组的对象,用来存储数据(数据都是二进制)
buffer效率很高,直接对内存进行操作ROM(硬盘)RAM(内存)
buffer大小一旦确定 就不可以修改
buffer是node中的核心模块 可以直接使用
 */
// const buffer = new Buffer(10) //不推荐使用
// const buffer = Buffer.alloc(10) //效率比下面的慢,但是安全
// const buffer = Buffer.allocUnsafe(10) //效率比上面的快的,但是不安全
const buffer = Buffer.from('中国')//把指定数据类型,转化为二进制
console.log(buffer);