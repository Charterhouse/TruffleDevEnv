const contract = require('truffle-contract')

function requireContract (name) {
  return contract(require('./build/contracts/' + name + '.json'))
}

const ConvertLib = requireContract('ConvertLib')
const MetaCoin = requireContract('MetaCoin')

function setProvider (web3Provider) {
  ConvertLib.setProvider(web3Provider)
  MetaCoin.setProvider(web3Provider)
}

function setTransactionDefaults (defaults) {
  ConvertLib.defaults(defaults)
  MetaCoin.defaults(defaults)
}

module.exports = {
  ConvertLib: ConvertLib,
  MetaCoin: MetaCoin,
  setTransactionDefaults: setTransactionDefaults,
  setProvider: setProvider
}
