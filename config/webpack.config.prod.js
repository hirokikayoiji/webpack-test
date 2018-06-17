'use strict'

const baseWebpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: '#source-map'
})
module.exports = webpackConfig
