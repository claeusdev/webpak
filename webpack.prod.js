const path = require("path");
const commons = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(commons, {
  mode: "production",
  output: {
    filename: "bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
});
