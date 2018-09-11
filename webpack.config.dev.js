const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

const PUBLIC_DIR = path.resolve(__dirname, './client/public');
const SRC_DIR = path.resolve(__dirname, './client/src');
const BUILD_DIR = path.resolve(__dirname, './build');

const htmlPlugin = new HtmlWebpackPlugin({
  template: PUBLIC_DIR + '/index.html',
  meta: { viewport: 'width=device-width, initial-scale=1' },
  inject: 'body',
  title: config.name
});

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  entry: [SRC_DIR + '/index'],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: config.devPort,
    disableHostCheck: true,
    stats: {
      chunks: false,
      chunkGroups: false,
      chunkOrigins: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
