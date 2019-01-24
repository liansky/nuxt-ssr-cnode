/**
 * 用户信息
 */
import { fetch } from '../plugins/axios'
import api from '../api/api-conf'

export const state = () => {
  return {
    token: '',
    userInfo: {
      avatar_url: '',
      create_at: '',
      githubUsername: '',
      loginname: '',
      recent_replies: [],
      recent_topics: [],
      score: 0
    }
  }
}



export const mutations = {
  updateToken (state, token) {
    state.token = token
  },

  updateUserInfo (state, payload) {
    state.userInfo = payload
  }
}


export const actions = {
  setToken ({ commit }, params) {
    commit('updateToken', params)
  },

  fetchUserInfo ({ commit }, params) {
    return fetch(api.userInfo + '/lianhg123', {
      type: 'get'
    })
      .then(res => {
        commit('updateUserInfo', res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}


