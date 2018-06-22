'use strict'

const webpack = require('webpack')
const webpackConfig = require('./webpack.config.prod')
const rm = require('rimraf')
const path = require('path')

function build(config){
    let compiler = webpack(config)
    return new Promise(function(resolve, reject){
        compiler.run(function(error, stats){
            if (error) {
                return reject(error)
            }
            console.log(stats.toString({
                colors: true,
                modules: false,
                children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                chunks: false,
                chunkModules: false
            }) + '\n\n')
    
            if (stats.hasErrors()) {
                //console.log('Build failed with errors.\n')
                return reject(new Error('Build failed with errors.\n'))
            }
            // console.log('Build complete.\n')
            return resolve(compiler)
        })
    })
}
rm(path.join(__dirname, '../dist'), function(error){
    if(error){
        throw error
    }
    build(webpackConfig).then(function(){}).catch(function(error){
        console.log(error.message)
    })
})
