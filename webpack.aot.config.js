'use strict';
let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
        'app': './src/main.aot.ts',
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts'
    },

    output: require('./webpack/output'),

    module: require('./webpack/module.aot'),

    plugins: require('./webpack/plugins').concat([
        new ngtools.AotPlugin({
            tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
            entryModule: path.join(process.cwd(), '/src/app/app.module#AppModule')
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ]),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'cheap-module-source-map'
};