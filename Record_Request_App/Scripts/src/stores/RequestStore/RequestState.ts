import { ModalTypes, CheckoutTypes } from "../../models"
import { observable, computed, action } from "mobx"
import { RequestStore } from "./RequestStore"
import {
    IBox,
    IFolder,
    IFolderOrBox,
    IDepartmentList,
    IDepartmentArrList,
    IUser,
} from "../../models/StoreModels"
import { mockUser } from "../../res"
import { MessageBarType } from "office-ui-fabric-react";

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
    @observable private _dialogMessage: string = ""
    @observable private _msgBarMessage: string = ""
    @observable private _user: IUser = mockUser
    @observable private _mBarType: MessageBarType = undefined
    @observable private _checkoutType: CheckoutTypes = CheckoutTypes.request
    @observable private _hiddenDialog: boolean = false
    @observable
    private _cart: Map<number, IFolderOrBox> = observable.map<
        number,
        IFolderOrBox
    >()

    @action
    addToCart = (item: IFolderOrBox) => {
        if (!item.FolderIdBarCode) this.removeChildFoldersMessage(item)

        this._cart.set(
            item.FolderIdBarCode ? item.FolderIdBarCode : item.BoxIdBarCode,
            item
        )
        this.removeGroupedFoldersMessage(item)
    }
    @action clearCart = () => this._cart.clear()
    @action removeFromCart = (itemKey: number) => this._cart.delete(itemKey)

    @computed
    get hiddenDialog(): boolean {
        return this._hiddenDialog
    }
    set hiddenDialog(val: boolean) {
        this._hiddenDialog = val
    }

    @computed
    get dialogMessage(): string {
        return this._dialogMessage
    }
    set dialogMessage(val: string) {
        this._dialogMessage = val
    }

    @computed
    get msgBarMessage(): string {
        return this._msgBarMessage
    }
    set msgBarMessage(val: string) {
        this._msgBarMessage = val
    }

    @computed
    get mBarType(): MessageBarType {
        return this._mBarType
    }
    set mBarType(val: MessageBarType) {
        this._mBarType = val
    }

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this._cart.values()).sort(
            (a, b) => a.BoxIdBarCode - b.BoxIdBarCode
        )
    }

    @computed
    get checkoutType(): CheckoutTypes {
        return this._checkoutType
    }
    set checkoutType(val: CheckoutTypes) {
        this._checkoutType = val
    }

    @computed
    get modal(): ModalTypes {
        return this._modal
    }
    set modal(val: ModalTypes) {
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
    get sortBoxes(): Array<IBox> {
        return this.boxes.sort(function(a, b) {
            return a.BoxIdBarCode - b.BoxIdBarCode
        })
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
        let depList = []
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
    get userDepartments(): any {
        let depList = this.uniqueDepartments
        let userDeps = []

        depList.forEach(department => {
            if (this._user.departments.find(depId => depId === department.id)) {
                userDeps.push({ name: department.name, id: department.id })
            }
        })
        return userDeps
    }

    @computed
    get _closeDialog(): boolean {
        return
            this._dialogMessage.length === 0 ? this.hiddenDialog = true : ""
    }

    @computed
    get _openDialog(): boolean {
        return 
            this._dialogMessage.length !== 0 ? this.hiddenDialog = false : ""
    }

    @computed
    get dropdownInfo(): any {
        let info = {
            style: "",
            title: "",
            disabled: false,
            selectedKey: undefined,
        }
        if (this.userDepartments.length === 1) {
            info.disabled = true
            this.onlyDepartment()
            info.selectedKey = this.userDepartments[0].id
        }
        if (this.department) {
            info.style = "ms-Grid-col ms-sm2  ms-smPush1"
            info.title = "Your Department:"
        } else {
            info.style = "ms-Grid-col ms-sm4 ms-smPush4"
            info.title = "Select one of your available departments:"
        }

        return info
    }

    @action
    onlyDepartment = (): any => {
        this.department = this.userDepartments[0].id
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
    removeChildFoldersMessage = (box: IFolderOrBox) => {
        this.cart.map(item => {
            if (
                item.BoxIdBarCode !== undefined &&
                item.BoxIdBarCode === box.BoxIdBarCode
            ) {
                this._dialogMessage = `You just added Box ${
                    box.BoxIdBarCode
                }. Would you like to remove Box ${
                    box.BoxIdBarCode
                }'s folder(s) from checkout?`
                this.mBarType = MessageBarType.warning
            } else {
                false
            }
        })
    }

    @action
    clearMessage = () => {
        this.dialogMessage = ""
        this.msgBarMessage = ""
    }

    @action
    removeChildFolders = (selectedBox: IBox) => {
        this.countChildFolders(selectedBox) >= 5 ? this.addToCart(selectedBox) : "" 
        this.cart.map(checkedItem => {
            checkedItem.BoxIdBarCode === selectedBox.BoxIdBarCode ? this.removeFromCart(checkedItem.FolderIdBarCode) : ""
        })
        this.clearMessage()
    }

    @action
    removeGroupedFoldersMessage = (folder: IFolderOrBox) => {
        if (this.countChildFolders(folder) >= 5) {
            this._dialogMessage = `You just added 5 folders from Box ${
                this.box.BoxIdBarCode
            }. We recommend that you checkout the box instead. Would you like to remove these folders and check out Box ${
                this.box.BoxIdBarCode
            }?`
            this.mBarType = MessageBarType.warning
        }
    }

    @action
    countChildFolders = (parentBox: IFolderOrBox): number => {
        let folderCount = 0
        this.cart.map(item => {
            item.BoxIdBarCode === parentBox.BoxIdBarCode ? folderCount++ : ""
        })
        return folderCount
    }

    @action 
    removeParentBox = (parentBox: IFolderOrBox) => {
        this.clearMessage()
        this.removeFromCart(parentBox.BoxIdBarCode)
    }
}
