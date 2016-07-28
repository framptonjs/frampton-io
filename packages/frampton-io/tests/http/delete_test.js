import deleteReq from 'frampton-io/http/delete';

QUnit.module('Frampton.IO.Http.delete');

QUnit.test('Should return an task of a response', function(assert) {
  const done = assert.async();
  const req = deleteReq('get_test');
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
