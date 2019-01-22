// 全服务初始化
export const actions = {
  nuxtServerInit (store, { req, params, route, app }) {
    // 服务端获取token同步store
    let accesstoken = app.$cookies.get('token') || 'b5c58ba4-cfa8-4cf4-b0da-81237b02d278'
    store.dispatch('user/setToken', accesstoken)
  }
}

