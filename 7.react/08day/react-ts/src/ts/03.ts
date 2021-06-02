/* 
类型断言 
值 as 类型 : 在tsx中必须使用这个语法
<类型>值
 */

//将联合类型断言为一种一个类型
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  }
  return false;
}
// console.log(
//   isFish({
//     name: '小鱼',
//     swim() {
//       return 1;
//     },
//   })
// );

//将一个父类断言为确切的子类
class Animal extends Error {
  code: number = 0;
}
class Person extends Error {
  statusCode: number = 200;
}
function isError(error: Error) {
  if (typeof (error as Animal).code === 'number') {
    return true;
  }
  return false;
}

// console.log(isError(new Error()));

//使用type可以给类型起新的名字
type Name = string;
type Fn = () => string;
function fn(n: Fn): Name {
  return n();
}
console.log(fn(() => 'w'));

export default 1;
