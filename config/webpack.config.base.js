'use strict'

const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const basePath = './src/pages/'
const targets = glob.sync(`${basePath}/**/*.js`)
const entris = {}
const pluginsData =[]

targets.forEach(value =>{
    const re = new RegExp(`${basePath}`)
    let key = value.replace(re,'')
    key = key.replace(path.extname(key),'')
    entris[key] = value

    let filenames = path.join(__dirname, '../dist')
    filenames = path.join(filenames, path.dirname(key))
    filenames = path.join(filenames, 'index.html')
      
    let htmlPlugin = new HtmlWebpackPlugin({
        filename: filenames,
        template: 'public/index.html',
        inject: true,
        chunks: [key],
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeRedundantAttributes: false,
            useShortDoctype: false,
            removeEmptyAttributes: false,
            removeStyleLinkTypeAttributes: false,
            keepClosingSlash: false,
            minifyJS: false,
            minifyCSS: false,
            minifyURLs: false,
        }
    })
    pluginsData.push(htmlPlugin)
})

pluginsData.push(new webpack.DefinePlugin({'process.env': process.env.NODE_ENV}))

module.exports = {
    entry: entris,
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {}
    },
    module: {
    },
    plugins: pluginsData,
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}