<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" v-if="hasTodo" :checkedTodo="checkedTodo" />
      <Footer
        :delCheckedTodo="delCheckedTodo"
        v-if="hasTodo"
        :checkedNum="checkedNum"
        :total="todos.length"
        :checkedAll="checkedAll"
      />
      <h1 v-if="!hasTodo">没有待办事项</h1>
    </div>
  </div>
</template>

<script>
import Header from './views/Header';
import List from './views/List';
import Footer from './views/Footer';
export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [
        { id: 1, name: '吃饭', isDone: true },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '听歌', isDone: false },
      ],
    };
  },
  methods: {
    addTodo(name) {
      //为了性能考虑,react不能直接修改state值,vue是可以直接修改
      this.todos.unshift({
        id: Date.now(),
        name,
        isDone: false,
      });
    },
    delTodo(id) {
      const newTodos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
      this.todos = newTodos;
    },
    //点击删除被选中的todo
    delCheckedTodo() {
      const newTodos = this.todos.filter((todo) => {
        return !todo.isDone;
      });
      this.todos = newTodos;
    },
    //item的选中和没选中状态
    checkedTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },
    //全选
    checkedAll(checked) {
      //因为要修改所有的值 使用foreach
      this.todos.forEach((todo) => (todo.isDone = checked));
    },
  },
  //计算是否还有todo
  computed: {
    hasTodo() {
      if (this.todos.length) {
        return true;
      } else {
        return false;
      }
    },
    //计算被选中的todo有多少个
    checkedNum() {
      //统计求和使用reduce
      const num = this.todos.reduce((p, c) => {
        return p + (c.isDone ? 1 : 0);
      }, 0);
      return num;
    },
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>