import isObject from 'frampton-utils/is_object';
import Request from 'frampton-io/http/request';
import send from 'frampton-io/http/send';
import queryString from 'frampton-io/http/query_string';

/**
 * Perform an AJAX POST request and return an EventStream that reports the progress.
 *
 * @name post
 * @method
 * @memberof Frampton.IO.Http
 * @param {String} url  Url to send request to
 * @param {Object} data Data to send with request
 * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
 */
export default function post(url, data) {

  if (isObject(data)) {
    data = queryString(data);
  }

  return send(null, Request(url, 'POST', (data || null)));
}