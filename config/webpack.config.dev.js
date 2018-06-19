'use strict'

const baseWebpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack')


const webpackConfig = merge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        // webpack-dev-serverで利用する
        new webpack.HotModuleReplacementPlugin()
    ]
})
module.exports = webpackConfig