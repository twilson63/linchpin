var EventEmitter2 = require('eventemitter2').EventEmitter2, _ref;
var linchpin = new EventEmitter2({
  wildcard: true,
  delimiter: '/',
  maxListeners: 20,
});

module.exports = (_ref = global.linchpin) != null ? _ref : global.linchpin = linchpin;
