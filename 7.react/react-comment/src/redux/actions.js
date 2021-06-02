//展示数据  增  删
// export const comments = list => ({
//   type: 'COMMENTS',
//   list,
// });
//添加传入一个对象
export const addComment = comment => ({ type: 'ADD_COMMENT', comment });
//删除需要传id 根据这个id删除数据
export const delComment = id => ({ type: 'DEL_COMMENT', id });
