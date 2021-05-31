import { combineReducers } from 'redux';
function setLoading(prevState = false, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return action.loading;
    default:
      return prevState;
  }
}
function userList(prevState = [], action) {
  switch (action.type) {
    case 'USER_LIST':
      return action.users;
    default:
      return prevState;
  }
}
export default combineReducers({
  setLoading,
  userList,
});
