// 连接数据库
require("./db");

const express = require("express");

const users = require("./router/users");

const app = express();

// 解决请求体数据
// 解析form表单的post请求参数
// app.use(express.urlencoded({ extended: true }));
// 解析post请求参数,json格式
app.use(express.json());
// 应用路由
app.use("/users", users);

app.listen(5000, "localhost", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("服务器启动成功了");
});
