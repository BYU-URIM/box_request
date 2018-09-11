import { Box } from "."
import { action, observable, computed } from "mobx"
import { RootStore } from "../RootStore"

export interface IDepartment {
    name: string
    id: number
}

export class Department {
    constructor(private _root: RootStore, _department: IDepartment) {
        Object.assign(this, _department)
        this.loadBoxes()
    }
    id: number
    name: string
    @observable
    private _boxes: Array<Box> = []

    @computed
    get boxes(): Array<Box> {
        return this._boxes.map(_box => {
            // tslint:disable-next-line:no-unused-expression
            _box.addable
            return _box
        })
    }

    @observable
    private _selectedBox?: Box = undefined

    @computed
    get selectedBox(): Box {
        return this._selectedBox
    }

    set selectedBox(_box: Box) {
        this._selectedBox = _box
    }

    @action
    select = () => {
        this.selectedBox = undefined
        this._root.userStore.selectedDepartment = this
    }

    @action
    loadBoxes = () => {
        this._boxes = []
        this._root.dataService.fetchBoxesByDepId(this.id).then(_boxes => {
            for (const _box of _boxes) {
                this._boxes.push(new Box(this._root, _box, this))
            }
        })
    }
}
