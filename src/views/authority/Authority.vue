<template>
  <div>
    <sub-title subTitle="操作日志"></sub-title>
    <div class="body">
      <search-box class="margin-b">
        <div slot="search-content">
          <span>操作日期：</span>
          <el-date-picker
            v-model="operationDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd hh:mm:ss"
            @change="getList"
            :picker-options="pickerOptions1"
          ></el-date-picker>
        </div>
      </search-box>
      <!-- 表格标题 -->
      <div class="box-title flex h-center between">
        <span class="font-20">数据列表</span>
      </div>
      <el-table
        ref="table"
        :data="tableData"
        class="mall-table"
        :header-cell-style="headerStyle"
        :cell-style="tdStyle"
        v-loading="loading"
      >
        <el-table-column label="编号">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="操作者">
          <template slot-scope="scope">{{ scope.row.operator }}</template>
        </el-table-column>
        <el-table-column label="操作日期">
          <template slot-scope="scope">{{ scope.row.operationDate }}</template>
        </el-table-column>
        <el-table-column label="IP地址">
          <template slot-scope="scope">{{ scope.row.ip }}</template>
        </el-table-column>
        <el-table-column label="操作记录">
          <template slot-scope="scope">{{ scope.row.operationRecord }}</template>
        </el-table-column>
      </el-table>
      <pagination :showBatch="false" @next="next" :total="total" :pageSize="pageSize"></pagination>
    </div>
  </div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import SearchBox from "@/components/SearchBox";
import Pagination from "@/components/Pagination";
import mixin from "@/utils/mixin";
import axios from "@/utils/axios";
export default {
  name: "Authority",
  mixins: [mixin],
  components: {
    subTitle,
    SearchBox,
    Pagination
  },
  data() {
    return {
      tableData: [], // 表格数据
      operationDate: "",
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios
        .post("/api/user_operation_log/query_user_operation_log", {
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          operationDate: this.operationDate,
          merchantId: JSON.parse(localStorage.getItem("userInfo")).merchantId
        })
        .then(res => {
          res = res.data.data;
          this.total = res.totalCount;
          // console.log(res)
          this.tableData = res.list;
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
</style>
