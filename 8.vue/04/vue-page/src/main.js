import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import store from "./store";
import router from "./routers";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app");
