$.fn.accordion = function (obj) {
  //设置一个默认最小宽度
  obj.minWidth = obj.minWidth || 100;
  //获取li
  var lis = this.find('li');
  //总宽度 / li的个数 = 每个li平均宽度
  var avgWidth = this.width() / lis.length;
  lis.css({ width: avgWidth })
  //给li 添加颜色 添加不同的颜色遍历li
  lis.each(function (index, element) {
    $(element).css({ backgroundColor: obj.colors[index] })
  })
  //求出最大宽度  总宽度 - 最小宽度*剩下li的个数
  var maxWidth = this.width() - obj.minWidth * (lis.length - 1);
  //当鼠标移入某个li中 当前li变宽 其他li变窄
  lis.on('mouseenter', function () {
    $(this).stop(true).animate({
      width: maxWidth
    }).siblings().stop(true).animate({
      width: obj.minWidth
    })
  })

  //当鼠标移出大盒子恢复默认宽度
  this.on('mouseleave', function () {
    lis.stop(true).animate({
      width: avgWidth
    })
  })

}