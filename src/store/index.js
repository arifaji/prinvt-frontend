import Vue from 'vue'
import Vuex from 'vuex'
const _ = require('lodash')
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
    setItem(state, obj) {
      state[obj.key] = obj.object
    },
    removeItem(state, key) {
      delete state[key]
    }
  },
  getters: {
    getItem: (state) => (key) => {
      return _.get(state, key)
    }
  }
})