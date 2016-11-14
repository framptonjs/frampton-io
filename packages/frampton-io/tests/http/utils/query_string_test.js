import queryString from 'frampton-io/http/utils/query_string';

QUnit.module('Frampton.IO.Http.Utils.queryString');

QUnit.test('creates query string from object', function(assert) {
  const params = { one : 1, two : 2, three : 'three three' };
  const actual = queryString(params);
  const expected = 'one=1&two=2&three=three+three';
  assert.equal(actual, expected);
});

QUnit.test('handles array values', function(assert) {
  const params = { one : 1, two : 2, three : [1, 2, 3] };
  const actual = queryString(params);
  const expected = 'one=1&two=2&three%5B%5D=1&three%5B%5D=2&three%5B%5D=3';
  assert.equal(actual, expected);
});

QUnit.test('handles nested objects', function(assert) {
  const params = { one : 1, two : 2, three : { one : 1, two : 2, three : 3} };
  const actual = queryString(params);
  const expected = 'one=1&two=2&three%5Bone%5D=1&three%5Btwo%5D=2&three%5Bthree%5D=3';
  assert.equal(actual, expected);
});

QUnit.test('discards empty arrays', function(assert) {
  const params = { one : 1, two : 2, three : [] };
  const actual = queryString(params);
  const expected = 'one=1&two=2';
  assert.equal(actual, expected);
});
