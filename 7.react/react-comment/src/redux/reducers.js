import { combineReducers } from 'redux';
import list from './state';
// //它们都是操作comments 数组数据
// //把数组传进去
function comments(prevState = list, action) {
  return prevState;
}
//添加操作 是往数组中添加数据
function addComment(prevState = list, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...prevState, action.comment];
    default:
      return prevState;
  }
}
//删除操作 是往数组中删除数据 根据action
function delComment(prevState = list, action) {
  switch (action.type) {
    case 'DEL_COMMENT':
      const newList = prevState.filter(item => {
        //过滤掉id相同的对象,返回不同的id的对象并组成一个新的数组
        return item.id !== action.id;
      });
      // console.log(newList);
      return newList;
    default:
      return prevState;
  }
}

export default combineReducers({
  addComment,
  delComment,
  comments,
});
