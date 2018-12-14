<template>
  <div class="login">
    <div class="login-content">
      <p>后台业务管理系统</p>
      <el-input class="login-input" placeholder="请输入用户名称" v-model="form.loginName" clearable></el-input>
      <el-input class="login-input" placeholder="请输入登录密码" v-model="form.loginPassword" clearable></el-input>
      <div class="error-wrapper">
        <div class="error-tip" v-show="errorShow">
          <i class="iconfont">&#xe60e;</i>
          &nbsp;&nbsp;{{errorMessage}}
        </div>
      </div>
      <el-button class="login-btn" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "Login",
  data() {
    return {
      form: {
        loginName: '13932493200',
        loginPassword: '000000'
      },
      errorMessage: "",
      errorShow: false
    };
  },
  methods: {
    handleLogin() {
      if (this.form.loginName == "") {
        this.errorMessage = "请填写用户名称";
        this.errorShow = true;
        return;
      }
      if (this.form.loginPassword == "") {
        this.errorMessage = "请填写登录密码";
        this.errorShow = true;
        return;
      }
      axios.post('/api/merchant/login',this.form, {
        type: 'form'
      }).then((res) => {
        console.log(res);
      },(err) => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/login-bg.png") 100% 100% no-repeat;
  overflow: hidden;
  .login-content {
    width: 351px;
    height: 389px;
    margin: 292px auto;
    box-sizing: border-box;
    p {
      font-size: 28px;
      color: #fff;
      text-align: center;
      margin-bottom: 72px;
    }
    .login-input {
      margin-bottom: 30px;
      .el-input__inner {
        text-align: center;
        border-radius: 8px;
        height: 60px;
        border: none;
        font-size: 16px;
      }
    }
    .error-wrapper {
      height: 50px;
      .error-tip {
        line-height: 50px;
        background: #9de2e1;
        text-align: center;
        color: #fff;
        font-size: 18px;
        border-radius: 10px;
      }
    }
    .el-button--default {
      width: 100%;
      height: 60px;
      background: #3cbbba;
      font-size: 20px;
      color: #fff;
      border-radius: 10px;
      border: none;
    }
  }
}
</style>
