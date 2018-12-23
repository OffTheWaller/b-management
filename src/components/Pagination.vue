<template>
  <div class="pagination-wrap">
    <div class="batch-wrap" v-if="showBatch">
      <el-checkbox v-model="checkAll" @change="handleChangeAll">全选</el-checkbox>
      <el-select @change="batchChange" clearable v-model="checkBatch" placeholder="批量操作" size="mini" class="batch-select">
        <el-option value="delete" label="删除"></el-option>
      </el-select>
      <el-button size="mini" @click="batchConfirm">确定</el-button>
    </div>
    <el-pagination
    class="mypagination"
    :total="total"
    :page-size="pageSize"
    :current-page.sync="currentPage"
    background
    layout="total, prev, pager, next, jumper"
    @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    showBatch: {
      type: Boolean,
      default: true
    },
    total: Number,  //总条数
    pageCount: Number,  //总页数
    pageSize: Number  //每页显示条数
  },
  data () {
    return {
      checkAll: false,
      checkBatch: '',
      currentPage: 1
    }
  },
  methods: {
    handleChangeAll (value) {
      // console.log(value)  //value传递的是一个true和false
      this.$emit('handleChangeAll',value);
    },
    batchChange ($event) {
      // console.log($event)  //传递的是delete
      this.$emit('batchChange',$event)
    },
    batchConfirm () {
      this.$emit('batchConfirm',this.checkBatch)
    },
    handleCurrentChange ($event) {
      //$event传递的是当前页
      // this.currentPage = $event;
      // console.log($event)
      this.$emit('next',$event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination-wrap {
    padding: 0 20px;
    line-height: 44px;
    height: 44px;
    background: #efefef;
    border: 1px solid #b4b4b4;
    border-top: none;
    display: flex;
    justify-content: space-between;
    .batch-select {
      margin: 0 20px;
    }
    .mypagination {
      margin-top: 6px;
    }
  }
</style>