// 封装函数 获取到有多少个li 多少条数据 依次放入todoData中
//删除的时候删除todoData中对应的数据  那么就删除对应的项目

//通过修改数据 修改页面的渲染数据

//创建一个数据
var todoData = [
  {
    id: 1,
    todoName: '吃饭',
    isDone: true
  },
  {
    id: 2,
    todoName: '睡觉',
    isDone: true
  },
  {
    id: 3,
    todoName: '敲代码',
    isDone: false
  },
]


//遍历数组  把数据展示出来
var todoArr = todoData.map(function (item, index) {
  //判断isDone是true还是false  
  //如果为true那么就样式不一样 checked不一样 因为是字符串拼接所以false是字符串返回的还是true
  if (item.isDone) {
    return (`<li>
    <label>
      <input type="checkbox" checked />
      <span class="done">${item.todoName}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>`)
  } else {
    return (`<li>
    <label>
      <input type="checkbox" />
      <span>${item.todoName}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>`)
  }
})

//把todoArr转成字符串渲染页面上
$('.todo-main').html(todoArr.join(''));
//如果没有数据则不需要展示.todo-footer
// console.log(todoData.length);
isShow();

itemsNum();

//敲回车添加数据
$('.todo-header input').on('keyup', function (e) {
  if (e.keyCode === 13) {
    // 获取表单内容 
    var value = $(this).val().trim();
    //获取完后清空表单内容
    $(this).val('');
    //判断表单数据是否为空
    if (!value) return;
    var str = `<li>
    <label>
      <input type="checkbox" />
      <span>${value}</span>
    </label>
    <button class="btn btn-danger">删除</button>
  </li>`
    //渲染数据
    $('.todo-main').append(str);
    //显示todo-footer 把h2移除
    // $('.todo-footer').show();
    // $('.todo-main h2').remove();
    isShow();
    //回车后并没有监听到全选选中事件 
    allChecked();
    itemsNum();
  }
})

//点击项目的复选框 添加.done类名
$('.todo-main').on('click', 'li>label>input', function () {
  //判断: 如果复选框选中了那么就添加.done
  if ($(this).prop('checked')) {
    $(this).siblings().addClass('done');
  } else {
    //否则移除这个类
    $(this).siblings().removeClass('done');
  }

  allChecked();
  itemsNum();
})

//点击全选按钮 选中所有的项目
$('.todo-footer>label>input').on('click', function () {
  //如果全选按钮为false 那么项目中的span.done全部移除
  if ($(this).prop('checked')) {
    $('.todo-main>li>label>input').prop('checked', true).next().addClass('done');
  } else {
    $('.todo-main>li>label>input').prop('checked', false).next().removeClass('done');
  }
  itemsNum();
})

//点击删除按钮删除当前的项目
$('.todo-main').on('click', 'li>button.btn-danger', function () {
  $(this).parent().remove();
  //没有删除所有的项目时,判断全选按钮是否选中
  allChecked();
  //删除完毕,判断todo-main和todo-footer是否需要展示
  isShow();
  //修改已完成和全部
  itemsNum();
})

//点击清空已完成任务 清空选中的项目
$('.todo-footer>button.btn-danger').on('click', function () {
  $('.todo-main>li input:checked').parent().parent().remove();
  //没有删除所有的项目时,判断全选按钮是否选中
  allChecked();
  //删除完毕,判断todo-main和todo-footer是否需要展示
  isShow();
  //修改已完成和全部
  itemsNum();
})

