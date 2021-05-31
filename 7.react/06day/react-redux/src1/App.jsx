import React, { Component } from 'react';
import store from './redux/store';
import { increment, decrement } from './redux/action-creators';

export default class App extends Component {
  state = {
    count: 1,
  };
  handleChange = e => {
    this.setState({
      //value值是字符串得转为num类型
      count: +e.target.value,
    });
  };
  increment = () => {
    //更新redux数据
    //调用action-creators的函数生成action对象
    const action = increment(this.state.count);
    // console.log(action);
    //调用store.dispatch方法更新数据
    store.dispatch(action);
  };
  decrement = () => {
    //更新redux数据
    //调用action-creators的函数生成action对象
    const action = decrement(this.state.count);
    // console.log(action);
    //调用store.dispatch方法更新数据
    store.dispatch(action);
  };
  componentDidMount() {
    store.subscribe(() => {
      //一旦redux数据更新了就会触发传入的回调函数
      //重新渲染组件
      this.setState({});
    });
  }
  render() {
    //获取store中的数据 调用store.getState()方法
    const count = store.getState();
    return (
      <div>
        <h1>click {count} time</h1>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button>increment if odd</button>
        <button>increment async</button>
      </div>
    );
  }
}
