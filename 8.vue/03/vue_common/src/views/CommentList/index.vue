<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="isShow">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group" v-show="!isShow">
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
    </ul>
  </div>
</template>

<script>
import CommentItem from './CommentItem';
export default {
  name: 'CommentList',
  components: {
    CommentItem,
  },
  data() {
    return {
      comments: [
        { id: 1, name: 'Jack', content: '芳芳打游戏太菜了' },
        { id: 2, name: 'Tom', content: '还偶尔发神经' },
      ],
    };
  },
  //在原型上添加方法
  mounted() {
    //Vue.prototype.$bus 指向的是vue实例
    //绑定自定义事件
    this.$bus.$on('addComment', this.addComment);
    this.$bus.$on('delComment', this.delComment);
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    delComment(id) {
      this.comments = this.comments.filter((item) => {
        return item.id !== id;
      });
    },
  },
  computed: {
    //计算是否还有评论 没有则显示h2
    isShow() {
      //为什么不用set set修改data中的内容
      return !this.comments.length;
    },
  },
};
</script>

<style>
</style>