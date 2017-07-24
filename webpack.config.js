var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: {
    javascript: APP_DIR + '\\app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'build/',
  }
};

module.exports = config;