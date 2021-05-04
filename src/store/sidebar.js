const Types = {
  SET_COLLAPSE: 'SET_COLLAPSE',
}

const state = () => ({
  collapse: false,
})

const getters = {
  collapseData(state) {
    return state.collapse
  },
}

const mutations = {
  [Types.SET_COLLAPSE]: (state, payload) => (state.collapse = payload),
}

const actions = {
  setCollapse({ commit }, payload) {
    commit(Types.SET_COLLAPSE, payload)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}