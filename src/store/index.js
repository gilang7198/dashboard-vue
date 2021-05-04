import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from "./sidebar"
import auth from "./auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    side: sidebar,
    auth,
  }
})
