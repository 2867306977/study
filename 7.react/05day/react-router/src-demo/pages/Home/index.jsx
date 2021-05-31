import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import Message from './components/Message';
import News from './components/News';

export default class Home extends Component {
  render() {
    return (
      <Router className="panel">
        <div className="panel-body">
          <div>
            <h2>Home组件内容</h2>
            <div>
              <ul className="nav nav-tabs">
                <li>
                  <NavLink to="/home/news">News</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/home/message"
                    className="myActive"
                    aria-current="page">
                    Message
                  </NavLink>
                </li>
              </ul>
              <div className="col-xs-6">
                <Switch>
                  <Route path="/home/news" component={News} />
                  <Route path="/home/message" component={Message} />
                  <Redirect to="/home/message" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
