module.exports = {
  getTransformModulePath() {
    return require.resolve("./rn-transformer.js");
  },
  getSourceExts() {
    return ["js", "jsx", "styl", "css"];
  }
};
