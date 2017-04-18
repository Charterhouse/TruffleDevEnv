const React = require('babel-preset-react')

module.exports = {
  test: /\.jsx?$/,
  use: [
    'babel-loader'
  ],
  exclude: /node_modules/
}
