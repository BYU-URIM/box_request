import { IDropdownInfo } from "../../models"
import { computed, observable, action } from "mobx"
import { User } from "."
import { RootStore } from ".."

export class UserStore {
    constructor(private _root: RootStore) {
        this.user = new User(this._root, this._root.userInfo)
    }

    @observable
    user: User

    @computed
    get dropdownInfo(): IDropdownInfo {
        const info: IDropdownInfo = {
            title: "",
            key: this.user.selectedDepartment
                ? this.user.selectedDepartment.id
                : 0,
            style: "",
            placeHolder: "Departments",
        }
        if (this.user.selectedDepartment) {
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
        this.user = new User(this._root, this._root.userInfo)
    }
}
