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
                    folder.BoxId === this.requestState.box.BoxId
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
            BoxId: this.requestState.box.BoxId,
            FolderName: this.folderForm.folderName,
            FolderId: this.folders.length + 1,
            CurrentFolderLocation: String(this.requestState.box.BoxId),
            FolderDescription: "",
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
        return !!item.FolderId
            ? this.determineFolderStatus(item as IFolder)
            : this.determineBoxStatus(item.BoxId)
    }

    @action
    determineBoxStatus = (_boxId?: number): ItemStatusTypes => {
        const box = this.boxes.find(_b => _b.BoxId === _boxId)
        return box.CurrentLocation === String(box.DeptId)
            ? ItemStatusTypes.checkedOutByClient
            : box.CurrentLocation.toLowerCase().startsWith("l") &&
              box.CurrentLocation.toLowerCase() !== "legal"
                ? ItemStatusTypes.available
                : ItemStatusTypes.unavailable
    }

    @action
    determineFolderStatus = (_folder: IFolder): ItemStatusTypes => {
        if (_folder.CurrentFolderLocation === String(_folder.BoxId)) {
            return this.determineBoxStatus(_folder.BoxId) ===
                ItemStatusTypes.available
                ? ItemStatusTypes.available
                : this.determineBoxStatus(_folder.BoxId) ===
                  ItemStatusTypes.notAvailable
                    ? ItemStatusTypes.notAvailable
                    : ItemStatusTypes.checkedOutByClient
        } else if (_folder.CurrentFolderLocation.toLowerCase() === "legal") {
            return ItemStatusTypes.unavailable
        } else {
            return ItemStatusTypes.checkedOutByClient
        }
    }

    @action
    checkParentBox = (item: IFolderOrBox): boolean => {
        let x: boolean
        this.boxes.map(box => {
            if (box.BoxId === item.BoxId) {
                box.CurrentLocation.startsWith("L") ? (x = true) : (x = false)
            }
        })
        return x
    }

    canAddItem = (item: IFolderOrBox): boolean => {
        return (
            item.CurrentLocation.startsWith("L") ||
            item.BoxId === Number(item.CurrentLocation)
        )
    }

    @action
    canAddItemToCart = (item: IFolderOrBox): boolean => {
        if (this.requestState.cartContains(item)) {
            return false
        }
        if (
            this.determineItemStatus(item) === ItemStatusTypes.available
        ) {
            return true
        }
        return false
    }
    inYourPossession = (item: IFolderOrBox): boolean => {
        return item.CurrentLocation === String(this.sessionStore.department)
    }
}
