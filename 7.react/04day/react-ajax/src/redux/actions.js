import axios from 'axios';

export const setLoading = loading => ({ type: 'SET_LOADING', loading });
export const userList = users => ({ type: 'USER_LIST', users });
//异步action
export const getUsers = loading => {
  return async dispatch => {
    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/search/users?q=${loading}`,
    });
    //获取到数据后遍历数据
    const users = res.data.items.map(item => {
      return {
        login: item.login,
        id: item.id,
        html_url: item.html_url,
        avatar_url: item.avatar_url,
      };
    });
    //更新数据
    dispatch(userList(users));
  };
};
