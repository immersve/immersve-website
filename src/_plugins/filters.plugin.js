'use strict';

module.exports = function(eleventyConfig) {
  const filters = require('../_filters');
  Object.keys(filters).forEach(name => {
    eleventyConfig.addFilter(name, filters[name]);
  });
};
