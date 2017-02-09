#!/bin/sh

( cd local_modules/contracts && yarn install )
export TESTRPC_PID=""
( cd local_modules/contracts && yarn run testrpc & TESTRPC_PID=$! )
sleep 5
echo "******** TESTRPC PID: $TESTRPC_PID"
yarn test
kill -9 $TESTRPC_PID
