<template>
  <div>
    <h1>-------App--------</h1>
    <A>
      <h1>AAA ----- AAA</h1>
      <h2>A---A</h2>
    </A>
    <B>
      <template v-slot:header>
        <p>---AAA header---</p>
      </template>
      <p slot="footer">---slot----</p>
    </B>
  </div>
</template>
<script>
/* 
默认插槽: 
在子组件中添加标签,在该子组件中使用<slot/>

具名插槽:
新语法: v-slot:xxx (使用template标签包括起来,template标签不会多出无用标签)
旧语法: slot="xxx" (直接在某个标签上使用, 已废弃)

作用域插槽: 子传父
子: :xx="xx"
父:
<template v-solt:header="data">  //data是一个对象  子传给父的数据
//简写 #header="data"
<p>{{data.xxx}}</p>
</template>
 */
import A from './views/A.vue';
import B from './views/B.vue';
export default {
  name: 'App',
  components: {
    A,
    B,
  },
};
</script>

<style>
</style>