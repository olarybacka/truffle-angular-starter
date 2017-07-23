# Truffle Angular Ethereum Solidity dapp starter
This is a starter project for developing Angular 2+ app on top of Ethereum [Truffle](https://github.com/trufflesuite/truffle) framework. 

Built with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3. 

Features two contracts written in Solidity that deploy to TestRPC network and communicate with each other. Based on Ping ang Pong from [Solidity Baby Steps](https://github.com/fivedogit/solidity-baby-steps)

## Building
1. Clone the repo
2. Install dependencies 
* with `yarn` or `npm install`
3. Install truffle and testrpc globally (yarn or npm)
* (sudo) npm install -g truffle
* (sudo) npm install -g ethereumjs-testrpc
4. Run [testrpc](https://github.com/ethereumjs/testrpc)
* `testrpc`
5. deploy contracts in different console
* `truffle compile`
* `truffle migrate`
6. serve Angular (on http://localhost:8080)
* `npm start`

## Testing
[Truffle](https://github.com/trufflesuite/truffle) comes with integrated testing enviroment with Mocha and Chai. Write tests and run

 `truffle test`.
