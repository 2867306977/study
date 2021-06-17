import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users";
import AddUser from "../views/Users/AddUser";
import EditUser from "../views/Users/EditUser";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Users",
      path: "/users",
      component: Users,
    },
    {
      name: "AddUser",
      path: "/users/addUser",
      component: AddUser,
    },
    {
      name: "EditUser",
      path: "/users/editUser",
      component: EditUser,
    },
    {
      path: "/",
      redirect: "/users",
    },
  ],
});
