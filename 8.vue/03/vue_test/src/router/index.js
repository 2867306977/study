import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";
//安装插件
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    // {
    //   path: '*', //匹配所有的路径
    //   redirect: '/home',
    // },
    {
      path: "/", //匹配 / 路径
      redirect: "/home",
    },
  ],
});
export default router;
