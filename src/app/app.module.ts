import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContractCheckerComponent } from './contract-checker/contract-checker.component';
import { ContractSenderComponent } from './contract-sender/contract-sender.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractCheckerComponent,
    ContractSenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
