import { computed, observable, action } from "mobx"
import { IBox, IFolder, IFolderOrBox } from "../../models"
import { Box } from ".."
import { Folder } from "../DataStore/Folder"

export class CheckoutStore {
    @observable
    private _boxes: Array<Box> = []
    @observable
    private _folders: Array<Folder> = []

    @observable
    private _items: Map<number, IFolderOrBox> = observable.map<
        number,
        IFolderOrBox
    >()

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
    @computed
    get boxes(): Array<Box> {
        return this._boxes
    }

    set boxes(value: Array<Box>) {
        this._boxes = value
    }

    @computed
    get folders(): Array<Folder> {
        return this._folders
    }

    set folders(value: Array<Folder>) {
        this._folders = value
    }

    @action
    clearCart = () => {
        this.boxes = []
        this.folders = []
    }

    @action
    addToCart = (key: number, item: IFolderOrBox) => {
        // if (!item.FolderId) this.removeChildFoldersMessage(item)
        this.items = this.items.set(key, item)
        // this.removeGroupedFoldersMessage(item)
    }

    @action
    removeFromCart = (itemKey: number) => this._items.delete(itemKey)
}
