<template>
  <div id="app">
    <!-- 使用组件 -->
    <!-- 使用props,传递数据  需要使用单向绑定才能是data中的数据-->
    <HelloWorld :name="name" :age="age" :count="count" :handleClick="handleClick" />
  </div>
</template>

<script>
//引入组件
import HelloWorld from './components/HelloWorld.vue';

//向外暴露组件配置对象
export default {
  name: 'App',
  //局部注册组件
  components: {
    //组件名
    HelloWorld,
  },
  //要求data是一个函数
  data() {
    //返回值一个对象
    return {
      name: 'bob',
      age: 28,
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
  // mounted() {
  //   setInterval(() => {
  //     this.count++;
  //   }, 1000);
  // },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
