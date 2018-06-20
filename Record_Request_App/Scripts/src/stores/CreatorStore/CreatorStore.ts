import { RootStore } from "../RootStore/RootStore"
import { computed, observable, action } from "mobx"

export class CreatorStore {
    constructor(private _root: RootStore) {}
    @action
    init = async () => {
        return
    }
}
