'use strict';

let commonRules = require('./rules.common');

module.exports = {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: '@ngtools/webpack',
                    options: {
                        tsConfigPath: 'tsconfig.json'
                    }
                }
            ],
        }
    ].concat(commonRules)
};
