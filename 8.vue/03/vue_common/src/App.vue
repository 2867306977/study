<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="col-md-4">
        <AddComment />
      </div>
      <CommentList />
    </div>
  </div>
</template>
<script>
import AddComment from './views/AddComment';
import CommentList from './views/CommentList';
export default {
  name: 'App',
  components: {
    AddComment,
    CommentList,
  },
};
</script>
<style>
</style>