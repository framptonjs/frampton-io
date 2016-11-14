import send from 'frampton-io/http/send';
import Request from 'frampton-io/http/request';
import defaultSettings from 'frampton-io/http/utils/default_settings';

QUnit.module('Frampton.IO.Http.send');

QUnit.test('returns a task of a response', function(assert) {
  const done = assert.async();
  const req = send(defaultSettings, Request('send_test'));
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
