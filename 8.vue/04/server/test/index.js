const axios = require("axios");

(async () => {
  // 测试
  // 查询数据
  const res = await axios({
    method: "GET",
    url: "http://localhost:5000/users/3/3",
  });

  // 添加数据
  // const res = await axios({
  //   method: "POST",
  //   url: "http://localhost:5000/users",
  //   data: {
  //     username: "daqi",
  //     nickname: "qi",
  //     password: "123456",
  //   },
  // });

  // 修改数据
  // const res = await axios({
  //   method: "PUT",
  //   url: "http://localhost:5000/users/60c954d21b516b29c060c526",
  //   data: {
  //     username: "xiaoliu~~~",
  //     nickname: "liu~~~",
  //     password: "123456",
  //   },
  // });

  // 删除数据
  // const res = await axios({
  //   method: "DELETE",
  //   url: "http://localhost:5000/users/60c954d21b516b29c060c526",
  // });

  // console.log(JSON.stringify(res.data));
})();
