import axios, { AxiosResponse } from 'axios';
import { ActionCreator, AsyncActionCreator, Users } from './types';
import { SET_LOADING, USER_LIST } from './contents';

//定义loading
export const setLoading: ActionCreator<boolean> = loading => ({
  type: SET_LOADING,
  data: loading,
});

//用户数据
export const userList: ActionCreator<Users[]> = users => ({
  type: USER_LIST,
  data: users,
});
//异步action 发送请求获取数据
export const getUsers: AsyncActionCreator<string> = login => {
  return async dispatch => {
    const res: AxiosResponse = await axios({
      method: 'GET',
      url: `https://api.github.com/search/users?q=${login}`,
    });
    //获取到数据后遍历数据
    const users: Users[] = res.data.items.map((item: Users) => {
      return {
        login: item.login,
        id: item.id,
        html_url: item.html_url,
        avatar_url: item.avatar_url,
      };
    });

    //更新数据 传入action对象
    dispatch(userList(users));
  };
};
