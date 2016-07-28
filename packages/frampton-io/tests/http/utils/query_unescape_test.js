import queryUnescape from 'frampton-io/http/utils/query_unescape';

QUnit.module('Frampton.IO.Http.Utils.queryUnescape');

QUnit.test('should correctly unescape spaces', function(assert) {
  const params = 'some+thing';
  const actual = queryUnescape(params);
  const expected = 'some thing';
  assert.equal(actual, expected);
});
