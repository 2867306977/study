//管理用户数据vuex
import { reqGetUsers } from "../../api/users";
const state = {
  users: [],
  total: 0,
};
const getters = {};
const actions = {
  //发送请求
  //第一个参数永远是store对象,第二个则是需要传入的参数,不能传三个参数 无用
  async getUsers({ commit }, { page, limit }) {
    const res = await reqGetUsers(page, limit);
    //需要两个参数users,total
    commit("GET_USERS", res.data.data);
  },
};
const mutations = {
  GET_USERS(state, data) {
    state.users = data.data;
    state.total = data.total;
  },
};
export default {
  //开启命名空间
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
