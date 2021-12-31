import { makeObservable, observable } from 'mobx';

import { AuthServices, CommonServices } from '@/api';
import { UserManager } from '@/managers/UserManager';
import { NetworkManager } from '@/managers/NetworkManager';
import { ContractServices } from '@/api/contract-services';
import { PropertyValuationServices } from '@/api/propertyValuation-service';

class AppStore {
  @observable userManager = new UserManager();

  @observable networkManager = new NetworkManager();


  authServices = new AuthServices();

  commonServices = new CommonServices();

  contractServices = new ContractServices();

  propertyServices = new PropertyValuationServices();

  constructor() {
      makeObservable(this);
  }
}

export type AppStoreType = AppStore;
export default AppStore;
