import { action, observable, runInAction } from "mobx"
import { SessionStore } from "../SessionStore/SessionStore"
import { IUser } from "../../models/StoreModels"
import { RequestStore } from "../RequestStore/RequestStore"
import { IDataService } from "../../services/IDataService"
import { CreatorStore } from "../CreatorStore/CreatorStore"

export class RootStore {
    sessionStore: SessionStore
    requestStore: RequestStore
    creatorStore: CreatorStore
    constructor(
        private _currentUser: IUser,
        private _folderData,
        private _boxData,
        private _dataService: IDataService
    ) {}

    @observable public initialized: boolean = false

    @action
    async init(): Promise<void> {
        if (!this.initialized) {
            this.sessionStore = new SessionStore(this._currentUser, this)
            this.requestStore = new RequestStore(
                this._folderData,
                this._boxData,
                this
            )
            this.creatorStore = new CreatorStore(this)
            await this.sessionStore.init()
            runInAction(() => (this.initialized = true))
        }
    }
}
