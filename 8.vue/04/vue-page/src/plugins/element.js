//按需加载ui组件
import Vue from "vue";
import {
  Button,
  Card,
  Table,
  TableColumn,
  Pagination,
  Loading,
  Form,
  FormItem,
  Input,
  Message,
} from "element-ui";

Vue.use(Button);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);

//提示信息是添加到原型上 $message
Vue.prototype.$message = Message;
