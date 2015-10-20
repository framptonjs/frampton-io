import immediate from 'frampton-utils/immediate';
import api from 'frampton-io/http/storage_api';

var instance = null;
// one day
var expiration = (1000 * 60 * 60 * 24);

function now() {
  return (new Date().getTime());
}

function getFromLocal(local, name) {
  var value = local.getItem(name);
  if (value) {
    value = JSON.parse(value);
    if ((now() - value.timestamp) < expiration) {
      return value;
    }
  }
  return null;
}

function Storage() {
  this.store = {};
  this.local = api();
}

Storage.prototype.get = function(name) {
  return (
    this.store[name] ||
    getFromLocal(this.local, name) ||
    null
  );
};

Storage.prototype.set = function(name, value) {
  this.store[name] = value;
  immediate(() => {
    this.local.setItem(name, JSON.stringify({
      timestamp : now(),
      value : value
    }));
  });
};

export default function storage() {
  if (!instance) {
    instance = new Storage();
  }
  return instance;
}