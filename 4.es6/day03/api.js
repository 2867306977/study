//需要将promise对象封装起来  业务逻辑代码和实现功能代码分离
function a() {
  //必须得return出去
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('成功');
      console.log('执行a');
    }, 1000);
  })
}

function b() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('err');
      console.log('执行b');
    }, 1000);
  })
}

function c() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('成功');
      console.log('执行c');
    }, 1000);
  })
}