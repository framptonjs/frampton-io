import queryEscape from 'frampton-io/http/utils/query_escape';

QUnit.module('Frampton.IO.Http.Utils.queryEscape');

QUnit.test('should correctly escape spaces', function() {
  const params = 'some thing';
  equal(queryEscape(params), 'some+thing');
});