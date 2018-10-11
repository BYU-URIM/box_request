import { action, observable, computed } from "mobx"
import { RootStore, UserStore, FormTypes, IOption, IDepartment } from ".."

import { messages, Message } from "."

export interface IDropdownInfo {
    title: string
    key: number
    placeHolder: string
}
export class UIStore {
    constructor(private _root: RootStore) {}

    messages = messages

    @observable
    initialized: boolean = false

    @observable
    form: FormTypes = FormTypes.none

    @observable
    dialogMessage: string = ""

    @observable
    private _message: Message

    @computed
    get message(): Message {
        return this._message
    }

    set message(msg: Message) {
        this._message = msg
    }

    @computed
    get dropdownInfo(): IDropdownInfo {
        const info: IDropdownInfo = {
            title: "",
            key: this._root.userStore.selectedDepartment
                ? this._root.userStore.selectedDepartment.id
                : 0,
            placeHolder: "Departments",
        }
        info.title = this._root.userStore.selectedDepartment
            ? "Your Department:"
            : "Select a Department:"

        return info
    }

    @computed
    get userDepartmentsAsOptions(): Array<IOption> {
        return this._root.userInfo.departments.map(
            (_department: IDepartment) => ({
                key: _department.id,
                text: `${_department.id} - ${_department.name}`,
            })
        )
    }

    @action
    closeForm = () => {
        this.form = FormTypes.none
    }

    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.message = undefined
    }

    @action
    submitRequest = (): void => {
        this._root.checkoutStore.clearCart()
        this.form = FormTypes.none
        this.message = this.messages.Cart_Submit_Success
    }
}
