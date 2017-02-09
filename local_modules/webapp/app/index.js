import React from 'react'
import ReactDOM from 'react-dom'

import contract from 'truffle-contract'
import metacoinJson from 'contracts/build/contracts/MetaCoin.json'
const MetaCoin = contract(metacoinJson)

import Web3 from 'web3'

var web3Location = `http://localhost:8545`

window.addEventListener('load', function () {
  var web3Provided
  // Supports Metamask and Mist, and other wallets that provide 'web3'.
  if (typeof web3 !== 'undefined') {
    // Use the Mist/wallet provider.
    // eslint-disable-next-line
    web3Provided = new Web3(web3.currentProvider);
  } else {
    web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location))
  }

  MetaCoin.setProvider(web3Provided.currentProvider)
  MetaCoin.deployed()
    .then(function (deployed) {
      let account = web3Provided.eth.accounts[0]
      return deployed.getBalanceInEth.call(account, {from: account})
    })
    .then(function (balance) {
      console.debug('Balance: ' + balance.toNumber())
    })

  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root'))
})
