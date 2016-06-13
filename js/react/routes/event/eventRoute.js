module.exports = {
  path: 'evento',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./eventListPage'))
    })
  }
}
