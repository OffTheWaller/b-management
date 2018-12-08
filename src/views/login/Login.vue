<template>
  <div class="login">
    <div class="login-content">
        <p>后台业务管理系统</p>
        <el-input class="login-input" placeholder="请输入用户名称" v-model="username" clearable></el-input>
        <el-input class="login-input" placeholder="请输入登录密码" v-model="password" clearable></el-input>
        <div class="error-tip"></div>
        <el-button class="login-btn">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
      return {
          username: '',
          password: ''
      }
  }
}
</script>

<style lang="scss">
    .login {
        width: 100%;
        height: 100%;
        background: url('~@/assets/images/login-bg.png') 100% 100% no-repeat;
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
                .el-input__inner{
                    text-align: center;
                    border-radius: 8px;
                    height: 60px;
                    border: none;
                }
            }
           .error-tip {
               height: 50px;
               background: #9de2e1;
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
