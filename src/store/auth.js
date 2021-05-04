const Types = {
  SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
}

const state = () => ({
  isLoggedIn: localStorage.getItem('isLogin') || false,
})

const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  },
}

const mutations = {
  [Types.SET_IS_LOGGED_IN]: (state, payload) => (state.isLoggedIn = payload),
}

const actions = {
  async setIsLoggedIn({ commit, dispatch }, payload) {
    // const {data: response } = await this.axios.post('login', {
    //   pass: payload.pass,
    //   email: payload.email
    // })
    // if (response.success) {
    //   console.log("succes")
    // } else {
    //   console.log("failed")
    // }
    this.localStorage.setItem('isLogin', true)
    dispatch('sidebar/setCollapse', false)
    await commit(Types.SET_IS_LOGGED_IN, payload)
  },
  setIsLoggedInToFooBar({ commit }) {
    const foo = "foobar"
    commit(Types.SET_IS_LOGGED_IN, foo)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}