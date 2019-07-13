const path = require("path");
const commons = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(commons, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
});
