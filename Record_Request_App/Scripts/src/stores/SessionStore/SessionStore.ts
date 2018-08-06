import { RootStore } from "../RootStore/RootStore"
import { IUser, IDepartment } from "../../models/StoreModels"
import { computed, observable, action } from "mobx"

export interface IOption {
    key: number
    text: string
}
export class SessionStore {
    constructor(_user: IUser, private _root: RootStore) {
        this.user = _user
        this._departmentId = this.userDepartments[0].id
    }
    user: IUser
    @observable
    private _departmentId: number
    @computed
    get departmentId(): number {
        return this._departmentId
    }
    set departmentId(value: number) {
        this._departmentId = value
    }

    @computed
    get department(): IDepartment {
        return this.user.departments.length === 1
            ? this.user.departments[0]
            : this.user.departments.find(
                  _department => _department.id === this._departmentId
              )
    }
    set department(val: IDepartment) {
        this._departmentId = val.id
    }

    @computed
    get userDepartments(): Array<IDepartment> {
        return this.user.departments
    }

    @computed
    get userDepartmentsAsOptions(): Array<IOption> {
        return this.userDepartments.map((department: IDepartment) => ({
            key: department.id,
            text: `${department.id} - ${department.name}`,
        }))
    }

    init = async () => {
        return
    }
}
