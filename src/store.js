import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNav: 'index',
    userInfo: localStorage.getItem('userInfo') || ''

  },
  getters: {
    activeNav: state => state.activeNav
  },
  mutations: {
    ACTIVE_NAV (state,value) {
      state.activeNav = value;
    },
    SET_USERINFO (state, value) {
      state.userInfo = value;
      localStorage.setItem('userInfo',value);
    }
  },
  actions: {

  }
})
