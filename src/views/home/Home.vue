<template>
  <div class="home">
    <el-container>
      <el-header class="nav" height="90px">
        <common-header @choose="chooseNav"></common-header>
      </el-header>
      <el-container class="main-content">
        <el-aside class="sidebar">
          <common-aside :subMenu="subMenu"></common-aside>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonAside from '@/components/CommonAside'

export default {
  name: 'Home',
  data () {
    return {
      subMenu: [
        {
          sub: '系统首页',
          menu: [
            {
              name: '系统首页',
              path: '/home/homeSystem'
            },
            {
              name: '账户设置',
              path: '/home/accountSetting'
            },
            {
              name: '系统信息',
              path: '/home/systemInfo'
            },
            {
              name: '登录日志',
              path: '/home/loginLog'
            }
          ]
        }
      ]
    }
  },
  components: {
    CommonHeader,
    CommonAside
  },
  methods: {
    chooseNav (key) {
      let nav = this.$store.state.nav;
      let len = nav.length;
      for (let i=0; i<len; i++) {
        if (nav[i].path == key) {
          this.subMenu = nav[i].child;
          // console.log(this.subMenu)
          return;
        }
      }
    }
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
