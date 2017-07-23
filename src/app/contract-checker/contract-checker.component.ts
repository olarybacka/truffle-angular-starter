import { Web3Service } from './../web3.service';
import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import contract from 'truffle-contract';
import * as ping_artifacts from '../../../build/contracts/Ping.json';

@Component({
  selector: 'app-contract-checker',
  templateUrl: './contract-checker.component.html',
  styleUrls: ['./contract-checker.component.scss']
})
export class ContractCheckerComponent implements OnInit {
  Ping = contract(ping_artifacts);
  web3: Web3;
  accountNumber: number;
  remoteAccountNumber: number;
  balance: number;
  constructor(private _web3Service: Web3Service) { }

  ngOnInit() {
    this.web3 = this._web3Service.getWeb3();
    this.Ping.setProvider(this.web3.currentProvider);
    this.getAccount();
  }

  getAccount(): void {
    this.Ping.deployed()
    .then(ping => ping.getAddress.call())
    .then(value => this.accountNumber = value);
  }

  checkBalance(): void {
    this.Ping.deployed().then(ping => {
      ping.getPongvalRemote().then((value) => {
        this.balance = value.toNumber();
      });
      ping.getPongAddress().then(value => {
        this.remoteAccountNumber = value;
      });
    });
  }
}
