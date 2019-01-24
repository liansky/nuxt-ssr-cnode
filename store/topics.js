/**
 * 主题列表
 */
import { fetch } from '../plugins/axios'
import api from '../api/api-conf'

export const state = () => {
  return {
    ask: [],
    share: [],
    job: [],
    good: [],
    dev: []
  }
}


export const mutations = {
  updateTopics (state, payload) {
    if (payload && payload.type && state[payload.type]) {
      state[payload.type] = payload.list
    }
  }
}

export const actions = {
  fetchTopics ({ commit }, params) {
    return fetch(api.topics, {
      type: 'get',
      params: params
    })
      .then(res => {
        commit('updateTopics', {
          type: params.tab || 'share',
          list: res.data
        })
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
