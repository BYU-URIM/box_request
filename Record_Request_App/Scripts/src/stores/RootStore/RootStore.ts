import { action, observable, runInAction } from "mobx"
import { IUser } from "../../models/StoreModels"
import { UIStore } from "../UIStore/UIStore"
import { IDataService } from "../../services/DataService/IDataService"
import { DataStore } from "../DataStore"
import { CheckoutStore } from "../CheckoutStore"

export class RootStore {
    uiStore: UIStore
    checkoutStore: CheckoutStore
    dataStore: DataStore
    user: IUser
    dataService: IDataService
    constructor(_currentUser: IUser, _dataService: IDataService) {
        this.dataService = _dataService
        this.user = _currentUser
    }

    @observable
    public initialized: boolean = false

    @action
    async init(): Promise<void> {
        if (!this.initialized) {
            this.checkoutStore = new CheckoutStore(this)
            this.dataStore = new DataStore(this)
            this.uiStore = new UIStore(this)
            await this.uiStore.init()
            await this.dataStore.init()
            runInAction(() => (this.initialized = true))
        }
    }
}
