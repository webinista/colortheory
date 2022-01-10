const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');

const devRules = [
  {
    test: /\.css$/,
    use: [ 'style-loader', 'css-loader' ]
  }
];

const devConfig = { 
  mode: "development",
  devtool: 'source-map',
  module: {
    rules: common.module.rules.concat( devRules )
  },
};

module.exports = merge(common, devConfig);
