const path = require('path'); // Include path module from node.js
const babel = require('babel-loader');
const babelpolyfill = require("babel-polyfill");

const entryConf = [
  "babel-polyfill",
  "react",
  "react-dom",
  "redux",
  "react-redux",
  "./src/"
]


const config = {
  entry: entryConf,
  output: {
    path: path.resolve(__dirname, '../script'),
    filename: 'js.js',
    publicPath: 'script/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: '.babelcache'
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
