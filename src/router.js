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
      redirect: '/login'
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
        },
        {
          path: '/goods/category',  //商品分类
          component: resolve => require(['@/views/goods/goodscategory/Category'], resolve)
        },
        {
          path: '/goods/addcategory',  //添加分类
          component: resolve => require(['@/views/goods/goodscategory/AddCategory'], resolve)
        },
        {
          path: '/goods/type',  //商品类型
          component: resolve => require(['@/views/goods/goodstype/Type'], resolve)
        },
        {
          path: '/goods/brand',  //品牌管理
          component: resolve => require(['@/views/goods/goodsbrand/Brand'], resolve)
        },
        {
          path: '/goods/addBrand',  //添加品牌
          component: resolve => require(['@/views/goods/goodsbrand/AddBrand'], resolve)
        },
        {
          path: '/goods/image',  //图片库管理
          component: resolve => require(['@/views/goods/goodsimage/Image'], resolve)
        },
        {
          path: '/users/usersList',  //用户列表
          component: resolve => require(['@/views/users/UserList'], resolve)
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
