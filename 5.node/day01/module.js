console.log('module1');
let a = 1;
let b = 2;
//node的每个js文件都是一个局部作用域,必须导出才能在别的文件才能使用这个局部变量
// module.exports = {
//   a, b
// }
//下面的exports不是忽略了module,而是内部是这样实现的=>let exports;exports = module.exports = {}(//默认是返回一个空对象)
//导出方式
exports.a = a
exports.b = b
//3
module.exports.a = a
