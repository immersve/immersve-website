'use strict';

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  require('./src/_plugins')
    .forEach(plugin => eleventyConfig.addPlugin(plugin));

  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    templateFormats: [
      'md',
      'njk',
      'html',
    ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist',
    }
  };
};
