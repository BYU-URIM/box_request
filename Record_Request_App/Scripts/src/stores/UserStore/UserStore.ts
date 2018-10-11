import { IDepartment, Department, Box, Folder, RootStore } from ".."
import { observable, computed, action } from "mobx"

export interface IOption {
    key: number
    text: string
}

export interface IUser {
    name: string
    username: string
    email: string
    Id: string
    departments: Array<IDepartment>
}
export enum ItemStatusTypes {
    available = "Available",
    unavailable = "Unavailable",
    checkedOutByClient = "In Your Possession",
    inCheckout = "In Checkout",
}

export class UserStore implements IUser {
    constructor(private _root: RootStore) {
        Object.assign(this, this._root.userInfo)
    }

    @observable
    departments: Array<Department> = []

    name: string
    username: string
    email: string
    Id: string

    @observable
    private _loading: boolean = false

    @computed
    get loading(): boolean {
        return this._loading
    }

    set loading(value: boolean) {
        this._loading = value
    }

    @observable
    private _selectedDepartment: Department = undefined

    @computed
    get selectedDepartment(): Department {
        return this._selectedDepartment
    }

    set selectedDepartment(value: Department) {
        this._selectedDepartment = value
    }

    @computed
    get selectedBox(): Box {
        return this.selectedDepartment && this.selectedDepartment.selectedBox
    }

    @computed
    get selectedFolder(): Folder {
        return (
            this.selectedDepartment &&
            this.selectedDepartment.selectedBox &&
            this.selectedDepartment.selectedBox.selectedFolder
        )
    }

    @action
    init = async () => {
        this.departments = []
        await this.loadDepartments()
        if (this.departments.length === 1)
            this.selectedDepartment = this.departments[0]
    }

    @action
    loadDepartments = async (): Promise<void> => {
        this.departments = []
        for (const _department of this._root.userInfo.departments) {
            const dep = new Department(this._root, _department)
            this.departments.push(dep)
        }
    }
}
