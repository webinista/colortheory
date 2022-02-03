const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
    new LodashModuleReplacementPlugin,
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = merge(common, prodConfig);
