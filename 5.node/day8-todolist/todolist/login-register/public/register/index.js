//获取元素
const username = document.querySelector('input[name=username]');
const password = document.querySelector('input[name=password]');
const repass = document.querySelector('input[name=repassword]');
const userTip = document.querySelector('#tip-username');
const passTip = document.querySelector('#tip-password');
const repassTip = document.querySelector('#tip-repass');
const registerBtn = document.querySelector('input[type=submit]');
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
// username.oninput = function () {
//   //获取表单内容
//   let userVal = this.value.trim()
//   //创建正则规则校验表单 用户名规则:可以字母数字下划线(8~16)
//   const userReg = /^\w{8,16}$/
//   //如果符合规则那么添加提示'输入正确',不符合就添加提示不符合规则
//   if (userReg.test(userVal)) {
//     userTip.textContent = '输入正确'
//     userTip.style.color = 'green'
//   } else {
//     userTip.textContent = '输入错误'
//     userTip.style.color = 'red'
//   }
// }
//当密码框失去焦点,校验表单
password.oninput = inputCheck(/^[A-Z]+\w{7,15}$/, passTip)
//当确认密码框失去焦点,校验表单
repass.oninput = function () {
  //获取表单内容
  let repassVal = this.value.trim()
  //如果符合规则那么添加提示'输入正确',不符合就添加提示不符合规则
  if (repassVal === password.value.trim()) {
    repassTip.textContent = '输入正确'
    repassTip.style.color = 'green'
  } else {
    repassTip.textContent = '输入错误'
    repassTip.style.color = 'red'
  }
}
//当点击登录按钮,检验表单内容是否符合规范
registerBtn.onclick = function (e) {
  //可以通过警告的样式来判断是否有内容 没有就取消提交(取消默认行为即可)
  if (!userTip.style.color || !passTip.style.color) return e.preventDefault()
  //判断输入的内容是否规范 (可以通过警告的颜色来判断)
  if (userTip.style.color === 'red' || passTip.style.color === 'red') return e.preventDefault()
}