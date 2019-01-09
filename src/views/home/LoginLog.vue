<template>
    <div>
        <!-- 内容标题区域 -->
        <div class="main-title">
            <div class="greenbar fl"></div>
            <h5 class="fl">登录日志</h5>
            <button class="flush fr"><span class="iconfont">&#xe654;</span>  刷新</button>
        </div>
        <div class="main-content">
            <!-- 数据列表 -->
            <div class="table-title">
                数据列表
            </div>
            <el-table :data="tableData" style="width: 100%" border :header-cell-style="headerStyle" :cell-style="tdStyle" class="my-table">
              <el-table-column label="时间" prop="operateTime"></el-table-column>
              <el-table-column label="IP" prop="ip"></el-table-column>
              <el-table-column label="地区" prop="description"></el-table-column>
              <el-table-column label="浏览器" prop="pack"></el-table-column>
            </el-table>
            <pagination :showBatch="false" :total="total" @next="next"></pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import axios from '@/utils/axios.js'
export default {
    name: 'LoginLog',
    data () {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    },
    components: {
        Pagination
    },
    mounted () {
        this.getList();
    },
    methods: {
        getList () {
            axios.post('/api/merchant/get_merchant_login_info_list',{
                currentPage: this.currentPage,
                pageSize: this.pageSize,
                orderBy: 'operate_time desc'
            },{type: 'form'}).then((res) => {                
                res = res.data.data;
                this.tableData = res.list;
                this.total = res.totalPage;
                // console.log(res)
            })
        },
        next (val) {
            this.currentPage = val;
            this.getList();
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
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
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
    .main-content {
        width: 90%;
        padding: 34px;
        .my-table {
            border-right: 1px solid #b4b4b4;
            border-bottom: 1px solid #b4b4b4;
        }
        
    }
</style>