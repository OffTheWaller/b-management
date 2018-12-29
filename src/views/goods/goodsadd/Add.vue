<template>
  <div>
    <!-- 内容标题区域 -->
    <div class="main-title">
      <div class="greenbar fl"></div>
      <h5 class="fl">添加商品</h5>
      <button class="flush fr">
        <span class="iconfont">&#xe654;</span> 刷新
      </button>
    </div>
    <div class="content">
      <el-steps :active="stepActive" align-center :space="390">
        <el-step title="选择商品分类"></el-step>
        <el-step title="填写商品信息"></el-step>
        <el-step title="填写商品属性"></el-step>
        <el-step title="选择商品关联"></el-step>
      </el-steps>
      <!-- 步骤一 -->
      <div v-if="stepActive == 0">
        <div class="form-label">基本信息</div>
        <div class="select-category-1">
          <!-- 选择菜单 -->
          <div class="select-box">
            <div class="select-box-form">
              <div class="select-title">选择一级分类</div>
              <ul>
                <li :class="ruleForm.typeId == item.id? 'active' : ''" v-for="item in categoryList" :key="item.id" @click="getCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
            <div class="select-box-center">
              <img src="@/assets/images/icon-arrow.png" alt="">
            </div>
            <div class="select-box-form">
              <div class="select-title">选择二级分类</div>
              <ul>
                <li :class="ruleForm.childId == item.id? 'active': ''" v-for="item in childCategoryList" :key="item.id" @click="getChildCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
          </div>
          <!-- 当前选择 -->
          <div class="now-choose">
            <p>
              您当前选择的商品类别是：
              <span>{{categoryName || '未选择'}}  </span>
              <span v-show="childCategoryName">>  {{childCategoryName || '未选择'}}</span>
            </p>
          </div>
          <el-button type="primary" class="next-step" @click="submitStep1">下一步，填写商品信息</el-button>
        </div>
      </div>
      <!-- 步骤二 -->
      <div v-if="stepActive == 1">
        <div class="form-label">基本信息</div>
        <div class="form-label" id="stock-label">库存规格</div>
        <div class="select-category-2">
          <el-form :model="ruleForm" :rules="rules" label-width="100px" ref="ruleForm">
            <el-form-item label="商品分类">
              <span class="goods-type">{{categoryName}}  </span>
              <span v-show="childCategoryName" class="goods-type">>  {{childCategoryName}}</span>
            </el-form-item>
            <el-form-item label="商品名称:" prop="goodsName">
              <el-input v-model="ruleForm.goodsName"></el-input>
            </el-form-item>
            <el-form-item label="副标题:" prop="goodsSubtitle">
              <el-input v-model="ruleForm.goodsSubtitle"></el-input>
            </el-form-item>
            <el-form-item label="商品品牌:" prop="brandId">
              <el-select v-model="ruleForm.brandId" placeholder="请选择品牌">
                <el-option v-for="item in brandList" :value="item.id" :label="item.name" :key="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品介绍:" prop="goodsDesc">
              <el-input type="textarea" v-model="ruleForm.goodsDesc"></el-input>
            </el-form-item>
            <el-form-item label="商品货号:" prop="goodsNo">
              <el-input v-model="ruleForm.goodsNo"></el-input>
              <p class="step2-tips">如果您不输入商品货号，系统将自动生成一个唯一的货号</p>
            </el-form-item>
            <el-form-item label="商品售价:" prop="goodsPrice">
              <el-input v-model="ruleForm.goodsPrice" type="number"></el-input>
            </el-form-item>
            <el-form-item label="市场价:" prop="marketPrice">
              <el-input v-model="ruleForm.marketPrice" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品库存:" prop="goodsStock">
              <el-input v-model="ruleForm.goodsStock" type="number"></el-input>
              <p class="step2-tips">该设置只对单品有效，当商品存在多规格货品时为不可编辑状态，库存数量取决于货品数量</p>
            </el-form-item>
            <el-form-item label="库存预警值:" prop="goodsWarning">
              <el-input type="number" v-model="ruleForm.goodsWarning"></el-input>
            </el-form-item>
            <el-form-item label="计量单位:" prop="goodsUnit">
              <el-input v-model="ruleForm.goodsUnit"></el-input>
            </el-form-item>
            <el-form-item label="商品重量:" prop="goodsWeight">
              <el-input v-model="ruleForm.goodsWeight"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="stepActive = 0">上一步，选择商品分类</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">下一步，填写商品属性</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 步骤三 -->
      <div v-if="stepActive == 2">
        这是步骤三
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/axios.js';
export default {
  name: "Add",
  data() {
    //自定义商品库存校验
    let validGoodsStock = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品库存'));
      } else if (value > 99999) {
        callback(new Error('商品库存最大值为99999'));
      } else if (value < 0) {
        callback(new Error('商品库存不能小于0'));
      } else {
        callback();
      }
    }
    return {
      stepActive: 1,
      categoryName: '', //一级分类名
      childCategoryName: '',  //二级分类名
      categoryList: [], //一级分类列表
      childCategoryList: [],//二级分类列表
      brandList: [],//品牌列表
      ruleForm: {
        typeId: '',  //一级分类Id
        childId: '',  //二级分类Id
        goodsName: '', //商品名称
        goodsSubtitle: '', //商品副标题
        brandId: '', //商品品牌id
        goodsDesc: '',//商品介绍
        goodsNo: '',//商品货号
        goodsPrice: '',//商品售价
        marketPrice: '',//市场价
        goodsStock: '',//商品库存
        goodsWarning: '',//商品预警值
        goodsUnit: '',//计量单位
        goodsWeight: '',//商品重量
        
      },
      rules: {
        goodsName: [
          {required: true, message: '请输入商品名称', trigger: 'blur'},
          {max: 20, message: '必须小于20个字符', trigger: 'blur'}
        ],
        goodsSubtitle: [
          {required: true, message: '请输入副标题', trigger: 'blur'},
          {max: 20, message: '必须小于20个字符', trigger: 'blur'}
        ],
        brandId: [
          {required: true, message: '请选择商品品牌', trigger: 'blur'}
        ],
        goodsDesc: [
          {required: true, message: '请输入商品介绍', trigger: 'blur'}
        ],
        goodsPrice: [
          {required: true, message: '请输入商品售价', trigger: 'blur'}
        ],
        goodsStock: [
          {required: true, validator: validGoodsStock, trigger: 'blur'}
        ],
        goodsWarning: [
          {required: true, message: '请输入库存预警值', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    //第一步提交
    submitStep1 () {
      if (!this.ruleForm.typeId) {
        this.$message({
          message: '请先选择商品分类',
          type: 'error'
        })
        return;
      }
      this.stepActive = 1;
    },
    //获取分类
    getCategory (data) {

      if (this.ruleForm.typeId != data.id) {
        this.ruleForm.typeId = data.id;
        this.ruleForm.childId = '';
        this.childCategoryList = data.list;
        this.categoryName = data.typeName;
        this.childCategoryName = '';
      }
    },
    //获取二级分类
    getChildCategory (data) {
      if (this.ruleForm.childId != data.id) {
        this.ruleForm.childId = data.id;
        this.childCategoryName = data.typeName;
      }
    },
    //第二步提交
    submitForm (formName) {
      //表单具有validate方法，用于验证是否通过校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.stepActive = 2;
        } else {
          return false;
        }
      })
    }
  },
  mounted () {
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => { //获取分类
      res = res.data.data;
      this.categoryList = res;
      axios.post('/api/merchant_goods_brand/query_list').then((res) => {//获取品牌
        res = res.data.data;
        this.brandList = res;
      })
    })
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
.content {
  width: 1374px;
  padding: 20px;
  // 表单标题
  .form-label {
    width: 175px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: $theme-color;
    position: relative;
    margin-top: 10px;
    margin-right: 100px;
    padding-left: 15px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -50px;
      border: 25px solid transparent;
      border-left-color: $theme-color;
    }
  }
  #stock-label {
    top: 265px;
  }
  // 步骤一盒子
  .select-category-1 {
    width: 880px;
    min-height: 500px;
    // background: pink;
    margin-left: 250px;
    margin-top: -25px;
    // 选择盒子
    .select-box {
      display: flex;
      justify-content: space-between;
      .select-box-form {
        width: 380px;
        height: 426px;
        border: 1px solid #b4b4b4;
        li {
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          padding-right: 20px;
          padding-left: 10px;
          line-height: 50px;
          border-bottom: 1px solid #b4b4b4;
          &:hover {
            cursor: pointer;
          }
        }
        .active {
          color: #fff;
          background: $theme-color;
        }
      }
      .select-box-center {
        padding-top: 210px;
      }
      .select-title {
        padding-left: 10px;
        font-size: 18px;
        color: #5a5a5a;
        font-weight: 700;
        border-bottom: 1px solid #b4b4b4;
        line-height: 50px;
      }
    }
    .now-choose {
      margin-top: 10px;
      span {
        color: $theme-color;
      }
    }
    .next-step {
      margin-top: 10px;
    }
  }
  //步骤二盒子
  .select-category-2 {
    width: 570px;
    min-height: 500px;
    margin-left: 204px;
    margin-top: -100px;
    padding-left: 90px;
    .goods-type {
      font-size: 14px;
      color: $theme-color;
    }
    .step2-tips {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>