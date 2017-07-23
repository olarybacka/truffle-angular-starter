import { Injectable } from '@angular/core';
import { default as Web3} from 'web3';

@Injectable()
export class Web3Service {
  constructor() { }

  getWeb3() {
    return new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

}
