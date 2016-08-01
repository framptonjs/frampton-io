const FramptonBuild = require('frampton-build');
const packages = {
  'frampton-io' : { trees: null }
}

const build = new FramptonBuild({
  name : 'frampton-io',
  packages : packages
});

module.exports = build.getDistTree();
