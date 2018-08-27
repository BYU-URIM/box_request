import { ItemStatusTypes } from "../../models"
import { IDataService } from "../../services"
import { action, observable, computed } from "mobx"
import { Folder } from "./Folder"
import { CheckoutStore } from ".."
import { Department } from "./Department"
export interface IBox {
    BoxId: number
    BoxDescription: string
    CurrentLocation: string
    DepartmentName: string
    DeptId: number
    BeginDate?: string
    EndDate?: string
    ReviewDate?: string
    PERM?: string
    College?: string
    RetentionPeriod?: string
    ToBeArchived?: string
}

export class Box implements IBox {
    constructor(
        private _dS: IDataService,
        private _checkoutStore: CheckoutStore,
        private _department: Department,
        _box: IBox
    ) {
        Object.assign(this, _box)
        this.key = _box.BoxId.toString()
        this.loadFolders()
    }
    info: IBox

    BoxId: number
    CurrentLocation: string = ""
    DepartmentName: string
    DeptId: number
    BoxDescription: string
    key: string

    @observable
    private _folders: Array<Folder> = []

    @computed
    get folders(): Array<Folder> {
        return this._folders
    }

    @computed
    get dataFromFolders(): Array<Folder> {
        return this.folders.map(_folder => {
            // tslint:disable-next-line:no-unused-expression
            _folder.addable
            return _folder
        })
    }

    @computed
    get addable(): boolean {
        return !this._checkoutStore.items.has(this.BoxId)
    }

    @computed
    get status(): ItemStatusTypes {
        return this.CurrentLocation === String(this.DeptId)
            ? ItemStatusTypes.checkedOutByClient
            : this.CurrentLocation.toLowerCase().startsWith("l") &&
              this.CurrentLocation.toLowerCase() !== "legal"
                ? ItemStatusTypes.available
                : ItemStatusTypes.unavailable
    }

    @action
    select = () => {
        this._department.selectedBox = this as Box
    }

    @action
    request = () => {
        this._checkoutStore.items.set(this.BoxId, this)
    }

    @action
    remove = () => {
        this._checkoutStore.items.delete(this.BoxId)
    }

    @action
    loadFolders = () => {
        this._folders = []
        this._dS.fetchFoldersByBoxId(this.BoxId).then(_folders => {
            for (const _folder of _folders) {
                this._folders.push(
                    new Folder(this._dS, this._checkoutStore, this, _folder)
                )
            }
        })
    }
}
