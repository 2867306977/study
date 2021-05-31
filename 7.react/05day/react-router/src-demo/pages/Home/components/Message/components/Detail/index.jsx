import React, { Component } from 'react';

export default class Detail extends Component {
  state = {
    //编程式
    messages: [
      { id: 1, content: 'sz' },
      { id: 2, content: 'opp' },
      { id: 4, content: 'wao' },
    ],
  };
  render() {
    //路由组件props有三个属性: location,history,match
    const { id } = this.props.match.params; //返回的是一个字符串 需转为number类型
    //根据id来找到对应的content内容
    const { messages } = this.state;
    //数组中find方法找到指定数组元素则就不找了,filter则都要遍历一遍
    const message = messages.find(message => {
      return message.id === +id;
    });
    // console.log(message);//返回的是一个对象
    return (
      <ul>
        <li>id: {message.id}</li>
        <li>content:{message.content}</li>
      </ul>
    );
  }
}
