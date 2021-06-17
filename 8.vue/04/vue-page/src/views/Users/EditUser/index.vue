<template>
  <el-card class="box-card">
    <template #header>
      <h3 class="title">更新用户</h3>
    </template>
    <el-form ref="form" label-width="80px" class="adduser-form">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="surePass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "EditUser",
  data() {
    return {
      username: "",
      nickname: "",
      password: "",
      surePass: "",
    };
  },
};
</script>

<style>
</style>