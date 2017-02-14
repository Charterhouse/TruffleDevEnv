const WebpackOnBuildPlugin = require('on-build-webpack')
const replace = require('replace')
const path = require('path')
const fs = require('fs')

// Workaround for https://github.com/ethereum/web3.js/issues/555:
module.exports = new WebpackOnBuildPlugin(function () {
  const bundle = path.resolve(__dirname, '..', 'dist', 'bundle.js')
  if (fs.existsSync(bundle)) {
    replace({
      regex: '\u00A0',
      replacement: ' ',
      paths: [ bundle ]
    })
  }
})
