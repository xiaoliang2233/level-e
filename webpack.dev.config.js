const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index_angular: './src/main-ng.ts',
    index_vue: './src/main.js'
  },
  output: {
    path: "/",
    filename: '[id].[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    mainFields: ["module", "main", "browser"],
    modules: [
      path.resolve(__dirname, './node_modules'),
    ],
    // https://github.com/vuejs-templates/webpack/issues/215
    alias: {
      vue: 'vue/dist/vue.js'
    }
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
    host: "localhost",
    port: 7788,
    open: true,
    hot: true,
    inline: true,
  }
}
