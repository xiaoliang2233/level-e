const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index_angular: './src/main-ng.ts',
    index_vue: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[id].[name].js',
    // publicPath: path.resolve(__dirname, "./dist")
    publicPath: "./dist"
  },
  resolve: {
    extensions: ['.js', '.ts'],
    mainFields: ["module", "main", "browser"],
    modules: [
      path.resolve(__dirname, './node_modules'),
    ]
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
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          // 使用tsconfig.json文件中的配置
          tsconfig: 'tsconfig.json'
        }
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
  devServer: {
    host: "dev.baoqin.me",
    port: 7788,
    open: true,
    hot: true,
    inline: true,
  }
}
