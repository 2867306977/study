<template>
  <div class="todo-footer">
    <label>
      <!-- 所有的数据长度和选中的数据长度相等 那么就是true选中 -->
      <input
        type="checkbox"
        :checked="todos.length === num"
        @click="checkedAll($event.target.checked)"
      />
    </label>
    <span>
      <span>已完成{{num}}</span>
      / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="handleDelChecked">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    todos: Array,
    delCheckedTodo: Function,
    checkedAll: Function,
  },
  methods: {
    handleDelChecked() {
      if (!confirm('确认删除已完成的待办事项吗?')) return;
      this.delCheckedTodo();
    },
  },
  computed: {
    //isDone变化了那么就要重新计算已完成数num
    num() {
      //初始化值,被选中了的就++
      let num = 0;
      this.todos.forEach((todo) => {
        if (todo.isDone) num++;
      });
      return num;
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>