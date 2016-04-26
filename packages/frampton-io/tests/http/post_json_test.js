import postJson from 'frampton-io/http/post_json';

QUnit.module('Frampton.IO.Http.postJson');

QUnit.test('should return an Task of a response', function(assert) {
  const done = assert.async();
  const req = postJson('post_json_test', { test : 'test' });
  req.run({
    reject : (err) => {
      ok(false);
      done();
    },
    resolve : (val) => {
      if (val.status === 'success') {
        ok(true);
        done();
      }
    }
  });
});