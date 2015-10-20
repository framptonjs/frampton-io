import activity from 'frampton-io/http/activity';
import get from 'frampton-io/http/get';
import complete from 'frampton-io/complete';

QUnit.module('Frampton.IO.Http.activity');

QUnit.test('should indicate if there is network activity', function(assert) {

  var done = assert.async();
  var count = 0;
  var num = 3;

  var un_sub = activity().changes((val) => {
    if (count === 0) {
      equal(val, false);
      count++;
    } else if (count === 1) {
      equal(val, true);
      count++;
    } else if (count === 2) {
      equal(val, false);
      equal(num, 0);
      un_sub();
      done();
    }
  });

  complete(get('activity_test_1')).next(() => ( num-- ));
  complete(get('activity_test_2')).next(() => ( num-- ));
  complete(get('activity_test_3')).next(() => ( num-- ));
});