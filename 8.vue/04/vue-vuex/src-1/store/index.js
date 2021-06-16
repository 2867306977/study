import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  count: 0,
};

//间接修改数据
//Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
  // increment(store) {
  // store.commit
  increment({ commit }) {
    //使用commit方法调用mutation的方法,更新数据
    commit("INCREMENT");
  },
  decrement({ commit }) {
    //使用commit方法调用mutation的方法,更新数据
    commit("DECREMENT");
  },
  incrementIfOdd({ commit, state }) {
    if ((state.count & 1) === 1) {
      commit("INCREMENT");
    }
  },
  //异步的actions
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 1000);
  },
};
//直接修改数据
const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  },
};
//store的计算属性
// 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
const getters = {
  type: state => {
    return (state.count & 1) === 1 ? "奇数" : "偶数";
  },
};
//命名必须是state,actions,mutations
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
export default store;
