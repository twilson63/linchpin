var test = require('tap').test;
var pin1 = require('../');
var pin2 = require('../');

test('pin1 can emit to pin2', function(t) {
  pin2.on('foo', function(d) {
    t.equals(d, 'bar');
    t.end();
  });

  pin1.emit('foo', 'bar');

});

test('pin1 can emit to pin2 via wildcards', function(t) {
  pin2.on(['foo','*'], function(d) {
    t.equals(d, 'bar');
    t.end();
  });

  pin1.emit('foo/baz', 'bar');

});
