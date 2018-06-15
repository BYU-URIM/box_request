import { RootStore } from "../RootStore/RootStore"
import { IUser } from "../../models/StoreModels"

export class SessionStore {
    constructor( _user: IUser, private _root: RootStore) {
        this.currentUser = _user
    }
    currentUser: IUser
    init = async () => {
        return
    }
}
