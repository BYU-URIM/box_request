import { action, observable, runInAction } from "mobx"
import { SessionStore } from "../SessionStore/SessionStore"
import { IUser } from "../../models/StoreModels"
import { RequestStore } from "../RequestStore/RequestStore"
import { IDataService } from "../../services/DataService/IDataService"
import { RecordsStore } from "../RecordsStore"

export class RootStore {
    sessionStore: SessionStore
    requestStore: RequestStore
    recordsStore: RecordsStore
    constructor(
        private _currentUser: IUser,
        private _folderData,
        private _boxData,
        private _dataService?: IDataService
    ) {}

    @observable
    public initialized: boolean = false

    @action
    async init(): Promise<void> {
        if (!this.initialized) {
            this.sessionStore = new SessionStore(this._currentUser, this)
            this.recordsStore = new RecordsStore(
                this,
                this.sessionStore.user,
                this._dataService
            )
            this.requestStore = new RequestStore(
                this._folderData,
                this._boxData,
                this
            )
            await this.sessionStore.init()
            await this.requestStore.init()
            await this.recordsStore.init()
            runInAction(() => (this.initialized = true))
        }
    }
}
