import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
//严格模式
ReactDOM.render(
  <React.StrictMode>
    {/* 把ui组件包含在容器中  并且传递store对象*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
