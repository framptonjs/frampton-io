var FramptonBuild = require('frampton-build');
var packages = {
  'frampton-io' : { trees: null }
}

var build = new FramptonBuild({
  name     : 'frampton-io',
  packages : packages
});

module.exports = build.getDistTree();