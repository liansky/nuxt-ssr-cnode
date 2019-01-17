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

export default {
  appHost: host.appHost
}
