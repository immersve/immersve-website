'use strict';

const glob = require('glob');

module.exports = glob
  .sync('./*.plugin.js', { cwd: __dirname })
  .map(require);
