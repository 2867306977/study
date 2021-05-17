const express = require('express')
const { findTodo, addTodoFn, updateTodosFn, deleteTodosFn } = require('../../db/crud')
const router = express.Router()
//查找所有数据的接口
router.get('/findTodos', async (req, res) => {
  // const { callback } = req.query
  // console.log(callback);
  //从数据库拿到数据来响应给浏览器,返回的是promise所以使用async和await
  let data = await findTodo()
  //因为拿到的数据是json数据格式,所以得转换为字符串然后再响应
  data = JSON.stringify(data)
  //把数据响应给浏览器
  res.send(data) //allTodo(data)
})
//添加 数据的接口
router.post('/addTodo', async (req, res) => {
  const { todoName } = req.body
  //在数据库中添加这个数据
  await addTodoFn(todoName)
  //添加后找到所有的数据响应给浏览器
  let data = await findTodo()
  data = JSON.stringify(data)
  res.send(data)
})
//更新数据的接口
router.post('/updateTodos', async (req, res) => {
  //获取浏览器上传的id和isDone数据 id必须得是个数组 因为更新可能更新多条
  let { ids, isDone } = req.body
  // console.log(ids, isDone);
  //因为上传上来的都是json字符串 所以得转为数组格式 注意:json字符串中必须得是双引号没有单引号
  ids = JSON.parse(ids)
  //去数据库中更新
  await updateTodosFn(ids, isDone)
  //更新完后吧数据响应给浏览器
  let data = await findTodo()
  data = JSON.stringify(data)
  res.send(data)
})
//删除数据的接口
router.post('/deleteTodos', async (req, res) => {
  let { ids } = req.body
  ids = JSON.parse(ids)
  // console.log(ids);
  await deleteTodosFn(ids)
  //删除完后吧数据响应给浏览器
  let data = await findTodo()
  data = JSON.stringify(data)
  res.send(data)
})
module.exports = router