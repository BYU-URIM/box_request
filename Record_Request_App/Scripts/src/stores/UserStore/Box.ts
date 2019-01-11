import { action, observable, computed } from "mobx"
import { Folder, IFolder, IFolderForm, Department } from "."
import { RootStore } from ".."
import { IObjectWithKey } from "office-ui-fabric-react"
import { ItemStatusTypes } from "./UserStore"
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
/*
    Before we can create a box, we need access access the department, which we get from RootStore and further upstream.
*/
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
/*
    Here we have functions to help us track the folders within the box - is a box within this box selected? Is a folder within this box being requested for checkout?
*/
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
/*
    We need a list of the folders in a box so we can display it for the user.
*/
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
        return !this.inCheckout && this.available
    }

/* 
    Addable Condtions 
*/

    @computed
    get inCheckout(): boolean {
        return this._root.checkoutStore.items.has(this.BoxId)
    }

    @computed
    get available(): boolean {
        return this.status === ItemStatusTypes.available
    }

    @computed
    get status(): ItemStatusTypes {
        return this.inCheckout
            ? ItemStatusTypes.inCheckout
            : this.CurrentLocation.toLowerCase().startsWith("l")
                ? ItemStatusTypes.available
                : this.CurrentLocation === `D${this.BoxId}`
                    ? ItemStatusTypes.checkedOutByClient
                    : ItemStatusTypes.unavailable
    }

    @action
    select = () => {
        this.selectedFolder = undefined
        this.department.selectedBox = this
    }
/*
    If a box is selected, and some of it's folders had been previously selected, remove those folders from checkout and replace it with the recently selected parent box.
*/
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
/*
    Uses the input from the user obtained from the Folder Form to create a new folder and push it into the system.
*/
    @action
    createFolder = async (_formData: IFolderForm) => {
        const res = await this._root.dataService.createFolder({
            BoxId: this.BoxId,
            CurrentFolderLocation: String(this.BoxId),
            ..._formData,
        })
        this.addFolder(res)
        this._root.uiStore.closeForm()
    }
}
