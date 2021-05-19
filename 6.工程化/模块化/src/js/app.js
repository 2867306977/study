
/* 
在根文件夹创建.babelrc 
 */


//引入分别/统一暴露 浏览器不认识import需要转换浏览器认识的语法使用babel->browserify
// import { foo, bar, arr } from './module1'
// console.log(arr);
// foo()
// bar()

//引入默认暴露
// import foo from './module1'
// foo()

/* 
import 可以写在任意位置 前提必须得在作用域顶部,可以提升 首先执行import
import 输入的文件只能读取它本质是输入接口,不能写入,但如果是对象,修改它的属性是可以的,但不能修改它的引用地址
ES6模块是动态执行的,如果两个模块之间存在引用 那么代码就能够执行
 */

//引入分别/统一/默认暴露  默认暴露必须放在最前面 如果变量名重复 可以使用as来重命名
import num, { foo as fnn, bar, fn } from './module2'
console.log(num);
fnn()
bar()
fn()