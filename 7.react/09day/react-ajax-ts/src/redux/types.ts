//定义类型
//引入dispatch类型 一般类型首字母大写 别人定义的
import { Dispatch } from 'redux';
//定义action函数
export interface ActionCreator<T> {
  (data: T): Action<T>;
}
//定义action对象
export interface Action<T> {
  type: string;
  data: T;
}
//定义异步action的类型 返回的是一个函数 并且返回值为Promise类型
export interface AsyncActionCreator<T> {
  (data: T): (dispatch: Dispatch) => Promise<any>;
}
//定义用户数据
export interface Users {
  login: string;
  id: number;
  html_url: string;
  avatar_url: string;
}

//定义reducers函数的类型接口
export interface State {
  setLoading: boolean;
  userList: Users[];
}
