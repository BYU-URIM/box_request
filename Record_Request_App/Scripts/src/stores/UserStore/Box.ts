import { ItemStatusTypes } from "../../models"
import { action, observable, computed } from "mobx"
import { Folder, IFolderForm, IFolder } from "./Folder"
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
    DateCreated?: string
    ArchivedDate?: string
    DestroyedDate?: string
    RecordCategoryId?: string
    DestructionBatch?: string
    RetentionCategory?: string
    PERM?: string
    College?: string
    RetentionPeriod?: string
    ToBeArchived?: string
    PCODate?: string
    Function?: string
    PERMReviewPeriod?: string
    LastCheckoutDate?: string
    Folders?: Array<IFolder>
}

export interface IBoxForm {
    BoxDescription: string
    BeginDate?: string
    EndDate?: string
    ReviewDate?: string
    PERM?: string
    College?: string
    RetentionPeriod?: string
    ToBeArchived?: string
}

export class Box implements IBox, IObjectWithKey {
    constructor(
        private _root: RootStore,
        _box: IBox,
        _department: Department,
        _folders: Array<IFolder>
    ) {
        this.department = _department
        Object.assign(this, _box)
        this.loadFolders(_folders)
        this.key = this.BoxId.toString()
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
            // tslint:disable-next-line:no-unused-expression
            _folder.addable
            return _folder
        })
    }

    @computed
    get addable(): boolean {
        return !this.boxInCart && this.boxIsAvailable
    }

    /* Addable Condtions */

    @computed
    get boxInCart(): boolean {
        return this._root.checkoutStore.items.has(this.BoxId)
    }

    @computed
    get boxIsAvailable(): boolean {
        return this.status === ItemStatusTypes.available
    }

    @computed
    get status(): ItemStatusTypes {
        return this.boxInCart
            ? ItemStatusTypes.inCheckout
            : this.CurrentLocation.toLowerCase().startsWith("l")
                ? ItemStatusTypes.available
                : this.CurrentLocation.toLowerCase().startsWith("d")
                    ? ItemStatusTypes.checkedOutByClient
                    : ItemStatusTypes.unavailable
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
    }

    @action
    remove = () => {
        this._root.checkoutStore.items.delete(this.BoxId)
    }

    @action
    loadFolders = (_folderData: Array<IFolder>) => {
        this._folders = []
        this.addFolders(_folderData)
    }

    @action
    addFolder = (_folder: IFolder) => {
        this._folders.push(new Folder(this, _folder, this._root))
    }

    @action
    addFolders = (_folders: Array<IFolder>) => {
        _folders.forEach(_folder =>
            this._folders.push(new Folder(this, _folder, this._root))
        )
    }

    @action
    createFolder = async _folderForm => {
        const res = await this._root.dataService.createFolder({
            BoxId: this.BoxId,
            CurrentFolderLocation: this.BoxId,
            ..._folderForm,
        })
        this.addFolder(res)
    }
}
