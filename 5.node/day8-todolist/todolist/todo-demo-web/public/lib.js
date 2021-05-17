//渲染页面
function render(data) {
  //添加前清空页面之前的展示的todolist
  todoMain.innerHTML = ''

  //渲染之后判断数据是否没有,没有则显示tip
  if (data == false) { //空数组转布尔值为true,但和布尔值判断都转为0
    tip.style.display = 'block';
    container.style.display = 'none'
    //没有数据没必要执行后边的代码
    return
  } else {
    tip.style.display = 'none';
    container.style.display = 'block'
  }
  // console.log(data);
  data.forEach(function (item) {
    //判断isDone,如果为true那么就选中按钮,否则不选中
    // console.log(JSON.parse(item.isDone));转为布尔值
    let todoStr = `<li>
                  <label>
                    <input type="checkbox" ${JSON.parse(item.isDone) ? 'checked' : ''} id=${item._id}>
                    <span class="${JSON.parse(item.isDone) ? 'done' : ''}">${item.todoName}</span>
                  </label>
                  <button class="btn btn-danger" id=${item._id}>删除</button>
                </li>`
    todoMain.innerHTML += todoStr
  })
  //获取已经完成的任务
  //如果item.isDone是true那么就是已完成的任务
  let finishTodo = 0
  data.forEach((item) => {
    if (item.isDone === 'true') {
      finishTodo++
    }
  })
  //获取全部任务
  const allList = data.length
  // console.log(finishTodo);
  //渲染底部
  let footStr = `<label>
                    <input type="checkbox" ${finishTodo === allList ? 'checked' : ''} />
                  </label>
                  <span> <span>已完成<i>${finishTodo}</i></span> / 全部<i>${allList}</i> </span>
                  <button class="btn btn-danger">清除已完成任务</button>`
  todoFooter.innerHTML = footStr

  //必须在渲染后获取全选复选框元素,
  const allChecked = document.querySelector('.todo-footer input')
  allChecked.onclick = allCheckedFn
  //也是渲染之后获取元素
  const delChecked = document.querySelector('.todo-footer .btn');
  delChecked.onclick = delCheckedFn
}


//封装ajax方法 
function myAjax(options) {
  return new Promise((resolve, reject) => {
    if (!(options && typeof options === 'object')) return
    let { url, data, type } = options
    if (!url) return
    const xhr = new XMLHttpRequest()
    let params = obj2str(data)
    if (type === 'get') {
      url += '?' + params
      params = null
    }
    xhr.open(type, url)
    if (type === 'post') xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(params)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      }
    }
  })
}

//封装对象转为键值对的方法
function obj2str(data) {
  let arr = []
  for (const key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  return arr.join('&')
}

//点击全选复选框  
//判断复选框的状态,如果为true则任务list的isDone全部修改为true 如果false 全部修改为false
async function allCheckedFn() {
  //得渲染后才获取的到元素
  let todoList = document.querySelectorAll('.todo-main li input');
  //获取全选框的选中状态
  const isAllChecked = this.checked
  //获取任务项的每一个id 并且以数组的形式返回
  //todoList是伪数组,使用数组的方法把伪数组转为数组
  todoList = Array.from(todoList)
  // console.log(todoList);
  const arr = todoList.map(item => {
    return item.id
  })
  // console.log(arr);
  //把数据发送给服务器
  const data = await myAjax({
    url: 'http://127.0.0.1:5000/updateTodos',
    type: 'post',
    data: {
      ids: JSON.stringify(arr),
      isDone: isAllChecked
    }
  })
  render(data)
}

//点击删除已完成任务按钮
async function delCheckedFn() {
  //获取所有的表单
  let todoList = document.querySelectorAll('.todo-main li input');
  //需要获取被选中的表单的id
  todoList = Array.from(todoList)
  //使用reduce 可以直接对不同的对象做相同的操作
  const arr = todoList.reduce((prev, item) => {
    //判断是否被选中,如果被选中 则把这个对应id存入初始化prev数组中
    if (item.checked) {
      prev.push(item.id)
    }
    return prev
  }, [])
  //把这个arr发送给服务器
  const data = await myAjax({
    url: 'http://127.0.0.1:5000/deleteTodos',
    type: 'post',
    data: {
      ids: JSON.stringify(arr)
    }
  })
  render(data)
}