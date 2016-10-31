
module.exports = function karmaConfig (config) {
    config.set({
        frameworks: [
            'mocha'
        ],

        reporters: [
            'spec',

            'coverage'
        ],

        files: [
            'test/**/*_test.*'
        ],

        preprocessors: {
            'test/**/*_test.*': ['webpack', 'sourcemap']
        },

        browsers: [
            'PhantomJS'
        ],

        singleRun: true,

        coverageReporter: {
            dir: 'build/coverage/',
            type: 'html'
        },

        webpack: require('./webpack.config'),

        webpackMiddleware: {
            noInfo: true
        }
    });
};