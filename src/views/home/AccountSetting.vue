<template>
  <div>
    <!-- 内容标题区域 -->
    <div class="main-title">
      <div class="greenbar fl"></div>
      <h5 class="fl">账户设置</h5>
      <button class="flush fr">
        <span class="iconfont">&#xe654;</span> 刷新
      </button>
    </div>
    <!-- 设置表单 -->
    <div class="account">
      <el-upload
        class="avatar-uploader"
        action
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="iconfont avatar-uploader-icon">&#xe626;</i>
        <div slot="tip" class="upload-tip">上传头像</div>
      </el-upload>
      <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      >
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="twicePassword">
          <el-input type="password" v-model="ruleForm.twicePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-button @click="submitForm('ruleForm')" class="submit-btn">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSetting",
  data() {
    //表单验证规则
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.ruleForm.twicePassword !== '') {
          this.$refs.ruleForm.validateField('twicePassword');
        }
        callback();
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error('两次输入密码不一致！'))
      } else {
        callback();
      }
    }
    return {
      imageUrl: "",
      ruleForm: {
        name: '',
        oldPassword: '',
        newPassword: '',
        twicePassword: '',
        merchantLogo: '',
        email: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur'}
        ],
        newPassword: [
          { validator: validatePass, trigger: 'blur'}
        ],
        twicePassword: [
          { validator: validatePass2, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submitForm (formName) {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit')
      //     return false;
      //   }
      // })
      console.log(this.ruleForm)
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/variables.scss";
.main-title {
  height: 60px;
  background: $side-bar;
  .greenbar {
    width: 14px;
    background: $theme-color;
    height: 28px;
    margin-top: 16px;
  }
  h5 {
    line-height: 60px;
    padding-left: 30px;
    font-size: 22px;
    color: #595757;
  }
  .flush {
    width: 90px;
    height: 42px;
    margin-top: 8px;
    margin-right: 42px;
    font-size: 16px;
    color: #898989;
    background: #f4f5f5;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
  }
}
//设置表单
.account {
  width: 487px;
  height: 630px;
  margin-left: 400px;
  margin-top: 100px;
  .avatar-uploader .el-upload {
    width: 162px;
    height: 162px;
    // border: 1px solid #c3c3c3;
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
    margin: 0 auto;
    display: block;
  }
  .avatar-uploader-icon {
    font-size: 162px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .upload-tip {
    font-size: 18px;
    color: $theme-color;
    text-align: center;
  }
  .el-input__inner {
    width: 368px;
    border: 1px solid #bfbfbf;
  }
  .submit-btn {
    background: $theme-color;
    border: none;
    font-size: 18px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
}
</style>