/* 放大镜 */
magnify();
function magnify() {
  var oSmallImgArea = document.querySelector('.main .left .img .smallImg');
  var oMask = document.querySelector('.main .left .img .smallImg .mask');
  var oBigImgArea = document.querySelector('.main .left .img .bigImg');
  var oBigImg = document.querySelector('.main .left .img .bigImg img');
  oSmallImgArea.onmousemove = function (e) {
    //显示遮罩层
    oMask.style.display = 'block';
    //显示大图
    oBigImgArea.style.display = 'block';
    // mask移动的距离 = 鼠标距离视口的距离 - 容器距离视口的距离 - 遮罩层宽度的一半
    var imgToWin = {
      left: oSmallImgArea.getBoundingClientRect().left,
      top: oSmallImgArea.getBoundingClientRect().top
    }
    var maskWH = {
      width: oMask.offsetWidth,
      height: oMask.offsetHeight
    }
    var maskLocation = {
      left: e.clientX - imgToWin.left - maskWH.width / 2,
      top: e.clientY - imgToWin.top - maskWH.height / 2
    }
    //判断临界值
    if (maskLocation.left <= 0) {
      maskLocation.left = 0;
    } else if (maskLocation.left >= oSmallImgArea.offsetWidth - maskWH.width) {
      maskLocation.left = oSmallImgArea.offsetWidth - maskWH.width
    }
    if (maskLocation.top <= 0) {
      maskLocation.top = 0;
    } else if (maskLocation.top >= oSmallImgArea.offsetHeight - maskWH.height) {
      maskLocation.top = oSmallImgArea.offsetHeight - maskWH.height
    }
    //赋值
    oMask.style.left = maskLocation.left + 'px';
    oMask.style.top = maskLocation.top + 'px';


    //大图设置
    //定义一个比例  遮罩层移动的距离 / 遮罩层可以移动的距离 = 大图移动的距离 / 大图可以移动的距离
    //因为是正方形所以高宽比例一样
    //大图可以移动的距离
    var bigMove = oBigImg.offsetWidth - oBigImgArea.clientWidth;
    //小图可以移动的距离
    var smallMove = oSmallImgArea.clientWidth - oMask.offsetWidth;
    //求比例
    var scale = bigMove / smallMove;
    //大图位置
    var bigLocation = {
      left: maskLocation.left * scale,
      top: maskLocation.top * scale
    }
    //赋值
    oBigImg.style.left = -bigLocation.left + 'px';
    oBigImg.style.top = -bigLocation.top + 'px';
  }
  //鼠标移出
  oSmallImgArea.onmouseleave = function () {
    //隐藏遮罩层
    oMask.style.display = 'none';
    //隐藏大图
    oBigImgArea.style.display = 'none';
  }
}

/* 缩略图 */
thumbnail();
function thumbnail() {
  // 根据数据生成缩略图
  var oList = document.querySelector('.main .left .list .shop .list-con');
  //用一个变量保存图片数据
  var imgDate = goodData.imgsrc;
  //创建碎片节点
  var frag = document.createDocumentFragment();
  imgDate.forEach(function (item, index) {
    //有几个数据就创建几个图片和标签
    var newLis = document.createElement('li');
    var img = new Image();
    //插入图片
    img.src = item.s;
    //把图片插入li中
    newLis.appendChild(img);
    //把li插入碎片节点中
    frag.appendChild(newLis);
  })
  //当frag完成后,插入ul中
  oList.appendChild(frag);



  /* 点击按钮图片向左向右移动两张图 */
  var oNextBtn = document.querySelector('.main .left .list .nextbtn');
  var oPrevBtn = document.querySelector('.main .left .list .prevbtn');
  var oLis = document.querySelectorAll('.main .left .list .shop .list-con li');


  //每次移动的距离
  var everyMove = oLis[0].offsetWidth * 2;
  //初始化一个变量
  var location = 0;
  //总共能走的距离
  var allMove = (oLis.length - 5) * oLis[0].offsetWidth;
  oNextBtn.onclick = function () {
    //在点击之前判断有没有到达临界值 如果小于总共能走的距离那么就累加 大于则等于总共能走的距离
    if (location < allMove) {
      location += everyMove;
    } else {
      location = allMove;
    }
    oList.style.left = -location + 'px';
  }
  oPrevBtn.onclick = function () {
    //在点击之前判断有没有到达临界值 如果大于0那么就累加 小于则等于0
    if (location > 0) {
      location -= everyMove;
    } else {
      location = 0;
    }
    oList.style.left = -location + 'px';
  }
}

