import immediate from 'frampton-utils/immediate';
import EventStream from 'frampton-signals/event_stream';
import { nextEvent } from 'frampton-signals/event';
import storage from 'frampton-io/http/storage';
import Request from 'frampton-io/http/request';
import urlBuilder from 'frampton-io/http/url';
import send from 'frampton-io/http/send';
import complete from 'frampton-io/complete';

export default function cached_get(url, data) {

  var cache = storage();

  return new EventStream((sink) => {
    var urlStr = urlBuilder(url, data);
    var test = cache.get(urlStr);
    if (test) {
      immediate(() => {
        sink(nextEvent(JSON.parse(test)));
      });
    } else {
      complete(send(null, Request(urlStr))).next((res) => {
        sink(nextEvent(res));
        cache.set(urlStr, res);
      });
    }
  });
}