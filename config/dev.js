const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');

/*

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
*/

const devConfig = { 
  mode: "development",
};

module.exports = merge(common, devConfig);
