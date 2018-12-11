import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav: [
      {
        title: '首页',
        path: '/home/homeSystem',
        child: [
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
      },
      {
        title: '商品',
        path: '/goods/goodsManagement',
        child: [
          {
            sub: '商品管理',
            menu: [
              {
                name: '商品列表',
                path: '/goods/goodsList'
              },
              {
                name: '添加商品',
                path: '/goods/goodsAdd'
              },
              {
                name: '商品回收站',
                path: '/goods/goodsRecycle'
              },
              {
                name: '商品评价',
                path: '/goods/goodsEvaluate'
              }
            ]
          },
          {
            sub: '商品配置',
            menu: [
              {
                name: '商品分类',
                path: '/goods/goodsCategory'
              },
              {
                name: '商品类型',
                path: '/goods/goodsType'
              },
              {
                name: '品牌管理',
                path: '/goods/brandManagement'
              },
              {
                name: '图片库管理',
                path: '/goods/imagesManagement'
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
