const path = require('path')

module.exports = {
  test: /\.css$/,
  include: path.resolve(__dirname, '..', 'app'),
  loader: 'style-loader!css-loader!postcss-loader'
}
