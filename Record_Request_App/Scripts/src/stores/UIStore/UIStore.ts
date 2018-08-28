import { action, observable, computed } from "mobx"
import { IFolderOrBox, IOption } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import { RootStore, FolderForm, RequestForm } from ".."
import { messages } from "."
import { Message, MessageTypes } from "./Message"
export class UIStore {
    constructor(private _root: RootStore) {
        this.init()
        this.message = "five-folders"
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

    @computed
    get departmentDropdownOptions(): Array<IOption> {
        return this._root.dataStore.userDepartmentsAsOptions
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
        // if (!this.cartContains) {
        //     this.checkoutStore.addToCart(this.folders[this.folders.length - 1])
        // }
        this.modal = ModalTypes.none
        /* reload folders for this box so that the folderList reflects the new folder */
        this._root.dataStore.selectedBox.loadFolders()
    }

    @action
    submitRequest = (): void => {
        this._root.checkoutStore.clearCart()
        this.modal = ModalTypes.none
        this.message = "cart-submit-success"
        // this.mBarType = MessageBarType.success
        // this.msgBarMessage = "Thank you. Your order has been submitted."
    }

    @action
    removeParentBox = () => {
        this.clearMessage()
        // this.removeFromCart(this._root.dataStore.selectedBox.BoxId)
    }

    // @action
    // removeFromCart = (itemKey: number) =>
    //     this._root.checkoutStore.items.delete(itemKey)

    @action
    removeChildFolders = () => {
        if (this.countChildFolders(this._root.dataStore.selectedBox) >= 5)
            // this.checkoutStore.addToCart(
            //     this._root.dataStore.selectedDepartment.selectedBox
            // )

            // this._root.checkoutStore.cart.forEach(checkedItem => {
            //     if (
            //         checkedItem.BoxId ===
            //         this._root.dataStore.selectedDepartment.selectedBox.BoxId
            //     )
            //         this.removeFromCart(checkedItem.FolderId)
            // })
            this.clearMessage()
    }

    @action
    countChildFolders = (parentBox: IFolderOrBox): number => {
        return this._root.checkoutStore.cart.filter(
            item => item.BoxId === parentBox.BoxId
        ).length
    }
}
