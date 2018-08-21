import { IFolder, ItemStatusTypes } from "../../models"
import { IDataService } from "../../services"
import { action, observable, computed } from "mobx"
import { CheckoutStore } from "../CheckoutStore"
import { Box } from "."
export class Folder implements IFolder {
    constructor(
        private _dS: IDataService,
        private _checkoutStore: CheckoutStore,
        private _box: Box,
        _folder: IFolder
    ) {
        Object.assign(this, _folder)
    }
    
    FolderId: number
    FolderName: string
    BoxId: number
    FolderDescription: string
    CurrentFolderLocation: string
    PCODate?: string
    DateCreated?: string
    objectType= "folder"

    @computed
    get addable(): boolean {
        return this._checkoutStore.items.has(this.BoxId) ||
            this._checkoutStore.items.has(this.FolderId)
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

    @action
    request = () => {
        this._checkoutStore.items.set(this.FolderId, this)
    }

    @action
    remove = () => {
        this._checkoutStore.items.delete(this.FolderId)
    }
}