/* 点击缩略图 */
thumbnailClick();
function thumbnailClick() {
  var oList = document.querySelector('.main .left .list .shop .list-con');
  var oLis = document.querySelectorAll('.main .left .list .shop .list-con li');
  var oSmallImg = document.querySelector('.main .left .img .smallImg img');
  var oBigImg = document.querySelector('.main .left .img .bigImg img');
  //默认显示第一张图
  oSmallImg.src = goodData.imgsrc[0].s;
  // 遍历所有的li给li绑定点击事件
  oLis.forEach(function (item, index) {
    item.onclick = function () {
      // 当点击当前li 显示对应的图片
      oSmallImg.src = goodData.imgsrc[index].s;
      //显示对应的大图片
      oBigImg.src = goodData.imgsrc[index].b;
    }
  })
}

/* 详细数据 */
detailData();
function detailData() {
  var oDetail = document.querySelector('.main .right .detail');
  var str = `<h4 class="title">${goodData.goodsDetail.title}</h4>
  <p class="subTitle">${goodData.goodsDetail.recommend}</p>
  <div class="sale">
    <dl>
      <dt>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</dt>
      <dd id="price">￥<span>${goodData.goodsDetail.price}</span>元</dd>
    </dl>
    <dl>
      <dt>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</dt>
      <dd>
        <span class="purch">${goodData.goodsDetail.promoteSales.type}</span>
        <span>${goodData.goodsDetail.promoteSales.content}</span>
      </dd>
    </dl>
  </div>
  <div class="support">
    <dl>
      <dt>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</dt>
      <dd>${goodData.goodsDetail.support}</dd>
    </dl>
    <dl>
      <dt>配&nbsp;送&nbsp;至</dt>
      <dd>${goodData.goodsDetail.address}</dd>
    </dl>
  </div>`;
  oDetail.innerHTML = str;
}

/* 选择数据 */
chooseData();
function chooseData() {
  var oInfor = document.querySelector('.main .right .infor');
  //向infor插入dl 遍历数据 有几个数据创建几个dl
  var crumbData = goodData.goodsDetail.crumbData;
  crumbData.forEach(function (item, index) {
    var newDl = document.createElement('dl');
    var newDt = document.createElement('dt');
    //在dt里面插入内容
    newDt.innerHTML = item.title;
    newDl.appendChild(newDt);
    // console.log(newDl);
    //遍历数据中的data,生成对应的dd
    item.data.forEach(function (item) {
      //创建dd
      var newDd = document.createElement('dd');
      //向dd插入内容
      newDd.innerHTML = item.type;
      //给每个dd扩展属性
      newDd.dataset.price = item.changePrice;
      //给每个dd添加一个属性
      newDl.appendChild(newDd);

    })
    //插入infor中
    oInfor.appendChild(newDl);
  })
}

/* 选择点击 */
choose();
function choose() {
  /* 
  当点击dl中的dd 选中哪个哪个变红 其他清空样式
    每个dl中的dd
   */
  var oDl = document.querySelectorAll('.main .right .infor dl');
  var oSelect = document.querySelector('.main .right .selectPro');

  // 创建一个长度为4的数组
  var arr = new Array(4);
  arr.fill(null);
  oDl.forEach(function (item, index) {
    var oDd = item.querySelectorAll('dd');
    //遍历dd绑定事件
    oDd.forEach(function (item, i) {

      item.onclick = function () {
        //遍历dd清空所有的样式
        oDd.forEach(function (item) {
          item.style.color = '#666';
        })
        //给当前点击的添加样式
        this.style.color = 'red';
        /* 
        当点击dd时 创建mark标签 获取当前dd内容 把内容赋值给mark 再把mark插入标签中
        因为先后顺序放入的 所以用数组保存当前点击的按钮
         */
        arr[index] = this;
        console.log(arr);
        //遍历之前把已经存在的mark清空
        oSelect.innerHTML = '';

        /* 遍历数组 把数组中的数据插入到mark中 */
        arr.forEach(function (item, index) {
          // 判断item存在则添加 并且创建标签
          if (item) {
            var oMark = document.createElement('mark');
            //创建一个删除标签
            var oA = document.createElement('a');
            //给Mark添加内容
            oMark.innerHTML = item.innerHTML;
            oA.innerHTML = 'X';
            //给oA保存当前数据在数组的下标
            oA.dataset.index = index;
            //把删除按钮添加进oMark中
            oMark.appendChild(oA);
            //把mark添加进html中
            oSelect.appendChild(oMark);
          }
        })

        /* 绑定删除按钮 */
        var oA = document.querySelectorAll('.main .right .selectPro mark a');

        /* 当点击oA时删除当前的父节点 */
        oA.forEach(function (item) {
          item.onclick = function () {
            this.parentNode.remove();
            //当点击删除后也要删除数组中的元素 
            arr[item.dataset.index] = null;
            // console.log(arr);

            /* 删除mark后吧对应的dl的dd清空样式再给第一个添加样式 */
            var oDd = oDl[item.dataset.index].querySelectorAll('dd');
            // console.log(oDd);
            oDd.forEach(function (item) {
              item.style.color = '#666';
            })
            oDd[0].style.color = 'red';

            //当点击删除时也要修改价格
            priceChange(arr);
          }
        })
        // 当点击dd时修改上面的价格
        //把数组传出去
        priceChange(arr);
      }
    })
  })
}

