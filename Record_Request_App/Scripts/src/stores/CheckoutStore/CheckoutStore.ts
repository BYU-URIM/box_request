import { computed, observable, action } from "mobx"
import { Folder, Box, FormTypes, RootStore } from ".."

export type CheckoutItem = Box | Folder

export class CheckoutStore {
    constructor(private _root: RootStore) {}

    // items is a map object used to store items in the checkout cart 
    @observable
    private _items: Map<number, CheckoutItem> = observable.map()

    // the cart function sorts the cart items by id, starting from smallest to greatest id number
    @computed
    get cart(): Array<CheckoutItem> {
        return Array.from(this.items.values()).sort((a, b) => a.BoxId - b.BoxId)
    }

    // Method to access just the folders in the map object
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

    // the cart is only visible when an item has been added to it
    @computed
    get cartIsValid(): boolean {
        return this.cart.length > 0
    }

    // empties the map object
    @action
    clearCart = () => {
        this.items.clear()
    }

    // when ready to submit cart, call the Form associated with submitting the cart
    @action
    initializeRequestForm = (): void => {
        this._root.uiStore.form = FormTypes.SUBMIT_CART
    }
}
