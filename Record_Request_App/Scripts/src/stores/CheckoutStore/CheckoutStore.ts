import { computed, observable, action } from "mobx"
import { Folder, Box, FormTypes, RootStore } from ".."

export type CheckoutItem = Box | Folder

export class CheckoutStore {
    constructor(private _root: RootStore) {}

    @observable
    private _items: Map<number, CheckoutItem> = observable.map()

    @computed
    get cart(): Array<CheckoutItem> {
        return Array.from(this.items.values()).sort((a, b) => a.BoxId - b.BoxId)
    }

    @computed
    get folders(): Array<Folder> {
        return this.cart.filter((_item: CheckoutItem) => {
            return _item instanceof Folder
        }) as Array<Folder>
    }

    @computed
    get items(): Map<number, CheckoutItem> {
        return this._items
    }

    set items(_items: Map<number, CheckoutItem>) {
        this._items = _items
    }

    @computed
    get cartIsValid(): boolean {
        return this.cart.length > 0
    }

    @action
    clearCart = () => {
        this.items.clear()
    }

    @action
    initializeRequestForm = (): void => {
        this._root.uiStore.form = FormTypes.SUBMIT_CART
    }
}
