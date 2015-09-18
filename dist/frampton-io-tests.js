(function() {
/*globals Frampton:true */
var define, require;
var global = this;

(function() {

  if (typeof Frampton === 'undefined') {
    throw new Error('Frampton is undefined');
  };

  define = Frampton.__loader.define;
  require = Frampton.__loader.require;

}());
define("frampton-io.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/complete.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/error.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/array_buffer.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/binary_string.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/data_url.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/read.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/read_api.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/file/text.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/ajax_api.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/get.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/get_newest.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/index.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/patch.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/post.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/put.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/query_escape.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/query_pair.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/query_unescape.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/request.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/send.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/upload.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/upload_many.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/uri_decode.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/uri_encode.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/http/url.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/is_complete.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/is_error.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/is_start.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/progress.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/response.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define("frampton-io/start.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/file/read_test', ['exports', 'frampton-io/file/read'], function (exports, _framptonIoFileRead) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _read = _interopRequireDefault(_framptonIoFileRead);

  QUnit.module('Frampton.IO.File.read');

  QUnit.test('should return an EventStream of a response', function (assert) {
    var done = assert.async();
    var req = _read['default']('DATA_URL', 'test');
    req.next(function (val) {
      if (val.status === 'complete') {
        ok(true);
        done();
      }
    });
  });
});
define("frampton-io/tests/file/read_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/get_test', ['exports', 'frampton-io/http/get'], function (exports, _framptonIoHttpGet) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _get = _interopRequireDefault(_framptonIoHttpGet);

  QUnit.module('Frampton.IO.Http.get');

  QUnit.test('should return an EventStream of a response', function (assert) {
    var done = assert.async();
    var req = _get['default']('test');
    req.next(function (val) {
      if (val.status === 'complete') {
        ok(true);
        done();
      }
    });
  });
});
define("frampton-io/tests/http/get_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/post_test', ['exports', 'frampton-io/http/post'], function (exports, _framptonIoHttpPost) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _post = _interopRequireDefault(_framptonIoHttpPost);

  QUnit.module('Frampton.IO.Http.post');

  QUnit.test('should return an EventStream of a response', function (assert) {
    var done = assert.async();
    var req = _post['default']('test', {});
    req.next(function (val) {
      if (val.status === 'complete') {
        ok(true);
        done();
      }
    });
  });
});
define("frampton-io/tests/http/post_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/query_escape_test', ['exports', 'frampton-io/http/query_escape'], function (exports, _framptonIoHttpQuery_escape) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryEscape = _interopRequireDefault(_framptonIoHttpQuery_escape);

  QUnit.module('Frampton.IO.Http.queryEscape');

  QUnit.test('should correctly escape spaces', function () {
    var params = 'some thing';
    equal(_queryEscape['default'](params), 'some+thing');
  });
});
define("frampton-io/tests/http/query_escape_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/query_pair_test', ['exports', 'frampton-io/http/query_pair'], function (exports, _framptonIoHttpQuery_pair) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryPair = _interopRequireDefault(_framptonIoHttpQuery_pair);

  QUnit.module('Frampton.IO.Http.queryPair');

  QUnit.test('should combine pair of strings to string', function () {
    var params = ['key', 'value'];
    equal(_queryPair['default'](params), 'key=value');
  });
});
define("frampton-io/tests/http/query_pair_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/query_unescape_test', ['exports', 'frampton-io/http/query_unescape'], function (exports, _framptonIoHttpQuery_unescape) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _queryUnescape = _interopRequireDefault(_framptonIoHttpQuery_unescape);

  QUnit.module('Frampton.IO.Http.queryUnescape');

  QUnit.test('should correctly unescape spaces', function () {
    var params = 'some+thing';
    equal(_queryUnescape['default'](params), 'some thing');
  });
});
define("frampton-io/tests/http/query_unescape_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/send_test', ['exports', 'frampton-io/http/send', 'frampton-io/http/request'], function (exports, _framptonIoHttpSend, _framptonIoHttpRequest) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _send = _interopRequireDefault(_framptonIoHttpSend);

  var _Request = _interopRequireDefault(_framptonIoHttpRequest);

  QUnit.module('Frampton.IO.Http.send');

  QUnit.test('should return an EventStream of a response', function (assert) {
    var done = assert.async();
    var req = _send['default'](null, _Request['default']('test'));
    req.next(function (val) {
      if (val.status === 'complete') {
        ok(true);
        done();
      }
    });
  });
});
define("frampton-io/tests/http/send_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/upload_test', ['exports', 'frampton-io/http/upload'], function (exports, _framptonIoHttpUpload) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _upload = _interopRequireDefault(_framptonIoHttpUpload);

  QUnit.module('Frampton.IO.Http.upload');

  QUnit.test('should return an EventStream of a response', function (assert) {
    var done = assert.async();
    var req = _upload['default']('test', 'test data');
    req.next(function (val) {
      if (val.status === 'complete') {
        ok(true);
        done();
      }
    });
  });
});
define("frampton-io/tests/http/upload_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/http/url_test', ['exports', 'frampton-io/http/url'], function (exports, _framptonIoHttpUrl) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _url = _interopRequireDefault(_framptonIoHttpUrl);

  QUnit.module('Frampton.IO.Http.url');

  QUnit.test('should return url for domain and object of params', function () {
    var params = { one: 1, two: 2, three: 3 };
    var domain = 'http://www.test.com';
    equal(_url['default'](domain, params), 'http://www.test.com?one=1&two=2&three=3');
  });

  QUnit.test('return url with correctly encoded spaces', function () {
    var params = { one: 1, two: 2, three: 'three three' };
    var domain = 'http://www.test.com';
    equal(_url['default'](domain, params), 'http://www.test.com?one=1&two=2&three=three+three');
  });
});
define("frampton-io/tests/http/url_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/is_complete_test', ['exports', 'frampton-io/is_complete', 'frampton-io/response'], function (exports, _framptonIoIs_complete, _framptonIoResponse) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isComplete = _interopRequireDefault(_framptonIoIs_complete);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  QUnit.module('Frampton.IO.isComplete');

  QUnit.test('should return true for complete response', function () {
    var response = _Response['default']('complete', 1, null);
    ok(_isComplete['default'](response));
  });

  QUnit.test('should return false for incomplete response', function () {
    var response = _Response['default']('progress', 0.5, null);
    notOk(_isComplete['default'](response));
  });
});
define("frampton-io/tests/is_complete_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
define('frampton-io/tests/is_error_test', ['exports', 'frampton-io/is_error', 'frampton-io/response'], function (exports, _framptonIoIs_error, _framptonIoResponse) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _isError = _interopRequireDefault(_framptonIoIs_error);

  var _Response = _interopRequireDefault(_framptonIoResponse);

  QUnit.module('Frampton.IO.isError');

  QUnit.test('should return true for error response', function () {
    var response = _Response['default']('error', 0, null);
    ok(_isError['default'](response));
  });

  QUnit.test('should return false for complete response', function () {
    var response = _Response['default']('complete', 1, null);
    notOk(_isError['default'](response));
  });
});
define("frampton-io/tests/is_error_test.jshint", ["exports"], function (exports) {
  "use strict";

  undefined;
});
})();