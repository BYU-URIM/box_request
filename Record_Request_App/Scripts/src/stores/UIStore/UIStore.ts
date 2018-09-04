import { action, observable, computed } from "mobx"
import { ModalTypes } from "../../models"
import { RootStore, FolderForm, RequestForm } from ".."
import { messages, Message, MessageTypes } from "."

export class UIStore {
    constructor(private _root: RootStore) {
        this.init()
    }

    messages: Array<Message> = messages

    @observable
    initialized: boolean = false

    @observable
    folderForm: FolderForm

    @observable
    requestForm: RequestForm

    @observable
    modal: ModalTypes = ModalTypes.none

    @observable
    dialogMessage: string = ""

    @observable
    private _message: MessageTypes

    @computed
    get message(): MessageTypes {
        return this._message
    }
    set message(value: MessageTypes) {
        this._message = value
    }

    @computed
    get messageInfo(): Message {
        return this.messages.filter(_msg => _msg.name === this.message)[0]
    }

    @action
    init = async () => {
        this.initialized = true
        return
    }

    @action
    clearModal = () => (this.modal = ModalTypes.none)

    @action
    initializeFolderForm = (): void => {
        this.modal = ModalTypes.create
        this.folderForm = new FolderForm(
            this._root.dataStore.selectedBox.folders.map(_folder =>
                _folder.FolderName.toLowerCase()
            )
        )
    }

    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.message = undefined
    }

    @action
    createFolder = (): void => {
        this._root.dataService.createFolder({
            BoxId: this._root.dataStore.selectedBox.BoxId,
            FolderName: this.folderForm.folderName,
            CurrentFolderLocation: String(
                this._root.dataStore.selectedBox.BoxId
            ),
            FolderDescription: "",
        })

        this.modal = ModalTypes.none
        /* reload folders for this box so that the folderList reflects the new folder */
        this._root.dataStore.selectedBox.loadFolders()
    }

    @action
    submitRequest = (): void => {
        this._root.checkoutStore.clearCart()
        this.modal = ModalTypes.none
        this.message = "cart-submit-success"
    }
}
