import { action, observable, runInAction, computed, ObservableMap } from "mobx"
import {
    IMockUser,
    IBoxDataArrObj,
    mockUser,
    IFolderDataArrObj,
    boxData,
    folderData,
} from "../res"
import { IBoxDataObj, IFolderDataObj } from "../models/MockData"
import { ModalTypes, IFolderAndBox } from "../models"
export class RootStore {
    boxes: IBoxDataArrObj
    folders: IFolderDataArrObj
    _selectedItems: ObservableMap<number, IFolderAndBox> = observable.map()

    @observable currentUser: IMockUser
    @observable selectedBox?: IBoxDataObj
    @observable modal: ModalTypes = ModalTypes.none
    @observable selectedDepartment: number = 0

    constructor(
        folders: IFolderDataArrObj,
        boxes: IBoxDataArrObj,
        currentUser: IMockUser
    ) {
        this.currentUser = mockUser
        this.boxes = boxes
        this.folders = folders
    }

    @computed
    get firstName(): string {
        return this.currentUser.name
    }

    @computed
    get selectedItems(): Array<IFolderAndBox> {
        return Array.from(this._selectedItems.values())
    }

    @computed
    get filteredBoxes(): Array<IBoxDataObj> {
        return this.boxes.filter(box => box.DepId === this.selectedDepartment)
    }

    @computed
    get filteredFolders(): Array<IFolderDataObj> {
        return this.folders.filter(
            (folder: IFolderDataObj) =>
                folder.BoxID === this.selectedBox.BoxIdBarCode
        )
    }

    @computed
    get checkoutFolderBoxIds(): Array<number> {
        return Array.from(this.selectedItems.values())
            .filter(item => item.BoxID)
            .map(folder => folder.BoxID)
    }

    @computed
    get selectedBoxInCheckout(): boolean {
        return this.selectedBox
            ? this.itemInCheckout(this.selectedBox.BoxIdBarCode)
            : false
    }

    @action
    addItemToCheckout = (item: IFolderAndBox) => {
        console.log(item)

        item.FolderIdBarCode
            ? this._selectedItems.set(item.FolderIdBarCode, item)
            : this._selectedItems.set(item.BoxIdBarCode, item)
    }

    @action
    submitRequest = (items: Map<number, IFolderAndBox>) => {
        console.log(Array.from(this._selectedItems.values()))
        this._selectedItems.clear()
        this.setModalType(ModalTypes.none)
    }

    @action
    setSelectedBox = (_selectedBox: IBoxDataObj) => {
        this.selectedBox = _selectedBox
    }

    @action
    setModalType = (_modal: ModalTypes) => {
        this.modal = _modal
    }

    @action
    selectDepartment = (depId: number) => {
        this.selectedDepartment = depId
        this.setSelectedBox(undefined)
    }
    @action
    removeItemFromCheckout = (itemNum: number) =>
        this._selectedItems.delete(itemNum)

    @action
    itemInCheckout = (itemNum: number): boolean =>
        this._selectedItems.has(itemNum)
}

export const rootStore = new RootStore(folderData, boxData, mockUser)
