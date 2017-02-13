const { join } = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const setup = require('./setup');

const dist = join(__dirname, '../dist');
const exclude = /(node_modules|bower_components)/;

const path = require('path');
var ROOT = path.resolve(__dirname, '..');
var root = path.join.bind(path, ROOT);

module.exports = env => {
  const isProd = env && env.production;
  return {
    entry: {
      src: root('./src'),
      vendor: [
        // pull these to a `vendor.js` file
        'preact',
        'preact-redux',
        'redux'
      ]
    },
    output: { path: dist, filename: '[name].[hash].js', publicPath: '/' },
    resolve: {
      alias: {
        react: 'preact/aliases',
        'react-dom': 'preact/aliases',
        components: root('src/views/components/'),
        Utils: root('src/utils/'),
        Redux: root('src/redux')
      },
      extensions: ['.js', '.sass', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: exclude,
          loader: 'babel-loader'
        },
        {
          test: /\.(sass|scss)$/,
          loader: (
            isProd
              ? ExtractText.extract({
                  fallbackLoader: 'style-loader',
                  loader: [
                    'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!sass-loader'
                  ]
                })
              : 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader!sass-loader'
          )
        }
      ]
    },
    plugins: setup(isProd),
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: dist,
      port: process.env.PORT || 3000,
      historyApiFallback: true,
      compress: isProd,
      // inline: !isProd,
      hot: !isProd
    }
  };
};
