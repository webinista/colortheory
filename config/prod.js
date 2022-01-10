const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');

const devConfig = { 
  mode: "production",
};

module.exports = merge(common, devConfig);
