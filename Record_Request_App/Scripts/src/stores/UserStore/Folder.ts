import { ItemStatusTypes } from "../../models"
import { action, computed } from "mobx"
import { Box } from "."
import { RootStore } from "../RootStore"
import { CheckoutStore } from "../CheckoutStore"
import { IObjectWithKey } from "office-ui-fabric-react"
import { messages } from "../UIStore"

export interface IFolder {
    FolderId: number | string
    FolderDescription: string
    CurrentFolderLocation: string
    BoxId: number
    DeptId?: number
    BoxDescription?: string
    recordId?: string
    modId?: string
    LastCheckoutDate?: string
    PCODate?: string
    DateCreated?: string
}

export interface IFolderForm {
    FolderDescription: string
}
export class Folder implements IFolder, IObjectWithKey {
    constructor(private _box: Box, _folder: IFolder, private _root: RootStore) {
        Object.assign(this, _folder)
        this.BoxId = _box.BoxId
        this.key = _folder.FolderId
        this.checkoutStore = this._root.checkoutStore
    }
    DeptId: number
    BoxDescription: string
    FolderId: number
    BoxId: number
    FolderDescription: string = "No description available"
    CurrentFolderLocation: string = ""
    LastCheckoutDate?: string
    PCODate?: string
    DateCreated?: string
    recordId?: string
    modId?: string
    key

    checkoutStore: CheckoutStore
    @computed
    get addable(): boolean {
        return !this.inCart && this.available
    }

    @computed
    get status(): ItemStatusTypes {
        return this.CurrentFolderLocation === String(this.BoxId)
            ? this._box.status
            : this._box.status !== ItemStatusTypes.available
                ? this._box.status
                : this.inCart
                    ? ItemStatusTypes.inCheckout
                    : ItemStatusTypes.checkedOutByClient
    }

    @computed
    get siblingFoldersInCart(): Array<Folder> {
        return this.checkoutStore.folders.filter(_item => {
            return _item.BoxId === this.BoxId
        })
    }

    @computed
    get fiveOrMoreSiblingFolders(): boolean {
        return this.siblingFoldersInCart.length > 4
    }

    /* Addable Condtions */

    @computed
    get inCart(): boolean {
        return (
            this.checkoutStore.items.has(this.FolderId) || this._box.inCheckout
        )
    }

    @computed
    get available(): boolean {
        return this._box.available && this.status === ItemStatusTypes.available
    }

    @action
    select = () => {
        this._box.selectedFolder = this
    }

    @action
    request = () => {
        this.checkoutStore.items.set(this.FolderId, this)
        this.fiveOrMoreMiddleware()
    }

    @action
    fiveOrMoreMiddleware = () => {
        this.fiveOrMoreSiblingFolders
            ? (this._root.uiStore.message = messages.Five_Folders)
            : this._root.uiStore.clearMessage()
    }

    @action
    remove = () => {
        this.checkoutStore.items.delete(this.FolderId)
        this.fiveOrMoreMiddleware()
    }
}
