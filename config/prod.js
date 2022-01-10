const webpack   = require('webpack');
const { merge } = require('webpack-merge');
const common    = require('./common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = { 
  mode: "production",
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
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};



module.exports = merge(common, prodConfig);
