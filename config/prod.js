const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');

const prodConfig = { 
  mode: "production",
  devtool: 'source-map',
};

module.exports = merge(common, prodConfig);
