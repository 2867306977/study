/* 
根据prevState和action来计算生成newState新数据的函数模块
 */
//reducers函数名称,一般和管理的数据名称一致
//初始化prevState值
function count(prevState = 0, action) {
  console.log(prevState, action.num);
  //判断action.type是什么类型
  switch (action.type) {
    case 'INCREMENT':
      return prevState + action.num;
    case 'DECREMENT':
      return prevState - action.num;
    default:
      return prevState;
  }
}
//把函数暴露出去
export default count;
