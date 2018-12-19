<template>
  <div class="goodslist">
    <!-- 内容标题区域 -->
    <div class="main-title">
      <div class="greenbar fl"></div>
      <h5 class="fl">商品列表</h5>
      <button class="flush fr">
        <span class="iconfont">&#xe654;</span> 刷新
      </button>
    </div>
    <div class="list-container">
      <!-- 搜索框部分 -->
      <div class="list-search">
        <div class="search-top">
          <el-button type="primary">
            全部商品 (
            <span>100</span>)
          </el-button>
          <el-button type="default">
            已上架 (
            <span>100</span>)
          </el-button>
          <el-button type="default">
            未上架 (
            <span>100</span>)
          </el-button>
          <el-button type="default">
            待审核 (
            <span>100</span>)
          </el-button>
          <el-button type="default" class="notpass">
            未通过 (
            <span>100</span>)
          </el-button>
          <span v-show="!showSearch" @click="showSubSearch" class="change">
            <i class="el-icon-arrow-down"></i>打开筛选
          </span>
          <span v-show="showSearch" @click="showSubSearch" class="change">
            <i class="el-icon-arrow-up"></i>收起筛选
          </span>
          <el-button type="default">查询结果</el-button>
          <el-button type="default" class="higher">高级检索</el-button>
        </div>
        <!-- 搜索框下半部分 -->
        <transition name="sub-menu">
          <div class="search-bottom" v-show="showSearch">
            <el-button type="text" icon="el-icon-search" class="query-search">筛选查询</el-button>输入搜索：
            <el-input v-model="goodsName" placeholder="商品名称/商品货号" class="name-input"></el-input>商品分类：
            <el-select v-model="brandId" placeholder="请选择商品分类" class="select-input">
              <el-option label="衣服" value="'衣服'"></el-option>
              <el-option label="裤子" value="'裤子'"></el-option>
            </el-select>
          </div>
        </transition>
      </div>
      <!-- 商品列表部分 -->
      <div class="table-title">
        <span>数据列表</span>
        <div>
          <el-button @click="$router.push('/goods/add')">添加商品</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="编号"></el-table-column>
        <el-table-column label="商品图片"></el-table-column>
        <el-table-column label="商品名称"></el-table-column>
        <el-table-column label="价格/货号"></el-table-column>
        <el-table-column label="标签"></el-table-column>
        <el-table-column label="排序"></el-table-column>
        <el-table-column label="SKU库存"></el-table-column>
        <el-table-column label="销量"></el-table-column>
        <el-table-column label="审核状态"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
      
    </div>
  </div>
</template>

<script>
// import axios from "@/utils/axios.js";
export default {
  name: "List",
  data() {
    return {
      showSearch: false, //子搜索框展开
      goodsName: '',
      brandId: '',
      tableData: [{
        date: '2014-5-7'
      },{
        date: '2014-5-7'
      },{
        date: '2014-5-7'
      }]

    };
  },
  methods: {
    showSubSearch() {
      this.showSearch = !this.showSearch;
    }
  }
};
</script>

<style lang="scss" scoped>
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
//内容区
.list-container {
  padding: 32px;
}
// 搜索框
.list-search {
  width: 1309px;
  height: 114px;
  margin-bottom: 20px;
  // 搜索上半部分
  .search-top {
    height: 57px;
    padding-top: 10px;
    padding-left: 22px;
    background: #f7f8f8;
    .el-button.el-button--primary {
      background: $theme-color;
      border: none;
    }
    .el-button.el-button--default {
      margin-left: 20px;
      &:hover {
        color: $theme-color;
        background: #fff;
      }
    }
    .notpass {
      margin-right: 199px;
    }
    .higher.el-button--default {
      margin-left: 0;
    }
    .change {
      cursor: pointer;
    }
  }
  //搜索下半部分
  .search-bottom {
    padding-left: 25px;
    padding-top: 10px;
    background: #efefef;
    .query-search {
      color: #595757;
      font-size: 15px;
      margin-right: 74px;
    }
    .name-input {
      width: 209px;
      height: 38px;
      color: #c9caca;
      margin-right: 10px;
    }
    .select-input {
      width: 209px;
    }
  }
  .sub-menu-enter,.sub-menu-leave-to {
    opacity: 0;
  }
  .sub-menu-enter-active,
  .sub-menu-leave-active {
    transition: all .8s;
  }
}
</style>