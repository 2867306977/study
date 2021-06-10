import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  //render可以编译模板
  //render:(createElement)=>createElement(App)
  render: (h) => h(App),
  //因为引入的Vue是只包含运行时版,并components也不能编译模板
  // components:{
  //   App
  // }
}).$mount("#app");
//和上面的一样
// new Vue({
//   el:'#app',
//   render: (h) => h(App),
// })
