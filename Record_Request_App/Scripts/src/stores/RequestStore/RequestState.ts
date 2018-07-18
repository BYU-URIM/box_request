import { ModalTypes, ItemStatusTypes } from "../../models"
import { observable, computed, action } from "mobx"

import {
    IBox,
    IFolder,
    IFolderOrBox,
} from "../../models/StoreModels"
import { MessageBarType } from "office-ui-fabric-react"
import { SessionStore } from "../SessionStore/SessionStore"

export interface IDropdownInfo {
    title: string
    key: number
    style: string
    placeHolder: string
}
export class RequestState {
    sessionStore: SessionStore
    constructor(
        _sessionStore: SessionStore,
        private _folders: Array<IFolder>,
        private _boxes: Array<IBox>
    ) {
        this.sessionStore = _sessionStore
    }

    @observable private _modal: ModalTypes = ModalTypes.none
    @observable private _box: IBox = undefined
    @observable private _folder: IFolder = undefined
    @observable private _dialogMessage: string = ""
    @observable private _msgBarMessage: string = ""
    @observable private _mBarType: MessageBarType = undefined
    @observable private _itemStatus: ItemStatusTypes = ItemStatusTypes.available
    @observable
    private _cart: Map<number, IFolderOrBox> = observable.map<
        number,
        IFolderOrBox
    >()

    @action
    addToCart = (item: IFolderOrBox) => {
        if (!item.FolderIdBarCode) this.removeChildFoldersMessage(item)

        this._cart.set(
            item.FolderIdBarCode ? item.FolderIdBarCode : item.BoxIdBarCode,
            item
        )
        this.removeGroupedFoldersMessage(item)
    }
    @action clearCart = () => this._cart.clear()
    @action removeFromCart = (itemKey: number) => this._cart.delete(itemKey)

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
            (a, b) => a.BoxIdBarCode - b.BoxIdBarCode
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
            .filter(box => box.DepId === this.sessionStore.department.id)
            .map(box => ({
                ...box,
                inCart: this.cartContains(box),
            }))
    }

    @computed
    get sortBoxes(): Array<IBox> {
        return this.boxes.sort((a, b) => a.BoxIdBarCode - b.BoxIdBarCode)
    }

    @computed
    get folders(): Array<IFolder> {
        return (
            this.box &&
            this._folders
                .filter(
                    (folder: IFolder) =>
                        folder.BoxIdBarCode === this.box.BoxIdBarCode
                )
                .map(folder => ({
                    ...folder,
                    inCart: this.cartContains(folder),
                }))
        )
    }

    @computed
    get dropdownInfo(): IDropdownInfo {
        const info: IDropdownInfo = {
            title: "",
            key: this.sessionStore.department.id || undefined,
            style: "",
            placeHolder: "Departments",
        }
        if (this.sessionStore.department) {
            info.style = "ms-Grid-col ms-sm2  ms-smPush1"
            info.title = "Your Department:"
        } else {
            info.style = "ms-Grid-col ms-sm4 ms-smPush4"
            info.title = "Select one of your available departments:"
        }

        return info
    }

    @action
    cartContains = (item: IFolderOrBox): boolean => {
        if (item.FolderIdBarCode) {
            return (
                this._cart.has(item.BoxIdBarCode) ||
                this._cart.has(item.FolderIdBarCode)
            )
        } else {
            return this._cart.has(item.BoxIdBarCode)
        }
    }

    @action
    removeChildFoldersMessage = (box: IFolderOrBox) => {
        this.cart.forEach(item => {
            if (
                item.BoxIdBarCode !== undefined &&
                item.BoxIdBarCode === box.BoxIdBarCode
            ) {
                this.dialogMessage = `You just added Box ${
                    box.BoxIdBarCode
                }. Would you like to remove Box ${
                    box.BoxIdBarCode
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
            if (checkedItem.BoxIdBarCode === this.box.BoxIdBarCode)
                this.removeFromCart(checkedItem.FolderIdBarCode)
        })
        this.clearMessage()
    }

    @action
    removeGroupedFoldersMessage = (folder: IFolderOrBox) => {
        if (this.countChildFolders(folder) >= 5) {
            this.dialogMessage = `You just added 5 folders from Box ${
                this.box.BoxIdBarCode
            }. We recommend that you checkout the box instead. Would you like to remove these folders and check out Box ${
                this.box.BoxIdBarCode
            }?`
        }
    }

    @action
    countChildFolders = (parentBox: IFolderOrBox): number => {
        return this.cart.filter(
            item => item.BoxIdBarCode === parentBox.BoxIdBarCode
        ).length
    }

    @action
    removeParentBox = () => {
        this.clearMessage()
        this.removeFromCart(this.box.BoxIdBarCode)
    }
}
