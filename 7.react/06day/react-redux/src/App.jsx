import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from './redux/action-creators';

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  };
  state = {
    count: 1,
  };
  handleChange = e => {
    this.setState({
      //value值是字符串得转为num类型
      count: +e.target.value,
    });
  };
  //ui组件中就可以直接调用传过来的props对象中的方法了
  increment = () => {
    //调用props中的increment
    this.props.increment(this.state.count);
  };
  decrement = () => {
    this.props.decrement(this.state.count);
  };
  render() {
    //容器使用props方法把数据传递给了App
    console.log(this.props);
    const { count } = this.props;

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

//把需要的数据返回出去
// const mapStateToProps = state => {
//   //这个state是store.getState()调用返回的数据
//   return {
//     count: state,
//   };
// };

//返回需要的方法
// const mapDispatchToProps = dispatch => {
//   //返回的是一个对象 对象中包含所需要的方法
//   return {
//     increment(num) {
//       const action = increment(num);
//       dispatch(action);
//     },
//     decrement(num) {
//       const action = decrement(num);
//       dispatch(action);
//     },
//   };
//   //底层进行了处理
//   // [key](...args){ //接收所有的参数 传什么参数都可以 //这个[key]是什么都行
//   //   const action = obj[key](...args) //obj[key]就是{ increment, decrement }对应的value
//   //   despatch(action)
//   // }
// };

//先调用 connect(mapStateToProps, mapDispatchToProps)返回容器 再把App作为子组件调用
// export default connect(mapStateToProps, mapDispatchToProps)(App);

//简写
export default connect(
  //直接return一个对象必须得使用小括号包起来
  state => ({
    count: state,
  }),
  { increment, decrement }
)(App);
