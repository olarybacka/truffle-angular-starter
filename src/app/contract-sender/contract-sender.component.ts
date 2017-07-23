import { Web3Service } from './../web3.service';
import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import contract from 'truffle-contract';
import * as pong_artifacts from '../../../build/contracts/Pong.json';


@Component({
  selector: 'app-contract-sender',
  templateUrl: './contract-sender.component.html',
  styleUrls: ['./contract-sender.component.scss']
})
export class ContractSenderComponent implements OnInit {
  Pong = contract(pong_artifacts);
  web3: Web3;
  accountNumber: number;
  balance: number;
  status: string;
  amount: number;
  account: number;

  constructor(private _web3Service: Web3Service) { }

  ngOnInit() {
    this.web3 = this._web3Service.getWeb3();
    this.Pong.setProvider(this.web3.currentProvider);
    this.getAccount();
    this.web3.eth.getAccounts((err, accounts) => {
      if (err !== null) {
        alert('There was an error fetching your accounts.');
        console.error(err);
        return;
      }
      if (accounts.length === 0) {
        alert(`Couldn't get any accounts`);
        return;
      }
      this.account = accounts[0];
      console.dir(this.account);
    });
  }

  getAccount() {
    this.Pong.deployed()
    .then(ping => ping.getAddress.call())
    .then(value => this.accountNumber = value);
  }

  onSubmit() {
    this.status = 'Sending... ';
    this.Pong.deployed()
      .then(pong => pong.setPongval(this.amount, {from: this.account}))
      .then(() => this.status = 'Submitted')
      .catch((e) => {
      console.error(e);
      this.status = 'Error';
    });
  }


}
