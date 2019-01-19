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
  mixins: [mixin],
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
        typeIcon: ''//分类图片
      },
      rules: {
        typeName: [
          { required: true, message: '请输入分类名称', trigger: 'blur'},
          { max: 20, message: '长度需小于20个字符', trigger: 'blur'}
        ]
      }
    };
  },
  
  components: {
    subTitle
  },
  mounted() {
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => {
      res = res.data.data;
      this.categoryList = [...this.categoryList, ...res];
      //判断路由的url中是否有参数，如果有参数就是编辑页面，如果没有就是添加页面
      if (this.$route.query.id) {
        this.isAdd = false;
        this.loading = true;
        //根据id查询商品分类信息
        axios.post('/api/merchantGoodsType/merchant_goods_type_by_id', {
          id: this.$route.query.id
        }).then((res) => {
          res = res.data.data;
          this.$set(this.ruleForm, 'typeName', res.typeName);
          this.$set(this.ruleForm, 'parentId', res.parentId);
          this.$set(this.ruleForm, 'goodsUnit', res.goodsUnit);
          this.$set(this.ruleForm, 'goodsSort', res.goodsSort);
          this.$set(this.ruleForm, 'showStatus', res.showStatus);
          this.$set(this.ruleForm, 'typeIcon', res.typeIcon);
        }, (err) => {
          this.$message({
            message: err.msg,
            type: 'error'
          });
        }).finally(() => {
          this.loading = false;
        })
      }
      
    })
  },
  methods: {
    //上传单张图片
    //上传单张图片
    uploadFile (file) {
      return new Promise((resolve,reject) => {
        if (file.target.files.length > 0) {
          let formData = new FormData();
          formData.append('file', file.target.files[0]);
          axios.post('/api/merchant/upload_file', formData, {
            type: 'form',
            file: 'image'
          }).then((res) => {
            res = res.data.data;
            resolve({
              imgUrl: res.imgUrl +res.image
            });
          }, (err) => {
            this.$message({
              message: err.msg,
              type: 'error'
            });
            reject(err);
          })
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //添加商品分类提交
          if (this.isAdd) {
            this.addEidt('/api/merchantGoodsType/merchant_add_goods_type')
          } else {
            //编辑商品分类提交
            this.ruleForm.id = this.$route.query.id;
            this.addEidt('/api/merchantGoodsType/merchant_goods_type_update')
          }
        }
      })
    },
    // 提交商品分类数据
    addEidt (url) {
      axios.post(url, this.ruleForm).then(() => {
        this.$message({
          message: '操作成功',
          type: 'success'
        });
        setTimeout(() => {
          this.$router.push('/goods/category')
        },1000)
      }, (err) => {
        this.$message({
          message: err.msg,
          type: 'error'
        })
      })
    },
    //返回
    back () {
      this.$router.go(-1)
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