import { IOption, IDropdownInfo } from "../../models"
import { computed, observable, action } from "mobx"
import { Department, Box, IDepartment } from "."
import { RootStore } from ".."

export class DataStore {
    constructor(_root: RootStore) {
        this.root = _root
        this.init()
    }

    root: RootStore

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
    get userDepartmentsAsOptions(): Array<IOption> {
        return this.departments.map((_department: IDepartment) => ({
            key: _department.id,
            text: `${_department.id} - ${_department.name}`,
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

    @action
    init = async () => {
        this.departments = []
        await this.loadDepartments()
        if (this.departments.length === 1)
            this.selectedDepartment = this.departments[0]
    }
    @action
    loadDepartments = async (): Promise<void> => {
        for (const _department of this.root.user.departments) {
            const dep = new Department(
                this.root.dataService,
                this.root.checkoutStore,
                this,
                _department
            )
            this.departments.push(dep)
        }
    }
}
