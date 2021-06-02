import { combineReducers } from 'redux';
import { Action, Users } from './types';
import { SET_LOADING, USER_LIST } from './contents';

const initLoading = false;
const initUsers: Users[] = [];
function setLoading(prevState = initLoading, action: Action<boolean>) {
  switch (action.type) {
    case SET_LOADING:
      console.log(action.data, 'flag');
      return action.data;
    default:
      return prevState;
  }
}
function userList(prevState = initUsers, action: Action<Users[]>) {
  switch (action.type) {
    case USER_LIST:
      return action.data;
    default:
      return prevState;
  }
}
export default combineReducers({
  setLoading,
  userList,
});
