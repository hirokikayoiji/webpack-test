'use strict'

const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.dev')
const {config, protocol, port, host } = require('./webpackDevServer.config')

function main(){
    webpackDevServer.addDevServerEntrypoints(webpackConfig, config)

    let compiler = webpack(webpackConfig)
    let server = new webpackDevServer(compiler, config)
    server.listen(port, host, function(error){
        if (error) {
            return console.log(error);
        }
        console.log('dev server listening on ', protocol+'://'+host+':'+port);
    })
    
}
main()