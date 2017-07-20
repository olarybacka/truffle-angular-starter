import { Component, OnInit } from "@angular/core";
import { default as Web3} from "web3";
import { default as contract } from "truffle-contract";
import * as ping_artifacts from "../../../build/contracts/Ping.json";

@Component({
  selector: "app-contract-checker",
  templateUrl: "./contract-checker.component.html",
  styleUrls: ["./contract-checker.component.scss"]
})
export class ContractCheckerComponent implements OnInit {
  Ping = contract(ping_artifacts);
  web3: Web3;
  accountNumber: number;
  remoteAccountNumber: number;
  balance: number;
  constructor() { }

  ngOnInit() {
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    this.Ping.setProvider(this.web3.currentProvider);
    this.getAccount();
    console.log(this.web3);
  }

  getAccount() {
    this.Ping.deployed()
    .then(ping => {
      return ping.getAddress.call();
    })
    .then(value => {
        this.accountNumber = value;
    });
  }

  checkBalance() {
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
