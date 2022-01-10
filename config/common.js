const path = require('path');  // Include path module from node.js

const config = {
    context: path.resolve(__dirname, '../'),
    entry: './src/',
    output: {
        path: path.resolve(__dirname, '../application'),
        filename: '[name].js',
        publicPath: 'scripties/',
        asyncChunks: true,
        compareBeforeEmit: true,
    },
}


module.exports = config;
