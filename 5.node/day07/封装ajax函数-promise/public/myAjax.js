function myAjax(options) {
  //返回一个promise
  return new Promise((resolve, reject) => {
    //判断是否传入参数 并且这个参数是否是一个对象
    if (!(options && typeof options === 'object')) return
    //解构这个参数 type默认是get请求  dataType默认是json
    let { url, data, type = 'get', dataType = 'json', timeout } = options
    //判断是否有url这个属性,如果没有直接return
    if (!url) return
    //创建xhr对象
    const xhr = new XMLHttpRequest()
    //设置请求时间  如超过这个时间则请求失败
    xhr.timeout = timeout

    //把数据转为键=值&键=值格式
    let paramStr = obj2str(data)
    //设置请求方式和请求地址 分为get/post请求
    //判断请求方式
    if (type === 'get') {
      //get请求发送请求得把数据放在url后边 ?键=值&键=值
      url += '?' + paramStr
      //把paramStr = null,因为post的请求需要通过send(paramStr)发送,而get不需要
      paramStr = null
    }
    //设置请求方式和请求地址 
    xhr.open(type, url)
    //设置请求头 content-type属性是设置请求体的格式,get没有请求体所以不需要设置
    if (type === 'post') xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    //发送请求 get请求=>xhr.send(null)
    xhr.send(paramStr)

    //接收响应 因为这里面执行是同步的,没等响应完成获取不到xhr.responseText,所以得监听readyState状态
    xhr.onreadystatechange = () => {
      //判断响应的状态 readyState分为0,1,2,3,4个状态 该事件下只有2,3,4三个状态 
      /* 0 表示发送请求之前
         1 表示发送请求后
         2 表示响应头完成
         3 表示响应体完成
         4 表示响应完毕
      */
      if (xhr.readyState === 4) {
        //判断状态码 如果为200表示请求成功
        if (xhr.status === 200) {
          //成功
          let value;
          //判断dataType是什么值,如果是json那么需要把传递过去的json字符串转为对象,如果是text则不需要转换直接传递
          if (dataType === 'json') {
            value = JSON.parse(xhr.responseText)
          } else if (dataType === 'text') {
            value = xhr.responseText
          }
          //成功返回一个成功的promise,并传递值
          resolve(value)
        } else {
          //失败
          reject('失败')
        }
      }
    }
  })

}

//封装一个函数,把传入的对象转为字符串
function obj2str(obj) {
  let arr = []
  for (const key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  //把数组转为字符串(键=值&键=值)格式
  return arr.join('&')
}
// console.log(obj2str({
//   username: 'ls',
//   age: 18
// }))