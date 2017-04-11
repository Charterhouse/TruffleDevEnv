const path = require('path')

module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  include: path.resolve(__dirname, '..', 'app'),
  loader: 'url-loader!img-loader'
}
