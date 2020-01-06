const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: { open: true },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'main.js',
    }
})