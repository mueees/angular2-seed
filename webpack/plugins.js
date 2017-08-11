'use strict';

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    new webpack.ProgressPlugin(),

    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.join(process.cwd(), 'src')
    ),

    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),

    new ExtractTextPlugin('styles.css'),

    new webpack.NoEmitOnErrorsPlugin()
];