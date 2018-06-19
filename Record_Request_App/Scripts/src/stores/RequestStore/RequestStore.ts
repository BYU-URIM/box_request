import { action, observable, computed, ObservableMap } from "mobx"
import { IBoxArr, IFolderArr } from "../../res"
import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import { RootStore } from "../RootStore/RootStore"
import { FolderForm } from "./FolderForm"
import { RequestForm } from "./RequestForm"
import { RequestState } from "./RequestState"
export class RequestStore {
    @observable boxes: IBoxArr
    @observable folders: IFolderArr

    @observable folderForm: FolderForm
    @observable requestForm: RequestForm
    @observable requestState: RequestState
    @observable deliveryInstructions: string = ""
    @observable checkoutCart: any
    @observable requestIsUrgent: boolean = false
    @observable requestIsPermanent: boolean = false

    constructor(folders: IFolderArr, boxes: IBoxArr, private root: RootStore) {
        this.boxes = boxes
        this.folders = folders
    }

    init = async () => {
        this.requestState = await new RequestState(
            this,
            this.folders,
            this.boxes
        )
        // this.requestState.department = 5556
        // this.requestState.box = this.boxes[1]
        // this.requestState.folder = this.folders[0]
        // this.requestState.addToCart(this.requestState.boxes[0])
        // this.requestState.modal = ModalTypes.submit

        return
    }

    @computed
    get filteredFolderNames(): Array<string> {
        return this.folders
            .filter(
                (folder: IFolder) =>
                    folder.BoxID === this.requestState.box.BoxIdBarCode
            )
            .map(folder => folder.FolderName.toLowerCase())
    }

    @computed
    get checkoutFolderBoxIds(): Array<number> {
        return Array.from(this.requestState.cart.values())
            .filter(item => (item as IFolder).BoxID)
            .map(folder => (folder as IFolder).BoxID)
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

    // Not currently using
    @action
    finalRequest = request => {
        console.log(request)
    }

    // Not currently using
    @action
    updateDeliveryInstructions = (instructionInput: string) => {
        this.deliveryInstructions = instructionInput
    }

    @action
    initializeFolderForm = (): void => {
        this.requestState.modal = ModalTypes.create
        this.folderForm = new FolderForm(this.filteredFolderNames)
    }

    @action
    initializeRequesetForm = (): void => {
        this.requestState.modal = ModalTypes.submit
        this.requestForm = new RequestForm()
    }

    @action
    createFolder = (): void => {
        this.folders.push({
            BoxID: this.requestState.box.BoxIdBarCode,
            FolderName: this.folderForm.folderName,
            FolderIdBarCode: this.folders.length + 1,
            Location: this.requestState.box.Location,
            Folder_Description: "",
        })
        this.requestState.modal = ModalTypes.none
    }

    @action
    submitRequest = () => {
        this.requestState.clearCart()
        this.requestState.modal = ModalTypes.none
    }

    @action
    determineCheckoutType = (item: IFolderOrBox): string => {
        return this.canAddItem(item)
            ? "+ Add Item to Checkout"
            : this.inYourPossession(item)
                ? "- In Your Possession"
                : "- Item Not Available"
    }

    canAddItem = (item: IFolderOrBox): boolean => {
        return (
            item.Location.startsWith("L") ||
            item.BoxID === Number(item.Location)
        )
    }
    inYourPossession = (item: IFolderOrBox): boolean => {
        return item.Location === String(this.requestState.department)
    }
    @action
    itemInCheckout = (item: IFolderOrBox): boolean =>
        this.requestState.cartContains(item)
}
