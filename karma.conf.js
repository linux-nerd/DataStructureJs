var path = require('path');
// var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        basePath: '',
        browsers: ['Chrome'],
        files: [
            'src/unit-test/**/*.spec.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'src/unit-test/**/*.spec.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};