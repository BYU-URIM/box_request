import { RootStore } from "../RootStore/RootStore"
import { IUser, IDepartment } from "../../models/StoreModels"
import { computed, observable, action } from "mobx"
import { IDataService } from "../../services"
import { Department } from "."
import { IOption, IDropdownInfo } from ".."

export class RecordsStore {
    @observable
    departments: Array<Department> = []
    @observable
    isLoading: boolean = true
    @observable
    selectedDepartment?: Department = undefined

    constructor(
        private _root: RootStore,
        private _user: IUser,
        private _dataService: IDataService
    ) {
        this.init()
    }

    @action
    init = async () => {
        this.departments = []
        this.isLoading = true
        await this.loadDepartments()
        this.isLoading = false
    }
    @action
    loadDepartments = async (): Promise<void> => {
        for (const _department of this._user.departments) {
            const dep = new Department(this._dataService, _department)
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
            key: this.selectedDepartment
                ? this.selectedDepartment.id
                : 0,
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
