import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Search extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
  };
  state = {
    login: '',
    isLoading: false,
    userList: [],
  };

  //优化, state是新的state,this.state是旧的state, 如果它们两相等说明state没有变化就不需要更新
  shouldComponentUpdate(props, state) {
    // console.log('state', this.state, state);
    //不相等说明变化了返回true需要更新
    return this.state !== state;
  }

  handleChange = e => {
    this.setState({
      login: e.target.value.trim(),
    });
  };
  //当点击时调用父组件search函数,把表单中的name传给父组件
  handleSearchClick = async () => {
    const { login } = this.state;
    this.props.setLoading();
    //点击的时候发送请求
    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/search/users?q=${login}`,
    });
    //发送请求之后在获取数据
    const userList = res.data.items.map(item => {
      //只返回需要的数据
      return {
        login: item.login,
        id: item.id,
        html_url: item.html_url,
        avatar_url: item.avatar_url,
      };
    });
    this.setState({
      userList,
      isLoading: false,
    });
    this.props.handleSearch(this.state);
  };
  render() {
    // console.log('search');

    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearchClick}>Search</button>
        </div>
      </section>
    );
  }
}
