import { action, computed } from "mobx"
import { RootStore, messages, ItemStatusTypes, Box } from ".."
import { IObjectWithKey } from "office-ui-fabric-react"

export interface IFolder {
    FolderId?: number | string
    FolderDescription: string
    BoxId: number
    CurrentFolderLocation?: string
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

    @computed
    get addable(): boolean {
        return !this.inCheckout && this.available
    }

    @computed
    get status(): ItemStatusTypes {
        return this.CurrentFolderLocation !== String(this.BoxId)
            ? ItemStatusTypes.checkedOutByClient
            : this.inCheckout
                ? ItemStatusTypes.inCheckout
                : this.CurrentFolderLocation === String(this.BoxId)
                    ? this._box.status
                    : this._box.status // maybe make this unavailable, would be a bug if it didn't work
    }

    @computed
    get siblingFoldersInCart(): Array<Folder> {
        return this._root.checkoutStore.folders.filter(_item => {
            return _item.BoxId === this.BoxId
        })
    }

    @computed
    get fiveOrMoreSiblingFolders(): boolean {
        return this.siblingFoldersInCart.length > 4
    }

    /* Addable Condtions */

    @computed
    get inCheckout(): boolean {
        return (
            this._root.checkoutStore.items.has(this.FolderId) ||
            this._box.inCheckout
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
        this._root.checkoutStore.items.set(this.FolderId, this)
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
        this._root.checkoutStore.items.delete(this.FolderId)
        this.fiveOrMoreMiddleware()
    }
}
