import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";
import Message from "../views/Home/Message/index.vue";
import News from "../views/Home/News/index.vue";
import Detail from "../views/Detail/index.vue";
//安装插件
Vue.use(VueRouter);
const router = new VueRouter({
  //配置对象
  //前端路由模式
  // mode: "hash",
  mode: "history",

  //route路由配置项
  routes: [
    {
      path: "/home",
      component: Home,
      //添加子路由
      children: [
        {
          path: "message", //路径不以 / 开头,那就自动补全父路由路径 /home/message
          // path:'/home/message', 路径以 / 开头那么就是该路径
          component: Message,
          children: [
            {
              //通过params传参
              path: ":id",
              component: Detail,
            },
          ],
        },
        {
          path: "News",
          component: News,
        },
        {
          path: "/",
          redirect: "message",
        },
      ],
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
