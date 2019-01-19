<template>
  <div>
    <sub-title :subTitle="'商品分类'"></sub-title>
    <div class="body">
      <!-- 表格标题 -->
      <div class="box-title flex h-center between">
        <span class="font-20">数据列表</span>
        <div class="flex h-center">
          <el-button v-if="second">返回</el-button>
          <el-button @click="$router.push('/goods/addcategory')">添加分类</el-button>
        </div>
      </div>
      <el-table
        class="mall-table"
        :header-cell-style="headerStyle"
        :cell-style="tdStyle"
        v-loading="loading"
        :data="tableData"
      >
        <el-table-column label="编号">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="分类名称">
          <template slot-scope="scope">{{ scope.row.typeName }}</template>
        </el-table-column>
        <el-table-column label="级别">
          <template slot-scope="scope">{{ scope.row.parentId == '0' ? '一级' : '二级'}}</template>
        </el-table-column>
        <el-table-column label="商品数量">
          <template slot-scope="scope">{{ scope.row.goodsNum }}</template>
        </el-table-column>
        <el-table-column label="数量单位">
          <template slot-scope="scope">{{ scope.row.goodsUnit }}</template>
        </el-table-column>
        <el-table-column label="是否显示">
          <template slot-scope="scope">
            <el-switch
              @change="handleShow($event, scope.row)"
              v-model="scope.row.showStatus"
              :active-value="0"
              :inactive-value="1"
              active-color="#5BC0BF"
              inactive-color="#dedede"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="排序">
          <template slot-scope="scope">{{ scope.row.goodsSort }}</template>
        </el-table-column>
        <el-table-column label="设置" width="260">
          <template slot-scope="scope">
            <span class="table-btn">转移商品</span>
            <span class="table-btn" @click="$router.push('/goods/addCategory?parentId=' + scope.row.id)">新增下级</span>
            <span class="table-btn">查看下级</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span class="table-btn" @click="$router.push('/goods/addcategory?id=' + scope.row.id)">编辑</span>
            <span class="table-btn" @click="remove(scope.row.id)">删除</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination :showBatch="false" :total="total"></pagination>
    </div>
  </div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import pagination from "@/components/Pagination";
import mixin from "@/utils/mixin";
import axios from "@/utils/axios.js";
export default {
  name: "Category",
  data() {
    return {
      tableData: [],
      second: false
    };
  },
  mixins: [mixin],
  components: {
    subTitle,
    pagination
  },
  mounted() {
    this.getList();
  },
  methods: {
    remove (id) {
      this.$confirm('确认删除吗？').then(() => {
        axios.post('/api/merchantGoodsType/merchant_goods_type_delete', {
          id: id
        }).then(() => {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.getList();
        })
      })
    },
    getList() {
      var parentId = 0;
      axios
        .post("/api/merchantGoodsType/merchant_goods_type_list_page", {
          parentId: parentId,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        })
        .then(res => {
          res = res.data.data;
          this.tableData = res.list;
          this.total = res.totalCount;
          //   console.log(res)
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //是否显示
    handleShow($event, data) {
      //$event是改变后的值
      let form = {
        id: data.id,
        typeName: data.typeName,
        parentId: data.parentId,
        goodsUnit: data.goodsUnit,
        goodsSort: data.goodsSort,
        showStatus: $event,
        typeIcon: data.typeIcon
      };
      axios.post('/api/merchantGoodsType/merchant_goods_type_update', form).then(() => {
          this.$message({
              message: '操作成功',
              type: 'success'
          }, (err) => {
              this.$message({
                  message: err.msg,
                  type: 'error'
              })
          })
      })
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/variables.scss";
</style>