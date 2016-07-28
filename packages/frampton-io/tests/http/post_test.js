import post from 'frampton-io/http/post';

QUnit.module('Frampton.IO.Http.post');

QUnit.test('Should return an task of a response', function(assert) {
  const done = assert.async();
  const req = post('test', {});
  req.run({
    reject : (err) => {
      assert.ok(false, 'returned error');
    },
    resolve : (val) => {
      if (val.status === 'success') {
        assert.ok(true);
        done();
      }
    }
  });
});
