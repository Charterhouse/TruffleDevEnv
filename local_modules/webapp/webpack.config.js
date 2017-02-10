const path = require('path')
const babelModule = require('./webpack/babel-module')
const cssModule = require('./webpack/css-module')
const htmlPlugin = require('./webpack/html-plugin')
const workaroundPlugin = require('./webpack/workaround-plugin')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    loaders: [ babelModule, cssModule ]
  },
  devServer: {
    contentBase: 'dist'
  },
  plugins: [ htmlPlugin, workaroundPlugin ]
}
