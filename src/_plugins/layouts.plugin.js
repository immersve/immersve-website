'use strict';

module.exports = function(eleventyConfig) {
  const layouts = require('../_includes/layouts');
  Object.keys(layouts).forEach(name => {
    const layout = `layouts/${layouts[name]}`;
    eleventyConfig.addLayoutAlias(name, layout);
  });
};
