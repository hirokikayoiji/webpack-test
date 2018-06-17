'use strict'

const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config.prod')

build()

function build(){
    let compiler = webpack(webpackConfig)

    compiler.run(function(error, stats){
        if (error) {
            throw error
        }
        if (stats.hasErrors()) {
            console.log('Build failed with errors.\n')
        }
    })
}
