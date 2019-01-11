import { action, observable, runInAction } from "mobx"
import { IDataService } from "../../services"
import { UIStore, CheckoutStore, IUser, UserStore } from ".."

export class RootStore {
    uiStore: UIStore
    checkoutStore: CheckoutStore
    userInfo: IUser
    userStore: UserStore
    dataService: IDataService
    constructor(_dataService: IDataService) {
        this.dataService = _dataService
    }

    @observable
    public initialized: boolean = false

/*
    Grabs user info and allows access to all other stores.
*/
    @action
    async init(): Promise<void> {
        this.userInfo = await this.dataService.fetchUser()
        if (!this.initialized) {
            this.checkoutStore = new CheckoutStore(this)
            this.userStore = new UserStore(this)
            this.uiStore = new UIStore(this)
            await this.userStore.init()

            runInAction(() => (this.initialized = true))
        }
    }
}
