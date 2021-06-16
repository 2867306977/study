<template>
  <div>
    <p>click {{count}} , count is {{type}}</p>
    <button @click="INCREMENT(1)">+</button>
    <button @click="DECREMENT(1)">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
/* 
辅助函数: 返回的一个对象

属性 state和getters 要映射到 computed
方法 actions和mutations 要映射到 methods
 */
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapMutations(["INCREMENT", "DECREMENT"]), //将this.INCREMENT()映射"this.$store.commit("INCREMENT");"
    ...mapActions(["incrementAsync"]), //this.incrementAsync映射"this.$store.dispatch("incrementAsync");
    // increment() {
    //   this.$store.commit("INCREMENT");
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT");
    // },
    incrementIfOdd() {
      // this.$store.commit("incrementIfOdd");
      if ((this.count & 1) === 1) {
        this.INCREMENT(1);
      }
    },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
  },
  computed: {
    /* 
      mapState(["count"]) 返回的是一个对象,  ...展开对象

      mapState 是一个函数
      mapState(["count"]) 函数调用返回值是一个对象
      对象：
        {
          count() {
            return this.$store.state.count
          },
          xxx(){
            return this.$store.state.xxx
          }
        }
     */
    ...mapState(["count"]), //将this.count 映射 this.$store.state.count
    ...mapGetters(["type"]), //将this.type 映射 this.$store.getters.type
  },
};
</script>

<style>
</style>
