import {Component, OnInit} from "@angular/core";
import {AppState, DeployedAndStaticData, EthObservable, YoursAccounts} from "eth-observable";
import {PingDeployed, PingService, PingStaticData} from "./ping.service";

@Component({
  selector: 'app-contract-checker',
  templateUrl: './contract-checker.component.html',
  styleUrls: ['./contract-checker.component.scss']
})
export class ContractCheckerComponent implements OnInit {

  ping: DeployedAndStaticData<PingDeployed, PingStaticData, string>;

  constructor(public _ethObservable: EthObservable, private _pingService: PingService) {
  }

  ngOnInit() {
    this._pingService.ping$.subscribe((data) => {
      this.ping = data;
    });
  }

  initialize(appState: AppState) {
    return this._pingService.initialize(this._ethObservable, this._pingService, appState);
  }

  checkBalance() {
    this._ethObservable.refresh(this._pingService);
  }
}
