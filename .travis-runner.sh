#!/bin/sh

### ( cd local_modules/contracts && yarn install )
### ( cd local_modules/contracts && yarn run testrpc )
### sleep 5
yarn test
ls local_modules/webapp/node_modules/.bin
