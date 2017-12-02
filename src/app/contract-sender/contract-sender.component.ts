import {Component, OnInit} from "@angular/core";
import {PongDeployed, PongService, PongStaticData} from "./pong.service";
import {MyOwnAccount} from "../app.component";
import {AppState, DeployedAndStaticData, EthObservable} from "eth-observable";

@Component({
  selector: 'app-contract-sender',
  templateUrl: './contract-sender.component.html',
  styleUrls: ['./contract-sender.component.scss']
})
export class ContractSenderComponent implements OnInit {
  pong: DeployedAndStaticData<PongDeployed, PongStaticData, MyOwnAccount>;
  amount: number;

  constructor(public _ethObservable: EthObservable, private _pongService: PongService) {
  }

  ngOnInit() {
    this._pongService.pong$.subscribe((data) => {
      this.pong = data;
    });
  }

  onSubmit() {
    this.pong.deployed.setPongval(this.amount, {from: this.pong.yoursAccounts.getAccounts()});
    this._ethObservable.refresh(this._pongService);
  }


  initialize(appState: AppState) {
    return this._pongService.initialize(this._ethObservable, this._pongService, appState);
  }


}
