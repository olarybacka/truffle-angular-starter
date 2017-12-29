import {Web3Service} from './web3.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ContractCheckerComponent} from './contract-checker/contract-checker.component';
import {ContractSenderComponent} from './contract-sender/contract-sender.component';
import {StatusComponent} from './status/status.component';
import {PingService} from "./contract-checker/ping.service";
import {EthObservable} from "eth-observable";
import {PongService} from "./contract-sender/pong.service";
@NgModule({
  declarations: [
    AppComponent,
    ContractCheckerComponent,
    ContractSenderComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Web3Service, PingService, EthObservable, PongService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
