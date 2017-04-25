'use strict';
let path = require('path');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.jit.ts'
    },

    output: require('./webpack/output'),

    module: require('./webpack/module.jit'),

    plugins: require('./webpack/plugins'),

    resolve: require('./webpack/resolve'),

    devServer: require('./webpack/dev-server'),

    stats: 'errors-only',

    devtool: 'cheap-module-source-map'
};