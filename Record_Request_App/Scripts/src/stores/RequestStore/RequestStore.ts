import { action, observable, computed, ObservableMap } from "mobx"
import { IBoxDataArrObj, IFolderDataArrObj } from "../../res"
import { IBoxDataObj, IFolderDataObj } from "../../models/MockData"
import { ModalTypes, IFolderAndBox, CheckoutTypes } from "../../models"
import { RootStore } from "../RootStore/RootStore"
import { FolderForm } from "./FolderForm"
export class RequestStore {
    boxes: IBoxDataArrObj = undefined
    folders: IFolderDataArrObj = undefined
    folderForm: FolderForm
    _selectedItems: ObservableMap<IFolderAndBox> = observable.map()

    @observable selectedBox?: IBoxDataObj
    @observable modal: ModalTypes = ModalTypes.none
    @observable selectedDepartment: number = 0

    @observable deliveryInstructions: string = ""
    @observable checkoutCart: any
    @observable requestIsUrgent: boolean = false
    @observable requestIsPermanent: boolean = false

    constructor(
        folders: IFolderDataArrObj,
        boxes: IBoxDataArrObj,
        private root: RootStore
    ) {
        this.boxes = boxes
        this.folders = folders
    }

    init = async () => {
        return
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
    get filteredFolderNames(): Array<string> {
        return this.folders
            .filter(
                (folder: IFolderDataObj) =>
                    folder.BoxID === this.selectedBox.BoxIdBarCode
            )
            .map(folder => folder.FolderName.toLowerCase())
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
            ? this.itemInCheckout(this.selectedBox.BoxIdBarCode.toString())
            : false
    }

    // Not currently using
    @action
    updateIsPermanent = (): boolean => {
        return (this.requestIsPermanent = !this.requestIsPermanent)
    }

    // Not currently using
    @action
    updateIsUrgent = (): boolean => {
        return (this.requestIsUrgent = !this.requestIsUrgent)
    }

    // Not currently usingthis.dataService
    @action
    finalRequest = request => {
        console.log(request)
    }

    // Not currently usingthis.dataService
    @action
    updateDeliveryInstructions = (instructionInput: string) => {
        this.deliveryInstructions = instructionInput
    }

    getBox = (boxIdBarCode: number): IBoxDataObj =>
        this.boxes.find(box => box.BoxIdBarCode === boxIdBarCode)

    @action
    createFolder = (): void => {
        this.folders.push({
            BoxID: this.selectedBox.BoxIdBarCode,
            FolderName: this.folderForm.folderName,
            FolderIdBarCode: this.folders.length + 1,
            Location: this.selectedBox.Location,
            Folder_Description: "",
        })
        console.log(this.folders)
    }

    @action
    addItemToCheckout = (item: IFolderAndBox) => {
        item.FolderIdBarCode
            ? this._selectedItems.set(item.FolderIdBarCode.toString(), item)
            : this._selectedItems.set(item.BoxIdBarCode.toString(), item)
    }

    @action
    submitRequest = (items: Map<number, IFolderAndBox>) => {
        this._selectedItems.forEach(item => {
            item.Location = String(this.selectedDepartment)
            console.log(this.determineCheckoutType(item))
        })
        console.log(this.selectedDepartment)
        this._selectedItems.clear()
        this.setModalType(ModalTypes.none)
    }

    @action
    setSelectedBox = (_selectedBox: IBoxDataObj) => {
        this.selectedBox = _selectedBox
    }

    @action
    setModalType = (_modal: ModalTypes) => {
        if (_modal === ModalTypes.create) {
            this.folderForm = new FolderForm(this.filteredFolderNames)
        }
        this.modal = _modal
    }

    @action
    chooseDepartment = (depId: number) => {
        this.selectedDepartment = depId
        this.setSelectedBox(undefined)
    }
    @action
    removeItemFromCheckout = (itemNum: string) => {
        this._selectedItems.delete(itemNum)
    }

    @action
    itemInCheckout = (itemNum: string): boolean =>
        this._selectedItems.has(itemNum)

    // Not working when submitting folders
    @action
    determineCheckoutType = (item: IFolderAndBox): string => {
        let checkoutStatus: CheckoutTypes = CheckoutTypes.none
        let status = ""

        if (
            item.Location.charAt(0) === "L" ||
            item.BoxID === Number(item.Location)
        ) {
            checkoutStatus = CheckoutTypes.none
            status = "+ Add Item to Checkout"
        } else if (item.Location === String(this.selectedDepartment)) {
            checkoutStatus = CheckoutTypes.depPossession
            status = "- In Your Possession"
        } else {
            checkoutStatus = CheckoutTypes.notAvailable
            status = "- Item Not Available"
        }
        return status
    }
}
