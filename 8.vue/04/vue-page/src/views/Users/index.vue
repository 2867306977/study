<template>
  <el-card class="box-card">
    <template #header>
      <h3 class="title">用户管理</h3>
    </template>
    <router-link to="/users/addUser" class="adduser-link">
      <el-button type="primary">添加</el-button>
    </router-link>
    <el-button type="danger">批量删除</el-button>
    <el-table :data="users" border style="width: 100%;margin:20px 0" v-loading="loading">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickname" label="用户昵称"></el-table-column>
      <el-table-column label="操作">
        <router-link to="/users/editUser" class="adduser-link">
          <el-button type="primary" class="el-icon-edit" size="mini"></el-button>
        </router-link>
        <el-button type="danger" class="el-icon-delete" size="mini"></el-button>
      </el-table-column>
    </el-table>
    <!--
     page-size: 每页显示条目个数，支持 .sync 修饰符
       :current-page="currentPage1" 当前页数  
      @size-change="handleSizeChange"  当pagesize发生了变化触发
    @current-change="handleCurrentChange" 当前页面发生了变化触发-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[3, 6, 9, 12]"
      :page-size="limit"
      :current-page="page"
      layout=" prev, pager, next, jumper,total, sizes"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      loading: false,
      limit: 3,
      page: 1,
    };
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    // 当limit发生了变化触发
    handleSizeChange(limit) {
      //修改数据中的limit
      this.limit = limit;
      //发送请求
      this.setUsers(this.page, limit);
    },
    //当前页面发生了变化触发
    handleCurrentChange(page) {
      //修改数据中的page
      this.page = page;
      this.setUsers(page, this.limit);
    },
    //多处使用该方法,封装方法
    async setUsers(page, limit) {
      //显示加载画面
      this.loading = true;
      //挂载后发送请求用户数据
      await this.getUsers({ page, limit });
      this.loading = false;
    },
  },
  async mounted() {
    this.setUsers(this.page, this.limit);
  },
  computed: {
    ...mapState("users", ["users", "total"]),
  },
};
</script>

<style>
.title {
  margin: 0;
}
.el-pagination__total,
.el-pagination__sizes {
  float: right;
}
.adduser-link {
  margin-right: 20px;
}
</style>