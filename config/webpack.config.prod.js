'use strict'

const baseWebpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: '#source-map',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
    }
})
module.exports = webpackConfig
