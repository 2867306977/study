(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module2');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module2.default); //引入分别/统一暴露 浏览器不认识import需要转换浏览器认识的语法使用babel->browserify
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

//引入分别/统一/默认暴露  默认暴露必须放在最前面

(0, _module.foo)();
(0, _module.bar)();
(0, _module.fn)();
},{"./module2":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn = fn;
//分别/统一/默认 一起暴露  默认暴露只能出现一次 但可以和多个其他暴露一起出现
function foo() {
  console.log('module2 foo()');
}
function bar() {
  console.log('module2 bar()');
}
function fn() {
  console.log('module2 fn()');
}
exports.foo = foo;
exports.bar = bar;
//因为export default本质上是把值赋值给default变量,所以引入模块可以随意取名,正因为这样所以后面可以直接跟值,而不能跟变量语句声明
// export default let arr = [1, 2, 3] 
//所以export let arr = [1,2,3] 是被允许的

exports.default = 123; //是被允许的 因为是把值赋值给default 
//而export 123 不被允许  因为没有一个对外的接口
},{}]},{},[1]);
