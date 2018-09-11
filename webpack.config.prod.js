const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const config = require('./config.js');

const PUBLIC_DIR = path.resolve(__dirname, './public');
const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

const ASSETS_PATH = 'assets/';

const htmlPlugin = new HtmlWebpackPlugin({
  template: PUBLIC_DIR + '/index.html',
  meta: { viewport: 'width=device-width, initial-scale=1' },
  inject: 'body',
  title: config.name
});

const uglifyPlugin = new UglifyJsPlugin({
  sourceMap: true
});

const cssOptimizePlugin = new OptimizeCSSAssetsPlugin({
  cssProcessorOptions: {
    map: {
      inline: false,
      annotation: true
    }
  }
});

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: ASSETS_PATH + '[name].[hash].css',
  chunkFilename: '[id].[hash].css'
});

const md5Hash = new WebpackMd5Hash();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    vendor: SRC_DIR + '/vendor',
    main: SRC_DIR + '/index'
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: ASSETS_PATH + '[name].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      uglifyPlugin,
      cssOptimizePlugin
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: NODE_MODULES_DIR,
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    md5Hash,
    cssExtractPlugin,
    htmlPlugin
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
