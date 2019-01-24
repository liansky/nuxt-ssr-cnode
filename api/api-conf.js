let host = process.env.host

// 开发环境客户端请求 api 代理
if (process.env.NODE_ENV === 'development') {
  let proxyTable = host.proxyTable

  for (let key in proxyTable) {
    let targetHost = proxyTable[key].targetHost
    if (process.client && targetHost && host[targetHost] !== '') {
      host[targetHost] = key
    }
  }
}

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

export default {
  appHost: host.appHost,
  topics: `${host.appHost}/api/v1/topics`, // 主题首页
  topicDetail: `${host.appHost}/api/v1/topic`, // 主题详情
  creatTopic: `${host.appHost}/api/v1/topics`, // 新建主题
  updateTopic: `${host.appHost}/api/v1/update`, // 编辑主题
  userInfo: `${host.appHost}/api/v1/user`, // 用户详情
  collect: `${host.appHost}/api/v1/topic_collect/collect`, // 收藏主题
  deCollect: `${host.appHost}/api/v1/topic_collect/de_collect`, // 取消主题
  allTopicCollect: `${host.appHost}/api/v1/topic_collect` // 用户所收藏的主题
}
