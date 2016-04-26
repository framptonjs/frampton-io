import queryPair from 'frampton-io/http/utils/query_pair';

QUnit.module('Frampton.IO.Http.Utils.queryPair');

QUnit.test('should combine pair of strings to string', function() {
  const params = ['key', 'value'];
  equal(queryPair(params), 'key=value');
});