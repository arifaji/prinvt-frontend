import Vue from 'vue'
import Vuex from 'vuex'
const _ = require('lodash')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allLoading: [],
    sidebarOpen: false
  },
  mutations: {
    // this.$store.commit('setItem', { key: 'form', object: this.form });
    setItem(state, obj) {
      state[obj.key] = obj.object
    },
    removeItem(state, key) {
      delete state[key]
    },
    setLoading(state) {
      state.allLoading.push('load')
    },
    removeLoading(state) {
      if (state.allLoading.length > 0) {
        state.allLoading.pop()
      }
    }
  },
  getters: {
    getItem: (state) => (key) => {
      return _.get(state, key)
    },
    isLoading (state) {
      if (state.allLoading.length === 0) {
        return false
      }
      return true
    }
  }
})