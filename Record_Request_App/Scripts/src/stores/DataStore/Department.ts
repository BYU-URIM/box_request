import { IBox, IDepartment } from "../../models"
import { IDataService, DataService } from "../../services"
import { Box } from "."
import { action, observable, computed } from "mobx"
import { CheckoutStore } from "../CheckoutStore"
import { DataStore } from "./DataStore"
import { Selection, SelectionZone } from "office-ui-fabric-react"

export class Department {
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
        this._dataStore.selectedDepartment = this
    }

    constructor(
        private _dS: IDataService,
        private _checkoutStore: CheckoutStore,
        private _dataStore: DataStore,
        _department: IDepartment
    ) {
        Object.assign(this, _department)
        this.loadBoxes()
    }

    @action
    loadBoxes = () => {
        this._boxes = []
        this._dS.fetchBoxesByDepId(this.id).then(_boxes => {
            for (const _box of _boxes) {
                this._boxes.push(
                    new Box(this._dS, this._checkoutStore, this, _box)
                )
            }
        })
    }
}
