#!/bin/sh

startdir="$(cd `dirname $0`; pwd)"

( cd ${startdir}/local_modules/contracts && yarn install )
( cd ${startdir}/local_modules/contracts && yarn run testrpc & )
( cd ${startdir} && sleep 5 && yarn test )

ls ${startdir}/local_modules/webapp/node_modules/.bin
