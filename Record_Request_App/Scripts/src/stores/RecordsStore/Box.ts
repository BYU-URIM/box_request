import { IBox, IFolder } from "../../models"
import { IDataService } from "../../services"
import { action, observable } from "mobx"

export class Box implements IBox {
    BoxId: number
    CurrentLocation: string
    DepartmentName: string
    DeptId: number
    inCart?: boolean
    BoxDescription: string
    @observable
    folders: Array<IFolder>
    @observable
    selectedFolder: IFolder = undefined

    constructor(private _dataService: IDataService, _box: IBox) {
        Object.assign(this, _box)
        this.loadFolders()
    }

    @action
    loadFolders = async () => {
        this.folders = await this._dataService.fetchFoldersByBoxId(
            this.BoxId
        )
    }
}
