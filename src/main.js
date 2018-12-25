import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/iconfont.css'


import ElementUI from 'element-ui';
import { Message } from 'element-ui'
import 'styles/element-variables.scss';

Vue.use(ElementUI);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  //如果没有用户信息，就要判断
  if (!(localStorage.getItem('userInfo')) || !store.state.userInfo) {
    // 是登录页就显示
    if (to.path == '/login') {
      next();
    } else {  // 不是登录页就提示登录失效
      Message.error('登录过期')
      router.replace('/')
    }
  } else {  // 如果有用户信息，就根据router获取activeNav
    let activeNav = to.path.split('/')[1] ? to.path.split('/')[1] : 'index'
    store.commit('ACTIVE_NAV', activeNav);
    next();
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
