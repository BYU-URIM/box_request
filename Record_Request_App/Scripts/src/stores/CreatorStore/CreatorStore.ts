import { RootStore } from "../RootStore/RootStore"
import { action } from "mobx"
import { SessionStore } from "../SessionStore"

export class CreatorStore {
    sessionStore: SessionStore
    constructor(private _root: RootStore) {}
    @action
    init = async () => {
        this.sessionStore = this._root.sessionStore
        return
    }
}
