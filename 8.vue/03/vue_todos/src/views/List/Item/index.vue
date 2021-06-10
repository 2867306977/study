<template>
  <li @mouseenter="handleMove" @mouseleave="handleLeave">
    <label>
      <input type="checkbox" v-model="todo.isDone" />
      <span>{{todo.name}}</span>
    </label>
    <transition name="fade">
      <button
        class="btn btn-danger"
        style="display:none"
        v-show="isShow"
        @click="handleDel(todo.id)"
      >删除</button>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: Object,
    delTodo: Function,
    isChecked: Function,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleMove() {
      this.isShow = true;
    },
    handleLeave() {
      this.isShow = false;
    },
    handleDel(id) {
      if (!confirm('确定删除此待办事项吗')) return;
      //点击删除,删除当前点击的数据 根据id删除
      this.delTodo(id);
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.fade-enter-active {
  animation: fade-in 0.3s;
}

.fade-leave-active {
  animation: fade-in 0.3s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>