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
            <el-button type="text" icon="el-icon-search" class="query-search">筛选查询</el-button>输入商品名称：
            <el-input v-model="goodsName" placeholder="商品名称/商品货号" class="name-input"></el-input>商品分类：
            <el-select v-model="typeId" @change="search" placeholder="请选择商品分类" class="select-input" clearable>
              <el-option :label="item.typeName" :value="item.id" v-for="item in categoryList" :key="item.id"></el-option>
            </el-select>
            商品品牌：
            <el-select v-model="brandId" @change="search" placeholder="请选择商品品牌" class="select-input" clearable>
              <el-option :label="item.name" :value="item.id" v-for="item in brandList" :key="item.id"></el-option>
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
      <el-table :data="tableData" style="width: 100%" border class="goods-table" :header-cell-style="headerStyle" :cell-style="tdStyle">
        <el-table-column type="selection" width="55" prop="id"></el-table-column>
        <el-table-column label="编号" prop="id"></el-table-column>
        <el-table-column label="商品图片">
          <template slot-scope="scope">
            <img :src="getGoodImg(scope.row.goodsImg)" alt="">
          </template>
        </el-table-column>
        <el-table-column label="商品名称" prop="goodsName">
        </el-table-column>
        <el-table-column label="价格/货号" width="197">
          <template slot-scope="scope">
            <p>价格：{{scope.row.goodsPrice}} 元</p>
            <p>货号：{{scope.row.goodsNo}}</p>
          </template>
        </el-table-column>
        <el-table-column label="SKU库存" width="196">
          <template slot-scope="scope">
            <img src="@/assets/images/icon-edit.png" class="edit-img" @click="editStock(scope.row.id)">
          </template>
        </el-table-column>
        <el-table-column label="销量" prop="buyNum"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">{{scope.row.status == 0 ? '未上架' : '已上架'}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span class="table-control" @click="putGood(scope.row.id, scope.row.status)">{{scope.row.status == 0 ? '上架' : '下架'}}</span>
            <span class="table-control">编辑</span>
            <span class="table-control">删除</span>
          </template>
        </el-table-column>
      </el-table>
      
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios.js";
export default {
  name: "List",
  data() {
    return {
      showSearch: false, //子搜索框展开
      goodsName: '',  //商品名称
      typeId: '',  //选中的商品分类
      brandId: '',  //选中的商品品牌
      categoryList: [],  // 分类列表
      brandList: [],  //品牌列表
      currentPage: 1,  //当前页
      pageSize: 10,  //每页显示条数
      total: '',  //商品总数
      tableData: [] //商品数据

    };
  },
  mounted () {
    //获取分类列表
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => {  
      this.categoryList = res.data.data;
    })
    //获取品牌列表
    axios.post('/api/merchant_goods_brand/query_list').then((res) => {
      this.brandList = res.data.data;
    })
    this.getGoodsList();
  },
  methods: {
    showSubSearch() {
      this.showSearch = !this.showSearch;
    },
    getGoodsList () {
      //获取商品列表
      axios.post('/api/merchantGoods/merchant_goods_list_page', {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        goodsName: this.goodsName,
        typeId: this.typeId,
        brandId: this.brandId
      }).then((res) => {
        res = res.data.data;
        this.total = res.totalCount;
        this.tableData = res.list;
        // console.log(res.data.data)
      },(error) => {
        this.$message({
          message: error.msg,
          type: 'error'
        })
      })
    },
    search () {
      this.currentPage = 1;
      this.getGoodsList();
    },
    // 获取商品图片
    getGoodImg (data) {
      if (data) {
        return data.split(',')[0]
      } else {
        require('@/assets/images/image.png')
      }
    },
    //编辑库存
    editStock () {

    },
    // 上架，下架
    putGood (id, status) {
      if (status == 0) {
        axios.post('/api/merchantGoods/merchant_goods_put', {
          id: id
        }).then(() => {
          this.$message({
            message: '上架成功',
            type: 'success'
          })
          this.getGoodsList();
        }, (err) => {
          this.$message(err.msg)
        })
      } else {
        axios.post('/api/merchantGoods/merchant_goods_pull', {
          id: id
        }).then(() => {
          this.$message({
            message: '下架成功',
            type: 'success'
          })
          this.getGoodsList();
        }, (err) => {
          this.$message(err.msg)
        })
      }

    },
    // 表头样式
    headerStyle(){
      return {
        color: '#595757',
        background: '#F6F6F6',
        fontSize: '15px',
        borderLeft: '1px solid #b4b4b4',
        borderTop: '1px solid #b4b4b4',
        textAlign: 'center'
      }
    },
    //表格样式
    tdStyle(){
      return {
        color: '#595757',
        fontSize: '15px',
        borderLeft: '1px solid #b4b4b4',
        borderTop: '1px solid #b4b4b4',
        textAlign: 'center'
      }
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
//商品表格
.goods-table {
  border-right: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  img {
    width: 60px;
    height: 60px;
  }
  .edit-img {
    width: 23px;
    height: 23px;
    &:hover {
      cursor: pointer;
    }
  }
  .table-control {
    font-size: 14px;
    margin-right: 5px;
    &:hover {
      color: $theme-color;
      cursor: pointer;
    }
  }
}
</style>