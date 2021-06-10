<template>
  <div>
    <h1>{{name}}--{{age}}</h1>
    <p>{{count}}</p>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  //当前组件名
  name: 'HelloWorld',
  //类型定义三种方式, vue中必须使用props接收参数
  // props:[name,age]
  // props: {
  //   name: String,
  //   age: Number,
  //   count: Number,
  // },
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      validator(val) {
        //val是检查的属性值
        return val >= 18 && val <= 50;
      },
    },
    count: Number,
    handleClick: Function,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
