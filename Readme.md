Truffle Development Environment
===============================

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
![Travis build status](https://travis-ci.org/Charterhouse/TruffleDevEnv.svg?branch=master)

This is a template project to quickly get started with development of
Ethereum smart contracts and the web interface to them. It provides a
setup based on [Truffle](http://truffleframework.com) for the smart
contracts, and [React](https://facebook.github.io/react/) for client-side
JavaScript. There is also a REST server template based on Node and Express. 
Unit tests are setup for all three (smart contracts, webapp and rest server).

### Usage

1. Check out a clean copy of this repository
2. Remove the git registration (`rm -rf .git`). Probably you now want to 
initialize a new git repo and add the initial state of your project.
3. Make it your own: run `yarn init` for the main module *and* all submodules:
   ```bash
   yarn init
   (cd src/app-contracts; yarn init)
   (cd src/app-restserver; yarn init)
   (cd src/app-webapp; yarn init)
   ```
4. Run `yarn devsetup` to have all Node dependencies installed and local 
modules configured properly.
