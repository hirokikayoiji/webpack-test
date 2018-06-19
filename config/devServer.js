'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.dev')
const {config, protocol, port, host } = require('./webpackDevServer.config')

dev()
function dev(){
    webpackDevServer.addDevServerEntrypoints(webpackConfig, config);
    let compiler = webpack(webpackConfig)
    let server = new webpackDevServer(compiler, config)
    server.listen(port, host, function(){
        console.log('dev server listening on ', protocol+'://'+host+':'+port);
    })
}