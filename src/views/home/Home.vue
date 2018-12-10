<template>
  <div class="home">
    <el-container>
      <el-header class="nav" height="90px">
        <common-header></common-header>
      </el-header>
      <el-container class="main-content">
        <el-aside class="sidebar">这是侧边栏</el-aside>
        <el-main>这是主内容区</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'

export default {
  name: 'Home',
  components: {
    CommonHeader
  }
}
</script>

<style lang="scss">
  .el-header.nav {
    width: 100%;
    height: 90px;
    background: #5bc0bf;
  }
  .main-content {
    width: 1634px;
    background: #ccc;
    margin: 0 auto;
  }
  .sidebar {
    width: 260px;
    background: yellow;
  }
</style>
