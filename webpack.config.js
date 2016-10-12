exports.DEV_SOURCE_MAPS = 'eval';
exports.PROD_SOURCE_MAPS = 'source-map';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname +'/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/styles'}
    ])
  ],
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true,
    host: '0.0.0.0',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}