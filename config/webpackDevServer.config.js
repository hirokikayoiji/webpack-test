'use strict'

const path = require('path')

const PROTOCOL = 'https'
const PORT = parseInt(process.env.PORT, 10) || 8080
const HOST = process.env.HOST || 'localhost'
const PUBLIC_PATH = '/'

const OPTIONS = {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(PUBLIC_PATH, 'index.html') },
      ],
    },
    contentBase: false, 
    inline: true,
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    https: PROTOCOL === 'https',
    open: false,
    overlay: { 
        warnings: false, 
        errors: true 
    },
    publicPath: PUBLIC_PATH,
    proxy: {
    },
    quiet: true,
    watchOptions: {
        poll: false,
    }
}

module.exports = {
    config: OPTIONS,
    protocol: PROTOCOL,
    port: PORT,
    host: HOST
}