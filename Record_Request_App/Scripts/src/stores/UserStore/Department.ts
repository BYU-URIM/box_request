import { action, observable, computed } from "mobx"
import { RootStore, Box } from ".."

export interface IDepartment {
    name: string
    id: number
}
/*
Departments are created from the Department class, but must be obtained from accessing the User and determining what Departments the User belongs to.
*/
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
            /* this de-reference is necessary to re-cache _box.addable */
            /* tslint:disable-next-line:no-unused-expression */
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
    loadBoxes = async () => {
        this._root.userStore.loading = true
        this._boxes = []
        const res = await this._root.dataService.fetchDepartmentData(this.id)
        for (const _box of await res) {
            this._boxes.push(new Box(this._root, _box, this, _box.Folders))
        }
        this._root.userStore.loading = false
    }

    @action
    createBox = _boxForm => {
        this._root.dataService.createBox({
            ..._boxForm,
            DeptId: this.id,
            DepartmentName: this.name,
            BoxId: Math.random(),
            CurrentLocation: this.id.toString(),
        })
        this.loadBoxes()
    }
}
