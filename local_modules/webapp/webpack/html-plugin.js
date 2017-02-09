const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new HtmlWebpackPlugin({
  inject: true,
  template: 'index.html'
})
