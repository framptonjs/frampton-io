import queryString from 'frampton-io/http/utils/query_string';

QUnit.module('Frampton.IO.Http.Utils.queryString');

QUnit.test('should create query string from object', function() {
  const params = { one : 1, two : 2, three : 'three three' };
  equal(queryString(params), 'one=1&two=2&three=three+three');
});

QUnit.test('should handle array values', function() {
  const params = { one : 1, two : 2, three : [1, 2, 3] };
  equal(queryString(params), 'one=1&two=2&three%5B%5D=1&three%5B%5D=2&three%5B%5D=3');
});

QUnit.test('should handle nested objects', function() {
  const params = { one : 1, two : 2, three : { one : 1, two : 2, three : 3} };
  equal(queryString(params), 'one=1&two=2&three%5Bone%5D=1&three%5Btwo%5D=2&three%5Bthree%5D=3');
});

QUnit.test('should discard empty arrays', function() {
  const params = { one : 1, two : 2, three : [] };
  equal(queryString(params), 'one=1&two=2');
});