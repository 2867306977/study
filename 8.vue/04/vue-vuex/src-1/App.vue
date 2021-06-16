<template>
  <div>
    <p>click {{$store.state.count}} , count is {{$store.getters.type}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    increment() {
      //调用dispatch(actions) --> 触发mutations --> 更新数据state --> 渲染页面
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
</style>
