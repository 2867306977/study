//暴露出去所有vuex模块
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
