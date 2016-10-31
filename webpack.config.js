const Webpack = require('webpack');
const merge = require('webpack-merge');
const Clean = require('clean-webpack-plugin');
const path = require('path');
const libraryName = 'nl2br';;

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const ENTRY_PATH = path.resolve(SRC_PATH, 'index.js');
const LIB_PATH = path.resolve(ROOT_PATH, 'lib');
const TEST_PATH = path.resolve(ROOT_PATH, 'test');

const TARGET = process.env.npm_lifecycle_event;

const commonConfig = {
    entry: ENTRY_PATH,
    devtool: 'source-map',
    output: {
        path: LIB_PATH,
        filename: libraryName + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            'src': SRC_PATH
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                include: SRC_PATH
            }
        ]
    }
};

var webpackConfig = commonConfig;

if (TARGET === 'test' || TARGET === 'tdd') {
    webpackConfig = merge(commonConfig, {
        entry: {},
        output: {},
        devtool: 'inline-source-map',
        module: {
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['isparta'],
                    include: SRC_PATH
                }
            ],
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['babel'],
                    include: TEST_PATH
                }
            ]
        }
    });
}

if (TARGET === 'build' || TARGET === 'prepublish') {
    webpackConfig = merge(commonConfig, {
        entry: ENTRY_PATH,
        output: {
            path: LIB_PATH,
            filename: libraryName + '.min.js',
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        plugins: [
            new Clean([LIB_PATH]),
            new Webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            })
        ]
    })
}

module.exports = webpackConfig;