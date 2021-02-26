// 11ty configuration
module.exports = config => {

  // 11ty defaults
  config.addPassthroughCopy('assets');
  config.addPassthroughCopy('images');

  return {

    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: 'njk', // used in Markdown files
    dir: {
      input: '.',
    }

  };
};