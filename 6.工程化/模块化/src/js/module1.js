//分别暴露
// export function foo() {
//   console.log('module1 foo()');
// }

// export function bar() {
//   console.log('module1 bar()');
// }

// export let arr = [1, 2, 3, 4]

//统一暴露
// function foo() {
//   console.log('module1 foo()');
// }

// function bar() {
//   console.log('module1 bar()');
// }

// let arr = [1, 2, 3, 4]
// export { foo, bar, arr }

//默认暴露 只能暴露一个
export default function foo() {
  console.log('module1 foo()');
}