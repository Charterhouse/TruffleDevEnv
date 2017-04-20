const isPortReachable = require('is-port-reachable')
const spawn = require('child-process-promise').spawn
const fs = require('fs-extra-promise')
const path = require('path')

const ropstenPort = 8546

async function deploy () {
  if (await isPortReachable(ropstenPort)) {
    await ropstenAvailable()
  } else {
    ropstenUnavailable()
  }
}

async function ropstenAvailable () {
  console.log(`Deploying to ethereum node running on port ${ropstenPort}.`)

  const buildDir = path.join(__dirname, '..', 'build')
  const tempDir = path.join(__dirname, '..', 'build.orig')
  const releaseDir = path.join(__dirname, '..', 'released')

  await fs.moveAsync(buildDir, tempDir)
  await fs.moveAsync(releaseDir, buildDir)

  try {
    await truffleMigrate()
    await truffleNetworksClean()
  } finally {
    await fs.moveAsync(buildDir, releaseDir)
    await fs.moveAsync(tempDir, buildDir)
  }
}

async function truffleMigrate () {
  await spawn(
    'yarn', ['run', 'truffle', 'migrate', '--', '--network', 'ropsten'],
    { stdio: 'inherit' }
  )
}

async function truffleNetworksClean () {
  await spawn(
    'yarn', ['run', 'truffle', 'networks', '--', '--clean'],
    { stdio: 'inherit' }
  )
}

function ropstenUnavailable () {
  console.error(
    `Error: No ethereum node was found on port ${ropstenPort}. ` +
    'Did you start Geth correctly?\n' +
    'For example:\n'
  )
  console.error(
    `  geth --testnet -rpc --rpcport ${ropstenPort} ` +
    '-rpcapi "eth,net,web3,personal" --unlock 0\n'
  )
  process.exit(1)
}

deploy()
