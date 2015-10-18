import extend from 'frampton-utils/extend';
import EventStream from 'frampton-signals/event_stream';
import { nextEvent } from 'frampton-signals/event';
import AjaxApi from 'frampton-io/http/ajax_api';
import Response from 'frampton-io/response';

var defaultSettings = {
  timeout : (30 * 1000)
};

/**
 * Perform an AJAX request and return an EventStream that reports the progress.
 *
 * @name send
 * @method
 * @memberof Frampton.IO.Http
 * @param {Object} settings A hash of general settings for the request
 * @param {Object} request  A hash describing the request to be made
 * @returns {Frampton.Signals.EventStream} An EventStream of Response objects
 */
export default function send(settings, request) {

  return new EventStream(function seed_send(sink) {

    var req = AjaxApi();
    settings = extend({}, defaultSettings, settings);

    req.open(request.method, request.url, true);

    req.addEventListener('loadstart', function(evt) {
      sink(nextEvent(Response('start', 0, null)));
    });

    req.addEventListener('progress', function(evt) {
      sink(nextEvent(Response('progress', (evt.loaded / evt.total), null)));
    });

    req.addEventListener('error', function(err) {
      sink(nextEvent(Response('error', 0, err.message)));
    });

    req.addEventListener('timeout', function(err) {
      sink(nextEvent(Response('error', 0, 'timeout')));
    });

    req.addEventListener('load', function(evt) {

      var response;
      var target = evt.target;

      try {
        response = JSON.parse(target.response);
      } catch(e) {
        response = target.response;
      }

      if (target.status >= 200 && target.status < 300) {
        sink(nextEvent(Response('complete', 1, response)));
      } else {
        sink(nextEvent(Response('error', 0, response)));
      }
    });

    for (let key in request.headers) {
      req.setRequestHeader(key, request.headers[key]);
    }

    req.timeout = settings.timeout;

    req.send(request.body);
  });
}