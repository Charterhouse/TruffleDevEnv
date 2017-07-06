const isPortReachable = require('is-port-reachable')
const spawn = require('child-process-promise').spawn
const fs = require('fs-extra-promise')
const path = require('path')

async function deploy (networkName, networkPort, gethArgs) {
  async function networkAvailable () {
    console.log(`Deploying to ethereum node running on port ${networkPort}.`)

    const buildDir = path.join(__dirname, '..', 'build')
    const releaseDir = path.join(__dirname, '..', 'released', networkName)

    await fs.removeAsync(buildDir)
    await fs.moveAsync(releaseDir, buildDir)

    try {
      await truffleMigrate()
      await truffleNetworksClean()
    } finally {
      await fs.moveAsync(buildDir, releaseDir)
      await fs.copyAsync(releaseDir, buildDir)
    }
  }

  async function truffleMigrate () {
    await spawn(
      'yarn', ['run', 'truffle', 'migrate', '--', '--network', networkName],
      { stdio: 'inherit' }
    )
  }

  async function truffleNetworksClean () {
    await spawn(
      'yarn', ['run', 'truffle', 'networks', '--', '--clean'],
      { stdio: 'inherit' }
    )
  }

  function networkUnavailable () {
    console.error(
      `Error: No ethereum node was found on port ${networkPort}. ` +
      'Did you start Geth correctly?\n' +
      'For example:\n'
    )
    console.error(
      `  geth ${gethArgs} -rpc --rpcport ${networkPort} ` +
      '-rpcapi "eth,net,web3,personal" --unlock 0\n'
    )
    process.exit(1)
  }

  if (await isPortReachable(networkPort)) {
    await networkAvailable()
  } else {
    networkUnavailable()
  }
}

module.exports = deploy
