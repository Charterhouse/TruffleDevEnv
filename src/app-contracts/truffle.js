const TestRPC = require('ethereumjs-testrpc')

let truffleOptions = {
  networks: {
    ropsten: {
      host: 'localhost',
      port: 8546,
      network_id: 3,
      gas: 4000000
    },
    rinkeby: {
      host: 'localhost',
      port: 8547,
      network_id: 4,
      gas: 4000000
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    testing: {
      network_id: '*',
      provider: TestRPC.provider()
    }
  }
}

let reporterArg = process.argv.indexOf('--reporter')
if (reporterArg >= 0) {
  truffleOptions['mocha'] = {
    reporter: process.argv[reporterArg + 1]
  }
}

module.exports = truffleOptions
