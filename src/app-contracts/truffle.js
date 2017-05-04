module.exports = {
  networks: {
    ropsten: {
      host: 'localhost',
      port: 8546,
      network_id: 3
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
