const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'Bundle.[contentHash:6].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash:6].css',
        }),
    ]
})