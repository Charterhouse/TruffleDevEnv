const contract = require('truffle-contract')

const ConvertLibJSON = require('./build/contracts/ConvertLib.json')
const MetaCoinJSON = require('./build/contracts/MetaCoin.json')

const ConvertLib = contract(ConvertLibJSON)
const MetaCoin = contract(MetaCoinJSON)

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
