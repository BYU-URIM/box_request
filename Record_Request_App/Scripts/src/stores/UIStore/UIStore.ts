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

    // Can be manipulated to show a type of form.
    @observable
    form: FormTypes = FormTypes.none

    // Enables a pop-up message bar if its value is not empty.
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

    // Function for the dropdown menu. If the user has more than department, they're given a drop down list and can choose a department. Otherwise, a department is already selected for them.
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

    // Allows department id and name to be combined into the options for the drop down menu.
    @computed
    get userDepartmentsAsOptions(): Array<IOption> {
        return this._root.userInfo.departments.map(
            (_department: IDepartment) => ({
                key: _department.id,
                text: `${_department.id} - ${_department.name}`,
            })
        )
    }

    // Closes the form.
    @action
    closeForm = () => {
        this.form = FormTypes.none
    }

    // Clears the message and hides the message bar.
    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.message = undefined
    }

    // Opens the message bar, closes the form, and empties the cart.
    @action
    submitRequest = (): void => {
        this._root.checkoutStore.clearCart()
        this.form = FormTypes.none
        this.message = this.messages.Cart_Submit_Success
    }
}
