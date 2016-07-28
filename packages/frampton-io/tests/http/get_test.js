import get from 'frampton-io/http/get';

QUnit.module('Frampton.IO.Http.get');

QUnit.test('Should return an task of a response', function(assert) {
  const done = assert.async();
  const req = get('get_test');
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
