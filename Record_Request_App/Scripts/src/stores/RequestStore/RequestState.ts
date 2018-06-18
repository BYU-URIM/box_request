import { ModalTypes } from "../../models"
import { observable, computed, action } from "mobx"
import { RequestStore } from "./RequestStore"
import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"

export class RequestState {
    constructor(
        private requestStore: RequestStore,
        private _folders: Array<IFolder>,
        private _boxes: Array<IBox>
    ) {}

    @observable private _modal: ModalTypes = ModalTypes.none
    @observable private _department: number = undefined
    @observable private _box: IBox = undefined
    @observable private _folder: IFolder = undefined

    @observable
    private _cart: Map<number, IFolderOrBox> = observable.map<number, IFolderOrBox>()
    @action
    addToCart = (item: IFolderOrBox) =>
        this._cart.set(
            item.BoxIdBarCode ? item.BoxIdBarCode : item.FolderIdBarCode,
            item
        )
    @action clearCart = () => this._cart.clear()
    @action removeFromCart = (itemKey: number) => this._cart.delete(itemKey)

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this._cart.values())
    }

    @computed
    get modal(): ModalTypes {
        return this._modal
    }

    set modal(val: ModalTypes) {
        if (val === ModalTypes.create) this.requestStore.initializeFolderForm()
        this._modal = val
    }

    @computed
    get department(): number {
        return this._department
    }

    set department(val: number) {
        this.box = undefined
        this.folder = undefined
        this._department = val
    }

    @computed
    get box(): IBox {
        return this._box
    }

    set box(val: IBox) {
        this._box = val
    }

    @computed
    get folder(): IFolder {
        return this._folder
    }

    set folder(val: IFolder) {
        this._folder = val
    }

    @computed
    get boxes(): Array<IBox> {
        return this._boxes
            .filter(box => box.DepId === this.department)
            .map(box => ({
                ...box,
                inCart: this.cartContains(box),
            }))
    }

    @computed
    get folders(): Array<IFolder> {
        return (
            this.box &&
            this._folders
                .filter(
                    (folder: IFolder) => folder.BoxID === this.box.BoxIdBarCode
                )
                .map(folder => ({
                    ...folder,
                    inCart: this.cartContains(folder),
                }))
        )
    }

    @action
    cartContains = (item: IFolderOrBox): boolean => {
        if (item.FolderIdBarCode) {
            return (
                this._cart.has(item.BoxID) ||
                this._cart.has(item.FolderIdBarCode)
            )
        } else {
            return this._cart.has(item.BoxIdBarCode)
        }
    }
}
