export default ({ route, store }, next) => {
  console.log('middlleware')
  next()
}
