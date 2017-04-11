import Web3 from 'web3'
/* globals web3 */
import appContracts from 'app-contracts'

let web3Provider
if (typeof web3 !== 'undefined') {
  web3Provider = web3.currentProvider
} else {
  web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
}
appContracts.setProvider(web3Provider)

const ourWeb3 = new Web3(web3Provider)
appContracts.setTransactionDefaults({
  from: ourWeb3.eth.accounts[0],
  gas: 600000 // you probably want to tweak this for production...
})

module.exports = {
  web3: ourWeb3,
  ...appContracts
}
