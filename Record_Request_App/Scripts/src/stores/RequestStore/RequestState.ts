import { ModalTypes } from "../../models"
import { observable, computed, action } from "mobx"
import { IBox, IFolder, IFolderOrBox } from "../../models/StoreModels"
import { SessionStore } from "../SessionStore/SessionStore"

export class RequestState {
    sessionStore: SessionStore
    constructor(
        _sessionStore: SessionStore,
        private _folders: Array<IFolder>,
        private _boxes: Array<IBox>
    ) {
        this.sessionStore = _sessionStore
    }

    @observable private _modal: ModalTypes = ModalTypes.none
    @observable private _box: IBox = undefined
    @observable private _folder: IFolder = undefined
    @observable private _message: string = ""

    @observable
    private _cart: Map<number, IFolderOrBox> = observable.map<
        number,
        IFolderOrBox
    >()
    @action
    addToCart = (item: IFolderOrBox) => {
        if (!item.FolderIdBarCode) this.removeChildFolders(item)

        this._cart.set(
            item.FolderIdBarCode ? item.FolderIdBarCode : item.BoxIdBarCode,
            item
        )
        this.removeGroupedFolders(item)
    }
    @action clearCart = () => this._cart.clear()
    @action removeFromCart = (itemKey: number) => this._cart.delete(itemKey)

    @computed
    get message(): string {
        return this._message
    }
    set message(val: string) {
        this._message = val
    }

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this._cart.values()).sort(
            (a, b) => a.BoxIdBarCode - b.BoxIdBarCode
        )
    }

    @computed
    get modal(): ModalTypes {
        return this._modal
    }
    set modal(val: ModalTypes) {
        this._modal = val
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
            .filter(box => box.DepId === this.sessionStore.departmentId)
            .map(box => ({
                ...box,
                inCart: this.cartContains(box),
            }))
    }

    @computed
    get sortBoxes(): Array<IBox> {
        return this.boxes.sort((a, b) => a.BoxIdBarCode - b.BoxIdBarCode)
    }

    @computed
    get folders(): Array<IFolder> {
        return (
            this.box &&
            this._folders
                .filter(
                    (folder: IFolder) =>
                        folder.BoxIdBarCode === this.box.BoxIdBarCode
                )
                .map(folder => ({
                    ...folder,
                    inCart: this.cartContains(folder),
                }))
        )
    }

    @computed
    get uniqueDepartments(): any {
        const depList = []
        this._boxes.forEach(boxItem => {
            if (!depList.find(box => box.id === boxItem.DepId)) {
                depList.push({
                    name: boxItem.DepartmentName,
                    id: boxItem.DepId,
                })
            }
        })
        return depList
    }

    @computed
    get dropdownInfo(): any {
        const info = {
            style: "",
            title: "",
            disabled: false,
            selectedKey: undefined,
        }
        if (this.sessionStore.userDepartments.length === 1) {
            info.disabled = true
            info.selectedKey = this.sessionStore.userDepartments[0].id
        }
        if (this.sessionStore.department) {
            info.style = "ms-Grid-col ms-sm2  ms-smPush1"
            info.title = "Your Department:"
        } else {
            info.style = "ms-Grid-col ms-sm4 ms-smPush4"
            info.title = "Select one of your available departments:"
        }

        return info
    }

    @action
    cartContains = (item: IFolderOrBox): boolean => {
        if (item.FolderIdBarCode) {
            return (
                this._cart.has(item.BoxIdBarCode) ||
                this._cart.has(item.FolderIdBarCode)
            )
        } else {
            return this._cart.has(item.BoxIdBarCode)
        }
    }

    @action
    removeChildFolders = (box: IFolderOrBox) => {
        this.cart.map(item => {
            if (
                item.BoxIdBarCode !== undefined &&
                item.BoxIdBarCode === box.BoxIdBarCode
            ) {
                this.removeFromCart(item.FolderIdBarCode)
                this._message = `Box ${
                    box.BoxIdBarCode
                }, the item you just added, removed and replaced its child folders.`
            }
        })
    }

    @action
    removeGroupedFolders = (folder: IFolderOrBox) => {
        if (this.countChildFolders(folder) >= 5) {
            this.cart.forEach(item => {
                if (item.BoxIdBarCode === folder.BoxIdBarCode) {
                    this.removeFromCart(item.FolderIdBarCode)
                }
            })
            this.addToCart(this.box)
            this._message = `Because you added more than 5 folders from Box ${
                this.box.BoxIdBarCode
            }, we removed and replaced those folders with their parent box.`
        }
    }

    @action
    countChildFolders = (folder: IFolderOrBox): number => {
        let folderCount = 0
        this.cart.forEach(item => {
            if (
                item.BoxIdBarCode !== undefined &&
                item.BoxIdBarCode === folder.BoxIdBarCode
            ) {
                folderCount++
            }
        })
        return folderCount
    }
}
