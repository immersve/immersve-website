'use strict';

const glob = require('glob');
const path = require('path');

const layouts = {};

glob.sync('*.layout.njk', { cwd: __dirname })
  .forEach(file => {
    const name = path.basename(file).split('.')[0];
    layouts[name] = file;
  });

module.exports = layouts;
