import { IUser, IDepartment } from "../../models"
import { computed, observable, action } from "mobx"
import { IDataService } from "../../services"
import { Department, Box } from "."
import { IOption, RootStore, CheckoutStore } from ".."
import { IDropdownInfo } from "../SessionStore"
import { Folder } from "./Folder"

export class DataStore {
    @observable
    private _selectedDepartment: Department = undefined
    
    @observable
    departments: Array<Department> = []
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
            this.selectedBox &&
            this.selectedDepartment.selectedBox.selectedFolder
        )
    }

    constructor(
        private _root: RootStore,
        private _user: IUser,
        private _dataService: IDataService,
        private _checkoutStore: CheckoutStore
    ) {
        this.init()
    }

    @action
    init = async () => {
        this.departments = []
        await this.loadDepartments()
    }
    @action
    loadDepartments = async (): Promise<void> => {
        for (const _department of this._user.departments) {
            const dep = new Department(
                this._dataService,
                this._checkoutStore,
                _department
            )
            this.departments.push(dep)
        }
    }

    @computed
    get userDepartmentsAsOptions(): Array<IOption> {
        return this.departments.map((department: IDepartment) => ({
            key: department.id,
            text: `${department.id} - ${department.name}`,
        }))
    }

    @computed
    get dropdownInfo(): IDropdownInfo {
        const info: IDropdownInfo = {
            title: "",
            key: this.selectedDepartment ? this.selectedDepartment.id : 0,
            style: "",
            placeHolder: "Departments",
        }
        if (this.selectedDepartment) {
            info.style = "ms-Grid-col ms-sm2  ms-smPush1"
            info.title = "Your Department:"
        } else {
            info.style = "ms-Grid-col ms-sm4 ms-smPush4"
            info.title = "Select one of your available departments:"
        }

        return info
    }
}
