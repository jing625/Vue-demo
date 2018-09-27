// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false


var store = new Vuex.Store({
  state: {
    num: 88
  },
  mutations: {
    increase(state) {
      state.num++
    },
    decrease(state) {
      state.num = state.num - 20
    }
  },
  actions: {
    increaseAction: function (context) {
      context.commit('increase')
    },
    decreaseAction: function (context) {
      context.commit('decrease')
    }
  },
  getters: {
    getNum(state) {
      return state.num > 0 ? state.num : 0
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
