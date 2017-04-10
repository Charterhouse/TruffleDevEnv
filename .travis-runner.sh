#!/bin/sh

startdir="$(cd `dirname $0`; pwd)"

( cd ${startdir}/src/app-contracts && yarn install )
( cd ${startdir}/src/app-contracts && yarn run testrpc & )
( cd ${startdir}/src/app-webapp && yarn install )
( cd ${startdir}/src/app-restserver && yarn install )

yarn install

# Make sure testrpc is fully up and running
sleep 5

( cd ${startdir} && yarn test )
