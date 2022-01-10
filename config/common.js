const path = require('path');  // Include path module from node.js
const HtmlWebpackPlugin = require("html-webpack-plugin");


const entryConf = [
    'clipboard',
    'react',
    'react-dom',
    'redux',
    'react-redux',
    './src/',
];

const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/',
    output: {
        path: path.resolve(__dirname, '../application'),
        filename: '[name].output.js',
        asyncChunks: true,
        compareBeforeEmit: true,
        clean: true,
    },
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
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          }
        ]
    },

    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "../src", "index.html"),
      }),
    ],

    target: 'web'
}

module.exports = config;
