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
            sub: '系统首页',
            menu: [
              {
                name: '系统首页',
                path: '/home/homeSystem'
              },
              {
                name: '账户设置',
                path: '/home/accountSetting'
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
