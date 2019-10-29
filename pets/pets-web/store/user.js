import { removeCookie, setCookie } from '../plugins/cache'

/**
 * 用户信息
 */

export const state = () => {
  return {
    token: ''
  }
}

export const mutations = {
  updateToken (state, token) {
    state.token = token
  },

  deleteToken (state) {
    state.token = ''
  }
}


export const actions = {
  setToken ({ commit }, params) {
    if (process.client) {
      setCookie('token', params)
    }
    commit('updateToken', params)
  },

  deleteToken ({ commit }) {
    if (process.client) {
      removeCookie('token')
    }
    commit('deleteToken')
  }
}


