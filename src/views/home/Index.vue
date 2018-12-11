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
  .nav {
    width: 100%;
    background: #5bc0bf;
    .nav-wrapper {
      width: 1634px;
      line-height: 90px;
      margin: 0 auto;
      .logo {
        width: 180px;
        text-align: center;
        color: #fff;
        font-size: 36px;
      }
      .user-info {
        width: 326px;
        height: 90px;
      }
      .el-menu {
        height: 90px;
        .el-menu-item {
          width: 80px;
          height: 90px;
          line-height: 90px;
          border: none;
          text-align: center;
          font-size: 20px;
        }
        .is-active {
          border: none !important;
          background: #7ccdcc !important;
        }
      }
    }
  }
  .main-content {
    width: 1634px;
    margin: 0 auto;
    .sidebar {
      width: 260px;
      height: 100%;

      .el-menu {
        border: none;
        text-align: center;
        
        h5 {
          height: 60px;
          line-height: 60px;
          font-size: 16px;
          color: #b9b9ba;
          font-weight: normal;
          border-bottom: 1px solid #e5e5e5;
        }
        .el-menu-item {
          font-size: 16px;
          border-bottom: 1px solid #e5e5e5;
          height: 59px;
        }
        .is-active {
          background: #fff !important;
          border-bottom: 1px solid #5bc0bf;
        }
        .el-menu-item:hover {
          color: #5bc0bf;
          background-color: none !important;
          font-size: 16px;
        }
      }
    }
  }
</style>
