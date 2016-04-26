import queryUnescape from 'frampton-io/http/utils/query_unescape';

QUnit.module('Frampton.IO.Http.Utils.queryUnescape');

QUnit.test('should correctly unescape spaces', function() {
  const params = 'some+thing';
  equal(queryUnescape(params), 'some thing');
});