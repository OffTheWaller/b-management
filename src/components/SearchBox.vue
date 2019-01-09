<template>
  <div class="search-box">
    <div class="search-top flex h-center between">
      <div>
        <i class="el-icon-search font-14 gray"></i>
        <span class="font-14 gray">筛选查询</span>
      </div>
      <div>
        <span class="font-14 gray" v-show="!showSearch" @click="changeShow" :style="pointer"><i class="el-icon-arrow-down"></i>打开筛选</span>
        <span class="font-14 gray" v-show="showSearch" @click="changeShow" :style="pointer"><i class="el-icon-arrow-up"></i>收起筛选</span>&nbsp;&nbsp;
        <el-button type="default">查询结果</el-button>
      </div>
    </div>
    <div class="search-bottom flex h-center font-14 gray" v-show="showSearch">
      <div>输入搜索：</div>
      <el-input clearable v-model="searchContent" class="search-input"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      showSearch: false,//是否展示
      searchContent: '',//搜索内容
      pointer: {
        cursor: 'pointer'
      }
    }
  },
  methods: {
    changeShow () {
      this.showSearch = !this.showSearch;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
  .search-box {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid $border;
    .search-top {
      height: 56px;
      padding: 0 22px;
    }
    .search-bottom {
      height: 56px;
      padding: 0 22px;
      background: $bg;
      .search-input {
        width: 200px;
        display: block;
      }
    }
  }
</style>
