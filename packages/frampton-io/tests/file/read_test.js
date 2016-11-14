import read from 'frampton-io/file/read';

QUnit.module('Frampton.IO.File.read');

QUnit.test('returns an task of a response', function(assert) {
  const done = assert.async();
  const req = read('DATA_URL', 'test');
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
