import express from 'express'
import contract from 'truffle-contract'
import metacoinJson from 'contracts/build/contracts/MetaCoin.json'
const MetaCoin = contract(metacoinJson)

MetaCoin.deployed()

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
