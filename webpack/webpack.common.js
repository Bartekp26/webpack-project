const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',   
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader', 
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true },
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: { 
                        name: '[name].[hash].[ext]',
                        outputpath: 'imgs',
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ]
}