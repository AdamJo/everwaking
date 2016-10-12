/* tslint:disable: variable-name max-line-length */
/**
 * Try to not make your own edits to this file, use the constants folder instead. 
 * If more constants should be added file an issue or create PR.
 */

import 'ts-helpers';

import {
  DEV_PORT, PROD_PORT, EXCLUDE_SOURCE_MAPS, HOST,
  USE_DEV_SERVER_PROXY, DEV_SERVER_PROXY_CONFIG, DEV_SERVER_WATCH_OPTIONS,
  DEV_SOURCE_MAPS, PROD_SOURCE_MAPS, MY_COPY_FOLDERS,
  MY_CLIENT_PLUGINS, MY_CLIENT_PRODUCTION_PLUGINS, MY_CLIENT_RULES
} from './constants';

const {
  ContextReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  NoErrorsPlugin
} = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ForkCheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const { root } = require('./helpers.js');

const EVENT = process.env.npm_lifecycle_event;
const DEV_SERVER = EVENT.includes('webdev');
const PROD = EVENT.includes('prod');

let port: number;
if (PROD) {
  port = PROD_PORT;
} else {
  port = DEV_PORT;
}

const PORT = port;

const CONSTANTS = {
  ENV: PROD ? JSON.stringify('production') : JSON.stringify('development'),
  HOST: JSON.stringify(HOST),
  PORT: PORT
};

const clientConfig = function webpackConfig() {
  let config: any = (<any>Object).assign({});
  config.cache = true;
  PROD ? config.devtool = '' : config.devtool = DEV_SOURCE_MAPS;

  config.module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        loader: ExtractTextPlugin.extract({loader: `css?minimize!sass`, fallbackLoader: 'style'})
      },
    ]
  };

  config.plugins = [
    new ExtractTextPlugin('stylesheets/[name].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new ProgressPlugin(),
    new ForkCheckerPlugin(),
    new DefinePlugin(CONSTANTS),
    new NamedModulesPlugin(),
  ];

  if (PROD) {
    config.plugins.push(
      new NoErrorsPlugin(),
      new UglifyJsPlugin({
        beautify: false,
        comments: false
      }))
  }

  config.entry = {
    main: './src/scripts/main'
  };

  config.output = {
    path: root('/dist'),
    filename: 'bundle.js'
  };

  config.devServer = {
    contentBase: './src',
    port: CONSTANTS.PORT,
    historyApiFallback: true,
    host: 'localhost',
    watchOptions: DEV_SERVER_WATCH_OPTIONS
  };

  config.node = {
    global: true,
    process: true,
    Buffer: false,
    crypto: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  };

  config.resolve = {
    extensions: ['.ts', '.js', '.json']
  };
  return config;

} ();

module.exports = clientConfig;