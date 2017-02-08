const WebpackOnBuildPlugin = require('on-build-webpack')
const replace = require('replace')
const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'stage-3' ]
        }
      }
    ]
  },
  plugins: [
    // Workaround for https://github.com/ethereum/web3.js/issues/555:
    new WebpackOnBuildPlugin(function (stats) {
      replace({
        regex: '\u00A0',
        replacement: ' ',
        paths: [ path.resolve(__dirname, 'dist', 'bundle.js') ]
      })
    })
  ]
}
