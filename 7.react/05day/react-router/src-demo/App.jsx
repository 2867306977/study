import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      // 都得包含在BrowserRouter / HashRouter中
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>Vue Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* NavLink多了个active标签, 显示当前显示的是哪个 */}
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink
                className="list-group-item myActive"
                to="/home"
                aria-current="page">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            {/* 包含在Switch中,哪个组件被命中就只显示加载被命中的组件 , 不包含则都会加载*/}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
