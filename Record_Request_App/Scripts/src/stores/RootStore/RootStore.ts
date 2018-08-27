import { action, observable, runInAction } from "mobx"
import { IDataService } from "../../services/"
import { UIStore, CheckoutStore, DataStore, User, IUser } from ".."

export class RootStore {
    uiStore: UIStore
    checkoutStore: CheckoutStore
    dataStore: DataStore
    user: User
    dataService: IDataService
    constructor(_user: IUser, _dataService: IDataService) {
        this.dataService = _dataService
        this.user = new User(_user)
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
