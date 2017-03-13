const TransformRuntime = require('babel-plugin-transform-runtime')
const ES2015 = require('babel-preset-es2015')
const React = require('babel-preset-react')
const Stage3 = require('babel-preset-stage-3')

module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [ ES2015, React, Stage3 ],
    plugins: [ TransformRuntime ]
  }
}
