const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'dist'), 
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', 
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: './dist',
    },
};
