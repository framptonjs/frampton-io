import Frampton from 'frampton/namespace';

import Response from 'frampton-io/response';

import Request from 'frampton-io/http/request';
import send from 'frampton-io/http/send';
import deleteRequest from 'frampton-io/http/delete';
import put from 'frampton-io/http/put';
import patch from 'frampton-io/http/patch';
import get from 'frampton-io/http/get';
import post from 'frampton-io/http/post';
import postJson from 'frampton-io/http/post_json';
import postString from 'frampton-io/http/post_string';
import upload from 'frampton-io/http/upload';
import url from 'frampton-io/http/utils/url';
import queryPair from 'frampton-io/http/utils/query_pair';
import queryEscape from 'frampton-io/http/utils/query_escape';
import queryString from 'frampton-io/http/utils/query_string';
import uriEncode from 'frampton-io/http/utils/uri_encode';
import uriDecode from 'frampton-io/http/utils/uri_decode';

import read from 'frampton-io/file/read';
import dataUrl from 'frampton-io/file/data_url';
import binaryString from 'frampton-io/file/binary_string';
import arrayBuffer from 'frampton-io/file/array_buffer';
import text from 'frampton-io/file/text';

/**
 * @name IO
 * @namespace
 * @memberof Frampton
 */
Frampton.IO          = {};
Frampton.IO.VERSION  = '{-- VERSION_PLACEHOLDER --}';
Frampton.IO.Response = Response;

/**
 * @name Http
 * @memberof Frampton.IO
 * @namespace
 */
Frampton.IO.Http = {};
Frampton.IO.Http.Request    = Request;
Frampton.IO.Http.send       = send;
Frampton.IO.Http.get        = get;
Frampton.IO.Http.post       = post;
Frampton.IO.Http.postJson   = postJson;
Frampton.IO.Http.postString = postString;
Frampton.IO.Http.delete     = deleteRequest;
Frampton.IO.Http.patch      = patch;
Frampton.IO.Http.put        = put;
Frampton.IO.Http.upload     = upload;

/**
 * @name Utils
 * @memberof Frampton.IO.Http
 * @namespace
 */
Frampton.IO.Http.Utils             = {};
Frampton.IO.Http.Utils.url         = url;
Frampton.IO.Http.Utils.queryPair   = queryPair;
Frampton.IO.Http.Utils.queryEscape = queryEscape;
Frampton.IO.Http.Utils.queryString = queryString;
Frampton.IO.Http.Utils.uriEncode   = uriEncode;
Frampton.IO.Http.Utils.uriDecode   = uriDecode;

/**
 * @name File
 * @memberof Frampton.IO
 * @namespace
 */
Frampton.IO.File = {};
Frampton.IO.File.read         = read;
Frampton.IO.File.dataUrl      = dataUrl;
Frampton.IO.File.binaryString = binaryString;
Frampton.IO.File.arrayBuffer  = arrayBuffer;
Frampton.IO.File.text         = text;
