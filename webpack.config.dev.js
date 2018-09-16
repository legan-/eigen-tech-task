const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

const PUBLIC_DIR = path.resolve(__dirname, './public');
const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');

const htmlPlugin = new HtmlWebpackPlugin({
  template: PUBLIC_DIR + '/index.html',
  meta: { viewport: 'width=device-width, initial-scale=1' },
  inject: 'body',
  title: config.name
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

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
    host: config.host,
    port: config.devPort,
    inline: true,
    disableHostCheck: true,
    hot: true,
    stats: {
      chunks: false,
      chunkGroups: false,
      chunkOrigins: false,
      chunkModules: false,
      modules: false,
      children: false,
    },
  },
  plugins: [htmlPlugin, hmrPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
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
