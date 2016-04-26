import upload from 'frampton-io/http/upload';

QUnit.module('Frampton.IO.Http.upload');

QUnit.test('Should return an task of a response', function(assert) {
  const done = assert.async();
  const req = upload('upload_test', 'test data');
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