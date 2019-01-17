const _ = require('lodash')
const environment = process.env
const isDevMode = Object.is(environment.NODE_ENV, 'development')
const isProdMode = Object.is(environment.NODE_ENV, 'production')

let mapEnv = _.startsWith(environment.NODE_ENV, 'test') ? 'test' : environment.NODE_ENV
let testNum = _.words(environment.NODE_ENV)[1] || ''

const map = {
  development: {
    port: 3000,
    proxyTable: {
      '/APP': {
        targetHost: 'appHost',
        target: 'https://cnodejs.org',
        pathRewrite: { '^/APP': '' }
      }
    },
    staticHost: `https://cnodejs.org`,
    appHost: `https://cnodejs.org`
  },

  test: {
    staticHost: `http://test${testNum}cnodejs.org`,
    appHost: `http://test${testNum}cnodejs.org`
  },

  production: {
    staticHost: 'https://staic.cnodejs.org',
    appHost: 'https://cnodejs.org'
  },

  beta: {
    staticHost: 'https://betacnodejs.org',
    appHost: 'https://betacnodejs.org'
  },

  gray: {
    staticHost: 'https://betacnodejs.org',
    appHost: 'https://betacnodejs.org'
  },

  alpha: {
    staticHost: 'https://alphacnodejs.org',
    appHost: 'https://alphacnodejs.org'
  }
}


module.exports = {
  isDevMode,
  isProdMode,
  host: map[mapEnv]
}
