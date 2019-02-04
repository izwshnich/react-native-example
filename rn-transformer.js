var upstreamTransformer = require("metro/src/reactNativeTransformer");
var stylTransformer = require("react-native-stylus-transformer");
var cssTransformer = require("react-native-css-transformer");

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith(".styl")) {
    return stylTransformer.transform({ src, filename, options });
  } else if (filename.endsWith(".css")) {
    return cssTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
