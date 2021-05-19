const { todoModel, loginModel } = require('./model')
// console.log(todoModel, loginModel);
//查询所有数据
function findTodo() {
  return todoModel.find()
}
//添加数据
function addTodoFn(todoName) {
  return todoModel.create({
    todoName
  })
}
//更新数据
function updateTodosFn(ids, isDone) {
  return todoModel.updateMany({ _id: { $in: ids } }, { $set: { isDone } })
}
//删除数据
function deleteTodosFn(ids) {
  return todoModel.deleteMany({ _id: { $in: ids } })
}

//根据用户名找数据
function loginFind(username, password) {
  return loginModel.findOne({ username, password })
}

module.exports.findTodo = findTodo
module.exports.addTodoFn = addTodoFn
module.exports.updateTodosFn = updateTodosFn
module.exports.deleteTodosFn = deleteTodosFn
module.exports.loginFind = loginFind