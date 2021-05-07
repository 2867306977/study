$(function () {
  // 点击事件
  $('.wrap').click(function () {
    let asd = $('.aside').css("right");
    if (asd == 0 + 'px') {
      $(this).parent('.aside').animate({ "right": "-290px" });
    } else {
      $(this).parent('.aside').animate({ "right": "0px" });
    }
  })

  // 鼠标经过
  $('.pull').mouseover(function () {
    $(this).find('em').stop().animate({
      "left": "-59px"
    }, "fast")
  });
  $('.pull').mouseout(function () {
    $(this).find('em').stop().animate({
      "left": "35px"
    }, "fast")
  });
  //鼠标经过  ^
  $('.back').mouseover(function () {
    $(this).find('em').stop().animate({
      "left": "-59px"
    }, "fast")
  });
  $('.back').mouseout(function () {
    $(this).find('em').stop().animate({
      "left": "35px"
    }, "fast")
  });

  //返回顶部
  $('.back').click(function () {
    $('html,body').animate({ "scrollTop": 0 }, 300);
  })
})