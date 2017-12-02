import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {default as Web3} from "web3";
import * as pong_artifacts from "../../../build/contracts/Pong.json";
import {ContractEnum, MyOwnAccount} from "../app.component";
import {InitializeContract, DeployedAndStaticData, ValuesContract, EthObservable, initializeContractHelper,
  hideValuesHelper,
  AppState,
  ContractValues, TruffleContract} from "eth-observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PongService implements InitializeContract<ContractEnum>, ValuesContract<PongDeployed, PongStaticData> {
  private pongSource = new Subject<DeployedAndStaticData<PongDeployed, PongStaticData, MyOwnAccount>>();
  pong$ = this.pongSource.asObservable();

  public dependsOnModifier = [true, true];

  constructor() {
  }


  getUniqueName(): ContractEnum {
    return ContractEnum.PONG;
  }


  initialize(contractFactoryService: EthObservable, contractsEnum: InitializeContract<ContractEnum>, app: AppState): Observable<any> {
    return initializeContractHelper(contractFactoryService, this, this, pong_artifacts, this.pongSource, app);
  }

  hideValues(array: any[]): any[] {
    return hideValuesHelper(array, this.dependsOnModifier);
  }


  getContractValuesPromise(deployed: PongDeployed, web3: Web3, hideVal: InitializeContract<any>): Promise<ContractValues<PongDeployed, PongStaticData>> {
    const values = [deployed.pongval, deployed.getAddress.call()];
    return Promise.all(hideVal.hideValues(values))
      .then(data => {
        return new PongContract(deployed, new PongStaticData(data[0], data[1]));
      });
  }
}


export interface PongDeployed extends TruffleContract {
  pongval
  getAddress;
  getPongvalTransactional()
  getPongvalConstant()

  setPongval(_pongval, from)
  getPongvalTxRetrievalAttempted()


  kill()
}

export class PongStaticData {
  constructor(public pongval: string, public creator: string) {
  }
}

export class PongContract implements ContractValues<PongDeployed, PongStaticData> {

  constructor(public deployed: PongDeployed, public contract: PongStaticData) {
  }

  getDeployed(): PongDeployed {
    return this.deployed;
  }

  getStaticData(): PongStaticData {
    return this.contract;
  }
}
