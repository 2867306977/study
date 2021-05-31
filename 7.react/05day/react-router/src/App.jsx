import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//因为手动一个个引入以及创建Route非常麻烦 可以创建一个保存所有route的文件,然后引入遍历生成
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          {routes.map(route => {
            return (
              <li key={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          {/* Route中path的匹配规则是开头路径/相同 那么全部匹配, 可以添加一个属性exact表示必须是精确的路径才能匹配 */}
          {routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}
