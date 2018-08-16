import { IBox, IDepartment } from "../../models"
import { IDataService } from "../../services"
import { Box } from "."
import { action, observable } from "mobx"
import { CheckoutStore } from "../CheckoutStore"

export class Department {
    @observable
    id: number
    @observable
    name: string
    @observable
    boxes: Array<Box> = []
    @observable
    selectedBox?: Box = undefined

    constructor(
        private _dS: IDataService,
        private _checkoutStore: CheckoutStore,
        _department: IDepartment
    ) {
        this.id = _department.id
        this.name = _department.name
        this.loadBoxes()
    }

    @action
    loadBoxes = async () => {
        this._dS.fetchBoxesByDepId(this.id).then(async boxData => {
            for (const _box of boxData) {
                this.boxes.push(new Box(this._dS, this._checkoutStore, this, _box))
            }
        })
    }
}
