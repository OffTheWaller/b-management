<template>
  <div class="home">
    <el-container>
      <!-- 顶部导航 -->
      <el-header class="nav" height="90px">
        <div class="nav-wrapper">
          <div class="logo fl">LOGO</div>
          <el-menu
          mode="horizontal"
          class="fl"
          background-color="#5bc0bf"
          text-color="#fff"
          active-text-color="#fff"
          default-active="activeNav"
          >
            <el-menu-item v-for="(item,key) in nav" 
            :key="key"
            :index="key"
            @click="switchNav(key,item.path)"
            >{{item.title}}</el-menu-item>
          </el-menu>
          <div class="user-info fr">
            <div class="iconfont user-icon">&#xe626;</div>
            <div class="user-name">{{userInfo.merchantName}}</div>
            <div class="seperate"></div>
            <div class="return-home iconfont" @click="goHome">&#xe627;</div>
            <div class="tips-num">50</div>
            <div class="iconfont tips">&#xe61a;</div>
            <div class="logout iconfont" @click="logout">&#xeee3;</div>
          </div>
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
      isRouter: true,
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    switchNav (key,path) {
      //activeNav要在router的beforeEach中提交到mutation，在这里提交刷新了就没了
      // this.$store.commit('ACTIVE_NAV',key);
      this.$router.push(path)  
    },
    goHome () {
      this.$router.push('/index/systemIndex')
    },
    //退出登录
    logout () {
      this.$store.commit('LOGOUT');
      this.$message({
        message: '退出系统',
        type: 'warning'
      })
      setTimeout(() => {
        this.$router.push('/login');
      },1000)
    }
  },
  computed: {
    menu () {
      return nav[this.$store.getters.activeNav].child;
    },
    activeNav () {
      return this.$store.getters.activeNav;
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
    width: 100%;
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
    .user-info {
      height: 90px;
      position: relative;
      >div {
        float: left;
        margin-left: 15px;
        width: 33px;
        height: 33px;
        font-size: 33px;
        color: #fff;
        line-height: 90px;
        &:hover {
          cursor: pointer;
        }
      }
      .user-name {
        width: 80px;
        font-size: 16px;
      }
      .seperate {
        width: 1px;
        height: 33px;
        background: #fff;
        margin-top: 30px;
      }
      .tips-num {
        position: absolute;
        width: 22px;
        height: 22px;
        background: red;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        border-radius: 11px;
        top: 21px;
        left: 221px;
      }
    }
  }
  .main-content {
    width: 100%;
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
