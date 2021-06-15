<template>
  <h1 v-if="loading">loading...</h1>
  <div class="row" v-else-if="users.length">
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
  <h1 v-else>Enter name search</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  // 数据在哪展示,就在哪定义数据,数据在哪,就在哪绑定功能
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  //兄弟组件之间通信:使用全局事件总线
  mounted() {
    this.$bus.$on("search", this.search);
  },
  beforeDestroy() {
    this.$bus.$off("search", this.search);
  },
  methods: {
    async search(searchName) {
      this.loading = true;
      const res = await axios({
        methods: "GET",
        url: "https://api.github.com/search/users",
        params: {
          q: searchName,
        },
      });
      this.loading = false;
      this.users = res.data.items.map((item) => {
        return {
          html_url: item.html_url,
          login: item.login,
          avatar_url: item.avatar_url,
          id: item.id,
        };
      });
    },
  },
};
</script>

<style>
</style>