/* 修改价格 */
function priceChange(arr) {
  /* 删除mark也是对数组的一个操作,可以控制数组来操作 */
  //获取一个初始价钱
  var basePrice = goodData.goodsDetail.price;
  var oPrice = document.querySelector('.main .right .sale #price span');
  var oIpt = document.querySelector('.main .right .shopcar .shop-num .num');
  //遍历数组 
  arr.forEach(function (item) {
    //判断如果数组中存在item则把每个元素中的price属性加上初始价钱
    if (item) {
      basePrice += +item.dataset.price;
      // console.log(item);
    }
  })

  //赋值  还需要乘以数量
  oPrice.innerHTML = basePrice * oIpt.value;

}

/* 修改数量 */
shopNum();
function shopNum() {
  /* 点击+ - 修改数量 */
  var oAdd = document.querySelector('.main .right .shopcar .shop-num .add');
  var oSub = document.querySelector('.main .right .shopcar .shop-num .sub');
  var oIpt = document.querySelector('.main .right .shopcar .shop-num .num');
  var oPrice = document.querySelector('.main .right .sale #price span');
  var count = 1;
  //在外边获取的话只能获取初始价钱,所以不能写外边
  // var pp = oPrice.innerHTML;
  oAdd.onclick = function () {
    count++;
    oIpt.value = count;
    //修改当前价格 
    // console.log(oPrice.innerHTML);
    //用当前的价钱乘以数量  因为都是以当前价格乘以数量,这价钱不对,所以得当前数量-1获得单价 再乘以数量
    var newPrice = oPrice.innerHTML / (count - 1) * count;
    oPrice.innerHTML = newPrice;
  }
  oSub.onclick = function () {
    count--;
    if (count < 1) {
      count = 1;
      return;
    }
    oIpt.value = count;
    var newPrice = oPrice.innerHTML / (count + 1) * count;
    oPrice.innerHTML = newPrice;
  }
}

/* 面向对象的tab切换 */
function Tab(oTitles, oCons) {
  //把一些变量放在this上,也就是实例化对象上,方便原型对象使用
  this.oTitles = oTitles;
  this.oCons = oCons;
  var _this = this;
  this.oTitles.forEach(function (item, index) {
    item.onclick = function () {
      //因为点击标题切换tab是一样的操作所以添加到对象的原型对象上
      _this.click(index);
    }
  })
}
Tab.prototype.click = function (index) {
  var _this = this;
  this.oTitles.forEach(function (item, index) {
    //清空标题所有的样式
    item.classList.remove('current');
    //把所有的内容隐藏 index是当前循环中的index 0 1 
    _this.oCons[index].style.display = 'none';
  })
  //并且给当前点击的添加样式  当前点击的是实例化对象 外层index是当前点击目标的下标
  // console.log(this.oTitles[index]);
  this.oTitles[index].classList.add('current')
  // 当前点击的内容显示
  this.oCons[index].style.display = 'block';
}


// 侧边栏tab
asideTab();
function asideTab() {
  var oTitles = document.querySelectorAll('.product .aside .title h4');
  var oCons = document.querySelectorAll('.product .aside .content');
  new Tab(oTitles, oCons);
}

//内容tab
consTab();
function consTab() {
  var oTabList = document.querySelectorAll('.product .detail .productDetail .tabList li');
  var oTabContent = document.querySelectorAll('.product .detail .productDetail .tabContent>div');
  new Tab(oTabList, oTabContent);
}



