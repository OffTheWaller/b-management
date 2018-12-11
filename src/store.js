import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNav: 'index'
  },
  getters: {
    activeNav: state => state.activeNav
  },
  mutations: {
    ACTIVE_NAV (state,value) {
      state.activeNav = value;
    }
  },
  actions: {

  }
})
