const path = require('path');  // Include path module from node.js

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
    entry: entryConf,
    output: {
        path: path.resolve(__dirname, '../application'),
        filename: '[name].js',
        publicPath: 'scripties/',
        asyncChunks: true,
        compareBeforeEmit: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.babelcache',
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime', 'lodash']
            }
          }
        ]
      },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    target: 'web'
}

module.exports = config;
