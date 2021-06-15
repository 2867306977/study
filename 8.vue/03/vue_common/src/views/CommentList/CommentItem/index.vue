<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del(comment.id)">删除</a>
    </div>
    <p class="user">
      <span>{{comment.name}}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: Object,
  },
  methods: {
    del(id) {
      if (!confirm(`确认删除${this.comment.name}的评论吗?`)) return;
      this.$bus.$emit('delComment', id);
    },
  },
};
</script>

<style>
</style>