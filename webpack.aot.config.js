'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: require('./webpack/entry'),

    context: path.join(process.cwd(), 'src'),

    output: require('./webpack/output'),

    module: require('./webpack/module.aot'),

    plugins: require('./webpack/plugins').concat([
        new ngtools.AotPlugin({
            tsConfigPath: path.join(process.cwd(), 'tsconfig.json')
        })
    ]),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'cheap-module-source-map'
};