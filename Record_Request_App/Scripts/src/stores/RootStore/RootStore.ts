import { action, observable, runInAction } from "mobx"
import { SessionStore } from "../SessionStore/SessionStore"
import { IUser } from "../../models/StoreModels"
import { RequestStore } from "../RequestStore/RequestStore"

export class RootStore {
    sessionStore: SessionStore
    requestStore: RequestStore
    constructor(
        private _currentUser: IUser,
        private _folderData,
        private _boxData
    ) {}

    @observable public initialized: boolean = false

    @action
    async init(): Promise<void> {
        if (!this.initialized) {
            this.sessionStore = new SessionStore(this._currentUser, this)
            await this.sessionStore.init()
            this.requestStore = new RequestStore(
                this._folderData,
                this._boxData,
                this
            )
            await this.requestStore.init()
            runInAction(() => (this.initialized = true))
        }
    }
}
