var path = require("path");
var webpack = require("webpack");

module.exports = [
  {
    // unminified
    entry: {
      typestyle: "./lib/index.js"
    },
    output: {
      filename: "./umd/typestyle.js",
      libraryTarget: "umd",
      library: "typestyle"
    },
    mode: "development"
  },
  {
    // minified
    entry: {
      "typestyle.min": "./lib/index.js"
    },
    output: {
      filename: "./umd/typestyle.min.js",
      libraryTarget: "umd",
      library: "typestyle"
    },
    optimization: {
      minimize: true
    },
    mode: "production"
  }
];
