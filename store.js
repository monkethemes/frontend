import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isLoggedIn: false,
    user: null,
    notifications: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = !!user
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const res = await axios.get('https://monkethemes.com/api/user', { withCredentials: true })
        commit('SET_USER', res.data)
      } catch (err) {
        commit('SET_USER', null)
      }
    },
  }
})
