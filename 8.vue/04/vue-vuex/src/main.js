import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  //引用store 全局中就注册了$store对象
  store,
  render: h => h(App),
}).$mount("#app");
