<template>
  <div class="row">
    <div class="card">
      <a href="https://github.com/reactjs" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style="width: 100px" />
      </a>
      <p class="card-text">reactjs</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'List',
  // 数据在哪展示,就在哪定义数据,数据在哪,就在哪绑定功能
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  //兄弟组件之间通信:使用全局事件总线
  mounted() {
    this.$bus.$on('search', this.search);
  },
  methods: {
    async search(searchName) {
      this.loading = true;
      const res = await axios({
        methods: 'GET',
        url: 'http://github.com/search',
        params: {
          q: searchName,
        },
      });
      this.loading = false;
      console.log(res);
    },
  },
};
</script>

<style>
</style>