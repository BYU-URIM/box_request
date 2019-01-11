import { computed, observable, action } from "mobx"
import { Folder, Box, FormTypes, RootStore } from ".."

export type CheckoutItem = Box | Folder

export class CheckoutStore {
    constructor(private _root: RootStore) {}
/* 
Items are placed into a map object, for ease of working with two different objects--folders and boxes.
*/
    @observable
    private _items: Map<number, CheckoutItem> = observable.map()

/*
    This function sorts the list items by box ID; if item is a folder, it's sorted by its parent box ID.
*/
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
/*
    Returns all items in checkout.
*/
    @computed
    get items(): Map<number, CheckoutItem> {
        return this._items
    }
/*
    Sets the items in checkout.
*/
    set items(_items: Map<number, CheckoutItem>) {
        this._items = _items
    }

/*
    Controls whether or not the cart can be submitted dependent on whether or not there's an item in the cart.
*/    
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
