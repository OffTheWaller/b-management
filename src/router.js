import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'homeSystem',
          name: 'homeSystem',
          component: resolve => require(['@/views/home/HomeSystem'],resolve)
        },
        {
          path: 'accountSetting',
          name: 'accountSetting',
          component: resolve => require(['@/views/home/AccountSetting'],resolve)
        },
        {
          path: 'systemInfo',
          name: 'systemInfo',
          component: resolve => require(['@/views/home/SystemInfo'],resolve)
        },
        {
          path: 'loginLog',
          name: 'loginLog',
          component: resolve => require(['@/views/home/LoginLog'],resolve)
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
