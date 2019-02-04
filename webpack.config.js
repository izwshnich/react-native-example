const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["react-hot-loader/patch", "./index.web.js"],
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ["@babel/env", "react", "react-native"],
          plugins: ["react-hot-loader/babel"],
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "stylus-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "react-native": "react-native-web",
      data: path.join(__dirname, './src/js/data/'),
      constants: path.join(__dirname, './src/js/constants'),
      actions: path.join(__dirname, './src/js/actions'),
      atoms: path.join(__dirname, './src/js/atoms'),
      molecules: path.join(__dirname, './src/js/molecules'),
      organisms: path.join(__dirname, './src/js/organisms'),
      pages: path.join(__dirname, './src/js/pages'),
      api: path.join(__dirname, './src/js/api'),
      reducers: path.join(__dirname, './src/js/reducers/'),
      sagas: path.join(__dirname, './src/js/sagas/'),
    },
    extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
    mainFields: ["browser", "main"],
  },
};
