<template>
  <el-card class="box-card">
    <template #header>
      <h3 class="title">添加用户</h3>
    </template>
    <el-form ref="form" label-width="80px" class="adduser-form" :rules="rules" :model="users">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="users.username"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="users.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="users.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="surePass">
        <el-input v-model="users.surePass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <!-- 使用编程导航试跳转页面 -->
        <el-button @click="$router.history.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { reqAddUser } from "../../../api/users";
export default {
  name: "AddUser",
  data() {
    return {
      users: {
        username: "",
        nickname: "",
        password: "",
        surePass: "",
      },
      rules: {
        username: [
          { required: true, message: "内容不能为空", trigger: "blur" },
          {
            pattern: /^[0-9A-Za-z]{2,12}$/,
            message: "请输入正确的用户名",
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "内容不能为空", trigger: "blur" },
          {
            pattern: /^[0-9A-Za-z]{2,12}$/,
            message: "请输入正确的用户昵称",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "内容不能为空", trigger: "blur" },
          {
            pattern: /^[0-9A-Za-z]{6,12}$/,
            message: "请输入正确的密码",
            trigger: "blur",
          },
        ],
        surePass: [
          //密码需自定义校验规则
          { validator: this.validatePass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //自定义校验密码的二次校验
    validatePass(rule, value, callback) {
      /* 
      rule:规则
      value:输入的内容
      callback:成功或者失败需调用的回调
      callback()成功
      callback('xxx')失败
       */
      if (this.users.password === value) {
        callback();
      } else {
        callback(new Error("两次输入的密码不正确"));
      }
    },
    //对整个表单进行校验
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          //整个表单校验成功
          //校验成功发送请求添加用户数据
          await reqAddUser(this.users);
          //显示提示 添加成功
          this.$message({
            type: "success",
            message: "添加成功",
          });
          this.$router.history.go(-1);
        } else {
          //整个表单校验失败
          this.$message({
            type: "error",
            message: "添加失败",
          });
        }
      });
    },
  },
};
</script>

<style>
.adduser-form {
  width: 400px;
}
</style>