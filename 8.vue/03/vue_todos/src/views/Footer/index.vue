<template>
  <div class="todo-footer">
    <label>
      <!-- 所有的数据长度和选中的数据长度相等 那么就是true选中 -->
      <!-- <input type="checkbox" :checked="checkedNum===total" /> -->
      <!-- 因为他除了要因为数据改变,也要改变数据 使用v-model -->
      <input type="checkbox" v-model="isChecked" />
    </label>
    <span>
      <span>已完成{{checkedNum}}</span>
      / 全部{{total}}
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
    checkedNum: Number,
    total: Number,
    checkedAll: Function,
  },
  methods: {
    handleDelChecked() {
      if (!confirm('确认删除已完成的待办事项吗?')) return;
      this.delCheckedTodo();
    },
  },
  computed: {
    isChecked: {
      //除了获取到也需要修改数据
      get() {
        return this.checkedNum === this.total;
      },
      set(val) {
        //val:数据发生了改变 会给set传递一个修改后的值
        //调用修改方法 并传递当前的是否选中的状态
        this.checkedAll(val);
      },
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