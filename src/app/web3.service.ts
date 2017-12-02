import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  web3: Web3;

  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));
  }

  getWeb3(): Web3 {
    return this.web3;
  }
}
