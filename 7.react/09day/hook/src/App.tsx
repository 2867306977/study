import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  //初始化hook useState
  //console.log(useState(0));//返回的是一个数组 第一项是状态值 第二项则是更新状态的函数
  const [count, setCount] = useState<number>(0); //定义为number类型
  //setCount(newState) 里面传入一个新的state则会触发重新渲染

  //当点击按钮调用函数count+1重新渲染 因为是函数组件必须声明
  //:()=>void 定义函数类型 没有参数且没有返回值
  const handleClick: () => void = () => {
    setCount(count + 1);
  };

  //传入一个回调函数,和一个数组
  useEffect(() => {
    //相当于componentDidMount componentDidUpdate

    console.log('useEffect');

    return () => {
      console.log('1');
    };

    //第二个参数传入数组,当数组中的数据更新了就会调用该函数,如果传入空数组则更新不会调用(相当于componentDidMount)
  }, []);
  const unMount = () => {
    // React.unmountComponentAtNode();
  };

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleClick}>按钮</button>
      <button onClick={unMount}>卸载</button>
    </div>
  );
}
