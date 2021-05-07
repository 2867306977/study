console.log('app');
//使用require方法引入到入口文件中(一般名为app)
const module1 = require('./module')
console.log(module1);
let { a, b } = module1
console.log(a, b);