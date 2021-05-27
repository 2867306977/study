import { Component } from 'react';
import Search from './pages/Search';
import UserList from './pages/UserList';
// import axios from 'axios';

export default class App extends Component {
  state = {
    isLoading: false,
    userList: [],
  };
  //点击的时候在search发送请求 在app修改数据
  handleSearch = state => {
    this.setState({
      isLoading: state.isLoading,
      userList: state.userList,
    });
  };
  //修改isLoading状态
  setLoading = () => {
    this.setState({
      isLoading: true,
    });
  };
  render() {
    const { isLoading, userList } = this.state;
    return (
      <div className="container">
        <Search handleSearch={this.handleSearch} setLoading={this.setLoading} />
        <UserList userList={userList} isLoading={isLoading} />
      </div>
    );
  }
}
