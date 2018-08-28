import { ItemStatusTypes } from "../../models"
import { action, computed } from "mobx"
import { Box } from "."
import { RootStore } from "../RootStore"

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
    }

    FolderId: number
    FolderName: string
    BoxId: number
    FolderDescription: string
    CurrentFolderLocation: string
    PCODate?: string
    DateCreated?: string

    @computed
    get addable(): boolean {
        return this._root.checkoutStore.items.has(this.BoxId) ||
            this._root.checkoutStore.items.has(this.FolderId)
            ? false
            : true
    }

    @computed
    get status(): ItemStatusTypes {
        if (this.CurrentFolderLocation === String(this.BoxId)) {
            return this._box.status
        } else if (this.CurrentFolderLocation.toLowerCase() === "legal") {
            return ItemStatusTypes.unavailable
        } else {
            return ItemStatusTypes.checkedOutByClient
        }
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

    @action
    request = () => {
        this._root.checkoutStore.items.set(this.FolderId, this)
        if (this.fiveOrMoreSiblingFolders)
            this._root.uiStore.message = "five-folders"
    }

    @action
    remove = () => {
        this._root.checkoutStore.items.delete(this.FolderId)
    }
}
