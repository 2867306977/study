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
    /* 
    $store: 含有三个方法
    commit:
    dispatch:
    getters:
     */
    increment() {
      //略过调用dispatch(actions), 直接提交触发mutations
      // this.$store.dispatch("increment");
      this.$store.commit("INCREMENT");
    },
    decrement() {
      this.$store.commit("DECREMENT");
    },
    incrementIfOdd() {
      // this.$store.commit("incrementIfOdd");
      if ((this.$store.state.count & 1) === 1) {
        this.$store.commit("INCREMENT");
      }
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>

<style>
</style>
