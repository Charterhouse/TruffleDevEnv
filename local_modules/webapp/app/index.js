import contract from 'truffle-contract'
import metacoinJson from 'contracts/build/contracts/MetaCoin.json'
const MetaCoin = contract(metacoinJson)

MetaCoin.deployed()
