import { RootStore } from "../RootStore/RootStore"
import { IUser, IDepartment } from "../../models/StoreModels"
import { computed, observable, action } from "mobx"

export type AppModes = "BoxRequest" | "BoxCreate"

export class SessionStore {
    constructor(_user: IUser, private _root: RootStore) {
        this.currentUser = _user
    }
    currentUser: IUser
    @observable private _appMode: AppModes
    @observable private _departmentId: number

    @computed
    get department(): IDepartment {
        return this.currentUser.departments.length === 1
            ? this.currentUser.departments[0]
            : this.currentUser.departments.find(
                  _department => _department.id === this._departmentId
              )
    }
    @computed
    get departmentId(): number {
        return this._departmentId
    }
    set departmentId(_departmentId: number) {
        this._departmentId = _departmentId
    }
    @computed
    get appMode(): AppModes {
        return this._appMode
    }
    set appMode(value: AppModes) {
        this._appMode = value
    }

    @computed
    get userDepartments(): any {
        return this.currentUser.departments
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
