import cached from 'frampton-io/http/cached';

QUnit.module('Frampton.IO.Http.cached');

QUnit.test('should return an EventStream of a response', function(assert) {
  var done = assert.async();
  var req = cached('cache_test');
  req.next((val) => {
    if (val.status === 'complete') {
      ok(true);
      done();
    }
  });
});