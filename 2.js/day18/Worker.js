this.onmessage = function (e) {
  var num = 0;
  for (var i = 0; i < e.data; i++) {
    num += Math.sqrt(i);
  }
  postMessage(num);
  close();//关闭分线程

}
