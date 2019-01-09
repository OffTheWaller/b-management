<template>
  <div class="system-info">
    <!-- 内容标题区域 -->
    <!-- <div class="main-title">
            <div class="greenbar fl"></div>
            <h5 class="fl">系统信息</h5>
            <button class="flush fr"><span class="iconfont">&#xe654;</span>  刷新</button>
    </div>-->
    <sub-title subTitle="系统信息"></sub-title>
    <!-- 系统信息表格 -->
    <div class="table-wrapper">
      <table class="info-table">
        <tr>
          <td class="bg-grey">服务器操作系统</td>
          <td>Linux(114.55.34.251）</td>
          <td class="bg-grey">Web服务器</td>
          <td>nginx/1.10.2</td>
        </tr>
        <tr>
          <td class="bg-grey">PHP版本</td>
          <td>5.6.30</td>
          <td class="bg-grey">MySQL版本</td>
          <td>5.5.56</td>
        </tr>
        <tr>
          <td class="bg-grey">安全模式</td>
          <td>否</td>
          <td class="bg-grey">安全模式GID</td>
          <td>否</td>
        </tr>
        <tr>
          <td class="bg-grey">Socket支持</td>
          <td>是</td>
          <td class="bg-grey">时区设置</td>
          <td>Asia/Shanghai</td>
        </tr>
        <tr>
          <td class="bg-grey">GD版本</td>
          <td>GD2(JPEG GIF PNG)</td>
          <td class="bg-grey">Zlib支持</td>
          <td>是</td>
        </tr>
        <tr>
          <td class="bg-grey">IP库版本</td>
          <td>20071024</td>
          <td class="bg-grey">文件上传的最大大小</td>
          <td>40M</td>
        </tr>
        <tr>
          <td class="bg-grey">程序版本</td>
          <td>v2.2.2 RELEASE 20170629</td>
          <td class="bg-grey">安全日期</td>
          <td>2017-05-02</td>
        </tr>
        <tr>
          <td class="bg-grey">编码</td>
          <td>UTF-8</td>
          <td class="bg-grey"></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import subTitle from "@/components/SubTitle";
export default {
  name: "SystemInfo",
  components: {
    subTitle
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/variables.scss";
.system-info {
    width: 100%;
}
.table-wrapper {
    width: 95%;
    padding: 30px;
    // 表格部分
.info-table {
  width: 100%;
  height: 409px;
  margin: 36px auto;
  border-right: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
  td {
    line-height: 52px;
    border-top: 1px solid #b5b5b5;
    border-left: 1px solid #b5b5b5;
    padding-left: 42px;
    font-size: 16px;
    color: #595757;
  }
  .bg-grey {
    background: #efefef;
  }
}
}

</style>