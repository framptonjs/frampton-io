import queryPair from 'frampton-io/http/utils/query_pair';

QUnit.module('Frampton.IO.Http.Utils.queryPair');

QUnit.test('should combine pair of strings to string', function(assert) {
  const params = ['key', 'value'];
  const actual = queryPair(params);
  const expected = 'key=value';
  assert.equal(actual, expected);
});
