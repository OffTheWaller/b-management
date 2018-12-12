<template>
  <div class="home">
    <el-container>
      <el-header class="nav" height="90px">
        <!-- 顶部导航 -->
        <div class="nav-wrapper">
          <div class="logo fl">LOGO</div>
          <el-menu
          mode="horizontal"
          class="fl"
          background-color="#5bc0bf"
          text-color="#fff"
          active-text-color="#fff"
          default-active="index"
          >
            <el-menu-item v-for="(item,key) in nav" 
            :key="key"
            :index="key"
            @click="switchNav(key,item.path)"
            >{{item.title}}</el-menu-item>
          </el-menu>
          <div class="user-info fr"></div>
        </div>
      </el-header>
      <el-container class="main-content">
        <!-- 侧边栏 -->
        <el-aside class="sidebar">
          <el-menu v-for="(item,key) in menu"
          :key="key"
          :router="isRouter"
          background-color="#efefef"
          active-text-color="#5bc0bf"
          >
            <h5>{{item.sub}}</h5>
            <el-menu-item v-for="(subItem,key) in item.menu"
            :key="key"
            :index="subItem.path"
            >•  {{subItem.name}}</el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主内容区 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav from '@/utils/nav.js';

export default {
  name: 'Index',
  data () {
    return {
      nav: nav,
      isRouter: true
    }
  },
  methods: {
    switchNav (key,path) {
      this.$store.commit('ACTIVE_NAV',key);
      this.$router.push(path)
      
    }
  },
  computed: {
    menu () {
      return nav[this.$store.getters.activeNav].child;
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';
  .nav {
    height: 90px;
    background: $theme-color;
  }
  .nav-wrapper {
    width: 1634px;
    margin: 0 auto;
    .logo {
      width: 180px;
      text-align: center;
      line-height: 90px;
      font-size: 38px;
      color: #fff;
    }
    li.el-menu-item {
      width: 80px;
      height: 90px;
      line-height: 90px;
      text-align: center;
    }
  }
  .main-content {
    width: 1634px;
    margin: 0 auto;
    .el-aside {
      width: 260px !important;
    }
    .el-main {
      padding: 0;
    }
    .el-menu h5 {
      width: 260px;
      background: $side-bar;
      text-align: center;
      line-height: 60px;
      color: #bdbdbe;
      font-size: 18px;
      font-weight: 400;
    }
    .el-menu-item {
      width: 260px;
      text-align: center;
      font-size: 18px;
      &:hover {
        color: $theme-color;
      }
    }
  }
</style>
