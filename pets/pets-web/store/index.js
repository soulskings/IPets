// 全服务初始化
export const actions = {
  nuxtServerInit (store, { req, params, route, app }) {
    // 服务端获取token、全局公用信息同步store
    const token = app.$cookies.get('token')

    store.dispatch('user/setToken', token)
  }
}
