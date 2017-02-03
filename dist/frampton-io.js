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
define('frampton-io', ['frampton/namespace', 'frampton-io/response', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/delete', 'frampton-io/http/put', 'frampton-io/http/patch', 'frampton-io/http/get', 'frampton-io/http/post', 'frampton-io/http/post_json', 'frampton-io/http/post_string', 'frampton-io/http/upload', 'frampton-io/http/utils/url', 'frampton-io/http/utils/query_pair', 'frampton-io/http/utils/query_escape', 'frampton-io/http/utils/query_string', 'frampton-io/http/utils/uri_encode', 'frampton-io/http/utils/uri_decode', 'frampton-io/file/read', 'frampton-io/file/data_url', 'frampton-io/file/binary_string', 'frampton-io/file/array_buffer', 'frampton-io/file/text'], function (_namespace, _response, _request, _send, _delete, _put, _patch, _get, _post, _post_json, _post_string, _upload, _url, _query_pair, _query_escape, _query_string, _uri_encode, _uri_decode, _read, _data_url, _binary_string, _array_buffer, _text) {
  'use strict';

  var _namespace2 = _interopRequireDefault(_namespace);

  var _response2 = _interopRequireDefault(_response);

  var _request2 = _interopRequireDefault(_request);

  var _send2 = _interopRequireDefault(_send);

  var _delete2 = _interopRequireDefault(_delete);

  var _put2 = _interopRequireDefault(_put);

  var _patch2 = _interopRequireDefault(_patch);

  var _get2 = _interopRequireDefault(_get);

  var _post2 = _interopRequireDefault(_post);

  var _post_json2 = _interopRequireDefault(_post_json);

  var _post_string2 = _interopRequireDefault(_post_string);

  var _upload2 = _interopRequireDefault(_upload);

  var _url2 = _interopRequireDefault(_url);

  var _query_pair2 = _interopRequireDefault(_query_pair);

  var _query_escape2 = _interopRequireDefault(_query_escape);

  var _query_string2 = _interopRequireDefault(_query_string);

  var _uri_encode2 = _interopRequireDefault(_uri_encode);

  var _uri_decode2 = _interopRequireDefault(_uri_decode);

  var _read2 = _interopRequireDefault(_read);

  var _data_url2 = _interopRequireDefault(_data_url);

  var _binary_string2 = _interopRequireDefault(_binary_string);

  var _array_buffer2 = _interopRequireDefault(_array_buffer);

  var _text2 = _interopRequireDefault(_text);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * @name IO
   * @namespace
   * @memberof Frampton
   */
  _namespace2.default.IO = {};
  _namespace2.default.IO.VERSION = '0.1.4';
  _namespace2.default.IO.Response = _response2.default;

  /**
   * @name Http
   * @memberof Frampton.IO
   * @namespace
   */
  _namespace2.default.IO.Http = {};
  _namespace2.default.IO.Http.Request = _request2.default;
  _namespace2.default.IO.Http.send = _send2.default;
  _namespace2.default.IO.Http.get = _get2.default;
  _namespace2.default.IO.Http.post = _post2.default;
  _namespace2.default.IO.Http.postJson = _post_json2.default;
  _namespace2.default.IO.Http.postString = _post_string2.default;
  _namespace2.default.IO.Http.delete = _delete2.default;
  _namespace2.default.IO.Http.patch = _patch2.default;
  _namespace2.default.IO.Http.put = _put2.default;
  _namespace2.default.IO.Http.upload = _upload2.default;

  /**
   * @name Utils
   * @memberof Frampton.IO.Http
   * @namespace
   */
  _namespace2.default.IO.Http.Utils = {};
  _namespace2.default.IO.Http.Utils.url = _url2.default;
  _namespace2.default.IO.Http.Utils.queryPair = _query_pair2.default;
  _namespace2.default.IO.Http.Utils.queryEscape = _query_escape2.default;
  _namespace2.default.IO.Http.Utils.queryString = _query_string2.default;
  _namespace2.default.IO.Http.Utils.uriEncode = _uri_encode2.default;
  _namespace2.default.IO.Http.Utils.uriDecode = _uri_decode2.default;

  /**
   * @name File
   * @memberof Frampton.IO
   * @namespace
   */
  _namespace2.default.IO.File = {};
  _namespace2.default.IO.File.read = _read2.default;
  _namespace2.default.IO.File.dataUrl = _data_url2.default;
  _namespace2.default.IO.File.binaryString = _binary_string2.default;
  _namespace2.default.IO.File.arrayBuffer = _array_buffer2.default;
  _namespace2.default.IO.File.text = _text2.default;
});
define('frampton-io/file/array_buffer', ['exports', 'frampton-io/file/read'], function (exports, _read) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = array_buffer;

  var _read2 = _interopRequireDefault(_read);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function array_buffer(file) {
    return (0, _read2.default)('ARRAY_BUFFER', file);
  }
});
define('frampton-io/file/binary_string', ['exports', 'frampton-io/file/read'], function (exports, _read) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = binary_string;

  var _read2 = _interopRequireDefault(_read);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function binary_string(file) {
    return (0, _read2.default)('BINARY_STRING', file);
  }
});
define('frampton-io/file/data_url', ['exports', 'frampton-io/file/read'], function (exports, _read) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = data_url;

  var _read2 = _interopRequireDefault(_read);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function data_url(file) {
    return (0, _read2.default)('DATA_URL', file);
  }
});
define('frampton-io/file/read', ['exports', 'frampton-data/task/create', 'frampton-io/response', 'frampton-io/file/read_api'], function (exports, _create, _response, _read_api) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = read_file;

  var _create2 = _interopRequireDefault(_create);

  var _response2 = _interopRequireDefault(_response);

  var _read_api2 = _interopRequireDefault(_read_api);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // read_file :: String -> File -> Task Response
  function read_file(method, file) {

    return (0, _create2.default)(function (sinks) {

      var reader = (0, _read_api2.default)();

      if (sinks.start) {
        reader.addEventListener('loadstart', function (evt) {
          sinks.start((0, _response2.default)('start', 0, null));
        });
      }

      if (sinks.progress) {
        reader.addEventListener('progress', function (evt) {
          sinks.progress((0, _response2.default)('progress', evt.loaded / evt.total, null));
        });
      }

      reader.addEventListener('load', function (evt) {
        sinks.resolve((0, _response2.default)('success', 1, evt.target.result));
      });

      reader.addEventListener('error', function (err) {
        sinks.reject((0, _response2.default)('error', 0, err.message));
      });

      reader.addEventListener('abort', function (evt) {
        sinks.reject((0, _response2.default)('error', 0, 'abort'));
      });

      switch (method) {
        case 'DATA_URL':
          reader.readAsDataURL(file);
          break;

        case 'ARRAY_BUFFER':
          reader.readAsArrayBuffer(file);
          break;

        case 'TEXT':
          reader.readAsText(file);
          break;

        case 'BINARY_STRING':
          reader.readAsBinaryString(file);
          break;
      }
    });
  }
});
define('frampton-io/file/read_api', ['exports', 'frampton/namespace', 'frampton-utils/apply'], function (exports, _namespace, _apply) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ajax;

  var _namespace2 = _interopRequireDefault(_namespace);

  var _apply2 = _interopRequireDefault(_apply);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function MockReader() {
    this.listeners = {};
    this.readTime = Math.random() * 3000 + 300;
    this.progress = 0;
  }

  MockReader.prototype.timeout = 10000;

  MockReader.prototype.read = function () {
    var _this = this;

    this.progressInterval = setInterval(function () {
      if (_this.listeners['progress']) {
        _this.listeners['progress'].forEach(function (next) {
          _this.progress += 15;
          next({
            loaded: _this.progress / _this.readTime * 500,
            total: 500
          });
        });
      }
    }, 20);

    setTimeout(function () {

      if (_this.progressInterval) {
        clearInterval(_this.progressInterval);
        _this.progressInterval = null;
      }

      if (_this.listeners['load']) {
        _this.listeners['load'].forEach(function (next) {
          next({
            target: {
              result: 'test'
            }
          });
        });
      }
    }, this.readTime);

    if (this.listeners['start']) {
      this.listeners['start'].forEach(_apply2.default);
    }
  };

  MockReader.prototype.addEventListener = function (name, callback) {

    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    if (this.listeners[name].indexOf(callback) === -1) {
      this.listeners[name].push(callback);
    }
  };

  MockReader.prototype.readAsDataURL = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsArrayBuffer = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsText = function (file) {
    this.read(file);
  };

  MockReader.prototype.readAsBinaryString = function (file) {
    this.read(file);
  };

  function ajax() {
    if (_namespace2.default.isTest()) {
      return new MockReader();
    } else {
      return new FileReader();
    }
  }
});
define('frampton-io/file/text', ['exports', 'frampton-io/file/read'], function (exports, _read) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = text;

  var _read2 = _interopRequireDefault(_read);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function text(file) {
    return (0, _read2.default)('TEXT', file);
  }
});
define('frampton-io/http/delete', ['exports', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/utils/default_settings'], function (exports, _request, _send, _default_settings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = delete_request;

  var _request2 = _interopRequireDefault(_request);

  var _send2 = _interopRequireDefault(_send);

  var _default_settings2 = _interopRequireDefault(_default_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Returns a task that will perform an HTTP DELETE
   *
   * @name delete
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  function delete_request(url, data) {
    return (0, _send2.default)(_default_settings2.default, (0, _request2.default)(url, 'DELETE', data || null));
  }
});
define('frampton-io/http/get', ['exports', 'frampton-io/http/request', 'frampton-io/http/utils/url', 'frampton-io/http/send', 'frampton-io/http/utils/default_settings'], function (exports, _request, _url, _send, _default_settings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = get_request;

  var _request2 = _interopRequireDefault(_request);

  var _url2 = _interopRequireDefault(_url);

  var _send2 = _interopRequireDefault(_send);

  var _default_settings2 = _interopRequireDefault(_default_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Returns a task that will perform an HTTP GET
   *
   * @name get
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url    Url to send request to
   * @param {Object} [data] Data to send with request. Is encoded and appended to url.
   * @returns {Frampton.Data.Task} A Task of a Response
   */
  function get_request(url, data) {
    return (0, _send2.default)(_default_settings2.default, (0, _request2.default)((0, _url2.default)(url, data)));
  }
});
define('frampton-io/http/patch', ['exports', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/utils/default_settings'], function (exports, _request, _send, _default_settings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = patch_request;

  var _request2 = _interopRequireDefault(_request);

  var _send2 = _interopRequireDefault(_send);

  var _default_settings2 = _interopRequireDefault(_default_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Returns a task that will perform an HTTP PATCH
   *
   * @name patch
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  function patch_request(url, data) {
    return (0, _send2.default)(_default_settings2.default, (0, _request2.default)(url, 'PATCH', data || null));
  }
});
define('frampton-io/http/post', ['exports', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/utils/default_settings'], function (exports, _request, _send, _default_settings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = post_request;

  var _request2 = _interopRequireDefault(_request);

  var _send2 = _interopRequireDefault(_send);

  var _default_settings2 = _interopRequireDefault(_default_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Returns a task that will perform an HTTP POST
   *
   * @name post
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  function post_request(url, data, headers) {
    return (0, _send2.default)(_default_settings2.default, (0, _request2.default)(url, 'POST', data || null, headers || null));
  }
});
define('frampton-io/http/post_json', ['exports', 'frampton-utils/curry', 'frampton-utils/is_object', 'frampton-io/http/post'], function (exports, _curry, _is_object, _post) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _is_object2 = _interopRequireDefault(_is_object);

  var _post2 = _interopRequireDefault(_post);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function post_json(url, data) {

    if ((0, _is_object2.default)(data)) {
      data = JSON.stringify(data);
    }

    return (0, _post2.default)(url, data || null, {
      'Content-Type': 'application/json'
    });
  });
});
define('frampton-io/http/post_string', ['exports', 'frampton-utils/curry', 'frampton-utils/is_object', 'frampton-io/http/post', 'frampton-io/http/utils/query_string'], function (exports, _curry, _is_object, _post, _query_string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _is_object2 = _interopRequireDefault(_is_object);

  var _post2 = _interopRequireDefault(_post);

  var _query_string2 = _interopRequireDefault(_query_string);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function post_string(url, data) {

    if ((0, _is_object2.default)(data)) {
      data = (0, _query_string2.default)(data);
    }

    return (0, _post2.default)(url, data || null, {
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  });
});
define('frampton-io/http/put', ['exports', 'frampton-io/http/request', 'frampton-io/http/send', 'frampton-io/http/utils/default_settings'], function (exports, _request, _send, _default_settings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = put_request;

  var _request2 = _interopRequireDefault(_request);

  var _send2 = _interopRequireDefault(_send);

  var _default_settings2 = _interopRequireDefault(_default_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Returns a task that will perform an HTTP PUT
   *
   * @name put
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url  Url to send request to
   * @param {Object} data Data to send with request
   * @returns {Frampton.Data.Task}
   */
  function put_request(url, data) {
    return (0, _send2.default)(_default_settings2.default, (0, _request2.default)(url, 'PUT', data || null));
  }
});
define('frampton-io/http/request', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Request;
  /**
   * @name Request
   * @method
   * @memberof Frampton.IO.Http
   * @param {String} url            Url to send request to.
   * @param {String} [method='GET'] Http request method to use
   * @param {Object} [data=null]    Data to send with request
   * @param {Object} [headers={}]   Headers to add to request
   * @returns {Object}
   */
  function Request(url, method, data, headers) {
    return {
      url: url,
      timestamp: Date.now(),
      method: method || 'GET',
      body: data || null,
      headers: headers || {}
    };
  }
});
define('frampton-io/http/send', ['exports', 'frampton-utils/error', 'frampton-data/task/create', 'frampton-io/http/utils/ajax_api', 'frampton-io/response'], function (exports, _error, _create, _ajax_api, _response) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = send;

  var _error2 = _interopRequireDefault(_error);

  var _create2 = _interopRequireDefault(_create);

  var _ajax_api2 = _interopRequireDefault(_ajax_api);

  var _response2 = _interopRequireDefault(_response);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Perform an AJAX request and return an EventStream that reports the progress.
   *
   * @name send
   * @method
   * @memberof Frampton.IO.Http
   * @param {Object} settings A hash of general settings for the request
   * @param {Object} request  A hash describing the request to be made
   * @returns {Frampton.Task} An EventStream of Response objects
   */
  function send(settings, request) {

    var xhr = (0, _ajax_api2.default)();

    return (0, _create2.default)(function (sinks) {

      xhr.open(request.method, request.url, true);

      if (sinks.start) {
        xhr.addEventListener('loadstart', function (evt) {
          sinks.start((0, _response2.default)('start', 0, null));
        });
      }

      if (sinks.progress) {
        xhr.addEventListener('progress', function (evt) {
          var progress = (evt.loaded || evt.position) / (evt.total || evt.totalSize);
          progress = progress === Infinity ? 100 : progress;
          sinks.progress((0, _response2.default)('progress', progress, null));
        });
      }

      xhr.addEventListener('error', function (err) {
        (0, _error2.default)('Processing ' + request.method + ' for: ' + request.url);
        sinks.reject((0, _response2.default)('error', 0, err.message));
      });

      xhr.addEventListener('timeout', function (err) {
        (0, _error2.default)('Timeout ' + request.method + ' for: ' + request.url);
        sinks.reject((0, _response2.default)('error', 0, 'timeout'));
      });

      xhr.addEventListener('load', function (evt) {

        var target = evt.target;
        var response;

        try {
          response = JSON.parse(target.response);
        } catch (e) {
          response = target.response;
        }

        if (target.status >= 200 && target.status < 300) {
          sinks.resolve((0, _response2.default)('success', 1, response));
        } else {
          (0, _error2.default)('Non-200 response ' + request.method + ' for: ' + request.url);
          sinks.reject((0, _response2.default)('error', 0, response));
        }
      });

      for (var key in request.headers) {
        xhr.setRequestHeader(key, request.headers[key]);
      }

      xhr.timeout = settings.timeout;

      xhr.send(request.body);
    });
  }
});
define('frampton-io/http/upload', ['exports', 'frampton-utils/curry', 'frampton-io/http/post'], function (exports, _curry, _post) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _post2 = _interopRequireDefault(_post);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function upload(url, file) {
    var formData = new FormData();
    formData.append('file-0', file);
    return (0, _post2.default)(url, formData);
  });
});
define('frampton-io/http/upload_many', ['exports', 'frampton-utils/curry', 'frampton-io/http/post'], function (exports, _curry, _post) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _post2 = _interopRequireDefault(_post);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function upload(url, files) {
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('file-' + i, files[i]);
    }
    return (0, _post2.default)(url, formData);
  });
});
define('frampton-io/http/utils/ajax_api', ['exports', 'frampton/namespace', 'frampton-utils/apply'], function (exports, _namespace, _apply) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ajax_api;

  var _namespace2 = _interopRequireDefault(_namespace);

  var _apply2 = _interopRequireDefault(_apply);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function MockAjax() {
    this.method = 'GET';
    this.url = '';
    this.listeners = {};
    this.headers = {};
    this.requestTime = Math.random() * 1000 + 300;
    this.progress = 0;
  }

  MockAjax.prototype.timeout = 10000;

  MockAjax.prototype.open = function (method, url) {
    this.method = method;
    this.url = url;
  };

  MockAjax.prototype.send = function () {
    var _this = this;

    this.progressInterval = setInterval(function () {
      if (_this.listeners['progress']) {
        _this.listeners['progress'].forEach(function (next) {
          _this.progress += 15;
          next({
            loaded: _this.progress / _this.requestTime * 500,
            total: 500
          });
        });
      }
    }, 20);

    setTimeout(function () {

      var methodUrl = _this.method + ':' + _this.url;
      var methodResponse = _namespace2.default.mock(methodUrl);
      var baseResponse = _namespace2.default.mock(_this.url);
      var data = methodResponse || baseResponse || 'test';

      if (_this.progressInterval) {
        clearInterval(_this.progressInterval);
        _this.progressInterval = null;
      }

      if (_this.listeners['load']) {
        _this.listeners['load'].forEach(function (next) {
          next({
            target: {
              response: data,
              status: 200
            },
            total: 500,
            loaded: 500
          });
        });
      }
    }, this.requestTime);

    if (this.listeners['start']) {
      this.listeners['start'].forEach(_apply2.default);
    }
  };

  MockAjax.prototype.addEventListener = function (name, callback) {

    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    if (this.listeners[name].indexOf(callback) === -1) {
      this.listeners[name].push(callback);
    }
  };

  MockAjax.prototype.setRequestHeader = function (key, value) {
    this.headers[key] = value;
  };

  /**
   * Returns either an instance of XMLHttpRequest or a mock instance if in testing mode.
   *
   * @name ajaxApi
   * @method
   * @memberof Frampton.IO.Http
   * @returns {Object} Instance of XMLHttpRequest for current environment
   */
  function ajax_api() {
    if (_namespace2.default.isTest()) {
      return new MockAjax();
    } else {
      return new XMLHttpRequest();
    }
  }
});
define("frampton-io/http/utils/default_settings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Object.freeze({
    timeout: 30 * 1000
  });
});
define('frampton-io/http/utils/query_escape', ['exports', 'frampton-utils/memoize', 'frampton-io/http/utils/uri_encode', 'frampton-string/join', 'frampton-string/split'], function (exports, _memoize, _uri_encode, _join, _split) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _uri_encode2 = _interopRequireDefault(_uri_encode);

  var _join2 = _interopRequireDefault(_join);

  var _split2 = _interopRequireDefault(_split);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function query_escape(str) {
    return (0, _join2.default)('+', (0, _split2.default)('%20', (0, _uri_encode2.default)(str)));
  });
});
define('frampton-io/http/utils/query_pair', ['exports', 'frampton-io/http/utils/query_escape'], function (exports, _query_escape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = query_pair;

  var _query_escape2 = _interopRequireDefault(_query_escape);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // query_pair :: [String, String] -> String
  function query_pair(pair) {
    return (0, _query_escape2.default)(pair[0]) + '=' + (0, _query_escape2.default)(pair[1]);
  }
});
define('frampton-io/http/utils/query_string', ['exports', 'frampton-utils/is_array', 'frampton-utils/is_object', 'frampton-utils/is_something', 'frampton-string/join', 'frampton-io/http/utils/query_escape'], function (exports, _is_array, _is_object, _is_something, _join, _query_escape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = query_string;

  var _is_array2 = _interopRequireDefault(_is_array);

  var _is_object2 = _interopRequireDefault(_is_object);

  var _is_something2 = _interopRequireDefault(_is_something);

  var _join2 = _interopRequireDefault(_join);

  var _query_escape2 = _interopRequireDefault(_query_escape);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function encode(prefix, obj, add) {

    if ((0, _is_array2.default)(obj)) {

      for (var i = 0; i < obj.length; i++) {

        encode(prefix + '[]', obj[i], add);
      }
    } else if ((0, _is_object2.default)(obj)) {

      for (var key in obj) {

        encode(prefix + '[' + key + ']', obj[key], add);
      }
    } else {
      add(prefix, obj);
    }
  }

  function query_string(args) {

    var params = [];

    function add(key, value) {
      if ((0, _is_something2.default)(value)) {
        params[params.length] = (0, _query_escape2.default)(key) + '=' + (0, _query_escape2.default)(value);
      }
    }

    for (var key in args) {
      encode(key, args[key], add);
    }

    return (0, _join2.default)('&', params);
  }
});
define('frampton-io/http/utils/query_unescape', ['exports', 'frampton-utils/memoize', 'frampton-io/http/utils/uri_decode', 'frampton-string/join', 'frampton-string/split'], function (exports, _memoize, _uri_decode, _join, _split) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  var _uri_decode2 = _interopRequireDefault(_uri_decode);

  var _join2 = _interopRequireDefault(_join);

  var _split2 = _interopRequireDefault(_split);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function query_unescape(str) {
    return (0, _join2.default)(' ', (0, _split2.default)('+', (0, _uri_decode2.default)(str)));
  });
});
define('frampton-io/http/utils/uri_decode', ['exports', 'frampton-utils/memoize'], function (exports, _memoize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function uri_decode(str) {
    return decodeURIComponent(str);
  });
});
define('frampton-io/http/utils/uri_encode', ['exports', 'frampton-utils/memoize'], function (exports, _memoize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _memoize2 = _interopRequireDefault(_memoize);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _memoize2.default)(function uri_encode(str) {
    return encodeURIComponent(str);
  });
});
define('frampton-io/http/utils/url', ['exports', 'frampton-utils/curry', 'frampton-io/http/utils/query_string'], function (exports, _curry, _query_string) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _curry2 = _interopRequireDefault(_curry);

  var _query_string2 = _interopRequireDefault(_query_string);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = (0, _curry2.default)(function url_builder(domain, args) {
    if (!args) return domain;
    return domain + '?' + (0, _query_string2.default)(args);
  });
});
define("frampton-io/response", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Response;
  /**
   * @name Response
   * @method
   * @memberof Frampton.IO
   * @param {String} status       Current status of request
   * @param {Number} [progress=0] Current progress (0-1) of request
   * @param {Object} [data=null]  Data returned by request
   * @returns {Object}
   */
  function Response(status, progress, data) {
    return {
      status: status,
      timestamp: Date.now(),
      progress: progress || 0,
      complete: progress === 1,
      data: data || null
    };
  }
});
require("frampton-io");
})();
