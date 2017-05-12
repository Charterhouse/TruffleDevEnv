const contract = require('truffle-contract')

const contractNames = [ 'ConvertLib', 'MetaCoin' ]

let contracts = {}
contractNames.forEach(function (name) {
  const json = require(`./build/contracts/${name}.json`)
  contracts[name] = contract(json)
})

function setProvider (web3Provider) {
  for (let name in contracts) {
    contracts[name].setProvider(web3Provider)
  }
}

function setTransactionDefaults (defaults) {
  for (let name in contracts) {
    contracts[name].defaults(defaults)
  }
}

module.exports = Object.assign({}, contracts, {
  setTransactionDefaults: setTransactionDefaults,
  setProvider: setProvider
})
