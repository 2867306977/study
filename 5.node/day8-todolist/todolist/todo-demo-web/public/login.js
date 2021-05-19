//获取元素
const username = document.querySelector('input[name=username]');
const password = document.querySelector('input[name=password]');
const userTip = document.querySelector('#tip-username');
const passTip = document.querySelector('#tip-password');
const subBtn = document.querySelector('input[type=submit]');
//封装一个函数 表单校验
function inputCheck(reg, tip) {
  // 返回的是一个函数
  return function () {
    if (reg.test(this.value.trim())) {
      tip.textContent = '输入正确'
      tip.style.color = 'green'
    } else {
      tip.textContent = '输入错误'
      tip.style.color = 'red'
    }
  }
}
//当用户表单失去焦点时,校验表单内容
username.oninput = inputCheck(/^\w{8,16}$/, userTip)
//当密码框失去焦点,校验表单
password.oninput = inputCheck(/^[A-Z]+\w{7,15}$/, passTip)
//当点击登录按钮,检验表单内容是否符合规范
subBtn.onclick = function (e) {
  //可以通过警告的样式来判断是否有内容 没有就取消提交(取消默认行为即可)
  if (!userTip.style.color || !passTip.style.color) return e.preventDefault()
  //判断输入的内容是否规范 (可以通过警告的颜色来判断)
  if (userTip.style.color === 'red' || passTip.style.color === 'red') return e.preventDefault()
}