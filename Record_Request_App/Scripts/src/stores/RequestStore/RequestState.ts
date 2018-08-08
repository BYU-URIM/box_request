import { ModalTypes, ItemStatusTypes } from "../../models"
import { observable, computed, action } from "mobx"

import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"
import { MessageBarType } from "office-ui-fabric-react"
import { SessionStore } from "../SessionStore/SessionStore"


export class RequestState {
    sessionStore: SessionStore
    constructor(
        _sessionStore: SessionStore,
        private _folders: Array<IFolder>,
        private _boxes: Array<IBox>
    ) {
        this.sessionStore = _sessionStore
    }

    @observable
    private _modal: ModalTypes = ModalTypes.none
    @observable
    private _box: IBox = undefined
    @observable
    private _folder: IFolder = undefined
    @observable
    private _dialogMessage: string = ""
    @observable
    private _msgBarMessage: string = ""
    @observable
    private _mBarType: MessageBarType = undefined
    @observable
    private _itemStatus: ItemStatusTypes = ItemStatusTypes.available
    @observable
    private _cart: Map<number, IFolderOrBox> = observable.map<
        number,
        IFolderOrBox
    >()

    @action
    addToCart = (item: IFolderOrBox) => {
        if (!item.FolderId) this.removeChildFoldersMessage(item)

        this._cart.set(
            item.FolderId ? item.FolderId : item.BoxId,
            item
        )
        this.removeGroupedFoldersMessage(item)
    }
    @action
    clearCart = () => this._cart.clear()
    @action
    removeFromCart = (itemKey: number) => this._cart.delete(itemKey)

    @computed
    get dialogMessage(): string {
        return this._dialogMessage
    }
    set dialogMessage(val: string) {
        this._dialogMessage = val
    }

    @computed
    get msgBarMessage(): string {
        return this._msgBarMessage
    }
    set msgBarMessage(val: string) {
        this._msgBarMessage = val
    }

    @computed
    get mBarType(): MessageBarType {
        return this._mBarType
    }
    set mBarType(val: MessageBarType) {
        this._mBarType = val
    }

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this._cart.values()).sort(
            (a, b) => a.BoxId - b.BoxId
        )
    }

    @computed
    get itemStatus(): ItemStatusTypes {
        return this._itemStatus
    }
    set itemStatus(val: ItemStatusTypes) {
        this._itemStatus = val
    }

    @computed
    get modal(): ModalTypes {
        return this._modal
    }
    set modal(val: ModalTypes) {
        this._modal = val
    }
    @action
    clearModal = () => (this._modal = ModalTypes.none)

    @computed
    get box(): IBox {
        return this._box
    }

    set box(val: IBox) {
        this._box = val
    }

    @computed
    get folder(): IFolder {
        return this._folder
    }

    set folder(val: IFolder) {
        this._folder = val
    }

    @computed
    get boxes(): Array<IBox> {
        return this._boxes
            .filter(box => box.DeptId === this.sessionStore.department.id)
            .map(box => ({
                ...box,
                inCart: this.cartContains(box),
            }))
    }

    @computed
    get sortBoxes(): Array<IBox> {
        return this.boxes.sort((a, b) => a.BoxId - b.BoxId)
    }

    @computed
    get folders(): Array<IFolder> {
        return (
            this.box &&
            this._folders
                .filter(
                    (folder: IFolder) =>
                        folder.BoxId === this.box.BoxId
                )
                .map(folder => ({
                    ...folder,
                    inCart: this.cartContains(folder),
                }))
        )
    }

    // @computed
    // get dropdownInfo(): IDropdownInfo {
    //     const info: IDropdownInfo = {
    //         title: "",
    //         key: this.sessionStore.department.id || undefined,
    //         style: "",
    //         placeHolder: "Departments",
    //     }
    //     if (this.sessionStore.department) {
    //         info.style = "ms-Grid-col ms-sm2  ms-smPush1"
    //         info.title = "Your Department:"
    //     } else {
    //         info.style = "ms-Grid-col ms-sm4 ms-smPush4"
    //         info.title = "Select one of your available departments:"
    //     }

    //     return info
    // }

    @action
    cartContains = (item: IFolderOrBox): boolean => {
        if (item.FolderId) {
            return (
                this._cart.has(item.BoxId) ||
                this._cart.has(item.FolderId)
            )
        } else {
            return this._cart.has(item.BoxId)
        }
    }

    @action
    removeChildFoldersMessage = (box: IFolderOrBox) => {
        this.cart.forEach(item => {
            if (
                item.BoxId !== undefined &&
                item.BoxId === box.BoxId
            ) {
                this.dialogMessage = `You just added Box ${
                    box.BoxId
                }. Would you like to remove Box ${
                    box.BoxId
                }'s folder(s) from checkout?`
            }
        })
    }

    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.msgBarMessage = ""
    }

    @action
    removeChildFolders = () => {
        if (this.countChildFolders(this.box) >= 5) this.addToCart(this.box)

        this.cart.forEach(checkedItem => {
            if (checkedItem.BoxId === this.box.BoxId)
                this.removeFromCart(checkedItem.FolderId)
        })
        this.clearMessage()
    }

    @action
    removeGroupedFoldersMessage = (folder: IFolderOrBox) => {
        if (this.countChildFolders(folder) >= 5) {
            this.dialogMessage = `You just added 5 folders from Box ${
                this.box.BoxId
            }. We recommend that you checkout the box instead. Would you like to remove these folders and check out Box ${
                this.box.BoxId
            }?`
        }
    }

    @action
    countChildFolders = (parentBox: IFolderOrBox): number => {
        return this.cart.filter(
            item => item.BoxId === parentBox.BoxId
        ).length
    }

    @action
    removeParentBox = () => {
        this.clearMessage()
        this.removeFromCart(this.box.BoxId)
    }
}
