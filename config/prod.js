const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodRules = [
  {
    test: /\.(css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },
];

const prodConfig = {
  mode: "production",
  module: {
    rules: common.module.rules.concat(prodRules)
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};

module.exports = merge(common, prodConfig);
