class Linchpin extends require('events').EventEmitter
  constructor: -> @setMaxListeners(0)

module.exports = global.linchpin ?= new Linchpin
