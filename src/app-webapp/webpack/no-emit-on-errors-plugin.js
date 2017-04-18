const webpack = require('webpack')

// do not emit compiled assets that include errors
module.exports = new webpack.NoEmitOnErrorsPlugin()
