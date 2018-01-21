const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const prodConfig = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
  ]
};

module.exports = merge(common, prodConfig);
