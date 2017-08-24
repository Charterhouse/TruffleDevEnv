const path = require('path')
const babelModule = require('./webpack/babel-module')
const cssModule = require('./webpack/css-module')
const htmlPlugin = require('./webpack/html-plugin')
const imgModule = require('./webpack/img-module')
const hotReplacementPlugin = require('./webpack/hot-replacement-plugin')
const namedModulesPlugin = require('./webpack/named-modules-plugin')
const noEmitOnErrorsPlugin = require('./webpack/no-emit-on-errors-plugin')

module.exports = {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // our own app entry point
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [ babelModule, cssModule, imgModule ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,

    // respond to 404s with index.html
    historyApiFallback: true,

    // enable HMR on the server
    hot: true
  },
  plugins: [
    htmlPlugin,
    hotReplacementPlugin,
    namedModulesPlugin,
    noEmitOnErrorsPlugin
  ]
}
