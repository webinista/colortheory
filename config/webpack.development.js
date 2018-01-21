const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = { 
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],
};

module.exports = merge(common, devConfig);
