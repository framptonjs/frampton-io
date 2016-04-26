import read from 'frampton-io/file/read';

QUnit.module('Frampton.IO.File.read');

QUnit.test('Should return an task of a response', function(assert) {
  var done = assert.async();
  var req = read('DATA_URL', 'test');
  req.run({
    reject : (err) => {
      ok(false, 'returned error');
    },
    resolve : (val) => {
      if (val.status === 'success') {
        ok(true);
        done();
      }
    }
  });
});