import { computed, observable, action } from "mobx"
import { IFolderOrBox, ModalTypes } from "../../models"
import { RootStore } from "../RootStore"
import { RequestForm } from ".."

export class CheckoutStore {
    constructor(_root: RootStore) {
        this.root = _root
    }

    root: RootStore

    @observable
    private _items: Map<number, IFolderOrBox> = observable.map()

    @computed
    get cart(): Array<IFolderOrBox> {
        return Array.from(this.items.values()).sort((a, b) => a.BoxId - b.BoxId)
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
        this.root.uiStore.modal = ModalTypes.submit
        this.root.uiStore.requestForm = new RequestForm()
    }
}
