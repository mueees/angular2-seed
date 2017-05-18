'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader'
            }
        ]
    },

    // scss for angular components
    {
        test: /\.scss$/,
        include: path.resolve(process.cwd(), 'src', 'app'),
        loaders: [
            'to-string-loader',
            'css-loader',
            'sass-loader'
        ]
    },

    // all other scss styles
    {
        test: /\.scss$/,
        include: path.join(process.cwd(), 'src', 'assets'),
        loader: ExtractTextPlugin.extract({
            use: [
                'css-loader',
                'sass-loader'
            ],

            fallback: 'style-loader'
        })
    },
    {
        test: /\.(svg|jpg|png|gif|ttf|eot|woff|woff2)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
];