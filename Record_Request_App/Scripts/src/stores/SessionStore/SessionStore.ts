import { RootStore } from "../RootStore/RootStore"
import { IUser } from "../../models/StoreModels"
import { computed, observable, action } from "mobx"

export type AppModes = "BoxRequest" | "BoxCreate"

export class SessionStore {
    constructor(_user: IUser, private _root: RootStore) {
        this.currentUser = _user
    }
    currentUser: IUser
    @observable private _appMode: AppModes
    @computed
    get appMode(): AppModes {
        return this._appMode
    }
    set appMode(value: AppModes) {
        this._appMode = value
    }

    @action
    switchApp = async (mode: AppModes) => {
        if (this._appMode !== mode) {
            if (mode === "BoxRequest") await this._root.requestStore.init()
            if (mode === "BoxCreate") await this._root.creatorStore.init()
            this.appMode = mode
        }
    }
    init = async () => {
        return
    }
}
