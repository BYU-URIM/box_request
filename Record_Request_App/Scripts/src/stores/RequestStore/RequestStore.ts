import { action, observable, computed, ObservableMap } from "mobx"
import { IBoxArr, IFolderArr } from "../../res"
import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"
import { ModalTypes } from "../../models"
import { RootStore } from "../RootStore/RootStore"
import { FolderForm } from "./FolderForm"
import { RequestForm } from "./RequestForm"
import { RequestState } from "./RequestState"
import { SessionStore } from "../SessionStore/SessionStore"
export class RequestStore {
    sessionStore: SessionStore
    @observable boxes: IBoxArr
    @observable folders: IFolderArr

    @observable folderForm: FolderForm
    @observable requestForm: RequestForm
    @observable requestState: RequestState

    constructor(folders: IFolderArr, boxes: IBoxArr, private root: RootStore) {
        this.boxes = boxes
        this.folders = folders
        this.sessionStore = root.sessionStore
    }

    init = async () => {
        this.requestState = await new RequestState(
            this.sessionStore,
            this.folders,
            this.boxes
        )

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
            Location: this.requestState.box.Location,
            Folder_Description: "",
        })
        this.requestState.addToCart(this.folders[this.folders.length - 1])
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
            ? "+ Request"
            : this.inYourPossession(item)
                ? "- In Your Possession"
                : "- Item Not Available"
    }

    canAddItem = (item: IFolderOrBox): boolean => {
        return (
            item.Location.startsWith("L") ||
            item.BoxIdBarCode === Number(item.Location)
        )
    }
    inYourPossession = (item: IFolderOrBox): boolean => {
        return item.Location === String(this.sessionStore.department)
    }
    @action
    itemInCheckout = (item: IFolderOrBox): boolean =>
        this.requestState.cartContains(item)
}
