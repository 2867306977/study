export default 1;
//接口定义函数类型
interface Fn {
  (x: number, y: number): number;
}

const fn: Fn = (x: number, y: number) => x + y;
fn(1, 2);
