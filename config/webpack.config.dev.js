'use strict'

const baseWebpackConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map'
})
module.exports = webpackConfig