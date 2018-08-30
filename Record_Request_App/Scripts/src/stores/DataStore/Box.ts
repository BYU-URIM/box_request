import { ItemStatusTypes } from "../../models"
import { action, observable, computed } from "mobx"
import { Folder } from "./Folder"
import { RootStore } from ".."
import { Department } from "."
import { IObjectWithKey } from "office-ui-fabric-react"
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

export class Box implements IBox, IObjectWithKey {
    constructor(_department: Department, _box: IBox, private _root: RootStore) {
        Object.assign(this, _box)
        this.department = _department
        this.key = _box.BoxId.toString()
        this.loadFolders()
    }

    department: Department

    BoxId: number
    CurrentLocation: string = ""
    DepartmentName: string
    DeptId: number
    BoxDescription: string
    key: string

    @observable
    private _folders: Array<Folder> = []

    @observable
    private _selectedFolder?: Folder = undefined

    @observable
    private _inCheckout?: boolean = false

    // probably won't work
    @computed
    get inCheckout(): boolean {
        return this._inCheckout
    }
    set inCheckout(_toggle: boolean) {
        this._inCheckout = !this._inCheckout
    }

    @computed
    get selectedFolder(): Folder {
        return this._selectedFolder
    }

    set selectedFolder(_folder: Folder) {
        this._selectedFolder = _folder
    }

    @computed
    get folders(): Array<Folder> {
        return this._folders
    }

    @computed
    get dataFromFolders(): Array<Folder> {
        return this.folders.map(_folder => {
            _folder.addable
            return _folder
        })
    }

    @computed
    get addable(): boolean {
        return this.boxNotInCart && this.boxIsAvailable
    }

    /* Addable Condtions */

    @computed
    get boxNotInCart(): boolean {
        return !this._root.checkoutStore.items.has(this.BoxId)
    }

    @computed
    get boxIsAvailable(): boolean {
        return this.status === ItemStatusTypes.available
    }

    @computed
    get boxInCart(): boolean {
        return this.status === ItemStatusTypes.inCheckout
    }

    @computed
    get status(): ItemStatusTypes {
        return this.inCheckout
            ? ItemStatusTypes.inCheckout
            : this.CurrentLocation === String(this.DeptId)
                ? ItemStatusTypes.checkedOutByClient
                : this.CurrentLocation.toLowerCase().startsWith("l") &&
                  this.CurrentLocation.toLowerCase() !== "legal"
                    ? ItemStatusTypes.available
                    : ItemStatusTypes.unavailable
    }

    @computed
    get classFromStatus(): string {
        // tslint:disable-next-line:max-line-length
        return this.department.selectedBox.status === "In Your Possession"
            ? "in-your-possession"
            : this.department.selectedBox.status === "In Checkout"
                ? "in-checkout"
                : this.department.selectedBox.status
    }

    @action
    select = () => {
        this.selectedFolder = undefined
        this.department.selectedBox = this
    }

    @action
    request = () => {
        this.folders.forEach(_folder => {
            _folder.remove()
        })
        this._root.checkoutStore.items.set(this.BoxId, this)
        this.inCheckout = true
    }

    @action
    remove = () => {
        this._root.checkoutStore.items.delete(this.BoxId)
        this.inCheckout = false
    }

    @action
    loadFolders = () => {
        this._folders = []
        this._root.dataService
            .fetchFoldersByBoxId(this.BoxId)
            .then(_folders => {
                for (const _folder of _folders) {
                    this._folders.push(new Folder(this, _folder, this._root))
                }
            })
    }
}
