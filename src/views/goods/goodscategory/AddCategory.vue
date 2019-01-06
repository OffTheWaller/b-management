<template>
  <div>
    <sub-title :subTitle="'添加分类'" :isBack="true"></sub-title>
    <div class="body">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="form">
        <el-form-item label="分类名称：" prop="typeName">
          <el-input v-model="ruleForm.typeName"></el-input>
        </el-form-item>
        <el-form-item label="上级分类：" prop="parentId">
          <el-select :disabled="isAddCategory" v-model="ruleForm.parentId" placeholder="请选择分类">
            <el-option v-for="item in categoryList" :key="item.id" :label="item.typeName" :value="item.id"></el-option>
           

          </el-select>
        </el-form-item>
        <el-form-item label="数量单位：" prop="goodsUnit">
          <el-input v-model="ruleForm.goodsUnit"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="goodsSort">
          <el-input v-model="ruleForm.goodsSort" type="number"></el-input>
        </el-form-item>
        <el-form-item label="是否显示：" prop="showStatus">
          <el-radio-group v-model="ruleForm.showStatus">
            <el-radio label="0">显示</el-radio>
            <el-radio label="1">不显示</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类图标" prop="typeIcon">
          <img :src="ruleForm.typeIcon" alt="" class="form-img" v-if="ruleForm.typeIcon">
          <div class="upload-btn-wrap">
            <label for="upload">
              <el-button size="small" type="primary">上传图片</el-button>
              <input @change="uploadTypeIcon" type="file" id="upload" class="upload-input" accept="image/jpeg,image/png">
              <p class="form-tips">图标尺寸为18*18比例，大小不能超过200KB，图片只能为jpg、png、gif格式</p>
            </label>
          </div>
        </el-form-item>
        <el-form-item label="分类描述：" prop="typeDesc">
          <el-input type="textarea" v-model="ruleForm.typeDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import mixin from "@/utils/mixin";
import axios from "@/utils/axios.js";
export default {
  name: "AddCategory",
  data() {
    return {
      isAddCategory: false,
      categoryList: [{id: 0, typeName: '顶级分类'}],
      ruleForm: {
        typeName: '',
        parentId: '',
        goodsUnit: '',
        goodsSort: '',
        showStatus: '1',
        typeIcon: ''
      },
      rules: {
        typeName: [
          { required: true, message: '请输入分类名称', trigger: 'blur'},
          { max: 20, message: '长度需小于20个字符', trigger: 'blur'}
        ]
      }
    };
  },
  mixins: [mixin],
  components: {
    subTitle
  },
  mounted() {
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => {
      res = res.data.data;
      this.categoryList = [...this.categoryList, ...res];
      // console.log(this.categoryList)
    })
  },
  methods: {
    uploadFile (file) {
      return new Promise((resolve,reject) => {
        
        if (file.target.files.length > 0) {
          console.log('hello world')
          var formData = new FormData();
          formData.append('username', '1223')
          // console.log(formData)
          // axios.post('/api/merchant/upload_file', formData, {
          //   type: 'form',
          //   file: 'image'
          // }).then((res) => {
            
          //   console.log(res)
          //   resolve({
          //     imgUrl: res.imgUrl + res.image
          //   });
          // }, (err) => {
          //   this.$message({
          //     message: err.msg,
          //     type: 'error'
          //   });
          //   reject(err);
          // })
        }
      })
    },
    //上传图片
    uploadTypeIcon (file) {
      this.uploadFile(file).then((res) => {
        this.$set(this.ruleForm, 'typeIcon', res.imgUrl)
      })
    },
    //提交表单
    submitForm () {

    },
    //返回
    back () {

    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables.scss";
.form {
  width: 600px;
  .form-tips {
    font-size: 12px;
    color: $gray;
  }
}
</style>