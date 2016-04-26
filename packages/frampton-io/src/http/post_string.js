import curry from 'frampton-utils/curry';
import isObject from 'frampton-utils/is_object';
import post from 'frampton-io/http/post';
import queryString from 'frampton-io/http/utils/query_string';

/**
 * Perform an AJAX POST request and return an EventStream that reports the progress.
 *
 * @name postString
 * @method
 * @memberof Frampton.IO.Http
 * @param {String} url  Url to send request to
 * @param {Object} data Data to send with request
 * @returns {Frampton.Data.Task}
 */
export default curry(function post_string(url, data) {

  if (isObject(data)) {
    data = queryString(data);
  }

  return post(url, (data || null), {
    'Content-Type' : 'application/x-www-form-urlencoded'
  });
});