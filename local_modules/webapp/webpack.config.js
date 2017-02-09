const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackOnBuildPlugin = require('on-build-webpack')
const replace = require('replace')
const path = require('path')
const fs = require('fs')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'stage-3' ],
          plugins: [ 'transform-runtime' ]
        }
      }
    ]
  },
  devServer: {
    contentBase: 'dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    }),
    // Workaround for https://github.com/ethereum/web3.js/issues/555:
    new WebpackOnBuildPlugin(function (stats) {
      const bundle = path.resolve(__dirname, 'dist', 'bundle.js')
      if (fs.existsSync(bundle)) {
        replace({
          regex: '\u00A0',
          replacement: ' ',
          paths: [ bundle ]
        })
      }
    })
  ]
}
