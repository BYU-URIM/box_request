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
import { ModalTypes, IFolderAndBox, CheckoutTypes } from "../models"
export class RootStore {
    boxes: IBoxDataArrObj
    folders: IFolderDataArrObj
    _selectedItems: ObservableMap<number, IFolderAndBox> = observable.map()

    @observable currentUser: IMockUser
    @observable selectedBox?: IBoxDataObj
    @observable modal: ModalTypes = ModalTypes.none
    @observable selectedDepartment: number = 0
    @observable folderNameError: string = ""
    @observable folderNameVal: string = ""
    @observable deliveryInstructions: string = ""
    @observable checkoutCart: any
    @observable requestIsUrgent: boolean = false
    @observable requestIsPermanent: boolean = false

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

    // Not currently using
    @action
    updateIsPermanent(): boolean {
        return (this.requestIsPermanent = !this.requestIsPermanent)
    }

    // Not currently using
    @action
    updateIsUrgent(): boolean {
        return (this.requestIsUrgent = !this.requestIsUrgent)
    }

    // Not currently using    
    @action
    finalRequest = request => {
        this.checkoutCart = request
    }

    // Not currently using    
    @action
    updateDeliveryInstructions = (instructionInput: string) => {
        this.deliveryInstructions = instructionInput
    }

    @action
    getBox = (boxIdBarCode: number): IBoxDataObj => this.boxes.find(box => box.BoxIdBarCode === boxIdBarCode)
    

    @action
    createFolder = (): void => {
        this.folders.push({
            BoxID: this.selectedBox.BoxIdBarCode,
            FolderName: this.folderNameVal,
            FolderIdBarCode: this.folders.length + 1,
            Location: this.selectedBox.Location,
            Folder_Description: "",
        })
        console.log(this.folders)
    }

    @action
    addItemToCheckout = (item: IFolderAndBox) => {
        item.FolderIdBarCode
            ? this._selectedItems.set(item.FolderIdBarCode, item)
            : this._selectedItems.set(item.BoxIdBarCode, item)        
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
        this.modal = _modal
    }

    @action
    chooseDepartment = (depId: number) => {
        this.selectedDepartment = depId
        this.setSelectedBox(undefined)
    }
    @action
    removeItemFromCheckout = (itemNum: number) => {
        this._selectedItems.delete(itemNum)
        this.getBox(itemNum).Location === "L0000000"
        this.determineCheckoutType
    }

    @action
    itemInCheckout = (itemNum: number): boolean =>
        this._selectedItems.has(itemNum)

    @action
    onNameError = (inputName: string): void => {
        inputName.length > 50
            ? (this.folderNameError = `Length should be less than 50, actual is ${
                  inputName.length
              }`)
            : this.filteredFolders
                  .map(folder => folder.FolderName)
                  .find(folderName => folderName === inputName)
                ? (this.folderNameError = `A folder already exists with that name in this box.`)
                : (this.folderNameError = "")
    }

    @action
    onNameChange = (inputName: string): void => {
        this.onNameError(inputName)
        this.folderNameVal = inputName
    }

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

export const rootStore = new RootStore(folderData, boxData, mockUser)

//   fmsData = async () => await this.props.dataService.getAll()

//   init = async () => {
//     const data = await this.props.dataService.getAll()
//     this.setState({ fmsData: data })
//   }
//   async componentWillMount() {
//     await this.init()
//   }

// @computed
// get allFoldersAdded(): boolean {
//     const folders = this.filteredFolders
//     let allFoldersAdded = false
//     for (const folder of folders) {
//         if (!this._selectedItems.has(folder.FolderIdBarCode)) {
//             allFoldersAdded = false
//             break
//         }
//         allFoldersAdded = this._selectedItems.has(folder.FolderIdBarCode)}
//         if (allFoldersAdded) {
//             for (const folder of folders) {
//                 this._selectedItems.delete(folder.FolderIdBarCode)
//                 this._selectedItems.set(folder.BoxID, this.selectedBox as IFolderAndBox)
//             }
//         }
//     return allFoldersAdded
// }
