/* 
action-creators 用来创建action对象工厂函数 
action=()=>{type:xxx,data:xxx}
定义多少个函数, 取决于你需要做多少种操作
 */

export const increment = num => ({ type: 'INCREMENT', num });
export const decrement = num => ({ type: 'DECREMENT', num });
