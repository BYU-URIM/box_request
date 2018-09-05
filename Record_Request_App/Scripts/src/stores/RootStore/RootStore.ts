import { action, observable, runInAction } from "mobx"
import { IDataService } from "../../services"
import { UIStore, CheckoutStore, UserStore, IUser } from ".."

export class RootStore {
    uiStore: UIStore
    checkoutStore: CheckoutStore
    userStore: UserStore
    userInfo: IUser
    dataService: IDataService
    constructor(_user: IUser, _dataService: IDataService) {
        this.dataService = _dataService
        this.userInfo = _user
    }

    @observable
    public initialized: boolean = false

    @action
    async init(): Promise<void> {
        if (!this.initialized) {
            this.checkoutStore = new CheckoutStore(this)
            this.userStore = new UserStore(this)
            this.uiStore = new UIStore(this)
            await this.uiStore.init()
            await this.userStore.init()
            runInAction(() => (this.initialized = true))
        }
    }
}
