//发送请求
import axios from "axios";

//传入参数page页,limit几条
const reqGetUsers = (page, limit) => {
  return axios({
    method: "GET",
    //使用了服务器代理
    url: `/api/users/${page}/${limit}`,
  });
};

//添加用户数据
const reqAddUser = ({ username, nickname, password }) => {
  return axios({
    method: "POST",
    url: "/api/users",
    //post路由传参
    data: {
      username,
      nickname,
      password,
    },
  });
};

export { reqGetUsers, reqAddUser };
