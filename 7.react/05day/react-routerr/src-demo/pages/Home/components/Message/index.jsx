import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Detail from './components/Detail';

export default class Message extends Component {
  push = id => {
    return () => {
      //路由组件props中都有三个属性
      //push参数为路径
      this.props.history.push(`/home/message/${id}`);
    };
  };

  replace = id => {
    return () => {
      this.props.history.replace(`/home/message/${id}`);
    };
  };

  forWard = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home/message/1">message001</Link> &nbsp;&nbsp;
              {/* 当点击按钮,push给浏览器添加历史记录 */}
              {/* push指定参数,但必须返回的是一个函数,否则这个函数上来就调用了返回的是undefined */}
              <button onClick={this.push(1)}>push</button> &nbsp;
              {/* replace给浏览器当前历史记录替换掉 */}
              <button onClick={this.replace(1)}>replace</button>
            </li>
            <li>
              <Link to="/home/message/2">message002</Link> &nbsp;&nbsp;
              <button onClick={this.push(2)}>push</button> &nbsp;
              <button onClick={this.replace(2)}>replace</button>
            </li>
            <li>
              <Link to="/home/message/4">message004</Link> &nbsp;&nbsp;
              <button onClick={this.push(4)}>push</button> &nbsp;
              <button onClick={this.replace(4)}>replace</button>
            </li>
          </ul>
          {/* 动态路由 :匹配路由来加载这个组件 */}
          <Route path="/home/message/:id" component={Detail} />
          {/* 历史记录前进后退 */}
          <button onClick={this.forWard}>前进</button>
          <button onClick={this.back}>后退</button>
        </div>
      </Router>
    );
  }
}
