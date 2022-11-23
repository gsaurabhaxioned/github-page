module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
      files: './public/static/**/*.css',
    });

    eleventyConfig.addPassthroughCopy("./src/static/scss/");
  
    return {
      dir: {
        input: 'src',
        output: 'public',
      },
    };
  }