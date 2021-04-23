import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: ''
  },
  mutations: {
    userId(state, id) {
      state.userId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
