export default {
  namespaced: true,
  state: {
    init: false,
    swiper_list: [],
    share: {},
    code: '',
    openid: 'ooudq1DS8hyNP1TmxiUkw2cOQ2xI',
    perfect: false,
    userInfo: {}
  },
  mutations: {
    setState(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    setState({ commit }, data) {
      commit('setState', data)
    }
  }
}
