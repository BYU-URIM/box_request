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
    constructor(
        folders: IFolderDataArrObj,
        boxes: IBoxDataArrObj,
        currentUser: IMockUser
    ) {
        this.currentUser = mockUser
        this.boxes = boxes
        this.folders = folders
    }
    boxes: IBoxDataArrObj
    folders: IFolderDataArrObj

    @observable currentUser: IMockUser
    @observable selectedBox?: IBoxDataObj
    @observable modal: ModalTypes = ModalTypes.none
    @observable selectedDepartment: number = 0
    selectedItems: ObservableMap<number, IFolderAndBox> = observable.map<number, IFolderAndBox>()


    @computed
    get firstName(): string {
        return this.currentUser.name
    }

    @action
    itemInCheckout = (itemNum: number): boolean => {
        if (this.selectedItems.has(itemNum)) {
            const x = this.selectedItems.values()
            const selectedItems = Array.from(
                this.selectedItems.values()
            ).filter(item => {
                return item.BoxID !== itemNum
            })
            console.log(selectedItems)
            for (let i = 0; i < this.selectedItems.size; i++) {
                const y = x.next().value
                if (y.BoxID === itemNum) {
                    this.selectedItems.delete(y.FolderIdBarCode)
                }
            }
            return true
        } else {
            return false
        }
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
            ? this.boxInCheckout(this.selectedBox.BoxIdBarCode)
            : false
    }

    @action
    addItemToCheckout = (item: IFolderAndBox) => {
        console.log(item)

        item.FolderIdBarCode
            ? this.selectedItems.set(item.FolderIdBarCode, item)
            : this.selectedItems.set(item.BoxIdBarCode, item)
    }

    @action
    submitRequest = (items: Map<number, IFolderAndBox>) => {
        console.log(Array.from(this.selectedItems.values()))
        this.selectedItems.clear()
        this.setModalType(ModalTypes.none)
    }

    @action
    removeItemFromCheckout = (itemNum: number) =>
        this.selectedItems.delete(itemNum)

    @action
    boxInCheckout = (itemNum: number): boolean =>
        this.selectedItems.has(itemNum)
    // } else {
    //         const selectedItems = Array.from(
    //             this.selectedItems.values()
    //         ).filter(item => {
    //             return item.BoxID !== itemNum
    //         })
    //         console.log(selectedItems)
    //         for (let i = 0; i < this.selectedItems.size; i++) {
    //             const y = x.next().value
    //             if (y.BoxID === itemNum) {
    //                 this.selectedItems.delete(y.FolderIdBarCode)
    //             }
    //         }
    //         return true
    //     }
}

export const rootStore = new RootStore(folderData, boxData, mockUser)
