const webpack = require('webpack')

// prints more readable module names in the browser console on HMR updates
module.exports = new webpack.NamedModulesPlugin()
