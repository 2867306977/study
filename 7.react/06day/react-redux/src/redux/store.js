/* 
创建store对象,上面有读写数据的方法,
 */
import { createStore } from 'redux';
import reducers from './reducers';
//把store对象暴露出去
export default createStore(reducers);
