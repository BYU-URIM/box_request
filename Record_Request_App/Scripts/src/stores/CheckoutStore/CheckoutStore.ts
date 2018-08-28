import { computed, observable, action } from "mobx"
import { IFolderOrBox, ModalTypes } from "../../models"
import { RootStore } from "../RootStore"
import { RequestForm, Folder } from ".."

export class CheckoutStore {
    constructor(private _root: RootStore) {}

    @observable
    private _items: Map<number, IFolderOrBox> = observable.map()

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this.items.values()).sort((a, b) => a.BoxId - b.BoxId)
    }

    @computed
    get folders(): Array<Folder> {
        return this.cart.filter(_item => _item.FolderId) as Array<Folder>
    }

    @computed
    get items(): Map<number, IFolderOrBox> {
        return this._items
    }

    set items(value: Map<number, IFolderOrBox>) {
        this._items = value
    }

    @action
    clearCart = () => {
        this.items.clear()
    }

    @action
    initializeRequestForm = (): void => {
        this._root.uiStore.modal = ModalTypes.submit
        this._root.uiStore.requestForm = new RequestForm()
    }
}
