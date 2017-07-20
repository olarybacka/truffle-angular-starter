import { Component, OnInit } from "@angular/core";
import { default as Web3} from "web3";
import { default as contract } from "truffle-contract";
import * as pong_artifacts from "../../../build/contracts/Pong.json";


@Component({
  selector: "app-contract-sender",
  templateUrl: "./contract-sender.component.html",
  styleUrls: ["./contract-sender.component.scss"]
})
export class ContractSenderComponent implements OnInit {
  Pong = contract(pong_artifacts);
  web3: Web3;
  accountNumber: number;
  balance: number;
  status: string;
  amount: number;
  accounts: number[];
  account: number;

  constructor() { }

  ngOnInit() {
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    this.Pong.setProvider(this.web3.currentProvider);
    this.getAccount();
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      if (accs.length === 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
      this.accounts = accs;
      this.account = this.accounts[0];
      console.dir(this.accounts)
    });
  }

  getAccount() {
    this.Pong.deployed()
    .then(ping => {
      return ping.getAddress.call();
    })
    .then(value => {
        this.accountNumber = value;
    });
  }

  onSubmit() {
    this.setStatus("Wysyłanie... ");
    this.Pong.deployed()
    .then(pong => {
      return pong.setPongval(this.amount, {from: this.account});
    }).then(() => {
      this.setStatus("Wysłano pomyślnie!");
    })
    .catch((e) => {
      console.log(e);
      this.setStatus("Error");
    });
  }

  setStatus(message) {
    this.status = message;
    setTimeout(() => {
     this.status = "";
    }, 2000);
  }

}
