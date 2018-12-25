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
      <div v-if="stepActive == 1">
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
          <el-button type="primary" class="next-step" @click="next">下一步，填写商品信息</el-button>
        </div>
      </div>
      <!-- 步骤二 -->
      <div v-if="stepActive == 2">
        这是第二步
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/axios.js';
export default {
  name: "Add",
  data() {
    return {
      stepActive: 1,
      categoryName: '', //一级分类名
      childCategoryName: '',  //二级分类名
      categoryList: [], //一级分类列表
      childCategoryList: [],//二级分类列表
      ruleForm: {
        typeId: '',  //一级分类Id
        childId: '',  //二级分类Id
        
      }
    };
  },
  methods: {
    next () {
      this.stepActive++;
    },
    getCategory (data) {

      if (this.ruleForm.typeId != data.id) {
        this.ruleForm.typeId = data.id;
        this.ruleForm.childId = '';
        this.childCategoryList = data.list;
        this.categoryName = data.typeName;
        this.childCategoryName = '';
      }
    },
    getChildCategory (data) {
      if (this.ruleForm.childId != data.id) {
        this.ruleForm.childId = data.id;
        this.childCategoryName = data.typeName;
      }
    }
  },
  mounted () {
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => {
      res = res.data.data;
      this.categoryList = res;
      
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
}
</style>