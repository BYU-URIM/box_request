import { action, observable, computed } from "mobx"
import { IFolder, IFolderOrBox, IBox } from "../../models/StoreModels"
import { ModalTypes, ItemStatusTypes } from "../../models"
import { RootStore } from "../RootStore/RootStore"
import { FolderForm } from "./FolderForm"
import { RequestForm } from "./RequestForm"
import { RequestState } from "./RequestState"
import { MessageBarType } from "office-ui-fabric-react"
import { SessionStore } from "../SessionStore/SessionStore"
export class RequestStore {
    sessionStore: SessionStore
    @observable
    boxes: Array<IBox>
    @observable
    folders: Array<IFolder>

    @observable
    folderForm: FolderForm
    @observable
    requestForm: RequestForm
    @observable
    requestState: RequestState

    constructor(
        folders: Array<IFolder>,
        boxes: Array<IBox>,
        private root: RootStore
    ) {
        this.boxes = boxes
        this.folders = folders
        this.sessionStore = root.sessionStore
        this.requestState = new RequestState(
            this.sessionStore,
            this.folders,
            this.boxes
        )
    }

    init = async () => {
        return
    }

    @computed
    get filteredFolderNames(): Array<string> {
        return this.folders
            .filter(
                (folder: IFolder) =>
                    folder.BoxIdBarCode === this.requestState.box.BoxIdBarCode
            )
            .map(folder => folder.FolderName.toLowerCase())
    }

    @action
    initializeFolderForm = (): void => {
        this.requestState.modal = ModalTypes.create
        this.folderForm = new FolderForm(this.filteredFolderNames)
    }

    @action
    initializeRequestForm = (): void => {
        this.requestState.modal = ModalTypes.submit
        this.requestForm = new RequestForm()
    }

    @action
    createFolder = (): void => {
        this.folders.push({
            BoxIdBarCode: this.requestState.box.BoxIdBarCode,
            FolderName: this.folderForm.folderName,
            FolderIdBarCode: this.folders.length + 1,
            Location: String(this.requestState.box.BoxIdBarCode),
            Folder_Description: "",
        })
        if (!this.requestState.cartContains(this.requestState.box)) {
            this.requestState.addToCart(this.folders[this.folders.length - 1])
        }
        this.requestState.modal = ModalTypes.none
    }

    @action
    submitRequest = (): void => {
        this.requestState.clearCart()
        this.requestState.modal = ModalTypes.none
        this.requestState.mBarType = MessageBarType.success
        this.requestState.msgBarMessage =
            "Thank you. Your order has been submitted."
    }

    @action
    determineItemStatus = (item: IFolderOrBox): string => {
        return !!item.FolderIdBarCode
            ? this.determineFolderStatus(item as IFolder)
            : this.determineBoxStatus(item.BoxIdBarCode)
    }

    @action
    determineBoxStatus = (_boxId?: number): ItemStatusTypes => {
        const box = this.boxes.find(_b => _b.BoxIdBarCode === _boxId)
        return box.Location === String(box.DepId)
            ? ItemStatusTypes.checkedOutByClient
            : box.Location.toLowerCase().startsWith("l") &&
              box.Location.toLowerCase() !== "legal"
                ? ItemStatusTypes.available
                : ItemStatusTypes.unavailable
    }

    @action
    determineFolderStatus = (_folder: IFolder): ItemStatusTypes => {
        if (_folder.Location === String(_folder.BoxIdBarCode)) {
            return this.determineBoxStatus(_folder.BoxIdBarCode) ===
                ItemStatusTypes.available
                ? ItemStatusTypes.available
                : this.determineBoxStatus(_folder.BoxIdBarCode) ===
                  ItemStatusTypes.notAvailable
                    ? ItemStatusTypes.notAvailable
                    : ItemStatusTypes.checkedOutByClient
        } else if (_folder.Location.toLowerCase() === "legal") {
            return ItemStatusTypes.unavailable
        } else {
            return ItemStatusTypes.checkedOutByClient
        }
    }

    @action
    checkParentBox = (item: IFolderOrBox): boolean => {
        let x: boolean
        this.boxes.map(box => {
            if (box.BoxIdBarCode === item.BoxIdBarCode) {
                box.Location.startsWith("L") ? (x = true) : (x = false)
            }
        })
        return x
    }

    canAddItem = (item: IFolderOrBox): boolean => {
        return (
            item.Location.startsWith("L") ||
            item.BoxIdBarCode === Number(item.Location)
        )
    }

    @action
    canAddItemToCart = (item: IFolderOrBox): boolean => {
        if (this.requestState.cartContains(item)) {
            return false
        }
        if (this.determineItemStatus(item) === ItemStatusTypes.available) {
            return true
        }
        return false
    }
    inYourPossession = (item: IFolderOrBox): boolean => {
        return item.Location === String(this.sessionStore.department)
    }
}
