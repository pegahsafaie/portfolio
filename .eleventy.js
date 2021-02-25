// 11ty configuration
module.exports = config => {

  // 11ty defaults
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/images');

  return {

    templateFormats: [
          "md",
          "njk",
        ],
    dir: {
      input: 'src',
      output: 'build'
    }

  };
};