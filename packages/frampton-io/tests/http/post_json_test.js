import postJson from 'frampton-io/http/post_json';

QUnit.module('Frampton.IO.Http.postJson');

QUnit.test('should return an EventStream of a response', function(assert) {
  var done = assert.async();
  var req = postJson('test', { test : 'test' });
  req.next((val) => {
    if (val.status === 'complete') {
      ok(true);
      done();
    }
  });
});