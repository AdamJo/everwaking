const { join } = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const uglify = require('./uglify');
const babel = require('./babel');

const root = join(__dirname, '..');

module.exports = isProd => {
  const plugins = [
    new Clean(['dist'], { root: root }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProd ? 'production' : 'development'
      )
    }),
    new HTML({ template: 'src/index.html' }),
    new webpack.LoaderOptionsPlugin({
      options: {
        babel,
        postcss: [require('autoprefixer')({ browsers: ['last 2 version'] })]
      }
    })
  ];

  if (isProd) {
    babel.presets.push('babili');

    plugins.push(
      new Copy([{ context: 'src/static/', from: '**/*.*' }]),
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin(uglify),
      new ExtractText({
        filename: 'styles.[hash].css',
        disable: !isProd
      }),
      new OfflinePlugin({
        relativePaths: false,
        AppCache: false,
        ServiceWorker: {
          events: true
        },
        publicPath: '/'
      })
    );
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new Dashboard()
    );
  }

  return plugins;
};
