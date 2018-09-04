import { ItemStatusTypes } from "../../models"
import { action, computed, observable } from "mobx"
import { Box } from "."
import { RootStore } from "../RootStore"
import { CheckoutStore } from "../CheckoutStore"

export interface IFolder {
    FolderId?: number
    FolderName: string
    BoxId: number
    FolderDescription: string
    CurrentFolderLocation: string
    PCODate?: string
    DateCreated?: string
}

export class Folder implements IFolder {
    constructor(private _box: Box, _folder: IFolder, private _root: RootStore) {
        Object.assign(this, _folder)
        this.checkoutStore = this._root.checkoutStore
    }

    FolderId: number
    FolderName: string
    BoxId: number
    FolderDescription: string
    CurrentFolderLocation: string
    PCODate?: string
    DateCreated?: string
    checkoutStore: CheckoutStore

    @computed
    get addable(): boolean {
        return !this.folderInCart && this.folderIsAvailable
    }

    @computed
    get status(): ItemStatusTypes {
        return this.folderInCart
            ? ItemStatusTypes.inCheckout
            : this.CurrentFolderLocation === String(this.BoxId)
                ? this._box.status
                : this.CurrentFolderLocation.toLowerCase() !== "legal"
                    ? ItemStatusTypes.unavailable
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
    get folderInCart(): boolean {
        return (
            this.checkoutStore.items.has(this.FolderId) || this._box.boxInCart
        )
    }

    @computed
    get folderIsAvailable(): boolean {
        return (
            this._box.boxIsAvailable &&
            this.status === ItemStatusTypes.available
        )
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
            ? (this._root.uiStore.message = "five-folders")
            : (this._root.uiStore.message = undefined)
    }

    @action
    remove = () => {
        this.checkoutStore.items.delete(this.FolderId)
        this.fiveOrMoreMiddleware()
    }
}
