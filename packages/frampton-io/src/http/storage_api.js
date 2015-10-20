import Frampton from 'frampton/namespace';

var mockInstance = null;

function MockStorage() {
  this.store = {};
}

MockStorage.prototype.getItem = function(name) {
  return (this.store[name] || null);
};

MockStorage.prototype.setItem = function(name, value) {
  this.store[name] = value;
};

MockStorage.prototype.removeItem = function(name) {
  delete this.store[name];
};

MockStorage.prototype.clear = function() {
  this.store = {};
};

MockStorage.prototype.key = function() {

};

/**
 * Returns either window.localStorage or a mock instance if in testing mode.
 *
 * @name storageApi
 * @method
 * @memberof Frampton.IO.Http
 * @returns {Object} Instance of localStorage for current environment
 */
export default function storage_api() {
  if (Frampton.isTest()) {
    if (mockInstance) {
      return mockInstance;
    } else {
      mockInstance = new MockStorage();
      return mockInstance;
    }
  } else {
    return window.localStorage;
  }
}