import storage from 'frampton-io/http/storage';

QUnit.module('Frampton.IO.Http.storage');

QUnit.test('get method should return null for missing value', function(assert) {
  equal(storage().get('storage_test'), null);
});

QUnit.test('set method should correctly set value', function(assert) {
  storage().set('storage_test', 5);
  equal(storage().get('storage_test'), 5);
});