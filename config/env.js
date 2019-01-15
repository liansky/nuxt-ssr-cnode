const environment = process.env
const isDevMode = Object.is(environment.NODE_ENV, 'development')
const isProdMode = Object.is(environment.NODE_ENV, 'production')

const isServer = process && process.server
const isClient = process && process.client

module.exports = {
  isDevMode,
  isProdMode,
  environment,
  isClient,
  isServer
}
