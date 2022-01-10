const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');

const devConfig = { 
  mode: "development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
};

module.exports = merge(common, devConfig);
