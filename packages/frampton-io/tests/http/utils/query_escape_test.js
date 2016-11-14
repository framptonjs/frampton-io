import queryEscape from 'frampton-io/http/utils/query_escape';

QUnit.module('Frampton.IO.Http.Utils.queryEscape');

QUnit.test('correctly escapes spaces', function(assert) {
  const params = 'some thing';
  const actual = queryEscape(params);
  const expected = 'some+thing';
  assert.equal(actual, expected);
});
