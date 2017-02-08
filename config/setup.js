const { join } = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const Clean = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const uglify = require('./uglify');

const root = join(__dirname, '..');
const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

// base plugins array
const plugins = [
  new Clean([ 'dist' ], { root: root }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  new webpack.NamedModulesPlugin(),
  new HTML({ template: 'src/index.html' }),
  new ExtractText({
    filename: 'styles.[hash].css',
    // disable: !isProd
    allChunks: true
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [ require('autoprefixer')({ browsers: [ 'last 3 version' ] }) ]
    }
  })
];

if (isProd) {
  plugins.push(
    new Copy([ { context: 'src/static/', from: '**/*.*' } ]),
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(uglify),
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
  // dev only
  plugins.push(new webpack.HotModuleReplacementPlugin(), new Dashboard());
}

exports.env = env;
exports.isProd = isProd;
exports.plugins = plugins;
