const path = require("path");
const commons = require("./webpack.common")
const merge = require("webpack-merge")
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commons, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
