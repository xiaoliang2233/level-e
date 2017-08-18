const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    publicPath: './dist'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './index.html'),
    filename: path.resolve(__dirname, './dist/index.html'),
  })]
}
