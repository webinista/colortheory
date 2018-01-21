const path = require('path');  // Include path module from node.js

const entryConf = [
  'clipboard',
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web'
};

module.exports = config;
