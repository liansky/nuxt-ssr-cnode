let host = process.env.host

// 开发环境客户端请求 api 代理
if (process.env.NODE_ENV === 'development') {
  let proxyTable = host.proxyTable

  for (let key in proxyTable) {
    if (process.client && proxyTable[key].targetHost && host[proxyTable[key].targetHost] !== '') {
      host[proxyTable[key].targetHost] = key
    }
  }
}

export default {
  appHost: host.appHost
}
