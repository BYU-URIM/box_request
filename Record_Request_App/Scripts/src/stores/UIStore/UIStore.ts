import { action, observable } from "mobx"
import { IFolderOrBox } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import { MessageBarType } from "office-ui-fabric-react"
import { RootStore, FolderForm, RequestForm } from ".."
export class UIStore {
    constructor(_root: RootStore) {
        this.root = _root
        this.init()
    }

    root: RootStore

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
    msgBarMessage: string = ""

    @observable
    mBarType: MessageBarType = undefined

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
            this.root.dataStore.selectedBox.folders.map(_folder =>
                _folder.FolderName.toLowerCase()
            )
        )
    }

    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.msgBarMessage = ""
    }

    @action
    createFolder = (): void => {
        this.root.dataService.createFolder({
            BoxId: this.root.dataStore.selectedBox.BoxId,
            FolderName: this.folderForm.folderName,
            CurrentFolderLocation: String(
                this.root.dataStore.selectedBox.BoxId
            ),
            FolderDescription: "",
        })
        // if (!this.cartContains) {
        //     this.checkoutStore.addToCart(this.folders[this.folders.length - 1])
        // }
        this.modal = ModalTypes.none
        /* reload folders for this box so that the folderList reflects the new folder */
        this.root.dataStore.selectedBox.loadFolders()
    }

    @action
    submitRequest = (): void => {
        this.root.checkoutStore.clearCart()
        this.modal = ModalTypes.none
        this.mBarType = MessageBarType.success
        this.msgBarMessage = "Thank you. Your order has been submitted."
    }

    @action
    removeParentBox = () => {
        this.clearMessage()
        // this.removeFromCart(this.root.dataStore.selectedBox.BoxId)
    }

    // @action
    // removeFromCart = (itemKey: number) =>
    //     this.root.checkoutStore.items.delete(itemKey)

    @action
    removeChildFolders = () => {
        if (this.countChildFolders(this.root.dataStore.selectedBox) >= 5)
            // this.checkoutStore.addToCart(
            //     this.root.dataStore.selectedDepartment.selectedBox
            // )

            // this.root.checkoutStore.cart.forEach(checkedItem => {
            //     if (
            //         checkedItem.BoxId ===
            //         this.root.dataStore.selectedDepartment.selectedBox.BoxId
            //     )
            //         this.removeFromCart(checkedItem.FolderId)
            // })
            this.clearMessage()
    }

    @action
    countChildFolders = (parentBox: IFolderOrBox): number => {
        return this.root.checkoutStore.cart.filter(
            item => item.BoxId === parentBox.BoxId
        ).length
    }
}
