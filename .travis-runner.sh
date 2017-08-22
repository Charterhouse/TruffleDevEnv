#!/bin/sh

startdir="$(cd `dirname $0`; pwd)"

( cd ${startdir}/src/app-contracts && yarn install )
( cd ${startdir}/src/app-webapp && yarn install )
( cd ${startdir}/src/app-restserver && yarn install )

yarn install

( cd ${startdir} && yarn test )
