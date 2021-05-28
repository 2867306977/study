import { Component } from 'react';
import Search from './pages/Search';
import UserList from './pages/UserList';
import axios from 'axios';

export default class App extends Component {
  state = {
    isLoading: 0,
    userList: [],
  };
  handleSearch = login => {
    //当点击时isLoading改为false 表示数据还没加载完成
    this.setState({
      isLoading: false,
    });
    //子组件点击按钮调用该函数时,传了name,根据这个name拿到头像以及地址
    axios({
      method: 'GET',
      url: `https://api.github.com/search/users?q=${login}`,
    })
      .then(res => {
        //请求发送成功后响应
        // console.log(res.data.items);
        //遍历data数据,再依次根据这些数据修改state
        const userList = res.data.items.map(items => ({
          id: items.id,
          login: items.login,
          html_url: items.html_url,
          avatar_url: items.avatar_url,
        }));
        //获取获得的需要的数据  修改isLoading为true表示数据加载完成
        this.setState({
          isLoading: true,
          userList,
        });
        // console.log(this.state.userList);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log('app');
    const { isLoading, userList } = this.state;
    if (isLoading === 0) {
      return (
        <div data-reactroot="" className="container">
          <Search handleSearch={this.handleSearch} />
          <h1>Enter the name you search</h1>
        </div>
      );
    }
    return (
      <div data-reactroot="" className="container">
        <Search handleSearch={this.handleSearch} />
        {isLoading ? <UserList userList={userList} /> : <h1>Loading...</h1>}
      </div>
    );
  }
}
