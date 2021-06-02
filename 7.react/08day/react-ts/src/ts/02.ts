//当ts不确定一个联合类型的变量到底是哪个类型的时候,我们只能访问联合类型共有的属性和方法
//等号右边匿名函数进行了类型定义,但是左右没有类型定义,是通过类型推论而推断出来的
let fn1 = function (x: number, y: number, ...args: []): number {
  return x + y;
};

//可以手动给fn添加类型let fn: (x: number, y: number) => number
let fn: (x: number, y: number) => number = function (
  x: number,
  y: number,
  ...args: []
): number {
  return x + y;
};

/* 
?可选参数后面不可接收必需参数后面
默认参数可以随意
 */

//使用接口定义函数形状
interface Fn {
  (x: number, y: number): number;
}
//fn2实现了Fn接口
let fn2: Fn = function (x: number, y: number): number {
  return x + y;
};
// console.log(fn2(1, 2));

/* 
重载: 允许一个函数接收不同数量或类型的参数时,做出的不同的处理
 */

//可以使用重载定义多个reverse类型 但是内部还是得判断是什么类型
function reverse(x: number, y: number): number;
function reverse(x: string, y: string): string;
// function reverse(x: number, y: string): number;

function reverse(x: number | string, y: number | string): number | string {
  // return x + y;//不能进行操作 因为不知道具体为什么类型
  //需判断
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    return x;
  }
}
console.log(reverse(1, 7)); //1

export default fn(1, 2);
