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