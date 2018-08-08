import { IBox, IDepartment } from "../../models"
import { IDataService } from "../../services"
import { Box } from "."
import { action, observable } from "mobx"

export class Department {
    @observable
    id: number
    @observable
    name: string
    @observable
    boxes: Array<Box> = []
    @observable
    selectedBox?: Box = undefined

    constructor(private _dataService: IDataService, _department: IDepartment) {
        this.id = _department.id
        this.name = _department.name
        this.loadBoxes()
    }

    @action
    loadBoxes = async () => {
        this._dataService.fetchBoxesByDepId(this.id).then(async boxData => {
            for (const _box of boxData) {
                const box = new Box(this._dataService, _box)
                await box.loadFolders()
                this.boxes.push(box)
            }
        })
    }
}
