<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" v-if="hasTodo" />
      <Footer
        :todos="todos"
        :delCheckedTodo="delCheckedTodo"
        :checkedAll="checkedAll"
        v-if="hasTodo"
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
    //点击全选,选中所有todo
    checkedAll(isChecked) {
      this.todos.forEach((todo) => {
        todo.isDone = isChecked;
      });
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