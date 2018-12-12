import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/home/Index.vue'
import Login from './views/login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index/systemIndex'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'systemIndex', //系统首页
          component: resolve => require(['@/views/home/SystemIndex'], resolve)
        },
        {
          path: 'accountSetting',  //账户设置
          component: resolve => require(['@/views/home/AccountSetting'], resolve)
        },
        {
          path: 'systemInfo',  //系统信息
          component: resolve => require(['@/views/home/SystemInfo'], resolve)
        },
        {
          path: 'loginLog',  //登录日志
          component: resolve => require(['@/views/home/LoginLog'], resolve)
        },
        {
          path: '/goods/list',  //商品列表
          component: resolve => require(['@/views/goods/goodslist/List'], resolve)
        },
        {
          path: '/goods/add',  //添加商品
          component: resolve => require(['@/views/goods/goodsadd/Add'], resolve)
        },
        {
          path: '/goods/recycle',  //商品回收站
          component: resolve => require(['@/views/goods/goodsrecycle/Recycle'], resolve)
        },
        {
          path: '/goods/evaluate',  //商品评价
          component: resolve => require(['@/views/goods/goodsevaluate/Evaluate'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
