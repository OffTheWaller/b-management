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
            <el-table :data="tableData" style="width: 100%" border>
              <el-table-column label="时间" prop="time"></el-table-column>
              <el-table-column label="IP" prop="ip"></el-table-column>
              <el-table-column label="地区" prop="site"></el-table-column>
              <el-table-column label="浏览器" prop="browser"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginLog',
    data () {
      return {
        tableData: [{
          time: '2017-07-03 14:36:21',
          ip: '183.14.15.113',
          site: '广东省深圳市',
          browser: 'Firefox 45'
        },
        {
          time: '2017-07-03 14:36:21',
          ip: '183.14.15.113',
          site: '广东省深圳市',
          browser: 'Firefox 45'
        },
        {
          time: '2017-07-03 14:36:21',
          ip: '183.14.15.113',
          site: '广东省深圳市',
          browser: 'Firefox 45'
        },
        {
          time: '2017-07-03 14:36:21',
          ip: '183.14.15.113',
          site: '广东省深圳市',
          browser: 'Firefox 45'
        },
        {
          time: '2017-07-03 14:36:21',
          ip: '183.14.15.113',
          site: '广东省深圳市',
          browser: 'Firefox 45'
        }]
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
        width: 100%;
        padding: 34px;
        
    }
    .main-content /deep/ th {
          background: #F7F8F8;
          text-align: center;
          font-weight: 700;
          color: #595757;
          border: 1px solid #F7F8F8;
        }
</style>