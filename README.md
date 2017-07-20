# Truffle Angular Ethereum Solidity dapp starter
Use this code repository as starter project for developing Angular 2+ app on top of Ethereum Truffle framework. 

Built with Angular CLI version 1.0.3. 

Features two contracts written in Solidity that deploy to TestRPC network and communicate with each other

## Building
1. Clone the repo
2. Install dependencies with `yarn` or `npm install`
3. Run [testrpc](https://github.com/ethereumjs/testrpc)
* `testrpc`
4. deploy contracts in different console
* `truffle compile`
* `truffle migrate`
5. serve Angular (on http://localhost:8080)
* `npm start`

## Testing
[Truffle](https://github.com/trufflesuite/truffle) comes with integrated testing enviroment with Mocha and Chai. Write tests and run

 `truffle test`.
