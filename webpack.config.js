const path = require("path");

module.exports = {
  mode: "development",
  entry: "./front/react/index.js",
  output: {
    path: path.join(__dirname, "/front/public"),
    filename: "bundle.js"
  },
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/env"]
        }
      }
    ]
  }
};
