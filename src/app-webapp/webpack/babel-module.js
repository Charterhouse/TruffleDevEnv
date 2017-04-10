module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [ 'es2015', 'react', 'stage-3' ],
    plugins: [ 'transform-runtime' ]
  }
}
