const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const { isProd, plugins } = require('./setup');
const babel = require('./babel');

const out = join(__dirname, '../dist');
const exclude = /(node_modules|bower_components)/;
const path = require('path');

var ROOT = path.resolve(__dirname, '..');
var root = path.join.bind(path, ROOT);

if (isProd) {
  babel.presets.push('babili');
}

module.exports = {
  entry: {
    src: root('src/'),
    vendor: [
      // pull these to a `vendor.js` file
      'preact'
    ]
  },
  output: { path: out, filename: '[name].[hash].js', publicPath: '/' },
  resolve: {
    // modules: [ 'src', 'node_modules' ],
    extensions: [ '.js', '.sass', '.scss' ],
    alias: { components: root('src/views/components/') }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: exclude,
        loader: 'babel-loader',
        options: babel
      },
      {
        test: /\.(sass|scss)$/,
        loader: isProd
          ? ExtractText.extract({
            fallbackLoader: 'style-loader',
            loader: [
              'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!sass-loader'
            ]
          })
          : 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader'
      }
    ]
  },
  plugins: plugins,
  devtool: !isProd && 'eval',
  devServer: {
    contentBase: out,
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    compress: isProd,
    inline: !isProd,
    hot: !isProd
  }
};
