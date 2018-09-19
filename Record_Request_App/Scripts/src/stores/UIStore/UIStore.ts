import { action, observable, computed } from "mobx"
import { FormTypes, IDropdownInfo } from "../../models"
import { RootStore, FolderForm, RequestForm, FormStore } from ".."
import { messages, Message, BoxForm } from "."
import { FORMS } from "../../res"
import { IFolder, User } from "../UserStore"

export class UIStore {
    constructor(private _root: RootStore) {
        this.userStore = this._root.userStore
        this.init()
    }

    messages = messages
    userStore: User

    @observable
    initialized: boolean = false

    @observable
    folderForm: FolderForm

    @observable
    boxForm: BoxForm

    @observable
    requestForm: RequestForm

    @observable
    form: FormTypes = FormTypes.none

    @computed
    get formStore(): FormStore {
        return new FormStore(
            FORMS[this.form],
            this.form === FormTypes.NEW_BOX
                ? this.userStore.selectedDepartment.createBox
                : this.userStore.selectedBox.createFolder,
            this.closeForm
        )
    }

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
        // setTimeout(this.clearMessage, msg.time | 8000)
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

    @action
    init = async () => {
        this.initialized = true

        return
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
    createFolder = (): void => {
        this._root.dataService.createFolder({
            BoxId: this._root.userStore.selectedBox.BoxId,
            FolderName: this.folderForm.folderName,
            CurrentFolderLocation: String(
                this._root.userStore.selectedBox.BoxId
            ),
            FolderDescription: "",
        })

        this.form = FormTypes.none
        /* reload folders for this box so that the folderList reflects the new folder */
        this._root.userStore.selectedBox.loadFolders()
    }

    @action
    submitRequest = (): void => {
        this._root.checkoutStore.clearCart()
        this.form = FormTypes.none
        this.message = this.messages.Cart_Submit_Success
    }
}
