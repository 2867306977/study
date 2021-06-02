interface K {
  name: string;
  // age: number; 报错 一旦定义了任意属性,那么确定属性和可选属性的类型都必须是它的类型的子集
  //问号表示可选 它有string | undefined两个类型定义
  sex?: string;
  //任意属性 给属性名添加类型定义string
  //字符串索引: 通过定义接口用来对对象的约束
  [propName: string]: string | undefined;

  //这种就表示对数组类型的约束[propName: number]表示下标是数字
  // [propName: number]: number;
}

let tom: K = {
  name: 'jack',
  sex: 'nan',
};

//数字索引:定义接口来对数组的约束
interface P {
  [propName: number]: number;
}
//如果数字索引里存储了其他类型就报错
let arr: P = [1, 2, 3, 4];
console.log(tom);
console.log(arr);

export default tom;
