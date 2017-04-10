import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import contract from 'truffle-contract'
import metacoinJson from 'contracts/build/contracts/MetaCoin.json'
const MetaCoin = contract(metacoinJson)

MetaCoin.deployed()

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)
