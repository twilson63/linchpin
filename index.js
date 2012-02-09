(function() {
  var Linchpin, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Linchpin = (function(_super) {

    __extends(Linchpin, _super);

    function Linchpin() {
      this.setMaxListeners(0);
    }

    return Linchpin;

  })(require('events').EventEmitter);

  module.exports = (_ref = global.linchpin) != null ? _ref : global.linchpin = new Linchpin;

}).call(this);
