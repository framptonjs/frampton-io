import url from 'frampton-io/http/utils/url';

QUnit.module('Frampton.IO.Http.Utils.url');

QUnit.test('should return url for domain and object of params', function() {
  const params = { one : 1, two : 2, three : 3 };
  const domain = 'http://www.test.com';
  equal(url(domain, params), 'http://www.test.com?one=1&two=2&three=3');
});

QUnit.test('return url with correctly encoded spaces', function() {
  const params = { one : 1, two : 2, three : 'three three' };
  const domain = 'http://www.test.com';
  equal(url(domain, params), 'http://www.test.com?one=1&two=2&three=three+three');
});