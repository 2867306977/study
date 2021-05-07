//获取.todo-main中有多少个项目 项目中被选中的有多少个
function allChecked() {
  //获取全部项目的数量
  var allItems = $('.todo-main>li input').length;
  var allCheckedItems = $('.todo-main>li input:checked').length;
  //如果全部选中了那么全选也选中
  $('.todo-footer>label>input').prop('checked', allItems === allCheckedItems)
}

//修改todo-footer中的span
function itemsNum() {
  // //获取全部项目的个数赋值给全部span中
  var allItems = $('.todo-main>li input').length;
  //获取选中的项目个数放进已完成span中
  var allCheckedItems = $('.todo-main>li input:checked').length;
  $('.todo-footer>span>i').html(allItems);
  $('.todo-footer>span>span>i').html(allCheckedItems);
}

function isShow() {
  if (!$('.todo-main>li input').length) {
    $('.todo-footer').hide();
    $('.todo-main').html('<h2>恭喜你没有任务</h2>')
  } else {
    $('.todo-footer').show();
    $('.todo-main h2').remove();
  }
}
