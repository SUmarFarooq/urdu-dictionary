module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
