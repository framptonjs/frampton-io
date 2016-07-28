import url from 'frampton-io/http/utils/url';

QUnit.module('Frampton.IO.Http.Utils.url');

QUnit.test('should return url for domain and object of params', function(assert) {
  const params = { one : 1, two : 2, three : 3 };
  const domain = 'http://www.test.com';
  const actual = url(domain, params);
  const expected = 'http://www.test.com?one=1&two=2&three=3';
  assert.equal(actual, expected);
});

QUnit.test('return url with correctly encoded spaces', function(assert) {
  const params = { one : 1, two : 2, three : 'three three' };
  const domain = 'http://www.test.com';
  const actual = url(domain, params);
  const expected = 'http://www.test.com?one=1&two=2&three=three+three';
  assert.equal(actual, expected);
});
