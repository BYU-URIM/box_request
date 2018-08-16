import { IBox, IFolder, ItemStatusTypes } from "../../models"
import { IDataService } from "../../services"
import { action, observable, computed } from "mobx"
import { Folder } from "./Folder"
import { CheckoutStore } from ".."
import { Department } from "./Department"

export class Box implements IBox {
    @computed
    get checkoutStore(): CheckoutStore {
        return this._checkoutStore
    }
    set checkoutStore(value: CheckoutStore) {
        this._checkoutStore = value
    }
    BoxId: number
    CurrentLocation: string
    DepartmentName: string
    DeptId: number
    BoxDescription: string

    @observable
    folders: Array<Folder> = []

    @observable
    private _selectedFolder: Folder = undefined

    @computed
    get selectedFolder(): Folder {
        return this._selectedFolder
    }
    set selectedFolder(value: Folder) {
        this._selectedFolder = value
    }

    @computed
    get addable(): boolean {
        console.log(`box ${this.BoxId} addable`)
        
        return !this.checkoutStore.items.has(this.BoxId)
    }

    @computed
    get status(): ItemStatusTypes {
        console.log(`box ${this.BoxId} status`)

        return this.CurrentLocation === String(this.DeptId)
            ? ItemStatusTypes.checkedOutByClient
            : this.CurrentLocation.toLowerCase().startsWith("l") &&
              this.CurrentLocation.toLowerCase() !== "legal"
                ? ItemStatusTypes.available
                : ItemStatusTypes.unavailable
    }

    @computed
    get department(): Department {
        return this._department
    }
    set department(value: Department) {
        this._department = value
    }

    constructor(
        private _dataService: IDataService,
        private _checkoutStore: CheckoutStore,
        private _department: Department,
        _box: IBox
    ) {
        Object.assign(this, _box)
        this.loadFolders()
    }

    @action
    loadFolders = async () => {
        this._dataService.fetchFoldersByBoxId(this.BoxId).then(_folders => {
            for (const _folder of _folders) {
                const folder = new Folder(
                    this._dataService,
                    this._checkoutStore,
                    this,
                    _folder
                )
                this.folders.push(folder)
            }
        })
    }

    @action
    addToCart = () => {
        this.checkoutStore.addToCart(this.BoxId, this)
    }
}
