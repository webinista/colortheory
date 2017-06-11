const path = require('path');  // Include path module from node.js
const webpack = require('webpack');

const entryConf = [
  'babel-polyfill',
  'react',
  'react-dom',
  'redux',
  'react-redux',
  './src/',
];

const config = {
  devtool: 'source-map',
  entry: entryConf,
  output: {
    path: path.resolve(__dirname, '../script'),
    filename: 'js.js',
    publicPath: 'script/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.babelcache',
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      // TODO: Figure out why this doesn't work
      // This does not match the documentation, but
      // using way from documentation causes errors.
      // See https://webpack.js.org/guides/production-build/#the-manual-way
      sourceMap: true,
      comments: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web'
};

module.exports = config;